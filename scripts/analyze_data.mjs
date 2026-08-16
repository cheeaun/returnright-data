#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DAILY_SUBJECT = /^Update snapshot for (\d{4}-\d{2}-\d{2})$/;
const IGNORED_CHANGE_FIELDS = new Set(["distance", "rvm_last_conn", "status", "updatedAt"]);
const AS_JSON = process.argv.includes("--json");
const MACHINE_LIST_LIMIT = 5;
const MOST_ACTIVE_LIMIT = 5;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const SNAPSHOT_PATH = path.join(ROOT, "data", "latest.json");

const MD_ARG = process.argv.indexOf("--md");
const MD_PATH =
  MD_ARG !== -1 && !AS_JSON
    ? process.argv[MD_ARG + 1] && !process.argv[MD_ARG + 1].startsWith("--")
      ? process.argv[MD_ARG + 1]
      : path.join(ROOT, "ANALYSIS.md")
    : null;

const DAY_MS = 24 * 60 * 60 * 1000;
const DAY_ORDER = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const SECTOR_DISTRICTS = [
  { sectors: ["01", "02", "03", "04", "05", "06"], district: "D01", area: "Boat Quay, Raffles Place, Marina, Cecil, People's Park" },
  { sectors: ["07", "08"], district: "D02", area: "Chinatown, Tanjong Pagar, Anson" },
  { sectors: ["14", "15", "16"], district: "D03", area: "Alexandra, Commonwealth, Queenstown, Tiong Bahru" },
  { sectors: ["09", "10"], district: "D04", area: "Harbourfront, Telok Blangah, Sentosa" },
  { sectors: ["11", "12", "13"], district: "D05", area: "Buona Vista, West Coast, Pasir Panjang, Clementi New Town" },
  { sectors: ["17"], district: "D06", area: "City Hall, Clarke Quay, High Street" },
  { sectors: ["18", "19"], district: "D07", area: "Beach Road, Bugis, Rochor, Golden Mile" },
  { sectors: ["20", "21"], district: "D08", area: "Farrer Park, Serangoon Road, Little India" },
  { sectors: ["22", "23"], district: "D09", area: "Orchard, Cairnhill, River Valley" },
  { sectors: ["24", "25", "26", "27"], district: "D10", area: "Tanglin, Ardmore, Holland, Bukit Timah" },
  { sectors: ["28", "29", "30"], district: "D11", area: "Newton, Novena, Watten Estate, Thomson" },
  { sectors: ["31", "32", "33"], district: "D12", area: "Balestier, Toa Payoh, Serangoon" },
  { sectors: ["34", "35", "36", "37"], district: "D13", area: "Macpherson, Potong Pasir, Braddell" },
  { sectors: ["38", "39", "40", "41"], district: "D14", area: "Kembangan, Eunos, Paya Lebar, Geylang" },
  { sectors: ["42", "43", "44", "45"], district: "D15", area: "East Coast, Marine Parade, Katong, Joo Chiat, Amber Road" },
  { sectors: ["46", "47", "48"], district: "D16", area: "Bedok, Upper East Coast, Eastwood, Kew Drive" },
  { sectors: ["49", "50", "81"], district: "D17", area: "Changi Airport, Changi Village, Loyang" },
  { sectors: ["51", "52"], district: "D18", area: "Pasir Ris, Tampines" },
  { sectors: ["53", "54", "55", "82"], district: "D19", area: "Serangoon Gardens, Hougang, Punggol, Sengkang" },
  { sectors: ["56", "57"], district: "D20", area: "Ang Mo Kio, Bishan, Thomson" },
  { sectors: ["58", "59"], district: "D21", area: "Clementi Park, Upper Bukit Timah, Ulu Pandan" },
  { sectors: ["60", "61", "62", "63", "64"], district: "D22", area: "Boon Lay, Jurong, Tuas" },
  { sectors: ["65", "66", "67", "68"], district: "D23", area: "Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang" },
  { sectors: ["69", "70", "71"], district: "D24", area: "Lim Chu Kang, Tengah" },
  { sectors: ["72", "73"], district: "D25", area: "Admiralty, Woodlands, Kranji, Woodgrove" },
  { sectors: ["77", "78"], district: "D26", area: "Mandai, Upper Thomson, Springleaf" },
  { sectors: ["75", "76"], district: "D27", area: "Yishun, Sembawang" },
  { sectors: ["79", "80"], district: "D28", area: "Seletar, Yio Chu Kang" },
];

const SECTOR_INFO = new Map();
for (const { sectors, district, area } of SECTOR_DISTRICTS) {
  for (const sector of sectors) SECTOR_INFO.set(sector, { district, area });
}

