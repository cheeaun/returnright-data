# ReturnRight Data

Daily snapshots of the BCRS locations API in Singapore.

## What this repo does

- Fetches `https://bts.bcrs.sg/api/v1/locations/nearby` once per day.
- Saves the raw JSON response to [`data/latest.json`](./data/latest.json), overwriting the previous day's file — the full history lives in the git history of that file.
- Generates [`data/latest.geojson`](./data/latest.geojson) from the newest snapshot.
- Generates [`ANALYSIS.md`](./ANALYSIS.md) — a snapshot analysis report with mermaid charts covering status, suppliers, opening hours, postal districts, rollout, and history.
- Compares each snapshot with the previous one to track added, removed, and changed locations.
- Rebuilds the changelog in this README from the snapshot history in git.

## Local usage

```bash
node scripts/fetch_locations.mjs
node scripts/regenerate_changelog.mjs --today
node scripts/generate_geojson.mjs
node scripts/analyze_data.mjs --md
```

## Daily changes

Each day's entry below is collapsed by default — click a date to expand it. The changelog is rebuilt from the git history of `data/latest.json` (`node scripts/regenerate_changelog.mjs`), so reformatting it is just editing that script and re-running it. It ignores `rvm_last_conn`, `updatedAt`, and `status`, so it only highlights removals and other meaningful field changes. If a day has no meaningful changes, it shows `No changes.`

<!-- CHANGELOG:START -->
<details>
<summary><b>2026-08-20</b> · 1,252 locations · +13 · −2 · ±2</summary>

- Snapshot size: **1252** locations
- Added: **13**
- Removed: **2**
- Changed: **2**

Added
- `2256` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `2556` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)
- `2558` 7 Seven Trichy Supermarket North Coast Lodge (postal: 756992, status: RUNNING)
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `2565` Phan Nee #01-02 Sungei Tengah Lodge (postal: 698924, status: OFFLINE)
- `3005` Block 308A Punggol Walk (postal: 821308, status: RUNNING)
- `3006` Block 134 Edgedale Plains (postal: 820134, status: RUNNING)
- `3007` Block 224C Sumang Lane (postal: 823224, status: RUNNING)
- `3008` Block 217C Sumang Walk (postal: 823217, status: RUNNING)
- `3009` Block 228A Punggol Field (postal: 821228, status: RUNNING)
- `3010` Block 326B Sumang Walk (postal: 822326, status: RUNNING)
- `3011` Block 423A Northshore Crescent (postal: 823423, status: RUNNING)
- `3012` Block 232C Sumang Lane (postal: 823232, status: RUNNING)

Removed
- `2358` ONE Supermarket Pte. Ltd. (postal: 522201, status: RUNNING)
- `2671` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: RUNNING)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `2810` Blk 608, Bedok Reservoir Road
  - latitude: 1.33250200 -> 1.33185400
  - longitude: 103.91310000 -> 103.91319300
</details>

<details>
<summary><b>2026-08-19</b> · 1,241 locations · +2 · −4 · ±12</summary>

- Snapshot size: **1241** locations
- Added: **2**
- Removed: **4**
- Changed: **12**

Added
- `2358` ONE Supermarket Pte. Ltd. (postal: 522201, status: RUNNING)
- `3002` 60 Jurong West Central 3 (postal: 648346, status: RUNNING)

Removed
- `2552` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: ERROR)
- `2558` 7 Seven Trichy Supermarket North Coast Lodge (postal: 756992, status: RUNNING)
- `2559` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: ERROR)

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `1964` Thai Supermarket Aperia Mall
  - address: 12 Kallang Avenue, #01-20, 339511 -> 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511
  - locationName: Thai Supermarket Pte Ltd -> Thai Supermarket Aperia Mall
  - longitude: 103.86432000 -> 103.86430200
- `2271` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
- `2873` Westlite Jalan Tukang Dormitory
  - supplierId: null -> SGRECYCLE001
- `2891` Gardens by the Bay
  - supplierId: null -> TOMRA001
- `2956` Block 8 Tanjong Pagar Plaza
  - supplierId: null -> TOMRA001
- `2957` Block 8 Cantonment Cl
  - supplierId: null -> TOMRA001
- `2958` Block 3 Jalan Bukit Merah
  - supplierId: null -> TOMRA001
- `2959` Block 166 Stirling Road
  - supplierId: null -> TOMRA001
- `2960` Block 181 Stirling Rd
  - supplierId: null -> TOMRA001
- `2988` 988A Jurong West Street 93
  - supplierId: null -> SGRECYCLE001
</details>

<details>
<summary><b>2026-08-18</b> · 1,243 locations · +5 · −1 · ±5</summary>

- Snapshot size: **1243** locations
- Added: **5**
- Removed: **1**
- Changed: **5**

Added
- `2552` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: ERROR)
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: ERROR)
- `2568` Redman by Phoon Huat (postal: 677743, status: RUNNING)
- `2999` 48 Teban Gardens Road (postal: 600048, status: RUNNING)
- `3001` 414 Pandan Gardens Road (postal: 600414, status: RUNNING)

Removed
- `2256` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)

Changed
- `1176` Don Don Donki (HarbourFront Centre)
  - address: 500 Dover Rd, 139651 -> 1 Maritime Square, #03-23 / 38 HarbourFront Centre, 099253
  - latitude: 1.31033000 -> 1.26420000
  - locationName: Singapore Polytechnic (SP) T11A Building -> Don Don Donki (HarbourFront Centre)
  - longitude: 103.77916000 -> 103.82030000
  - postalCode: 139651 -> 099253
  - zipcode: 139651 -> 099253
- `1301` National University of Singapore 36 College Avenue East UTown Level 1, Main Walkway
  - locationName: National University of Singapore 36 College Avenue East -> National University of Singapore 36 College Avenue East UTown Level 1, Main Walkway
- `1964` Thai Supermarket Pte Ltd
  - address: 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511 -> 12 Kallang Avenue, #01-20, 339511
  - locationName: Thai Supermarket Aperia Mall -> Thai Supermarket Pte Ltd
  - longitude: 103.86430200 -> 103.86432000
- `2558` 7 Seven Trichy Supermarket North Coast Lodge
  - locationName: 7 Seven_Trichy Supermarket -> 7 Seven Trichy Supermarket North Coast Lodge
- `2760` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
</details>

<details>
<summary><b>2026-08-17</b> · 1,239 locations · +4 · −2 · ±3</summary>

- Snapshot size: **1239** locations
- Added: **4**
- Removed: **2**
- Changed: **3**

Added
- `2256` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `2558` 7 Seven_Trichy Supermarket (postal: 756992, status: FULL)
- `2671` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: FULL)
- `2966` 507 West Coast Drive (postal: 120507, status: MAINTENANCE)

Removed
- `2552` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: RUNNING)
- `2565` Phan Nee #01-02 Sungei Tengah Lodge (postal: 698924, status: OFFLINE)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
- `2962` SHENG SIONG BLK 440 BUKIT BATOK WEST AVE 8
  - locationName: SHENG SIONG BLK 440 BUKI BATOK WEST AVE 8 -> SHENG SIONG BLK 440 BUKIT BATOK WEST AVE 8
</details>

<details>
<summary><b>2026-08-16</b> · 1,237 locations · +21 · −5 · ±1</summary>

- Snapshot size: **1237** locations
- Added: **21**
- Removed: **5**
- Changed: **1**

Added
- `2552` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: RUNNING)
- `2565` Phan Nee #01-02 Sungei Tengah Lodge (postal: 698924, status: OFFLINE)
- `2962` SHENG SIONG BLK 440 BUKI BATOK WEST AVE 8 (postal: 650440, status: RUNNING)
- `2963` SHENG SIONG BLK 61 TEBAN GARDENS ROAD (postal: 600061, status: RUNNING)
- `2968` Block 294 Punggol Central (postal: 820294, status: RUNNING)
- `2969` Block 668B Edgefield Plains (postal: 822668, status: RUNNING)
- `2970` Block 165A Punggol Central (postal: 821165, status: RUNNING)
- `2971` Block 655A Punggol East (postal: 821655, status: RUNNING)
- `2972` Block 677A Punggol Drive (postal: 821677, status: RUNNING)
- `2973` Block 684A Edgedale Plains (postal: 820684, status: RUNNING)
- `2974` Block 624B Punggol Central (postal: 822624, status: RUNNING)
- `2975` Block 632A Punggol Drive (postal: 821632, status: RUNNING)
- `2976` Block 168A Punggol East (postal: 821168, status: RUNNING)
- `2977` Block 647 Punggol Central (postal: 820647, status: RUNNING)
- `2981` 444 Jurong West Ave 1, Singapore 640444 (postal: 640444, status: RUNNING)
- `2982` 555 Jurong West Street 42 (postal: 640555, status: RUNNING)
- `2983` 518 Jurong West Street 52 (postal: 640518, status: RUNNING)
- `2985` 689 Jurong West Central 1 (postal: 640689, status: RUNNING)
- `2986` 640 Jurong West Street 61 (postal: 640640, status: RUNNING)
- `2987` 601 Jurong West Street 62 (postal: 640601, status: RUNNING)
- `2988` 988A Jurong West Street 93 (postal: 641988, status: ERROR)

Removed
- `1121` FairPrice Tai Seng Mapletree 18 (postal: 539775, status: OFFLINE)
- `2256` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `2379` SHENG SIONG BLK 440 BUKI BATOK WEST AVE 8  (postal: 650440, status: OFFLINE)
- `2411` SHENG SIONG BLK 61 TEBAN GARDENS ROAD  (postal: 600061, status: OFFLINE)
- `2556` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
</details>

<details>
<summary><b>2026-08-15</b> · 1,221 locations · −25 · ±8</summary>

- Snapshot size: **1221** locations
- Added: **0**
- Removed: **25**
- Changed: **8**

