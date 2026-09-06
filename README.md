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
<summary><b>2026-09-07</b> · 1,300 locations · ±1</summary>

- Snapshot size: **1300** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `2550` Bazaar Terusan Recreation Centre
  - address: #33/34, TERUSAN RECREATION CENTRE, 1 JALAN PAPPAN ROAD, 619392 -> #33/34, TERUSAN RECREATION CENTRE, 1 JALAN PAPAN ROAD, 619392
</details>

<details>
<summary><b>2026-09-06</b> · 1,300 locations · +1 · ±1299</summary>

- Snapshot size: **1300** locations
- Added: **1**
- Removed: **0**
- Changed: **1299**

Added
- `3028` Haig Road Market & Cooked Food Centre (postal: 430014, status: RUNNING)

Changed
- `10` Block 54 Geylang Bahru
  - latitude: 1.32393700 -> 1.324
  - longitude: 103.86780000 -> 103.868
- `1015` One Punggol Hawker Centre
  - latitude: 1.40840400 -> 1.408
  - longitude: 103.90544100 -> 103.905
- `1016` SHENG SIONG BLK 31A MARGARET DRIVE 
  - latitude: 1.29850000 -> 1.298
  - longitude: 103.80390000 -> 103.804
- `1017` SHENG SIONG BLK 88 TANGLIN HALT ROAD  
  - latitude: 1.30140000 -> 1.301
  - longitude: 103.79830000 -> 103.798
- `1018` SHENG SIONG BLK 301 PUNGGOL CENTRAL 
  - latitude: 1.40370000 -> 1.404
  - longitude: 103.90610000 -> 103.906
- `1019` SHENG SIONG 377 HOUGANG STREET 32,  HOUGANG RIVERCOURT
  - latitude: 1.36300000 -> 1.363
  - longitude: 103.89520000 -> 103.895
- `1020` SHENG SIONG BLK 351 ANCHORVALE ROAD 
  - latitude: 1.39320000 -> 1.393
  - longitude: 103.88710000 -> 103.887
- `1021` SHENG SIONG BLK 218 SUMANG WALK 
  - latitude: 1.40330000 -> 1.403
  - longitude: 103.89500000 -> 103.895
- `1022` Block 402 Northshore Drive
  - latitude: 1.41455000 -> 1.415
  - longitude: 103.90024800 -> 103.900
- `1023` Block 272 Punggol Walk
  - latitude: 1.40287000 -> 1.403
  - longitude: 103.90076300 -> 103.901
- `1024` Block 109 Ang Mo Kio Avenue 4
  - latitude: 1.37023600 -> 1.370
  - longitude: 103.83776100 -> 103.838
- `1025` Block 610 Ang Mo Kio Avenue 4
  - latitude: 1.37956800 -> 1.380
  - longitude: 103.83940500 -> 103.839
- `1026` Block 651B Ang Mo Kio Avenue 9
  - latitude: 1.38363300 -> 1.384
  - longitude: 103.84216500 -> 103.842
- `1027` Block 170 Ang Mo Kio Avenue 4
  - latitude: 1.37394300 -> 1.374
  - longitude: 103.83700700 -> 103.837
- `1028` Block 319A Anchorvale Drive
  - latitude: 1.39068700 -> 1.391
  - longitude: 103.88989800 -> 103.890
- `1029` Block 311D Anchorvale Lane
  - latitude: 1.39159800 -> 1.392
  - longitude: 103.88444900 -> 103.884
- `1030` Block 124C Rivervale Drive
  - latitude: 1.38812900 -> 1.388
  - longitude: 103.90280500 -> 103.903
- `1031` Block 225C Compassvale Walk
  - latitude: 1.38858300 -> 1.389
  - longitude: 103.89892600 -> 103.899
- `1032` Block 461A Sengkang West Way
  - latitude: 1.39460600 -> 1.395
  - longitude: 103.87069000 -> 103.871
- `1033` Block 433B Sengkang West Way
  - latitude: 1.39383100 -> 1.394
  - longitude: 103.87776400 -> 103.878
- `1034` Block 452B Sengkang West Way
  - latitude: 1.39378100 -> 1.394
  - longitude: 103.87403100 -> 103.874
- `1035` Block 974 Hougang Street 91
  - latitude: 1.37773600 -> 1.378
  - longitude: 103.87935200 -> 103.879
- `1036` Block 658 Hougang Avenue 8
  - latitude: 1.37327700 -> 1.373
  - longitude: 103.88285000 -> 103.883
- `1037` Block 988A Buangkok Green
  - latitude: 1.37950700 -> 1.380
  - longitude: 103.87733400 -> 103.877
- `1038` Block 943 Hougang Street 92
  - latitude: 1.37384500 -> 1.374
  - longitude: 103.88065800 -> 103.881
- `1039` Block 12 Cantonment Close
  - latitude: 1.27448200 -> 1.274
  - longitude: 103.84010000 -> 103.840
- `1040` Block 20 Telok Blangah Crescent
  - latitude: 1.27703400 -> 1.277
  - longitude: 103.82182700 -> 103.822
- `1041` Block 112 Bukit Purmei
  - latitude: 1.27453000 -> 1.275
  - longitude: 103.82590000 -> 103.826
- `1042` Block 37 Jalan Rumah Tinggi
  - latitude: 1.28922500 -> 1.289
  - longitude: 103.80917100 -> 103.809
- `1043` Block 106 Henderson Crescent
  - latitude: 1.28968000 -> 1.290
  - longitude: 103.82230000 -> 103.822
- `1044` Block 128 Kim Tian Road
  - latitude: 1.28153500 -> 1.282
  - longitude: 103.82910000 -> 103.829
- `1045` Block 144 Jalan Bukit Merah
  - latitude: 1.27737100 -> 1.277
  - longitude: 103.82989200 -> 103.830
- `1046` Block 3 Queen's Road
  - latitude: 1.31841800 -> 1.318
  - longitude: 103.80812400 -> 103.808
- `1047` Block 131 Ang Mo Kio Avenue 3
  - latitude: 1.37108200 -> 1.371
  - longitude: 103.84164500 -> 103.842
- `1048` Block 649 Ang Mo Kio Avenue 5
  - latitude: 1.37780700 -> 1.378
  - longitude: 103.84375200 -> 103.844
- `1049` Block 9 Toh Yi Drive
  - latitude: 1.33829700 -> 1.338
  - longitude: 103.77358900 -> 103.774
- `1050` Block 12 Farrer Park Road
  - latitude: 1.31212700 -> 1.312
  - longitude: 103.85180000 -> 103.852
- `1051` Block 120 McNair Road
  - latitude: 1.31935900 -> 1.319
  - longitude: 103.85684400 -> 103.857
- `1052` Block 102 Jalan Rajah
  - latitude: 1.32832500 -> 1.328
  - longitude: 103.85141400 -> 103.851
- `1053` Block 13 Dover Close East
  - latitude: 1.30542900 -> 1.305
  - longitude: 103.78600000 -> 103.786
- `1054` Block 156 Rivervale Crescent
  - latitude: 1.39128900 -> 1.391
  - longitude: 103.90737900 -> 103.907
- `1055` Block 246 Compassvale Road
  - latitude: 1.39261900 -> 1.393
  - longitude: 103.89907300 -> 103.899
- `1056` Block 105 Rivervale Walk
  - latitude: 1.38219700 -> 1.382
  - longitude: 103.90071200 -> 103.901
- `1057` Block 203A Compassvale Road
  - latitude: 1.38670800 -> 1.387
  - longitude: 103.89544400 -> 103.895
- `1058` Block 132 Rivervale Street
  - latitude: 1.38999200 -> 1.390
  - longitude: 103.90352300 -> 103.904
- `1059` Block 122E RIVERVALE DRIVE
  - latitude: 1.38782200 -> 1.388
  - longitude: 103.90580000 -> 103.906
- `1060` Block 207D Compassvale Lane
  - latitude: 1.38459400 -> 1.385
  - longitude: 103.89740200 -> 103.897
- `1061` Block 291B Compassvale Street
  - latitude: 1.39602200 -> 1.396
  - longitude: 103.89835900 -> 103.898
- `1062` Block 325C Sengkang East Way
  - latitude: 1.39329800 -> 1.393
  - longitude: 103.89134900 -> 103.891
- `1063` Block 303B Anchorvale Link
  - latitude: 1.38753100 -> 1.388
  - longitude: 103.88977100 -> 103.890
- `1064` Block 288B Compassvale Crescent
  - latitude: 1.39848400 -> 1.398
  - longitude: 103.89770400 -> 103.898
- `1065` Block 297B Compassvale Street
  - latitude: 1.39489800 -> 1.395
  - longitude: 103.90110300 -> 103.901
- `1066` Block 188D Rivervale Drive
  - latitude: 1.39501100 -> 1.395
  - longitude: 103.90383700 -> 103.904
- `1067` Block 624 Hougang Avenue 8
  - latitude: 1.37023700 -> 1.370
  - longitude: 103.88228100 -> 103.882
- `1068` Block 563 Ang Mo Kio Avenue 3
  - latitude: 1.36993400 -> 1.370
  - longitude: 103.85810800 -> 103.858
- `1069` Block 456 Hougang Avenue 10
  - latitude: 1.37717800 -> 1.377
  - longitude: 103.89544000 -> 103.895
- `1070` Block 337 Ang Mo Kio Avenue 1
  - latitude: 1.36322500 -> 1.363
  - longitude: 103.85172200 -> 103.852
- `1071` Block 406C Fernvale Road
  - latitude: 1.38884900 -> 1.389
  - longitude: 103.87462700 -> 103.875
- `1072` Block 463 Ang Mo Kio Avenue 10
  - latitude: 1.36695800 -> 1.367
  - longitude: 103.85746900 -> 103.857
- `1073` Block 634 Hougang Avenue 8
  - latitude: 1.37005600 -> 1.370
  - longitude: 103.87842400 -> 103.878
- `1074` Block 911 Hougang Street 91
  - latitude: 1.37888100 -> 1.379
  - longitude: 103.88375100 -> 103.884
- `1075` Block 568 Hougang Street 51
  - latitude: 1.37864500 -> 1.379
  - longitude: 103.88906300 -> 103.889
- `1076` Block 444 Hougang Avenue 8
  - latitude: 1.37950100 -> 1.380
  - longitude: 103.89386500 -> 103.894
- `1077` Block 984A Buangkok Link
  - latitude: 1.38203700 -> 1.382
  - longitude: 103.88114300 -> 103.881
- `1078` Block 607 Hougang Avenue 4
  - latitude: 1.37022900 -> 1.370
  - longitude: 103.88620000 -> 103.886
- `1079` Block 48 Strathmore Avenue
  - latitude: 1.29380000 -> 1.294
  - longitude: 103.80780100 -> 103.808
- `1080` Block 114 Potong Pasir
  - latitude: 1.33675800 -> 1.337
  - longitude: 103.86321200 -> 103.863
- `1081` Block 211C Punggol Walk
  - latitude: 1.40105900 -> 1.401
  - longitude: 103.89915500 -> 103.899
- `1082` SHENG SIONG BLK 108 MCNAIR ROAD 
  - latitude: 1.32180000 -> 1.322
  - longitude: 103.85950000 -> 103.859
- `1083` SHENG SIONG BLK 52 CHIN SWEE ROAD
  - latitude: 1.28700000 -> 1.287
  - longitude: 103.84170000 -> 103.842
- `1086` Block 217 Ang Mo Kio Avenue 1
  - latitude: 1.36558700 -> 1.366
  - longitude: 103.84164700 -> 103.842
- `1087` Block 432 Ang Mo Kio Avenue 10
  - latitude: 1.36834400 -> 1.368
  - longitude: 103.85359000 -> 103.854
- `1088` Block 108 Potong Pasir Avenue 1
  - latitude: 1.33499800 -> 1.335
  - longitude: 103.86796600 -> 103.868
- `1089` Block 121 Potong Pasir Avenue 1
  - latitude: 1.33574400 -> 1.336
  - longitude: 103.86554400 -> 103.866
- `1090` Block 143 Potong Pasir Avenue 2
  - latitude: 1.33288000 -> 1.333
  - longitude: 103.86610900 -> 103.866
- `1091` SHENG SIONG BLK 410A SIN MING AVENUE
  - latitude: 1.36320000 -> 1.363
  - longitude: 103.83540000 -> 103.835
- `1092` SHENG SIONG BLK 122 ANG MO KIO AVE 3 
  - latitude: 1.37020000 -> 1.370
  - longitude: 103.84320000 -> 103.843
- `1093` SHENG SIONG BLK 233 ANG MO KIO AVE 3
  - latitude: 1.36770000 -> 1.368
  - longitude: 103.83630000 -> 103.836
- `1094` SHENG SIONG BLK 2 ANG MO KIO DRIVE, ITE COLLEGE CENTRAL
  - latitude: 1.37780000 -> 1.378
  - longitude: 103.85630000 -> 103.856
- `1095` SHENG SIONG BLK 18B CIRCUIT ROAD 
  - latitude: 1.32920000 -> 1.329
  - longitude: 103.88820000 -> 103.888
- `1096` SHENG SIONG BLK 231 SUMANG LANE
  - latitude: 1.40200000 -> 1.402
  - longitude: 103.89210000 -> 103.892
- `1097` SHENG SIONG BLK 622D PUNGGOL CENTRAL
  - latitude: 1.40050000 -> 1.401
  - longitude: 103.91040000 -> 103.910
- `1098` SHENG SIONG BLK 338 ANCHORVALE CRESCENT 
  - latitude: 1.39920000 -> 1.399
  - longitude: 103.88960000 -> 103.890
- `1099` SHENG SIONG BLK 465 FERNVALE ROAD 
  - latitude: 1.39820000 -> 1.398
  - longitude: 103.87660000 -> 103.877
- `1100` SHENG SIONG BLK 473 FERNVALE STREET
  - latitude: 1.39790000 -> 1.398
  - longitude: 103.88150000 -> 103.882
- `1101` SHENG SIONG BLK 6 POTONG PASIR AVE 2,  POTONG PASIR CC 
  - latitude: 1.33270000 -> 1.333
  - longitude: 103.86710000 -> 103.867
- `1102` SHENG SIONG BLK 212 BIDADARI PARK DRIVE
  - latitude: 1.34240000 -> 1.342
  - longitude: 103.87570000 -> 103.876
- `1103` SHENG SIONG BLK 221 MOUNT VERNON RD 
  - latitude: 1.34160000 -> 1.342
  - longitude: 103.88050000 -> 103.880
- `1104` FairPrice North Shore
  - latitude: 1.41741900 -> 1.417
  - longitude: 103.91133600 -> 103.911
- `1111` ANG MO SUPERMARKET-260 ANG MO KIO ST21
  - latitude: 1.36890000 -> 1.369
  - longitude: 103.83470000 -> 103.835
- `1112` FairPrice Blk 712 Ang Mo Kio Avenue 6
  - latitude: 1.37140000 -> 1.371
  - longitude: 103.84710000 -> 103.847
- `1113` FairPrice Serangoon Garden myVillage
  - latitude: 1.36510000 -> 1.365
  - longitude: 103.86510000 -> 103.865
- `1114` FairPrice 612 Punggol Drive
  - latitude: 1.40480000 -> 1.405
  - longitude: 103.90850000 -> 103.909
- `1115` FairPrice ZhongShan Park
  - latitude: 1.32700000 -> 1.327
  - longitude: 103.84640000 -> 103.846
- `1116` FairPrice Thomson Plaza
  - latitude: 1.35490000 -> 1.355
  - longitude: 103.83080000 -> 103.831
- `1117` FairPrice 682 Hougang Avenue 4
  - latitude: 1.37453000 -> 1.375
  - longitude: 103.88562000 -> 103.886
- `1118` FairPrice SengKang East
  - latitude: 1.38640000 -> 1.386
  - longitude: 103.89330000 -> 103.893
- `1119` FairPrice Blk 635B Punggol Drive
  - latitude: 1.39760000 -> 1.398
  - longitude: 103.91980000 -> 103.920
- `1120` FairPrice Nex Mall
  - latitude: 1.35070000 -> 1.351
  - longitude: 103.87190000 -> 103.872
- `1122` FairPrice Blk 279 Bishan Street 24
  - latitude: 1.35720000 -> 1.357
  - longitude: 103.84390000 -> 103.844
- `1123` FairPrice Serangoon North Ave 1
  - latitude: 1.36980000 -> 1.370
  - longitude: 103.87300000 -> 103.873
- `1124` FairPrice Lorong Limau
  - latitude: 1.32380000 -> 1.324
  - longitude: 103.85570000 -> 103.856
- `1125` FairPrice Punggol Oasis
  - latitude: 1.40310000 -> 1.403
  - longitude: 103.91320000 -> 103.913
- `1126` FairPrice MacPherson Blossom
  - latitude: 1.32520000 -> 1.325
  - longitude: 103.89010000 -> 103.890
- `1127` FairPrice Punggol Plaza
  - latitude: 1.39420000 -> 1.394
  - longitude: 103.91300000 -> 103.913
- `1128` FairPrice Punggol Coast Mall
  - latitude: 1.41490000 -> 1.415
  - longitude: 103.91270000 -> 103.913
- `1129` FairPrice AMK Hub
  - latitude: 1.36900000 -> 1.369
  - longitude: 103.84810000 -> 103.848
- `1130` FairPrice Serangoon Central
  - latitude: 1.35390000 -> 1.354
  - longitude: 103.87070000 -> 103.871
- `1131` FairPrice Hougang 202
  - latitude: 1.35770000 -> 1.358
  - longitude: 103.88380000 -> 103.884
- `1132` FairPrice Rivervale Shores
  - latitude: 1.38640000 -> 1.386
  - longitude: 103.90930000 -> 103.909
- `1133` FairPrice Poiz Centre
  - latitude: 1.33120000 -> 1.331
  - longitude: 103.86810000 -> 103.868
- `1134` FairPrice Blk 510 Bishan Street 13
  - latitude: 1.34870000 -> 1.349
  - longitude: 103.84980000 -> 103.850
- `1135` FairPrice Finest Junction 8
  - latitude: 1.35108400 -> 1.351
  - longitude: 103.84894500 -> 103.849
- `1136` FairPrice Blk 192 Toa Payoh Lorong 4
  - latitude: 1.33184000 -> 1.332
  - longitude: 103.85060000 -> 103.851
- `1138` FairPrice Woodleigh Mall
  - latitude: 1.33900000 -> 1.339
  - longitude: 103.87150000 -> 103.871
- `1139` SHENG SIONG BLK 658 PUNGGOL EAST 
  - latitude: 1.39980000 -> 1.400
  - longitude: 103.91950000 -> 103.919
- `1140` SHENG SIONG BLK 660A EDGEDALE PLAINS 
  - latitude: 1.40250000 -> 1.403
  - longitude: 103.91630000 -> 103.916
- `1141` SHENG SIONG BLK 671 EDGEFIELD PLAINS
  - latitude: 1.40560000 -> 1.406
  - longitude: 103.91190000 -> 103.912
- `1142` SHENG SIONG BLK 512 BISHAN STREET 13 
  - latitude: 1.34960000 -> 1.350
  - longitude: 103.85000000 -> 103.850
- `1143` SHENG SIONG BLK 161 ANG MO KIO AVE  4
  - latitude: 1.37420000 -> 1.374
  - longitude: 103.83950000 -> 103.840
- `1144` SHENG SIONG BLK 181 TOA PAYOH LORONG 4
  - latitude: 1.33360000 -> 1.334
  - longitude: 103.85100000 -> 103.851
- `1145` SHENG SIONG BLK 312A SUMANG LINK 
  - latitude: 1.41140000 -> 1.411
  - longitude: 103.90040000 -> 103.900
- `1146` SHENG SIONG BLK 417 FERNVALE LINK
  - latitude: 1.39160000 -> 1.392
  - longitude: 103.87950000 -> 103.879
- `1147` SHENG SIONG 19 SERANGOON NORTH AVE 5
  - latitude: 1.37557000 -> 1.376
  - longitude: 103.87188000 -> 103.872
- `1148` SHENG SIONG BLK 4 TOA PAYOH LORONG 7 
  - latitude: 1.33910000 -> 1.339
  - longitude: 103.85580000 -> 103.856
- `1149` SHENG SIONG BLK 455 SENGKANG WEST AVE 5 
  - latitude: 1.39140000 -> 1.391
  - longitude: 103.87110000 -> 103.871
- `1154` ANG MO SUPERMARKET-639 PUNGGOL DRIVE
  - latitude: 1.39940000 -> 1.399
  - longitude: 103.91600000 -> 103.916
- `1155` Block 113B Alkaff Crescent
  - latitude: 1.33608000 -> 1.336
  - longitude: 103.87260000 -> 103.873
- `1156` ACE SIGNATURE @ NTP
  - latitude: 1.35210000 -> 1.352
  - longitude: 103.86080000 -> 103.861
- `1157` Block 1 Lorong Lew Lian
  - latitude: 1.35092300 -> 1.351
  - longitude: 103.87538600 -> 103.875
- `1158` Cold Storage Sentosa Cove
  - latitude: 1.24730900 -> 1.247
  - longitude: 103.84010500 -> 103.840
- `1159` Don Don Donki (City Square Mall)
  - latitude: 1.31140000 -> 1.311
  - longitude: 103.85650000 -> 103.856
- `1160` FairPrice Xtra VivoCity
  - latitude: 1.26480000 -> 1.265
  - longitude: 103.82280000 -> 103.823
- `1161` FairPrice 150 Towner Road
  - latitude: 1.31800000 -> 1.318
  - longitude: 103.85970000 -> 103.860
- `1162` FairPrice City Square Mall
  - latitude: 1.31180000 -> 1.312
  - longitude: 103.85660000 -> 103.857
- `1164` Marks & Spencer Vivo City
  - latitude: 1.26470000 -> 1.265
  - longitude: 103.82310000 -> 103.823
- `1165` SCARLETT@BUGIS+
  - latitude: 1.29960000 -> 1.300
  - longitude: 103.85460000 -> 103.855
- `1166` Block 113 Whampoa Road
  - latitude: 1.32581600 -> 1.326
  - longitude: 103.85719300 -> 103.857
- `1167` Cold Storage Plaza Singapura
  - latitude: 1.30071100 -> 1.301
  - longitude: 103.84490000 -> 103.845
- `1168` Cold Storage Raffles City
  - latitude: 1.29400000 -> 1.294
  - longitude: 103.85310000 -> 103.853
- `1169` Cold Storage Suntec City
  - latitude: 1.29500000 -> 1.295
  - longitude: 103.85830000 -> 103.858
- `1170` Cold Storage New Bahru
  - latitude: 1.29280000 -> 1.293
  - longitude: 103.83860000 -> 103.839
- `1171` Jasons Deli by Cold Storage ION Orchard
  - latitude: 1.30380000 -> 1.304
  - longitude: 103.83170000 -> 103.832
- `1172` Cold Storage Aperia
  - latitude: 1.30970000 -> 1.310
  - longitude: 103.86430000 -> 103.864
- `1173` Don Don Donki (Orchard Central)
  - latitude: 1.30080000 -> 1.301
  - longitude: 103.83970000 -> 103.840
- `1174` Cold Storage Holland Village
  - latitude: 1.31020000 -> 1.310
  - longitude: 103.79530000 -> 103.795
- `1175` Don Don Donki (100AM)
  - latitude: 1.27490000 -> 1.275
  - longitude: 103.84340000 -> 103.843
- `1176` Singapore Polytechnic (SP) T11A Building
  - latitude: 1.31033000 -> 1.310
  - longitude: 103.77916000 -> 103.779
- `1177` Don Don Donki (Clarke Quay Central)
  - latitude: 1.28910000 -> 1.289
  - longitude: 103.84670000 -> 103.847
- `1178` Don Don Donki (Suntec City Mall)
  - latitude: 1.29320000 -> 1.293
  - longitude: 103.85700000 -> 103.857
- `1179` FairPrice Havelock Road
  - latitude: 1.28980000 -> 1.290
  - longitude: 103.82670000 -> 103.827
- `1180` FairPrice Shaw Plaza
  - latitude: 1.32527900 -> 1.325
  - longitude: 103.85104800 -> 103.851
- `1181` FairPrice Blk 476 Upper Serangoon View
  - latitude: 1.37710000 -> 1.377
  - longitude: 103.90350000 -> 103.903
- `1182` FairPrice Kallang Bahru
  - latitude: 1.32100000 -> 1.321
  - longitude: 103.87070000 -> 103.871
- `1183` FairPrice Chinatown Point
  - latitude: 1.28540000 -> 1.285
  - longitude: 103.84500000 -> 103.845
- `1184` FairPrice Tanjong Pagar
  - latitude: 1.27590000 -> 1.276
  - longitude: 103.84300000 -> 103.843
- `1185` FairPrice Finest Clarke Quay
  - latitude: 1.29050000 -> 1.290
  - longitude: 103.84590000 -> 103.846
- `1186` FairPrice Finest Coronation Plaza
  - latitude: 1.32390000 -> 1.324
  - longitude: 103.80990000 -> 103.810
- `1187` FairPrice Dover Crescent
  - latitude: 1.30510000 -> 1.305
  - longitude: 103.78140000 -> 103.781
- `1188` FairPrice Dawson Place
  - latitude: 1.29260000 -> 1.293
  - longitude: 103.81140000 -> 103.811
- `1189` FairPrice Hougang One
  - latitude: 1.37550000 -> 1.375
  - longitude: 103.87920000 -> 103.879