function sectorInfo(label) {
  const info = SECTOR_INFO.get(label.replace(/^S/, ""));
  return info ? `${info.district} · ${info.area}` : "—";
}

function toMinutes(hour, minute, ampm) {
  let h = hour % 12;
  if (ampm === "PM") h += 12;
  return h * 60 + minute;
}

function fmtClock(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
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
      if (a !== -1 && b !== -1) {
        if (a <= b) {
          for (let i = a; i <= b; i++) days.add(i);
        } else {
          for (let i = a; i < 7; i++) days.add(i);
          for (let i = 0; i <= b; i++) days.add(i);
        }
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

function hoursAnalysis(items) {
  let open24 = 0;
  let limited = 0;
  let unknown = 0;
  let openAllWeek = 0;
  const allIntervals = [];
  const perMachine = [];

  for (const item of items) {
    const str = (item.rvmOpeningHours || "").trim();
    if (!str) {
      unknown++;
      continue;
    }
    if (str.includes("24 Hrs")) {
      open24++;
      perMachine.push(null);
      continue;
    }
    const parsed = parseOpeningHours(str);
    if (!parsed || parsed.every((day) => day.length === 0)) {
      unknown++;
      continue;
    }
    limited++;
    perMachine.push(parsed);
    if (parsed.every((day) => day.length > 0)) openAllWeek++;
    for (const day of parsed) {
      for (const [start, end] of day) allIntervals.push([start, end]);
    }
  }

  const total = items.length;
  const availability = [];
  let peak = { hour: 0, average: 0 };
  for (let hour = 0; hour < 24; hour++) {
    const start = hour * 60;
    const end = start + 59;
    let machines = 0;
    for (const perDay of perMachine) {
      if (!perDay) {
        machines++;
        continue;
      }
      let days = 0;
      for (const day of perDay) {
        if (day.some(([s, e]) => s <= end && e >= start)) days++;
      }
      machines += days / 7;
    }
    const rounded = Math.round(machines);
    if (rounded > peak.average) peak = { hour, average: rounded };
    availability.push({ hour, average: rounded });
  }

  const opens = allIntervals.map(([start]) => start);
  const closes = allIntervals.map(([, end]) => end);
  const typicalStart = modeOf(opens);
  const typicalEnd = modeOf(closes);
  const earliestOpen = Math.min(...opens);
  const latestClose = Math.max(...closes);

  return {
    open24,
    limited,
    unknown,
    openAllWeek,
    availability,
    peak,
    typicalStart: fmtClock(typicalStart),
    typicalEnd: fmtClock(typicalEnd),
    earliestOpen: fmtClock(earliestOpen),
    latestClose: fmtClock(latestClose),
  };
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" });
}

function parseSnapshot(content) {
  const raw = JSON.parse(content);
  const items = (Array.isArray(raw?.data) ? raw.data : []).filter(
    (item) => item && typeof item === "object" && "id" in item,
  );
  return {
    items,
    count: items.length,
    byId: Object.fromEntries(items.map((item) => [String(item.id), { ...item }])),
  };
}

function countBy(items, keyFn) {
  const counts = new Map();
  for (const item of items) {
    const key = keyFn(item);
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b));
}

function diffCounts(previous, current) {
  const previousIds = new Set(Object.keys(previous.byId));
  const currentIds = new Set(Object.keys(current.byId));

  let added = 0;
  let removed = 0;
  let changed = 0;

  for (const id of currentIds) {
    if (!previousIds.has(id)) added++;
  }
  for (const id of previousIds) {
    if (!currentIds.has(id)) removed++;
  }
  for (const id of previousIds) {
    if (!currentIds.has(id)) continue;
    const oldItem = previous.byId[id];
    const newItem = current.byId[id];
    for (const key of new Set([...Object.keys(oldItem), ...Object.keys(newItem)])) {
      if (IGNORED_CHANGE_FIELDS.has(key)) continue;
      if (oldItem[key] !== newItem[key]) {
        changed++;
        break;
      }
    }
  }

  return { added, removed, changed };
}

function dailySnapshots() {
  const log = git(["log", "--reverse", "--format=%H%x00%s"]);
  const commits = [];
  for (const line of log.split("\n")) {
    if (!line) continue;
    const sep = line.indexOf("\0");
    if (sep === -1) continue;
    const match = line.slice(sep + 1).match(DAILY_SUBJECT);
    if (match) commits.push({ sha: line.slice(0, sep), date: match[1] });
  }
  return commits.map((commit) => {
    const content = git(["show", `${commit.sha}:data/latest.json`]).trimEnd();
    return { sha: commit.sha, date: commit.date, ...parseSnapshot(content) };
  });
}

function fmtDate(iso) {
  return new Intl.DateTimeFormat("en-SG", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}

function fmtMs(iso) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

function fmt(n) {
  return Number(n).toLocaleString("en-US");
}

function pct(n, total) {
  if (!total) return "—";
  return `${((n / total) * 100).toFixed(1)}%`;
}

function signed(n) {
  return n > 0 ? `+${n}` : `${n}`;
}

function describeMachine(item) {
  return {
    id: item.id,
    name: item.locationName || "Unnamed location",
    postal: item.postalCode || item.zipcode || "n/a",
    status: item.status || "n/a",
    createdAt: item.createdAt,
  };
}

function currentAnalysis(current, asOfMs) {
  const items = current.items;
  const nowMs = Number(asOfMs);

  const lastConnected = countBy(items, (item) => {
    const t = Date.parse(item.rvm_last_conn);
    if (!t) return "missing";
    const age = nowMs - t;
    if (age < DAY_MS) return "lt1d";
    if (age < 7 * DAY_MS) return "lt7d";
    if (age < 30 * DAY_MS) return "lt30d";
    return "ge30d";
  }).sort((a, b) => b[1] - a[1]);

  const openingHours = countBy(items, (item) => {
    const hours = item.rvmOpeningHours?.trim();
    if (!hours) return "unknown";
    if (hours.includes("24 Hrs")) return "24h";
    return "limited";
  }).sort((a, b) => b[1] - a[1]);

  const byPostal = countBy(items, (item) => item.postalCode || item.zipcode || "(none)");
  const shared = byPostal.filter(([, n]) => n > 1);
  const extraMachines = shared.reduce((sum, [, n]) => sum + n - 1, 0);

  const districts = countBy(items, (item) => {
    const code = (item.postalCode || item.zipcode || "").replace(/\D/g, "").slice(0, 2);
    return code ? `S${code}` : "(none)";
  })
    .map(([sector, count]) => {
      const info = SECTOR_INFO.get(sector.replace(/^S/, ""));
      return {
        sector,
        count,
        district: info?.district || "—",
        area: info?.area || "—",
      };
    })
    .sort((a, b) => b.count - a.count);

  const districtAggregate = countBy(items, (item) => {
    const code = (item.postalCode || item.zipcode || "").replace(/\D/g, "").slice(0, 2);
    return SECTOR_INFO.get(code)?.district || "?";
  }).sort((a, b) => b[1] - a[1]);

  const rollout = countBy(items, (item) => (item.createdAt || "").slice(0, 7)).filter(([key]) =>
    /^\d{4}-\d{2}$/.test(key),
  );

  const statuses = [...new Set(items.map((item) => item.status || "(unknown)"))].sort();
  const supplierKeys = [...new Set(items.map((item) => item.supplierId || "(none)"))].sort();
  const statusBySupplier = supplierKeys.map((supplier) => {
    const group = items.filter((item) => (item.supplierId || "(none)") === supplier);
    const row = { supplier };
    for (const status of statuses) {
      row[status] = group.filter((item) => (item.status || "(unknown)") === status).length;
    }
    row.total = group.length;
    return row;
  });

  const newest = [...items]
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, MACHINE_LIST_LIMIT)
    .map(describeMachine);
  const oldest = [...items]
    .sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt))
    .slice(0, MACHINE_LIST_LIMIT)
    .map(describeMachine);

  return {
    total: items.length,
    serials: items.filter((item) => item.serialNumber).length,
    postalCodes: byPostal.filter(([key]) => key !== "(none)").length,
    sharedPostalCodes: shared.length,
    extraMachines,
    status: countBy(items, (item) => item.status || "(unknown)").sort((a, b) => b[1] - a[1]),
    colours: countBy(items, (item) => item.coords_color || "(none)").sort((a, b) => b[1] - a[1]),
    suppliers: countBy(items, (item) => item.supplierId || "(none)").sort((a, b) => b[1] - a[1]),
    lastConnected,
    openingHours,
    hoursDetail: hoursAnalysis(items),
    districts,
    districtAggregate,
    rollout,
    statusBySupplier,
    newest,
    oldest,
  };
}