Removed
- `1137` FairPrice Punggol Waterway Point (postal: 828761, status: OFFLINE)
- `2218` SHENG SIONG BLK 845 YISHUN ST 81 (postal: 760845, status: ERROR)
- `2345` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `2358` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `238` 510 Jurong West Street 51 (postal: 640510, status: MAINTENANCE)
- `2389` Grindewald Supermarket 108 Clementi (postal: 120108, status: OFFLINE)
- `2396` Isetan Orchard Shaw House (postal: 238868, status: RUNNING)
- `2450` Sparrows 206 Bedok North Street 1 (postal: 460206, status: RUNNING)
- `2480` SCARLETT@PASIR RIS MALL (postal: 519612, status: RUNNING)
- `2552` AJMAL TRADE MART - Kranji Lodge One (postal: 739522, status: RUNNING)
- `2553` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `2558` 7 Seven 51 North South Ave (postal: 756992, status: ERROR)
- `2560` AJMAL TRADING GROUP - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2568` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `2671` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: FULL)
- `2796` Blk 72, Marine Drive (postal: 440072, status: offline)
- `2806` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `2863` 204 Clementi Ave 6 (postal: 120204, status: offline)
- `2864` 138 Yishun Ring Road (postal: 760138, status: offline)
- `2867` Shunfu Mart (postal: 570320, status: offline)
- `2868` Cold Storage Pasir Ris Mall (postal: 519612, status: OFFLINE)
- `2869` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `2877` BCRS Office (postal: 577180, status: RUNNING)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `1176` Singapore Polytechnic (SP) T11A Building
  - address: 1 Maritime Square, #03-23 / 38 HarbourFront Centre, 099253 -> 500 Dover Rd, 139651
  - latitude: 1.26420000 -> 1.31033000
  - locationName: Don Don Donki (HarbourFront Centre) -> Singapore Polytechnic (SP) T11A Building
  - longitude: 103.82030000 -> 103.77916000
  - postalCode: 099253 -> 139651
  - zipcode: 099253 -> 139651
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.38557900
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90250300
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `2256` FORTUNE SUPERMARKET 463
  - address: Block 463 Sembawang Drive #01-02, 750463 -> BLK 463 SEMBAWANG DRIVE #01-02 SINGAPORE, 750463
  - locationName: Fortune Blk 463 Sembawang Drive -> FORTUNE SUPERMARKET 463
- `2271` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `2556` Nawas Global - Tuas South Dormitory
  - address: NO 3. TUAS SOUTH STREET 12, #01-16 TUAS SOUTH DORMITORY, 636947 -> NO.3 TUAS SOUTH STREET 12, #01-16 TUAS SOUTH DORMITORY, 636947
  - locationName: NAWAS GLOBAL - Tuas South Dormitory -> Nawas Global - Tuas South Dormitory
- `2559` Ajmal Trading Group - Kranji Recreation Centre
  - address: 11 KRANJI CLOSE ,#01-02/03, KRANJI RECREATION CENTER, 737673 -> 11 Kranji Close, #01-02/03 Kranji Recreation Centre, 737673
  - locationName: AJMAL TRADING - Kranji Recreation Centre -> Ajmal Trading Group - Kranji Recreation Centre
- `2566` Ajmal Trading Group - Jalan Papan Aspri Westlite
  - address: 5 JALAN PAPAN #01-32, ASPRI-WESTLITE PAPAN, 619396 -> NO.5D JALAN PAPAN, #01-31 WEST LITE DORMITORY, 619421
  - locationName: AJMAL TRADING GROUP - Jalan Papan Aspri Westlite -> Ajmal Trading Group - Jalan Papan Aspri Westlite
  - postalCode: 619396 -> 619421
  - zipcode: 619396 -> 619421
</details>

<details>
<summary><b>2026-08-14</b> · 1,246 locations · +32 · ±4</summary>

- Snapshot size: **1246** locations
- Added: **32**
- Removed: **0**
- Changed: **4**

Added
- `2218` SHENG SIONG BLK 845 YISHUN ST 81 (postal: 760845, status: ERROR)
- `2256` Fortune Blk 463 Sembawang Drive (postal: 750463, status: RUNNING)
- `2345` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `2358` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `238` 510 Jurong West Street 51 (postal: 640510, status: MAINTENANCE)
- `2389` Grindewald Supermarket 108 Clementi (postal: 120108, status: OFFLINE)
- `2396` Isetan Orchard Shaw House (postal: 238868, status: RUNNING)
- `2480` SCARLETT@PASIR RIS MALL (postal: 519612, status: RUNNING)
- `2552` AJMAL TRADE MART - Kranji Lodge One (postal: 739522, status: RUNNING)
- `2553` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `2556` NAWAS GLOBAL - Tuas South Dormitory (postal: 636947, status: FULL)
- `2557` Ajmal Super Market - Tuas View Dormitory (postal: 637285, status: RUNNING)
- `2558` 7 Seven 51 North South Ave (postal: 756992, status: ERROR)
- `2559` AJMAL TRADING - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `2560` AJMAL TRADING GROUP - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2566` AJMAL TRADING GROUP - Jalan Papan Aspri Westlite (postal: 619396, status: OFFLINE)
- `2568` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `2796` Blk 72, Marine Drive (postal: 440072, status: offline)
- `2806` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `2863` 204 Clementi Ave 6 (postal: 120204, status: offline)
- `2864` 138 Yishun Ring Road (postal: 760138, status: offline)
- `2867` Shunfu Mart (postal: 570320, status: offline)
- `2868` Cold Storage Pasir Ris Mall (postal: 519612, status: OFFLINE)
- `2869` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `2877` BCRS Office (postal: 577180, status: RUNNING)
- `2956` Block 8 Tanjong Pagar Plaza (postal: 080008, status: RUNNING)
- `2957` Block 8 Cantonment Cl (postal: 081008, status: RUNNING)
- `2958` Block 3 Jalan Bukit Merah (postal: 150003, status: RUNNING)
- `2959` Block 166 Stirling Road (postal: 140166, status: RUNNING)
- `2960` Block 181 Stirling Rd (postal: 141182, status: RUNNING)

Changed
- `2271` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
- `2450` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206 -> 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206
  - latitude: 1.32646400 -> 1.32642100
  - longitude: 103.93095800 -> 103.93097300
- `2875` 16 Bedok South Rd Hawker Centre
  - address: 16 Bedok S Rd, 460016 -> 16 Bedok South Rd, 460016
  - locationName: 16 Bedok S Rd -> 16 Bedok South Rd Hawker Centre
- `2945` Blk 409 Ang Mo Kio Ave 10 Market & Hawker Centre
  - locationName: Market & Hawker Centre (Blk 409 Ang Mo Kio Ave 10) -> Blk 409 Ang Mo Kio Ave 10 Market & Hawker Centre
</details>

<details>
<summary><b>2026-08-13</b> · 1,214 locations · +6 · ±2</summary>

- Snapshot size: **1214** locations
- Added: **6**
- Removed: **0**
- Changed: **2**

Added
- `2950` Singapore Management University (SMU) (postal: 178902, status: RUNNING)
- `2951` Blk 36 Sin Ming Industrial Estate (postal: 575710, status: RUNNING)
- `2952` Singapore University of Social Sciences (SUSS) (postal: 599494, status: RUNNING)
- `2953` Punggol Way Dorm, Sharbesuwary Pte Ltd (postal: 828646, status: ERROR)
- `2954` Blk 1 AMK Tech I (postal: 568049, status: RUNNING)
- `2955` Blk 5058 Ang Mo Kio Ind Park 2 (postal: 569561, status: RUNNING)

Changed
- `1210` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.38557900 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90250300 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `2760` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
</details>

<details>
<summary><b>2026-08-12</b> · 1,208 locations · +1 · −1 · ±4</summary>

- Snapshot size: **1208** locations
- Added: **1**
- Removed: **1**
- Changed: **4**

Added
- `2671` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: FULL)

Removed
- `2556` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)

Changed
- `1176` Don Don Donki (HarbourFront Centre)
  - address: 500 Dover Rd, 139651 -> 1 Maritime Square, #03-23 / 38 HarbourFront Centre, 099253
  - latitude: 1.31033000 -> 1.26420000
  - locationName: Singapore Polytechnic (SP) T11A Building -> Don Don Donki (HarbourFront Centre)
  - longitude: 103.77916000 -> 103.82030000
  - postalCode: 139651 -> 099253
  - zipcode: 139651 -> 099253
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.38557900
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90250300
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `2271` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
</details>

<details>
<summary><b>2026-08-11</b> · 1,208 locations · +3 · −5 · ±3</summary>

- Snapshot size: **1208** locations
- Added: **3**
- Removed: **5**
- Changed: **3**

Added
- `2556` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)
- `2875` 16 Bedok S Rd (postal: 460016, status: RUNNING)
- `2946` Blk 518, Bedok North Ave 2 (postal: 460518, status: MAINTENANCE)

Removed
- `2557` Ajmal Super Market - Tuas View Dormitory (postal: 637285, status: ERROR)
- `2559` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `2566` Ajmal Trading Group - Jalan Papan Aspri Westlite (postal: 619421, status: ERROR)
- `2671` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: FULL)

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `1176` Singapore Polytechnic (SP) T11A Building
  - address: 1 Maritime Square, #03-23 / 38 HarbourFront Centre, 099253 -> 500 Dover Rd, 139651
  - latitude: 1.26420000 -> 1.31033000
  - locationName: Don Don Donki (HarbourFront Centre) -> Singapore Polytechnic (SP) T11A Building
  - longitude: 103.82030000 -> 103.77916000
  - postalCode: 099253 -> 139651
  - zipcode: 099253 -> 139651
- `2271` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
</details>

<details>
<summary><b>2026-08-10</b> · 1,210 locations · +8 · ±4</summary>

- Snapshot size: **1210** locations
- Added: **8**
- Removed: **0**
- Changed: **4**

Added
- `2557` Ajmal Super Market - Tuas View Dormitory (postal: 637285, status: ERROR)
- `2559` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `2566` Ajmal Trading Group - Jalan Papan Aspri Westlite (postal: 619421, status: ERROR)
- `2900` Block 75B Redhill Rd (postal: 152075, status: RUNNING)
- `2947` Block 52A Commonwealth Dr (postal: 143052, status: RUNNING)
- `2948` Block 81 Redhill Ln (postal: 150081, status: RUNNING)
- `2949` Block 69 Redhill Cl (postal: 160069, status: OFFLINE)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `1210` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.38557900 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90250300 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `2271` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `2760` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
</details>

<details>
<summary><b>2026-08-09</b> · 1,202 locations · +1 · ±2</summary>

- Snapshot size: **1202** locations
- Added: **1**
- Removed: **0**
- Changed: **2**

Added
- `2945` Market & Hawker Centre (Blk 409 Ang Mo Kio Ave 10) (postal: 560409, status: RUNNING)

Changed
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.38557900
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90250300
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
</details>

<details>
<summary><b>2026-08-08</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-08-07</b> · 1,201 locations · +6 · ±2</summary>

- Snapshot size: **1201** locations
- Added: **6**
- Removed: **0**
- Changed: **2**

Added
- `2353` FairPrice Our Tampines Hub (postal: 528523, status: RUNNING)
- `2807` FairPrice Our Tampines Hub (postal: 528523, status: RUNNING)
- `2909` Block 22 Dover Crescent (postal: 133022, status: RUNNING)
- `2910` Block 94 Dawson Road (postal: 142094, status: RUNNING)
- `2911` Block 69 Telok Blangah Heights (postal: 100069, status: RUNNING)
- `2912` FairPrice 289A Toh Guan (postal: 601289, status: RUNNING)

Changed
- `2271` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
- `2908` Block 1 Dover Rd
  - address: Block 22 Dover Crescent, 133022 -> Block 1 Dover Rd, 130001
  - latitude: 1.30707400 -> 1.30252700
  - locationName: Block 22 Dover Crescent -> Block 1 Dover Rd
  - longitude: 103.78380800 -> 103.78319400
  - postalCode: 133022 -> 130001
  - zipcode: 133022 -> 130001
</details>

<details>
<summary><b>2026-08-06</b> · 1,195 locations · +7 · −17 · ±1</summary>

- Snapshot size: **1195** locations
- Added: **7**
- Removed: **17**
- Changed: **1**

Added
- `2883` Blk 514, Bedok North Ave 2 (postal: 460513, status: RUNNING)
- `2885` 510 Jurong West Street 51 (postal: 640510, status: RUNNING)
- `2890` Blk 501, Bedok North Street 3 (postal: 460503, status: MAINTENANCE)
- `2905` Block 150 Mei Ling St (postal: 141150, status: RUNNING)
- `2906` Block 49 Lengkok Bahru (postal: 150049, status: RUNNING)
- `2907` Block 52 Lengkok Bahru (postal: 150052, status: RUNNING)
- `2908` Block 22 Dover Crescent (postal: 133022, status: RUNNING)

Removed
- `2256` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `2345` Giant Hypermarket Tampines (postal: n/a, status: RUNNING)
- `2353` FairPrice Our Tampines Hub (postal: n/a, status: RUNNING)
- `2358` ONE Supermarket Pte. Ltd. (postal: n/a, status: RUNNING)
- `238` 510 Jurong West Street 51 (postal: 640510, status: MAINTENANCE)
- `2389` Grindelwald Supermarket (postal: 120108, status: OFFLINE)
- `2396` Isetan Scotts Supermarket (postal: 238868, status: RUNNING)
- `2552` Ajmal Trade Mart - Kranji Lodge One (postal: 739522, status: RUNNING)
- `2556` Nawas Global - Tuas South Dormitory (postal: 636947, status: ERROR)
- `2557` Ajmal Super Market - Tuas View Dormitory (postal: 637285, status: ERROR)
- `2558` 7seven Pte. Ltd. (postal: 756992, status: RUNNING)
- `2559` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: ERROR)
- `2566` Ajmal Trading Group - Jalan Papan Aspri Westlite (postal: 619421, status: ERROR)
- `2568` 1 Jelebu Road, #01-33/34, Singapore 677743 (postal: 677743, status: RUNNING)
- `2868` Cold Storage Pasir Ris Mall (postal: n/a, status: RUNNING)

Changed
- `2271` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - rvmOpeningHours: Mon - Sun:  08:00 AM - 10:00 PM -> Mon - Sun:  1:00 PM - 11:30 PM
  - zipcode: 769162 -> 636906
</details>

<details>
<summary><b>2026-08-05</b> · 1,205 locations · +5 · −17 · ±17</summary>

- Snapshot size: **1205** locations
- Added: **5**
- Removed: **17**
- Changed: **17**

Added
- `2870` 117 Aljunied Ave 2 Market & Food Centre (postal: 380117, status: RUNNING)
- `2901` Block 118 Bukit Merah View (postal: 150118, status: RUNNING)
- `2902` Block 19 Jalan Membina (postal: 164019, status: RUNNING)
- `2903` Block 118B Jalan Membina (postal: 161118, status: RUNNING)
- `2904` Block 102 Bukit Purmei Road (postal: 090102, status: RUNNING)

