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
### 2026-07-12

- Snapshot size: **1176** locations
- Added: **1**
- Removed: **0**
- Changed: **5**

Added
- `2766` Shunfu-Mart (postal: 570320, status: RUNNING)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - distance: 10755.841199964072 -> 8024.594921604226
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `2358` ONE Supermarket Pte. Ltd.
  - address: Blk 201B Tampines Street 21, 522201 -> Blk 201B Tampines St 21, #01-1091, 522201
  - distance: 14992.565058597489 -> 15005.351469190593
  - latitude: 1.35344200 -> 1.35338600
  - locationName: One Supermarket Blk 201B Tampines Street 21 -> ONE Supermarket Pte. Ltd.
  - longitude: 103.95296100 -> 103.95307800
- `2553` FORTUNE SUPERMARKET 780
  - address: Block 780 Woodlands Crescent #01-01, 730780 -> BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780
  - locationName: Fortune blk 780 Woodlands Cresent -> FORTUNE SUPERMARKET 780
- `2671` Phan 66 PPT Lodge 1A Dormitory
  - distance: 11735.239507614366 -> 11729.514107747777
  - latitude: 1.41979000 -> 1.41965500
  - longitude: 103.89630000 -> 103.89635300
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - distance: 5352.190166724526 -> 4699.31852172609
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231

### 2026-07-11

No changes.

### 2026-07-10

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
  - distance: 14067.905591355227 -> 13507.901205668355
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2410` Food-Joy Buona Vista
  - locationName: Foodjoy Buona Vista -> Food-Joy Buona Vista
- `2513` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - distance: 14067.905591355227 -> 13507.901205668355
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

### 2026-07-09

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
  - distance: 15005.351469190593 -> 14992.565058597489
  - latitude: 1.35338600 -> 1.35344200
  - locationName: ONE Supermarket Pte. Ltd. -> One Supermarket Blk 201B Tampines Street 21
  - longitude: 103.95307800 -> 103.95296100
- `2760` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - distance: 4699.31852172609 -> 5352.190166724526
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020

### 2026-07-08

- Snapshot size: **1174** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `2781` Marks & Spencer Raffles City
  - supplierId: null -> TOMRA001

### 2026-07-07

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
- `2358` ONE Supermarket Pte. Ltd.
  - address: Blk 201B Tampines Street 21, 522201 -> Blk 201B Tampines St 21, #01-1091, 522201
  - distance: 14992.565058597489 -> 15005.351469190593
  - latitude: 1.35344200 -> 1.35338600
  - locationName: One Supermarket Blk 201B Tampines Street 21 -> ONE Supermarket Pte. Ltd.
  - longitude: 103.95296100 -> 103.95307800
- `2553` FORTUNE SUPERMARKET 780
  - address: Block 780 Woodlands Crescent #01-01, 730780 -> BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780
  - locationName: Fortune blk 780 Woodlands Cresent -> FORTUNE SUPERMARKET 780
- `2760` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - distance: 5352.190166724526 -> 4699.31852172609
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231

### 2026-07-06

- Snapshot size: **1165** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `1210` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - distance: 10750.873630499158 -> 8810.039786921378
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `2450` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206 -> 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206
  - distance: 12784.337487471297 -> 12781.77135348191
  - latitude: 1.32642100 -> 1.32646400
  - longitude: 103.93097300 -> 103.93095800

### 2026-07-05

- Snapshot size: **1165** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2786` Empress Road Market and Food Centre (postal: 260007, status: RUNNING)

Changed
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - distance: 8810.039786921378 -> 10750.873630499158
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118

### 2026-07-04