- `1190` FairPrice Blk 78A Telok Blangah Street 32
  - latitude: 1.27320000 -> 1.273
  - longitude: 103.80910000 -> 103.809
- `1191` FairPrice 5 Upper Boon Keng Road
  - latitude: 1.31250000 -> 1.313
  - longitude: 103.87270000 -> 103.873
- `1192` FairPrice Finest 100AM
  - latitude: 1.27460000 -> 1.275
  - longitude: 103.84340000 -> 103.843
- `1193` FairPrice French Road
  - latitude: 1.30890000 -> 1.309
  - longitude: 103.86190000 -> 103.862
- `1194` Giant Ang Mo Kio Avenue 10
  - latitude: 1.37270000 -> 1.373
  - longitude: 103.85400000 -> 103.854
- `1195` Giant Ang Mo Kio Street 31
  - latitude: 1.36480000 -> 1.365
  - longitude: 103.84790000 -> 103.848
- `1196` Giant Telok Blangah Crescent
  - latitude: 1.27780000 -> 1.278
  - longitude: 103.81940000 -> 103.819
- `1197` SHENG SIONG BLK 85 DAWSON ROAD 
  - latitude: 1.29550000 -> 1.296
  - longitude: 103.81000000 -> 103.810
- `1198` SHENG SIONG BLK 11 UPPER BOON KENG ROAD 
  - latitude: 1.31420000 -> 1.314
  - longitude: 103.87060000 -> 103.871
- `1199` Meidi-Ya Millenia Walk
  - latitude: 1.29210000 -> 1.292
  - longitude: 103.85980000 -> 103.860
- `1202` Cold Storage UE Square
  - latitude: 1.29210000 -> 1.292
  - longitude: 103.84250000 -> 103.843
- `1203` Cold Storage Serangoon Nex
  - latitude: 1.35081900 -> 1.351
  - longitude: 103.87250000 -> 103.873
- `1204` Cold Storage Anchorpoint
  - latitude: 1.28862800 -> 1.289
  - longitude: 103.80499200 -> 103.805
- `1205` Cold Storage Novena Square
  - latitude: 1.31995700 -> 1.320
  - longitude: 103.84390000 -> 103.844
- `1206` Cold Storage Heartland Mall
  - latitude: 1.35950000 -> 1.359
  - longitude: 103.88510000 -> 103.885
- `1207` Don Don Donki (Square2)
  - latitude: 1.32070000 -> 1.321
  - longitude: 103.84430000 -> 103.844
- `1208` FairPrice Holland Drive
  - latitude: 1.30930000 -> 1.309
  - longitude: 103.79260000 -> 103.793
- `1209` FairPrice Finest Scotts Square
  - latitude: 1.30580000 -> 1.306
  - longitude: 103.83290000 -> 103.833
- `1210` FairPrice Rivervale Plaza
  - latitude: 1.38557900 -> 1.386
  - longitude: 103.90250300 -> 103.903
- `1211` FairPrice Toa Payoh Hub
  - latitude: 1.33300000 -> 1.333
  - longitude: 103.84700000 -> 103.847
- `1212` FairPrice 29A Ghim Moh Link
  - latitude: 1.30860000 -> 1.309
  - longitude: 103.78470000 -> 103.785
- `1213` FairPrice Blk 227 Compassvale Link
  - latitude: 1.38240000 -> 1.382
  - longitude: 103.89400000 -> 103.894
- `1214` FairPrice Kang Kar Mall
  - latitude: 1.37180000 -> 1.372
  - longitude: 103.89410000 -> 103.894
- `1215` FairPrice Seletar Mall
  - latitude: 1.39120000 -> 1.391
  - longitude: 103.87600000 -> 103.876
- `1216` Giant Northshore 2
  - latitude: 1.41712500 -> 1.417
  - longitude: 103.90170000 -> 103.902
- `1217` Block 171 Lorong 1 Toa Payoh
  - latitude: 1.33098000 -> 1.331
  - longitude: 103.84265500 -> 103.843
- `1218` Block 205 Toa Payoh North
  - latitude: 1.34202200 -> 1.342
  - longitude: 103.84821300 -> 103.848
- `1219` Block 143 Lorong 2 Toa Payoh
  - latitude: 1.33565300 -> 1.336
  - longitude: 103.84390000 -> 103.844
- `1220` Block 99C Lorong 2 Toa Payoh
  - latitude: 1.33904600 -> 1.339
  - longitude: 103.84747300 -> 103.847
- `1221` Block 128 Lorong 1 Toa Payoh
  - latitude: 1.33780700 -> 1.338
  - longitude: 103.84409300 -> 103.844
- `1222` Block 228 Bishan Street 23
  - latitude: 1.35809000 -> 1.358
  - longitude: 103.84647500 -> 103.846
- `1223` Block 138 Bishan Street 12
  - latitude: 1.34437100 -> 1.344
  - longitude: 103.85249000 -> 103.852
- `1224` Block 9 Selegie Road
  - latitude: 1.30336600 -> 1.303
  - longitude: 103.85090100 -> 103.851
- `1225` Block 125 Aljunied Road
  - latitude: 1.32321000 -> 1.323
  - longitude: 103.88180000 -> 103.882
- `1226` Block 46 Circuit Road
  - latitude: 1.32609700 -> 1.326
  - longitude: 103.88620000 -> 103.886
- `1229` SCARLETT@DJITSUN AMK
  - latitude: 1.37290000 -> 1.373
  - longitude: 103.84760000 -> 103.848
- `1230` SCARLETT@HEARTLAND MALL
  - latitude: 1.35950000 -> 1.359
  - longitude: 103.88510000 -> 103.885
- `1231` Block 12 Holland Avenue
  - latitude: 1.30938000 -> 1.309
  - longitude: 103.79488000 -> 103.795
- `1232` Block 212 Serangoon Avenue 4
  - latitude: 1.35678600 -> 1.357
  - longitude: 103.87300000 -> 103.873
- `1233` Block 25 Sin Ming Road
  - latitude: 1.35492000 -> 1.355
  - longitude: 103.83775800 -> 103.838
- `1234` Block 473B Upper Serangoon Crescent
  - latitude: 1.37595400 -> 1.376
  - longitude: 103.90105200 -> 103.901
- `1235` Block 114 Lorong 1 Toa Payoh
  - latitude: 1.34084700 -> 1.341
  - longitude: 103.84430000 -> 103.844
- `1236` Block 832 Hougang Central
  - latitude: 1.37065000 -> 1.371
  - longitude: 103.88970000 -> 103.890
- `1237` Block 236 Hougang Avenue 1
  - latitude: 1.35783000 -> 1.358
  - longitude: 103.88890000 -> 103.889
- `1238` Block 313 Shunfu Road
  - latitude: 1.35149300 -> 1.351
  - longitude: 103.83752200 -> 103.838
- `1239` Block 129 Lorong Ah Soo
  - latitude: 1.35152300 -> 1.352
  - longitude: 103.88750000 -> 103.888
- `1240` Block 23B Queen's Close
  - latitude: 1.29368100 -> 1.294
  - longitude: 103.80040000 -> 103.800
- `1241` Block 466 Hougang Avenue 8
  - latitude: 1.37286100 -> 1.373
  - longitude: 103.89700000 -> 103.897
- `1242` Block 93 Whampoa Drive
  - latitude: 1.32223300 -> 1.322
  - longitude: 103.85483800 -> 103.855
- `1243` Block 318 Serangoon Avenue 2
  - latitude: 1.35286300 -> 1.353
  - longitude: 103.86710000 -> 103.867
- `1244` Block 336 Hougang Avenue 7
  - latitude: 1.36936200 -> 1.369
  - longitude: 103.89820000 -> 103.898
- `1245` Block 195D Punggol Road
  - latitude: 1.40157200 -> 1.402
  - longitude: 103.90693700 -> 103.907
- `1246` Huber's Butchery @ Dempsey
  - latitude: 1.30688900 -> 1.307
  - longitude: 103.81011800 -> 103.810
- `1247` Block 174B Hougang Avenue 1
  - latitude: 1.34956300 -> 1.350
  - longitude: 103.88920000 -> 103.889
- `1248` Block 204 Bishan Street 23
  - latitude: 1.35498800 -> 1.355
  - longitude: 103.84740000 -> 103.847
- `1249` FairPrice Finest 111 Somerset
  - latitude: 1.30040000 -> 1.300
  - longitude: 103.83760000 -> 103.838
- `1250` FairPrice 43 Cambridge Road
  - latitude: 1.31540000 -> 1.315
  - longitude: 103.84940000 -> 103.849
- `1251` Block 470B Upper Serangoon Crescent
  - latitude: 1.37904700 -> 1.379
  - longitude: 103.90080000 -> 103.901
- `1252` FairPrice Finest The Centrepoint
  - latitude: 1.30170000 -> 1.302
  - longitude: 103.83950000 -> 103.840
- `1253` Block 134 Jalan Bukit Merah
  - latitude: 1.27913000 -> 1.279
  - longitude: 103.82760000 -> 103.828
- `1254` Block 206A Woodleigh Link
  - latitude: 1.34144000 -> 1.341
  - longitude: 103.87260000 -> 103.873
- `1255` FairPrice Depot Heights Shopping Centre
  - latitude: 1.28130000 -> 1.281
  - longitude: 103.80990000 -> 103.810
- `1256` Block 302 Hougang Avenue 5
  - latitude: 1.36849900 -> 1.368
  - longitude: 103.89435800 -> 103.894
- `1257` FairPrice Finest Artra
  - latitude: 1.29010000 -> 1.290
  - longitude: 103.81690000 -> 103.817
- `1258` FairPrice Holland V
  - latitude: 1.31040000 -> 1.310
  - longitude: 103.79590000 -> 103.796
- `1259` Block 232 Lorong 8 Toa Payoh
  - latitude: 1.33759100 -> 1.338
  - longitude: 103.85910000 -> 103.859
- `1260` FairPrice Anchorvale Village
  - latitude: 1.39670000 -> 1.397
  - longitude: 103.88820000 -> 103.888
- `1261` Block 201 Toa Payoh North
  - latitude: 1.34154200 -> 1.342
  - longitude: 103.85000000 -> 103.850
- `1262` Block 22 Hougang Avenue 3
  - latitude: 1.36427000 -> 1.364
  - longitude: 103.89040000 -> 103.890
- `1263` Block 112 Bishan Street 12
  - latitude: 1.34688700 -> 1.347
  - longitude: 103.84881400 -> 103.849
- `1264` Block 177 Bishan Street 13
  - latitude: 1.34786700 -> 1.348
  - longitude: 103.85350000 -> 103.853
- `1265` FairPrice Dunearn Village
  - latitude: 1.33670000 -> 1.337
  - longitude: 103.78360000 -> 103.784
- `1266` Block 524 Hougang Avenue 6
  - latitude: 1.37412500 -> 1.374
  - longitude: 103.89039300 -> 103.890
- `1267` Block 38B Bendemeer Road
  - latitude: 1.32065100 -> 1.321
  - longitude: 103.86681100 -> 103.867
- `1268` Block 243 Bishan Street 22
  - latitude: 1.36087600 -> 1.361
  - longitude: 103.84470000 -> 103.845
- `1269` Block 222 Lorong 8 Toa Payoh
  - latitude: 1.34179100 -> 1.342
  - longitude: 103.85590000 -> 103.856
- `1270` Block 15 Joo Seng Road
  - latitude: 1.33559800 -> 1.336
  - longitude: 103.88023300 -> 103.880
- `1271` Block 95B Henderson Road
  - latitude: 1.28699300 -> 1.287
  - longitude: 103.82157900 -> 103.822
- `1272` Block 534 Hougang Street 52
  - latitude: 1.37716000 -> 1.377
  - longitude: 103.89031300 -> 103.890
- `1273` Block 160 Lorong 1 Toa Payoh
  - latitude: 1.33098500 -> 1.331
  - longitude: 103.84470000 -> 103.845
- `1274` FairPrice Stirling
  - latitude: 1.29100000 -> 1.291
  - longitude: 103.80310000 -> 103.803
- `1275` Block 707 Hougang Avenue 2
  - latitude: 1.36631900 -> 1.366
  - longitude: 103.88870000 -> 103.889
- `1276` Cold Storage One North
  - latitude: 1.29890000 -> 1.299
  - longitude: 103.78740000 -> 103.787
- `1277` FairPrice Finest Funan Mall
  - latitude: 1.29130000 -> 1.291
  - longitude: 103.85010000 -> 103.850
- `1278` FairPrice Square 2
  - latitude: 1.32060000 -> 1.321
  - longitude: 103.84400000 -> 103.844
- `1279` FairPrice NUH Medical Centre
  - latitude: 1.29330000 -> 1.293
  - longitude: 103.78440000 -> 103.784
- `1280` FairPrice Finest Tiong Bahru Plaza
  - latitude: 1.28660000 -> 1.287
  - longitude: 103.82670000 -> 103.827
- `1281` SCARLETT@PLAZA SINGAPURA
  - latitude: 1.30070000 -> 1.301
  - longitude: 103.84490000 -> 103.845
- `1282` FairPrice Finest Valley Point
  - latitude: 1.29290000 -> 1.293
  - longitude: 103.82700000 -> 103.827
- `1283` FairPrice 1 Jalan Bukit Merah
  - latitude: 1.28650000 -> 1.286
  - longitude: 103.80830000 -> 103.808
- `1284` FairPrice Orchard Grand Court
  - latitude: 1.29730000 -> 1.297
  - longitude: 103.83830000 -> 103.838
- `1285` Block 316B Punggol Way
  - latitude: 1.40910100 -> 1.409
  - longitude: 103.89775300 -> 103.898
- `1286` SHENG SIONG BLK 25 GHIM MOH LINK 
  - latitude: 1.30810000 -> 1.308
  - longitude: 103.78590000 -> 103.786
- `1287` FairPrice Finest Sengkang Grand
  - latitude: 1.38260000 -> 1.383
  - longitude: 103.89210000 -> 103.892
- `1288` Block 261 Waterloo Street
  - latitude: 1.29891600 -> 1.299
  - longitude: 103.85190000 -> 103.852
- `1289` SHENG SIONG BLK 266 COMPASSVALE BOW 
  - latitude: 1.38200000 -> 1.382
  - longitude: 103.89700000 -> 103.897
- `1290` SHENG SIONG 5 STADIUM WALK,  LEISURE PARK KALLANG 
  - latitude: 1.30230000 -> 1.302
  - longitude: 103.87650000 -> 103.876
- `1292` Blk 123, Geylang East Avenue 1
  - latitude: 1.31813200 -> 1.318
  - longitude: 103.88536300 -> 103.885
- `1294` Cold Storage Tanglin Mall
  - latitude: 1.30490000 -> 1.305
  - longitude: 103.82380000 -> 103.824
- `1295` Cold Storage United Square
  - latitude: 1.31730000 -> 1.317
  - longitude: 103.84350000 -> 103.844
- `1296` Cold Storage One Holland Village
  - latitude: 1.31150000 -> 1.312
  - longitude: 103.79370000 -> 103.794
- `1298` Giant Beauty World
  - latitude: 1.34230000 -> 1.342
  - longitude: 103.77610000 -> 103.776
- `1299` Giant Hougang Green
  - latitude: 1.37890000 -> 1.379
  - longitude: 103.88730000 -> 103.887
- `1300` Cold Storage Chancery Court
  - latitude: 1.31730000 -> 1.317
  - longitude: 103.83600000 -> 103.836
- `1301` National University of Singapore 36 College Avenue East UTown Level 1, Main Walkway
  - latitude: 1.30494200 -> 1.305
  - longitude: 103.77370000 -> 103.774
- `1302` Market Street Hawker Centre
  - latitude: 1.28481500 -> 1.285
  - longitude: 103.85022500 -> 103.850
- `1303` Maxwell Food Centre
  - latitude: 1.28036700 -> 1.280
  - longitude: 103.84480000 -> 103.845
- `1304` SCARLETT@PEOPLE'S PARK COMPLEX
  - latitude: 1.28416600 -> 1.284
  - longitude: 103.84245000 -> 103.842
- `1305` Giant Buangkok Crescent
  - latitude: 1.38090000 -> 1.381
  - longitude: 103.87930000 -> 103.879
- `1306` Don Don Donki (Tiong Bahru Plaza)
  - latitude: 1.28630000 -> 1.286
  - longitude: 103.82730000 -> 103.827
- `1307` Block 445 Sin Ming Avenue
  - latitude: 1.35871300 -> 1.359
  - longitude: 103.83160000 -> 103.832
- `1308` Ci Yuan Hawker Centre
  - latitude: 1.37514600 -> 1.375
  - longitude: 103.88290000 -> 103.883
- `1309` Block 8 Jalan Bukit Ho Swee
  - latitude: 1.28752900 -> 1.288
  - longitude: 103.83200000 -> 103.832
- `1310` SCARLETT@GRANTRAL MACPHERSON
  - latitude: 1.33360000 -> 1.334
  - longitude: 103.88800000 -> 103.888
- `1311` Amoy Street Food Centre
  - latitude: 1.27936600 -> 1.279
  - longitude: 103.84672200 -> 103.847
- `1312` Marks & Spencer Wheelock Place
  - latitude: 1.30470000 -> 1.305
  - longitude: 103.83060000 -> 103.831
- `1313` Cold Storage Cluny Court
  - latitude: 1.32270000 -> 1.323
  - longitude: 103.81440000 -> 103.814
- `1314` Don Don Donki (Waterway Point)
  - latitude: 1.40680000 -> 1.407
  - longitude: 103.90240000 -> 103.902
- `1315` Cold Storage Compass One
  - latitude: 1.39180000 -> 1.392
  - longitude: 103.89490000 -> 103.895
- `1316` SCARLETT@SUNTEC CITY
  - latitude: 1.29460000 -> 1.295
  - longitude: 103.86030000 -> 103.860
- `1317` FairPrice Bukit Timah Plaza
  - latitude: 1.33870000 -> 1.339
  - longitude: 103.77880000 -> 103.779
- `1318` Punggol Coast Hawker Centre
  - latitude: 1.41452800 -> 1.415
  - longitude: 103.90846600 -> 103.908
- `1319` FairPrice Alexandra Retail Centre ARC (PSA Branch)
  - latitude: 1.27370000 -> 1.274
  - longitude: 103.80150000 -> 103.802
- `1320` SCARLETT@NEX
  - latitude: 1.35070000 -> 1.351
  - longitude: 103.87190000 -> 103.872
- `1321` Cold Storage Marina Bay Sands
  - latitude: 1.28622600 -> 1.286
  - longitude: 103.85976400 -> 103.860
- `1322` Cold Storage Bugis Junction
  - latitude: 1.29954800 -> 1.300
  - longitude: 103.85570000 -> 103.856
- `1323` Giant Ghim Moh Road
  - latitude: 1.31018500 -> 1.310
  - longitude: 103.78810000 -> 103.788
- `1326` Cold Storage Great World City
  - latitude: 1.29420100 -> 1.294
  - longitude: 103.83200000 -> 103.832
- `1327` Cold Storage Marina One
  - latitude: 1.27734100 -> 1.277
  - longitude: 103.85250000 -> 103.853
- `1328` Block 11 York Hill
  - latitude: 1.28712700 -> 1.287
  - longitude: 103.83797800 -> 103.838
- `1330` Newton Food Centre
  - latitude: 1.31194700 -> 1.312
  - longitude: 103.83951200 -> 103.840
- `1332` Cold Storage Takashimaya
  - latitude: 1.30267200 -> 1.303
  - longitude: 103.83440000 -> 103.834
- `1333` Block 289D Punggol Place
  - latitude: 1.40199600 -> 1.402
  - longitude: 103.90357900 -> 103.904
- `1334` SHENG SIONG 2 HANDY ROAD,  THE CATHAY
  - latitude: 1.29947000 -> 1.299
  - longitude: 103.84770000 -> 103.848
- `1336` Giant Serangoon Central Drive
  - latitude: 1.35321900 -> 1.353
  - longitude: 103.87160000 -> 103.872
- `1337` Cold Storage Paragon
  - latitude: 1.30390500 -> 1.304
  - longitude: 103.83560000 -> 103.836
- `1338` Golden Mile Food Centre
  - latitude: 1.30313500 -> 1.303
  - longitude: 103.86390000 -> 103.864
- `1339` Woodleigh Village Hawker Centre
  - latitude: 1.33983400 -> 1.340
  - longitude: 103.87242800 -> 103.872
- `1343` Cold Storage Star Vista
  - latitude: 1.30689000 -> 1.307
  - longitude: 103.78790000 -> 103.788
- `1344` Cold Storage Guthrie House
  - latitude: 1.33075300 -> 1.331
  - longitude: 103.79560000 -> 103.796
- `1345` Giant Kim Keat Avenue
  - latitude: 1.33214800 -> 1.332
  - longitude: 103.85740000 -> 103.857
- `1346` Cold Storage Greenwich
  - latitude: 1.38758400 -> 1.388
  - longitude: 103.86940000 -> 103.869
- `1347` Buangkok Hawker Centre
  - latitude: 1.38242700 -> 1.382
  - longitude: 103.89219000 -> 103.892
- `1348` Cold Storage Jelita
  - latitude: 1.31757800 -> 1.318
  - longitude: 103.78590000 -> 103.786
- `1349` North Bridge Road Market & Food Centre
  - latitude: 1.30587200 -> 1.306
  - longitude: 103.86400000 -> 103.864
- `1351` Block 103B Edgefield Plains
  - latitude: 1.39782300 -> 1.398
  - longitude: 103.90470000 -> 103.905
- `1352` Block 3D Upper Boon Keng Road
  - latitude: 1.31342700 -> 1.313
  - longitude: 103.87290000 -> 103.873
- `1353` Block 22 Saint George's Road
  - latitude: 1.32523600 -> 1.325
  - longitude: 103.86243900 -> 103.862
- `1354` Block 93 Paya Lebar Way
  - latitude: 1.32273700 -> 1.323
  - longitude: 103.88829600 -> 103.888
- `1355` Sembawang Hills Food Centre
  - latitude: 1.37232800 -> 1.372
  - longitude: 103.82903500 -> 103.829
- `1356` Cold Storage Alocassia
  - latitude: 1.31953800 -> 1.320
  - longitude: 103.82733200 -> 103.827
- `1357` Cold Storage Marina Bay Link Mall
  - latitude: 1.28064400 -> 1.281
  - longitude: 103.85389400 -> 103.854
- `139` 715 Jurong West Street 71
  - latitude: 1.34389000 -> 1.344
  - longitude: 103.69639000 -> 103.696
- `140` 745 Yishun Street 72
  - latitude: 1.42935000 -> 1.429
  - longitude: 103.83317000 -> 103.833
- `146` 746 Jurong West Street 73
  - latitude: 1.34747700 -> 1.347
  - longitude: 103.69793300 -> 103.698
- `147` 153 Yung Ho Rd
  - latitude: 1.32756000 -> 1.328
  - longitude: 103.72105000 -> 103.721
- `148` 678D Jurong West Street 64
  - latitude: 1.34489200 -> 1.345
  - longitude: 103.70331000 -> 103.703
- `150` 931 Jurong West Street 92
  - latitude: 1.34030200 -> 1.340
  - longitude: 103.68933700 -> 103.689
- `151` 678A Jurong West Street 64 
  - latitude: 1.34507000 -> 1.345
  - longitude: 103.70421900 -> 103.704
- `153` 255 Yishun Ring Rd
  - latitude: 1.43430000 -> 1.434
  - longitude: 103.84062000 -> 103.841
- `154` 277 Yishun Street 22
  - latitude: 1.43800300 -> 1.438
  - longitude: 103.83690700 -> 103.837
- `159` 907 Jurong West Street 91
  - latitude: 1.34107000 -> 1.341
  - longitude: 103.68596000 -> 103.686
- `161` 353 Kang Ching Rd
  - latitude: 1.33971000 -> 1.340
  - longitude: 103.72079000 -> 103.721
- `162` 735 Jurong West Street 75
  - latitude: 1.34593200 -> 1.346
  - longitude: 103.70076100 -> 103.701
- `165` 359 Yung An Rd
  - latitude: 1.33822000 -> 1.338
  - longitude: 103.71961000 -> 103.720
- `166` 736 Yishun Street 72
  - latitude: 1.42884400 -> 1.429
  - longitude: 103.83163400 -> 103.832
- `167` 140 Corporation Drive
  - latitude: 1.32686000 -> 1.327
  - longitude: 103.72339000 -> 103.723
- `168` 236 Yishun Ring Rd
  - latitude: 1.43397000 -> 1.434
  - longitude: 103.83920000 -> 103.839
- `171` 291 Yishun Street 22
  - latitude: 1.43626000 -> 1.436
  - longitude: 103.83673000 -> 103.837
- `172` 610 Yishun Street 61
  - latitude: 1.42049700 -> 1.420
  - longitude: 103.83651000 -> 103.837
- `174` 101 Yishun Ave 5
  - latitude: 1.43047000 -> 1.430
  - longitude: 103.82736000 -> 103.827
- `176` 668A Jurong West Street 64
  - latitude: 1.34198100 -> 1.342
  - longitude: 103.70275500 -> 103.703
- `178` 309 Yishun Ring Rd
  - latitude: 1.43209000 -> 1.432
  - longitude: 103.84035000 -> 103.840
- `1781` Blk 659, Jln Tenaga
  - latitude: 1.33429000 -> 1.334
  - longitude: 103.90611200 -> 103.906
- `1783` Blk 670, Jln Damai
  - latitude: 1.33288800 -> 1.333
  - longitude: 103.90828000 -> 103.908
