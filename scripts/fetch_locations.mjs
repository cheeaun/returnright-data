#!/usr/bin/env node

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const API_URL =
  "https://bts.bcrs.sg/api/v1/locations/nearby?lat=1.348813292793699&lng=103.81817162136393&radius=25000";
const CHANGELOG_START = "<!-- CHANGELOG:START -->";
const CHANGELOG_END = "<!-- CHANGELOG:END -->";
const MAX_CHANGES_PER_SECTION = 20;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const README_PATH = path.join(ROOT, "README.md");

function snapshotDate() {
  if (process.env.SNAPSHOT_DATE) {
    return process.env.SNAPSHOT_DATE;
  }
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Singapore",
  }).format(new Date());
}

async function fetchPayload(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "returnright-data/1.0 (+https://github.com/)",
      accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }
  return response.json();
}

function buildLocationsById(raw) {
  const data = Array.isArray(raw?.data) ? raw.data : [];
  return Object.fromEntries(
    data
      .filter((item) => item && typeof item === "object" && "id" in item)
      .map((item) => [String(item.id), { ...item }]),
  );
}

async function loadSnapshot(snapshotPath) {
  const raw = JSON.parse(await readFile(snapshotPath, "utf8"));
  return {
    path: snapshotPath,
    date: path.basename(snapshotPath, ".json"),
    raw,
    locationsById: buildLocationsById(raw),
  };
}

async function latestSnapshots() {
  try {
    const names = await readdir(DATA_DIR);
    const paths = names
      .filter((name) => name.endsWith(".json"))
      .sort()
      .map((name) => path.join(DATA_DIR, name));
    return Promise.all(paths.map(loadSnapshot));
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
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

function summarize(items) {
  const shown = items.slice(0, MAX_CHANGES_PER_SECTION);
  if (items.length > MAX_CHANGES_PER_SECTION) {
    shown.push(`- ... and ${items.length - MAX_CHANGES_PER_SECTION} more`);
  }
  return shown.join("\n");
}

function buildSection(title, items) {
  if (items.length === 0) {
    return null;
  }
  return [title, summarize(items)].join("\n");
}

function buildChangelogEntry(date, current, { added, removed, changed }) {
  if (added.length === 0 && removed.length === 0 && changed.length === 0) {
    return [`### ${date}`, "", "No changes."].join("\n");
  }

  const total = Object.keys(current.locationsById).length;
  const sections = [
    buildSection("Added", added.map(describeLocation)),
    buildSection("Removed", removed.map(describeLocation)),
    buildSection("Changed", changed.map(describeChanged)),
  ].filter(Boolean);

  return [
    `### ${date}`,
    "",
    `- Snapshot size: **${total}** locations`,
    `- Added: **${added.length}**`,
    `- Removed: **${removed.length}**`,
    `- Changed: **${changed.length}**`,
    ...(sections.length > 0 ? ["", sections.join("\n\n")] : []),
  ]
    .join("\n")
    .trim();
}

function splitSections(existing) {
  return existing
    .split("\n### ")
    .map((part, index) => (index === 0 ? part : `### ${part}`))
    .map((part) => part.trim())
    .filter(Boolean);
}

async function updateReadme(entry) {
  const content = await readFile(README_PATH, "utf8");

  const start = content.indexOf(CHANGELOG_START);
  const end = content.indexOf(CHANGELOG_END);
  if (start === -1 || end === -1 || end < start) {
    throw new Error("README.md is missing changelog markers");
  }

  const existing = content.slice(start + CHANGELOG_START.length, end).trim();
  let sections =
    !existing || existing === "_No changes recorded yet._" ? [] : splitSections(existing);

  if (entry) {
    const entryHeading = entry.split("\n")[0].trim();
    sections = sections.filter((section) => !section.startsWith(entryHeading));
    sections.unshift(entry);
  }

  const replacementBody = sections.length === 0 ? "_No changes recorded yet._" : sections.join("\n\n");
  const replacement = `${CHANGELOG_START}\n${replacementBody}\n${CHANGELOG_END}`;
  const newContent = content.slice(0, start) + replacement + content.slice(end + CHANGELOG_END.length);
  await writeFile(README_PATH, newContent);
}

async function main() {
  await mkdir(DATA_DIR, { recursive: true });

  const date = snapshotDate();
  const outputPath = path.join(DATA_DIR, `${date}.json`);
  const payload = await fetchPayload(API_URL);
  await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`);

  const snapshots = await latestSnapshots();
  const current = snapshots.find((snapshot) => snapshot.path === outputPath);
  const previousCandidates = snapshots.filter((snapshot) => snapshot.path !== outputPath);
  const previous = previousCandidates.at(-1) || null;
  const diff = diffSnapshots(previous, current);

  const hasChanges = diff.added.length > 0 || diff.removed.length > 0 || diff.changed.length > 0;
  await updateReadme(previous && hasChanges ? buildChangelogEntry(date, current, diff) : null);

  console.log(
    JSON.stringify({
      snapshot: path.relative(ROOT, outputPath),
      total_locations: Object.keys(current.locationsById).length,
      added: diff.added.length,
      removed: diff.removed.length,
      changed: diff.changed.length,
    }),
  );
}

main().catch((error) => {
  console.error(`Failed to fetch API: ${error.message}`);
  process.exit(1);
});
