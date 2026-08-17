# ReturnRight data analysis

_Snapshot: **2026-08-17** · 1,243 locations · `data/latest.json` · as of 17 Aug 2026, 16:22 UTC_

## Current snapshot

| Metric | Value |
| --- | --- |
| Total locations | 1,243 |
| Unique serials | 1,243 |
| Unique postal codes | 1,202 |
| Shared postal codes | 37 postcodes host 41 extra machines |

### Status

```mermaid
---
config:
  themeVariables:
    pie1: "#E69F00"
    pie2: "#56B4E9"
    pie3: "#009E73"
    pie4: "#F0E442"
    pie5: "#0072B2"
    pie6: "#D55E00"
    pie7: "#CC79A7"
    pie8: "#999999"
---
pie showData
    title "Machines by status"
    "RUNNING": 1188
    "FULL": 23
    "ERROR": 15
    "OFFLINE": 13
    "MAINTENANCE": 3
    "CLEANING": 1
```

| Status | Count | % |
| --- | --- | --- |
| RUNNING | 1,188 | 95.6% |
| FULL | 23 | 1.9% |
| ERROR | 15 | 1.2% |
| OFFLINE | 13 | 1.0% |
| MAINTENANCE | 3 | 0.2% |
| CLEANING | 1 | 0.1% |

### Supplier

```mermaid
---
config:
  themeVariables:
    xyChart:
      plotColorPalette: "#0072B2"
---
xychart-beta
    title "Machines by supplier"
    x-axis ["TOMRA001", "SGRECYCLE001", "RVMS001", "(none)"]
    y-axis "machines" 0 --> 524
    bar [455, 412, 368, 8]
```

| Supplier | Count | % |
| --- | --- | --- |
| TOMRA001 | 455 | 36.6% |
| SGRECYCLE001 | 412 | 33.1% |
| RVMS001 | 368 | 29.6% |
| (none) | 8 | 0.6% |

### Last connected

| Age | Count | % |
| --- | --- | --- |
| < 1 day | 1,242 | 99.9% |
| < 7 days | 1 | 0.1% |

## Operation timing (opening hours)

| Coverage | Machines | % |
| --- | --- | --- |
| 24 hours | 798 | 64.2% |
| Limited hours | 231 | 18.6% |
| Unknown | 214 | 17.2% |

### Hourly availability

```mermaid
---
config:
  themeVariables:
    xyChart:
      plotColorPalette: "#56B4E9"
  xyChart:
    width: 900
---
xychart-beta
    title "Average machines operating (2-hour buckets)"
    x-axis ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"]
    y-axis "machines" 0 --> 1184
    line [798, 798, 800, 844, 985, 1026, 1029, 1029, 1029, 1029, 1027, 983]
```

- Typical window: **07:00 → 23:00**
- Earliest open: **05:30**
- Latest close: **24:00**
- Peak: **1,029 machines** at **13:00**
- **231** machines with limited hours open all 7 days

### Status by supplier

| Supplier | CLEANING | ERROR | FULL | MAINTENANCE | OFFLINE | RUNNING | Total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (none) | 0 | 1 | 0 | 0 | 0 | 7 | 8 |
| RVMS001 | 0 | 2 | 4 | 2 | 0 | 360 | 368 |
| SGRECYCLE001 | 1 | 9 | 11 | 0 | 5 | 386 | 412 |
| TOMRA001 | 0 | 3 | 8 | 1 | 8 | 435 | 455 |

## Postal sectors & districts

```mermaid
---
config:
  themeVariables:
    xyChart:
      plotColorPalette: "#009E73"
  xyChart:
    chartOrientation: "horizontal"
    plotReservedSpacePercent: 40
---
xychart-beta
    title "Machines by postal district"
    x-axis ["D18", "D19", "D23", "D22", "D16", "D27", "D25", "D14", "D20", "D03", "D05", "D12", "D15", "D13", "D10", "D01", "D09", "D04", "D28", "D08", "D17", "D07", "D02", "D21", "D11", "D06", "D24", "D26"]
    y-axis "machines" 0 --> 195
    bar [169, 137, 126, 104, 100, 80, 70, 68, 54, 50, 40, 40, 29, 27, 25, 18, 18, 16, 13, 12, 9, 8, 7, 7, 6, 5, 4, 1]
```

