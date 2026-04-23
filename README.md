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
### 2026-04-24

No changes.

### 2026-04-23

No changes.

### 2026-04-22

No changes.

### 2026-04-21

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **5**

Changed
- `194` 771 Choa Chu Kang Street 54
  - address: 771 Choa Chu Kang Dr, 680771 -> 771 Choa Chu Kang Street 54, 680771
  - distance: 9267.860579369799 -> 9192.773421626374
  - latitude: 1.39549000 -> 1.39447000
  - locationName: 771 Choa Chu Kang Dr -> 771 Choa Chu Kang Street 54
  - longitude: 103.74910000 -> 103.74923000
- `202` 657 Choa Chu Kang Cres
  - distance: 9038.75455034437 -> 9531.628339568624
  - latitude: 1.38847600 -> 1.40046200
  - longitude: 103.74719700 -> 103.74973900
- `441` 550 Choa Chu Kang Street 52
  - distance: 11665.739909205853 -> 9780.793960433057
  - latitude: 1.44416800 -> 1.39406500
  - longitude: 103.77440800 -> 103.74272200
- `929` Blk 2, Chai Chee Road
  - distance: 11675.336049433368 -> 11873.618281919036
  - latitude: 1.32259100 -> 1.32695500
  - longitude: 103.91987100 -> 103.92272100
- `943` Blk 50, Chai Chee Street
  - distance: 11764.59836803133 -> 11791.705105536106
  - latitude: 1.32891200 -> 1.32938200
  - longitude: 103.92211300 -> 103.92245000

### 2026-04-20

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `2353` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - distance: 14067.905591355227 -> 13507.901205668355
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `901` Blk 742 Pasir Ris Street 71
  - address: Blk 740 Pasir Ris Street 71, 520740 -> Blk 742 Pasir Ris Street 71, 510742
  - distance: 12809.71892918906 -> 13476.286894491226
  - latitude: 1.35941900 -> 1.37708700
  - locationName: Blk 740 Pasir Ris Street 71 -> Blk 742 Pasir Ris Street 71
  - longitude: 103.93291500 -> 103.93605600
  - postalCode: 520740 -> 510742
  - zipcode: 520740 -> 510742

### 2026-04-19

No changes.

### 2026-04-18

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `1023` Block 272 Punggol Walk
  - address: Block 272A Punggol Walk, 820272 -> Block 272 Punggol Walk, 820272
  - distance: 10975.237872317544 -> 10973.722656518014
  - latitude: 1.40299700 -> 1.40287000
  - locationName: Block 272A Punggol Walk -> Block 272 Punggol Walk
  - longitude: 103.90069600 -> 103.90076300
- `1027` Block 170 Ang Mo Kio Avenue 4
  - address: 171 Ang Mo Kio Ave 4, 560171 -> 170 Ang Mo Kio Ave 4, 560170
  - distance: 3480.7153277680222 -> 3491.721503653183
  - latitude: 1.37478800 -> 1.37394300
  - locationName: Block 171 Ang Mo Kio Avenue 4 -> Block 170 Ang Mo Kio Avenue 4
  - longitude: 103.83564600 -> 103.83700700
  - postalCode: 560171 -> 560170
  - zipcode: 560171 -> 560170

### 2026-04-17

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `2186` Prime Supermarket 687A Woodlands Avenue 6
  - locationName: Prime Supermarket Woodlands Avenue 6 -> Prime Supermarket 687A Woodlands Avenue 6
- `2284` Prime Supermarket 322 Sumang Walk
  - locationName: Prime Supermarket Sumang Walk -> Prime Supermarket 322 Sumang Walk
- `795` Blk 348, Ubi Avenue 1
  - address: Blk 346, Ubi Avenue 1, 400346 -> Blk 348, Ubi Avenue 1, 400348
  - distance: 9403.796988847904 -> 9466.125672428245
  - latitude: 1.32601400 -> 1.32615800
  - locationName: Blk 346, Ubi Avenue 1 -> Blk 348, Ubi Avenue 1
  - longitude: 103.89963300 -> 103.90025500
  - postalCode: 400346 -> 400348
  - zipcode: 400346 -> 400348

### 2026-04-16

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `1141` SHENG SIONG BLK 671 EDGEFIELD PLAINS
  - rvmOpeningHours: "" -> Mon - Sun:  07:00 AM - 11:00 PM

### 2026-04-15

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `2342` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - distance: 13346.432905941527 -> 12915.057712132177
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `2345` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - distance: 13346.432905941527 -> 12915.057712132177
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `2540` Changi Airport Terminal 4
  - address: 30 Airport Boulevard, Singapore 819662, Level 2M Outside Kopitiam, 819662 -> 10 Airport Boulevard, Singapore 819665, Level 2M Outside Kopitiam, 819662

### 2026-04-14

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `2342` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - distance: 12915.057712132177 -> 13346.432905941527
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `2345` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9  -> SHENG SIONG BLK 602A TAMPINES AVENUE 9

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
