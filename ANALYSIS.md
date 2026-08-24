# ReturnRight data analysis

_Snapshot: **2026-08-24** · 1,258 locations · `data/latest.json` · as of 24 Aug 2026, 16:20 UTC_

## Current snapshot

| Metric | Value |
| --- | --- |
| Total locations | 1,258 |
| Unique serials | 1,258 |
| Unique postal codes | 1,218 |
| Shared postal codes | 37 postcodes host 40 extra machines |

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
    "RUNNING": 1178
    "FULL": 58
    "OFFLINE": 13
    "MAINTENANCE": 5
    "ERROR": 4
```

| Status | Count | % |
| --- | --- | --- |
| RUNNING | 1,178 | 93.6% |
| FULL | 58 | 4.6% |
| OFFLINE | 13 | 1.0% |
| MAINTENANCE | 5 | 0.4% |
| ERROR | 4 | 0.3% |

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
    x-axis ["TOMRA001", "SGRECYCLE001", "RVMS001"]
    y-axis "machines" 0 --> 551
    bar [479, 411, 368]
```

| Supplier | Count | % |
| --- | --- | --- |
| TOMRA001 | 479 | 38.1% |
| SGRECYCLE001 | 411 | 32.7% |
| RVMS001 | 368 | 29.3% |

### Last connected

| Age | Count | % |
| --- | --- | --- |
| < 1 day | 1,258 | 100.0% |

## Operation timing (opening hours)

| Coverage | Machines | % |
| --- | --- | --- |
| 24 hours | 798 | 63.4% |
| Limited hours | 227 | 18.0% |
| Unknown | 233 | 18.5% |

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
    y-axis "machines" 0 --> 1179
    line [798, 798, 799, 842, 983, 1022, 1025, 1025, 1025, 1025, 1023, 980]
```

- Typical window: **07:00 → 23:00**
- Earliest open: **05:30**
- Latest close: **24:00**
- Peak: **1,025 machines** at **13:00**
- **227** machines with limited hours open all 7 days

### Status by supplier

| Supplier | ERROR | FULL | MAINTENANCE | OFFLINE | RUNNING | Total |
| --- | --- | --- | --- | --- | --- | --- |
| RVMS001 | 1 | 10 | 2 | 1 | 354 | 368 |
| SGRECYCLE001 | 3 | 20 | 1 | 4 | 383 | 411 |
| TOMRA001 | 0 | 28 | 2 | 8 | 441 | 479 |

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
    x-axis ["D18", "D19", "D23", "D22", "D16", "D27", "D14", "D25", "D20", "D03", "D05", "D12", "D15", "D13", "D10", "D01", "D09", "D04", "D28", "D08", "D17", "D07", "D02", "D21", "D11", "D06", "D24", "D26"]
    y-axis "machines" 0 --> 195
    bar [169, 149, 125, 103, 100, 81, 68, 68, 58, 50, 40, 40, 29, 27, 25, 18, 18, 16, 15, 12, 9, 8, 7, 7, 6, 5, 4, 1]
```

All postal sectors, with the Singapore postal district each belongs to:

| Sector | Postal district | Area | Machines | % |
| --- | --- | --- | --- | --- |
| S52 | D18 | Pasir Ris, Tampines | 108 | 8.6% |
| S46 | D16 | Bedok, Upper East Coast, Eastwood, Kew Drive | 74 | 5.9% |
| S73 | D25 | Admiralty, Woodlands, Kranji, Woodgrove | 65 | 5.2% |
| S51 | D18 | Pasir Ris, Tampines | 61 | 4.8% |
| S64 | D22 | Boon Lay, Jurong, Tuas | 58 | 4.6% |
| S82 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 57 | 4.5% |
| S76 | D27 | Yishun, Sembawang | 55 | 4.4% |
| S68 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 52 | 4.1% |
| S53 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 47 | 3.7% |
| S56 | D20 | Ang Mo Kio, Bishan, Thomson | 39 | 3.1% |
| S65 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 36 | 2.9% |
| S67 | D23 | Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang | 36 | 2.9% |
| S54 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 31 | 2.5% |
| S12 | D05 | Buona Vista, West Coast, Pasir Panjang, Clementi New Town | 28 | 2.2% |
| S75 | D27 | Yishun, Sembawang | 26 | 2.1% |
| S60 | D22 | Boon Lay, Jurong, Tuas | 25 | 2.0% |
| S47 | D16 | Bedok, Upper East Coast, Eastwood, Kew Drive | 23 | 1.8% |
| S40 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 21 | 1.7% |
| S31 | D12 | Balestier, Toa Payoh, Serangoon | 20 | 1.6% |
| S57 | D20 | Ang Mo Kio, Bishan, Thomson | 19 | 1.5% |
| S15 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 18 | 1.4% |
| S38 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 18 | 1.4% |
| S39 | D14 | Kembangan, Eunos, Paya Lebar, Geylang | 18 | 1.4% |
| S14 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 16 | 1.3% |
| S16 | D03 | Alexandra, Commonwealth, Queenstown, Tiong Bahru | 16 | 1.3% |
| S23 | D09 | Orchard, Cairnhill, River Valley | 15 | 1.2% |
| S61 | D22 | Boon Lay, Jurong, Tuas | 15 | 1.2% |
| S55 | D19 | Serangoon Gardens, Hougang, Punggol, Sengkang | 14 | 1.1% |
| S79 | D28 | Seletar, Yio Chu Kang | 14 | 1.1% |
| S32 | D12 | Balestier, Toa Payoh, Serangoon | 13 | 1.0% |
| S44 | D15 | East Coast, Marine Parade, Katong, Joo Chiat, Amber Road | 13 | 1.0% |
| S27 | D10 | Tanglin, Ardmore, Holland, Bukit Timah | 12 | 1.0% |
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
| S69 | D24 | Lim Chu Kang, Tengah | 4 | 0.3% |
| S19 | D07 | Beach Road, Bugis, Rochor, Golden Mile | 3 | 0.2% |
| S22 | D09 | Orchard, Cairnhill, River Valley | 3 | 0.2% |
| S48 | D16 | Bedok, Upper East Coast, Eastwood, Kew Drive | 3 | 0.2% |
| S50 | D17 | Changi Airport, Changi Village, Loyang | 3 | 0.2% |
| S58 | D21 | Clementi Park, Upper Bukit Timah, Ulu Pandan | 3 | 0.2% |
| S63 | D22 | Boon Lay, Jurong, Tuas | 3 | 0.2% |
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
    y-axis "machines" 0 --> 971
    bar [198, 844, 3, 30, 56, 56, 71]
