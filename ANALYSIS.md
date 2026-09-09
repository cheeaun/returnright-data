# ReturnRight data analysis

_Snapshot: **2026-09-09** · 1,307 locations · `data/latest.json` · as of 9 Sept 2026, 16:25 UTC_

## Current snapshot

| Metric | Value |
| --- | --- |
| Total locations | 1,307 |
| Unique serials | 1,307 |
| Unique postal codes | 1,263 |
| Shared postal codes | 38 postcodes host 44 extra machines |

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
    "RUNNING": 1179
    "FULL": 95
    "OFFLINE": 15
    "ERROR": 13
    "MAINTENANCE": 3
    "offline": 2
```

| Status | Count | % |
| --- | --- | --- |
| RUNNING | 1,179 | 90.2% |
| FULL | 95 | 7.3% |
| OFFLINE | 15 | 1.1% |
| ERROR | 13 | 1.0% |
| MAINTENANCE | 3 | 0.2% |
| offline | 2 | 0.2% |

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
    y-axis "machines" 0 --> 565
    bar [491, 441, 373, 2]
```

| Supplier | Count | % |
| --- | --- | --- |
| TOMRA001 | 491 | 37.6% |
| SGRECYCLE001 | 441 | 33.7% |
| RVMS001 | 373 | 28.5% |
| (none) | 2 | 0.2% |

### Last connected

| Age | Count | % |
| --- | --- | --- |
| < 1 day | 1,301 | 99.5% |
| unknown | 3 | 0.2% |
| < 7 days | 2 | 0.2% |
| < 30 days | 1 | 0.1% |

## Operation timing (opening hours)

| Coverage | Machines | % |
| --- | --- | --- |
| 24 hours | 799 | 61.1% |
| Limited hours | 237 | 18.1% |
| Unknown | 271 | 20.7% |

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
    y-axis "machines" 0 --> 1192
    line [799, 799, 802, 850, 991, 1033, 1036, 1036, 1036, 1036, 1034, 988]
```

- Typical window: **07:00 → 23:00**
- Earliest open: **05:30**
- Latest close: **24:00**
- Peak: **1,036 machines** at **13:00**
- **237** machines with limited hours open all 7 days

### Status by supplier

| Supplier | ERROR | FULL | MAINTENANCE | OFFLINE | RUNNING | offline | Total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (none) | 0 | 0 | 0 | 0 | 0 | 2 | 2 |
| RVMS001 | 4 | 12 | 2 | 1 | 354 | 0 | 373 |
| SGRECYCLE001 | 5 | 37 | 0 | 8 | 391 | 0 | 441 |
| TOMRA001 | 4 | 46 | 1 | 6 | 434 | 0 | 491 |

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
    x-axis ["D18", "D19", "D23", "D22", "D16", "D27", "D25", "D14", "D20", "D03", "D05", "D12", "D15", "D13", "D10", "D09", "D01", "D04", "D28", "D08", "D07", "D17", "D24", "D02", "D21", "D11", "D06", "D26"]
    y-axis "machines" 0 --> 198
    bar [172, 154, 126, 110, 103, 95, 70, 68, 60, 50, 44, 40, 29, 27, 25, 19, 18, 16, 16, 12, 10, 9, 8, 7, 7, 6, 5, 1]
```

All postal sectors, with the Singapore postal district each belongs to:

