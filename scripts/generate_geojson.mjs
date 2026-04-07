#!/usr/bin/env node

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const OUTPUT_PATH = path.join(ROOT, "latest.geojson");

async function latestSnapshotPath() {
  const names = await readdir(DATA_DIR);
  const latest = names.filter((name) => name.endsWith(".json")).sort().at(-1);
  if (!latest) {
    throw new Error("No snapshots found in data/");
  }
  return path.join(DATA_DIR, latest);
}

function toFeature(item) {
  const latitude = Number(item.latitude);
  const longitude = Number(item.longitude);
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    return null;
  }

  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [longitude, latitude],
    },
    properties: { ...item },
  };
}

async function main() {
  await mkdir(DATA_DIR, { recursive: true });
  const snapshotPath = await latestSnapshotPath();
  const raw = JSON.parse(await readFile(snapshotPath, "utf8"));
  const data = Array.isArray(raw?.data) ? raw.data : [];
  const features = data.map(toFeature).filter(Boolean);

  const geojson = {
    type: "FeatureCollection",
    source: path.relative(ROOT, snapshotPath),
    generatedAt: new Date().toISOString(),
    featureCount: features.length,
    features,
  };

  await writeFile(OUTPUT_PATH, `${JSON.stringify(geojson, null, 2)}\n`);
  console.log(
    JSON.stringify({
      source: path.relative(ROOT, snapshotPath),
      output: path.relative(ROOT, OUTPUT_PATH),
      features: features.length,
    }),
  );
}

main().catch((error) => {
  console.error(`Failed to generate GeoJSON: ${error.message}`);
  process.exit(1);
});