- Snapshot size: **1164** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2784` SCARLETT@PASIR RIS MALL (postal: 519612, status: RUNNING)

Changed
- `2735` SHENG SIONG NEW BRIDGE CENTRE
  - distance: 4750.859525445587 -> 7818.577831132404
  - latitude: 1.30743500 -> 1.28286400
  - longitude: 103.82881900 -> 103.84256600

### 2026-07-03

- Snapshot size: **1163** locations
- Added: **0**
- Removed: **0**
- Changed: **10**

Changed
- `1210` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - distance: 10750.873630499158 -> 8810.039786921378
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `1964` Thai Supermarket Aperia Mall
  - address: 12 Kallang Avenue, #01-20, 339511 -> 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511
  - distance: 6726.937470865263 -> 6725.4116193552145
  - locationName: Thai Supermarket Pte Ltd -> Thai Supermarket Aperia Mall
  - longitude: 103.86432000 -> 103.86430200
- `2271` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - distance: 7413.418910446766 -> 22118.990573825253
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `2342` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - distance: 12915.057712132177 -> 13346.432905941527
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `2345` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - distance: 12915.057712132177 -> 13346.432905941527
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `2353` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - distance: 13507.901205668355 -> 14067.905591355227
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `2513` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - distance: 13507.901205668355 -> 14067.905591355227
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `2515` Kampung Admiralty Hawker Centre
  - distance: 10449.133645430153 -> 10336.300534131246
  - latitude: 1.44122000 -> 1.44010900
  - longitude: 103.80109000 -> 103.80067300
- `2760` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - distance: 4699.31852172609 -> 5352.190166724526
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `282` 310 Woodlands Street 31
  - distance: 10280.708764880477 -> 10187.026826427751
  - latitude: 1.42991800 -> 1.43013500
  - longitude: 103.77377100 -> 103.77597000

### 2026-07-02

- Snapshot size: **1163** locations
- Added: **0**
- Removed: **0**
- Changed: **6**

Changed
- `2772` 20 Marsiling Lane Food Centre
  - address: 20 Marsiling Ln, Singapore 730020, 730020 -> 20 Marsiling Lane, Singapore 730020, 730020
  - distance: 11555.520686688702 -> 11480.412262250695
  - latitude: 1.44380900 -> 1.44349800
  - longitude: 103.77602300 -> 103.77699500
- `2775` West Coast Market Square
  - distance: 8059.465694272298 -> 7815.926037360959
  - latitude: 1.30307000 -> 1.30374700
  - locationName: 726 Clementi West Market -> West Coast Market Square
  - longitude: 103.76193400 -> 103.76421500
- `2776` 252 Jurong East Street 24
  - distance: 9234.986622565879 -> 8910.49374157762
  - latitude: 1.34323600 -> 1.34307900
  - longitude: 103.73528400 -> 103.73822100
- `2778` 505 Jurong West Market & Food Centre
  - distance: 11366.699833828243 -> 11076.798190458816
  - locationName: 505 Jurong West Market -> 505 Jurong West Market & Food Centre
  - longitude: 103.71592500 -> 103.71853300
- `2779` 221A Boon Lay Market
  - distance: 11919.689763057619 -> 11685.314320757858
  - latitude: 1.34524700 -> 1.34584300
  - longitude: 103.71100500 -> 103.71309600
- `2782` 573B Woodlands Drive 16
  - distance: 9473.088969163866 -> 9406.177333585385
  - latitude: 1.43085800 -> 1.43091100
  - longitude: 103.79521700 -> 103.79777600

### 2026-07-01

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

### 2026-06-30

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
  - distance: 8024.594921604226 -> 10755.841199964072
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - distance: 8810.039786921378 -> 10750.873630499158
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `2353` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - distance: 14067.905591355227 -> 13507.901205668355
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2513` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - distance: 14067.905591355227 -> 13507.901205668355
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

### 2026-06-29

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

### 2026-06-28

- Snapshot size: **1143** locations
- Added: **0**
- Removed: **0**
- Changed: **7**

Changed
- `1210` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - distance: 10750.873630499158 -> 8810.039786921378
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `1964` Thai Supermarket Pte Ltd
  - address: 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511 -> 12 Kallang Avenue, #01-20, 339511
  - distance: 6725.4116193552145 -> 6726.937470865263
  - locationName: Thai Supermarket Aperia Mall -> Thai Supermarket Pte Ltd
  - longitude: 103.86430200 -> 103.86432000