All postal sectors, with the Singapore postal district each belongs to:

| Sector | Postal district | Area | Machines | % |
| --- | --- | --- | --- | --- |
| S52 | D18 | Pasir Ris, Tampines | 108 | 8.7% |
| S46 | D16 | Bedok, Upper East Coast, Eastwood, Kew Drive | 74 | 6.0% |
| S73 | D25 | Admiralty, Woodlands, Kranji, Woodgrove | 67 | 5.4% |
| S51 | D18 | Pasir Ris, Tampines | 61 | 4.9% |
| S64 | D22 | Boon Lay, Jurong, Tuas | 57 | 4.6% |
| S76 | D27 | Yishun, Sembawang | 54 | 4.3% |
| S68 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 52 | 4.2% |
| S82 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 49 | 3.9% |
| S53 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 43 | 3.5% |
| S67 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 37 | 3.0% |
| S65 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 36 | 2.9% |
| S56 | D20 | Ang Mo Kio, Bishan, Thomson | 35 | 2.8% |
| S54 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 31 | 2.5% |
| S12 | D05 | Buona Vista, West Coast, Pasir Panjang, Clementi New Town | 28 | 2.3% |
| S75 | D27 | Yishun, Sembawang | 26 | 2.1% |
| S60 | D22 | Boon Lay, Jurong, Tuas | 25 | 2.0% |
| S47 | D16 | Bedok, Upper East Coast, Eastwood, Kew Drive | 23 | 1.9% |
| S40 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 21 | 1.7% |
| S31 | D12 | Balestier, Toa Payoh, Serangoon | 20 | 1.6% |
| S57 | D20 | Ang Mo Kio, Bishan, Thomson | 19 | 1.5% |
| S15 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 18 | 1.4% |
| S38 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 18 | 1.4% |
| S39 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 18 | 1.4% |
| S14 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 16 | 1.3% |
| S16 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 16 | 1.3% |
| S61 | D22 | Boon Lay, Jurong, Tuas | 16 | 1.3% |
| S23 | D09 | Orchard, Cairnhill, River Valley | 15 | 1.2% |
| S55 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 14 | 1.1% |
| S32 | D12 | Balestier, Toa Payoh, Serangoon | 13 | 1.0% |
| S44 | D15 | East Coast, Marine Parade, Katong, Joo Chiat, Amber Road | 13 | 1.0% |
| S27 | D10 | Tanglin, Ardmore, Holland, Bukit Timah | 12 | 1.0% |
| S79 | D28 | Seletar, Yio Chu Kang | 12 | 1.0% |
| S09 | D04 | Harbourfront, Telok Blangah, Sentosa | 11 | 0.9% |
| S41 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 11 | 0.9% |
| S36 | D13 | Macpherson, Potong Pasir, Braddell | 8 | 0.6% |
| S43 | D15 | East Coast, Marine Parade, Katong, Joo Chiat, Amber Road | 8 | 0.6% |
| S13 | D05 | Buona Vista, West Coast, Pasir Panjang, Clementi New Town | 7 | 0.6% |
| S20 | D08 | Farrer Park, Serangoon Road, Little India | 7 | 0.6% |
| S24 | D10 | Tanglin, Ardmore, Holland, Bukit Timah | 7 | 0.6% |
| S33 | D12 | Balestier, Toa Payoh, Serangoon | 7 | 0.6% |
| S34 | D13 | Macpherson, Potong Pasir, Braddell | 7 | 0.6% |
| S37 | D13 | Macpherson, Potong Pasir, Braddell | 7 | 0.6% |
| S05 | D01 | Boat Quay, Raffles Place, Marina, Cecil, People's Park | 6 | 0.5% |
| S42 | D15 | East Coast, Marine Parade, Katong, Joo Chiat, Amber Road | 6 | 0.5% |
| S81 | D17 | Changi Airport, Changi Village, Loyang | 6 | 0.5% |
| S08 | D02 | Chinatown, Tanjong Pagar, Anson | 5 | 0.4% |
| S10 | D04 | Harbourfront, Telok Blangah, Sentosa | 5 | 0.4% |
| S11 | D05 | Buona Vista, West Coast, Pasir Panjang, Clementi New Town | 5 | 0.4% |
| S17 | D06 | City Hall, Clarke Quay, High Street | 5 | 0.4% |
| S18 | D07 | Beach Road, Bugis, Rochor, Golden Mile | 5 | 0.4% |
| S21 | D08 | Farrer Park, Serangoon Road, Little India | 5 | 0.4% |
| S30 | D11 | Newton, Novena, Watten Estate, Thomson | 5 | 0.4% |
| S35 | D13 | Macpherson, Potong Pasir, Braddell | 5 | 0.4% |
| S01 | D01 | Boat Quay, Raffles Place, Marina, Cecil, People's Park | 4 | 0.3% |
| S03 | D01 | Boat Quay, Raffles Place, Marina, Cecil, People's Park | 4 | 0.3% |
| S26 | D10 | Tanglin, Ardmore, Holland, Bukit Timah | 4 | 0.3% |
| S59 | D21 | Clementi Park, Upper Bukit Timah, Ulu Pandan | 4 | 0.3% |
| S63 | D22 | Boon Lay, Jurong, Tuas | 4 | 0.3% |
| S69 | D24 | Lim Chu Kang, Tengah | 4 | 0.3% |
| S19 | D07 | Beach Road, Bugis, Rochor, Golden Mile | 3 | 0.2% |
| S22 | D09 | Orchard, Cairnhill, River Valley | 3 | 0.2% |
| S48 | D16 | Bedok, Upper East Coast, Eastwood, Kew Drive | 3 | 0.2% |
| S50 | D17 | Changi Airport, Changi Village, Loyang | 3 | 0.2% |
| S58 | D21 | Clementi Park, Upper Bukit Timah, Ulu Pandan | 3 | 0.2% |
| S72 | D25 | Admiralty, Woodlands, Kranji, Woodgrove | 3 | 0.2% |
| S04 | D01 | Boat Quay, Raffles Place, Marina, Cecil, People's Park | 2 | 0.2% |
| S06 | D01 | Boat Quay, Raffles Place, Marina, Cecil, People's Park | 2 | 0.2% |
| S07 | D02 | Chinatown, Tanjong Pagar, Anson | 2 | 0.2% |
| S25 | D10 | Tanglin, Ardmore, Holland, Bukit Timah | 2 | 0.2% |
| S45 | D15 | East Coast, Marine Parade, Katong, Joo Chiat, Amber Road | 2 | 0.2% |
| S62 | D22 | Boon Lay, Jurong, Tuas | 2 | 0.2% |
| S28 | D11 | Newton, Novena, Watten Estate, Thomson | 1 | 0.1% |
| S66 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 1 | 0.1% |
| S78 | D26 | Mandai, Upper Thomson, Springleaf | 1 | 0.1% |
| S80 | D28 | Seletar, Yio Chu Kang | 1 | 0.1% |