Removed
- `2218` SHENG SIONG BLK 845 YISHUN ST 81 (postal: 760845, status: ERROR)
- `2480` SCARLETT@PASIR RIS MALL (postal: 519612, status: RUNNING)
- `2553` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2796` Blk 72, Marine Drive (postal: 440072, status: offline)
- `2797` Food Joy Buona Vista (postal: 118157, status: offline)
- `2798` Phan 99 2 SELETAR NORTH LINK (postal: 797601, status: offline)
- `2799` Supernature Dempsey Road (postal: 249686, status: offline)
- `2800` Culina 15 Dempsey (postal: 249675, status: offline)
- `2806` SHENG SIONG BLK 602A TAMPINES AVENUE 9 (postal: 521602, status: RUNNING)
- `2807` FairPrice Our Tampines Hub (postal: 528523, status: RUNNING)
- `2863` 204 Clementi Ave 6 (postal: 120204, status: offline)
- `2864` 138 Yishun Ring Road (postal: 760138, status: offline)
- `2867` Shunfu Mart (postal: 570320, status: offline)
- `2869` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `2877` BCRS Office (postal: 577180, status: RUNNING)
- `2885` 510 Jurong West Street 51 (postal: 640510, status: RUNNING)

Changed
- `2256` FORTUNE SUPERMARKET 463
  - address: Block 463 Sembawang Drive #01-02, 750463 -> BLK 463 SEMBAWANG DRIVE #01-02 SINGAPORE
  - locationName: Fortune Blk 463 Sembawang Drive -> FORTUNE SUPERMARKET 463
- `2345` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> null
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> null
  - zipcode: 521602 -> null
- `2353` FairPrice Our Tampines Hub
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> null
  - postalCode: 528523 -> null
  - zipcode: 528523 -> null
- `2358` ONE Supermarket Pte. Ltd.
  - address: Blk 201B Tampines Street 21, 522201 -> null
  - latitude: 1.35344200 -> 1.35338600
  - locationName: One Supermarket Blk 201B Tampines Street 21 -> ONE Supermarket Pte. Ltd.
  - longitude: 103.95296100 -> 103.95307800
  - postalCode: 522201 -> null
  - zipcode: 522201 -> null
- `2389` Grindelwald Supermarket
  - address: 108 CLEMENTI STREET 11 #01-K1, 120108 -> Blk 108 Clementi Street 11 #01-K1
  - locationName: Grindewald Supermarket 108 Clementi -> Grindelwald Supermarket
- `2396` Isetan Scotts Supermarket
  - address: 350 ORCHARD ROAD #B1-00, SHAW HOUSE, 238868 -> 350 ORCHARD ROAD #B1-00
  - locationName: Isetan Orchard Shaw House -> Isetan Scotts Supermarket
- `2552` Ajmal Trade Mart - Kranji Lodge One
  - address: 12 KRANJI ROAD,, KRANJI LODGE ONE, 739522 -> No.12 Kranji Road
  - locationName: AJMAL TRADE MART - Kranji Lodge One -> Ajmal Trade Mart - Kranji Lodge One
- `2556` Nawas Global - Tuas South Dormitory
  - address: NO 3. TUAS SOUTH STREET 12, #01-16 TUAS SOUTH DORMITORY, 636947 -> NO.3 TUAS SOUTH STREET 12
  - locationName: NAWAS GLOBAL - Tuas South Dormitory -> Nawas Global - Tuas South Dormitory
- `2557` Ajmal Super Market - Tuas View Dormitory
  - address: NO.70 TUAS SOUTH AVENUE 1, #01-40 TUAS VIEW DORMITORY, 637285 -> NO.70 TUAS SOUTH AVENUE 1
  - locationName: AJMAL SUPERMART - Tuas View Dormitory -> Ajmal Super Market - Tuas View Dormitory
- `2558` 7seven Pte. Ltd.
  - address: 51 NORTH COAST AVENUE #01-03, NORTH COAST LODGE, 756992 -> 51 North Coast Avenue
  - locationName: 7 Seven 51 North South Ave -> 7seven Pte. Ltd.
- `2559` Ajmal Trading Group - Kranji Recreation Centre
  - address: 11 KRANJI CLOSE ,#01-02/03, KRANJI RECREATION CENTER, 737673 -> 11 Kranji Close
  - locationName: AJMAL TRADING - Kranji Recreation Centre -> Ajmal Trading Group - Kranji Recreation Centre
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory
  - address: NO.2 WOODLANDS SECTOR 2, #01-05 WESTLITE DORMITORY, 737723 -> 2 Woodlands Sector 2
  - locationName: AJMAL TRADING GROUP - Woodlands Westlite Dormitory -> Ajmal Trading Group - Woodlands Westlite Dormitory
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-21 SUNGEI TENGAH LODGE
- `2566` Ajmal Trading Group - Jalan Papan Aspri Westlite
  - address: 5 JALAN PAPAN #01-32, ASPRI-WESTLITE PAPAN, 619396 -> NO.5D JALAN PAPAN
  - locationName: AJMAL TRADING GROUP - Jalan Papan Aspri Westlite -> Ajmal Trading Group - Jalan Papan Aspri Westlite
  - postalCode: 619396 -> 619421
  - zipcode: 619396 -> 619421
- `2568` 1 Jelebu Road, #01-33/34, Singapore 677743
  - address: 1 Jelebu Rd, #01-33/34, 677743 -> 1 Jelebu Road, #01-33/34, Singapore 677743
  - locationName: Redman 1 Jelebu Rd -> 1 Jelebu Road, #01-33/34, Singapore 677743
- `2868` Cold Storage Pasir Ris Mall
  - address: Pasir Ris Mall 7 Pasir Ris Central B1-11, 519612 -> null
  - postalCode: 519612 -> null
  - zipcode: 519612 -> null
- `940` Blk 44, Chai Chee Street
  - latitude: 1.32868600 -> 1.32903900
  - longitude: 103.92621700 -> 103.92559200
</details>

<details>
<summary><b>2026-08-04</b> · 1,217 locations · +1 · ±4</summary>

- Snapshot size: **1217** locations
- Added: **1**
- Removed: **0**
- Changed: **4**

Added
- `2877` BCRS Office (postal: 577180, status: RUNNING)

Changed
- `2557` AJMAL SUPERMART - Tuas View Dormitory
  - locationName: AJMAL SUPER MART PTE LTD -> AJMAL SUPERMART - Tuas View Dormitory
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
  - locationName: Phan Nee #01-21 Sungei Tengah Lodge -> Phan Nee #01-21 SUNGEI TENGAH LODGE
  - longitude: 103.71879500 -> 103.71879800
- `2893` Cheng Yan Court - 269 Queen Street
  - locationName: Cheng Yan Court -> Cheng Yan Court - 269 Queen Street
- `805` Blk 55, Marine Ter
  - latitude: 1.30642300 -> 1.30542700
  - longitude: 103.91584200 -> 103.91396000
</details>

<details>
<summary><b>2026-08-03</b> · 1,216 locations · ±3</summary>

- Snapshot size: **1216** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `2271` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
- `2557` AJMAL SUPER MART PTE LTD
  - locationName: AJMAL SUPERMART - Tuas View Dormitory -> AJMAL SUPER MART PTE LTD
- `2562` Phan Nee #01-21 Sungei Tengah Lodge
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924
  - locationName: Phan Nee #01-21 SUNGEI TENGAH LODGE -> Phan Nee #01-21 Sungei Tengah Lodge
  - longitude: 103.71879800 -> 103.71879500
</details>

<details>
<summary><b>2026-08-02</b> · 1,216 locations · +8</summary>

- Snapshot size: **1216** locations
- Added: **8**
- Removed: **0**
- Changed: **0**

Added
- `2892` Bendemeer Market and Food Centre (postal: 330029, status: RUNNING)
- `2893` Cheng Yan Court (postal: 180269, status: RUNNING)
- `2894` Blk 5036 Ang Mo Kio Ind Park 2 (postal: 569539, status: RUNNING)
- `2895` Hong Lim Food Centre and Market (postal: 051531, status: RUNNING)
- `2896` Ngee Ann Polytechnic (NP) (postal: 599489, status: RUNNING)
- `2897` Blk 10 AMK Autopoint (postal: 568047, status: RUNNING)
- `2898` Fair Price Hougang Mall (postal: 538766, status: RUNNING)
- `2899` Nanyang Polytechnic (NYP) (postal: 569830, status: RUNNING)
</details>

<details>
<summary><b>2026-08-01</b> · 1,208 locations · +2 · ±11</summary>

- Snapshot size: **1208** locations
- Added: **2**
- Removed: **0**
- Changed: **11**

Added
- `2884` SHENG SIONG BLK 845 YISHUN ST 81 (postal: 760845, status: FULL)
- `2885` 510 Jurong West Street 51 (postal: 640510, status: RUNNING)

Changed
- `1210` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `2218` SHENG SIONG BLK 845 YISHUN ST 81
  - locationName: SHENG SIONG BLK 845 YISHUN ST 81  -> SHENG SIONG BLK 845 YISHUN ST 81
- `2271` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `2345` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `2396` Isetan Orchard Shaw House
  - address: 350 ORCHARD ROAD #B1-00, 238868 -> 350 ORCHARD ROAD #B1-00, SHAW HOUSE, 238868
  - locationName: Isetan Scotts Supermarket -> Isetan Orchard Shaw House
- `2450` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206 -> 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206
  - latitude: 1.32642100 -> 1.32646400
  - longitude: 103.93097300 -> 103.93095800
- `2557` AJMAL SUPERMART - Tuas View Dormitory
  - locationName: AJMAL SUPER MART PTE LTD -> AJMAL SUPERMART - Tuas View Dormitory
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
  - locationName: Phan Nee #01-21 Sungei Tengah Lodge -> Phan Nee #01-21 SUNGEI TENGAH LODGE
  - longitude: 103.71879500 -> 103.71879800
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE
  - address: #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924 -> #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
- `2568` Redman 1 Jelebu Rd
  - address: 1 Jelebu Road, #01-33/34, Singapore 677743, 677743 -> 1 Jelebu Rd, #01-33/34, 677743
  - locationName: Redman by Phoon Huat -> Redman 1 Jelebu Rd
- `2806` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
</details>

<details>
<summary><b>2026-07-31</b> · 1,206 locations · +5 · ±3</summary>

- Snapshot size: **1206** locations
- Added: **5**
- Removed: **0**
- Changed: **3**

Added
- `2886` Blk 17 Upper Boon Keng Market and Food Centre (postal: 380017, status: RUNNING)
- `2887` Little India Rowell Rd (postal: 200641, status: RUNNING)
- `2888` Whampoa Market (postal: 320090, status: RUNNING)
- `2889` Kukoh 21 Food Centre (postal: 161001, status: RUNNING)
- `2891` Gardens by the Bay (postal: 018953, status: offline)

Changed
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `2450` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206 -> 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206
  - latitude: 1.32646400 -> 1.32642100
  - longitude: 103.93095800 -> 103.93097300
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE
  - address: #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924
</details>

<details>
<summary><b>2026-07-30</b> · 1,201 locations · ±1</summary>

- Snapshot size: **1201** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `2450` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206 -> 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206
  - latitude: 1.32642100 -> 1.32646400
  - longitude: 103.93097300 -> 103.93095800
</details>

<details>
<summary><b>2026-07-29</b> · 1,201 locations · ±4</summary>

- Snapshot size: **1201** locations
- Added: **0**
- Removed: **0**
- Changed: **4**

Changed
- `2396` Isetan Scotts Supermarket
  - address: 350 ORCHARD ROAD #B1-00, SHAW HOUSE, 238868 -> 350 ORCHARD ROAD #B1-00, 238868
  - locationName: Isetan Orchard Shaw House -> Isetan Scotts Supermarket
- `2552` AJMAL TRADE MART - Kranji Lodge One
  - address: NO.12 KRANJI ROAD, KRANJI LODGE ONE, 739522 -> 12 KRANJI ROAD,, KRANJI LODGE ONE, 739522
  - locationName: AJMAL TRADE MART PTE LTD -> AJMAL TRADE MART - Kranji Lodge One
- `2562` Phan Nee #01-21 Sungei Tengah Lodge
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924
  - locationName: Phan Nee #01-21 SUNGEI TENGAH LODGE -> Phan Nee #01-21 Sungei Tengah Lodge
  - longitude: 103.71879800 -> 103.71879500
- `2568` Redman by Phoon Huat
  - address: 1 Jelebu Rd, #01-33/34, 677743 -> 1 Jelebu Road, #01-33/34, Singapore 677743, 677743
  - locationName: Redman 1 Jelebu Rd -> Redman by Phoon Huat
</details>

<details>
<summary><b>2026-07-28</b> · 1,201 locations · ±2</summary>

- Snapshot size: **1201** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `2450` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206 -> 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206
  - latitude: 1.32646400 -> 1.32642100
  - longitude: 103.93095800 -> 103.93097300
- `2557` AJMAL SUPER MART PTE LTD
  - locationName: AJMAL SUPERMART - Tuas View Dormitory -> AJMAL SUPER MART PTE LTD
</details>

<details>
<summary><b>2026-07-27</b> · 1,201 locations · +13 · ±1</summary>

- Snapshot size: **1201** locations
- Added: **13**
- Removed: **0**
- Changed: **1**

Added
- `1964` Thai Supermarket Aperia Mall (postal: 339511, status: RUNNING)
- `2256` Fortune Blk 463 Sembawang Drive (postal: 750463, status: RUNNING)
- `2358` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `2553` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `2556` NAWAS GLOBAL - Tuas South Dormitory (postal: 636947, status: ERROR)
- `2557` AJMAL SUPERMART - Tuas View Dormitory (postal: 637285, status: RUNNING)
- `2559` AJMAL TRADING - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `2560` AJMAL TRADING GROUP - Woodlands Westlite Dormitory (postal: 737723, status: FULL)
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2566` AJMAL TRADING GROUP - Jalan Papan Aspri Westlite (postal: 619396, status: OFFLINE)
- `2568` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `2867` Shunfu Mart (postal: 570320, status: offline)

