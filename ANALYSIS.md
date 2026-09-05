# ReturnRight data analysis

_Snapshot: **2026-09-04** · 1,299 locations · `data/latest.json` · as of 5 Sept 2026, 04:00 UTC_

## Current snapshot

| Metric | Value |
| --- | --- |
| Total locations | 1,299 |
| Unique serials | 1,299 |
| Unique postal codes | 1,257 |
| Shared postal codes | 38 postcodes host 42 extra machines |

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
    "RUNNING": 1251
    "FULL": 19
    "ERROR": 15
    "OFFLINE": 8
    "MAINTENANCE": 4
    "CLEANING": 1
    "offline": 1
```

| Status | Count | % |
| --- | --- | --- |
| RUNNING | 1,251 | 96.3% |
| FULL | 19 | 1.5% |
| ERROR | 15 | 1.2% |
| OFFLINE | 8 | 0.6% |
| MAINTENANCE | 4 | 0.3% |
| CLEANING | 1 | 0.1% |
| offline | 1 | 0.1% |

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
    y-axis "machines" 0 --> 564
    bar [490, 434, 374, 1]
```

| Supplier | Count | % |
| --- | --- | --- |
| TOMRA001 | 490 | 37.7% |
| SGRECYCLE001 | 434 | 33.4% |
| RVMS001 | 374 | 28.8% |
| (none) | 1 | 0.1% |

### Last connected

| Age | Count | % |
| --- | --- | --- |
| < 1 day | 1,296 | 99.8% |
| < 7 days | 2 | 0.2% |
| unknown | 1 | 0.1% |

## Operation timing (opening hours)

| Coverage | Machines | % |
| --- | --- | --- |
| 24 hours | 800 | 61.6% |
| Limited hours | 238 | 18.3% |
| Unknown | 261 | 20.1% |

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
    y-axis "machines" 0 --> 1194
    line [800, 800, 803, 851, 993, 1035, 1038, 1038, 1038, 1038, 1036, 990]
```

- Typical window: **07:00 → 23:00**
- Earliest open: **05:30**
- Latest close: **24:00**
- Peak: **1,038 machines** at **13:00**
- **238** machines with limited hours open all 7 days

### Status by supplier

| Supplier | CLEANING | ERROR | FULL | MAINTENANCE | OFFLINE | RUNNING | offline | Total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| (none) | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |
| RVMS001 | 0 | 1 | 1 | 1 | 4 | 367 | 0 | 374 |
| SGRECYCLE001 | 1 | 9 | 11 | 2 | 2 | 409 | 0 | 434 |
| TOMRA001 | 0 | 5 | 7 | 1 | 2 | 475 | 0 | 490 |

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
    x-axis ["D18", "D19", "D23", "D22", "D16", "D27", "D25", "D14", "D20", "D03", "D05", "D12", "D15", "D13", "D10", "D09", "D01", "D04", "D28", "D08", "D07", "D17", "D02", "D21", "D11", "D24", "D06", "D26"]
    y-axis "machines" 0 --> 198
    bar [172, 154, 126, 110, 103, 90, 70, 68, 59, 50, 44, 40, 29, 27, 25, 19, 18, 16, 16, 12, 10, 9, 7, 7, 6, 6, 5, 1]
```

All postal sectors, with the Singapore postal district each belongs to:

| Sector | Postal district | Area | Machines | % |
| --- | --- | --- | --- | --- |
| S52 | D18 | Pasir Ris, Tampines | 111 | 8.5% |
| S46 | D16 | Bedok, Upper East Coast, Eastwood, Kew Drive | 76 | 5.9% |
| S73 | D25 | Admiralty, Woodlands, Kranji, Woodgrove | 67 | 5.2% |
| S76 | D27 | Yishun, Sembawang | 63 | 4.8% |
| S51 | D18 | Pasir Ris, Tampines | 61 | 4.7% |
| S64 | D22 | Boon Lay, Jurong, Tuas | 61 | 4.7% |
| S82 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 58 | 4.5% |
| S68 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 52 | 4.0% |
| S53 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 48 | 3.7% |
| S56 | D20 | Ang Mo Kio, Bishan, Thomson | 41 | 3.2% |
| S67 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 37 | 2.8% |
| S65 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 36 | 2.8% |
| S12 | D05 | Buona Vista, West Coast, Pasir Panjang, Clementi New Town | 31 | 2.4% |
| S54 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 31 | 2.4% |
| S75 | D27 | Yishun, Sembawang | 27 | 2.1% |
| S60 | D22 | Boon Lay, Jurong, Tuas | 25 | 1.9% |
| S47 | D16 | Bedok, Upper East Coast, Eastwood, Kew Drive | 24 | 1.8% |
| S40 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 21 | 1.6% |
| S31 | D12 | Balestier, Toa Payoh, Serangoon | 20 | 1.5% |
| S15 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 18 | 1.4% |
| S38 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 18 | 1.4% |
| S39 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 18 | 1.4% |
| S57 | D20 | Ang Mo Kio, Bishan, Thomson | 18 | 1.4% |
| S55 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 17 | 1.3% |
| S14 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 16 | 1.2% |
| S16 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 16 | 1.2% |
| S23 | D09 | Orchard, Cairnhill, River Valley | 16 | 1.2% |
| S61 | D22 | Boon Lay, Jurong, Tuas | 16 | 1.2% |
| S79 | D28 | Seletar, Yio Chu Kang | 15 | 1.2% |
| S32 | D12 | Balestier, Toa Payoh, Serangoon | 13 | 1.0% |
| S44 | D15 | East Coast, Marine Parade, Katong, Joo Chiat, Amber Road | 13 | 1.0% |
| S27 | D10 | Tanglin, Ardmore, Holland, Bukit Timah | 12 | 0.9% |
| S09 | D04 | Harbourfront, Telok Blangah, Sentosa | 11 | 0.8% |
| S41 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 11 | 0.8% |
| S13 | D05 | Buona Vista, West Coast, Pasir Panjang, Clementi New Town | 8 | 0.6% |
| S36 | D13 | Macpherson, Potong Pasir, Braddell | 8 | 0.6% |
| S43 | D15 | East Coast, Marine Parade, Katong, Joo Chiat, Amber Road | 8 | 0.6% |
| S18 | D07 | Beach Road, Bugis, Rochor, Golden Mile | 7 | 0.5% |
| S20 | D08 | Farrer Park, Serangoon Road, Little India | 7 | 0.5% |
| S24 | D10 | Tanglin, Ardmore, Holland, Bukit Timah | 7 | 0.5% |
| S33 | D12 | Balestier, Toa Payoh, Serangoon | 7 | 0.5% |
| S34 | D13 | Macpherson, Potong Pasir, Braddell | 7 | 0.5% |
| S37 | D13 | Macpherson, Potong Pasir, Braddell | 7 | 0.5% |
| S05 | D01 | Boat Quay, Raffles Place, Marina, Cecil, People's Park | 6 | 0.5% |
| S42 | D15 | East Coast, Marine Parade, Katong, Joo Chiat, Amber Road | 6 | 0.5% |
| S63 | D22 | Boon Lay, Jurong, Tuas | 6 | 0.5% |
| S69 | D24 | Lim Chu Kang, Tengah | 6 | 0.5% |
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
    y-axis "machines" 0 --> 986
    bar [198, 857, 3, 30, 56, 58, 96, 1]