function historyAnalysis(snapshots, entries) {
  const first = snapshots[0];
  const last = snapshots.at(-1);
  const counts = snapshots.map((s) => s.count);
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  const average = counts.reduce((a, b) => a + b, 0) / counts.length;

  const totals = entries.reduce(
    (acc, { diff }) => {
      acc.added += diff.added;
      acc.removed += diff.removed;
      acc.changed += diff.changed;
      if (diff.added === 0 && diff.removed === 0 && diff.changed === 0) acc.noChangeDays++;
      return acc;
    },
    { added: 0, removed: 0, changed: 0, noChangeDays: 0 },
  );

  const monthly = new Map();
  for (const s of snapshots) {
    const month = s.date.slice(0, 7);
    const entry = monthly.get(month);
    if (entry) {
      entry.last = s.date;
      entry.end = s.count;
    } else {
      monthly.set(month, {
        month,
        first: s.date,
        last: s.date,
        start: s.count,
        end: s.count,
        added: 0,
        removed: 0,
      });
    }
  }
  for (const { date, diff } of entries) {
    const entry = monthly.get(date.slice(0, 7));
    if (entry) {
      entry.added += diff.added;
      entry.removed += diff.removed;
    }
  }

  const mostActive = entries
    .slice()
    .sort((a, b) => b.diff.added + b.diff.removed - (a.diff.added + a.diff.removed))
    .slice(0, MOST_ACTIVE_LIMIT)
    .map(({ date, count, diff }) => ({ date, count, ...diff }));

  const firstIds = new Set(Object.keys(first.byId));
  const lastIds = new Set(Object.keys(last.byId));
  const retained = [...firstIds].filter((id) => lastIds.has(id)).length;

  return {
    snapshots: snapshots.length,
    spanDays: Math.round((Date.parse(last.date) - Date.parse(first.date)) / DAY_MS) + 1,
    firstDate: first.date,
    lastDate: last.date,
    startCount: first.count,
    currentCount: last.count,
    netChange: last.count - first.count,
    minCount: min,
    minDate: snapshots.find((s) => s.count === min).date,
    maxCount: max,
    maxDate: snapshots.find((s) => s.count === max).date,
    average,
    totals,
    monthly: [...monthly.values()],
    mostActive,
    retention: retained,
    retentionPct: retained / first.count,
  };
}