Changed
- `1210` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
</details>

<details>
<summary><b>2026-07-26</b> · 1,188 locations · +1 · −13 · ±10</summary>

- Snapshot size: **1188** locations
- Added: **1**
- Removed: **13**
- Changed: **10**

Added
- `2879` Sims Vista Market & Food Centre (postal: 380049, status: RUNNING)

Removed
- `1964` Thai Supermarket Aperia Mall (postal: 339511, status: RUNNING)
- `2256` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `2358` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `2553` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `2556` NAWAS GLOBAL PTE LTD-TUAS (postal: 636947, status: ERROR)
- `2557` AJMAL SUPER MART PTE LTD (postal: 637285, status: RUNNING)
- `2559` AJMAL TRADING - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `2560` AJMAL TRADING GROUP -WOODLANDS (postal: 737723, status: RUNNING)
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2566` AJMAL TRADING GROUP - Jalan Papan Aspri Westlite (postal: 619396, status: OFFLINE)
- `2568` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `2867` Shunfu Mart (postal: 570320, status: offline)

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `2271` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
- `2345` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `2353` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2552` AJMAL TRADE MART PTE LTD
  - address: 12 KRANJI ROAD,, KRANJI LODGE ONE, 739522 -> NO.12 KRANJI ROAD, KRANJI LODGE ONE, 739522
  - locationName: AJMAL TRADE MART - Kranji Lodge One -> AJMAL TRADE MART PTE LTD
- `2671` Phan 66 PPT Lodge 1A Dormitory
  - latitude: 1.41979000 -> 1.41965500
  - longitude: 103.89630000 -> 103.89635300
- `2760` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `2806` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `2807` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
</details>

<details>
<summary><b>2026-07-25</b> · 1,200 locations · +13</summary>

- Snapshot size: **1200** locations
- Added: **13**
- Removed: **0**
- Changed: **0**

Added
- `1964` Thai Supermarket Aperia Mall (postal: 339511, status: RUNNING)
- `2358` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `2552` AJMAL TRADE MART - Kranji Lodge One (postal: 739522, status: RUNNING)
- `2553` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `2557` AJMAL SUPER MART PTE LTD (postal: 637285, status: RUNNING)
- `2559` AJMAL TRADING - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `2560` AJMAL TRADING GROUP -WOODLANDS (postal: 737723, status: RUNNING)
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2566` AJMAL TRADING GROUP - Jalan Papan Aspri Westlite (postal: 619396, status: OFFLINE)
- `2568` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `2671` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: RUNNING)
- `2760` MSE Family Go Green Week’s Sustainability Fair (postal: 228231, status: ERROR)
- `2867` Shunfu Mart (postal: 570320, status: offline)
</details>

<details>
<summary><b>2026-07-24</b> · 1,187 locations · −13 · ±2</summary>

- Snapshot size: **1187** locations
- Added: **0**
- Removed: **13**
- Changed: **2**

Removed
- `1964` Thai Supermarket Aperia Mall (postal: 339511, status: RUNNING)
- `2358` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `2552` AJMAL TRADE MART - Kranji Lodge One (postal: 739522, status: RUNNING)
- `2553` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `2557` AJMAL SUPERMART - Tuas View Dormitory (postal: 637285, status: RUNNING)
- `2559` AJMAL TRADING - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `2560` AJMAL TRADING GROUP - Woodlands Westlite Dormitory (postal: 737723, status: ERROR)
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2566` AJMAL TRADING GROUP PTE LTD - Jalan Papan Aspri Westlite (postal: 619421, status: OFFLINE)
- `2568` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `2671` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: RUNNING)
- `2760` MSE Family Go Green Week’s Sustainability Fair (postal: 228231, status: RUNNING)
- `2867` Shunfu Mart (postal: 570320, status: offline)

Changed
- `2808` Blk 216 Bedok North Street 1 Market & Hawker Centre
  - locationName: 216 Bedok North Street 1 -> Blk 216 Bedok North Street 1 Market & Hawker Centre
- `2809` 208B New Upper Changi Road Hawker Centre
  - locationName: 208B New Upper Changi Rd -> 208B New Upper Changi Road Hawker Centre
</details>

<details>
<summary><b>2026-07-23</b> · 1,200 locations · +2 · −1 · ±5</summary>

- Snapshot size: **1200** locations
- Added: **2**
- Removed: **1**
- Changed: **5**

Added
- `2872` FORTUNE SUPERMARKET 780 (postal: 730780, status: RUNNING)
- `2873` Westlite Jalan Tukang Dormitory (postal: 619267, status: RUNNING)

Removed
- `2865` BCRS Office (postal: 577180, status: RUNNING)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `2450` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206 -> 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206
  - latitude: 1.32642100 -> 1.32646400
  - longitude: 103.93097300 -> 103.93095800
- `2559` AJMAL TRADING - Kranji Recreation Centre
  - address: 11 KRANJI CLOSE, #01-02/03 KRANJI RECREATION CENTER, 737673 -> 11 KRANJI CLOSE ,#01-02/03, KRANJI RECREATION CENTER, 737673
  - locationName: AJMAL TRADING GROUP-RC -> AJMAL TRADING - Kranji Recreation Centre
- `2560` AJMAL TRADING GROUP - Woodlands Westlite Dormitory
  - locationName: AJMAL TRADING GROUP -WOODLANDS -> AJMAL TRADING GROUP - Woodlands Westlite Dormitory
- `2566` AJMAL TRADING GROUP PTE LTD - Jalan Papan Aspri Westlite
  - address: 5 JALAN PAPAN #01-32, ASPRI-WESTLITE PAPAN, 619396 -> NO.5D JALAN PAPAN, #01-31 WEST LITE DORMITORY, 619421
  - locationName: AJMAL TRADING GROUP - Jalan Papan Aspri Westlite -> AJMAL TRADING GROUP PTE LTD - Jalan Papan Aspri Westlite
  - postalCode: 619396 -> 619421
  - zipcode: 619396 -> 619421
</details>

<details>
<summary><b>2026-07-22</b> · 1,199 locations · +7 · ±5</summary>

- Snapshot size: **1199** locations
- Added: **7**
- Removed: **0**
- Changed: **5**

Added
- `2808` 216 Bedok North Street 1 (postal: 460216, status: RUNNING)
- `2809` 208B New Upper Changi Rd (postal: 462208, status: RUNNING)
- `2865` BCRS Office (postal: 577180, status: RUNNING)
- `2866` SCARLETT@PASIR RIS MALL (postal: 519612, status: MAINTENANCE)
- `2867` Shunfu Mart (postal: 570320, status: offline)
- `2868` Cold Storage Pasir Ris Mall (postal: 519612, status: MAINTENANCE)
- `2869` SACHI MINIMART PTE LTD (postal: 608537, status: offline)

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `2556` NAWAS GLOBAL PTE LTD-TUAS
  - address: NO 3. TUAS SOUTH STREET 12, #01-16 TUAS SOUTH DORMITORY, 636947 -> NO.3 TUAS SOUTH STREET 12, #01-16 TUAS SOUTH DORMITORY, 636947
  - locationName: NAWAS GLOBAL - Tuas South Dormitory -> NAWAS GLOBAL PTE LTD-TUAS
- `2557` AJMAL SUPERMART - Tuas View Dormitory
  - locationName: AJMAL SUPER MART PTE LTD -> AJMAL SUPERMART - Tuas View Dormitory
- `2560` AJMAL TRADING GROUP -WOODLANDS
  - locationName: AJMAL TRADING GROUP - Woodlands Westlite Dormitory -> AJMAL TRADING GROUP -WOODLANDS
- `2671` Phan 66 PPT Lodge 1A Dormitory
  - latitude: 1.41965500 -> 1.41979000
  - longitude: 103.89635300 -> 103.89630000
</details>

<details>
<summary><b>2026-07-21</b> · 1,192 locations · +3 · −6 · ±5</summary>

- Snapshot size: **1192** locations
- Added: **3**
- Removed: **6**
- Changed: **5**

Added
- `2813` Blk 701, Bedok Reservoir Road (postal: 470701, status: RUNNING)
- `2863` 204 Clementi Ave 6 (postal: 120204, status: offline)
- `2864` 138 Yishun Ring Road (postal: 760138, status: offline)

Removed
- `2768` Shunfu Mart (postal: 570320, status: offline)
- `2801` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `2803` Cold Storage Pasir Ris Mall (postal: 519612, status: offline)
- `2804` SCARLETT@PASIR RIS MALL (postal: 519612, status: offline)
- `2826` BCRS Office (postal: 577180, status: RUNNING)
- `2862` Blk 701, Bedok Reservoir Road (postal: 470701, status: offline)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
- `2821` ASPRI-D Wall Papan Dormitory
  - address: 2G Jalan Papan, 619834 -> 2G Jalan Papan, D Wall Papan Dormitory, 619834
  - locationName: Astri-D Wall Papan Dormitory -> ASPRI-D Wall Papan Dormitory
- `2823` Bird Paradise
  - address: 20 Mandai Lake Rd, 729825 -> 20 Mandai Lake Rd, Mandai Wildlife WEST, 729825
  - locationName: Mandai Bird Paradise -> Bird Paradise
- `2828` West 1800 Dormitory
  - address: 2A Penjuru Road, 609853 -> (Former Prime Lodge) 609853 Singapore, 609853
</details>

<details>
<summary><b>2026-07-20</b> · 1,195 locations · +11 · −2 · ±3</summary>

- Snapshot size: **1195** locations
- Added: **11**
- Removed: **2**
- Changed: **3**

Added
- `2816` NESST Tukang Dormitory (postal: 619599, status: ERROR)
- `2821` Astri-D Wall Papan Dormitory (postal: 619834, status: RUNNING)
- `2822` Singapore Zoo (postal: 729826, status: RUNNING)
- `2823` Mandai Bird Paradise (postal: 729825, status: RUNNING)
- `2824` Penjuru Recreation Centre (postal: 608538, status: RUNNING)
- `2825` Chong Pang Food Centre (postal: 760105, status: RUNNING)
- `2826` BCRS Office (postal: 577180, status: RUNNING)
- `2827` 138 Yishun Ring Road, Singapore 760138 (postal: 760138, status: RUNNING)
- `2828` West 1800 Dormitory (postal: 609853, status: RUNNING)
- `2829` 204 Clementi Ave 6, Singapore 120204 (postal: 120204, status: RUNNING)
- `2862` Blk 701, Bedok Reservoir Road (postal: 470701, status: offline)