- `1784` Blk 529, Bedok North Street 3
  - latitude: 1.33462800 -> 1.335
  - longitude: 103.92689300 -> 103.927
- `1789` Blk 548, Bedok North Ave 1
  - latitude: 1.33127100 -> 1.331
  - longitude: 103.92680300 -> 103.927
- `179` 762 Yishun Street 72
  - latitude: 1.42568000 -> 1.426
  - longitude: 103.83426000 -> 103.834
- `1803` Blk 721, Bedok Reservoir Road
  - latitude: 1.33634700 -> 1.336
  - longitude: 103.92601400 -> 103.926
- `1805` Blk 722, Bedok Reservoir Road
  - latitude: 1.33665900 -> 1.337
  - longitude: 103.92824300 -> 103.928
- `181` 120 Yishun Ring Rd
  - latitude: 1.43490000 -> 1.435
  - longitude: 103.82940000 -> 103.829
- `1819` Blk 249, Pasir Ris Street 21
  - latitude: 1.37019300 -> 1.370
  - longitude: 103.96332600 -> 103.963
- `183` 604 Yishun Street 61
  - latitude: 1.42167700 -> 1.422
  - longitude: 103.83550400 -> 103.836
- `186` 260 Boon Lay Dr
  - latitude: 1.34515700 -> 1.345
  - longitude: 103.70801900 -> 103.708
- `1863` Blk 413, Bedok North Avenue 2
  - latitude: 1.33028100 -> 1.330
  - longitude: 103.93108100 -> 103.931
- `187` 104 Bukit Batok Central, Block 104
  - latitude: 1.34902000 -> 1.349
  - longitude: 103.74730000 -> 103.747
- `188` 150 Yishun Street 11
  - latitude: 1.43084000 -> 1.431
  - longitude: 103.83362000 -> 103.834
- `1882` Blk 628, Bedok Reservoir Road
  - latitude: 1.33494100 -> 1.335
  - longitude: 103.91494800 -> 103.915
- `1884` Blk 617, Bedok Reservoir Road
  - latitude: 1.33321700 -> 1.333
  - longitude: 103.91650000 -> 103.916
- `1893` Blk 601, Bedok Reservoir Road
  - latitude: 1.32999200 -> 1.330
  - longitude: 103.91150200 -> 103.912
- `191` 115A Ho Ching Rd
  - latitude: 1.33435000 -> 1.334
  - longitude: 103.72451000 -> 103.725
- `193` 653A Jurong West Street 61
  - latitude: 1.33696000 -> 1.337
  - longitude: 103.69671000 -> 103.697
- `1933` Blk 707, Bedok North Road
  - latitude: 1.33545400 -> 1.335
  - longitude: 103.91925300 -> 103.919
- `1935` Blk 612, Bedok Reservoir Road
  - latitude: 1.33166500 -> 1.332
  - longitude: 103.91574300 -> 103.916
- `1938` Blk 130, Bedok Reservoir Road
  - latitude: 1.33352000 -> 1.334
  - longitude: 103.91232800 -> 103.912
- `194` 771 Choa Chu Kang Street 54
  - latitude: 1.39447000 -> 1.394
  - longitude: 103.74923000 -> 103.749
- `1940` Blk 123, Bedok Reservoir Road
  - latitude: 1.33241900 -> 1.332
  - longitude: 103.91045600 -> 103.910
- `1941` Blk 648, Jln Tenaga
  - latitude: 1.33242500 -> 1.332
  - longitude: 103.90543100 -> 103.905
- `1942` Blk 640, Bedok Reservoir Road
  - latitude: 1.33216800 -> 1.332
  - longitude: 103.90495700 -> 103.905
- `1956` Don Don Donki (Tampines One)
  - latitude: 1.35456700 -> 1.355
  - longitude: 103.94495700 -> 103.945
- `1964` Thai Supermarket Pte Ltd
  - latitude: 1.30968100 -> 1.310
  - longitude: 103.86432000 -> 103.864
- `197` 228 Yishun Street 21
  - latitude: 1.43541200 -> 1.435
  - longitude: 103.83758200 -> 103.838
- `1978` Don Don Donki (Paya Lebar Quarter)
  - latitude: 1.31766900 -> 1.318
  - longitude: 103.89316000 -> 103.893
- `1986` Phan99 Supermarket PPT Lodge 1B
  - latitude: 1.41648000 -> 1.416
  - longitude: 103.89535400 -> 103.895
- `199` 165 Yishun Ring Rd
  - latitude: 1.43567000 -> 1.436
  - longitude: 103.83161000 -> 103.832
- `1990` Don Don Donki (Jewel Changi)
  - latitude: 1.36031900 -> 1.360
  - longitude: 103.98966800 -> 103.990
- `200` 528 Jurong West Street 52
  - latitude: 1.34837000 -> 1.348
  - longitude: 103.71701000 -> 103.717
- `2002` Blk 453, Pasir Ris Drive 6
  - latitude: 1.37186800 -> 1.372
  - longitude: 103.95729100 -> 103.957
- `202` 657 Choa Chu Kang Cres
  - latitude: 1.40046200 -> 1.400
  - longitude: 103.74973900 -> 103.750
- `2023` Blk 665, Jln Damai
  - latitude: 1.33419100 -> 1.334
  - longitude: 103.90799300 -> 103.908
- `2024` SCARLETT@SHAW PLAZA
  - latitude: 1.32530600 -> 1.325
  - longitude: 103.85114200 -> 103.851
- `2026` Blk 542, Bedok North Street 3
  - latitude: 1.33067300 -> 1.331
  - longitude: 103.92279600 -> 103.923
- `203` 115 Yishun Ring Rd
  - latitude: 1.43450200 -> 1.435
  - longitude: 103.82803700 -> 103.828
- `2042` Blk 711, Bedok Reservoir Road
  - latitude: 1.33597500 -> 1.336
  - longitude: 103.92417200 -> 103.924
- `2044` Blk 620, Bedok Reservoir Road
  - latitude: 1.33428900 -> 1.334
  - longitude: 103.91753200 -> 103.918
- `2045` Blk 716, Bedok Reservoir Road
  - latitude: 1.33786200 -> 1.338
  - longitude: 103.92491700 -> 103.925
- `2046` Blk 720, Bedok Reservoir Road
  - latitude: 1.33598500 -> 1.336
  - longitude: 103.92498500 -> 103.925
- `2047` Blk 704, Bedok Reservoir Road
  - latitude: 1.33650800 -> 1.337
  - longitude: 103.92027900 -> 103.920
- `205` 216 Boon Lay Ave
  - latitude: 1.35047000 -> 1.350
  - longitude: 103.71221000 -> 103.712
- `206` 551 Jurong West Street 42
  - latitude: 1.35240000 -> 1.352
  - longitude: 103.71696000 -> 103.717
- `209` 126 Yishun Street 11
  - latitude: 1.43353000 -> 1.434
  - longitude: 103.83009000 -> 103.830
- `210` 625 Jurong West Street 61
  - latitude: 1.34158700 -> 1.342
  - longitude: 103.69864300 -> 103.699
- `211` 190 Boon Lay Dr
  - latitude: 1.34515300 -> 1.345
  - longitude: 103.71188200 -> 103.712
- `212` 690A Choa Chu Kang Cres
  - latitude: 1.40291500 -> 1.403
  - longitude: 103.75155500 -> 103.752
- `213` 2 Marsiling Dr
  - latitude: 1.43992600 -> 1.440
  - longitude: 103.77612100 -> 103.776
- `214` 272B Jurong West Street 24
  - latitude: 1.35064400 -> 1.351
  - longitude: 103.70497800 -> 103.705
- `216` 8 Marsiling Drive
  - latitude: 1.44135200 -> 1.441
  - longitude: 103.77721100 -> 103.777
- `2164` Geylang Serai Market and Food Centre
  - latitude: 1.31677400 -> 1.317
  - longitude: 103.89827800 -> 103.898
- `2166` Giant Khatib MRT
  - latitude: 1.41695000 -> 1.417
  - longitude: 103.83280000 -> 103.833
- `2167` FairPrice Wisteria Mall
  - latitude: 1.41835000 -> 1.418
  - longitude: 103.84110000 -> 103.841
- `2168` Cold Storage West Mall
  - latitude: 1.35005000 -> 1.350
  - longitude: 103.74920000 -> 103.749
- `2169` SCARLETT@WESTGATE
  - latitude: 1.33450000 -> 1.335
  - longitude: 103.74260000 -> 103.743
- `2171` FairPrice Blk 166 Bukit Batok West Avenue 8
  - latitude: 1.34733000 -> 1.347
  - longitude: 103.74310000 -> 103.743
- `2172` Cold Storage Rail Mall
  - latitude: 1.36019500 -> 1.360
  - longitude: 103.76763400 -> 103.768
- `2173` SHENG SIONG BLK 292 BUKIT BATOK EAST AVE 6 
  - latitude: 1.34440000 -> 1.344
  - longitude: 103.75500000 -> 103.755
- `2174` U STARS @507 Yishun Ave 4
  - latitude: 1.41555000 -> 1.416
  - longitude: 103.83970000 -> 103.840
- `2175` FairPrice Sembawang Shopping Centre
  - latitude: 1.44161000 -> 1.442
  - longitude: 103.82460000 -> 103.825
- `2176` FairPrice Blk 849 Yishun Ring Road
  - latitude: 1.41698000 -> 1.417
  - longitude: 103.83540000 -> 103.835
- `2177` SHENG SIONG BLK 643 SENJA CLOSE
  - latitude: 1.38788000 -> 1.388
  - longitude: 103.76310000 -> 103.763
- `2178` 120A Canberra Crescent
  - latitude: 1.44600700 -> 1.446
  - longitude: 103.83225600 -> 103.832
- `218` 671A Choa Chu Kang Cres
  - latitude: 1.40213100 -> 1.402
  - longitude: 103.74789300 -> 103.748
- `2181` Giant Woodlands North
  - latitude: 1.44266000 -> 1.443
  - longitude: 103.79070000 -> 103.791
- `2182` FairPrice Causeway Point
  - latitude: 1.43609000 -> 1.436
  - longitude: 103.78590000 -> 103.786
- `2183` Cold Storage Hill View
  - latitude: 1.36294000 -> 1.363
  - longitude: 103.76420000 -> 103.764
- `2185` 950 Jurong West Street 91
  - latitude: 1.34299000 -> 1.343
  - longitude: 103.69133000 -> 103.691
- `2186` Prime Supermarket 678A Woodlands Avenue 6
  - latitude: 1.44041000 -> 1.440
  - longitude: 103.80160000 -> 103.802
- `2187` FairPrice Northpoint City
  - latitude: 1.42832000 -> 1.428
  - longitude: 103.83610000 -> 103.836
- `2189` FairPrice 612 Geylang Lorong 38
  - latitude: 1.31408100 -> 1.314
  - longitude: 103.88884000 -> 103.889
- `2190` FairPrice 498 Jurong West St 41
  - latitude: 1.34865000 -> 1.349
  - longitude: 103.72430000 -> 103.724
- `2191` FairPrice Lot 1
  - latitude: 1.38511000 -> 1.385
  - longitude: 103.74490000 -> 103.745
- `2193` FairPrice Woodlands Ave 1
  - latitude: 1.43081000 -> 1.431
  - longitude: 103.79090000 -> 103.791
- `2197` SHENG SIONG BLK 420A CLEMENTI AVE 1 
  - latitude: 1.30951000 -> 1.310
  - longitude: 103.76840000 -> 103.768
- `2198` FairPrice Jurong Point
  - latitude: 1.33962000 -> 1.340
  - longitude: 103.70520000 -> 103.705
- `2200` FairPrice Hillion Mall
  - latitude: 1.37851000 -> 1.379
  - longitude: 103.76300000 -> 103.763
- `2201` Cold Storage Joo Chiat JK Centre
  - latitude: 1.30985900 -> 1.310
  - longitude: 103.90230000 -> 103.902
- `2202` Giant 256 Bangkit Road
  - latitude: 1.37917000 -> 1.379
  - longitude: 103.77290000 -> 103.773
- `2203` Little Farms Market, Katong Point
  - latitude: 1.30680000 -> 1.307
  - longitude: 103.90445400 -> 103.904
- `2204` Giant Admiralty MRT
  - latitude: 1.44059000 -> 1.441
  - longitude: 103.80100000 -> 103.801
- `2205` Cold Storage i12 Katong
  - latitude: 1.30520000 -> 1.305
  - longitude: 103.90506000 -> 103.905
- `2206` Don Don Donki (Jurong Point)
  - latitude: 1.33971000 -> 1.340
  - longitude: 103.70690000 -> 103.707
- `2207` Prime Supermarket Chai Chee Road
  - latitude: 1.32330200 -> 1.323
  - longitude: 103.92403000 -> 103.924
- `2208` FairPrice Bukit Batok MRT
  - latitude: 1.34873000 -> 1.349
  - longitude: 103.74930000 -> 103.749
- `2210` FairPrice Lengkong Tiga
  - latitude: 1.32377200 -> 1.324
  - longitude: 103.91079000 -> 103.911
- `2211` SHENG SIONG BLK 182 WOODLANDS ST 13 
  - latitude: 1.43531000 -> 1.435
  - longitude: 103.77580000 -> 103.776
- `2213` FairPrice Kampung Admiratly
  - latitude: 1.43988000 -> 1.440
  - longitude: 103.80070000 -> 103.801
- `2214` Giant Bukit Batok Street 31
  - latitude: 1.35865000 -> 1.359
  - longitude: 103.74930000 -> 103.749
- `2215` Giant Kranji MRT
  - latitude: 1.42524000 -> 1.425
  - longitude: 103.76200000 -> 103.762
- `2216` Cold Storage Siglap V
  - latitude: 1.31284600 -> 1.313
  - longitude: 103.92373000 -> 103.924
- `2217` SHENG SIONG BLK 471B YISHUN STREET 42
  - latitude: 1.42625000 -> 1.426
  - longitude: 103.85250000 -> 103.853
- `2219` FairPrice Le Quest
  - latitude: 1.35574000 -> 1.356
  - longitude: 103.74090000 -> 103.741
- `2220` SHENG SIONG BLK 202 MARSILING DRIVE 
  - latitude: 1.44319000 -> 1.443
  - longitude: 103.77520000 -> 103.775
- `2221` FairPrice Siglap
  - latitude: 1.31240900 -> 1.312
  - longitude: 103.92521100 -> 103.925
- `2222` SHENG SIONG BLK 785E WOODLANDS RISE 
  - latitude: 1.44686000 -> 1.447
  - longitude: 103.80560000 -> 103.806
- `2223` SHENG SIONG BLK 4 WOODLANDS ST 12 
  - latitude: 1.43338000 -> 1.433
  - longitude: 103.77980000 -> 103.780
- `2224` FairPrice Bukit Batok Home TeamNS
  - latitude: 1.36581000 -> 1.366
  - longitude: 103.75020000 -> 103.750
- `2225` FairPrice Blk 345 Jurong East Street 31
  - latitude: 1.34553000 -> 1.346
  - longitude: 103.73120000 -> 103.731
- `2226` SHENG SIONG BLK 547 SEGAR RD
  - latitude: 1.38802000 -> 1.388
  - longitude: 103.76980000 -> 103.770
- `2228` SHENG SIONG 7 JURONG WEST AVE 5 
  - latitude: 1.34878000 -> 1.349
  - longitude: 103.70330000 -> 103.703
- `2229` SHENG SIONG 3 YUAN CHING ROAD 
  - latitude: 1.32563000 -> 1.326
  - longitude: 103.72510000 -> 103.725
- `223` 286 Yishun Ave 6
  - latitude: 1.43985000 -> 1.440
  - longitude: 103.83830000 -> 103.838
- `2230` FairPrice Marsiling MRT
  - latitude: 1.43252000 -> 1.433
  - longitude: 103.77440000 -> 103.774
- `2231` FairPrice Hub
  - latitude: 1.32588000 -> 1.326
  - longitude: 103.67840000 -> 103.678
- `2232` FairPrice Blk 414 Yishun Ring Road
  - latitude: 1.42454000 -> 1.425
  - longitude: 103.84660000 -> 103.847
- `2233` FairPrice Woodgrove
  - latitude: 1.42895000 -> 1.429
  - longitude: 103.78110000 -> 103.781
- `2234` Prime Supermarket Sembawang Crescent
  - latitude: 1.44468000 -> 1.445
  - longitude: 103.81590000 -> 103.816
- `2236` 477 Sembawang Drive
  - latitude: 1.45209700 -> 1.452
  - longitude: 103.81667300 -> 103.817
- `2238` Prime Supermarket NTU Students Walk
  - latitude: 1.34813000 -> 1.348
  - longitude: 103.68540000 -> 103.685
- `2241` SHENG SIONG BLK 675 YISHUN AVENUE 4
  - latitude: 1.42036000 -> 1.420
  - longitude: 103.84360000 -> 103.844
- `2242` FairPrice Clementi Ave 2 Shopping Centre
  - latitude: 1.31448000 -> 1.314
  - longitude: 103.77130000 -> 103.771
- `2243` FairPrice Woodlands Civic Centre
  - latitude: 1.43490000 -> 1.435
  - longitude: 103.78680000 -> 103.787
- `2244` FairPrice Senja Grand
  - latitude: 1.38505000 -> 1.385
  - longitude: 103.76040000 -> 103.760
- `2245` SHENG SIONG BLK 154A BUKIT BATOK WEST AVE 8 
  - latitude: 1.34726000 -> 1.347
  - longitude: 103.74390000 -> 103.744
- `2246` U STARS @691 Woodlands Drive
  - latitude: 1.44049000 -> 1.440
  - longitude: 103.80630000 -> 103.806
- `2247` FairPrice Parkway Parade
  - latitude: 1.30147000 -> 1.301
  - longitude: 103.90515000 -> 103.905
- `2248` FairPrice Finest Clementi Mall
  - latitude: 1.31517000 -> 1.315
  - longitude: 103.76420000 -> 103.764
- `2249` SHENG SIONG BLK 451 BUKIT BATOK WEST AVENUE 6 
  - latitude: 1.35300000 -> 1.353
  - longitude: 103.74350000 -> 103.743
- `225` 201 Marsiling Dr
  - latitude: 1.44269800 -> 1.443
  - longitude: 103.77542100 -> 103.775
- `2250` SHENG SIONG BLK 159 BUKIT BATOK STREET 11 
  - latitude: 1.34849000 -> 1.348
  - longitude: 103.74270000 -> 103.743
- `2251` SHENG SIONG BLK 573 WOODLANDS DRIVE 16 
  - latitude: 1.43094000 -> 1.431
  - longitude: 103.79850000 -> 103.799
- `2252` FairPrice Marine Parade
  - latitude: 1.30138500 -> 1.301
  - longitude: 103.90723000 -> 103.907
- `2253` 423 Canberra Rd
  - latitude: 1.45371400 -> 1.454
  - longitude: 103.81820500 -> 103.818
- `2254` Giant Admiralty Drive
  - latitude: 1.44994000 -> 1.450
  - longitude: 103.81430000 -> 103.814
- `2255` FairPrice Dairy Farm Residences
  - latitude: 1.36546000 -> 1.365
  - longitude: 103.77500000 -> 103.775
- `2256` FORTUNE SUPERMARKET 463
  - latitude: 1.45561000 -> 1.456
  - longitude: 103.81470000 -> 103.815
- `2257` Giant Vista Point
  - latitude: 1.43138000 -> 1.431
  - longitude: 103.79380000 -> 103.794
- `2258` SHENG SIONG BLK 240 TENGAH GARDEN WALK 
  - latitude: 1.36056000 -> 1.361
  - longitude: 103.73200000 -> 103.732
- `2259` FairPrice Senja Heights
  - latitude: 1.38776000 -> 1.388
  - longitude: 103.76140000 -> 103.761
- `226` 610 Choa Chu Kang Street 62
  - latitude: 1.39945000 -> 1.399
  - longitude: 103.74354500 -> 103.744
- `2260` FairPrice Greenridge
  - latitude: 1.38537000 -> 1.385
  - longitude: 103.76630000 -> 103.766
- `2261` SHENG SIONG BLK 105 CANBERRA STREET 
  - latitude: 1.44883000 -> 1.449
  - longitude: 103.83240000 -> 103.832
- `2262` FairPrice Blk 355 Sembawang Way
  - latitude: 1.44957000 -> 1.450
  - longitude: 103.81900000 -> 103.819
- `2263` Giant Pioneer Mall
  - latitude: 1.34186000 -> 1.342
  - longitude: 103.69740000 -> 103.697
- `2264` SHENG SIONG BLK 209A CLEMENTI AVE 6 
  - latitude: 1.32208000 -> 1.322
  - longitude: 103.76380000 -> 103.764
- `2265` SHENG SIONG BLK 91 JLN. SATU
  - latitude: 1.30953800 -> 1.310
  - longitude: 103.88802000 -> 103.888
- `2266` Prime Supermarket Yishun Avenue 6
  - latitude: 1.42885000 -> 1.429
  - longitude: 103.85050000 -> 103.850
- `2267` Prime Supermarket NTU Spine Hub
  - latitude: 1.34522000 -> 1.345
  - longitude: 103.68120000 -> 103.681
- `2269` 462 Sembawang Drive 
  - latitude: 1.45477500 -> 1.455
  - longitude: 103.81397800 -> 103.814
- `2270` FairPrice Sun Plaza
  - latitude: 1.44826000 -> 1.448
  - longitude: 103.81970000 -> 103.820
- `2271` TUAS SOUTH MINIMART
  - latitude: 1.27231800 -> 1.272
  - longitude: 103.63449900 -> 103.634
- `2272` 483 Admiralty Link
  - latitude: 1.45609100 -> 1.456
  - longitude: 103.81542300 -> 103.815
- `2273` 106A Canberra Street
  - latitude: 1.44846100 -> 1.448
  - longitude: 103.83312400 -> 103.833
- `2274` 589 Woodlands Drive 16
  - latitude: 1.42809000 -> 1.428
  - longitude: 103.79552300 -> 103.796
- `2275` 718 Woodlands Ave 6
  - latitude: 1.44168000 -> 1.442
  - longitude: 103.80106800 -> 103.801
- `2278` SHENG SIONG BLK 503 JURONG WEST AVE 1
  - latitude: 1.35007000 -> 1.350
  - longitude: 103.71800000 -> 103.718
- `2279` 831 Jurong West Street 81
  - latitude: 1.34510000 -> 1.345
  - longitude: 103.69459000 -> 103.695
- `228` 674A Jurong West Street 65
  - latitude: 1.34478200 -> 1.345
  - longitude: 103.70218400 -> 103.702
- `2282` Prime Supermarket Punggol Field
  - latitude: 1.39659900 -> 1.397
  - longitude: 103.90860000 -> 103.909
- `2284` Prime Supermarket 322 Sumang Walk
  - latitude: 1.41094500 -> 1.411
  - longitude: 103.89730000 -> 103.897
- `2285` Prime Supermarket Jurong West Street 91
  - latitude: 1.34198000 -> 1.342
  - longitude: 103.69170000 -> 103.692
- `2286` FairPrice 888 Plaza
  - latitude: 1.43864000 -> 1.439
  - longitude: 103.79530000 -> 103.795
- `2288` 417 Canberra Rd
  - latitude: 1.45243500 -> 1.452
  - longitude: 103.81927900 -> 103.819
- `2289` SCARLETT @ CLEMENTI
  - latitude: 1.31446000 -> 1.314
  - longitude: 103.76510000 -> 103.765
- `229` 682A Jurong West Central 1
  - latitude: 1.34402600 -> 1.344
  - longitude: 103.70543500 -> 103.705
- `2290` 108 Yishun Ring Rd 
  - latitude: 1.43236200 -> 1.432
  - longitude: 103.82903500 -> 103.829
- `2291` FairPrice Taman Jurong Shopping Centre
  - latitude: 1.33466000 -> 1.335
  - longitude: 103.72010000 -> 103.720
- `2292` 876 Woodlands Ave 9
  - latitude: 1.44480800 -> 1.445
  - longitude: 103.79054100 -> 103.791
- `2293` 708 Woodlands Drive 70
  - latitude: 1.44005000 -> 1.440
  - longitude: 103.79731200 -> 103.797
- `2294` Prime Supermarket Bidadari Park Drive
  - latitude: 1.33410100 -> 1.334
  - longitude: 103.87080000 -> 103.871
- `2295` 334 Sembawang Close
  - latitude: 1.44739600 -> 1.447
  - longitude: 103.81604700 -> 103.816
- `2296` Prime Supermarket Upper Aljunied Lane
  - latitude: 1.33430000 -> 1.334
  - longitude: 103.87879000 -> 103.879
- `2298` Prime Supermarket Hougang Avenue 1
  - latitude: 1.35399800 -> 1.354
  - longitude: 103.89092400 -> 103.891
- `2299` Prime Supermarket 159A Hougang Street 11
  - latitude: 1.35190900 -> 1.352
  - longitude: 103.87950000 -> 103.879
- `230` 134 Marsiling Rd
  - latitude: 1.43680000 -> 1.437
  - longitude: 103.77736000 -> 103.777
- `2300` U STARS @261 Punggol Way
  - latitude: 1.40540000 -> 1.405
  - longitude: 103.89690000 -> 103.897
- `2301` 682C Woodlands Drive 73
  - latitude: 1.44066000 -> 1.441
  - longitude: 103.80435000 -> 103.804
- `2302` U STARS @330Anchorvale Street
  - latitude: 1.39680000 -> 1.397
  - longitude: 103.88910000 -> 103.889
