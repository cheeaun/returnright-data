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
### 2026-04-08

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **5**
- Changed: **1069**

Removed
- `2615` Phan 99 2 SELETAR NORTH LINK (postal: 797601, status: offline)
- `2616` Food Joy Buona Vista (postal: 118157, status: offline)
- `2617` Culina 15 Dempsey (postal: 249675, status: offline)
- `2618` Supernature Dempsey Road (postal: 249686, status: offline)
- `2619` Prime Supermarket Blk 761 Yishun (postal: 760761, status: offline)

Changed
- `10` Block 54 Geylang Bahru
  - rvm_last_conn: 2026-04-07T05:52:02.000Z -> 2026-04-07T14:26:50.000Z
  - updatedAt: 2026-04-07T07:20:16.026Z -> 2026-04-07T16:35:13.485Z
- `1015` One Punggol Hawker Centre
  - updatedAt: 2026-04-07T07:20:16.047Z -> 2026-04-07T16:35:13.501Z
- `1016` SHENG SIONG BLK 31A MARGARET DRIVE 
  - updatedAt: 2026-04-07T07:20:16.181Z -> 2026-04-07T16:35:13.623Z
- `1017` SHENG SIONG BLK 88 TANGLIN HALT ROAD  
  - updatedAt: 2026-04-07T07:20:16.160Z -> 2026-04-07T16:35:13.601Z
- `1018` SHENG SIONG BLK 301 PUNGGOL CENTRAL 
  - updatedAt: 2026-04-07T07:20:16.970Z -> 2026-04-07T16:35:14.392Z
- `1019` SHENG SIONG 377 HOUGANG STREET 32,  HOUGANG RIVERCOURT
  - rvm_last_conn: 2026-04-07T06:46:41.000Z -> 2026-04-07T09:39:20.000Z
  - updatedAt: 2026-04-07T07:20:17.039Z -> 2026-04-07T16:35:14.452Z
- `1020` SHENG SIONG BLK 351 ANCHORVALE ROAD 
  - rvm_last_conn: 2026-04-07T01:12:11.000Z -> 2026-04-07T09:33:21.000Z
  - updatedAt: 2026-04-07T07:20:17.016Z -> 2026-04-07T16:35:14.432Z
- `1021` SHENG SIONG BLK 218 SUMANG WALK 
  - updatedAt: 2026-04-07T07:20:17.106Z -> 2026-04-07T16:35:14.517Z
- `1022` Block 402 Northshore Drive
  - rvm_last_conn: 2026-04-06T02:10:08.000Z -> 2026-04-07T07:31:43.000Z
  - updatedAt: 2026-04-07T07:20:14.881Z -> 2026-04-07T16:35:12.359Z
- `1023` Block 272A Punggol Walk
  - updatedAt: 2026-04-07T07:20:14.895Z -> 2026-04-07T16:35:12.373Z
- `1024` Block 109 Ang Mo Kio Avenue 4
  - updatedAt: 2026-04-07T07:20:14.908Z -> 2026-04-07T16:35:12.387Z
- `1025` Block 610 Ang Mo Kio Avenue 4
  - updatedAt: 2026-04-07T07:20:14.921Z -> 2026-04-07T16:35:12.402Z
- `1026` Block 651B Ang Mo Kio Avenue 9
  - updatedAt: 2026-04-07T07:20:14.936Z -> 2026-04-07T16:35:12.416Z
- `1027` Block 171 Ang Mo Kio Avenue 4
  - updatedAt: 2026-04-07T07:20:14.954Z -> 2026-04-07T16:35:12.431Z
- `1028` Block 319A Anchorvale Drive
  - updatedAt: 2026-04-07T07:20:14.970Z -> 2026-04-07T16:35:12.450Z
- `1029` Block 311D Anchorvale Lane
  - updatedAt: 2026-04-07T07:20:14.983Z -> 2026-04-07T16:35:12.463Z
- `1030` Block 124C Rivervale Drive
  - updatedAt: 2026-04-07T07:20:14.999Z -> 2026-04-07T16:35:12.479Z
- `1031` Block 225C Compassvale Walk
  - updatedAt: 2026-04-07T07:20:15.013Z -> 2026-04-07T16:35:12.492Z
- `1032` Block 461A Sengkang West Way
  - updatedAt: 2026-04-07T07:20:15.026Z -> 2026-04-07T16:35:12.505Z
- `1033` Block 433B Sengkang West Way
  - rvm_last_conn: 2026-04-07T06:36:59.000Z -> 2026-04-07T10:48:00.000Z
  - status: RUNNING -> OFFLINE
  - updatedAt: 2026-04-07T07:20:15.040Z -> 2026-04-07T16:35:12.520Z
- ... and 1049 more
<!-- CHANGELOG:END -->
