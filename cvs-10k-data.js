// data is from CVS Health's FY2025 Form 10-K, in $ millions
// (Consolidated Balance Sheets p.95, Statements of Operations p.93,
//  Comprehensive Income p.94, Cash Flow p.96, Shareholders' Equity p.98),
// ported verbatim from the Module-1-Redesign mockup tutorial 41-cvs-bs-split.html.
window.CVS_10K = {
    "bs": [
        { "type": "section", "label": "Assets:" },
        { "type": "line", "label": "Cash and cash equivalents", "y2025": 8453, "y2024": 8586 },
        { "type": "line", "label": "Investments", "y2025": 2145, "y2024": 2407 },
        { "type": "line", "label": "Accounts receivable, net", "y2025": 39779, "y2024": 36469 },
        { "type": "line", "label": "Inventories", "y2025": 19246, "y2024": 18107 },
        { "type": "line", "label": "Other current assets", "y2025": 5091, "y2024": 3076 },
        { "type": "subtotal", "label": "Total current assets", "y2025": 74714, "y2024": 68645 },
        { "type": "line", "label": "Long-term investments", "y2025": 32669, "y2024": 28934 },
        { "type": "line", "label": "Property and equipment, net", "y2025": 13083, "y2024": 12993 },
        { "type": "line", "label": "Operating lease right-of-use assets", "y2025": 14973, "y2024": 15944 },
        { "type": "line", "label": "Goodwill", "y2025": 85478, "y2024": 91272 },
        { "type": "line", "label": "Intangible assets, net", "y2025": 25508, "y2024": 27323 },
        { "type": "line", "label": "Separate accounts assets", "y2025": 1994, "y2024": 3311 },
        { "type": "line", "label": "Other assets", "y2025": 5119, "y2024": 4793 },
        { "type": "total", "label": "Total assets", "y2025": 253538, "y2024": 253215 },
        { "type": "section", "label": "Liabilities:" },
        { "type": "line", "label": "Accounts payable", "y2025": 17641, "y2024": 15892 },
        { "type": "line", "label": "Pharmacy claims and discounts payable", "y2025": 26344, "y2024": 24166 },
        { "type": "line", "label": "Health care costs payable", "y2025": 15399, "y2024": 15064 },
        { "type": "line", "label": "Accrued expenses and other current liabilities", "y2025": 22387, "y2024": 20810 },
        { "type": "line", "label": "Other insurance liabilities", "y2025": 1116, "y2024": 1183 },
        { "type": "line", "label": "Current portion of operating lease liabilities", "y2025": 1737, "y2024": 1751 },
        { "type": "line", "label": "Short-term debt", "y2025": 0, "y2024": 2119, "dashIf": "y2025" },
        { "type": "line", "label": "Current portion of long-term debt", "y2025": 4068, "y2024": 3624 },
        { "type": "subtotal", "label": "Total current liabilities", "y2025": 88692, "y2024": 84609 },
        { "type": "line", "label": "Long-term operating lease liabilities", "y2025": 13643, "y2024": 14899 },
        { "type": "line", "label": "Long-term debt", "y2025": 60502, "y2024": 60527 },
        { "type": "line", "label": "Deferred income taxes", "y2025": 3832, "y2024": 3806 },
        { "type": "line", "label": "Separate accounts liabilities", "y2025": 1994, "y2024": 3311 },
        { "type": "line", "label": "Other long-term insurance liabilities", "y2025": 4716, "y2024": 4902 },
        { "type": "line", "label": "Other long-term liabilities", "y2025": 4777, "y2024": 5431 },
        { "type": "total", "label": "Total liabilities", "y2025": 178156, "y2024": 177485 },
        { "type": "section", "label": "Shareholders' equity:" },
        { "type": "line", "label": "Preferred stock", "y2025": 0, "y2024": 0, "dashOnly": true },
        { "type": "line", "label": "Common stock and capital surplus", "y2025": 50402, "y2024": 49661 },
        { "type": "line", "label": "Treasury stock, at cost", "y2025": -36790, "y2024": -36818 },
        { "type": "line", "label": "Retained earnings", "y2025": 61196, "y2024": 62837 },
        { "type": "line", "label": "Accumulated other comprehensive income (loss)", "y2025": 406, "y2024": -120 },
        { "type": "subtotal", "label": "Total CVS Health shareholders' equity", "y2025": 75214, "y2024": 75560 },
        { "type": "line", "label": "Noncontrolling interests", "y2025": 168, "y2024": 170 },
        { "type": "total", "label": "Total shareholders' equity", "y2025": 75382, "y2024": 75730 }
    ],
    "compactBS": {
        // Compact BS data per year — drives CompactSnapshot.
        // The two "Other..." asset rows are kept visible (not rolled into the catch-all)
        // because they are where restricted cash lives. Phase 7 highlights them.
        // The equity composition (Contributed = Common Stock & APIC − Treasury,
        // Earned & Retained = RE + AOCI, NCI) drives the equity bucket expansion
        // from phase 14 onward when the SoCE comes into focus.
        "y2025": {
            "cash": 8453, "otherCurrent": 5091, "otherAssets": 5119,
            "totalAssets": 253538, "totalLiab": 178156, "totalEq": 75382,
            "restrCurr": 59, "restrOther": 200,
            "contributed": 13612, "earnedRetained": 61602, "nci": 168
        },
        "y2024": {
            "cash": 8586, "otherCurrent": 3076, "otherAssets": 4793,
            "totalAssets": 253215, "totalLiab": 177485, "totalEq": 75730,
            "restrCurr": 95, "restrOther": 203,
            "contributed": 12843, "earnedRetained": 62717, "nci": 170
        }
    },
    "cfs3Year": {
        // Three-year CFS data — drives the document-form view in phase 6.
        // After phase 7 strips to the 2025 column, the single-year cfs2025 data is used.
        "sections": [
            {
                "key": "operating",
                "header": "Cash flows from operating activities:",
                "items": [
                    { "label": "Cash receipts from customers", "y2025": 389128, "y2024": 357995, "y2023": 345464 },
                    { "label": "Cash paid for inventory, prescriptions dispensed and health services rendered", "y2025": -216493, "y2024": -197726, "y2023": -208848 },
                    { "label": "Insurance benefits paid", "y2025": -121238, "y2024": -109464, "y2023": -84097 },
                    { "label": "Cash paid to other suppliers and employees", "y2025": -37570, "y2024": -38821, "y2023": -34735 },
                    { "label": "Interest and investment income received", "y2025": 1969, "y2024": 1735, "y2023": 1584 },
                    { "label": "Interest paid", "y2025": -2991, "y2024": -2909, "y2023": -2418 },
                    { "label": "Income taxes paid", "y2025": -2166, "y2024": -1703, "y2023": -3524 }
                ],
                "subtotal": { "label": "Net cash provided by operating activities", "y2025": 10639, "y2024": 9107, "y2023": 13426 }
            },
            {
                "key": "investing",
                "header": "Cash flows from investing activities:",
                "items": [
                    { "label": "Proceeds from sales and maturities of investments", "y2025": 12383, "y2024": 10353, "y2023": 7729 },
                    { "label": "Purchases of investments", "y2025": -15012, "y2024": -15191, "y2023": -9043 },
                    { "label": "Purchases of property and equipment", "y2025": -2832, "y2024": -2781, "y2023": -3031 },
                    { "label": "Acquisitions (net of cash and restricted cash acquired)", "y2025": -436, "y2024": -95, "y2023": -16612 },
                    { "label": "Other", "y2025": 26, "y2024": 101, "y2023": 68 }
                ],
                "subtotal": { "label": "Net cash used in investing activities", "y2025": -5871, "y2024": -7613, "y2023": -20889 }
            },
            {
                "key": "financing",
                "header": "Cash flows from financing activities:",
                "items": [
                    { "label": "Commercial paper borrowings (repayments), net", "y2025": -2119, "y2024": 1919, "y2023": 200 },
                    { "label": "Proceeds from issuance of short-term loan", "y2025": 0, "y2024": 0, "y2023": 5000, "dashFor": ["y2025", "y2024"] },
                    { "label": "Repayment of short-term loan", "y2025": 0, "y2024": 0, "y2023": -5000, "dashFor": ["y2025", "y2024"] },
                    { "label": "Proceeds from issuance of long-term debt", "y2025": 3969, "y2024": 7913, "y2023": 10898 },
                    { "label": "Repayments of long-term debt", "y2025": -3629, "y2024": -4773, "y2023": -3166 },
                    { "label": "Repurchase of common stock", "y2025": 0, "y2024": -3023, "y2023": -2012, "dashFor": ["y2025"] },
                    { "label": "Dividends paid", "y2025": -3397, "y2024": -3373, "y2023": -3132 },
                    { "label": "Proceeds from exercise of stock options", "y2025": 394, "y2024": 361, "y2023": 277 },
                    { "label": "Payments for taxes related to net share settlement of equity awards", "y2025": -158, "y2024": -185, "y2023": -181 },
                    { "label": "Other", "y2025": 0, "y2024": 26, "y2023": -201, "dashFor": ["y2025"] }
                ],
                "subtotal": { "label": "Net cash provided by (used in) financing activities", "y2025": -4940, "y2024": -1135, "y2023": 2683 }
            }
        ],
        "netChange": { "label": "Net increase (decrease) in cash, cash equivalents and restricted cash", "y2025": -172, "y2024": 359, "y2023": -4780 },
        "beginning": { "label": "Cash, cash equivalents and restricted cash at the beginning of the period", "y2025": 8884, "y2024": 8525, "y2023": 13305 },
        "ending": { "label": "Cash, cash equivalents and restricted cash at the end of the period", "y2025": 8712, "y2024": 8884, "y2023": 8525 }
    },
    "cfs2025": {
        // CVS Health Consolidated Statements of Cash Flows, FY2025 10-K (printed page 96 / PDF page 98).
        // Direct method (rare — CVS deliberately chosen for this).
        // All figures in $ millions. Only 2025 column shown in the mockup (the year between our two BSes).
        "operating": {
            "label": "Net cash provided by operating activities",
            "subtotal": 10639,
            "items": [
                { "label": "Cash receipts from customers", "value": 389128 },
                { "label": "Cash paid for inventory, prescriptions dispensed and health services rendered", "value": -216493 },
                { "label": "Insurance benefits paid", "value": -121238 },
                { "label": "Cash paid to other suppliers and employees", "value": -37570 },
                { "label": "Interest and investment income received", "value": 1969 },
                { "label": "Interest paid", "value": -2991 },
                { "label": "Income taxes paid", "value": -2166 }
            ]
        },
        "investing": {
            "label": "Net cash used in investing activities",
            "subtotal": -5871,
            "items": [
                { "label": "Proceeds from sales and maturities of investments", "value": 12383 },
                { "label": "Purchases of investments", "value": -15012 },
                { "label": "Purchases of property and equipment", "value": -2832 },
                { "label": "Acquisitions (net of cash and restricted cash acquired)", "value": -436 },
                { "label": "Other", "value": 26 }
            ]
        },
        "financing": {
            "label": "Net cash used in financing activities",
            "subtotal": -4940,
            "items": [
                { "label": "Commercial paper borrowings (repayments), net", "value": -2119 },
                { "label": "Proceeds from issuance of short-term loan", "value": 0, "dash": true },
                { "label": "Repayment of short-term loan", "value": 0, "dash": true },
                { "label": "Proceeds from issuance of long-term debt", "value": 3969 },
                { "label": "Repayments of long-term debt", "value": -3629 },
                { "label": "Repurchase of common stock", "value": 0, "dash": true },
                { "label": "Dividends paid", "value": -3397 },
                { "label": "Proceeds from exercise of stock options", "value": 394 },
                { "label": "Payments for taxes related to net share settlement of equity awards", "value": -158 },
                { "label": "Other", "value": 0, "dash": true }
            ]
        },
        "netChange": -172,
        "beginning": 8884,
        "ending": 8712
    },
    "cashRecon": {
        // Restricted cash reconciliation (from 10-K Note 1, "Restricted Cash"), $ millions.
        // Cash & cash equivalents (BS face) + restricted-cash-elsewhere = Cash, cash equivalents and
        // restricted cash (per CFS). This is the linchpin of the phase 8/9 discovery moment.
        // Beginning of period = Dec 31, 2024
        "beg": { "ccEquiv": 8586, "restrCurr": 95, "restrOther": 203, "total": 8884 },
        // End of period = Dec 31, 2025
        "end": { "ccEquiv": 8453, "restrCurr": 59, "restrOther": 200, "total": 8712 }
    },
    "soce3Year": {
        // CVS Health Consolidated Statements of Shareholders' Equity, FY2025 10-K
        // (printed page 98 / PDF page 100). Drives the SoCE document-form view
        // in phases 15–18 and the bucketed view from phase 17 onward.
        // Sign convention: balance and movement values use balance-direction signs.
        //   Treasury Shares: positive number = shares held in treasury (subtract from
        //     issued to get outstanding). Movement positive = more added to treasury;
        //     negative = treasury reissued (e.g., ESPP).
        //   Treasury Stock: negative dollar (cost basis, shown in parens in 10-K).
        //     Movement negative = more dollars added to treasury; positive = treasury
        //     reissued at less than cost basis.
        "columns": [
            { "key": "commonShares", "label": "Common Shares", "isShares": true, "bucket": null },
            { "key": "treasuryShares", "label": "Treasury Shares", "isShares": true, "bucket": null },
            { "key": "commonStock", "label": "Common Stock & Capital Surplus", "bucket": "contributed" },
            { "key": "treasuryStock", "label": "Treasury Stock", "bucket": "contributed" },
            { "key": "retainedEarnings", "label": "Retained Earnings", "bucket": "earnedRetained" },
            { "key": "aoci", "label": "AOCI", "bucket": "earnedRetained" },
            { "key": "totalCVS", "label": "Total CVS HSE", "isSubtotal": true },
            { "key": "nci", "label": "Noncontrolling Interests", "bucket": "nci" },
            { "key": "total", "label": "Total Shareholders’ Equity", "isTotal": true }
        ],
        "rows": [
            { "type": "balance", "year": 2022, "label": "Balance at December 31, 2022",
              "commonShares": 1758, "treasuryShares": 458, "commonStock": 48193, "treasuryStock": -31858,
              "retainedEarnings": 56398, "aoci": -1264, "totalCVS": 71469, "nci": 300, "total": 71769 },
            { "type": "movement", "year": 2023, "label": "Net income",
              "retainedEarnings": 8344, "totalCVS": 8344, "nci": 24, "total": 8368 },
            { "type": "movement", "year": 2023, "label": "Other comprehensive income",
              "aoci": 967, "totalCVS": 967, "total": 967 },
            { "type": "movement", "year": 2023, "label": "Stock option activity, stock awards and other",
              "commonShares": 10, "commonStock": 795, "totalCVS": 795, "total": 795 },
            { "type": "movement", "year": 2023, "label": "Purchase of treasury shares, net of ESPP issuances",
              "treasuryShares": 22, "commonStock": -12, "treasuryStock": -1980, "totalCVS": -1992, "total": -1992 },
            { "type": "movement", "year": 2023, "label": "Common stock dividends ($2.42 per share)",
              "retainedEarnings": -3138, "totalCVS": -3138, "total": -3138 },
            { "type": "movement", "year": 2023, "label": "Acquisition of noncontrolling interests",
              "nci": 66, "total": 66 },
            { "type": "movement", "year": 2023, "label": "Other increases (decreases) in noncontrolling interests",
              "commonStock": 16, "totalCVS": 16, "nci": -215, "total": -199 },
            { "type": "balance", "year": 2023, "label": "Balance at December 31, 2023",
              "commonShares": 1768, "treasuryShares": 480, "commonStock": 48992, "treasuryStock": -33838,
              "retainedEarnings": 61604, "aoci": -297, "totalCVS": 76461, "nci": 175, "total": 76636 },
            { "type": "movement", "year": 2024, "label": "Net income",
              "retainedEarnings": 4614, "totalCVS": 4614, "nci": -28, "total": 4586 },
            { "type": "movement", "year": 2024, "label": "Other comprehensive income",
              "aoci": 177, "totalCVS": 177, "total": 177 },
            { "type": "movement", "year": 2024, "label": "Stock option activity, stock awards and other",
              "commonShares": 10, "commonStock": 700, "totalCVS": 700, "total": 700 },
            { "type": "movement", "year": 2024, "label": "Purchase of treasury shares, net of ESPP issuances",
              "treasuryShares": 38, "commonStock": -22, "treasuryStock": -2980, "totalCVS": -3002, "total": -3002 },
            { "type": "movement", "year": 2024, "label": "Common stock dividends ($2.66 per share)",
              "retainedEarnings": -3381, "totalCVS": -3381, "total": -3381 },
            { "type": "movement", "year": 2024, "label": "Other increases (decreases) in noncontrolling interests",
              "commonStock": -9, "totalCVS": -9, "nci": 23, "total": 14 },
            { "type": "balance", "year": 2024, "label": "Balance at December 31, 2024",
              "commonShares": 1778, "treasuryShares": 518, "commonStock": 49661, "treasuryStock": -36818,
              "retainedEarnings": 62837, "aoci": -120, "totalCVS": 75560, "nci": 170, "total": 75730 },
            { "type": "movement", "year": 2025, "label": "Net income",
              "retainedEarnings": 1768, "totalCVS": 1768, "nci": -40, "total": 1728 },
            { "type": "movement", "year": 2025, "label": "Other comprehensive income",
              "aoci": 526, "totalCVS": 526, "total": 526 },
            { "type": "movement", "year": 2025, "label": "Stock option activity, stock awards and other",
              "commonShares": 9, "commonStock": 741, "totalCVS": 741, "total": 741 },
            { "type": "movement", "year": 2025, "label": "ESPP issuances, net of purchase of treasury shares",
              "treasuryShares": -2, "treasuryStock": 28, "totalCVS": 28, "total": 28 },
            { "type": "movement", "year": 2025, "label": "Common stock dividends ($2.66 per share)",
              "retainedEarnings": -3409, "totalCVS": -3409, "total": -3409 },
            { "type": "movement", "year": 2025, "label": "Other increases in noncontrolling interests",
              "nci": 38, "total": 38 },
            { "type": "balance", "year": 2025, "label": "Balance at December 31, 2025",
              "commonShares": 1787, "treasuryShares": 516, "commonStock": 50402, "treasuryStock": -36790,
              "retainedEarnings": 61196, "aoci": 406, "totalCVS": 75214, "nci": 168, "total": 75382 }
        ]
    },
    "soce2025Aggregated": [
        // Aggregated 2025 movement rows for the bucketed views (phase 17+).
        // Combines two pairs that share a bucket destination:
        //   Net income + OCI         → "Comprehensive income"   (both hit Earned & retained / NCI)
        //   Stock option + ESPP      → one Contributed row
        // Dividends and NCI activity stay as their own rows. 4 rows instead of 6.
        { "type": "movement", "year": 2025, "label": "Comprehensive income (Net income + OCI)",
          "retainedEarnings": 1768, "aoci": 526, "totalCVS": 2294, "nci": -40, "total": 2254 },
        { "type": "movement", "year": 2025, "label": "Stock option activity, awards & ESPP",
          "commonStock": 741, "treasuryStock": 28, "totalCVS": 769, "total": 769 },
        { "type": "movement", "year": 2025, "label": "Common stock dividends ($2.66 per share)",
          "retainedEarnings": -3409, "totalCVS": -3409, "total": -3409 },
        { "type": "movement", "year": 2025, "label": "Other increases in noncontrolling interests",
          "nci": 38, "total": 38 }
    ],
    "is3Year": {
        // CVS Health Consolidated Statements of Operations (Income Statement),
        // FY2025 10-K (printed page 93 / PDF page 95). Drives the IS document-form
        // view in phases 21–25 and the bucketed/compact view from phase 26 onward.
        // Costs are stored as negative numbers so that summing all line items in
        // a year column yields Net income directly.
        "sections": [
            {
                "key": "revenues",
                "header": "Revenues:",
                "items": [
                    { "label": "Products", "y2025": 249908, "y2024": 231521, "y2023": 245138 },
                    { "label": "Premiums", "y2025": 134751, "y2024": 122896, "y2023": 99192 },
                    { "label": "Services", "y2025": 15175, "y2024": 16239, "y2023": 12293 },
                    { "label": "Net investment income", "y2025": 2233, "y2024": 2153, "y2023": 1153 }
                ],
                "subtotal": { "label": "Total revenues", "y2025": 402067, "y2024": 372809, "y2023": 357776 }
            },
            {
                "key": "opcosts",
                "header": "Operating costs:",
                "items": [
                    { "label": "Cost of products sold", "y2025": -221167, "y2024": -206287, "y2023": -217098 },
                    { "label": "Health care costs", "y2025": -125538, "y2024": -115121, "y2023": -86247 },
                    { "label": "Operating expenses", "y2025": -44977, "y2024": -41706, "y2023": -39832 },
                    { "label": "Goodwill impairment", "y2025": -5725, "y2024": 0, "y2023": 0, "dashFor": ["y2024", "y2023"] },
                    { "label": "Restructuring charges", "y2025": 0, "y2024": -1179, "y2023": -507, "dashFor": ["y2025"] },
                    { "label": "Loss on assets held for sale", "y2025": 0, "y2024": 0, "y2023": -349, "dashFor": ["y2025", "y2024"] }
                ],
                "subtotal": { "label": "Total operating costs", "y2025": -397407, "y2024": -364293, "y2023": -344033 }
            }
        ],
        "operatingIncome": { "label": "Operating income", "y2025": 4660, "y2024": 8516, "y2023": 13743 },
        "nonOperating": [
            { "label": "Interest expense", "y2025": -3119, "y2024": -2958, "y2023": -2658 },
            { "label": "Gain on early extinguishment of debt", "y2025": 0, "y2024": 491, "y2023": 0, "dashFor": ["y2025", "y2023"] },
            { "label": "Gain on deconsolidation of subsidiary", "y2025": 483, "y2024": 0, "y2023": 0, "dashFor": ["y2024", "y2023"] },
            { "label": "Other income", "y2025": 112, "y2024": 99, "y2023": 88 }
        ],
        "incomeBeforeTax": { "label": "Income before income tax provision", "y2025": 2136, "y2024": 6148, "y2023": 11173 },
        "incomeTax": { "label": "Income tax provision", "y2025": -408, "y2024": -1562, "y2023": -2805 },
        "netIncome": { "label": "Net income", "y2025": 1728, "y2024": 4586, "y2023": 8368 },
        // 10-K presentation: positive value = loss attributable to NCI; add to
        // total NI to arrive at CVS Health share. 2025: 1,728 + 40 = 1,768 ✓
        "nciLine": { "label": "Net (income) loss attributable to noncontrolling interests", "y2025": 40, "y2024": 28, "y2023": -24 },
        "netIncomeCVS": { "label": "Net income attributable to CVS Health", "y2025": 1768, "y2024": 4614, "y2023": 8344 }
    },
    "ci3Year": {
        // CVS Health Consolidated Statements of Comprehensive Income, FY2025 10-K
        // (printed page 94 / PDF page 96). Bridges from Net income to Comprehensive
        // income via OCI items; the OCI total ($526 in 2025) lands in AOCI on the BS,
        // which is part of the Earned & Retained bucket in our SoCE bucketing.
        "netIncome": { "label": "Net income", "y2025": 1728, "y2024": 4586, "y2023": 8368 },
        "ociItems": [
            { "label": "Net unrealized investment gains", "y2025": 605, "y2024": 30, "y2023": 1090 },
            { "label": "Change in discount rate on long-duration insurance reserves", "y2025": -50, "y2024": 113, "y2023": -67 },
            { "label": "Foreign currency translation adjustments", "y2025": 11, "y2024": -4, "y2023": 0, "dashFor": ["y2023"] },
            { "label": "Net cash flow hedges", "y2025": -13, "y2024": -15, "y2023": 5 },
            { "label": "Pension and other postretirement benefits", "y2025": -27, "y2024": 53, "y2023": -61 }
        ],
        "oci": { "label": "Other comprehensive income", "y2025": 526, "y2024": 177, "y2023": 967 },
        "comprehensiveIncome": { "label": "Comprehensive income", "y2025": 2254, "y2024": 4763, "y2023": 9335 },
        "nciLine": { "label": "Comprehensive (income) loss attributable to noncontrolling interests", "y2025": 40, "y2024": 28, "y2023": -24 },
        "ciCVS": { "label": "Comprehensive income attributable to CVS Health", "y2025": 2294, "y2024": 4791, "y2023": 9311 }
    }
};