- `2303` 784C Woodlands Rise 
  - latitude: 1.44593100 -> 1.446
  - longitude: 103.80530500 -> 103.805
- `2304` 690F Woodlands Drive 75
  - latitude: 1.44260500 -> 1.443
  - longitude: 103.80749400 -> 103.807
- `2305` 862 Woodlands Street 83
  - latitude: 1.43999200 -> 1.440
  - longitude: 103.79504900 -> 103.795
- `2306` 656 Woodlands Ring Rd
  - latitude: 1.43703000 -> 1.437
  - longitude: 103.79921300 -> 103.799
- `2307` 356A Admiralty Drive
  - latitude: 1.44947300 -> 1.449
  - longitude: 103.81696500 -> 103.817
- `2308` 552 Woodlands Drive 44
  - latitude: 1.43226200 -> 1.432
  - longitude: 103.79534900 -> 103.795
- `2309` 351B Canberra Road
  - latitude: 1.45083000 -> 1.451
  - longitude: 103.82002800 -> 103.820
- `231` 184 Yung Sheng Rd
  - latitude: 1.33336000 -> 1.333
  - longitude: 103.72218500 -> 103.722
- `2310` 792 Woodlands Ave 6 
  - latitude: 1.44197000 -> 1.442
  - longitude: 103.80229000 -> 103.802
- `2311` 611 Woodlands Ring Rd
  - latitude: 1.43548400 -> 1.435
  - longitude: 103.79692800 -> 103.797
- `2312` 836 Woodlands Street 83
  - latitude: 1.44029000 -> 1.440
  - longitude: 103.79191000 -> 103.792
- `2313` Prime Supermarket Bukit Batok Street 31
  - latitude: 1.35884000 -> 1.359
  - longitude: 103.75050000 -> 103.751
- `2314` FairPrice Blk 135 Jurong Gateway Road
  - latitude: 1.33408000 -> 1.334
  - longitude: 103.74040000 -> 103.740
- `2316` 311 Canberra Rd
  - latitude: 1.44662000 -> 1.447
  - longitude: 103.82258000 -> 103.823
- `2317` 782B Woodlands Cres
  - latitude: 1.44731000 -> 1.447
  - longitude: 103.80298000 -> 103.803
- `2318` 846 Woodlands Ave 4
  - latitude: 1.44354500 -> 1.444
  - longitude: 103.79348500 -> 103.793
- `2319` 756 Woodlands Ave 4 
  - latitude: 1.44572100 -> 1.446
  - longitude: 103.79305400 -> 103.793
- `2320` Prime Supermarket Toa Payoh Lorong 7
  - latitude: 1.33575300 -> 1.336
  - longitude: 103.85689800 -> 103.857
- `2321` 770 Woodlands Drive 60
  - latitude: 1.44665400 -> 1.447
  - longitude: 103.79856200 -> 103.799
- `2322` Prime Supermarket Compassvale Street
  - latitude: 1.39491000 -> 1.395
  - longitude: 103.89590000 -> 103.896
- `2323` Prime Supermarket Jalan Tenteram
  - latitude: 1.32775400 -> 1.328
  - longitude: 103.86110000 -> 103.861
- `2324` Little Farms Market, Serangoon Garden (Grocery store)
  - latitude: 1.36510000 -> 1.365
  - longitude: 103.86520000 -> 103.865
- `2325` 638 Woodlands Ring Rd
  - latitude: 1.43684400 -> 1.437
  - longitude: 103.80320600 -> 103.803
- `2326` 622 Woodlands Drive 52
  - latitude: 1.43420200 -> 1.434
  - longitude: 103.79880300 -> 103.799
- `2327` SHENG SIONG BLK 301 WOODLANDS ST 31 
  - latitude: 1.43146000 -> 1.431
  - longitude: 103.77380000 -> 103.774
- `2328` Little Farms Market, Sentosa
  - latitude: 1.24700000 -> 1.247
  - longitude: 103.83960000 -> 103.840
- `2329` 728 Woodlands Cir
  - latitude: 1.44285100 -> 1.443
  - longitude: 103.79887300 -> 103.799
- `233` 205 Marsiling Dr
  - latitude: 1.44498000 -> 1.445
  - longitude: 103.77346000 -> 103.773
- `2330` Giant IMM
  - latitude: 1.33596000 -> 1.336
  - longitude: 103.74700000 -> 103.747
- `2331` Cold Storage Clementi Arcade
  - latitude: 1.32339000 -> 1.323
  - longitude: 103.76760000 -> 103.768
- `2332` U STARS 345 Clementi Ave 5
  - latitude: 1.31767000 -> 1.318
  - longitude: 103.76900000 -> 103.769
- `2333` Cold Storage West Coast Plaza
  - latitude: 1.30370000 -> 1.304
  - longitude: 103.76590000 -> 103.766
- `2334` SHENG SIONG BLK 720 CLEMENTI WEST STREET 2 
  - latitude: 1.30241000 -> 1.302
  - longitude: 103.76370000 -> 103.764
- `2335` U STARS @Elias Mall
  - latitude: 1.37810000 -> 1.378
  - longitude: 103.94206000 -> 103.942
- `2336` SHENG SIONG BLK 446 FAJAR ROAD
  - latitude: 1.38374000 -> 1.384
  - longitude: 103.77060000 -> 103.771
- `2337` SHENG SIONG BLK 527D PASIR RIS STREET 51 
  - latitude: 1.36960600 -> 1.370
  - longitude: 103.94787000 -> 103.948
- `2339` 306 Clementi Ave 4
  - latitude: 1.32149600 -> 1.321
  - longitude: 103.76588800 -> 103.766
- `234` 274B Jurong West Street 25
  - latitude: 1.35281800 -> 1.353
  - longitude: 103.70315000 -> 103.703
- `2340` Giant Pasir Ris Drive 4
  - latitude: 1.36905400 -> 1.369
  - longitude: 103.95876000 -> 103.959
- `2343` Prime Supermarket Tampines North Drive 1
  - latitude: 1.36455300 -> 1.365
  - longitude: 103.93700000 -> 103.937
- `2345` Giant Hypermarket Tampines
  - latitude: 1.37215500 -> 1.372
  - longitude: 103.93198200 -> 103.932
- `2346` FairPrice Tampines CC
  - latitude: 1.35537200 -> 1.355
  - longitude: 103.93442000 -> 103.934
- `2347` FairPrice Yishun MRT
  - latitude: 1.42938000 -> 1.429
  - longitude: 103.83510000 -> 103.835
- `2348` SHENG SIONG BLK 872C TAMPINES STREET 86
  - latitude: 1.35520600 -> 1.355
  - longitude: 103.93157000 -> 103.932
- `2349` U STARS @878C Tampines Ave 8
  - latitude: 1.35134800 -> 1.351
  - longitude: 103.92946600 -> 103.929
- `235` 337B Tah Ching Rd
  - latitude: 1.33746000 -> 1.337
  - longitude: 103.72242000 -> 103.722
- `2350` Prime Supermarket Tampines Street 81
  - latitude: 1.34893000 -> 1.349
  - longitude: 103.93409000 -> 103.934
- `2351` MUSTAFA
  - latitude: 1.30980000 -> 1.310
  - longitude: 103.85547200 -> 103.855
- `2352` 429 Clementi Ave 3
  - latitude: 1.31293000 -> 1.313
  - longitude: 103.76281000 -> 103.763
- `2353` FairPrice Our Tampines Hub
  - latitude: 1.35278200 -> 1.353
  - longitude: 103.93962000 -> 103.940
- `2355` FairPrice West Coast Wet Market
  - latitude: 1.31191000 -> 1.312
  - longitude: 103.75930000 -> 103.759
- `2358` ONE Supermarket Pte. Ltd.
  - latitude: 1.35338600 -> 1.353
  - longitude: 103.95307800 -> 103.953
- `2359` SHENG SIONG BLK 18 TECK WHYE LANE 
  - latitude: 1.37824000 -> 1.378
  - longitude: 103.75430000 -> 103.754
- `2360` Cold Storage Lentor Modern
  - latitude: 1.38569000 -> 1.386
  - longitude: 103.83420000 -> 103.834
- `2361` FairPrice Blk 475 Tampines Street 44
  - latitude: 1.36042200 -> 1.360
  - longitude: 103.95326000 -> 103.953
- `2362` SHENG SIONG NO.1 WOODLANDS ROADS 
  - latitude: 1.38075000 -> 1.381
  - longitude: 103.75980000 -> 103.760
- `2363` Giant Tampines Mart
  - latitude: 1.35379500 -> 1.354
  - longitude: 103.96057000 -> 103.961
- `2364` FairPrice Blk 511 Canberra Road
  - latitude: 1.45383000 -> 1.454
  - longitude: 103.81960000 -> 103.820
- `2365` FairPrice East Point
  - latitude: 1.34273000 -> 1.343
  - longitude: 103.95301000 -> 103.953
- `2366` SHENG SIONG BLK 467 BUKIT BATOK WEST AVENUE 9 
  - latitude: 1.35715000 -> 1.357
  - longitude: 103.74350000 -> 103.743
- `2367` Prime Supermarket Tampines Street 96
  - latitude: 1.34232300 -> 1.342
  - longitude: 103.93700000 -> 103.937
- `2369` SHENG SIONG BLK 539A BEDOK NORTH STREET 3 
  - latitude: 1.33229800 -> 1.332
  - longitude: 103.92559000 -> 103.926
- `237` 668 Choa Chu Kang Cres
  - latitude: 1.40187200 -> 1.402
  - longitude: 103.74946900 -> 103.749
- `2370` Raj Agro Kranji
  - latitude: 1.42901000 -> 1.429
  - longitude: 103.75270000 -> 103.753
- `2371` Giant Bedok North Street 3
  - latitude: 1.33334600 -> 1.333
  - longitude: 103.93134000 -> 103.931
- `2372` U STARS @817 Keat Hong Link
  - latitude: 1.37690000 -> 1.377
  - longitude: 103.74940000 -> 103.749
- `2373` FairPrice Yew Tee Mrt
  - latitude: 1.39746000 -> 1.397
  - longitude: 103.74750000 -> 103.748
- `2374` Giant Bedok Market Place
  - latitude: 1.33082400 -> 1.331
  - longitude: 103.94751000 -> 103.948
- `2375` FairPrice Canberra Plaza
  - latitude: 1.44297000 -> 1.443
  - longitude: 103.83060000 -> 103.831
- `2376` FairPrice New Upper Changi Road
  - latitude: 1.32467900 -> 1.325
  - longitude: 103.94146000 -> 103.941
- `2377` FairPrice Teck Whye
  - latitude: 1.38005000 -> 1.380
  - longitude: 103.75320000 -> 103.753
- `2378` SHENG SIONG 151 BEDOK SOUTH ROAD, SIGLAP CC
  - latitude: 1.31727500 -> 1.317
  - longitude: 103.94657600 -> 103.947
- `2380` FairPrice Blk 29B Chai Chee Avenue
  - latitude: 1.32436700 -> 1.324
  - longitude: 103.92377000 -> 103.924
- `2381` FairPrice Yew Tee Point
  - latitude: 1.39716000 -> 1.397
  - longitude: 103.74680000 -> 103.747
- `2382` FairPrice Limbang Shopping Centre
  - latitude: 1.39205000 -> 1.392
  - longitude: 103.74340000 -> 103.743
- `2383` Giant Kampung Ubi Avenue 1
  - latitude: 1.32993500 -> 1.330
  - longitude: 103.90199000 -> 103.902
- `2384` FairPrice JEM
  - latitude: 1.33283000 -> 1.333
  - longitude: 103.74310000 -> 103.743
- `2385` Prime Supermarket Eunos Road 2
  - latitude: 1.32150500 -> 1.322
  - longitude: 103.90190000 -> 103.902
- `2386` Don Don Donki (Jurong East Mall)
  - latitude: 1.33266000 -> 1.333
  - longitude: 103.74320000 -> 103.743
- `2387` SHENG SIONG BLK 118 ALJUNIED  AVE 2 
  - latitude: 1.31997300 -> 1.320
  - longitude: 103.88716700 -> 103.887
- `2389` Grindelwald Supermarket
  - latitude: 1.32207000 -> 1.322
  - longitude: 103.77040000 -> 103.770
- `239` 698C Jurong West Central 3
  - latitude: 1.34030000 -> 1.340
  - longitude: 103.70771000 -> 103.708
- `2390` FairPrice Blk 114 Aljunied Ave 2
  - latitude: 1.32167500 -> 1.322
  - longitude: 103.88672000 -> 103.887
- `2392` SCARLETT@GEYLANG ROAD
  - latitude: 1.31281100 -> 1.313
  - longitude: 103.87918000 -> 103.879
- `2394` FairPrice 41 Jalan Tiga
  - latitude: 1.30802600 -> 1.308
  - longitude: 103.88465000 -> 103.885
- `2395` Giant Choa Chu Kang Avenue 3
  - latitude: 1.37802000 -> 1.378
  - longitude: 103.73900000 -> 103.739
- `2396` Isetan Scotts Supermarket
  - latitude: 1.30590600 -> 1.306
  - longitude: 103.83140000 -> 103.831
- `2397` FairPrice Old Airport Hawker Centre
  - latitude: 1.30846300 -> 1.308
  - longitude: 103.88623100 -> 103.886
- `2398` SHENG SIONG BLK 352 CLEMENTI AVE 2 
  - latitude: 1.31508000 -> 1.315
  - longitude: 103.77110000 -> 103.771
- `240` 32 Marsiling Dr
  - latitude: 1.44340400 -> 1.443
  - longitude: 103.77279400 -> 103.773
- `2400` FairPrice Boon Lay Shopping Complex
  - latitude: 1.34663000 -> 1.347
  - longitude: 103.71200000 -> 103.712
- `2401` Blk 141, Bedok Reservoir Road
  - latitude: 1.33541600 -> 1.335
  - longitude: 103.91331200 -> 103.913
- `2402` Giant Yishun Street 22
  - latitude: 1.43648000 -> 1.436
  - longitude: 103.83780000 -> 103.838
- `2403` FairPrice 451 Clementi Avenue 3
  - latitude: 1.31278000 -> 1.313
  - longitude: 103.76590000 -> 103.766
- `2404` SHENG SIONG BLK 544 JURONG WEST ST 42 
  - latitude: 1.35241000 -> 1.352
  - longitude: 103.71570000 -> 103.716
- `2405` Prime Supermarket Blk 253 Choa Chu Kang
  - latitude: 1.37744000 -> 1.377
  - longitude: 103.74439000 -> 103.744
- `2406` FairPrice Bukit Panjang Plaza
  - latitude: 1.38133000 -> 1.381
  - longitude: 103.76430000 -> 103.764
- `2407` FairPrice Pasir Ris West Plaza
  - latitude: 1.37988500 -> 1.380
  - longitude: 103.93648000 -> 103.936
- `2408` Giant Bukit Batok East Avenue 3
  - latitude: 1.34661000 -> 1.347
  - longitude: 103.75720000 -> 103.757
- `2409` FairPrice Whitesands
  - latitude: 1.37241600 -> 1.372
  - longitude: 103.94665000 -> 103.947
- `241` 667C Jurong West Street 65
  - latitude: 1.34133000 -> 1.341
  - longitude: 103.70243000 -> 103.702
- `2410` Food-Joy Buona Vista
  - latitude: 1.28056700 -> 1.281
  - longitude: 103.78690000 -> 103.787
- `2413` FairPrice Bukit Merah
  - latitude: 1.28309200 -> 1.283
  - longitude: 103.81760000 -> 103.818
- `2414` U STARS @810 Cha Chu Kang Ave 7
  - latitude: 1.37402000 -> 1.374
  - longitude: 103.74620000 -> 103.746
- `2415` FairPrice Downtown East
  - latitude: 1.37889700 -> 1.379
  - longitude: 103.95507000 -> 103.955
- `2416` SCARLETT@PLANTATION PLAZA
  - latitude: 1.35721000 -> 1.357
  - longitude: 103.73400000 -> 103.734
- `2417` Giant Loyang Point
  - latitude: 1.37289100 -> 1.373
  - longitude: 103.96299000 -> 103.963
- `2418` FairPrice Tengah Parc Point
  - latitude: 1.36100000 -> 1.361
  - longitude: 103.73850000 -> 103.739
- `2419` SHENG SIONG BLK 258 PASIR RIS ST 21 
  - latitude: 1.36726200 -> 1.367
  - longitude: 103.96517200 -> 103.965
- `2420` Giant Tengah Plantation Plaza
  - latitude: 1.35712000 -> 1.357
  - longitude: 103.73399500 -> 103.734
- `2421` FairPrice 280 Bukit Batok East Avenue 3
  - latitude: 1.34773000 -> 1.348
  - longitude: 103.75700000 -> 103.757
- `2422` FairPrice Blk 633 Tampines North Drive 2
  - latitude: 1.36525800 -> 1.365
  - longitude: 103.94113000 -> 103.941
- `2424` U STARS @Tampines Grove
  - latitude: 1.34925700 -> 1.349
  - longitude: 103.93483000 -> 103.935
- `2426` FairPrice Century Square Shopping Mall
  - latitude: 1.35262000 -> 1.353
  - longitude: 103.94368300 -> 103.944
- `2428` Cold Storage Tampines One
  - latitude: 1.35421200 -> 1.354
  - longitude: 103.94503000 -> 103.945
- `2431` BITES BY SCARLETT@TAMPINES ONE
  - latitude: 1.35449500 -> 1.354
  - longitude: 103.94496000 -> 103.945
- `2436` FairPrice Blk 107 Tampines Street 11
  - latitude: 1.34819900 -> 1.348
  - longitude: 103.94783000 -> 103.948
- `244` 854 Jurong West Street 81
  - latitude: 1.34781200 -> 1.348
  - longitude: 103.69578800 -> 103.696
- `2440` FairPrice Finest Komo Shoppes
  - latitude: 1.36036100 -> 1.360
  - longitude: 103.97014000 -> 103.970
- `2444` Giant Simei MRT
  - latitude: 1.34314700 -> 1.343
  - longitude: 103.95342000 -> 103.953
- `2446` FairPrice Changi Business Park
  - latitude: 1.33516900 -> 1.335
  - longitude: 103.96349700 -> 103.963
- `2448` SHENG SIONG BLK 739A BEDOK RESERVOIR ROAD 
  - latitude: 1.33811600 -> 1.338
  - longitude: 103.92328700 -> 103.923
- `245` 196B Boon Lay Drive
  - latitude: 1.34291000 -> 1.343
  - longitude: 103.71424100 -> 103.714
- `2450` Sparrows 206 Bedok North Street 1
  - latitude: 1.32646400 -> 1.326
  - longitude: 103.93095800 -> 103.931
- `2452` SHENG SIONG BLK 209 NEW UPPER CHANGI ROAD 
  - latitude: 1.32470700 -> 1.325
  - longitude: 103.93106800 -> 103.931
- `2454` FairPrice Bedok North 212
  - latitude: 1.32594100 -> 1.326
  - longitude: 103.93159600 -> 103.932
- `2455` Meidi-Ya Great World City
  - latitude: 1.29368900 -> 1.294
  - longitude: 103.83200000 -> 103.832
- `2457` FairPrice Bedok Mall
  - latitude: 1.32480100 -> 1.325
  - longitude: 103.92331000 -> 103.923
- `2459` FairPrice SingPost Centre
  - latitude: 1.31899400 -> 1.319
  - longitude: 103.89446000 -> 103.894
- `246` 276D Jurong West Street 25
  - latitude: 1.35356000 -> 1.354
  - longitude: 103.70441000 -> 103.704
- `2461` FairPrice Paya Lebar Quarter
  - latitude: 1.31762700 -> 1.318
  - longitude: 103.89307000 -> 103.893
- `2464` SCARLETT@PAYA LEBAR SQUARE
  - latitude: 1.31915500 -> 1.319
  - longitude: 103.89252000 -> 103.893
- `2466` SHENG SIONG 301 GEYLANG ROAD BCH BUILDING
  - latitude: 1.31277500 -> 1.313
  - longitude: 103.87865600 -> 103.879
- `2468` SHENG SIONG 11 TANJONG KATONG ROAD, KINEX
  - latitude: 1.31444500 -> 1.314
  - longitude: 103.89447500 -> 103.894
- `247` 212 Marsiling Cres
  - latitude: 1.44619000 -> 1.446
  - longitude: 103.77310000 -> 103.773
- `2473` FairPrice Katong V
  - latitude: 1.30356200 -> 1.304
  - longitude: 103.90307000 -> 103.903
- `2475` Cold Storage Parkway Parade
  - latitude: 1.30147000 -> 1.301
  - longitude: 103.90515000 -> 103.905
- `2478` FairPrice Changi Airport T3
  - latitude: 1.35521700 -> 1.355
  - longitude: 103.98592000 -> 103.986
- `248` 920 Jurong West Street 92
  - latitude: 1.33994100 -> 1.340
  - longitude: 103.68838700 -> 103.688
- `249` 123 Marsiling Rise
  - latitude: 1.43920900 -> 1.439
  - longitude: 103.77911100 -> 103.779
- `2492` Little Farms Market, Tanglin Mall
  - latitude: 1.30500000 -> 1.305
  - longitude: 103.82380000 -> 103.824
- `2496` ACE MARKETPLACE (86RC)
  - latitude: 1.28692400 -> 1.287
  - longitude: 103.81867800 -> 103.819
- `250` 664D Jurong West Street 64
  - latitude: 1.33919700 -> 1.339
  - longitude: 103.70271800 -> 103.703
- `2502` Prime Supermarket Buangkok Square
  - latitude: 1.38452100 -> 1.385
  - longitude: 103.88160000 -> 103.882
- `251` 744 Jurong West Street 73
  - latitude: 1.34681200 -> 1.347
  - longitude: 103.69895800 -> 103.699
- `2515` Kampung Admiralty Hawker Centre
  - latitude: 1.44010900 -> 1.440
  - longitude: 103.80067300 -> 103.801
- `2516` SCARLETT@DOWNTOWN E!HUB
  - latitude: 1.37647700 -> 1.376
  - longitude: 103.95524000 -> 103.955
- `2517` FairPrice Blk 89 Bedok North Street 4
  - latitude: 1.33290700 -> 1.333
  - longitude: 103.93795400 -> 103.938
- `2518` SHENG SIONG BLK 115 BEDOK NORTH ROAD 
  - latitude: 1.33138900 -> 1.331
  - longitude: 103.93683000 -> 103.937
- `2519` SHENG SIONG Woodlands Recreation Centre
  - latitude: 1.45089000 -> 1.451
  - longitude: 103.79690000 -> 103.797
- `252` 515 Jurong West Street 52
  - latitude: 1.34625000 -> 1.346
  - longitude: 103.72040700 -> 103.720
- `2521` 214 Jurong East Street 21
  - latitude: 1.33928000 -> 1.339
  - longitude: 103.73894000 -> 103.739
- `2522` 129 Pending Rd
  - latitude: 1.37570000 -> 1.376
  - longitude: 103.77042000 -> 103.770
- `2523` SHENG SIONG NO.1 JALAN BERSEH, NEW WORLD CENTRE
  - latitude: 1.30751600 -> 1.308
  - longitude: 103.85740500 -> 103.857
- `2525` 423 Choa Chu Kang Ave 4
  - latitude: 1.38208000 -> 1.382
  - longitude: 103.74037000 -> 103.740
- `2526` Giant Yishun Avenue 11
  - latitude: 1.42472000 -> 1.425
  - longitude: 103.84710000 -> 103.847
- `2527` Culina at COMO Dempsey
  - latitude: 1.30526000 -> 1.305
  - longitude: 103.81034300 -> 103.810
- `2529` Supernature
  - latitude: 1.30584300 -> 1.306
  - longitude: 103.81135900 -> 103.811
- `2536` East Coast Lagoon Food Village
  - latitude: 1.30683300 -> 1.307
  - longitude: 103.93522200 -> 103.935
- `2537` Bedok Food Centre
  - latitude: 1.32033900 -> 1.320
  - longitude: 103.95544600 -> 103.955
- `2538` Changi Village Hawker Centre
  - latitude: 1.38922500 -> 1.389
  - longitude: 103.98830300 -> 103.988
- `2539` Changi Airport Terminal 1
  - latitude: 1.36175900 -> 1.362
  - longitude: 103.99090400 -> 103.991
- `254` 618 Choa Chu Kang North 7
  - latitude: 1.40037500 -> 1.400
  - longitude: 103.74698000 -> 103.747
- `2540` Changi Airport Terminal 4
  - latitude: 1.33598200 -> 1.336
  - longitude: 103.98249500 -> 103.982
- `2541` Changi Airport Terminal 2
  - latitude: 1.35505900 -> 1.355
  - longitude: 103.98902700 -> 103.989
- `2548` SCARLETT@SUN PLAZA
  - latitude: 1.44827000 -> 1.448
  - longitude: 103.81970000 -> 103.820
- `2549` Giant Woodlands Mart
  - latitude: 1.44560000 -> 1.446
  - longitude: 103.79800000 -> 103.798
- `255` 17 Marsiling Ln
  - latitude: 1.44264000 -> 1.443
  - longitude: 103.77774000 -> 103.778
- `2550` Bazaar Terusan Recreation Centre
  - latitude: 1.32051000 -> 1.321
  - longitude: 103.72710000 -> 103.727
- `2551` ANG MO SUPERMARKET-693 WOODLANDS AVE 6
  - latitude: 1.43807000 -> 1.438
  - longitude: 103.80380000 -> 103.804
