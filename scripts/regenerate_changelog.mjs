#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CHANGELOG_START = "<!-- CHANGELOG:START -->";
const CHANGELOG_END = "<!-- CHANGELOG:END -->";
const IGNORED_CHANGE_FIELDS = new Set(["distance", "rvm_last_conn", "status", "updatedAt"]);
const DAILY_SUBJECT = /^Update snapshot for (\d{4}-\d{2}-\d{2})$/;
const INCLUDE_TODAY = process.argv.includes("--today");
const DRY_RUN = process.argv.includes("--dry-run");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const README_PATH = path.join(ROOT, "README.md");
const SNAPSHOT_PATH = path.join(ROOT, "data", "latest.json");

function snapshotDate() {
  if (process.env.SNAPSHOT_DATE) {
    return process.env.SNAPSHOT_DATE;
  }
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Singapore",
  }).format(new Date());
}

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" });
}

function buildLocationsById(raw) {
  const data = Array.isArray(raw?.data) ? raw.data : [];
  return Object.fromEntries(
    data
      .filter((item) => item && typeof item === "object" && "id" in item)
      .map((item) => [String(item.id), { ...item }]),
  );
}

function dailyCommits() {
  const log = git(["log", "--reverse", "--format=%H%x00%s"]);
  const commits = [];
  for (const line of log.split("\n")) {
    if (!line) continue;
    const sep = line.indexOf("\0");
    if (sep === -1) continue;
    const sha = line.slice(0, sep);
    const subject = line.slice(sep + 1);
    const match = subject.match(DAILY_SUBJECT);
    if (match) {
      commits.push({ sha, date: match[1] });
    }
  }
  return commits;
}

function snapshotFromGit(sha, date) {
  const content = git(["show", `${sha}:data/latest.json`]).trimEnd();
  return {
    date,
    content,
    locationsById: buildLocationsById(JSON.parse(content)),
  };
}

function diffSnapshots(previous, current) {
  if (!previous) {
    return { added: [], removed: [], changed: [] };
  }

  const previousIds = new Set(Object.keys(previous.locationsById));
  const currentIds = new Set(Object.keys(current.locationsById));

  const added = [...currentIds]
    .filter((id) => !previousIds.has(id))
    .sort()
    .map((id) => current.locationsById[id]);

  const removed = [...previousIds]
    .filter((id) => !currentIds.has(id))
    .sort()
    .map((id) => previous.locationsById[id]);

  const changed = [...previousIds]
    .filter((id) => currentIds.has(id))
    .sort()
    .map((id) => {
      const oldItem = previous.locationsById[id];
      const newItem = current.locationsById[id];
      const keys = [...new Set([...Object.keys(oldItem), ...Object.keys(newItem)])].sort();
      const changes = {};

      for (const key of keys) {
        if (IGNORED_CHANGE_FIELDS.has(key)) {
          continue;
        }

        if (oldItem[key] !== newItem[key]) {
          changes[key] = { from: oldItem[key], to: newItem[key] };
        }
      }

      if (Object.keys(changes).length === 0) {
        return null;
      }

      return {
        id,
        locationName: newItem.locationName || oldItem.locationName || id,
        changes,
      };
    })
    .filter(Boolean);

  return { added, removed, changed };
}

function describeLocation(item) {
  const locationId = item.id ?? "unknown";
  const name = item.locationName || "Unnamed location";
  const postal = item.postalCode || item.zipcode || "n/a";
  const status = item.status || "n/a";
  return `- \`${locationId}\` ${name} (postal: ${postal}, status: ${status})`;
}

function describeChanged(item) {
  const lines = [`- \`${item.id}\` ${item.locationName}`];
  for (const [field, value] of Object.entries(item.changes).sort(([left], [right]) =>
    left.localeCompare(right),
  )) {
    lines.push(`  - ${field}: ${formatValue(value.from)} -> ${formatValue(value.to)}`);
  }
  return lines.join("\n");
}

function formatValue(value) {
  if (value === null) {
    return "null";
  }
  if (value === undefined) {
    return "undefined";
  }
  if (typeof value === "string") {
    return value === "" ? '""' : value;
  }
  if (typeof value === "object") {
    return JSON.stringify(value);
  }
  return String(value);
}