## Rollout

Machines by `createdAt` month:

```mermaid
---
config:
  themeVariables:
    xyChart:
      plotColorPalette: "#D55E00"
---
xychart-beta
    title "Machines created per month"
    x-axis ["2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08"]
    y-axis "machines" 0 --> 976
    bar [198, 848, 3, 31, 56, 56, 51]
```

| Month | Machines | % |
| --- | --- | --- |
| 2026-02 | 198 | 15.9% |
| 2026-03 | 848 | 68.2% |
| 2026-04 | 3 | 0.2% |
| 2026-05 | 31 | 2.5% |
| 2026-06 | 56 | 4.5% |
| 2026-07 | 56 | 4.5% |
| 2026-08 | 51 | 4.1% |

## Newest machines

| # | Name | Postal | Status | Created |
| --- | --- | --- | --- | --- |
| 1 | 414 Pandan Gardens Road | 600414 | RUNNING | 16 Aug 2026 |
| 2 | 48 Teban Gardens Road | 600048 | RUNNING | 16 Aug 2026 |
| 3 | 601 Jurong West Street 62 | 640601 | RUNNING | 14 Aug 2026 |
| 4 | 640 Jurong West Street 61 | 640640 | RUNNING | 14 Aug 2026 |
| 5 | 689 Jurong West Central 1 | 640689 | RUNNING | 14 Aug 2026 |