Removed
- `2606` 138 Yishun Ring Road (postal: 760138, status: OFFLINE)
- `276` 204 Clementi Ave 6 (postal: 120204, status: OFFLINE)

Changed
- `2450` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206 -> 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206
  - latitude: 1.32646400 -> 1.32642100
  - longitude: 103.93095800 -> 103.93097300
- `2557` AJMAL SUPER MART PTE LTD
  - locationName: AJMAL SUPERMART - Tuas View Dormitory -> AJMAL SUPER MART PTE LTD
- `2559` AJMAL TRADING GROUP-RC
  - address: 11 KRANJI CLOSE ,#01-02/03, KRANJI RECREATION CENTER, 737673 -> 11 KRANJI CLOSE, #01-02/03 KRANJI RECREATION CENTER, 737673
  - locationName: AJMAL TRADING - Kranji Recreation Centre -> AJMAL TRADING GROUP-RC
</details>

<details>
<summary><b>2026-07-19</b> · 1,186 locations · +5 · ±10</summary>

- Snapshot size: **1186** locations
- Added: **5**
- Removed: **0**
- Changed: **10**

Added
- `2815` Blk 69 Geylang Bahru Market and Food Centre (postal: 330069, status: RUNNING)
- `2817` Block 108B Bidadari Park Drive (postal: 342108, status: RUNNING)
- `2818` Block 118A Bidadari Park Drive (postal: 341118, status: RUNNING)
- `2819` Block 112A Bidadari Park Drive (postal: 341112, status: RUNNING)
- `2820` Block 101 Bidadari Park Drive (postal: 340101, status: RUNNING)

Changed
- `2256` FORTUNE SUPERMARKET 463
  - address: Block 463 Sembawang Drive #01-02, 750463 -> BLK 463 SEMBAWANG DRIVE #01-02 SINGAPORE, 750463
  - locationName: Fortune Blk 463 Sembawang Drive -> FORTUNE SUPERMARKET 463
- `2271` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `2345` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `2353` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `2553` Fortune blk 780 Woodlands Cresent
  - address: BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780 -> Block 780 Woodlands Crescent #01-01, 730780
  - locationName: FORTUNE SUPERMARKET 780 -> Fortune blk 780 Woodlands Cresent
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE
  - address: #01-02 Sungei Tengah Lodge 500 Old Cho Chu Kang Road, 698924 -> #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
  - locationName: Phan Nee #01-02 Sungei Tengah Lodge -> Phan Nee #01-02 SUNGEI TENGAH LODGE
- `2760` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `2806` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `2807` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
</details>

<details>
<summary><b>2026-07-18</b> · 1,181 locations · ±4</summary>

- Snapshot size: **1181** locations
- Added: **0**
- Removed: **0**
- Changed: **4**

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `2557` AJMAL SUPERMART - Tuas View Dormitory
  - locationName: AJMAL SUPER MART PTE LTD -> AJMAL SUPERMART - Tuas View Dormitory
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
  - locationName: Phan Nee #01-21 Sungei Tengah Lodge -> Phan Nee #01-21 SUNGEI TENGAH LODGE
  - longitude: 103.71879500 -> 103.71879800
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
</details>

<details>
<summary><b>2026-07-17</b> · 1,181 locations · +2 · ±6</summary>

- Snapshot size: **1181** locations
- Added: **2**
- Removed: **0**
- Changed: **6**

Added
- `2810` Blk 608, Bedok Reservoir Road (postal: 470608, status: RUNNING)
- `2811` Singapore University of Technology and Design (SUTD) (postal: 485995, status: RUNNING)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `2271` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
- `2557` AJMAL SUPER MART PTE LTD
  - locationName: AJMAL SUPERMART - Tuas View Dormitory -> AJMAL SUPER MART PTE LTD
- `2562` Phan Nee #01-21 Sungei Tengah Lodge
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924 -> #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924
  - locationName: Phan Nee #01-21 SUNGEI TENGAH LODGE -> Phan Nee #01-21 Sungei Tengah Lodge
  - longitude: 103.71879800 -> 103.71879500
- `2565` Phan Nee #01-02 Sungei Tengah Lodge
  - address: #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924 -> #01-02 Sungei Tengah Lodge 500 Old Cho Chu Kang Road, 698924
  - locationName: Phan Nee #01-02 SUNGEI TENGAH LODGE -> Phan Nee #01-02 Sungei Tengah Lodge
- `2760` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
</details>

<details>
<summary><b>2026-07-16</b> · 1,179 locations · +1 · ±3</summary>

- Snapshot size: **1179** locations
- Added: **1**
- Removed: **0**
- Changed: **3**

Added
- `2805` Masjid Sultan Mosque (postal: 198833, status: RUNNING)

Changed
- `2553` FORTUNE SUPERMARKET 780
  - address: Block 780 Woodlands Crescent #01-01, 730780 -> BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780
  - locationName: Fortune blk 780 Woodlands Cresent -> FORTUNE SUPERMARKET 780
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE
  - address: #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924
</details>

<details>
<summary><b>2026-07-15</b> · 1,178 locations · +2</summary>

- Snapshot size: **1178** locations
- Added: **2**
- Removed: **0**
- Changed: **0**

Added
- `2806` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `2807` FairPrice Our Tampines Hub (postal: 528523, status: RUNNING)
</details>

<details>
<summary><b>2026-07-14</b> · 1,176 locations · +2 · −2 · ±6</summary>

- Snapshot size: **1176** locations
- Added: **2**
- Removed: **2**
- Changed: **6**

Added
- `2787` 85 Fengshan Centre (postal: 460085, status: ERROR)
- `2788` Temasek Polytechnic (postal: 529757, status: RUNNING)

Removed
- `2342` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `2513` FairPrice Our Tampines Hub (postal: 528523, status: RUNNING)

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `218` 671A Choa Chu Kang Cres
  - latitude: 1.43851900 -> 1.40213100
  - longitude: 103.77872100 -> 103.74789300
- `254` 618 Choa Chu Kang North 7
  - latitude: 1.39868100 -> 1.40037500
  - longitude: 103.74606000 -> 103.74698000
- `2553` Fortune blk 780 Woodlands Cresent
  - address: BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780 -> Block 780 Woodlands Crescent #01-01, 730780
  - locationName: FORTUNE SUPERMARKET 780 -> Fortune blk 780 Woodlands Cresent
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
  - locationName: Phan Nee #01-21 Sungei Tengah Lodge -> Phan Nee #01-21 SUNGEI TENGAH LODGE
  - longitude: 103.71879500 -> 103.71879800
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
</details>

<details>
<summary><b>2026-07-13</b> · 1,176 locations · ±3</summary>

- Snapshot size: **1176** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `2358` One Supermarket Blk 201B Tampines Street 21
  - address: Blk 201B Tampines St 21, #01-1091, 522201 -> Blk 201B Tampines Street 21, 522201
  - latitude: 1.35338600 -> 1.35344200
  - locationName: ONE Supermarket Pte. Ltd. -> One Supermarket Blk 201B Tampines Street 21
  - longitude: 103.95307800 -> 103.95296100
- `2562` Phan Nee #01-21 Sungei Tengah Lodge
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924
  - locationName: Phan Nee #01-21 SUNGEI TENGAH LODGE -> Phan Nee #01-21 Sungei Tengah Lodge
  - longitude: 103.71879800 -> 103.71879500
- `2760` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
</details>

<details>
<summary><b>2026-07-12</b> · 1,176 locations · +1 · ±5</summary>

- Snapshot size: **1176** locations
- Added: **1**
- Removed: **0**
- Changed: **5**

Added
- `2766` Shunfu-Mart (postal: 570320, status: RUNNING)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `2358` ONE Supermarket Pte. Ltd.
  - address: Blk 201B Tampines Street 21, 522201 -> Blk 201B Tampines St 21, #01-1091, 522201
  - latitude: 1.35344200 -> 1.35338600
  - locationName: One Supermarket Blk 201B Tampines Street 21 -> ONE Supermarket Pte. Ltd.
  - longitude: 103.95296100 -> 103.95307800
- `2553` FORTUNE SUPERMARKET 780
  - address: Block 780 Woodlands Crescent #01-01, 730780 -> BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780
  - locationName: Fortune blk 780 Woodlands Cresent -> FORTUNE SUPERMARKET 780
- `2671` Phan 66 PPT Lodge 1A Dormitory
  - latitude: 1.41979000 -> 1.41965500
  - longitude: 103.89630000 -> 103.89635300
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
</details>

<details>
<summary><b>2026-07-11</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-07-10</b> · 1,175 locations · +3 · −2 · ±12</summary>

- Snapshot size: **1175** locations
- Added: **3**
- Removed: **2**
- Changed: **12**

Added
- `2802` People's Park Food Centre (postal: 050032, status: MAINTENANCE)
- `2803` Cold Storage Pasir Ris Mall (postal: 519612, status: offline)
- `2804` SCARLETT@PASIR RIS MALL (postal: 519612, status: offline)

Removed
- `2412` Cold Storage Pasir Ris Mall (postal: 519612, status: OFFLINE)
- `2784` SCARLETT@PASIR RIS MALL (postal: 519612, status: OFFLINE)

Changed
- `1301` National University of Singapore 36 College Avenue East
  - locationName: NUS 36 College Avenue East -> National University of Singapore 36 College Avenue East
- `1319` FairPrice Alexandra Retail Centre ARC (PSA Branch)
  - locationName: FairPrice PSA -> FairPrice Alexandra Retail Centre ARC (PSA Branch)
- `2353` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2410` Food-Joy Buona Vista
  - locationName: Foodjoy Buona Vista -> Food-Joy Buona Vista
- `2513` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2553` Fortune blk 780 Woodlands Cresent
  - address: BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780 -> Block 780 Woodlands Crescent #01-01, 730780
  - locationName: FORTUNE SUPERMARKET 780 -> Fortune blk 780 Woodlands Cresent
- `2664` Yishun Park Hawker
  - locationName: YISHUN PARK HAWKER -> Yishun Park Hawker
- `2666` Bukit Canberra Hawker Centre
  - locationName: BUKIT CANBERRA HAWKER CENTRE -> Bukit Canberra Hawker Centre
- `2667` Sembawang Recreation Centre
  - locationName: SEMBAWANG RECREATION CENTRE -> Sembawang Recreation Centre
- `2676` Taman Jurong Market & Food Centre
  - locationName: TAMAN JURONG MARKET & FOOD CENTRE -> Taman Jurong Market & Food Centre
- `2679` Bukit Batok West Hawker Centre
  - locationName: BUKIT BATOK WEST HAWKER CENTRE -> Bukit Batok West Hawker Centre
- `2747` 672 Klang Lane - Little India
  - locationName: 672 Klang Lane- Little India -> 672 Klang Lane - Little India
</details>

<details>
<summary><b>2026-07-09</b> · 1,174 locations · ±4</summary>

- Snapshot size: **1174** locations
- Added: **0**
- Removed: **0**
- Changed: **4**

Changed
- `1097` SHENG SIONG BLK 622D PUNGGOL CENTRAL
  - locationName: SHENG SIONG BLK 622D PUNGGOL CENTRAL  -> SHENG SIONG BLK 622D PUNGGOL CENTRAL
- `2217` SHENG SIONG BLK 471B YISHUN STREET 42
  - locationName: SHENG SIONG BLK 471B YISHUN STREET 42  -> SHENG SIONG BLK 471B YISHUN STREET 42
- `2358` One Supermarket Blk 201B Tampines Street 21
  - address: Blk 201B Tampines St 21, #01-1091, 522201 -> Blk 201B Tampines Street 21, 522201
  - latitude: 1.35338600 -> 1.35344200
  - locationName: ONE Supermarket Pte. Ltd. -> One Supermarket Blk 201B Tampines Street 21
  - longitude: 103.95307800 -> 103.95296100
- `2760` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
</details>

<details>
<summary><b>2026-07-08</b> · 1,174 locations · ±1</summary>

- Snapshot size: **1174** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `2781` Marks & Spencer Raffles City
  - supplierId: null -> TOMRA001
</details>

<details>
<summary><b>2026-07-07</b> · 1,174 locations · +15 · −6 · ±5</summary>

- Snapshot size: **1174** locations
- Added: **15**
- Removed: **6**
- Changed: **5**