| Sector | Postal district | Area | Machines | % |
| --- | --- | --- | --- | --- |
| S52 | D18 | Pasir Ris, Tampines | 111 | 8.5% |
| S46 | D16 | Bedok, Upper East Coast, Eastwood, Kew Drive | 76 | 5.8% |
| S76 | D27 | Yishun, Sembawang | 68 | 5.2% |
| S73 | D25 | Admiralty, Woodlands, Kranji, Woodgrove | 67 | 5.1% |
| S51 | D18 | Pasir Ris, Tampines | 61 | 4.7% |
| S64 | D22 | Boon Lay, Jurong, Tuas | 61 | 4.7% |
| S82 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 58 | 4.4% |
| S68 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 52 | 4.0% |
| S53 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 48 | 3.7% |
| S56 | D20 | Ang Mo Kio, Bishan, Thomson | 41 | 3.1% |
| S67 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 37 | 2.8% |
| S65 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 36 | 2.8% |
| S12 | D05 | Buona Vista, West Coast, Pasir Panjang, Clementi New Town | 31 | 2.4% |
| S54 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 31 | 2.4% |
| S75 | D27 | Yishun, Sembawang | 27 | 2.1% |
| S60 | D22 | Boon Lay, Jurong, Tuas | 25 | 1.9% |
| S47 | D16 | Bedok, Upper East Coast, Eastwood, Kew Drive | 24 | 1.8% |
| S40 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 21 | 1.6% |
| S31 | D12 | Balestier, Toa Payoh, Serangoon | 20 | 1.5% |
| S57 | D20 | Ang Mo Kio, Bishan, Thomson | 19 | 1.5% |
| S15 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 18 | 1.4% |
| S38 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 18 | 1.4% |
| S39 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 18 | 1.4% |
| S55 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 17 | 1.3% |
| S14 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 16 | 1.2% |
| S16 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 16 | 1.2% |
| S23 | D09 | Orchard, Cairnhill, River Valley | 16 | 1.2% |
| S61 | D22 | Boon Lay, Jurong, Tuas | 16 | 1.2% |
| S79 | D28 | Seletar, Yio Chu Kang | 15 | 1.1% |
| S32 | D12 | Balestier, Toa Payoh, Serangoon | 13 | 1.0% |
| S44 | D15 | East Coast, Marine Parade, Katong, Joo Chiat, Amber Road | 13 | 1.0% |
| S27 | D10 | Tanglin, Ardmore, Holland, Bukit Timah | 12 | 0.9% |
| S09 | D04 | Harbourfront, Telok Blangah, Sentosa | 11 | 0.8% |
| S41 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 11 | 0.8% |
| S13 | D05 | Buona Vista, West Coast, Pasir Panjang, Clementi New Town | 8 | 0.6% |
| S36 | D13 | Macpherson, Potong Pasir, Braddell | 8 | 0.6% |
| S43 | D15 | East Coast, Marine Parade, Katong, Joo Chiat, Amber Road | 8 | 0.6% |
| S69 | D24 | Lim Chu Kang, Tengah | 8 | 0.6% |
| S18 | D07 | Beach Road, Bugis, Rochor, Golden Mile | 7 | 0.5% |
| S20 | D08 | Farrer Park, Serangoon Road, Little India | 7 | 0.5% |
| S24 | D10 | Tanglin, Ardmore, Holland, Bukit Timah | 7 | 0.5% |
| S33 | D12 | Balestier, Toa Payoh, Serangoon | 7 | 0.5% |
| S34 | D13 | Macpherson, Potong Pasir, Braddell | 7 | 0.5% |
| S37 | D13 | Macpherson, Potong Pasir, Braddell | 7 | 0.5% |
| S05 | D01 | Boat Quay, Raffles Place, Marina, Cecil, People's Park | 6 | 0.5% |
| S42 | D15 | East Coast, Marine Parade, Katong, Joo Chiat, Amber Road | 6 | 0.5% |
| S63 | D22 | Boon Lay, Jurong, Tuas | 6 | 0.5% |
| S81 | D17 | Changi Airport, Changi Village, Loyang | 6 | 0.5% |
| S08 | D02 | Chinatown, Tanjong Pagar, Anson | 5 | 0.4% |
| S10 | D04 | Harbourfront, Telok Blangah, Sentosa | 5 | 0.4% |
| S11 | D05 | Buona Vista, West Coast, Pasir Panjang, Clementi New Town | 5 | 0.4% |
| S17 | D06 | City Hall, Clarke Quay, High Street | 5 | 0.4% |
| S21 | D08 | Farrer Park, Serangoon Road, Little India | 5 | 0.4% |
| S30 | D11 | Newton, Novena, Watten Estate, Thomson | 5 | 0.4% |
| S35 | D13 | Macpherson, Potong Pasir, Braddell | 5 | 0.4% |
| S01 | D01 | Boat Quay, Raffles Place, Marina, Cecil, People's Park | 4 | 0.3% |
| S03 | D01 | Boat Quay, Raffles Place, Marina, Cecil, People's Park | 4 | 0.3% |
| S26 | D10 | Tanglin, Ardmore, Holland, Bukit Timah | 4 | 0.3% |
| S59 | D21 | Clementi Park, Upper Bukit Timah, Ulu Pandan | 4 | 0.3% |
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
    x-axis ["2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09"]
    y-axis "machines" 0 --> 984
    bar [198, 855, 3, 30, 55, 58, 97, 10]