## Longest standing

| # | Name | Postal | Status | Created |
| --- | --- | --- | --- | --- |
| 1 | Block 54 Geylang Bahru | 330054 | RUNNING | 9 Feb 2026 |
| 2 | 715 Jurong West Street 71 | 640715 | RUNNING | 21 Feb 2026 |
| 3 | 745 Yishun Street 72 | 760745 | RUNNING | 21 Feb 2026 |
| 4 | 746 Jurong West Street 73 | 640746 | RUNNING | 21 Feb 2026 |
| 5 | 153 Yung Ho Rd | 610153 | RUNNING | 21 Feb 2026 |

## History (132 snapshots · 2026-04-08 → 2026-08-17)

| Metric | Value |
| --- | --- |
| First snapshot | 1,069 |
| Current snapshot | 1,239 |
| Net change | +170 |
| Minimum | 1,069 (2026-04-08) |
| Maximum | 1,246 (2026-08-14) |
| Average | 1,127 |

### Totals across all days

| Metric | Total |
| --- | --- |
| Added | 288 |
| Removed | 123 |
| Changed | 287 |
| No-change days | 38 |

### Machines over time

```mermaid
---
config:
  themeVariables:
    xyChart:
      plotColorPalette: "#0072B2"
---
xychart-beta
    title "Snapshot count by month (end of month)"
    x-axis ["2026-04", "2026-05", "2026-06", "2026-07", "2026-08"]
    y-axis "machines" 0 --> 1425
    line [1069, 1090, 1152, 1206, 1239]
```

### Monthly change

```mermaid
---
config:
  themeVariables:
    xyChart:
      plotColorPalette: "#E69F00"
---
xychart-beta
    title "Net change per month"
    x-axis ["2026-04", "2026-05", "2026-06", "2026-07", "2026-08"]
    y-axis "machines" 0 --> 72
    bar [0, 20, 62, 43, 31]
```

| Month | Start → End | Added | Removed | Net |
| --- | --- | --- | --- | --- |
| 2026-04 | 1,069 → 1,069 | 0 | 5 | 0 |
| 2026-05 | 1,070 → 1,090 | 21 | 0 | +20 |
| 2026-06 | 1,090 → 1,152 | 63 | 1 | +62 |
| 2026-07 | 1,163 → 1,206 | 99 | 45 | +43 |
| 2026-08 | 1,208 → 1,239 | 105 | 72 | +31 |

### Most active days

| Date | Added | Removed | Changed | Locations |
| --- | --- | --- | --- | --- |
| 2026-08-14 | 32 | 0 | 4 | 1,246 |
| 2026-08-16 | 21 | 5 | 1 | 1,237 |
| 2026-08-15 | 0 | 25 | 8 | 1,221 |
| 2026-08-06 | 7 | 17 | 1 | 1,195 |
| 2026-08-05 | 5 | 17 | 17 | 1,205 |

**Retention:** 97.7% of the first snapshot's machines are still present (1044/1,069).

---

_Generated with `scripts/analyze_data.mjs --md`._
