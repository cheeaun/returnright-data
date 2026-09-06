#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BASE_URL = "https://bts.bcrs.sg";
const API_BASE = `${BASE_URL}/bkapi/v1`;
const TOKEN_URL = `${API_BASE}/locations/access-token`;
const API_URL =
  `${API_BASE}/locations/nearby?lat=1.348813292793699&lng=103.81817162136393&radius=25000`;

// API base path is /bkapi/v1. Fetch an access token first,
// then pass it as x-bcrs-map-token on the nearby call.

function baseHeaders(extra = {}) {
  return {
    "user-agent": "returnright-data/1.0 (+https://github.com/)",
    accept: "application/json",
    referer: `${BASE_URL}/`,
    "x-bcrs-client": "web",
    ...extra,
  };
}

async function fetchMapToken() {
  const response = await fetch(TOKEN_URL, { headers: baseHeaders() });
  if (!response.ok) {
    throw new Error(`Token HTTP ${response.status} ${response.statusText}`);
  }
  const body = await response.json();
  const token = body?.data?.token;
  if (!token) {
    throw new Error(`Token response missing data.token: ${JSON.stringify(body).slice(0, 200)}`);
  }
  return token;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const SNAPSHOT_PATH = path.join(DATA_DIR, "latest.json");

async function fetchPayload(url, mapToken) {
  const response = await fetch(url, {
    headers: baseHeaders({ "x-bcrs-map-token": mapToken }),
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function main() {
  await mkdir(DATA_DIR, { recursive: true });

  const mapToken = await fetchMapToken();
  const payload = await fetchPayload(API_URL, mapToken);
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