function table(rows) {
  const width = Math.max(...rows.map(([label]) => label.length));
  return rows.map(([label, value]) => `${label.padEnd(width)}  ${value}`).join("\n");
}

function bar(count, max) {
  return "█".repeat(Math.max(1, Math.round((count / max) * 20)));
}

function render({ snapshot, current, history }) {
  const lines = [];
  const underline = (text, char = "-") => lines.push(char.repeat(text.length));

  lines.push("ReturnRight data analysis");
  lines.push("=".repeat(24));
  lines.push("");
  const note = snapshot.differs ? " · working tree differs from latest commit" : "";
  lines.push(
    `Snapshot: ${snapshot.date} · ${fmt(current.total)} locations · ${snapshot.source} · as of ${fmtMs(
      snapshot.asOf,
    )} UTC${note}`,
  );
  lines.push("");

  lines.push("Current snapshot");
  underline("Current snapshot");
  lines.push(
    table([
      ["Total locations", fmt(current.total)],
      ["Unique serials", fmt(current.serials)],
      ["Unique postal codes", fmt(current.postalCodes)],
      ["Shared postal codes", `${current.sharedPostalCodes} postcodes host ${current.extraMachines} extra machines`],
    ]),
  );

  lines.push("");
  lines.push("Status");
  underline("Status");
  lines.push(table(current.status.map(([label, n]) => [label, `${fmt(n)} (${pct(n, current.total)})`])).replace(/^/gm, "  "));

  lines.push("");
  lines.push("Colour");
  underline("Colour");
  lines.push(table(current.colours.map(([label, n]) => [label, fmt(n)])).replace(/^/gm, "  "));

  lines.push("");
  lines.push("Supplier");
  underline("Supplier");
  lines.push(table(current.suppliers.map(([label, n]) => [label, fmt(n)])).replace(/^/gm, "  "));

  lines.push("");
  lines.push("Last connected");
  underline("Last connected");
  const connectedLabels = {
    lt1d: "< 1 day",
    lt7d: "< 7 days",
    lt30d: "< 30 days",
    ge30d: "≥ 30 days",
    missing: "unknown",
  };
  lines.push(
    table(
      current.lastConnected.map(
        ([label, n]) => [connectedLabels[label] ?? label, `${fmt(n)} (${pct(n, current.total)})`],
      ),
    ).replace(/^/gm, "  "),
  );

  lines.push("");
  lines.push("Operation timing (opening hours)");
  underline("Operation timing (opening hours)");
  const { hoursDetail } = current;
  lines.push(
    table([
      ["24 hours", `${fmt(hoursDetail.open24)} (${pct(hoursDetail.open24, current.total)})`],
      ["limited hours", `${fmt(hoursDetail.limited)} (${pct(hoursDetail.limited, current.total)})`],
      ["unknown", `${fmt(hoursDetail.unknown)} (${pct(hoursDetail.unknown, current.total)})`],
    ]).replace(/^/gm, "  "),
  );
  if (hoursDetail.limited > 0) {
    lines.push(
      `  Limited machines: typical window ${hoursDetail.typicalStart} → ${hoursDetail.typicalEnd} · earliest open ${hoursDetail.earliestOpen} · latest close ${hoursDetail.latestClose} · ${hoursDetail.openAllWeek} open 7 days a week`,
    );
  }
  lines.push("");
  lines.push("  Hourly availability (avg machines operating)");
  for (const { hour, average } of hoursDetail.availability) {
    lines.push(
      `  ${fmtClock(hour * 60)}  ${String(average).padStart(5)}  ${bar(average, hoursDetail.peak.average)}`,
    );
  }
  lines.push(`  Peak: ${fmtClock(hoursDetail.peak.hour * 60)} (${fmt(hoursDetail.peak.average)} machines)`);

  lines.push("");
  lines.push("Status by supplier");
  underline("Status by supplier");
  const matrixRows = current.statusBySupplier;
  const matrixStatuses = Object.keys(matrixRows[0]).filter((key) => key !== "supplier" && key !== "total");
  const matrixCols = ["supplier", ...matrixStatuses, "total"];
  const matrixWidths = {};
  for (const col of matrixCols) {
    matrixWidths[col] = Math.max(col.length, ...matrixRows.map((row) => String(row[col] ?? "").length));
  }
  lines.push("  " + matrixCols.map((col) => col.padStart(matrixWidths[col])).join("  "));
  for (const row of matrixRows) {
    lines.push("  " + matrixCols.map((col) => String(row[col] ?? "").padStart(matrixWidths[col])).join("  "));
  }

  lines.push("");
  lines.push("Postal sector (2-digit prefix)");
  underline("Postal sector (2-digit prefix)");
  const districtLimit = 8;
  for (const { sector, count, district, area } of current.districts.slice(0, districtLimit)) {
    lines.push(`  ${sector.padEnd(6)} ${String(fmt(count)).padStart(5)}  ${pct(count, current.total)}  ${district} · ${area}`);
  }
  if (current.districts.length > districtLimit) {
    lines.push(`  … ${current.districts.length - districtLimit} more sectors (${current.districts.length} total)`);
  }

  lines.push("");
  lines.push("Rollout (machines by createdAt month)");
  underline("Rollout (machines by createdAt month)");
  for (const [label, n] of current.rollout) {
    lines.push(`  ${label.padEnd(7)} ${String(fmt(n)).padStart(5)}  ${pct(n, current.total)}`);
  }

  lines.push("");
  lines.push("Newest machines");
  underline("Newest machines");
  for (const [i, m] of current.newest.entries()) {
    lines.push(`  ${i + 1}. ${m.name} (${m.postal}, ${m.status}) · created ${fmtDate(m.createdAt)}`);
  }

  lines.push("");
  lines.push("Longest standing");
  underline("Longest standing");
  for (const [i, m] of current.oldest.entries()) {
    lines.push(`  ${i + 1}. ${m.name} (${m.postal}, ${m.status}) · created ${fmtDate(m.createdAt)}`);
  }

  lines.push("");
  const historyTitle = `History (${history.snapshots} snapshots · ${history.firstDate} → ${history.lastDate})`;
  lines.push(historyTitle);
  underline(historyTitle);
  lines.push(
    table([
      ["First snapshot", fmt(history.startCount)],
      ["Current snapshot", fmt(history.currentCount)],
      ["Net change", signed(history.netChange)],
      ["Minimum", `${fmt(history.minCount)} (${history.minDate})`],
      ["Maximum", `${fmt(history.maxCount)} (${history.maxDate})`],
      ["Average", fmt(Math.round(history.average))],
    ]),
  );

  lines.push("");
  lines.push("Totals across all days");
  underline("Totals across all days");
  lines.push(
    table([
      ["Added", fmt(history.totals.added)],
      ["Removed", fmt(history.totals.removed)],
      ["Changed", fmt(history.totals.changed)],
      ["No-change days", fmt(history.totals.noChangeDays)],
    ]).replace(/^/gm, "  "),
  );

  lines.push("");
  lines.push("Monthly change");
  underline("Monthly change");
  for (const m of history.monthly) {
    lines.push(
      `  ${m.month}  ${fmt(m.start)} → ${fmt(m.end)}  · +${m.added} added · −${m.removed} removed · net ${signed(
        m.end - m.start,
      )}`,
    );
  }

  lines.push("");
  lines.push("Most active days");
  underline("Most active days");
  for (const day of history.mostActive) {
    lines.push(`  ${day.date}  +${day.added} · −${day.removed} · ±${day.changed}  (${fmt(day.count)} locations)`);
  }

  lines.push("");
  lines.push(
    `Retention: ${(history.retentionPct * 100).toFixed(1)}% of the first snapshot's machines are still present (${history.retention}/${fmt(
      history.startCount,
    )}).`,
  );

  return lines.join("\n");
}

