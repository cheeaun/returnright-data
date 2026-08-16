#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const AS_JSON = process.argv.includes("--json");
const TOP_WINDOWS_LIMIT = 8;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const SNAPSHOT_PATH = path.join(ROOT, "data", "latest.json");

const DAY_ORDER = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const GLYPHS = ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"];

function fmt(n) {
  return Number(n).toLocaleString("en-US");
}

function pct(n, total) {
  return total ? `${((n / total) * 100).toFixed(1)}%` : "—";
}

function toMinutes(hour, minute, ampm) {
  let h = hour % 12;
  if (ampm === "PM") h += 12;
  return h * 60 + minute;
}

function fmtClock(minutes) {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

function expandDays(part) {
  const tokens = part
    .replace(/&\s*PH/gi, "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const days = new Set();
  for (const token of tokens) {
    const range = token.match(/^(\w+)\s*-\s*(\w+)$/);
    if (range) {
      const a = DAY_ORDER.indexOf(range[1]);
      const b = DAY_ORDER.indexOf(range[2]);
      if (a === -1 || b === -1) continue;
      if (a <= b) {
        for (let i = a; i <= b; i++) days.add(i);
      } else {
        for (let i = a; i < 7; i++) days.add(i);
        for (let i = 0; i <= b; i++) days.add(i);
      }
    } else {
      const idx = DAY_ORDER.indexOf(token);
      if (idx !== -1) days.add(idx);
    }
  }
  return [...days].sort((a, b) => a - b);
}

function parseOpeningHours(str) {
  const parts = str.split(",").map((s) => s.trim());
  const merged = [];
  let pending = [];
  for (const part of parts) {
    if (part.includes(":")) {
      merged.push([...pending, part].join(", "));
      pending = [];
    } else {
      pending.push(part);
    }
  }
  if (pending.length) merged.push(pending.join(", "));

  const perDay = Array.from({ length: 7 }, () => []);
  for (const segment of merged) {
    const match = segment.match(/^(.*?):\s*(.+)$/);
    if (!match) continue;
    const days = expandDays(match[1]);
    const timePart = match[2];
    if (timePart.includes("24 Hrs")) {
      for (const day of days) perDay[day].push([0, 1440]);
      continue;
    }
    const t = timePart.match(/(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)/);
    if (!t) continue;
    const start = toMinutes(+t[1], +t[2], t[3]);
    let end = toMinutes(+t[4], +t[5], t[6]);
    if (end === 0 && start > 0) end = 1440;
    for (const day of days) perDay[day].push([start, end]);
  }
  return perDay;
}

function modeOf(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) || 0) + 1);
  let best;
  let bestCount = 0;
  for (const value of [...counts.keys()].sort((a, b) => a - b)) {
    if (counts.get(value) > bestCount) {
      best = value;
      bestCount = counts.get(value);
    }
  }
  return best;
}

function intervalKey(intervals) {
  return intervals.map(([s, e]) => `${s}-${e}`).join(",") || "-";
}

function describeSchedule(perDay) {
  const groups = [];
  let i = 0;
  while (i < 7) {
    const key = intervalKey(perDay[i]);
    let j = i;
    while (j + 1 < 7 && intervalKey(perDay[j + 1]) === key) j++;
    groups.push({ from: i, to: j, key });
    i = j + 1;
  }
  return groups
    .map(({ from, to, key }) => {
      const days = from === to ? DAY_ORDER[from] : `${DAY_ORDER[from]}–${DAY_ORDER[to]}`;
      if (key === "-") return `${days} closed`;
      return `${days} ${perDay[from].map(([s, e]) => `${fmtClock(s)}–${fmtClock(e)}`).join(", ")}`;
    })
    .join(" · ");
}

function sparkline(values) {
  const max = Math.max(...values);
  return values.map((v) => GLYPHS[Math.min(7, Math.floor((v / max) * 8))]).join("");
}

function bar(count, max) {
  return "█".repeat(Math.max(1, Math.round((count / max) * 20)));
}

