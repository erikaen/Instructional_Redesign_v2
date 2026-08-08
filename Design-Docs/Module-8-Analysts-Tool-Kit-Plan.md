# Module 8 — The Analyst's Tool Kit — Walk Plan (8x-x)

**Status: DRAFT 2026-08-01 — awaiting Rick's click-through of the plan.**
This is the "future accounting-terms module" reserved in the M7 as-built
record's out-of-scope list. Rulings 1–14 below were given in the design
discussion of 2026-07-31/08-01 and are recorded as governing; open items at
the end are flagged TBD.

## The module's identity

The course built the machine three times — workbook (M3–M4), statement map
(M5–M6), graph (M7) — deliberately without the profession's notation: no
debits, no "Retained Earnings" (retired for Generated), closing never
mentioned. Module 8 is **the Rosetta Stone**: every term is the profession's
name for something the student already did. Nothing in the module is a new
concept; the module says so, repeatedly.

Second frame: this is the **analyst's** tool kit, not the bookkeeper's. The
student will never keep books in this notation. It earns its place because it
lets them *read* — auditors' language, system-generated entries, footnotes,
the titles on real statements — and *reason backwards* from statements to the
entries that produced them.

## Governing rulings (from the 2026-07-31/08-01 discussion)

1. **This is Module 8**, "The Analyst's Tool Kit" (numbering "for now" —
   Rick's words; index/view wiring is a separate decision, as with M7).
2. **Translation frame** — every term introduced as the standard name for
   something already done; analyst-not-bookkeeper motivation throughout.
3. **Bike Repair is the spine** — do as much as possible in the Bike Repair
   example; canon figures only (June-1 all-Contributed canon, ruling 17 of
   M7). Corporate names (Retained Earnings) and consolidation reach outside
   the LLC via CVS/OHS, which the student has already read.
4. **No trial balance.** **Chart of accounts is in** (83, foiled against the
   course's born-when-first-used rule).
5. **Show the credits-as-negatives strawman** — the sign-collision argument
   is the intellectual center of 82: a liability increase written as a
   negative number reads as *down* while the economics say *up*.
6. **Show the advantage of neat journal-entry notation** — the before/after
   demo: same compound entry jumbled vs. formatted; the grammar (debits
   first, flush left; credits indented; accounts then amounts; narration
   line) arrives as a solution, not a rule.
7. **The bank statement is an example of a T-account** — a page from the
   bank's ledger (their liability account with your name on it); the 13-2
   statement is the first T-account the student meets.
8. **Compound entries get two showcases**: the LLC formation entry (nine
   lines, all canon) and a Goodwill business-acquisition entry (the plug
   with a side).
9. **Temporary accounts get their own purpose beat** before closing:
   period-scoped tally bins implementing "periods are chosen." The
   one-sentence test: **any account that is not closed will be on the
   balance sheet.**
10. **Closing applies only to the temporary accounts that feed net income —
    never to OCI.** OCI gets exactly **one sentence inside the closing
    page**, no beat of its own.
11. **Consolidation is concept-only.** No elimination mechanics, no
    noncontrolling interest. The hook is the word "Consolidated" on the CVS
    statements the student already read; Freddie's 30% is the built-in
    contrast (influence without control ≠ consolidation).
12. **Retained Earnings is the "either balance" example** (a losing season
    makes Generated negative). Its reintroduction is sanctioned HERE — the
    "Generated retires Retained" ruling governed the course's narrative
    voice; M8 is the sanctioned reveal of the outside world's word.
13. **Journal-entry notation spec**: debits first, credit accounts and
    amounts indented from the debits.
14. **Depreciation stays given** (standing course ruling) — adjusting
    entries assert the amounts; no useful-life calculation appears.

Rulings 15–18 (2026-08-01, build kickoff — these resolve open items 2–4):

15. **Engine: Codex all lanes** (0.93 first-try over 61 site-build tasks;
    environment re-verified 2026-08-01 after restoring the
    `codex-code-mode-host` symlink).
16. **Goodwill scenario: a round $60,000 offer** for the whole shop;
    Freddie's implied $66,667 appears in prose as context only. Fair values
    of identifiable assets total 5,000 → Goodwill 55,000 (figures canon in
    `m8-data.js`).
17. **The draw's line in 85-1 — same act, separate door**: "Withdrawn is
    also emptied into capital at season end — but through its own door,
    never through income; a draw is not an expense and closing's bins are
    not where it lives."
18. **Rosetta table is bookends only**: grayed preview on 81-1, complete
    table on 88-1; no progressive-fill component.

Rulings 19–20 (2026-08-01/02, Rick's click-through — supersede where they
conflict with the beats below):

19. **No translation table on 81-1** (ruling 18 amended): the table appears
    exactly once, complete, on 88-1. Rick: "way too much detail" is the
    module's standing risk — trim rulings will accumulate here as the
    click-through proceeds.
20. **82-1 rebuilt on Rick's "double duty" framing, 4 views** (was 5): the
    sign does double duty in +/− records — one symbol carrying both which
    KIND of account and which WAY it moved; assets work fine, the claim
    breaks (−$2,030 strawman, one fixed convention); debits/credits
    separate magnitude from direction — every account increases with a
    positive number on its HOME SIDE; history (born before negative
    numbers, kept because it avoids confusion) and the sums-to-zero ⟺
    debits-equals-credits invariant get one sentence each; the old signed
    A−L−E column view and the signed⇄formatted toggle are CUT.

Rulings 21–23 (2026-08-03, Rick's click-through, round 2):

21. **82-1 view 0 is THE QUESTION**, in Rick's words: most record-keepers
    just use + and −; accounting needs a little multiplication (assigning
    monetary values) but after that only addition and subtraction — so why
    not build the mental model only with signs? The student ENDORSES the
    naive model (gate) before view 1 breaks it. Pivot sentence between
    views 1→2: signs state a position well; the trouble starts when you
    record changes.
22. **82-2 is the example ladder** (ruling 3 consciously relaxed — the bike
    shop's complexity was only VOLUME; STRUCTURAL complexity, one event
    exchanging many assets and claims, needs examples the shop cannot
    supply): borrow → buy with cash → buy with card → land sale with a
    gain/loss side-flipping plug (canon: book 50,000; sold 62,000 → gain
    12,000 / sold 45,000 → loss 5,000) → two-debit receivable variant →
    **UBS acquires Credit Suisse** (June 12, 2023) shown in signs first,
    then proper notation. The formation is the hinge: the course
    SERIALIZED its one complex event in 71-2; the profession holds it
    WHOLE. The old ordering game and typed-amounts drill are CUT; the
    formation walk demoted to the hinge mention.
23. **UBS canon** (m8-data.js `ubsAcquisition`, tie-outs in
    check-m8-data.py): 12-line entry in USD millions from the SEC-filed
    measurement-period-final allocation — assets 603,764 = claims 572,788
    + consideration 3,710 + **negative goodwill gain 27,266 as the exact
    plug** (UBS reported 27,264; the USD 2m gap is rounding inside the
    published table — footnoted on-page, source cited). 86-3 gains the
    mirror panel: price above identifiable fair value → plug lands debit
    (Goodwill); price below → plug lands credit (negative goodwill).

24. **2026-08-03: 82-1 view 2 opens on the WORDS before the mechanics** —
    accountants don't fix the sign problem with better signs; they use two
    words the student has already heard (the bank credited your account;
    the debit card), the main idea stated as: the debit/credit system
    separates the two roles the sign was carrying; debit = left, credit =
    right, and that is all the words mean; plus the quiet teaser that the
    bank's language "looks backwards" — resolved when the bank statement
    returns on 83-1.

Rulings 25–27 (2026-08-03, Rick's click-through, round 3 — THE SPLIT):

25. **The Tool Kit is two modules.** Module 8 keeps only journal-entry
    notation and T-accounts: 81-1 intro (topic list trimmed) → 82-1 Sign
    Problem → 82-2 Journal Entry → 83-1 T-Account/Bank Statement → 83-2
    Posting/Ledger/Chart → 84-1 Module-8-Complete (new page, short
    hand-off, NO translation table). Everything else is the new
    **Module 9**: 91-1 intro (new) → 92-1 Adjusting (was 84-1) → 93-1
    Temporary/Closing (was 85-1) → 94-1 Contra/Adjunct (was 86-1) → 94-2
    Control/Subsidiary (was 86-2) → 94-3 Goodwill (was 86-3) → 95-1
    Consolidation (was 87-1) → 96-1 Module-9-Complete (was 88-1; the full
    translation table lives HERE — ruling 19 amended: once, at the very
    end of the kit). m8-data.js remains the shared data file for both
    modules; the page checker infers the module number from the filename.
    Module 9's name/subtitle: TBD (Rick).
26. **82-2 grew to six views** (Rick's four directives): (a) purchases
    view notes the credit's two jobs — reduced an asset on the left,
    increased a liability on the right; (b) the land view makes the
    student DECIDE the balancing line's sign (+/−) before it renders —
    gain = minus, loss = plus; (c) NEW view "The identity explains the
    signs": A−L−E = 0 walk of the sale; the credit trio completed (a
    minus = asset down, claim up, or equity up); (d) the UBS signed
    column arrives UNSORTED (debits and credits interleaved), and two
    identity questions gate the formatted entry — what the −3,710
    (shares issued) and the −27,266 (gain) each say: equity went up.
27. **The T-account form** (Rick's picture, 2026-08-03 — BUILT): a
    classification header (Permanent/Temporary Account, Account Type,
    Account Name), a four-column T (ref | debit | credit | ref — the
    double ref columns are the POSTING TRAIL, each number keyed to the
    journal entry it was posted from), dated opening balance row
    (permanents only), blank growth rows, dated ending balance row in
    $-style ($620.00 / $-; a closed temporary shows $- on both sides),
    and a legend below mapping refs to entry narrations (inline-label
    mode also available). Implemented as ToolkitLab.renderTAccountForm;
    canon forms in m8-data.js `tAccountForms` (cashForm 1,300 → 620 with
    seven ref'd rows; partsUsedForm showing its detail 10 + 1,190 then
    the closing ref, ending $-) with executed tie-outs; adopted on 83-2
    (posting view + ledger gallery). Deltas from Rick's sample, flagged
    2026-08-03: canon figures used (his sample's 500/5,000/1,230 look
    like the older workbook), and "Cost of Goods Sold" rendered as the
    course's "Parts Used". The closing entry's narration was made
    spoiler-free ("next season starts at zero") so legends never leak
    Retained Earnings before 93-1's reveal.

30. **T-look rulings** (Rick 2026-08-03/04): (a) 82-2's +/− land panel
    keeps the gain and loss in ONE shared row — "Gain (Loss) on Sale of
    Land" — whose value flips −12,000/+5,000 with the price toggle;
    (b) 83-1 does not "fold" the bank statement — the numbers are COPIED
    into the correct columns of the form-styled T, with each statement
    row's explanation written in the outer column on its own side (right
    of the credit column for deposits); the word "fold" is banned on the
    page; (c) standing layout rule for every T course-wide: ONLY NUMBERS
    inside the T's lines — explanations/refs live in the outer ref
    columns or in a clearly separate References panel outside the T's
    footprint, never under the T's lines (83-2's under-T legends
    replaced accordingly).
28. **The UBS beat leaves the gain out at first** (Rick 2026-08-03): the
    incomplete 11-line entry renders with visibly unequal totals (603,764
    vs 576,498) — the notation hands you the missing piece's SIZE and
    SIDE (student types 27,266, picks credit). Then the +/− contrast: a
    signed column with balance imposed only hands you −27,266, and the
    student must decide what the minus means — subtract an asset, add a
    liability, or add equity (correct: add equity; the −3,710 shares
    question keeps the same answer). Punchline near-verbatim: once again,
    you have to increase equity with a negative number. Only then does
    the complete 12-line entry render.
29. **Lint carve-outs extended** (2026-08-03): the "equity" and "net
    assets" bans now exclude 8x/9x pages — Modules 8-9 are the
    profession's-vocabulary reveal, same another-vocabulary principle as
    5x/6x; "equity" wording on the identity/UBS beats is Rick's own.
    (Correction of record: these rules had been failing since the split
    round; an earlier truncated lint read was misreported as clean.)


31. **Site migration (Rick, 2026-08-04):** Modules 7, 8, and 9 migrated to the live
    course site (Final_Accounting_Prework → accounting-from-the-ground-up.com), each
    labeled **"Under Construction"** on the dashboard. **Module 9's displayed name is
    literally "TBD"** until Rick's naming ruling (ruling 25 still open). M9's per-page
    Danny/RAG tutor docs are deliberately deferred until Rick's click-through; M7/M8
    have full tutor docs. Site-side registries live in the deploy repo as
    course-m7/8/9.js (vocabulary carve-out; course-m8.js provably never says
    "Retained Earnings" — the term is defined in course-m9.js where 93-1 reveals it).
    Sequential-locking extension (orchestrator's call, flagged for veto): the M1-4
    chain is unchanged; every module from 5 on is a free-entry door, including 7-9.
    Content authority is UNCHANGED: v2 remains the source of truth; site copies are
    conversions of graph-teach-wip @ 3ea803c and re-migrate after any M9 rework.

Rulings 32–37 (2026-08-07, Rick's click-through, round 4 — M8 only):

32. **81-1 wording + module scope trim.** "Why the words matter" must not
    say "you will never keep books" — say "even if you never keep books,
    it helps to know the accountants' words for things."
    **Posting and the Chart of Accounts are OUT of Module 8** (supersedes
    ruling 4's "chart of accounts is in"; the no-trial-balance half of
    ruling 4 stands). Recorded notes: there could be a whole tutorial on
    the chart of accounts in modern systems; Maria's insurance form (12-2)
    was really just a chart of accounts for her insurance accounting —
    the natural hook for that future tutorial. Consequence flagged for the
    M9 click-through: the 96-1 Rosetta rows for Posting / Chart of
    accounts would be those terms' only appearance — Rick to rule there.
33. **M8 vocabulary.** Never "claim" — say "liability" (module-wide; a
    real document's own line wording is exempt where genuinely quoted,
    e.g. the UBS allocation line label in m8-data.js — same carve-out
    logic as Anna's plural OA). Never "the profession" / "the
    profession's" — say "accountant" / "accountant's". The ledger
    account is named **"Depreciation Expense"** (m8-data.js rename;
    ripples into M9's adjusting/closing renders — accepted).
34. **82-1 rework** (amends ruling 20). Reading 2 opens with the identity
    beat: the course's difference A − L = Member's Capital, moved to one
    side (A − L − MC = 0), then the signed system's move — each minus is
    welded into the number it guards, liabilities and capital are STORED
    negative, and the identity becomes pure addition: everything sums to
    zero (June 1: 4,710 − 2,250 − 2,460 = 0). The double-duty collision
    then falls out as a necessity: the sign already has a full-time job
    marking kind, so direction of change reads backwards for the whole
    right side. The diagnosis gains the equity twin: customer pays $120
    for a repair → Cash +120, capital side −120 — the shop got richer,
    the sign says down (seeds 82-2's UBS punchline). "The test" card is
    replaced (it narrated the payoff while its table showed the claim's
    birth). The cut toggle view of ruling 20 stays cut. Reading 3's
    home-side list shows "Depreciation Expense". Reading 4's two panels
    record the SAME event — the payoff only: signed card reads card
    liability +2,030 / Cash −2,030 (sums to zero) beside the journal
    entry. "The statements agree" heading replaced by the plain fact:
    financial statements show both liabilities and contributed equities
    as positive numbers, not negative ones.
35. **82-2 rework** (amends rulings 26 and 30(a)). The grammar is
    introduced right off the top — the page formalizes specimens the
    student has already seen, it does not feign novelty. The formation
    entry on view 1 renders debits and credits only, no narration line.
    The "which side did the growth in Loan Payable land on" question is
    cut (stale after 82-1's home-side drill). The land gain/loss view:
    NOT one box with a toggle — the gain case and the loss case run in
    order and BOTH stay visible on the page (supersedes 30(a)'s single
    flipping row); bottom line stated: in +/− notation a gain carries a
    − and a loss carries a + — an invitation to confusion. Rick's
    framing lands here: people complain they don't know what "debit" and
    "credit" mean — that is a good thing; it keeps the mind open about
    effects (was an asset reduced, a liability increased, an equity
    increased?) while the number's only role stays magnitude. The
    identity-explains-the-signs walk (26(c)) and the two-debit
    receivable variant are BOTH CUT (the gain/loss entries already show
    multi-line structure; the identity now lives on 82-1 R2) —
    TOTAL_STEPS 6 → 4; gain/loss opens straight onto UBS. The UBS beat
    carries the module's big takeaway: debit/credit notation is useful
    when we ANALYZE transactions — the notation facilitates analysis.
36. **83-1 rework.** The bank statement is the BANK'S RECORDS — their
    view, not yours; the word "ledger" does not appear (it has not been
    introduced; it arrives on 83-2). The normal-balance reading (was 4
    of 5) is cut as redundant with 82-1's home-side drill; its
    replacement teaches the T-account's USE — visualizing knowns and
    unknowns: anyone who can see the beginning and ending balance sheets
    knows the beginning and ending balances of the accounts shown; find
    either the inflows or the outflows and you can calculate the other.
    The Module 1 bike-parts walk is the worked example (began at zero,
    purchases known, parts left known → the outflow was CALCULATED).
    Ruling 12's either-balance beat survives relocated as one sentence
    (Generated: a winning season leaves it credit, a losing one debit).
    All posting material removed (module-wide; T-form ref columns get a
    posting-free gloss — "each number points back to the journal entry
    it came from"). The page closes on the bottom line: analyzing ONE
    account, the T-account is the go-to tool; analyzing transactions and
    events that span accounts, journal-entry notation is your friend.
37. **83-2 becomes "The Ledger"** (title; filename unchanged for now —
    rename decision deferred to graduation from Under Construction).
    Slims to three views: (0) recognition in one breath — the piles were
    ledger accounts, the book of all of them is the general ledger, with
    the modern-systems note: a ledger was a physically different book
    from a journal; modern systems barely need the distinction, because
    a ledger is just the journal sorted a different way; (1) the two
    ruling-27 T-account ledger pages; (2) the solve-for-the-missing-
    number capstone. Posting drill and chart-of-accounts views deleted
    per ruling 32.

38. **83-1 mirror beat (Rick, 2026-08-08):** since your account is the
    reverse of the bank's — their liability account is your asset — to get
    YOUR T-account you reverse the debits and credits. Lands on the copy
    view (view 2) as the payoff after the bank's T is built: a second,
    mirror-image T of the same money in your records (beginning 2,500
    DEBIT, deposits debit, withdrawals credit, ending 4,074 debit), which
    completes the "looks backwards" reveal and reinforces Cash's debit
    home side from 82-1.

39. **83-1 Parts T corrections (Rick, 2026-08-08):** on the knowns/unknowns
    view, the Parts T begins at its opening balance of $200 — no
    "Purchased at formation" line (the walk is 200 + 1,200 − X = 200);
    the solved unknown renders as a literal **X** inside the T where
    Parts Used's amount goes; and the T uses the proper ruling-27 form
    (classification header, double ref columns, dated opening and ending
    balance rows), like every other T course-wide.

## The Rosetta Stone (the module's spine and its closing artifact)

| The course's word/act | The standard term |
|---|---|
| A Reasons-tab row (match-or-reason pair) | Journal entry |
| The reason itself | The narration line |
| The Reasons tab (one chronological list) | The general journal |
| Copying a row into a pile/tab | Posting |
| A pile / a tab | A ledger account (the T-account is its picture) |
| Naming piles before the season starts | Chart of accounts (vs. born-when-first-used) |
| The 3-color tab coding (permanent / temporary / statements) | Permanent vs. temporary accounts |
| The season-end sort of Generated's rows | Closing |
| The per-account WALK (began + ins − outs = ended, M7) | T-account analysis |
| The "given" depreciation beat | Adjusting entries (entries with no document) |
| Generated | Retained Earnings (corporate); net assets without donor restrictions (nonprofit, seen in M6) |
| Contributed / Withdrawn | Paid-in capital / draws & dividends |
| The nineteen-repair fan behind one arrow (72-1, 74-2) | Subsidiary accounts behind a control account |
| M2's entity concept, scaled up | Consolidation — why CVS's title line says "Consolidated" |

## Canon (unchanged — June 1 all-Contributed, sweep @ 55bbc1c)

June 1: assets 4,710 / liabilities 2,250 / Contributed 2,460, Generated 0.
Formation pieces: Cash 1,300 · Parts 200 · Tools 1,200 · Laptop 610 ·
Fixtures 750 · Right of Use 650; assumed: Card 2,030 · Smith deposit 220.
Season: Revenue 6,020 / expenses 3,380 (Parts Used 1,200, Rent 1,950,
Depreciation 160+40+30 = 230) / NI 2,640; draw 600; Cash 1,300 → 620.
Aug 31: Member's Capital 4,500 = 2,460 + 2,640 − 600. Freddie deal (M4
canon): $20,000 for 30%, under consideration, never signed.

## Page-by-page beats

### 81-1 Module 8 Introduction

The turn: three builds of the same machine, all in the course's own words —
now the profession's words, which are 500 years old and everywhere. Why an
analyst needs them: to read entries, auditors, footnotes, statement titles,
and to reason backwards from statements. The promise, stated flat: **nothing
in this module is new; only the names are.** Preview of the Rosetta Stone
table (grayed, filling in as the module proceeds is a candidate device).

### 82-1 The Sign Problem

The strawman sequence — each format fails visibly before the next fixes it:

| Beat | Format | Where it fails |
|---|---|---|
| 1 | Prose ("paid off the card…") | Fine for one change; unreadable for six |
| 2 | **Credits as negative numbers** | The card payoff: the claim SHRINKS but you subtract a negative / the startup card balance GROWS by adding −2,030. "Negative" collides with "decrease" — direction and sign are two different ideas wearing one symbol |
| 3 | Signed column summing to zero (A − L − E = 0) | Honest — this is the spreadsheet's native view, and the student has felt it (the $160 negative-tally discovery) — but illegible at six lines |
| 4 | Sides | Direction carried by *position*; every magnitude positive |

The derivation, one line: write the identity as **A − L − E = 0**; debit ≡ a
positive move in that expression, credit ≡ a negative one. That line
generates the whole normal-balance table — nothing to memorize. The
invariant equivalence stated plainly: *entry sums to zero ⟺ debits =
credits* — same check, signs traded for sides.

Interactive: the **two-panel toggle** — one Bike Repair transaction shown
simultaneously as a signed column (sums to zero) and as a journal entry
(dr = cr); the student flips between encodings of the same fact.

### 82-2 The Journal Entry

The entry as **the profession's sentence**, with a grammar: debits first,
flush left; credits indented; accounts then amounts in two columns; a
narration line underneath. The narration IS the course's reason — the
match-or-reason rule wearing a suit.

- **Before/after demo** (ruling 6): a compound entry jumbled (mixed order,
  minus signs, no indentation) vs. formatted. Same six lines; one is legible
  by geometry alone.
- **The first compound entry costs nothing narratively** — the formation
  (71-2's eight recognitions as one entry, all canon):

  | Dr | Cr |
  |---|---|
  | Cash 1,300 · Parts 200 · Tools 1,200 · Laptop 610 · Fixtures 750 · Right of Use 650 | Credit Card Payable 2,030 · Customer Deposit 220 · Member's Capital — Contributed 2,460 |

  Nine lines, debits 4,710 = credits 4,710, and the student watched every
  piece get recognized in 71-2.
- Interactive: **format-this-entry** — drag lines into debits-first,
  credits-indented order; a season transaction or two re-expressed as
  entries with typed amounts (numbers checkable against statements the
  student built).

### 83-1 The T-Account and the Bank Statement

Open on the 13-2 bank statement: opening balance, chronological rows in two
columns — on a real statement often literally labeled **Debit** and
**Credit** — running balance. It is a page from the bank's ledger: their
liability account with the student's name on it. Fold it into a T (same
rows, same numbers, new geometry). The reveal lands inside the fold: money
arriving is a *credit* because the bank's debt to you grew — the labels only
look backwards because you're reading someone else's ledger. First T-account
in the course = a document the student has handled for years.

Normal balances follow: Cash debit, payables credit — and **Retained
Earnings as the "either" account** (ruling 12): a losing season makes
Generated negative; the T reports the balance on whichever side the sign
puts it.

### 83-2 Posting, the Ledger, and the Chart of Accounts

- **Posting** = the copying the student did in M3 (Reasons tab → piles);
  journal → ledger is the same move with the standard names. General ledger
  = the book of all the T's.
- **Chart of accounts** (ruling 4): the pre-declared namespace — the
  profession names the piles before the season starts, numbered; foil
  against the course's born-when-first-used rule. Show a small CoA for the
  bike shop (the accounts the student already created, numbered).
- **Capstone — the T-account as a solve-for-the-missing-number device**:
  beginning + one side − other side = ending; know three, get the fourth.
  This is M7's WALK written in the profession's geometry — 74-2 inferred
  depreciation 160 from the Tools walk; redo one such inference as a
  T-account (e.g., cash collected off the Receivables T). Every inference is
  checkable against the ledger the student built.

### 84-1 Adjusting Entries

The class of entries no bank statement triggers — **entries with no
document**, made at period end so the chosen period's picture is right
("periods are chosen" made mechanical). Depreciation is the anchor (amounts
GIVEN, ruling 14): the 160/40/30 as three adjusting entries — the student
saw these move in 72-1 view 11 with "no cash moves" said out loud. Sketch
the two other families at concept level with bike-shop-adjacent examples:
accrual (Ridgeline-style — work done, nothing received yet) and deferral
released (Smith-style — received first, earned later). Journal notation
throughout; this page is also quiet practice of 82's grammar.

### 85-1 Temporary Accounts and Closing

- **Purpose first** (ruling 9): permanent accounts answer *where do we
  stand*; temporary accounts are period-scoped tally bins answering *what
  happened in the period we chose*. The course computed net income by
  sorting Generated's rows once at season end; the profession pre-sorts
  during the period into labeled bins (Revenue, each expense) and empties
  the bins when the period closes. Same computation, two algorithms.
- **Closing = emptying the season's bins so next season starts at zero.**
  The season's closing entries in journal form: Revenue 6,020 debited shut;
  Parts Used 1,200 / Rent 1,950 / Depreciation 230 credited shut; the 2,640
  lands in Generated — whose outside name is **Retained Earnings** (the
  reveal, ruling 12).
- **The one-sentence test** (ruling 9): *any account that is not closed will
  be on the balance sheet* — apply it live to the 3-color tab strip from the
  workbooks; the color coding was the temporary/permanent split all along.
- **OCI, one sentence exactly** (ruling 10), candidate wording: "A few
  gains and losses are lawfully routed around net income into their own
  equity parking spot (accumulated other comprehensive income); they are not
  what closing empties." No further development.
- The draw: Withdrawn also zeroes into capital at season end, but never
  through income — one line, kept firmly apart from the NI bins (wording
  TBD, open item 3).

### 86-1 Contra and Adjunct Accounts

The punchline framing: **the dr/cr system banned minus signs — so when the
profession needs a negative, it opens an opposite-side account instead.**
Contra = the system's negative number: Accumulated Depreciation, shown
gross-minus-accumulated where the course's workbook showed the net directly
(Tools 1,600 − 160 = 1,440 — same 1,440 the student built). Adjunct = the
same-side companion (bond premium as the classic, concept-only — thin on
bike-shop hooks, one panel).

### 86-2 Control and Subsidiary Accounts

One line on the statements, a book of names behind it. The course already
showed this: the nineteen-repair fan behind one revenue arrow (72-1 view 5),
the per-customer promises of 13-4. Control account (A/R in the general
ledger) + subsidiary ledger (one small account per customer, summing to the
control balance). Analyst's angle: the statements show only control
balances; the fan is what the insiders keep.

### 86-3 Goodwill — the Plug with a Side

The capstone compound entry and the bridge to 87. "Suppose someone bought
the whole shop at Freddie's price" — the M4 deal ($20,000 for 30%) implies
a whole-shop value far above the 4,500 on the books. The buyer's entry:
debits for identifiable assets at fair value, credits for liabilities
assumed and cash paid, **Goodwill is the plug that makes debits equal
credits**. The pedagogical point is plug-discipline: in signed arithmetic a
plug is "whatever makes it zero," easy to get backwards; in dr/cr the plug
has a side. (Purchase price and fair-value figures TBD, open item 2 —
concept must survive whatever numbers are chosen.)

### 87-1 Consolidation (concept only — ruling 11)

The word the student already read and skipped past: CVS's statements are
titled **Consolidated** (M5). One economic entity assembled from many legal
bodies — M2's entity concept, scaled up: control means the parent steers, so
the family is presented as one body, and dealings inside the family cancel
(one sentence, no mechanics). The contrast the course already owns:
Freddie's 30% would be influence, not control — no consolidation. No
eliminations, no NCI (ruling 11).

### 88-1 Module Complete

The full Rosetta Stone table as the takeaway artifact — course word ↔
standard word, every row now earned. Close on the analyst frame: the student
can now read the notation and reason backwards through it; they were never
being trained to keep books in it.

## Engine & build notes

- **New components** (the only genuinely new build): a journal-entry
  renderer (the grammar of ruling 13 as a reusable block, with jumbled/
  formatted and signed/JE dual-render modes for 82) and a T-account
  renderer (fold-from-statement animation for 83-1, solve-for-X mode for
  83-2). Everything else — page shell, shared.css, gated Next, typed-input
  three-strike pacing, glossary machinery — carries over from the existing
  engines.
- **Data**: no new canon. 8x pages read the same figures as
  `bike-graph-data.js` / the M7 canon; a small `m8-data.js` may re-export
  what the pages need plus the CoA listing and the Goodwill scenario
  figures (once ruled).
- **Vocabulary guard**: M7's page checker bans debit/credit/posted on 7x
  pages — that stands. M8 gets its own `check-m8-page.py` with the
  *opposite* guard where needed (e.g., "Retained Earnings" must appear ONLY
  on/after its 85-1 reveal; "Generated" remains the course's word in
  narration). `lint-language.sh` (actor-grammar) runs as usual — no
  carve-out needed; its rules are orthogonal.
- **Verification stack** mirrors M7: `check-m8-data.py` tie-outs (every
  entry balances; closing lands 2,640; formation entry = 4,710/4,710),
  parametric page checks, a harness with in-browser assertions.
- Build pattern: Ringer manifests per page, as with M6/M7.

## Open items (TBD — for Rick)

1. **Numbering of pages within tutorials** — the split above (81-1 … 88-1,
   ten pages) is a proposal; pages can merge (82-1+82-2) or split further
   on click-through.
2. **Goodwill scenario figures** — implied whole-shop value from the
   Freddie deal is $66,667 (ugly); options: round the hypothetical price
   (e.g., "suppose a buyer offered $60,000"), or keep the deal-implied
   number with rounding acknowledged. Also which assets get fair-value
   uplifts vs. book. Recommend: round hypothetical price, minimal
   fair-value steps, small clean numbers.
3. **The draw's closing wording** — draws zero into capital but are not an
   NI bin; exact one-liner needs Rick's ear (it touches the
   Withdrawn-is-never-an-expense canon).
4. **Whether 81-1's Rosetta table progressively fills** across the module
   (device) or appears only at 81-1 (preview) and 88-1 (complete).
5. **Index/view wiring and placement** — after M7, as with M7's own open
   item; Rick's call.
6. **Assessment/module-complete scope** — 88-1 as designed is a close-out
   page, not an assessment; same scope stance as M7.

## Out of scope

- Any reworking of 1x–7x pages to use the new vocabulary (the course's own
  words stand; M8 is a translation layer, not a retrofit).
- Bookkeeping procedure for its own sake: special journals, worksheets,
  reversing entries, post-closing trial balances (and no trial balance at
  all, ruling 4).
- Consolidation mechanics (eliminations, NCI) and any OCI development
  beyond the single sentence (rulings 10–11).