- `2552` Ajmal Trade Mart -  Kranji Lodge One
  - latitude: 1.43167000 -> 1.432
  - longitude: 103.75990000 -> 103.760
- `2554` Chap He Diam Migrant Worker's Recreation Centre
  - latitude: 1.33235000 -> 1.332
  - longitude: 103.69890000 -> 103.699
- `2555` Don Don Donki (Northpoint City)
  - latitude: 1.42934000 -> 1.429
  - longitude: 103.83590000 -> 103.836
- `2556` Nawas Global - Tuas South Dormitory
  - latitude: 1.27164000 -> 1.272
  - longitude: 103.63350000 -> 103.633
- `2557` Ajmal Super Market - Tuas View Dormitory
  - latitude: 1.31476000 -> 1.315
  - longitude: 103.62660000 -> 103.627
- `2558` 7 Seven Trichy Supermarket North Coast Lodge
  - latitude: 1.45610000 -> 1.456
  - longitude: 103.78730000 -> 103.787
- `2559` Ajmal Trading Group - Kranji Recreation Centre
  - latitude: 1.42900000 -> 1.429
  - longitude: 103.75270000 -> 103.753
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory
  - latitude: 1.46143000 -> 1.461
  - longitude: 103.80950000 -> 103.809
- `2561` Prime Supermarket Blk 142 Teck Whye Lane
  - latitude: 1.38080000 -> 1.381
  - longitude: 103.75200000 -> 103.752
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - latitude: 1.37603000 -> 1.376
  - longitude: 103.71879800 -> 103.719
- `2563` Prime Supermarket Blk 768 Woodlands Ave 6
  - latitude: 1.44584000 -> 1.446
  - longitude: 103.79790000 -> 103.798
- `2564` SCARLETT@YISHUN 10 CINEMA COMPLEX
  - latitude: 1.42993000 -> 1.430
  - longitude: 103.83640000 -> 103.836
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE
  - latitude: 1.37603000 -> 1.376
  - longitude: 103.71880000 -> 103.719
- `2566` Ajmal Trading Group - Jalan Papan Aspri Westlite
  - latitude: 1.32305000 -> 1.323
  - longitude: 103.72740000 -> 103.727
- `2567` Don Don Donki (Bukit Panjang Plaza)
  - latitude: 1.38000000 -> 1.380
  - longitude: 103.76430000 -> 103.764
- `2568` Redman by Phoon Huat
  - latitude: 1.37996000 -> 1.380
  - longitude: 103.76430000 -> 103.764
- `2569` Chennai Trading & Supermart - 1 Jalan Papan
  - latitude: 1.32051000 -> 1.321
  - longitude: 103.72710000 -> 103.727
- `2570` SHENG SIONG 18 YISHUN AVE 9,  JUNCTION NINE
  - latitude: 1.43314000 -> 1.433
  - longitude: 103.84170000 -> 103.842
- `2576` Blk 768, Pasir Ris Street 71
  - latitude: 1.37516400 -> 1.375
  - longitude: 103.93533900 -> 103.935
- `2579` FairPrice Tampines Blk 138 Tampines Street 11
  - latitude: 1.34546100 -> 1.345
  - longitude: 103.94562000 -> 103.946
- `2581` ACE SIGNATURE @ LIV CHANGI
  - latitude: 1.35865900 -> 1.359
  - longitude: 103.96943900 -> 103.969
- `2584` Blk 12 Kampong Arang Rd
  - latitude: 1.30084100 -> 1.301
  - longitude: 103.88372100 -> 103.884
- `2596` U STARS @215C Compassvale Drive
  - latitude: 1.38990000 -> 1.390
  - longitude: 103.89290000 -> 103.893
- `260` 149 Woodlands Street 13
  - latitude: 1.43576200 -> 1.436
  - longitude: 103.77316500 -> 103.773
- `2601` Blk 65, New Upper Changi Road
  - latitude: 1.32468200 -> 1.325
  - longitude: 103.93973500 -> 103.940
- `2604` SHENG SIONG BLK 506 TAMPINES CENTRAL 1
  - latitude: 1.35612700 -> 1.356
  - longitude: 103.94594100 -> 103.946
- `2605` 145 Yishun Street 11
  - latitude: 1.43085000 -> 1.431
  - longitude: 103.83185000 -> 103.832
- `261` 153 Gangsa Rd
  - latitude: 1.37598400 -> 1.376
  - longitude: 103.76528800 -> 103.765
- `2620` Bazaar Westlite Toh Guan Dormitory
  - latitude: 1.32866900 -> 1.329
  - longitude: 103.74986200 -> 103.750
- `263` 359 Clementi Ave 2
  - latitude: 1.31343000 -> 1.313
  - longitude: 103.76988300 -> 103.770
- `264` 178 Woodlands Street 13
  - latitude: 1.43459500 -> 1.435
  - longitude: 103.77765800 -> 103.778
- `265` 108 Gangsa Rd
  - latitude: 1.37769000 -> 1.378
  - longitude: 103.76716000 -> 103.767
- `2655` Prime Supermarket Blk 761 Yishun
  - latitude: 1.42512000 -> 1.425
  - longitude: 103.83330000 -> 103.833
- `2656` All India Supermart Pte Ltd
  - latitude: 1.30804800 -> 1.308
  - longitude: 103.85428500 -> 103.854
- `2657` Blk 72, Marine Drive
  - latitude: 1.30424700 -> 1.304
  - longitude: 103.90837000 -> 103.908
- `2658` FairPrice Bedok Reservoir 
  - latitude: 1.33730900 -> 1.337
  - longitude: 103.92170400 -> 103.922
- `2659` TRIPLE N SUPERMART PTE LTD
  - latitude: 1.33729400 -> 1.337
  - longitude: 103.90598500 -> 103.906
- `2661` BISMILLAH MINIMART 32 MANDAI
  - latitude: 1.40766500 -> 1.408
  - longitude: 103.75571400 -> 103.756
- `2662` Lion City Supermarket Geylang Road
  - latitude: 1.31257800 -> 1.313
  - longitude: 103.88002500 -> 103.880
- `2663` 361 Sembawang Crescent
  - latitude: 1.44640100 -> 1.446
  - longitude: 103.81393200 -> 103.814
- `2664` Yishun Park Hawker
  - latitude: 1.42502300 -> 1.425
  - longitude: 103.84214500 -> 103.842
- `2665` SHENG SIONG BLK 120 CANBERRA CRESCENT
  - latitude: 1.44580300 -> 1.446
  - longitude: 103.82919300 -> 103.829
- `2666` Bukit Canberra Hawker Centre
  - latitude: 1.44899500 -> 1.449
  - longitude: 103.82291800 -> 103.823
- `2667` Sembawang Recreation Centre
  - latitude: 1.45851700 -> 1.459
  - longitude: 103.81927700 -> 103.819
- `2668` Serangoon Garden Market
  - latitude: 1.36318500 -> 1.363
  - longitude: 103.86658600 -> 103.867
- `2669` Chomp Chomp Food Centre
  - latitude: 1.36439100 -> 1.364
  - longitude: 103.86633900 -> 103.866
- `267` 454 Clementi Ave 3
  - latitude: 1.31224400 -> 1.312
  - longitude: 103.76641300 -> 103.766
- `2670` Fernvale Hawker Centre & Market
  - latitude: 1.39164000 -> 1.392
  - longitude: 103.87701100 -> 103.877
- `2671` Phan 66 PPT Lodge 1A Dormitory
  - latitude: 1.41965500 -> 1.420
  - longitude: 103.89635300 -> 103.896
- `2673` SCARLETT@AMK 710A
  - latitude: 1.37068300 -> 1.371
  - longitude: 103.84798200 -> 103.848
- `2674` Pasir Ris Central Hawker Centre
  - latitude: 1.37340900 -> 1.373
  - longitude: 103.95165200 -> 103.952
- `2675` Zion Riverside Food Centre
  - latitude: 1.29243100 -> 1.292
  - longitude: 103.83124500 -> 103.831
- `2676` Taman Jurong Market & Food Centre
  - latitude: 1.33485300 -> 1.335
  - longitude: 103.72206700 -> 103.722
- `2677` Senja Hawker Centre
  - latitude: 1.38710500 -> 1.387
  - longitude: 103.76093400 -> 103.761
- `2678` SACHI MINIMART PTE LTD
  - latitude: 1.31798000 -> 1.318
  - longitude: 103.72913700 -> 103.729
- `2679` Bukit Batok West Hawker Centre
  - latitude: 1.35554300 -> 1.356
  - longitude: 103.74210500 -> 103.742
- `268` 113 Woodlands Street 13
  - latitude: 1.43799000 -> 1.438
  - longitude: 103.78117000 -> 103.781
- `2680` Bukit Panjang Hawker Centre
  - latitude: 1.37744600 -> 1.377
  - longitude: 103.77257200 -> 103.773
- `2681` Beo Crescent Market
  - latitude: 1.28891800 -> 1.289
  - longitude: 103.82719000 -> 103.827
- `2682` Tiong Bahru Market
  - latitude: 1.28513200 -> 1.285
  - longitude: 103.83272600 -> 103.833
- `2683` Pasir Panjang Food Centre
  - latitude: 1.27589600 -> 1.276
  - longitude: 103.79162400 -> 103.792
- `2684` Margaret Drive Hawker Centre
  - latitude: 1.29741300 -> 1.297
  - longitude: 103.80475000 -> 103.805
- `2685` Tanglin Halt Market
  - latitude: 1.30042700 -> 1.300
  - longitude: 103.79779300 -> 103.798
- `2686` Holland Village Market and Food Centre
  - latitude: 1.31114800 -> 1.311
  - longitude: 103.79507300 -> 103.795
- `2687` Commonwealth Crescent Market
  - latitude: 1.30691600 -> 1.307
  - longitude: 103.80043200 -> 103.800
- `2688` Adam Road Food Centre
  - latitude: 1.32424400 -> 1.324
  - longitude: 103.81417000 -> 103.814
- `269` 113 Clementi Street 13
  - latitude: 1.32347200 -> 1.323
  - longitude: 103.77035300 -> 103.770
- `270` 140 Petir Rd
  - latitude: 1.37545900 -> 1.375
  - longitude: 103.76896900 -> 103.769
- `271` 101 Gangsa Rd
  - latitude: 1.37939000 -> 1.379
  - longitude: 103.76752000 -> 103.768
- `272` 326 Clementi Ave 5 
  - latitude: 1.31447500 -> 1.314
  - longitude: 103.76638100 -> 103.766
- `2722` Dunman Food Centre
  - latitude: 1.30946600 -> 1.309
  - longitude: 103.90182700 -> 103.902
- `2723` Kovan Hougang Market and Food Centre
  - latitude: 1.35930700 -> 1.359
  - longitude: 103.88600000 -> 103.886
- `2724` Hougang 105 Hainanese Village Centre
  - latitude: 1.35411500 -> 1.354
  - longitude: 103.88990000 -> 103.890
- `2725` Ang Mo Kio Market & Food Centre Blk 724
  - latitude: 1.37218400 -> 1.372
  - longitude: 103.84650000 -> 103.847
- `2726` Teck Ghee Court Market & Food Centre
  - latitude: 1.36409100 -> 1.364
  - longitude: 103.84820800 -> 103.848
- `2727` Kebun Baru Food Centre Block 226H
  - latitude: 1.36723400 -> 1.367
  - longitude: 103.84002100 -> 103.840
- `2728` 628 Ang Mo Kio Food Centre
  - latitude: 1.38088700 -> 1.381
  - longitude: 103.84052600 -> 103.841
- `2729` Chong Boon Market & Food Centre
  - latitude: 1.36815100 -> 1.368
  - longitude: 103.85637800 -> 103.856
- `273` 311B Clementi Ave 4
  - latitude: 1.31945100 -> 1.319
  - longitude: 103.76563200 -> 103.766
- `2730` Kallang Estate Fresh Market and Food Centre
  - latitude: 1.30746500 -> 1.307
  - longitude: 103.88413600 -> 103.884
- `2731` Fairprice Jewel
  - latitude: 1.36030300 -> 1.360
  - longitude: 103.99020000 -> 103.990
- `2732` ITE College East
  - latitude: 1.33472800 -> 1.335
  - longitude: 103.95444800 -> 103.954
- `2733` Fairprice Joo Chiat Complex
  - latitude: 1.31553100 -> 1.316
  - longitude: 103.89850900 -> 103.899
- `2734` Cold Storage Orchard Hotel
  - latitude: 1.30743500 -> 1.307
  - longitude: 103.82882000 -> 103.829
- `2735` SHENG SIONG NEW BRIDGE CENTRE
  - latitude: 1.28286400 -> 1.283
  - longitude: 103.84256600 -> 103.843
- `2736` Redhill Food Centre
  - latitude: 1.28731500 -> 1.287
  - longitude: 103.81818300 -> 103.818
- `2737` Alexandra Village Food Centre
  - latitude: 1.28660800 -> 1.287
  - longitude: 103.80452900 -> 103.805
- `2738` Mei Chin Road Market
  - latitude: 1.29343800 -> 1.293
  - longitude: 103.80291400 -> 103.803
- `2739` National University of Singapore (NUS) Frontier Canteen
  - latitude: 1.29648900 -> 1.296
  - longitude: 103.78036400 -> 103.780
- `2740` Toa Payoh Vista Market
  - latitude: 1.33453200 -> 1.335
  - longitude: 103.85197300 -> 103.852
- `2741` Mayflower Market
  - latitude: 1.37418500 -> 1.374
  - longitude: 103.83881000 -> 103.839
- `2742` Tampines Round Market and Food Centre
  - latitude: 1.34595900 -> 1.346
  - longitude: 103.94464000 -> 103.945
- `2747` 672A Klang Lane - Little India
  - latitude: 1.30850300 -> 1.309
  - longitude: 103.85243100 -> 103.852
- `2748` Pek Kio Market & Food Centre
  - latitude: 1.31623000 -> 1.316
  - longitude: 103.85022400 -> 103.850
- `2749` Bukit Merah Central Food Centre
  - latitude: 1.28346400 -> 1.283
  - longitude: 103.81740600 -> 103.817
- `275` 343 Clementi Ave 5
  - latitude: 1.31781300 -> 1.318
  - longitude: 103.77093200 -> 103.771
- `2750` Blk 115 Bukit Merah View Market and Food Centre
  - latitude: 1.28549400 -> 1.285
  - longitude: 103.82242400 -> 103.822
- `2752` Eunos Crescent Blk 4A Hawker Centre
  - latitude: 1.32038300 -> 1.320
  - longitude: 103.90410000 -> 103.904
- `2753` Haig Road Market & Cooked Food Centre
  - latitude: 1.31576800 -> 1.316
  - longitude: 103.89540000 -> 103.895
- `2754` Tekka Centre / Zhu Jiao Market
  - latitude: 1.30619000 -> 1.306
  - longitude: 103.85053300 -> 103.851
- `2755` Blk 6 Tanjong Pagar Plaza Market and Food Centre
  - latitude: 1.27655300 -> 1.277
  - longitude: 103.84311900 -> 103.843
- `2756` Blk 112 Jalan Bukit Merah Market and Food Centre
  - latitude: 1.28027100 -> 1.280
  - longitude: 103.82600400 -> 103.826
- `2757` Toa Payoh Lorong 8 Blk 210 Hawker Centre
  - latitude: 1.34032700 -> 1.340
  - longitude: 103.85450400 -> 103.855
- `2758` Holland Drive Market and Food Centre
  - latitude: 1.30819900 -> 1.308
  - longitude: 103.79279900 -> 103.793
- `2759` Toa Payoh Lorong 4 Blk 94
  - latitude: 1.33945900 -> 1.339
  - longitude: 103.84933900 -> 103.849
- `2760` 20 Ghim Moh Road Market & Food Centre
  - latitude: 1.31113400 -> 1.311
  - longitude: 103.78821200 -> 103.788
- `2761` Blk 4A Jalan Batu Hawker Centre
  - latitude: 1.30262700 -> 1.303
  - longitude: 103.88390000 -> 103.884
- `2762` 50A Marine Terrace Hawker Centre
  - latitude: 1.30601900 -> 1.306
  - longitude: 103.91570000 -> 103.916
- `2763` 84 Marine Parade Central Market and Food Centre
  - latitude: 1.30249500 -> 1.302
  - longitude: 103.90610000 -> 103.906
- `2764` Kaki Bukit 511 Market and Food Centre
  - latitude: 1.33343800 -> 1.333
  - longitude: 103.93050000 -> 103.930
- `2765` Bedok North Street 3 Blk 538 Hawker Centre
  - latitude: 1.33226700 -> 1.332
  - longitude: 103.92480000 -> 103.925
- `2766` Shunfu-Mart
  - latitude: 1.35200500 -> 1.352
  - longitude: 103.83711900 -> 103.837
- `2767` 11 Telok Blangah Crescent Market and Food Centre
  - latitude: 1.27730300 -> 1.277
  - longitude: 103.81877900 -> 103.819
- `2769` Telok Blangah Rise Market
  - latitude: 1.27271600 -> 1.273
  - longitude: 103.82194400 -> 103.822
- `277` 131 Cashew Rd
  - latitude: 1.37460400 -> 1.375
  - longitude: 103.77078100 -> 103.771
- `2770` Toa Payoh West Market and Food Court
  - latitude: 1.33817300 -> 1.338
  - longitude: 103.84472800 -> 103.845
- `2771` Li Li Cheng Punggol
  - latitude: 1.40233900 -> 1.402
  - longitude: 103.90125900 -> 103.901
- `2772` 20 Marsiling Lane Food Centre
  - latitude: 1.44349800 -> 1.443
  - longitude: 103.77699500 -> 103.777
- `2773` 353 Clementi Food Center
  - latitude: 1.31433900 -> 1.314
  - longitude: 103.77081100 -> 103.771
- `2774` 445 Clementi Avenue 3
  - latitude: 1.31295400 -> 1.313
  - longitude: 103.76417500 -> 103.764
- `2775` West Coast Market Square
  - latitude: 1.30374700 -> 1.304
  - longitude: 103.76421500 -> 103.764
- `2776` 252 Jurong East Street 24
  - latitude: 1.34307900 -> 1.343
  - longitude: 103.73822100 -> 103.738
- `2777` Teban Market Place
  - latitude: 1.32083300 -> 1.321
  - longitude: 103.74253500 -> 103.743
- `2778` 505 Jurong West Market & Food Centre
  - latitude: 1.34981600 -> 1.350
  - longitude: 103.71853300 -> 103.719
- `2779` 221A Boon Lay Market
  - latitude: 1.34584300 -> 1.346
  - longitude: 103.71309600 -> 103.713
- `2780` Bedok Reservoir Food Centre
  - latitude: 1.33331500 -> 1.333
  - longitude: 103.91390000 -> 103.914
- `2781` Marks & Spencer Raffles City
  - latitude: 1.29474100 -> 1.295
  - longitude: 103.85317000 -> 103.853
- `2782` 573B Woodlands Drive 16
  - latitude: 1.43091100 -> 1.431
  - longitude: 103.79777600 -> 103.798
- `2783` Republic Polytechnic
  - latitude: 1.44285900 -> 1.443
  - longitude: 103.78556000 -> 103.786
- `2785` Cold Storage Pasir Ris Mall
  - latitude: 1.37386300 -> 1.374
  - longitude: 103.94854000 -> 103.949
- `2786` Empress Road Market and Food Centre
  - latitude: 1.31633900 -> 1.316
  - longitude: 103.80564200 -> 103.806
- `2787` 85 Fengshan Centre
  - latitude: 1.33226600 -> 1.332
  - longitude: 103.93880000 -> 103.939
- `2788` Temasek Polytechnic
  - latitude: 1.34560300 -> 1.346
  - longitude: 103.93180000 -> 103.932
- `2789` Lau Pa Sat Hawker Centre
  - latitude: 1.28053100 -> 1.281
  - longitude: 103.85038300 -> 103.850
- `279` 288C Jurong East Street 21
  - latitude: 1.33972500 -> 1.340
  - longitude: 103.74363600 -> 103.744
- `2790` Telok Blangah Food Centre
  - latitude: 1.27345600 -> 1.273
  - longitude: 103.80763900 -> 103.808
- `2791` Block 44 Telok Blangah Drive
  - latitude: 1.27114500 -> 1.271
  - longitude: 103.80984200 -> 103.810
- `2792` MacPherson Market & Food Centre
  - latitude: 1.32347900 -> 1.323
  - longitude: 103.88541300 -> 103.885
- `2793` 79/79A Circuit Road Hawker Centre
  - latitude: 1.32616100 -> 1.326
  - longitude: 103.88511200 -> 103.885
- `2794` 80 Circuit Road Market and Food Centre
  - latitude: 1.32790800 -> 1.328
  - longitude: 103.88694600 -> 103.887
- `2795` 225 Ang Mo Kio Ave 1
  - latitude: 1.36734900 -> 1.367
  - longitude: 103.83847900 -> 103.838
- `280` 102 Woodlands Street 13
  - latitude: 1.43626900 -> 1.436
  - longitude: 103.78100200 -> 103.781
- `2802` People's Park Food Centre
  - latitude: 1.28505100 -> 1.285
  - longitude: 103.84257700 -> 103.843
- `2805` Masjid Sultan Mosque
  - latitude: 1.30214500 -> 1.302
  - longitude: 103.85936000 -> 103.859
- `2806` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - latitude: 1.36125300 -> 1.361
  - longitude: 103.93758600 -> 103.938
- `2807` FairPrice Tampines Mall
  - latitude: 1.35245700 -> 1.352
  - longitude: 103.94467000 -> 103.945
- `2808` Blk 216 Bedok North Street 1 Market & Hawker Centre
  - latitude: 1.32786900 -> 1.328
  - longitude: 103.93320000 -> 103.933
- `2809` 208B New Upper Changi Road Hawker Centre
  - latitude: 1.32468700 -> 1.325
  - longitude: 103.93030000 -> 103.930
- `281` 160 Woodlands Street 13
  - latitude: 1.43332900 -> 1.433
  - longitude: 103.77465200 -> 103.775
- `2810` Blk 608, Bedok Reservoir Road
  - latitude: 1.33185400 -> 1.332
  - longitude: 103.91319300 -> 103.913
- `2811` Singapore University of Technology and Design (SUTD)
  - latitude: 1.34229100 -> 1.342
  - longitude: 103.96340000 -> 103.963
- `2813` Blk 701, Bedok Reservoir Road
  - latitude: 1.33791900 -> 1.338
  - longitude: 103.91860000 -> 103.919
- `2815` Blk 69 Geylang Bahru Market and Food Centre
  - latitude: 1.32155600 -> 1.322
  - longitude: 103.87008900 -> 103.870
- `2816` NESST Tukang Dormitory
  - latitude: 1.32598600 -> 1.326
  - longitude: 103.71516700 -> 103.715
- `2817` Block 108B Bidadari Park Drive
  - latitude: 1.33347000 -> 1.333
  - longitude: 103.87181300 -> 103.872
- `2818` Block 118A Bidadari Park Drive
  - latitude: 1.33662000 -> 1.337
  - longitude: 103.87341700 -> 103.873
- `2819` Block 112A Bidadari Park Drive
  - latitude: 1.33535600 -> 1.335
  - longitude: 103.87327400 -> 103.873
- `282` 310 Woodlands Street 31
  - latitude: 1.43013500 -> 1.430
  - longitude: 103.77597000 -> 103.776
- `2820` Block 101 Bidadari Park Drive
  - latitude: 1.33614900 -> 1.336
  - longitude: 103.87146400 -> 103.871
- `2821` ASPRI-D Wall Papan Dormitory
  - latitude: 1.32223800 -> 1.322
  - longitude: 103.73105300 -> 103.731
- `2822` Singapore Zoo
  - latitude: 1.40435300 -> 1.404
  - longitude: 103.79044800 -> 103.790
- `2823` Bird Paradise
  - latitude: 1.40653200 -> 1.407
  - longitude: 103.78126400 -> 103.781
- `2824` Penjuru Recreation Centre
  - latitude: 1.31884300 -> 1.319
  - longitude: 103.73268400 -> 103.733
- `2825` Chong Pang Food Centre
  - latitude: 1.43199700 -> 1.432
  - longitude: 103.82814800 -> 103.828
- `2827` 138 Yishun Ring Road, Singapore 760138
  - latitude: 1.43186000 -> 1.432
  - longitude: 103.83062400 -> 103.831
- `2828` West 1800 Dormitory
  - latitude: 1.32610000 -> 1.326
  - longitude: 103.73486300 -> 103.735
- `2829` 204 Clementi Ave 6, Singapore 120204
  - latitude: 1.32114600 -> 1.321
  - longitude: 103.76344100 -> 103.763
- `284` 103 Clementi Street 14
  - latitude: 1.32268000 -> 1.323
  - longitude: 103.76888000 -> 103.769
- `2866` SCARLETT@PASIR RIS MALL
  - latitude: 1.37386300 -> 1.374
  - longitude: 103.94854000 -> 103.949
- `2870` 117 Aljunied Ave 2 Market & Food Centre
  - latitude: 1.32096300 -> 1.321
  - longitude: 103.88690000 -> 103.887
- `2871` FairPrice Finest Sceneca Square
  - latitude: 1.32802800 -> 1.328
  - longitude: 103.94520000 -> 103.945
- `2872` FORTUNE SUPERMARKET 780
  - latitude: 1.44809000 -> 1.448
  - longitude: 103.80090000 -> 103.801