function mdTable(headers, rows) {
  const line = (cells) => `| ${cells.join(" | ")} |`;
  return [line(headers), line(headers.map(() => "---")), ...rows.map((row) => line(row.map((cell) => String(cell))))].join("\n");
}

const OKABE_ITO = [
  "#E69F00",
  "#56B4E9",
  "#009E73",
  "#F0E442",
  "#0072B2",
  "#D55E00",
  "#CC79A7",
  "#999999",
];

function pieTheme() {
  const themeVariables = {};
  for (let i = 0; i < OKABE_ITO.length; i++) themeVariables[`pie${i + 1}`] = OKABE_ITO[i];
  return { themeVariables };
}

function seriesTheme(color) {
  return { themeVariables: { xyChart: { plotColorPalette: color } } };
}

function mermaidFrontmatter(config) {
  if (!config || Object.keys(config).length === 0) return [];
  const yamlLines = (obj, indent) => {
    const lines = [];
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        lines.push(`${" ".repeat(indent)}${key}:`);
        lines.push(...yamlLines(value, indent + 2));
      } else if (typeof value === "string") {
        lines.push(`${" ".repeat(indent)}${key}: "${value}"`);
      } else {
        lines.push(`${" ".repeat(indent)}${key}: ${value}`);
      }
    }
    return lines;
  };
  return ["---", "config:", ...yamlLines(config, 2), "---"];
}

