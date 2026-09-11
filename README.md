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

Each day's entry below is collapsed by default — click a date to expand it. The changelog is rebuilt from the git history of `data/latest.json` (`node scripts/regenerate_changelog.mjs`), so reformatting it is just editing that script and re-running it. It matches locations by `serialNumber` (falling back to `id`), and ignores `distance`, `rvm_last_conn`, `updatedAt`, and `status`, so it only highlights removals and other meaningful field changes. If a day has no meaningful changes, it shows `No changes.`

<!-- CHANGELOG:START -->
<details>
<summary><b>2026-09-12</b> · 1,308 locations · +1</summary>

- Snapshot size: **1308** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `20261515326` Changi Lodge 2 (postal: 498736, status: RUNNING)
</details>

<details>
<summary><b>2026-09-11</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-09-10</b> · 1,307 locations · ±2</summary>

- Snapshot size: **1307** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `20254508916` FairPrice SingPost Centre
  - createdAt: 2026-03-25T21:45:07.535Z -> 2026-09-09T01:00:30.705Z
  - groupId: [47] -> []
  - id: 2459 -> 3081
  - rvmOpeningHours: Mon - Sun:  08:00 AM - 11:00 PM -> null
  - supplierId: RVMS001 -> null
- `SGRVM0125` FairPrice 498 Jurong West St 41
  - createdAt: 2026-03-25T21:45:01.282Z -> 2026-09-09T05:10:03.051Z
  - groupId: [39] -> []
  - id: 2190 -> 3080
  - rvmOpeningHours: Mon - Sun:  24 Hrs -> null
</details>

<details>
<summary><b>2026-09-09</b> · 1,307 locations · +1 · ±1306</summary>

- Snapshot size: **1307** locations
- Added: **1**
- Removed: **0**
- Changed: **1306**

Added
- `B5052937` SHENG SIONG THOMSON IMPERIAL COURT (postal: 574424, status: RUNNING)

Changed
- `20254408746` Blk 626, Pasir Ris Drive 3
  - latitude: 1.380 -> 1.379828
  - longitude: 103.941 -> 103.940950
- `20254408763` Blk 708, Pasir Ris Drive 10
  - latitude: 1.381 -> 1.380955
  - longitude: 103.939 -> 103.938592
- `20254408774` Blk 473, Pasir Ris Drive 6
  - latitude: 1.375 -> 1.374509
  - longitude: 103.957 -> 103.957351
- `20254408775` Blk 717, Pasir Ris Street 72
  - latitude: 1.383 -> 1.382775
  - longitude: 103.937 -> 103.936540
- `20254408776` Blk 701, Pasir Ris Drive 10
  - latitude: 1.380 -> 1.379991
  - longitude: 103.938 -> 103.937891
- `20254408777` Blk 643, Pasir Ris Drive 10
  - latitude: 1.378 -> 1.377722
  - longitude: 103.938 -> 103.938100
- `20254408778` Blk 638, Pasir Ris Drive 1
  - latitude: 1.376 -> 1.376289
  - longitude: 103.941 -> 103.940948
- `20254408779` Blk 641, Pasir Ris Drive 1
  - latitude: 1.376 -> 1.376464
  - longitude: 103.940 -> 103.939561
- `20254408780` Blk 602, Elias Road
  - latitude: 1.377 -> 1.377398
  - longitude: 103.944 -> 103.943991
- `20254408781` Blk 585, Pasir Ris Street 53
  - latitude: 1.375 -> 1.375379
  - longitude: 103.947 -> 103.947415
- `20254408782` Blk 159,Tampines Street 12
  - latitude: 1.351 -> 1.351234
  - longitude: 103.947 -> 103.946566
- `20254408783` Blk 356D, Ubi Road 3
  - latitude: 1.327 -> 1.326912
  - longitude: 103.900 -> 103.900082
- `20254408784` Blk 534, Pasir Ris Drive 1
  - latitude: 1.370 -> 1.370436
  - longitude: 103.951 -> 103.950653
- `20254408785` Blk 520, Pasir Ris Street 52
  - latitude: 1.373 -> 1.373485
  - longitude: 103.945 -> 103.944809
- `20254408786` Blk 516, Pasir Ris Street 52
  - latitude: 1.374 -> 1.374103
  - longitude: 103.943 -> 103.943086
- `20254508877` Blk 423, Pasir Ris Drive 6
  - latitude: 1.370 -> 1.370134
  - longitude: 103.955 -> 103.954623
- `20254508878` Blk 408, Pasir Ris Drive 6
  - latitude: 1.373 -> 1.373352
  - longitude: 103.953 -> 103.953407
- `20254508879` Blk 108, Lengkong Tiga
  - latitude: 1.325 -> 1.324655
  - longitude: 103.910 -> 103.910244
- `20254508880` Blk 429, Pasir Ris Drive 6
  - latitude: 1.370 -> 1.370086
  - longitude: 103.957 -> 103.956706
- `20254508881` Blk 725, Pasir Ris Street 72
  - latitude: 1.381 -> 1.381415
  - longitude: 103.936 -> 103.935717
- `20254508882` Blk 72, Marine Drive
  - latitude: 1.304 -> 1.304247
  - longitude: 103.908 -> 103.908370
- `20254508883` Blk 458, Pasir Ris Drive 4
  - latitude: 1.371 -> 1.371461
  - longitude: 103.960 -> 103.959558
- `20254508884` Blk 257, Pasir Ris Street 21
  - latitude: 1.367 -> 1.367146
  - longitude: 103.964 -> 103.963699
- `20254508885` Blk 479, Pasir Ris Drive 4
  - latitude: 1.375 -> 1.375174
  - longitude: 103.959 -> 103.959131
- `20254508886` Blk 232, Pasir Ris Drive 4
  - latitude: 1.375 -> 1.374647
  - longitude: 103.962 -> 103.961678
- `20254508887` Blk 225, Pasir Ris Street 21
  - latitude: 1.371 -> 1.371205
  - longitude: 103.961 -> 103.961206
- `20254508888` Blk 756, Pasir Ris Street 71
  - latitude: 1.378 -> 1.377878
  - longitude: 103.933 -> 103.933500
- `20254508889` Blk 209, Pasir Ris Street 21
  - latitude: 1.366 -> 1.366227
  - longitude: 103.962 -> 103.961897
- `20254508890` Blk 275, Pasir Ris Street 21
  - latitude: 1.364 -> 1.364302
  - longitude: 103.965 -> 103.964734
- `20254508891` Blk 160, Pasir Ris Street 13
  - latitude: 1.364 -> 1.364086
  - longitude: 103.963 -> 103.962532
- `20254508892` Blk 747, Pasir Ris Street 71
  - latitude: 1.379 -> 1.379182
  - longitude: 103.935 -> 103.934695
- `20254508893` Blk 501, Pasir Ris Street 52
  - latitude: 1.376 -> 1.376228
  - longitude: 103.946 -> 103.945964
- `20254508894` Blk 497A, Tampines Street 45
  - latitude: 1.359 -> 1.359312
  - longitude: 103.959 -> 103.958616
- `20254508895` Blk 485A, Tampines Avenue 9
  - latitude: 1.360 -> 1.360022
  - longitude: 103.956 -> 103.955737
- `20254508896` Blk 419, Pasir Ris Drive 6
  - latitude: 1.372 -> 1.371633
  - longitude: 103.955 -> 103.954625
- `20254508897` Blk 771, Pasir Ris Street 71
  - latitude: 1.376 -> 1.375610
  - longitude: 103.936 -> 103.936483
- `20254508898` Blk 742 Pasir Ris Street 71
  - latitude: 1.377 -> 1.377087
  - longitude: 103.936 -> 103.936056
- `20254508899` Blk 481, Pasir Ris Drive 4
  - latitude: 1.374 -> 1.374080
  - longitude: 103.959 -> 103.958775
- `20254508900` Blk 461,Tampines Street 44
  - latitude: 1.359 -> 1.358879
  - longitude: 103.954 -> 103.954327
- `20254508901` Blk 706,Tampines Street 71
  - latitude: 1.358 -> 1.357618
  - longitude: 103.938 -> 103.937571
- `20254508902` Blk 740 Tampines Street 72
  - latitude: 1.359 -> 1.359419
  - longitude: 103.933 -> 103.932915
- `20254508903` Blk 734,Tampines Street 71
  - latitude: 1.358 -> 1.358202
  - longitude: 103.934 -> 103.934357
- `20254508904` Blk 626A,Tampines Street 61
  - latitude: 1.363 -> 1.362522
  - longitude: 103.940 -> 103.939654
- `20254508905` Blk 37, Bedok South Avenue 2
  - latitude: 1.322 -> 1.321972
  - longitude: 103.940 -> 103.939977
- `20254508906` Blk 622B,Tampines Avenue 12
  - latitude: 1.361 -> 1.360887
  - longitude: 103.941 -> 103.941196
- `20254508907` Blk 496D,Tampines Avenue 9
  - latitude: 1.362 -> 1.361588
  - longitude: 103.950 -> 103.950069
- `20254508908` Blk 842D,Tampines Street 82
  - latitude: 1.351 -> 1.350629
  - longitude: 103.938 -> 103.937617
- `20254508909` Blk 413, Bedok North Avenue 2
  - latitude: 1.330 -> 1.330281
  - longitude: 103.931 -> 103.931081
- `20254508910` Blk 123, Geylang East Avenue 1
  - latitude: 1.318 -> 1.318132
  - longitude: 103.885 -> 103.885363
- `20254508911` FairPrice Old Airport Hawker Centre
  - groupId: undefined -> [41]
  - latitude: 1.308 -> 1.308463
  - longitude: 103.886 -> 103.886231
- `20254508912` Blk 82, Bedok North Road
  - latitude: 1.330 -> 1.329501
  - longitude: 103.940 -> 103.940464
- `20254508913` Blk 894A,Tampines Street 81
  - latitude: 1.348 -> 1.348121
  - longitude: 103.932 -> 103.931849
- `20254508914` Blk 832,Tampines Street 82
  - latitude: 1.350 -> 1.350119
  - longitude: 103.935 -> 103.935326
- `20254508915` Blk 60, Marine Drive
  - latitude: 1.303 -> 1.303423
  - longitude: 103.909 -> 103.908588
- `20254508916` FairPrice SingPost Centre
  - groupId: undefined -> [47]
  - latitude: 1.319 -> 1.318994
  - longitude: 103.894 -> 103.894460
- `20254508917` FairPrice New Upper Changi Road
  - groupId: undefined -> [39]
  - latitude: 1.325 -> 1.324679
  - longitude: 103.941 -> 103.941460
- `20254508994` Blk 148, Pasir Ris Street 13
  - latitude: 1.362 -> 1.362083
  - longitude: 103.962 -> 103.962021
- `20254508995` Blk 298, Tampines Street 22
  - latitude: 1.352 -> 1.351725
  - longitude: 103.955 -> 103.954740
- `20254508996` Blk 187, Pasir Ris Street 11
  - latitude: 1.365 -> 1.364642
  - longitude: 103.959 -> 103.959424
- `20254508997` Blk 555, Pasir Ris Street 51
  - latitude: 1.368 -> 1.368100
  - longitude: 103.952 -> 103.951947
- `20254508998` Blk 105, Pasir Ris Street 12
  - latitude: 1.369 -> 1.368540
  - longitude: 103.957 -> 103.957228
- `20254508999` Blk 132, Pasir Ris Street 11
  - latitude: 1.366 -> 1.366157
  - longitude: 103.956 -> 103.956082
- `20254509000` Blk 120, Pasir Ris Street 11
  - latitude: 1.367 -> 1.367294
  - longitude: 103.954 -> 103.954306
- `20254509001` Blk 283, Tampines Street 22
  - latitude: 1.348 -> 1.348414
  - longitude: 103.953 -> 103.952711
- `20254509002` Blk 560, Pasir Ris Street 51
  - latitude: 1.367 -> 1.366733
  - longitude: 103.950 -> 103.950438
- `20254509003` Blk 564, Pasir Ris Street 51
  - latitude: 1.368 -> 1.368401
  - longitude: 103.950 -> 103.949848
- `20254509004` Blk 345, Tampines Street 33
  - latitude: 1.352 -> 1.351830
  - longitude: 103.962 -> 103.962289
- `20254509005` Blk 526A, Pasir Ris Street 51
  - latitude: 1.368 -> 1.367526
  - longitude: 103.947 -> 103.947319
- `20254509006` Blk 191, Pasir Ris Street 12
  - latitude: 1.366 -> 1.365943
  - longitude: 103.959 -> 103.958702
- `20254509007` Blk 108, Tampines Street 11
  - latitude: 1.348 -> 1.347877
  - longitude: 103.949 -> 103.948573
- `20254509008` Blk 637, Bedok Reservoir Road
  - latitude: 1.331 -> 1.331076
  - longitude: 103.904 -> 103.904034
- `20254509013` Blk 768, Pasir Ris Street 71
  - latitude: 1.375 -> 1.375164
  - longitude: 103.935 -> 103.935339
- `20254509016` Blk 323, Tampines Street 33
  - latitude: 1.352 -> 1.351801
  - longitude: 103.958 -> 103.958282
- `20254609012` Blk 289, Tampines Street 22
  - latitude: 1.350 -> 1.349608
  - longitude: 103.955 -> 103.955359
- `20254609014` Blk 249, Pasir Ris Street 21
  - latitude: 1.370 -> 1.370193
  - longitude: 103.963 -> 103.963326
- `20254609015` Blk 165,Tampines Street 12
  - latitude: 1.349 -> 1.349292
  - longitude: 103.946 -> 103.946122
- `20254609017` Blk 103, Tampines Street 11
  - latitude: 1.348 -> 1.347656
  - longitude: 103.946 -> 103.946448
- `20254609018` Blk 761, Pasir Ris Street 71
  - latitude: 1.377 -> 1.376560
  - longitude: 103.933 -> 103.933397
- `20254609019` Blk 303, Tampines Street 32
  - latitude: 1.352 -> 1.351973
  - longitude: 103.956 -> 103.955855
- `20254609020` Blk 141, Pasir Ris Street 11
  - latitude: 1.364 -> 1.364175
  - longitude: 103.959 -> 103.958933
- `20254609021` Blk 782, Pasir Ris Street 71
  - latitude: 1.373 -> 1.373377
  - longitude: 103.939 -> 103.938893
- `20254609022` Blk 524A, Pasir Ris Street 51
  - latitude: 1.371 -> 1.371383
  - longitude: 103.948 -> 103.947668
- `20254609023` Blk 207, Tampines Street 21
  - latitude: 1.351 -> 1.351321
  - longitude: 103.952 -> 103.952108
- `20254609024` Blk 765, Bedok Reservoir View
  - latitude: 1.336 -> 1.336001
  - longitude: 103.936 -> 103.935669
- `20254609025` Blk 74, Marine Drive
  - latitude: 1.304 -> 1.303615
  - longitude: 103.907 -> 103.907214
- `20254609026` Blk 47, Marine Crescent
  - latitude: 1.306 -> 1.305716
  - longitude: 103.912 -> 103.912368
- `20254609065` Blk 406,Tampines Street 41
  - latitude: 1.358 -> 1.358141
  - longitude: 103.946 -> 103.945919
- `20254609066` Blk 770, Bedok Reservoir View
  - latitude: 1.336 -> 1.336041
  - longitude: 103.938 -> 103.938327
- `20254609067` Blk 490B, Tampines Street 45
  - latitude: 1.363 -> 1.362560
  - longitude: 103.956 -> 103.956210
- `20254609068` Blk 449,Tampines Street 42
  - latitude: 1.357 -> 1.357065
  - longitude: 103.951 -> 103.951055
- `20254609069` Blk 78, Bedok North Road
  - latitude: 1.327 -> 1.327268
  - longitude: 103.941 -> 103.940910
- `20254609070` Blk 409, Bedok North Avenue 2
  - latitude: 1.328 -> 1.328111
  - longitude: 103.933 -> 103.932917
- `20254609071` Blk 124, Simei Street 1
  - latitude: 1.346 -> 1.346276
  - longitude: 103.953 -> 103.953278
- `20254609072` Blk 498A, Tampines Street 45
  - latitude: 1.362 -> 1.361540
  - longitude: 103.958 -> 103.958161
- `20254609073` Blk 130, Bedok North Street 2
  - latitude: 1.327 -> 1.327106
  - longitude: 103.937 -> 103.936654
- `20254609074` Blk 135, Simei Street 1
  - latitude: 1.348 -> 1.347932
  - longitude: 103.957 -> 103.957136
- `20254609075` Blk 229, Tampines Street 23
  - latitude: 1.356 -> 1.355900
  - longitude: 103.954 -> 103.953963
- `20254609077` Blk 886,Tampines Street 83
  - latitude: 1.351 -> 1.351229
  - longitude: 103.932 -> 103.932022
- `20254609078` Blk 240, Tampines Street 21
  - latitude: 1.355 -> 1.355006
  - longitude: 103.947 -> 103.947127
- `20254609079` Blk 216, Tampines Street 23
  - latitude: 1.354 -> 1.354056
  - longitude: 103.953 -> 103.952876
- `20254609086` Blk 421, Bedok North Road
  - latitude: 1.328 -> 1.328365
  - longitude: 103.929 -> 103.929006
- `20254609087` Blk 64, Marine Drive
  - latitude: 1.302 -> 1.301955
  - longitude: 103.909 -> 103.909174
- `20254609088` Blk 201, Bedok North Street 1
  - latitude: 1.326 -> 1.326058
  - longitude: 103.928 -> 103.928398
- `20254609089` Blk 807A, Chai Chee Road
  - latitude: 1.327 -> 1.327156
  - longitude: 103.923 -> 103.923175
- `20254609090` Blk 113, Simei Street 1
  - latitude: 1.343 -> 1.342808
  - longitude: 103.950 -> 103.949861
- `20254609091` Blk 55, Chai Chee Drive
  - latitude: 1.327 -> 1.327172
  - longitude: 103.919 -> 103.919338
- `20254609092` Blk 426 Tampines Street 41
  - latitude: 1.360 -> 1.359568
  - longitude: 103.948 -> 103.947962
- `20254609093` Blk 230D, Tampines Street 24
  - latitude: 1.356 -> 1.356113
  - longitude: 103.952 -> 103.951516
- `20254609094` Blk 633,Tampines North Drive 2
  - latitude: 1.366 -> 1.365502
  - longitude: 103.942 -> 103.941664
- `20254609095` Blk 94B, Bedok North Avenue 4
  - latitude: 1.334 -> 1.334020
  - longitude: 103.943 -> 103.942895
- `20254609096` Blk 610C,Tampines North Drive 1
  - latitude: 1.364 -> 1.364489
  - longitude: 103.935 -> 103.935430
- `20254609097` Blk 862,Tampines Street 83
  - latitude: 1.355 -> 1.354664
  - longitude: 103.936 -> 103.936469
- `20254609098` Blk 641B,Tampines Street 62
  - latitude: 1.367 -> 1.367461
  - longitude: 103.944 -> 103.943686
- `20254609099` Blk 662C,Tampines Street 64
  - latitude: 1.370 -> 1.369674
  - longitude: 103.934 -> 103.933825
- `20254609100` Blk 721,Tampines Street 71
  - latitude: 1.360 -> 1.360078
  - longitude: 103.936 -> 103.936343
- `20254609101` Blk 876C,Tampines Avenue 8
  - latitude: 1.353 -> 1.353337
  - longitude: 103.930 -> 103.930071
- `20254609102` Blk 660,Tampines Street 64
  - latitude: 1.368 -> 1.367721
  - longitude: 103.934 -> 103.933898
- `20254609103` Blk 631B,Tampines North Drive 2
  - latitude: 1.363 -> 1.362952
  - longitude: 103.943 -> 103.942545
- `20254609104` Blk 871C,Tampines Street 86
  - latitude: 1.357 -> 1.356827
  - longitude: 103.931 -> 103.931452
- `20254609105` Blk 648A,Tampines Street 62
  - latitude: 1.368 -> 1.368227
  - longitude: 103.941 -> 103.940938
- `20254609106` Blk 603A,Tampines Avenue 9
  - latitude: 1.361 -> 1.360939
  - longitude: 103.935 -> 103.935292
- `20254609107` Blk 117, Bedok North Road
  - latitude: 1.331 -> 1.330649
  - longitude: 103.939 -> 103.938520
- `20254609108` Blk 635B,Tampines North Drive 2
  - latitude: 1.367 -> 1.366929
  - longitude: 103.940 -> 103.939810
- `20254609109` Blk 406, Bedok North Avenue 3
  - latitude: 1.328 -> 1.328199
  - longitude: 103.934 -> 103.934460
- `20254609110` Blk 319, Ubi Avenue 1
  - latitude: 1.328 -> 1.328208
  - longitude: 103.903 -> 103.903477
- `20254609111` Blk 814,Tampines Street 81
  - latitude: 1.347 -> 1.347290
  - longitude: 103.937 -> 103.936654
- `20254609112` Blk 911,Tampines Street 91
  - latitude: 1.350 -> 1.349904
  - longitude: 103.940 -> 103.939856
- `20254609113` Blk 899A,Tampines Street 81
  - latitude: 1.346 -> 1.346232
  - longitude: 103.935 -> 103.935209
- `20254609114` Blk 61, Chai Chee Road
  - latitude: 1.325 -> 1.325090
  - longitude: 103.921 -> 103.920749
- `20254609115` Blk 115, Lengkong Tiga
  - latitude: 1.323 -> 1.323104
  - longitude: 103.911 -> 103.911347
- `20254609231` Blk 330, Ubi Avenue 1
  - latitude: 1.327 -> 1.326548
  - longitude: 103.904 -> 103.904139
- `20254609232` Blk 104, Lengkong Tiga
  - latitude: 1.326 -> 1.325839
  - longitude: 103.910 -> 103.909919
- `20254609233` Blk 806,Tampines Avenue 4
  - latitude: 1.345 -> 1.345486
  - longitude: 103.937 -> 103.937151
- `20254609234` Blk 926,Tampines Street 91
  - latitude: 1.346 -> 1.345875
  - longitude: 103.941 -> 103.940637
- `20254609235` Blk 145,Tampines Street 12
  - latitude: 1.349 -> 1.348792
  - longitude: 103.944 -> 103.943737
- `20254609236` Blk 954C,Tampines Street 96
  - latitude: 1.342 -> 1.342494
  - longitude: 103.937 -> 103.937082
- `20254609237` Blk 638A,Tampines Street 62
  - latitude: 1.364 -> 1.364090
  - longitude: 103.945 -> 103.944886
- `20254609238` Blk 249, Tampines Street 21
  - latitude: 1.352 -> 1.351822
  - longitude: 103.949 -> 103.948692
- `20254609239` Blk 762, Bedok Reservoir View
  - latitude: 1.336 -> 1.336322
  - longitude: 103.934 -> 103.934451
- `20254609240` Blk 53, Chai Chee Street
  - latitude: 1.328 -> 1.328486
  - longitude: 103.920 -> 103.919882
- `20254609241` Blk 491D,Tampines Street 45
  - latitude: 1.363 -> 1.362507
  - longitude: 103.955 -> 103.954789
- `20254609242` Blk 854,Tampines Street 82
  - latitude: 1.353 -> 1.353032
  - longitude: 103.937 -> 103.936578
- `20254609243` Blk 808C, Chai Chee Road
  - latitude: 1.328 -> 1.327861
  - longitude: 103.924 -> 103.924032
- `20254609244` Blk 2, Chai Chee Road
  - latitude: 1.327 -> 1.326990
  - longitude: 103.922 -> 103.922500
- `20254609245` Blk 874,Tampines Street 84
  - latitude: 1.353 -> 1.353430
  - longitude: 103.933 -> 103.932596
- `20254709293` Blk 495D,Tampines Street 43
  - latitude: 1.364 -> 1.363704
  - longitude: 103.952 -> 103.952020
- `20254709294` Blk 80, Bedok North Road
  - latitude: 1.328 -> 1.328487
  - longitude: 103.941 -> 103.940604
- `20254709295` Blk 183, Bedok North Road
  - latitude: 1.326 -> 1.326441
  - longitude: 103.942 -> 103.941858
- `20254709296` Blk 264, Tampines Street 21
  - latitude: 1.353 -> 1.352870
  - longitude: 103.951 -> 103.951133
- `20254709297` Blk 451, Tampines Street 42
  - latitude: 1.357 -> 1.356572
  - longitude: 103.954 -> 103.954107
- `20254709298` Blk 137, Bedok North Avenue 3
  - latitude: 1.329 -> 1.328826
  - longitude: 103.936 -> 103.935542
- `20254709299` Blk 233, Tampines Street 21
  - latitude: 1.356 -> 1.356372
  - longitude: 103.948 -> 103.947943
- `20254709300` Blk 384, Tampines Street 32
  - latitude: 1.354 -> 1.354013
  - longitude: 103.958 -> 103.957941
- `20254709301` Blk 125, Tampines Street 11
  - latitude: 1.346 -> 1.346197
  - longitude: 103.950 -> 103.949922
- `20254709302` Blk 44, Chai Chee Street
  - latitude: 1.329 -> 1.329039
  - longitude: 103.926 -> 103.925592
- `20254709303` Blk 403, Bedok North Avenue 3
  - latitude: 1.330 -> 1.329796
  - longitude: 103.934 -> 103.933840
- `20254709304` Blk 872,Tampines Street 84
  - latitude: 1.354 -> 1.354250
  - longitude: 103.932 -> 103.932323
- `20254709305` Blk 43, Chai Chee Street
  - latitude: 1.328 -> 1.328368
  - longitude: 103.926 -> 103.925546
- `20254709306` Blk 50, Chai Chee Street
  - latitude: 1.329 -> 1.329382
  - longitude: 103.922 -> 103.922450
- `20254709307` Blk 932,Tampines Street 91
  - latitude: 1.346 -> 1.345588
  - longitude: 103.939 -> 103.939455
- `20254709338` Blk 352, Tampines Street 33
  - latitude: 1.354 -> 1.354201
  - longitude: 103.962 -> 103.962373
- `20254709339` Blk 366, Tampines Street 34
  - latitude: 1.358 -> 1.357786
  - longitude: 103.961 -> 103.961394
- `20254709340` Blk 259, Tampines Street 21
  - latitude: 1.355 -> 1.355056
  - longitude: 103.950 -> 103.949949
- `20254709341` Blk 492G,Tampines Street 45
  - latitude: 1.364 -> 1.364252
  - longitude: 103.955 -> 103.955132
- `20254709342` Blk 391, Tampines Avenue 7
  - latitude: 1.356 -> 1.355691
  - longitude: 103.958 -> 103.957849
- `20254709343` SHENG SIONG 11 TANJONG KATONG ROAD, KINEX
  - groupId: undefined -> [37]
  - latitude: 1.314 -> 1.314445
  - longitude: 103.894 -> 103.894475
- `20254709344` SHENG SIONG BLK 739A BEDOK RESERVOIR ROAD 
  - groupId: undefined -> [35]
  - latitude: 1.338 -> 1.338116
  - longitude: 103.923 -> 103.923287
- `20254709345` FairPrice Bedok North 212
  - groupId: undefined -> [39]
  - latitude: 1.326 -> 1.325941
  - longitude: 103.932 -> 103.931596
- `20254709346` Blk 701, Bedok Reservoir Road
  - latitude: 1.338 -> 1.337919
  - longitude: 103.919 -> 103.918600
- `20254709347` Blk 123, Bedok Reservoir Road
  - latitude: 1.332 -> 1.332419
  - longitude: 103.910 -> 103.910456
- `20254709348` SHENG SIONG BLK 539A BEDOK NORTH STREET 3 
  - groupId: undefined -> [35]
  - latitude: 1.332 -> 1.332298
  - longitude: 103.926 -> 103.925590
- `20254709349` Blk 648, Jln Tenaga
  - latitude: 1.332 -> 1.332425
  - longitude: 103.905 -> 103.905431
- `20254709350` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - latitude: 1.361 -> 1.361253
  - longitude: 103.938 -> 103.937586
- `20254709351` Blk 9, Eunos Crescent
  - latitude: 1.322 -> 1.321871
  - longitude: 103.903 -> 103.902751
- `20254709352` Blk 99, Bedok North Avenue 4
  - latitude: 1.334 -> 1.333875
  - longitude: 103.939 -> 103.939479
- `20254709481` Blk 704, Bedok Reservoir Road
  - latitude: 1.337 -> 1.336508
  - longitude: 103.920 -> 103.920279
- `20254709482` Blk 61, New Upper Changi Road
  - latitude: 1.323 -> 1.322779
  - longitude: 103.941 -> 103.940762
- `20254709483` Blk 42, Bedok South Road
  - latitude: 1.322 -> 1.321531
  - longitude: 103.941 -> 103.940706
- `20254709484` Blk 846, Sims Avenue
  - latitude: 1.318 -> 1.317591
  - longitude: 103.902 -> 103.901699
- `20254709485` Blk 501, Bedok North Street 3
  - latitude: 1.332 -> 1.331915
  - longitude: 103.931 -> 103.930900
- `20254709486` Giant Hypermarket Tampines
  - groupId: undefined -> [51]
  - latitude: 1.372 -> 1.372155
  - longitude: 103.932 -> 103.931982
- `20254709487` Blk 134, Simei Street 1
  - latitude: 1.348 -> 1.348082
  - longitude: 103.956 -> 103.955612
- `20254709488` Blk 130, Bedok Reservoir Road
  - latitude: 1.334 -> 1.333520
  - longitude: 103.912 -> 103.912328
- `20254709489` Blk 1, Bedok South Avenue 1
  - latitude: 1.321 -> 1.320956
  - longitude: 103.934 -> 103.933824
- `20254709490` Blk 620, Bedok Reservoir Road
  - latitude: 1.334 -> 1.334289
  - longitude: 103.918 -> 103.917532
- `20254709491` SHENG SIONG BLK 209 NEW UPPER CHANGI ROAD 
  - groupId: undefined -> [35]
  - latitude: 1.325 -> 1.324707
  - longitude: 103.931 -> 103.931068
- `20254709493` Blk 417, Eunos Road 5
  - latitude: 1.318 -> 1.318172
  - longitude: 103.897 -> 103.897099
- `20254709494` Blk 722, Bedok Reservoir Road
  - latitude: 1.337 -> 1.336659
  - longitude: 103.928 -> 103.928243
- `20254709495` Blk 542, Bedok North Street 3
  - latitude: 1.331 -> 1.330673
  - longitude: 103.923 -> 103.922796
- `20254709514` Blk 716, Bedok Reservoir Road
  - latitude: 1.338 -> 1.337862
  - longitude: 103.925 -> 103.924917
- `20254709515` Blk 65, New Upper Changi Road
  - latitude: 1.325 -> 1.324682
  - longitude: 103.940 -> 103.939735
- `20254709516` Blk 518, Bedok North Ave 2
  - latitude: 1.332 -> 1.331881
  - longitude: 103.929 -> 103.928900
- `20254709517` Blk 145, Bedok Reservoir Road
  - latitude: 1.335 -> 1.334534
  - longitude: 103.912 -> 103.912000
- `20254709518` Blk 106, Bedok North Avenue 4
  - latitude: 1.334 -> 1.334419
  - longitude: 103.937 -> 103.937075
- `20254709519` Blk 108, Simei Street 1
  - latitude: 1.343 -> 1.343036
  - longitude: 103.951 -> 103.951029
- `20254709520` Blk 107, Bedok North Road
  - latitude: 1.332 -> 1.332383
  - longitude: 103.936 -> 103.936287
- `20254709521` Blk 721, Bedok Reservoir Road
  - latitude: 1.336 -> 1.336347
  - longitude: 103.926 -> 103.926014
- `20254709522` Blk 2, Haig Road
  - latitude: 1.313 -> 1.312510
  - longitude: 103.898 -> 103.897617
- `20254709523` Blk 226, Simei Street 4
  - latitude: 1.343 -> 1.342618
  - longitude: 103.957 -> 103.956982
- `20254709524` Blk 22, Eunos Crescent
  - latitude: 1.325 -> 1.324813
  - longitude: 103.902 -> 103.902022
- `20254709525` Blk 711, Bedok Reservoir Road
  - latitude: 1.336 -> 1.335975
  - longitude: 103.924 -> 103.924172
- `20254709526` Blk 233, Simei Street 4
  - latitude: 1.344 -> 1.344079
  - longitude: 103.956 -> 103.956334
- `20254709527` Blk 125, Bedok North Road
  - latitude: 1.329 -> 1.328855
  - longitude: 103.939 -> 103.939126
- `20254709528` Blk 16, Eunos Crescent
  - latitude: 1.323 -> 1.323072
  - longitude: 103.904 -> 103.904452
- `20254709529` Blk 113, Bedok North Street 2
  - latitude: 1.330 -> 1.330436
  - longitude: 103.935 -> 103.935189
- `20254709530` Blk 358D, Ubi Road 3
  - latitude: 1.329 -> 1.329452
  - longitude: 103.900 -> 103.899994
- `20254709532` Blk 358B, Ubi Road 3
  - latitude: 1.328 -> 1.328444
  - longitude: 103.900 -> 103.900145
- `20254709533` Blk 167, Simei Lane
  - latitude: 1.343 -> 1.343125
  - longitude: 103.958 -> 103.958481
- `20254709534` Blk 3, Pine Close
  - latitude: 1.307 -> 1.307050
  - longitude: 103.883 -> 103.883244
- `20254709535` Blk 351, Ubi Avenue 1
  - latitude: 1.325 -> 1.325495
  - longitude: 103.901 -> 103.900544
- `20254709536` Blk 142, Simei Street 2
  - latitude: 1.345 -> 1.345464
  - longitude: 103.955 -> 103.955191
- `20254709537` Blk 419, Bedok North Street 1
  - latitude: 1.327 -> 1.327134
  - longitude: 103.928 -> 103.927932
- `20254709538` Blk 150, Simei Street 1
  - latitude: 1.346 -> 1.346218
  - longitude: 103.957 -> 103.957117
- `20254709539` Blk 348, Ubi Avenue 1
  - latitude: 1.326 -> 1.326158
  - longitude: 103.900 -> 103.900255
- `20254709540` Blk 548, Bedok North Ave 1
  - latitude: 1.331 -> 1.331271
  - longitude: 103.927 -> 103.926803
- `20254709541` Blk 514, Bedok North Ave 2
  - latitude: 1.332 -> 1.332236
  - longitude: 103.929 -> 103.928900
- `20254709542` Blk 105, Aljunied Crescent
  - latitude: 1.319 -> 1.319470
  - longitude: 103.883 -> 103.882743
- `20254709543` Blk 188A, Bedok North Street 4
  - latitude: 1.332 -> 1.331633
  - longitude: 103.941 -> 103.941449
- `20254809581` Blk 272, Tampines Street 22
  - latitude: 1.349 -> 1.349097
  - longitude: 103.950 -> 103.950173
- `20254809582` Blk 60, Dakota Crescent
  - latitude: 1.308 -> 1.307678
  - longitude: 103.889 -> 103.888577
- `20254809583` SHENG SIONG 151 BEDOK SOUTH ROAD, SIGLAP CC
  - groupId: undefined -> [37]
  - latitude: 1.317 -> 1.317275
  - longitude: 103.947 -> 103.946576
- `20254809584` Blk 28, Cassia Crescent
  - latitude: 1.309 -> 1.308976
  - longitude: 103.884 -> 103.883513
- `20254809585` Blk 126, Geylang East Avenue 1
  - latitude: 1.318 -> 1.317859
  - longitude: 103.887 -> 103.887015
- `20254809586` Blk 156, Bedok South Avenue 3
  - latitude: 1.318 -> 1.318277
  - longitude: 103.946 -> 103.945501
- `20254809587` SHENG SIONG 301 GEYLANG ROAD BCH BUILDING
  - groupId: undefined -> [35]
  - latitude: 1.313 -> 1.312775
  - longitude: 103.879 -> 103.878656
- `20254809588` Blk 1, Pine Close
  - latitude: 1.308 -> 1.308194
  - longitude: 103.884 -> 103.884076
- `20254809589` Blk 4, Marine Ter
  - latitude: 1.305 -> 1.305155
  - longitude: 103.918 -> 103.917638
- `20254809590` Blk 36, Cassia Crescent
  - latitude: 1.310 -> 1.309862
  - longitude: 103.885 -> 103.885199
- `20254809591` Blk 30, Marine Crescent
  - latitude: 1.304 -> 1.304170
  - longitude: 103.911 -> 103.911178
- `20254809592` Blk 11, Haig Road
  - latitude: 1.315 -> 1.314847
  - longitude: 103.897 -> 103.896627
- `20254809593` Blk 617, Bedok Reservoir Road
  - latitude: 1.333 -> 1.333217
  - longitude: 103.916 -> 103.916500
- `20254809594` Blk 55, Marine Ter
  - latitude: 1.305 -> 1.305427
  - longitude: 103.914 -> 103.913960
- `20254809679` Blk 453, Pasir Ris Drive 6
  - latitude: 1.372 -> 1.371868
  - longitude: 103.957 -> 103.957291
- `20254809775` Blk 14, Bedok South Ave 2
  - latitude: 1.321 -> 1.321040
  - longitude: 103.936 -> 103.936297
- `20254809776` Blk 47, Jln Tiga
  - latitude: 1.309 -> 1.308835
  - longitude: 103.885 -> 103.884949
- `20254809777` Blk 106, Simei Street 1
  - latitude: 1.342 -> 1.341931
  - longitude: 103.951 -> 103.950881
- `20254809778` SHENG SIONG BLK 118 ALJUNIED  AVE 2 
  - groupId: undefined -> [37]
  - latitude: 1.320 -> 1.319973
  - longitude: 103.887 -> 103.887167
- `20254809779` Blk 29 New Upper Changi Road
  - latitude: 1.324 -> 1.324267
  - longitude: 103.937 -> 103.936926
- `20254809780` Blk 8, Haig Road
  - latitude: 1.314 -> 1.313668
  - longitude: 103.896 -> 103.896069
- `20254809781` Blk 707, Bedok North Road
  - latitude: 1.335 -> 1.335454
  - longitude: 103.919 -> 103.919253
- `20254809782` Blk 164, Bedok South Road
  - latitude: 1.320 -> 1.320101
  - longitude: 103.947 -> 103.946598
- `20254809783` Blk 659, Jln Tenaga
  - latitude: 1.334 -> 1.334290
  - longitude: 103.906 -> 103.906112
- `20254809784` Blk 12, Pine Close
  - latitude: 1.309 -> 1.308549
  - longitude: 103.882 -> 103.882240
- `20254809785` Blk 12 Kampong Arang Rd
  - latitude: 1.301 -> 1.300841
  - longitude: 103.884 -> 103.883721
- `20254809786` Blk 96, Bedok North Avenue 4
  - latitude: 1.333 -> 1.333224
  - longitude: 103.940 -> 103.940338
- `20254809787` Blk 155, Simei Road
  - latitude: 1.345 -> 1.344761
  - longitude: 103.958 -> 103.958488
- `20254809788` Blk 425, Bedok North Road
  - latitude: 1.329 -> 1.329394
  - longitude: 103.929 -> 103.929018
- `20254809789` Blk 42, Cassia Crescent
  - latitude: 1.310 -> 1.310410
  - longitude: 103.886 -> 103.886295
- `20254809790` Blk 22, Bedok South Avenue 1
  - latitude: 1.323 -> 1.322814
  - longitude: 103.933 -> 103.932759
- `20254809791` Blk 63, Chai Chee Road
  - latitude: 1.326 -> 1.326125
  - longitude: 103.921 -> 103.921439
- `20254809792` Blk 608, Bedok Reservoir Road
  - latitude: 1.332 -> 1.331854
  - longitude: 103.913 -> 103.913193
- `20254809793` Blk 52, New Upper Changi Road
  - latitude: 1.324 -> 1.323861
  - longitude: 103.942 -> 103.942193
- `20254809795` Blk 169, Bedok South Avenue 3
  - latitude: 1.320 -> 1.320389
  - longitude: 103.945 -> 103.945078
- `20254809796` Blk 670, Jln Damai
  - latitude: 1.333 -> 1.332888
  - longitude: 103.908 -> 103.908280
- `20254809797` Blk 720, Bedok Reservoir Road
  - latitude: 1.336 -> 1.335985
  - longitude: 103.925 -> 103.924985
- `20254809798` SHENG SIONG BLK 506 TAMPINES CENTRAL 1
  - groupId: undefined -> [35]
  - latitude: 1.356 -> 1.356127
  - longitude: 103.946 -> 103.945941
- `20254809799` Blk 55, New Upper Changi Road
  - latitude: 1.325 -> 1.325114
  - longitude: 103.942 -> 103.942076
- `20254809800` Blk 72, Bedok South Avenue 3
  - latitude: 1.320 -> 1.320463
  - longitude: 103.944 -> 103.943658
- `20254809801` Fairprice Joo Chiat Complex
  - latitude: 1.316 -> 1.315531
  - longitude: 103.899 -> 103.898509
- `20254809802` FairPrice Katong V
  - groupId: undefined -> [47]
  - latitude: 1.304 -> 1.303562
  - longitude: 103.903 -> 103.903070
- `20254809803` Blk 529, Bedok North Street 3
  - latitude: 1.335 -> 1.334628
  - longitude: 103.927 -> 103.926893
- `20254809804` Blk 601, Bedok Reservoir Road
  - latitude: 1.330 -> 1.329992
  - longitude: 103.912 -> 103.911502
- `20254909819` Blk 35, Chai Chee Avenue
  - latitude: 1.325 -> 1.324824
  - longitude: 103.926 -> 103.925856
- `20254909820` Blk 628, Bedok Reservoir Road
  - latitude: 1.335 -> 1.334941
  - longitude: 103.915 -> 103.914948
- `20254909821` SHENG SIONG BLK 258 PASIR RIS ST 21 
  - groupId: undefined -> [37]
  - latitude: 1.367 -> 1.367262
  - longitude: 103.965 -> 103.965172
- `20254909822` Blk 1, Kampong Kayu Rd
  - latitude: 1.304 -> 1.303625
  - longitude: 103.884 -> 103.883806
- `20254909823` Blk 99, Old Airport Road
  - latitude: 1.309 -> 1.308716
  - longitude: 103.889 -> 103.888567
- `20254909824` Blk 58, Dakota Crescent
  - latitude: 1.307 -> 1.307400
  - longitude: 103.889 -> 103.889457
- `20254909825` Blk 52, Cassia Crescent
  - latitude: 1.311 -> 1.310615
  - longitude: 103.885 -> 103.885297
- `20254909826` Blk 640, Bedok Reservoir Road
  - latitude: 1.332 -> 1.332168
  - longitude: 103.905 -> 103.904957
- `20254909827` Blk 109, Aljunied Crescent
  - latitude: 1.319 -> 1.319491
  - longitude: 103.884 -> 103.884448
- `20254909828` Blk 38C, Eunos Road 2
  - latitude: 1.320 -> 1.320179
  - longitude: 103.900 -> 103.900454
- `20254909829` Blk 133, Geylang East Avenue 1
  - latitude: 1.316 -> 1.316463
  - longitude: 103.885 -> 103.885466
- `20254909830` Blk 56, Cassia Crescent
  - latitude: 1.310 -> 1.310293
  - longitude: 103.883 -> 103.883278
- `20254909831` Blk 10, Pine Close
  - latitude: 1.309 -> 1.309170
  - longitude: 103.882 -> 103.882149
- `20254909864` SCARLETT@PAYA LEBAR SQUARE
  - groupId: undefined -> [87]
  - latitude: 1.319 -> 1.319155
  - longitude: 103.893 -> 103.892520
- `20254909865` ITE College East
  - latitude: 1.335 -> 1.334728
  - longitude: 103.954 -> 103.954448
- `20254909866` FairPrice Whitesands
  - groupId: undefined -> [47]
  - latitude: 1.372 -> 1.372416
  - longitude: 103.947 -> 103.946650
- `20254909867` SHENG SIONG BLK 872C TAMPINES STREET 86
  - groupId: undefined -> [37]
  - latitude: 1.355 -> 1.355206
  - longitude: 103.932 -> 103.931570
- `20254909868` Tampines Round Market and Food Centre
  - latitude: 1.346 -> 1.345959
  - longitude: 103.945 -> 103.944640
- `20254909869` Dunman Food Centre
  - latitude: 1.309 -> 1.309466
  - longitude: 103.902 -> 103.901827
- `20254909870` FairPrice Tampines Blk 138 Tampines Street 11
  - groupId: undefined -> [39]
  - latitude: 1.345 -> 1.345461
  - longitude: 103.946 -> 103.945620
- `20254909871` U STARS @Elias Mall
  - groupId: undefined -> [84]
  - latitude: 1.378 -> 1.378100
  - longitude: 103.942 -> 103.942060
- `20254909872` Giant Express 509 Bedok North St 3
  - groupId: undefined -> [52]
  - latitude: 1.333 -> 1.333346
  - longitude: 103.931 -> 103.931340
- `20254909873` FairPrice Blk 633 Tampines North Drive 2
  - groupId: undefined -> [39]
  - latitude: 1.365 -> 1.365258
  - longitude: 103.941 -> 103.941130
- `20254909874` FairPrice Bedok Reservoir 
  - latitude: 1.337 -> 1.337309
  - longitude: 103.922 -> 103.921704
- `20254909875` Cold Storage Joo Chiat JK Centre
  - groupId: undefined -> [65]
  - latitude: 1.310 -> 1.309859
  - longitude: 103.902 -> 103.902300
- `20254909876` Fairprice Jewel
  - latitude: 1.360 -> 1.360303
  - longitude: 103.990 -> 103.990200
- `20254909877` FairPrice Pasir Ris West Plaza
  - groupId: undefined -> [39]
  - latitude: 1.380 -> 1.379885
  - longitude: 103.936 -> 103.936480
- `20254909878` FairPrice Changi Business Park
  - groupId: undefined -> [47]
  - latitude: 1.335 -> 1.335169
  - longitude: 103.963 -> 103.963497
- `20254909879` FairPrice Paya Lebar Quarter
  - groupId: undefined -> [47]
  - latitude: 1.318 -> 1.317627
  - longitude: 103.893 -> 103.893070
- `20254909880` Kallang Estate Fresh Market and Food Centre
  - latitude: 1.307 -> 1.307465
  - longitude: 103.884 -> 103.884136
- `20254909881` Giant Simei MRT
  - groupId: undefined -> [56]
  - latitude: 1.343 -> 1.343147
  - longitude: 103.953 -> 103.953420
- `20254909882` FairPrice Parkway Parade
  - groupId: undefined -> [47]
  - latitude: 1.301 -> 1.301470
  - longitude: 103.905 -> 103.905150
- `20254909883` Prime Supermarket Tampines Street 96
  - groupId: undefined -> [80]
  - latitude: 1.342 -> 1.342323
  - longitude: 103.937 -> 103.937000
- `20254909884` Giant Loyang Point
  - groupId: undefined -> [51]
  - latitude: 1.373 -> 1.372891
  - longitude: 103.963 -> 103.962990
- `20254909885` SCARLETT@DOWNTOWN E!HUB
  - groupId: undefined -> [88]
  - latitude: 1.376 -> 1.376477
  - longitude: 103.955 -> 103.955240
- `20254909886` Pasir Ris Central Hawker Centre
  - latitude: 1.373 -> 1.373409
  - longitude: 103.952 -> 103.951652
- `20254909887` Blk 612, Bedok Reservoir Road
  - latitude: 1.332 -> 1.331665
  - longitude: 103.916 -> 103.915743
- `20254909888` Cold Storage Parkway Parade
  - groupId: undefined -> [58]
  - latitude: 1.301 -> 1.301470
  - longitude: 103.905 -> 103.905150
- `20254909889` Lion City Supermarket Geylang Road
  - latitude: 1.313 -> 1.312578
  - longitude: 103.880 -> 103.880025
- `20255010195` ANG MO SUPERMARKET-622B TAMPINES AVE 12
  - groupId: undefined -> [92]
  - latitude: 1.361 -> 1.360888
  - longitude: 103.941 -> 103.941200
- `20255010196` SHENG SIONG BLK 115 BEDOK NORTH ROAD 
  - groupId: undefined -> [35]
  - latitude: 1.331 -> 1.331389
  - longitude: 103.937 -> 103.936830
- `20255010197` Changi Village Hawker Centre
  - latitude: 1.389 -> 1.389225
  - longitude: 103.988 -> 103.988303
- `20255010198` Don Don Donki (Jewel Changi)
  - groupId: undefined -> [76]
  - latitude: 1.360 -> 1.360319
  - longitude: 103.990 -> 103.989668
- `20255010199` SHENG SIONG BLK 91 JLN. SATU
  - groupId: undefined -> [37]
  - latitude: 1.310 -> 1.309538
  - longitude: 103.888 -> 103.888020
- `20255010200` Cold Storage i12 Katong
  - groupId: undefined -> [62]
  - latitude: 1.305 -> 1.305200
  - longitude: 103.905 -> 103.905060
- `20255010201` SCARLETT@GEYLANG ROAD
  - groupId: undefined -> [86]
  - latitude: 1.313 -> 1.312811
  - longitude: 103.879 -> 103.879180
- `20255010202` SHENG SIONG BLK 527D PASIR RIS STREET 51 
  - groupId: undefined -> [35]
  - latitude: 1.370 -> 1.369606
  - longitude: 103.948 -> 103.947870
- `20255010203` FairPrice Marine Parade
  - groupId: undefined -> [47]
  - latitude: 1.301 -> 1.301385
  - longitude: 103.907 -> 103.907230
- `20255010204` Changi Airport Terminal 2
  - latitude: 1.355 -> 1.355059
  - longitude: 103.989 -> 103.989027
- `20255010205` Little Farms Market, Katong Point
  - groupId: undefined -> [94]
  - latitude: 1.307 -> 1.306800
  - longitude: 103.904 -> 103.904454
- `20255010206` FairPrice 41 Jalan Tiga
  - groupId: undefined -> [39]
  - latitude: 1.308 -> 1.308026
  - longitude: 103.885 -> 103.884650
- `20255010207` Changi Airport Terminal 4
  - latitude: 1.336 -> 1.335982
  - longitude: 103.982 -> 103.982495
- `20255010208` Eunos Crescent Blk 4A Hawker Centre
  - latitude: 1.320 -> 1.320383
  - longitude: 103.904 -> 103.904100
- `20255010209` Prime Supermarket Tampines North Drive 1
  - groupId: undefined -> [78]
  - latitude: 1.365 -> 1.364553
  - longitude: 103.937 -> 103.937000
- `20255010210` FairPrice 612 Geylang Lorong 38
  - groupId: undefined -> [39]
  - latitude: 1.314 -> 1.314081
  - longitude: 103.889 -> 103.888840
- `20255010211` Prime Supermarket Eunos Road 2
  - groupId: undefined -> [78]
  - latitude: 1.322 -> 1.321505
  - longitude: 103.902 -> 103.901900
- `20255010212` Blk 141, Bedok Reservoir Road
  - latitude: 1.335 -> 1.335416
  - longitude: 103.913 -> 103.913312
- `20255010213` Giant Pasir Ris Drive 4
  - groupId: undefined -> [51]
  - latitude: 1.369 -> 1.369054
  - longitude: 103.959 -> 103.958760
- `20255010214` East Coast Lagoon Food Village
  - latitude: 1.307 -> 1.306833
  - longitude: 103.935 -> 103.935222
- `20255010215` Giant Bedok Market Place
  - groupId: undefined -> [51]
  - latitude: 1.331 -> 1.330824
  - longitude: 103.948 -> 103.947510
- `20255010216` Geylang Serai Market and Food Centre
  - latitude: 1.317 -> 1.316774
  - longitude: 103.898 -> 103.898278
- `20255010217` Bedok Food Centre
  - latitude: 1.320 -> 1.320339
  - longitude: 103.955 -> 103.955446
- `20255010218` Sparrows 206 Bedok North Street 1
  - groupId: undefined -> [118]
  - latitude: 1.326 -> 1.326464
  - longitude: 103.931 -> 103.930958
- `20255010219` Changi Airport Terminal 1
  - latitude: 1.362 -> 1.361759
  - longitude: 103.991 -> 103.990904
- `20255010220` FairPrice Changi Airport T3
  - groupId: undefined -> [40]
  - latitude: 1.355 -> 1.355217
  - longitude: 103.986 -> 103.985920
- `20255010444` FairPrice Blk 29B Chai Chee Avenue
  - groupId: undefined -> [39]
  - latitude: 1.324 -> 1.324367
  - longitude: 103.924 -> 103.923770
- `20255010445` FairPrice Bedok Mall
  - groupId: undefined -> [47]
  - latitude: 1.325 -> 1.324801
  - longitude: 103.923 -> 103.923310
- `20255010446` FairPrice Downtown East
  - groupId: undefined -> [47]
  - latitude: 1.379 -> 1.378897
  - longitude: 103.955 -> 103.955070
- `20255010447` BITES BY SCARLETT@TAMPINES ONE
  - groupId: undefined -> [87]
  - latitude: 1.354 -> 1.354495
  - longitude: 103.945 -> 103.944960
- `20255010448` U STARS @Tampines Grove
  - groupId: undefined -> [84]
  - latitude: 1.349 -> 1.349257
  - longitude: 103.935 -> 103.934830
- `20255010449` Blk 665, Jln Damai
  - latitude: 1.334 -> 1.334191
  - longitude: 103.908 -> 103.907993
- `20255010450` FairPrice Siglap
  - groupId: undefined -> [39]
  - latitude: 1.312 -> 1.312409
  - longitude: 103.925 -> 103.925211
- `20255010451` FairPrice Blk 114 Aljunied Ave 2
  - groupId: undefined -> [39]
  - latitude: 1.322 -> 1.321675
  - longitude: 103.887 -> 103.886720
- `20255010452` Prime Supermarket Chai Chee Road
  - groupId: undefined -> [78]
  - latitude: 1.323 -> 1.323302
  - longitude: 103.924 -> 103.924030
- `20255010454` Giant Kampung Ubi Avenue 1
  - groupId: undefined -> [55]
  - latitude: 1.330 -> 1.329935
  - longitude: 103.902 -> 103.901990
- `20255010455` Prime Supermarket Tampines Street 81
  - groupId: undefined -> [78]
  - latitude: 1.349 -> 1.348930
  - longitude: 103.934 -> 103.934090
- `20255010456` Cold Storage Siglap V
  - groupId: undefined -> [51]
  - latitude: 1.313 -> 1.312846
  - longitude: 103.924 -> 103.923730
- `20255010457` FairPrice Lengkong Tiga
  - groupId: undefined -> [39]
  - latitude: 1.324 -> 1.323772
  - longitude: 103.911 -> 103.910790
- `20255010458` FairPrice Century Square Shopping Mall
  - groupId: undefined -> [47]
  - latitude: 1.353 -> 1.352620
  - longitude: 103.944 -> 103.943683
- `20255010459` Cold Storage Tampines One
  - groupId: undefined -> [59]
  - latitude: 1.354 -> 1.354212
  - longitude: 103.945 -> 103.945030
- `20255010460` FairPrice Tampines Mall
  - latitude: 1.352 -> 1.352457
  - longitude: 103.945 -> 103.944670
- `20255010462` FairPrice East Point
  - groupId: undefined -> [39]
  - latitude: 1.343 -> 1.342730
  - longitude: 103.953 -> 103.953010
- `20255010464` FairPrice Blk 89 Bedok North Street 4
  - groupId: undefined -> [39]
  - latitude: 1.333 -> 1.332907
  - longitude: 103.938 -> 103.937954
- `20255010465` FairPrice Blk 475 Tampines Street 44
  - groupId: undefined -> [39]
  - latitude: 1.360 -> 1.360422
  - longitude: 103.953 -> 103.953260
- `20255010466` Giant Tampines Mart
  - groupId: undefined -> [51]
  - latitude: 1.354 -> 1.353795
  - longitude: 103.961 -> 103.960570
- `20255110621` FairPrice Our Tampines Hub
  - groupId: undefined -> [47]
  - latitude: 1.353 -> 1.352782
  - longitude: 103.940 -> 103.939620
- `20255110622` Don Don Donki (Paya Lebar Quarter)
  - groupId: undefined -> [77]
  - latitude: 1.318 -> 1.317669
  - longitude: 103.893 -> 103.893160
- `20255110623` ONE Supermarket Pte. Ltd.
  - groupId: undefined -> [112]
  - latitude: 1.353 -> 1.353386
  - longitude: 103.953 -> 103.953078
- `20255110624` TRIPLE N SUPERMART PTE LTD
  - latitude: 1.337 -> 1.337294
  - longitude: 103.906 -> 103.905985
- `20255110625` FairPrice Finest Komo Shoppes
  - groupId: undefined -> [47]
  - latitude: 1.360 -> 1.360361
  - longitude: 103.970 -> 103.970140
- `20255110626` FairPrice Blk 107 Tampines Street 11
  - groupId: undefined -> [39]
  - latitude: 1.348 -> 1.348199
  - longitude: 103.948 -> 103.947830
- `20255110627` ACE SIGNATURE @ LIV CHANGI
  - groupId: undefined -> [99]
  - latitude: 1.359 -> 1.358659
  - longitude: 103.969 -> 103.969439
- `20255110628` U STARS @878C Tampines Ave 8
  - groupId: undefined -> [85]
  - latitude: 1.351 -> 1.351348
  - longitude: 103.929 -> 103.929466
- `20255110629` FairPrice Tampines CC
  - groupId: undefined -> [41]
  - latitude: 1.355 -> 1.355372
  - longitude: 103.934 -> 103.934420
- `20255110630` Don Don Donki (Tampines One)
  - groupId: undefined -> [74]
  - latitude: 1.355 -> 1.354567
  - longitude: 103.945 -> 103.944957
- `20261515320` 208B New Upper Changi Road Hawker Centre
  - latitude: 1.325 -> 1.324687
  - longitude: 103.930 -> 103.930300
- `20261515321` Bedok Reservoir Food Centre
  - latitude: 1.333 -> 1.333315
  - longitude: 103.914 -> 103.913900
- `20261515322` 16 Bedok South Rd Hawker Centre
  - latitude: 1.321 -> 1.320793
  - longitude: 103.935 -> 103.935400
- `20261515324` Haig Road Market & Cooked Food Centre
  - latitude: 1.316 -> 1.315768
  - longitude: 103.895 -> 103.895400
- `20261515325` Bedok North Street 3 Blk 538 Hawker Centre
  - latitude: 1.332 -> 1.332267
  - longitude: 103.925 -> 103.924800
- `20261515327` 50A Marine Terrace Hawker Centre
  - latitude: 1.306 -> 1.306019
  - longitude: 103.916 -> 103.915700
- `20261515329` 85 Fengshan Centre
  - latitude: 1.332 -> 1.332266
  - longitude: 103.939 -> 103.938800
- `20261515331` 117 Aljunied Ave 2 Market & Food Centre
  - latitude: 1.321 -> 1.320963
  - longitude: 103.887 -> 103.886900
- `20261515332` SCARLETT@PASIR RIS MALL
  - latitude: 1.374 -> 1.373863
  - longitude: 103.949 -> 103.948540
- `20261515333` FairPrice Finest Sceneca Square
  - latitude: 1.328 -> 1.328028
  - longitude: 103.945 -> 103.945200
- `20261515334` Cold Storage Pasir Ris Mall
  - groupId: undefined -> [58]
  - latitude: 1.374 -> 1.373863
  - longitude: 103.949 -> 103.948540
- `20261515335` Blk 216 Bedok North Street 1 Market & Hawker Centre
  - latitude: 1.328 -> 1.327869
  - longitude: 103.933 -> 103.933200
- `20261515336` 84 Marine Parade Central Market and Food Centre
  - latitude: 1.302 -> 1.302495
  - longitude: 103.906 -> 103.906100
- `20261515338` Singapore University of Technology and Design (SUTD)
  - latitude: 1.342 -> 1.342291
  - longitude: 103.963 -> 103.963400
- `20261515339` Kaki Bukit 511 Market and Food Centre
  - latitude: 1.333 -> 1.333438
  - longitude: 103.930 -> 103.930500
- `20261515341` Temasek Polytechnic
  - latitude: 1.346 -> 1.345603
  - longitude: 103.932 -> 103.931800
- `20261515346` Blk 4A Jalan Batu Hawker Centre
  - latitude: 1.303 -> 1.302627
  - longitude: 103.884 -> 103.883900
- `B5052350` SCARLETT@BUGIS+
  - groupId: undefined -> [87]
  - latitude: 1.300 -> 1.299600
  - longitude: 103.855 -> 103.854600
- `B5052351` Block 156 Rivervale Crescent
  - latitude: 1.391 -> 1.391289
  - longitude: 103.907 -> 103.907379
- `B5052352` SHENG SIONG BLK 658 PUNGGOL EAST 
  - groupId: undefined -> [35]
  - latitude: 1.400 -> 1.399800
  - longitude: 103.919 -> 103.919500
- `B5052353` FairPrice Blk 712 Ang Mo Kio Avenue 6
  - groupId: undefined -> [47]
  - latitude: 1.371 -> 1.371400
  - longitude: 103.847 -> 103.847100
- `B5052354` Block 113 Whampoa Road
  - latitude: 1.326 -> 1.325816
  - longitude: 103.857 -> 103.857193
- `B5052355` Prime Supermarket 322 Sumang Walk
  - groupId: undefined -> [78]
  - latitude: 1.411 -> 1.410945
  - longitude: 103.897 -> 103.897300
- `B5052356` Prime Supermarket Bidadari Park Drive
  - groupId: undefined -> [80]
  - latitude: 1.334 -> 1.334101
  - longitude: 103.871 -> 103.870800
- `B5052357` Block 23B Queen's Close
  - latitude: 1.294 -> 1.293681
  - longitude: 103.800 -> 103.800400
- `B5052358` FairPrice Havelock Road
  - groupId: undefined -> [39]
  - latitude: 1.290 -> 1.289800
  - longitude: 103.827 -> 103.826700
- `B5052359` Block 143 Potong Pasir Avenue 2
  - latitude: 1.333 -> 1.332880
  - longitude: 103.866 -> 103.866109
- `B5052360` FairPrice Shaw Plaza
  - groupId: undefined -> [45]
  - latitude: 1.325 -> 1.325279
  - longitude: 103.851 -> 103.851048
- `B5052361` Giant Ang Mo Kio Avenue 10
  - groupId: undefined -> [51]
  - latitude: 1.373 -> 1.372700
  - longitude: 103.854 -> 103.854000
- `B5052362` SHENG SIONG BLK 660A EDGEDALE PLAINS 
  - groupId: undefined -> [35]
  - latitude: 1.403 -> 1.402500
  - longitude: 103.916 -> 103.916300
- `B5052363` Giant Northshore 2
  - groupId: undefined -> [51]
  - latitude: 1.417 -> 1.417125
  - longitude: 103.902 -> 103.901700
- `B5052364` Cold Storage Plaza Singapura
  - groupId: undefined -> [62]
  - latitude: 1.301 -> 1.300711
  - longitude: 103.845 -> 103.844900
- `B5052365` SHENG SIONG BLK 410A SIN MING AVENUE
  - groupId: undefined -> [37]
  - latitude: 1.363 -> 1.363200
  - longitude: 103.835 -> 103.835400
- `B5052366` Block 261 Waterloo Street
  - latitude: 1.299 -> 1.298916
  - longitude: 103.852 -> 103.851900
- `B5052367` FairPrice Serangoon Garden myVillage
  - groupId: undefined -> [41]
  - latitude: 1.365 -> 1.365100
  - longitude: 103.865 -> 103.865100
- `B5052368` Don Don Donki (Orchard Central)
  - groupId: undefined -> [72]
  - latitude: 1.301 -> 1.300800
  - longitude: 103.840 -> 103.839700
- `B5052369` Block 12 Holland Avenue
  - latitude: 1.309 -> 1.309380
  - longitude: 103.795 -> 103.794880
- `B5052370` FairPrice Blk 476 Upper Serangoon View
  - groupId: undefined -> [41]
  - latitude: 1.377 -> 1.377100
  - longitude: 103.903 -> 103.903500
- `B5052371` Block 319A Anchorvale Drive
  - latitude: 1.391 -> 1.390687
  - longitude: 103.890 -> 103.889898
- `B5052372` Cold Storage Raffles City
  - groupId: undefined -> [60]
  - latitude: 1.294 -> 1.294000
  - longitude: 103.853 -> 103.853100
- `B5052373` FairPrice 612 Punggol Drive
  - groupId: undefined -> [39]
  - latitude: 1.405 -> 1.404800
  - longitude: 103.909 -> 103.908500
- `B5052470` Cold Storage Suntec City
  - groupId: undefined -> [62]
  - latitude: 1.295 -> 1.295000
  - longitude: 103.858 -> 103.858300
- `B5052471` Cold Storage Marina Bay Sands
  - groupId: undefined -> [69]
  - latitude: 1.286 -> 1.286226
  - longitude: 103.860 -> 103.859764
- `B5052472` FairPrice Tanjong Pagar
  - groupId: undefined -> [39]
  - latitude: 1.276 -> 1.275900
  - longitude: 103.843 -> 103.843000
- `B5052473` FairPrice Xtra VivoCity
  - groupId: undefined -> [47]
  - latitude: 1.265 -> 1.264800
  - longitude: 103.823 -> 103.822800
- `B5052474` National University of Singapore 36 College Avenue East UTown Level 1, Main Walkway
  - latitude: 1.305 -> 1.304942
  - longitude: 103.774 -> 103.773700
- `B5052475` Block 131 Ang Mo Kio Avenue 3
  - latitude: 1.371 -> 1.371082
  - longitude: 103.842 -> 103.841645
- `B5052476` Block 411A Northshore Drive
  - latitude: 1.418 -> 1.418358
  - longitude: 103.906 -> 103.905768
- `B5052477` Prime Supermarket Upper Aljunied Lane
  - groupId: undefined -> [78]
  - latitude: 1.334 -> 1.334300
  - longitude: 103.879 -> 103.878790
- `B5052478` Block 3 Queen's Road
  - latitude: 1.318 -> 1.318418
  - longitude: 103.808 -> 103.808124
- `B5052479` Singapore Polytechnic (SP) T11A Building
  - groupId: undefined -> [73]
  - latitude: 1.310 -> 1.310330
  - longitude: 103.779 -> 103.779160
- `B5052480` Block 132 Rivervale Street
  - latitude: 1.390 -> 1.389992
  - longitude: 103.904 -> 103.903523
- `B5052481` SHENG SIONG BLK 473 FERNVALE STREET
  - groupId: undefined -> [35]
  - latitude: 1.398 -> 1.397900
  - longitude: 103.882 -> 103.881500
- `B5052482` Block 563 Ang Mo Kio Avenue 3
  - latitude: 1.370 -> 1.369934
  - longitude: 103.858 -> 103.858108
- `B5052483` Cold Storage Serangoon Nex
  - groupId: undefined -> [64]
  - latitude: 1.351 -> 1.350819
  - longitude: 103.873 -> 103.872500
- `B5052484` Block 456 Hougang Avenue 10
  - latitude: 1.377 -> 1.377178
  - longitude: 103.895 -> 103.895440
- `B5052485` Cold Storage Bugis Junction
  - groupId: undefined -> [62]
  - latitude: 1.300 -> 1.299548
  - longitude: 103.856 -> 103.855700
- `B5052486` FairPrice Serangoon North Ave 1
  - groupId: undefined -> [39]
  - latitude: 1.370 -> 1.369800
  - longitude: 103.873 -> 103.873000
- `B5052487` FairPrice Finest Clarke Quay
  - groupId: undefined -> [121]
  - latitude: 1.290 -> 1.290500
  - longitude: 103.846 -> 103.845900
- `B5052488` FairPrice Finest Coronation Plaza
  - groupId: undefined -> [47]
  - latitude: 1.324 -> 1.323900
  - longitude: 103.810 -> 103.809900
- `B5052489` Block 832 Hougang Central
  - latitude: 1.371 -> 1.370650
  - longitude: 103.890 -> 103.889700
- `B5052490` Giant Ghim Moh Road
  - groupId: undefined -> [51]
  - latitude: 1.310 -> 1.310185
  - longitude: 103.788 -> 103.788100
- `B5052491` Block 99C Lorong 2 Toa Payoh
  - latitude: 1.339 -> 1.339046
  - longitude: 103.847 -> 103.847473
- `B5052492` Cold Storage Anchorpoint
  - groupId: undefined -> [57]
  - latitude: 1.289 -> 1.288628
  - longitude: 103.805 -> 103.804992
- `B5052493` Block 121 Potong Pasir Avenue 1
  - latitude: 1.336 -> 1.335744
  - longitude: 103.866 -> 103.865544
- `B5052494` FairPrice Dover Crescent
  - groupId: undefined -> [47]
  - latitude: 1.305 -> 1.305100
  - longitude: 103.781 -> 103.781400
- `B5052495` Block 128 Lorong 1 Toa Payoh
  - latitude: 1.338 -> 1.337807
  - longitude: 103.844 -> 103.844093
- `B5052496` Cold Storage Novena Square
  - groupId: undefined -> [62]
  - latitude: 1.320 -> 1.319957
  - longitude: 103.844 -> 103.843900
- `B5052497` Block 337 Ang Mo Kio Avenue 1
  - latitude: 1.363 -> 1.363225
  - longitude: 103.852 -> 103.851722
- `B5052498` FairPrice Dawson Place
  - groupId: undefined -> [39]
  - latitude: 1.293 -> 1.292600
  - longitude: 103.811 -> 103.811400
- `B5052499` SHENG SIONG BLK 85 DAWSON ROAD 
  - groupId: undefined -> [35]
  - latitude: 1.296 -> 1.295500
  - longitude: 103.810 -> 103.810000
- `B5052500` Don Don Donki (City Square Mall)
  - groupId: undefined -> [75]
  - latitude: 1.311 -> 1.311400
  - longitude: 103.856 -> 103.856500
- `B5052501` Block 444 Hougang Avenue 8
  - latitude: 1.380 -> 1.379501
  - longitude: 103.894 -> 103.893865
- `B5052502` Block 988A Buangkok Green
  - latitude: 1.380 -> 1.379507
  - longitude: 103.877 -> 103.877334
- `B5052503` FairPrice Hougang One
  - groupId: undefined -> [41]
  - latitude: 1.375 -> 1.375500
  - longitude: 103.879 -> 103.879200
- `B5052504` FairPrice Lorong Limau
  - groupId: undefined -> [39]
  - latitude: 1.324 -> 1.323800
  - longitude: 103.856 -> 103.855700
- `B5052505` Block 984A Buangkok Link
  - latitude: 1.382 -> 1.382037
  - longitude: 103.881 -> 103.881143
- `B5052506` Cold Storage Holland Village
  - groupId: undefined -> [68]
  - latitude: 1.310 -> 1.310200
  - longitude: 103.795 -> 103.795300
- `B5052507` Cold Storage New Bahru
  - groupId: undefined -> [60]
  - latitude: 1.293 -> 1.292800
  - longitude: 103.839 -> 103.838600
- `B5052508` Block 106 Henderson Crescent
  - latitude: 1.290 -> 1.289680
  - longitude: 103.822 -> 103.822300
- `B5052509` FairPrice 29A Ghim Moh Link
  - groupId: undefined -> [39]
  - latitude: 1.309 -> 1.308600
  - longitude: 103.785 -> 103.784700
- `B5052510` Food-Joy Buona Vista
  - groupId: undefined -> [104]
  - latitude: 1.281 -> 1.280567
  - longitude: 103.787 -> 103.786900
- `B5052511` Block 225C Compassvale Walk
  - latitude: 1.389 -> 1.388583
  - longitude: 103.899 -> 103.898926
- `B5052512` Prime Supermarket Compassvale Street
  - groupId: undefined -> [78]
  - latitude: 1.395 -> 1.394910
  - longitude: 103.896 -> 103.895900
- `B5052513` Don Don Donki (Clarke Quay Central)
  - groupId: undefined -> [75]
  - latitude: 1.289 -> 1.289100
  - longitude: 103.847 -> 103.846700
- `B5052514` Block 122E RIVERVALE DRIVE
  - latitude: 1.388 -> 1.387822
  - longitude: 103.906 -> 103.905800
- `B5052515` Meidi-Ya Millenia Walk
  - groupId: undefined -> [109]
  - latitude: 1.292 -> 1.292100
  - longitude: 103.860 -> 103.859800
- `B5052516` FairPrice Blk 78A Telok Blangah Street 32
  - groupId: undefined -> [39]
  - latitude: 1.273 -> 1.273200
  - longitude: 103.809 -> 103.809100
- `B5052517` Giant Ang Mo Kio Street 31
  - groupId: undefined -> [54]
  - latitude: 1.365 -> 1.364800
  - longitude: 103.848 -> 103.847900
- `B5052542` FairPrice Bukit Merah
  - groupId: undefined -> [40]
  - latitude: 1.283 -> 1.283092
  - longitude: 103.818 -> 103.817600
- `B5052543` Phan99 Supermarket PPT Lodge 1B
  - groupId: undefined -> [113]
  - latitude: 1.416 -> 1.416480
  - longitude: 103.895 -> 103.895354
- `B5052544` Don Don Donki (Suntec City Mall)
  - groupId: undefined -> [74]
  - latitude: 1.293 -> 1.293200
  - longitude: 103.857 -> 103.857000
- `B5052545` Ci Yuan Hawker Centre
  - latitude: 1.375 -> 1.375146
  - longitude: 103.883 -> 103.882900
- `B5052546` SHENG SIONG BLK 231 SUMANG LANE
  - groupId: undefined -> [35]
  - latitude: 1.402 -> 1.402000
  - longitude: 103.892 -> 103.892100
- `B5052547` Block 402 Northshore Drive
  - latitude: 1.415 -> 1.414550
  - longitude: 103.900 -> 103.900248
- `B5052548` Block 20 Telok Blangah Crescent
  - latitude: 1.277 -> 1.277034
  - longitude: 103.822 -> 103.821827
- `B5052549` Market Street Hawker Centre
  - latitude: 1.285 -> 1.284815
  - longitude: 103.850 -> 103.850225
- `B5052550` SHENG SIONG BLK 671 EDGEFIELD PLAINS
  - groupId: undefined -> [37]
  - latitude: 1.406 -> 1.405600
  - longitude: 103.912 -> 103.911900
- `B5052551` Block 228 Bishan Street 23
  - latitude: 1.358 -> 1.358090
  - longitude: 103.846 -> 103.846475
- `B5052552` Block 102 Jalan Rajah
  - latitude: 1.328 -> 1.328325
  - longitude: 103.851 -> 103.851414
- `B5052553` Block 138 Bishan Street 12
  - latitude: 1.344 -> 1.344371
  - longitude: 103.852 -> 103.852490
- `B5052554` Block 12 Cantonment Close
  - latitude: 1.274 -> 1.274482
  - longitude: 103.840 -> 103.840100
- `B5052555` Block 435 Northshore Drive
  - latitude: 1.419 -> 1.418507
  - longitude: 103.910 -> 103.910157
- `B5052556` Punggol Coast Hawker Centre
  - latitude: 1.415 -> 1.414528
  - longitude: 103.908 -> 103.908466
- `B5052557` Block 126A Edgedale Plains
  - latitude: 1.394 -> 1.394238
  - longitude: 103.912 -> 103.911723
- `B5052558` Jasons Deli by Cold Storage ION Orchard
  - groupId: undefined -> [64]
  - latitude: 1.304 -> 1.303800
  - longitude: 103.832 -> 103.831700
- `B5052559` Huber's Butchery @ Dempsey
  - groupId: undefined -> [107]
  - latitude: 1.307 -> 1.306889
  - longitude: 103.810 -> 103.810118
- `B5052560` Block 406C Fernvale Road
  - latitude: 1.389 -> 1.388849
  - longitude: 103.875 -> 103.874627
- `B5052561` Block 120 McNair Road
  - latitude: 1.319 -> 1.319359
  - longitude: 103.857 -> 103.856844
- `B5052562` Block 9 Selegie Road
  - latitude: 1.303 -> 1.303366
  - longitude: 103.851 -> 103.850901
- `B5052563` FairPrice Blk 227 Compassvale Link
  - groupId: undefined -> [39]
  - latitude: 1.382 -> 1.382400
  - longitude: 103.894 -> 103.894000
- `B5052564` FairPrice Punggol Oasis
  - groupId: undefined -> [41]
  - latitude: 1.403 -> 1.403100
  - longitude: 103.913 -> 103.913200
- `B5052565` Cold Storage Great World City
  - groupId: undefined -> [62]
  - latitude: 1.294 -> 1.294201
  - longitude: 103.832 -> 103.832000
- `B5052626` Cold Storage Heartland Mall
  - groupId: undefined -> [57]
  - latitude: 1.359 -> 1.359500
  - longitude: 103.885 -> 103.885100
- `B5052627` Cold Storage Marina One
  - groupId: undefined -> [61]
  - latitude: 1.277 -> 1.277341
  - longitude: 103.853 -> 103.852500
- `B5052628` Block 125 Aljunied Road
  - latitude: 1.323 -> 1.323210
  - longitude: 103.882 -> 103.881800
- `B5052629` Block 46 Circuit Road
  - latitude: 1.326 -> 1.326097
  - longitude: 103.886 -> 103.886200
- `B5052630` FairPrice MacPherson Blossom
  - groupId: undefined -> [45]
  - latitude: 1.325 -> 1.325200
  - longitude: 103.890 -> 103.890100
- `B5052631` Block 8 Jalan Bukit Ho Swee
  - latitude: 1.288 -> 1.287529
  - longitude: 103.832 -> 103.832000
- `B5052632` FairPrice Punggol Plaza
  - groupId: undefined -> [41]
  - latitude: 1.394 -> 1.394200
  - longitude: 103.913 -> 103.913000
- `B5052633` SHENG SIONG BLK 122 ANG MO KIO AVE 3 
  - groupId: undefined -> [35]
  - latitude: 1.370 -> 1.370200
  - longitude: 103.843 -> 103.843200
- `B5052634` FairPrice Kang Kar Mall
  - groupId: undefined -> [39]
  - latitude: 1.372 -> 1.371800
  - longitude: 103.894 -> 103.894100
- `B5052635` FairPrice Seletar Mall
  - groupId: undefined -> [39]
  - latitude: 1.391 -> 1.391200
  - longitude: 103.876 -> 103.876000
- `B5052636` Culina at COMO Dempsey
  - groupId: undefined -> [102]
  - latitude: 1.305 -> 1.305260
  - longitude: 103.810 -> 103.810343
- `B5052637` FairPrice Punggol Coast Mall
  - groupId: undefined -> [47]
  - latitude: 1.415 -> 1.414900
  - longitude: 103.913 -> 103.912700
- `B5052911` Kukoh 21 Food Centre
  - latitude: 1.288 -> 1.288286
  - longitude: 103.840 -> 103.839885
- `B5052912` Whampoa Market
  - latitude: 1.323 -> 1.323021
  - longitude: 103.855 -> 103.855402
- `B5052913` Hong Lim Food Centre and Market
  - latitude: 1.285 -> 1.285402
  - longitude: 103.846 -> 103.845829
- `B5052914` Nanyang Polytechnic (NYP)
  - latitude: 1.380 -> 1.380104
  - longitude: 103.849 -> 103.848796
- `B5052915` Cheng Yan Court - 269 Queen Street
  - latitude: 1.301 -> 1.300995
  - longitude: 103.854 -> 103.854098
- `B5052916` Block 19 Jalan Membina
  - latitude: 1.286 -> 1.285671
  - longitude: 103.826 -> 103.826387
- `B5052917` Block 81 Redhill Ln
  - latitude: 1.288 -> 1.287878
  - longitude: 103.819 -> 103.819432
- `B5052918` Fair Price Hougang Mall
  - groupId: undefined -> [45]
  - latitude: 1.373 -> 1.372723
  - longitude: 103.894 -> 103.893806
- `B5052919` Blk 5036 Ang Mo Kio Ind Park 2
  - latitude: 1.372 -> 1.372337
  - longitude: 103.862 -> 103.861782
- `B5052920` Bendemeer Market and Food Centre
  - latitude: 1.319 -> 1.319110
  - longitude: 103.863 -> 103.863132
- `B5052921` Block 118 Bukit Merah View
  - latitude: 1.284 -> 1.284208
  - longitude: 103.821 -> 103.820983
- `B5052922` Blk 17 Upper Boon Keng Market and Food Centre
  - latitude: 1.315 -> 1.314861
  - longitude: 103.872 -> 103.871653
- `B5052923` Zion Riverside Food Centre
  - latitude: 1.292 -> 1.292431
  - longitude: 103.831 -> 103.831245
- `B5052924` Pasir Panjang Food Centre
  - latitude: 1.276 -> 1.275896
  - longitude: 103.792 -> 103.791624
- `B5052925` Beo Crescent Market
  - latitude: 1.289 -> 1.288918
  - longitude: 103.827 -> 103.827190
- `B5052926` Chong Boon Market & Food Centre
  - latitude: 1.368 -> 1.368151
  - longitude: 103.856 -> 103.856378
- `B5052927` 628 Ang Mo Kio Food Centre
  - latitude: 1.381 -> 1.380887
  - longitude: 103.841 -> 103.840526
- `B5052928` Fernvale Hawker Centre & Market
  - latitude: 1.392 -> 1.391640
  - longitude: 103.877 -> 103.877011
- `B5052929` Serangoon Garden Market
  - latitude: 1.363 -> 1.363185
  - longitude: 103.867 -> 103.866586
- `B5052930` Chomp Chomp Food Centre
  - latitude: 1.364 -> 1.364391
  - longitude: 103.866 -> 103.866339
- `B5052931` Phan 66 PPT Lodge 1A Dormitory
  - latitude: 1.420 -> 1.419655
  - longitude: 103.896 -> 103.896353
- `B5052932` 11 Telok Blangah Crescent Market and Food Centre
  - latitude: 1.277 -> 1.277303
  - longitude: 103.819 -> 103.818779
- `B5052933` Toa Payoh Vista Market
  - latitude: 1.335 -> 1.334532
  - longitude: 103.852 -> 103.851973
- `B5052934` Holland Village Market and Food Centre
  - latitude: 1.311 -> 1.311148
  - longitude: 103.795 -> 103.795073
- `B5052935` Tiong Bahru Market
  - latitude: 1.285 -> 1.285132
  - longitude: 103.833 -> 103.832726
- `B5052936` Kovan Hougang Market and Food Centre
  - latitude: 1.359 -> 1.359307
  - longitude: 103.886 -> 103.886000
- `B5052938` Margaret Drive Hawker Centre
  - latitude: 1.297 -> 1.297413
  - longitude: 103.805 -> 103.804750
- `B5052939` SCARLETT@AMK 710A
  - groupId: undefined -> [86]
  - latitude: 1.371 -> 1.370683
  - longitude: 103.848 -> 103.847982
- `B5052940` Ang Mo Kio Market & Food Centre Blk 724
  - latitude: 1.372 -> 1.372184
  - longitude: 103.847 -> 103.846500
- `B5052941` Hougang 105 Hainanese Village Centre
  - latitude: 1.354 -> 1.354115
  - longitude: 103.890 -> 103.889900
- `B5052942` Tanglin Halt Market
  - latitude: 1.300 -> 1.300427
  - longitude: 103.798 -> 103.797793
- `B5052943` Kebun Baru Food Centre Block 226H
  - latitude: 1.367 -> 1.367234
  - longitude: 103.840 -> 103.840021
- `B5052944` Teck Ghee Court Market & Food Centre
  - latitude: 1.364 -> 1.364091
  - longitude: 103.848 -> 103.848208
- `B5052945` Commonwealth Crescent Market
  - latitude: 1.307 -> 1.306916
  - longitude: 103.800 -> 103.800432
- `B5052946` Adam Road Food Centre
  - latitude: 1.324 -> 1.324244
  - longitude: 103.814 -> 103.814170
- `B5481004` SHENG SIONG BLK 212 BIDADARI PARK DRIVE
  - groupId: undefined -> [37]
  - latitude: 1.342 -> 1.342400
  - longitude: 103.876 -> 103.875700
- `B5481005` Isetan Scotts Supermarket
  - groupId: undefined -> [108]
  - latitude: 1.306 -> 1.305906
  - longitude: 103.831 -> 103.831400
- `B5481006` FairPrice ZhongShan Park
  - groupId: undefined -> [47]
  - latitude: 1.327 -> 1.327000
  - longitude: 103.846 -> 103.846400
- `B5481007` FairPrice Holland Drive
  - groupId: undefined -> [39]
  - latitude: 1.309 -> 1.309300
  - longitude: 103.793 -> 103.792600
- `B5481008` Block 311D Anchorvale Lane
  - latitude: 1.392 -> 1.391598
  - longitude: 103.884 -> 103.884449
- `B5481009` FairPrice Finest Scotts Square
  - groupId: undefined -> [47]
  - latitude: 1.306 -> 1.305800
  - longitude: 103.833 -> 103.832900
- `B5481010` Block 171 Lorong 1 Toa Payoh
  - latitude: 1.331 -> 1.330980
  - longitude: 103.843 -> 103.842655
- `B5481011` Block 109 Ang Mo Kio Avenue 4
  - latitude: 1.370 -> 1.370236
  - longitude: 103.838 -> 103.837761
- `B5481012` Block 246 Compassvale Road
  - latitude: 1.393 -> 1.392619
  - longitude: 103.899 -> 103.899073
- `B5481013` SCARLETT@DJITSUN AMK
  - groupId: undefined -> [87]
  - latitude: 1.373 -> 1.372900
  - longitude: 103.848 -> 103.847600
- `B5481014` Block 205 Toa Payoh North
  - latitude: 1.342 -> 1.342022
  - longitude: 103.848 -> 103.848213
- `B5481015` FairPrice Rivervale Plaza
  - groupId: undefined -> [45]
  - latitude: 1.386 -> 1.385579
  - longitude: 103.903 -> 103.902503
- `B5481016` Amoy Street Food Centre
  - latitude: 1.279 -> 1.279366
  - longitude: 103.847 -> 103.846722
- `B5481017` FairPrice Kallang Bahru
  - groupId: undefined -> [41]
  - latitude: 1.321 -> 1.321000
  - longitude: 103.871 -> 103.870700
- `B5481018` FairPrice Toa Payoh Hub
  - groupId: undefined -> [43]
  - latitude: 1.333 -> 1.333000
  - longitude: 103.847 -> 103.847000
- `B5481019` Block 974 Hougang Street 91
  - latitude: 1.378 -> 1.377736
  - longitude: 103.879 -> 103.879352
- `B5481020` Don Don Donki (100AM)
  - groupId: undefined -> [74]
  - latitude: 1.275 -> 1.274900
  - longitude: 103.843 -> 103.843400
- `B5481021` SCARLETT@HEARTLAND MALL
  - groupId: undefined -> [88]
  - latitude: 1.359 -> 1.359500
  - longitude: 103.885 -> 103.885100
- `B5481022` Block 143 Lorong 2 Toa Payoh
  - latitude: 1.336 -> 1.335653
  - longitude: 103.844 -> 103.843900
- `B5481023` FairPrice Thomson Plaza
  - groupId: undefined -> [47]
  - latitude: 1.355 -> 1.354900
  - longitude: 103.831 -> 103.830800
- `B5481024` Don Don Donki (Square2)
  - groupId: undefined -> [74]
  - latitude: 1.321 -> 1.320700
  - longitude: 103.844 -> 103.844300
- `B5481025` Cold Storage UE Square
  - groupId: undefined -> [60]
  - latitude: 1.292 -> 1.292100
  - longitude: 103.843 -> 103.842500
- `B5481026` Cold Storage United Square
  - groupId: undefined -> [62]
  - latitude: 1.317 -> 1.317300
  - longitude: 103.844 -> 103.843500
- `B5481027` U STARS @330Anchorvale Street
  - groupId: undefined -> [84]
  - latitude: 1.397 -> 1.396800
  - longitude: 103.889 -> 103.889100
- `B5481028` FairPrice Bukit Timah Plaza
  - groupId: undefined -> [39]
  - latitude: 1.339 -> 1.338700
  - longitude: 103.779 -> 103.778800
- `B5481029` Block 134 Jalan Bukit Merah
  - latitude: 1.279 -> 1.279130
  - longitude: 103.828 -> 103.827600
- `B5481030` Marks & Spencer Wheelock Place
  - groupId: undefined -> [97]
  - latitude: 1.305 -> 1.304700
  - longitude: 103.831 -> 103.830600
- `B5481031` Giant Beauty World
  - groupId: undefined -> [51]
  - latitude: 1.342 -> 1.342300
  - longitude: 103.776 -> 103.776100
- `B5481032` Maxwell Food Centre
  - latitude: 1.280 -> 1.280367
  - longitude: 103.845 -> 103.844800
- `B5481033` Block 11 York Hill
  - latitude: 1.287 -> 1.287127
  - longitude: 103.838 -> 103.837978
- `B5481034` SHENG SIONG BLK 25 GHIM MOH LINK 
  - groupId: undefined -> [35]
  - latitude: 1.308 -> 1.308100
  - longitude: 103.786 -> 103.785900
- `B5481035` Block 911 Hougang Street 91
  - latitude: 1.379 -> 1.378881
  - longitude: 103.884 -> 103.883751
- `B5481036` SHENG SIONG BLK 18B CIRCUIT ROAD 
  - groupId: undefined -> [35]
  - latitude: 1.329 -> 1.329200
  - longitude: 103.888 -> 103.888200
- `B5481037` FairPrice Anchorvale Village
  - groupId: undefined -> [45]
  - latitude: 1.397 -> 1.396700
  - longitude: 103.888 -> 103.888200
- `B5481038` Cold Storage Tanglin Mall
  - groupId: undefined -> [62]
  - latitude: 1.305 -> 1.304900
  - longitude: 103.824 -> 103.823800
- `B5481039` Block 124C Rivervale Drive
  - latitude: 1.388 -> 1.388129
  - longitude: 103.903 -> 103.902805
- `B5481040` Block 108 Potong Pasir Avenue 1
  - latitude: 1.335 -> 1.334998
  - longitude: 103.868 -> 103.867966
- `B5481041` Block 105 Rivervale Walk
  - latitude: 1.382 -> 1.382197
  - longitude: 103.901 -> 103.900712
- `B5481042` FairPrice 1 Jalan Bukit Merah
  - groupId: undefined -> [47]
  - latitude: 1.286 -> 1.286500
  - longitude: 103.808 -> 103.808300
- `B5481043` Block 658 Hougang Avenue 8
  - latitude: 1.373 -> 1.373277
  - longitude: 103.883 -> 103.882850
- `B5481044` ANG MO SUPERMARKET-260 ANG MO KIO ST21
  - groupId: undefined -> [92]
  - latitude: 1.369 -> 1.368900
  - longitude: 103.835 -> 103.834700
- `B5481045` FairPrice 682 Hougang Avenue 4
  - groupId: undefined -> [45]
  - latitude: 1.375 -> 1.374530
  - longitude: 103.886 -> 103.885620
- `B5481046` FairPrice Orchard Grand Court
  - groupId: undefined -> [39]
  - latitude: 1.297 -> 1.297300
  - longitude: 103.838 -> 103.838300
- `B5481047` SHENG SIONG BLK 6 POTONG PASIR AVE 2,  POTONG PASIR CC 
  - groupId: undefined -> [37]
  - latitude: 1.333 -> 1.332700
  - longitude: 103.867 -> 103.867100
- `B5481048` FairPrice Finest Tiong Bahru Plaza
  - groupId: undefined -> [47]
  - latitude: 1.287 -> 1.286600
  - longitude: 103.827 -> 103.826700
- `B5481049` One Punggol Hawker Centre
  - latitude: 1.408 -> 1.408404
  - longitude: 103.905 -> 103.905441
- `B5481050` Block 624 Hougang Avenue 8
  - latitude: 1.370 -> 1.370237
  - longitude: 103.882 -> 103.882281
- `B5481051` FairPrice Finest Artra
  - groupId: undefined -> [47]
  - latitude: 1.290 -> 1.290100
  - longitude: 103.817 -> 103.816900
- `B5481052` FairPrice SengKang East
  - groupId: undefined -> [39]
  - latitude: 1.386 -> 1.386400
  - longitude: 103.893 -> 103.893300
- `B5481053` FairPrice Blk 635B Punggol Drive
  - groupId: undefined -> [39]
  - latitude: 1.398 -> 1.397600
  - longitude: 103.920 -> 103.919800
- `B5481054` Block 203A Compassvale Road
  - latitude: 1.387 -> 1.386708
  - longitude: 103.895 -> 103.895444
- `B5481055` FairPrice Nex Mall
  - groupId: undefined -> [39]
  - latitude: 1.351 -> 1.350700
  - longitude: 103.872 -> 103.871900
- `B5481056` FairPrice Chinatown Point
  - groupId: undefined -> [47]
  - latitude: 1.285 -> 1.285400
  - longitude: 103.845 -> 103.845000
- `B5481057` Block 610 Ang Mo Kio Avenue 4
  - latitude: 1.380 -> 1.379568
  - longitude: 103.839 -> 103.839405
- `B5481058` U STARS @215C Compassvale Drive
  - groupId: undefined -> [84]
  - latitude: 1.390 -> 1.389900
  - longitude: 103.893 -> 103.892900
- `B5481059` Newton Food Centre
  - latitude: 1.312 -> 1.311947
  - longitude: 103.840 -> 103.839512
- `B5481060` Block 206A Woodleigh Link
  - latitude: 1.341 -> 1.341440
  - longitude: 103.873 -> 103.872600
- `B5481061` Cold Storage Alocassia
  - groupId: undefined -> [57]
  - latitude: 1.320 -> 1.319538
  - longitude: 103.827 -> 103.827332
- `B5481062` 509 Serangoon North Ave 4
  - latitude: 1.372 -> 1.372216
  - longitude: 103.876 -> 103.876255
- `B5481063` Prime Supermarket Toa Payoh Lorong 7
  - groupId: undefined -> [78]
  - latitude: 1.336 -> 1.335753
  - longitude: 103.857 -> 103.856898
- `B5481064` SCARLETT@NEX
  - groupId: undefined -> [87]
  - latitude: 1.351 -> 1.350700
  - longitude: 103.872 -> 103.871900
- `B5481065` Block 204 Bishan Street 23
  - latitude: 1.355 -> 1.354988
  - longitude: 103.847 -> 103.847400
- `B5481066` Cold Storage Cluny Court
  - groupId: undefined -> [51]
  - latitude: 1.323 -> 1.322700
  - longitude: 103.814 -> 103.814400
- `B5481067` Cold Storage Marina Bay Link Mall
  - groupId: undefined -> [67]
  - latitude: 1.281 -> 1.280644
  - longitude: 103.854 -> 103.853894
- `B5481068` FairPrice Finest Funan Mall
  - groupId: undefined -> [50]
  - latitude: 1.291 -> 1.291300
  - longitude: 103.850 -> 103.850100
- `B5481069` Meidi-Ya Great World City
  - groupId: undefined -> [110]
  - latitude: 1.294 -> 1.293689
  - longitude: 103.832 -> 103.832000
- `B5481070` Cold Storage Takashimaya
  - groupId: undefined -> [63]
  - latitude: 1.303 -> 1.302672
  - longitude: 103.834 -> 103.834400
- `B5481071` Giant Buangkok Crescent
  - groupId: undefined -> [51]
  - latitude: 1.381 -> 1.380900
  - longitude: 103.879 -> 103.879300
- `B5481072` Block 568 Hougang Street 51
  - latitude: 1.379 -> 1.378645
  - longitude: 103.889 -> 103.889063
- `B5481073` ANG MO SUPERMARKET-639 PUNGGOL DRIVE
  - groupId: undefined -> [92]
  - latitude: 1.399 -> 1.399400
  - longitude: 103.916 -> 103.916000
- `B5481074` Cold Storage Chancery Court
  - groupId: undefined -> [51]
  - latitude: 1.317 -> 1.317300
  - longitude: 103.836 -> 103.836000
- `B5481075` FairPrice Blk 279 Bishan Street 24
  - groupId: undefined -> [39]
  - latitude: 1.357 -> 1.357200
  - longitude: 103.844 -> 103.843900
- `B5481076` Cold Storage Sentosa Cove
  - groupId: undefined -> [57]
  - latitude: 1.247 -> 1.247309
  - longitude: 103.840 -> 103.840105
- `B5481077` Block 289D Punggol Place
  - latitude: 1.402 -> 1.401996
  - longitude: 103.904 -> 103.903579
- `B5481078` MUSTAFA
  - groupId: undefined -> [111]
  - latitude: 1.310 -> 1.309800
  - longitude: 103.855 -> 103.855472
- `B5481079` FairPrice Square 2
  - groupId: undefined -> [48]
  - latitude: 1.321 -> 1.320600
  - longitude: 103.844 -> 103.844000
- `B5481080` Prime Supermarket Jalan Tenteram
  - groupId: undefined -> [78]
  - latitude: 1.328 -> 1.327754
  - longitude: 103.861 -> 103.861100
- `B5481081` ACE SIGNATURE @ NTP
  - groupId: undefined -> [99]
  - latitude: 1.352 -> 1.352100
  - longitude: 103.861 -> 103.860800
- `B5481082` SHENG SIONG 2 HANDY ROAD,  THE CATHAY
  - groupId: undefined -> [37]
  - latitude: 1.299 -> 1.299470
  - longitude: 103.848 -> 103.847700
- `B5481083` SCARLETT@SHAW PLAZA
  - groupId: undefined -> [89]
  - latitude: 1.325 -> 1.325306
  - longitude: 103.851 -> 103.851142
- `B5481084` FairPrice 150 Towner Road
  - groupId: undefined -> [41]
  - latitude: 1.318 -> 1.318000
  - longitude: 103.860 -> 103.859700
- `B5481085` Block 38B Bendemeer Road
  - latitude: 1.321 -> 1.320651
  - longitude: 103.867 -> 103.866811
- `B5481086` FairPrice Depot Heights Shopping Centre
  - groupId: undefined -> [47]
  - latitude: 1.281 -> 1.281300
  - longitude: 103.810 -> 103.809900
- `B5481087` Marks & Spencer Vivo City
  - groupId: undefined -> [97]
  - latitude: 1.265 -> 1.264700
  - longitude: 103.823 -> 103.823100
- `B5481088` Block 651B Ang Mo Kio Avenue 9
  - latitude: 1.384 -> 1.383633
  - longitude: 103.842 -> 103.842165
- `B5481089` Don Don Donki (Waterway Point)
  - groupId: undefined -> [75]
  - latitude: 1.407 -> 1.406800
  - longitude: 103.902 -> 103.902400
- `B5481090` Supernature
  - groupId: undefined -> [103]
  - latitude: 1.306 -> 1.305843
  - longitude: 103.811 -> 103.811359
- `B5481091` Block 93 Whampoa Drive
  - latitude: 1.322 -> 1.322233
  - longitude: 103.855 -> 103.854838
- `B5481092` Block 943 Hougang Street 92
  - latitude: 1.374 -> 1.373845
  - longitude: 103.881 -> 103.880658
- `B5481093` FairPrice Finest 111 Somerset
  - groupId: undefined -> [47]
  - latitude: 1.300 -> 1.300400
  - longitude: 103.838 -> 103.837600
- `B5481094` U STARS @261 Punggol Way
  - groupId: undefined -> [84]
  - latitude: 1.405 -> 1.405400
  - longitude: 103.897 -> 103.896900
- `B5481095` Block 313 Shunfu Road
  - latitude: 1.351 -> 1.351493
  - longitude: 103.838 -> 103.837522
- `B5481096` Block 607 Hougang Avenue 4
  - latitude: 1.370 -> 1.370229
  - longitude: 103.886 -> 103.886200
- `B5481097` SCARLETT@PLAZA SINGAPURA
  - groupId: undefined -> [87]
  - latitude: 1.301 -> 1.300700
  - longitude: 103.845 -> 103.844900
- `B5481098` Cold Storage One North
  - groupId: undefined -> [66]
  - latitude: 1.299 -> 1.298900
  - longitude: 103.787 -> 103.787400
- `B5481099` FairPrice 5 Upper Boon Keng Road
  - groupId: undefined -> [39]
  - latitude: 1.313 -> 1.312500
  - longitude: 103.873 -> 103.872700
- `B5481100` Block 113B Alkaff Crescent
  - latitude: 1.336 -> 1.336080
  - longitude: 103.873 -> 103.872600
- `B5481101` SHENG SIONG BLK 338 ANCHORVALE CRESCENT 
  - groupId: undefined -> [37]
  - latitude: 1.399 -> 1.399200
  - longitude: 103.890 -> 103.889600
- `B5481102` FairPrice AMK Hub
  - groupId: undefined -> [39]
  - latitude: 1.369 -> 1.369000
  - longitude: 103.848 -> 103.848100
- `B5481103` Giant Serangoon Central Drive
  - groupId: undefined -> [51]
  - latitude: 1.353 -> 1.353219
  - longitude: 103.872 -> 103.871600
- `B5481104` Cold Storage Paragon
  - groupId: undefined -> [57]
  - latitude: 1.304 -> 1.303905
  - longitude: 103.836 -> 103.835600
- `B5481105` Block 170 Ang Mo Kio Avenue 4
  - latitude: 1.374 -> 1.373943
  - longitude: 103.837 -> 103.837007
- `B5481106` Golden Mile Food Centre
  - latitude: 1.303 -> 1.303135
  - longitude: 103.864 -> 103.863900
- `B5481107` Cold Storage Aperia
  - groupId: undefined -> [57]
  - latitude: 1.310 -> 1.309700
  - longitude: 103.864 -> 103.864300
- `B5481108` Little Farms Market, Serangoon Garden (Grocery store)
  - groupId: undefined -> [95]
  - latitude: 1.365 -> 1.365100
  - longitude: 103.865 -> 103.865200
- `B5481109` Prime Supermarket Punggol Field
  - groupId: undefined -> [78]
  - latitude: 1.397 -> 1.396599
  - longitude: 103.909 -> 103.908600
- `B5481110` FairPrice City Square Mall
  - groupId: undefined -> [47]
  - latitude: 1.312 -> 1.311800
  - longitude: 103.857 -> 103.856600
- `B5481111` Block 243 Bishan Street 22
  - latitude: 1.361 -> 1.360876
  - longitude: 103.845 -> 103.844700
- `B5481112` Woodleigh Village Hawker Centre
  - latitude: 1.340 -> 1.339834
  - longitude: 103.872 -> 103.872428
- `B5481113` Block 524 Hougang Avenue 6
  - latitude: 1.374 -> 1.374125
  - longitude: 103.890 -> 103.890393
- `B5481114` SHENG SIONG BLK 622D PUNGGOL CENTRAL
  - groupId: undefined -> [35]
  - latitude: 1.401 -> 1.400500
  - longitude: 103.910 -> 103.910400
- `B5481115` SHENG SIONG BLK 465 FERNVALE ROAD 
  - groupId: undefined -> [35]
  - latitude: 1.398 -> 1.398200
  - longitude: 103.877 -> 103.876600
- `B5481116` SCARLETT@PEOPLE'S PARK COMPLEX
  - groupId: undefined -> [86]
  - latitude: 1.284 -> 1.284166
  - longitude: 103.842 -> 103.842450
- `B5481117` FairPrice Finest Valley Point
  - groupId: undefined -> [44]
  - latitude: 1.293 -> 1.292900
  - longitude: 103.827 -> 103.827000
- `B5481118` FairPrice Serangoon Central
  - groupId: undefined -> [39]
  - latitude: 1.354 -> 1.353900
  - longitude: 103.871 -> 103.870700
- `B5481119` Block 207D Compassvale Lane
  - latitude: 1.385 -> 1.384594
  - longitude: 103.897 -> 103.897402
- `B5481120` FairPrice Hougang 202
  - groupId: undefined -> [39]
  - latitude: 1.358 -> 1.357700
  - longitude: 103.884 -> 103.883800
- `B5481121` Little Farms Market, Tanglin Mall
  - groupId: undefined -> [96]
  - latitude: 1.305 -> 1.305000
  - longitude: 103.824 -> 103.823800
- `B5481122` Cold Storage Compass One
  - groupId: undefined -> [57]
  - latitude: 1.392 -> 1.391800
  - longitude: 103.895 -> 103.894900
- `B5481123` ACE MARKETPLACE (86RC)
  - groupId: undefined -> [117]
  - latitude: 1.287 -> 1.286924
  - longitude: 103.819 -> 103.818678
- `B5481124` Block 201 Toa Payoh North
  - latitude: 1.342 -> 1.341542
  - longitude: 103.850 -> 103.850000
- `B5481125` Block 95B Henderson Road
  - latitude: 1.287 -> 1.286993
  - longitude: 103.822 -> 103.821579
- `B5481126` Little Farms Market, Sentosa
  - groupId: undefined -> [94]
  - latitude: 1.247 -> 1.247000
  - longitude: 103.840 -> 103.839600
- `B5481127` Prime Supermarket Buangkok Square
  - groupId: undefined -> [81]
  - latitude: 1.385 -> 1.384521
  - longitude: 103.882 -> 103.881600
- `B5481128` FairPrice Finest 100AM
  - groupId: undefined -> [46]
  - latitude: 1.275 -> 1.274600
  - longitude: 103.843 -> 103.843400
- `B5481129` Cold Storage Star Vista
  - groupId: undefined -> [59]
  - latitude: 1.307 -> 1.306890
  - longitude: 103.788 -> 103.787900
- `B5481130` FairPrice Rivervale Shores
  - groupId: undefined -> [41]
  - latitude: 1.386 -> 1.386400
  - longitude: 103.909 -> 103.909300
- `B5481131` SHENG SIONG BLK 266 COMPASSVALE BOW 
  - groupId: undefined -> [35]
  - latitude: 1.382 -> 1.382000
  - longitude: 103.897 -> 103.897000
- `B5481132` FairPrice Finest Sengkang Grand
  - groupId: undefined -> [47]
  - latitude: 1.383 -> 1.382600
  - longitude: 103.892 -> 103.892100
- `B5481133` Giant Kim Keat Avenue
  - groupId: undefined -> [55]
  - latitude: 1.332 -> 1.332148
  - longitude: 103.857 -> 103.857400
- `B5481134` Block 316B Punggol Way
  - latitude: 1.409 -> 1.409101
  - longitude: 103.898 -> 103.897753
- `B5481135` Block 114 Lorong 1 Toa Payoh
  - latitude: 1.341 -> 1.340847
  - longitude: 103.844 -> 103.844300
- `B5481136` Giant Telok Blangah Crescent
  - groupId: undefined -> [53]
  - latitude: 1.278 -> 1.277800
  - longitude: 103.819 -> 103.819400
- `B5481137` FairPrice NUH Medical Centre
  - groupId: undefined -> [48]
  - latitude: 1.293 -> 1.293300
  - longitude: 103.784 -> 103.784400
- `B5481138` SHENG SIONG BLK 221 MOUNT VERNON RD 
  - groupId: undefined -> [37]
  - latitude: 1.342 -> 1.341600
  - longitude: 103.880 -> 103.880500
- `B5481139` Block 291B Compassvale Street
  - latitude: 1.396 -> 1.396022
  - longitude: 103.898 -> 103.898359
- `B5481140` FairPrice Poiz Centre
  - groupId: undefined -> [39]
  - latitude: 1.331 -> 1.331200
  - longitude: 103.868 -> 103.868100
- `B5481141` FairPrice Stirling
  - groupId: undefined -> [47]
  - latitude: 1.291 -> 1.291000
  - longitude: 103.803 -> 103.803100
- `B5481142` FairPrice Alexandra Retail Centre ARC (PSA Branch)
  - groupId: undefined -> [48]
  - latitude: 1.274 -> 1.273700
  - longitude: 103.802 -> 103.801500
- `B5481143` FairPrice Holland V
  - groupId: undefined -> [47]
  - latitude: 1.310 -> 1.310400
  - longitude: 103.796 -> 103.795900
- `B5481144` FairPrice Dunearn Village
  - groupId: undefined -> [47]
  - latitude: 1.337 -> 1.336700
  - longitude: 103.784 -> 103.783600
- `B5481145` Block 25 Sin Ming Road
  - latitude: 1.355 -> 1.354920
  - longitude: 103.838 -> 103.837758
- `B5481146` Prime Supermarket Hougang Avenue 1
  - groupId: undefined -> [78]
  - latitude: 1.354 -> 1.353998
  - longitude: 103.891 -> 103.890924
- `B5481147` FairPrice Blk 510 Bishan Street 13
  - groupId: undefined -> [41]
  - latitude: 1.349 -> 1.348700
  - longitude: 103.850 -> 103.849800
- `B5481148` Block 112 Bukit Purmei
  - latitude: 1.275 -> 1.274530
  - longitude: 103.826 -> 103.825900
- `B5481149` Block 473B Upper Serangoon Crescent
  - latitude: 1.376 -> 1.375954
  - longitude: 103.901 -> 103.901052
- `B5481150` Block 37 Jalan Rumah Tinggi
  - latitude: 1.289 -> 1.289225
  - longitude: 103.809 -> 103.809171
- `B5481151` Block 9 Toh Yi Drive
  - latitude: 1.338 -> 1.338297
  - longitude: 103.774 -> 103.773589
- `B5481152` Thai Supermarket Pte Ltd
  - groupId: undefined -> [119]
  - latitude: 1.310 -> 1.309681
  - longitude: 103.864 -> 103.864320
- `B5481153` Block 466 Hougang Avenue 8
  - latitude: 1.373 -> 1.372861
  - longitude: 103.897 -> 103.897000
- `B5481154` FairPrice 43 Cambridge Road
  - groupId: undefined -> [41]
  - latitude: 1.315 -> 1.315400
  - longitude: 103.849 -> 103.849400
- `B5481155` Block 318 Serangoon Avenue 2
  - latitude: 1.353 -> 1.352863
  - longitude: 103.867 -> 103.867100
- `B5481156` Cold Storage Guthrie House
  - groupId: undefined -> [57]
  - latitude: 1.331 -> 1.330753
  - longitude: 103.796 -> 103.795600
- `B5481157` Block 310C Punggol Walk
  - latitude: 1.410 -> 1.409698
  - longitude: 103.900 -> 103.900196
- `B5481158` Cold Storage Greenwich
  - groupId: undefined -> [62]
  - latitude: 1.388 -> 1.387584
  - longitude: 103.869 -> 103.869400
- `B5481159` SCARLETT@GRANTRAL MACPHERSON
  - groupId: undefined -> [87]
  - latitude: 1.334 -> 1.333600
  - longitude: 103.888 -> 103.888000
- `B5481160` FairPrice French Road
  - groupId: undefined -> [41]
  - latitude: 1.309 -> 1.308900
  - longitude: 103.862 -> 103.861900
- `B5481161` Block 129 Lorong Ah Soo
  - latitude: 1.352 -> 1.351523
  - longitude: 103.888 -> 103.887500
- `B5481162` Block 272 Punggol Walk
  - latitude: 1.403 -> 1.402870
  - longitude: 103.901 -> 103.900763
- `B5481163` Buangkok Hawker Centre
  - latitude: 1.382 -> 1.382427
  - longitude: 103.892 -> 103.892190
- `B5481164` Block 461A Sengkang West Way
  - latitude: 1.395 -> 1.394606
  - longitude: 103.871 -> 103.870690
- `B5481165` Block 144 Jalan Bukit Merah
  - latitude: 1.277 -> 1.277371
  - longitude: 103.830 -> 103.829892
- `B5481166` Block 236 Hougang Avenue 1
  - latitude: 1.358 -> 1.357830
  - longitude: 103.889 -> 103.888900
- `B5481167` Cold Storage Jelita
  - groupId: undefined -> [51]
  - latitude: 1.318 -> 1.317578
  - longitude: 103.786 -> 103.785900
- `B5481168` Sembawang Hills Food Centre
  - latitude: 1.372 -> 1.372328
  - longitude: 103.829 -> 103.829035
- `B5481169` Block 13 Dover Close East
  - latitude: 1.305 -> 1.305429
  - longitude: 103.786 -> 103.786000
- `B5481170` Block 12 Farrer Park Road
  - latitude: 1.312 -> 1.312127
  - longitude: 103.852 -> 103.851800
- `B5481171` Block 114 Potong Pasir
  - latitude: 1.337 -> 1.336758
  - longitude: 103.863 -> 103.863212
- `B5481172` SHENG SIONG BLK 2 ANG MO KIO DRIVE, ITE COLLEGE CENTRAL
  - groupId: undefined -> [36]
  - latitude: 1.378 -> 1.377800
  - longitude: 103.856 -> 103.856300
- `B5481173` Cold Storage One Holland Village
  - groupId: undefined -> [62]
  - latitude: 1.312 -> 1.311500
  - longitude: 103.794 -> 103.793700
- `B5481174` Block 204A Punggol Field
  - latitude: 1.399 -> 1.398894
  - longitude: 103.903 -> 103.902914
- `B5481175` Block 212 Serangoon Avenue 4
  - latitude: 1.357 -> 1.356786
  - longitude: 103.873 -> 103.873000
- `B5481176` Block 54 Geylang Bahru
  - latitude: 1.324 -> 1.323937
  - longitude: 103.868 -> 103.867800
- `B5481177` FairPrice Finest The Centrepoint
  - groupId: undefined -> [45]
  - latitude: 1.302 -> 1.301700
  - longitude: 103.840 -> 103.839500
- `B5481178` Giant Hougang Green
  - groupId: undefined -> [51]
  - latitude: 1.379 -> 1.378900
  - longitude: 103.887 -> 103.887300
- `B5481179` Block 336 Hougang Avenue 7
  - latitude: 1.369 -> 1.369362
  - longitude: 103.898 -> 103.898200
- `B5481180` Block 195D Punggol Road
  - latitude: 1.402 -> 1.401572
  - longitude: 103.907 -> 103.906937
- `B5481181` Don Don Donki (Tiong Bahru Plaza)
  - groupId: undefined -> [76]
  - latitude: 1.286 -> 1.286300
  - longitude: 103.827 -> 103.827300
- `B5481182` FairPrice Finest Junction 8
  - groupId: undefined -> [41]
  - latitude: 1.351 -> 1.351084
  - longitude: 103.849 -> 103.848945
- `B5481183` Block 470B Upper Serangoon Crescent
  - latitude: 1.379 -> 1.379047
  - longitude: 103.901 -> 103.900800
- `B5481184` Block 232 Lorong 8 Toa Payoh
  - latitude: 1.338 -> 1.337591
  - longitude: 103.859 -> 103.859100
- `B5481185` Block 15 Joo Seng Road
  - latitude: 1.336 -> 1.335598
  - longitude: 103.880 -> 103.880233
- `B5481186` Prime Supermarket 159A Hougang Street 11
  - groupId: undefined -> [78]
  - latitude: 1.352 -> 1.351909
  - longitude: 103.879 -> 103.879500
- `B5481187` Block 433B Sengkang West Way
  - latitude: 1.394 -> 1.393831
  - longitude: 103.878 -> 103.877764
- `B5481188` SCARLETT@SUNTEC CITY
  - groupId: undefined -> [87]
  - latitude: 1.295 -> 1.294600
  - longitude: 103.860 -> 103.860300
- `B5481189` FairPrice Blk 192 Toa Payoh Lorong 4
  - groupId: undefined -> [39]
  - latitude: 1.332 -> 1.331840
  - longitude: 103.851 -> 103.850600
- `B5481190` Block 325C Sengkang East Way
  - latitude: 1.393 -> 1.393298
  - longitude: 103.891 -> 103.891349
- `B5481191` SHENG SIONG BLK 11 UPPER BOON KENG ROAD 
  - groupId: undefined -> [35]
  - latitude: 1.314 -> 1.314200
  - longitude: 103.871 -> 103.870600
- `B5481192` FairPrice North Shore
  - groupId: undefined -> [41]
  - latitude: 1.417 -> 1.417419
  - longitude: 103.911 -> 103.911336
- `B5481193` Block 48 Strathmore Avenue
  - latitude: 1.294 -> 1.293800
  - longitude: 103.808 -> 103.807801
- `B5481194` North Bridge Road Market & Food Centre
  - latitude: 1.306 -> 1.305872
  - longitude: 103.864 -> 103.864000
- `B5481195` Block 112 Bishan Street 12
  - latitude: 1.347 -> 1.346887
  - longitude: 103.849 -> 103.848814
- `B5481196` Pek Kio Market & Food Centre
  - latitude: 1.316 -> 1.316230
  - longitude: 103.850 -> 103.850224
- `B5481197` Telok Blangah Rise Market
  - latitude: 1.273 -> 1.272716
  - longitude: 103.822 -> 103.821944
- `B5481198` Blk 112 Jalan Bukit Merah Market and Food Centre
  - latitude: 1.280 -> 1.280271
  - longitude: 103.826 -> 103.826004
- `B5481199` Marks & Spencer Raffles City
  - latitude: 1.295 -> 1.294741
  - longitude: 103.853 -> 103.853170
- `B5481200` Tekka Centre / Zhu Jiao Market
  - latitude: 1.306 -> 1.306190
  - longitude: 103.851 -> 103.850533
- `B5481201` National University of Singapore (NUS) Frontier Canteen
  - latitude: 1.296 -> 1.296489
  - longitude: 103.780 -> 103.780364
- `B5481202` Cold Storage Orchard Hotel
  - latitude: 1.307 -> 1.307435
  - longitude: 103.829 -> 103.828820
- `B5481203` SHENG SIONG NEW BRIDGE CENTRE
  - latitude: 1.283 -> 1.282864
  - longitude: 103.843 -> 103.842566
- `B5481204` Redhill Food Centre
  - latitude: 1.287 -> 1.287315
  - longitude: 103.818 -> 103.818183
- `B5481205` 20 Ghim Moh Road Market & Food Centre
  - latitude: 1.311 -> 1.311134
  - longitude: 103.788 -> 103.788212
- `B5481206` Bukit Merah Central Food Centre
  - latitude: 1.283 -> 1.283464
  - longitude: 103.817 -> 103.817406
- `B5481207` Alexandra Village Food Centre
  - latitude: 1.287 -> 1.286608
  - longitude: 103.805 -> 103.804529
- `B5481208` Toa Payoh West Market and Food Court
  - latitude: 1.338 -> 1.338173
  - longitude: 103.845 -> 103.844728
- `B5481209` Mayflower Market
  - latitude: 1.374 -> 1.374185
  - longitude: 103.839 -> 103.838810
- `B5481210` All India Supermart Pte Ltd
  - latitude: 1.308 -> 1.308048
  - longitude: 103.854 -> 103.854285
- `B5481211` Toa Payoh Lorong 8 Blk 210 Hawker Centre
  - latitude: 1.340 -> 1.340327
  - longitude: 103.855 -> 103.854504
- `B5481212` Holland Drive Market and Food Centre
  - latitude: 1.308 -> 1.308199
  - longitude: 103.793 -> 103.792799
- `B5481213` Li Li Cheng Punggol
  - latitude: 1.402 -> 1.402339
  - longitude: 103.901 -> 103.901259
- `B5481214` Blk 6 Tanjong Pagar Plaza Market and Food Centre
  - latitude: 1.277 -> 1.276553
  - longitude: 103.843 -> 103.843119
- `B5481215` Toa Payoh Lorong 4 Blk 94
  - latitude: 1.339 -> 1.339459
  - longitude: 103.849 -> 103.849339
- `B5481216` Mei Chin Road Market
  - latitude: 1.293 -> 1.293438
  - longitude: 103.803 -> 103.802914
- `B5481217` Shunfu-Mart
  - latitude: 1.352 -> 1.352005
  - longitude: 103.837 -> 103.837119
- `B5481218` Blk 115 Bukit Merah View Market and Food Centre
  - latitude: 1.285 -> 1.285494
  - longitude: 103.822 -> 103.822424
- `B5481219` Empress Road Market and Food Centre
  - latitude: 1.316 -> 1.316339
  - longitude: 103.806 -> 103.805642
- `B5481220` Block 150 Mei Ling St
  - latitude: 1.295 -> 1.294974
  - longitude: 103.804 -> 103.804150
- `B5481221` Block 49 Lengkok Bahru
  - latitude: 1.288 -> 1.287609
  - longitude: 103.812 -> 103.811998
- `B5481222` Block 102 Bukit Purmei Road
  - latitude: 1.272 -> 1.271908
  - longitude: 103.827 -> 103.826735
- `B5481223` Block 8 Tanjong Pagar Plaza
  - latitude: 1.277 -> 1.277220
  - longitude: 103.843 -> 103.842990
- `B5481224` Telok Blangah Food Centre
  - latitude: 1.273 -> 1.273456
  - longitude: 103.808 -> 103.807639
- `B5481225` Block 1 Dover Rd
  - latitude: 1.303 -> 1.302527
  - longitude: 103.783 -> 103.783194
- `B5481226` Block 108B Bidadari Park Drive
  - latitude: 1.333 -> 1.333470
  - longitude: 103.872 -> 103.871813
- `B5481227` Block 52 Lengkok Bahru
  - latitude: 1.289 -> 1.288689
  - longitude: 103.813 -> 103.813038
- `B5481228` 80 Circuit Road Market and Food Centre
  - latitude: 1.328 -> 1.327908
  - longitude: 103.887 -> 103.886946
- `B5481229` Block 118B Jalan Membina
  - latitude: 1.282 -> 1.281797
  - longitude: 103.826 -> 103.826025
- `B5481230` Ngee Ann Polytechnic (NP)
  - latitude: 1.332 -> 1.332445
  - longitude: 103.776 -> 103.775728
- `B5481231` Gardens by the Bay
  - latitude: 1.282 -> 1.281803
  - longitude: 103.866 -> 103.865821
- `B5481232` Block 118A Bidadari Park Drive
  - latitude: 1.337 -> 1.336620
  - longitude: 103.873 -> 103.873417
- `B5481233` Lau Pa Sat Hawker Centre
  - latitude: 1.281 -> 1.280531
  - longitude: 103.850 -> 103.850383
- `B5481234` Block 22 Dover Crescent
  - latitude: 1.307 -> 1.307074
  - longitude: 103.784 -> 103.783808
- `B5481235` Block 8 Cantonment Cl
  - latitude: 1.276 -> 1.275782
  - longitude: 103.839 -> 103.838973
- `B5481236` Block 69 Redhill Cl
  - latitude: 1.287 -> 1.286724
  - longitude: 103.816 -> 103.816431
- `B5481237` Blk 10 AMK Autopoint
  - latitude: 1.376 -> 1.376406
  - longitude: 103.869 -> 103.868963
- `B5481238` Blk 69 Geylang Bahru Market and Food Centre
  - latitude: 1.322 -> 1.321556
  - longitude: 103.870 -> 103.870089
- `B5481239` People's Park Food Centre
  - latitude: 1.285 -> 1.285051
  - longitude: 103.843 -> 103.842577
- `B5481240` Block 44 Telok Blangah Drive
  - latitude: 1.271 -> 1.271145
  - longitude: 103.810 -> 103.809842
- `B5481241` Block 52A Commonwealth Dr
  - latitude: 1.302 -> 1.301941
  - longitude: 103.797 -> 103.796956
- `B5481242` Block 75B Redhill Rd
  - latitude: 1.288 -> 1.288500
  - longitude: 103.816 -> 103.816065
- `B5481243` MacPherson Market & Food Centre
  - latitude: 1.323 -> 1.323479
  - longitude: 103.885 -> 103.885413
- `B5D61001` 526 Serangoon North Ave 4
  - latitude: 1.372 -> 1.371714
  - longitude: 103.873 -> 103.873037
- `B5D61002` Block 668B Edgefield Plains
  - latitude: 1.405 -> 1.404826
  - longitude: 103.913 -> 103.912935
- `B5D61003` Block 165A Punggol Central
  - latitude: 1.395 -> 1.394877
  - longitude: 103.915 -> 103.914607
- `B5D61004` Block 655A Punggol East
  - latitude: 1.400 -> 1.399616
  - longitude: 103.920 -> 103.920499
- `B5D61005` Blk 1 AMK Tech I
  - latitude: 1.378 -> 1.378322
  - longitude: 103.868 -> 103.868337
- `B5D61006` Block 677A Punggol Drive
  - latitude: 1.405 -> 1.405059
  - longitude: 103.909 -> 103.909460
- `B5D61007` Block 511 Ang Mo Kio Ave 8
  - latitude: 1.374 -> 1.373670
  - longitude: 103.850 -> 103.850319
- `B5D61009` Block 684A Edgedale Plains
  - latitude: 1.403 -> 1.402850
  - longitude: 103.916 -> 103.915960
- `B5D61010` Blk 36 Sin Ming Industrial Estate
  - latitude: 1.359 -> 1.358835
  - longitude: 103.839 -> 103.838853
- `B5D61011` Blk 5058 Ang Mo Kio Ind Park 2
  - latitude: 1.375 -> 1.374977
  - longitude: 103.860 -> 103.860302
- `B5D61013` FairPrice Punggol Waterway Point
  - latitude: 1.407 -> 1.407000
  - longitude: 103.902 -> 103.901600
- `B5D61014` Singapore Management University (SMU)
  - latitude: 1.296 -> 1.296440
  - longitude: 103.850 -> 103.849770
- `B5D61016` Block 624B Punggol Central
  - latitude: 1.401 -> 1.400758
  - longitude: 103.912 -> 103.911673
- `B5D61017` Block 400C Fernvale Ln
  - latitude: 1.389 -> 1.389365
  - longitude: 103.870 -> 103.869808
- `B5D61018` Block 632A Punggol Drive
  - latitude: 1.401 -> 1.400598
  - longitude: 103.913 -> 103.913451
- `B5D61020` Blk 409 Ang Mo Kio Ave 10 Market & Hawker Centre
  - latitude: 1.363 -> 1.362706
  - longitude: 103.855 -> 103.855339
- `B5D61021` Block 168A Punggol East
  - latitude: 1.395 -> 1.394747
  - longitude: 103.914 -> 103.914325
- `B5D61022` Block 647 Punggol Central
  - latitude: 1.398 -> 1.398113
  - longitude: 103.916 -> 103.915591
- `B5D61023` Singapore University of Social Sciences (SUSS)
  - latitude: 1.329 -> 1.328704
  - longitude: 103.776 -> 103.775820
- `B5D61024` Block 294 Punggol Central
  - latitude: 1.403 -> 1.403105
  - longitude: 103.905 -> 103.904570
- `B5D61025` Block 538 Hougang Ave 8
  - latitude: 1.378 -> 1.377722
  - longitude: 103.890 -> 103.890303
- `B5D61027` Blk 648 Hougang Ave 8
  - latitude: 1.372 -> 1.372214
  - longitude: 103.880 -> 103.879874
- `B5D61028` 996C Buangkok Crescent
  - latitude: 1.385 -> 1.385365
  - longitude: 103.885 -> 103.885251
- `B5D61029` Block 224C Sumang Lane
  - latitude: 1.402 -> 1.401695
  - longitude: 103.894 -> 103.894070
- `B5D61030` Nanyang Academy of Fine Arts
  - latitude: 1.300 -> 1.299899
  - longitude: 103.851 -> 103.851210
- `B5D61031` Block 953 Hougang Ave 9
  - latitude: 1.377 -> 1.376861
  - longitude: 103.877 -> 103.877478
- `B5D61032` Block 410A Fernvale Rd
  - latitude: 1.390 -> 1.390246
  - longitude: 103.876 -> 103.875881
- `B5D61034` Block 217C Sumang Walk
  - latitude: 1.402 -> 1.402206
  - longitude: 103.896 -> 103.895884
- `B5D61035` Block 413B Fernvale Link
  - latitude: 1.390 -> 1.389841
  - longitude: 103.879 -> 103.879042
- `B5D61036` 531 Serangoon North Ave 4
  - latitude: 1.374 -> 1.374487
  - longitude: 103.875 -> 103.875357
- `B5D61037` Block 920 Hougang Ave 9
  - latitude: 1.377 -> 1.376747
  - longitude: 103.884 -> 103.883584
- `B5D61038` Lasalle College of the Arts
  - latitude: 1.303 -> 1.302876
  - longitude: 103.851 -> 103.851410
- `B5D61039` Block 228A Punggol Field
  - latitude: 1.404 -> 1.403636
  - longitude: 103.892 -> 103.892022
- `B5D61041` Block 104B Ang Mo Kio St 11
  - latitude: 1.371 -> 1.371446
  - longitude: 103.839 -> 103.838509
- `B5D61042` 212 Ang Mo Kio Ave 3
  - latitude: 1.369 -> 1.368933
  - longitude: 103.842 -> 103.841594
- `B5D61043` Block 203 Ang Mo Kio Ave 3
  - latitude: 1.368 -> 1.367978
  - longitude: 103.844 -> 103.844373
- `B5D61044` Block 326B Sumang Walk
  - latitude: 1.413 -> 1.412755
  - longitude: 103.900 -> 103.899691
- `B5D61045` 442 Ang Mo Kio Avenue 10
  - latitude: 1.366 -> 1.365732
  - longitude: 103.855 -> 103.854708
- `B5D61046` Block 423A Northshore Crescent
  - latitude: 1.419 -> 1.419190
  - longitude: 103.906 -> 103.905851
- `B5D61047` Block 536 Ang Mo Kio Ave 10
  - latitude: 1.375 -> 1.374871
  - longitude: 103.854 -> 103.854076
- `B5D61048` Block 232C Sumang Lane
  - latitude: 1.402 -> 1.401888
  - longitude: 103.890 -> 103.890179
- `B9051002` Block 463 Ang Mo Kio Avenue 10
  - latitude: 1.367 -> 1.366958
  - longitude: 103.857 -> 103.857469
- `B9051003` SHENG SIONG NO.1 JALAN BERSEH, NEW WORLD CENTRE
  - groupId: undefined -> [35]
  - latitude: 1.308 -> 1.307516
  - longitude: 103.857 -> 103.857405
- `B9051004` FairPrice Woodleigh Mall
  - groupId: undefined -> [39]
  - latitude: 1.339 -> 1.339000
  - longitude: 103.871 -> 103.871500
- `B9051005` Block 185 Edgefield Plains
  - latitude: 1.398 -> 1.398223
  - longitude: 103.910 -> 103.910406
- `B9051006` Block 211C Punggol Walk
  - latitude: 1.401 -> 1.401059
  - longitude: 103.899 -> 103.899155
- `B9051007` SHENG SIONG BLK 512 BISHAN STREET 13 
  - groupId: undefined -> [35]
  - latitude: 1.350 -> 1.349600
  - longitude: 103.850 -> 103.850000
- `B9051008` Block 445 Sin Ming Avenue
  - latitude: 1.359 -> 1.358713
  - longitude: 103.832 -> 103.831600
- `B9051009` Block 303B Anchorvale Link
  - latitude: 1.388 -> 1.387531
  - longitude: 103.890 -> 103.889771
- `B9051010` SHENG SIONG BLK 52 CHIN SWEE ROAD
  - groupId: undefined -> [35]
  - latitude: 1.287 -> 1.287000
  - longitude: 103.842 -> 103.841700
- `B9051011` SHENG SIONG BLK 161 ANG MO KIO AVE  4
  - groupId: undefined -> [35]
  - latitude: 1.374 -> 1.374200
  - longitude: 103.840 -> 103.839500
- `B9051012` Block 447A Punggol Way
  - latitude: 1.418 -> 1.417658
  - longitude: 103.912 -> 103.912187
- `B9051013` Block 1 Lorong Lew Lian
  - latitude: 1.351 -> 1.350923
  - longitude: 103.875 -> 103.875386
- `B9051014` SHENG SIONG BLK 181 TOA PAYOH LORONG 4
  - groupId: undefined -> [35]
  - latitude: 1.334 -> 1.333600
  - longitude: 103.851 -> 103.851000
- `B9051015` Block 3 Jalan Bukit Merah
  - latitude: 1.287 -> 1.287053
  - longitude: 103.807 -> 103.807486
- `B9051016` Block 166 Stirling Road
  - latitude: 1.291 -> 1.290950
  - longitude: 103.802 -> 103.802210
- `B9051017` Block 181 Stirling Rd
  - latitude: 1.294 -> 1.294165
  - longitude: 103.806 -> 103.805820
- `B9051018` Block 94 Dawson Road
  - latitude: 1.296 -> 1.295970
  - longitude: 103.812 -> 103.811560
- `B9051019` Little India Rowell Rd
  - latitude: 1.308 -> 1.308205
  - longitude: 103.855 -> 103.855088
- `B9051020` Block 69 Telok Blangah Heights
  - latitude: 1.276 -> 1.275572
  - longitude: 103.811 -> 103.810617
- `B9481001` SHENG SIONG BLK 312A SUMANG LINK 
  - groupId: undefined -> [35]
  - latitude: 1.411 -> 1.411400
  - longitude: 103.900 -> 103.900400
- `B9481002` Block 22 Hougang Avenue 3
  - latitude: 1.364 -> 1.364270
  - longitude: 103.890 -> 103.890400
- `B9481003` Block 217 Ang Mo Kio Avenue 1
  - latitude: 1.366 -> 1.365587
  - longitude: 103.842 -> 103.841647
- `B9481004` Block 288B Compassvale Crescent
  - latitude: 1.398 -> 1.398484
  - longitude: 103.898 -> 103.897704
- `B9481005` Block 177 Bishan Street 13
  - latitude: 1.348 -> 1.347867
  - longitude: 103.853 -> 103.853500
- `B9481006` Block 297B Compassvale Street
  - latitude: 1.395 -> 1.394898
  - longitude: 103.901 -> 103.901103
- `B9481007` SHENG SIONG BLK 88 TANGLIN HALT ROAD  
  - groupId: undefined -> [35]
  - latitude: 1.301 -> 1.301400
  - longitude: 103.798 -> 103.798300
- `B9481008` Block 103B Edgefield Plains
  - latitude: 1.398 -> 1.397823
  - longitude: 103.905 -> 103.904700
- `B9481009` Block 634 Hougang Avenue 8
  - latitude: 1.370 -> 1.370056
  - longitude: 103.878 -> 103.878424
- `B9481010` Block 302 Hougang Avenue 5
  - latitude: 1.368 -> 1.368499
  - longitude: 103.894 -> 103.894358
- `B9481011` Block 222 Lorong 8 Toa Payoh
  - latitude: 1.342 -> 1.341791
  - longitude: 103.856 -> 103.855900
- `B9481012` SHENG SIONG BLK 417 FERNVALE LINK
  - groupId: undefined -> [35]
  - latitude: 1.392 -> 1.391600
  - longitude: 103.879 -> 103.879500
- `B9481013` Block 534 Hougang Street 52
  - latitude: 1.377 -> 1.377160
  - longitude: 103.890 -> 103.890313
- `B9481014` SHENG SIONG BLK 301 PUNGGOL CENTRAL 
  - groupId: undefined -> [35]
  - latitude: 1.404 -> 1.403700
  - longitude: 103.906 -> 103.906100
- `B9481015` SHENG SIONG 19 SERANGOON NORTH AVE 5
  - groupId: undefined -> [35]
  - latitude: 1.376 -> 1.375570
  - longitude: 103.872 -> 103.871880
- `B9481016` SHENG SIONG BLK 351 ANCHORVALE ROAD 
  - groupId: undefined -> [35]
  - latitude: 1.393 -> 1.393200
  - longitude: 103.887 -> 103.887100
- `B9481017` SHENG SIONG 377 HOUGANG STREET 32,  HOUGANG RIVERCOURT
  - groupId: undefined -> [37]
  - latitude: 1.363 -> 1.363000
  - longitude: 103.895 -> 103.895200
- `B9481018` SHENG SIONG BLK 4 TOA PAYOH LORONG 7 
  - groupId: undefined -> [35]
  - latitude: 1.339 -> 1.339100
  - longitude: 103.856 -> 103.855800
- `B9481019` Block 707 Hougang Avenue 2
  - latitude: 1.366 -> 1.366319
  - longitude: 103.889 -> 103.888700
- `B9481020` SHENG SIONG 5 STADIUM WALK,  LEISURE PARK KALLANG 
  - groupId: undefined -> [37]
  - latitude: 1.302 -> 1.302300
  - longitude: 103.876 -> 103.876500
- `B9481021` SHENG SIONG BLK 31A MARGARET DRIVE 
  - groupId: undefined -> [35]
  - latitude: 1.298 -> 1.298500
  - longitude: 103.804 -> 103.803900
- `B9481022` Block 22 Saint George's Road
  - latitude: 1.325 -> 1.325236
  - longitude: 103.862 -> 103.862439
- `B9481023` Block 432 Ang Mo Kio Avenue 10
  - latitude: 1.368 -> 1.368344
  - longitude: 103.854 -> 103.853590
- `B9481024` Block 174B Hougang Avenue 1
  - latitude: 1.350 -> 1.349563
  - longitude: 103.889 -> 103.889200
- `B9481025` Block 452B Sengkang West Way
  - latitude: 1.394 -> 1.393781
  - longitude: 103.874 -> 103.874031
- `B9481026` Block 649 Ang Mo Kio Avenue 5
  - latitude: 1.378 -> 1.377807
  - longitude: 103.844 -> 103.843752
- `B9481027` Block 93 Paya Lebar Way
  - latitude: 1.323 -> 1.322737
  - longitude: 103.888 -> 103.888296
- `B9481028` SHENG SIONG BLK 455 SENGKANG WEST AVE 5 
  - groupId: undefined -> [35]
  - latitude: 1.391 -> 1.391400
  - longitude: 103.871 -> 103.871100
- `B9481029` Block 188D Rivervale Drive
  - latitude: 1.395 -> 1.395011
  - longitude: 103.904 -> 103.903837
- `B9481030` Block 3D Upper Boon Keng Road
  - latitude: 1.313 -> 1.313427
  - longitude: 103.873 -> 103.872900
- `B9481031` Block 160 Lorong 1 Toa Payoh
  - latitude: 1.331 -> 1.330985
  - longitude: 103.845 -> 103.844700
- `B9481032` SHENG SIONG BLK 233 ANG MO KIO AVE 3
  - groupId: undefined -> [35]
  - latitude: 1.368 -> 1.367700
  - longitude: 103.836 -> 103.836300
- `B9481033` SHENG SIONG BLK 218 SUMANG WALK 
  - groupId: undefined -> [35]
  - latitude: 1.403 -> 1.403300
  - longitude: 103.895 -> 103.895000
- `B9481034` Block 114 Edgefield Plains
  - latitude: 1.396 -> 1.395677
  - longitude: 103.907 -> 103.907358
- `B9481035` Block 128 Kim Tian Road
  - latitude: 1.282 -> 1.281535
  - longitude: 103.829 -> 103.829100
- `B9481036` SHENG SIONG BLK 108 MCNAIR ROAD 
  - groupId: undefined -> [35]
  - latitude: 1.322 -> 1.321800
  - longitude: 103.859 -> 103.859500
- `B9481037` Block 308A Punggol Walk
  - latitude: 1.406 -> 1.406444
  - longitude: 103.901 -> 103.900817
- `B9481038` 672A Klang Lane - Little India
  - latitude: 1.309 -> 1.308503
  - longitude: 103.852 -> 103.852431
- `B9481039` Block 112A Bidadari Park Drive
  - latitude: 1.335 -> 1.335356
  - longitude: 103.873 -> 103.873274
- `B9481040` Resorts World Sentosa
  - latitude: 1.256 -> 1.255910
  - longitude: 103.820 -> 103.820140
- `B9481041` 225 Ang Mo Kio Ave 1
  - latitude: 1.367 -> 1.367349
  - longitude: 103.838 -> 103.838479
- `B9481042` 79/79A Circuit Road Hawker Centre
  - latitude: 1.326 -> 1.326161
  - longitude: 103.885 -> 103.885112
- `B9481043` Block 134 Edgedale Plains
  - latitude: 1.393 -> 1.392853
  - longitude: 103.910 -> 103.910117
- `B9481045` Punggol Way Dorm, Sharbesuwary Pte Ltd
  - latitude: 1.418 -> 1.417671
  - longitude: 103.907 -> 103.907279
- `B9481046` Sims Vista Market & Food Centre
  - latitude: 1.317 -> 1.317098
  - longitude: 103.879 -> 103.879373
- `B9481047` Masjid Sultan Mosque
  - latitude: 1.302 -> 1.302145
  - longitude: 103.859 -> 103.859360
- `B9481048` Block 101 Bidadari Park Drive
  - latitude: 1.336 -> 1.336149
  - longitude: 103.871 -> 103.871464
- `SGRVM0001` 168 Woodlands Street 11
  - latitude: 1.433 -> 1.432979
  - longitude: 103.776 -> 103.776415
- `SGRVM0002` 297C Choa Chu Kang Ave 2
  - latitude: 1.378 -> 1.377770
  - longitude: 103.743 -> 103.743170
- `SGRVM0003` 219 Choa Chu Kang Central
  - latitude: 1.383 -> 1.382740
  - longitude: 103.746 -> 103.745520
- `SGRVM0004` 454 Fajar Rd
  - latitude: 1.385 -> 1.384600
  - longitude: 103.771 -> 103.771310
- `SGRVM0005` 418 Fajar Rd
  - latitude: 1.384 -> 1.384290
  - longitude: 103.769 -> 103.768880
- `SGRVM0006` 319 Clementi Ave 4
  - latitude: 1.318 -> 1.317501
  - longitude: 103.765 -> 103.764808
- `SGRVM0007` 233 Pending Rd, #08-11
  - latitude: 1.377 -> 1.376580
  - longitude: 103.772 -> 103.771770
- `SGRVM0008` 145 Yishun Street 11
  - latitude: 1.431 -> 1.430850
  - longitude: 103.832 -> 103.831850
- `SGRVM0009` 213 Petir Rd
  - latitude: 1.375 -> 1.374581
  - longitude: 103.775 -> 103.775406
- `SGRVM0010` 708 Choa Chu Kang Street 53
  - latitude: 1.392 -> 1.391600
  - longitude: 103.747 -> 103.746970
- `SGRVM0011` 685C Choa Chu Kang Cres
  - latitude: 1.403 -> 1.403421
  - longitude: 103.749 -> 103.748610
- `SGRVM0012` 461 Segar Rd
  - latitude: 1.387 -> 1.387050
  - longitude: 103.771 -> 103.771000
- `SGRVM0013` 406 Fajar Rd
  - latitude: 1.382 -> 1.381840
  - longitude: 103.767 -> 103.767490
- `SGRVM0014` 175 Lompang Rd
  - latitude: 1.380 -> 1.379810
  - longitude: 103.766 -> 103.765960
- `SGRVM0015` 188 Bukit Batok West Ave 6
  - latitude: 1.346 -> 1.346373
  - longitude: 103.746 -> 103.745765
- `SGRVM0016` 234 Choa Chu Kang Central
  - latitude: 1.380 -> 1.380196
  - longitude: 103.748 -> 103.748357
- `SGRVM0017` 372 Jurong East Street 32
  - latitude: 1.349 -> 1.348650
  - longitude: 103.732 -> 103.731810
- `SGRVM0018` Kampung Admiralty Hawker Centre
  - latitude: 1.440 -> 1.440109
  - longitude: 103.801 -> 103.800673
- `SGRVM0019` 671 Yishun Avenue 4
  - latitude: 1.419 -> 1.419108
  - longitude: 103.841 -> 103.841397
- `SGRVM0020` 272 Bangkit Rd
  - latitude: 1.377 -> 1.377453
  - longitude: 103.775 -> 103.774742
- `SGRVM0021` 808B Choa Chu Kang Ave 1
  - latitude: 1.376 -> 1.375630
  - longitude: 103.746 -> 103.745790
- `SGRVM0022` 536 Choa Chu Kang Street 51
  - latitude: 1.392 -> 1.391850
  - longitude: 103.744 -> 103.744040
- `SGRVM0023` 677 Choa Chu Kang Cres
  - latitude: 1.437 -> 1.436993
  - longitude: 103.777 -> 103.777357
- `SGRVM0024` 527 Choa Chu Kang Street 51
  - latitude: 1.392 -> 1.391880
  - longitude: 103.741 -> 103.741450
- `SGRVM0025` 625 Choa Chu Kang Street 62
  - latitude: 1.398 -> 1.398201
  - longitude: 103.747 -> 103.747114
- `SGRVM0026` SHENG SIONG Woodlands Recreation Centre
  - groupId: undefined -> [38]
  - latitude: 1.451 -> 1.450890
  - longitude: 103.797 -> 103.796900
- `SGRVM0027` 167 Petir Rd
  - latitude: 1.378 -> 1.377630
  - longitude: 103.765 -> 103.764760
- `SGRVM0028` 601 Choa Chu Kang Street 62
  - latitude: 1.397 -> 1.396950
  - longitude: 103.745 -> 103.744890
- `SGRVM0029` 486 Choa Chu Kang Ave 5
  - latitude: 1.375 -> 1.375462
  - longitude: 103.738 -> 103.738362
- `SGRVM0030` 760 Choa Chu Kang North 5
  - latitude: 1.393 -> 1.393090
  - longitude: 103.747 -> 103.747300
- `SGRVM0031` 162 Bukit Batok Street 11
  - latitude: 1.348 -> 1.348282
  - longitude: 103.748 -> 103.748058
- `SGRVM0032` Chennai Trading & Supermart - 1 Jalan Papan
  - groupId: undefined -> [101]
  - latitude: 1.321 -> 1.320510
  - longitude: 103.727 -> 103.727100
- `SGRVM0033` 210 Bukit Batok Street 21
  - latitude: 1.345 -> 1.345456
  - longitude: 103.750 -> 103.749873
- `SGRVM0034` 214 Jurong East Street 21
  - latitude: 1.339 -> 1.339280
  - longitude: 103.739 -> 103.738940
- `SGRVM0035` 129 Pending Rd
  - latitude: 1.376 -> 1.375700
  - longitude: 103.770 -> 103.770420
- `SGRVM0036` 505 Choa Chu Kang Street 51
  - latitude: 1.389 -> 1.389010
  - longitude: 103.742 -> 103.742063
- `SGRVM0037` 437 Fajar Rd, Block 437
  - latitude: 1.383 -> 1.382590
  - longitude: 103.770 -> 103.769520
- `SGRVM0038` 493 Jurong West Street 41
  - latitude: 1.349 -> 1.349010
  - longitude: 103.725 -> 103.724890
- `SGRVM0039` 432 Choa Chu Kang Ave 4
  - latitude: 1.385 -> 1.384650
  - longitude: 103.742 -> 103.741793
- `SGRVM0040` 290 Choa Chu Kang Ave 3
  - latitude: 1.379 -> 1.378830
  - longitude: 103.740 -> 103.740390
- `SGRVM0041` 238 Bukit Batok East Ave 5
  - latitude: 1.350 -> 1.349897
  - longitude: 103.755 -> 103.754764
- `SGRVM0042` 296B Bukit Batok Street 22
  - latitude: 1.344 -> 1.343844
  - longitude: 103.747 -> 103.747477
- `SGRVM0043` 137 Teck Whye Ln
  - latitude: 1.380 -> 1.379964
  - longitude: 103.753 -> 103.752869
- `SGRVM0044` 473 Choa Chu Kang Ave 3
  - latitude: 1.379 -> 1.379451
  - longitude: 103.738 -> 103.737833
- `SGRVM0046` 164 Jln Teck Whye
  - latitude: 1.381 -> 1.381310
  - longitude: 103.756 -> 103.756400
- `SGRVM0047` 230 Choa Chu Kang Central
  - latitude: 1.380 -> 1.380357
  - longitude: 103.746 -> 103.746310
- `SGRVM0048` 290B Bukit Batok Street 24
  - latitude: 1.344 -> 1.343736
  - longitude: 103.757 -> 103.756650
- `SGRVM0049` 423 Choa Chu Kang Ave 4
  - latitude: 1.382 -> 1.382080
  - longitude: 103.740 -> 103.740370
- `SGRVM0050` 498 Jurong West Street 41
  - latitude: 1.349 -> 1.348820
  - longitude: 103.724 -> 103.724430
- `SGRVM0051` 639 Choa Chu Kang Street 64
  - latitude: 1.398 -> 1.397740
  - longitude: 103.749 -> 103.749048
- `SGRVM0052` 488B Choa Chu Kang Ave 5
  - latitude: 1.377 -> 1.377060
  - longitude: 103.739 -> 103.739330
- `SGRVM0053` 125 Bukit Batok Central
  - latitude: 1.352 -> 1.351541
  - longitude: 103.747 -> 103.746952
- `SGRVM0054` Giant Yishun Avenue 11
  - groupId: undefined -> [55]
  - latitude: 1.425 -> 1.424720
  - longitude: 103.847 -> 103.847100
- `SGRVM0055` 334D Yishun Street 31
  - latitude: 1.432 -> 1.432400
  - longitude: 103.847 -> 103.846680
- `SGRVM0056` 454 Choa Chu Kang Ave 4
  - latitude: 1.379 -> 1.379170
  - longitude: 103.735 -> 103.734764
- `SGRVM0057` 818B Choa Chu Kang Ave 1
  - latitude: 1.377 -> 1.377290
  - longitude: 103.748 -> 103.748330
- `SGRVM0058` 426 Choa Chu Kang Ave 4
  - latitude: 1.381 -> 1.380616
  - longitude: 103.739 -> 103.739191
- `SGRVM0059` 562 Choa Chu Kang Street 52
  - latitude: 1.396 -> 1.396220
  - longitude: 103.746 -> 103.745790
- `SGRVM0060` 434 Bukit Panjang Ring Rd
  - latitude: 1.385 -> 1.385396
  - longitude: 103.770 -> 103.770494
- `SGRVM0061` 228 Bukit Batok Central,
  - latitude: 1.349 -> 1.348700
  - longitude: 103.754 -> 103.753760
- `SGRVM0062` 442 Choa Chu Kang Ave 4
  - latitude: 1.381 -> 1.380940
  - longitude: 103.738 -> 103.737680
- `SGRVM0063` 103 Bukit Batok Central
  - latitude: 1.350 -> 1.350119
  - longitude: 103.745 -> 103.745366
- `SGRVM0064` 517 Choa Chu Kang Street 51
  - latitude: 1.391 -> 1.390720
  - longitude: 103.743 -> 103.742960
- `SGRVM0065` 439 Yishun Ave 11, Singapore 760439
  - latitude: 1.422 -> 1.422091
  - longitude: 103.846 -> 103.846445
- `SGRVM0066` 340 Choa Chu Kang Loop
  - latitude: 1.384 -> 1.384192
  - longitude: 103.745 -> 103.745490
- `SGRVM0067` 464 Jurong West Street 41
  - latitude: 1.350 -> 1.350350
  - longitude: 103.722 -> 103.722340
- `SGRVM0068` 413 Saujana Rd
  - latitude: 1.382 -> 1.382334
  - longitude: 103.769 -> 103.768549
- `SGRVM0069` 169 Bukit Batok West Ave 8
  - latitude: 1.347 -> 1.346742
  - longitude: 103.741 -> 103.740833
- `SGRVM0070` 764 Jurong West Street 74
  - latitude: 1.349 -> 1.349460
  - longitude: 103.698 -> 103.698420
- `SGRVM0071` 550 Choa Chu Kang Street 52
  - latitude: 1.394 -> 1.394065
  - longitude: 103.743 -> 103.742722
- `SGRVM0072` 251 Bangkit Rd,
  - latitude: 1.380 -> 1.380160
  - longitude: 103.774 -> 103.773680
- `SGRVM0073` 308 Jurong East Street 32
  - latitude: 1.347 -> 1.347320
  - longitude: 103.734 -> 103.734449
- `SGRVM0074` 308 Bukit Batok Street 31
  - latitude: 1.357 -> 1.357472
  - longitude: 103.748 -> 103.747972
- `SGRVM0075` 242 Bukit Panjang Ring Rd
  - latitude: 1.380 -> 1.380229
  - longitude: 103.772 -> 103.772150
- `SGRVM0076` SHENG SIONG 18 YISHUN AVE 9,  JUNCTION NINE
  - groupId: undefined -> [37]
  - latitude: 1.433 -> 1.433140
  - longitude: 103.842 -> 103.841700
- `SGRVM0077` Prime Supermarket 678A Woodlands Avenue 6
  - groupId: undefined -> [78]
  - latitude: 1.440 -> 1.440410
  - longitude: 103.802 -> 103.801600
- `SGRVM0078` 320 Jurong East Street 31
  - latitude: 1.348 -> 1.348439
  - longitude: 103.731 -> 103.731003
- `SGRVM0079` 316 Jurong East Street 32
  - latitude: 1.347 -> 1.347050
  - longitude: 103.732 -> 103.732160
- `SGRVM0080` 340 Jurong East Ave 1
  - latitude: 1.350 -> 1.350279
  - longitude: 103.731 -> 103.730665
- `SGRVM0081` Prime Supermarket Blk 761 Yishun
  - groupId: undefined -> [122]
  - latitude: 1.425 -> 1.425120
  - longitude: 103.833 -> 103.833300
- `SGRVM0082` 475 Jurong West Street 41
  - latitude: 1.347 -> 1.346831
  - longitude: 103.724 -> 103.724433
- `SGRVM0083` 458 Jurong West Street 41
  - latitude: 1.350 -> 1.350219
  - longitude: 103.720 -> 103.719861
- `SGRVM0084` 461A Bukit Batok West Ave 8
  - latitude: 1.355 -> 1.355350
  - longitude: 103.740 -> 103.740090
- `SGRVM0085` 330 Clementi Ave 2
  - latitude: 1.314 -> 1.313743
  - longitude: 103.768 -> 103.767828
- `SGRVM0086` 435C Bukit Batok West Ave. 5
  - latitude: 1.358 -> 1.358376
  - longitude: 103.740 -> 103.740093
- `SGRVM0087` 317 Jurong East Street 31
  - latitude: 1.347 -> 1.346870
  - longitude: 103.731 -> 103.731240
- `SGRVM0088` 248 Bukit Batok East Avenue 5
  - latitude: 1.350 -> 1.350328
  - longitude: 103.756 -> 103.756482
- `SGRVM0089` 369 Bukit Batok Street 31
  - latitude: 1.360 -> 1.360010
  - longitude: 103.750 -> 103.750393
- `SGRVM0090` 325 Jurong East Street 31
  - latitude: 1.349 -> 1.348810
  - longitude: 103.729 -> 103.728940
- `SGRVM0091` 288D Bukit Batok Street 25
  - latitude: 1.346 -> 1.345810
  - longitude: 103.759 -> 103.759100
- `SGRVM0092` 350 Bukit Batok Street 34
  - latitude: 1.362 -> 1.361718
  - longitude: 103.749 -> 103.749146
- `SGRVM0093` 480 Jurong West Street 41
  - latitude: 1.347 -> 1.347320
  - longitude: 103.724 -> 103.724000
- `SGRVM0094` 15 Teck Whye Ln
  - latitude: 1.379 -> 1.379105
  - longitude: 103.754 -> 103.754402
- `SGRVM0095` 138 Bukit Batok West Ave 6
  - latitude: 1.351 -> 1.350551
  - longitude: 103.744 -> 103.744416
- `SGRVM0096` 181 Jelebu Rd
  - latitude: 1.379 -> 1.379310
  - longitude: 103.763 -> 103.762910
- `SGRVM0097` 164 Bukit Batok Street 11
  - latitude: 1.348 -> 1.347740
  - longitude: 103.743 -> 103.742810
- `SGRVM0098` Giant Khatib MRT
  - groupId: undefined -> [56]
  - latitude: 1.417 -> 1.416950
  - longitude: 103.833 -> 103.832800
- `SGRVM0099` FairPrice Wisteria Mall
  - groupId: undefined -> [47]
  - latitude: 1.418 -> 1.418350
  - longitude: 103.841 -> 103.841100
- `SGRVM0100` Cold Storage West Mall
  - groupId: undefined -> [58]
  - latitude: 1.350 -> 1.350050
  - longitude: 103.749 -> 103.749200
- `SGRVM0101` SCARLETT@WESTGATE
  - groupId: undefined -> [87]
  - latitude: 1.335 -> 1.334500
  - longitude: 103.743 -> 103.742600
- `SGRVM0102` SCARLETT@SUN PLAZA
  - groupId: undefined -> [87]
  - latitude: 1.448 -> 1.448270
  - longitude: 103.820 -> 103.819700
- `SGRVM0103` FairPrice Blk 166 Bukit Batok West Avenue 8
  - groupId: undefined -> [39]
  - latitude: 1.347 -> 1.347330
  - longitude: 103.743 -> 103.743100
- `SGRVM0104` 274 Choa Chu Kang Ave 2
  - latitude: 1.379 -> 1.379370
  - longitude: 103.743 -> 103.742820
- `SGRVM0105` 757 Yishun Street 72 
  - latitude: 1.427 -> 1.426585
  - longitude: 103.834 -> 103.834060
- `SGRVM0106` Cold Storage Rail Mall
  - groupId: undefined -> [51]
  - latitude: 1.360 -> 1.360195
  - longitude: 103.768 -> 103.767634
- `SGRVM0107` 636 Yishun Street 61
  - latitude: 1.420 -> 1.419655
  - longitude: 103.839 -> 103.839067
- `SGRVM0108` SHENG SIONG BLK 292 BUKIT BATOK EAST AVE 6 
  - groupId: undefined -> [35]
  - latitude: 1.344 -> 1.344400
  - longitude: 103.755 -> 103.755000
- `SGRVM0109` U STARS @507 Yishun Ave 4
  - groupId: undefined -> [85]
  - latitude: 1.416 -> 1.415550
  - longitude: 103.840 -> 103.839700
- `SGRVM0110` FairPrice Sembawang Shopping Centre
  - groupId: undefined -> [47]
  - latitude: 1.442 -> 1.441610
  - longitude: 103.825 -> 103.824600
- `SGRVM0111` FairPrice Blk 849 Yishun Ring Road
  - groupId: undefined -> [39]
  - latitude: 1.417 -> 1.416980
  - longitude: 103.835 -> 103.835400
- `SGRVM0112` SHENG SIONG BLK 643 SENJA CLOSE
  - groupId: undefined -> [37]
  - latitude: 1.388 -> 1.387880
  - longitude: 103.763 -> 103.763100
- `SGRVM0113` 120A Canberra Crescent
  - latitude: 1.446 -> 1.446007
  - longitude: 103.832 -> 103.832256
- `SGRVM0114` 654 Yishun Avenue 4
  - latitude: 1.423 -> 1.422984
  - longitude: 103.840 -> 103.840497
- `SGRVM0115` Giant Woodlands North
  - groupId: undefined -> [51]
  - latitude: 1.443 -> 1.442660
  - longitude: 103.791 -> 103.790700
- `SGRVM0116` Giant Woodlands Mart
  - groupId: undefined -> [51]
  - latitude: 1.446 -> 1.445600
  - longitude: 103.798 -> 103.798000
- `SGRVM0117` Bazaar Terusan Recreation Centre
  - groupId: undefined -> [120]
  - latitude: 1.321 -> 1.320510
  - longitude: 103.727 -> 103.727100
- `SGRVM0118` FairPrice Causeway Point
  - groupId: undefined -> [49]
  - latitude: 1.436 -> 1.436090
  - longitude: 103.786 -> 103.785900
- `SGRVM0119` 112 Teck Whye Ln
  - latitude: 1.378 -> 1.377645
  - longitude: 103.752 -> 103.752334
- `SGRVM0120` Cold Storage Hill View
  - groupId: undefined -> [71]
  - latitude: 1.363 -> 1.362940
  - longitude: 103.764 -> 103.764200
- `SGRVM0121` ANG MO SUPERMARKET-693 WOODLANDS AVE 6
  - groupId: undefined -> [93]
  - latitude: 1.438 -> 1.438070
  - longitude: 103.804 -> 103.803800
- `SGRVM0122` 950 Jurong West Street 91
  - latitude: 1.343 -> 1.342990
  - longitude: 103.691 -> 103.691330
- `SGRVM0123` FairPrice Northpoint City
  - groupId: undefined -> [47]
  - latitude: 1.428 -> 1.428320
  - longitude: 103.836 -> 103.836100
- `SGRVM0124` BISMILLAH MINIMART 32 MANDAI
  - latitude: 1.408 -> 1.407665
  - longitude: 103.756 -> 103.755714
- `SGRVM0125` FairPrice 498 Jurong West St 41
  - groupId: undefined -> [39]
  - latitude: 1.349 -> 1.348650
  - longitude: 103.724 -> 103.724300
- `SGRVM0126` FairPrice Lot 1
  - groupId: undefined -> [41]
  - latitude: 1.385 -> 1.385110
  - longitude: 103.745 -> 103.744900
- `SGRVM0127` Ajmal Trade Mart -  Kranji Lodge One
  - groupId: undefined -> [90]
  - latitude: 1.432 -> 1.431670
  - longitude: 103.760 -> 103.759900
- `SGRVM0128` FairPrice Woodlands Ave 1
  - groupId: undefined -> [45]
  - latitude: 1.431 -> 1.430810
  - longitude: 103.791 -> 103.790900
- `SGRVM0130` SHENG SIONG BLK 420A CLEMENTI AVE 1 
  - groupId: undefined -> [35]
  - latitude: 1.310 -> 1.309510
  - longitude: 103.768 -> 103.768400
- `SGRVM0131` Giant 256 Bangkit Road
  - groupId: undefined -> [51]
  - latitude: 1.379 -> 1.379170
  - longitude: 103.773 -> 103.772900
- `SGRVM0132` SHENG SIONG BLK 182 WOODLANDS ST 13 
  - groupId: undefined -> [35]
  - latitude: 1.435 -> 1.435310
  - longitude: 103.776 -> 103.775800
- `SGRVM0133` 771 Yishun Ave 3
  - latitude: 1.424 -> 1.423960
  - longitude: 103.833 -> 103.832600
- `SGRVM0134` FairPrice Jurong Point
  - groupId: undefined -> [39]
  - latitude: 1.340 -> 1.339620
  - longitude: 103.705 -> 103.705200
- `SGRVM0135` FairPrice Hillion Mall
  - groupId: undefined -> [39]
  - latitude: 1.379 -> 1.378510
  - longitude: 103.763 -> 103.763000
- `SGRVM0136` 213 Yishun Street 21
  - latitude: 1.432 -> 1.431849
  - longitude: 103.836 -> 103.836330
- `SGRVM0137` Giant Admiralty MRT
  - groupId: undefined -> [51]
  - latitude: 1.441 -> 1.440590
  - longitude: 103.801 -> 103.801000
- `SGRVM0138` FairPrice Kampung Admiralty
  - groupId: undefined -> [39]
  - latitude: 1.440 -> 1.439880
  - longitude: 103.801 -> 103.800700
- `SGRVM0139` Don Don Donki (Jurong Point)
  - groupId: undefined -> [74]
  - latitude: 1.340 -> 1.339710
  - longitude: 103.707 -> 103.706900
- `SGRVM0140` FairPrice Bukit Batok MRT
  - groupId: undefined -> [42]
  - latitude: 1.349 -> 1.348730
  - longitude: 103.749 -> 103.749300
- `SGRVM0141` 676C Yishun Ring Rd
  - latitude: 1.422 -> 1.421540
  - longitude: 103.842 -> 103.842280
- `SGRVM0142` 365 Yishun Ring Rd
  - latitude: 1.429 -> 1.429250
  - longitude: 103.845 -> 103.845190
- `SGRVM0143` Giant Bukit Batok Street 31
  - groupId: undefined -> [51]
  - latitude: 1.359 -> 1.358650
  - longitude: 103.749 -> 103.749300
- `SGRVM0144` Giant Kranji MRT
  - groupId: undefined -> [55]
  - latitude: 1.425 -> 1.425240
  - longitude: 103.762 -> 103.762000
- `SGRVM0145` SHENG SIONG BLK 471B YISHUN STREET 42
  - groupId: undefined -> [35]
  - latitude: 1.426 -> 1.426250
  - longitude: 103.853 -> 103.852500
- `SGRVM0146` 406 Yishun Ave 6, Singapore 760406
  - latitude: 1.426 -> 1.426080
  - longitude: 103.849 -> 103.849286
- `SGRVM0147` FairPrice Le Quest
  - groupId: undefined -> [47]
  - latitude: 1.356 -> 1.355740
  - longitude: 103.741 -> 103.740900
- `SGRVM0148` SHENG SIONG BLK 202 MARSILING DRIVE 
  - groupId: undefined -> [35]
  - latitude: 1.443 -> 1.443190
  - longitude: 103.775 -> 103.775200
- `SGRVM0149` SHENG SIONG BLK 785E WOODLANDS RISE 
  - groupId: undefined -> [35]
  - latitude: 1.447 -> 1.446860
  - longitude: 103.806 -> 103.805600
- `SGRVM0150` SHENG SIONG BLK 4 WOODLANDS ST 12 
  - groupId: undefined -> [38]
  - latitude: 1.433 -> 1.433380
  - longitude: 103.780 -> 103.779800
- `SGRVM0151` 379 Clementi Ave 5
  - latitude: 1.318 -> 1.317909
  - longitude: 103.768 -> 103.767796
- `SGRVM0152` FairPrice Bukit Batok Home TeamNS
  - groupId: undefined -> [47]
  - latitude: 1.366 -> 1.365810
  - longitude: 103.750 -> 103.750200
- `SGRVM0153` FairPrice Blk 345 Jurong East Street 31
  - groupId: undefined -> [39]
  - latitude: 1.346 -> 1.345530
  - longitude: 103.731 -> 103.731200
- `SGRVM0154` SHENG SIONG 3 YUAN CHING ROAD 
  - groupId: undefined -> [35]
  - latitude: 1.326 -> 1.325630
  - longitude: 103.725 -> 103.725100
- `SGRVM0155` FairPrice Hub
  - groupId: undefined -> [48]
  - latitude: 1.326 -> 1.325880
  - longitude: 103.678 -> 103.678400
- `SGRVM0156` FairPrice Woodgrove
  - groupId: undefined -> [39]
  - latitude: 1.429 -> 1.428950
  - longitude: 103.781 -> 103.781100
- `SGRVM0157` Prime Supermarket Sembawang Crescent
  - groupId: undefined -> [78]
  - latitude: 1.445 -> 1.444680
  - longitude: 103.816 -> 103.815900
- `SGRVM0158` 477 Sembawang Drive
  - latitude: 1.452 -> 1.452097
  - longitude: 103.817 -> 103.816673
- `SGRVM0159` Don Don Donki (Northpoint City)
  - groupId: undefined -> [74]
  - latitude: 1.429 -> 1.429340
  - longitude: 103.836 -> 103.835900
- `SGRVM0160` SHENG SIONG BLK 547 SEGAR RD
  - groupId: undefined -> [35]
  - latitude: 1.388 -> 1.388020
  - longitude: 103.770 -> 103.769800
- `SGRVM0161` Chap He Diam Migrant Worker's Recreation Centre
  - groupId: undefined -> [100]
  - latitude: 1.332 -> 1.332350
  - longitude: 103.699 -> 103.698900
- `SGRVM0162` SHENG SIONG 7 JURONG WEST AVE 5 
  - groupId: undefined -> [38]
  - latitude: 1.349 -> 1.348780
  - longitude: 103.703 -> 103.703300
- `SGRVM0163` FairPrice Marsiling MRT
  - groupId: undefined -> [42]
  - latitude: 1.433 -> 1.432520
  - longitude: 103.774 -> 103.774400
- `SGRVM0164` 935 Yishun Central 1
  - latitude: 1.425 -> 1.425173
  - longitude: 103.837 -> 103.836800
- `SGRVM0165` FairPrice Blk 414 Yishun Ring Road
  - groupId: undefined -> [39]
  - latitude: 1.425 -> 1.424540
  - longitude: 103.847 -> 103.846600
- `SGRVM0166` Prime Supermarket NTU Students Walk
  - groupId: undefined -> [83]
  - latitude: 1.348 -> 1.348130
  - longitude: 103.685 -> 103.685400
- `SGRVM0167` Nawas Global - Tuas South Dormitory
  - groupId: undefined -> [90]
  - latitude: 1.272 -> 1.271640
  - longitude: 103.633 -> 103.633500
- `SGRVM0168` Ajmal Super Market - Tuas View Dormitory
  - groupId: undefined -> [90]
  - latitude: 1.315 -> 1.314760
  - longitude: 103.627 -> 103.626600
- `SGRVM0169` SHENG SIONG BLK 675 YISHUN AVENUE 4
  - groupId: undefined -> [35]
  - latitude: 1.420 -> 1.420360
  - longitude: 103.844 -> 103.843600
- `SGRVM0170` FairPrice Clementi Ave 2 Shopping Centre
  - groupId: undefined -> [39]
  - latitude: 1.314 -> 1.314480
  - longitude: 103.771 -> 103.771300
- `SGRVM0171` FairPrice Woodlands Civic Centre
  - groupId: undefined -> [41]
  - latitude: 1.435 -> 1.434900
  - longitude: 103.787 -> 103.786800
- `SGRVM0172` 701 Yishun Ave 5
  - latitude: 1.430 -> 1.429999
  - longitude: 103.829 -> 103.828719
- `SGRVM0173` FairPrice Senja Grand
  - groupId: undefined -> [39]
  - latitude: 1.385 -> 1.385050
  - longitude: 103.760 -> 103.760400
- `SGRVM0174` 726 Yishun Street 71
  - latitude: 1.427 -> 1.426660
  - longitude: 103.831 -> 103.830850
- `SGRVM0175` 641 Yishun Street 61
  - latitude: 1.421 -> 1.420830
  - longitude: 103.838 -> 103.838311
- `SGRVM0176` SHENG SIONG BLK 154A BUKIT BATOK WEST AVE 8 
  - groupId: undefined -> [35]
  - latitude: 1.347 -> 1.347260
  - longitude: 103.744 -> 103.743900
- `SGRVM0177` U STARS @691 Woodlands Drive
  - groupId: undefined -> [84]
  - latitude: 1.440 -> 1.440490
  - longitude: 103.806 -> 103.806300
- `SGRVM0178` FairPrice Finest Clementi Mall
  - groupId: undefined -> [41]
  - latitude: 1.315 -> 1.315170
  - longitude: 103.764 -> 103.764200
- `SGRVM0179` SHENG SIONG BLK 451 BUKIT BATOK WEST AVENUE 6 
  - groupId: undefined -> [37]
  - latitude: 1.353 -> 1.353000
  - longitude: 103.743 -> 103.743500
- `SGRVM0180` SHENG SIONG BLK 159 BUKIT BATOK STREET 11 
  - groupId: undefined -> [35]
  - latitude: 1.348 -> 1.348490
  - longitude: 103.743 -> 103.742700
- `SGRVM0181` SHENG SIONG BLK 573 WOODLANDS DRIVE 16 
  - groupId: undefined -> [35]
  - latitude: 1.431 -> 1.430940
  - longitude: 103.799 -> 103.798500
- `SGRVM0182` 423 Canberra Rd
  - latitude: 1.454 -> 1.453714
  - longitude: 103.818 -> 103.818205
- `SGRVM0183` Giant Admiralty Drive
  - groupId: undefined -> [51]
  - latitude: 1.450 -> 1.449940
  - longitude: 103.814 -> 103.814300
- `SGRVM0184` FairPrice Dairy Farm Residences
  - groupId: undefined -> [45]
  - latitude: 1.365 -> 1.365460
  - longitude: 103.775 -> 103.775000
- `SGRVM0185` FORTUNE SUPERMARKET 463
  - groupId: undefined -> [105]
  - latitude: 1.456 -> 1.455610
  - longitude: 103.815 -> 103.814700
- `SGRVM0186` Giant Vista Point
  - groupId: undefined -> [51]
  - latitude: 1.431 -> 1.431380
  - longitude: 103.794 -> 103.793800
- `SGRVM0187` SHENG SIONG BLK 240 TENGAH GARDEN WALK 
  - groupId: undefined -> [35]
  - latitude: 1.361 -> 1.360560
  - longitude: 103.732 -> 103.732000
- `SGRVM0188` FairPrice Senja Heights
  - groupId: undefined -> [41]
  - latitude: 1.388 -> 1.387760
  - longitude: 103.761 -> 103.761400
- `SGRVM0189` FairPrice Greenridge
  - groupId: undefined -> [41]
  - latitude: 1.385 -> 1.385370
  - longitude: 103.766 -> 103.766300
- `SGRVM0190` Prime Supermarket NTU Spine Hub
  - groupId: undefined -> [82]
  - latitude: 1.345 -> 1.345220
  - longitude: 103.681 -> 103.681200
- `SGRVM0191` SHENG SIONG BLK 105 CANBERRA STREET 
  - groupId: undefined -> [35]
  - latitude: 1.449 -> 1.448830
  - longitude: 103.832 -> 103.832400
- `SGRVM0192` FairPrice Blk 355 Sembawang Way
  - groupId: undefined -> [39]
  - latitude: 1.450 -> 1.449570
  - longitude: 103.819 -> 103.819000
- `SGRVM0193` 721 Yishun Street 71
  - latitude: 1.426 -> 1.426106
  - longitude: 103.829 -> 103.828910
- `SGRVM0194` Giant Pioneer Mall
  - groupId: undefined -> [51]
  - latitude: 1.342 -> 1.341860
  - longitude: 103.697 -> 103.697400
- `SGRVM0195` SHENG SIONG BLK 209A CLEMENTI AVE 6 
  - groupId: undefined -> [35]
  - latitude: 1.322 -> 1.322080
  - longitude: 103.764 -> 103.763800
- `SGRVM0196` Prime Supermarket Yishun Avenue 6
  - groupId: undefined -> [78]
  - latitude: 1.429 -> 1.428850
  - longitude: 103.850 -> 103.850500
- `SGRVM0197` 207 Boon Lay Place
  - latitude: 1.347 -> 1.346683
  - longitude: 103.714 -> 103.713592
- `SGRVM0198` Bazaar Westlite Toh Guan Dormitory
  - latitude: 1.329 -> 1.328669
  - longitude: 103.750 -> 103.749862
- `SGRVM0199` 462 Sembawang Drive 
  - latitude: 1.455 -> 1.454775
  - longitude: 103.814 -> 103.813978
- `SGRVM0200` FairPrice Sun Plaza
  - groupId: undefined -> [47]
  - latitude: 1.448 -> 1.448260
  - longitude: 103.820 -> 103.819700
- `SGRVM0201` 715 Jurong West Street 71
  - latitude: 1.344 -> 1.343890
  - longitude: 103.696 -> 103.696390
- `SGRVM0202` 745 Yishun Street 72
  - latitude: 1.429 -> 1.429350
  - longitude: 103.833 -> 103.833170
- `SGRVM0203` TUAS SOUTH MINIMART
  - groupId: undefined -> [120]
  - latitude: 1.272 -> 1.272318
  - longitude: 103.634 -> 103.634499
- `SGRVM0204` 483 Admiralty Link
  - latitude: 1.456 -> 1.456091
  - longitude: 103.815 -> 103.815423
- `SGRVM0205` 106A Canberra Street
  - latitude: 1.448 -> 1.448461
  - longitude: 103.833 -> 103.833124
- `SGRVM0206` 589 Woodlands Drive 16
  - latitude: 1.428 -> 1.428090
  - longitude: 103.796 -> 103.795523
- `SGRVM0207` 718 Woodlands Ave 6
  - latitude: 1.442 -> 1.441680
  - longitude: 103.801 -> 103.801068
- `SGRVM0208` 746 Jurong West Street 73
  - latitude: 1.347 -> 1.347477
  - longitude: 103.698 -> 103.697933
- `SGRVM0209` 153 Yung Ho Rd
  - latitude: 1.328 -> 1.327560
  - longitude: 103.721 -> 103.721050
- `SGRVM0210` 678D Jurong West Street 64
  - latitude: 1.345 -> 1.344892
  - longitude: 103.703 -> 103.703310
- `SGRVM0211` 7 Seven Trichy Supermarket North Coast Lodge
  - groupId: undefined -> [98]
  - latitude: 1.456 -> 1.456100
  - longitude: 103.787 -> 103.787300
- `SGRVM0212` 931 Jurong West Street 92
  - latitude: 1.340 -> 1.340302
  - longitude: 103.689 -> 103.689337
- `SGRVM0213` 678A Jurong West Street 64 
  - latitude: 1.345 -> 1.345070
  - longitude: 103.704 -> 103.704219
- `SGRVM0214` Taman Jurong Market & Food Centre
  - latitude: 1.335 -> 1.334853
  - longitude: 103.722 -> 103.722067
- `SGRVM0215` 255 Yishun Ring Rd
  - latitude: 1.434 -> 1.434300
  - longitude: 103.841 -> 103.840620
- `SGRVM0216` 277 Yishun Street 22
  - latitude: 1.438 -> 1.438003
  - longitude: 103.837 -> 103.836907
- `SGRVM0217` SHENG SIONG BLK 503 JURONG WEST AVE 1
  - groupId: undefined -> [35]
  - latitude: 1.350 -> 1.350070
  - longitude: 103.718 -> 103.718000
- `SGRVM0218` 831 Jurong West Street 81
  - latitude: 1.345 -> 1.345100
  - longitude: 103.695 -> 103.694590
- `SGRVM0219` 573B Woodlands Drive 16
  - latitude: 1.431 -> 1.430911
  - longitude: 103.798 -> 103.797776
- `SGRVM0221` 907 Jurong West Street 91
  - latitude: 1.341 -> 1.341070
  - longitude: 103.686 -> 103.685960
- `SGRVM0222` FORTUNE SUPERMARKET 780
  - latitude: 1.448 -> 1.448090
  - longitude: 103.801 -> 103.800900
- `SGRVM0223` 353 Kang Ching Rd
  - latitude: 1.340 -> 1.339710
  - longitude: 103.721 -> 103.720790
- `SGRVM0224` 735 Jurong West Street 75
  - latitude: 1.346 -> 1.345932
  - longitude: 103.701 -> 103.700761
- `SGRVM0225` Prime Supermarket Jurong West Street 91
  - groupId: undefined -> [78]
  - latitude: 1.342 -> 1.341980
  - longitude: 103.692 -> 103.691700
- `SGRVM0226` FairPrice 888 Plaza
  - groupId: undefined -> [39]
  - latitude: 1.439 -> 1.438640
  - longitude: 103.795 -> 103.795300
- `SGRVM0227` 359 Yung An Rd
  - latitude: 1.338 -> 1.338220
  - longitude: 103.720 -> 103.719610
- `SGRVM0228` 736 Yishun Street 72
  - latitude: 1.429 -> 1.428844
  - longitude: 103.832 -> 103.831634
- `SGRVM0229` 140 Corporation Drive
  - latitude: 1.327 -> 1.326860
  - longitude: 103.723 -> 103.723390
- `SGRVM0230` 236 Yishun Ring Rd
  - latitude: 1.434 -> 1.433970
  - longitude: 103.839 -> 103.839200
- `SGRVM0231` Ajmal Trading Group - Kranji Recreation Centre
  - groupId: undefined -> [91]
  - latitude: 1.429 -> 1.429000
  - longitude: 103.753 -> 103.752700
- `SGRVM0232` 417 Canberra Rd
  - latitude: 1.452 -> 1.452435
  - longitude: 103.819 -> 103.819279
- `SGRVM0233` 291 Yishun Street 22
  - latitude: 1.436 -> 1.436260
  - longitude: 103.837 -> 103.836730
- `SGRVM0234` 610 Yishun Street 61
  - latitude: 1.420 -> 1.420497
  - longitude: 103.837 -> 103.836510
- `SGRVM0235` SCARLETT @ CLEMENTI
  - groupId: undefined -> [87]
  - latitude: 1.314 -> 1.314460
  - longitude: 103.765 -> 103.765100
- `SGRVM0236` 101 Yishun Ave 5
  - latitude: 1.430 -> 1.430470
  - longitude: 103.827 -> 103.827360
- `SGRVM0237` 108 Yishun Ring Rd 
  - latitude: 1.432 -> 1.432362
  - longitude: 103.829 -> 103.829035
- `SGRVM0238` 668A Jurong West Street 64
  - latitude: 1.342 -> 1.341981
  - longitude: 103.703 -> 103.702755
- `SGRVM0239` FairPrice Taman Jurong Shopping Centre
  - groupId: undefined -> [39]
  - latitude: 1.335 -> 1.334660
  - longitude: 103.720 -> 103.720100
- `SGRVM0240` 309 Yishun Ring Rd
  - latitude: 1.432 -> 1.432090
  - longitude: 103.840 -> 103.840350
- `SGRVM0241` 762 Yishun Street 72
  - latitude: 1.426 -> 1.425680
  - longitude: 103.834 -> 103.834260
- `SGRVM0242` 876 Woodlands Ave 9
  - latitude: 1.445 -> 1.444808
  - longitude: 103.791 -> 103.790541
- `SGRVM0243` 120 Yishun Ring Rd
  - latitude: 1.435 -> 1.434900
  - longitude: 103.829 -> 103.829400
- `SGRVM0244` 708 Woodlands Drive 70
  - latitude: 1.440 -> 1.440050
  - longitude: 103.797 -> 103.797312
- `SGRVM0245` 604 Yishun Street 61
  - latitude: 1.422 -> 1.421677
  - longitude: 103.836 -> 103.835504
- `SGRVM0246` 334 Sembawang Close
  - latitude: 1.447 -> 1.447396
  - longitude: 103.816 -> 103.816047
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory
  - groupId: undefined -> [90]
  - latitude: 1.461 -> 1.461430
  - longitude: 103.809 -> 103.809500
- `SGRVM0248` 260 Boon Lay Dr
  - latitude: 1.345 -> 1.345157
  - longitude: 103.708 -> 103.708019
- `SGRVM0249` 104 Bukit Batok Central, Block 104
  - latitude: 1.349 -> 1.349020
  - longitude: 103.747 -> 103.747300
- `SGRVM0250` 150 Yishun Street 11
  - latitude: 1.431 -> 1.430840
  - longitude: 103.834 -> 103.833620
- `SGRVM0251` 682C Woodlands Drive 73
  - latitude: 1.441 -> 1.440660
  - longitude: 103.804 -> 103.804350
- `SGRVM0252` 784C Woodlands Rise 
  - latitude: 1.446 -> 1.445931
  - longitude: 103.805 -> 103.805305
- `SGRVM0253` 115A Ho Ching Rd
  - latitude: 1.334 -> 1.334350
  - longitude: 103.725 -> 103.724510
- `SGRVM0254` 690F Woodlands Drive 75
  - latitude: 1.443 -> 1.442605
  - longitude: 103.807 -> 103.807494
- `SGRVM0255` 653A Jurong West Street 61
  - latitude: 1.337 -> 1.336960
  - longitude: 103.697 -> 103.696710
- `SGRVM0256` 771 Choa Chu Kang Street 54
  - latitude: 1.394 -> 1.394470
  - longitude: 103.749 -> 103.749230
- `SGRVM0257` 862 Woodlands Street 83
  - latitude: 1.440 -> 1.439992
  - longitude: 103.795 -> 103.795049
- `SGRVM0258` 656 Woodlands Ring Rd
  - latitude: 1.437 -> 1.437030
  - longitude: 103.799 -> 103.799213
- `SGRVM0259` 228 Yishun Street 21
  - latitude: 1.435 -> 1.435412
  - longitude: 103.838 -> 103.837582
- `SGRVM0260` 356A Admiralty Drive
  - latitude: 1.449 -> 1.449473
  - longitude: 103.817 -> 103.816965
- `SGRVM0261` 165 Yishun Ring Rd
  - latitude: 1.436 -> 1.435670
  - longitude: 103.832 -> 103.831610
- `SGRVM0262` 528 Jurong West Street 52
  - latitude: 1.348 -> 1.348370
  - longitude: 103.717 -> 103.717010
- `SGRVM0263` 552 Woodlands Drive 44
  - latitude: 1.432 -> 1.432262
  - longitude: 103.795 -> 103.795349
- `SGRVM0264` 657 Choa Chu Kang Cres
  - latitude: 1.400 -> 1.400462
  - longitude: 103.750 -> 103.749739
- `SGRVM0265` 115 Yishun Ring Rd
  - latitude: 1.435 -> 1.434502
  - longitude: 103.828 -> 103.828037
- `SGRVM0266` 351B Canberra Road
  - latitude: 1.451 -> 1.450830
  - longitude: 103.820 -> 103.820028
- `SGRVM0267` 216 Boon Lay Ave
  - latitude: 1.350 -> 1.350470
  - longitude: 103.712 -> 103.712210
- `SGRVM0268` 551 Jurong West Street 42
  - latitude: 1.352 -> 1.352400
  - longitude: 103.717 -> 103.716960
- `SGRVM0269` 792 Woodlands Ave 6 
  - latitude: 1.442 -> 1.441970
  - longitude: 103.802 -> 103.802290
- `SGRVM0270` 611 Woodlands Ring Rd
  - latitude: 1.435 -> 1.435484
  - longitude: 103.797 -> 103.796928
- `SGRVM0271` 126 Yishun Street 11
  - latitude: 1.434 -> 1.433530
  - longitude: 103.830 -> 103.830090
- `SGRVM0272` 625 Jurong West Street 61
  - latitude: 1.342 -> 1.341587
  - longitude: 103.699 -> 103.698643
- `SGRVM0273` 190 Boon Lay Dr
  - latitude: 1.345 -> 1.345153
  - longitude: 103.712 -> 103.711882
- `SGRVM0274` 690A Choa Chu Kang Cres
  - latitude: 1.403 -> 1.402915
  - longitude: 103.752 -> 103.751555
- `SGRVM0275` 2 Marsiling Dr
  - latitude: 1.440 -> 1.439926
  - longitude: 103.776 -> 103.776121
- `SGRVM0276` 272B Jurong West Street 24
  - latitude: 1.351 -> 1.350644
  - longitude: 103.705 -> 103.704978
- `SGRVM0277` 836 Woodlands Street 83
  - latitude: 1.440 -> 1.440290
  - longitude: 103.792 -> 103.791910
- `SGRVM0278` 756 Woodlands Ave 4 
  - latitude: 1.446 -> 1.445721
  - longitude: 103.793 -> 103.793054
- `SGRVM0279` 8 Marsiling Drive
  - latitude: 1.441 -> 1.441352
  - longitude: 103.777 -> 103.777211
- `SGRVM0280` Prime Supermarket Bukit Batok Street 31
  - groupId: undefined -> [78]
  - latitude: 1.359 -> 1.358840
  - longitude: 103.751 -> 103.750500
- `SGRVM0281` 671A Choa Chu Kang Cres
  - latitude: 1.402 -> 1.402131
  - longitude: 103.748 -> 103.747893
- `SGRVM0282` FairPrice Blk 135 Jurong Gateway Road
  - groupId: undefined -> [39]
  - latitude: 1.334 -> 1.334080
  - longitude: 103.740 -> 103.740400
- `SGRVM0283` Prime Supermarket Blk 142 Teck Whye Lane
  - groupId: undefined -> [79]
  - latitude: 1.381 -> 1.380800
  - longitude: 103.752 -> 103.752000
- `SGRVM0284` 311 Canberra Rd
  - latitude: 1.447 -> 1.446620
  - longitude: 103.823 -> 103.822580
- `SGRVM0285` 782B Woodlands Cres
  - latitude: 1.447 -> 1.447310
  - longitude: 103.803 -> 103.802980
- `SGRVM0286` 286 Yishun Ave 6
  - latitude: 1.440 -> 1.439850
  - longitude: 103.838 -> 103.838300
- `SGRVM0287` 846 Woodlands Ave 4
  - latitude: 1.444 -> 1.443545
  - longitude: 103.793 -> 103.793485
- `SGRVM0288` 201 Marsiling Dr
  - latitude: 1.443 -> 1.442698
  - longitude: 103.775 -> 103.775421
- `SGRVM0289` 610 Choa Chu Kang Street 62
  - latitude: 1.399 -> 1.399450
  - longitude: 103.744 -> 103.743545
- `SGRVM0290` 674A Jurong West Street 65
  - latitude: 1.345 -> 1.344782
  - longitude: 103.702 -> 103.702184
- `SGRVM0291` 682A Jurong West Central 1
  - latitude: 1.344 -> 1.344026
  - longitude: 103.705 -> 103.705435
- `SGRVM0292` 134 Marsiling Rd
  - latitude: 1.437 -> 1.436800
  - longitude: 103.777 -> 103.777360
- `SGRVM0293` 184 Yung Sheng Rd
  - latitude: 1.333 -> 1.333360
  - longitude: 103.722 -> 103.722185
- `SGRVM0294` 770 Woodlands Drive 60
  - latitude: 1.447 -> 1.446654
  - longitude: 103.799 -> 103.798562
- `SGRVM0295` 205 Marsiling Dr
  - latitude: 1.445 -> 1.444980
  - longitude: 103.773 -> 103.773460
- `SGRVM0296` 274B Jurong West Street 25
  - latitude: 1.353 -> 1.352818
  - longitude: 103.703 -> 103.703150
- `SGRVM0297` 337B Tah Ching Rd
  - latitude: 1.337 -> 1.337460
  - longitude: 103.722 -> 103.722420
- `SGRVM0298` 638 Woodlands Ring Rd
  - latitude: 1.437 -> 1.436844
  - longitude: 103.803 -> 103.803206
- `SGRVM0299` 668 Choa Chu Kang Cres
  - latitude: 1.402 -> 1.401872
  - longitude: 103.749 -> 103.749469
- `SGRVM0300` 504 Yishun St 51, Singapore 760504
  - latitude: 1.418 -> 1.418336
  - longitude: 103.844 -> 103.844393
- `SGRVM0301` 698C Jurong West Central 3
  - latitude: 1.340 -> 1.340300
  - longitude: 103.708 -> 103.707710
- `SGRVM0302` 32 Marsiling Dr
  - latitude: 1.443 -> 1.443404
  - longitude: 103.773 -> 103.772794
- `SGRVM0303` 667C Jurong West Street 65
  - latitude: 1.341 -> 1.341330
  - longitude: 103.702 -> 103.702430
- `SGRVM0304` SHENG SIONG BLK 301 WOODLANDS ST 31 
  - groupId: undefined -> [35]
  - latitude: 1.431 -> 1.431460
  - longitude: 103.774 -> 103.773800
- `SGRVM0305` 622 Woodlands Drive 52
  - latitude: 1.434 -> 1.434202
  - longitude: 103.799 -> 103.798803
- `SGRVM0306` 854 Jurong West Street 81
  - latitude: 1.348 -> 1.347812
  - longitude: 103.696 -> 103.695788
- `SGRVM0307` 196B Boon Lay Drive
  - latitude: 1.343 -> 1.342910
  - longitude: 103.714 -> 103.714241
- `SGRVM0308` 276D Jurong West Street 25
  - latitude: 1.354 -> 1.353560
  - longitude: 103.704 -> 103.704410
- `SGRVM0309` 212 Marsiling Cres
  - latitude: 1.446 -> 1.446190
  - longitude: 103.773 -> 103.773100
- `SGRVM0310` 920 Jurong West Street 92
  - latitude: 1.340 -> 1.339941
  - longitude: 103.688 -> 103.688387
- `SGRVM0311` 123 Marsiling Rise
  - latitude: 1.439 -> 1.439209
  - longitude: 103.779 -> 103.779111
- `SGRVM0312` 664D Jurong West Street 64
  - latitude: 1.339 -> 1.339197
  - longitude: 103.703 -> 103.702718
- `SGRVM0313` 744 Jurong West Street 73
  - latitude: 1.347 -> 1.346812
  - longitude: 103.699 -> 103.698958
- `SGRVM0314` 515 Jurong West Street 52
  - latitude: 1.346 -> 1.346250
  - longitude: 103.720 -> 103.720407
- `SGRVM0315` 728 Woodlands Cir
  - latitude: 1.443 -> 1.442851
  - longitude: 103.799 -> 103.798873
- `SGRVM0316` 618 Choa Chu Kang North 7
  - latitude: 1.400 -> 1.400375
  - longitude: 103.747 -> 103.746980
- `SGRVM0317` 17 Marsiling Ln
  - latitude: 1.443 -> 1.442640
  - longitude: 103.778 -> 103.777740
- `SGRVM0318` Giant IMM
  - groupId: undefined -> [70]
  - latitude: 1.336 -> 1.335960
  - longitude: 103.747 -> 103.747000
- `SGRVM0319` Cold Storage Clementi Arcade
  - groupId: undefined -> [57]
  - latitude: 1.323 -> 1.323390
  - longitude: 103.768 -> 103.767600
- `SGRVM0320` U STARS 345 Clementi Ave 5
  - groupId: undefined -> [84]
  - latitude: 1.318 -> 1.317670
  - longitude: 103.769 -> 103.769000
- `SGRVM0321` Cold Storage West Coast Plaza
  - groupId: undefined -> [57]
  - latitude: 1.304 -> 1.303700
  - longitude: 103.766 -> 103.765900
- `SGRVM0322` SHENG SIONG BLK 720 CLEMENTI WEST STREET 2 
  - groupId: undefined -> [35]
  - latitude: 1.302 -> 1.302410
  - longitude: 103.764 -> 103.763700
- `SGRVM0323` 149 Woodlands Street 13
  - latitude: 1.436 -> 1.435762
  - longitude: 103.773 -> 103.773165
- `SGRVM0324` 153 Gangsa Rd
  - latitude: 1.376 -> 1.375984
  - longitude: 103.765 -> 103.765288
- `SGRVM0325` SHENG SIONG BLK 446 FAJAR ROAD
  - groupId: undefined -> [35]
  - latitude: 1.384 -> 1.383740
  - longitude: 103.771 -> 103.770600
- `SGRVM0326` 359 Clementi Ave 2
  - latitude: 1.313 -> 1.313430
  - longitude: 103.770 -> 103.769883
- `SGRVM0327` 178 Woodlands Street 13
  - latitude: 1.435 -> 1.434595
  - longitude: 103.778 -> 103.777658
- `SGRVM0328` 108 Gangsa Rd
  - latitude: 1.378 -> 1.377690
  - longitude: 103.767 -> 103.767160
- `SGRVM0329` 306 Clementi Ave 4
  - latitude: 1.321 -> 1.321496
  - longitude: 103.766 -> 103.765888
- `SGRVM0330` 454 Clementi Ave 3
  - latitude: 1.312 -> 1.312244
  - longitude: 103.766 -> 103.766413
- `SGRVM0331` 113 Woodlands Street 13
  - latitude: 1.438 -> 1.437990
  - longitude: 103.781 -> 103.781170
- `SGRVM0332` 113 Clementi Street 13
  - latitude: 1.323 -> 1.323472
  - longitude: 103.770 -> 103.770353
- `SGRVM0333` 140 Petir Rd
  - latitude: 1.375 -> 1.375459
  - longitude: 103.769 -> 103.768969
- `SGRVM0334` 101 Gangsa Rd
  - latitude: 1.379 -> 1.379390
  - longitude: 103.768 -> 103.767520
- `SGRVM0335` 326 Clementi Ave 5 
  - latitude: 1.314 -> 1.314475
  - longitude: 103.766 -> 103.766381
- `SGRVM0336` 311B Clementi Ave 4
  - latitude: 1.319 -> 1.319451
  - longitude: 103.766 -> 103.765632
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - groupId: undefined -> [114]
  - latitude: 1.376 -> 1.376030
  - longitude: 103.719 -> 103.718798
- `SGRVM0338` 343 Clementi Ave 5
  - latitude: 1.318 -> 1.317813
  - longitude: 103.771 -> 103.770932
- `SGRVM0340` 131 Cashew Rd
  - latitude: 1.375 -> 1.374604
  - longitude: 103.771 -> 103.770781
- `SGRVM0341` FairPrice Yishun MRT
  - groupId: undefined -> [42]
  - latitude: 1.429 -> 1.429380
  - longitude: 103.835 -> 103.835100
- `SGRVM0342` 288C Jurong East Street 21
  - latitude: 1.340 -> 1.339725
  - longitude: 103.744 -> 103.743636
- `SGRVM0343` 102 Woodlands Street 13
  - latitude: 1.436 -> 1.436269
  - longitude: 103.781 -> 103.781002
- `SGRVM0344` 160 Woodlands Street 13
  - latitude: 1.433 -> 1.433329
  - longitude: 103.775 -> 103.774652
- `SGRVM0345` 310 Woodlands Street 31
  - latitude: 1.430 -> 1.430135
  - longitude: 103.776 -> 103.775970
- `SGRVM0346` 429 Clementi Ave 3
  - latitude: 1.313 -> 1.312930
  - longitude: 103.763 -> 103.762810
- `SGRVM0347` 103 Clementi Street 14
  - latitude: 1.323 -> 1.322680
  - longitude: 103.769 -> 103.768880
- `SGRVM0348` Prime Supermarket Blk 768 Woodlands Ave 6
  - groupId: undefined -> [80]
  - latitude: 1.446 -> 1.445840
  - longitude: 103.798 -> 103.797900
- `SGRVM0349` SHENG SIONG BLK 18 TECK WHYE LANE 
  - groupId: undefined -> [35]
  - latitude: 1.378 -> 1.378240
  - longitude: 103.754 -> 103.754300
- `SGRVM0350` Cold Storage Lentor Modern
  - groupId: undefined -> [64]
  - latitude: 1.386 -> 1.385690
  - longitude: 103.834 -> 103.834200
- `SGRVM0351` SHENG SIONG NO.1 WOODLANDS ROADS 
  - groupId: undefined -> [37]
  - latitude: 1.381 -> 1.380750
  - longitude: 103.760 -> 103.759800
- `SGRVM0352` FairPrice Blk 511 Canberra Road
  - groupId: undefined -> [41]
  - latitude: 1.454 -> 1.453830
  - longitude: 103.820 -> 103.819600
- `SGRVM0353` SHENG SIONG BLK 467 BUKIT BATOK WEST AVENUE 9 
  - groupId: undefined -> [37]
  - latitude: 1.357 -> 1.357150
  - longitude: 103.743 -> 103.743500
- `SGRVM0354` SCARLETT@YISHUN 10 CINEMA COMPLEX
  - groupId: undefined -> [87]
  - latitude: 1.430 -> 1.429930
  - longitude: 103.836 -> 103.836400
- `SGRVM0355` Raj Agro Kranji
  - groupId: undefined -> [116]
  - latitude: 1.429 -> 1.429010
  - longitude: 103.753 -> 103.752700
- `SGRVM0356` U STARS @817 Keat Hong Link
  - groupId: undefined -> [85]
  - latitude: 1.377 -> 1.376900
  - longitude: 103.749 -> 103.749400
- `SGRVM0357` FairPrice Yew Tee Mrt
  - groupId: undefined -> [39]
  - latitude: 1.397 -> 1.397460
  - longitude: 103.748 -> 103.747500
- `SGRVM0358` FairPrice Canberra Plaza
  - groupId: undefined -> [47]
  - latitude: 1.443 -> 1.442970
  - longitude: 103.831 -> 103.830600
- `SGRVM0359` FairPrice Teck Whye
  - groupId: undefined -> [39]
  - latitude: 1.380 -> 1.380050
  - longitude: 103.753 -> 103.753200
- `SGRVM0360` 431A Yishun Ave 1, Singapore 761431
  - latitude: 1.420 -> 1.419650
  - longitude: 103.847 -> 103.847280
- `SGRVM0361` FairPrice Yew Tee Point
  - groupId: undefined -> [41]
  - latitude: 1.397 -> 1.397160
  - longitude: 103.747 -> 103.746800
- `SGRVM0362` FairPrice Limbang Shopping Centre
  - groupId: undefined -> [41]
  - latitude: 1.392 -> 1.392050
  - longitude: 103.743 -> 103.743400
- `SGRVM0363` FairPrice JEM
  - groupId: undefined -> [41]
  - latitude: 1.333 -> 1.332830
  - longitude: 103.743 -> 103.743100
- `SGRVM0364` Don Don Donki (Jurong East Mall)
  - groupId: undefined -> [77]
  - latitude: 1.333 -> 1.332660
  - longitude: 103.743 -> 103.743200
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE
  - groupId: undefined -> [114]
  - latitude: 1.376 -> 1.376030
  - longitude: 103.719 -> 103.718800
- `SGRVM0366` Giant Yishun Street 22
  - groupId: undefined -> [51]
  - latitude: 1.436 -> 1.436480
  - longitude: 103.838 -> 103.837800
- `SGRVM0367` Grindelwald Supermarket
  - groupId: undefined -> [106]
  - latitude: 1.322 -> 1.322070
  - longitude: 103.770 -> 103.770400
- `SGRVM0368` Ajmal Trading Group - Jalan Papan Aspri Westlite
  - groupId: undefined -> [90]
  - latitude: 1.323 -> 1.323050
  - longitude: 103.727 -> 103.727400
- `SGRVM0369` Don Don Donki (Bukit Panjang Plaza)
  - groupId: undefined -> [76]
  - latitude: 1.380 -> 1.380000
  - longitude: 103.764 -> 103.764300
- `SGRVM0370` Giant Choa Chu Kang Avenue 3
  - groupId: undefined -> [51]
  - latitude: 1.378 -> 1.378020
  - longitude: 103.739 -> 103.739000
- `SGRVM0371` SHENG SIONG BLK 352 CLEMENTI AVE 2 
  - groupId: undefined -> [35]
  - latitude: 1.315 -> 1.315080
  - longitude: 103.771 -> 103.771100
- `SGRVM0372` Redman by Phoon Huat
  - groupId: undefined -> [115]
  - latitude: 1.380 -> 1.379960
  - longitude: 103.764 -> 103.764300
- `SGRVM0373` FairPrice Boon Lay Shopping Complex
  - groupId: undefined -> [39]
  - latitude: 1.347 -> 1.346630
  - longitude: 103.712 -> 103.712000
- `SGRVM0374` FairPrice 451 Clementi Avenue 3
  - groupId: undefined -> [39]
  - latitude: 1.313 -> 1.312780
  - longitude: 103.766 -> 103.765900
- `SGRVM0375` SHENG SIONG BLK 544 JURONG WEST ST 42 
  - groupId: undefined -> [35]
  - latitude: 1.352 -> 1.352410
  - longitude: 103.716 -> 103.715700
- `SGRVM0376` Prime Supermarket Blk 253 Choa Chu Kang
  - groupId: undefined -> [78]
  - latitude: 1.377 -> 1.377440
  - longitude: 103.744 -> 103.744390
- `SGRVM0377` FairPrice Bukit Panjang Plaza
  - groupId: undefined -> [47]
  - latitude: 1.381 -> 1.381330
  - longitude: 103.764 -> 103.764300
- `SGRVM0378` Giant Bukit Batok East Avenue 3
  - groupId: undefined -> [51]
  - latitude: 1.347 -> 1.346610
  - longitude: 103.757 -> 103.757200
- `SGRVM0379` 467C Yishun Ave 6
  - latitude: 1.427 -> 1.426831
  - longitude: 103.851 -> 103.851389
- `SGRVM0380` U STARS @810 Cha Chu Kang Ave 7
  - groupId: undefined -> [84]
  - latitude: 1.374 -> 1.374020
  - longitude: 103.746 -> 103.746200
- `SGRVM0381` SCARLETT@PLANTATION PLAZA
  - groupId: undefined -> [87]
  - latitude: 1.357 -> 1.357210
  - longitude: 103.734 -> 103.734000
- `SGRVM0382` FairPrice Tengah Parc Point
  - groupId: undefined -> [47]
  - latitude: 1.361 -> 1.361000
  - longitude: 103.739 -> 103.738500
- `SGRVM0383` Giant Tengah Plantation Plaza
  - groupId: undefined -> [57]
  - latitude: 1.357 -> 1.357120
  - longitude: 103.734 -> 103.733995
- `SGRVM0384` FairPrice 280 Bukit Batok East Avenue 3
  - groupId: undefined -> [39]
  - latitude: 1.348 -> 1.347730
  - longitude: 103.757 -> 103.757000
- `SGRVM0385` 361 Sembawang Crescent
  - latitude: 1.446 -> 1.446401
  - longitude: 103.814 -> 103.813932
- `SGRVM0386` ASPRI-D Wall Papan Dormitory
  - latitude: 1.322 -> 1.322238
  - longitude: 103.731 -> 103.731053
- `SGRVM0387` 510 Jurong West Street 51
  - latitude: 1.348 -> 1.348380
  - longitude: 103.719 -> 103.719460
- `SGRVM0388` 868 Yishun Street 81, Singapore 760868
  - latitude: 1.414 -> 1.413703
  - longitude: 103.838 -> 103.837613
- `SGRVM0389` Yishun Park Hawker
  - latitude: 1.425 -> 1.425023
  - longitude: 103.842 -> 103.842145
- `SGRVM0390` Senja Hawker Centre
  - latitude: 1.387 -> 1.387105
  - longitude: 103.761 -> 103.760934
- `SGRVM0391` 383A Yishun Ave 6, Singapore 761383
  - latitude: 1.431 -> 1.430837
  - longitude: 103.848 -> 103.847854
- `SGRVM0393` SACHI MINIMART PTE LTD
  - latitude: 1.318 -> 1.317980
  - longitude: 103.729 -> 103.729137
- `SGRVM0395` 627 Yishun Street 61, Singapore 760627
  - latitude: 1.418 -> 1.417628
  - longitude: 103.837 -> 103.836733
- `SGRVM0396` 259 Yishun Street 22, Singapore 760259
  - latitude: 1.435 -> 1.434918
  - longitude: 103.839 -> 103.839136
- `SGRVM0397` Republic Polytechnic
  - latitude: 1.443 -> 1.442859
  - longitude: 103.786 -> 103.785560
- `SGRVM0398` 252 Jurong East Street 24
  - latitude: 1.343 -> 1.343079
  - longitude: 103.738 -> 103.738221
- `SGRVM0399` Bukit Batok West Hawker Centre
  - latitude: 1.356 -> 1.355543
  - longitude: 103.742 -> 103.742105
- `SGRVM0400` Westlite Jalan Tukang Dormitory
  - latitude: 1.326 -> 1.326253
  - longitude: 103.717 -> 103.716924
- `SGRVM0401` Bukit Panjang Hawker Centre
  - latitude: 1.377 -> 1.377446
  - longitude: 103.773 -> 103.772572
- `SGRVM0402` 353 Clementi Food Center
  - latitude: 1.314 -> 1.314339
  - longitude: 103.771 -> 103.770811
- `SGRVM0403` 204 Clementi Ave 6, Singapore 120204
  - latitude: 1.321 -> 1.321146
  - longitude: 103.763 -> 103.763441
- `SGRVM0404` West Coast Market Square
  - latitude: 1.304 -> 1.303747
  - longitude: 103.764 -> 103.764215
- `SGRVM0405` Singapore Zoo
  - latitude: 1.404 -> 1.404353
  - longitude: 103.790 -> 103.790448
- `SGRVM0406` Teban Market Place
  - latitude: 1.321 -> 1.320833
  - longitude: 103.743 -> 103.742535
- `SGRVM0407` 505 Jurong West Market & Food Centre
  - latitude: 1.350 -> 1.349816
  - longitude: 103.719 -> 103.718533
- `SGRVM0409` 445 Clementi Avenue 3
  - latitude: 1.313 -> 1.312954
  - longitude: 103.764 -> 103.764175
- `SGRVM0410` 138 Yishun Ring Road, Singapore 760138
  - latitude: 1.432 -> 1.431860
  - longitude: 103.831 -> 103.830624
- `SGRVM0411` Bird Paradise
  - latitude: 1.407 -> 1.406532
  - longitude: 103.781 -> 103.781264
- `SGRVM0412` Penjuru Recreation Centre
  - latitude: 1.319 -> 1.318843
  - longitude: 103.733 -> 103.732684
- `SGRVM0413` 221A Boon Lay Market
  - latitude: 1.346 -> 1.345843
  - longitude: 103.713 -> 103.713096
- `SGRVM0414` FairPrice 289A Toh Guan
  - latitude: 1.340 -> 1.340151
  - longitude: 103.745 -> 103.745248
- `SGRVM0415` Chong Pang Food Centre
  - latitude: 1.432 -> 1.431997
  - longitude: 103.828 -> 103.828148
- `SGRVM0417` SHENG SIONG BLK 845 YISHUN ST 81
  - latitude: 1.416 -> 1.416050
  - longitude: 103.835 -> 103.834900
- `SGRVM0418` NESST Tukang Dormitory
  - latitude: 1.326 -> 1.325986
  - longitude: 103.715 -> 103.715167
- `SGRVM0420` SHENG SIONG BLK 120 CANBERRA CRESCENT
  - latitude: 1.446 -> 1.445803
  - longitude: 103.829 -> 103.829193
- `SGRVM0421` Bukit Canberra Hawker Centre
  - latitude: 1.449 -> 1.448995
  - longitude: 103.823 -> 103.822918
- `SGRVM0422` Sembawang Recreation Centre
  - latitude: 1.459 -> 1.458517
  - longitude: 103.819 -> 103.819277
- `SGRVM0423` West 1800 Dormitory
  - latitude: 1.326 -> 1.326100
  - longitude: 103.735 -> 103.734863
- `SGRVM0424` 20 Marsiling Lane Food Centre
  - latitude: 1.443 -> 1.443498
  - longitude: 103.777 -> 103.776995
- `SGRVM0425` FairPrice West Coast Wet Market
  - groupId: undefined -> [41]
  - latitude: 1.312 -> 1.311910
  - longitude: 103.759 -> 103.759300
- `SGRVM0426` 601 Jurong West Street 62
  - latitude: 1.340 -> 1.339834
  - longitude: 103.700 -> 103.700294
- `SGRVM0427` 991B Upper Jurong Rd
  - latitude: 1.335 -> 1.335335
  - longitude: 103.693 -> 103.693369
- `SGRVM0428` 183C Boon Lay Avenue
  - latitude: 1.349 -> 1.348694
  - longitude: 103.709 -> 103.709210
- `SGRVM0429` 640 Jurong West Street 61
  - latitude: 1.340 -> 1.340108
  - longitude: 103.696 -> 103.696496
- `SGRVM0430` SHENG SIONG BLK 440 BUKIT BATOK WEST AVE 8
  - groupId: undefined -> [35]
  - latitude: 1.356 -> 1.355660
  - longitude: 103.739 -> 103.739300
- `SGRVM0431` 708 Clementi West Street 2
  - latitude: 1.306 -> 1.305726
  - longitude: 103.762 -> 103.761857
- `SGRVM0433` 414 Pandan Gardens Road
  - latitude: 1.320 -> 1.320040
  - longitude: 103.747 -> 103.747324
- `SGRVM0434` 507 West Coast Drive
  - latitude: 1.312 -> 1.312054
  - longitude: 103.761 -> 103.760789
- `SGRVM0435` 801 West Coast Crescent
  - latitude: 1.301 -> 1.300862
  - longitude: 103.763 -> 103.763396
- `SGRVM0436` 48 Teban Gardens Road
  - latitude: 1.320 -> 1.320479
  - longitude: 103.740 -> 103.739954
- `SGRVM0439` 555 Jurong West Street 42
  - latitude: 1.354 -> 1.353644
  - longitude: 103.719 -> 103.718635
- `SGRVM0440` SHENG SIONG BLK 61 TEBAN GARDENS ROAD
  - latitude: 1.322 -> 1.322120
  - longitude: 103.738 -> 103.738400
- `SGRVM0441` 706 Jurong West Street 71
  - latitude: 1.341 -> 1.341454
  - longitude: 103.695 -> 103.694560
- `SGRVM0442` 238B Boon Lay Drive
  - latitude: 1.342 -> 1.342022
  - longitude: 103.710 -> 103.709918
- `SGRVM0443` 518 Jurong West Street 52
  - latitude: 1.345 -> 1.345090
  - longitude: 103.718 -> 103.718094
- `SGRVM0444` 60 Jurong West Central 3
  - latitude: 1.340 -> 1.340462
  - longitude: 103.704 -> 103.704359
- `SGRVM0445` 444 Jurong West Ave 1, Singapore 640444
  - latitude: 1.352 -> 1.351944
  - longitude: 103.719 -> 103.719070
- `SGRVM0446` 988A Jurong West Street 93
  - latitude: 1.337 -> 1.336515
  - longitude: 103.696 -> 103.695863
- `SGRVM0447` 689 Jurong West Central 1
  - latitude: 1.341 -> 1.340977
  - longitude: 103.706 -> 103.706335
- `SGRVM0448` 512B Yishun St 51, Singapore 762512
  - latitude: 1.415 -> 1.414528
  - longitude: 103.842 -> 103.841851
- `SGRVM0454` 783 Yishun Ring Road, Singapore 760783
  - latitude: 1.422 -> 1.421833
  - longitude: 103.832 -> 103.832388
- `SGRVM0457` 799 Yishun Ring Rd, Singapore 760799
  - latitude: 1.419 -> 1.419226
  - longitude: 103.833 -> 103.832506
- `SGRVM0458` ST Food Court, #01-09 Sungei Tengah Lodge
  - latitude: 1.378 -> 1.377643
  - longitude: 103.718 -> 103.718008
- `SGRVM0462` 858 Yishun Ave 4, Singapore 760858
  - latitude: 1.418 -> 1.417671
  - longitude: 103.838 -> 103.838460
- `SGRVM0469` 821 Yishun Street 81, Singapore 760821
  - latitude: 1.413 -> 1.413370
  - longitude: 103.834 -> 103.834094
- `SGRVM0471` ST Beer Garden, #01-10 Sungei Tengah Lodge
  - latitude: 1.378 -> 1.377568
  - longitude: 103.718 -> 103.717691
</details>

<details>
<summary><b>2026-09-08</b> · 1,306 locations · +7 · −1 · ±2</summary>

- Snapshot size: **1306** locations
- Added: **7**
- Removed: **1**
- Changed: **2**

Added
- `SGRVM0448` 512B Yishun St 51, Singapore 762512 (postal: 762512, status: RUNNING)
- `SGRVM0454` 783 Yishun Ring Road, Singapore 760783 (postal: 760783, status: FULL)
- `SGRVM0457` 799 Yishun Ring Rd, Singapore 760799 (postal: 760799, status: FULL)
- `SGRVM0458` ST Food Court, #01-09 Sungei Tengah Lodge (postal: 698924, status: RUNNING)
- `SGRVM0462` 858 Yishun Ave 4, Singapore 760858 (postal: 760858, status: RUNNING)
- `SGRVM0469` 821 Yishun Street 81, Singapore 760821 (postal: 760821, status: RUNNING)
- `SGRVM0471` ST Beer Garden, #01-10 Sungei Tengah Lodge (postal: 698924, status: RUNNING)

Removed
- `20255010453` Haig Road Market & Cooked Food Centre (postal: 430014, status: OFFLINE)

Changed
- `20254909872` Giant Express 509 Bedok North St 3
  - locationName: Giant Bedok North Street 3 -> Giant Express 509 Bedok North St 3
- `SGRVM0138` FairPrice Kampung Admiralty
  - locationName: FairPrice Kampung Admiratly -> FairPrice Kampung Admiralty
</details>

<details>
<summary><b>2026-09-07</b> · 1,300 locations · ±1</summary>

- Snapshot size: **1300** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `SGRVM0117` Bazaar Terusan Recreation Centre
  - address: #33/34, TERUSAN RECREATION CENTRE, 1 JALAN PAPPAN ROAD, 619392 -> #33/34, TERUSAN RECREATION CENTRE, 1 JALAN PAPAN ROAD, 619392
</details>

<details>
<summary><b>2026-09-06</b> · 1,300 locations · +1 · ±1299</summary>

- Snapshot size: **1300** locations
- Added: **1**
- Removed: **0**
- Changed: **1299**

Added
- `20261515324` Haig Road Market & Cooked Food Centre (postal: 430014, status: RUNNING)

Changed
- `20254408746` Blk 626, Pasir Ris Drive 3
  - latitude: 1.37982800 -> 1.380
  - longitude: 103.94095000 -> 103.941
- `20254408763` Blk 708, Pasir Ris Drive 10
  - latitude: 1.38095500 -> 1.381
  - longitude: 103.93859200 -> 103.939
- `20254408774` Blk 473, Pasir Ris Drive 6
  - latitude: 1.37450900 -> 1.375
  - longitude: 103.95735100 -> 103.957
- `20254408775` Blk 717, Pasir Ris Street 72
  - latitude: 1.38277500 -> 1.383
  - longitude: 103.93654000 -> 103.937
- `20254408776` Blk 701, Pasir Ris Drive 10
  - latitude: 1.37999100 -> 1.380
  - longitude: 103.93789100 -> 103.938
- `20254408777` Blk 643, Pasir Ris Drive 10
  - latitude: 1.37772200 -> 1.378
  - longitude: 103.93810000 -> 103.938
- `20254408778` Blk 638, Pasir Ris Drive 1
  - latitude: 1.37628900 -> 1.376
  - longitude: 103.94094800 -> 103.941
- `20254408779` Blk 641, Pasir Ris Drive 1
  - latitude: 1.37646400 -> 1.376
  - longitude: 103.93956100 -> 103.940
- `20254408780` Blk 602, Elias Road
  - latitude: 1.37739800 -> 1.377
  - longitude: 103.94399100 -> 103.944
- `20254408781` Blk 585, Pasir Ris Street 53
  - latitude: 1.37537900 -> 1.375
  - longitude: 103.94741500 -> 103.947
- `20254408782` Blk 159,Tampines Street 12
  - latitude: 1.35123400 -> 1.351
  - longitude: 103.94656600 -> 103.947
- `20254408783` Blk 356D, Ubi Road 3
  - latitude: 1.32691200 -> 1.327
  - longitude: 103.90008200 -> 103.900
- `20254408784` Blk 534, Pasir Ris Drive 1
  - latitude: 1.37043600 -> 1.370
  - longitude: 103.95065300 -> 103.951
- `20254408785` Blk 520, Pasir Ris Street 52
  - latitude: 1.37348500 -> 1.373
  - longitude: 103.94480900 -> 103.945
- `20254408786` Blk 516, Pasir Ris Street 52
  - latitude: 1.37410300 -> 1.374
  - longitude: 103.94308600 -> 103.943
- `20254508877` Blk 423, Pasir Ris Drive 6
  - latitude: 1.37013400 -> 1.370
  - longitude: 103.95462300 -> 103.955
- `20254508878` Blk 408, Pasir Ris Drive 6
  - latitude: 1.37335200 -> 1.373
  - longitude: 103.95340700 -> 103.953
- `20254508879` Blk 108, Lengkong Tiga
  - latitude: 1.32465500 -> 1.325
  - longitude: 103.91024400 -> 103.910
- `20254508880` Blk 429, Pasir Ris Drive 6
  - latitude: 1.37008600 -> 1.370
  - longitude: 103.95670600 -> 103.957
- `20254508881` Blk 725, Pasir Ris Street 72
  - latitude: 1.38141500 -> 1.381
  - longitude: 103.93571700 -> 103.936
- `20254508882` Blk 72, Marine Drive
  - latitude: 1.30424700 -> 1.304
  - longitude: 103.90837000 -> 103.908
- `20254508883` Blk 458, Pasir Ris Drive 4
  - latitude: 1.37146100 -> 1.371
  - longitude: 103.95955800 -> 103.960
- `20254508884` Blk 257, Pasir Ris Street 21
  - latitude: 1.36714600 -> 1.367
  - longitude: 103.96369900 -> 103.964
- `20254508885` Blk 479, Pasir Ris Drive 4
  - latitude: 1.37517400 -> 1.375
  - longitude: 103.95913100 -> 103.959
- `20254508886` Blk 232, Pasir Ris Drive 4
  - latitude: 1.37464700 -> 1.375
  - longitude: 103.96167800 -> 103.962
- `20254508887` Blk 225, Pasir Ris Street 21
  - latitude: 1.37120500 -> 1.371
  - longitude: 103.96120600 -> 103.961
- `20254508888` Blk 756, Pasir Ris Street 71
  - latitude: 1.37787800 -> 1.378
  - longitude: 103.93350000 -> 103.933
- `20254508889` Blk 209, Pasir Ris Street 21
  - latitude: 1.36622700 -> 1.366
  - longitude: 103.96189700 -> 103.962
- `20254508890` Blk 275, Pasir Ris Street 21
  - latitude: 1.36430200 -> 1.364
  - longitude: 103.96473400 -> 103.965
- `20254508891` Blk 160, Pasir Ris Street 13
  - latitude: 1.36408600 -> 1.364
  - longitude: 103.96253200 -> 103.963
- `20254508892` Blk 747, Pasir Ris Street 71
  - latitude: 1.37918200 -> 1.379
  - longitude: 103.93469500 -> 103.935
- `20254508893` Blk 501, Pasir Ris Street 52
  - latitude: 1.37622800 -> 1.376
  - longitude: 103.94596400 -> 103.946
- `20254508894` Blk 497A, Tampines Street 45
  - latitude: 1.35931200 -> 1.359
  - longitude: 103.95861600 -> 103.959
- `20254508895` Blk 485A, Tampines Avenue 9
  - latitude: 1.36002200 -> 1.360
  - longitude: 103.95573700 -> 103.956
- `20254508896` Blk 419, Pasir Ris Drive 6
  - latitude: 1.37163300 -> 1.372
  - longitude: 103.95462500 -> 103.955
- `20254508897` Blk 771, Pasir Ris Street 71
  - latitude: 1.37561000 -> 1.376
  - longitude: 103.93648300 -> 103.936
- `20254508898` Blk 742 Pasir Ris Street 71
  - latitude: 1.37708700 -> 1.377
  - longitude: 103.93605600 -> 103.936
- `20254508899` Blk 481, Pasir Ris Drive 4
  - latitude: 1.37408000 -> 1.374
  - longitude: 103.95877500 -> 103.959
- `20254508900` Blk 461,Tampines Street 44
  - latitude: 1.35887900 -> 1.359
  - longitude: 103.95432700 -> 103.954
- `20254508901` Blk 706,Tampines Street 71
  - latitude: 1.35761800 -> 1.358
  - longitude: 103.93757100 -> 103.938
- `20254508902` Blk 740 Tampines Street 72
  - latitude: 1.35941900 -> 1.359
  - longitude: 103.93291500 -> 103.933
- `20254508903` Blk 734,Tampines Street 71
  - latitude: 1.35820200 -> 1.358
  - longitude: 103.93435700 -> 103.934
- `20254508904` Blk 626A,Tampines Street 61
  - latitude: 1.36252200 -> 1.363
  - longitude: 103.93965400 -> 103.940
- `20254508905` Blk 37, Bedok South Avenue 2
  - latitude: 1.32197200 -> 1.322
  - longitude: 103.93997700 -> 103.940
- `20254508906` Blk 622B,Tampines Avenue 12
  - latitude: 1.36088700 -> 1.361
  - longitude: 103.94119600 -> 103.941
- `20254508907` Blk 496D,Tampines Avenue 9
  - latitude: 1.36158800 -> 1.362
  - longitude: 103.95006900 -> 103.950
- `20254508908` Blk 842D,Tampines Street 82
  - latitude: 1.35062900 -> 1.351
  - longitude: 103.93761700 -> 103.938
- `20254508909` Blk 413, Bedok North Avenue 2
  - latitude: 1.33028100 -> 1.330
  - longitude: 103.93108100 -> 103.931
- `20254508910` Blk 123, Geylang East Avenue 1
  - latitude: 1.31813200 -> 1.318
  - longitude: 103.88536300 -> 103.885
- `20254508911` FairPrice Old Airport Hawker Centre
  - latitude: 1.30846300 -> 1.308
  - longitude: 103.88623100 -> 103.886
- `20254508912` Blk 82, Bedok North Road
  - latitude: 1.32950100 -> 1.330
  - longitude: 103.94046400 -> 103.940
- `20254508913` Blk 894A,Tampines Street 81
  - latitude: 1.34812100 -> 1.348
  - longitude: 103.93184900 -> 103.932
- `20254508914` Blk 832,Tampines Street 82
  - latitude: 1.35011900 -> 1.350
  - longitude: 103.93532600 -> 103.935
- `20254508915` Blk 60, Marine Drive
  - latitude: 1.30342300 -> 1.303
  - longitude: 103.90858800 -> 103.909
- `20254508916` FairPrice SingPost Centre
  - latitude: 1.31899400 -> 1.319
  - longitude: 103.89446000 -> 103.894
- `20254508917` FairPrice New Upper Changi Road
  - latitude: 1.32467900 -> 1.325
  - longitude: 103.94146000 -> 103.941
- `20254508994` Blk 148, Pasir Ris Street 13
  - latitude: 1.36208300 -> 1.362
  - longitude: 103.96202100 -> 103.962
- `20254508995` Blk 298, Tampines Street 22
  - latitude: 1.35172500 -> 1.352
  - longitude: 103.95474000 -> 103.955
- `20254508996` Blk 187, Pasir Ris Street 11
  - latitude: 1.36464200 -> 1.365
  - longitude: 103.95942400 -> 103.959
- `20254508997` Blk 555, Pasir Ris Street 51
  - latitude: 1.36810000 -> 1.368
  - longitude: 103.95194700 -> 103.952
- `20254508998` Blk 105, Pasir Ris Street 12
  - latitude: 1.36854000 -> 1.369
  - longitude: 103.95722800 -> 103.957
- `20254508999` Blk 132, Pasir Ris Street 11
  - latitude: 1.36615700 -> 1.366
  - longitude: 103.95608200 -> 103.956
- `20254509000` Blk 120, Pasir Ris Street 11
  - latitude: 1.36729400 -> 1.367
  - longitude: 103.95430600 -> 103.954
- `20254509001` Blk 283, Tampines Street 22
  - latitude: 1.34841400 -> 1.348
  - longitude: 103.95271100 -> 103.953
- `20254509002` Blk 560, Pasir Ris Street 51
  - latitude: 1.36673300 -> 1.367
  - longitude: 103.95043800 -> 103.950
- `20254509003` Blk 564, Pasir Ris Street 51
  - latitude: 1.36840100 -> 1.368
  - longitude: 103.94984800 -> 103.950
- `20254509004` Blk 345, Tampines Street 33
  - latitude: 1.35183000 -> 1.352
  - longitude: 103.96228900 -> 103.962
- `20254509005` Blk 526A, Pasir Ris Street 51
  - latitude: 1.36752600 -> 1.368
  - longitude: 103.94731900 -> 103.947
- `20254509006` Blk 191, Pasir Ris Street 12
  - latitude: 1.36594300 -> 1.366
  - longitude: 103.95870200 -> 103.959
- `20254509007` Blk 108, Tampines Street 11
  - latitude: 1.34787700 -> 1.348
  - longitude: 103.94857300 -> 103.949
- `20254509008` Blk 637, Bedok Reservoir Road
  - latitude: 1.33107600 -> 1.331
  - longitude: 103.90403400 -> 103.904
- `20254509013` Blk 768, Pasir Ris Street 71
  - latitude: 1.37516400 -> 1.375
  - longitude: 103.93533900 -> 103.935
- `20254509016` Blk 323, Tampines Street 33
  - latitude: 1.35180100 -> 1.352
  - longitude: 103.95828200 -> 103.958
- `20254609012` Blk 289, Tampines Street 22
  - latitude: 1.34960800 -> 1.350
  - longitude: 103.95535900 -> 103.955
- `20254609014` Blk 249, Pasir Ris Street 21
  - latitude: 1.37019300 -> 1.370
  - longitude: 103.96332600 -> 103.963
- `20254609015` Blk 165,Tampines Street 12
  - latitude: 1.34929200 -> 1.349
  - longitude: 103.94612200 -> 103.946
- `20254609017` Blk 103, Tampines Street 11
  - latitude: 1.34765600 -> 1.348
  - longitude: 103.94644800 -> 103.946
- `20254609018` Blk 761, Pasir Ris Street 71
  - latitude: 1.37656000 -> 1.377
  - longitude: 103.93339700 -> 103.933
- `20254609019` Blk 303, Tampines Street 32
  - latitude: 1.35197300 -> 1.352
  - longitude: 103.95585500 -> 103.956
- `20254609020` Blk 141, Pasir Ris Street 11
  - latitude: 1.36417500 -> 1.364
  - longitude: 103.95893300 -> 103.959
- `20254609021` Blk 782, Pasir Ris Street 71
  - latitude: 1.37337700 -> 1.373
  - longitude: 103.93889300 -> 103.939
- `20254609022` Blk 524A, Pasir Ris Street 51
  - latitude: 1.37138300 -> 1.371
  - longitude: 103.94766800 -> 103.948
- `20254609023` Blk 207, Tampines Street 21
  - latitude: 1.35132100 -> 1.351
  - longitude: 103.95210800 -> 103.952
- `20254609024` Blk 765, Bedok Reservoir View
  - latitude: 1.33600100 -> 1.336
  - longitude: 103.93566900 -> 103.936
- `20254609025` Blk 74, Marine Drive
  - latitude: 1.30361500 -> 1.304
  - longitude: 103.90721400 -> 103.907
- `20254609026` Blk 47, Marine Crescent
  - latitude: 1.30571600 -> 1.306
  - longitude: 103.91236800 -> 103.912
- `20254609065` Blk 406,Tampines Street 41
  - latitude: 1.35814100 -> 1.358
  - longitude: 103.94591900 -> 103.946
- `20254609066` Blk 770, Bedok Reservoir View
  - latitude: 1.33604100 -> 1.336
  - longitude: 103.93832700 -> 103.938
- `20254609067` Blk 490B, Tampines Street 45
  - latitude: 1.36256000 -> 1.363
  - longitude: 103.95621000 -> 103.956
- `20254609068` Blk 449,Tampines Street 42
  - latitude: 1.35706500 -> 1.357
  - longitude: 103.95105500 -> 103.951
- `20254609069` Blk 78, Bedok North Road
  - latitude: 1.32726800 -> 1.327
  - longitude: 103.94091000 -> 103.941
- `20254609070` Blk 409, Bedok North Avenue 2
  - latitude: 1.32811100 -> 1.328
  - longitude: 103.93291700 -> 103.933
- `20254609071` Blk 124, Simei Street 1
  - latitude: 1.34627600 -> 1.346
  - longitude: 103.95327800 -> 103.953
- `20254609072` Blk 498A, Tampines Street 45
  - latitude: 1.36154000 -> 1.362
  - longitude: 103.95816100 -> 103.958
- `20254609073` Blk 130, Bedok North Street 2
  - latitude: 1.32710600 -> 1.327
  - longitude: 103.93665400 -> 103.937
- `20254609074` Blk 135, Simei Street 1
  - latitude: 1.34793200 -> 1.348
  - longitude: 103.95713600 -> 103.957
- `20254609075` Blk 229, Tampines Street 23
  - latitude: 1.35590000 -> 1.356
  - longitude: 103.95396300 -> 103.954
- `20254609077` Blk 886,Tampines Street 83
  - latitude: 1.35122900 -> 1.351
  - longitude: 103.93202200 -> 103.932
- `20254609078` Blk 240, Tampines Street 21
  - latitude: 1.35500600 -> 1.355
  - longitude: 103.94712700 -> 103.947
- `20254609079` Blk 216, Tampines Street 23
  - latitude: 1.35405600 -> 1.354
  - longitude: 103.95287600 -> 103.953
- `20254609086` Blk 421, Bedok North Road
  - latitude: 1.32836500 -> 1.328
  - longitude: 103.92900600 -> 103.929
- `20254609087` Blk 64, Marine Drive
  - latitude: 1.30195500 -> 1.302
  - longitude: 103.90917400 -> 103.909
- `20254609088` Blk 201, Bedok North Street 1
  - latitude: 1.32605800 -> 1.326
  - longitude: 103.92839800 -> 103.928
- `20254609089` Blk 807A, Chai Chee Road
  - latitude: 1.32715600 -> 1.327
  - longitude: 103.92317500 -> 103.923
- `20254609090` Blk 113, Simei Street 1
  - latitude: 1.34280800 -> 1.343
  - longitude: 103.94986100 -> 103.950
- `20254609091` Blk 55, Chai Chee Drive
  - latitude: 1.32717200 -> 1.327
  - longitude: 103.91933800 -> 103.919
- `20254609092` Blk 426 Tampines Street 41
  - latitude: 1.35956800 -> 1.360
  - longitude: 103.94796200 -> 103.948
- `20254609093` Blk 230D, Tampines Street 24
  - latitude: 1.35611300 -> 1.356
  - longitude: 103.95151600 -> 103.952
- `20254609094` Blk 633,Tampines North Drive 2
  - latitude: 1.36550200 -> 1.366
  - longitude: 103.94166400 -> 103.942
- `20254609095` Blk 94B, Bedok North Avenue 4
  - latitude: 1.33402000 -> 1.334
  - longitude: 103.94289500 -> 103.943
- `20254609096` Blk 610C,Tampines North Drive 1
  - latitude: 1.36448900 -> 1.364
  - longitude: 103.93543000 -> 103.935
- `20254609097` Blk 862,Tampines Street 83
  - latitude: 1.35466400 -> 1.355
  - longitude: 103.93646900 -> 103.936
- `20254609098` Blk 641B,Tampines Street 62
  - latitude: 1.36746100 -> 1.367
  - longitude: 103.94368600 -> 103.944
- `20254609099` Blk 662C,Tampines Street 64
  - latitude: 1.36967400 -> 1.370
  - longitude: 103.93382500 -> 103.934
- `20254609100` Blk 721,Tampines Street 71
  - latitude: 1.36007800 -> 1.360
  - longitude: 103.93634300 -> 103.936
- `20254609101` Blk 876C,Tampines Avenue 8
  - latitude: 1.35333700 -> 1.353
  - longitude: 103.93007100 -> 103.930
- `20254609102` Blk 660,Tampines Street 64
  - latitude: 1.36772100 -> 1.368
  - longitude: 103.93389800 -> 103.934
- `20254609103` Blk 631B,Tampines North Drive 2
  - latitude: 1.36295200 -> 1.363
  - longitude: 103.94254500 -> 103.943
- `20254609104` Blk 871C,Tampines Street 86
  - latitude: 1.35682700 -> 1.357
  - longitude: 103.93145200 -> 103.931
- `20254609105` Blk 648A,Tampines Street 62
  - latitude: 1.36822700 -> 1.368
  - longitude: 103.94093800 -> 103.941
- `20254609106` Blk 603A,Tampines Avenue 9
  - latitude: 1.36093900 -> 1.361
  - longitude: 103.93529200 -> 103.935
- `20254609107` Blk 117, Bedok North Road
  - latitude: 1.33064900 -> 1.331
  - longitude: 103.93852000 -> 103.939
- `20254609108` Blk 635B,Tampines North Drive 2
  - latitude: 1.36692900 -> 1.367
  - longitude: 103.93981000 -> 103.940
- `20254609109` Blk 406, Bedok North Avenue 3
  - latitude: 1.32819900 -> 1.328
  - longitude: 103.93446000 -> 103.934
- `20254609110` Blk 319, Ubi Avenue 1
  - latitude: 1.32820800 -> 1.328
  - longitude: 103.90347700 -> 103.903
- `20254609111` Blk 814,Tampines Street 81
  - latitude: 1.34729000 -> 1.347
  - longitude: 103.93665400 -> 103.937
- `20254609112` Blk 911,Tampines Street 91
  - latitude: 1.34990400 -> 1.350
  - longitude: 103.93985600 -> 103.940
- `20254609113` Blk 899A,Tampines Street 81
  - latitude: 1.34623200 -> 1.346
  - longitude: 103.93520900 -> 103.935
- `20254609114` Blk 61, Chai Chee Road
  - latitude: 1.32509000 -> 1.325
  - longitude: 103.92074900 -> 103.921
- `20254609115` Blk 115, Lengkong Tiga
  - latitude: 1.32310400 -> 1.323
  - longitude: 103.91134700 -> 103.911
- `20254609231` Blk 330, Ubi Avenue 1
  - latitude: 1.32654800 -> 1.327
  - longitude: 103.90413900 -> 103.904
- `20254609232` Blk 104, Lengkong Tiga
  - latitude: 1.32583900 -> 1.326
  - longitude: 103.90991900 -> 103.910
- `20254609233` Blk 806,Tampines Avenue 4
  - latitude: 1.34548600 -> 1.345
  - longitude: 103.93715100 -> 103.937
- `20254609234` Blk 926,Tampines Street 91
  - latitude: 1.34587500 -> 1.346
  - longitude: 103.94063700 -> 103.941
- `20254609235` Blk 145,Tampines Street 12
  - latitude: 1.34879200 -> 1.349
  - longitude: 103.94373700 -> 103.944
- `20254609236` Blk 954C,Tampines Street 96
  - latitude: 1.34249400 -> 1.342
  - longitude: 103.93708200 -> 103.937
- `20254609237` Blk 638A,Tampines Street 62
  - latitude: 1.36409000 -> 1.364
  - longitude: 103.94488600 -> 103.945
- `20254609238` Blk 249, Tampines Street 21
  - latitude: 1.35182200 -> 1.352
  - longitude: 103.94869200 -> 103.949
- `20254609239` Blk 762, Bedok Reservoir View
  - latitude: 1.33632200 -> 1.336
  - longitude: 103.93445100 -> 103.934
- `20254609240` Blk 53, Chai Chee Street
  - latitude: 1.32848600 -> 1.328
  - longitude: 103.91988200 -> 103.920
- `20254609241` Blk 491D,Tampines Street 45
  - latitude: 1.36250700 -> 1.363
  - longitude: 103.95478900 -> 103.955
- `20254609242` Blk 854,Tampines Street 82
  - latitude: 1.35303200 -> 1.353
  - longitude: 103.93657800 -> 103.937
- `20254609243` Blk 808C, Chai Chee Road
  - latitude: 1.32786100 -> 1.328
  - longitude: 103.92403200 -> 103.924
- `20254609244` Blk 2, Chai Chee Road
  - latitude: 1.32699000 -> 1.327
  - longitude: 103.92250000 -> 103.922
- `20254609245` Blk 874,Tampines Street 84
  - latitude: 1.35343000 -> 1.353
  - longitude: 103.93259600 -> 103.933
- `20254709293` Blk 495D,Tampines Street 43
  - latitude: 1.36370400 -> 1.364
  - longitude: 103.95202000 -> 103.952
- `20254709294` Blk 80, Bedok North Road
  - latitude: 1.32848700 -> 1.328
  - longitude: 103.94060400 -> 103.941
- `20254709295` Blk 183, Bedok North Road
  - latitude: 1.32644100 -> 1.326
  - longitude: 103.94185800 -> 103.942
- `20254709296` Blk 264, Tampines Street 21
  - latitude: 1.35287000 -> 1.353
  - longitude: 103.95113300 -> 103.951
- `20254709297` Blk 451, Tampines Street 42
  - latitude: 1.35657200 -> 1.357
  - longitude: 103.95410700 -> 103.954
- `20254709298` Blk 137, Bedok North Avenue 3
  - latitude: 1.32882600 -> 1.329
  - longitude: 103.93554200 -> 103.936
- `20254709299` Blk 233, Tampines Street 21
  - latitude: 1.35637200 -> 1.356
  - longitude: 103.94794300 -> 103.948
- `20254709300` Blk 384, Tampines Street 32
  - latitude: 1.35401300 -> 1.354
  - longitude: 103.95794100 -> 103.958
- `20254709301` Blk 125, Tampines Street 11
  - latitude: 1.34619700 -> 1.346
  - longitude: 103.94992200 -> 103.950
- `20254709302` Blk 44, Chai Chee Street
  - latitude: 1.32903900 -> 1.329
  - longitude: 103.92559200 -> 103.926
- `20254709303` Blk 403, Bedok North Avenue 3
  - latitude: 1.32979600 -> 1.330
  - longitude: 103.93384000 -> 103.934
- `20254709304` Blk 872,Tampines Street 84
  - latitude: 1.35425000 -> 1.354
  - longitude: 103.93232300 -> 103.932
- `20254709305` Blk 43, Chai Chee Street
  - latitude: 1.32836800 -> 1.328
  - longitude: 103.92554600 -> 103.926
- `20254709306` Blk 50, Chai Chee Street
  - latitude: 1.32938200 -> 1.329
  - longitude: 103.92245000 -> 103.922
- `20254709307` Blk 932,Tampines Street 91
  - latitude: 1.34558800 -> 1.346
  - longitude: 103.93945500 -> 103.939
- `20254709338` Blk 352, Tampines Street 33
  - latitude: 1.35420100 -> 1.354
  - longitude: 103.96237300 -> 103.962
- `20254709339` Blk 366, Tampines Street 34
  - latitude: 1.35778600 -> 1.358
  - longitude: 103.96139400 -> 103.961
- `20254709340` Blk 259, Tampines Street 21
  - latitude: 1.35505600 -> 1.355
  - longitude: 103.94994900 -> 103.950
- `20254709341` Blk 492G,Tampines Street 45
  - latitude: 1.36425200 -> 1.364
  - longitude: 103.95513200 -> 103.955
- `20254709342` Blk 391, Tampines Avenue 7
  - latitude: 1.35569100 -> 1.356
  - longitude: 103.95784900 -> 103.958
- `20254709343` SHENG SIONG 11 TANJONG KATONG ROAD, KINEX
  - latitude: 1.31444500 -> 1.314
  - longitude: 103.89447500 -> 103.894
- `20254709344` SHENG SIONG BLK 739A BEDOK RESERVOIR ROAD 
  - latitude: 1.33811600 -> 1.338
  - longitude: 103.92328700 -> 103.923
- `20254709345` FairPrice Bedok North 212
  - latitude: 1.32594100 -> 1.326
  - longitude: 103.93159600 -> 103.932
- `20254709346` Blk 701, Bedok Reservoir Road
  - latitude: 1.33791900 -> 1.338
  - longitude: 103.91860000 -> 103.919
- `20254709347` Blk 123, Bedok Reservoir Road
  - latitude: 1.33241900 -> 1.332
  - longitude: 103.91045600 -> 103.910
- `20254709348` SHENG SIONG BLK 539A BEDOK NORTH STREET 3 
  - latitude: 1.33229800 -> 1.332
  - longitude: 103.92559000 -> 103.926
- `20254709349` Blk 648, Jln Tenaga
  - latitude: 1.33242500 -> 1.332
  - longitude: 103.90543100 -> 103.905
- `20254709350` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - latitude: 1.36125300 -> 1.361
  - longitude: 103.93758600 -> 103.938
- `20254709351` Blk 9, Eunos Crescent
  - latitude: 1.32187100 -> 1.322
  - longitude: 103.90275100 -> 103.903
- `20254709352` Blk 99, Bedok North Avenue 4
  - latitude: 1.33387500 -> 1.334
  - longitude: 103.93947900 -> 103.939
- `20254709481` Blk 704, Bedok Reservoir Road
  - latitude: 1.33650800 -> 1.337
  - longitude: 103.92027900 -> 103.920
- `20254709482` Blk 61, New Upper Changi Road
  - latitude: 1.32277900 -> 1.323
  - longitude: 103.94076200 -> 103.941
- `20254709483` Blk 42, Bedok South Road
  - latitude: 1.32153100 -> 1.322
  - longitude: 103.94070600 -> 103.941
- `20254709484` Blk 846, Sims Avenue
  - latitude: 1.31759100 -> 1.318
  - longitude: 103.90169900 -> 103.902
- `20254709485` Blk 501, Bedok North Street 3
  - latitude: 1.33191500 -> 1.332
  - longitude: 103.93090000 -> 103.931
- `20254709486` Giant Hypermarket Tampines
  - latitude: 1.37215500 -> 1.372
  - longitude: 103.93198200 -> 103.932
- `20254709487` Blk 134, Simei Street 1
  - latitude: 1.34808200 -> 1.348
  - longitude: 103.95561200 -> 103.956
- `20254709488` Blk 130, Bedok Reservoir Road
  - latitude: 1.33352000 -> 1.334
  - longitude: 103.91232800 -> 103.912
- `20254709489` Blk 1, Bedok South Avenue 1
  - latitude: 1.32095600 -> 1.321
  - longitude: 103.93382400 -> 103.934
- `20254709490` Blk 620, Bedok Reservoir Road
  - latitude: 1.33428900 -> 1.334
  - longitude: 103.91753200 -> 103.918
- `20254709491` SHENG SIONG BLK 209 NEW UPPER CHANGI ROAD 
  - latitude: 1.32470700 -> 1.325
  - longitude: 103.93106800 -> 103.931
- `20254709493` Blk 417, Eunos Road 5
  - latitude: 1.31817200 -> 1.318
  - longitude: 103.89709900 -> 103.897
- `20254709494` Blk 722, Bedok Reservoir Road
  - latitude: 1.33665900 -> 1.337
  - longitude: 103.92824300 -> 103.928
- `20254709495` Blk 542, Bedok North Street 3
  - latitude: 1.33067300 -> 1.331
  - longitude: 103.92279600 -> 103.923
- `20254709514` Blk 716, Bedok Reservoir Road
  - latitude: 1.33786200 -> 1.338
  - longitude: 103.92491700 -> 103.925
- `20254709515` Blk 65, New Upper Changi Road
  - latitude: 1.32468200 -> 1.325
  - longitude: 103.93973500 -> 103.940
- `20254709516` Blk 518, Bedok North Ave 2
  - latitude: 1.33188100 -> 1.332
  - longitude: 103.92890000 -> 103.929
- `20254709517` Blk 145, Bedok Reservoir Road
  - latitude: 1.33453400 -> 1.335
  - longitude: 103.91200000 -> 103.912
- `20254709518` Blk 106, Bedok North Avenue 4
  - latitude: 1.33441900 -> 1.334
  - longitude: 103.93707500 -> 103.937
- `20254709519` Blk 108, Simei Street 1
  - latitude: 1.34303600 -> 1.343
  - longitude: 103.95102900 -> 103.951
- `20254709520` Blk 107, Bedok North Road
  - latitude: 1.33238300 -> 1.332
  - longitude: 103.93628700 -> 103.936
- `20254709521` Blk 721, Bedok Reservoir Road
  - latitude: 1.33634700 -> 1.336
  - longitude: 103.92601400 -> 103.926
- `20254709522` Blk 2, Haig Road
  - latitude: 1.31251000 -> 1.313
  - longitude: 103.89761700 -> 103.898
- `20254709523` Blk 226, Simei Street 4
  - latitude: 1.34261800 -> 1.343
  - longitude: 103.95698200 -> 103.957
- `20254709524` Blk 22, Eunos Crescent
  - latitude: 1.32481300 -> 1.325
  - longitude: 103.90202200 -> 103.902
- `20254709525` Blk 711, Bedok Reservoir Road
  - latitude: 1.33597500 -> 1.336
  - longitude: 103.92417200 -> 103.924
- `20254709526` Blk 233, Simei Street 4
  - latitude: 1.34407900 -> 1.344
  - longitude: 103.95633400 -> 103.956
- `20254709527` Blk 125, Bedok North Road
  - latitude: 1.32885500 -> 1.329
  - longitude: 103.93912600 -> 103.939
- `20254709528` Blk 16, Eunos Crescent
  - latitude: 1.32307200 -> 1.323
  - longitude: 103.90445200 -> 103.904
- `20254709529` Blk 113, Bedok North Street 2
  - latitude: 1.33043600 -> 1.330
  - longitude: 103.93518900 -> 103.935
- `20254709530` Blk 358D, Ubi Road 3
  - latitude: 1.32945200 -> 1.329
  - longitude: 103.89999400 -> 103.900
- `20254709532` Blk 358B, Ubi Road 3
  - latitude: 1.32844400 -> 1.328
  - longitude: 103.90014500 -> 103.900
- `20254709533` Blk 167, Simei Lane
  - latitude: 1.34312500 -> 1.343
  - longitude: 103.95848100 -> 103.958
- `20254709534` Blk 3, Pine Close
  - latitude: 1.30705000 -> 1.307
  - longitude: 103.88324400 -> 103.883
- `20254709535` Blk 351, Ubi Avenue 1
  - latitude: 1.32549500 -> 1.325
  - longitude: 103.90054400 -> 103.901
- `20254709536` Blk 142, Simei Street 2
  - latitude: 1.34546400 -> 1.345
  - longitude: 103.95519100 -> 103.955
- `20254709537` Blk 419, Bedok North Street 1
  - latitude: 1.32713400 -> 1.327
  - longitude: 103.92793200 -> 103.928
- `20254709538` Blk 150, Simei Street 1
  - latitude: 1.34621800 -> 1.346
  - longitude: 103.95711700 -> 103.957
- `20254709539` Blk 348, Ubi Avenue 1
  - latitude: 1.32615800 -> 1.326
  - longitude: 103.90025500 -> 103.900
- `20254709540` Blk 548, Bedok North Ave 1
  - latitude: 1.33127100 -> 1.331
  - longitude: 103.92680300 -> 103.927
- `20254709541` Blk 514, Bedok North Ave 2
  - latitude: 1.33223600 -> 1.332
  - longitude: 103.92890000 -> 103.929
- `20254709542` Blk 105, Aljunied Crescent
  - latitude: 1.31947000 -> 1.319
  - longitude: 103.88274300 -> 103.883
- `20254709543` Blk 188A, Bedok North Street 4
  - latitude: 1.33163300 -> 1.332
  - longitude: 103.94144900 -> 103.941
- `20254809581` Blk 272, Tampines Street 22
  - latitude: 1.34909700 -> 1.349
  - longitude: 103.95017300 -> 103.950
- `20254809582` Blk 60, Dakota Crescent
  - latitude: 1.30767800 -> 1.308
  - longitude: 103.88857700 -> 103.889
- `20254809583` SHENG SIONG 151 BEDOK SOUTH ROAD, SIGLAP CC
  - latitude: 1.31727500 -> 1.317
  - longitude: 103.94657600 -> 103.947
- `20254809584` Blk 28, Cassia Crescent
  - latitude: 1.30897600 -> 1.309
  - longitude: 103.88351300 -> 103.884
- `20254809585` Blk 126, Geylang East Avenue 1
  - latitude: 1.31785900 -> 1.318
  - longitude: 103.88701500 -> 103.887
- `20254809586` Blk 156, Bedok South Avenue 3
  - latitude: 1.31827700 -> 1.318
  - longitude: 103.94550100 -> 103.946
- `20254809587` SHENG SIONG 301 GEYLANG ROAD BCH BUILDING
  - latitude: 1.31277500 -> 1.313
  - longitude: 103.87865600 -> 103.879
- `20254809588` Blk 1, Pine Close
  - latitude: 1.30819400 -> 1.308
  - longitude: 103.88407600 -> 103.884
- `20254809589` Blk 4, Marine Ter
  - latitude: 1.30515500 -> 1.305
  - longitude: 103.91763800 -> 103.918
- `20254809590` Blk 36, Cassia Crescent
  - latitude: 1.30986200 -> 1.310
  - longitude: 103.88519900 -> 103.885
- `20254809591` Blk 30, Marine Crescent
  - latitude: 1.30417000 -> 1.304
  - longitude: 103.91117800 -> 103.911
- `20254809592` Blk 11, Haig Road
  - latitude: 1.31484700 -> 1.315
  - longitude: 103.89662700 -> 103.897
- `20254809593` Blk 617, Bedok Reservoir Road
  - latitude: 1.33321700 -> 1.333
  - longitude: 103.91650000 -> 103.916
- `20254809594` Blk 55, Marine Ter
  - latitude: 1.30542700 -> 1.305
  - longitude: 103.91396000 -> 103.914
- `20254809679` Blk 453, Pasir Ris Drive 6
  - latitude: 1.37186800 -> 1.372
  - longitude: 103.95729100 -> 103.957
- `20254809775` Blk 14, Bedok South Ave 2
  - latitude: 1.32104000 -> 1.321
  - longitude: 103.93629700 -> 103.936
- `20254809776` Blk 47, Jln Tiga
  - latitude: 1.30883500 -> 1.309
  - longitude: 103.88494900 -> 103.885
- `20254809777` Blk 106, Simei Street 1
  - latitude: 1.34193100 -> 1.342
  - longitude: 103.95088100 -> 103.951
- `20254809778` SHENG SIONG BLK 118 ALJUNIED  AVE 2 
  - latitude: 1.31997300 -> 1.320
  - longitude: 103.88716700 -> 103.887
- `20254809779` Blk 29 New Upper Changi Road
  - latitude: 1.32426700 -> 1.324
  - longitude: 103.93692600 -> 103.937
- `20254809780` Blk 8, Haig Road
  - latitude: 1.31366800 -> 1.314
  - longitude: 103.89606900 -> 103.896
- `20254809781` Blk 707, Bedok North Road
  - latitude: 1.33545400 -> 1.335
  - longitude: 103.91925300 -> 103.919
- `20254809782` Blk 164, Bedok South Road
  - latitude: 1.32010100 -> 1.320
  - longitude: 103.94659800 -> 103.947
- `20254809783` Blk 659, Jln Tenaga
  - latitude: 1.33429000 -> 1.334
  - longitude: 103.90611200 -> 103.906
- `20254809784` Blk 12, Pine Close
  - latitude: 1.30854900 -> 1.309
  - longitude: 103.88224000 -> 103.882
- `20254809785` Blk 12 Kampong Arang Rd
  - latitude: 1.30084100 -> 1.301
  - longitude: 103.88372100 -> 103.884
- `20254809786` Blk 96, Bedok North Avenue 4
  - latitude: 1.33322400 -> 1.333
  - longitude: 103.94033800 -> 103.940
- `20254809787` Blk 155, Simei Road
  - latitude: 1.34476100 -> 1.345
  - longitude: 103.95848800 -> 103.958
- `20254809788` Blk 425, Bedok North Road
  - latitude: 1.32939400 -> 1.329
  - longitude: 103.92901800 -> 103.929
- `20254809789` Blk 42, Cassia Crescent
  - latitude: 1.31041000 -> 1.310
  - longitude: 103.88629500 -> 103.886
- `20254809790` Blk 22, Bedok South Avenue 1
  - latitude: 1.32281400 -> 1.323
  - longitude: 103.93275900 -> 103.933
- `20254809791` Blk 63, Chai Chee Road
  - latitude: 1.32612500 -> 1.326
  - longitude: 103.92143900 -> 103.921
- `20254809792` Blk 608, Bedok Reservoir Road
  - latitude: 1.33185400 -> 1.332
  - longitude: 103.91319300 -> 103.913
- `20254809793` Blk 52, New Upper Changi Road
  - latitude: 1.32386100 -> 1.324
  - longitude: 103.94219300 -> 103.942
- `20254809795` Blk 169, Bedok South Avenue 3
  - latitude: 1.32038900 -> 1.320
  - longitude: 103.94507800 -> 103.945
- `20254809796` Blk 670, Jln Damai
  - latitude: 1.33288800 -> 1.333
  - longitude: 103.90828000 -> 103.908
- `20254809797` Blk 720, Bedok Reservoir Road
  - latitude: 1.33598500 -> 1.336
  - longitude: 103.92498500 -> 103.925
- `20254809798` SHENG SIONG BLK 506 TAMPINES CENTRAL 1
  - latitude: 1.35612700 -> 1.356
  - longitude: 103.94594100 -> 103.946
- `20254809799` Blk 55, New Upper Changi Road
  - latitude: 1.32511400 -> 1.325
  - longitude: 103.94207600 -> 103.942
- `20254809800` Blk 72, Bedok South Avenue 3
  - latitude: 1.32046300 -> 1.320
  - longitude: 103.94365800 -> 103.944
- `20254809801` Fairprice Joo Chiat Complex
  - latitude: 1.31553100 -> 1.316
  - longitude: 103.89850900 -> 103.899
- `20254809802` FairPrice Katong V
  - latitude: 1.30356200 -> 1.304
  - longitude: 103.90307000 -> 103.903
- `20254809803` Blk 529, Bedok North Street 3
  - latitude: 1.33462800 -> 1.335
  - longitude: 103.92689300 -> 103.927
- `20254809804` Blk 601, Bedok Reservoir Road
  - latitude: 1.32999200 -> 1.330
  - longitude: 103.91150200 -> 103.912
- `20254909819` Blk 35, Chai Chee Avenue
  - latitude: 1.32482400 -> 1.325
  - longitude: 103.92585600 -> 103.926
- `20254909820` Blk 628, Bedok Reservoir Road
  - latitude: 1.33494100 -> 1.335
  - longitude: 103.91494800 -> 103.915
- `20254909821` SHENG SIONG BLK 258 PASIR RIS ST 21 
  - latitude: 1.36726200 -> 1.367
  - longitude: 103.96517200 -> 103.965
- `20254909822` Blk 1, Kampong Kayu Rd
  - latitude: 1.30362500 -> 1.304
  - longitude: 103.88380600 -> 103.884
- `20254909823` Blk 99, Old Airport Road
  - latitude: 1.30871600 -> 1.309
  - longitude: 103.88856700 -> 103.889
- `20254909824` Blk 58, Dakota Crescent
  - latitude: 1.30740000 -> 1.307
  - longitude: 103.88945700 -> 103.889
- `20254909825` Blk 52, Cassia Crescent
  - latitude: 1.31061500 -> 1.311
  - longitude: 103.88529700 -> 103.885
- `20254909826` Blk 640, Bedok Reservoir Road
  - latitude: 1.33216800 -> 1.332
  - longitude: 103.90495700 -> 103.905
- `20254909827` Blk 109, Aljunied Crescent
  - latitude: 1.31949100 -> 1.319
  - longitude: 103.88444800 -> 103.884
- `20254909828` Blk 38C, Eunos Road 2
  - latitude: 1.32017900 -> 1.320
  - longitude: 103.90045400 -> 103.900
- `20254909829` Blk 133, Geylang East Avenue 1
  - latitude: 1.31646300 -> 1.316
  - longitude: 103.88546600 -> 103.885
- `20254909830` Blk 56, Cassia Crescent
  - latitude: 1.31029300 -> 1.310
  - longitude: 103.88327800 -> 103.883
- `20254909831` Blk 10, Pine Close
  - latitude: 1.30917000 -> 1.309
  - longitude: 103.88214900 -> 103.882
- `20254909864` SCARLETT@PAYA LEBAR SQUARE
  - latitude: 1.31915500 -> 1.319
  - longitude: 103.89252000 -> 103.893
- `20254909865` ITE College East
  - latitude: 1.33472800 -> 1.335
  - longitude: 103.95444800 -> 103.954
- `20254909866` FairPrice Whitesands
  - latitude: 1.37241600 -> 1.372
  - longitude: 103.94665000 -> 103.947
- `20254909867` SHENG SIONG BLK 872C TAMPINES STREET 86
  - latitude: 1.35520600 -> 1.355
  - longitude: 103.93157000 -> 103.932
- `20254909868` Tampines Round Market and Food Centre
  - latitude: 1.34595900 -> 1.346
  - longitude: 103.94464000 -> 103.945
- `20254909869` Dunman Food Centre
  - latitude: 1.30946600 -> 1.309
  - longitude: 103.90182700 -> 103.902
- `20254909870` FairPrice Tampines Blk 138 Tampines Street 11
  - latitude: 1.34546100 -> 1.345
  - longitude: 103.94562000 -> 103.946
- `20254909871` U STARS @Elias Mall
  - latitude: 1.37810000 -> 1.378
  - longitude: 103.94206000 -> 103.942
- `20254909872` Giant Bedok North Street 3
  - latitude: 1.33334600 -> 1.333
  - longitude: 103.93134000 -> 103.931
- `20254909873` FairPrice Blk 633 Tampines North Drive 2
  - latitude: 1.36525800 -> 1.365
  - longitude: 103.94113000 -> 103.941
- `20254909874` FairPrice Bedok Reservoir 
  - latitude: 1.33730900 -> 1.337
  - longitude: 103.92170400 -> 103.922
- `20254909875` Cold Storage Joo Chiat JK Centre
  - latitude: 1.30985900 -> 1.310
  - longitude: 103.90230000 -> 103.902
- `20254909876` Fairprice Jewel
  - latitude: 1.36030300 -> 1.360
  - longitude: 103.99020000 -> 103.990
- `20254909877` FairPrice Pasir Ris West Plaza
  - latitude: 1.37988500 -> 1.380
  - longitude: 103.93648000 -> 103.936
- `20254909878` FairPrice Changi Business Park
  - latitude: 1.33516900 -> 1.335
  - longitude: 103.96349700 -> 103.963
- `20254909879` FairPrice Paya Lebar Quarter
  - latitude: 1.31762700 -> 1.318
  - longitude: 103.89307000 -> 103.893
- `20254909880` Kallang Estate Fresh Market and Food Centre
  - latitude: 1.30746500 -> 1.307
  - longitude: 103.88413600 -> 103.884
- `20254909881` Giant Simei MRT
  - latitude: 1.34314700 -> 1.343
  - longitude: 103.95342000 -> 103.953
- `20254909882` FairPrice Parkway Parade
  - latitude: 1.30147000 -> 1.301
  - longitude: 103.90515000 -> 103.905
- `20254909883` Prime Supermarket Tampines Street 96
  - latitude: 1.34232300 -> 1.342
  - longitude: 103.93700000 -> 103.937
- `20254909884` Giant Loyang Point
  - latitude: 1.37289100 -> 1.373
  - longitude: 103.96299000 -> 103.963
- `20254909885` SCARLETT@DOWNTOWN E!HUB
  - latitude: 1.37647700 -> 1.376
  - longitude: 103.95524000 -> 103.955
- `20254909886` Pasir Ris Central Hawker Centre
  - latitude: 1.37340900 -> 1.373
  - longitude: 103.95165200 -> 103.952
- `20254909887` Blk 612, Bedok Reservoir Road
  - latitude: 1.33166500 -> 1.332
  - longitude: 103.91574300 -> 103.916
- `20254909888` Cold Storage Parkway Parade
  - latitude: 1.30147000 -> 1.301
  - longitude: 103.90515000 -> 103.905
- `20254909889` Lion City Supermarket Geylang Road
  - latitude: 1.31257800 -> 1.313
  - longitude: 103.88002500 -> 103.880
- `20255010195` ANG MO SUPERMARKET-622B TAMPINES AVE 12
  - latitude: 1.36088800 -> 1.361
  - longitude: 103.94120000 -> 103.941
- `20255010196` SHENG SIONG BLK 115 BEDOK NORTH ROAD 
  - latitude: 1.33138900 -> 1.331
  - longitude: 103.93683000 -> 103.937
- `20255010197` Changi Village Hawker Centre
  - latitude: 1.38922500 -> 1.389
  - longitude: 103.98830300 -> 103.988
- `20255010198` Don Don Donki (Jewel Changi)
  - latitude: 1.36031900 -> 1.360
  - longitude: 103.98966800 -> 103.990
- `20255010199` SHENG SIONG BLK 91 JLN. SATU
  - latitude: 1.30953800 -> 1.310
  - longitude: 103.88802000 -> 103.888
- `20255010200` Cold Storage i12 Katong
  - latitude: 1.30520000 -> 1.305
  - longitude: 103.90506000 -> 103.905
- `20255010201` SCARLETT@GEYLANG ROAD
  - latitude: 1.31281100 -> 1.313
  - longitude: 103.87918000 -> 103.879
- `20255010202` SHENG SIONG BLK 527D PASIR RIS STREET 51 
  - latitude: 1.36960600 -> 1.370
  - longitude: 103.94787000 -> 103.948
- `20255010203` FairPrice Marine Parade
  - latitude: 1.30138500 -> 1.301
  - longitude: 103.90723000 -> 103.907
- `20255010204` Changi Airport Terminal 2
  - latitude: 1.35505900 -> 1.355
  - longitude: 103.98902700 -> 103.989
- `20255010205` Little Farms Market, Katong Point
  - latitude: 1.30680000 -> 1.307
  - longitude: 103.90445400 -> 103.904
- `20255010206` FairPrice 41 Jalan Tiga
  - latitude: 1.30802600 -> 1.308
  - longitude: 103.88465000 -> 103.885
- `20255010207` Changi Airport Terminal 4
  - latitude: 1.33598200 -> 1.336
  - longitude: 103.98249500 -> 103.982
- `20255010208` Eunos Crescent Blk 4A Hawker Centre
  - latitude: 1.32038300 -> 1.320
  - longitude: 103.90410000 -> 103.904
- `20255010209` Prime Supermarket Tampines North Drive 1
  - latitude: 1.36455300 -> 1.365
  - longitude: 103.93700000 -> 103.937
- `20255010210` FairPrice 612 Geylang Lorong 38
  - latitude: 1.31408100 -> 1.314
  - longitude: 103.88884000 -> 103.889
- `20255010211` Prime Supermarket Eunos Road 2
  - latitude: 1.32150500 -> 1.322
  - longitude: 103.90190000 -> 103.902
- `20255010212` Blk 141, Bedok Reservoir Road
  - latitude: 1.33541600 -> 1.335
  - longitude: 103.91331200 -> 103.913
- `20255010213` Giant Pasir Ris Drive 4
  - latitude: 1.36905400 -> 1.369
  - longitude: 103.95876000 -> 103.959
- `20255010214` East Coast Lagoon Food Village
  - latitude: 1.30683300 -> 1.307
  - longitude: 103.93522200 -> 103.935
- `20255010215` Giant Bedok Market Place
  - latitude: 1.33082400 -> 1.331
  - longitude: 103.94751000 -> 103.948
- `20255010216` Geylang Serai Market and Food Centre
  - latitude: 1.31677400 -> 1.317
  - longitude: 103.89827800 -> 103.898
- `20255010217` Bedok Food Centre
  - latitude: 1.32033900 -> 1.320
  - longitude: 103.95544600 -> 103.955
- `20255010218` Sparrows 206 Bedok North Street 1
  - latitude: 1.32646400 -> 1.326
  - longitude: 103.93095800 -> 103.931
- `20255010219` Changi Airport Terminal 1
  - latitude: 1.36175900 -> 1.362
  - longitude: 103.99090400 -> 103.991
- `20255010220` FairPrice Changi Airport T3
  - latitude: 1.35521700 -> 1.355
  - longitude: 103.98592000 -> 103.986
- `20255010444` FairPrice Blk 29B Chai Chee Avenue
  - latitude: 1.32436700 -> 1.324
  - longitude: 103.92377000 -> 103.924
- `20255010445` FairPrice Bedok Mall
  - latitude: 1.32480100 -> 1.325
  - longitude: 103.92331000 -> 103.923
- `20255010446` FairPrice Downtown East
  - latitude: 1.37889700 -> 1.379
  - longitude: 103.95507000 -> 103.955
- `20255010447` BITES BY SCARLETT@TAMPINES ONE
  - latitude: 1.35449500 -> 1.354
  - longitude: 103.94496000 -> 103.945
- `20255010448` U STARS @Tampines Grove
  - latitude: 1.34925700 -> 1.349
  - longitude: 103.93483000 -> 103.935
- `20255010449` Blk 665, Jln Damai
  - latitude: 1.33419100 -> 1.334
  - longitude: 103.90799300 -> 103.908
- `20255010450` FairPrice Siglap
  - latitude: 1.31240900 -> 1.312
  - longitude: 103.92521100 -> 103.925
- `20255010451` FairPrice Blk 114 Aljunied Ave 2
  - latitude: 1.32167500 -> 1.322
  - longitude: 103.88672000 -> 103.887
- `20255010452` Prime Supermarket Chai Chee Road
  - latitude: 1.32330200 -> 1.323
  - longitude: 103.92403000 -> 103.924
- `20255010453` Haig Road Market & Cooked Food Centre
  - latitude: 1.31576800 -> 1.316
  - longitude: 103.89540000 -> 103.895
- `20255010454` Giant Kampung Ubi Avenue 1
  - latitude: 1.32993500 -> 1.330
  - longitude: 103.90199000 -> 103.902
- `20255010455` Prime Supermarket Tampines Street 81
  - latitude: 1.34893000 -> 1.349
  - longitude: 103.93409000 -> 103.934
- `20255010456` Cold Storage Siglap V
  - latitude: 1.31284600 -> 1.313
  - longitude: 103.92373000 -> 103.924
- `20255010457` FairPrice Lengkong Tiga
  - latitude: 1.32377200 -> 1.324
  - longitude: 103.91079000 -> 103.911
- `20255010458` FairPrice Century Square Shopping Mall
  - latitude: 1.35262000 -> 1.353
  - longitude: 103.94368300 -> 103.944
- `20255010459` Cold Storage Tampines One
  - latitude: 1.35421200 -> 1.354
  - longitude: 103.94503000 -> 103.945
- `20255010460` FairPrice Tampines Mall
  - latitude: 1.35245700 -> 1.352
  - longitude: 103.94467000 -> 103.945
- `20255010462` FairPrice East Point
  - latitude: 1.34273000 -> 1.343
  - longitude: 103.95301000 -> 103.953
- `20255010464` FairPrice Blk 89 Bedok North Street 4
  - latitude: 1.33290700 -> 1.333
  - longitude: 103.93795400 -> 103.938
- `20255010465` FairPrice Blk 475 Tampines Street 44
  - latitude: 1.36042200 -> 1.360
  - longitude: 103.95326000 -> 103.953
- `20255010466` Giant Tampines Mart
  - latitude: 1.35379500 -> 1.354
  - longitude: 103.96057000 -> 103.961
- `20255110621` FairPrice Our Tampines Hub
  - latitude: 1.35278200 -> 1.353
  - longitude: 103.93962000 -> 103.940
- `20255110622` Don Don Donki (Paya Lebar Quarter)
  - latitude: 1.31766900 -> 1.318
  - longitude: 103.89316000 -> 103.893
- `20255110623` ONE Supermarket Pte. Ltd.
  - latitude: 1.35338600 -> 1.353
  - longitude: 103.95307800 -> 103.953
- `20255110624` TRIPLE N SUPERMART PTE LTD
  - latitude: 1.33729400 -> 1.337
  - longitude: 103.90598500 -> 103.906
- `20255110625` FairPrice Finest Komo Shoppes
  - latitude: 1.36036100 -> 1.360
  - longitude: 103.97014000 -> 103.970
- `20255110626` FairPrice Blk 107 Tampines Street 11
  - latitude: 1.34819900 -> 1.348
  - longitude: 103.94783000 -> 103.948
- `20255110627` ACE SIGNATURE @ LIV CHANGI
  - latitude: 1.35865900 -> 1.359
  - longitude: 103.96943900 -> 103.969
- `20255110628` U STARS @878C Tampines Ave 8
  - latitude: 1.35134800 -> 1.351
  - longitude: 103.92946600 -> 103.929
- `20255110629` FairPrice Tampines CC
  - latitude: 1.35537200 -> 1.355
  - longitude: 103.93442000 -> 103.934
- `20255110630` Don Don Donki (Tampines One)
  - latitude: 1.35456700 -> 1.355
  - longitude: 103.94495700 -> 103.945
- `20261515320` 208B New Upper Changi Road Hawker Centre
  - latitude: 1.32468700 -> 1.325
  - longitude: 103.93030000 -> 103.930
- `20261515321` Bedok Reservoir Food Centre
  - latitude: 1.33331500 -> 1.333
  - longitude: 103.91390000 -> 103.914
- `20261515322` 16 Bedok South Rd Hawker Centre
  - latitude: 1.32079300 -> 1.321
  - longitude: 103.93540000 -> 103.935
- `20261515325` Bedok North Street 3 Blk 538 Hawker Centre
  - latitude: 1.33226700 -> 1.332
  - longitude: 103.92480000 -> 103.925
- `20261515327` 50A Marine Terrace Hawker Centre
  - latitude: 1.30601900 -> 1.306
  - longitude: 103.91570000 -> 103.916
- `20261515329` 85 Fengshan Centre
  - latitude: 1.33226600 -> 1.332
  - longitude: 103.93880000 -> 103.939
- `20261515331` 117 Aljunied Ave 2 Market & Food Centre
  - latitude: 1.32096300 -> 1.321
  - longitude: 103.88690000 -> 103.887
- `20261515332` SCARLETT@PASIR RIS MALL
  - latitude: 1.37386300 -> 1.374
  - longitude: 103.94854000 -> 103.949
- `20261515333` FairPrice Finest Sceneca Square
  - latitude: 1.32802800 -> 1.328
  - longitude: 103.94520000 -> 103.945
- `20261515334` Cold Storage Pasir Ris Mall
  - latitude: 1.37386300 -> 1.374
  - longitude: 103.94854000 -> 103.949
- `20261515335` Blk 216 Bedok North Street 1 Market & Hawker Centre
  - latitude: 1.32786900 -> 1.328
  - longitude: 103.93320000 -> 103.933
- `20261515336` 84 Marine Parade Central Market and Food Centre
  - latitude: 1.30249500 -> 1.302
  - longitude: 103.90610000 -> 103.906
- `20261515338` Singapore University of Technology and Design (SUTD)
  - latitude: 1.34229100 -> 1.342
  - longitude: 103.96340000 -> 103.963
- `20261515339` Kaki Bukit 511 Market and Food Centre
  - latitude: 1.33343800 -> 1.333
  - longitude: 103.93050000 -> 103.930
- `20261515341` Temasek Polytechnic
  - latitude: 1.34560300 -> 1.346
  - longitude: 103.93180000 -> 103.932
- `20261515346` Blk 4A Jalan Batu Hawker Centre
  - latitude: 1.30262700 -> 1.303
  - longitude: 103.88390000 -> 103.884
- `B5052350` SCARLETT@BUGIS+
  - latitude: 1.29960000 -> 1.300
  - longitude: 103.85460000 -> 103.855
- `B5052351` Block 156 Rivervale Crescent
  - latitude: 1.39128900 -> 1.391
  - longitude: 103.90737900 -> 103.907
- `B5052352` SHENG SIONG BLK 658 PUNGGOL EAST 
  - latitude: 1.39980000 -> 1.400
  - longitude: 103.91950000 -> 103.919
- `B5052353` FairPrice Blk 712 Ang Mo Kio Avenue 6
  - latitude: 1.37140000 -> 1.371
  - longitude: 103.84710000 -> 103.847
- `B5052354` Block 113 Whampoa Road
  - latitude: 1.32581600 -> 1.326
  - longitude: 103.85719300 -> 103.857
- `B5052355` Prime Supermarket 322 Sumang Walk
  - latitude: 1.41094500 -> 1.411
  - longitude: 103.89730000 -> 103.897
- `B5052356` Prime Supermarket Bidadari Park Drive
  - latitude: 1.33410100 -> 1.334
  - longitude: 103.87080000 -> 103.871
- `B5052357` Block 23B Queen's Close
  - latitude: 1.29368100 -> 1.294
  - longitude: 103.80040000 -> 103.800
- `B5052358` FairPrice Havelock Road
  - latitude: 1.28980000 -> 1.290
  - longitude: 103.82670000 -> 103.827
- `B5052359` Block 143 Potong Pasir Avenue 2
  - latitude: 1.33288000 -> 1.333
  - longitude: 103.86610900 -> 103.866
- `B5052360` FairPrice Shaw Plaza
  - latitude: 1.32527900 -> 1.325
  - longitude: 103.85104800 -> 103.851
- `B5052361` Giant Ang Mo Kio Avenue 10
  - latitude: 1.37270000 -> 1.373
  - longitude: 103.85400000 -> 103.854
- `B5052362` SHENG SIONG BLK 660A EDGEDALE PLAINS 
  - latitude: 1.40250000 -> 1.403
  - longitude: 103.91630000 -> 103.916
- `B5052363` Giant Northshore 2
  - latitude: 1.41712500 -> 1.417
  - longitude: 103.90170000 -> 103.902
- `B5052364` Cold Storage Plaza Singapura
  - latitude: 1.30071100 -> 1.301
  - longitude: 103.84490000 -> 103.845
- `B5052365` SHENG SIONG BLK 410A SIN MING AVENUE
  - latitude: 1.36320000 -> 1.363
  - longitude: 103.83540000 -> 103.835
- `B5052366` Block 261 Waterloo Street
  - latitude: 1.29891600 -> 1.299
  - longitude: 103.85190000 -> 103.852
- `B5052367` FairPrice Serangoon Garden myVillage
  - latitude: 1.36510000 -> 1.365
  - longitude: 103.86510000 -> 103.865
- `B5052368` Don Don Donki (Orchard Central)
  - latitude: 1.30080000 -> 1.301
  - longitude: 103.83970000 -> 103.840
- `B5052369` Block 12 Holland Avenue
  - latitude: 1.30938000 -> 1.309
  - longitude: 103.79488000 -> 103.795
- `B5052370` FairPrice Blk 476 Upper Serangoon View
  - latitude: 1.37710000 -> 1.377
  - longitude: 103.90350000 -> 103.903
- `B5052371` Block 319A Anchorvale Drive
  - latitude: 1.39068700 -> 1.391
  - longitude: 103.88989800 -> 103.890
- `B5052372` Cold Storage Raffles City
  - latitude: 1.29400000 -> 1.294
  - longitude: 103.85310000 -> 103.853
- `B5052373` FairPrice 612 Punggol Drive
  - latitude: 1.40480000 -> 1.405
  - longitude: 103.90850000 -> 103.909
- `B5052470` Cold Storage Suntec City
  - latitude: 1.29500000 -> 1.295
  - longitude: 103.85830000 -> 103.858
- `B5052471` Cold Storage Marina Bay Sands
  - latitude: 1.28622600 -> 1.286
  - longitude: 103.85976400 -> 103.860
- `B5052472` FairPrice Tanjong Pagar
  - latitude: 1.27590000 -> 1.276
  - longitude: 103.84300000 -> 103.843
- `B5052473` FairPrice Xtra VivoCity
  - latitude: 1.26480000 -> 1.265
  - longitude: 103.82280000 -> 103.823
- `B5052474` National University of Singapore 36 College Avenue East UTown Level 1, Main Walkway
  - latitude: 1.30494200 -> 1.305
  - longitude: 103.77370000 -> 103.774
- `B5052475` Block 131 Ang Mo Kio Avenue 3
  - latitude: 1.37108200 -> 1.371
  - longitude: 103.84164500 -> 103.842
- `B5052476` Block 411A Northshore Drive
  - latitude: 1.41835800 -> 1.418
  - longitude: 103.90576800 -> 103.906
- `B5052477` Prime Supermarket Upper Aljunied Lane
  - latitude: 1.33430000 -> 1.334
  - longitude: 103.87879000 -> 103.879
- `B5052478` Block 3 Queen's Road
  - latitude: 1.31841800 -> 1.318
  - longitude: 103.80812400 -> 103.808
- `B5052479` Singapore Polytechnic (SP) T11A Building
  - latitude: 1.31033000 -> 1.310
  - longitude: 103.77916000 -> 103.779
- `B5052480` Block 132 Rivervale Street
  - latitude: 1.38999200 -> 1.390
  - longitude: 103.90352300 -> 103.904
- `B5052481` SHENG SIONG BLK 473 FERNVALE STREET
  - latitude: 1.39790000 -> 1.398
  - longitude: 103.88150000 -> 103.882
- `B5052482` Block 563 Ang Mo Kio Avenue 3
  - latitude: 1.36993400 -> 1.370
  - longitude: 103.85810800 -> 103.858
- `B5052483` Cold Storage Serangoon Nex
  - latitude: 1.35081900 -> 1.351
  - longitude: 103.87250000 -> 103.873
- `B5052484` Block 456 Hougang Avenue 10
  - latitude: 1.37717800 -> 1.377
  - longitude: 103.89544000 -> 103.895
- `B5052485` Cold Storage Bugis Junction
  - latitude: 1.29954800 -> 1.300
  - longitude: 103.85570000 -> 103.856
- `B5052486` FairPrice Serangoon North Ave 1
  - latitude: 1.36980000 -> 1.370
  - longitude: 103.87300000 -> 103.873
- `B5052487` FairPrice Finest Clarke Quay
  - latitude: 1.29050000 -> 1.290
  - longitude: 103.84590000 -> 103.846
- `B5052488` FairPrice Finest Coronation Plaza
  - latitude: 1.32390000 -> 1.324
  - longitude: 103.80990000 -> 103.810
- `B5052489` Block 832 Hougang Central
  - latitude: 1.37065000 -> 1.371
  - longitude: 103.88970000 -> 103.890
- `B5052490` Giant Ghim Moh Road
  - latitude: 1.31018500 -> 1.310
  - longitude: 103.78810000 -> 103.788
- `B5052491` Block 99C Lorong 2 Toa Payoh
  - latitude: 1.33904600 -> 1.339
  - longitude: 103.84747300 -> 103.847
- `B5052492` Cold Storage Anchorpoint
  - latitude: 1.28862800 -> 1.289
  - longitude: 103.80499200 -> 103.805
- `B5052493` Block 121 Potong Pasir Avenue 1
  - latitude: 1.33574400 -> 1.336
  - longitude: 103.86554400 -> 103.866
- `B5052494` FairPrice Dover Crescent
  - latitude: 1.30510000 -> 1.305
  - longitude: 103.78140000 -> 103.781
- `B5052495` Block 128 Lorong 1 Toa Payoh
  - latitude: 1.33780700 -> 1.338
  - longitude: 103.84409300 -> 103.844
- `B5052496` Cold Storage Novena Square
  - latitude: 1.31995700 -> 1.320
  - longitude: 103.84390000 -> 103.844
- `B5052497` Block 337 Ang Mo Kio Avenue 1
  - latitude: 1.36322500 -> 1.363
  - longitude: 103.85172200 -> 103.852
- `B5052498` FairPrice Dawson Place
  - latitude: 1.29260000 -> 1.293
  - longitude: 103.81140000 -> 103.811
- `B5052499` SHENG SIONG BLK 85 DAWSON ROAD 
  - latitude: 1.29550000 -> 1.296
  - longitude: 103.81000000 -> 103.810
- `B5052500` Don Don Donki (City Square Mall)
  - latitude: 1.31140000 -> 1.311
  - longitude: 103.85650000 -> 103.856
- `B5052501` Block 444 Hougang Avenue 8
  - latitude: 1.37950100 -> 1.380
  - longitude: 103.89386500 -> 103.894
- `B5052502` Block 988A Buangkok Green
  - latitude: 1.37950700 -> 1.380
  - longitude: 103.87733400 -> 103.877
- `B5052503` FairPrice Hougang One
  - latitude: 1.37550000 -> 1.375
  - longitude: 103.87920000 -> 103.879
- `B5052504` FairPrice Lorong Limau
  - latitude: 1.32380000 -> 1.324
  - longitude: 103.85570000 -> 103.856
- `B5052505` Block 984A Buangkok Link
  - latitude: 1.38203700 -> 1.382
  - longitude: 103.88114300 -> 103.881
- `B5052506` Cold Storage Holland Village
  - latitude: 1.31020000 -> 1.310
  - longitude: 103.79530000 -> 103.795
- `B5052507` Cold Storage New Bahru
  - latitude: 1.29280000 -> 1.293
  - longitude: 103.83860000 -> 103.839
- `B5052508` Block 106 Henderson Crescent
  - latitude: 1.28968000 -> 1.290
  - longitude: 103.82230000 -> 103.822
- `B5052509` FairPrice 29A Ghim Moh Link
  - latitude: 1.30860000 -> 1.309
  - longitude: 103.78470000 -> 103.785
- `B5052510` Food-Joy Buona Vista
  - latitude: 1.28056700 -> 1.281
  - longitude: 103.78690000 -> 103.787
- `B5052511` Block 225C Compassvale Walk
  - latitude: 1.38858300 -> 1.389
  - longitude: 103.89892600 -> 103.899
- `B5052512` Prime Supermarket Compassvale Street
  - latitude: 1.39491000 -> 1.395
  - longitude: 103.89590000 -> 103.896
- `B5052513` Don Don Donki (Clarke Quay Central)
  - latitude: 1.28910000 -> 1.289
  - longitude: 103.84670000 -> 103.847
- `B5052514` Block 122E RIVERVALE DRIVE
  - latitude: 1.38782200 -> 1.388
  - longitude: 103.90580000 -> 103.906
- `B5052515` Meidi-Ya Millenia Walk
  - latitude: 1.29210000 -> 1.292
  - longitude: 103.85980000 -> 103.860
- `B5052516` FairPrice Blk 78A Telok Blangah Street 32
  - latitude: 1.27320000 -> 1.273
  - longitude: 103.80910000 -> 103.809
- `B5052517` Giant Ang Mo Kio Street 31
  - latitude: 1.36480000 -> 1.365
  - longitude: 103.84790000 -> 103.848
- `B5052542` FairPrice Bukit Merah
  - latitude: 1.28309200 -> 1.283
  - longitude: 103.81760000 -> 103.818
- `B5052543` Phan99 Supermarket PPT Lodge 1B
  - latitude: 1.41648000 -> 1.416
  - longitude: 103.89535400 -> 103.895
- `B5052544` Don Don Donki (Suntec City Mall)
  - latitude: 1.29320000 -> 1.293
  - longitude: 103.85700000 -> 103.857
- `B5052545` Ci Yuan Hawker Centre
  - latitude: 1.37514600 -> 1.375
  - longitude: 103.88290000 -> 103.883
- `B5052546` SHENG SIONG BLK 231 SUMANG LANE
  - latitude: 1.40200000 -> 1.402
  - longitude: 103.89210000 -> 103.892
- `B5052547` Block 402 Northshore Drive
  - latitude: 1.41455000 -> 1.415
  - longitude: 103.90024800 -> 103.900
- `B5052548` Block 20 Telok Blangah Crescent
  - latitude: 1.27703400 -> 1.277
  - longitude: 103.82182700 -> 103.822
- `B5052549` Market Street Hawker Centre
  - latitude: 1.28481500 -> 1.285
  - longitude: 103.85022500 -> 103.850
- `B5052550` SHENG SIONG BLK 671 EDGEFIELD PLAINS
  - latitude: 1.40560000 -> 1.406
  - longitude: 103.91190000 -> 103.912
- `B5052551` Block 228 Bishan Street 23
  - latitude: 1.35809000 -> 1.358
  - longitude: 103.84647500 -> 103.846
- `B5052552` Block 102 Jalan Rajah
  - latitude: 1.32832500 -> 1.328
  - longitude: 103.85141400 -> 103.851
- `B5052553` Block 138 Bishan Street 12
  - latitude: 1.34437100 -> 1.344
  - longitude: 103.85249000 -> 103.852
- `B5052554` Block 12 Cantonment Close
  - latitude: 1.27448200 -> 1.274
  - longitude: 103.84010000 -> 103.840
- `B5052555` Block 435 Northshore Drive
  - latitude: 1.41850700 -> 1.419
  - longitude: 103.91015700 -> 103.910
- `B5052556` Punggol Coast Hawker Centre
  - latitude: 1.41452800 -> 1.415
  - longitude: 103.90846600 -> 103.908
- `B5052557` Block 126A Edgedale Plains
  - latitude: 1.39423800 -> 1.394
  - longitude: 103.91172300 -> 103.912
- `B5052558` Jasons Deli by Cold Storage ION Orchard
  - latitude: 1.30380000 -> 1.304
  - longitude: 103.83170000 -> 103.832
- `B5052559` Huber's Butchery @ Dempsey
  - latitude: 1.30688900 -> 1.307
  - longitude: 103.81011800 -> 103.810
- `B5052560` Block 406C Fernvale Road
  - latitude: 1.38884900 -> 1.389
  - longitude: 103.87462700 -> 103.875
- `B5052561` Block 120 McNair Road
  - latitude: 1.31935900 -> 1.319
  - longitude: 103.85684400 -> 103.857
- `B5052562` Block 9 Selegie Road
  - latitude: 1.30336600 -> 1.303
  - longitude: 103.85090100 -> 103.851
- `B5052563` FairPrice Blk 227 Compassvale Link
  - latitude: 1.38240000 -> 1.382
  - longitude: 103.89400000 -> 103.894
- `B5052564` FairPrice Punggol Oasis
  - latitude: 1.40310000 -> 1.403
  - longitude: 103.91320000 -> 103.913
- `B5052565` Cold Storage Great World City
  - latitude: 1.29420100 -> 1.294
  - longitude: 103.83200000 -> 103.832
- `B5052626` Cold Storage Heartland Mall
  - latitude: 1.35950000 -> 1.359
  - longitude: 103.88510000 -> 103.885
- `B5052627` Cold Storage Marina One
  - latitude: 1.27734100 -> 1.277
  - longitude: 103.85250000 -> 103.853
- `B5052628` Block 125 Aljunied Road
  - latitude: 1.32321000 -> 1.323
  - longitude: 103.88180000 -> 103.882
- `B5052629` Block 46 Circuit Road
  - latitude: 1.32609700 -> 1.326
  - longitude: 103.88620000 -> 103.886
- `B5052630` FairPrice MacPherson Blossom
  - latitude: 1.32520000 -> 1.325
  - longitude: 103.89010000 -> 103.890
- `B5052631` Block 8 Jalan Bukit Ho Swee
  - latitude: 1.28752900 -> 1.288
  - longitude: 103.83200000 -> 103.832
- `B5052632` FairPrice Punggol Plaza
  - latitude: 1.39420000 -> 1.394
  - longitude: 103.91300000 -> 103.913
- `B5052633` SHENG SIONG BLK 122 ANG MO KIO AVE 3 
  - latitude: 1.37020000 -> 1.370
  - longitude: 103.84320000 -> 103.843
- `B5052634` FairPrice Kang Kar Mall
  - latitude: 1.37180000 -> 1.372
  - longitude: 103.89410000 -> 103.894
- `B5052635` FairPrice Seletar Mall
  - latitude: 1.39120000 -> 1.391
  - longitude: 103.87600000 -> 103.876
- `B5052636` Culina at COMO Dempsey
  - latitude: 1.30526000 -> 1.305
  - longitude: 103.81034300 -> 103.810
- `B5052637` FairPrice Punggol Coast Mall
  - latitude: 1.41490000 -> 1.415
  - longitude: 103.91270000 -> 103.913
- `B5052911` Kukoh 21 Food Centre
  - latitude: 1.28828600 -> 1.288
  - longitude: 103.83988500 -> 103.840
- `B5052912` Whampoa Market
  - latitude: 1.32302100 -> 1.323
  - longitude: 103.85540200 -> 103.855
- `B5052913` Hong Lim Food Centre and Market
  - latitude: 1.28540200 -> 1.285
  - longitude: 103.84582900 -> 103.846
- `B5052914` Nanyang Polytechnic (NYP)
  - latitude: 1.38010400 -> 1.380
  - longitude: 103.84879600 -> 103.849
- `B5052915` Cheng Yan Court - 269 Queen Street
  - latitude: 1.30099500 -> 1.301
  - longitude: 103.85409800 -> 103.854
- `B5052916` Block 19 Jalan Membina
  - latitude: 1.28567100 -> 1.286
  - longitude: 103.82638700 -> 103.826
- `B5052917` Block 81 Redhill Ln
  - latitude: 1.28787800 -> 1.288
  - longitude: 103.81943200 -> 103.819
- `B5052918` Fair Price Hougang Mall
  - latitude: 1.37272300 -> 1.373
  - longitude: 103.89380600 -> 103.894
- `B5052919` Blk 5036 Ang Mo Kio Ind Park 2
  - latitude: 1.37233700 -> 1.372
  - longitude: 103.86178200 -> 103.862
- `B5052920` Bendemeer Market and Food Centre
  - latitude: 1.31911000 -> 1.319
  - longitude: 103.86313200 -> 103.863
- `B5052921` Block 118 Bukit Merah View
  - latitude: 1.28420800 -> 1.284
  - longitude: 103.82098300 -> 103.821
- `B5052922` Blk 17 Upper Boon Keng Market and Food Centre
  - latitude: 1.31486100 -> 1.315
  - longitude: 103.87165300 -> 103.872
- `B5052923` Zion Riverside Food Centre
  - latitude: 1.29243100 -> 1.292
  - longitude: 103.83124500 -> 103.831
- `B5052924` Pasir Panjang Food Centre
  - latitude: 1.27589600 -> 1.276
  - longitude: 103.79162400 -> 103.792
- `B5052925` Beo Crescent Market
  - latitude: 1.28891800 -> 1.289
  - longitude: 103.82719000 -> 103.827
- `B5052926` Chong Boon Market & Food Centre
  - latitude: 1.36815100 -> 1.368
  - longitude: 103.85637800 -> 103.856
- `B5052927` 628 Ang Mo Kio Food Centre
  - latitude: 1.38088700 -> 1.381
  - longitude: 103.84052600 -> 103.841
- `B5052928` Fernvale Hawker Centre & Market
  - latitude: 1.39164000 -> 1.392
  - longitude: 103.87701100 -> 103.877
- `B5052929` Serangoon Garden Market
  - latitude: 1.36318500 -> 1.363
  - longitude: 103.86658600 -> 103.867
- `B5052930` Chomp Chomp Food Centre
  - latitude: 1.36439100 -> 1.364
  - longitude: 103.86633900 -> 103.866
- `B5052931` Phan 66 PPT Lodge 1A Dormitory
  - latitude: 1.41965500 -> 1.420
  - longitude: 103.89635300 -> 103.896
- `B5052932` 11 Telok Blangah Crescent Market and Food Centre
  - latitude: 1.27730300 -> 1.277
  - longitude: 103.81877900 -> 103.819
- `B5052933` Toa Payoh Vista Market
  - latitude: 1.33453200 -> 1.335
  - longitude: 103.85197300 -> 103.852
- `B5052934` Holland Village Market and Food Centre
  - latitude: 1.31114800 -> 1.311
  - longitude: 103.79507300 -> 103.795
- `B5052935` Tiong Bahru Market
  - latitude: 1.28513200 -> 1.285
  - longitude: 103.83272600 -> 103.833
- `B5052936` Kovan Hougang Market and Food Centre
  - latitude: 1.35930700 -> 1.359
  - longitude: 103.88600000 -> 103.886
- `B5052938` Margaret Drive Hawker Centre
  - latitude: 1.29741300 -> 1.297
  - longitude: 103.80475000 -> 103.805
- `B5052939` SCARLETT@AMK 710A
  - latitude: 1.37068300 -> 1.371
  - longitude: 103.84798200 -> 103.848
- `B5052940` Ang Mo Kio Market & Food Centre Blk 724
  - latitude: 1.37218400 -> 1.372
  - longitude: 103.84650000 -> 103.847
- `B5052941` Hougang 105 Hainanese Village Centre
  - latitude: 1.35411500 -> 1.354
  - longitude: 103.88990000 -> 103.890
- `B5052942` Tanglin Halt Market
  - latitude: 1.30042700 -> 1.300
  - longitude: 103.79779300 -> 103.798
- `B5052943` Kebun Baru Food Centre Block 226H
  - latitude: 1.36723400 -> 1.367
  - longitude: 103.84002100 -> 103.840
- `B5052944` Teck Ghee Court Market & Food Centre
  - latitude: 1.36409100 -> 1.364
  - longitude: 103.84820800 -> 103.848
- `B5052945` Commonwealth Crescent Market
  - latitude: 1.30691600 -> 1.307
  - longitude: 103.80043200 -> 103.800
- `B5052946` Adam Road Food Centre
  - latitude: 1.32424400 -> 1.324
  - longitude: 103.81417000 -> 103.814
- `B5481004` SHENG SIONG BLK 212 BIDADARI PARK DRIVE
  - latitude: 1.34240000 -> 1.342
  - longitude: 103.87570000 -> 103.876
- `B5481005` Isetan Scotts Supermarket
  - latitude: 1.30590600 -> 1.306
  - longitude: 103.83140000 -> 103.831
- `B5481006` FairPrice ZhongShan Park
  - latitude: 1.32700000 -> 1.327
  - longitude: 103.84640000 -> 103.846
- `B5481007` FairPrice Holland Drive
  - latitude: 1.30930000 -> 1.309
  - longitude: 103.79260000 -> 103.793
- `B5481008` Block 311D Anchorvale Lane
  - latitude: 1.39159800 -> 1.392
  - longitude: 103.88444900 -> 103.884
- `B5481009` FairPrice Finest Scotts Square
  - latitude: 1.30580000 -> 1.306
  - longitude: 103.83290000 -> 103.833
- `B5481010` Block 171 Lorong 1 Toa Payoh
  - latitude: 1.33098000 -> 1.331
  - longitude: 103.84265500 -> 103.843
- `B5481011` Block 109 Ang Mo Kio Avenue 4
  - latitude: 1.37023600 -> 1.370
  - longitude: 103.83776100 -> 103.838
- `B5481012` Block 246 Compassvale Road
  - latitude: 1.39261900 -> 1.393
  - longitude: 103.89907300 -> 103.899
- `B5481013` SCARLETT@DJITSUN AMK
  - latitude: 1.37290000 -> 1.373
  - longitude: 103.84760000 -> 103.848
- `B5481014` Block 205 Toa Payoh North
  - latitude: 1.34202200 -> 1.342
  - longitude: 103.84821300 -> 103.848
- `B5481015` FairPrice Rivervale Plaza
  - latitude: 1.38557900 -> 1.386
  - longitude: 103.90250300 -> 103.903
- `B5481016` Amoy Street Food Centre
  - latitude: 1.27936600 -> 1.279
  - longitude: 103.84672200 -> 103.847
- `B5481017` FairPrice Kallang Bahru
  - latitude: 1.32100000 -> 1.321
  - longitude: 103.87070000 -> 103.871
- `B5481018` FairPrice Toa Payoh Hub
  - latitude: 1.33300000 -> 1.333
  - longitude: 103.84700000 -> 103.847
- `B5481019` Block 974 Hougang Street 91
  - latitude: 1.37773600 -> 1.378
  - longitude: 103.87935200 -> 103.879
- `B5481020` Don Don Donki (100AM)
  - latitude: 1.27490000 -> 1.275
  - longitude: 103.84340000 -> 103.843
- `B5481021` SCARLETT@HEARTLAND MALL
  - latitude: 1.35950000 -> 1.359
  - longitude: 103.88510000 -> 103.885
- `B5481022` Block 143 Lorong 2 Toa Payoh
  - latitude: 1.33565300 -> 1.336
  - longitude: 103.84390000 -> 103.844
- `B5481023` FairPrice Thomson Plaza
  - latitude: 1.35490000 -> 1.355
  - longitude: 103.83080000 -> 103.831
- `B5481024` Don Don Donki (Square2)
  - latitude: 1.32070000 -> 1.321
  - longitude: 103.84430000 -> 103.844
- `B5481025` Cold Storage UE Square
  - latitude: 1.29210000 -> 1.292
  - longitude: 103.84250000 -> 103.843
- `B5481026` Cold Storage United Square
  - latitude: 1.31730000 -> 1.317
  - longitude: 103.84350000 -> 103.844
- `B5481027` U STARS @330Anchorvale Street
  - latitude: 1.39680000 -> 1.397
  - longitude: 103.88910000 -> 103.889
- `B5481028` FairPrice Bukit Timah Plaza
  - latitude: 1.33870000 -> 1.339
  - longitude: 103.77880000 -> 103.779
- `B5481029` Block 134 Jalan Bukit Merah
  - latitude: 1.27913000 -> 1.279
  - longitude: 103.82760000 -> 103.828
- `B5481030` Marks & Spencer Wheelock Place
  - latitude: 1.30470000 -> 1.305
  - longitude: 103.83060000 -> 103.831
- `B5481031` Giant Beauty World
  - latitude: 1.34230000 -> 1.342
  - longitude: 103.77610000 -> 103.776
- `B5481032` Maxwell Food Centre
  - latitude: 1.28036700 -> 1.280
  - longitude: 103.84480000 -> 103.845
- `B5481033` Block 11 York Hill
  - latitude: 1.28712700 -> 1.287
  - longitude: 103.83797800 -> 103.838
- `B5481034` SHENG SIONG BLK 25 GHIM MOH LINK 
  - latitude: 1.30810000 -> 1.308
  - longitude: 103.78590000 -> 103.786
- `B5481035` Block 911 Hougang Street 91
  - latitude: 1.37888100 -> 1.379
  - longitude: 103.88375100 -> 103.884
- `B5481036` SHENG SIONG BLK 18B CIRCUIT ROAD 
  - latitude: 1.32920000 -> 1.329
  - longitude: 103.88820000 -> 103.888
- `B5481037` FairPrice Anchorvale Village
  - latitude: 1.39670000 -> 1.397
  - longitude: 103.88820000 -> 103.888
- `B5481038` Cold Storage Tanglin Mall
  - latitude: 1.30490000 -> 1.305
  - longitude: 103.82380000 -> 103.824
- `B5481039` Block 124C Rivervale Drive
  - latitude: 1.38812900 -> 1.388
  - longitude: 103.90280500 -> 103.903
- `B5481040` Block 108 Potong Pasir Avenue 1
  - latitude: 1.33499800 -> 1.335
  - longitude: 103.86796600 -> 103.868
- `B5481041` Block 105 Rivervale Walk
  - latitude: 1.38219700 -> 1.382
  - longitude: 103.90071200 -> 103.901
- `B5481042` FairPrice 1 Jalan Bukit Merah
  - latitude: 1.28650000 -> 1.286
  - longitude: 103.80830000 -> 103.808
- `B5481043` Block 658 Hougang Avenue 8
  - latitude: 1.37327700 -> 1.373
  - longitude: 103.88285000 -> 103.883
- `B5481044` ANG MO SUPERMARKET-260 ANG MO KIO ST21
  - latitude: 1.36890000 -> 1.369
  - longitude: 103.83470000 -> 103.835
- `B5481045` FairPrice 682 Hougang Avenue 4
  - latitude: 1.37453000 -> 1.375
  - longitude: 103.88562000 -> 103.886
- `B5481046` FairPrice Orchard Grand Court
  - latitude: 1.29730000 -> 1.297
  - longitude: 103.83830000 -> 103.838
- `B5481047` SHENG SIONG BLK 6 POTONG PASIR AVE 2,  POTONG PASIR CC 
  - latitude: 1.33270000 -> 1.333
  - longitude: 103.86710000 -> 103.867
- `B5481048` FairPrice Finest Tiong Bahru Plaza
  - latitude: 1.28660000 -> 1.287
  - longitude: 103.82670000 -> 103.827
- `B5481049` One Punggol Hawker Centre
  - latitude: 1.40840400 -> 1.408
  - longitude: 103.90544100 -> 103.905
- `B5481050` Block 624 Hougang Avenue 8
  - latitude: 1.37023700 -> 1.370
  - longitude: 103.88228100 -> 103.882
- `B5481051` FairPrice Finest Artra
  - latitude: 1.29010000 -> 1.290
  - longitude: 103.81690000 -> 103.817
- `B5481052` FairPrice SengKang East
  - latitude: 1.38640000 -> 1.386
  - longitude: 103.89330000 -> 103.893
- `B5481053` FairPrice Blk 635B Punggol Drive
  - latitude: 1.39760000 -> 1.398
  - longitude: 103.91980000 -> 103.920
- `B5481054` Block 203A Compassvale Road
  - latitude: 1.38670800 -> 1.387
  - longitude: 103.89544400 -> 103.895
- `B5481055` FairPrice Nex Mall
  - latitude: 1.35070000 -> 1.351
  - longitude: 103.87190000 -> 103.872
- `B5481056` FairPrice Chinatown Point
  - latitude: 1.28540000 -> 1.285
  - longitude: 103.84500000 -> 103.845
- `B5481057` Block 610 Ang Mo Kio Avenue 4
  - latitude: 1.37956800 -> 1.380
  - longitude: 103.83940500 -> 103.839
- `B5481058` U STARS @215C Compassvale Drive
  - latitude: 1.38990000 -> 1.390
  - longitude: 103.89290000 -> 103.893
- `B5481059` Newton Food Centre
  - latitude: 1.31194700 -> 1.312
  - longitude: 103.83951200 -> 103.840
- `B5481060` Block 206A Woodleigh Link
  - latitude: 1.34144000 -> 1.341
  - longitude: 103.87260000 -> 103.873
- `B5481061` Cold Storage Alocassia
  - latitude: 1.31953800 -> 1.320
  - longitude: 103.82733200 -> 103.827
- `B5481062` 509 Serangoon North Ave 4
  - latitude: 1.37221600 -> 1.372
  - longitude: 103.87625500 -> 103.876
- `B5481063` Prime Supermarket Toa Payoh Lorong 7
  - latitude: 1.33575300 -> 1.336
  - longitude: 103.85689800 -> 103.857
- `B5481064` SCARLETT@NEX
  - latitude: 1.35070000 -> 1.351
  - longitude: 103.87190000 -> 103.872
- `B5481065` Block 204 Bishan Street 23
  - latitude: 1.35498800 -> 1.355
  - longitude: 103.84740000 -> 103.847
- `B5481066` Cold Storage Cluny Court
  - latitude: 1.32270000 -> 1.323
  - longitude: 103.81440000 -> 103.814
- `B5481067` Cold Storage Marina Bay Link Mall
  - latitude: 1.28064400 -> 1.281
  - longitude: 103.85389400 -> 103.854
- `B5481068` FairPrice Finest Funan Mall
  - latitude: 1.29130000 -> 1.291
  - longitude: 103.85010000 -> 103.850
- `B5481069` Meidi-Ya Great World City
  - latitude: 1.29368900 -> 1.294
  - longitude: 103.83200000 -> 103.832
- `B5481070` Cold Storage Takashimaya
  - latitude: 1.30267200 -> 1.303
  - longitude: 103.83440000 -> 103.834
- `B5481071` Giant Buangkok Crescent
  - latitude: 1.38090000 -> 1.381
  - longitude: 103.87930000 -> 103.879
- `B5481072` Block 568 Hougang Street 51
  - latitude: 1.37864500 -> 1.379
  - longitude: 103.88906300 -> 103.889
- `B5481073` ANG MO SUPERMARKET-639 PUNGGOL DRIVE
  - latitude: 1.39940000 -> 1.399
  - longitude: 103.91600000 -> 103.916
- `B5481074` Cold Storage Chancery Court
  - latitude: 1.31730000 -> 1.317
  - longitude: 103.83600000 -> 103.836
- `B5481075` FairPrice Blk 279 Bishan Street 24
  - latitude: 1.35720000 -> 1.357
  - longitude: 103.84390000 -> 103.844
- `B5481076` Cold Storage Sentosa Cove
  - latitude: 1.24730900 -> 1.247
  - longitude: 103.84010500 -> 103.840
- `B5481077` Block 289D Punggol Place
  - latitude: 1.40199600 -> 1.402
  - longitude: 103.90357900 -> 103.904
- `B5481078` MUSTAFA
  - latitude: 1.30980000 -> 1.310
  - longitude: 103.85547200 -> 103.855
- `B5481079` FairPrice Square 2
  - latitude: 1.32060000 -> 1.321
  - longitude: 103.84400000 -> 103.844
- `B5481080` Prime Supermarket Jalan Tenteram
  - latitude: 1.32775400 -> 1.328
  - longitude: 103.86110000 -> 103.861
- `B5481081` ACE SIGNATURE @ NTP
  - latitude: 1.35210000 -> 1.352
  - longitude: 103.86080000 -> 103.861
- `B5481082` SHENG SIONG 2 HANDY ROAD,  THE CATHAY
  - latitude: 1.29947000 -> 1.299
  - longitude: 103.84770000 -> 103.848
- `B5481083` SCARLETT@SHAW PLAZA
  - latitude: 1.32530600 -> 1.325
  - longitude: 103.85114200 -> 103.851
- `B5481084` FairPrice 150 Towner Road
  - latitude: 1.31800000 -> 1.318
  - longitude: 103.85970000 -> 103.860
- `B5481085` Block 38B Bendemeer Road
  - latitude: 1.32065100 -> 1.321
  - longitude: 103.86681100 -> 103.867
- `B5481086` FairPrice Depot Heights Shopping Centre
  - latitude: 1.28130000 -> 1.281
  - longitude: 103.80990000 -> 103.810
- `B5481087` Marks & Spencer Vivo City
  - latitude: 1.26470000 -> 1.265
  - longitude: 103.82310000 -> 103.823
- `B5481088` Block 651B Ang Mo Kio Avenue 9
  - latitude: 1.38363300 -> 1.384
  - longitude: 103.84216500 -> 103.842
- `B5481089` Don Don Donki (Waterway Point)
  - latitude: 1.40680000 -> 1.407
  - longitude: 103.90240000 -> 103.902
- `B5481090` Supernature
  - latitude: 1.30584300 -> 1.306
  - longitude: 103.81135900 -> 103.811
- `B5481091` Block 93 Whampoa Drive
  - latitude: 1.32223300 -> 1.322
  - longitude: 103.85483800 -> 103.855
- `B5481092` Block 943 Hougang Street 92
  - latitude: 1.37384500 -> 1.374
  - longitude: 103.88065800 -> 103.881
- `B5481093` FairPrice Finest 111 Somerset
  - latitude: 1.30040000 -> 1.300
  - longitude: 103.83760000 -> 103.838
- `B5481094` U STARS @261 Punggol Way
  - latitude: 1.40540000 -> 1.405
  - longitude: 103.89690000 -> 103.897
- `B5481095` Block 313 Shunfu Road
  - latitude: 1.35149300 -> 1.351
  - longitude: 103.83752200 -> 103.838
- `B5481096` Block 607 Hougang Avenue 4
  - latitude: 1.37022900 -> 1.370
  - longitude: 103.88620000 -> 103.886
- `B5481097` SCARLETT@PLAZA SINGAPURA
  - latitude: 1.30070000 -> 1.301
  - longitude: 103.84490000 -> 103.845
- `B5481098` Cold Storage One North
  - latitude: 1.29890000 -> 1.299
  - longitude: 103.78740000 -> 103.787
- `B5481099` FairPrice 5 Upper Boon Keng Road
  - latitude: 1.31250000 -> 1.313
  - longitude: 103.87270000 -> 103.873
- `B5481100` Block 113B Alkaff Crescent
  - latitude: 1.33608000 -> 1.336
  - longitude: 103.87260000 -> 103.873
- `B5481101` SHENG SIONG BLK 338 ANCHORVALE CRESCENT 
  - latitude: 1.39920000 -> 1.399
  - longitude: 103.88960000 -> 103.890
- `B5481102` FairPrice AMK Hub
  - latitude: 1.36900000 -> 1.369
  - longitude: 103.84810000 -> 103.848
- `B5481103` Giant Serangoon Central Drive
  - latitude: 1.35321900 -> 1.353
  - longitude: 103.87160000 -> 103.872
- `B5481104` Cold Storage Paragon
  - latitude: 1.30390500 -> 1.304
  - longitude: 103.83560000 -> 103.836
- `B5481105` Block 170 Ang Mo Kio Avenue 4
  - latitude: 1.37394300 -> 1.374
  - longitude: 103.83700700 -> 103.837
- `B5481106` Golden Mile Food Centre
  - latitude: 1.30313500 -> 1.303
  - longitude: 103.86390000 -> 103.864
- `B5481107` Cold Storage Aperia
  - latitude: 1.30970000 -> 1.310
  - longitude: 103.86430000 -> 103.864
- `B5481108` Little Farms Market, Serangoon Garden (Grocery store)
  - latitude: 1.36510000 -> 1.365
  - longitude: 103.86520000 -> 103.865
- `B5481109` Prime Supermarket Punggol Field
  - latitude: 1.39659900 -> 1.397
  - longitude: 103.90860000 -> 103.909
- `B5481110` FairPrice City Square Mall
  - latitude: 1.31180000 -> 1.312
  - longitude: 103.85660000 -> 103.857
- `B5481111` Block 243 Bishan Street 22
  - latitude: 1.36087600 -> 1.361
  - longitude: 103.84470000 -> 103.845
- `B5481112` Woodleigh Village Hawker Centre
  - latitude: 1.33983400 -> 1.340
  - longitude: 103.87242800 -> 103.872
- `B5481113` Block 524 Hougang Avenue 6
  - latitude: 1.37412500 -> 1.374
  - longitude: 103.89039300 -> 103.890
- `B5481114` SHENG SIONG BLK 622D PUNGGOL CENTRAL
  - latitude: 1.40050000 -> 1.401
  - longitude: 103.91040000 -> 103.910
- `B5481115` SHENG SIONG BLK 465 FERNVALE ROAD 
  - latitude: 1.39820000 -> 1.398
  - longitude: 103.87660000 -> 103.877
- `B5481116` SCARLETT@PEOPLE'S PARK COMPLEX
  - latitude: 1.28416600 -> 1.284
  - longitude: 103.84245000 -> 103.842
- `B5481117` FairPrice Finest Valley Point
  - latitude: 1.29290000 -> 1.293
  - longitude: 103.82700000 -> 103.827
- `B5481118` FairPrice Serangoon Central
  - latitude: 1.35390000 -> 1.354
  - longitude: 103.87070000 -> 103.871
- `B5481119` Block 207D Compassvale Lane
  - latitude: 1.38459400 -> 1.385
  - longitude: 103.89740200 -> 103.897
- `B5481120` FairPrice Hougang 202
  - latitude: 1.35770000 -> 1.358
  - longitude: 103.88380000 -> 103.884
- `B5481121` Little Farms Market, Tanglin Mall
  - latitude: 1.30500000 -> 1.305
  - longitude: 103.82380000 -> 103.824
- `B5481122` Cold Storage Compass One
  - latitude: 1.39180000 -> 1.392
  - longitude: 103.89490000 -> 103.895
- `B5481123` ACE MARKETPLACE (86RC)
  - latitude: 1.28692400 -> 1.287
  - longitude: 103.81867800 -> 103.819
- `B5481124` Block 201 Toa Payoh North
  - latitude: 1.34154200 -> 1.342
  - longitude: 103.85000000 -> 103.850
- `B5481125` Block 95B Henderson Road
  - latitude: 1.28699300 -> 1.287
  - longitude: 103.82157900 -> 103.822
- `B5481126` Little Farms Market, Sentosa
  - latitude: 1.24700000 -> 1.247
  - longitude: 103.83960000 -> 103.840
- `B5481127` Prime Supermarket Buangkok Square
  - latitude: 1.38452100 -> 1.385
  - longitude: 103.88160000 -> 103.882
- `B5481128` FairPrice Finest 100AM
  - latitude: 1.27460000 -> 1.275
  - longitude: 103.84340000 -> 103.843
- `B5481129` Cold Storage Star Vista
  - latitude: 1.30689000 -> 1.307
  - longitude: 103.78790000 -> 103.788
- `B5481130` FairPrice Rivervale Shores
  - latitude: 1.38640000 -> 1.386
  - longitude: 103.90930000 -> 103.909
- `B5481131` SHENG SIONG BLK 266 COMPASSVALE BOW 
  - latitude: 1.38200000 -> 1.382
  - longitude: 103.89700000 -> 103.897
- `B5481132` FairPrice Finest Sengkang Grand
  - latitude: 1.38260000 -> 1.383
  - longitude: 103.89210000 -> 103.892
- `B5481133` Giant Kim Keat Avenue
  - latitude: 1.33214800 -> 1.332
  - longitude: 103.85740000 -> 103.857
- `B5481134` Block 316B Punggol Way
  - latitude: 1.40910100 -> 1.409
  - longitude: 103.89775300 -> 103.898
- `B5481135` Block 114 Lorong 1 Toa Payoh
  - latitude: 1.34084700 -> 1.341
  - longitude: 103.84430000 -> 103.844
- `B5481136` Giant Telok Blangah Crescent
  - latitude: 1.27780000 -> 1.278
  - longitude: 103.81940000 -> 103.819
- `B5481137` FairPrice NUH Medical Centre
  - latitude: 1.29330000 -> 1.293
  - longitude: 103.78440000 -> 103.784
- `B5481138` SHENG SIONG BLK 221 MOUNT VERNON RD 
  - latitude: 1.34160000 -> 1.342
  - longitude: 103.88050000 -> 103.880
- `B5481139` Block 291B Compassvale Street
  - latitude: 1.39602200 -> 1.396
  - longitude: 103.89835900 -> 103.898
- `B5481140` FairPrice Poiz Centre
  - latitude: 1.33120000 -> 1.331
  - longitude: 103.86810000 -> 103.868
- `B5481141` FairPrice Stirling
  - latitude: 1.29100000 -> 1.291
  - longitude: 103.80310000 -> 103.803
- `B5481142` FairPrice Alexandra Retail Centre ARC (PSA Branch)
  - latitude: 1.27370000 -> 1.274
  - longitude: 103.80150000 -> 103.802
- `B5481143` FairPrice Holland V
  - latitude: 1.31040000 -> 1.310
  - longitude: 103.79590000 -> 103.796
- `B5481144` FairPrice Dunearn Village
  - latitude: 1.33670000 -> 1.337
  - longitude: 103.78360000 -> 103.784
- `B5481145` Block 25 Sin Ming Road
  - latitude: 1.35492000 -> 1.355
  - longitude: 103.83775800 -> 103.838
- `B5481146` Prime Supermarket Hougang Avenue 1
  - latitude: 1.35399800 -> 1.354
  - longitude: 103.89092400 -> 103.891
- `B5481147` FairPrice Blk 510 Bishan Street 13
  - latitude: 1.34870000 -> 1.349
  - longitude: 103.84980000 -> 103.850
- `B5481148` Block 112 Bukit Purmei
  - latitude: 1.27453000 -> 1.275
  - longitude: 103.82590000 -> 103.826
- `B5481149` Block 473B Upper Serangoon Crescent
  - latitude: 1.37595400 -> 1.376
  - longitude: 103.90105200 -> 103.901
- `B5481150` Block 37 Jalan Rumah Tinggi
  - latitude: 1.28922500 -> 1.289
  - longitude: 103.80917100 -> 103.809
- `B5481151` Block 9 Toh Yi Drive
  - latitude: 1.33829700 -> 1.338
  - longitude: 103.77358900 -> 103.774
- `B5481152` Thai Supermarket Pte Ltd
  - latitude: 1.30968100 -> 1.310
  - longitude: 103.86432000 -> 103.864
- `B5481153` Block 466 Hougang Avenue 8
  - latitude: 1.37286100 -> 1.373
  - longitude: 103.89700000 -> 103.897
- `B5481154` FairPrice 43 Cambridge Road
  - latitude: 1.31540000 -> 1.315
  - longitude: 103.84940000 -> 103.849
- `B5481155` Block 318 Serangoon Avenue 2
  - latitude: 1.35286300 -> 1.353
  - longitude: 103.86710000 -> 103.867
- `B5481156` Cold Storage Guthrie House
  - latitude: 1.33075300 -> 1.331
  - longitude: 103.79560000 -> 103.796
- `B5481157` Block 310C Punggol Walk
  - latitude: 1.40969800 -> 1.410
  - longitude: 103.90019600 -> 103.900
- `B5481158` Cold Storage Greenwich
  - latitude: 1.38758400 -> 1.388
  - longitude: 103.86940000 -> 103.869
- `B5481159` SCARLETT@GRANTRAL MACPHERSON
  - latitude: 1.33360000 -> 1.334
  - longitude: 103.88800000 -> 103.888
- `B5481160` FairPrice French Road
  - latitude: 1.30890000 -> 1.309
  - longitude: 103.86190000 -> 103.862
- `B5481161` Block 129 Lorong Ah Soo
  - latitude: 1.35152300 -> 1.352
  - longitude: 103.88750000 -> 103.888
- `B5481162` Block 272 Punggol Walk
  - latitude: 1.40287000 -> 1.403
  - longitude: 103.90076300 -> 103.901
- `B5481163` Buangkok Hawker Centre
  - latitude: 1.38242700 -> 1.382
  - longitude: 103.89219000 -> 103.892
- `B5481164` Block 461A Sengkang West Way
  - latitude: 1.39460600 -> 1.395
  - longitude: 103.87069000 -> 103.871
- `B5481165` Block 144 Jalan Bukit Merah
  - latitude: 1.27737100 -> 1.277
  - longitude: 103.82989200 -> 103.830
- `B5481166` Block 236 Hougang Avenue 1
  - latitude: 1.35783000 -> 1.358
  - longitude: 103.88890000 -> 103.889
- `B5481167` Cold Storage Jelita
  - latitude: 1.31757800 -> 1.318
  - longitude: 103.78590000 -> 103.786
- `B5481168` Sembawang Hills Food Centre
  - latitude: 1.37232800 -> 1.372
  - longitude: 103.82903500 -> 103.829
- `B5481169` Block 13 Dover Close East
  - latitude: 1.30542900 -> 1.305
  - longitude: 103.78600000 -> 103.786
- `B5481170` Block 12 Farrer Park Road
  - latitude: 1.31212700 -> 1.312
  - longitude: 103.85180000 -> 103.852
- `B5481171` Block 114 Potong Pasir
  - latitude: 1.33675800 -> 1.337
  - longitude: 103.86321200 -> 103.863
- `B5481172` SHENG SIONG BLK 2 ANG MO KIO DRIVE, ITE COLLEGE CENTRAL
  - latitude: 1.37780000 -> 1.378
  - longitude: 103.85630000 -> 103.856
- `B5481173` Cold Storage One Holland Village
  - latitude: 1.31150000 -> 1.312
  - longitude: 103.79370000 -> 103.794
- `B5481174` Block 204A Punggol Field
  - latitude: 1.39889400 -> 1.399
  - longitude: 103.90291400 -> 103.903
- `B5481175` Block 212 Serangoon Avenue 4
  - latitude: 1.35678600 -> 1.357
  - longitude: 103.87300000 -> 103.873
- `B5481176` Block 54 Geylang Bahru
  - latitude: 1.32393700 -> 1.324
  - longitude: 103.86780000 -> 103.868
- `B5481177` FairPrice Finest The Centrepoint
  - latitude: 1.30170000 -> 1.302
  - longitude: 103.83950000 -> 103.840
- `B5481178` Giant Hougang Green
  - latitude: 1.37890000 -> 1.379
  - longitude: 103.88730000 -> 103.887
- `B5481179` Block 336 Hougang Avenue 7
  - latitude: 1.36936200 -> 1.369
  - longitude: 103.89820000 -> 103.898
- `B5481180` Block 195D Punggol Road
  - latitude: 1.40157200 -> 1.402
  - longitude: 103.90693700 -> 103.907
- `B5481181` Don Don Donki (Tiong Bahru Plaza)
  - latitude: 1.28630000 -> 1.286
  - longitude: 103.82730000 -> 103.827
- `B5481182` FairPrice Finest Junction 8
  - latitude: 1.35108400 -> 1.351
  - longitude: 103.84894500 -> 103.849
- `B5481183` Block 470B Upper Serangoon Crescent
  - latitude: 1.37904700 -> 1.379
  - longitude: 103.90080000 -> 103.901
- `B5481184` Block 232 Lorong 8 Toa Payoh
  - latitude: 1.33759100 -> 1.338
  - longitude: 103.85910000 -> 103.859
- `B5481185` Block 15 Joo Seng Road
  - latitude: 1.33559800 -> 1.336
  - longitude: 103.88023300 -> 103.880
- `B5481186` Prime Supermarket 159A Hougang Street 11
  - latitude: 1.35190900 -> 1.352
  - longitude: 103.87950000 -> 103.879
- `B5481187` Block 433B Sengkang West Way
  - latitude: 1.39383100 -> 1.394
  - longitude: 103.87776400 -> 103.878
- `B5481188` SCARLETT@SUNTEC CITY
  - latitude: 1.29460000 -> 1.295
  - longitude: 103.86030000 -> 103.860
- `B5481189` FairPrice Blk 192 Toa Payoh Lorong 4
  - latitude: 1.33184000 -> 1.332
  - longitude: 103.85060000 -> 103.851
- `B5481190` Block 325C Sengkang East Way
  - latitude: 1.39329800 -> 1.393
  - longitude: 103.89134900 -> 103.891
- `B5481191` SHENG SIONG BLK 11 UPPER BOON KENG ROAD 
  - latitude: 1.31420000 -> 1.314
  - longitude: 103.87060000 -> 103.871
- `B5481192` FairPrice North Shore
  - latitude: 1.41741900 -> 1.417
  - longitude: 103.91133600 -> 103.911
- `B5481193` Block 48 Strathmore Avenue
  - latitude: 1.29380000 -> 1.294
  - longitude: 103.80780100 -> 103.808
- `B5481194` North Bridge Road Market & Food Centre
  - latitude: 1.30587200 -> 1.306
  - longitude: 103.86400000 -> 103.864
- `B5481195` Block 112 Bishan Street 12
  - latitude: 1.34688700 -> 1.347
  - longitude: 103.84881400 -> 103.849
- `B5481196` Pek Kio Market & Food Centre
  - latitude: 1.31623000 -> 1.316
  - longitude: 103.85022400 -> 103.850
- `B5481197` Telok Blangah Rise Market
  - latitude: 1.27271600 -> 1.273
  - longitude: 103.82194400 -> 103.822
- `B5481198` Blk 112 Jalan Bukit Merah Market and Food Centre
  - latitude: 1.28027100 -> 1.280
  - longitude: 103.82600400 -> 103.826
- `B5481199` Marks & Spencer Raffles City
  - latitude: 1.29474100 -> 1.295
  - longitude: 103.85317000 -> 103.853
- `B5481200` Tekka Centre / Zhu Jiao Market
  - latitude: 1.30619000 -> 1.306
  - longitude: 103.85053300 -> 103.851
- `B5481201` National University of Singapore (NUS) Frontier Canteen
  - latitude: 1.29648900 -> 1.296
  - longitude: 103.78036400 -> 103.780
- `B5481202` Cold Storage Orchard Hotel
  - latitude: 1.30743500 -> 1.307
  - longitude: 103.82882000 -> 103.829
- `B5481203` SHENG SIONG NEW BRIDGE CENTRE
  - latitude: 1.28286400 -> 1.283
  - longitude: 103.84256600 -> 103.843
- `B5481204` Redhill Food Centre
  - latitude: 1.28731500 -> 1.287
  - longitude: 103.81818300 -> 103.818
- `B5481205` 20 Ghim Moh Road Market & Food Centre
  - latitude: 1.31113400 -> 1.311
  - longitude: 103.78821200 -> 103.788
- `B5481206` Bukit Merah Central Food Centre
  - latitude: 1.28346400 -> 1.283
  - longitude: 103.81740600 -> 103.817
- `B5481207` Alexandra Village Food Centre
  - latitude: 1.28660800 -> 1.287
  - longitude: 103.80452900 -> 103.805
- `B5481208` Toa Payoh West Market and Food Court
  - latitude: 1.33817300 -> 1.338
  - longitude: 103.84472800 -> 103.845
- `B5481209` Mayflower Market
  - latitude: 1.37418500 -> 1.374
  - longitude: 103.83881000 -> 103.839
- `B5481210` All India Supermart Pte Ltd
  - latitude: 1.30804800 -> 1.308
  - longitude: 103.85428500 -> 103.854
- `B5481211` Toa Payoh Lorong 8 Blk 210 Hawker Centre
  - latitude: 1.34032700 -> 1.340
  - longitude: 103.85450400 -> 103.855
- `B5481212` Holland Drive Market and Food Centre
  - latitude: 1.30819900 -> 1.308
  - longitude: 103.79279900 -> 103.793
- `B5481213` Li Li Cheng Punggol
  - latitude: 1.40233900 -> 1.402
  - longitude: 103.90125900 -> 103.901
- `B5481214` Blk 6 Tanjong Pagar Plaza Market and Food Centre
  - latitude: 1.27655300 -> 1.277
  - longitude: 103.84311900 -> 103.843
- `B5481215` Toa Payoh Lorong 4 Blk 94
  - latitude: 1.33945900 -> 1.339
  - longitude: 103.84933900 -> 103.849
- `B5481216` Mei Chin Road Market
  - latitude: 1.29343800 -> 1.293
  - longitude: 103.80291400 -> 103.803
- `B5481217` Shunfu-Mart
  - latitude: 1.35200500 -> 1.352
  - longitude: 103.83711900 -> 103.837
- `B5481218` Blk 115 Bukit Merah View Market and Food Centre
  - latitude: 1.28549400 -> 1.285
  - longitude: 103.82242400 -> 103.822
- `B5481219` Empress Road Market and Food Centre
  - latitude: 1.31633900 -> 1.316
  - longitude: 103.80564200 -> 103.806
- `B5481220` Block 150 Mei Ling St
  - latitude: 1.29497400 -> 1.295
  - longitude: 103.80415000 -> 103.804
- `B5481221` Block 49 Lengkok Bahru
  - latitude: 1.28760900 -> 1.288
  - longitude: 103.81199800 -> 103.812
- `B5481222` Block 102 Bukit Purmei Road
  - latitude: 1.27190800 -> 1.272
  - longitude: 103.82673500 -> 103.827
- `B5481223` Block 8 Tanjong Pagar Plaza
  - latitude: 1.27722000 -> 1.277
  - longitude: 103.84299000 -> 103.843
- `B5481224` Telok Blangah Food Centre
  - latitude: 1.27345600 -> 1.273
  - longitude: 103.80763900 -> 103.808
- `B5481225` Block 1 Dover Rd
  - latitude: 1.30252700 -> 1.303
  - longitude: 103.78319400 -> 103.783
- `B5481226` Block 108B Bidadari Park Drive
  - latitude: 1.33347000 -> 1.333
  - longitude: 103.87181300 -> 103.872
- `B5481227` Block 52 Lengkok Bahru
  - latitude: 1.28868900 -> 1.289
  - longitude: 103.81303800 -> 103.813
- `B5481228` 80 Circuit Road Market and Food Centre
  - latitude: 1.32790800 -> 1.328
  - longitude: 103.88694600 -> 103.887
- `B5481229` Block 118B Jalan Membina
  - latitude: 1.28179700 -> 1.282
  - longitude: 103.82602500 -> 103.826
- `B5481230` Ngee Ann Polytechnic (NP)
  - latitude: 1.33244500 -> 1.332
  - longitude: 103.77572800 -> 103.776
- `B5481231` Gardens by the Bay
  - latitude: 1.28180300 -> 1.282
  - longitude: 103.86582100 -> 103.866
- `B5481232` Block 118A Bidadari Park Drive
  - latitude: 1.33662000 -> 1.337
  - longitude: 103.87341700 -> 103.873
- `B5481233` Lau Pa Sat Hawker Centre
  - latitude: 1.28053100 -> 1.281
  - longitude: 103.85038300 -> 103.850
- `B5481234` Block 22 Dover Crescent
  - latitude: 1.30707400 -> 1.307
  - longitude: 103.78380800 -> 103.784
- `B5481235` Block 8 Cantonment Cl
  - latitude: 1.27578200 -> 1.276
  - longitude: 103.83897300 -> 103.839
- `B5481236` Block 69 Redhill Cl
  - latitude: 1.28672400 -> 1.287
  - longitude: 103.81643100 -> 103.816
- `B5481237` Blk 10 AMK Autopoint
  - latitude: 1.37640600 -> 1.376
  - longitude: 103.86896300 -> 103.869
- `B5481238` Blk 69 Geylang Bahru Market and Food Centre
  - latitude: 1.32155600 -> 1.322
  - longitude: 103.87008900 -> 103.870
- `B5481239` People's Park Food Centre
  - latitude: 1.28505100 -> 1.285
  - longitude: 103.84257700 -> 103.843
- `B5481240` Block 44 Telok Blangah Drive
  - latitude: 1.27114500 -> 1.271
  - longitude: 103.80984200 -> 103.810
- `B5481241` Block 52A Commonwealth Dr
  - latitude: 1.30194100 -> 1.302
  - longitude: 103.79695600 -> 103.797
- `B5481242` Block 75B Redhill Rd
  - latitude: 1.28850000 -> 1.288
  - longitude: 103.81606500 -> 103.816
- `B5481243` MacPherson Market & Food Centre
  - latitude: 1.32347900 -> 1.323
  - longitude: 103.88541300 -> 103.885
- `B5D61001` 526 Serangoon North Ave 4
  - latitude: 1.37171400 -> 1.372
  - longitude: 103.87303700 -> 103.873
- `B5D61002` Block 668B Edgefield Plains
  - latitude: 1.40482600 -> 1.405
  - longitude: 103.91293500 -> 103.913
- `B5D61003` Block 165A Punggol Central
  - latitude: 1.39487700 -> 1.395
  - longitude: 103.91460700 -> 103.915
- `B5D61004` Block 655A Punggol East
  - latitude: 1.39961600 -> 1.400
  - longitude: 103.92049900 -> 103.920
- `B5D61005` Blk 1 AMK Tech I
  - latitude: 1.37832200 -> 1.378
  - longitude: 103.86833700 -> 103.868
- `B5D61006` Block 677A Punggol Drive
  - latitude: 1.40505900 -> 1.405
  - longitude: 103.90946000 -> 103.909
- `B5D61007` Block 511 Ang Mo Kio Ave 8
  - latitude: 1.37367000 -> 1.374
  - longitude: 103.85031900 -> 103.850
- `B5D61009` Block 684A Edgedale Plains
  - latitude: 1.40285000 -> 1.403
  - longitude: 103.91596000 -> 103.916
- `B5D61010` Blk 36 Sin Ming Industrial Estate
  - latitude: 1.35883500 -> 1.359
  - longitude: 103.83885300 -> 103.839
- `B5D61011` Blk 5058 Ang Mo Kio Ind Park 2
  - latitude: 1.37497700 -> 1.375
  - longitude: 103.86030200 -> 103.860
- `B5D61013` FairPrice Punggol Waterway Point
  - latitude: 1.40700000 -> 1.407
  - longitude: 103.90160000 -> 103.902
- `B5D61014` Singapore Management University (SMU)
  - latitude: 1.29644000 -> 1.296
  - longitude: 103.84977000 -> 103.850
- `B5D61016` Block 624B Punggol Central
  - latitude: 1.40075800 -> 1.401
  - longitude: 103.91167300 -> 103.912
- `B5D61017` Block 400C Fernvale Ln
  - latitude: 1.38936500 -> 1.389
  - longitude: 103.86980800 -> 103.870
- `B5D61018` Block 632A Punggol Drive
  - latitude: 1.40059800 -> 1.401
  - longitude: 103.91345100 -> 103.913
- `B5D61020` Blk 409 Ang Mo Kio Ave 10 Market & Hawker Centre
  - latitude: 1.36270600 -> 1.363
  - longitude: 103.85533900 -> 103.855
- `B5D61021` Block 168A Punggol East
  - latitude: 1.39474700 -> 1.395
  - longitude: 103.91432500 -> 103.914
- `B5D61022` Block 647 Punggol Central
  - latitude: 1.39811300 -> 1.398
  - longitude: 103.91559100 -> 103.916
- `B5D61023` Singapore University of Social Sciences (SUSS)
  - latitude: 1.32870400 -> 1.329
  - longitude: 103.77582000 -> 103.776
- `B5D61024` Block 294 Punggol Central
  - latitude: 1.40310500 -> 1.403
  - longitude: 103.90457000 -> 103.905
- `B5D61025` Block 538 Hougang Ave 8
  - latitude: 1.37772200 -> 1.378
  - longitude: 103.89030300 -> 103.890
- `B5D61027` Blk 648 Hougang Ave 8
  - latitude: 1.37221400 -> 1.372
  - longitude: 103.87987400 -> 103.880
- `B5D61028` 996C Buangkok Crescent
  - latitude: 1.38536500 -> 1.385
  - longitude: 103.88525100 -> 103.885
- `B5D61029` Block 224C Sumang Lane
  - latitude: 1.40169500 -> 1.402
  - longitude: 103.89407000 -> 103.894
- `B5D61030` Nanyang Academy of Fine Arts
  - latitude: 1.29989900 -> 1.300
  - longitude: 103.85121000 -> 103.851
- `B5D61031` Block 953 Hougang Ave 9
  - latitude: 1.37686100 -> 1.377
  - longitude: 103.87747800 -> 103.877
- `B5D61032` Block 410A Fernvale Rd
  - latitude: 1.39024600 -> 1.390
  - longitude: 103.87588100 -> 103.876
- `B5D61034` Block 217C Sumang Walk
  - latitude: 1.40220600 -> 1.402
  - longitude: 103.89588400 -> 103.896
- `B5D61035` Block 413B Fernvale Link
  - latitude: 1.38984100 -> 1.390
  - longitude: 103.87904200 -> 103.879
- `B5D61036` 531 Serangoon North Ave 4
  - latitude: 1.37448700 -> 1.374
  - longitude: 103.87535700 -> 103.875
- `B5D61037` Block 920 Hougang Ave 9
  - latitude: 1.37674700 -> 1.377
  - longitude: 103.88358400 -> 103.884
- `B5D61038` Lasalle College of the Arts
  - latitude: 1.30287600 -> 1.303
  - longitude: 103.85141000 -> 103.851
- `B5D61039` Block 228A Punggol Field
  - latitude: 1.40363600 -> 1.404
  - longitude: 103.89202200 -> 103.892
- `B5D61041` Block 104B Ang Mo Kio St 11
  - latitude: 1.37144600 -> 1.371
  - longitude: 103.83850900 -> 103.839
- `B5D61042` 212 Ang Mo Kio Ave 3
  - latitude: 1.36893300 -> 1.369
  - longitude: 103.84159400 -> 103.842
- `B5D61043` Block 203 Ang Mo Kio Ave 3
  - latitude: 1.36797800 -> 1.368
  - longitude: 103.84437300 -> 103.844
- `B5D61044` Block 326B Sumang Walk
  - latitude: 1.41275500 -> 1.413
  - longitude: 103.89969100 -> 103.900
- `B5D61045` 442 Ang Mo Kio Avenue 10
  - latitude: 1.36573200 -> 1.366
  - longitude: 103.85470800 -> 103.855
- `B5D61046` Block 423A Northshore Crescent
  - latitude: 1.41919000 -> 1.419
  - longitude: 103.90585100 -> 103.906
- `B5D61047` Block 536 Ang Mo Kio Ave 10
  - latitude: 1.37487100 -> 1.375
  - longitude: 103.85407600 -> 103.854
- `B5D61048` Block 232C Sumang Lane
  - latitude: 1.40188800 -> 1.402
  - longitude: 103.89017900 -> 103.890
- `B9051002` Block 463 Ang Mo Kio Avenue 10
  - latitude: 1.36695800 -> 1.367
  - longitude: 103.85746900 -> 103.857
- `B9051003` SHENG SIONG NO.1 JALAN BERSEH, NEW WORLD CENTRE
  - latitude: 1.30751600 -> 1.308
  - longitude: 103.85740500 -> 103.857
- `B9051004` FairPrice Woodleigh Mall
  - latitude: 1.33900000 -> 1.339
  - longitude: 103.87150000 -> 103.871
- `B9051005` Block 185 Edgefield Plains
  - latitude: 1.39822300 -> 1.398
  - longitude: 103.91040600 -> 103.910
- `B9051006` Block 211C Punggol Walk
  - latitude: 1.40105900 -> 1.401
  - longitude: 103.89915500 -> 103.899
- `B9051007` SHENG SIONG BLK 512 BISHAN STREET 13 
  - latitude: 1.34960000 -> 1.350
  - longitude: 103.85000000 -> 103.850
- `B9051008` Block 445 Sin Ming Avenue
  - latitude: 1.35871300 -> 1.359
  - longitude: 103.83160000 -> 103.832
- `B9051009` Block 303B Anchorvale Link
  - latitude: 1.38753100 -> 1.388
  - longitude: 103.88977100 -> 103.890
- `B9051010` SHENG SIONG BLK 52 CHIN SWEE ROAD
  - latitude: 1.28700000 -> 1.287
  - longitude: 103.84170000 -> 103.842
- `B9051011` SHENG SIONG BLK 161 ANG MO KIO AVE  4
  - latitude: 1.37420000 -> 1.374
  - longitude: 103.83950000 -> 103.840
- `B9051012` Block 447A Punggol Way
  - latitude: 1.41765800 -> 1.418
  - longitude: 103.91218700 -> 103.912
- `B9051013` Block 1 Lorong Lew Lian
  - latitude: 1.35092300 -> 1.351
  - longitude: 103.87538600 -> 103.875
- `B9051014` SHENG SIONG BLK 181 TOA PAYOH LORONG 4
  - latitude: 1.33360000 -> 1.334
  - longitude: 103.85100000 -> 103.851
- `B9051015` Block 3 Jalan Bukit Merah
  - latitude: 1.28705300 -> 1.287
  - longitude: 103.80748600 -> 103.807
- `B9051016` Block 166 Stirling Road
  - latitude: 1.29095000 -> 1.291
  - longitude: 103.80221000 -> 103.802
- `B9051017` Block 181 Stirling Rd
  - latitude: 1.29416500 -> 1.294
  - longitude: 103.80582000 -> 103.806
- `B9051018` Block 94 Dawson Road
  - latitude: 1.29597000 -> 1.296
  - longitude: 103.81156000 -> 103.812
- `B9051019` Little India Rowell Rd
  - latitude: 1.30820500 -> 1.308
  - longitude: 103.85508800 -> 103.855
- `B9051020` Block 69 Telok Blangah Heights
  - latitude: 1.27557200 -> 1.276
  - longitude: 103.81061700 -> 103.811
- `B9481001` SHENG SIONG BLK 312A SUMANG LINK 
  - latitude: 1.41140000 -> 1.411
  - longitude: 103.90040000 -> 103.900
- `B9481002` Block 22 Hougang Avenue 3
  - latitude: 1.36427000 -> 1.364
  - longitude: 103.89040000 -> 103.890
- `B9481003` Block 217 Ang Mo Kio Avenue 1
  - latitude: 1.36558700 -> 1.366
  - longitude: 103.84164700 -> 103.842
- `B9481004` Block 288B Compassvale Crescent
  - latitude: 1.39848400 -> 1.398
  - longitude: 103.89770400 -> 103.898
- `B9481005` Block 177 Bishan Street 13
  - latitude: 1.34786700 -> 1.348
  - longitude: 103.85350000 -> 103.853
- `B9481006` Block 297B Compassvale Street
  - latitude: 1.39489800 -> 1.395
  - longitude: 103.90110300 -> 103.901
- `B9481007` SHENG SIONG BLK 88 TANGLIN HALT ROAD  
  - latitude: 1.30140000 -> 1.301
  - longitude: 103.79830000 -> 103.798
- `B9481008` Block 103B Edgefield Plains
  - latitude: 1.39782300 -> 1.398
  - longitude: 103.90470000 -> 103.905
- `B9481009` Block 634 Hougang Avenue 8
  - latitude: 1.37005600 -> 1.370
  - longitude: 103.87842400 -> 103.878
- `B9481010` Block 302 Hougang Avenue 5
  - latitude: 1.36849900 -> 1.368
  - longitude: 103.89435800 -> 103.894
- `B9481011` Block 222 Lorong 8 Toa Payoh
  - latitude: 1.34179100 -> 1.342
  - longitude: 103.85590000 -> 103.856
- `B9481012` SHENG SIONG BLK 417 FERNVALE LINK
  - latitude: 1.39160000 -> 1.392
  - longitude: 103.87950000 -> 103.879
- `B9481013` Block 534 Hougang Street 52
  - latitude: 1.37716000 -> 1.377
  - longitude: 103.89031300 -> 103.890
- `B9481014` SHENG SIONG BLK 301 PUNGGOL CENTRAL 
  - latitude: 1.40370000 -> 1.404
  - longitude: 103.90610000 -> 103.906
- `B9481015` SHENG SIONG 19 SERANGOON NORTH AVE 5
  - latitude: 1.37557000 -> 1.376
  - longitude: 103.87188000 -> 103.872
- `B9481016` SHENG SIONG BLK 351 ANCHORVALE ROAD 
  - latitude: 1.39320000 -> 1.393
  - longitude: 103.88710000 -> 103.887
- `B9481017` SHENG SIONG 377 HOUGANG STREET 32,  HOUGANG RIVERCOURT
  - latitude: 1.36300000 -> 1.363
  - longitude: 103.89520000 -> 103.895
- `B9481018` SHENG SIONG BLK 4 TOA PAYOH LORONG 7 
  - latitude: 1.33910000 -> 1.339
  - longitude: 103.85580000 -> 103.856
- `B9481019` Block 707 Hougang Avenue 2
  - latitude: 1.36631900 -> 1.366
  - longitude: 103.88870000 -> 103.889
- `B9481020` SHENG SIONG 5 STADIUM WALK,  LEISURE PARK KALLANG 
  - latitude: 1.30230000 -> 1.302
  - longitude: 103.87650000 -> 103.876
- `B9481021` SHENG SIONG BLK 31A MARGARET DRIVE 
  - latitude: 1.29850000 -> 1.298
  - longitude: 103.80390000 -> 103.804
- `B9481022` Block 22 Saint George's Road
  - latitude: 1.32523600 -> 1.325
  - longitude: 103.86243900 -> 103.862
- `B9481023` Block 432 Ang Mo Kio Avenue 10
  - latitude: 1.36834400 -> 1.368
  - longitude: 103.85359000 -> 103.854
- `B9481024` Block 174B Hougang Avenue 1
  - latitude: 1.34956300 -> 1.350
  - longitude: 103.88920000 -> 103.889
- `B9481025` Block 452B Sengkang West Way
  - latitude: 1.39378100 -> 1.394
  - longitude: 103.87403100 -> 103.874
- `B9481026` Block 649 Ang Mo Kio Avenue 5
  - latitude: 1.37780700 -> 1.378
  - longitude: 103.84375200 -> 103.844
- `B9481027` Block 93 Paya Lebar Way
  - latitude: 1.32273700 -> 1.323
  - longitude: 103.88829600 -> 103.888
- `B9481028` SHENG SIONG BLK 455 SENGKANG WEST AVE 5 
  - latitude: 1.39140000 -> 1.391
  - longitude: 103.87110000 -> 103.871
- `B9481029` Block 188D Rivervale Drive
  - latitude: 1.39501100 -> 1.395
  - longitude: 103.90383700 -> 103.904
- `B9481030` Block 3D Upper Boon Keng Road
  - latitude: 1.31342700 -> 1.313
  - longitude: 103.87290000 -> 103.873
- `B9481031` Block 160 Lorong 1 Toa Payoh
  - latitude: 1.33098500 -> 1.331
  - longitude: 103.84470000 -> 103.845
- `B9481032` SHENG SIONG BLK 233 ANG MO KIO AVE 3
  - latitude: 1.36770000 -> 1.368
  - longitude: 103.83630000 -> 103.836
- `B9481033` SHENG SIONG BLK 218 SUMANG WALK 
  - latitude: 1.40330000 -> 1.403
  - longitude: 103.89500000 -> 103.895
- `B9481034` Block 114 Edgefield Plains
  - latitude: 1.39567700 -> 1.396
  - longitude: 103.90735800 -> 103.907
- `B9481035` Block 128 Kim Tian Road
  - latitude: 1.28153500 -> 1.282
  - longitude: 103.82910000 -> 103.829
- `B9481036` SHENG SIONG BLK 108 MCNAIR ROAD 
  - latitude: 1.32180000 -> 1.322
  - longitude: 103.85950000 -> 103.859
- `B9481037` Block 308A Punggol Walk
  - latitude: 1.40644400 -> 1.406
  - longitude: 103.90081700 -> 103.901
- `B9481038` 672A Klang Lane - Little India
  - latitude: 1.30850300 -> 1.309
  - longitude: 103.85243100 -> 103.852
- `B9481039` Block 112A Bidadari Park Drive
  - latitude: 1.33535600 -> 1.335
  - longitude: 103.87327400 -> 103.873
- `B9481040` Resorts World Sentosa
  - latitude: 1.25591000 -> 1.256
  - longitude: 103.82014000 -> 103.820
- `B9481041` 225 Ang Mo Kio Ave 1
  - latitude: 1.36734900 -> 1.367
  - longitude: 103.83847900 -> 103.838
- `B9481042` 79/79A Circuit Road Hawker Centre
  - latitude: 1.32616100 -> 1.326
  - longitude: 103.88511200 -> 103.885
- `B9481043` Block 134 Edgedale Plains
  - latitude: 1.39285300 -> 1.393
  - longitude: 103.91011700 -> 103.910
- `B9481045` Punggol Way Dorm, Sharbesuwary Pte Ltd
  - latitude: 1.41767100 -> 1.418
  - longitude: 103.90727900 -> 103.907
- `B9481046` Sims Vista Market & Food Centre
  - latitude: 1.31709800 -> 1.317
  - longitude: 103.87937300 -> 103.879
- `B9481047` Masjid Sultan Mosque
  - latitude: 1.30214500 -> 1.302
  - longitude: 103.85936000 -> 103.859
- `B9481048` Block 101 Bidadari Park Drive
  - latitude: 1.33614900 -> 1.336
  - longitude: 103.87146400 -> 103.871
- `SGRVM0001` 168 Woodlands Street 11
  - latitude: 1.43297900 -> 1.433
  - longitude: 103.77641500 -> 103.776
- `SGRVM0002` 297C Choa Chu Kang Ave 2
  - latitude: 1.37777000 -> 1.378
  - longitude: 103.74317000 -> 103.743
- `SGRVM0003` 219 Choa Chu Kang Central
  - latitude: 1.38274000 -> 1.383
  - longitude: 103.74552000 -> 103.746
- `SGRVM0004` 454 Fajar Rd
  - latitude: 1.38460000 -> 1.385
  - longitude: 103.77131000 -> 103.771
- `SGRVM0005` 418 Fajar Rd
  - latitude: 1.38429000 -> 1.384
  - longitude: 103.76888000 -> 103.769
- `SGRVM0006` 319 Clementi Ave 4
  - latitude: 1.31750100 -> 1.318
  - longitude: 103.76480800 -> 103.765
- `SGRVM0007` 233 Pending Rd, #08-11
  - latitude: 1.37658000 -> 1.377
  - longitude: 103.77177000 -> 103.772
- `SGRVM0008` 145 Yishun Street 11
  - latitude: 1.43085000 -> 1.431
  - longitude: 103.83185000 -> 103.832
- `SGRVM0009` 213 Petir Rd
  - latitude: 1.37458100 -> 1.375
  - longitude: 103.77540600 -> 103.775
- `SGRVM0010` 708 Choa Chu Kang Street 53
  - latitude: 1.39160000 -> 1.392
  - longitude: 103.74697000 -> 103.747
- `SGRVM0011` 685C Choa Chu Kang Cres
  - latitude: 1.40342100 -> 1.403
  - longitude: 103.74861000 -> 103.749
- `SGRVM0012` 461 Segar Rd
  - latitude: 1.38705000 -> 1.387
  - longitude: 103.77100000 -> 103.771
- `SGRVM0013` 406 Fajar Rd
  - latitude: 1.38184000 -> 1.382
  - longitude: 103.76749000 -> 103.767
- `SGRVM0014` 175 Lompang Rd
  - latitude: 1.37981000 -> 1.380
  - longitude: 103.76596000 -> 103.766
- `SGRVM0015` 188 Bukit Batok West Ave 6
  - latitude: 1.34637300 -> 1.346
  - longitude: 103.74576500 -> 103.746
- `SGRVM0016` 234 Choa Chu Kang Central
  - latitude: 1.38019600 -> 1.380
  - longitude: 103.74835700 -> 103.748
- `SGRVM0017` 372 Jurong East Street 32
  - latitude: 1.34865000 -> 1.349
  - longitude: 103.73181000 -> 103.732
- `SGRVM0018` Kampung Admiralty Hawker Centre
  - latitude: 1.44010900 -> 1.440
  - longitude: 103.80067300 -> 103.801
- `SGRVM0019` 671 Yishun Avenue 4
  - latitude: 1.41910800 -> 1.419
  - longitude: 103.84139700 -> 103.841
- `SGRVM0020` 272 Bangkit Rd
  - latitude: 1.37745300 -> 1.377
  - longitude: 103.77474200 -> 103.775
- `SGRVM0021` 808B Choa Chu Kang Ave 1
  - latitude: 1.37563000 -> 1.376
  - longitude: 103.74579000 -> 103.746
- `SGRVM0022` 536 Choa Chu Kang Street 51
  - latitude: 1.39185000 -> 1.392
  - longitude: 103.74404000 -> 103.744
- `SGRVM0023` 677 Choa Chu Kang Cres
  - latitude: 1.43699300 -> 1.437
  - longitude: 103.77735700 -> 103.777
- `SGRVM0024` 527 Choa Chu Kang Street 51
  - latitude: 1.39188000 -> 1.392
  - longitude: 103.74145000 -> 103.741
- `SGRVM0025` 625 Choa Chu Kang Street 62
  - latitude: 1.39820100 -> 1.398
  - longitude: 103.74711400 -> 103.747
- `SGRVM0026` SHENG SIONG Woodlands Recreation Centre
  - latitude: 1.45089000 -> 1.451
  - longitude: 103.79690000 -> 103.797
- `SGRVM0027` 167 Petir Rd
  - latitude: 1.37763000 -> 1.378
  - longitude: 103.76476000 -> 103.765
- `SGRVM0028` 601 Choa Chu Kang Street 62
  - latitude: 1.39695000 -> 1.397
  - longitude: 103.74489000 -> 103.745
- `SGRVM0029` 486 Choa Chu Kang Ave 5
  - latitude: 1.37546200 -> 1.375
  - longitude: 103.73836200 -> 103.738
- `SGRVM0030` 760 Choa Chu Kang North 5
  - latitude: 1.39309000 -> 1.393
  - longitude: 103.74730000 -> 103.747
- `SGRVM0031` 162 Bukit Batok Street 11
  - latitude: 1.34828200 -> 1.348
  - longitude: 103.74805800 -> 103.748
- `SGRVM0032` Chennai Trading & Supermart - 1 Jalan Papan
  - latitude: 1.32051000 -> 1.321
  - longitude: 103.72710000 -> 103.727
- `SGRVM0033` 210 Bukit Batok Street 21
  - latitude: 1.34545600 -> 1.345
  - longitude: 103.74987300 -> 103.750
- `SGRVM0034` 214 Jurong East Street 21
  - latitude: 1.33928000 -> 1.339
  - longitude: 103.73894000 -> 103.739
- `SGRVM0035` 129 Pending Rd
  - latitude: 1.37570000 -> 1.376
  - longitude: 103.77042000 -> 103.770
- `SGRVM0036` 505 Choa Chu Kang Street 51
  - latitude: 1.38901000 -> 1.389
  - longitude: 103.74206300 -> 103.742
- `SGRVM0037` 437 Fajar Rd, Block 437
  - latitude: 1.38259000 -> 1.383
  - longitude: 103.76952000 -> 103.770
- `SGRVM0038` 493 Jurong West Street 41
  - latitude: 1.34901000 -> 1.349
  - longitude: 103.72489000 -> 103.725
- `SGRVM0039` 432 Choa Chu Kang Ave 4
  - latitude: 1.38465000 -> 1.385
  - longitude: 103.74179300 -> 103.742
- `SGRVM0040` 290 Choa Chu Kang Ave 3
  - latitude: 1.37883000 -> 1.379
  - longitude: 103.74039000 -> 103.740
- `SGRVM0041` 238 Bukit Batok East Ave 5
  - latitude: 1.34989700 -> 1.350
  - longitude: 103.75476400 -> 103.755
- `SGRVM0042` 296B Bukit Batok Street 22
  - latitude: 1.34384400 -> 1.344
  - longitude: 103.74747700 -> 103.747
- `SGRVM0043` 137 Teck Whye Ln
  - latitude: 1.37996400 -> 1.380
  - longitude: 103.75286900 -> 103.753
- `SGRVM0044` 473 Choa Chu Kang Ave 3
  - latitude: 1.37945100 -> 1.379
  - longitude: 103.73783300 -> 103.738
- `SGRVM0046` 164 Jln Teck Whye
  - latitude: 1.38131000 -> 1.381
  - longitude: 103.75640000 -> 103.756
- `SGRVM0047` 230 Choa Chu Kang Central
  - latitude: 1.38035700 -> 1.380
  - longitude: 103.74631000 -> 103.746
- `SGRVM0048` 290B Bukit Batok Street 24
  - latitude: 1.34373600 -> 1.344
  - longitude: 103.75665000 -> 103.757
- `SGRVM0049` 423 Choa Chu Kang Ave 4
  - latitude: 1.38208000 -> 1.382
  - longitude: 103.74037000 -> 103.740
- `SGRVM0050` 498 Jurong West Street 41
  - latitude: 1.34882000 -> 1.349
  - longitude: 103.72443000 -> 103.724
- `SGRVM0051` 639 Choa Chu Kang Street 64
  - latitude: 1.39774000 -> 1.398
  - longitude: 103.74904800 -> 103.749
- `SGRVM0052` 488B Choa Chu Kang Ave 5
  - latitude: 1.37706000 -> 1.377
  - longitude: 103.73933000 -> 103.739
- `SGRVM0053` 125 Bukit Batok Central
  - latitude: 1.35154100 -> 1.352
  - longitude: 103.74695200 -> 103.747
- `SGRVM0054` Giant Yishun Avenue 11
  - latitude: 1.42472000 -> 1.425
  - longitude: 103.84710000 -> 103.847
- `SGRVM0055` 334D Yishun Street 31
  - latitude: 1.43240000 -> 1.432
  - longitude: 103.84668000 -> 103.847
- `SGRVM0056` 454 Choa Chu Kang Ave 4
  - latitude: 1.37917000 -> 1.379
  - longitude: 103.73476400 -> 103.735
- `SGRVM0057` 818B Choa Chu Kang Ave 1
  - latitude: 1.37729000 -> 1.377
  - longitude: 103.74833000 -> 103.748
- `SGRVM0058` 426 Choa Chu Kang Ave 4
  - latitude: 1.38061600 -> 1.381
  - longitude: 103.73919100 -> 103.739
- `SGRVM0059` 562 Choa Chu Kang Street 52
  - latitude: 1.39622000 -> 1.396
  - longitude: 103.74579000 -> 103.746
- `SGRVM0060` 434 Bukit Panjang Ring Rd
  - latitude: 1.38539600 -> 1.385
  - longitude: 103.77049400 -> 103.770
- `SGRVM0061` 228 Bukit Batok Central,
  - latitude: 1.34870000 -> 1.349
  - longitude: 103.75376000 -> 103.754
- `SGRVM0062` 442 Choa Chu Kang Ave 4
  - latitude: 1.38094000 -> 1.381
  - longitude: 103.73768000 -> 103.738
- `SGRVM0063` 103 Bukit Batok Central
  - latitude: 1.35011900 -> 1.350
  - longitude: 103.74536600 -> 103.745
- `SGRVM0064` 517 Choa Chu Kang Street 51
  - latitude: 1.39072000 -> 1.391
  - longitude: 103.74296000 -> 103.743
- `SGRVM0065` 439 Yishun Ave 11, Singapore 760439
  - latitude: 1.42209100 -> 1.422
  - longitude: 103.84644500 -> 103.846
- `SGRVM0066` 340 Choa Chu Kang Loop
  - latitude: 1.38419200 -> 1.384
  - longitude: 103.74549000 -> 103.745
- `SGRVM0067` 464 Jurong West Street 41
  - latitude: 1.35035000 -> 1.350
  - longitude: 103.72234000 -> 103.722
- `SGRVM0068` 413 Saujana Rd
  - latitude: 1.38233400 -> 1.382
  - longitude: 103.76854900 -> 103.769
- `SGRVM0069` 169 Bukit Batok West Ave 8
  - latitude: 1.34674200 -> 1.347
  - longitude: 103.74083300 -> 103.741
- `SGRVM0070` 764 Jurong West Street 74
  - latitude: 1.34946000 -> 1.349
  - longitude: 103.69842000 -> 103.698
- `SGRVM0071` 550 Choa Chu Kang Street 52
  - latitude: 1.39406500 -> 1.394
  - longitude: 103.74272200 -> 103.743
- `SGRVM0072` 251 Bangkit Rd,
  - latitude: 1.38016000 -> 1.380
  - longitude: 103.77368000 -> 103.774
- `SGRVM0073` 308 Jurong East Street 32
  - latitude: 1.34732000 -> 1.347
  - longitude: 103.73444900 -> 103.734
- `SGRVM0074` 308 Bukit Batok Street 31
  - latitude: 1.35747200 -> 1.357
  - longitude: 103.74797200 -> 103.748
- `SGRVM0075` 242 Bukit Panjang Ring Rd
  - latitude: 1.38022900 -> 1.380
  - longitude: 103.77215000 -> 103.772
- `SGRVM0076` SHENG SIONG 18 YISHUN AVE 9,  JUNCTION NINE
  - latitude: 1.43314000 -> 1.433
  - longitude: 103.84170000 -> 103.842
- `SGRVM0077` Prime Supermarket 678A Woodlands Avenue 6
  - latitude: 1.44041000 -> 1.440
  - longitude: 103.80160000 -> 103.802
- `SGRVM0078` 320 Jurong East Street 31
  - latitude: 1.34843900 -> 1.348
  - longitude: 103.73100300 -> 103.731
- `SGRVM0079` 316 Jurong East Street 32
  - latitude: 1.34705000 -> 1.347
  - longitude: 103.73216000 -> 103.732
- `SGRVM0080` 340 Jurong East Ave 1
  - latitude: 1.35027900 -> 1.350
  - longitude: 103.73066500 -> 103.731
- `SGRVM0081` Prime Supermarket Blk 761 Yishun
  - latitude: 1.42512000 -> 1.425
  - longitude: 103.83330000 -> 103.833
- `SGRVM0082` 475 Jurong West Street 41
  - latitude: 1.34683100 -> 1.347
  - longitude: 103.72443300 -> 103.724
- `SGRVM0083` 458 Jurong West Street 41
  - latitude: 1.35021900 -> 1.350
  - longitude: 103.71986100 -> 103.720
- `SGRVM0084` 461A Bukit Batok West Ave 8
  - latitude: 1.35535000 -> 1.355
  - longitude: 103.74009000 -> 103.740
- `SGRVM0085` 330 Clementi Ave 2
  - latitude: 1.31374300 -> 1.314
  - longitude: 103.76782800 -> 103.768
- `SGRVM0086` 435C Bukit Batok West Ave. 5
  - latitude: 1.35837600 -> 1.358
  - longitude: 103.74009300 -> 103.740
- `SGRVM0087` 317 Jurong East Street 31
  - latitude: 1.34687000 -> 1.347
  - longitude: 103.73124000 -> 103.731
- `SGRVM0088` 248 Bukit Batok East Avenue 5
  - latitude: 1.35032800 -> 1.350
  - longitude: 103.75648200 -> 103.756
- `SGRVM0089` 369 Bukit Batok Street 31
  - latitude: 1.36001000 -> 1.360
  - longitude: 103.75039300 -> 103.750
- `SGRVM0090` 325 Jurong East Street 31
  - latitude: 1.34881000 -> 1.349
  - longitude: 103.72894000 -> 103.729
- `SGRVM0091` 288D Bukit Batok Street 25
  - latitude: 1.34581000 -> 1.346
  - longitude: 103.75910000 -> 103.759
- `SGRVM0092` 350 Bukit Batok Street 34
  - latitude: 1.36171800 -> 1.362
  - longitude: 103.74914600 -> 103.749
- `SGRVM0093` 480 Jurong West Street 41
  - latitude: 1.34732000 -> 1.347
  - longitude: 103.72400000 -> 103.724
- `SGRVM0094` 15 Teck Whye Ln
  - latitude: 1.37910500 -> 1.379
  - longitude: 103.75440200 -> 103.754
- `SGRVM0095` 138 Bukit Batok West Ave 6
  - latitude: 1.35055100 -> 1.351
  - longitude: 103.74441600 -> 103.744
- `SGRVM0096` 181 Jelebu Rd
  - latitude: 1.37931000 -> 1.379
  - longitude: 103.76291000 -> 103.763
- `SGRVM0097` 164 Bukit Batok Street 11
  - latitude: 1.34774000 -> 1.348
  - longitude: 103.74281000 -> 103.743
- `SGRVM0098` Giant Khatib MRT
  - latitude: 1.41695000 -> 1.417
  - longitude: 103.83280000 -> 103.833
- `SGRVM0099` FairPrice Wisteria Mall
  - latitude: 1.41835000 -> 1.418
  - longitude: 103.84110000 -> 103.841
- `SGRVM0100` Cold Storage West Mall
  - latitude: 1.35005000 -> 1.350
  - longitude: 103.74920000 -> 103.749
- `SGRVM0101` SCARLETT@WESTGATE
  - latitude: 1.33450000 -> 1.335
  - longitude: 103.74260000 -> 103.743
- `SGRVM0102` SCARLETT@SUN PLAZA
  - latitude: 1.44827000 -> 1.448
  - longitude: 103.81970000 -> 103.820
- `SGRVM0103` FairPrice Blk 166 Bukit Batok West Avenue 8
  - latitude: 1.34733000 -> 1.347
  - longitude: 103.74310000 -> 103.743
- `SGRVM0104` 274 Choa Chu Kang Ave 2
  - latitude: 1.37937000 -> 1.379
  - longitude: 103.74282000 -> 103.743
- `SGRVM0105` 757 Yishun Street 72 
  - latitude: 1.42658500 -> 1.427
  - longitude: 103.83406000 -> 103.834
- `SGRVM0106` Cold Storage Rail Mall
  - latitude: 1.36019500 -> 1.360
  - longitude: 103.76763400 -> 103.768
- `SGRVM0107` 636 Yishun Street 61
  - latitude: 1.41965500 -> 1.420
  - longitude: 103.83906700 -> 103.839
- `SGRVM0108` SHENG SIONG BLK 292 BUKIT BATOK EAST AVE 6 
  - latitude: 1.34440000 -> 1.344
  - longitude: 103.75500000 -> 103.755
- `SGRVM0109` U STARS @507 Yishun Ave 4
  - latitude: 1.41555000 -> 1.416
  - longitude: 103.83970000 -> 103.840
- `SGRVM0110` FairPrice Sembawang Shopping Centre
  - latitude: 1.44161000 -> 1.442
  - longitude: 103.82460000 -> 103.825
- `SGRVM0111` FairPrice Blk 849 Yishun Ring Road
  - latitude: 1.41698000 -> 1.417
  - longitude: 103.83540000 -> 103.835
- `SGRVM0112` SHENG SIONG BLK 643 SENJA CLOSE
  - latitude: 1.38788000 -> 1.388
  - longitude: 103.76310000 -> 103.763
- `SGRVM0113` 120A Canberra Crescent
  - latitude: 1.44600700 -> 1.446
  - longitude: 103.83225600 -> 103.832
- `SGRVM0114` 654 Yishun Avenue 4
  - latitude: 1.42298400 -> 1.423
  - longitude: 103.84049700 -> 103.840
- `SGRVM0115` Giant Woodlands North
  - latitude: 1.44266000 -> 1.443
  - longitude: 103.79070000 -> 103.791
- `SGRVM0116` Giant Woodlands Mart
  - latitude: 1.44560000 -> 1.446
  - longitude: 103.79800000 -> 103.798
- `SGRVM0117` Bazaar Terusan Recreation Centre
  - latitude: 1.32051000 -> 1.321
  - longitude: 103.72710000 -> 103.727
- `SGRVM0118` FairPrice Causeway Point
  - latitude: 1.43609000 -> 1.436
  - longitude: 103.78590000 -> 103.786
- `SGRVM0119` 112 Teck Whye Ln
  - latitude: 1.37764500 -> 1.378
  - longitude: 103.75233400 -> 103.752
- `SGRVM0120` Cold Storage Hill View
  - latitude: 1.36294000 -> 1.363
  - longitude: 103.76420000 -> 103.764
- `SGRVM0121` ANG MO SUPERMARKET-693 WOODLANDS AVE 6
  - latitude: 1.43807000 -> 1.438
  - longitude: 103.80380000 -> 103.804
- `SGRVM0122` 950 Jurong West Street 91
  - latitude: 1.34299000 -> 1.343
  - longitude: 103.69133000 -> 103.691
- `SGRVM0123` FairPrice Northpoint City
  - latitude: 1.42832000 -> 1.428
  - longitude: 103.83610000 -> 103.836
- `SGRVM0124` BISMILLAH MINIMART 32 MANDAI
  - latitude: 1.40766500 -> 1.408
  - longitude: 103.75571400 -> 103.756
- `SGRVM0125` FairPrice 498 Jurong West St 41
  - latitude: 1.34865000 -> 1.349
  - longitude: 103.72430000 -> 103.724
- `SGRVM0126` FairPrice Lot 1
  - latitude: 1.38511000 -> 1.385
  - longitude: 103.74490000 -> 103.745
- `SGRVM0127` Ajmal Trade Mart -  Kranji Lodge One
  - latitude: 1.43167000 -> 1.432
  - longitude: 103.75990000 -> 103.760
- `SGRVM0128` FairPrice Woodlands Ave 1
  - latitude: 1.43081000 -> 1.431
  - longitude: 103.79090000 -> 103.791
- `SGRVM0130` SHENG SIONG BLK 420A CLEMENTI AVE 1 
  - latitude: 1.30951000 -> 1.310
  - longitude: 103.76840000 -> 103.768
- `SGRVM0131` Giant 256 Bangkit Road
  - latitude: 1.37917000 -> 1.379
  - longitude: 103.77290000 -> 103.773
- `SGRVM0132` SHENG SIONG BLK 182 WOODLANDS ST 13 
  - latitude: 1.43531000 -> 1.435
  - longitude: 103.77580000 -> 103.776
- `SGRVM0133` 771 Yishun Ave 3
  - latitude: 1.42396000 -> 1.424
  - longitude: 103.83260000 -> 103.833
- `SGRVM0134` FairPrice Jurong Point
  - latitude: 1.33962000 -> 1.340
  - longitude: 103.70520000 -> 103.705
- `SGRVM0135` FairPrice Hillion Mall
  - latitude: 1.37851000 -> 1.379
  - longitude: 103.76300000 -> 103.763
- `SGRVM0136` 213 Yishun Street 21
  - latitude: 1.43184900 -> 1.432
  - longitude: 103.83633000 -> 103.836
- `SGRVM0137` Giant Admiralty MRT
  - latitude: 1.44059000 -> 1.441
  - longitude: 103.80100000 -> 103.801
- `SGRVM0138` FairPrice Kampung Admiratly
  - latitude: 1.43988000 -> 1.440
  - longitude: 103.80070000 -> 103.801
- `SGRVM0139` Don Don Donki (Jurong Point)
  - latitude: 1.33971000 -> 1.340
  - longitude: 103.70690000 -> 103.707
- `SGRVM0140` FairPrice Bukit Batok MRT
  - latitude: 1.34873000 -> 1.349
  - longitude: 103.74930000 -> 103.749
- `SGRVM0141` 676C Yishun Ring Rd
  - latitude: 1.42154000 -> 1.422
  - longitude: 103.84228000 -> 103.842
- `SGRVM0142` 365 Yishun Ring Rd
  - latitude: 1.42925000 -> 1.429
  - longitude: 103.84519000 -> 103.845
- `SGRVM0143` Giant Bukit Batok Street 31
  - latitude: 1.35865000 -> 1.359
  - longitude: 103.74930000 -> 103.749
- `SGRVM0144` Giant Kranji MRT
  - latitude: 1.42524000 -> 1.425
  - longitude: 103.76200000 -> 103.762
- `SGRVM0145` SHENG SIONG BLK 471B YISHUN STREET 42
  - latitude: 1.42625000 -> 1.426
  - longitude: 103.85250000 -> 103.853
- `SGRVM0146` 406 Yishun Ave 6, Singapore 760406
  - latitude: 1.42608000 -> 1.426
  - longitude: 103.84928600 -> 103.849
- `SGRVM0147` FairPrice Le Quest
  - latitude: 1.35574000 -> 1.356
  - longitude: 103.74090000 -> 103.741
- `SGRVM0148` SHENG SIONG BLK 202 MARSILING DRIVE 
  - latitude: 1.44319000 -> 1.443
  - longitude: 103.77520000 -> 103.775
- `SGRVM0149` SHENG SIONG BLK 785E WOODLANDS RISE 
  - latitude: 1.44686000 -> 1.447
  - longitude: 103.80560000 -> 103.806
- `SGRVM0150` SHENG SIONG BLK 4 WOODLANDS ST 12 
  - latitude: 1.43338000 -> 1.433
  - longitude: 103.77980000 -> 103.780
- `SGRVM0151` 379 Clementi Ave 5
  - latitude: 1.31790900 -> 1.318
  - longitude: 103.76779600 -> 103.768
- `SGRVM0152` FairPrice Bukit Batok Home TeamNS
  - latitude: 1.36581000 -> 1.366
  - longitude: 103.75020000 -> 103.750
- `SGRVM0153` FairPrice Blk 345 Jurong East Street 31
  - latitude: 1.34553000 -> 1.346
  - longitude: 103.73120000 -> 103.731
- `SGRVM0154` SHENG SIONG 3 YUAN CHING ROAD 
  - latitude: 1.32563000 -> 1.326
  - longitude: 103.72510000 -> 103.725
- `SGRVM0155` FairPrice Hub
  - latitude: 1.32588000 -> 1.326
  - longitude: 103.67840000 -> 103.678
- `SGRVM0156` FairPrice Woodgrove
  - latitude: 1.42895000 -> 1.429
  - longitude: 103.78110000 -> 103.781
- `SGRVM0157` Prime Supermarket Sembawang Crescent
  - latitude: 1.44468000 -> 1.445
  - longitude: 103.81590000 -> 103.816
- `SGRVM0158` 477 Sembawang Drive
  - latitude: 1.45209700 -> 1.452
  - longitude: 103.81667300 -> 103.817
- `SGRVM0159` Don Don Donki (Northpoint City)
  - latitude: 1.42934000 -> 1.429
  - longitude: 103.83590000 -> 103.836
- `SGRVM0160` SHENG SIONG BLK 547 SEGAR RD
  - latitude: 1.38802000 -> 1.388
  - longitude: 103.76980000 -> 103.770
- `SGRVM0161` Chap He Diam Migrant Worker's Recreation Centre
  - latitude: 1.33235000 -> 1.332
  - longitude: 103.69890000 -> 103.699
- `SGRVM0162` SHENG SIONG 7 JURONG WEST AVE 5 
  - latitude: 1.34878000 -> 1.349
  - longitude: 103.70330000 -> 103.703
- `SGRVM0163` FairPrice Marsiling MRT
  - latitude: 1.43252000 -> 1.433
  - longitude: 103.77440000 -> 103.774
- `SGRVM0164` 935 Yishun Central 1
  - latitude: 1.42517300 -> 1.425
  - longitude: 103.83680000 -> 103.837
- `SGRVM0165` FairPrice Blk 414 Yishun Ring Road
  - latitude: 1.42454000 -> 1.425
  - longitude: 103.84660000 -> 103.847
- `SGRVM0166` Prime Supermarket NTU Students Walk
  - latitude: 1.34813000 -> 1.348
  - longitude: 103.68540000 -> 103.685
- `SGRVM0167` Nawas Global - Tuas South Dormitory
  - latitude: 1.27164000 -> 1.272
  - longitude: 103.63350000 -> 103.633
- `SGRVM0168` Ajmal Super Market - Tuas View Dormitory
  - latitude: 1.31476000 -> 1.315
  - longitude: 103.62660000 -> 103.627
- `SGRVM0169` SHENG SIONG BLK 675 YISHUN AVENUE 4
  - latitude: 1.42036000 -> 1.420
  - longitude: 103.84360000 -> 103.844
- `SGRVM0170` FairPrice Clementi Ave 2 Shopping Centre
  - latitude: 1.31448000 -> 1.314
  - longitude: 103.77130000 -> 103.771
- `SGRVM0171` FairPrice Woodlands Civic Centre
  - latitude: 1.43490000 -> 1.435
  - longitude: 103.78680000 -> 103.787
- `SGRVM0172` 701 Yishun Ave 5
  - latitude: 1.42999900 -> 1.430
  - longitude: 103.82871900 -> 103.829
- `SGRVM0173` FairPrice Senja Grand
  - latitude: 1.38505000 -> 1.385
  - longitude: 103.76040000 -> 103.760
- `SGRVM0174` 726 Yishun Street 71
  - latitude: 1.42666000 -> 1.427
  - longitude: 103.83085000 -> 103.831
- `SGRVM0175` 641 Yishun Street 61
  - latitude: 1.42083000 -> 1.421
  - longitude: 103.83831100 -> 103.838
- `SGRVM0176` SHENG SIONG BLK 154A BUKIT BATOK WEST AVE 8 
  - latitude: 1.34726000 -> 1.347
  - longitude: 103.74390000 -> 103.744
- `SGRVM0177` U STARS @691 Woodlands Drive
  - latitude: 1.44049000 -> 1.440
  - longitude: 103.80630000 -> 103.806
- `SGRVM0178` FairPrice Finest Clementi Mall
  - latitude: 1.31517000 -> 1.315
  - longitude: 103.76420000 -> 103.764
- `SGRVM0179` SHENG SIONG BLK 451 BUKIT BATOK WEST AVENUE 6 
  - latitude: 1.35300000 -> 1.353
  - longitude: 103.74350000 -> 103.743
- `SGRVM0180` SHENG SIONG BLK 159 BUKIT BATOK STREET 11 
  - latitude: 1.34849000 -> 1.348
  - longitude: 103.74270000 -> 103.743
- `SGRVM0181` SHENG SIONG BLK 573 WOODLANDS DRIVE 16 
  - latitude: 1.43094000 -> 1.431
  - longitude: 103.79850000 -> 103.799
- `SGRVM0182` 423 Canberra Rd
  - latitude: 1.45371400 -> 1.454
  - longitude: 103.81820500 -> 103.818
- `SGRVM0183` Giant Admiralty Drive
  - latitude: 1.44994000 -> 1.450
  - longitude: 103.81430000 -> 103.814
- `SGRVM0184` FairPrice Dairy Farm Residences
  - latitude: 1.36546000 -> 1.365
  - longitude: 103.77500000 -> 103.775
- `SGRVM0185` FORTUNE SUPERMARKET 463
  - latitude: 1.45561000 -> 1.456
  - longitude: 103.81470000 -> 103.815
- `SGRVM0186` Giant Vista Point
  - latitude: 1.43138000 -> 1.431
  - longitude: 103.79380000 -> 103.794
- `SGRVM0187` SHENG SIONG BLK 240 TENGAH GARDEN WALK 
  - latitude: 1.36056000 -> 1.361
  - longitude: 103.73200000 -> 103.732
- `SGRVM0188` FairPrice Senja Heights
  - latitude: 1.38776000 -> 1.388
  - longitude: 103.76140000 -> 103.761
- `SGRVM0189` FairPrice Greenridge
  - latitude: 1.38537000 -> 1.385
  - longitude: 103.76630000 -> 103.766
- `SGRVM0190` Prime Supermarket NTU Spine Hub
  - latitude: 1.34522000 -> 1.345
  - longitude: 103.68120000 -> 103.681
- `SGRVM0191` SHENG SIONG BLK 105 CANBERRA STREET 
  - latitude: 1.44883000 -> 1.449
  - longitude: 103.83240000 -> 103.832
- `SGRVM0192` FairPrice Blk 355 Sembawang Way
  - latitude: 1.44957000 -> 1.450
  - longitude: 103.81900000 -> 103.819
- `SGRVM0193` 721 Yishun Street 71
  - latitude: 1.42610600 -> 1.426
  - longitude: 103.82891000 -> 103.829
- `SGRVM0194` Giant Pioneer Mall
  - latitude: 1.34186000 -> 1.342
  - longitude: 103.69740000 -> 103.697
- `SGRVM0195` SHENG SIONG BLK 209A CLEMENTI AVE 6 
  - latitude: 1.32208000 -> 1.322
  - longitude: 103.76380000 -> 103.764
- `SGRVM0196` Prime Supermarket Yishun Avenue 6
  - latitude: 1.42885000 -> 1.429
  - longitude: 103.85050000 -> 103.850
- `SGRVM0197` 207 Boon Lay Place
  - latitude: 1.34668300 -> 1.347
  - longitude: 103.71359200 -> 103.714
- `SGRVM0198` Bazaar Westlite Toh Guan Dormitory
  - latitude: 1.32866900 -> 1.329
  - longitude: 103.74986200 -> 103.750
- `SGRVM0199` 462 Sembawang Drive 
  - latitude: 1.45477500 -> 1.455
  - longitude: 103.81397800 -> 103.814
- `SGRVM0200` FairPrice Sun Plaza
  - latitude: 1.44826000 -> 1.448
  - longitude: 103.81970000 -> 103.820
- `SGRVM0201` 715 Jurong West Street 71
  - latitude: 1.34389000 -> 1.344
  - longitude: 103.69639000 -> 103.696
- `SGRVM0202` 745 Yishun Street 72
  - latitude: 1.42935000 -> 1.429
  - longitude: 103.83317000 -> 103.833
- `SGRVM0203` TUAS SOUTH MINIMART
  - latitude: 1.27231800 -> 1.272
  - longitude: 103.63449900 -> 103.634
- `SGRVM0204` 483 Admiralty Link
  - latitude: 1.45609100 -> 1.456
  - longitude: 103.81542300 -> 103.815
- `SGRVM0205` 106A Canberra Street
  - latitude: 1.44846100 -> 1.448
  - longitude: 103.83312400 -> 103.833
- `SGRVM0206` 589 Woodlands Drive 16
  - latitude: 1.42809000 -> 1.428
  - longitude: 103.79552300 -> 103.796
- `SGRVM0207` 718 Woodlands Ave 6
  - latitude: 1.44168000 -> 1.442
  - longitude: 103.80106800 -> 103.801
- `SGRVM0208` 746 Jurong West Street 73
  - latitude: 1.34747700 -> 1.347
  - longitude: 103.69793300 -> 103.698
- `SGRVM0209` 153 Yung Ho Rd
  - latitude: 1.32756000 -> 1.328
  - longitude: 103.72105000 -> 103.721
- `SGRVM0210` 678D Jurong West Street 64
  - latitude: 1.34489200 -> 1.345
  - longitude: 103.70331000 -> 103.703
- `SGRVM0211` 7 Seven Trichy Supermarket North Coast Lodge
  - latitude: 1.45610000 -> 1.456
  - longitude: 103.78730000 -> 103.787
- `SGRVM0212` 931 Jurong West Street 92
  - latitude: 1.34030200 -> 1.340
  - longitude: 103.68933700 -> 103.689
- `SGRVM0213` 678A Jurong West Street 64 
  - latitude: 1.34507000 -> 1.345
  - longitude: 103.70421900 -> 103.704
- `SGRVM0214` Taman Jurong Market & Food Centre
  - latitude: 1.33485300 -> 1.335
  - longitude: 103.72206700 -> 103.722
- `SGRVM0215` 255 Yishun Ring Rd
  - latitude: 1.43430000 -> 1.434
  - longitude: 103.84062000 -> 103.841
- `SGRVM0216` 277 Yishun Street 22
  - latitude: 1.43800300 -> 1.438
  - longitude: 103.83690700 -> 103.837
- `SGRVM0217` SHENG SIONG BLK 503 JURONG WEST AVE 1
  - latitude: 1.35007000 -> 1.350
  - longitude: 103.71800000 -> 103.718
- `SGRVM0218` 831 Jurong West Street 81
  - latitude: 1.34510000 -> 1.345
  - longitude: 103.69459000 -> 103.695
- `SGRVM0219` 573B Woodlands Drive 16
  - latitude: 1.43091100 -> 1.431
  - longitude: 103.79777600 -> 103.798
- `SGRVM0221` 907 Jurong West Street 91
  - latitude: 1.34107000 -> 1.341
  - longitude: 103.68596000 -> 103.686
- `SGRVM0222` FORTUNE SUPERMARKET 780
  - latitude: 1.44809000 -> 1.448
  - longitude: 103.80090000 -> 103.801
- `SGRVM0223` 353 Kang Ching Rd
  - latitude: 1.33971000 -> 1.340
  - longitude: 103.72079000 -> 103.721
- `SGRVM0224` 735 Jurong West Street 75
  - latitude: 1.34593200 -> 1.346
  - longitude: 103.70076100 -> 103.701
- `SGRVM0225` Prime Supermarket Jurong West Street 91
  - latitude: 1.34198000 -> 1.342
  - longitude: 103.69170000 -> 103.692
- `SGRVM0226` FairPrice 888 Plaza
  - latitude: 1.43864000 -> 1.439
  - longitude: 103.79530000 -> 103.795
- `SGRVM0227` 359 Yung An Rd
  - latitude: 1.33822000 -> 1.338
  - longitude: 103.71961000 -> 103.720
- `SGRVM0228` 736 Yishun Street 72
  - latitude: 1.42884400 -> 1.429
  - longitude: 103.83163400 -> 103.832
- `SGRVM0229` 140 Corporation Drive
  - latitude: 1.32686000 -> 1.327
  - longitude: 103.72339000 -> 103.723
- `SGRVM0230` 236 Yishun Ring Rd
  - latitude: 1.43397000 -> 1.434
  - longitude: 103.83920000 -> 103.839
- `SGRVM0231` Ajmal Trading Group - Kranji Recreation Centre
  - latitude: 1.42900000 -> 1.429
  - longitude: 103.75270000 -> 103.753
- `SGRVM0232` 417 Canberra Rd
  - latitude: 1.45243500 -> 1.452
  - longitude: 103.81927900 -> 103.819
- `SGRVM0233` 291 Yishun Street 22
  - latitude: 1.43626000 -> 1.436
  - longitude: 103.83673000 -> 103.837
- `SGRVM0234` 610 Yishun Street 61
  - latitude: 1.42049700 -> 1.420
  - longitude: 103.83651000 -> 103.837
- `SGRVM0235` SCARLETT @ CLEMENTI
  - latitude: 1.31446000 -> 1.314
  - longitude: 103.76510000 -> 103.765
- `SGRVM0236` 101 Yishun Ave 5
  - latitude: 1.43047000 -> 1.430
  - longitude: 103.82736000 -> 103.827
- `SGRVM0237` 108 Yishun Ring Rd 
  - latitude: 1.43236200 -> 1.432
  - longitude: 103.82903500 -> 103.829
- `SGRVM0238` 668A Jurong West Street 64
  - latitude: 1.34198100 -> 1.342
  - longitude: 103.70275500 -> 103.703
- `SGRVM0239` FairPrice Taman Jurong Shopping Centre
  - latitude: 1.33466000 -> 1.335
  - longitude: 103.72010000 -> 103.720
- `SGRVM0240` 309 Yishun Ring Rd
  - latitude: 1.43209000 -> 1.432
  - longitude: 103.84035000 -> 103.840
- `SGRVM0241` 762 Yishun Street 72
  - latitude: 1.42568000 -> 1.426
  - longitude: 103.83426000 -> 103.834
- `SGRVM0242` 876 Woodlands Ave 9
  - latitude: 1.44480800 -> 1.445
  - longitude: 103.79054100 -> 103.791
- `SGRVM0243` 120 Yishun Ring Rd
  - latitude: 1.43490000 -> 1.435
  - longitude: 103.82940000 -> 103.829
- `SGRVM0244` 708 Woodlands Drive 70
  - latitude: 1.44005000 -> 1.440
  - longitude: 103.79731200 -> 103.797
- `SGRVM0245` 604 Yishun Street 61
  - latitude: 1.42167700 -> 1.422
  - longitude: 103.83550400 -> 103.836
- `SGRVM0246` 334 Sembawang Close
  - latitude: 1.44739600 -> 1.447
  - longitude: 103.81604700 -> 103.816
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory
  - latitude: 1.46143000 -> 1.461
  - longitude: 103.80950000 -> 103.809
- `SGRVM0248` 260 Boon Lay Dr
  - latitude: 1.34515700 -> 1.345
  - longitude: 103.70801900 -> 103.708
- `SGRVM0249` 104 Bukit Batok Central, Block 104
  - latitude: 1.34902000 -> 1.349
  - longitude: 103.74730000 -> 103.747
- `SGRVM0250` 150 Yishun Street 11
  - latitude: 1.43084000 -> 1.431
  - longitude: 103.83362000 -> 103.834
- `SGRVM0251` 682C Woodlands Drive 73
  - latitude: 1.44066000 -> 1.441
  - longitude: 103.80435000 -> 103.804
- `SGRVM0252` 784C Woodlands Rise 
  - latitude: 1.44593100 -> 1.446
  - longitude: 103.80530500 -> 103.805
- `SGRVM0253` 115A Ho Ching Rd
  - latitude: 1.33435000 -> 1.334
  - longitude: 103.72451000 -> 103.725
- `SGRVM0254` 690F Woodlands Drive 75
  - latitude: 1.44260500 -> 1.443
  - longitude: 103.80749400 -> 103.807
- `SGRVM0255` 653A Jurong West Street 61
  - latitude: 1.33696000 -> 1.337
  - longitude: 103.69671000 -> 103.697
- `SGRVM0256` 771 Choa Chu Kang Street 54
  - latitude: 1.39447000 -> 1.394
  - longitude: 103.74923000 -> 103.749
- `SGRVM0257` 862 Woodlands Street 83
  - latitude: 1.43999200 -> 1.440
  - longitude: 103.79504900 -> 103.795
- `SGRVM0258` 656 Woodlands Ring Rd
  - latitude: 1.43703000 -> 1.437
  - longitude: 103.79921300 -> 103.799
- `SGRVM0259` 228 Yishun Street 21
  - latitude: 1.43541200 -> 1.435
  - longitude: 103.83758200 -> 103.838
- `SGRVM0260` 356A Admiralty Drive
  - latitude: 1.44947300 -> 1.449
  - longitude: 103.81696500 -> 103.817
- `SGRVM0261` 165 Yishun Ring Rd
  - latitude: 1.43567000 -> 1.436
  - longitude: 103.83161000 -> 103.832
- `SGRVM0262` 528 Jurong West Street 52
  - latitude: 1.34837000 -> 1.348
  - longitude: 103.71701000 -> 103.717
- `SGRVM0263` 552 Woodlands Drive 44
  - latitude: 1.43226200 -> 1.432
  - longitude: 103.79534900 -> 103.795
- `SGRVM0264` 657 Choa Chu Kang Cres
  - latitude: 1.40046200 -> 1.400
  - longitude: 103.74973900 -> 103.750
- `SGRVM0265` 115 Yishun Ring Rd
  - latitude: 1.43450200 -> 1.435
  - longitude: 103.82803700 -> 103.828
- `SGRVM0266` 351B Canberra Road
  - latitude: 1.45083000 -> 1.451
  - longitude: 103.82002800 -> 103.820
- `SGRVM0267` 216 Boon Lay Ave
  - latitude: 1.35047000 -> 1.350
  - longitude: 103.71221000 -> 103.712
- `SGRVM0268` 551 Jurong West Street 42
  - latitude: 1.35240000 -> 1.352
  - longitude: 103.71696000 -> 103.717
- `SGRVM0269` 792 Woodlands Ave 6 
  - latitude: 1.44197000 -> 1.442
  - longitude: 103.80229000 -> 103.802
- `SGRVM0270` 611 Woodlands Ring Rd
  - latitude: 1.43548400 -> 1.435
  - longitude: 103.79692800 -> 103.797
- `SGRVM0271` 126 Yishun Street 11
  - latitude: 1.43353000 -> 1.434
  - longitude: 103.83009000 -> 103.830
- `SGRVM0272` 625 Jurong West Street 61
  - latitude: 1.34158700 -> 1.342
  - longitude: 103.69864300 -> 103.699
- `SGRVM0273` 190 Boon Lay Dr
  - latitude: 1.34515300 -> 1.345
  - longitude: 103.71188200 -> 103.712
- `SGRVM0274` 690A Choa Chu Kang Cres
  - latitude: 1.40291500 -> 1.403
  - longitude: 103.75155500 -> 103.752
- `SGRVM0275` 2 Marsiling Dr
  - latitude: 1.43992600 -> 1.440
  - longitude: 103.77612100 -> 103.776
- `SGRVM0276` 272B Jurong West Street 24
  - latitude: 1.35064400 -> 1.351
  - longitude: 103.70497800 -> 103.705
- `SGRVM0277` 836 Woodlands Street 83
  - latitude: 1.44029000 -> 1.440
  - longitude: 103.79191000 -> 103.792
- `SGRVM0278` 756 Woodlands Ave 4 
  - latitude: 1.44572100 -> 1.446
  - longitude: 103.79305400 -> 103.793
- `SGRVM0279` 8 Marsiling Drive
  - latitude: 1.44135200 -> 1.441
  - longitude: 103.77721100 -> 103.777
- `SGRVM0280` Prime Supermarket Bukit Batok Street 31
  - latitude: 1.35884000 -> 1.359
  - longitude: 103.75050000 -> 103.751
- `SGRVM0281` 671A Choa Chu Kang Cres
  - latitude: 1.40213100 -> 1.402
  - longitude: 103.74789300 -> 103.748
- `SGRVM0282` FairPrice Blk 135 Jurong Gateway Road
  - latitude: 1.33408000 -> 1.334
  - longitude: 103.74040000 -> 103.740
- `SGRVM0283` Prime Supermarket Blk 142 Teck Whye Lane
  - latitude: 1.38080000 -> 1.381
  - longitude: 103.75200000 -> 103.752
- `SGRVM0284` 311 Canberra Rd
  - latitude: 1.44662000 -> 1.447
  - longitude: 103.82258000 -> 103.823
- `SGRVM0285` 782B Woodlands Cres
  - latitude: 1.44731000 -> 1.447
  - longitude: 103.80298000 -> 103.803
- `SGRVM0286` 286 Yishun Ave 6
  - latitude: 1.43985000 -> 1.440
  - longitude: 103.83830000 -> 103.838
- `SGRVM0287` 846 Woodlands Ave 4
  - latitude: 1.44354500 -> 1.444
  - longitude: 103.79348500 -> 103.793
- `SGRVM0288` 201 Marsiling Dr
  - latitude: 1.44269800 -> 1.443
  - longitude: 103.77542100 -> 103.775
- `SGRVM0289` 610 Choa Chu Kang Street 62
  - latitude: 1.39945000 -> 1.399
  - longitude: 103.74354500 -> 103.744
- `SGRVM0290` 674A Jurong West Street 65
  - latitude: 1.34478200 -> 1.345
  - longitude: 103.70218400 -> 103.702
- `SGRVM0291` 682A Jurong West Central 1
  - latitude: 1.34402600 -> 1.344
  - longitude: 103.70543500 -> 103.705
- `SGRVM0292` 134 Marsiling Rd
  - latitude: 1.43680000 -> 1.437
  - longitude: 103.77736000 -> 103.777
- `SGRVM0293` 184 Yung Sheng Rd
  - latitude: 1.33336000 -> 1.333
  - longitude: 103.72218500 -> 103.722
- `SGRVM0294` 770 Woodlands Drive 60
  - latitude: 1.44665400 -> 1.447
  - longitude: 103.79856200 -> 103.799
- `SGRVM0295` 205 Marsiling Dr
  - latitude: 1.44498000 -> 1.445
  - longitude: 103.77346000 -> 103.773
- `SGRVM0296` 274B Jurong West Street 25
  - latitude: 1.35281800 -> 1.353
  - longitude: 103.70315000 -> 103.703
- `SGRVM0297` 337B Tah Ching Rd
  - latitude: 1.33746000 -> 1.337
  - longitude: 103.72242000 -> 103.722
- `SGRVM0298` 638 Woodlands Ring Rd
  - latitude: 1.43684400 -> 1.437
  - longitude: 103.80320600 -> 103.803
- `SGRVM0299` 668 Choa Chu Kang Cres
  - latitude: 1.40187200 -> 1.402
  - longitude: 103.74946900 -> 103.749
- `SGRVM0300` 504 Yishun St 51, Singapore 760504
  - latitude: 1.41833600 -> 1.418
  - longitude: 103.84439300 -> 103.844
- `SGRVM0301` 698C Jurong West Central 3
  - latitude: 1.34030000 -> 1.340
  - longitude: 103.70771000 -> 103.708
- `SGRVM0302` 32 Marsiling Dr
  - latitude: 1.44340400 -> 1.443
  - longitude: 103.77279400 -> 103.773
- `SGRVM0303` 667C Jurong West Street 65
  - latitude: 1.34133000 -> 1.341
  - longitude: 103.70243000 -> 103.702
- `SGRVM0304` SHENG SIONG BLK 301 WOODLANDS ST 31 
  - latitude: 1.43146000 -> 1.431
  - longitude: 103.77380000 -> 103.774
- `SGRVM0305` 622 Woodlands Drive 52
  - latitude: 1.43420200 -> 1.434
  - longitude: 103.79880300 -> 103.799
- `SGRVM0306` 854 Jurong West Street 81
  - latitude: 1.34781200 -> 1.348
  - longitude: 103.69578800 -> 103.696
- `SGRVM0307` 196B Boon Lay Drive
  - latitude: 1.34291000 -> 1.343
  - longitude: 103.71424100 -> 103.714
- `SGRVM0308` 276D Jurong West Street 25
  - latitude: 1.35356000 -> 1.354
  - longitude: 103.70441000 -> 103.704
- `SGRVM0309` 212 Marsiling Cres
  - latitude: 1.44619000 -> 1.446
  - longitude: 103.77310000 -> 103.773
- `SGRVM0310` 920 Jurong West Street 92
  - latitude: 1.33994100 -> 1.340
  - longitude: 103.68838700 -> 103.688
- `SGRVM0311` 123 Marsiling Rise
  - latitude: 1.43920900 -> 1.439
  - longitude: 103.77911100 -> 103.779
- `SGRVM0312` 664D Jurong West Street 64
  - latitude: 1.33919700 -> 1.339
  - longitude: 103.70271800 -> 103.703
- `SGRVM0313` 744 Jurong West Street 73
  - latitude: 1.34681200 -> 1.347
  - longitude: 103.69895800 -> 103.699
- `SGRVM0314` 515 Jurong West Street 52
  - latitude: 1.34625000 -> 1.346
  - longitude: 103.72040700 -> 103.720
- `SGRVM0315` 728 Woodlands Cir
  - latitude: 1.44285100 -> 1.443
  - longitude: 103.79887300 -> 103.799
- `SGRVM0316` 618 Choa Chu Kang North 7
  - latitude: 1.40037500 -> 1.400
  - longitude: 103.74698000 -> 103.747
- `SGRVM0317` 17 Marsiling Ln
  - latitude: 1.44264000 -> 1.443
  - longitude: 103.77774000 -> 103.778
- `SGRVM0318` Giant IMM
  - latitude: 1.33596000 -> 1.336
  - longitude: 103.74700000 -> 103.747
- `SGRVM0319` Cold Storage Clementi Arcade
  - latitude: 1.32339000 -> 1.323
  - longitude: 103.76760000 -> 103.768
- `SGRVM0320` U STARS 345 Clementi Ave 5
  - latitude: 1.31767000 -> 1.318
  - longitude: 103.76900000 -> 103.769
- `SGRVM0321` Cold Storage West Coast Plaza
  - latitude: 1.30370000 -> 1.304
  - longitude: 103.76590000 -> 103.766
- `SGRVM0322` SHENG SIONG BLK 720 CLEMENTI WEST STREET 2 
  - latitude: 1.30241000 -> 1.302
  - longitude: 103.76370000 -> 103.764
- `SGRVM0323` 149 Woodlands Street 13
  - latitude: 1.43576200 -> 1.436
  - longitude: 103.77316500 -> 103.773
- `SGRVM0324` 153 Gangsa Rd
  - latitude: 1.37598400 -> 1.376
  - longitude: 103.76528800 -> 103.765
- `SGRVM0325` SHENG SIONG BLK 446 FAJAR ROAD
  - latitude: 1.38374000 -> 1.384
  - longitude: 103.77060000 -> 103.771
- `SGRVM0326` 359 Clementi Ave 2
  - latitude: 1.31343000 -> 1.313
  - longitude: 103.76988300 -> 103.770
- `SGRVM0327` 178 Woodlands Street 13
  - latitude: 1.43459500 -> 1.435
  - longitude: 103.77765800 -> 103.778
- `SGRVM0328` 108 Gangsa Rd
  - latitude: 1.37769000 -> 1.378
  - longitude: 103.76716000 -> 103.767
- `SGRVM0329` 306 Clementi Ave 4
  - latitude: 1.32149600 -> 1.321
  - longitude: 103.76588800 -> 103.766
- `SGRVM0330` 454 Clementi Ave 3
  - latitude: 1.31224400 -> 1.312
  - longitude: 103.76641300 -> 103.766
- `SGRVM0331` 113 Woodlands Street 13
  - latitude: 1.43799000 -> 1.438
  - longitude: 103.78117000 -> 103.781
- `SGRVM0332` 113 Clementi Street 13
  - latitude: 1.32347200 -> 1.323
  - longitude: 103.77035300 -> 103.770
- `SGRVM0333` 140 Petir Rd
  - latitude: 1.37545900 -> 1.375
  - longitude: 103.76896900 -> 103.769
- `SGRVM0334` 101 Gangsa Rd
  - latitude: 1.37939000 -> 1.379
  - longitude: 103.76752000 -> 103.768
- `SGRVM0335` 326 Clementi Ave 5 
  - latitude: 1.31447500 -> 1.314
  - longitude: 103.76638100 -> 103.766
- `SGRVM0336` 311B Clementi Ave 4
  - latitude: 1.31945100 -> 1.319
  - longitude: 103.76563200 -> 103.766
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - latitude: 1.37603000 -> 1.376
  - longitude: 103.71879800 -> 103.719
- `SGRVM0338` 343 Clementi Ave 5
  - latitude: 1.31781300 -> 1.318
  - longitude: 103.77093200 -> 103.771
- `SGRVM0340` 131 Cashew Rd
  - latitude: 1.37460400 -> 1.375
  - longitude: 103.77078100 -> 103.771
- `SGRVM0341` FairPrice Yishun MRT
  - latitude: 1.42938000 -> 1.429
  - longitude: 103.83510000 -> 103.835
- `SGRVM0342` 288C Jurong East Street 21
  - latitude: 1.33972500 -> 1.340
  - longitude: 103.74363600 -> 103.744
- `SGRVM0343` 102 Woodlands Street 13
  - latitude: 1.43626900 -> 1.436
  - longitude: 103.78100200 -> 103.781
- `SGRVM0344` 160 Woodlands Street 13
  - latitude: 1.43332900 -> 1.433
  - longitude: 103.77465200 -> 103.775
- `SGRVM0345` 310 Woodlands Street 31
  - latitude: 1.43013500 -> 1.430
  - longitude: 103.77597000 -> 103.776
- `SGRVM0346` 429 Clementi Ave 3
  - latitude: 1.31293000 -> 1.313
  - longitude: 103.76281000 -> 103.763
- `SGRVM0347` 103 Clementi Street 14
  - latitude: 1.32268000 -> 1.323
  - longitude: 103.76888000 -> 103.769
- `SGRVM0348` Prime Supermarket Blk 768 Woodlands Ave 6
  - latitude: 1.44584000 -> 1.446
  - longitude: 103.79790000 -> 103.798
- `SGRVM0349` SHENG SIONG BLK 18 TECK WHYE LANE 
  - latitude: 1.37824000 -> 1.378
  - longitude: 103.75430000 -> 103.754
- `SGRVM0350` Cold Storage Lentor Modern
  - latitude: 1.38569000 -> 1.386
  - longitude: 103.83420000 -> 103.834
- `SGRVM0351` SHENG SIONG NO.1 WOODLANDS ROADS 
  - latitude: 1.38075000 -> 1.381
  - longitude: 103.75980000 -> 103.760
- `SGRVM0352` FairPrice Blk 511 Canberra Road
  - latitude: 1.45383000 -> 1.454
  - longitude: 103.81960000 -> 103.820
- `SGRVM0353` SHENG SIONG BLK 467 BUKIT BATOK WEST AVENUE 9 
  - latitude: 1.35715000 -> 1.357
  - longitude: 103.74350000 -> 103.743
- `SGRVM0354` SCARLETT@YISHUN 10 CINEMA COMPLEX
  - latitude: 1.42993000 -> 1.430
  - longitude: 103.83640000 -> 103.836
- `SGRVM0355` Raj Agro Kranji
  - latitude: 1.42901000 -> 1.429
  - longitude: 103.75270000 -> 103.753
- `SGRVM0356` U STARS @817 Keat Hong Link
  - latitude: 1.37690000 -> 1.377
  - longitude: 103.74940000 -> 103.749
- `SGRVM0357` FairPrice Yew Tee Mrt
  - latitude: 1.39746000 -> 1.397
  - longitude: 103.74750000 -> 103.748
- `SGRVM0358` FairPrice Canberra Plaza
  - latitude: 1.44297000 -> 1.443
  - longitude: 103.83060000 -> 103.831
- `SGRVM0359` FairPrice Teck Whye
  - latitude: 1.38005000 -> 1.380
  - longitude: 103.75320000 -> 103.753
- `SGRVM0360` 431A Yishun Ave 1, Singapore 761431
  - latitude: 1.41965000 -> 1.420
  - longitude: 103.84728000 -> 103.847
- `SGRVM0361` FairPrice Yew Tee Point
  - latitude: 1.39716000 -> 1.397
  - longitude: 103.74680000 -> 103.747
- `SGRVM0362` FairPrice Limbang Shopping Centre
  - latitude: 1.39205000 -> 1.392
  - longitude: 103.74340000 -> 103.743
- `SGRVM0363` FairPrice JEM
  - latitude: 1.33283000 -> 1.333
  - longitude: 103.74310000 -> 103.743
- `SGRVM0364` Don Don Donki (Jurong East Mall)
  - latitude: 1.33266000 -> 1.333
  - longitude: 103.74320000 -> 103.743
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE
  - latitude: 1.37603000 -> 1.376
  - longitude: 103.71880000 -> 103.719
- `SGRVM0366` Giant Yishun Street 22
  - latitude: 1.43648000 -> 1.436
  - longitude: 103.83780000 -> 103.838
- `SGRVM0367` Grindelwald Supermarket
  - latitude: 1.32207000 -> 1.322
  - longitude: 103.77040000 -> 103.770
- `SGRVM0368` Ajmal Trading Group - Jalan Papan Aspri Westlite
  - latitude: 1.32305000 -> 1.323
  - longitude: 103.72740000 -> 103.727
- `SGRVM0369` Don Don Donki (Bukit Panjang Plaza)
  - latitude: 1.38000000 -> 1.380
  - longitude: 103.76430000 -> 103.764
- `SGRVM0370` Giant Choa Chu Kang Avenue 3
  - latitude: 1.37802000 -> 1.378
  - longitude: 103.73900000 -> 103.739
- `SGRVM0371` SHENG SIONG BLK 352 CLEMENTI AVE 2 
  - latitude: 1.31508000 -> 1.315
  - longitude: 103.77110000 -> 103.771
- `SGRVM0372` Redman by Phoon Huat
  - latitude: 1.37996000 -> 1.380
  - longitude: 103.76430000 -> 103.764
- `SGRVM0373` FairPrice Boon Lay Shopping Complex
  - latitude: 1.34663000 -> 1.347
  - longitude: 103.71200000 -> 103.712
- `SGRVM0374` FairPrice 451 Clementi Avenue 3
  - latitude: 1.31278000 -> 1.313
  - longitude: 103.76590000 -> 103.766
- `SGRVM0375` SHENG SIONG BLK 544 JURONG WEST ST 42 
  - latitude: 1.35241000 -> 1.352
  - longitude: 103.71570000 -> 103.716
- `SGRVM0376` Prime Supermarket Blk 253 Choa Chu Kang
  - latitude: 1.37744000 -> 1.377
  - longitude: 103.74439000 -> 103.744
- `SGRVM0377` FairPrice Bukit Panjang Plaza
  - latitude: 1.38133000 -> 1.381
  - longitude: 103.76430000 -> 103.764
- `SGRVM0378` Giant Bukit Batok East Avenue 3
  - latitude: 1.34661000 -> 1.347
  - longitude: 103.75720000 -> 103.757
- `SGRVM0379` 467C Yishun Ave 6
  - latitude: 1.42683100 -> 1.427
  - longitude: 103.85138900 -> 103.851
- `SGRVM0380` U STARS @810 Cha Chu Kang Ave 7
  - latitude: 1.37402000 -> 1.374
  - longitude: 103.74620000 -> 103.746
- `SGRVM0381` SCARLETT@PLANTATION PLAZA
  - latitude: 1.35721000 -> 1.357
  - longitude: 103.73400000 -> 103.734
- `SGRVM0382` FairPrice Tengah Parc Point
  - latitude: 1.36100000 -> 1.361
  - longitude: 103.73850000 -> 103.739
- `SGRVM0383` Giant Tengah Plantation Plaza
  - latitude: 1.35712000 -> 1.357
  - longitude: 103.73399500 -> 103.734
- `SGRVM0384` FairPrice 280 Bukit Batok East Avenue 3
  - latitude: 1.34773000 -> 1.348
  - longitude: 103.75700000 -> 103.757
- `SGRVM0385` 361 Sembawang Crescent
  - latitude: 1.44640100 -> 1.446
  - longitude: 103.81393200 -> 103.814
- `SGRVM0386` ASPRI-D Wall Papan Dormitory
  - latitude: 1.32223800 -> 1.322
  - longitude: 103.73105300 -> 103.731
- `SGRVM0387` 510 Jurong West Street 51
  - latitude: 1.34838000 -> 1.348
  - longitude: 103.71946000 -> 103.719
- `SGRVM0388` 868 Yishun Street 81, Singapore 760868
  - latitude: 1.41370300 -> 1.414
  - longitude: 103.83761300 -> 103.838
- `SGRVM0389` Yishun Park Hawker
  - latitude: 1.42502300 -> 1.425
  - longitude: 103.84214500 -> 103.842
- `SGRVM0390` Senja Hawker Centre
  - latitude: 1.38710500 -> 1.387
  - longitude: 103.76093400 -> 103.761
- `SGRVM0391` 383A Yishun Ave 6, Singapore 761383
  - latitude: 1.43083700 -> 1.431
  - longitude: 103.84785400 -> 103.848
- `SGRVM0393` SACHI MINIMART PTE LTD
  - latitude: 1.31798000 -> 1.318
  - longitude: 103.72913700 -> 103.729
- `SGRVM0395` 627 Yishun Street 61, Singapore 760627
  - latitude: 1.41762800 -> 1.418
  - longitude: 103.83673300 -> 103.837
- `SGRVM0396` 259 Yishun Street 22, Singapore 760259
  - latitude: 1.43491800 -> 1.435
  - longitude: 103.83913600 -> 103.839
- `SGRVM0397` Republic Polytechnic
  - latitude: 1.44285900 -> 1.443
  - longitude: 103.78556000 -> 103.786
- `SGRVM0398` 252 Jurong East Street 24
  - latitude: 1.34307900 -> 1.343
  - longitude: 103.73822100 -> 103.738
- `SGRVM0399` Bukit Batok West Hawker Centre
  - latitude: 1.35554300 -> 1.356
  - longitude: 103.74210500 -> 103.742
- `SGRVM0400` Westlite Jalan Tukang Dormitory
  - latitude: 1.32625300 -> 1.326
  - longitude: 103.71692400 -> 103.717
- `SGRVM0401` Bukit Panjang Hawker Centre
  - latitude: 1.37744600 -> 1.377
  - longitude: 103.77257200 -> 103.773
- `SGRVM0402` 353 Clementi Food Center
  - latitude: 1.31433900 -> 1.314
  - longitude: 103.77081100 -> 103.771
- `SGRVM0403` 204 Clementi Ave 6, Singapore 120204
  - latitude: 1.32114600 -> 1.321
  - longitude: 103.76344100 -> 103.763
- `SGRVM0404` West Coast Market Square
  - latitude: 1.30374700 -> 1.304
  - longitude: 103.76421500 -> 103.764
- `SGRVM0405` Singapore Zoo
  - latitude: 1.40435300 -> 1.404
  - longitude: 103.79044800 -> 103.790
- `SGRVM0406` Teban Market Place
  - latitude: 1.32083300 -> 1.321
  - longitude: 103.74253500 -> 103.743
- `SGRVM0407` 505 Jurong West Market & Food Centre
  - latitude: 1.34981600 -> 1.350
  - longitude: 103.71853300 -> 103.719
- `SGRVM0409` 445 Clementi Avenue 3
  - latitude: 1.31295400 -> 1.313
  - longitude: 103.76417500 -> 103.764
- `SGRVM0410` 138 Yishun Ring Road, Singapore 760138
  - latitude: 1.43186000 -> 1.432
  - longitude: 103.83062400 -> 103.831
- `SGRVM0411` Bird Paradise
  - latitude: 1.40653200 -> 1.407
  - longitude: 103.78126400 -> 103.781
- `SGRVM0412` Penjuru Recreation Centre
  - latitude: 1.31884300 -> 1.319
  - longitude: 103.73268400 -> 103.733
- `SGRVM0413` 221A Boon Lay Market
  - latitude: 1.34584300 -> 1.346
  - longitude: 103.71309600 -> 103.713
- `SGRVM0414` FairPrice 289A Toh Guan
  - latitude: 1.34015100 -> 1.340
  - longitude: 103.74524800 -> 103.745
- `SGRVM0415` Chong Pang Food Centre
  - latitude: 1.43199700 -> 1.432
  - longitude: 103.82814800 -> 103.828
- `SGRVM0417` SHENG SIONG BLK 845 YISHUN ST 81
  - latitude: 1.41605000 -> 1.416
  - longitude: 103.83490000 -> 103.835
- `SGRVM0418` NESST Tukang Dormitory
  - latitude: 1.32598600 -> 1.326
  - longitude: 103.71516700 -> 103.715
- `SGRVM0420` SHENG SIONG BLK 120 CANBERRA CRESCENT
  - latitude: 1.44580300 -> 1.446
  - longitude: 103.82919300 -> 103.829
- `SGRVM0421` Bukit Canberra Hawker Centre
  - latitude: 1.44899500 -> 1.449
  - longitude: 103.82291800 -> 103.823
- `SGRVM0422` Sembawang Recreation Centre
  - latitude: 1.45851700 -> 1.459
  - longitude: 103.81927700 -> 103.819
- `SGRVM0423` West 1800 Dormitory
  - latitude: 1.32610000 -> 1.326
  - longitude: 103.73486300 -> 103.735
- `SGRVM0424` 20 Marsiling Lane Food Centre
  - latitude: 1.44349800 -> 1.443
  - longitude: 103.77699500 -> 103.777
- `SGRVM0425` FairPrice West Coast Wet Market
  - latitude: 1.31191000 -> 1.312
  - longitude: 103.75930000 -> 103.759
- `SGRVM0426` 601 Jurong West Street 62
  - latitude: 1.33983400 -> 1.340
  - longitude: 103.70029400 -> 103.700
- `SGRVM0427` 991B Upper Jurong Rd
  - latitude: 1.33533500 -> 1.335
  - longitude: 103.69336900 -> 103.693
- `SGRVM0428` 183C Boon Lay Avenue
  - latitude: 1.34869400 -> 1.349
  - longitude: 103.70921000 -> 103.709
- `SGRVM0429` 640 Jurong West Street 61
  - latitude: 1.34010800 -> 1.340
  - longitude: 103.69649600 -> 103.696
- `SGRVM0430` SHENG SIONG BLK 440 BUKIT BATOK WEST AVE 8
  - latitude: 1.35566000 -> 1.356
  - longitude: 103.73930000 -> 103.739
- `SGRVM0431` 708 Clementi West Street 2
  - latitude: 1.30572600 -> 1.306
  - longitude: 103.76185700 -> 103.762
- `SGRVM0433` 414 Pandan Gardens Road
  - latitude: 1.32004000 -> 1.320
  - longitude: 103.74732400 -> 103.747
- `SGRVM0434` 507 West Coast Drive
  - latitude: 1.31205400 -> 1.312
  - longitude: 103.76078900 -> 103.761
- `SGRVM0435` 801 West Coast Crescent
  - latitude: 1.30086200 -> 1.301
  - longitude: 103.76339600 -> 103.763
- `SGRVM0436` 48 Teban Gardens Road
  - latitude: 1.32047900 -> 1.320
  - longitude: 103.73995400 -> 103.740
- `SGRVM0439` 555 Jurong West Street 42
  - latitude: 1.35364400 -> 1.354
  - longitude: 103.71863500 -> 103.719
- `SGRVM0440` SHENG SIONG BLK 61 TEBAN GARDENS ROAD
  - latitude: 1.32212000 -> 1.322
  - longitude: 103.73840000 -> 103.738
- `SGRVM0441` 706 Jurong West Street 71
  - latitude: 1.34145400 -> 1.341
  - longitude: 103.69456000 -> 103.695
- `SGRVM0442` 238B Boon Lay Drive
  - latitude: 1.34202200 -> 1.342
  - longitude: 103.70991800 -> 103.710
- `SGRVM0443` 518 Jurong West Street 52
  - latitude: 1.34509000 -> 1.345
  - longitude: 103.71809400 -> 103.718
- `SGRVM0444` 60 Jurong West Central 3
  - latitude: 1.34046200 -> 1.340
  - longitude: 103.70435900 -> 103.704
- `SGRVM0445` 444 Jurong West Ave 1, Singapore 640444
  - latitude: 1.35194400 -> 1.352
  - longitude: 103.71907000 -> 103.719
- `SGRVM0446` 988A Jurong West Street 93
  - latitude: 1.33651500 -> 1.337
  - longitude: 103.69586300 -> 103.696
- `SGRVM0447` 689 Jurong West Central 1
  - latitude: 1.34097700 -> 1.341
  - longitude: 103.70633500 -> 103.706
</details>

<details>
<summary><b>2026-09-05</b> · 1,299 locations · +1 · −1</summary>

- Snapshot size: **1299** locations
- Added: **1**
- Removed: **1**
- Changed: **0**

Added
- `B5D61013` FairPrice Punggol Waterway Point (postal: 828761, status: RUNNING)

Removed
- `B9051001` FairPrice Punggol Waterway Point (postal: 828761, status: OFFLINE)
</details>

<details>
<summary><b>2026-09-04</b> · 1,299 locations · +12 · ±4</summary>

- Snapshot size: **1299** locations
- Added: **12**
- Removed: **0**
- Changed: **4**

Added
- `20254709350` SHENG SIONG BLK 602A TAMPINES AVENUE 9 (postal: 521602, status: RUNNING)
- `20254709486` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `20261515333` FairPrice Finest Sceneca Square (postal: 468456, status: RUNNING)
- `B5481062` 509 Serangoon North Ave 4 (postal: 550509, status: RUNNING)
- `B5D61007` Block 511 Ang Mo Kio Ave 8 (postal: 560511, status: RUNNING)
- `B9051001` FairPrice Punggol Waterway Point (postal: 828761, status: OFFLINE)
- `B9481040` Resorts World Sentosa (postal: 098269, status: RUNNING)
- `SGRVM0065` 439 Yishun Ave 11, Singapore 760439 (postal: 760439, status: RUNNING)
- `SGRVM0146` 406 Yishun Ave 6, Singapore 760406 (postal: 760406, status: FULL)
- `SGRVM0300` 504 Yishun St 51, Singapore 760504 (postal: 760504, status: RUNNING)
- `SGRVM0360` 431A Yishun Ave 1, Singapore 761431 (postal: 761431, status: RUNNING)
- `SGRVM0379` 467C Yishun Ave 6 (postal: 763467, status: RUNNING)

Changed
- `B5481229` Block 118B Jalan Membina
  - latitude: 1.28143700 -> 1.28179700
  - longitude: 103.82615400 -> 103.82602500
- `B5D61001` 526 Serangoon North Ave 4
  - supplierId: null -> TOMRA001
- `B5D61028` 996C Buangkok Crescent
  - supplierId: null -> TOMRA001
- `B5D61036` 531 Serangoon North Ave 4
  - supplierId: null -> TOMRA001
</details>

<details>
<summary><b>2026-09-03</b> · 1,287 locations · ±4</summary>

- Snapshot size: **1287** locations
- Added: **0**
- Removed: **0**
- Changed: **4**

Changed
- `20254909867` SHENG SIONG BLK 872C TAMPINES STREET 86
  - locationName: SHENG SIONG BLK 872C TAMPINES STREET 86  -> SHENG SIONG BLK 872C TAMPINES STREET 86
- `B5481215` Toa Payoh Lorong 4 Blk 94
  - latitude: 1.33892600 -> 1.33945900
  - locationName: Toa Payoh Lorong 4 Blk 94 Hawker Centre -> Toa Payoh Lorong 4 Blk 94
  - longitude: 103.84992600 -> 103.84933900
- `B5481216` Mei Chin Road Market
  - latitude: 1.29327800 -> 1.29343800
  - longitude: 103.81741600 -> 103.80291400
- `SGRVM0409` 445 Clementi Avenue 3
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
- `20254709517` Blk 145, Bedok Reservoir Road (postal: 470145, status: RUNNING)
- `B5D61030` Nanyang Academy of Fine Arts (postal: 189655, status: RUNNING)
- `B5D61038` Lasalle College of the Arts (postal: 187940, status: RUNNING)
- `B5D61041` Block 104B Ang Mo Kio St 11 (postal: 560104, status: RUNNING)
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
- `SGRVM0388` 868 Yishun Street 81, Singapore 760868 (postal: 760868, status: RUNNING)
- `SGRVM0391` 383A Yishun Ave 6, Singapore 761383 (postal: 761383, status: RUNNING)
- `SGRVM0395` 627 Yishun Street 61, Singapore 760627 (postal: 760627, status: RUNNING)
- `SGRVM0396` 259 Yishun Street 22, Singapore 760259 (postal: 760259, status: RUNNING)
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
- `20255010218` Sparrows 206 Bedok North Street 1 (postal: 460206, status: RUNNING)
- `20255110623` ONE Supermarket Pte. Ltd. (postal: 522201, status: RUNNING)
- `B5052931` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: ERROR)
- `B5481005` Isetan Scotts Supermarket (postal: 238868, status: RUNNING)
- `SGRVM0127` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: RUNNING)
- `SGRVM0167` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)
- `SGRVM0231` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0367` Grindelwald Supermarket (postal: 120108, status: OFFLINE)
- `SGRVM0368` Ajmal Trading Group - Jalan Papan Aspri Westlite (postal: 619421, status: OFFLINE)
- `SGRVM0372` Redman by Phoon Huat (postal: 677743, status: RUNNING)

Removed
- `B5052937` SHENG SIONG THOMSON IMPERIAL COURT (postal: 574424, status: RUNNING)

Changed
- `20255010460` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `B5481015` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.38557900
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90250300
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `B5481045` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `B5481123` ACE MARKETPLACE (86RC)
  - address: 86 Redhill Cl, #01-610 Redhill Mall, Singapore 150086, 150086 -> 86 Redhill Close, #01-610, 150086
  - locationName: Sheng Ho Redhill Mall -> ACE MARKETPLACE (86RC)
  - longitude: 103.81867000 -> 103.81867800
- `B5481152` Thai Supermarket Pte Ltd
  - address: 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511 -> 12 Kallang Avenue, #01-20, 339511
  - locationName: Thai Supermarket Aperia Mall -> Thai Supermarket Pte Ltd
  - longitude: 103.86430200 -> 103.86432000
- `SGRVM0203` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
</details>

<details>
<summary><b>2026-08-27</b> · 1,267 locations · +1</summary>

- Snapshot size: **1267** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `SGRVM0185` FORTUNE SUPERMARKET 463 (postal: 750463, status: FULL)
</details>

<details>
<summary><b>2026-08-26</b> · 1,266 locations · +9 · −1 · ±1</summary>

- Snapshot size: **1266** locations
- Added: **9**
- Removed: **1**
- Changed: **1**

Added
- `B5D61001` 526 Serangoon North Ave 4 (postal: 550526, status: UNKNOWN)
- `B5D61028` 996C Buangkok Crescent (postal: 536996, status: MAINTENANCE)
- `B5D61036` 531 Serangoon North Ave 4 (postal: 550531, status: UNKNOWN)
- `SGRVM0427` 991B Upper Jurong Rd (postal: 632991, status: RUNNING)
- `SGRVM0428` 183C Boon Lay Avenue (postal: 643183, status: RUNNING)
- `SGRVM0431` 708 Clementi West Street 2 (postal: 120708, status: offline)
- `SGRVM0435` 801 West Coast Crescent (postal: 120801, status: RUNNING)
- `SGRVM0441` 706 Jurong West Street 71 (postal: 640706, status: RUNNING)
- `SGRVM0442` 238B Boon Lay Drive (postal: 642238, status: RUNNING)

Removed
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)

Changed
- `B5052479` Singapore Polytechnic (SP) T11A Building
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
- `SGRVM0231` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)

Changed
- `B9481038` 672A Klang Lane - Little India
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
- `SGRVM0211` 7 Seven Trichy Supermarket North Coast Lodge (postal: 756992, status: FULL)
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)

Removed
- `B5052931` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: RUNNING)
- `SGRVM0368` Ajmal Trading Group - Jalan Papan Aspri Westlite (postal: 619421, status: OFFLINE)
- `SGRVM0372` Redman by Phoon Huat (postal: 677743, status: RUNNING)

Changed
- `B5481015` FairPrice Hougang Mall
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
- `B5D61031` Block 953 Hougang Ave 9 (postal: 530953, status: RUNNING)
- `B5D61037` Block 920 Hougang Ave 9 (postal: 530920, status: RUNNING)
- `B5D61042` 212 Ang Mo Kio Ave 3 (postal: 560212, status: RUNNING)
- `B5D61043` Block 203 Ang Mo Kio Ave 3 (postal: 560203, status: RUNNING)
- `B5D61045` 442 Ang Mo Kio Avenue 10 (postal: 560442, status: RUNNING)
- `B5D61047` Block 536 Ang Mo Kio Ave 10 (postal: 560536, status: RUNNING)

Removed
- `SGRVM0127` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: RUNNING)
</details>

<details>
<summary><b>2026-08-22</b> · 1,255 locations · −2 · ±1</summary>

- Snapshot size: **1255** locations
- Added: **0**
- Removed: **2**
- Changed: **1**

Removed
- `SGRVM0211` 7 Seven Trichy Supermarket North Coast Lodge (postal: 756992, status: RUNNING)
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: FULL)

Changed
- `SGRVM0203` FairPrice Orchid Country Club
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
- `B5052931` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: RUNNING)
- `B5D61017` Block 400C Fernvale Ln (postal: 793400, status: RUNNING)
- `B5D61025` Block 538 Hougang Ave 8 (postal: 530538, status: RUNNING)
- `B5D61027` Blk 648 Hougang Ave 8 (postal: 530648, status: RUNNING)
- `B5D61032` Block 410A Fernvale Rd (postal: 791410, status: RUNNING)
- `B5D61035` Block 413B Fernvale Link (postal: 792413, status: RUNNING)
- `SGRVM0127` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: ERROR)
- `SGRVM0231` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)

Removed
- `SGRVM0167` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)
- `SGRVM0185` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `SGRVM0365` Phan Nee #01-02 Sungei Tengah Lodge (postal: 698924, status: OFFLINE)

Changed
- `B5481045` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `B5481205` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `SGRVM0203` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
</details>

<details>
<summary><b>2026-08-20</b> · 1,252 locations · +13 · −2 · ±2</summary>

- Snapshot size: **1252** locations
- Added: **13**
- Removed: **2**
- Changed: **2**

Added
- `B5D61029` Block 224C Sumang Lane (postal: 823224, status: RUNNING)
- `B5D61034` Block 217C Sumang Walk (postal: 823217, status: RUNNING)
- `B5D61039` Block 228A Punggol Field (postal: 821228, status: RUNNING)
- `B5D61044` Block 326B Sumang Walk (postal: 822326, status: RUNNING)
- `B5D61046` Block 423A Northshore Crescent (postal: 823423, status: RUNNING)
- `B5D61048` Block 232C Sumang Lane (postal: 823232, status: RUNNING)
- `B9481037` Block 308A Punggol Walk (postal: 821308, status: RUNNING)
- `B9481043` Block 134 Edgedale Plains (postal: 820134, status: RUNNING)
- `SGRVM0167` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)
- `SGRVM0185` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `SGRVM0211` 7 Seven Trichy Supermarket North Coast Lodge (postal: 756992, status: RUNNING)
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `SGRVM0365` Phan Nee #01-02 Sungei Tengah Lodge (postal: 698924, status: OFFLINE)

Removed
- `20255110623` ONE Supermarket Pte. Ltd. (postal: 522201, status: RUNNING)
- `B5052931` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: RUNNING)

Changed
- `20254809792` Blk 608, Bedok Reservoir Road
  - latitude: 1.33250200 -> 1.33185400
  - longitude: 103.91310000 -> 103.91319300
- `B5481045` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
</details>

<details>
<summary><b>2026-08-19</b> · 1,241 locations · +2 · −4 · ±12</summary>

- Snapshot size: **1241** locations
- Added: **2**
- Removed: **4**
- Changed: **12**

Added
- `20255110623` ONE Supermarket Pte. Ltd. (postal: 522201, status: RUNNING)
- `SGRVM0444` 60 Jurong West Central 3 (postal: 648346, status: RUNNING)

Removed
- `SGRVM0127` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: ERROR)
- `SGRVM0211` 7 Seven Trichy Supermarket North Coast Lodge (postal: 756992, status: RUNNING)
- `SGRVM0231` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: ERROR)

Changed
- `B5481045` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `B5481152` Thai Supermarket Aperia Mall
  - address: 12 Kallang Avenue, #01-20, 339511 -> 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511
  - locationName: Thai Supermarket Pte Ltd -> Thai Supermarket Aperia Mall
  - longitude: 103.86432000 -> 103.86430200
- `B5481205` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
- `B5481223` Block 8 Tanjong Pagar Plaza
  - supplierId: null -> TOMRA001
- `B5481231` Gardens by the Bay
  - supplierId: null -> TOMRA001
- `B5481235` Block 8 Cantonment Cl
  - supplierId: null -> TOMRA001
- `B9051015` Block 3 Jalan Bukit Merah
  - supplierId: null -> TOMRA001
- `B9051016` Block 166 Stirling Road
  - supplierId: null -> TOMRA001
- `B9051017` Block 181 Stirling Rd
  - supplierId: null -> TOMRA001
- `SGRVM0203` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
- `SGRVM0400` Westlite Jalan Tukang Dormitory
  - supplierId: null -> SGRECYCLE001
- `SGRVM0446` 988A Jurong West Street 93
  - supplierId: null -> SGRECYCLE001
</details>

<details>
<summary><b>2026-08-18</b> · 1,243 locations · +5 · −1 · ±5</summary>

- Snapshot size: **1243** locations
- Added: **5**
- Removed: **1**
- Changed: **5**

Added
- `SGRVM0127` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: ERROR)
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: ERROR)
- `SGRVM0372` Redman by Phoon Huat (postal: 677743, status: RUNNING)
- `SGRVM0433` 414 Pandan Gardens Road (postal: 600414, status: RUNNING)
- `SGRVM0436` 48 Teban Gardens Road (postal: 600048, status: RUNNING)

Removed
- `SGRVM0185` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)

Changed
- `B5052474` National University of Singapore 36 College Avenue East UTown Level 1, Main Walkway
  - locationName: National University of Singapore 36 College Avenue East -> National University of Singapore 36 College Avenue East UTown Level 1, Main Walkway
- `B5052479` Don Don Donki (HarbourFront Centre)
  - address: 500 Dover Rd, 139651 -> 1 Maritime Square, #03-23 / 38 HarbourFront Centre, 099253
  - latitude: 1.31033000 -> 1.26420000
  - locationName: Singapore Polytechnic (SP) T11A Building -> Don Don Donki (HarbourFront Centre)
  - longitude: 103.77916000 -> 103.82030000
  - postalCode: 139651 -> 099253
  - zipcode: 139651 -> 099253
- `B5481152` Thai Supermarket Pte Ltd
  - address: 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511 -> 12 Kallang Avenue, #01-20, 339511
  - locationName: Thai Supermarket Aperia Mall -> Thai Supermarket Pte Ltd
  - longitude: 103.86430200 -> 103.86432000
- `B5481205` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `SGRVM0211` 7 Seven Trichy Supermarket North Coast Lodge
  - locationName: 7 Seven_Trichy Supermarket -> 7 Seven Trichy Supermarket North Coast Lodge
</details>

<details>
<summary><b>2026-08-17</b> · 1,239 locations · +4 · −2 · ±3</summary>

- Snapshot size: **1239** locations
- Added: **4**
- Removed: **2**
- Changed: **3**

Added
- `B5052931` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: FULL)
- `SGRVM0185` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `SGRVM0211` 7 Seven_Trichy Supermarket (postal: 756992, status: FULL)
- `SGRVM0434` 507 West Coast Drive (postal: 120507, status: MAINTENANCE)

Removed
- `SGRVM0127` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: RUNNING)
- `SGRVM0365` Phan Nee #01-02 Sungei Tengah Lodge (postal: 698924, status: OFFLINE)

Changed
- `B5481045` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `B5481205` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
- `SGRVM0430` SHENG SIONG BLK 440 BUKIT BATOK WEST AVE 8
  - locationName: SHENG SIONG BLK 440 BUKI BATOK WEST AVE 8 -> SHENG SIONG BLK 440 BUKIT BATOK WEST AVE 8
</details>

<details>
<summary><b>2026-08-16</b> · 1,237 locations · +21 · −5 · ±1</summary>

- Snapshot size: **1237** locations
- Added: **21**
- Removed: **5**
- Changed: **1**

Added
- `B5D61002` Block 668B Edgefield Plains (postal: 822668, status: RUNNING)
- `B5D61003` Block 165A Punggol Central (postal: 821165, status: RUNNING)
- `B5D61004` Block 655A Punggol East (postal: 821655, status: RUNNING)
- `B5D61006` Block 677A Punggol Drive (postal: 821677, status: RUNNING)
- `B5D61009` Block 684A Edgedale Plains (postal: 820684, status: RUNNING)
- `B5D61016` Block 624B Punggol Central (postal: 822624, status: RUNNING)
- `B5D61018` Block 632A Punggol Drive (postal: 821632, status: RUNNING)
- `B5D61021` Block 168A Punggol East (postal: 821168, status: RUNNING)
- `B5D61022` Block 647 Punggol Central (postal: 820647, status: RUNNING)
- `B5D61024` Block 294 Punggol Central (postal: 820294, status: RUNNING)
- `SGRVM0127` Ajmal Trade Mart -  Kranji Lodge One (postal: 739522, status: RUNNING)
- `SGRVM0365` Phan Nee #01-02 Sungei Tengah Lodge (postal: 698924, status: OFFLINE)
- `SGRVM0426` 601 Jurong West Street 62 (postal: 640601, status: RUNNING)
- `SGRVM0429` 640 Jurong West Street 61 (postal: 640640, status: RUNNING)
- `SGRVM0430` SHENG SIONG BLK 440 BUKI BATOK WEST AVE 8 (postal: 650440, status: RUNNING)
- `SGRVM0439` 555 Jurong West Street 42 (postal: 640555, status: RUNNING)
- `SGRVM0440` SHENG SIONG BLK 61 TEBAN GARDENS ROAD (postal: 600061, status: RUNNING)
- `SGRVM0443` 518 Jurong West Street 52 (postal: 640518, status: RUNNING)
- `SGRVM0445` 444 Jurong West Ave 1, Singapore 640444 (postal: 640444, status: RUNNING)
- `SGRVM0446` 988A Jurong West Street 93 (postal: 641988, status: ERROR)
- `SGRVM0447` 689 Jurong West Central 1 (postal: 640689, status: RUNNING)

Removed
- `B5481062` FairPrice Tai Seng Mapletree 18 (postal: 539775, status: OFFLINE)
- `SGRVM0167` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)
- `SGRVM0185` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `SGRVM0360` SHENG SIONG BLK 440 BUKI BATOK WEST AVE 8  (postal: 650440, status: OFFLINE)
- `SGRVM0379` SHENG SIONG BLK 61 TEBAN GARDENS ROAD  (postal: 600061, status: OFFLINE)

Changed
- `B5481045` FairPrice Rivervale Mall
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
- `20254609076` Blk 72, Marine Drive (postal: 440072, status: offline)
- `20254709350` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `20254709486` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `20255010218` Sparrows 206 Bedok North Street 1 (postal: 460206, status: RUNNING)
- `20255010463` SCARLETT@PASIR RIS MALL (postal: 519612, status: RUNNING)
- `20255110623` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `20255110631` Cold Storage Pasir Ris Mall (postal: 519612, status: OFFLINE)
- `B5052931` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: FULL)
- `B5481005` Isetan Orchard Shaw House (postal: 238868, status: RUNNING)
- `B9051001` FairPrice Punggol Waterway Point (postal: 828761, status: OFFLINE)
- `SGRVM0065` 138 Yishun Ring Road (postal: 760138, status: offline)
- `SGRVM0127` AJMAL TRADE MART - Kranji Lodge One (postal: 739522, status: RUNNING)
- `SGRVM0129` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `SGRVM0146` SHENG SIONG BLK 845 YISHUN ST 81 (postal: 760845, status: ERROR)
- `SGRVM0211` 7 Seven 51 North South Ave (postal: 756992, status: ERROR)
- `SGRVM0220` BCRS Office (postal: 577180, status: RUNNING)
- `SGRVM0247` AJMAL TRADING GROUP - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `SGRVM0300` 510 Jurong West Street 51 (postal: 640510, status: MAINTENANCE)
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0339` 204 Clementi Ave 6 (postal: 120204, status: offline)
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0367` Grindewald Supermarket 108 Clementi (postal: 120108, status: OFFLINE)
- `SGRVM0372` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `SGRVM393` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `b5481217` Shunfu Mart (postal: 570320, status: offline)

Changed
- `B5052479` Singapore Polytechnic (SP) T11A Building
  - address: 1 Maritime Square, #03-23 / 38 HarbourFront Centre, 099253 -> 500 Dover Rd, 139651
  - latitude: 1.26420000 -> 1.31033000
  - locationName: Don Don Donki (HarbourFront Centre) -> Singapore Polytechnic (SP) T11A Building
  - longitude: 103.82030000 -> 103.77916000
  - postalCode: 099253 -> 139651
  - zipcode: 099253 -> 139651
- `B5481015` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.38557900
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90250300
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `B5481045` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `SGRVM0167` Nawas Global - Tuas South Dormitory
  - address: NO 3. TUAS SOUTH STREET 12, #01-16 TUAS SOUTH DORMITORY, 636947 -> NO.3 TUAS SOUTH STREET 12, #01-16 TUAS SOUTH DORMITORY, 636947
  - locationName: NAWAS GLOBAL - Tuas South Dormitory -> Nawas Global - Tuas South Dormitory
- `SGRVM0185` FORTUNE SUPERMARKET 463
  - address: Block 463 Sembawang Drive #01-02, 750463 -> BLK 463 SEMBAWANG DRIVE #01-02 SINGAPORE, 750463
  - locationName: Fortune Blk 463 Sembawang Drive -> FORTUNE SUPERMARKET 463
- `SGRVM0203` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `SGRVM0231` Ajmal Trading Group - Kranji Recreation Centre
  - address: 11 KRANJI CLOSE ,#01-02/03, KRANJI RECREATION CENTER, 737673 -> 11 Kranji Close, #01-02/03 Kranji Recreation Centre, 737673
  - locationName: AJMAL TRADING - Kranji Recreation Centre -> Ajmal Trading Group - Kranji Recreation Centre
- `SGRVM0368` Ajmal Trading Group - Jalan Papan Aspri Westlite
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
- `20254609076` Blk 72, Marine Drive (postal: 440072, status: offline)
- `20254709350` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `20254709486` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `20255010463` SCARLETT@PASIR RIS MALL (postal: 519612, status: RUNNING)
- `20255110623` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `20255110631` Cold Storage Pasir Ris Mall (postal: 519612, status: OFFLINE)
- `B5481005` Isetan Orchard Shaw House (postal: 238868, status: RUNNING)
- `B5481223` Block 8 Tanjong Pagar Plaza (postal: 080008, status: RUNNING)
- `B5481235` Block 8 Cantonment Cl (postal: 081008, status: RUNNING)
- `B9051015` Block 3 Jalan Bukit Merah (postal: 150003, status: RUNNING)
- `B9051016` Block 166 Stirling Road (postal: 140166, status: RUNNING)
- `B9051017` Block 181 Stirling Rd (postal: 141182, status: RUNNING)
- `SGRVM0065` 138 Yishun Ring Road (postal: 760138, status: offline)
- `SGRVM0127` AJMAL TRADE MART - Kranji Lodge One (postal: 739522, status: RUNNING)
- `SGRVM0129` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `SGRVM0146` SHENG SIONG BLK 845 YISHUN ST 81 (postal: 760845, status: ERROR)
- `SGRVM0167` NAWAS GLOBAL - Tuas South Dormitory (postal: 636947, status: FULL)
- `SGRVM0168` Ajmal Super Market - Tuas View Dormitory (postal: 637285, status: RUNNING)
- `SGRVM0185` Fortune Blk 463 Sembawang Drive (postal: 750463, status: RUNNING)
- `SGRVM0211` 7 Seven 51 North South Ave (postal: 756992, status: ERROR)
- `SGRVM0220` BCRS Office (postal: 577180, status: RUNNING)
- `SGRVM0231` AJMAL TRADING - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `SGRVM0247` AJMAL TRADING GROUP - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `SGRVM0300` 510 Jurong West Street 51 (postal: 640510, status: MAINTENANCE)
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0339` 204 Clementi Ave 6 (postal: 120204, status: offline)
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0367` Grindewald Supermarket 108 Clementi (postal: 120108, status: OFFLINE)
- `SGRVM0368` AJMAL TRADING GROUP - Jalan Papan Aspri Westlite (postal: 619396, status: OFFLINE)
- `SGRVM0372` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `SGRVM393` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `b5481217` Shunfu Mart (postal: 570320, status: offline)

Changed
- `20255010218` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206 -> 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206
  - latitude: 1.32646400 -> 1.32642100
  - longitude: 103.93095800 -> 103.93097300
- `20261515322` 16 Bedok South Rd Hawker Centre
  - address: 16 Bedok S Rd, 460016 -> 16 Bedok South Rd, 460016
  - locationName: 16 Bedok S Rd -> 16 Bedok South Rd Hawker Centre
- `B5D61020` Blk 409 Ang Mo Kio Ave 10 Market & Hawker Centre
  - locationName: Market & Hawker Centre (Blk 409 Ang Mo Kio Ave 10) -> Blk 409 Ang Mo Kio Ave 10 Market & Hawker Centre
- `SGRVM0203` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
</details>

<details>
<summary><b>2026-08-13</b> · 1,214 locations · +6 · ±2</summary>

- Snapshot size: **1214** locations
- Added: **6**
- Removed: **0**
- Changed: **2**

Added
- `B5D61005` Blk 1 AMK Tech I (postal: 568049, status: RUNNING)
- `B5D61010` Blk 36 Sin Ming Industrial Estate (postal: 575710, status: RUNNING)
- `B5D61011` Blk 5058 Ang Mo Kio Ind Park 2 (postal: 569561, status: RUNNING)
- `B5D61014` Singapore Management University (SMU) (postal: 178902, status: RUNNING)
- `B5D61023` Singapore University of Social Sciences (SUSS) (postal: 599494, status: RUNNING)
- `B9481045` Punggol Way Dorm, Sharbesuwary Pte Ltd (postal: 828646, status: ERROR)

Changed
- `B5481015` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.38557900 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90250300 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `B5481205` 20 Ghim Moh Road Market & Food Centre
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
- `B5052931` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: FULL)

Removed
- `SGRVM0167` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)

Changed
- `B5052479` Don Don Donki (HarbourFront Centre)
  - address: 500 Dover Rd, 139651 -> 1 Maritime Square, #03-23 / 38 HarbourFront Centre, 099253
  - latitude: 1.31033000 -> 1.26420000
  - locationName: Singapore Polytechnic (SP) T11A Building -> Don Don Donki (HarbourFront Centre)
  - longitude: 103.77916000 -> 103.82030000
  - postalCode: 139651 -> 099253
  - zipcode: 139651 -> 099253
- `B5481015` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.38557900
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90250300
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `B5481205` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
- `SGRVM0203` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
</details>

<details>
<summary><b>2026-08-11</b> · 1,208 locations · +3 · −5 · ±3</summary>

- Snapshot size: **1208** locations
- Added: **3**
- Removed: **5**
- Changed: **3**

Added
- `20254709516` Blk 518, Bedok North Ave 2 (postal: 460518, status: MAINTENANCE)
- `20261515322` 16 Bedok S Rd (postal: 460016, status: RUNNING)
- `SGRVM0167` Nawas Global - Tuas South Dormitory (postal: 636947, status: FULL)

Removed
- `B5052931` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: FULL)
- `SGRVM0168` Ajmal Super Market - Tuas View Dormitory (postal: 637285, status: ERROR)
- `SGRVM0231` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `SGRVM0368` Ajmal Trading Group - Jalan Papan Aspri Westlite (postal: 619421, status: ERROR)

Changed
- `B5052479` Singapore Polytechnic (SP) T11A Building
  - address: 1 Maritime Square, #03-23 / 38 HarbourFront Centre, 099253 -> 500 Dover Rd, 139651
  - latitude: 1.26420000 -> 1.31033000
  - locationName: Don Don Donki (HarbourFront Centre) -> Singapore Polytechnic (SP) T11A Building
  - longitude: 103.82030000 -> 103.77916000
  - postalCode: 099253 -> 139651
  - zipcode: 099253 -> 139651
- `B5481045` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `SGRVM0203` FairPrice Orchid Country Club
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
- `B5052917` Block 81 Redhill Ln (postal: 150081, status: RUNNING)
- `B5481236` Block 69 Redhill Cl (postal: 160069, status: OFFLINE)
- `B5481241` Block 52A Commonwealth Dr (postal: 143052, status: RUNNING)
- `B5481242` Block 75B Redhill Rd (postal: 152075, status: RUNNING)
- `SGRVM0168` Ajmal Super Market - Tuas View Dormitory (postal: 637285, status: ERROR)
- `SGRVM0231` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `SGRVM0368` Ajmal Trading Group - Jalan Papan Aspri Westlite (postal: 619421, status: ERROR)

Changed
- `B5481015` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.38557900 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90250300 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `B5481045` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `B5481205` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `SGRVM0203` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
</details>

<details>
<summary><b>2026-08-09</b> · 1,202 locations · +1 · ±2</summary>

- Snapshot size: **1202** locations
- Added: **1**
- Removed: **0**
- Changed: **2**

Added
- `B5D61020` Market & Hawker Centre (Blk 409 Ang Mo Kio Ave 10) (postal: 560409, status: RUNNING)

Changed
- `B5481015` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.38557900
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90250300
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `B5481205` MSE Family Go Green Week’s Sustainability Fair
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
- `20255010460` FairPrice Our Tampines Hub (postal: 528523, status: RUNNING)
- `20255110621` FairPrice Our Tampines Hub (postal: 528523, status: RUNNING)
- `B5481234` Block 22 Dover Crescent (postal: 133022, status: RUNNING)
- `B9051018` Block 94 Dawson Road (postal: 142094, status: RUNNING)
- `B9051020` Block 69 Telok Blangah Heights (postal: 100069, status: RUNNING)
- `SGRVM0414` FairPrice 289A Toh Guan (postal: 601289, status: RUNNING)

Changed
- `B5481225` Block 1 Dover Rd
  - address: Block 22 Dover Crescent, 133022 -> Block 1 Dover Rd, 130001
  - latitude: 1.30707400 -> 1.30252700
  - locationName: Block 22 Dover Crescent -> Block 1 Dover Rd
  - longitude: 103.78380800 -> 103.78319400
  - postalCode: 133022 -> 130001
  - zipcode: 133022 -> 130001
- `SGRVM0203` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
</details>

<details>
<summary><b>2026-08-06</b> · 1,195 locations · +7 · −17 · ±1</summary>

- Snapshot size: **1195** locations
- Added: **7**
- Removed: **17**
- Changed: **1**

Added
- `20254709485` Blk 501, Bedok North Street 3 (postal: 460503, status: MAINTENANCE)
- `20254709541` Blk 514, Bedok North Ave 2 (postal: 460513, status: RUNNING)
- `B5481220` Block 150 Mei Ling St (postal: 141150, status: RUNNING)
- `B5481221` Block 49 Lengkok Bahru (postal: 150049, status: RUNNING)
- `B5481225` Block 22 Dover Crescent (postal: 133022, status: RUNNING)
- `B5481227` Block 52 Lengkok Bahru (postal: 150052, status: RUNNING)
- `SGRVM0387` 510 Jurong West Street 51 (postal: 640510, status: RUNNING)

Removed
- `20254709486` Giant Hypermarket Tampines (postal: n/a, status: RUNNING)
- `20255110621` FairPrice Our Tampines Hub (postal: n/a, status: RUNNING)
- `20255110623` ONE Supermarket Pte. Ltd. (postal: n/a, status: RUNNING)
- `20255110631` Cold Storage Pasir Ris Mall (postal: n/a, status: RUNNING)
- `B5481005` Isetan Scotts Supermarket (postal: 238868, status: RUNNING)
- `SGRVM0127` Ajmal Trade Mart - Kranji Lodge One (postal: 739522, status: RUNNING)
- `SGRVM0167` Nawas Global - Tuas South Dormitory (postal: 636947, status: ERROR)
- `SGRVM0168` Ajmal Super Market - Tuas View Dormitory (postal: 637285, status: ERROR)
- `SGRVM0185` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `SGRVM0211` 7seven Pte. Ltd. (postal: 756992, status: RUNNING)
- `SGRVM0231` Ajmal Trading Group - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory (postal: 737723, status: RUNNING)
- `SGRVM0300` 510 Jurong West Street 51 (postal: 640510, status: MAINTENANCE)
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: ERROR)
- `SGRVM0367` Grindelwald Supermarket (postal: 120108, status: OFFLINE)
- `SGRVM0368` Ajmal Trading Group - Jalan Papan Aspri Westlite (postal: 619421, status: ERROR)
- `SGRVM0372` 1 Jelebu Road, #01-33/34, Singapore 677743 (postal: 677743, status: RUNNING)

Changed
- `SGRVM0203` TUAS SOUTH MINIMART
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
- `20261515331` 117 Aljunied Ave 2 Market & Food Centre (postal: 380117, status: RUNNING)
- `B5052916` Block 19 Jalan Membina (postal: 164019, status: RUNNING)
- `B5052921` Block 118 Bukit Merah View (postal: 150118, status: RUNNING)
- `B5481222` Block 102 Bukit Purmei Road (postal: 090102, status: RUNNING)
- `B5481229` Block 118B Jalan Membina (postal: 161118, status: RUNNING)

Removed
- `20254609076` Blk 72, Marine Drive (postal: 440072, status: offline)
- `20254709350` SHENG SIONG BLK 602A TAMPINES AVENUE 9 (postal: 521602, status: RUNNING)
- `20255010460` FairPrice Our Tampines Hub (postal: 528523, status: RUNNING)
- `20255010463` SCARLETT@PASIR RIS MALL (postal: 519612, status: RUNNING)
- `B5052510A` Food Joy Buona Vista (postal: 118157, status: offline)
- `B5052543A` Phan 99 2 SELETAR NORTH LINK (postal: 797601, status: offline)
- `B5052636A` Culina 15 Dempsey (postal: 249675, status: offline)
- `B5481090A` Supernature Dempsey Road (postal: 249686, status: offline)
- `SGRVM0065` 138 Yishun Ring Road (postal: 760138, status: offline)
- `SGRVM0129` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `SGRVM0146` SHENG SIONG BLK 845 YISHUN ST 81 (postal: 760845, status: ERROR)
- `SGRVM0220` BCRS Office (postal: 577180, status: RUNNING)
- `SGRVM0339` 204 Clementi Ave 6 (postal: 120204, status: offline)
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0387` 510 Jurong West Street 51 (postal: 640510, status: RUNNING)
- `SGRVM393` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `b5481217` Shunfu Mart (postal: 570320, status: offline)

Changed
- `20254709302` Blk 44, Chai Chee Street
  - latitude: 1.32868600 -> 1.32903900
  - longitude: 103.92621700 -> 103.92559200
- `20254709486` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> null
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> null
  - zipcode: 521602 -> null
- `20255110621` FairPrice Our Tampines Hub
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> null
  - postalCode: 528523 -> null
  - zipcode: 528523 -> null
- `20255110623` ONE Supermarket Pte. Ltd.
  - address: Blk 201B Tampines Street 21, 522201 -> null
  - latitude: 1.35344200 -> 1.35338600
  - locationName: One Supermarket Blk 201B Tampines Street 21 -> ONE Supermarket Pte. Ltd.
  - longitude: 103.95296100 -> 103.95307800
  - postalCode: 522201 -> null
  - zipcode: 522201 -> null
- `20255110631` Cold Storage Pasir Ris Mall
  - address: Pasir Ris Mall 7 Pasir Ris Central B1-11, 519612 -> null
  - postalCode: 519612 -> null
  - zipcode: 519612 -> null
- `B5481005` Isetan Scotts Supermarket
  - address: 350 ORCHARD ROAD #B1-00, SHAW HOUSE, 238868 -> 350 ORCHARD ROAD #B1-00
  - locationName: Isetan Orchard Shaw House -> Isetan Scotts Supermarket
- `SGRVM0127` Ajmal Trade Mart - Kranji Lodge One
  - address: 12 KRANJI ROAD,, KRANJI LODGE ONE, 739522 -> No.12 Kranji Road
  - locationName: AJMAL TRADE MART - Kranji Lodge One -> Ajmal Trade Mart - Kranji Lodge One
- `SGRVM0167` Nawas Global - Tuas South Dormitory
  - address: NO 3. TUAS SOUTH STREET 12, #01-16 TUAS SOUTH DORMITORY, 636947 -> NO.3 TUAS SOUTH STREET 12
  - locationName: NAWAS GLOBAL - Tuas South Dormitory -> Nawas Global - Tuas South Dormitory
- `SGRVM0168` Ajmal Super Market - Tuas View Dormitory
  - address: NO.70 TUAS SOUTH AVENUE 1, #01-40 TUAS VIEW DORMITORY, 637285 -> NO.70 TUAS SOUTH AVENUE 1
  - locationName: AJMAL SUPERMART - Tuas View Dormitory -> Ajmal Super Market - Tuas View Dormitory
- `SGRVM0185` FORTUNE SUPERMARKET 463
  - address: Block 463 Sembawang Drive #01-02, 750463 -> BLK 463 SEMBAWANG DRIVE #01-02 SINGAPORE
  - locationName: Fortune Blk 463 Sembawang Drive -> FORTUNE SUPERMARKET 463
- `SGRVM0211` 7seven Pte. Ltd.
  - address: 51 NORTH COAST AVENUE #01-03, NORTH COAST LODGE, 756992 -> 51 North Coast Avenue
  - locationName: 7 Seven 51 North South Ave -> 7seven Pte. Ltd.
- `SGRVM0231` Ajmal Trading Group - Kranji Recreation Centre
  - address: 11 KRANJI CLOSE ,#01-02/03, KRANJI RECREATION CENTER, 737673 -> 11 Kranji Close
  - locationName: AJMAL TRADING - Kranji Recreation Centre -> Ajmal Trading Group - Kranji Recreation Centre
- `SGRVM0247` Ajmal Trading Group - Woodlands Westlite Dormitory
  - address: NO.2 WOODLANDS SECTOR 2, #01-05 WESTLITE DORMITORY, 737723 -> 2 Woodlands Sector 2
  - locationName: AJMAL TRADING GROUP - Woodlands Westlite Dormitory -> Ajmal Trading Group - Woodlands Westlite Dormitory
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-21 SUNGEI TENGAH LODGE
- `SGRVM0367` Grindelwald Supermarket
  - address: 108 CLEMENTI STREET 11 #01-K1, 120108 -> Blk 108 Clementi Street 11 #01-K1
  - locationName: Grindewald Supermarket 108 Clementi -> Grindelwald Supermarket
- `SGRVM0368` Ajmal Trading Group - Jalan Papan Aspri Westlite
  - address: 5 JALAN PAPAN #01-32, ASPRI-WESTLITE PAPAN, 619396 -> NO.5D JALAN PAPAN
  - locationName: AJMAL TRADING GROUP - Jalan Papan Aspri Westlite -> Ajmal Trading Group - Jalan Papan Aspri Westlite
  - postalCode: 619396 -> 619421
  - zipcode: 619396 -> 619421
- `SGRVM0372` 1 Jelebu Road, #01-33/34, Singapore 677743
  - address: 1 Jelebu Rd, #01-33/34, 677743 -> 1 Jelebu Road, #01-33/34, Singapore 677743
  - locationName: Redman 1 Jelebu Rd -> 1 Jelebu Road, #01-33/34, Singapore 677743
</details>

<details>
<summary><b>2026-08-04</b> · 1,217 locations · +1 · ±4</summary>

- Snapshot size: **1217** locations
- Added: **1**
- Removed: **0**
- Changed: **4**

Added
- `SGRVM0220` BCRS Office (postal: 577180, status: RUNNING)

Changed
- `20254809594` Blk 55, Marine Ter
  - latitude: 1.30642300 -> 1.30542700
  - longitude: 103.91584200 -> 103.91396000
- `B5052915` Cheng Yan Court - 269 Queen Street
  - locationName: Cheng Yan Court -> Cheng Yan Court - 269 Queen Street
- `SGRVM0168` AJMAL SUPERMART - Tuas View Dormitory
  - locationName: AJMAL SUPER MART PTE LTD -> AJMAL SUPERMART - Tuas View Dormitory
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
  - locationName: Phan Nee #01-21 Sungei Tengah Lodge -> Phan Nee #01-21 SUNGEI TENGAH LODGE
  - longitude: 103.71879500 -> 103.71879800
</details>

<details>
<summary><b>2026-08-03</b> · 1,216 locations · ±3</summary>

- Snapshot size: **1216** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `SGRVM0168` AJMAL SUPER MART PTE LTD
  - locationName: AJMAL SUPERMART - Tuas View Dormitory -> AJMAL SUPER MART PTE LTD
- `SGRVM0203` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
- `SGRVM0337` Phan Nee #01-21 Sungei Tengah Lodge
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
- `B5052913` Hong Lim Food Centre and Market (postal: 051531, status: RUNNING)
- `B5052914` Nanyang Polytechnic (NYP) (postal: 569830, status: RUNNING)
- `B5052915` Cheng Yan Court (postal: 180269, status: RUNNING)
- `B5052918` Fair Price Hougang Mall (postal: 538766, status: RUNNING)
- `B5052919` Blk 5036 Ang Mo Kio Ind Park 2 (postal: 569539, status: RUNNING)
- `B5052920` Bendemeer Market and Food Centre (postal: 330029, status: RUNNING)
- `B5481230` Ngee Ann Polytechnic (NP) (postal: 599489, status: RUNNING)
- `B5481237` Blk 10 AMK Autopoint (postal: 568047, status: RUNNING)
</details>

<details>
<summary><b>2026-08-01</b> · 1,208 locations · +2 · ±11</summary>

- Snapshot size: **1208** locations
- Added: **2**
- Removed: **0**
- Changed: **11**

Added
- `SGRVM0387` 510 Jurong West Street 51 (postal: 640510, status: RUNNING)
- `SGRVM0417` SHENG SIONG BLK 845 YISHUN ST 81 (postal: 760845, status: FULL)

Changed
- `20254709350` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `20254709486` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `20255010218` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206 -> 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206
  - latitude: 1.32642100 -> 1.32646400
  - longitude: 103.93097300 -> 103.93095800
- `B5481005` Isetan Orchard Shaw House
  - address: 350 ORCHARD ROAD #B1-00, 238868 -> 350 ORCHARD ROAD #B1-00, SHAW HOUSE, 238868
  - locationName: Isetan Scotts Supermarket -> Isetan Orchard Shaw House
- `B5481015` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `SGRVM0146` SHENG SIONG BLK 845 YISHUN ST 81
  - locationName: SHENG SIONG BLK 845 YISHUN ST 81  -> SHENG SIONG BLK 845 YISHUN ST 81
- `SGRVM0168` AJMAL SUPERMART - Tuas View Dormitory
  - locationName: AJMAL SUPER MART PTE LTD -> AJMAL SUPERMART - Tuas View Dormitory
- `SGRVM0203` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
  - locationName: Phan Nee #01-21 Sungei Tengah Lodge -> Phan Nee #01-21 SUNGEI TENGAH LODGE
  - longitude: 103.71879500 -> 103.71879800
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE
  - address: #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924 -> #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
- `SGRVM0372` Redman 1 Jelebu Rd
  - address: 1 Jelebu Road, #01-33/34, Singapore 677743, 677743 -> 1 Jelebu Rd, #01-33/34, 677743
  - locationName: Redman by Phoon Huat -> Redman 1 Jelebu Rd
</details>

<details>
<summary><b>2026-07-31</b> · 1,206 locations · +5 · ±3</summary>

- Snapshot size: **1206** locations
- Added: **5**
- Removed: **0**
- Changed: **3**

Added
- `B5052911` Kukoh 21 Food Centre (postal: 161001, status: RUNNING)
- `B5052912` Whampoa Market (postal: 320090, status: RUNNING)
- `B5052922` Blk 17 Upper Boon Keng Market and Food Centre (postal: 380017, status: RUNNING)
- `B5481231` Gardens by the Bay (postal: 018953, status: offline)
- `B9051019` Little India Rowell Rd (postal: 200641, status: RUNNING)

Changed
- `20255010218` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206 -> 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206
  - latitude: 1.32646400 -> 1.32642100
  - longitude: 103.93095800 -> 103.93097300
- `B5481015` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE
  - address: #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924
</details>

<details>
<summary><b>2026-07-30</b> · 1,201 locations · ±1</summary>

- Snapshot size: **1201** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `20255010218` Sparrows 206 Bedok North Street 1
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
- `B5481005` Isetan Scotts Supermarket
  - address: 350 ORCHARD ROAD #B1-00, SHAW HOUSE, 238868 -> 350 ORCHARD ROAD #B1-00, 238868
  - locationName: Isetan Orchard Shaw House -> Isetan Scotts Supermarket
- `SGRVM0127` AJMAL TRADE MART - Kranji Lodge One
  - address: NO.12 KRANJI ROAD, KRANJI LODGE ONE, 739522 -> 12 KRANJI ROAD,, KRANJI LODGE ONE, 739522
  - locationName: AJMAL TRADE MART PTE LTD -> AJMAL TRADE MART - Kranji Lodge One
- `SGRVM0337` Phan Nee #01-21 Sungei Tengah Lodge
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924
  - locationName: Phan Nee #01-21 SUNGEI TENGAH LODGE -> Phan Nee #01-21 Sungei Tengah Lodge
  - longitude: 103.71879800 -> 103.71879500
- `SGRVM0372` Redman by Phoon Huat
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
- `20255010218` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206 -> 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206
  - latitude: 1.32646400 -> 1.32642100
  - longitude: 103.93095800 -> 103.93097300
- `SGRVM0168` AJMAL SUPER MART PTE LTD
  - locationName: AJMAL SUPERMART - Tuas View Dormitory -> AJMAL SUPER MART PTE LTD
</details>

<details>
<summary><b>2026-07-27</b> · 1,201 locations · +13 · ±1</summary>

- Snapshot size: **1201** locations
- Added: **13**
- Removed: **0**
- Changed: **1**

Added
- `20255110623` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `B5481152` Thai Supermarket Aperia Mall (postal: 339511, status: RUNNING)
- `SGRVM0129` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `SGRVM0167` NAWAS GLOBAL - Tuas South Dormitory (postal: 636947, status: ERROR)
- `SGRVM0168` AJMAL SUPERMART - Tuas View Dormitory (postal: 637285, status: RUNNING)
- `SGRVM0185` Fortune Blk 463 Sembawang Drive (postal: 750463, status: RUNNING)
- `SGRVM0231` AJMAL TRADING - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `SGRVM0247` AJMAL TRADING GROUP - Woodlands Westlite Dormitory (postal: 737723, status: FULL)
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0368` AJMAL TRADING GROUP - Jalan Papan Aspri Westlite (postal: 619396, status: OFFLINE)
- `SGRVM0372` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `b5481217` Shunfu Mart (postal: 570320, status: offline)

Changed
- `B5481015` FairPrice Hougang Mall
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
- `B9481046` Sims Vista Market & Food Centre (postal: 380049, status: RUNNING)

Removed
- `20255110623` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `B5481152` Thai Supermarket Aperia Mall (postal: 339511, status: RUNNING)
- `SGRVM0129` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `SGRVM0167` NAWAS GLOBAL PTE LTD-TUAS (postal: 636947, status: ERROR)
- `SGRVM0168` AJMAL SUPER MART PTE LTD (postal: 637285, status: RUNNING)
- `SGRVM0185` FORTUNE SUPERMARKET 463 (postal: 750463, status: RUNNING)
- `SGRVM0231` AJMAL TRADING - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `SGRVM0247` AJMAL TRADING GROUP -WOODLANDS (postal: 737723, status: RUNNING)
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0368` AJMAL TRADING GROUP - Jalan Papan Aspri Westlite (postal: 619396, status: OFFLINE)
- `SGRVM0372` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `b5481217` Shunfu Mart (postal: 570320, status: offline)

Changed
- `20254709350` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `20254709486` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `20255010460` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `20255110621` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `B5052931` Phan 66 PPT Lodge 1A Dormitory
  - latitude: 1.41979000 -> 1.41965500
  - longitude: 103.89630000 -> 103.89635300
- `B5481015` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `B5481045` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `B5481205` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `SGRVM0127` AJMAL TRADE MART PTE LTD
  - address: 12 KRANJI ROAD,, KRANJI LODGE ONE, 739522 -> NO.12 KRANJI ROAD, KRANJI LODGE ONE, 739522
  - locationName: AJMAL TRADE MART - Kranji Lodge One -> AJMAL TRADE MART PTE LTD
- `SGRVM0203` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
</details>

<details>
<summary><b>2026-07-25</b> · 1,200 locations · +13</summary>

- Snapshot size: **1200** locations
- Added: **13**
- Removed: **0**
- Changed: **0**

Added
- `20255110623` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `B5052931` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: RUNNING)
- `B5481152` Thai Supermarket Aperia Mall (postal: 339511, status: RUNNING)
- `B5481205` MSE Family Go Green Week’s Sustainability Fair (postal: 228231, status: ERROR)
- `SGRVM0127` AJMAL TRADE MART - Kranji Lodge One (postal: 739522, status: RUNNING)
- `SGRVM0129` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `SGRVM0168` AJMAL SUPER MART PTE LTD (postal: 637285, status: RUNNING)
- `SGRVM0231` AJMAL TRADING - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `SGRVM0247` AJMAL TRADING GROUP -WOODLANDS (postal: 737723, status: RUNNING)
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0368` AJMAL TRADING GROUP - Jalan Papan Aspri Westlite (postal: 619396, status: OFFLINE)
- `SGRVM0372` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `b5481217` Shunfu Mart (postal: 570320, status: offline)
</details>

<details>
<summary><b>2026-07-24</b> · 1,187 locations · −13 · ±2</summary>

- Snapshot size: **1187** locations
- Added: **0**
- Removed: **13**
- Changed: **2**

Removed
- `20255110623` One Supermarket Blk 201B Tampines Street 21 (postal: 522201, status: RUNNING)
- `B5052931` Phan 66 PPT Lodge 1A Dormitory (postal: 797455, status: RUNNING)
- `B5481152` Thai Supermarket Aperia Mall (postal: 339511, status: RUNNING)
- `B5481205` MSE Family Go Green Week’s Sustainability Fair (postal: 228231, status: RUNNING)
- `SGRVM0127` AJMAL TRADE MART - Kranji Lodge One (postal: 739522, status: RUNNING)
- `SGRVM0129` Fortune blk 780 Woodlands Cresent (postal: 730780, status: OFFLINE)
- `SGRVM0168` AJMAL SUPERMART - Tuas View Dormitory (postal: 637285, status: RUNNING)
- `SGRVM0231` AJMAL TRADING - Kranji Recreation Centre (postal: 737673, status: RUNNING)
- `SGRVM0247` AJMAL TRADING GROUP - Woodlands Westlite Dormitory (postal: 737723, status: ERROR)
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE (postal: 698924, status: OFFLINE)
- `SGRVM0368` AJMAL TRADING GROUP PTE LTD - Jalan Papan Aspri Westlite (postal: 619421, status: OFFLINE)
- `SGRVM0372` Redman 1 Jelebu Rd (postal: 677743, status: RUNNING)
- `b5481217` Shunfu Mart (postal: 570320, status: offline)

Changed
- `20261515320` 208B New Upper Changi Road Hawker Centre
  - locationName: 208B New Upper Changi Rd -> 208B New Upper Changi Road Hawker Centre
- `20261515335` Blk 216 Bedok North Street 1 Market & Hawker Centre
  - locationName: 216 Bedok North Street 1 -> Blk 216 Bedok North Street 1 Market & Hawker Centre
</details>

<details>
<summary><b>2026-07-23</b> · 1,200 locations · +2 · −1 · ±5</summary>

- Snapshot size: **1200** locations
- Added: **2**
- Removed: **1**
- Changed: **5**

Added
- `SGRVM0222` FORTUNE SUPERMARKET 780 (postal: 730780, status: RUNNING)
- `SGRVM0400` Westlite Jalan Tukang Dormitory (postal: 619267, status: RUNNING)

Removed
- `SGRVM0220` BCRS Office (postal: 577180, status: RUNNING)

Changed
- `20255010218` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206 -> 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206
  - latitude: 1.32642100 -> 1.32646400
  - longitude: 103.93097300 -> 103.93095800
- `B5481045` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `SGRVM0231` AJMAL TRADING - Kranji Recreation Centre
  - address: 11 KRANJI CLOSE, #01-02/03 KRANJI RECREATION CENTER, 737673 -> 11 KRANJI CLOSE ,#01-02/03, KRANJI RECREATION CENTER, 737673
  - locationName: AJMAL TRADING GROUP-RC -> AJMAL TRADING - Kranji Recreation Centre
- `SGRVM0247` AJMAL TRADING GROUP - Woodlands Westlite Dormitory
  - locationName: AJMAL TRADING GROUP -WOODLANDS -> AJMAL TRADING GROUP - Woodlands Westlite Dormitory
- `SGRVM0368` AJMAL TRADING GROUP PTE LTD - Jalan Papan Aspri Westlite
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
- `20255110631` Cold Storage Pasir Ris Mall (postal: 519612, status: MAINTENANCE)
- `20261515320` 208B New Upper Changi Rd (postal: 462208, status: RUNNING)
- `20261515332` SCARLETT@PASIR RIS MALL (postal: 519612, status: MAINTENANCE)
- `20261515335` 216 Bedok North Street 1 (postal: 460216, status: RUNNING)
- `SGRVM0220` BCRS Office (postal: 577180, status: RUNNING)
- `SGRVM393` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `b5481217` Shunfu Mart (postal: 570320, status: offline)

Changed
- `B5052931` Phan 66 PPT Lodge 1A Dormitory
  - latitude: 1.41965500 -> 1.41979000
  - longitude: 103.89635300 -> 103.89630000
- `B5481045` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `SGRVM0167` NAWAS GLOBAL PTE LTD-TUAS
  - address: NO 3. TUAS SOUTH STREET 12, #01-16 TUAS SOUTH DORMITORY, 636947 -> NO.3 TUAS SOUTH STREET 12, #01-16 TUAS SOUTH DORMITORY, 636947
  - locationName: NAWAS GLOBAL - Tuas South Dormitory -> NAWAS GLOBAL PTE LTD-TUAS
- `SGRVM0168` AJMAL SUPERMART - Tuas View Dormitory
  - locationName: AJMAL SUPER MART PTE LTD -> AJMAL SUPERMART - Tuas View Dormitory
- `SGRVM0247` AJMAL TRADING GROUP -WOODLANDS
  - locationName: AJMAL TRADING GROUP - Woodlands Westlite Dormitory -> AJMAL TRADING GROUP -WOODLANDS
</details>

<details>
<summary><b>2026-07-21</b> · 1,192 locations · +3 · −6 · ±5</summary>

- Snapshot size: **1192** locations
- Added: **3**
- Removed: **6**
- Changed: **5**

Added
- `20254709346` Blk 701, Bedok Reservoir Road (postal: 470701, status: RUNNING)
- `SGRVM0065` 138 Yishun Ring Road (postal: 760138, status: offline)
- `SGRVM0339` 204 Clementi Ave 6 (postal: 120204, status: offline)

Removed
- `20255110631` Cold Storage Pasir Ris Mall (postal: 519612, status: offline)
- `2025709346` Blk 701, Bedok Reservoir Road (postal: 470701, status: offline)
- `20261515332` SCARLETT@PASIR RIS MALL (postal: 519612, status: offline)
- `SGRVM0220` BCRS Office (postal: 577180, status: RUNNING)
- `SGRVM393` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
- `b5481217` Shunfu Mart (postal: 570320, status: offline)

Changed
- `B5481045` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `B5481205` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
- `SGRVM0386` ASPRI-D Wall Papan Dormitory
  - address: 2G Jalan Papan, 619834 -> 2G Jalan Papan, D Wall Papan Dormitory, 619834
  - locationName: Astri-D Wall Papan Dormitory -> ASPRI-D Wall Papan Dormitory
- `SGRVM0411` Bird Paradise
  - address: 20 Mandai Lake Rd, 729825 -> 20 Mandai Lake Rd, Mandai Wildlife WEST, 729825
  - locationName: Mandai Bird Paradise -> Bird Paradise
- `SGRVM0423` West 1800 Dormitory
  - address: 2A Penjuru Road, 609853 -> (Former Prime Lodge) 609853 Singapore, 609853
</details>

<details>
<summary><b>2026-07-20</b> · 1,195 locations · +11 · −2 · ±3</summary>

- Snapshot size: **1195** locations
- Added: **11**
- Removed: **2**
- Changed: **3**

Added
- `2025709346` Blk 701, Bedok Reservoir Road (postal: 470701, status: offline)
- `SGRVM0220` BCRS Office (postal: 577180, status: RUNNING)
- `SGRVM0386` Astri-D Wall Papan Dormitory (postal: 619834, status: RUNNING)
- `SGRVM0403` 204 Clementi Ave 6, Singapore 120204 (postal: 120204, status: RUNNING)
- `SGRVM0405` Singapore Zoo (postal: 729826, status: RUNNING)
- `SGRVM0410` 138 Yishun Ring Road, Singapore 760138 (postal: 760138, status: RUNNING)
- `SGRVM0411` Mandai Bird Paradise (postal: 729825, status: RUNNING)
- `SGRVM0412` Penjuru Recreation Centre (postal: 608538, status: RUNNING)
- `SGRVM0415` Chong Pang Food Centre (postal: 760105, status: RUNNING)
- `SGRVM0418` NESST Tukang Dormitory (postal: 619599, status: ERROR)
- `SGRVM0423` West 1800 Dormitory (postal: 609853, status: RUNNING)

Removed
- `SGRVM0065` 138 Yishun Ring Road (postal: 760138, status: OFFLINE)
- `SGRVM0339` 204 Clementi Ave 6 (postal: 120204, status: OFFLINE)

Changed
- `20255010218` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206 -> 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206
  - latitude: 1.32646400 -> 1.32642100
  - longitude: 103.93095800 -> 103.93097300
- `SGRVM0168` AJMAL SUPER MART PTE LTD
  - locationName: AJMAL SUPERMART - Tuas View Dormitory -> AJMAL SUPER MART PTE LTD
- `SGRVM0231` AJMAL TRADING GROUP-RC
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
- `B5481226` Block 108B Bidadari Park Drive (postal: 342108, status: RUNNING)
- `B5481232` Block 118A Bidadari Park Drive (postal: 341118, status: RUNNING)
- `B5481238` Blk 69 Geylang Bahru Market and Food Centre (postal: 330069, status: RUNNING)
- `B9481039` Block 112A Bidadari Park Drive (postal: 341112, status: RUNNING)
- `B9481048` Block 101 Bidadari Park Drive (postal: 340101, status: RUNNING)

Changed
- `20254709350` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `20254709486` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `20255010460` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `20255110621` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `B5481205` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `SGRVM0129` Fortune blk 780 Woodlands Cresent
  - address: BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780 -> Block 780 Woodlands Crescent #01-01, 730780
  - locationName: FORTUNE SUPERMARKET 780 -> Fortune blk 780 Woodlands Cresent
- `SGRVM0185` FORTUNE SUPERMARKET 463
  - address: Block 463 Sembawang Drive #01-02, 750463 -> BLK 463 SEMBAWANG DRIVE #01-02 SINGAPORE, 750463
  - locationName: Fortune Blk 463 Sembawang Drive -> FORTUNE SUPERMARKET 463
- `SGRVM0203` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE
  - address: #01-02 Sungei Tengah Lodge 500 Old Cho Chu Kang Road, 698924 -> #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
  - locationName: Phan Nee #01-02 Sungei Tengah Lodge -> Phan Nee #01-02 SUNGEI TENGAH LODGE
</details>

<details>
<summary><b>2026-07-18</b> · 1,181 locations · ±4</summary>

- Snapshot size: **1181** locations
- Added: **0**
- Removed: **0**
- Changed: **4**

Changed
- `B5481045` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `B5481205` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
- `SGRVM0168` AJMAL SUPERMART - Tuas View Dormitory
  - locationName: AJMAL SUPER MART PTE LTD -> AJMAL SUPERMART - Tuas View Dormitory
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
  - locationName: Phan Nee #01-21 Sungei Tengah Lodge -> Phan Nee #01-21 SUNGEI TENGAH LODGE
  - longitude: 103.71879500 -> 103.71879800
</details>

<details>
<summary><b>2026-07-17</b> · 1,181 locations · +2 · ±6</summary>

- Snapshot size: **1181** locations
- Added: **2**
- Removed: **0**
- Changed: **6**

Added
- `20254809792` Blk 608, Bedok Reservoir Road (postal: 470608, status: RUNNING)
- `20261515338` Singapore University of Technology and Design (SUTD) (postal: 485995, status: RUNNING)

Changed
- `B5481045` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `B5481205` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `SGRVM0168` AJMAL SUPER MART PTE LTD
  - locationName: AJMAL SUPERMART - Tuas View Dormitory -> AJMAL SUPER MART PTE LTD
- `SGRVM0203` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
- `SGRVM0337` Phan Nee #01-21 Sungei Tengah Lodge
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924 -> #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924
  - locationName: Phan Nee #01-21 SUNGEI TENGAH LODGE -> Phan Nee #01-21 Sungei Tengah Lodge
  - longitude: 103.71879800 -> 103.71879500
- `SGRVM0365` Phan Nee #01-02 Sungei Tengah Lodge
  - address: #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924 -> #01-02 Sungei Tengah Lodge 500 Old Cho Chu Kang Road, 698924
  - locationName: Phan Nee #01-02 SUNGEI TENGAH LODGE -> Phan Nee #01-02 Sungei Tengah Lodge
</details>

<details>
<summary><b>2026-07-16</b> · 1,179 locations · +1 · ±3</summary>

- Snapshot size: **1179** locations
- Added: **1**
- Removed: **0**
- Changed: **3**

Added
- `B9481047` Masjid Sultan Mosque (postal: 198833, status: RUNNING)

Changed
- `SGRVM0129` FORTUNE SUPERMARKET 780
  - address: Block 780 Woodlands Crescent #01-01, 730780 -> BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780
  - locationName: Fortune blk 780 Woodlands Cresent -> FORTUNE SUPERMARKET 780
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924
- `SGRVM0365` Phan Nee #01-02 SUNGEI TENGAH LODGE
  - address: #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-02 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KANG ROAD, 698924
</details>

<details>
<summary><b>2026-07-15</b> · 1,178 locations · +2</summary>

- Snapshot size: **1178** locations
- Added: **2**
- Removed: **0**
- Changed: **0**

Added
- `20254709350` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `20255010460` FairPrice Our Tampines Hub (postal: 528523, status: RUNNING)
</details>

<details>
<summary><b>2026-07-14</b> · 1,176 locations · +2 · −2 · ±6</summary>

- Snapshot size: **1176** locations
- Added: **2**
- Removed: **2**
- Changed: **6**

Added
- `20261515329` 85 Fengshan Centre (postal: 460085, status: ERROR)
- `20261515341` Temasek Polytechnic (postal: 529757, status: RUNNING)

Removed
- `20254709350` Giant Hypermarket Tampines (postal: 528765, status: RUNNING)
- `20255010460` FairPrice Our Tampines Hub (postal: 528523, status: RUNNING)

Changed
- `B5481045` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
- `B5481205` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
- `SGRVM0129` Fortune blk 780 Woodlands Cresent
  - address: BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780 -> Block 780 Woodlands Crescent #01-01, 730780
  - locationName: FORTUNE SUPERMARKET 780 -> Fortune blk 780 Woodlands Cresent
- `SGRVM0281` 671A Choa Chu Kang Cres
  - latitude: 1.43851900 -> 1.40213100
  - longitude: 103.77872100 -> 103.74789300
- `SGRVM0316` 618 Choa Chu Kang North 7
  - latitude: 1.39868100 -> 1.40037500
  - longitude: 103.74606000 -> 103.74698000
- `SGRVM0337` Phan Nee #01-21 SUNGEI TENGAH LODGE
  - address: #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924 -> #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924
  - locationName: Phan Nee #01-21 Sungei Tengah Lodge -> Phan Nee #01-21 SUNGEI TENGAH LODGE
  - longitude: 103.71879500 -> 103.71879800
</details>

<details>
<summary><b>2026-07-13</b> · 1,176 locations · ±3</summary>

- Snapshot size: **1176** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `20255110623` One Supermarket Blk 201B Tampines Street 21
  - address: Blk 201B Tampines St 21, #01-1091, 522201 -> Blk 201B Tampines Street 21, 522201
  - latitude: 1.35338600 -> 1.35344200
  - locationName: ONE Supermarket Pte. Ltd. -> One Supermarket Blk 201B Tampines Street 21
  - longitude: 103.95307800 -> 103.95296100
- `B5481205` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `SGRVM0337` Phan Nee #01-21 Sungei Tengah Lodge
  - address: #01-21 SUNGEI TENGAH LODGE, 500 OLD CHOA CHU KAND ROAD, 698924 -> #01-21 Sungei Tengah Lodge, 500 Old Choa Chu Kang Road, 698924
  - locationName: Phan Nee #01-21 SUNGEI TENGAH LODGE -> Phan Nee #01-21 Sungei Tengah Lodge
  - longitude: 103.71879800 -> 103.71879500
</details>

<details>
<summary><b>2026-07-12</b> · 1,176 locations · +1 · ±5</summary>

- Snapshot size: **1176** locations
- Added: **1**
- Removed: **0**
- Changed: **5**

Added
- `B5481217` Shunfu-Mart (postal: 570320, status: RUNNING)

Changed
- `20255110623` ONE Supermarket Pte. Ltd.
  - address: Blk 201B Tampines Street 21, 522201 -> Blk 201B Tampines St 21, #01-1091, 522201
  - latitude: 1.35344200 -> 1.35338600
  - locationName: One Supermarket Blk 201B Tampines Street 21 -> ONE Supermarket Pte. Ltd.
  - longitude: 103.95296100 -> 103.95307800
- `B5052931` Phan 66 PPT Lodge 1A Dormitory
  - latitude: 1.41979000 -> 1.41965500
  - longitude: 103.89630000 -> 103.89635300
- `B5481045` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
- `B5481205` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
- `SGRVM0129` FORTUNE SUPERMARKET 780
  - address: Block 780 Woodlands Crescent #01-01, 730780 -> BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780
  - locationName: Fortune blk 780 Woodlands Cresent -> FORTUNE SUPERMARKET 780
</details>

<details>
<summary><b>2026-07-11</b> · No changes</summary>

No changes.
</details>

<details>
<summary><b>2026-07-10</b> · 1,175 locations · +1 · ±14</summary>

- Snapshot size: **1175** locations
- Added: **1**
- Removed: **0**
- Changed: **14**

Added
- `B5481239` People's Park Food Centre (postal: 050032, status: MAINTENANCE)

Changed
- `20255010460` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `20255110621` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `20255110631` Cold Storage Pasir Ris Mall
  - createdAt: 2026-03-25T21:45:06.947Z -> 2026-07-09T09:00:43.154Z
  - id: 2412 -> 2803
  - rvmOpeningHours: Mon - Sun:  08:00 AM - 10:30 PM -> null
  - supplierId: RVMS001 -> null
- `20261515332` SCARLETT@PASIR RIS MALL
  - createdAt: 2026-07-01T09:41:03.890Z -> 2026-07-09T09:00:43.154Z
  - id: 2784 -> 2804
  - supplierId: RVMS001 -> null
- `B5052474` National University of Singapore 36 College Avenue East
  - locationName: NUS 36 College Avenue East -> National University of Singapore 36 College Avenue East
- `B5052510` Food-Joy Buona Vista
  - locationName: Foodjoy Buona Vista -> Food-Joy Buona Vista
- `B5481142` FairPrice Alexandra Retail Centre ARC (PSA Branch)
  - locationName: FairPrice PSA -> FairPrice Alexandra Retail Centre ARC (PSA Branch)
- `B9481038` 672 Klang Lane - Little India
  - locationName: 672 Klang Lane- Little India -> 672 Klang Lane - Little India
- `SGRVM0129` Fortune blk 780 Woodlands Cresent
  - address: BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780 -> Block 780 Woodlands Crescent #01-01, 730780
  - locationName: FORTUNE SUPERMARKET 780 -> Fortune blk 780 Woodlands Cresent
- `SGRVM0214` Taman Jurong Market & Food Centre
  - locationName: TAMAN JURONG MARKET & FOOD CENTRE -> Taman Jurong Market & Food Centre
- `SGRVM0389` Yishun Park Hawker
  - locationName: YISHUN PARK HAWKER -> Yishun Park Hawker
- `SGRVM0399` Bukit Batok West Hawker Centre
  - locationName: BUKIT BATOK WEST HAWKER CENTRE -> Bukit Batok West Hawker Centre
- `SGRVM0421` Bukit Canberra Hawker Centre
  - locationName: BUKIT CANBERRA HAWKER CENTRE -> Bukit Canberra Hawker Centre
- `SGRVM0422` Sembawang Recreation Centre
  - locationName: SEMBAWANG RECREATION CENTRE -> Sembawang Recreation Centre
</details>

<details>
<summary><b>2026-07-09</b> · 1,174 locations · ±4</summary>

- Snapshot size: **1174** locations
- Added: **0**
- Removed: **0**
- Changed: **4**

Changed
- `20255110623` One Supermarket Blk 201B Tampines Street 21
  - address: Blk 201B Tampines St 21, #01-1091, 522201 -> Blk 201B Tampines Street 21, 522201
  - latitude: 1.35338600 -> 1.35344200
  - locationName: ONE Supermarket Pte. Ltd. -> One Supermarket Blk 201B Tampines Street 21
  - longitude: 103.95307800 -> 103.95296100
- `B5481114` SHENG SIONG BLK 622D PUNGGOL CENTRAL
  - locationName: SHENG SIONG BLK 622D PUNGGOL CENTRAL  -> SHENG SIONG BLK 622D PUNGGOL CENTRAL
- `B5481205` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `SGRVM0145` SHENG SIONG BLK 471B YISHUN STREET 42
  - locationName: SHENG SIONG BLK 471B YISHUN STREET 42  -> SHENG SIONG BLK 471B YISHUN STREET 42
</details>

<details>
<summary><b>2026-07-08</b> · 1,174 locations · ±1</summary>

- Snapshot size: **1174** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `B5481199` Marks & Spencer Raffles City
  - supplierId: null -> TOMRA001
</details>

<details>
<summary><b>2026-07-07</b> · 1,174 locations · +9 · ±11</summary>

- Snapshot size: **1174** locations
- Added: **9**
- Removed: **0**
- Changed: **11**

Added
- `20261515321` Bedok Reservoir Food Centre (postal: 470630, status: RUNNING)
- `20261515334` Cold Storage Pasir Ris Mall (postal: 519612, status: RUNNING)
- `B5481224` Telok Blangah Food Centre (postal: 100079, status: MAINTENANCE)
- `B5481228` 80 Circuit Road Market and Food Centre (postal: 370080, status: UNKNOWN)
- `B5481233` Lau Pa Sat Hawker Centre (postal: 048582, status: UNKNOWN)
- `B5481240` Block 44 Telok Blangah Drive (postal: 100044, status: MAINTENANCE)
- `B5481243` MacPherson Market & Food Centre (postal: 370089, status: MAINTENANCE)
- `B9481041` 225 Ang Mo Kio Ave 1 (postal: 560225, status: UNKNOWN)
- `B9481042` 79/79A Circuit Road Hawker Centre (postal: 370079, status: ERROR)

Changed
- `20254609076` Blk 72, Marine Drive
  - createdAt: 2026-03-05T08:12:14.018Z -> 2026-07-06T09:00:41.108Z
  - id: 773 -> 2796
  - rvmOpeningHours: Mon - Sun:  24 Hrs -> null
  - supplierId: RVMS001 -> null
- `20254709350` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `20254709486` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `20255110623` ONE Supermarket Pte. Ltd.
  - address: Blk 201B Tampines Street 21, 522201 -> Blk 201B Tampines St 21, #01-1091, 522201
  - latitude: 1.35344200 -> 1.35338600
  - locationName: One Supermarket Blk 201B Tampines Street 21 -> ONE Supermarket Pte. Ltd.
  - longitude: 103.95296100 -> 103.95307800
- `B5052510A` Food Joy Buona Vista
  - createdAt: 2026-06-14T20:18:14.103Z -> 2026-07-06T09:00:45.564Z
  - id: 2744 -> 2797
- `B5052543A` Phan 99 2 SELETAR NORTH LINK
  - createdAt: 2026-06-14T20:18:12.788Z -> 2026-07-06T09:00:46.144Z
  - id: 2743 -> 2798
- `B5052636A` Culina 15 Dempsey
  - createdAt: 2026-06-14T20:18:19.919Z -> 2026-07-06T09:00:46.144Z
  - id: 2746 -> 2800
- `B5481090A` Supernature Dempsey Road
  - createdAt: 2026-06-14T20:18:17.347Z -> 2026-07-06T09:00:46.144Z
  - id: 2745 -> 2799
- `B5481205` MSE Family Go Green Week’s Sustainability Fair
  - address: 20 Ghim Moh Rd, 270020 -> 40 Scotts Road, 228231
  - latitude: 1.31113400 -> 1.31063600
  - locationName: 20 Ghim Moh Road Market & Food Centre -> MSE Family Go Green Week’s Sustainability Fair
  - longitude: 103.78821200 -> 103.83630300
  - postalCode: 270020 -> 228231
  - zipcode: 270020 -> 228231
- `SGRVM0129` FORTUNE SUPERMARKET 780
  - address: Block 780 Woodlands Crescent #01-01, 730780 -> BLK 780 WOODLANDS CRESCENT #01-01 SINGAPORE, 730780
  - locationName: Fortune blk 780 Woodlands Cresent -> FORTUNE SUPERMARKET 780
- `SGRVM393` SACHI MINIMART PTE LTD
  - createdAt: 2026-06-01T09:11:48.105Z -> 2026-07-06T09:00:46.723Z
  - id: 2689 -> 2801
</details>

<details>
<summary><b>2026-07-06</b> · 1,165 locations · ±2</summary>

- Snapshot size: **1165** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `20255010218` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206 -> 206 BEDOK NORTH STREET 1 #01-355 SINGAPORE 460206, 460206
  - latitude: 1.32642100 -> 1.32646400
  - longitude: 103.93097300 -> 103.93095800
- `B5481015` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
</details>

<details>
<summary><b>2026-07-05</b> · 1,165 locations · +1 · ±1</summary>

- Snapshot size: **1165** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `B5481219` Empress Road Market and Food Centre (postal: 260007, status: RUNNING)

Changed
- `B5481015` FairPrice Rivervale Plaza
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
- `20261515332` SCARLETT@PASIR RIS MALL (postal: 519612, status: RUNNING)

Changed
- `B5481203` SHENG SIONG NEW BRIDGE CENTRE
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
- `20254709350` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `20254709486` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `20255010460` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `20255110621` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `B5481015` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `B5481152` Thai Supermarket Aperia Mall
  - address: 12 Kallang Avenue, #01-20, 339511 -> 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511
  - locationName: Thai Supermarket Pte Ltd -> Thai Supermarket Aperia Mall
  - longitude: 103.86432000 -> 103.86430200
- `B5481205` 20 Ghim Moh Road Market & Food Centre
  - address: 40 Scotts Road, 228231 -> 20 Ghim Moh Rd, 270020
  - latitude: 1.31063600 -> 1.31113400
  - locationName: MSE Family Go Green Week’s Sustainability Fair -> 20 Ghim Moh Road Market & Food Centre
  - longitude: 103.83630300 -> 103.78821200
  - postalCode: 228231 -> 270020
  - zipcode: 228231 -> 270020
- `SGRVM0018` Kampung Admiralty Hawker Centre
  - latitude: 1.44122000 -> 1.44010900
  - longitude: 103.80109000 -> 103.80067300
- `SGRVM0203` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `SGRVM0345` 310 Woodlands Street 31
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
- `SGRVM0219` 573B Woodlands Drive 16
  - latitude: 1.43085800 -> 1.43091100
  - longitude: 103.79521700 -> 103.79777600
- `SGRVM0398` 252 Jurong East Street 24
  - latitude: 1.34323600 -> 1.34307900
  - longitude: 103.73528400 -> 103.73822100
- `SGRVM0404` West Coast Market Square
  - latitude: 1.30307000 -> 1.30374700
  - locationName: 726 Clementi West Market -> West Coast Market Square
  - longitude: 103.76193400 -> 103.76421500
- `SGRVM0407` 505 Jurong West Market & Food Centre
  - locationName: 505 Jurong West Market -> 505 Jurong West Market & Food Centre
  - longitude: 103.71592500 -> 103.71853300
- `SGRVM0413` 221A Boon Lay Market
  - latitude: 1.34524700 -> 1.34584300
  - longitude: 103.71100500 -> 103.71309600
- `SGRVM0424` 20 Marsiling Lane Food Centre
  - address: 20 Marsiling Ln, Singapore 730020, 730020 -> 20 Marsiling Lane, Singapore 730020, 730020
  - latitude: 1.44380900 -> 1.44349800
  - longitude: 103.77602300 -> 103.77699500
</details>

<details>
<summary><b>2026-07-01</b> · 1,163 locations · +11 · ±1</summary>

- Snapshot size: **1163** locations
- Added: **11**
- Removed: **0**
- Changed: **1**

Added
- `B5052944` Teck Ghee Court Market & Food Centre (postal: 560341, status: RUNNING)
- `SGRVM0219` 573B Woodlands Drive 16 (postal: 732573, status: RUNNING)
- `SGRVM0397` Republic Polytechnic (postal: 738964, status: RUNNING)
- `SGRVM0398` 252 Jurong East Street 24 (postal: 600252, status: RUNNING)
- `SGRVM0402` 353 Clementi Food Center (postal: 120353, status: MAINTENANCE)
- `SGRVM0404` 726 Clementi West Market (postal: 120726, status: RUNNING)
- `SGRVM0406` Teban Market Place (postal: 601037, status: MAINTENANCE)
- `SGRVM0407` 505 Jurong West Market (postal: 640505, status: MAINTENANCE)
- `SGRVM0409` 445 Clementi Avenue 3 (postal: 121445, status: OFFLINE)
- `SGRVM0413` 221A Boon Lay Market (postal: 641221, status: MAINTENANCE)
- `SGRVM0424` 20 Marsiling Lane Food Centre (postal: 730020, status: RUNNING)

Changed
- `20255010218` Sparrows 206 Bedok North Street 1
  - address: 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE , 460206 -> 206 BEDOK NORTH STREET 1 #01-355, BEDOK CENTRAL AREA OFFICE, 460206
</details>

<details>
<summary><b>2026-06-30</b> · 1,152 locations · +4 · ±12</summary>

- Snapshot size: **1152** locations
- Added: **4**
- Removed: **0**
- Changed: **12**

Added
- `20254508882` Blk 72, Marine Drive (postal: 440072, status: RUNNING)
- `B5052936` Kovan Hougang Market and Food Centre (postal: 530209, status: UNKNOWN)
- `B5052941` Hougang 105 Hainanese Village Centre (postal: 530105, status: UNKNOWN)
- `B5481199` Marks & Spencer Raffles City (postal: 179103, status: offline)

Changed
- `20254809801` Fairprice Joo Chiat Complex
  - address: Blk 2 Joo Chiat Road #01-1139 / #02-1139 Joo Chiat Complex (420002), 420002 -> Blk 2 Joo Chiat Road #01-1139 Joo Chiat Complex (420002), 420002
- `20254909876` Fairprice Jewel
  - address: 78 Airport Boulevard #B2-205 to 208 Jewel Changi Airport (819666), 819666 -> 78 Airport Boulevard #B2-205 to 206 Jewel Changi Airport (819666), 819666
- `20255010453` Haig Road Market & Cooked Food Centre
  - address: Haig Road Blk 13/14, 430014 -> 14 Haig Road, 430014
  - locationName: Haig Road Hawker Centre -> Haig Road Market & Cooked Food Centre
- `20255010460` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `20255110621` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `20261515325` Bedok North Street 3 Blk 538 Hawker Centre
  - locationName: 538 Bedok North Street 3 -> Bedok North Street 3 Blk 538 Hawker Centre
- `20261515327` 50A Marine Terrace Hawker Centre
  - address: 50A Marine Ter, 441050 -> 50A Marine Terrace, 441050
  - locationName: 50A Marine Ter -> 50A Marine Terrace Hawker Centre
- `20261515336` 84 Marine Parade Central Market and Food Centre
  - locationName: 84 Marine Parade Central -> 84 Marine Parade Central Market and Food Centre
- `20261515339` Kaki Bukit 511 Market and Food Centre
  - locationName: 511 Bedok North Street 3 -> Kaki Bukit 511 Market and Food Centre
- `20261515346` Blk 4A Jalan Batu Hawker Centre
  - address: 4A Jln Batu, 432004 -> 4A Jalan Batu, 432004
  - locationName: 4A Jln Batu -> Blk 4A Jalan Batu Hawker Centre
- `B5481015` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
- `B5481045` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
</details>

<details>
<summary><b>2026-06-29</b> · 1,148 locations · +5</summary>

- Snapshot size: **1148** locations
- Added: **5**
- Removed: **0**
- Changed: **0**

Added
- `20261515325` 538 Bedok North Street 3 (postal: 460538, status: MAINTENANCE)
- `20261515327` 50A Marine Ter (postal: 441050, status: MAINTENANCE)
- `20261515336` 84 Marine Parade Central (postal: 440084, status: MAINTENANCE)
- `20261515339` 511 Bedok North Street 3 (postal: 460511, status: MAINTENANCE)
- `20261515346` 4A Jln Batu (postal: 432004, status: MAINTENANCE)
</details>

<details>
<summary><b>2026-06-28</b> · 1,143 locations · ±7</summary>

- Snapshot size: **1143** locations
- Added: **0**
- Removed: **0**
- Changed: **7**

Changed
- `B5481015` FairPrice Hougang Mall
  - address: 118 Rivervale Drive #01-08 Rivervale Plaza, 540118 -> #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766
  - latitude: 1.39196000 -> 1.37250000
  - locationName: FairPrice Rivervale Plaza -> FairPrice Hougang Mall
  - longitude: 103.90472000 -> 103.89380000
  - postalCode: 540118 -> 538766
  - zipcode: 540118 -> 538766
- `B5481152` Thai Supermarket Pte Ltd
  - address: 12 KALLANG AVENUE #01-09/15,#01-17/19, APERIA, 339511 -> 12 Kallang Avenue, #01-20, 339511
  - locationName: Thai Supermarket Aperia Mall -> Thai Supermarket Pte Ltd
  - longitude: 103.86430200 -> 103.86432000
- `B5481197` Telok Blangah Rise Market
  - supplierId: null -> TOMRA001
- `B5481205` MSE Family Go Green Week’s Sustainability Fair
  - supplierId: null -> TOMRA001
- `B5481208` Toa Payoh West Market and Food Court
  - supplierId: null -> TOMRA001
- `B5481213` Li Li Cheng Punggol
  - supplierId: null -> TOMRA001
- `SGRVM0203` FairPrice Orchid Country Club
  - address: 6 TUAS SOUTH STREET 15 #01-102, 636906 -> 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162
  - latitude: 1.27231800 -> 1.41085000
  - locationName: TUAS SOUTH MINIMART -> FairPrice Orchid Country Club
  - longitude: 103.63449900 -> 103.84260000
  - postalCode: 636906 -> 769162
  - zipcode: 636906 -> 769162
</details>

<details>
<summary><b>2026-06-27</b> · 1,143 locations · +3 · ±1</summary>

- Snapshot size: **1143** locations
- Added: **3**
- Removed: **0**
- Changed: **1**

Added
- `B5481197` Telok Blangah Rise Market (postal: 090036, status: UNKNOWN)
- `B5481208` Toa Payoh West Market and Food Court (postal: 310127, status: UNKNOWN)
- `B5481213` Li Li Cheng Punggol (postal: 823273, status: MAINTENANCE)

Changed
- `B5481045` FairPrice 682 Hougang Avenue 4
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
- `B5052932` 11 Telok Blangah Crescent Market and Food Centre (postal: 090011, status: MAINTENANCE)
- `b5481217` Shunfu Mart (postal: 570320, status: offline)
</details>

<details>
<summary><b>2026-06-23</b> · 1,138 locations · +1 · ±2</summary>

- Snapshot size: **1138** locations
- Added: **1**
- Removed: **0**
- Changed: **2**

Added
- `20255010453` Haig Road Hawker Centre (postal: 430014, status: ERROR)

Changed
- `20255010208` Eunos Crescent Blk 4A Hawker Centre
  - locationName: Eunos Crescent Blk 4A -> Eunos Crescent Blk 4A Hawker Centre
- `B5481045` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
</details>

<details>
<summary><b>2026-06-22</b> · 1,137 locations · +2 · ±3</summary>

- Snapshot size: **1137** locations
- Added: **2**
- Removed: **0**
- Changed: **3**

Added
- `20254909868` Tampines Round Market and Food Centre (postal: 521137, status: RUNNING)
- `20255010208` Eunos Crescent Blk 4A (postal: 402004, status: OFFLINE)

Changed
- `20255010460` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `20255110621` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `B5481045` FairPrice 682 Hougang Avenue 4
  - address: 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - latitude: 1.39210000 -> 1.37453000
  - locationName: FairPrice Rivervale Mall -> FairPrice 682 Hougang Avenue 4
  - longitude: 103.90470000 -> 103.88562000
  - postalCode: 545082 -> 530682
  - zipcode: 545082 -> 530682
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
- `B5481198` Blk 112 Jalan Bukit Merah Market and Food Centre (postal: 160112, status: UNKNOWN)
- `B5481200` Tekka Centre / Zhu Jiao Market (postal: 210665, status: UNKNOWN)
- `B5481205` MSE Family Go Green Week’s Sustainability Fair (postal: 228231, status: offline)
- `B5481211` Toa Payoh Lorong 8 Blk 210 Hawker Centre (postal: 310210, status: MAINTENANCE)
- `B5481212` Holland Drive Market and Food Centre (postal: 270044, status: UNKNOWN)
- `B5481214` Blk 6 Tanjong Pagar Plaza Market and Food Centre (postal: 081006, status: UNKNOWN)
- `B5481215` Toa Payoh Lorong 4 Blk 94 Hawker Centre (postal: 310094, status: UNKNOWN)

Changed
- `20255010460` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `20255110621` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `B9481038` 672 Klang Lane- Little India
  - locationName: Little India - Klang - 672 Klang Lane -> 672 Klang Lane- Little India
</details>

<details>
<summary><b>2026-06-19</b> · 1,128 locations · ±2</summary>

- Snapshot size: **1128** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `20255010460` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `20255110621` FairPrice Tampines Mall
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
- `20254909876` Fairprice Jewel (postal: 819666, status: MAINTENANCE)

Changed
- `20255010460` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
- `20255110621` FairPrice Our Tampines Hub
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
- `20254909865` ITE College East (postal: 486047, status: ERROR)
- `B5481196` Pek Kio Market & Food Centre (postal: 211041, status: MAINTENANCE)
- `B5481206` Bukit Merah Central Food Centre (postal: 150163, status: MAINTENANCE)
- `B5481218` Blk 115 Bukit Merah View Market and Food Centre (postal: 151115, status: MAINTENANCE)
- `B9481038` Little India - Klang - 672 Klang Lane (postal: 211672, status: MAINTENANCE)
</details>

<details>
<summary><b>2026-06-16</b> · 1,122 locations · +5 · ±3</summary>

- Snapshot size: **1122** locations
- Added: **5**
- Removed: **0**
- Changed: **3**

Added
- `20254809801` Fairprice Joo Chiat Complex (postal: 420002, status: OFFLINE)
- `B5052510A` Food Joy Buona Vista (postal: 118157, status: offline)
- `B5052543A` Phan 99 2 SELETAR NORTH LINK (postal: 797601, status: offline)
- `B5052636A` Culina 15 Dempsey (postal: 249675, status: offline)
- `B5481090A` Supernature Dempsey Road (postal: 249686, status: offline)

Changed
- `20255010460` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `20255110621` FairPrice Tampines Mall
  - address: 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523 -> 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510
  - latitude: 1.35278200 -> 1.35245700
  - locationName: FairPrice Our Tampines Hub -> FairPrice Tampines Mall
  - longitude: 103.93962000 -> 103.94467000
  - postalCode: 528523 -> 529510
  - zipcode: 528523 -> 529510
- `B5481045` FairPrice Rivervale Mall
  - address: Block 682 Hougang Avenue 4 #01-310, 530682 -> 11 Rivervale Crescent #03-01 Rivervale Mall (545082), 545082
  - latitude: 1.37453000 -> 1.39210000
  - locationName: FairPrice 682 Hougang Avenue 4 -> FairPrice Rivervale Mall
  - longitude: 103.88562000 -> 103.90470000
  - postalCode: 530682 -> 545082
  - zipcode: 530682 -> 545082
</details>

<details>
<summary><b>2026-06-15</b> · 1,117 locations · +1</summary>

- Snapshot size: **1117** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `20254909869` Dunman Food Centre (postal: 424768, status: RUNNING)
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
- `B5052933` Toa Payoh Vista Market (postal: 310074, status: MAINTENANCE)
- `B5481201` National University of Singapore (NUS) Frontier Canteen (postal: 117543, status: MAINTENANCE)
- `B5481202` Cold Storage Orchard Hotel (postal: 238879, status: MAINTENANCE)
- `B5481203` SHENG SIONG NEW BRIDGE CENTRE (postal: 050336, status: UNKNOWN)
- `B5481204` Redhill Food Centre (postal: 150085, status: UNKNOWN)
- `B5481207` Alexandra Village Food Centre (postal: 150120, status: MAINTENANCE)
- `B5481209` Mayflower Market (postal: 560162, status: MAINTENANCE)
- `B5481216` Mei Chin Road Market (postal: 140159, status: MAINTENANCE)

Changed
- `B5052940` Ang Mo Kio Market & Food Centre Blk 724
  - locationName: 724 AMK Market & Food Centre -> Ang Mo Kio Market & Food Centre Blk 724
- `B5052943` Kebun Baru Food Centre Block 226H
  - locationName: Kebun Baru Food Centre -> Kebun Baru Food Centre Block 226H
- `SGRVM0112` SHENG SIONG BLK 643 SENJA CLOSE
  - locationName: SHENG SIONG BLK 643 SENJA CLOSE  -> SHENG SIONG BLK 643 SENJA CLOSE
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
- `B5052940` 724 AMK Market & Food Centre (postal: 560724, status: RUNNING)

Changed
- `SGRVM0077` Prime Supermarket 678A Woodlands Avenue 6
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
- `B5052927` 628 Ang Mo Kio Food Centre
  - locationName: Ang Mo Kio 628 Market -> 628 Ang Mo Kio Food Centre
- `B5481210` All India Supermart Pte Ltd
  - address: 41 NORRIS RD, 208282 -> 41 Norris Road, 208282
  - locationName: ALL INDIA SUPERMART PTE LTD -> All India Supermart Pte Ltd
</details>

<details>
<summary><b>2026-06-08</b> · 1,107 locations · +1</summary>

- Snapshot size: **1107** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `20254909880` Kallang Estate Fresh Market and Food Centre (postal: 397972, status: RUNNING)
</details>

<details>
<summary><b>2026-06-07</b> · 1,106 locations · +3</summary>

- Snapshot size: **1106** locations
- Added: **3**
- Removed: **0**
- Changed: **0**

Added
- `B5052926` Chong Boon Market & Food Centre (postal: 561453, status: RUNNING)
- `B5052927` Ang Mo Kio 628 Market (postal: 560628, status: RUNNING)
- `B5052943` Kebun Baru Food Centre (postal: 568226, status: RUNNING)
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
- `SGRVM0198` Bazaar Westlite Toh Guan Dormitory (postal: 608596, status: RUNNING)

Changed
- `SGRVM0160` SHENG SIONG BLK 547 SEGAR RD
  - locationName: SHENG SIONG BLK 547 SEGAR RD  -> SHENG SIONG BLK 547 SEGAR RD
</details>

<details>
<summary><b>2026-06-04</b> · 1,102 locations · +1</summary>

- Snapshot size: **1102** locations
- Added: **1**
- Removed: **0**
- Changed: **0**

Added
- `B5481210` ALL INDIA SUPERMART PTE LTD (postal: 208282, status: RUNNING)
</details>

<details>
<summary><b>2026-06-03</b> · 1,101 locations · +1 · ±1</summary>

- Snapshot size: **1101** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `SGRVM0393` SACHI MINIMART PTE LTD (postal: 608537, status: RUNNING)

Changed
- `SGRVM0385` 361 Sembawang Crescent
  - latitude: 1.44657900 -> 1.44640100
  - locationName: 361 SEMBWANG CRESCENT -> 361 Sembawang Crescent
  - longitude: 103.81192800 -> 103.81393200
</details>

<details>
<summary><b>2026-06-02</b> · 1,100 locations · +10 · ±10</summary>

- Snapshot size: **1100** locations
- Added: **10**
- Removed: **0**
- Changed: **10**

Added
- `20254909886` Pasir Ris Central Hawker Centre (postal: 519641, status: RUNNING)
- `SGRVM0214` TAMAN JURONG MARKET & FOOD CENTRE (postal: 618499, status: RUNNING)
- `SGRVM0385` 361 SEMBWANG CRESCENT (postal: 750361, status: OFFLINE)
- `SGRVM0389` YISHUN PARK HAWKER (postal: 768867, status: RUNNING)
- `SGRVM0390` Senja Hawker Centre (postal: 677632, status: RUNNING)
- `SGRVM0399` BUKIT BATOK WEST HAWKER CENTRE (postal: 650469, status: RUNNING)
- `SGRVM0401` Bukit Panjang Hawker Centre (postal: 679947, status: RUNNING)
- `SGRVM0420` SHENG SIONG BLK 120 CANBERRA CRESCENT (postal: 750120, status: RUNNING)
- `SGRVM0421` BUKIT CANBERRA HAWKER CENTRE (postal: 756973, status: RUNNING)
- `SGRVM0422` SEMBAWANG RECREATION CENTRE (postal: 759774, status: RUNNING)

Changed
- `20254909889` Lion City Supermarket Geylang Road
  - locationName: Lion City Bai Hui 349 Geylang Road -> Lion City Supermarket Geylang Road
- `B5052481` SHENG SIONG BLK 473 FERNVALE STREET
  - locationName: SHENG SIONG BLK 473 FERNVALE STREET  -> SHENG SIONG BLK 473 FERNVALE STREET
- `B5052546` SHENG SIONG BLK 231 SUMANG LANE
  - address: BLK 231 SUMANG LANE #01-02 , 820231 -> BLK 231 SUMANG LANE #01-02, 820231
  - locationName: SHENG SIONG BLK 231 SUMANG LANE  -> SHENG SIONG BLK 231 SUMANG LANE
- `B5052931` Phan 66 PPT Lodge 1A Dormitory
  - address: 8 Seletar North Link #01-03, 797455 -> 8 Seletar North Link #01-03, PPT Lodge 1A, 797455
  - locationName: Phan 66 8 Seletar North Link -> Phan 66 PPT Lodge 1A Dormitory
- `B5052937` SHENG SIONG THOMSON IMPERIAL COURT
  - locationName: SHENG SIONG 200 UPPER THOMSON RD, THOMSON IMPERIAL COURT -> SHENG SIONG THOMSON IMPERIAL COURT
- `B5481045` FairPrice 682 Hougang Avenue 4
  - address: Block 682 Hougang Avenue 4 #01-310 , 530682 -> Block 682 Hougang Avenue 4 #01-310, 530682
  - locationName: FairPrice Hougang 682 -> FairPrice 682 Hougang Avenue 4
- `SGRVM0085` 330 Clementi Ave 2
  - latitude: 1.31417000 -> 1.31374300
  - longitude: 103.76716000 -> 103.76782800
- `SGRVM0124` BISMILLAH MINIMART 32 MANDAI
  - supplierId: null -> SGRECYCLE001
- `SGRVM0316` 618 Choa Chu Kang North 7
  - latitude: 1.40074500 -> 1.39868100
  - longitude: 103.74163500 -> 103.74606000
- `SGRVM393` SACHI MINIMART PTE LTD
  - createdAt: 2026-05-20T09:11:21.569Z -> 2026-06-01T09:11:48.105Z
  - id: 2660 -> 2689
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
- `B5052923` Zion Riverside Food Centre (postal: 247792, status: MAINTENANCE)
- `B5052924` Pasir Panjang Food Centre (postal: 118543, status: MAINTENANCE)
- `B5052925` Beo Crescent Market (postal: 169982, status: MAINTENANCE)
- `B5052934` Holland Village Market and Food Centre (postal: 277700, status: MAINTENANCE)
- `B5052935` Tiong Bahru Market (postal: 168898, status: MAINTENANCE)
- `B5052938` Margaret Drive Hawker Centre (postal: 142038, status: MAINTENANCE)
- `B5052942` Tanglin Halt Market (postal: 148813, status: MAINTENANCE)
- `B5052945` Commonwealth Crescent Market (postal: 149644, status: RUNNING)
- `B5052946` Adam Road Food Centre (postal: 289876, status: MAINTENANCE)
</details>

<details>
<summary><b>2026-05-29</b> · 1,081 locations · +7</summary>

- Snapshot size: **1081** locations
- Added: **7**
- Removed: **0**
- Changed: **0**

Added
- `20254909889` Lion City Bai Hui 349 Geylang Road (postal: 389370, status: ERROR)
- `B5052928` Fernvale Hawker Centre & Market (postal: 797650, status: MAINTENANCE)
- `B5052929` Serangoon Garden Market (postal: 555945, status: MAINTENANCE)
- `B5052930` Chomp Chomp Food Centre (postal: 557269, status: OFFLINE)
- `B5052931` Phan 66 8 Seletar North Link (postal: 797455, status: MAINTENANCE)
- `B5052937` SHENG SIONG 200 UPPER THOMSON RD, THOMSON IMPERIAL COURT (postal: 574424, status: MAINTENANCE)
- `B5052939` SCARLETT@AMK 710A (postal: 561710, status: MAINTENANCE)
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
- `B5481045` FairPrice Hougang 682
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
- `SGRVM0124` BISMILLAH MINIMART 32 MANDAI (postal: 729939, status: offline)
- `SGRVM393` SACHI MINIMART PTE LTD (postal: 608537, status: offline)
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
- `20255110624` TRIPLE N SUPERMART PTE LTD (postal: 415814, status: MAINTENANCE)
</details>

<details>
<summary><b>2026-05-18</b> · 1,071 locations · ±9</summary>

- Snapshot size: **1071** locations
- Added: **0**
- Removed: **0**
- Changed: **9**

Changed
- `20254508884` Blk 257, Pasir Ris Street 21
  - latitude: 1.36430200 -> 1.36714600
  - longitude: 103.96473400 -> 103.96369900
- `20254508891` Blk 160, Pasir Ris Street 13
  - address: Blk 158, Pasir Ris Street 11, 510158 -> Blk 160, Pasir Ris Street 13, 510160
  - latitude: 1.36457900 -> 1.36408600
  - locationName: Blk 158, Pasir Ris Street 11 -> Blk 160, Pasir Ris Street 13
  - longitude: 103.96215800 -> 103.96253200
  - postalCode: 510158 -> 510160
  - zipcode: 510158 -> 510160
- `B5052365` SHENG SIONG BLK 410A SIN MING AVENUE
  - locationName: SHENG SIONG BLK 410A SIN MING AVENUE  -> SHENG SIONG BLK 410A SIN MING AVENUE
- `B5052471` Cold Storage Marina Bay Sands
  - latitude: 1.28366000 -> 1.28622600
  - longitude: 103.85930000 -> 103.85976400
- `B5052544` Don Don Donki (Suntec City Mall)
  - latitude: 1.29500000 -> 1.29320000
  - longitude: 103.85830000 -> 103.85700000
- `B9051010` SHENG SIONG BLK 52 CHIN SWEE ROAD
  - locationName: SHENG SIONG BLK 52 CHIN SWEE ROAD  -> SHENG SIONG BLK 52 CHIN SWEE ROAD
- `SGRVM0169` SHENG SIONG BLK 675 YISHUN AVENUE 4
  - locationName: SHENG SIONG BLK 675 YISHUN AVENUE 4  -> SHENG SIONG BLK 675 YISHUN AVENUE 4
- `SGRVM0203` TUAS SOUTH MINIMART
  - address: 1 Orchid Club Road #01-34 Orchid Country Club Singapore 769162, 769162 -> 6 TUAS SOUTH STREET 15 #01-102, 636906
  - latitude: 1.41085000 -> 1.27231800
  - locationName: FairPrice Orchid Country Club -> TUAS SOUTH MINIMART
  - longitude: 103.84260000 -> 103.63449900
  - postalCode: 769162 -> 636906
  - zipcode: 769162 -> 636906
- `SGRVM0288` 201 Marsiling Dr
  - latitude: 1.43573000 -> 1.44269800
  - longitude: 103.79036200 -> 103.77542100
</details>

<details>
<summary><b>2026-05-17</b> · 1,071 locations · +1 · ±1</summary>

- Snapshot size: **1071** locations
- Added: **1**
- Removed: **0**
- Changed: **1**

Added
- `20254909874` FairPrice Bedok Reservoir  (postal: 470745, status: MAINTENANCE)

Changed
- `20254709523` Blk 226, Simei Street 4
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
- `20254508996` Blk 187, Pasir Ris Street 11
  - address: Blk 198, Pasir Ris Street 12, 510198 -> Blk 187, Pasir Ris Street 11, 510187
  - latitude: 1.36689300 -> 1.36464200
  - locationName: Blk 198, Pasir Ris Street 12 -> Blk 187, Pasir Ris Street 11
  - longitude: 103.96026900 -> 103.95942400
  - postalCode: 510198 -> 510187
  - zipcode: 510198 -> 510187
- `B5481015` FairPrice Rivervale Plaza
  - address: #B1-07 Hougang Mall 90 Hougang Ave 10 (538766), 538766 -> 118 Rivervale Drive #01-08 Rivervale Plaza, 540118
  - latitude: 1.37250000 -> 1.39196000
  - locationName: FairPrice Hougang Mall -> FairPrice Rivervale Plaza
  - longitude: 103.89380000 -> 103.90472000
  - postalCode: 538766 -> 540118
  - zipcode: 538766 -> 540118
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
- `SGRVM0232` 417 Canberra Rd
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
<summary><b>2026-05-05</b> · 1,070 locations · ±1</summary>

- Snapshot size: **1070** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `B5481076` Cold Storage Sentosa Cove
  - latitude: 1.24700000 -> 1.24730900
  - longitude: 103.83960000 -> 103.84010500
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
- `20254609244` Blk 2, Chai Chee Road
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
- `SGRVM0081` Prime Supermarket Blk 761 Yishun (postal: 760761, status: RUNNING)
</details>

<details>
<summary><b>2026-04-30</b> · 1,069 locations · ±1</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `B9481015` SHENG SIONG 19 SERANGOON NORTH AVE 5
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
- `SGRVM0248` 260 Boon Lay Dr
  - latitude: 1.34570500 -> 1.34515700
  - longitude: 103.70661000 -> 103.70801900
- `SGRVM0273` 190 Boon Lay Dr
  - latitude: 1.34533900 -> 1.34515300
  - longitude: 103.71208600 -> 103.71188200
- `SGRVM0314` 515 Jurong West Street 52
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
- `SGRVM0344` 160 Woodlands Street 13
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
- `20254609244` Blk 2, Chai Chee Road
  - latitude: 1.32259100 -> 1.32695500
  - longitude: 103.91987100 -> 103.92272100
- `20254709306` Blk 50, Chai Chee Street
  - latitude: 1.32891200 -> 1.32938200
  - longitude: 103.92211300 -> 103.92245000
- `SGRVM0071` 550 Choa Chu Kang Street 52
  - latitude: 1.44416800 -> 1.39406500
  - longitude: 103.77440800 -> 103.74272200
- `SGRVM0256` 771 Choa Chu Kang Street 54
  - address: 771 Choa Chu Kang Dr, 680771 -> 771 Choa Chu Kang Street 54, 680771
  - latitude: 1.39549000 -> 1.39447000
  - locationName: 771 Choa Chu Kang Dr -> 771 Choa Chu Kang Street 54
  - longitude: 103.74910000 -> 103.74923000
- `SGRVM0264` 657 Choa Chu Kang Cres
  - latitude: 1.38847600 -> 1.40046200
  - longitude: 103.74719700 -> 103.74973900
</details>

<details>
<summary><b>2026-04-20</b> · 1,069 locations · ±2</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `20254508898` Blk 742 Pasir Ris Street 71
  - address: Blk 740 Pasir Ris Street 71, 520740 -> Blk 742 Pasir Ris Street 71, 510742
  - latitude: 1.35941900 -> 1.37708700
  - locationName: Blk 740 Pasir Ris Street 71 -> Blk 742 Pasir Ris Street 71
  - longitude: 103.93291500 -> 103.93605600
  - postalCode: 520740 -> 510742
  - zipcode: 520740 -> 510742
- `20255110621` FairPrice Our Tampines Hub
  - address: 4 Tampines Central 5 #B1-12 Tampines Mall (529510), 529510 -> 1 Tampines Walk, Our Tampines Hub #B1-01 (528523), 528523
  - latitude: 1.35245700 -> 1.35278200
  - locationName: FairPrice Tampines Mall -> FairPrice Our Tampines Hub
  - longitude: 103.94467000 -> 103.93962000
  - postalCode: 529510 -> 528523
  - zipcode: 529510 -> 528523
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
- `B5481105` Block 170 Ang Mo Kio Avenue 4
  - address: 171 Ang Mo Kio Ave 4, 560171 -> 170 Ang Mo Kio Ave 4, 560170
  - latitude: 1.37478800 -> 1.37394300
  - locationName: Block 171 Ang Mo Kio Avenue 4 -> Block 170 Ang Mo Kio Avenue 4
  - longitude: 103.83564600 -> 103.83700700
  - postalCode: 560171 -> 560170
  - zipcode: 560171 -> 560170
- `B5481162` Block 272 Punggol Walk
  - address: Block 272A Punggol Walk, 820272 -> Block 272 Punggol Walk, 820272
  - latitude: 1.40299700 -> 1.40287000
  - locationName: Block 272A Punggol Walk -> Block 272 Punggol Walk
  - longitude: 103.90069600 -> 103.90076300
</details>

<details>
<summary><b>2026-04-17</b> · 1,069 locations · ±3</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `20254709539` Blk 348, Ubi Avenue 1
  - address: Blk 346, Ubi Avenue 1, 400346 -> Blk 348, Ubi Avenue 1, 400348
  - latitude: 1.32601400 -> 1.32615800
  - locationName: Blk 346, Ubi Avenue 1 -> Blk 348, Ubi Avenue 1
  - longitude: 103.89963300 -> 103.90025500
  - postalCode: 400346 -> 400348
  - zipcode: 400346 -> 400348
- `B5052355` Prime Supermarket 322 Sumang Walk
  - locationName: Prime Supermarket Sumang Walk -> Prime Supermarket 322 Sumang Walk
- `SGRVM0077` Prime Supermarket 687A Woodlands Avenue 6
  - locationName: Prime Supermarket Woodlands Avenue 6 -> Prime Supermarket 687A Woodlands Avenue 6
</details>

<details>
<summary><b>2026-04-16</b> · 1,069 locations · ±1</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `B5052550` SHENG SIONG BLK 671 EDGEFIELD PLAINS
  - rvmOpeningHours: "" -> Mon - Sun:  07:00 AM - 11:00 PM
</details>

<details>
<summary><b>2026-04-15</b> · 1,069 locations · ±3</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **3**

Changed
- `20254709350` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `20254709486` Giant Hypermarket Tampines
  - address: BLK 602A TAMPINES AVENUE 9 #01-01, 521602 -> 21 Tampines North Drive 2 #03-01, 528765
  - latitude: 1.36125300 -> 1.37215500
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9 -> Giant Hypermarket Tampines
  - longitude: 103.93758600 -> 103.93198200
  - postalCode: 521602 -> 528765
  - zipcode: 521602 -> 528765
- `20255010207` Changi Airport Terminal 4
  - address: 30 Airport Boulevard, Singapore 819662, Level 2M Outside Kopitiam, 819662 -> 10 Airport Boulevard, Singapore 819665, Level 2M Outside Kopitiam, 819662
</details>

<details>
<summary><b>2026-04-14</b> · 1,069 locations · ±2</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `20254709350` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - address: 21 Tampines North Drive 2 #03-01, 528765 -> BLK 602A TAMPINES AVENUE 9 #01-01, 521602
  - latitude: 1.37215500 -> 1.36125300
  - locationName: Giant Hypermarket Tampines -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - longitude: 103.93198200 -> 103.93758600
  - postalCode: 528765 -> 521602
  - zipcode: 528765 -> 521602
- `20254709486` SHENG SIONG BLK 602A TAMPINES AVENUE 9
  - locationName: SHENG SIONG BLK 602A TAMPINES AVENUE 9  -> SHENG SIONG BLK 602A TAMPINES AVENUE 9
</details>

<details>
<summary><b>2026-04-13</b> · 1,069 locations · ±2</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **2**

Changed
- `B5052557` Block 126A Edgedale Plains
  - locationName: Blk126A Edgedale Plains -> Block 126A Edgedale Plains
- `SGRVM0325` SHENG SIONG BLK 446 FAJAR ROAD
  - locationName: SHENG SIONG BLK 446 FAJAR ROAD  -> SHENG SIONG BLK 446 FAJAR ROAD
</details>

<details>
<summary><b>2026-04-12</b> · 1,069 locations · ±1</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **0**
- Changed: **1**

Changed
- `SGRVM0368` AJMAL TRADING GROUP - Jalan Papan Aspri Westlite
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
- `SGRVM0355` Raj Agro Kranji
  - locationName: Aaj Agro Kranji -> Raj Agro Kranji
</details>

<details>
<summary><b>2026-04-08</b> · 1,069 locations · −5</summary>

- Snapshot size: **1069** locations
- Added: **0**
- Removed: **5**
- Changed: **0**

Removed
- `B5052510A` Food Joy Buona Vista (postal: 118157, status: offline)
- `B5052543A` Phan 99 2 SELETAR NORTH LINK (postal: 797601, status: offline)
- `B5052636A` Culina 15 Dempsey (postal: 249675, status: offline)
- `B5481090A` Supernature Dempsey Road (postal: 249686, status: offline)
- `SGRVM0081` Prime Supermarket Blk 761 Yishun (postal: 760761, status: offline)
</details>
<!-- CHANGELOG:END -->