- `2873` Westlite Jalan Tukang Dormitory
  - latitude: 1.32625300 -> 1.326
  - longitude: 103.71692400 -> 103.717
- `2875` 16 Bedok South Rd Hawker Centre
  - latitude: 1.32079300 -> 1.321
  - longitude: 103.93540000 -> 103.935
- `2879` Sims Vista Market & Food Centre
  - latitude: 1.31709800 -> 1.317
  - longitude: 103.87937300 -> 103.879
- `2883` Blk 514, Bedok North Ave 2
  - latitude: 1.33223600 -> 1.332
  - longitude: 103.92890000 -> 103.929
- `2884` SHENG SIONG BLK 845 YISHUN ST 81
  - latitude: 1.41605000 -> 1.416
  - longitude: 103.83490000 -> 103.835
- `2885` 510 Jurong West Street 51
  - latitude: 1.34838000 -> 1.348
  - longitude: 103.71946000 -> 103.719
- `2886` Blk 17 Upper Boon Keng Market and Food Centre
  - latitude: 1.31486100 -> 1.315
  - longitude: 103.87165300 -> 103.872
- `2887` Little India Rowell Rd
  - latitude: 1.30820500 -> 1.308
  - longitude: 103.85508800 -> 103.855
- `2888` Whampoa Market
  - latitude: 1.32302100 -> 1.323
  - longitude: 103.85540200 -> 103.855
- `2889` Kukoh 21 Food Centre
  - latitude: 1.28828600 -> 1.288
  - longitude: 103.83988500 -> 103.840
- `2890` Blk 501, Bedok North Street 3
  - latitude: 1.33191500 -> 1.332
  - longitude: 103.93090000 -> 103.931
- `2891` Gardens by the Bay
  - latitude: 1.28180300 -> 1.282
  - longitude: 103.86582100 -> 103.866
- `2892` Bendemeer Market and Food Centre
  - latitude: 1.31911000 -> 1.319
  - longitude: 103.86313200 -> 103.863
- `2893` Cheng Yan Court - 269 Queen Street
  - latitude: 1.30099500 -> 1.301
  - longitude: 103.85409800 -> 103.854
- `2894` Blk 5036 Ang Mo Kio Ind Park 2
  - latitude: 1.37233700 -> 1.372
  - longitude: 103.86178200 -> 103.862
- `2895` Hong Lim Food Centre and Market
  - latitude: 1.28540200 -> 1.285
  - longitude: 103.84582900 -> 103.846
- `2896` Ngee Ann Polytechnic (NP)
  - latitude: 1.33244500 -> 1.332
  - longitude: 103.77572800 -> 103.776
- `2897` Blk 10 AMK Autopoint
  - latitude: 1.37640600 -> 1.376
  - longitude: 103.86896300 -> 103.869
- `2898` Fair Price Hougang Mall
  - latitude: 1.37272300 -> 1.373
  - longitude: 103.89380600 -> 103.894
- `2899` Nanyang Polytechnic (NYP)
  - latitude: 1.38010400 -> 1.380
  - longitude: 103.84879600 -> 103.849
- `2900` Block 75B Redhill Rd
  - latitude: 1.28850000 -> 1.288
  - longitude: 103.81606500 -> 103.816
- `2901` Block 118 Bukit Merah View
  - latitude: 1.28420800 -> 1.284
  - longitude: 103.82098300 -> 103.821
- `2902` Block 19 Jalan Membina
  - latitude: 1.28567100 -> 1.286
  - longitude: 103.82638700 -> 103.826
- `2903` Block 118B Jalan Membina
  - latitude: 1.28179700 -> 1.282
  - longitude: 103.82602500 -> 103.826
- `2904` Block 102 Bukit Purmei Road
  - latitude: 1.27190800 -> 1.272
  - longitude: 103.82673500 -> 103.827
- `2905` Block 150 Mei Ling St
  - latitude: 1.29497400 -> 1.295
  - longitude: 103.80415000 -> 103.804
- `2906` Block 49 Lengkok Bahru
  - latitude: 1.28760900 -> 1.288
  - longitude: 103.81199800 -> 103.812
- `2907` Block 52 Lengkok Bahru
  - latitude: 1.28868900 -> 1.289
  - longitude: 103.81303800 -> 103.813
- `2908` Block 1 Dover Rd
  - latitude: 1.30252700 -> 1.303
  - longitude: 103.78319400 -> 103.783
- `2909` Block 22 Dover Crescent
  - latitude: 1.30707400 -> 1.307
  - longitude: 103.78380800 -> 103.784
- `2910` Block 94 Dawson Road
  - latitude: 1.29597000 -> 1.296
  - longitude: 103.81156000 -> 103.812
- `2911` Block 69 Telok Blangah Heights
  - latitude: 1.27557200 -> 1.276
  - longitude: 103.81061700 -> 103.811
- `2912` FairPrice 289A Toh Guan
  - latitude: 1.34015100 -> 1.340
  - longitude: 103.74524800 -> 103.745
- `2945` Blk 409 Ang Mo Kio Ave 10 Market & Hawker Centre
  - latitude: 1.36270600 -> 1.363
  - longitude: 103.85533900 -> 103.855
- `2946` Blk 518, Bedok North Ave 2
  - latitude: 1.33188100 -> 1.332
  - longitude: 103.92890000 -> 103.929
- `2947` Block 52A Commonwealth Dr
  - latitude: 1.30194100 -> 1.302
  - longitude: 103.79695600 -> 103.797
- `2948` Block 81 Redhill Ln
  - latitude: 1.28787800 -> 1.288
  - longitude: 103.81943200 -> 103.819
- `2949` Block 69 Redhill Cl
  - latitude: 1.28672400 -> 1.287
  - longitude: 103.81643100 -> 103.816
- `2950` Singapore Management University (SMU)
  - latitude: 1.29644000 -> 1.296
  - longitude: 103.84977000 -> 103.850
- `2951` Blk 36 Sin Ming Industrial Estate
  - latitude: 1.35883500 -> 1.359
  - longitude: 103.83885300 -> 103.839
- `2952` Singapore University of Social Sciences (SUSS)
  - latitude: 1.32870400 -> 1.329
  - longitude: 103.77582000 -> 103.776
- `2953` Punggol Way Dorm, Sharbesuwary Pte Ltd
  - latitude: 1.41767100 -> 1.418
  - longitude: 103.90727900 -> 103.907
- `2954` Blk 1 AMK Tech I
  - latitude: 1.37832200 -> 1.378
  - longitude: 103.86833700 -> 103.868
- `2955` Blk 5058 Ang Mo Kio Ind Park 2
  - latitude: 1.37497700 -> 1.375
  - longitude: 103.86030200 -> 103.860
- `2956` Block 8 Tanjong Pagar Plaza
  - latitude: 1.27722000 -> 1.277
  - longitude: 103.84299000 -> 103.843
- `2957` Block 8 Cantonment Cl
  - latitude: 1.27578200 -> 1.276
  - longitude: 103.83897300 -> 103.839
- `2958` Block 3 Jalan Bukit Merah
  - latitude: 1.28705300 -> 1.287
  - longitude: 103.80748600 -> 103.807
- `2959` Block 166 Stirling Road
  - latitude: 1.29095000 -> 1.291
  - longitude: 103.80221000 -> 103.802
- `2960` Block 181 Stirling Rd
  - latitude: 1.29416500 -> 1.294
  - longitude: 103.80582000 -> 103.806
- `2962` SHENG SIONG BLK 440 BUKIT BATOK WEST AVE 8
  - latitude: 1.35566000 -> 1.356
  - longitude: 103.73930000 -> 103.739
- `2963` SHENG SIONG BLK 61 TEBAN GARDENS ROAD
  - latitude: 1.32212000 -> 1.322
  - longitude: 103.73840000 -> 103.738
- `2966` 507 West Coast Drive
  - latitude: 1.31205400 -> 1.312
  - longitude: 103.76078900 -> 103.761
- `2968` Block 294 Punggol Central
  - latitude: 1.40310500 -> 1.403
  - longitude: 103.90457000 -> 103.905
- `2969` Block 668B Edgefield Plains
  - latitude: 1.40482600 -> 1.405
  - longitude: 103.91293500 -> 103.913
- `2970` Block 165A Punggol Central
  - latitude: 1.39487700 -> 1.395
  - longitude: 103.91460700 -> 103.915
- `2971` Block 655A Punggol East
  - latitude: 1.39961600 -> 1.400
  - longitude: 103.92049900 -> 103.920
- `2972` Block 677A Punggol Drive
  - latitude: 1.40505900 -> 1.405
  - longitude: 103.90946000 -> 103.909
- `2973` Block 684A Edgedale Plains
  - latitude: 1.40285000 -> 1.403
  - longitude: 103.91596000 -> 103.916
- `2974` Block 624B Punggol Central
  - latitude: 1.40075800 -> 1.401
  - longitude: 103.91167300 -> 103.912
- `2975` Block 632A Punggol Drive
  - latitude: 1.40059800 -> 1.401
  - longitude: 103.91345100 -> 103.913
- `2976` Block 168A Punggol East
  - latitude: 1.39474700 -> 1.395
  - longitude: 103.91432500 -> 103.914
- `2977` Block 647 Punggol Central
  - latitude: 1.39811300 -> 1.398
  - longitude: 103.91559100 -> 103.916
- `2979` 801 West Coast Crescent
  - latitude: 1.30086200 -> 1.301
  - longitude: 103.76339600 -> 103.763
- `2981` 444 Jurong West Ave 1, Singapore 640444
  - latitude: 1.35194400 -> 1.352
  - longitude: 103.71907000 -> 103.719
- `2982` 555 Jurong West Street 42
  - latitude: 1.35364400 -> 1.354
  - longitude: 103.71863500 -> 103.719
- `2983` 518 Jurong West Street 52
  - latitude: 1.34509000 -> 1.345
  - longitude: 103.71809400 -> 103.718
- `2985` 689 Jurong West Central 1
  - latitude: 1.34097700 -> 1.341
  - longitude: 103.70633500 -> 103.706
- `2986` 640 Jurong West Street 61
  - latitude: 1.34010800 -> 1.340
  - longitude: 103.69649600 -> 103.696
- `2987` 601 Jurong West Street 62
  - latitude: 1.33983400 -> 1.340
  - longitude: 103.70029400 -> 103.700
- `2988` 988A Jurong West Street 93
  - latitude: 1.33651500 -> 1.337
  - longitude: 103.69586300 -> 103.696
- `2990` 238B Boon Lay Drive
  - latitude: 1.34202200 -> 1.342
  - longitude: 103.70991800 -> 103.710
- `2991` 991B Upper Jurong Rd
  - latitude: 1.33533500 -> 1.335
  - longitude: 103.69336900 -> 103.693
- `2992` 183C Boon Lay Avenue
  - latitude: 1.34869400 -> 1.349
  - longitude: 103.70921000 -> 103.709
- `2999` 48 Teban Gardens Road
  - latitude: 1.32047900 -> 1.320
  - longitude: 103.73995400 -> 103.740
- `3001` 414 Pandan Gardens Road
  - latitude: 1.32004000 -> 1.320
  - longitude: 103.74732400 -> 103.747
- `3002` 60 Jurong West Central 3
  - latitude: 1.34046200 -> 1.340
  - longitude: 103.70435900 -> 103.704
- `3003` 706 Jurong West Street 71
  - latitude: 1.34145400 -> 1.341
  - longitude: 103.69456000 -> 103.695
- `3005` Block 308A Punggol Walk
  - latitude: 1.40644400 -> 1.406
  - longitude: 103.90081700 -> 103.901
- `3006` Block 134 Edgedale Plains
  - latitude: 1.39285300 -> 1.393
  - longitude: 103.91011700 -> 103.910
- `3007` Block 224C Sumang Lane
  - latitude: 1.40169500 -> 1.402
  - longitude: 103.89407000 -> 103.894
- `3008` Block 217C Sumang Walk
  - latitude: 1.40220600 -> 1.402
  - longitude: 103.89588400 -> 103.896
- `3009` Block 228A Punggol Field
  - latitude: 1.40363600 -> 1.404
  - longitude: 103.89202200 -> 103.892
- `3010` Block 326B Sumang Walk
  - latitude: 1.41275500 -> 1.413
  - longitude: 103.89969100 -> 103.900
- `3011` Block 423A Northshore Crescent
  - latitude: 1.41919000 -> 1.419
  - longitude: 103.90585100 -> 103.906
- `3012` Block 232C Sumang Lane
  - latitude: 1.40188800 -> 1.402
  - longitude: 103.89017900 -> 103.890
- `3013` 708 Clementi West Street 2
  - latitude: 1.30572600 -> 1.306
  - longitude: 103.76185700 -> 103.762
- `3016` 509 Serangoon North Ave 4
  - latitude: 1.37221600 -> 1.372
  - longitude: 103.87625500 -> 103.876
- `3022` Block 400C Fernvale Ln
  - latitude: 1.38936500 -> 1.389
  - longitude: 103.86980800 -> 103.870
- `3023` Block 410A Fernvale Rd
  - latitude: 1.39024600 -> 1.390
  - longitude: 103.87588100 -> 103.876
- `3024` Block 538 Hougang Ave 8
  - latitude: 1.37772200 -> 1.378
  - longitude: 103.89030300 -> 103.890
- `3025` Blk 648 Hougang Ave 8
  - latitude: 1.37221400 -> 1.372
  - longitude: 103.87987400 -> 103.880
- `3026` Block 413B Fernvale Link
  - latitude: 1.38984100 -> 1.390
  - longitude: 103.87904200 -> 103.879
- `3030` 467C Yishun Ave 6
  - latitude: 1.42683100 -> 1.427
  - longitude: 103.85138900 -> 103.851
- `3031` 504 Yishun St 51, Singapore 760504
  - latitude: 1.41833600 -> 1.418
  - longitude: 103.84439300 -> 103.844
- `3034` 406 Yishun Ave 6, Singapore 760406
  - latitude: 1.42608000 -> 1.426
  - longitude: 103.84928600 -> 103.849
- `3035` 431A Yishun Ave 1, Singapore 761431
  - latitude: 1.41965000 -> 1.420
  - longitude: 103.84728000 -> 103.847
- `3036` 439 Yishun Ave 11, Singapore 760439
  - latitude: 1.42209100 -> 1.422
  - longitude: 103.84644500 -> 103.846
- `3037` 212 Ang Mo Kio Ave 3
  - latitude: 1.36893300 -> 1.369
  - longitude: 103.84159400 -> 103.842
- `3038` Block 203 Ang Mo Kio Ave 3
  - latitude: 1.36797800 -> 1.368
  - longitude: 103.84437300 -> 103.844
- `3039` Block 536 Ang Mo Kio Ave 10
  - latitude: 1.37487100 -> 1.375
  - longitude: 103.85407600 -> 103.854
- `3040` Block 953 Hougang Ave 9
  - latitude: 1.37686100 -> 1.377
  - longitude: 103.87747800 -> 103.877
- `3041` Block 920 Hougang Ave 9
  - latitude: 1.37674700 -> 1.377
  - longitude: 103.88358400 -> 103.884
- `3042` 442 Ang Mo Kio Avenue 10
  - latitude: 1.36573200 -> 1.366
  - longitude: 103.85470800 -> 103.855
- `3043` 996C Buangkok Crescent
  - latitude: 1.38536500 -> 1.385
  - longitude: 103.88525100 -> 103.885
- `3044` 531 Serangoon North Ave 4
  - latitude: 1.37448700 -> 1.374
  - longitude: 103.87535700 -> 103.875
- `3045` 526 Serangoon North Ave 4
  - latitude: 1.37171400 -> 1.372
  - longitude: 103.87303700 -> 103.873
- `3056` 868 Yishun Street 81, Singapore 760868
  - latitude: 1.41370300 -> 1.414
  - longitude: 103.83761300 -> 103.838
- `3057` 627 Yishun Street 61, Singapore 760627
  - latitude: 1.41762800 -> 1.418
  - longitude: 103.83673300 -> 103.837
- `3058` 259 Yishun Street 22, Singapore 760259
  - latitude: 1.43491800 -> 1.435
  - longitude: 103.83913600 -> 103.839
- `3059` 383A Yishun Ave 6, Singapore 761383
  - latitude: 1.43083700 -> 1.431
  - longitude: 103.84785400 -> 103.848
- `3060` Blk 145, Bedok Reservoir Road
  - latitude: 1.33453400 -> 1.335
  - longitude: 103.91200000 -> 103.912
- `3061` FairPrice Punggol Waterway Point
  - latitude: 1.40700000 -> 1.407
  - longitude: 103.90160000 -> 103.902
- `3067` Nanyang Academy of Fine Arts
  - latitude: 1.29989900 -> 1.300
  - longitude: 103.85121000 -> 103.851
- `3068` Resorts World Sentosa
  - latitude: 1.25591000 -> 1.256
  - longitude: 103.82014000 -> 103.820
- `3069` Lasalle College of the Arts
  - latitude: 1.30287600 -> 1.303
  - longitude: 103.85141000 -> 103.851
- `3070` Block 104B Ang Mo Kio St 11
  - latitude: 1.37144600 -> 1.371
  - longitude: 103.83850900 -> 103.839
- `3071` Block 511 Ang Mo Kio Ave 8
  - latitude: 1.37367000 -> 1.374
  - longitude: 103.85031900 -> 103.850
- `363` Block 114 Edgefield Plains
  - latitude: 1.39567700 -> 1.396
  - longitude: 103.90735800 -> 103.907
- `367` Block 126A Edgedale Plains
  - latitude: 1.39423800 -> 1.394
  - longitude: 103.91172300 -> 103.912
- `368` Block 185 Edgefield Plains
  - latitude: 1.39822300 -> 1.398
  - longitude: 103.91040600 -> 103.910
- `369` Block 204A Punggol Field
  - latitude: 1.39889400 -> 1.399
  - longitude: 103.90291400 -> 103.903
- `371` 168 Woodlands Street 11
  - latitude: 1.43297900 -> 1.433
  - longitude: 103.77641500 -> 103.776
- `372` 297C Choa Chu Kang Ave 2
  - latitude: 1.37777000 -> 1.378
  - longitude: 103.74317000 -> 103.743
- `373` 219 Choa Chu Kang Central
  - latitude: 1.38274000 -> 1.383
  - longitude: 103.74552000 -> 103.746
- `374` 454 Fajar Rd
  - latitude: 1.38460000 -> 1.385
  - longitude: 103.77131000 -> 103.771
- `375` 418 Fajar Rd
  - latitude: 1.38429000 -> 1.384
  - longitude: 103.76888000 -> 103.769
- `376` 319 Clementi Ave 4
  - latitude: 1.31750100 -> 1.318
  - longitude: 103.76480800 -> 103.765
- `377` 233 Pending Rd, #08-11
  - latitude: 1.37658000 -> 1.377
  - longitude: 103.77177000 -> 103.772
- `379` 213 Petir Rd
  - latitude: 1.37458100 -> 1.375
  - longitude: 103.77540600 -> 103.775
- `380` 708 Choa Chu Kang Street 53
  - latitude: 1.39160000 -> 1.392
  - longitude: 103.74697000 -> 103.747
- `381` 685C Choa Chu Kang Cres
  - latitude: 1.40342100 -> 1.403
  - longitude: 103.74861000 -> 103.749
- `382` 461 Segar Rd
  - latitude: 1.38705000 -> 1.387
  - longitude: 103.77100000 -> 103.771
- `383` 406 Fajar Rd
  - latitude: 1.38184000 -> 1.382
  - longitude: 103.76749000 -> 103.767
- `384` 175 Lompang Rd
  - latitude: 1.37981000 -> 1.380
  - longitude: 103.76596000 -> 103.766
- `385` 188 Bukit Batok West Ave 6
  - latitude: 1.34637300 -> 1.346
  - longitude: 103.74576500 -> 103.746
- `386` 234 Choa Chu Kang Central
  - latitude: 1.38019600 -> 1.380
  - longitude: 103.74835700 -> 103.748
- `387` 372 Jurong East Street 32
  - latitude: 1.34865000 -> 1.349
  - longitude: 103.73181000 -> 103.732
- `389` 671 Yishun Avenue 4
  - latitude: 1.41910800 -> 1.419
  - longitude: 103.84139700 -> 103.841
- `390` 272 Bangkit Rd
  - latitude: 1.37745300 -> 1.377
  - longitude: 103.77474200 -> 103.775
- `391` 808B Choa Chu Kang Ave 1
  - latitude: 1.37563000 -> 1.376
  - longitude: 103.74579000 -> 103.746
- `392` 536 Choa Chu Kang Street 51
  - latitude: 1.39185000 -> 1.392
  - longitude: 103.74404000 -> 103.744
- `393` 677 Choa Chu Kang Cres
  - latitude: 1.43699300 -> 1.437
  - longitude: 103.77735700 -> 103.777
- `394` 527 Choa Chu Kang Street 51
  - latitude: 1.39188000 -> 1.392
  - longitude: 103.74145000 -> 103.741
- `395` 625 Choa Chu Kang Street 62
  - latitude: 1.39820100 -> 1.398
  - longitude: 103.74711400 -> 103.747
- `397` 167 Petir Rd
  - latitude: 1.37763000 -> 1.378
  - longitude: 103.76476000 -> 103.765
- `398` 601 Choa Chu Kang Street 62
  - latitude: 1.39695000 -> 1.397
  - longitude: 103.74489000 -> 103.745
- `399` 486 Choa Chu Kang Ave 5
  - latitude: 1.37546200 -> 1.375
  - longitude: 103.73836200 -> 103.738
- `400` 760 Choa Chu Kang North 5
  - latitude: 1.39309000 -> 1.393
  - longitude: 103.74730000 -> 103.747
- `401` 162 Bukit Batok Street 11
  - latitude: 1.34828200 -> 1.348
  - longitude: 103.74805800 -> 103.748
- `403` 210 Bukit Batok Street 21
  - latitude: 1.34545600 -> 1.345
  - longitude: 103.74987300 -> 103.750
- `406` 505 Choa Chu Kang Street 51
  - latitude: 1.38901000 -> 1.389
  - longitude: 103.74206300 -> 103.742
- `407` 437 Fajar Rd, Block 437
  - latitude: 1.38259000 -> 1.383
  - longitude: 103.76952000 -> 103.770
- `408` 493 Jurong West Street 41
  - latitude: 1.34901000 -> 1.349
  - longitude: 103.72489000 -> 103.725
- `409` 432 Choa Chu Kang Ave 4
  - latitude: 1.38465000 -> 1.385
  - longitude: 103.74179300 -> 103.742
- `410` 290 Choa Chu Kang Ave 3
  - latitude: 1.37883000 -> 1.379
  - longitude: 103.74039000 -> 103.740
- `411` 238 Bukit Batok East Ave 5
  - latitude: 1.34989700 -> 1.350
  - longitude: 103.75476400 -> 103.755
- `412` 296B Bukit Batok Street 22
  - latitude: 1.34384400 -> 1.344
  - longitude: 103.74747700 -> 103.747
- `413` 137 Teck Whye Ln
  - latitude: 1.37996400 -> 1.380
  - longitude: 103.75286900 -> 103.753
- `414` 473 Choa Chu Kang Ave 3
  - latitude: 1.37945100 -> 1.379
  - longitude: 103.73783300 -> 103.738
- `416` 164 Jln Teck Whye
  - latitude: 1.38131000 -> 1.381
  - longitude: 103.75640000 -> 103.756
- `417` 230 Choa Chu Kang Central
  - latitude: 1.38035700 -> 1.380
  - longitude: 103.74631000 -> 103.746
- `418` 290B Bukit Batok Street 24
  - latitude: 1.34373600 -> 1.344
  - longitude: 103.75665000 -> 103.757
- `420` 498 Jurong West Street 41
  - latitude: 1.34882000 -> 1.349
  - longitude: 103.72443000 -> 103.724
- `421` 639 Choa Chu Kang Street 64
  - latitude: 1.39774000 -> 1.398
  - longitude: 103.74904800 -> 103.749
- `422` 488B Choa Chu Kang Ave 5
  - latitude: 1.37706000 -> 1.377
  - longitude: 103.73933000 -> 103.739
- `423` 125 Bukit Batok Central
  - latitude: 1.35154100 -> 1.352
  - longitude: 103.74695200 -> 103.747
- `425` 334D Yishun Street 31
  - latitude: 1.43240000 -> 1.432
  - longitude: 103.84668000 -> 103.847
- `426` 454 Choa Chu Kang Ave 4
  - latitude: 1.37917000 -> 1.379
  - longitude: 103.73476400 -> 103.735
- `427` 818B Choa Chu Kang Ave 1
  - latitude: 1.37729000 -> 1.377
  - longitude: 103.74833000 -> 103.748
- `428` 426 Choa Chu Kang Ave 4
  - latitude: 1.38061600 -> 1.381
  - longitude: 103.73919100 -> 103.739
- `429` 562 Choa Chu Kang Street 52
  - latitude: 1.39622000 -> 1.396
  - longitude: 103.74579000 -> 103.746
- `430` 434 Bukit Panjang Ring Rd
  - latitude: 1.38539600 -> 1.385
  - longitude: 103.77049400 -> 103.770
- `431` 228 Bukit Batok Central,
  - latitude: 1.34870000 -> 1.349
  - longitude: 103.75376000 -> 103.754
- `432` 442 Choa Chu Kang Ave 4
  - latitude: 1.38094000 -> 1.381
  - longitude: 103.73768000 -> 103.738
- `433` 103 Bukit Batok Central
  - latitude: 1.35011900 -> 1.350
  - longitude: 103.74536600 -> 103.745
