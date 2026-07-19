// Yale University FY2025 figures in $ millions (the report states thousands; the mockup rounded),
// ported verbatim from Module-1-Redesign/Tutorials/42-yale-bs-split.html;
// source-of-truth provenance and exact-thousands base in 'Accounting Pre-work'/M6-overnight/yale-data-port/.
// ============================================================
// YALE DATA — all values stored in $ MILLIONS (rounded from the
// 10-K's thousands), per Module 4.2 design call.
// Sources:
//   SFP:  Yale FY2025 financial report, PDF page 23 / printed 21
//   SoCF: PDF page 25 / printed 23
//   Note c (cash recon): PDF page 28-29 / printed 26-27
//   SoA:  PDF page 24 / printed 22
// ============================================================
window.YALE_FY2025 = {
  "sfp": [
    { "type": "section", "label": "Assets:" },
    { "type": "line", "label": "Cash and cash equivalents", "y2025": 765, "y2024": 1058 },
    { "type": "line", "label": "Accounts receivable, net", "y2025": 477, "y2024": 463 },
    { "type": "line", "label": "Contributions receivable, net", "y2025": 796, "y2024": 850 },
    { "type": "line", "label": "Notes receivable", "y2025": 75, "y2024": 78 },
    { "type": "line", "label": "Investments, at fair value", "y2025": 49708, "y2024": 46117 },
    { "type": "line", "label": "Right of use assets", "y2025": 291, "y2024": 140 },
    { "type": "line", "label": "Other assets", "y2025": 591, "y2024": 598 },
    { "type": "line", "label": "Land, buildings and equipment, net of accumulated depreciation", "y2025": 6340, "y2024": 6011 },
    { "type": "total", "label": "Total assets", "y2025": 59043, "y2024": 55315 },
    { "type": "section", "label": "Liabilities:" },
    { "type": "line", "label": "Accounts payable and accrued liabilities", "y2025": 716, "y2024": 746 },
    { "type": "line", "label": "Advanced payments and other deposits", "y2025": 211, "y2024": 199 },
    { "type": "line", "label": "Lease liabilities", "y2025": 360, "y2024": 201 },
    { "type": "line", "label": "Other liabilities", "y2025": 1014, "y2024": 1120 },
    { "type": "line", "label": "Liabilities under split-interest agreements", "y2025": 145, "y2024": 137 },
    { "type": "line", "label": "Bonds and notes payable", "y2025": 5205, "y2024": 4847 },
    { "type": "line", "label": "Liabilities associated with investments", "y2025": 2021, "y2024": 2028 },
    { "type": "total", "label": "Total liabilities", "y2025": 9672, "y2024": 9278 },
    { "type": "section", "label": "Net Assets:" },
    { "type": "line", "label": "Net assets without donor restrictions: Yale University", "y2025": 10757, "y2024": 9832 },
    { "type": "line", "label": "Net assets without donor restrictions: noncontrolling interests", "y2025": 5, "y2024": 3, "indent": true },
    { "type": "subtotal", "label": "Total net assets without donor restrictions", "y2025": 10762, "y2024": 9835 },
    { "type": "line", "label": "Net assets with donor restrictions", "y2025": 38609, "y2024": 36202 },
    { "type": "total", "label": "Total net assets", "y2025": 49371, "y2024": 46037 }
  ],
  "compactSFP": {
    "y2025": {
      "cash": 765,
      "totalAssets": 59043,
      "totalLiab": 9672,
      "totalNA": 49371,
      "naWithout": 10762,
      "naWithoutYale": 10757,
      "naWithoutNCI": 5,
      "naWith": 38609,
      "investments": 49708
    },
    "y2024": {
      "cash": 1058,
      "totalAssets": 55315,
      "totalLiab": 9278,
      "totalNA": 46037,
      "naWithout": 9835,
      "naWithoutYale": 9832,
      "naWithoutNCI": 3,
      "naWith": 36202,
      "investments": 46117
    }
  },
  "socf2Year": {
    "operating": {
      "label": "Net cash used in operating activities",
      "subtotal": { "y2025": -500, "y2024": -599 },
// Items follow Yale's exact 10-K order. Note that Yale's CFS starts
// with Change in Net Assets (indirect method), not Net Income.
      "items": [
        { "label": "Change in net assets", "y2025": 3334, "y2024": 1309 },
        { "label": "Depreciation and amortization", "y2025": 387, "y2024": 358 },
        { "label": "Realized and unrealized gain on other investments", "y2025": -34, "y2024": -187 },
        { "label": "Net endowment investment gain", "y2025": -3859, "y2024": -1624 },
        { "label": "Change in non-controlling interests", "y2025": -1, "y2024": 0, "dashFor": ["y2024"] },
        { "label": "Change in funding status of defined benefit plans", "y2025": -156, "y2024": -128 },
        { "label": "Non-operating contributions", "y2025": -308, "y2024": -255 },
        { "label": "Contributed securities", "y2025": -76, "y2024": -163 },
        { "label": "Proceeds from sale of donated securities", "y2025": 17, "y2024": 33 },
        { "label": "Other adjustments", "y2025": 175, "y2024": 95 },
        { "label": "Accounts receivable", "y2025": -13, "y2024": -53 },
        { "label": "Contributions receivable", "y2025": -22, "y2024": 14 },
        { "label": "Other operating assets", "y2025": -9, "y2024": 9 },
        { "label": "Accounts payable and accrued expenses", "y2025": 43, "y2024": 58 },
        { "label": "Advances under grants and contracts and other deposits", "y2025": 12, "y2024": -21 },
        { "label": "Other liabilities", "y2025": 11, "y2024": -43 }
      ]
    },
    "investing": {
      "label": "Net cash (used in) provided by investing activities",
      "subtotal": { "y2025": -602, "y2024": 713 },
      "items": [
        { "label": "Student loans repaid", "y2025": 11, "y2024": 10 },
        { "label": "Student loans granted", "y2025": -8, "y2024": -10 },
        { "label": "Purchases related to capitalized software costs and other assets", "y2025": -116, "y2024": -46 },
        { "label": "Proceeds from sales and maturities of investments", "y2025": 17840, "y2024": 9827 },
        { "label": "Purchases of investments", "y2025": -17629, "y2024": -8399 },
        { "label": "Purchases of land, buildings and equipment", "y2025": -700, "y2024": -670 }
      ]
    },
    "financing": {
      "label": "Net cash provided by financing activities",
      "subtotal": { "y2025": 722, "y2024": 152 },
      "items": [
        { "label": "Proceeds from restricted contributions", "y2025": 384, "y2024": 352 },
        { "label": "Proceeds from sale of contributed securities restricted for endowment", "y2025": 59, "y2024": 130 },
        { "label": "Contributions received for split-interest agreements", "y2025": 6, "y2024": 7 },
        { "label": "Payments made under split-interest agreements", "y2025": -14, "y2024": -16 },
        { "label": "Proceeds from long-term debt", "y2025": 947, "y2024": 0, "dashFor": ["y2024"] },
        { "label": "Repayments of long-term debt", "y2025": -660, "y2024": -320 },
        { "label": "Repayments to the Federal government for student loans", "y2025": -1, "y2024": -2 }
      ]
    },
    "netChange": { "y2025": -380, "y2024": 266 },
    "beginning": { "y2025": 1205, "y2024": 938 },
    "ending": { "y2025": 825, "y2024": 1205 }
  },
// Cash reconciliation from Note c (PDF page 28-29). Bridges the BS Cash
// line to the broader figure the CFS reconciles. Yale's analog to CVS's
// restricted-cash reconciliation. All in $ millions.
  "cashRecon": {
    "beg": { "ccEquiv": 1058, "cashInInvestments": 147, "total": 1205 },
    "end": { "ccEquiv": 765, "cashInInvestments": 61, "total": 825 }
  },
// Yale Statement of Activities — by net asset class, with operating and
// non-operating sections plus the "Net assets released from restrictions"
// reclass. All in $ millions. The PDF shows 4 columns: W/O Restrictions,
// W/I Restrictions, 2025 Total (= wo + wi), 2024 Total (prior year comp).
// Stored as a flat list of rows with role tags for the choreography:
//   role keys: op-rev, op-rev-subtotal, op-releases, op-rev-grand,
//              op-exp, op-exp-subtotal, op-net,
//              nonop, nonop-releases, nonop-net,
//              total-yu, nci, total-incl-nci, balance-beg, balance-end
  "soaRows": [
    { "type": "section-header", "label": "Operating" },
    { "type": "subsection-header", "label": "Revenues and releases:" },
    { "type": "line", "role": "op-rev", "label": "Net tuition, room and board", "wo": 499, "wi": 0, "prior": 472 },
    { "type": "line", "role": "op-rev", "label": "Grant and contract income, primarily for research and training", "wo": 1274, "wi": 0, "prior": 1192 },
    { "type": "line", "role": "op-rev", "label": "Medical services income, net", "wo": 1681, "wi": 0, "prior": 1587 },
    { "type": "line", "role": "op-rev", "label": "Contributions", "wo": 16, "wi": 203, "prior": 169 },
    { "type": "line", "role": "op-rev", "label": "Allocation of endowment spending from non-operating", "wo": 588, "wi": 1492, "prior": 1945 },
    { "type": "line", "role": "op-rev", "label": "Other investment income", "wo": 163, "wi": 9, "prior": 167 },
    { "type": "line", "role": "op-rev", "label": "Other income", "wo": 228, "wi": 0, "prior": 224 },
    { "type": "subtotal", "role": "op-rev-subtotal", "label": "Total revenues", "wo": 4450, "wi": 1705, "prior": 5755 },
    { "type": "line", "role": "op-releases", "label": "Net assets released from restrictions", "wo": 1545, "wi": -1545, "prior": 0 },
    { "type": "subtotal", "role": "op-rev-grand", "label": "Total revenues and releases", "wo": 5995, "wi": 159, "prior": 5755 },
    { "type": "subsection-header", "label": "Expenses:" },
    { "type": "line", "role": "op-exp", "label": "Salaries and wages", "wo": 2737, "wi": 0, "prior": 2547 },
    { "type": "line", "role": "op-exp", "label": "Employee benefits", "wo": 862, "wi": 0, "prior": 799 },
    { "type": "line", "role": "op-exp", "label": "Depreciation, amortization and interest", "wo": 505, "wi": 0, "prior": 471 },
    { "type": "line", "role": "op-exp", "label": "Other operating expenditures", "wo": 1704, "wi": 0, "prior": 1596 },
    { "type": "subtotal", "role": "op-exp-subtotal", "label": "Total expenses", "wo": 5808, "wi": 0, "prior": 5412 },
    { "type": "subtotal-major", "role": "op-net", "label": "Increase in net assets from operating activities", "wo": 187, "wi": 159, "prior": 343 },
    { "type": "section-header", "label": "Non-operating" },
    { "type": "line", "role": "nonop", "label": "Contributions", "wo": 1, "wi": 307, "prior": 255 },
    { "type": "line", "role": "nonop", "label": "Total endowment return", "wo": 790, "wi": 3718, "prior": 2271 },
    { "type": "line", "role": "nonop", "label": "Allocation of endowment spending to operations", "wo": -372, "wi": -1708, "prior": -1945 },
    { "type": "line", "role": "nonop", "label": "Other investment income", "wo": 44, "wi": 0, "prior": 204 },
    { "type": "line", "role": "nonop", "label": "Change in funding status of defined benefit plans", "wo": 156, "wi": 0, "prior": 128 },
    { "type": "line", "role": "nonop", "label": "Other increases", "wo": 48, "wi": 2, "prior": 52 },
    { "type": "line", "role": "nonop-releases", "label": "Net assets released from restrictions", "wo": 70, "wi": -70, "prior": 0 },
    { "type": "subtotal-major", "role": "nonop-net", "label": "Increase in net assets from non-operating activities", "wo": 738, "wi": 2248, "prior": 966 },
    { "type": "total", "role": "total-yu", "label": "Total increase in net assets — Yale University", "wo": 925, "wi": 2407, "prior": 1309 },
    { "type": "line", "role": "nci", "label": "Change in noncontrolling interests", "wo": 1, "wi": 0, "prior": 0 },
    { "type": "total", "role": "total-incl-nci", "label": "Total increase in net assets", "wo": 926, "wi": 2407, "prior": 1309 },
    { "type": "line", "role": "balance-beg", "label": "Net assets, beginning of year", "wo": 9835, "wi": 36202, "prior": 44728 },
    { "type": "total", "role": "balance-end", "label": "Net assets, end of year", "wo": 10762, "wi": 38609, "prior": 46037 }
  ],
// Subset of rows for the running-totals animation in phase 21. These are
// the actual movement rows (not subtotals/balances) — what trace each
// bucket's change. The releases reclass is shown as a single combined row.
  "soaMovements2025": [
    { "label": "Operating revenues", "wo": 4450, "wi": 1705 },
    { "label": "Operating expenses", "wo": -5808, "wi": 0 },
    { "label": "Releases from restrictions (op + nonop)", "wo": 1615, "wi": -1615 },
    { "label": "Non-operating contributions", "wo": 1, "wi": 307 },
    { "label": "Endowment return (net of allocation)", "wo": 418, "wi": 2010 },
    { "label": "Other non-operating (incl. pension)", "wo": 248, "wi": 2 },
    { "label": "NCI change", "wo": 1, "wi": 0 }
  ],
  "liquidity": {
    "financialAssetsAvailableWithinOneYear": { "y2025": 5029, "y2024": 4698 },
    "boardDesignatedEndowment": { "y2025": 7734 }
  }
};