```

| Month | Machines | % |
| --- | --- | --- |
| 2026-02 | 198 | 15.7% |
| 2026-03 | 844 | 67.1% |
| 2026-04 | 3 | 0.2% |
| 2026-05 | 30 | 2.4% |
| 2026-06 | 56 | 4.5% |
| 2026-07 | 56 | 4.5% |
| 2026-08 | 71 | 5.6% |

## Newest machines

| # | Name | Postal | Status | Created |
| --- | --- | --- | --- | --- |
| 1 | 442 Ang Mo Kio Avenue 10 | 560442 | RUNNING | 21 Aug 2026 |
| 2 | Block 920 Hougang Ave 9 | 530920 | RUNNING | 21 Aug 2026 |
| 3 | Block 953 Hougang Ave 9 | 530953 | RUNNING | 21 Aug 2026 |
| 4 | Block 536 Ang Mo Kio Ave 10 | 560536 | RUNNING | 21 Aug 2026 |
| 5 | Block 203 Ang Mo Kio Ave 3 | 560203 | RUNNING | 21 Aug 2026 |

## Longest standing

| # | Name | Postal | Status | Created |
| --- | --- | --- | --- | --- |
| 1 | Block 54 Geylang Bahru | 330054 | FULL | 9 Feb 2026 |
| 2 | 715 Jurong West Street 71 | 640715 | RUNNING | 21 Feb 2026 |
| 3 | 745 Yishun Street 72 | 760745 | RUNNING | 21 Feb 2026 |
| 4 | 746 Jurong West Street 73 | 640746 | RUNNING | 21 Feb 2026 |
| 5 | 153 Yung Ho Rd | 610153 | RUNNING | 21 Feb 2026 |

## History (139 snapshots · 2026-04-08 → 2026-08-24)

| Metric | Value |
| --- | --- |
| First snapshot | 1,069 |
| Current snapshot | 1,259 |
| Net change | +190 |
| Minimum | 1,069 (2026-04-08) |
| Maximum | 1,260 (2026-08-23) |
| Average | 1,134 |

### Totals across all days

| Metric | Total |
| --- | --- |
| Added | 324 |
| Removed | 139 |
| Changed | 311 |
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
    y-axis "machines" 0 --> 1448
    line [1069, 1090, 1152, 1206, 1259]
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
    bar [0, 20, 62, 43, 51]
```

| Month | Start → End | Added | Removed | Net |
| --- | --- | --- | --- | --- |
| 2026-04 | 1,069 → 1,069 | 0 | 5 | 0 |
| 2026-05 | 1,070 → 1,090 | 21 | 0 | +20 |
| 2026-06 | 1,090 → 1,152 | 63 | 1 | +62 |
| 2026-07 | 1,163 → 1,206 | 99 | 45 | +43 |
| 2026-08 | 1,208 → 1,259 | 141 | 88 | +51 |

### Most active days

| Date | Added | Removed | Changed | Locations |
| --- | --- | --- | --- | --- |
| 2026-08-14 | 32 | 0 | 4 | 1,246 |
| 2026-08-16 | 21 | 5 | 1 | 1,237 |
| 2026-08-15 | 0 | 25 | 8 | 1,221 |
| 2026-08-06 | 7 | 17 | 1 | 1,195 |
| 2026-08-05 | 5 | 17 | 17 | 1,205 |

**Retention:** 97.6% of the first snapshot's machines are still present (1043/1,069).

---

_Generated with `scripts/analyze_data.mjs --md`._
