# Module 2 — Design: *Getting Formal*

**Status:** Draft v1 (2026-07-07) — captures the resequencing + terminology rulings from the
2026-07-07 design session (the click-through walk). A planning doc, not an embedded page.
Built in `Instructional_Redesign_v2` (`Rick` branch), v2 conventions. Pedagogy defers to the
**`accounting-pedagogy`** skill; page/style rules to **`instructional-shared-styles`**; the
non-negotiable language rules to the repo **CLAUDE.md**.

**Where it sits.** M2 turns the pre-LLC repair work (M1) into a legal body — **[Your Name]'s
Bike Repairs, LLC** — and hands M3 a single opening balance sheet (June 1, 2026):

> Assets **$4,710** − Liabilities **$2,250** = Member's Capital **$2,460**
> (cash $1,300; **Contributed $2,290 + Generated $170**).

**File naming (v2).** `2X-Y-Title.html` = Module 2, Activity X, Page Y. Five activities:
2.1 The Two You's · 2.2 Filing for a Legal Body · 2.3 The Rules and the Two Signatures ·
2.4 The Entity's Own Number · 2.5 The LLC's Balance Sheet.

---

## Ruling 1 — Terminology handoff: worksheet terms until the OA, then Member's Capital

**Locked 2026-07-07.** Standardize on **Generated**; **"Retained" / "Retained Earnings" is
retired course-wide** (the lock changed from Retained → Generated at the M3 close too — see
`Module-3-Design.md`).

- **Before the numbers land on the Operating Agreement → pure worksheet terms.** The A − L
  difference has **two piles, labeled `Contributed` and `Generated`** on every balance sheet
  (the plain glosses "what you put in" / "what the work made" are retired as *subpart labels*).
  In M1 the **total stays unnamed** (per CLAUDE.md); the piles are named where the Reasons list
  is built.
- **At the moment the numbers move onto the OA → pick up the legal *total* name
  "Member's Capital,"** explained on-page as adopting the legal term. **Member's Capital =
  Contributed + Generated.** Only the *total* takes the legal label; the subparts keep their
  worksheet names.
- **GAAP synonyms are a literacy aside, M4 only.** Students meet "Retained Earnings" (for
  Generated) and "Contributed Capital" (for Contributed) once, as "the wider world calls this
  pile ___" — never as *the* working label. Follows the existing "Customer Deposit (trade name:
  Unearned Revenue)" idiom.