Added
- `2780` Bedok Reservoir Food Centre (postal: 470630, status: RUNNING)
- `2785` Cold Storage Pasir Ris Mall (postal: 519612, status: RUNNING)
- `2789` Lau Pa Sat Hawker Centre (postal: 048582, status: UNKNOWN)
- `2790` Telok Blangah Food Centre (postal: 100079, status: MAINTENANCE)
- `2791` Block 44 Telok Blangah Drive (postal: 100044, status: MAINTENANCE)
- `2792` MacPherson Market & Food Centre (postal: 370089, status: MAINTENANCE)
- `2793` 79/79A Circuit Road Hawker Centre (postal: 370079, status: ERROR)
- `2794` 80 Circuit Road Market and Food Centre (postal: 370080, status: UNKNOWN)
- `2795` 225 Ang Mo Kio Ave 1 (postal: 560225, status: UNKNOWN)
- `2796` Blk 72, Marine Drive (postal: 440072, status: offline)
- `2797` Food Joy Buona Vista (postal: 118157, status: offline)
- `2798` Phan 99 2 SELETAR NORTH LINK (postal: 797601, status: offline)
- `2799` Supernature Dempsey Road (postal: 249686, status: offline)
- `2800` Culina 15 Dempsey (postal: 249675, status: offline)
- `2801` SACHI MINIMART PTE LTD (postal: 608537, status: offline)

Removed
- `2689` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `2743` Phan 99 2 SELETAR NORTH LINK (postal: 797601, status: offline)
- `2744` Food Joy Buona Vista (postal: 118157, status: offline)
- `2745` Supernature Dempsey Road (postal: 249686, status: offline)
- `2746` Culina 15 Dempsey (postal: 249675, status: offline)
- `773` Blk 72, Marine Drive (postal: 440072, status: OFFLINE)

Changed
- `2342` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `2345` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `2358` ONE Supermarket Pte. Ltd.
  - address: Blk 201B Tampines Street 21, 522201 -> Blk 201B Tampines St 21, #01-1091, 522201
  - latitude: 1.35344200 -> 1.35338600
  - locationName: One Supermarket Blk 201B Tampines Street 21 -> ONE Supermarket Pte. Ltd.
  - longitude: 103.95296100 -> 103.95307800
- `2553` FORTUNE SUPERMARKET 780
  - address: Block 780 Woodlands Crescent #01-01, 730780 -> BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780
  - locationName: Fortune blk 780 Woodlands Cresent -> FORTUNE SUPERMARKET 780
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
</details>

<details>
<summary><b>2026-07-06</b> · 1,165 locations · ±2</summary>

- Snapshot size: **1165** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `1210` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `2450` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206 -> 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206
  - latitude: 1.32642100 -> 1.32646400
  - longitude: 103.93097300 -> 103.93095800
</details>

<details>
<summary><b>2026-07-05</b> · 1,165 locations · +1 · ±1</summary>

- Snapshot size: **1165** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2786` Empress Road Market and Food Centre (postal: 260007, status: RUNNING)

Changed
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
</details>

<details>
<summary><b>2026-07-04</b> · 1,164 locations · +1 · ±1</summary>

- Snapshot size: **1164** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2784` SCARLETT@PASIR RIS MALL (postal: 519612, status: RUNNING)

Changed
- `2735` SHENG SIONG NEW BRIDGE CENTRE
  - latitude: 1.30743500 -> 1.28286400
  - longitude: 103.82881900 -> 103.84256600
</details>

<details>
<summary><b>2026-07-03</b> · 1,163 locations · ±10</summary>

- Snapshot size: **1163** locations
- Added: **0**
- Removed: **0**
- Changed: **10**

Changed
- `1210` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `1964` Thai Supermarket Aperia Mall
  - address: 12 Kallang Avenue, #01-20, 339511 -> 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511
  - locationName: Thai Supermarket Pte Ltd -> Thai Supermarket Aperia Mall
  - longitude: 103.86432000 -> 103.86430200
- `2271` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `2342` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `2345` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `2353` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `2513` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `2515` Kampung Admiralty Hawker Centre
  - latitude: 1.44122000 -> 1.44010900
  - longitude: 103.80109000 -> 103.80067300
- `2760` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `282` 310 Woodlands Street 31
  - latitude: 1.42991800 -> 1.43013500
  - longitude: 103.77377100 -> 103.77597000
</details>

<details>
<summary><b>2026-07-02</b> · 1,163 locations · ±6</summary>

- Snapshot size: **1163** locations
- Added: **0**
- Removed: **0**
- Changed: **6**

Changed
- `2772` 20 Marsiling Lane Food Centre
  - address: 20 Marsiling Ln, Singapore 730020, 730020 -> 20 Marsiling Lane, Singapore 730020, 730020
  - latitude: 1.44380900 -> 1.44349800
  - longitude: 103.77602300 -> 103.77699500
- `2775` West Coast Market Square
  - latitude: 1.30307000 -> 1.30374700
  - locationName: 726 Clementi West Market -> West Coast Market Square
  - longitude: 103.76193400 -> 103.76421500
- `2776` 252 Jurong East Street 24
  - latitude: 1.34323600 -> 1.34307900
  - longitude: 103.73528400 -> 103.73822100
- `2778` 505 Jurong West Market & Food Centre
  - locationName: 505 Jurong West Market -> 505 Jurong West Market & Food Centre
  - longitude: 103.71592500 -> 103.71853300
- `2779` 221A Boon Lay Market
  - latitude: 1.34524700 -> 1.34584300
  - longitude: 103.71100500 -> 103.71309600
- `2782` 573B Woodlands Drive 16
  - latitude: 1.43085800 -> 1.43091100
  - longitude: 103.79521700 -> 103.79777600
</details>

<details>
<summary><b>2026-07-01</b> · 1,163 locations · +11 · ±1</summary>

- Snapshot size: **1163** locations
- Added: **11**
- Removed: **0**
- Changed: **1**

Added
- `2726` Teck Ghee Court Market & Food Centre (postal: 560341, status: RUNNING)
- `2772` 20 Marsiling Lane Food Centre (postal: 730020, status: RUNNING)
- `2773` 353 Clementi Food Center (postal: 120353, status: MAINTENANCE)
- `2774` 445 Clementi Avenue 3 (postal: 121445, status: OFFLINE)
- `2775` 726 Clementi West Market (postal: 120726, status: RUNNING)
- `2776` 252 Jurong East Street 24 (postal: 600252, status: RUNNING)
- `2777` Teban Market Place (postal: 601037, status: MAINTENANCE)
- `2778` 505 Jurong West Market (postal: 640505, status: MAINTENANCE)
- `2779` 221A Boon Lay Market (postal: 641221, status: MAINTENANCE)
- `2782` 573B Woodlands Drive 16 (postal: 732573, status: RUNNING)
- `2783` Republic Polytechnic (postal: 738964, status: RUNNING)

Changed
- `2450` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE , 460206 -> 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206
</details>

<details>
<summary><b>2026-06-30</b> · 1,152 locations · +4 · ±12</summary>

- Snapshot size: **1152** locations
- Added: **4**
- Removed: **0**
- Changed: **12**

Added
- `2657` Blk 72, Marine Drive (postal: 440072, status: RUNNING)
- `2723` Kovan Hougang Market and Food Centre (postal: 530209, status: UNKNOWN)
- `2724` Hougang 105 Hainanese Village Centre (postal: 530105, status: UNKNOWN)
- `2781` Marks & Spencer Raffles City (postal: 179103, status: offline)

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `2353` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2513` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2731` Fairprice Jewel
  - address: 78 Airport Boulevard #B2-205 to 208 Jewel Changi Airport (819666), 819666 -> 78 Airport Boulevard #B2-205 to 206 Jewel Changi Airport (819666), 819666
- `2733` Fairprice Joo Chiat Complex
  - address: Blk 2 Joo Chiat Road #01-1139 / #02-1139 Joo Chiat Complex (420002), 420002 -> Blk 2 Joo Chiat Road #01-1139 Joo Chiat Complex (420002), 420002
- `2753` Haig Road Market & Cooked Food Centre
  - address: Haig Road Blk 13/14, 430014 -> 14 Haig Road, 430014
  - locationName: Haig Road Hawker Centre -> Haig Road Market & Cooked Food Centre
- `2761` Blk 4A Jalan Batu Hawker Centre
  - address: 4A Jln Batu, 432004 -> 4A Jalan Batu, 432004
  - locationName: 4A Jln Batu -> Blk 4A Jalan Batu Hawker Centre
- `2762` 50A Marine Terrace Hawker Centre
  - address: 50A Marine Ter, 441050 -> 50A Marine Terrace, 441050
  - locationName: 50A Marine Ter -> 50A Marine Terrace Hawker Centre
- `2763` 84 Marine Parade Central Market and Food Centre
  - locationName: 84 Marine Parade Central -> 84 Marine Parade Central Market and Food Centre
- `2764` Kaki Bukit 511 Market and Food Centre
  - locationName: 511 Bedok North Street 3 -> Kaki Bukit 511 Market and Food Centre
- `2765` Bedok North Street 3 Blk 538 Hawker Centre
  - locationName: 538 Bedok North Street 3 -> Bedok North Street 3 Blk 538 Hawker Centre
</details>

<details>
<summary><b>2026-06-29</b> · 1,148 locations · +5</summary>

- Snapshot size: **1148** locations
- Added: **5**
- Removed: **0**
- Changed: **0**

Added
- `2761` 4A Jln Batu (postal: 432004, status: MAINTENANCE)
- `2762` 50A Marine Ter (postal: 441050, status: MAINTENANCE)
- `2763` 84 Marine Parade Central (postal: 440084, status: MAINTENANCE)
- `2764` 511 Bedok North Street 3 (postal: 460511, status: MAINTENANCE)
- `2765` 538 Bedok North Street 3 (postal: 460538, status: MAINTENANCE)
</details>

<details>
<summary><b>2026-06-28</b> · 1,143 locations · ±7</summary>

- Snapshot size: **1143** locations
- Added: **0**
- Removed: **0**
- Changed: **7**

Changed
- `1210` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `1964` Thai Supermarket Pte Ltd
  - address: 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511 -> 12 Kallang Avenue, #01-20, 339511
  - locationName: Thai Supermarket Aperia Mall -> Thai Supermarket Pte Ltd
  - longitude: 103.86430200 -> 103.86432000
- `2271` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - supplierId: null -> TOMRA001
- `2769` Telok Blangah Rise Market
  - supplierId: null -> TOMRA001
- `2770` Toa Payoh West Market and Food Court
  - supplierId: null -> TOMRA001
- `2771` Li Li Cheng Punggol
  - supplierId: null -> TOMRA001
</details>

<details>
<summary><b>2026-06-27</b> · 1,143 locations · +3 · ±1</summary>

- Snapshot size: **1143** locations
- Added: **3**
- Removed: **0**
- Changed: **1**

Added
- `2769` Telok Blangah Rise Market (postal: 090036, status: UNKNOWN)
- `2770` Toa Payoh West Market and Food Court (postal: 310127, status: UNKNOWN)
- `2771` Li Li Cheng Punggol (postal: 823273, status: MAINTENANCE)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
</details>

<details>
<summary><b>2026-06-26</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-06-25</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-06-24</b> · 1,140 locations · +2</summary>

- Snapshot size: **1140** locations
- Added: **2**
- Removed: **0**
- Changed: **0**

Added
- `2767` 11 Telok Blangah Crescent Market and Food Centre (postal: 090011, status: MAINTENANCE)
- `2768` Shunfu Mart (postal: 570320, status: offline)
</details>

<details>
<summary><b>2026-06-23</b> · 1,138 locations · +1 · ±2</summary>

- Snapshot size: **1138** locations
- Added: **1**
- Removed: **0**
- Changed: **2**

Added
- `2753` Haig Road Hawker Centre (postal: 430014, status: ERROR)

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `2752` Eunos Crescent Blk 4A Hawker Centre
  - locationName: Eunos Crescent Blk 4A -> Eunos Crescent Blk 4A Hawker Centre
</details>

<details>
<summary><b>2026-06-22</b> · 1,137 locations · +2 · ±3</summary>

- Snapshot size: **1137** locations
- Added: **2**
- Removed: **0**
- Changed: **3**

Added
- `2742` Tampines Round Market and Food Centre (postal: 521137, status: RUNNING)
- `2752` Eunos Crescent Blk 4A (postal: 402004, status: OFFLINE)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `2353` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `2513` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
</details>

<details>
<summary><b>2026-06-21</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-06-20</b> · 1,135 locations · +7 · ±3</summary>

