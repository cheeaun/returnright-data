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

Each run rebuilds the dated entries below from the saved snapshots. The changelog ignores `rvm_last_conn`, `updatedAt`, and `status`, so it only highlights removals and other meaningful field changes. If a day has no meaningful changes, it shows `No changes.`

<!-- CHANGELOG:START -->
### 2026-04-13

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `2336` SHENG SIONG BLK 446 FAJAR ROAD
  - locationName: SHENG SIONG BLK 446 FAJAR ROAD  -> SHENG SIONG BLK 446 FAJAR ROAD
- `367` Block 126A Edgedale Plains
  - locationName: Blk126A Edgedale Plains -> Block 126A Edgedale Plains

### 2026-04-12

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `2566` AJMAL TRADING GROUP - Jalan Papan Aspri Westlite
  - address: NO.5D JALAN PAPAN, #01-31 WESTLITE DORMITORY, 619421 -> 5 JALAN PAPAN #01-32, ASPRI-WESTLITE PAPAN, 619396
  - locationName: AJMAL TRADING GROUP - Jalan Papan Westlite Dormitory -> AJMAL TRADING GROUP - Jalan Papan Aspri Westlite
  - postalCode: 619421 -> 619396
  - zipcode: 619421 -> 619396

### 2026-04-11

No changes.

### 2026-04-10

No changes.

### 2026-04-09

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `2370` Raj Agro Kranji
  - locationName: Aaj Agro Kranji -> Raj Agro Kranji

### 2026-04-08

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **5**
- Changed: **0**

Removed
- `2615` Phan 99 2 SELETAR NORTH LINK (postal: 797601, status: offline)
- `2616` Food Joy Buona Vista (postal: 118157, status: offline)
- `2617` Culina 15 Dempsey (postal: 249675, status: offline)
- `2618` Supernature Dempsey Road (postal: 249686, status: offline)
- `2619` Prime Supermarket Blk 761 Yishun (postal: 760761, status: offline)
<!-- CHANGELOG:END -->
