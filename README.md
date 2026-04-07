# ReturnRight Data

Daily snapshots of the BCRS locations API in Singapore.

## What this repo does

- Fetches `https://bts.bcrs.sg/api/v1/locations/nearby` once per day.
- Saves the raw JSON response to [`data/`](./data) using `YYYY-MM-DD.json`.
- Generates [`latest.geojson`](./latest.geojson) from the newest snapshot.
- Compares the latest snapshot with the previous one.
- Appends a daily changelog to this README.

## Local usage

```bash
node scripts/fetch_locations.mjs
node scripts/generate_geojson.mjs
```

## Daily changes

Each run appends a dated entry below. If there are changes, the entry lists added, removed, and changed locations. If there are no changes, it shows `No changes.`

<!-- CHANGELOG:START -->
_No changes recorded yet._
<!-- CHANGELOG:END -->