function mermaidPie(title, rows, config = {}) {
  const lines = ["```mermaid", ...mermaidFrontmatter(config), "pie showData", `    title "${title}"`];
  for (const [label, value] of rows) lines.push(`    "${label}": ${value}`);
  lines.push("```");
  return lines.join("\n");
}

function mermaidXY(title, labels, series, yTitle = "count", config = {}) {
  const values = series.flatMap((s) => s.data);
  const dataMax = Math.max(...values);
  const dataMin = Math.min(...values);
  const max = Math.max(1, Math.ceil(dataMax * 1.15));
  const min = dataMin < 0 ? Math.floor(dataMin * 1.15) : 0;
  const lines = ["```mermaid", ...mermaidFrontmatter(config), "xychart-beta", `    title "${title}"`];
  lines.push(`    x-axis [${labels.map((label) => `"${label}"`).join(", ")}]`);
  lines.push(`    y-axis "${yTitle}" ${min} --> ${max}`);
  for (const s of series) {
    lines.push(`    ${s.type}${s.name ? ` "${s.name}"` : ""} [${s.data.join(", ")}]`);
  }
  lines.push("```");
  return lines.join("\n");
}

function renderMarkdown({ snapshot, current, history }) {
  const parts = [];
  parts.push("# ReturnRight data analysis");
  parts.push("");
  parts.push(
    `_Snapshot: **${snapshot.date}** · ${fmt(current.total)} locations · \`${snapshot.source}\` · as of ${fmtMs(
      snapshot.asOf,
    )} UTC_`,
  );

  parts.push("");
  parts.push("## Current snapshot");
  parts.push("");
  parts.push(
    mdTable(
      ["Metric", "Value"],
      [
        ["Total locations", fmt(current.total)],
        ["Unique serials", fmt(current.serials)],
        ["Unique postal codes", fmt(current.postalCodes)],
        ["Shared postal codes", `${current.sharedPostalCodes} postcodes host ${current.extraMachines} extra machines`],
      ],
    ),
  );

  parts.push("");
  parts.push("### Status");
  parts.push("");
  parts.push(mermaidPie("Machines by status", current.status, pieTheme()));
  parts.push("");
  parts.push(
    mdTable(["Status", "Count", "%"], current.status.map(([label, n]) => [label, fmt(n), pct(n, current.total)])),
  );

  parts.push("");
  parts.push("### Supplier");
  parts.push("");
  parts.push(
    mermaidXY(
      "Machines by supplier",
      current.suppliers.map(([label]) => label),
      [{ type: "bar", data: current.suppliers.map(([, n]) => n) }],
      "machines",
      seriesTheme("#0072B2"),
    ),
  );
  parts.push("");
  parts.push(
    mdTable(["Supplier", "Count", "%"], current.suppliers.map(([label, n]) => [label, fmt(n), pct(n, current.total)])),
  );

  parts.push("");
  parts.push("### Last connected");
  parts.push("");
  const connectedLabels = {
    lt1d: "< 1 day",
    lt7d: "< 7 days",
    lt30d: "< 30 days",
    ge30d: "≥ 30 days",
    missing: "unknown",
  };
  parts.push(
    mdTable(
      ["Age", "Count", "%"],
      current.lastConnected.map(([label, n]) => [connectedLabels[label] ?? label, fmt(n), pct(n, current.total)]),
    ),
  );

  const { hoursDetail } = current;
  parts.push("");
  parts.push("## Operation timing (opening hours)");
  parts.push("");
  parts.push(
    mdTable(
      ["Coverage", "Machines", "%"],
      [
        ["24 hours", fmt(hoursDetail.open24), pct(hoursDetail.open24, current.total)],
        ["Limited hours", fmt(hoursDetail.limited), pct(hoursDetail.limited, current.total)],
        ["Unknown", fmt(hoursDetail.unknown), pct(hoursDetail.unknown, current.total)],
      ],
    ),
  );
  parts.push("");
  parts.push("### Hourly availability");
  parts.push("");
  const hourlyBuckets = [];
  for (let i = 0; i < hoursDetail.availability.length; i += 2) {
    const first = hoursDetail.availability[i];
    const second = hoursDetail.availability[i + 1];
    hourlyBuckets.push({
      label: `${String(first.hour).padStart(2, "0")}:00`,
      average: Math.round((first.average + (second?.average ?? first.average)) / 2),
    });
  }
  parts.push(
    mermaidXY(
      "Average machines operating (2-hour buckets)",
      hourlyBuckets.map(({ label }) => label),
      [{ type: "line", data: hourlyBuckets.map(({ average }) => average) }],
      "machines",
      { ...seriesTheme("#56B4E9"), xyChart: { width: 900 } },
    ),
  );
  parts.push("");
  parts.push(
    [
      `Typical window: **${hoursDetail.typicalStart} → ${hoursDetail.typicalEnd}**`,
      `Earliest open: **${hoursDetail.earliestOpen}**`,
      `Latest close: **${hoursDetail.latestClose}**`,
      `Peak: **${fmt(hoursDetail.peak.average)} machines** at **${fmtClock(hoursDetail.peak.hour * 60)}**`,
      `**${hoursDetail.openAllWeek}** machines with limited hours open all 7 days`,
    ]
      .map((fact) => `- ${fact}`)
      .join("\n"),
  );

  parts.push("");
  parts.push("### Status by supplier");
  parts.push("");
  const matrixRows = current.statusBySupplier;
  const matrixStatuses = Object.keys(matrixRows[0]).filter((key) => key !== "supplier" && key !== "total");
  parts.push(
    mdTable(
      ["Supplier", ...matrixStatuses, "Total"],
      matrixRows.map((row) => ["supplier", ...matrixStatuses, "total"].map((col) => row[col] ?? 0)),
    ),
  );

  parts.push("");
  parts.push("## Postal sectors & districts");
  parts.push("");
  parts.push(
    mermaidXY(
      "Machines by postal district",
      current.districtAggregate.map(([label]) => label),
      [{ type: "bar", data: current.districtAggregate.map(([, n]) => n) }],
      "machines",
      {
        ...seriesTheme("#009E73"),
        xyChart: { chartOrientation: "horizontal", plotReservedSpacePercent: 40 },
      },
    ),
  );
  parts.push("");
  parts.push("All postal sectors, with the Singapore postal district each belongs to:");
  parts.push("");
  parts.push(
    mdTable(
      ["Sector", "Postal district", "Area", "Machines", "%"],
      current.districts.map(({ sector, district, area, count }) => [
        sector,
        district,
        area,
        fmt(count),
        pct(count, current.total),
      ]),
    ),
  );

  parts.push("");
  parts.push("## Rollout");
  parts.push("");
  parts.push("Machines by `createdAt` month:");
  parts.push("");
  parts.push(
    mermaidXY(
      "Machines created per month",
      current.rollout.map(([label]) => label),
      [{ type: "bar", data: current.rollout.map(([, n]) => n) }],
      "machines",
      seriesTheme("#D55E00"),
    ),
  );
  parts.push("");
  parts.push(
    mdTable(["Month", "Machines", "%"], current.rollout.map(([label, n]) => [label, fmt(n), pct(n, current.total)])),
  );

  parts.push("");
  parts.push("## Newest machines");
  parts.push("");
  parts.push(
    mdTable(
      ["#", "Name", "Postal", "Status", "Created"],
      current.newest.map((m, i) => [i + 1, m.name, m.postal, m.status, fmtDate(m.createdAt)]),
    ),
  );
  parts.push("");
  parts.push("## Longest standing");
  parts.push("");
  parts.push(
    mdTable(
      ["#", "Name", "Postal", "Status", "Created"],
      current.oldest.map((m, i) => [i + 1, m.name, m.postal, m.status, fmtDate(m.createdAt)]),
    ),
  );

  parts.push("");
  parts.push(`## History (${history.snapshots} snapshots · ${history.firstDate} → ${history.lastDate})`);
  parts.push("");
  parts.push(
    mdTable(
      ["Metric", "Value"],
      [
        ["First snapshot", fmt(history.startCount)],
        ["Current snapshot", fmt(history.currentCount)],
        ["Net change", signed(history.netChange)],
        ["Minimum", `${fmt(history.minCount)} (${history.minDate})`],
        ["Maximum", `${fmt(history.maxCount)} (${history.maxDate})`],
        ["Average", fmt(Math.round(history.average))],
      ],
    ),
  );
  parts.push("");
  parts.push("### Totals across all days");
  parts.push("");
  parts.push(
    mdTable(
      ["Metric", "Total"],
      [
        ["Added", fmt(history.totals.added)],
        ["Removed", fmt(history.totals.removed)],
        ["Changed", fmt(history.totals.changed)],
        ["No-change days", fmt(history.totals.noChangeDays)],
      ],
    ),
  );
  parts.push("");
  parts.push("### Machines over time");
  parts.push("");
  parts.push(
    mermaidXY(
      "Snapshot count by month (end of month)",
      history.monthly.map((m) => m.month),
      [{ type: "line", data: history.monthly.map((m) => m.end) }],
      "machines",
      seriesTheme("#0072B2"),
    ),
  );
  parts.push("");
  parts.push("### Monthly change");
  parts.push("");
  parts.push(
    mermaidXY(
      "Net change per month",
      history.monthly.map((m) => m.month),
      [{ type: "bar", data: history.monthly.map((m) => m.end - m.start) }],
      "machines",
      seriesTheme("#E69F00"),
    ),
  );
  parts.push("");
  parts.push(
    mdTable(
      ["Month", "Start → End", "Added", "Removed", "Net"],
      history.monthly.map((m) => [m.month, `${fmt(m.start)} → ${fmt(m.end)}`, fmt(m.added), fmt(m.removed), signed(m.end - m.start)]),
    ),
  );
  parts.push("");
  parts.push("### Most active days");
  parts.push("");
  parts.push(
    mdTable(
      ["Date", "Added", "Removed", "Changed", "Locations"],
      history.mostActive.map((day) => [day.date, fmt(day.added), fmt(day.removed), fmt(day.changed), fmt(day.count)]),
    ),
  );
  parts.push("");
  parts.push(
    `**Retention:** ${(history.retentionPct * 100).toFixed(1)}% of the first snapshot's machines are still present (${history.retention}/${fmt(
      history.startCount,
    )}).`,
  );

  parts.push("");
  parts.push("---");
  parts.push("");
  parts.push("_Generated with `scripts/analyze_data.mjs --md`._");

  return parts.join("\n");
}

