#!/usr/bin/env node

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const OUTPUT_PATH = path.join(DATA_DIR, "latest.csv");

async function latestSnapshotPath() {
  const names = await readdir(DATA_DIR);
  const latest = names.filter((name) => name.endsWith(".json")).sort().at(-1);
  if (!latest) {
    throw new Error("No snapshots found in data/");
  }
  return path.join(DATA_DIR, latest);
}

function toCell(value) {
  if (value === null || value === undefined) return "";
  const text = String(value);
  if (text.includes('"') || text.includes(",") || text.includes("\n") || text.includes("\r")) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

async function main() {
  await mkdir(DATA_DIR, { recursive: true });
  const snapshotPath = await latestSnapshotPath();
  const raw = JSON.parse(await readFile(snapshotPath, "utf8"));
  const data = Array.isArray(raw?.data) ? raw.data : [];

  // Stable column order: first-seen key order across records.
  const columns = [];
  const seen = new Set();
  for (const item of data) {
    for (const key of Object.keys(item)) {
      if (!seen.has(key)) {
        seen.add(key);
        columns.push(key);
      }
    }
  }

  const lines = [columns.map(toCell).join(",")];
  for (const item of data) {
    lines.push(columns.map((col) => toCell(item[col])).join(","));
  }

  await writeFile(OUTPUT_PATH, `${lines.join("\n")}\n`);
  console.log(
    JSON.stringify({
      source: path.relative(ROOT, snapshotPath),
      output: path.relative(ROOT, OUTPUT_PATH),
      rows: data.length,
      columns,
    }),
  );
}

main().catch((error) => {
  console.error(`Failed to generate CSV: ${error.message}`);
  process.exit(1);
});