function buildSection(title, items) {
  if (items.length === 0) {
    return null;
  }
  return [title, items.join("\n")].join("\n");
}

function buildEntryBody(date, current, { added, removed, changed }) {
  if (added.length === 0 && removed.length === 0 && changed.length === 0) {
    return "No changes.";
  }

  const total = Object.keys(current.locationsById).length;
  const sections = [
    buildSection("Added", added.map(describeLocation)),
    buildSection("Removed", removed.map(describeLocation)),
    buildSection("Changed", changed.map(describeChanged)),
  ].filter(Boolean);

  return [
    `- Snapshot size: **${total}** locations`,
    `- Added: **${added.length}**`,
    `- Removed: **${removed.length}**`,
    `- Changed: **${changed.length}**`,
    ...(sections.length > 0 ? ["", sections.join("\n\n")] : []),
  ]
    .join("\n")
    .trim();
}

function summaryFor(date, current, { added, removed, changed }) {
  const datePart = `<b>${date}</b>`;
  if (added.length === 0 && removed.length === 0 && changed.length === 0) {
    return `${datePart} · No changes`;
  }
  const parts = [datePart, `${Object.keys(current.locationsById).length.toLocaleString()} locations`];
  if (added.length > 0) {
    parts.push(`+${added.length}`);
  }
  if (removed.length > 0) {
    parts.push(`−${removed.length}`);
  }
  if (changed.length > 0) {
    parts.push(`±${changed.length}`);
  }
  return parts.join(" · ");
}

function wrapDetails(summary, body) {
  return `<details>\n<summary>${summary}</summary>\n\n${body}\n</details>`;
}

async function main() {
  const commits = dailyCommits();
  if (commits.length === 0) {
    throw new Error("No daily snapshot commits found");
  }

  const snapshots = commits.map((commit) => snapshotFromGit(commit.sha, commit.date));

  let firstPrevious = null;
  try {
    const parentSha = git(["rev-parse", `${commits[0].sha}^`]).trim();
    firstPrevious = snapshotFromGit(parentSha, null);
  } catch {
    // first daily commit is the root commit — no previous snapshot
  }

  const entries = [];
  for (let i = 0; i < snapshots.length; i++) {
    const previous = i === 0 ? firstPrevious : snapshots[i - 1];
    if (!previous) continue;
    const current = snapshots[i];
    const diff = diffSnapshots(previous, current);
    entries.push({ date: current.date, current, diff });
  }

  const today = snapshotDate();
  const last = snapshots.at(-1);
  if (last && last.date < today) {
    let content = null;
    try {
      content = (await readFile(SNAPSHOT_PATH, "utf8")).trimEnd();
    } catch {
      // no working-tree snapshot
    }

    if (content && content !== last.content) {
      const current = {
        date: today,
        content,
        locationsById: buildLocationsById(JSON.parse(content)),
      };
      const diff = diffSnapshots(last, current);
      entries.push({ date: today, current, diff });
    } else if (INCLUDE_TODAY) {
      const diff = { added: [], removed: [], changed: [] };
      entries.push({ date: today, current: last, diff });
    }
  }

  if (entries.length === 0) {
    throw new Error("No changelog entries to render");
  }

  const rendered = entries
    .slice()
    .reverse()
    .map(({ date, current, diff }) => wrapDetails(summaryFor(date, current, diff), buildEntryBody(date, current, diff)))
    .join("\n\n");

  const changelog = `${CHANGELOG_START}\n${rendered}\n${CHANGELOG_END}`;

  if (DRY_RUN) {
    process.stdout.write(`${changelog}\n`);
    return;
  }

  const content = await readFile(README_PATH, "utf8");
  const start = content.indexOf(CHANGELOG_START);
  const end = content.indexOf(CHANGELOG_END);
  if (start === -1 || end === -1 || end < start) {
    throw new Error("README.md is missing changelog markers");
  }

  const newContent = content.slice(0, start) + changelog + content.slice(end + CHANGELOG_END.length);
  await writeFile(README_PATH, newContent);

  console.log(
    JSON.stringify({
      entries: entries.length,
      committed_snapshots: snapshots.length,
      today_entry: last && last.date < today ? today : null,
    }),
  );
}

main().catch((error) => {
  console.error(`Failed to regenerate changelog: ${error.message}`);
  process.exit(1);
});
