/* m8-data.js — Module 8 (The Analyst's Tool Kit) canon data.
 * Single source of truth for every figure an 8x-x page shows.
 * Derived from the June-1 all-Contributed canon (M7 ruling 17, sweep 55bbc1c)
 * and M8 rulings 15-18 (Design-Docs/Module-8-Analysts-Tool-Kit-Plan.md).
 * The object literal below is STRICT JSON — check-m8-data.py parses it.
 * Entry line convention: side "dr" | "cr"; amounts positive integers.
 */
window.M8_DATA = {
  "chartOfAccounts": [
    { "num": 100, "name": "Cash", "kind": "asset", "normal": "debit" },
    { "num": 110, "name": "Receivables", "kind": "asset", "normal": "debit" },
    { "num": 120, "name": "Parts", "kind": "asset", "normal": "debit" },
    { "num": 130, "name": "Right of Use", "kind": "asset", "normal": "debit" },
    { "num": 140, "name": "Tools & Equipment", "kind": "asset", "normal": "debit" },
    { "num": 150, "name": "Fixtures", "kind": "asset", "normal": "debit" },
    { "num": 160, "name": "Laptop", "kind": "asset", "normal": "debit" },
    { "num": 200, "name": "Credit Card Payable", "kind": "liability", "normal": "credit" },
    { "num": 210, "name": "Customer Deposit", "kind": "liability", "normal": "credit" },
    { "num": 300, "name": "Member's Capital — Contributed", "kind": "equity", "normal": "credit" },
    { "num": 310, "name": "Generated", "kind": "equity", "normal": "either" },
    { "num": 320, "name": "Withdrawn", "kind": "equity", "normal": "debit" },
    { "num": 400, "name": "Repair Revenue", "kind": "revenue", "normal": "credit" },
    { "num": 500, "name": "Parts Used", "kind": "expense", "normal": "debit" },
    { "num": 510, "name": "Rent", "kind": "expense", "normal": "debit" },
    { "num": 520, "name": "Depreciation Expense", "kind": "expense", "normal": "debit" }
  ],

  "formationEntry": {
    "id": "formation",
    "date": "June 1",
    "narration": "The member's things and liabilities move behind the wall; the LLC's books open.",
    "lines": [
      { "acct": "Cash", "side": "dr", "amt": 1300 },
      { "acct": "Parts", "side": "dr", "amt": 200 },
      { "acct": "Tools & Equipment", "side": "dr", "amt": 1200 },
      { "acct": "Laptop", "side": "dr", "amt": 610 },
      { "acct": "Fixtures", "side": "dr", "amt": 750 },
      { "acct": "Right of Use", "side": "dr", "amt": 650 },
      { "acct": "Credit Card Payable", "side": "cr", "amt": 2030 },
      { "acct": "Customer Deposit", "side": "cr", "amt": 220 },
      { "acct": "Member's Capital — Contributed", "side": "cr", "amt": 2460 }
    ]
  },

  "seasonEntries": [
    { "id": "restock", "narration": "Parts restock, June–August.",
      "lines": [ { "acct": "Parts", "side": "dr", "amt": 1200 }, { "acct": "Cash", "side": "cr", "amt": 1200 } ] },
    { "id": "tool", "narration": "One new tool for the stand.",
      "lines": [ { "acct": "Tools & Equipment", "side": "dr", "amt": 400 }, { "acct": "Cash", "side": "cr", "amt": 400 } ] },
    { "id": "ccpay", "narration": "The startup card balance paid off in full.",
      "lines": [ { "acct": "Credit Card Payable", "side": "dr", "amt": 2030 }, { "acct": "Cash", "side": "cr", "amt": 2030 } ] },
    { "id": "dana", "narration": "Dana R. pays $120 for a drivetrain job — the Company's own first work.",
      "lines": [ { "acct": "Cash", "side": "dr", "amt": 120 }, { "acct": "Repair Revenue", "side": "cr", "amt": 120 } ] },
    { "id": "restcollect", "narration": "The season's other cash repairs, collected.",
      "lines": [ { "acct": "Cash", "side": "dr", "amt": 5380 }, { "acct": "Repair Revenue", "side": "cr", "amt": 5380 } ] },
    { "id": "danaparts", "narration": "The shelf gives up $10 of parts for Dana's repair.",
      "lines": [ { "acct": "Parts Used", "side": "dr", "amt": 10 }, { "acct": "Parts", "side": "cr", "amt": 10 } ] },
    { "id": "restparts", "narration": "Parts consumed by all the other repairs.",
      "lines": [ { "acct": "Parts Used", "side": "dr", "amt": 1190 }, { "acct": "Parts", "side": "cr", "amt": 1190 } ] },
    { "id": "ridge", "narration": "Ridgeline job finished Aug 28, billed net 15 — the right to collect.",
      "lines": [ { "acct": "Receivables", "side": "dr", "amt": 300 }, { "acct": "Repair Revenue", "side": "cr", "amt": 300 } ] },
    { "id": "smith", "narration": "Smith's frame delivered — no longer owed, now earned.",
      "lines": [ { "acct": "Customer Deposit", "side": "dr", "amt": 220 }, { "acct": "Repair Revenue", "side": "cr", "amt": 220 } ] },
    { "id": "rent", "narration": "Rent, $650 a month for three months.",
      "lines": [ { "acct": "Rent", "side": "dr", "amt": 1950 }, { "acct": "Cash", "side": "cr", "amt": 1950 } ] },
    { "id": "draw", "narration": "The owner's take — its own pile, never an expense.",
      "lines": [ { "acct": "Withdrawn", "side": "dr", "amt": 600 }, { "acct": "Cash", "side": "cr", "amt": 600 } ] }
  ],

  "adjustingEntries": [
    { "id": "deprT", "narration": "The tools give a season of their working lives — amount given, not calculated.",
      "lines": [ { "acct": "Depreciation Expense", "side": "dr", "amt": 160 }, { "acct": "Tools & Equipment", "side": "cr", "amt": 160 } ] },
    { "id": "deprF", "narration": "The fixtures give their season's share.",
      "lines": [ { "acct": "Depreciation Expense", "side": "dr", "amt": 40 }, { "acct": "Fixtures", "side": "cr", "amt": 40 } ] },
    { "id": "deprL", "narration": "The laptop gives its season's share.",
      "lines": [ { "acct": "Depreciation Expense", "side": "dr", "amt": 30 }, { "acct": "Laptop", "side": "cr", "amt": 30 } ] }
  ],

  "closingEntry": {
    "id": "closing",
    "date": "August 31",
    "narration": "The season's bins emptied into Generated — next season starts at zero.",
    "lines": [
      { "acct": "Repair Revenue", "side": "dr", "amt": 6020 },
      { "acct": "Parts Used", "side": "cr", "amt": 1200 },
      { "acct": "Rent", "side": "cr", "amt": 1950 },
      { "acct": "Depreciation Expense", "side": "cr", "amt": 230 },
      { "acct": "Generated", "side": "cr", "amt": 2640 }
    ]
  },

  "incomeStatement": { "revenue": 6020, "expenses": 3380, "netIncome": 2640 },

  "balanceSheets": {
    "jun1": { "assets": { "Cash": 1300, "Parts": 200, "Tools & Equipment": 1200, "Laptop": 610, "Fixtures": 750, "Right of Use": 650 },
              "liabilities": { "Credit Card Payable": 2030, "Customer Deposit": 220 },
              "capital": { "Contributed": 2460, "Generated": 0, "Withdrawn": 0 },
              "totalAssets": 4710, "totalLiabilities": 2250, "membersCapital": 2460 },
    "aug31": { "assets": { "Cash": 620, "Receivables": 300, "Parts": 200, "Right of Use": 650, "Tools & Equipment": 1440, "Fixtures": 710, "Laptop": 580 },
               "liabilities": {},
               "capital": { "Contributed": 2460, "Generated": 2640, "Withdrawn": -600 },
               "totalAssets": 4500, "totalLiabilities": 0, "membersCapital": 4500 }
  },

  "bankStatement": {
    "source": "13-2-The-Bank-Statement.html — the May personal checking statement, the course's first document",
    "begin": 2500, "end": 4074, "depositTotal": 4940, "withdrawalTotal": 3366,
    "rows": [
      { "date": "May 1",  "desc": "Payroll deposit — employer",   "w": 0,    "d": 1800, "bal": 4300 },
      { "date": "May 1",  "desc": "Check #1041 — rent",           "w": 1300, "d": 0,    "bal": 3000 },
      { "date": "May 3",  "desc": "Debit — Cyclesport Supply",    "w": 200,  "d": 0,    "bal": 2800 },
      { "date": "May 5",  "desc": "Apartment rent — autopay",     "w": 1400, "d": 0,    "bal": 1400 },
      { "date": "May 7",  "desc": "Venmo deposit",                "w": 0,    "d": 340,  "bal": 1740 },
      { "date": "May 9",  "desc": "Groceries — Stop & Shop",      "w": 135,  "d": 0,    "bal": 1605 },
      { "date": "May 10", "desc": "Venmo deposit",                "w": 0,    "d": 180,  "bal": 1785 },
      { "date": "May 11", "desc": "Utilities — UI",               "w": 120,  "d": 0,    "bal": 1665 },
      { "date": "May 12", "desc": "Venmo deposit",                "w": 0,    "d": 80,   "bal": 1745 },
      { "date": "May 14", "desc": "Venmo deposit",                "w": 0,    "d": 140,  "bal": 1885 },
      { "date": "May 15", "desc": "Payroll deposit — employer",   "w": 0,    "d": 1800, "bal": 3685 },
      { "date": "May 18", "desc": "ATM cash withdrawal",          "w": 50,   "d": 0,    "bal": 3635 },
      { "date": "May 19", "desc": "Venmo deposit",                "w": 0,    "d": 130,  "bal": 3765 },
      { "date": "May 20", "desc": "Streaming subscription",       "w": 16,   "d": 0,    "bal": 3749 },
      { "date": "May 22", "desc": "Check deposit — Smith",        "w": 0,    "d": 220,  "bal": 3969 },
      { "date": "May 23", "desc": "Venmo deposit",                "w": 0,    "d": 100,  "bal": 4069 },
      { "date": "May 24", "desc": "Groceries — Stop & Shop",      "w": 145,  "d": 0,    "bal": 3924 },
      { "date": "May 27", "desc": "Venmo deposit",                "w": 0,    "d": 150,  "bal": 4074 }
    ]
  },

  "goodwillScenario": {
    "framing": "Suppose a buyer offered $60,000 for the whole shop. (Freddie's $20,000 for 30% implies roughly $66,667 — context only; the round offer is the scenario.)",
    "offer": 60000,
    "fairValues": { "Receivables": 300, "Parts": 250, "Right of Use": 650, "Tools & Equipment": 2400, "Fixtures": 950, "Laptop": 450 },
    "fairValueTotal": 5000,
    "goodwill": 55000,
    "note": "The buyer does not acquire the shop's own cash; by Aug 31 there are no liabilities to assume — both startup liabilities were settled during the season.",
    "entry": {
      "id": "acquisition",
      "narration": "The buyer records what was bought: every identifiable asset at fair value — and the plug that makes debits equal credits.",
      "lines": [
        { "acct": "Receivables", "side": "dr", "amt": 300 },
        { "acct": "Parts", "side": "dr", "amt": 250 },
        { "acct": "Right of Use", "side": "dr", "amt": 650 },
        { "acct": "Tools & Equipment", "side": "dr", "amt": 2400 },
        { "acct": "Fixtures", "side": "dr", "amt": 950 },
        { "acct": "Laptop", "side": "dr", "amt": 450 },
        { "acct": "Goodwill", "side": "dr", "amt": 55000 },
        { "acct": "Cash", "side": "cr", "amt": 60000 }
      ]
    }
  },

  "ladder": {
    "note": "Generic any-business vignettes (82-2): the bike shop has no loan, no land, no gains. Complexity ladder: one-debit-one-credit, then a forced third line (gain/loss), then two debits, then UBS.",
    "borrow": { "id": "borrow", "narration": "A business borrows $10,000 from a bank.",
      "lines": [ { "acct": "Cash", "side": "dr", "amt": 10000 }, { "acct": "Loan Payable", "side": "cr", "amt": 10000 } ] },
    "buyCash": { "id": "buyCash", "narration": "A business buys equipment, paying cash.",
      "lines": [ { "acct": "Equipment", "side": "dr", "amt": 4000 }, { "acct": "Cash", "side": "cr", "amt": 4000 } ] },
    "buyCard": { "id": "buyCard", "narration": "A business buys supplies on its credit card.",
      "lines": [ { "acct": "Supplies", "side": "dr", "amt": 1500 }, { "acct": "Credit Card Payable", "side": "cr", "amt": 1500 } ] },
    "landBook": 50000,
    "landGain": { "id": "landGain", "narration": "Land carried at $50,000 is sold for $62,000 cash. The entry forces a third line into existence.",
      "lines": [ { "acct": "Cash", "side": "dr", "amt": 62000 }, { "acct": "Land", "side": "cr", "amt": 50000 }, { "acct": "Gain on Sale of Land", "side": "cr", "amt": 12000 } ] },
    "landLoss": { "id": "landLoss", "narration": "The same land sold for $45,000 cash instead: the balancing line flips sides.",
      "lines": [ { "acct": "Cash", "side": "dr", "amt": 45000 }, { "acct": "Loss on Sale of Land", "side": "dr", "amt": 5000 }, { "acct": "Land", "side": "cr", "amt": 50000 } ] },
    "landReceivable": { "id": "landReceivable", "narration": "The land sold for $62,000 — $20,000 cash now, the rest to be received later. The first two-debit entry.",
      "lines": [ { "acct": "Cash", "side": "dr", "amt": 20000 }, { "acct": "Receivable", "side": "dr", "amt": 42000 }, { "acct": "Land", "side": "cr", "amt": 50000 }, { "acct": "Gain on Sale of Land", "side": "cr", "amt": 12000 } ] }
  },

  "ubsAcquisition": {
    "title": "UBS acquires Credit Suisse — June 12, 2023",
    "unit": "USD millions",
    "source": "UBS Group AG, second quarter 2024 financial report (SEC filing, measurement-period-final figures); line items aggregated for the course",
    "reportedNegativeGoodwill": 27264,
    "roundingFootnote": "UBS reported a gain of USD 27,264m; this entry's plug is USD 27,266m — the USD 2m difference is rounding inside the published table itself.",
    "consideration": 3710,
    "totalAssets": 603764,
    "entry": {
      "id": "ubs",
      "date": "June 12, 2023",
      "narration": "One event: UBS receives Credit Suisse's assets at fair value, assumes its liabilities, issues its own shares — and the columns must still meet. The balancing line is a gain: negative goodwill.",
      "lines": [
        { "acct": "Cash and balances at central banks", "side": "dr", "amt": 92923 },
        { "acct": "Amounts due from banks and counterparties", "side": "dr", "amt": 60647 },
        { "acct": "Loans and advances to customers", "side": "dr", "amt": 247044 },
        { "acct": "Financial assets at fair value (incl. trading and derivatives)", "side": "dr", "amt": 172964 },
        { "acct": "Other assets", "side": "dr", "amt": 30186 },
        { "acct": "Customer deposits", "side": "cr", "amt": 183119 },
        { "acct": "Amounts due to banks and counterparties", "side": "cr", "amt": 130467 },
        { "acct": "Debt issued", "side": "cr", "amt": 155400 },
        { "acct": "Financial liabilities at fair value (incl. trading and derivatives)", "side": "cr", "amt": 81383 },
        { "acct": "Provisions, non-controlling interests, and other claims", "side": "cr", "amt": 22419 },
        { "acct": "Consideration — UBS shares issued", "side": "cr", "amt": 3710 },
        { "acct": "Gain on acquisition (negative goodwill)", "side": "cr", "amt": 27266 }
      ]
    }
  },

  "tAccountForms": {
    "note": "Rick's T-account form (2026-08-03 picture): classification header, double ref columns (the posting trail), dated opening/closing balance rows, blank growth rows, $ on the final row. Refs number the canonical entry order below; legends derive from entry narrations.",
    "refOrder": ["restock", "tool", "ccpay", "dana", "restcollect", "danaparts", "restparts", "ridge", "smith", "rent", "draw", "deprT", "deprF", "deprL", "closing"],
    "forms": [
      {
        "id": "cashForm",
        "classification": "Permanent Account",
        "accountType": "Asset",
        "name": "Cash",
        "beg": { "date": "06/01/2026", "amt": 1300, "side": "debit" },
        "rows": [
          { "ref": 4, "side": "debit", "amt": 120 },
          { "ref": 5, "side": "debit", "amt": 5380 },
          { "ref": 1, "side": "credit", "amt": 1200 },
          { "ref": 2, "side": "credit", "amt": 400 },
          { "ref": 3, "side": "credit", "amt": 2030 },
          { "ref": 10, "side": "credit", "amt": 1950 },
          { "ref": 11, "side": "credit", "amt": 600 }
        ],
        "end": { "date": "08/31/2026", "amt": 620, "side": "debit" }
      },
      {
        "id": "partsUsedForm",
        "classification": "Temporary Account",
        "accountType": "Expense",
        "name": "Parts Used",
        "rows": [
          { "ref": 6, "side": "debit", "amt": 10 },
          { "ref": 7, "side": "debit", "amt": 1190 },
          { "ref": 15, "side": "credit", "amt": 1200 }
        ],
        "end": { "date": "08/31/2026", "amt": 0, "side": "debit" }
      }
    ]
  },

  "solveForX": [
    { "id": "collections", "account": "Cash collected from customers",
      "setup": "Revenue 6,020; Ridgeline billed not collected 300; Smith settled by delivery not cash 220.",
      "answer": 5500 },
    { "id": "toolsdep", "account": "Tools & Equipment",
      "setup": "Began 1,200; bought 400; ended 1,440 — the walk only ties if depreciation took X.",
      "answer": 160 },
    { "id": "bankT", "account": "The bank's account with your name on it",
      "setup": "Began 2,500; credits (deposits) 4,940; debits (withdrawals) X; ended 4,074.",
      "answer": 3366 }
  ],

  "rosetta": [
    { "course": "A Reasons-tab row (match-or-reason pair)", "standard": "Journal entry" },
    { "course": "The reason itself", "standard": "The narration line" },
    { "course": "The Reasons tab (one chronological list)", "standard": "The general journal" },
    { "course": "Copying a row into a pile/tab", "standard": "Posting" },
    { "course": "A pile / a tab", "standard": "A ledger account (the T-account is its picture)" },
    { "course": "Naming piles before the season starts", "standard": "Chart of accounts" },
    { "course": "The 3-color tab coding", "standard": "Permanent vs. temporary accounts" },
    { "course": "The season-end sort of Generated's rows", "standard": "Closing" },
    { "course": "The per-account walk (began + ins − outs = ended)", "standard": "T-account analysis" },
    { "course": "The given depreciation beat", "standard": "Adjusting entries" },
    { "course": "Generated", "standard": "Retained Earnings (corporate); net assets without donor restrictions (nonprofit)" },
    { "course": "Contributed / Withdrawn", "standard": "Paid-in capital / draws & dividends" },
    { "course": "The nineteen-repair fan behind one arrow", "standard": "Subsidiary accounts behind a control account" },
    { "course": "The entity concept, scaled up", "standard": "Consolidation" }
  ],

  "canonLines": {
    "drawDoor": "Withdrawn is also emptied into capital at season end — but through its own door, never through income; a draw is not an expense and closing's bins are not where it lives.",
    "oci": "A few gains and losses are lawfully routed around net income into their own equity parking spot — accumulated other comprehensive income; they are not what closing empties.",
    "notClosedTest": "Any account that is not closed will be on the balance sheet."
  }
};