```

| Month | Machines | % |
| --- | --- | --- |
| 2026-02 | 198 | 15.1% |
| 2026-03 | 855 | 65.4% |
| 2026-04 | 3 | 0.2% |
| 2026-05 | 30 | 2.3% |
| 2026-06 | 55 | 4.2% |
| 2026-07 | 58 | 4.4% |
| 2026-08 | 97 | 7.4% |
| 2026-09 | 10 | 0.8% |

## Newest machines

| # | Name | Postal | Status | Created |
| --- | --- | --- | --- | --- |
| 1 | FairPrice 498 Jurong West St 41 | 640498 | OFFLINE | 9 Sept 2026 |
| 2 | FairPrice SingPost Centre | 408600 | offline | 9 Sept 2026 |
| 3 | 512B Yishun St 51, Singapore 762512 | 762512 | RUNNING | 4 Sept 2026 |
| 4 | 799 Yishun Ring Rd, Singapore 760799 | 760799 | RUNNING | 4 Sept 2026 |
| 5 | 821 Yishun Street 81, Singapore 760821 | 760821 | RUNNING | 4 Sept 2026 |

## Longest standing

| # | Name | Postal | Status | Created |
| --- | --- | --- | --- | --- |
| 1 | Block 54 Geylang Bahru | 330054 | RUNNING | 9 Feb 2026 |
| 2 | 715 Jurong West Street 71 | 640715 | RUNNING | 21 Feb 2026 |
| 3 | 745 Yishun Street 72 | 760745 | ERROR | 21 Feb 2026 |
| 4 | 746 Jurong West Street 73 | 640746 | FULL | 21 Feb 2026 |
| 5 | 153 Yung Ho Rd | 610153 | RUNNING | 21 Feb 2026 |

## History (155 snapshots · 2026-04-08 → 2026-09-09)

| Metric | Value |
| --- | --- |
| First snapshot | 1,069 |
| Current snapshot | 1,341 |
| Net change | +272 |
| Minimum | 1,069 (2026-04-08) |
| Maximum | 1,341 (2026-09-09) |
| Average | 1,150 |

### Totals across all days

| Metric | Total |
| --- | --- |
| Added | 411 |
| Removed | 144 |
| Changed | 2,935 |
| No-change days | 41 |

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
    x-axis ["2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09"]
    y-axis "machines" 0 --> 1543
    line [1069, 1090, 1152, 1206, 1283, 1341]
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
    x-axis ["2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09"]
    y-axis "machines" 0 --> 87
    bar [0, 20, 62, 43, 75, 58]
```

| Month | Start → End | Added | Removed | Net |
| --- | --- | --- | --- | --- |
| 2026-04 | 1,069 → 1,069 | 0 | 5 | 0 |
| 2026-05 | 1,070 → 1,090 | 21 | 0 | +20 |
| 2026-06 | 1,090 → 1,152 | 63 | 1 | +62 |
| 2026-07 | 1,163 → 1,206 | 99 | 45 | +43 |
| 2026-08 | 1,208 → 1,283 | 168 | 91 | +75 |
| 2026-09 | 1,283 → 1,341 | 60 | 2 | +58 |

### Most active days

| Date | Added | Removed | Changed | Locations |
| --- | --- | --- | --- | --- |
| 2026-09-09 | 35 | 0 | 1,306 | 1,341 |
| 2026-08-14 | 32 | 0 | 4 | 1,246 |
| 2026-08-16 | 21 | 5 | 1 | 1,237 |
| 2026-08-15 | 0 | 25 | 8 | 1,221 |
| 2026-08-06 | 7 | 17 | 1 | 1,195 |

**Retention:** 98.9% of the first snapshot's machines are still present (1057/1,069).

---

_Generated with `scripts/analyze_data.mjs --md`._