function parseAll(items) {
  const machines = [];
  let open24 = 0;
  let limited = 0;
  let unknown = 0;
  for (const item of items) {
    const base = {
      id: item.id,
      name: item.locationName || "(unnamed)",
      postal: item.postalCode || item.zipcode || "n/a",
      raw: (item.rvmOpeningHours || "").trim(),
    };
    if (!base.raw) {
      machines.push({ ...base, kind: "unknown", perDay: null, openDays: 0 });
      unknown++;
      continue;
    }
    if (base.raw.includes("24 Hrs")) {
      machines.push({ ...base, kind: "24h", perDay: null, openDays: 7 });
      open24++;
      continue;
    }
    const parsed = parseOpeningHours(base.raw);
    if (parsed.every((day) => day.length === 0)) {
      machines.push({ ...base, kind: "unknown", perDay: null, openDays: 0 });
      unknown++;
      continue;
    }
    const perDay = parsed.map((day) => [...day].sort((a, b) => a[0] - b[0]));
    machines.push({
      ...base,
      kind: "limited",
      perDay,
      openDays: perDay.filter((day) => day.length > 0).length,
    });
    limited++;
  }
  return { machines, counts: { open24, limited, unknown } };
}

function analyze({ machines, counts }) {
  const total = machines.length;
  const dayOpen = Array(7).fill(0);
  const availability = Array.from({ length: 7 }, () => Array(24).fill(0));
  const dayIntervals = Array.from({ length: 7 }, () => []);
  const openDaysHist = new Map();
  const windows = new Map();
  const varying = [];

  for (const m of machines) {
    if (m.kind !== "unknown") {
      openDaysHist.set(m.openDays, (openDaysHist.get(m.openDays) || 0) + 1);
    }
    if (m.kind === "24h") {
      for (let d = 0; d < 7; d++) {
        dayOpen[d]++;
        for (let h = 0; h < 24; h++) availability[d][h]++;
      }
      continue;
    }
    if (!m.perDay) continue;
    const signature = m.perDay.map(intervalKey);
    if (new Set(signature).size > 1) varying.push(m);
    windows.set(signature[0], (windows.get(signature[0]) || 0) + 1);
    for (let d = 0; d < 7; d++) {
      const day = m.perDay[d];
      if (day.length === 0) continue;
      dayOpen[d]++;
      for (const [s, e] of day) dayIntervals[d].push([s, e]);
      for (let h = 0; h < 24; h++) {
        const start = h * 60;
        const end = start + 59;
        if (day.some(([s, e]) => s <= end && e >= start)) availability[d][h]++;
      }
    }
  }

  const perDay = DAY_ORDER.map((_, d) => {
    const peak = availability[d].reduce(
      (best, v, h) => (v > best.count ? { count: v, hour: h } : best),
      { count: 0, hour: 0 },
    );
    const starts = dayIntervals[d].map(([s]) => s);
    const ends = dayIntervals[d].map(([, e]) => e);
    return {
      day: DAY_ORDER[d],
      open: dayOpen[d],
      peak: peak.count,
      peakHour: fmtClock(peak.hour * 60),
      typicalStart: starts.length ? fmtClock(modeOf(starts)) : null,
      typicalEnd: ends.length ? fmtClock(modeOf(ends)) : null,
      availability: availability[d],
    };
  });

  return {
    total,
    counts,
    known: total - counts.unknown,
    dayOpen,
    perDay,
    openDaysHist: [...openDaysHist.entries()].sort((a, b) => a[0] - b[0]),
    varying: varying.length,
    varyingMachines: varying.sort((a, b) => a.id - b.id),
    windows: [...windows.entries()].sort((a, b) => b[1] - a[1]),
  };
}