```

| Month | Machines | % |
| --- | --- | --- |
| 2026-02 | 198 | 15.2% |
| 2026-03 | 857 | 66.0% |
| 2026-04 | 3 | 0.2% |
| 2026-05 | 30 | 2.3% |
| 2026-06 | 56 | 4.3% |
| 2026-07 | 58 | 4.5% |
| 2026-08 | 96 | 7.4% |
| 2026-09 | 1 | 0.1% |

## Newest machines

| # | Name | Postal | Status | Created |
| --- | --- | --- | --- | --- |
| 1 | Block 511 Ang Mo Kio Ave 8 | 560511 | RUNNING | 2 Sept 2026 |
| 2 | Block 104B Ang Mo Kio St 11 | 560104 | RUNNING | 31 Aug 2026 |
| 3 | Lasalle College of the Arts | 187940 | RUNNING | 31 Aug 2026 |
| 4 | Resorts World Sentosa | 098269 | RUNNING | 31 Aug 2026 |
| 5 | Nanyang Academy of Fine Arts | 189655 | RUNNING | 31 Aug 2026 |

## Longest standing

| # | Name | Postal | Status | Created |
| --- | --- | --- | --- | --- |
| 1 | Block 54 Geylang Bahru | 330054 | RUNNING | 9 Feb 2026 |
| 2 | 715 Jurong West Street 71 | 640715 | ERROR | 21 Feb 2026 |
| 3 | 745 Yishun Street 72 | 760745 | RUNNING | 21 Feb 2026 |
| 4 | 746 Jurong West Street 73 | 640746 | FULL | 21 Feb 2026 |
| 5 | 153 Yung Ho Rd | 610153 | RUNNING | 21 Feb 2026 |

## History (150 snapshots · 2026-04-08 → 2026-09-04)

| Metric | Value |
| --- | --- |
| First snapshot | 1,069 |
| Current snapshot | 1,299 |
| Net change | +230 |
| Minimum | 1,069 (2026-04-08) |
| Maximum | 1,299 (2026-09-04) |
| Average | 1,144 |

### Totals across all days

| Metric | Total |
| --- | --- |
| Added | 367 |
| Removed | 142 |
| Changed | 327 |
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
    y-axis "machines" 0 --> 1494
    line [1069, 1090, 1152, 1206, 1283, 1299]
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
    bar [0, 20, 62, 43, 75, 16]
```

| Month | Start → End | Added | Removed | Net |
| --- | --- | --- | --- | --- |
| 2026-04 | 1,069 → 1,069 | 0 | 5 | 0 |
| 2026-05 | 1,070 → 1,090 | 21 | 0 | +20 |
| 2026-06 | 1,090 → 1,152 | 63 | 1 | +62 |
| 2026-07 | 1,163 → 1,206 | 99 | 45 | +43 |
| 2026-08 | 1,208 → 1,283 | 168 | 91 | +75 |
| 2026-09 | 1,283 → 1,299 | 16 | 0 | +16 |

### Most active days

| Date | Added | Removed | Changed | Locations |
| --- | --- | --- | --- | --- |
| 2026-08-14 | 32 | 0 | 4 | 1,246 |
| 2026-08-16 | 21 | 5 | 1 | 1,237 |
| 2026-08-15 | 0 | 25 | 8 | 1,221 |
| 2026-08-06 | 7 | 17 | 1 | 1,195 |
| 2026-08-05 | 5 | 17 | 17 | 1,205 |

**Retention:** 98.8% of the first snapshot's machines are still present (1056/1,069).

---

_Generated with `scripts/analyze_data.mjs --md`._