- Snapshot size: **1135** locations
- Added: **7**
- Removed: **0**
- Changed: **3**

Added
- `2754` Tekka Centre / Zhu Jiao Market (postal: 210665, status: UNKNOWN)
- `2755` Blk 6 Tanjong Pagar Plaza Market and Food Centre (postal: 081006, status: UNKNOWN)
- `2756` Blk 112 Jalan Bukit Merah Market and Food Centre (postal: 160112, status: UNKNOWN)
- `2757` Toa Payoh Lorong 8 Blk 210 Hawker Centre (postal: 310210, status: MAINTENANCE)
- `2758` Holland Drive Market and Food Centre (postal: 270044, status: UNKNOWN)
- `2759` Toa Payoh Lorong 4 Blk 94 Hawker Centre (postal: 310094, status: UNKNOWN)
- `2760` MSE Family Go Green Week’s Sustainability Fair (postal: 228231, status: offline)

Changed
- `2353` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2513` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2747` 672 Klang Lane- Little India
  - locationName: Little India - Klang - 672 Klang Lane -> 672 Klang Lane- Little India
</details>

<details>
<summary><b>2026-06-19</b> · 1,128 locations · ±2</summary>

- Snapshot size: **1128** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `2353` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `2513` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
</details>

<details>
<summary><b>2026-06-18</b> · 1,128 locations · +1 · ±2</summary>

- Snapshot size: **1128** locations
- Added: **1**
- Removed: **0**
- Changed: **2**

Added
- `2731` Fairprice Jewel (postal: 819666, status: MAINTENANCE)

Changed
- `2353` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2513` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
</details>

<details>
<summary><b>2026-06-17</b> · 1,127 locations · +5</summary>

- Snapshot size: **1127** locations
- Added: **5**
- Removed: **0**
- Changed: **0**

Added
- `2732` ITE College East (postal: 486047, status: ERROR)
- `2747` Little India - Klang - 672 Klang Lane (postal: 211672, status: MAINTENANCE)
- `2748` Pek Kio Market & Food Centre (postal: 211041, status: MAINTENANCE)
- `2749` Bukit Merah Central Food Centre (postal: 150163, status: MAINTENANCE)
- `2750` Blk 115 Bukit Merah View Market and Food Centre (postal: 151115, status: MAINTENANCE)
</details>

<details>
<summary><b>2026-06-16</b> · 1,122 locations · +5 · ±3</summary>

- Snapshot size: **1122** locations
- Added: **5**
- Removed: **0**
- Changed: **3**

Added
- `2733` Fairprice Joo Chiat Complex (postal: 420002, status: OFFLINE)
- `2743` Phan 99 2 SELETAR NORTH LINK (postal: 797601, status: offline)
- `2744` Food Joy Buona Vista (postal: 118157, status: offline)
- `2745` Supernature Dempsey Road (postal: 249686, status: offline)
- `2746` Culina 15 Dempsey (postal: 249675, status: offline)

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `2353` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `2513` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
</details>

<details>
<summary><b>2026-06-15</b> · 1,117 locations · +1</summary>

- Snapshot size: **1117** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `2722` Dunman Food Centre (postal: 424768, status: RUNNING)
</details>

<details>
<summary><b>2026-06-14</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-06-13</b> · 1,116 locations · +8 · ±3</summary>

- Snapshot size: **1116** locations
- Added: **8**
- Removed: **0**
- Changed: **3**

Added
- `2734` Cold Storage Orchard Hotel (postal: 238879, status: MAINTENANCE)
- `2735` SHENG SIONG NEW BRIDGE CENTRE (postal: 050336, status: UNKNOWN)
- `2736` Redhill Food Centre (postal: 150085, status: UNKNOWN)
- `2737` Alexandra Village Food Centre (postal: 150120, status: MAINTENANCE)
- `2738` Mei Chin Road Market (postal: 140159, status: MAINTENANCE)
- `2739` National University of Singapore (NUS) Frontier Canteen (postal: 117543, status: MAINTENANCE)
- `2740` Toa Payoh Vista Market (postal: 310074, status: MAINTENANCE)
- `2741` Mayflower Market (postal: 560162, status: MAINTENANCE)

Changed
- `2177` SHENG SIONG BLK 643 SENJA CLOSE
  - locationName: SHENG SIONG BLK 643 SENJA CLOSE  -> SHENG SIONG BLK 643 SENJA CLOSE
- `2725` Ang Mo Kio Market & Food Centre Blk 724
  - locationName: 724 AMK Market & Food Centre -> Ang Mo Kio Market & Food Centre Blk 724
- `2727` Kebun Baru Food Centre Block 226H
  - locationName: Kebun Baru Food Centre -> Kebun Baru Food Centre Block 226H
</details>

<details>
<summary><b>2026-06-12</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-06-11</b> · 1,108 locations · +1 · ±1</summary>

- Snapshot size: **1108** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2725` 724 AMK Market & Food Centre (postal: 560724, status: RUNNING)

Changed
- `2186` Prime Supermarket 678A Woodlands Avenue 6
  - locationName: Prime Supermarket 687A Woodlands Avenue 6 -> Prime Supermarket 678A Woodlands Avenue 6
</details>

<details>
<summary><b>2026-06-10</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-06-09</b> · 1,107 locations · ±2</summary>

- Snapshot size: **1107** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `2656` All India Supermart Pte Ltd
  - address: 41 NORRIS RD, 208282 -> 41 Norris Road, 208282
  - locationName: ALL INDIA SUPERMART PTE LTD -> All India Supermart Pte Ltd
- `2728` 628 Ang Mo Kio Food Centre
  - locationName: Ang Mo Kio 628 Market -> 628 Ang Mo Kio Food Centre
</details>

<details>
<summary><b>2026-06-08</b> · 1,107 locations · +1</summary>

- Snapshot size: **1107** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `2730` Kallang Estate Fresh Market and Food Centre (postal: 397972, status: RUNNING)
</details>

<details>
<summary><b>2026-06-07</b> · 1,106 locations · +3</summary>

- Snapshot size: **1106** locations
- Added: **3**
- Removed: **0**
- Changed: **0**

Added
- `2727` Kebun Baru Food Centre (postal: 568226, status: RUNNING)
- `2728` Ang Mo Kio 628 Market (postal: 560628, status: RUNNING)
- `2729` Chong Boon Market & Food Centre (postal: 561453, status: RUNNING)
</details>

<details>
<summary><b>2026-06-06</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-06-05</b> · 1,103 locations · +1 · ±1</summary>

- Snapshot size: **1103** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2620` Bazaar Westlite Toh Guan Dormitory (postal: 608596, status: RUNNING)

Changed
- `2226` SHENG SIONG BLK 547 SEGAR RD
  - locationName: SHENG SIONG BLK 547 SEGAR RD  -> SHENG SIONG BLK 547 SEGAR RD
</details>

<details>
<summary><b>2026-06-04</b> · 1,102 locations · +1</summary>

- Snapshot size: **1102** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `2656` ALL INDIA SUPERMART PTE LTD (postal: 208282, status: RUNNING)
</details>

<details>
<summary><b>2026-06-03</b> · 1,101 locations · +1 · ±1</summary>

- Snapshot size: **1101** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2678` SACHI MINIMART PTE LTD (postal: 608537, status: RUNNING)

Changed
- `2663` 361 Sembawang Crescent
  - latitude: 1.44657900 -> 1.44640100
  - locationName: 361 SEMBWANG CRESCENT -> 361 Sembawang Crescent
  - longitude: 103.81192800 -> 103.81393200
</details>

<details>
<summary><b>2026-06-02</b> · 1,100 locations · +11 · −1 · ±9</summary>

- Snapshot size: **1100** locations
- Added: **11**
- Removed: **1**
- Changed: **9**

Added
- `2663` 361 SEMBWANG CRESCENT (postal: 750361, status: OFFLINE)
- `2664` YISHUN PARK HAWKER (postal: 768867, status: RUNNING)
- `2665` SHENG SIONG BLK 120 CANBERRA CRESCENT (postal: 750120, status: RUNNING)
- `2666` BUKIT CANBERRA HAWKER CENTRE (postal: 756973, status: RUNNING)
- `2667` SEMBAWANG RECREATION CENTRE (postal: 759774, status: RUNNING)
- `2674` Pasir Ris Central Hawker Centre (postal: 519641, status: RUNNING)
- `2676` TAMAN JURONG MARKET & FOOD CENTRE (postal: 618499, status: RUNNING)
- `2677` Senja Hawker Centre (postal: 677632, status: RUNNING)
- `2679` BUKIT BATOK WEST HAWKER CENTRE (postal: 650469, status: RUNNING)
- `2680` Bukit Panjang Hawker Centre (postal: 679947, status: RUNNING)
- `2689` SACHI MINIMART PTE LTD (postal: 608537, status: offline)

Removed
- `2660` SACHI MINIMART PTE LTD (postal: 608537, status: offline)

Changed
- `1096` SHENG SIONG BLK 231 SUMANG LANE
  - address: BLK 231 SUMANG LANE #01-02 , 820231 -> BLK 231 SUMANG LANE #01-02, 820231
  - locationName: SHENG SIONG BLK 231 SUMANG LANE  -> SHENG SIONG BLK 231 SUMANG LANE
- `1100` SHENG SIONG BLK 473 FERNVALE STREET
  - locationName: SHENG SIONG BLK 473 FERNVALE STREET  -> SHENG SIONG BLK 473 FERNVALE STREET
- `1117` FairPrice 682 Hougang Avenue 4
  - address: Block 682 Hougang Avenue 4 #01-310 , 530682 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - locationName: FairPrice Hougang 682 -> FairPrice 682 Hougang Avenue 4
- `254` 618 Choa Chu Kang North 7
  - latitude: 1.40074500 -> 1.39868100
  - longitude: 103.74163500 -> 103.74606000
- `2661` BISMILLAH MINIMART 32 MANDAI
  - supplierId: null -> SGRECYCLE001
- `2662` Lion City Supermarket Geylang Road
  - locationName: Lion City Bai Hui 349 Geylang Road -> Lion City Supermarket Geylang Road
- `2671` Phan 66 PPT Lodge 1A Dormitory
  - address: 8 Seletar North Link #01-03, 797455 -> 8 Seletar North Link #01-03, PPT Lodge 1A, 797455
  - locationName: Phan 66 8 Seletar North Link -> Phan 66 PPT Lodge 1A Dormitory
- `2672` SHENG SIONG THOMSON IMPERIAL COURT
  - locationName: SHENG SIONG 200 UPPER THOMSON RD, THOMSON IMPERIAL COURT -> SHENG SIONG THOMSON IMPERIAL COURT
- `458` 330 Clementi Ave 2
  - latitude: 1.31417000 -> 1.31374300
  - longitude: 103.76716000 -> 103.76782800
</details>

<details>
<summary><b>2026-06-01</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-31</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-30</b> · 1,090 locations · +9</summary>

- Snapshot size: **1090** locations
- Added: **9**
- Removed: **0**
- Changed: **0**

Added
- `2675` Zion Riverside Food Centre (postal: 247792, status: MAINTENANCE)
- `2681` Beo Crescent Market (postal: 169982, status: MAINTENANCE)
- `2682` Tiong Bahru Market (postal: 168898, status: MAINTENANCE)
- `2683` Pasir Panjang Food Centre (postal: 118543, status: MAINTENANCE)
- `2684` Margaret Drive Hawker Centre (postal: 142038, status: MAINTENANCE)
- `2685` Tanglin Halt Market (postal: 148813, status: MAINTENANCE)
- `2686` Holland Village Market and Food Centre (postal: 277700, status: MAINTENANCE)
- `2687` Commonwealth Crescent Market (postal: 149644, status: RUNNING)
- `2688` Adam Road Food Centre (postal: 289876, status: MAINTENANCE)
</details>

<details>
<summary><b>2026-05-29</b> · 1,081 locations · +7</summary>

- Snapshot size: **1081** locations
- Added: **7**
- Removed: **0**
- Changed: **0**

Added
- `2662` Lion City Bai Hui 349 Geylang Road (postal: 389370, status: ERROR)
- `2668` Serangoon Garden Market (postal: 555945, status: MAINTENANCE)
- `2669` Chomp Chomp Food Centre (postal: 557269, status: OFFLINE)
- `2670` Fernvale Hawker Centre & Market (postal: 797650, status: MAINTENANCE)
- `2671` Phan 66 8 Seletar North Link (postal: 797455, status: MAINTENANCE)
- `2672` SHENG SIONG 200 UPPER THOMSON RD, THOMSON IMPERIAL COURT (postal: 574424, status: MAINTENANCE)
- `2673` SCARLETT@AMK 710A (postal: 561710, status: MAINTENANCE)
</details>

