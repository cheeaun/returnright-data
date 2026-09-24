#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BASE_URL = "https://returnright.sg";
const API_BASE = `${BASE_URL}/px-api`;
const locationsUrl = (suffix = "") => `${API_BASE}/locations${suffix}`;

function baseHeaders(extra = {}) {
  return {
    "user-agent": "Mozilla/5.0 (rr/1.0)",
    accept: "application/json",
    "x-bcrs-client": "web",
    referer: `${BASE_URL}/px/`,
    ...extra,
  };
}

async function throwHttp(url, context, response) {
  const server = response.headers.get("server") ?? "?";
  const contentType = response.headers.get("content-type") ?? "?";
  const body = (await response.text()).slice(0, 500);
  throw new Error(
    `${context} failed: ${url} -> HTTP ${response.status} ${response.statusText} (server=${server}, content-type=${contentType}) body=${body}`,
  );
}

async function readJson(url, context, response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    const server = response.headers.get("server") ?? "?";
    throw new Error(
      `${context} returned non-JSON: ${url} -> HTTP ${response.status} (server=${server}) body=${text.slice(0, 500)}`,
    );
  }
}

async function fetchMapToken() {
  const url = locationsUrl("/access-token");
  const response = await fetch(url, {
    headers: baseHeaders(),
  });
  if (!response.ok) {
    await throwHttp(url, "token request", response);
  }
  const body = await readJson(url, "token request", response);
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

async function fetchLocations(token) {
  const url = locationsUrl();
  const response = await fetch(url, {
    headers: baseHeaders({ "x-bcrs-map-token": token }),
  });
  if (!response.ok) {
    await throwHttp(url, "locations request", response);
  }
  const body = await readJson(url, "locations request", response);
  if (!Array.isArray(body?.data)) {
    throw new Error(`Unexpected body for ${url}: ${JSON.stringify(body).slice(0, 200)}`);
  }
  return body.data;
}

// One token refresh + retry, for expired/single-use tokens.
async function fetchLocationsResilient() {
  let token = await fetchMapToken();
  try {
    return await fetchLocations(token);
  } catch (error) {
    console.error(`Locations attempt 1 failed (${error.message}), refreshing token and retrying...`);
    token = await fetchMapToken();
    return await fetchLocations(token);
  }
}

async function main() {
  await mkdir(DATA_DIR, { recursive: true });
  const full = await fetchLocationsResilient();
  const data = full.filter(isUsableLocation).sort((a, b) => a.id - b.id);
  await writeFile(SNAPSHOT_PATH, `${JSON.stringify({ status: "ok", data }, null, 2)}\n`);

  console.log(
    JSON.stringify({
      snapshot: path.relative(ROOT, SNAPSHOT_PATH),
      full_total: full.length,
      filtered_out: full.length - data.length,
      total_locations: data.length,
    }),
  );
}

main().catch((error) => {
  console.error(`[${new Date().toISOString()}] Failed to fetch API: ${error.stack ?? error.message}`);
  process.exit(1);
});