**The $170 is Generated** (May's pre-LLC work), not a contribution — it keeps its Generated
identity inside the LLC. Opening total: Member's Capital 2,460 = Contributed 2,290 + Generated 170.

---

## Ruling 2 — The Operating Agreement: draft → finalize → sign (resequenced)

> **Built 2026-07-07; REVISED 2026-07-08 per Rick's click-through.** Current shape:
> 2.3 drafts the OA with Schedule A **empty** (blank lines, §9 "$ ____"); 23-3 mounts the
> full workbook (Assets/Liabilities/Reasons + Balance Sheet tab) and walks it slowly before
> the contribution; 24-3 = the three account moves ($1,300 fixed); **24-4 statements →
> NEW 24-5 "Complete Schedule A"** — the student enters all 10 lines from the Balance Sheet
> tab, then signs both lines there; **24-6 = merged Module-2-complete page.** Activity 2.5
> (25-1/25-2/25-3) **deleted** — the side-by-side M1 compare retired per Rick (#11).
> Keystone re-pointed to the Certificate. 2.1–2.2 reframed roles-first ("recognize the
> separate roles, then formalize into separate legal entities"); 22-4 got the animated
> role-separation figure; 21-2's Smith-claim list dropped Prepaid rent (not recoverable in
> litigation). Documents/time-periods/activities-as-actors banned — three lint rules added.

**The problem it fixes.** Today the OA's contribution (Schedule A) is "signed" at **23-3**, where
**Cash = 0** and the balance sheet nets to only **$1,160** — a full activity *before* the $1,300
bank deposit (24-3) that makes the contribution equal the opening balance sheet. The signature
lands before the numbers it attests to exist.

**The fix — three beats across 2.3 → 2.5:**

1. **2.3 — draft, unsigned.** Present the OA as a **draft**; talk it through; establish that the
   member must **assemble what he's contributing before it can be signed.** Signatures deferred.
   Schedule A shown as a **draft** with Cash still 0, flagged "can't finalize until the cash is
   in and the card is moved."
2. **2.4 — settle the accounts, then fill in the numbers.** After the **$1,300 is deposited**
   (24-3, already modeled as a capital contribution) and the **card is moved into the LLC's
   name**, a **new beat** has the student **fill Schedule A with the balance-sheet numbers** —
   so the contribution schedule now **equals the opening balance sheet exactly** (asset &
   liability lines line-for-line; the $170 shows as Generated on the right).
3. **2.5 — execute.** The **two-sided signature** (himself *and* as Sole Member of the Company)
   is performed at the very end; the capstone balance sheet (25-2) is identical to the signed
   Schedule A **by construction.**

**Guiding principle:** *the finalized OA's contribution = the beginning balance sheet, exactly.*
The "change" on the credit card is the **account identity** (re-established in the LLC's name),
not the amount — the card is already $2,030 at 23-3.

### Page-level implications (2.3–2.5)

| Page | Today | Under this design |
|---|---|---|
| 23-1 | OA intro | present OA as **draft** |
| 23-2 The Two Signatures | signatures happen here | talk through the draft; **defer** signatures; establish "assemble contributions first" |
| 23-3 What You Put In | contribution + balance sheet, Cash 0 | **draft** Schedule A; Cash 0, flagged as not-yet-final |
| 23-4 The Wall | limited-liability wall | unchanged (see open item on 23-5) |
| 23-5 When Did It Become Real? | keystone (which act made it real) | **re-point to the Certificate filing (2.2)** as legal existence; OA is internal governance executed later — *needs Rick's final nod* |
| 24-3 Opening the Account | $1,300 deposit; card | + **NEW: finalize Schedule A** = balance-sheet numbers |
| 25-2 Capstone balance sheet | full lay-out; introduces "Member's Capital" | **final two-sided signing** beat; balance sheet = signed Schedule A |

---

## Ruling 3 — Financial statements as tabs in Bike-Repair.xlsx (direction, not yet built)

Rick's standing direction: **every financial statement becomes a tab in the Bike-Repair
workbook**, and every workbook mount must make **"where am I"** unmistakable (sheet tabs
visible, row/column anchoring). Recommended approach **(A)**: a *presentational* statement-tab
capability each page feeds (vs. deriving statements from ledgers, which would require the engine
to model every date). **Prototype on 23-3's June-1 balance sheet first, then sweep.** This touches
`bike-repair-workbook.js`, `shared.js` (BRW), and possibly `shared.css` — all **append-only /
approval-required**; a numbered additions plan goes to Rick **before** any shared-file edit.

---

## Open items

1. ~~23-5 keystone re-point~~ — **confirmed & built 2026-07-07** (Certificate = legal existence;
   1.1 remains the entity answer).
2. **Numeric inconsistency between design docs (flagged 2026-07-07, do NOT silently fix):**
   `Bike-Repair-Workbook-Design.md` (lines 124/133) has **GENERATED $2,740 / close $4,430**,
   while the **locked** M3 close is **Generated 2,210 / $4,500**. *Likely resolution (found
   2026-07-07): those are the correct **pre-adjustment** figures at 31-2 — before the Ridgeline
   $300 receivable and $230 depreciation land (2,740 = 170 + 2,570; 4,430 = 4,500 + 230 − 300).
   The doc pass should relabel them as the intermediate snapshot, not change numbers.*
3. ~~Contributed Capital parallel~~ — **confirmed & swept 2026-07-07**: subparts read
   Contributed / Generated on every student-facing sheet; GAAP synonyms are the M4 aside.
4. ~~Statement-as-tab prototype~~ — **built 2026-07-07** (23-3 balance-sheet tab; M3 pages
   mount the full workbook with statements as tabs via `BR_WB.registerStatementSheets()`).
5. ~~Subpart labels everywhere~~ — **swept 2026-07-07** across M2/M3 pages.
6. **June-1 sheet naming drift (flagged, needs ruling):** M2 pages say "Prepaid rent" /
   "Customer advance — Smith" where M3's 31-1 says "Right of Use" / the locked "Customer
   Deposit." Left as-is pending Rick's call.