- `2271` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - distance: 22118.990573825253 -> 7413.418910446766
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

### 2026-06-27

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
  - distance: 10755.841199964072 -> 8024.594921604226
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682

### 2026-06-26

No changes.

### 2026-06-25

No changes.

### 2026-06-24

- Snapshot size: **1140** locations
- Added: **2**
- Removed: **0**
- Changed: **0**

Added
- `2767` 11 Telok Blangah Crescent Market and Food Centre (postal: 090011, status: MAINTENANCE)
- `2768` Shunfu Mart (postal: 570320, status: offline)

### 2026-06-23

- Snapshot size: **1138** locations
- Added: **1**
- Removed: **0**
- Changed: **2**

Added
- `2753` Haig Road Hawker Centre (postal: 430014, status: ERROR)

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - distance: 8024.594921604226 -> 10755.841199964072
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `2752` Eunos Crescent Blk 4A Hawker Centre
  - locationName: Eunos Crescent Blk 4A -> Eunos Crescent Blk 4A Hawker Centre

### 2026-06-22

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
  - distance: 10755.841199964072 -> 8024.594921604226
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `2353` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - distance: 13507.901205668355 -> 14067.905591355227
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `2513` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - distance: 13507.901205668355 -> 14067.905591355227
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510

### 2026-06-21

No changes.

### 2026-06-20

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
  - distance: 14067.905591355227 -> 13507.901205668355
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2513` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - distance: 14067.905591355227 -> 13507.901205668355
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2747` 672 Klang Lane- Little India
  - locationName: Little India - Klang - 672 Klang Lane -> 672 Klang Lane- Little India

### 2026-06-19

- Snapshot size: **1128** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `2353` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - distance: 13507.901205668355 -> 14067.905591355227
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `2513` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - distance: 13507.901205668355 -> 14067.905591355227
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510

### 2026-06-18

- Snapshot size: **1128** locations
- Added: **1**
- Removed: **0**
- Changed: **2**

Added
- `2731` Fairprice Jewel (postal: 819666, status: MAINTENANCE)

Changed
- `2353` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - distance: 14067.905591355227 -> 13507.901205668355
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `2513` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - distance: 14067.905591355227 -> 13507.901205668355
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523

### 2026-06-17

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

### 2026-06-16

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
  - distance: 8024.594921604226 -> 10755.841199964072
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `2353` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - distance: 13507.901205668355 -> 14067.905591355227
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `2513` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - distance: 13507.901205668355 -> 14067.905591355227
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510

### 2026-06-15

- Snapshot size: **1117** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `2722` Dunman Food Centre (postal: 424768, status: RUNNING)

### 2026-06-14

No changes.

### 2026-06-13

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

### 2026-06-12

No changes.

### 2026-06-11

- Snapshot size: **1108** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2725` 724 AMK Market & Food Centre (postal: 560724, status: RUNNING)

Changed
- `2186` Prime Supermarket 678A Woodlands Avenue 6
  - locationName: Prime Supermarket 687A Woodlands Avenue 6 -> Prime Supermarket 678A Woodlands Avenue 6

### 2026-06-10

No changes.

### 2026-06-09

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

### 2026-06-08

- Snapshot size: **1107** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `2730` Kallang Estate Fresh Market and Food Centre (postal: 397972, status: RUNNING)

### 2026-06-07

- Snapshot size: **1106** locations
- Added: **3**
- Removed: **0**
- Changed: **0**

Added
- `2727` Kebun Baru Food Centre (postal: 568226, status: RUNNING)
- `2728` Ang Mo Kio 628 Market (postal: 560628, status: RUNNING)
- `2729` Chong Boon Market & Food Centre (postal: 561453, status: RUNNING)

### 2026-06-06

No changes.

### 2026-06-05

- Snapshot size: **1103** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2620` Bazaar Westlite Toh Guan Dormitory (postal: 608596, status: RUNNING)