- `434` 517 Choa Chu Kang Street 51
  - latitude: 1.39072000 -> 1.391
  - longitude: 103.74296000 -> 103.743
- `436` 340 Choa Chu Kang Loop
  - latitude: 1.38419200 -> 1.384
  - longitude: 103.74549000 -> 103.745
- `437` 464 Jurong West Street 41
  - latitude: 1.35035000 -> 1.350
  - longitude: 103.72234000 -> 103.722
- `438` 413 Saujana Rd
  - latitude: 1.38233400 -> 1.382
  - longitude: 103.76854900 -> 103.769
- `439` 169 Bukit Batok West Ave 8
  - latitude: 1.34674200 -> 1.347
  - longitude: 103.74083300 -> 103.741
- `440` 764 Jurong West Street 74
  - latitude: 1.34946000 -> 1.349
  - longitude: 103.69842000 -> 103.698
- `441` 550 Choa Chu Kang Street 52
  - latitude: 1.39406500 -> 1.394
  - longitude: 103.74272200 -> 103.743
- `442` 251 Bangkit Rd,
  - latitude: 1.38016000 -> 1.380
  - longitude: 103.77368000 -> 103.774
- `443` 308 Jurong East Street 32
  - latitude: 1.34732000 -> 1.347
  - longitude: 103.73444900 -> 103.734
- `444` 308 Bukit Batok Street 31
  - latitude: 1.35747200 -> 1.357
  - longitude: 103.74797200 -> 103.748
- `445` 242 Bukit Panjang Ring Rd
  - latitude: 1.38022900 -> 1.380
  - longitude: 103.77215000 -> 103.772
- `447` Block 447A Punggol Way
  - latitude: 1.41765800 -> 1.418
  - longitude: 103.91218700 -> 103.912
- `448` Block 310C Punggol Walk
  - latitude: 1.40969800 -> 1.410
  - longitude: 103.90019600 -> 103.900
- `449` Block 435 Northshore Drive
  - latitude: 1.41850700 -> 1.419
  - longitude: 103.91015700 -> 103.910
- `450` Block 411A Northshore Drive
  - latitude: 1.41835800 -> 1.418
  - longitude: 103.90576800 -> 103.906
- `451` 316 Jurong East Street 32
  - latitude: 1.34705000 -> 1.347
  - longitude: 103.73216000 -> 103.732
- `452` 320 Jurong East Street 31
  - latitude: 1.34843900 -> 1.348
  - longitude: 103.73100300 -> 103.731
- `453` 340 Jurong East Ave 1
  - latitude: 1.35027900 -> 1.350
  - longitude: 103.73066500 -> 103.731
- `455` 475 Jurong West Street 41
  - latitude: 1.34683100 -> 1.347
  - longitude: 103.72443300 -> 103.724
- `456` 458 Jurong West Street 41
  - latitude: 1.35021900 -> 1.350
  - longitude: 103.71986100 -> 103.720
- `457` 461A Bukit Batok West Ave 8
  - latitude: 1.35535000 -> 1.355
  - longitude: 103.74009000 -> 103.740
- `458` 330 Clementi Ave 2
  - latitude: 1.31374300 -> 1.314
  - longitude: 103.76782800 -> 103.768
- `459` 435C Bukit Batok West Ave. 5
  - latitude: 1.35837600 -> 1.358
  - longitude: 103.74009300 -> 103.740
- `460` 317 Jurong East Street 31
  - latitude: 1.34687000 -> 1.347
  - longitude: 103.73124000 -> 103.731
- `461` 248 Bukit Batok East Avenue 5
  - latitude: 1.35032800 -> 1.350
  - longitude: 103.75648200 -> 103.756
- `462` 369 Bukit Batok Street 31
  - latitude: 1.36001000 -> 1.360
  - longitude: 103.75039300 -> 103.750
- `463` 325 Jurong East Street 31
  - latitude: 1.34881000 -> 1.349
  - longitude: 103.72894000 -> 103.729
- `464` 288D Bukit Batok Street 25
  - latitude: 1.34581000 -> 1.346
  - longitude: 103.75910000 -> 103.759
- `465` 350 Bukit Batok Street 34
  - latitude: 1.36171800 -> 1.362
  - longitude: 103.74914600 -> 103.749
- `466` 480 Jurong West Street 41
  - latitude: 1.34732000 -> 1.347
  - longitude: 103.72400000 -> 103.724
- `467` 15 Teck Whye Ln
  - latitude: 1.37910500 -> 1.379
  - longitude: 103.75440200 -> 103.754
- `468` 138 Bukit Batok West Ave 6
  - latitude: 1.35055100 -> 1.351
  - longitude: 103.74441600 -> 103.744
- `469` 181 Jelebu Rd
  - latitude: 1.37931000 -> 1.379
  - longitude: 103.76291000 -> 103.763
- `470` 164 Bukit Batok Street 11
  - latitude: 1.34774000 -> 1.348
  - longitude: 103.74281000 -> 103.743
- `477` 757 Yishun Street 72 
  - latitude: 1.42658500 -> 1.427
  - longitude: 103.83406000 -> 103.834
- `479` 636 Yishun Street 61
  - latitude: 1.41965500 -> 1.420
  - longitude: 103.83906700 -> 103.839
- `483` 274 Choa Chu Kang Ave 2
  - latitude: 1.37937000 -> 1.379
  - longitude: 103.74282000 -> 103.743
- `487` 654 Yishun Avenue 4
  - latitude: 1.42298400 -> 1.423
  - longitude: 103.84049700 -> 103.840
- `492` 112 Teck Whye Ln
  - latitude: 1.37764500 -> 1.378
  - longitude: 103.75233400 -> 103.752
- `506` 213 Yishun Street 21
  - latitude: 1.43184900 -> 1.432
  - longitude: 103.83633000 -> 103.836
- `511` 676C Yishun Ring Rd
  - latitude: 1.42154000 -> 1.422
  - longitude: 103.84228000 -> 103.842
- `512` 365 Yishun Ring Rd
  - latitude: 1.42925000 -> 1.429
  - longitude: 103.84519000 -> 103.845
- `514` 771 Yishun Ave 3
  - latitude: 1.42396000 -> 1.424
  - longitude: 103.83260000 -> 103.833
- `524` 379 Clementi Ave 5
  - latitude: 1.31790900 -> 1.318
  - longitude: 103.76779600 -> 103.768
- `532` 935 Yishun Central 1
  - latitude: 1.42517300 -> 1.425
  - longitude: 103.83680000 -> 103.837
- `545` 701 Yishun Ave 5
  - latitude: 1.42999900 -> 1.430
  - longitude: 103.82871900 -> 103.829
- `546` 726 Yishun Street 71
  - latitude: 1.42666000 -> 1.427
  - longitude: 103.83085000 -> 103.831
- `547` 641 Yishun Street 61
  - latitude: 1.42083000 -> 1.421
  - longitude: 103.83831100 -> 103.838
- `565` 721 Yishun Street 71
  - latitude: 1.42610600 -> 1.426
  - longitude: 103.82891000 -> 103.829
- `569` 207 Boon Lay Place
  - latitude: 1.34668300 -> 1.347
  - longitude: 103.71359200 -> 103.714
- `580` Blk 886,Tampines Street 83
  - latitude: 1.35122900 -> 1.351
  - longitude: 103.93202200 -> 103.932
- `581` Blk 637, Bedok Reservoir Road
  - latitude: 1.33107600 -> 1.331
  - longitude: 103.90403400 -> 103.904
- `582` Blk 406,Tampines Street 41
  - latitude: 1.35814100 -> 1.358
  - longitude: 103.94591900 -> 103.946
- `583` Blk 426 Tampines Street 41
  - latitude: 1.35956800 -> 1.360
  - longitude: 103.94796200 -> 103.948
- `584` Blk 485A, Tampines Avenue 9
  - latitude: 1.36002200 -> 1.360
  - longitude: 103.95573700 -> 103.956
- `585` Blk 911,Tampines Street 91
  - latitude: 1.34990400 -> 1.350
  - longitude: 103.93985600 -> 103.940
- `586` Blk 954C,Tampines Street 96
  - latitude: 1.34249400 -> 1.342
  - longitude: 103.93708200 -> 103.937
- `587` Blk 874,Tampines Street 84
  - latitude: 1.35343000 -> 1.353
  - longitude: 103.93259600 -> 103.933
- `588` Blk 872,Tampines Street 84
  - latitude: 1.35425000 -> 1.354
  - longitude: 103.93232300 -> 103.932
- `595` ANG MO SUPERMARKET-622B TAMPINES AVE 12
  - latitude: 1.36088800 -> 1.361
  - longitude: 103.94120000 -> 103.941
- `731` Blk 106, Bedok North Avenue 4
  - latitude: 1.33441900 -> 1.334
  - longitude: 103.93707500 -> 103.937
- `732` Blk 113, Bedok North Street 2
  - latitude: 1.33043600 -> 1.330
  - longitude: 103.93518900 -> 103.935
- `764` Blk 42, Cassia Crescent
  - latitude: 1.31041000 -> 1.310
  - longitude: 103.88629500 -> 103.886
- `768` Blk 356D, Ubi Road 3
  - latitude: 1.32691200 -> 1.327
  - longitude: 103.90008200 -> 103.900
- `769` Blk 108, Lengkong Tiga
  - latitude: 1.32465500 -> 1.325
  - longitude: 103.91024400 -> 103.910
- `770` Blk 74, Marine Drive
  - latitude: 1.30361500 -> 1.304
  - longitude: 103.90721400 -> 103.907
- `771` Blk 47, Marine Crescent
  - latitude: 1.30571600 -> 1.306
  - longitude: 103.91236800 -> 103.912
- `772` Blk 47, Jln Tiga
  - latitude: 1.30883500 -> 1.309
  - longitude: 103.88494900 -> 103.885
- `774` Blk 64, Marine Drive
  - latitude: 1.30195500 -> 1.302
  - longitude: 103.90917400 -> 103.909
- `775` Blk 55, Chai Chee Drive
  - latitude: 1.32717200 -> 1.327
  - longitude: 103.91933800 -> 103.919
- `776` Blk 55, New Upper Changi Road
  - latitude: 1.32511400 -> 1.325
  - longitude: 103.94207600 -> 103.942
- `777` Blk 319, Ubi Avenue 1
  - latitude: 1.32820800 -> 1.328
  - longitude: 103.90347700 -> 103.903
- `778` Blk 115, Lengkong Tiga
  - latitude: 1.32310400 -> 1.323
  - longitude: 103.91134700 -> 103.911
- `779` Blk 61, Chai Chee Road
  - latitude: 1.32509000 -> 1.325
  - longitude: 103.92074900 -> 103.921
- `780` Blk 61, New Upper Changi Road
  - latitude: 1.32277900 -> 1.323
  - longitude: 103.94076200 -> 103.941
- `781` Blk 330, Ubi Avenue 1
  - latitude: 1.32654800 -> 1.327
  - longitude: 103.90413900 -> 103.904
- `782` Blk 104, Lengkong Tiga
  - latitude: 1.32583900 -> 1.326
  - longitude: 103.90991900 -> 103.910
- `783` Blk 9, Eunos Crescent
  - latitude: 1.32187100 -> 1.322
  - longitude: 103.90275100 -> 103.903
- `784` Blk 10, Pine Close
  - latitude: 1.30917000 -> 1.309
  - longitude: 103.88214900 -> 103.882
- `785` Blk 846, Sims Avenue
  - latitude: 1.31759100 -> 1.318
  - longitude: 103.90169900 -> 103.902
- `786` Blk 1, Bedok South Avenue 1
  - latitude: 1.32095600 -> 1.321
  - longitude: 103.93382400 -> 103.934
- `787` Blk 417, Eunos Road 5
  - latitude: 1.31817200 -> 1.318
  - longitude: 103.89709900 -> 103.897
- `788` Blk 22, Eunos Crescent
  - latitude: 1.32481300 -> 1.325
  - longitude: 103.90202200 -> 103.902
- `789` Blk 2, Haig Road
  - latitude: 1.31251000 -> 1.313
  - longitude: 103.89761700 -> 103.898
- `790` Blk 16, Eunos Crescent
  - latitude: 1.32307200 -> 1.323
  - longitude: 103.90445200 -> 103.904
- `791` Blk 358D, Ubi Road 3
  - latitude: 1.32945200 -> 1.329
  - longitude: 103.89999400 -> 103.900
- `792` Blk 358B, Ubi Road 3
  - latitude: 1.32844400 -> 1.328
  - longitude: 103.90014500 -> 103.900
- `793` Blk 3, Pine Close
  - latitude: 1.30705000 -> 1.307
  - longitude: 103.88324400 -> 103.883
- `794` Blk 351, Ubi Avenue 1
  - latitude: 1.32549500 -> 1.325
  - longitude: 103.90054400 -> 103.901
- `795` Blk 348, Ubi Avenue 1
  - latitude: 1.32615800 -> 1.326
  - longitude: 103.90025500 -> 103.900
- `796` Blk 105, Aljunied Crescent
  - latitude: 1.31947000 -> 1.319
  - longitude: 103.88274300 -> 103.883
- `797` Blk 60, Dakota Crescent
  - latitude: 1.30767800 -> 1.308
  - longitude: 103.88857700 -> 103.889
- `798` Blk 28, Cassia Crescent
  - latitude: 1.30897600 -> 1.309
  - longitude: 103.88351300 -> 103.884
- `799` Blk 126, Geylang East Avenue 1
  - latitude: 1.31785900 -> 1.318
  - longitude: 103.88701500 -> 103.887
- `800` Blk 156, Bedok South Avenue 3
  - latitude: 1.31827700 -> 1.318
  - longitude: 103.94550100 -> 103.946
- `801` Blk 1, Pine Close
  - latitude: 1.30819400 -> 1.308
  - longitude: 103.88407600 -> 103.884
- `802` Blk 1, Kampong Kayu Rd
  - latitude: 1.30362500 -> 1.304
  - longitude: 103.88380600 -> 103.884
- `803` Blk 4, Marine Ter
  - latitude: 1.30515500 -> 1.305
  - longitude: 103.91763800 -> 103.918
- `804` Blk 36, Cassia Crescent
  - latitude: 1.30986200 -> 1.310
  - longitude: 103.88519900 -> 103.885
- `805` Blk 55, Marine Ter
  - latitude: 1.30542700 -> 1.305
  - longitude: 103.91396000 -> 103.914
- `806` Blk 14, Bedok South Ave 2
  - latitude: 1.32104000 -> 1.321
  - longitude: 103.93629700 -> 103.936
- `807` Blk 30, Marine Crescent
  - latitude: 1.30417000 -> 1.304
  - longitude: 103.91117800 -> 103.911
- `808` Blk 11, Haig Road
  - latitude: 1.31484700 -> 1.315
  - longitude: 103.89662700 -> 103.897
- `809` Blk 8, Haig Road
  - latitude: 1.31366800 -> 1.314
  - longitude: 103.89606900 -> 103.896
- `810` Blk 164, Bedok South Road
  - latitude: 1.32010100 -> 1.320
  - longitude: 103.94659800 -> 103.947
- `811` Blk 29 New Upper Changi Road
  - latitude: 1.32426700 -> 1.324
  - longitude: 103.93692600 -> 103.937
- `812` Blk 12, Pine Close
  - latitude: 1.30854900 -> 1.309
  - longitude: 103.88224000 -> 103.882
- `813` Blk 22, Bedok South Avenue 1
  - latitude: 1.32281400 -> 1.323
  - longitude: 103.93275900 -> 103.933
- `814` Blk 63, Chai Chee Road
  - latitude: 1.32612500 -> 1.326
  - longitude: 103.92143900 -> 103.921
- `815` Blk 169, Bedok South Avenue 3
  - latitude: 1.32038900 -> 1.320
  - longitude: 103.94507800 -> 103.945
- `816` Blk 35, Chai Chee Avenue
  - latitude: 1.32482400 -> 1.325
  - longitude: 103.92585600 -> 103.926
- `817` Blk 72, Bedok South Avenue 3
  - latitude: 1.32046300 -> 1.320
  - longitude: 103.94365800 -> 103.944
- `818` Blk 99, Old Airport Road
  - latitude: 1.30871600 -> 1.309
  - longitude: 103.88856700 -> 103.889
- `819` Blk 58, Dakota Crescent
  - latitude: 1.30740000 -> 1.307
  - longitude: 103.88945700 -> 103.889
- `820` Blk 708, Pasir Ris Drive 10
  - latitude: 1.38095500 -> 1.381
  - longitude: 103.93859200 -> 103.939
- `821` Blk 626, Pasir Ris Drive 3
  - latitude: 1.37982800 -> 1.380
  - longitude: 103.94095000 -> 103.941
- `822` Blk 473, Pasir Ris Drive 6
  - latitude: 1.37450900 -> 1.375
  - longitude: 103.95735100 -> 103.957
- `823` Blk 643, Pasir Ris Drive 10
  - latitude: 1.37772200 -> 1.378
  - longitude: 103.93810000 -> 103.938
- `824` Blk 701, Pasir Ris Drive 10
  - latitude: 1.37999100 -> 1.380
  - longitude: 103.93789100 -> 103.938
- `825` Blk 717, Pasir Ris Street 72
  - latitude: 1.38277500 -> 1.383
  - longitude: 103.93654000 -> 103.937
- `826` Blk 638, Pasir Ris Drive 1
  - latitude: 1.37628900 -> 1.376
  - longitude: 103.94094800 -> 103.941
- `827` Blk 641, Pasir Ris Drive 1
  - latitude: 1.37646400 -> 1.376
  - longitude: 103.93956100 -> 103.940
- `828` Blk 516, Pasir Ris Street 52
  - latitude: 1.37410300 -> 1.374
  - longitude: 103.94308600 -> 103.943
- `829` Blk 520, Pasir Ris Street 52
  - latitude: 1.37348500 -> 1.373
  - longitude: 103.94480900 -> 103.945
- `830` Blk 602, Elias Road
  - latitude: 1.37739800 -> 1.377
  - longitude: 103.94399100 -> 103.944
- `831` Blk 159,Tampines Street 12
  - latitude: 1.35123400 -> 1.351
  - longitude: 103.94656600 -> 103.947
- `832` Blk 585, Pasir Ris Street 53
  - latitude: 1.37537900 -> 1.375
  - longitude: 103.94741500 -> 103.947
- `833` Blk 534, Pasir Ris Drive 1
  - latitude: 1.37043600 -> 1.370
  - longitude: 103.95065300 -> 103.951
- `834` Blk 408, Pasir Ris Drive 6
  - latitude: 1.37335200 -> 1.373
  - longitude: 103.95340700 -> 103.953
- `835` Blk 423, Pasir Ris Drive 6
  - latitude: 1.37013400 -> 1.370
  - longitude: 103.95462300 -> 103.955
- `836` Blk 725, Pasir Ris Street 72
  - latitude: 1.38141500 -> 1.381
  - longitude: 103.93571700 -> 103.936
- `837` Blk 429, Pasir Ris Drive 6
  - latitude: 1.37008600 -> 1.370
  - longitude: 103.95670600 -> 103.957
- `838` Blk 458, Pasir Ris Drive 4
  - latitude: 1.37146100 -> 1.371
  - longitude: 103.95955800 -> 103.960
- `839` Blk 257, Pasir Ris Street 21
  - latitude: 1.36714600 -> 1.367
  - longitude: 103.96369900 -> 103.964
- `840` Blk 232, Pasir Ris Drive 4
  - latitude: 1.37464700 -> 1.375
  - longitude: 103.96167800 -> 103.962
- `841` Blk 479, Pasir Ris Drive 4
  - latitude: 1.37517400 -> 1.375
  - longitude: 103.95913100 -> 103.959
- `842` Blk 225, Pasir Ris Street 21
  - latitude: 1.37120500 -> 1.371
  - longitude: 103.96120600 -> 103.961
- `843` Blk 756, Pasir Ris Street 71
  - latitude: 1.37787800 -> 1.378
  - longitude: 103.93350000 -> 103.933
- `844` Blk 275, Pasir Ris Street 21
  - latitude: 1.36430200 -> 1.364
  - longitude: 103.96473400 -> 103.965
- `845` Blk 209, Pasir Ris Street 21
  - latitude: 1.36622700 -> 1.366
  - longitude: 103.96189700 -> 103.962
- `846` Blk 160, Pasir Ris Street 13
  - latitude: 1.36408600 -> 1.364
  - longitude: 103.96253200 -> 103.963
- `847` Blk 496D,Tampines Avenue 9
  - latitude: 1.36158800 -> 1.362
  - longitude: 103.95006900 -> 103.950
- `848` Blk 148, Pasir Ris Street 13
  - latitude: 1.36208300 -> 1.362
  - longitude: 103.96202100 -> 103.962
- `849` Blk 298, Tampines Street 22
  - latitude: 1.35172500 -> 1.352
  - longitude: 103.95474000 -> 103.955
- `850` Blk 187, Pasir Ris Street 11
  - latitude: 1.36464200 -> 1.365
  - longitude: 103.95942400 -> 103.959
- `851` Blk 555, Pasir Ris Street 51
  - latitude: 1.36810000 -> 1.368
  - longitude: 103.95194700 -> 103.952
- `852` Blk 120, Pasir Ris Street 11
  - latitude: 1.36729400 -> 1.367
  - longitude: 103.95430600 -> 103.954
- `853` Blk 132, Pasir Ris Street 11
  - latitude: 1.36615700 -> 1.366
  - longitude: 103.95608200 -> 103.956
- `854` Blk 283, Tampines Street 22
  - latitude: 1.34841400 -> 1.348
  - longitude: 103.95271100 -> 103.953
- `855` Blk 564, Pasir Ris Street 51
  - latitude: 1.36840100 -> 1.368
  - longitude: 103.94984800 -> 103.950
- `856` Blk 560, Pasir Ris Street 51
  - latitude: 1.36673300 -> 1.367
  - longitude: 103.95043800 -> 103.950
- `857` Blk 105, Pasir Ris Street 12
  - latitude: 1.36854000 -> 1.369
  - longitude: 103.95722800 -> 103.957
- `858` Blk 345, Tampines Street 33
  - latitude: 1.35183000 -> 1.352
  - longitude: 103.96228900 -> 103.962
- `859` Blk 526A, Pasir Ris Street 51
  - latitude: 1.36752600 -> 1.368
  - longitude: 103.94731900 -> 103.947
- `860` Blk 191, Pasir Ris Street 12
  - latitude: 1.36594300 -> 1.366
  - longitude: 103.95870200 -> 103.959
- `861` Blk 108, Tampines Street 11
  - latitude: 1.34787700 -> 1.348
  - longitude: 103.94857300 -> 103.949
- `862` Blk 289, Tampines Street 22
  - latitude: 1.34960800 -> 1.350
  - longitude: 103.95535900 -> 103.955
- `864` Blk 323, Tampines Street 33
  - latitude: 1.35180100 -> 1.352
  - longitude: 103.95828200 -> 103.958
- `865` Blk 165,Tampines Street 12
  - latitude: 1.34929200 -> 1.349
  - longitude: 103.94612200 -> 103.946
- `866` Blk 761, Pasir Ris Street 71
  - latitude: 1.37656000 -> 1.377
  - longitude: 103.93339700 -> 103.933
- `867` Blk 141, Pasir Ris Street 11
  - latitude: 1.36417500 -> 1.364
  - longitude: 103.95893300 -> 103.959
- `868` Blk 524A, Pasir Ris Street 51
  - latitude: 1.37138300 -> 1.371
  - longitude: 103.94766800 -> 103.948
- `869` Blk 103, Tampines Street 11
  - latitude: 1.34765600 -> 1.348
  - longitude: 103.94644800 -> 103.946
- `870` Blk 303, Tampines Street 32
  - latitude: 1.35197300 -> 1.352
  - longitude: 103.95585500 -> 103.956
- `871` Blk 782, Pasir Ris Street 71
  - latitude: 1.37337700 -> 1.373
  - longitude: 103.93889300 -> 103.939
- `872` Blk 207, Tampines Street 21
  - latitude: 1.35132100 -> 1.351
  - longitude: 103.95210800 -> 103.952
- `873` Blk 765, Bedok Reservoir View
  - latitude: 1.33600100 -> 1.336
  - longitude: 103.93566900 -> 103.936
- `874` Blk 490B, Tampines Street 45
  - latitude: 1.36256000 -> 1.363
  - longitude: 103.95621000 -> 103.956
- `875` Blk 449,Tampines Street 42
  - latitude: 1.35706500 -> 1.357
  - longitude: 103.95105500 -> 103.951
- `876` Blk 770, Bedok Reservoir View
  - latitude: 1.33604100 -> 1.336
  - longitude: 103.93832700 -> 103.938
- `877` Blk 78, Bedok North Road
  - latitude: 1.32726800 -> 1.327
  - longitude: 103.94091000 -> 103.941
- `878` Blk 124, Simei Street 1
  - latitude: 1.34627600 -> 1.346
  - longitude: 103.95327800 -> 103.953
- `879` Blk 498A, Tampines Street 45
  - latitude: 1.36154000 -> 1.362
  - longitude: 103.95816100 -> 103.958
- `880` Blk 130, Bedok North Street 2
  - latitude: 1.32710600 -> 1.327
  - longitude: 103.93665400 -> 103.937
- `881` Blk 135, Simei Street 1
  - latitude: 1.34793200 -> 1.348
  - longitude: 103.95713600 -> 103.957
- `882` Blk 229, Tampines Street 23
  - latitude: 1.35590000 -> 1.356
  - longitude: 103.95396300 -> 103.954