<details>
<summary><b>2026-05-28</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-27</b> · 1,074 locations · ±1</summary>

- Snapshot size: **1074** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `1117` FairPrice Hougang 682
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310 , 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice Hougang 682
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
</details>

<details>
<summary><b>2026-05-26</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-25</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-24</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-23</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-22</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-21</b> · 1,074 locations · +2</summary>

- Snapshot size: **1074** locations
- Added: **2**
- Removed: **0**
- Changed: **0**

Added
- `2660` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `2661` BISMILLAH MINIMART 32 MANDAI (postal: 729939, status: offline)
</details>

<details>
<summary><b>2026-05-20</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-19</b> · 1,072 locations · +1</summary>

- Snapshot size: **1072** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `2659` TRIPLE N SUPERMART PTE LTD (postal: 415814, status: MAINTENANCE)
</details>

<details>
<summary><b>2026-05-18</b> · 1,071 locations · ±9</summary>

- Snapshot size: **1071** locations
- Added: **0**
- Removed: **0**
- Changed: **9**

Changed
- `1083` SHENG SIONG BLK 52 CHIN SWEE ROAD
  - locationName: SHENG SIONG BLK 52 CHIN SWEE ROAD  -> SHENG SIONG BLK 52 CHIN SWEE ROAD
- `1091` SHENG SIONG BLK 410A SIN MING AVENUE
  - locationName: SHENG SIONG BLK 410A SIN MING AVENUE  -> SHENG SIONG BLK 410A SIN MING AVENUE
- `1178` Don Don Donki (Suntec City Mall)
  - latitude: 1.29500000 -> 1.29320000
  - longitude: 103.85830000 -> 103.85700000
- `1321` Cold Storage Marina Bay Sands
  - latitude: 1.28366000 -> 1.28622600
  - longitude: 103.85930000 -> 103.85976400
- `2241` SHENG SIONG BLK 675 YISHUN AVENUE 4
  - locationName: SHENG SIONG BLK 675 YISHUN AVENUE 4  -> SHENG SIONG BLK 675 YISHUN AVENUE 4
- `225` 201 Marsiling Dr
  - latitude: 1.43573000 -> 1.44269800
  - longitude: 103.79036200 -> 103.77542100
- `2271` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `839` Blk 257, Pasir Ris Street 21
  - latitude: 1.36430200 -> 1.36714600
  - longitude: 103.96473400 -> 103.96369900
- `846` Blk 160, Pasir Ris Street 13
  - address: Blk 158, Pasir Ris Street 11, 510158 -> Blk 160, Pasir Ris Street 13, 510160
  - latitude: 1.36457900 -> 1.36408600
  - locationName: Blk 158, Pasir Ris Street 11 -> Blk 160, Pasir Ris Street 13
  - longitude: 103.96215800 -> 103.96253200
  - postalCode: 510158 -> 510160
  - zipcode: 510158 -> 510160
</details>

<details>
<summary><b>2026-05-17</b> · 1,071 locations · +1 · ±1</summary>

- Snapshot size: **1071** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2658` FairPrice Bedok Reservoir  (postal: 470745, status: MAINTENANCE)

Changed
- `960` Blk 226, Simei Street 4
  - address: Blk 233, Simei Street 4, 520226 -> Blk 266, Simei Street 4, 520226
</details>

<details>
<summary><b>2026-05-16</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-15</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-14</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-13</b> · 1,070 locations · ±2</summary>

- Snapshot size: **1070** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `850` Blk 187, Pasir Ris Street 11
  - address: Blk 198, Pasir Ris Street 12, 510198 -> Blk 187, Pasir Ris Street 11, 510187
  - latitude: 1.36689300 -> 1.36464200
  - locationName: Blk 198, Pasir Ris Street 12 -> Blk 187, Pasir Ris Street 11
  - longitude: 103.96026900 -> 103.95942400
  - postalCode: 510198 -> 510187
  - zipcode: 510198 -> 510187
</details>

<details>
<summary><b>2026-05-12</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-11</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-10</b> · 1,070 locations · ±1</summary>

- Snapshot size: **1070** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `2288` 417 Canberra Rd
  - address: 417 Canberra Rd, 750417 -> 418 Canberra Rd, 750418
  - latitude: 1.45198300 -> 1.45243500
  - longitude: 103.81948900 -> 103.81927900
  - postalCode: 750417 -> 750418
  - zipcode: 750417 -> 750418
</details>

<details>
<summary><b>2026-05-09</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-08</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-07</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-06</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-05</b> · 1,070 locations · ±3</summary>

- Snapshot size: **1070** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `1158` Cold Storage Sentosa Cove
  - latitude: 1.24700000 -> 1.24730900
  - longitude: 103.83960000 -> 103.84010500
- `2579` FairPrice Tampines Blk 138 Tampines Street 11
  - model: null -> ""
  - rvm_remarks: null -> ""
  - rvm_type: null -> ""
  - rvm_val1: null -> ""
  - rvm_val2: null -> ""
  - rvm_val3: null -> ""
  - rvm_val4: null -> ""
  - rvmOpeningHours: null -> ""
- `2655` Prime Supermarket Blk 761 Yishun
  - model: null -> ""
  - rvm_remarks: null -> ""
  - rvm_type: null -> ""
  - rvm_val1: null -> ""
  - rvm_val2: null -> ""
  - rvm_val3: null -> ""
  - rvm_val4: null -> ""
  - rvmOpeningHours: null -> ""
</details>

<details>
<summary><b>2026-05-04</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-03</b> · 1,070 locations · ±1</summary>

- Snapshot size: **1070** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `929` Blk 2, Chai Chee Road
  - address: Blk 2, Chai Chee Road, 469044 -> Blk 2, Chai Chee Road, 461002
  - latitude: 1.32695500 -> 1.32699000
  - longitude: 103.92272100 -> 103.92250000
  - postalCode: 469044 -> 461002
  - zipcode: 469044 -> 461002
</details>

<details>
<summary><b>2026-05-02</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-05-01</b> · 1,070 locations · +1</summary>

- Snapshot size: **1070** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `2655` Prime Supermarket Blk 761 Yishun (postal: 760761, status: RUNNING)
</details>

<details>
<summary><b>2026-04-30</b> · 1,069 locations · ±1</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `1147` SHENG SIONG 19 SERANGOON NORTH AVE 5
  - latitude: 1.37580000 -> 1.37557000
  - locationName: SHENG SIONG 19 SERANGOON NORTH AVE 5  -> SHENG SIONG 19 SERANGOON NORTH AVE 5
  - longitude: 103.87170000 -> 103.87188000
</details>

<details>
<summary><b>2026-04-29</b> · 1,069 locations · ±3</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `186` 260 Boon Lay Dr
  - latitude: 1.34570500 -> 1.34515700
  - longitude: 103.70661000 -> 103.70801900
- `211` 190 Boon Lay Dr
  - latitude: 1.34533900 -> 1.34515300
  - longitude: 103.71208600 -> 103.71188200
- `252` 515 Jurong West Street 52
  - latitude: 1.35007000 -> 1.34625000
  - longitude: 103.71796000 -> 103.72040700
</details>

<details>
<summary><b>2026-04-28</b> · 1,069 locations · ±1</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `281` 160 Woodlands Street 13
  - latitude: 1.44201000 -> 1.43332900
  - longitude: 103.77627500 -> 103.77465200
</details>

<details>
<summary><b>2026-04-27</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-04-26</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-04-25</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-04-24</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-04-23</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-04-22</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-04-21</b> · 1,069 locations · ±5</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **5**

Changed
- `194` 771 Choa Chu Kang Street 54
  - address: 771 Choa Chu Kang Dr, 680771 -> 771 Choa Chu Kang Street 54, 680771
  - latitude: 1.39549000 -> 1.39447000
  - locationName: 771 Choa Chu Kang Dr -> 771 Choa Chu Kang Street 54
  - longitude: 103.74910000 -> 103.74923000
- `202` 657 Choa Chu Kang Cres
  - latitude: 1.38847600 -> 1.40046200
  - longitude: 103.74719700 -> 103.74973900
- `441` 550 Choa Chu Kang Street 52
  - latitude: 1.44416800 -> 1.39406500
  - longitude: 103.77440800 -> 103.74272200
- `929` Blk 2, Chai Chee Road
  - latitude: 1.32259100 -> 1.32695500
  - longitude: 103.91987100 -> 103.92272100
- `943` Blk 50, Chai Chee Street
  - latitude: 1.32891200 -> 1.32938200
  - longitude: 103.92211300 -> 103.92245000
</details>

<details>
<summary><b>2026-04-20</b> · 1,069 locations · ±2</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `2353` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `901` Blk 742 Pasir Ris Street 71
  - address: Blk 740 Pasir Ris Street 71, 520740 -> Blk 742 Pasir Ris Street 71, 510742
  - latitude: 1.35941900 -> 1.37708700
  - locationName: Blk 740 Pasir Ris Street 71 -> Blk 742 Pasir Ris Street 71
  - longitude: 103.93291500 -> 103.93605600
  - postalCode: 520740 -> 510742
  - zipcode: 520740 -> 510742
</details>

<details>
<summary><b>2026-04-19</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-04-18</b> · 1,069 locations · ±2</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `1023` Block 272 Punggol Walk
  - address: Block 272A Punggol Walk, 820272 -> Block 272 Punggol Walk, 820272
  - latitude: 1.40299700 -> 1.40287000
  - locationName: Block 272A Punggol Walk -> Block 272 Punggol Walk
  - longitude: 103.90069600 -> 103.90076300
- `1027` Block 170 Ang Mo Kio Avenue 4
  - address: 171 Ang Mo Kio Ave 4, 560171 -> 170 Ang Mo Kio Ave 4, 560170
  - latitude: 1.37478800 -> 1.37394300
  - locationName: Block 171 Ang Mo Kio Avenue 4 -> Block 170 Ang Mo Kio Avenue 4
  - longitude: 103.83564600 -> 103.83700700
  - postalCode: 560171 -> 560170
  - zipcode: 560171 -> 560170
</details>

<details>
<summary><b>2026-04-17</b> · 1,069 locations · ±3</summary>

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
  - latitude: 1.32601400 -> 1.32615800
  - locationName: Blk 346, Ubi Avenue 1 -> Blk 348, Ubi Avenue 1
  - longitude: 103.89963300 -> 103.90025500
  - postalCode: 400346 -> 400348
  - zipcode: 400346 -> 400348
</details>

<details>
<summary><b>2026-04-16</b> · 1,069 locations · ±1</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `1141` SHENG SIONG BLK 671 EDGEFIELD PLAINS
  - rvmOpeningHours: "" -> Mon - Sun:  07:00 AM - 11:00 PM
</details>

<details>
<summary><b>2026-04-15</b> · 1,069 locations · ±3</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `2342` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `2345` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `2540` Changi Airport Terminal 4
  - address: 30 Airport Boulevard, Singapore 819662, Level 2M Outside Kopitiam, 819662 -> 10 Airport Boulevard, Singapore 819665, Level 2M Outside Kopitiam, 819662
</details>

<details>
<summary><b>2026-04-14</b> · 1,069 locations · ±2</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `2342` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `2345` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9  -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
</details>

<details>
<summary><b>2026-04-13</b> · 1,069 locations · ±2</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `2336` SHENG SIONG BLK 446 FAJAR ROAD
  - locationName: SHENG SIONG BLK 446 FAJAR ROAD  -> SHENG SIONG BLK 446 FAJAR ROAD
- `367` Block 126A Edgedale Plains
  - locationName: Blk126A Edgedale Plains -> Block 126A Edgedale Plains
</details>

<details>
<summary><b>2026-04-12</b> · 1,069 locations · ±1</summary>

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
</details>

<details>
<summary><b>2026-04-11</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-04-10</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-04-09</b> · 1,069 locations · ±1</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `2370` Raj Agro Kranji
  - locationName: Aaj Agro Kranji -> Raj Agro Kranji
</details>

<details>
<summary><b>2026-04-08</b> · 1,069 locations · −5</summary>

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
</details>
<!-- CHANGELOG:END -->
