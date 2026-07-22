// Bike Repair LLC season canon for Module 7.
// Giver->receiver direction.
// Values tied to Bike-Repair-End.xlsx and bike-repair-job-records.js.
window.M7_GRAPH = {
  "nodes": {
    "cash": {"label": "Cash", "region": "assets", "x": 300, "y": 300},
    "ar": {"label": "Receivables", "region": "assets", "x": 120, "y": 430},
    "rou": {"label": "Right of Use", "region": "assets", "x": 120, "y": 560},
    "parts": {"label": "Parts", "region": "assets", "x": 450, "y": 470},
    "tools": {"label": "Tools & Equip", "region": "assets", "x": 170, "y": 150},
    "fix": {"label": "Fixtures", "region": "assets", "x": 330, "y": 110},
    "laptop": {"label": "Laptop", "region": "assets", "x": 470, "y": 150},
    "cc": {"label": "Credit Card", "region": "liab", "x": 700, "y": 125},
    "dep": {"label": "Customer Deposit", "region": "liab", "x": 870, "y": 125},
    "contrib": {"label": "Contributed", "region": "reasons", "x": 880, "y": 300},
    "wd": {"label": "Withdrawn", "region": "reasons", "x": 690, "y": 300},
    "rev": {"label": "Repair Revenue", "region": "reasons", "sub": "generated", "x": 700, "y": 470},
    "pexp": {"label": "Parts Used", "region": "reasons", "sub": "generated", "x": 860, "y": 455},
    "rent": {"label": "Rent", "region": "reasons", "sub": "generated", "x": 860, "y": 560},
    "depx": {"label": "Depreciation", "region": "reasons", "sub": "generated", "x": 700, "y": 580},
    "wage": {"label": "Owner's Wage", "region": "reasons", "sub": "generated", "x": 785, "y": 520}
  },
  "entries": [
    {"id": "pbuy", "from": "cash", "to": "parts", "w": 1200, "caption": "Cash gives; the Parts shelf receives its restock (June-August)."},
    {"id": "tool", "from": "cash", "to": "tools", "w": 400, "caption": "Cash gives; the tool stand receives one new tool."},
    {"id": "ccpay", "from": "cash", "to": "cc", "w": 2030, "caption": "Cash gives; the card's claim receives full settlement - the startup balance paid off."},
    {"id": "dana", "from": "rev", "to": "cash", "w": 120, "caption": "The work gives - Dana R. pays $120 for a drivetrain job; Cash receives."},
    {"id": "rest", "from": "rev", "to": "cash", "w": 5380, "caption": "The season's other eighteen repairs - the arrow's total grows; hover for the names."},
    {"id": "danaP", "from": "parts", "to": "pexp", "w": 10, "caption": "The shelf gives up $10 of parts for use in Dana's repair; Parts Used receives."},
    {"id": "restP", "from": "parts", "to": "pexp", "w": 1190, "caption": "Parts consumed by all the other repairs - the arrow's total grows."},
    {"id": "ridge", "from": "rev", "to": "ar", "w": 300, "caption": "The work gives - job finished Aug 28, billed net 15; the right to collect receives."},
    {"id": "smith", "from": "rev", "to": "dep", "w": 220, "caption": "The work gives the delivered frame; the deposit's claim receives its settlement - no longer owed, now earned."},
    {"id": "rentx", "from": "cash", "to": "rent", "w": 1950, "caption": "Cash gives $650 x 3; the season's use of the space is what it bought."},
    {"id": "deprT", "from": "tools", "to": "depx", "w": 160, "caption": "The tools give a season of their working lives; Depreciation receives the season's share."},
    {"id": "deprF", "from": "fix", "to": "depx", "w": 40, "caption": "The fixtures give a season of their working lives; Depreciation receives their share."},
    {"id": "deprL", "from": "laptop", "to": "depx", "w": 30, "caption": "The laptop gives a season of its working life; Depreciation receives its share."},
    {"id": "draw", "from": "cash", "to": "wd", "w": 600, "caption": "Cash gives; the owner's take is recorded in its own pile - Withdrawn, never an expense."},
    {"id": "wagex", "from": "cash", "to": "wage", "w": 600, "caption": "World W recasts the same $600: Cash gives and Owner's Wage receives."}
  ],
  "bs": {
    "cash": {"beg": 1300, "end": 620},
    "ar": {"beg": 0, "end": 300},
    "rou": {"beg": 650, "end": 650},
    "parts": {"beg": 200, "end": 200},
    "tools": {"beg": 1200, "end": 1440},
    "fix": {"beg": 750, "end": 710},
    "laptop": {"beg": 610, "end": 580},
    "cc": {"beg": 2030, "end": 0},
    "dep": {"beg": 220, "end": 0},
    "contrib": {"beg": 2290, "end": 2290},
    "gen": {"beg": 170, "end": 2810},
    "wd": {"beg": 0, "end": 600}
  },
  "channels": {
    "dana": "cfo",
    "rest": "cfo",
    "pbuy": "cfo",
    "rentx": "cfo",
    "tool": "cfi",
    "ccpay": "cff",
    "draw": "cff"
  },
  "cfs": {"cfo": 2350, "cfi": -400, "cff": -2630, "net": -680},
  "recon": {
    "ni": 2640,
    "cfo": 2350,
    "items": [
      {"id": "dep230", "amt": 230, "label": "The tools, fixtures, and laptop give a season's use; no cash moved."},
      {"id": "ar300", "amt": -300, "label": "Ridgeline's work is earned, with cash still to come."},
      {"id": "dep220", "amt": -220, "label": "Smith's work is earned, with cash received last period."}
    ]
  },
  "fan": [
    {"who": "Dana R.", "amt": 120},
    {"who": "Marcus T.", "amt": 150},
    {"who": "Priya S.", "amt": 270},
    {"who": "Liam O.", "amt": 300},
    {"who": "Sofia M.", "amt": 150},
    {"who": "Jamal W.", "amt": 360},
    {"who": "Erin K.", "amt": 225},
    {"who": "Noah B.", "amt": 210},
    {"who": "Grace L.", "amt": 240},
    {"who": "Theo H.", "amt": 240},
    {"who": "Maya P.", "amt": 450},
    {"who": "Owen C.", "amt": 360},
    {"who": "Ava D.", "amt": 270},
    {"who": "Leo F.", "amt": 240},
    {"who": "Nina V.", "amt": 300},
    {"who": "Caleb G.", "amt": 240},
    {"who": "Ruth A.", "amt": 485},
    {"who": "Sam Q.", "amt": 390},
    {"who": "Westville Bike Share", "amt": 500}
  ],
  "worldW": {"ni": 2040, "gen": 2210, "cfo": 1750, "netCash": -680}
};
