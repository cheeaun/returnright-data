#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BASE_URL = "https://bts.bcrs.sg";
const API_BASE = `${BASE_URL}/forapi/v2`;
const TOKEN_URL = `${API_BASE}/locations/access-token`;
const FULL_URL = `${API_BASE}/locations`;
const NEARBY_URL = (lat, lng, radius) =>
  `${API_BASE}/locations/nearby?lat=${lat}&lng=${lng}&radius=${radius}`;

// The server clamps nearby radius to 2500m max, so the full dataset is
// collected by sweeping a grid of nearby queries (see nearby_grid.json)
// and merging them over the full /locations list (which also covers
// records without coordinates that no radius query can return).

const CONCURRENCY = 8;

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
const GRID_PATH = path.join(__dirname, "nearby_grid.json");

function hasFiniteCoord(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string" && value.trim() === "") return false;
  return Number.isFinite(Number(value));
}

// Records with neither a name nor coordinates are unprovisioned backend
// entries (no site metadata, unmappable) — pure noise, drop them.
function isUsableLocation(item) {
  const hasName =
    typeof item?.locationName === "string" && item.locationName.trim() !== "";
  return hasName || (hasFiniteCoord(item?.latitude) && hasFiniteCoord(item?.longitude));
}

const tokenState = { current: null };

async function fetchDataArray(url) {
  const response = await fetch(url, {
    headers: baseHeaders({ "x-bcrs-map-token": tokenState.current }),
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText} for ${url}`);
  }
  const body = await response.json();
  if (!Array.isArray(body?.data)) {
    throw new Error(`Unexpected body for ${url}: ${JSON.stringify(body).slice(0, 200)}`);
  }
  return body.data;
}

// Fetch with one token refresh + retry, for expired/single-use tokens.
async function fetchDataArrayResilient(url) {
  try {
    return await fetchDataArray(url);
  } catch (error) {
    tokenState.current = await fetchMapToken();
    return await fetchDataArray(url);
  }
}

async function main() {
  await mkdir(DATA_DIR, { recursive: true });
  const grid = JSON.parse(await readFile(GRID_PATH, "utf8"));
  const radius = grid.radius;
  const coords = grid.coords;
  if (!Number.isFinite(radius) || !Array.isArray(coords) || coords.length === 0) {
    throw new Error(`Invalid grid config in ${path.relative(ROOT, GRID_PATH)}`);
  }

  tokenState.current = await fetchMapToken();

  // Base list: complete, including records without coordinates.
  const full = await fetchDataArrayResilient(FULL_URL);
  const byId = new Map(full.map((item) => [item.id, item]));

  // Nearby sweep: richer per-location detail; dedupe by id.
  let nearbyUnique = 0;
  const seenNearby = new Set();
  const queue = [...coords];
  const workers = Array.from(
    { length: Math.min(CONCURRENCY, queue.length) },
    async () => {
      while (queue.length > 0) {
        const [lat, lng] = queue.pop();
        const items = await fetchDataArrayResilient(NEARBY_URL(lat, lng, radius));
        for (const item of items) {
          if (!seenNearby.has(item.id)) {
            seenNearby.add(item.id);
            nearbyUnique += 1;
          }
          byId.set(item.id, { ...byId.get(item.id), ...item });
        }
      }
    },
  );
  await Promise.all(workers);

  const data = [...byId.values()]
    .filter(isUsableLocation)
    .sort((a, b) => a.id - b.id);
  await writeFile(SNAPSHOT_PATH, `${JSON.stringify({ status: "ok", data }, null, 2)}\n`);

  console.log(
    JSON.stringify({
      snapshot: path.relative(ROOT, SNAPSHOT_PATH),
      full_total: full.length,
      nearby_queries: coords.length,
      nearby_unique: nearbyUnique,
      filtered_out: byId.size - data.length,
      total_locations: data.length,
    }),
  );
}

main().catch((error) => {
  console.error(`Failed to fetch API: ${error.message}`);
  process.exit(1);
});