function render(result) {
  const { counts, known, dayOpen, perDay, openDaysHist, varying, varyingMachines, windows } = result;
  const lines = [];
  const underline = (text) => lines.push("-".repeat(text.length));

  lines.push("Opening hours analysis");
  lines.push("======================");
  lines.push("");
  lines.push(
    `Coverage: ${fmt(result.total)} machines · ${fmt(counts.open24)} (${pct(counts.open24, result.total)}) open 24 hours · ${fmt(
      counts.limited,
    )} (${pct(counts.limited, result.total)}) limited hours · ${fmt(counts.unknown)} (${pct(
      counts.unknown,
      result.total,
    )}) hours unknown`,
  );
  lines.push("");

  lines.push("Open days");
  underline("Open days");
  const maxOpen = Math.max(...dayOpen);
  for (const [d, name] of DAY_ORDER.entries()) {
    const limitedOnDay = perDay[d].open - counts.open24;
    lines.push(
      `  ${name.padEnd(3)} ${String(fmt(dayOpen[d])).padStart(5)}  ${bar(dayOpen[d], maxOpen)}  (${fmt(
        counts.open24,
      )} 24h + ${fmt(limitedOnDay)} limited)`,
    );
  }
  lines.push(`  All ${fmt(known)} machines with known hours operate all 7 days a week.`);
  const openDaysText = openDaysHist
    .map(([days, n]) => `${days} days: ${n}`)
    .join(" · ");
  lines.push(`  Open-days distribution: ${openDaysText}`);
  lines.push("");

  lines.push("Per-day operation timing");
  underline("Per-day operation timing");
  lines.push("  Hourly availability (machines operating), 00:00–23:00 · scaled per day (▁ low → █ high)");
  lines.push("");
  for (const day of perDay) {
    lines.push(
      `  ${day.day.padEnd(3)} ${sparkline(day.availability)}  ${String(fmt(day.peak)).padStart(
        5,
      )} @ ${day.peakHour} · typical ${day.typicalStart ?? "—"} → ${day.typicalEnd ?? "—"}`,
    );
  }
  lines.push("");

  lines.push("Day-varying schedules");
  underline("Day-varying schedules");
  if (varyingMachines.length === 0) {
    lines.push("  None — every machine keeps the same hours every day.");
  } else {
    lines.push(`  ${varying} machines change their hours by weekday:`);
    for (const m of varyingMachines) {
      lines.push(`  - \`${m.id}\` ${m.name} (${m.postal})`);
      lines.push(`      ${describeSchedule(m.perDay)}`);
    }
  }
  lines.push("");

  lines.push("Most common weekday windows (limited machines)");
  underline("Most common weekday windows (limited machines)");
  for (const [key, n] of windows.slice(0, TOP_WINDOWS_LIMIT)) {
    const [start, end] = key.split(",")[0].split("-");
    const label = start && end ? `${fmtClock(+start)} → ${fmtClock(+end)}` : key;
    lines.push(`  ${label.padEnd(18)} ${String(n).padStart(4)}  ${bar(n, windows[0][1])}`);
  }
  if (windows.length > TOP_WINDOWS_LIMIT) {
    lines.push(`  … ${windows.length - TOP_WINDOWS_LIMIT} more distinct windows`);
  }

  return lines.join("\n");
}

async function main() {
  const raw = JSON.parse(await readFile(SNAPSHOT_PATH, "utf8"));
  const items = (Array.isArray(raw?.data) ? raw.data : []).filter(
    (item) => item && typeof item === "object" && "id" in item,
  );
  const parsed = parseAll(items);
  const result = analyze(parsed);

  if (AS_JSON) {
    process.stdout.write(
      `${JSON.stringify(
        {
          coverage: { total: result.total, ...result.counts, known: result.known },
          dayOpen: result.dayOpen,
          perDay: result.perDay.map((day) => ({
            day: day.day,
            open: day.open,
            peak: day.peak,
            peakHour: day.peakHour,
            typicalStart: day.typicalStart,
            typicalEnd: day.typicalEnd,
          })),
          openDaysHist: Object.fromEntries(result.openDaysHist),
          varying: result.varyingMachines.map((m) => ({
            id: m.id,
            name: m.name,
            postal: m.postal,
            schedule: describeSchedule(m.perDay),
          })),
          windows: result.windows.map(([key, n]) => ({ window: key, count: n })),
        },
        null,
        2,
      )}\n`,
    );
    return;
  }

  process.stdout.write(`${render(result)}\n`);
}

main().catch((error) => {
  console.error(`Failed to analyze opening hours: ${error.message}`);
  process.exit(1);
});