async function main() {
  const workingContent = (await readFile(SNAPSHOT_PATH, "utf8")).trimEnd();
  const working = parseSnapshot(workingContent);

  const snapshots = dailySnapshots();
  if (snapshots.length === 0) {
    throw new Error("No daily snapshot commits found");
  }

  const latestCommit = snapshots.at(-1);
  const headContent = git(["show", `${latestCommit.sha}:data/latest.json`]).trimEnd();
  const differs = workingContent !== headContent;

  let firstPrevious = null;
  try {
    const parentSha = git(["rev-parse", `${snapshots[0].sha}^`]).trim();
    firstPrevious = parseSnapshot(git(["show", `${parentSha}:data/latest.json`]).trimEnd());
  } catch {
    // first daily commit is the root commit — no previous snapshot
  }

  const entries = [];
  for (let i = 0; i < snapshots.length; i++) {
    const previous = i === 0 ? firstPrevious : snapshots[i - 1];
    if (!previous) continue;
    const current = snapshots[i];
    entries.push({ date: current.date, count: current.count, diff: diffCounts(previous, current) });
  }

  const asOfMs = working.items
    .map((item) => Date.parse(item.rvm_last_conn))
    .filter(Boolean)
    .sort((a, b) => b - a)[0];

  const result = {
    snapshot: {
      date: latestCommit.date,
      source: "data/latest.json",
      asOf: new Date(asOfMs).toISOString(),
      differs,
    },
    current: currentAnalysis(working, asOfMs),
    history: historyAnalysis(snapshots, entries),
  };

  if (AS_JSON) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }

  if (MD_PATH) {
    await writeFile(MD_PATH, `${renderMarkdown(result)}\n`, "utf8");
    process.stderr.write(`Wrote ${MD_PATH}\n`);
    return;
  }

  process.stdout.write(`${render(result)}\n`);
}

main().catch((error) => {
  console.error(`Failed to analyze data: ${error.message}`);
  process.exit(1);
});
