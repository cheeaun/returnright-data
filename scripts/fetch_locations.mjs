#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const API_URL =
  "https://bts.bcrs.sg/api/v1/locations/nearby?lat=1.348813292793699&lng=103.81817162136393&radius=25000";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const SNAPSHOT_PATH = path.join(DATA_DIR, "latest.json");

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

async function main() {
  await mkdir(DATA_DIR, { recursive: true });

  const payload = await fetchPayload(API_URL);
  await writeFile(SNAPSHOT_PATH, `${JSON.stringify(payload, null, 2)}\n`);

  console.log(
    JSON.stringify({
      snapshot: path.relative(ROOT, SNAPSHOT_PATH),
      total_locations: Array.isArray(payload?.data) ? payload.data.length : 0,
    }),
  );
}

main().catch((error) => {
  console.error(`Failed to fetch API: ${error.message}`);
  process.exit(1);
});