Changed
- `2226` SHENG SIONG BLK 547 SEGAR RD
  - locationName: SHENG SIONG BLK 547 SEGAR RD  -> SHENG SIONG BLK 547 SEGAR RD

### 2026-06-04

- Snapshot size: **1102** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `2656` ALL INDIA SUPERMART PTE LTD (postal: 208282, status: RUNNING)

### 2026-06-03

- Snapshot size: **1101** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2678` SACHI MINIMART PTE LTD (postal: 608537, status: RUNNING)

Changed
- `2663` 361 Sembawang Crescent
  - distance: 10893.183682445024 -> 10861.487359509132
  - latitude: 1.44657900 -> 1.44640100
  - locationName: 361 SEMBWANG CRESCENT -> 361 Sembawang Crescent
  - longitude: 103.81192800 -> 103.81393200

### 2026-06-02

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
  - distance: 10282.605759321848 -> 9747.099555948653
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
  - distance: 6855.361676726628 -> 6821.097333120161
  - latitude: 1.31417000 -> 1.31374300
  - longitude: 103.76716000 -> 103.76782800

### 2026-06-01

No changes.

### 2026-05-31

No changes.

### 2026-05-30

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

### 2026-05-29

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

### 2026-05-28

No changes.

### 2026-05-27

- Snapshot size: **1074** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `1117` FairPrice Hougang 682
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310 , 530682
  - distance: 10755.841199964072 -> 8024.594921604226
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice Hougang 682
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682

### 2026-05-26

No changes.

### 2026-05-25

No changes.

### 2026-05-24

No changes.

### 2026-05-23

No changes.

### 2026-05-22

No changes.

### 2026-05-21

- Snapshot size: **1074** locations
- Added: **2**
- Removed: **0**
- Changed: **0**

Added
- `2660` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `2661` BISMILLAH MINIMART 32 MANDAI (postal: 729939, status: offline)

### 2026-05-20

No changes.

### 2026-05-19

- Snapshot size: **1072** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `2659` TRIPLE N SUPERMART PTE LTD (postal: 415814, status: MAINTENANCE)

### 2026-05-18

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
  - distance: 7463.573887841275 -> 7541.344463165305
  - latitude: 1.29500000 -> 1.29320000
  - longitude: 103.85830000 -> 103.85700000
- `1321` Cold Storage Marina Bay Sands
  - distance: 8566.775229653362 -> 8355.305789322956
  - latitude: 1.28366000 -> 1.28622600
  - longitude: 103.85930000 -> 103.85976400
- `2241` SHENG SIONG BLK 675 YISHUN AVENUE 4
  - locationName: SHENG SIONG BLK 675 YISHUN AVENUE 4  -> SHENG SIONG BLK 675 YISHUN AVENUE 4
- `225` 201 Marsiling Dr
  - distance: 10147.067008772485 -> 11470.26688981575
  - latitude: 1.43573000 -> 1.44269800
  - longitude: 103.79036200 -> 103.77542100
- `2271` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - distance: 7413.418910446766 -> 22118.990573825253
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `839` Blk 257, Pasir Ris Street 21
  - distance: 16383.202394002794 -> 16305.291043589052
  - latitude: 1.36430200 -> 1.36714600
  - longitude: 103.96473400 -> 103.96369900
- `846` Blk 160, Pasir Ris Street 13
  - address: Blk 158, Pasir Ris Street 11, 510158 -> Blk 160, Pasir Ris Street 13, 510160
  - distance: 16101.782760858221 -> 16137.252042151013
  - latitude: 1.36457900 -> 1.36408600
  - locationName: Blk 158, Pasir Ris Street 11 -> Blk 160, Pasir Ris Street 13
  - longitude: 103.96215800 -> 103.96253200
  - postalCode: 510158 -> 510160
  - zipcode: 510158 -> 510160

### 2026-05-17

- Snapshot size: **1071** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `2658` FairPrice Bedok Reservoir  (postal: 470745, status: MAINTENANCE)

Changed
- `960` Blk 226, Simei Street 4
  - address: Blk 233, Simei Street 4, 520226 -> Blk 266, Simei Street 4, 520226

### 2026-05-16

No changes.

### 2026-05-15

No changes.

### 2026-05-14

No changes.

### 2026-05-13

- Snapshot size: **1070** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - distance: 8810.039786921378 -> 10750.873630499158
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `850` Blk 187, Pasir Ris Street 11
  - address: Blk 198, Pasir Ris Street 12, 510198 -> Blk 187, Pasir Ris Street 11, 510187
  - distance: 15923.487092965383 -> 15800.480957281465
  - latitude: 1.36689300 -> 1.36464200
  - locationName: Blk 198, Pasir Ris Street 12 -> Blk 187, Pasir Ris Street 11
  - longitude: 103.96026900 -> 103.95942400
  - postalCode: 510198 -> 510187
  - zipcode: 510198 -> 510187

### 2026-05-12

No changes.

### 2026-05-11

No changes.

### 2026-05-10

- Snapshot size: **1070** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `2288` 417 Canberra Rd
  - address: 417 Canberra Rd, 750417 -> 418 Canberra Rd, 750418
  - distance: 11472.88266984599 -> 11522.865675032668
  - latitude: 1.45198300 -> 1.45243500
  - longitude: 103.81948900 -> 103.81927900
  - postalCode: 750417 -> 750418
  - zipcode: 750417 -> 750418

### 2026-05-09

No changes.

### 2026-05-08

No changes.

### 2026-05-07

No changes.

### 2026-05-06

No changes.

### 2026-05-05

- Snapshot size: **1070** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `1158` Cold Storage Sentosa Cove
  - distance: 11569.021929180419 -> 11547.124706719322
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

### 2026-05-04

No changes.

### 2026-05-03

- Snapshot size: **1070** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `929` Blk 2, Chai Chee Road
  - address: Blk 2, Chai Chee Road, 469044 -> Blk 2, Chai Chee Road, 461002
  - distance: 11873.618281919036 -> 11848.77444871653
  - latitude: 1.32695500 -> 1.32699000
  - longitude: 103.92272100 -> 103.92250000
  - postalCode: 469044 -> 461002
  - zipcode: 469044 -> 461002

### 2026-05-02

No changes.

### 2026-05-01

- Snapshot size: **1070** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `2655` Prime Supermarket Blk 761 Yishun (postal: 760761, status: RUNNING)

### 2026-04-30

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `1147` SHENG SIONG 19 SERANGOON NORTH AVE 5
  - distance: 6664.232186103713 -> 6670.658710367321
  - latitude: 1.37580000 -> 1.37557000
  - locationName: SHENG SIONG 19 SERANGOON NORTH AVE 5  -> SHENG SIONG 19 SERANGOON NORTH AVE 5
  - longitude: 103.87170000 -> 103.87188000

### 2026-04-29

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `186` 260 Boon Lay Dr
  - distance: 12406.472251217458 -> 12251.775520502195
  - latitude: 1.34570500 -> 1.34515700
  - longitude: 103.70661000 -> 103.70801900
- `211` 190 Boon Lay Dr
  - distance: 11799.248868438399 -> 11822.608618506398
  - latitude: 1.34533900 -> 1.34515300
  - longitude: 103.71208600 -> 103.71188200
- `252` 515 Jurong West Street 52
  - distance: 11140.80988892924 -> 10871.660412984003
  - latitude: 1.35007000 -> 1.34625000
  - longitude: 103.71796000 -> 103.72040700

### 2026-04-28

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `281` 160 Woodlands Street 13
  - distance: 11361.440199953757 -> 10569.804920530301
  - latitude: 1.44201000 -> 1.43332900
  - longitude: 103.77627500 -> 103.77465200

### 2026-04-27

No changes.

### 2026-04-26

No changes.

### 2026-04-25

No changes.

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