- `883` Blk 240, Tampines Street 21
  - latitude: 1.35500600 -> 1.355
  - longitude: 103.94712700 -> 103.947
- `884` Blk 421, Bedok North Road
  - latitude: 1.32836500 -> 1.328
  - longitude: 103.92900600 -> 103.929
- `885` Blk 216, Tampines Street 23
  - latitude: 1.35405600 -> 1.354
  - longitude: 103.95287600 -> 103.953
- `886` Blk 201, Bedok North Street 1
  - latitude: 1.32605800 -> 1.326
  - longitude: 103.92839800 -> 103.928
- `887` Blk 807A, Chai Chee Road
  - latitude: 1.32715600 -> 1.327
  - longitude: 103.92317500 -> 103.923
- `888` Blk 409, Bedok North Avenue 2
  - latitude: 1.32811100 -> 1.328
  - longitude: 103.93291700 -> 103.933
- `889` Blk 94B, Bedok North Avenue 4
  - latitude: 1.33402000 -> 1.334
  - longitude: 103.94289500 -> 103.943
- `890` Blk 633,Tampines North Drive 2
  - latitude: 1.36550200 -> 1.366
  - longitude: 103.94166400 -> 103.942
- `891` Blk 747, Pasir Ris Street 71
  - latitude: 1.37918200 -> 1.379
  - longitude: 103.93469500 -> 103.935
- `892` Blk 230D, Tampines Street 24
  - latitude: 1.35611300 -> 1.356
  - longitude: 103.95151600 -> 103.952
- `893` Blk 610C,Tampines North Drive 1
  - latitude: 1.36448900 -> 1.364
  - longitude: 103.93543000 -> 103.935
- `894` Blk 501, Pasir Ris Street 52
  - latitude: 1.37622800 -> 1.376
  - longitude: 103.94596400 -> 103.946
- `895` Blk 862,Tampines Street 83
  - latitude: 1.35466400 -> 1.355
  - longitude: 103.93646900 -> 103.936
- `896` Blk 641B,Tampines Street 62
  - latitude: 1.36746100 -> 1.367
  - longitude: 103.94368600 -> 103.944
- `897` Blk 662C,Tampines Street 64
  - latitude: 1.36967400 -> 1.370
  - longitude: 103.93382500 -> 103.934
- `898` Blk 497A, Tampines Street 45
  - latitude: 1.35931200 -> 1.359
  - longitude: 103.95861600 -> 103.959
- `899` Blk 721,Tampines Street 71
  - latitude: 1.36007800 -> 1.360
  - longitude: 103.93634300 -> 103.936
- `900` Blk 419, Pasir Ris Drive 6
  - latitude: 1.37163300 -> 1.372
  - longitude: 103.95462500 -> 103.955
- `901` Blk 742 Pasir Ris Street 71
  - latitude: 1.37708700 -> 1.377
  - longitude: 103.93605600 -> 103.936
- `902` Blk 771, Pasir Ris Street 71
  - latitude: 1.37561000 -> 1.376
  - longitude: 103.93648300 -> 103.936
- `903` Blk 876C,Tampines Avenue 8
  - latitude: 1.35333700 -> 1.353
  - longitude: 103.93007100 -> 103.930
- `904` Blk 481, Pasir Ris Drive 4
  - latitude: 1.37408000 -> 1.374
  - longitude: 103.95877500 -> 103.959
- `905` Blk 660,Tampines Street 64
  - latitude: 1.36772100 -> 1.368
  - longitude: 103.93389800 -> 103.934
- `906` Blk 871C,Tampines Street 86
  - latitude: 1.35682700 -> 1.357
  - longitude: 103.93145200 -> 103.931
- `907` Blk 631B,Tampines North Drive 2
  - latitude: 1.36295200 -> 1.363
  - longitude: 103.94254500 -> 103.943
- `908` Blk 117, Bedok North Road
  - latitude: 1.33064900 -> 1.331
  - longitude: 103.93852000 -> 103.939
- `909` Blk 603A,Tampines Avenue 9
  - latitude: 1.36093900 -> 1.361
  - longitude: 103.93529200 -> 103.935
- `910` Blk 635B,Tampines North Drive 2
  - latitude: 1.36692900 -> 1.367
  - longitude: 103.93981000 -> 103.940
- `911` Blk 406, Bedok North Avenue 3
  - latitude: 1.32819900 -> 1.328
  - longitude: 103.93446000 -> 103.934
- `912` Blk 814,Tampines Street 81
  - latitude: 1.34729000 -> 1.347
  - longitude: 103.93665400 -> 103.937
- `913` Blk 648A,Tampines Street 62
  - latitude: 1.36822700 -> 1.368
  - longitude: 103.94093800 -> 103.941
- `914` Blk 899A,Tampines Street 81
  - latitude: 1.34623200 -> 1.346
  - longitude: 103.93520900 -> 103.935
- `915` Blk 706,Tampines Street 71
  - latitude: 1.35761800 -> 1.358
  - longitude: 103.93757100 -> 103.938
- `916` Blk 806,Tampines Avenue 4
  - latitude: 1.34548600 -> 1.345
  - longitude: 103.93715100 -> 103.937
- `917` Blk 926,Tampines Street 91
  - latitude: 1.34587500 -> 1.346
  - longitude: 103.94063700 -> 103.941
- `918` Blk 461,Tampines Street 44
  - latitude: 1.35887900 -> 1.359
  - longitude: 103.95432700 -> 103.954
- `919` Blk 145,Tampines Street 12
  - latitude: 1.34879200 -> 1.349
  - longitude: 103.94373700 -> 103.944
- `920` Blk 734,Tampines Street 71
  - latitude: 1.35820200 -> 1.358
  - longitude: 103.93435700 -> 103.934
- `921` Blk 638A,Tampines Street 62
  - latitude: 1.36409000 -> 1.364
  - longitude: 103.94488600 -> 103.945
- `922` Blk 740 Tampines Street 72
  - latitude: 1.35941900 -> 1.359
  - longitude: 103.93291500 -> 103.933
- `923` Blk 762, Bedok Reservoir View
  - latitude: 1.33632200 -> 1.336
  - longitude: 103.93445100 -> 103.934
- `924` Blk 491D,Tampines Street 45
  - latitude: 1.36250700 -> 1.363
  - longitude: 103.95478900 -> 103.955
- `925` Blk 249, Tampines Street 21
  - latitude: 1.35182200 -> 1.352
  - longitude: 103.94869200 -> 103.949
- `926` Blk 53, Chai Chee Street
  - latitude: 1.32848600 -> 1.328
  - longitude: 103.91988200 -> 103.920
- `927` Blk 854,Tampines Street 82
  - latitude: 1.35303200 -> 1.353
  - longitude: 103.93657800 -> 103.937
- `928` Blk 808C, Chai Chee Road
  - latitude: 1.32786100 -> 1.328
  - longitude: 103.92403200 -> 103.924
- `929` Blk 2, Chai Chee Road
  - latitude: 1.32699000 -> 1.327
  - longitude: 103.92250000 -> 103.922
- `930` Blk 495D,Tampines Street 43
  - latitude: 1.36370400 -> 1.364
  - longitude: 103.95202000 -> 103.952
- `931` Blk 80, Bedok North Road
  - latitude: 1.32848700 -> 1.328
  - longitude: 103.94060400 -> 103.941
- `932` Blk 183, Bedok North Road
  - latitude: 1.32644100 -> 1.326
  - longitude: 103.94185800 -> 103.942
- `933` Blk 264, Tampines Street 21
  - latitude: 1.35287000 -> 1.353
  - longitude: 103.95113300 -> 103.951
- `934` Blk 451, Tampines Street 42
  - latitude: 1.35657200 -> 1.357
  - longitude: 103.95410700 -> 103.954
- `935` Blk 233, Tampines Street 21
  - latitude: 1.35637200 -> 1.356
  - longitude: 103.94794300 -> 103.948
- `936` Blk 137, Bedok North Avenue 3
  - latitude: 1.32882600 -> 1.329
  - longitude: 103.93554200 -> 103.936
- `937` Blk 384, Tampines Street 32
  - latitude: 1.35401300 -> 1.354
  - longitude: 103.95794100 -> 103.958
- `938` Blk 125, Tampines Street 11
  - latitude: 1.34619700 -> 1.346
  - longitude: 103.94992200 -> 103.950
- `939` Blk 403, Bedok North Avenue 3
  - latitude: 1.32979600 -> 1.330
  - longitude: 103.93384000 -> 103.934
- `940` Blk 44, Chai Chee Street
  - latitude: 1.32903900 -> 1.329
  - longitude: 103.92559200 -> 103.926
- `941` Blk 43, Chai Chee Street
  - latitude: 1.32836800 -> 1.328
  - longitude: 103.92554600 -> 103.926
- `942` Blk 932,Tampines Street 91
  - latitude: 1.34558800 -> 1.346
  - longitude: 103.93945500 -> 103.939
- `943` Blk 50, Chai Chee Street
  - latitude: 1.32938200 -> 1.329
  - longitude: 103.92245000 -> 103.922
- `944` Blk 352, Tampines Street 33
  - latitude: 1.35420100 -> 1.354
  - longitude: 103.96237300 -> 103.962
- `945` Blk 366, Tampines Street 34
  - latitude: 1.35778600 -> 1.358
  - longitude: 103.96139400 -> 103.961
- `946` Blk 259, Tampines Street 21
  - latitude: 1.35505600 -> 1.355
  - longitude: 103.94994900 -> 103.950
- `947` Blk 391, Tampines Avenue 7
  - latitude: 1.35569100 -> 1.356
  - longitude: 103.95784900 -> 103.958
- `948` Blk 492G,Tampines Street 45
  - latitude: 1.36425200 -> 1.364
  - longitude: 103.95513200 -> 103.955
- `954` Blk 99, Bedok North Avenue 4
  - latitude: 1.33387500 -> 1.334
  - longitude: 103.93947900 -> 103.939
- `955` Blk 42, Bedok South Road
  - latitude: 1.32153100 -> 1.322
  - longitude: 103.94070600 -> 103.941
- `958` Blk 108, Simei Street 1
  - latitude: 1.34303600 -> 1.343
  - longitude: 103.95102900 -> 103.951
- `959` Blk 107, Bedok North Road
  - latitude: 1.33238300 -> 1.332
  - longitude: 103.93628700 -> 103.936
- `960` Blk 226, Simei Street 4
  - latitude: 1.34261800 -> 1.343
  - longitude: 103.95698200 -> 103.957
- `961` Blk 125, Bedok North Road
  - latitude: 1.32885500 -> 1.329
  - longitude: 103.93912600 -> 103.939
- `962` Blk 233, Simei Street 4
  - latitude: 1.34407900 -> 1.344
  - longitude: 103.95633400 -> 103.956
- `963` Blk 626A,Tampines Street 61
  - latitude: 1.36252200 -> 1.363
  - longitude: 103.93965400 -> 103.940
- `964` Blk 134, Simei Street 1
  - latitude: 1.34808200 -> 1.348
  - longitude: 103.95561200 -> 103.956
- `965` Blk 167, Simei Lane
  - latitude: 1.34312500 -> 1.343
  - longitude: 103.95848100 -> 103.958
- `966` Blk 142, Simei Street 2
  - latitude: 1.34546400 -> 1.345
  - longitude: 103.95519100 -> 103.955
- `967` Blk 419, Bedok North Street 1
  - latitude: 1.32713400 -> 1.327
  - longitude: 103.92793200 -> 103.928
- `968` Blk 150, Simei Street 1
  - latitude: 1.34621800 -> 1.346
  - longitude: 103.95711700 -> 103.957
- `969` Blk 622B,Tampines Avenue 12
  - latitude: 1.36088700 -> 1.361
  - longitude: 103.94119600 -> 103.941
- `970` Blk 188A, Bedok North Street 4
  - latitude: 1.33163300 -> 1.332
  - longitude: 103.94144900 -> 103.941
- `971` Blk 842D,Tampines Street 82
  - latitude: 1.35062900 -> 1.351
  - longitude: 103.93761700 -> 103.938
- `972` Blk 272, Tampines Street 22
  - latitude: 1.34909700 -> 1.349
  - longitude: 103.95017300 -> 103.950
- `975` Blk 37, Bedok South Avenue 2
  - latitude: 1.32197200 -> 1.322
  - longitude: 103.93997700 -> 103.940
- `978` Blk 96, Bedok North Avenue 4
  - latitude: 1.33322400 -> 1.333
  - longitude: 103.94033800 -> 103.940
- `979` Blk 155, Simei Road
  - latitude: 1.34476100 -> 1.345
  - longitude: 103.95848800 -> 103.958
- `980` Blk 425, Bedok North Road
  - latitude: 1.32939400 -> 1.329
  - longitude: 103.92901800 -> 103.929
- `981` Blk 52, New Upper Changi Road
  - latitude: 1.32386100 -> 1.324
  - longitude: 103.94219300 -> 103.942
- `985` Blk 82, Bedok North Road
  - latitude: 1.32950100 -> 1.330
  - longitude: 103.94046400 -> 103.940
- `986` Blk 894A,Tampines Street 81
  - latitude: 1.34812100 -> 1.348
  - longitude: 103.93184900 -> 103.932
- `987` Blk 832,Tampines Street 82
  - latitude: 1.35011900 -> 1.350
  - longitude: 103.93532600 -> 103.935
- `988` Blk 52, Cassia Crescent
  - latitude: 1.31061500 -> 1.311
  - longitude: 103.88529700 -> 103.885
- `989` Blk 56, Cassia Crescent
  - latitude: 1.31029300 -> 1.310
  - longitude: 103.88327800 -> 103.883
- `990` Blk 38C, Eunos Road 2
  - latitude: 1.32017900 -> 1.320
  - longitude: 103.90045400 -> 103.900
- `991` Blk 109, Aljunied Crescent
  - latitude: 1.31949100 -> 1.319
  - longitude: 103.88444800 -> 103.884
- `992` Blk 60, Marine Drive
  - latitude: 1.30342300 -> 1.303
  - longitude: 103.90858800 -> 103.909
- `993` Blk 133, Geylang East Avenue 1
  - latitude: 1.31646300 -> 1.316
  - longitude: 103.88546600 -> 103.885
- `994` Blk 113, Simei Street 1
  - latitude: 1.34280800 -> 1.343
  - longitude: 103.94986100 -> 103.950
- `995` Blk 106, Simei Street 1
  - latitude: 1.34193100 -> 1.342
  - longitude: 103.95088100 -> 103.951
</details>

<details>
<summary><b>2026-09-05</b> · 1,299 locations · +1 · −1</summary>

- Snapshot size: **1299** locations
- Added: **1**
- Removed: **1**
- Changed: **0**

Added
- `3061` FairPrice Punggol Waterway Point (postal: 828761, status: RUNNING)

Removed
- `1137` FairPrice Punggol Waterway Point (postal: 828761, status: OFFLINE)
</details>

<details>
<summary><b>2026-09-04</b> · 1,299 locations · +12 · ±4</summary>

- Snapshot size: **1299** locations
- Added: **12**
- Removed: **0**
- Changed: **4**

Added
- `1137` FairPrice Punggol Waterway Point (postal: 828761, status: OFFLINE)
- `2345` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `2806` SHENG SIONG BLK 602A TAMPINES AVENUE 9 (postal: 521602, status: RUNNING)
- `2871` FairPrice Finest Sceneca Square (postal: 468456, status: RUNNING)
- `3016` 509 Serangoon North Ave 4 (postal: 550509, status: RUNNING)
- `3030` 467C Yishun Ave 6 (postal: 763467, status: RUNNING)
- `3031` 504 Yishun St 51, Singapore 760504 (postal: 760504, status: RUNNING)
- `3034` 406 Yishun Ave 6, Singapore 760406 (postal: 760406, status: FULL)
- `3035` 431A Yishun Ave 1, Singapore 761431 (postal: 761431, status: RUNNING)
- `3036` 439 Yishun Ave 11, Singapore 760439 (postal: 760439, status: RUNNING)
- `3068` Resorts World Sentosa (postal: 098269, status: RUNNING)
- `3071` Block 511 Ang Mo Kio Ave 8 (postal: 560511, status: RUNNING)

Changed
- `2903` Block 118B Jalan Membina
  - latitude: 1.28143700 -> 1.28179700
  - longitude: 103.82615400 -> 103.82602500
- `3043` 996C Buangkok Crescent
  - supplierId: null -> TOMRA001
- `3044` 531 Serangoon North Ave 4
  - supplierId: null -> TOMRA001
- `3045` 526 Serangoon North Ave 4
  - supplierId: null -> TOMRA001
</details>

<details>
<summary><b>2026-09-03</b> · 1,287 locations · ±4</summary>

- Snapshot size: **1287** locations
- Added: **0**
- Removed: **0**
- Changed: **4**

Changed
- `2348` SHENG SIONG BLK 872C TAMPINES STREET 86
  - locationName: SHENG SIONG BLK 872C TAMPINES STREET 86  -> SHENG SIONG BLK 872C TAMPINES STREET 86
- `2738` Mei Chin Road Market
  - latitude: 1.29327800 -> 1.29343800
  - longitude: 103.81741600 -> 103.80291400
- `2759` Toa Payoh Lorong 4 Blk 94
  - latitude: 1.33892600 -> 1.33945900
  - locationName: Toa Payoh Lorong 4 Blk 94 Hawker Centre -> Toa Payoh Lorong 4 Blk 94
  - longitude: 103.84992600 -> 103.84933900
- `2774` 445 Clementi Avenue 3
  - latitude: 1.31290600 -> 1.31295400
  - longitude: 103.76158700 -> 103.76417500
</details>

<details>
<summary><b>2026-09-02</b> · 1,287 locations · +4</summary>

- Snapshot size: **1287** locations
- Added: **4**
- Removed: **0**
- Changed: **0**

Added
- `3060` Blk 145, Bedok Reservoir Road (postal: 470145, status: RUNNING)
- `3067` Nanyang Academy of Fine Arts (postal: 189655, status: RUNNING)
- `3069` Lasalle College of the Arts (postal: 187940, status: RUNNING)
- `3070` Block 104B Ang Mo Kio St 11 (postal: 560104, status: RUNNING)
</details>

<details>
<summary><b>2026-09-01</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-08-31</b> · 1,283 locations · +4</summary>

- Snapshot size: **1283** locations
- Added: **4**
- Removed: **0**
- Changed: **0**

Added
- `3056` 868 Yishun Street 81, Singapore 760868 (postal: 760868, status: RUNNING)
- `3057` 627 Yishun Street 61, Singapore 760627 (postal: 760627, status: RUNNING)
- `3058` 259 Yishun Street 22, Singapore 760259 (postal: 760259, status: RUNNING)
- `3059` 383A Yishun Ave 6, Singapore 761383 (postal: 761383, status: RUNNING)
</details>

<details>
<summary><b>2026-08-30</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-08-29</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-08-28</b> · 1,279 locations · +13 · −1 · ±6</summary>

- Snapshot size: **1279** locations
- Added: **13**
- Removed: **1**
- Changed: **6**

Added
- `2358` ONE Supermarket Pte. Ltd. (postal: 522201, status: RUNNING)
- `2389` Grindelwald Supermarket (postal: 120108, status: OFFLINE)
- `2396` Isetan Scotts Supermarket (postal: 238868, status: RUNNING)
- `2450` Sparrows 206 Bedok North Street 1 (postal: 460206, status: RUNNING)
- `2552` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: RUNNING)
- `2556` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)
- `2559` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `2562` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2565` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `2566` Ajmal Trading Group - Jalan Papan Aspri Westlite (postal: 619421, status: OFFLINE)
- `2568` Redman by Phoon Huat (postal: 677743, status: RUNNING)
- `2671` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: ERROR)

Removed
- `2672` SHENG SIONG THOMSON IMPERIAL COURT (postal: 574424, status: RUNNING)

Changed
- `1117` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `1210` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.38557900
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90250300
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `1964` Thai Supermarket Pte Ltd
  - address: 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511 -> 12 Kallang Avenue, #01-20, 339511
  - locationName: Thai Supermarket Aperia Mall -> Thai Supermarket Pte Ltd
  - longitude: 103.86430200 -> 103.86432000
- `2271` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `2496` ACE MARKETPLACE (86RC)
  - address: 86 Redhill Cl, #01-610 Redhill Mall, Singapore 150086, 150086 -> 86 Redhill Close, #01-610, 150086
  - locationName: Sheng Ho Redhill Mall -> ACE MARKETPLACE (86RC)
  - longitude: 103.81867000 -> 103.81867800
- `2807` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
</details>

<details>
<summary><b>2026-08-27</b> · 1,267 locations · +1</summary>

- Snapshot size: **1267** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `2256` FORTUNE SUPERMARKET 463 (postal: 750463, status: FULL)
</details>

<details>
<summary><b>2026-08-26</b> · 1,266 locations · +9 · −1 · ±1</summary>

- Snapshot size: **1266** locations
- Added: **9**
- Removed: **1**
- Changed: **1**

Added
- `2979` 801 West Coast Crescent (postal: 120801, status: RUNNING)
- `2990` 238B Boon Lay Drive (postal: 642238, status: RUNNING)
- `2991` 991B Upper Jurong Rd (postal: 632991, status: RUNNING)
- `2992` 183C Boon Lay Avenue (postal: 643183, status: RUNNING)
- `3003` 706 Jurong West Street 71 (postal: 640706, status: RUNNING)
- `3013` 708 Clementi West Street 2 (postal: 120708, status: offline)
- `3043` 996C Buangkok Crescent (postal: 536996, status: MAINTENANCE)
- `3044` 531 Serangoon North Ave 4 (postal: 550531, status: UNKNOWN)
- `3045` 526 Serangoon North Ave 4 (postal: 550526, status: UNKNOWN)

Removed
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)

Changed
- `1176` Singapore Polytechnic (SP) T11A Building
  - address: 1 Maritime Square, #03-23 / 38 HarbourFront Centre, 099253 -> 500 Dover Rd, 139651
  - latitude: 1.26420000 -> 1.31033000
  - locationName: Don Don Donki (HarbourFront Centre) -> Singapore Polytechnic (SP) T11A Building
  - longitude: 103.82030000 -> 103.77916000
  - postalCode: 099253 -> 139651
  - zipcode: 099253 -> 139651
</details>

<details>
<summary><b>2026-08-25</b> · 1,258 locations · −1 · ±1</summary>

- Snapshot size: **1258** locations
- Added: **0**
- Removed: **1**
- Changed: **1**

Removed
- `2559` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)

Changed
- `2747` 672A Klang Lane - Little India
  - latitude: 1.30881800 -> 1.30850300
  - locationName: 672 Klang Lane - Little India -> 672A Klang Lane - Little India
  - longitude: 103.85268300 -> 103.85243100
</details>

<details>
<summary><b>2026-08-24</b> · 1,259 locations · +2 · −3 · ±1</summary>

- Snapshot size: **1259** locations
- Added: **2**
- Removed: **3**
- Changed: **1**

Added
- `2558` 7 Seven Trichy Supermarket North Coast Lodge (postal: 756992, status: FULL)
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)

Removed
- `2566` Ajmal Trading Group - Jalan Papan Aspri Westlite (postal: 619421, status: OFFLINE)
- `2568` Redman by Phoon Huat (postal: 677743, status: RUNNING)
- `2671` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: RUNNING)

Changed
- `1210` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.38557900 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90250300 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
</details>

<details>
<summary><b>2026-08-23</b> · 1,260 locations · +6 · −1</summary>

- Snapshot size: **1260** locations
- Added: **6**
- Removed: **1**
- Changed: **0**

Added
- `3037` 212 Ang Mo Kio Ave 3 (postal: 560212, status: RUNNING)
- `3038` Block 203 Ang Mo Kio Ave 3 (postal: 560203, status: RUNNING)
- `3039` Block 536 Ang Mo Kio Ave 10 (postal: 560536, status: RUNNING)
- `3040` Block 953 Hougang Ave 9 (postal: 530953, status: RUNNING)
- `3041` Block 920 Hougang Ave 9 (postal: 530920, status: RUNNING)
- `3042` 442 Ang Mo Kio Avenue 10 (postal: 560442, status: RUNNING)

Removed
- `2552` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: RUNNING)
</details>

<details>
<summary><b>2026-08-22</b> · 1,255 locations · −2 · ±1</summary>

- Snapshot size: **1255** locations
- Added: **0**
- Removed: **2**
- Changed: **1**

Removed
- `2558` 7 Seven Trichy Supermarket North Coast Lodge (postal: 756992, status: RUNNING)
- `2560` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: FULL)

Changed
- `2271` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
</details>

<details>
<summary><b>2026-08-21</b> · 1,257 locations · +8 · −3 · ±3</summary>

- Snapshot size: **1257** locations
- Added: **8**
- Removed: **3**
- Changed: **3**

Added
- `2552` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: ERROR)
- `2559` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `2671` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: RUNNING)
- `3022` Block 400C Fernvale Ln (postal: 793400, status: RUNNING)
- `3023` Block 410A Fernvale Rd (postal: 791410, status: RUNNING)
- `3024` Block 538 Hougang Ave 8 (postal: 530538, status: RUNNING)
- `3025` Blk 648 Hougang Ave 8 (postal: 530648, status: RUNNING)
- `3026` Block 413B Fernvale Link (postal: 792413, status: RUNNING)

Removed
- `2256` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `2556` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)
- `2565` Phan Nee #01-02 Sungei Tengah Lodge (postal: 698924, status: OFFLINE)

Changed
- `1117` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
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
