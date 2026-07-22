# Module 2 — Activity 2.3 & 2.4 (pages 23x–24x) — AI Tutor RAG

These notes cover the six phases of Activity 2.3 (The Rules) and the six phases of
Activity 2.4 (The Entity's Own Number), in the order a student meets them. The tutor
helps by orienting the student toward what is on the page, then nudging, then — only
after genuine attempts — confirming. The tutor never names a discovery before the page
reveals it. Every page carries a header with a progress bar, a glossary button, and a
restart button; Enter submits typed answers; Continue buttons unlock when the page's
task is done.

---

## 23-1-welcome.html — The Operating Agreement

### What this page is

Phase 1 of 6 in Activity 2.3 (The Rules). The Certificate of Organization (2.2) made
the LLC exist as a legal body; this page introduces the second document — the Operating
Agreement — which says how the LLC works. Anna shows City Cycle's agreement as an
example of the shape, and explains that the student's own agreement must start as a
draft, because its Schedule A (the list of what the member contributes) cannot be
finalized before the contributing is done. It comes right after 2.2 and leads into
23-2, where the student types a name and generates the draft.

### The page, step by step

1. A narrative block frames the page: the Certificate made the LLC exist; now there is a
   second document — the one that says how it works.
2. Anna's first dialog box: every LLC needs an Operating Agreement — the rulebook (who
   the member is, what they put in, who's on the hook). City Cycle's is just to show the
   shape.
3. A dashed "Anna's example" card previews City Cycle, LLC's agreement, with three
   sample sections visible: §7 Sole Member (Marcus Webb), §9 Capital Contributions, §17
   Liability of the Sole Member.
4. An outlined "Open City Cycle's full agreement →" button opens a document viewer
   overlay with all nineteen sections (tap any heading to expand); §7, §9, and §17 are
   pre-expanded and marked "★ watch this". This button is optional — a reference, not a
   task.
5. Anna's second dialog: same sections for every LLC; yours carries your name, business,
   numbers. The agreement ends with Schedule A — the list of what the member contributes
   — and you can't finalize that list before the contributing is done, so yours starts as
   a draft.
6. The Continue button "Draft my Operating Agreement →" is immediately available (no
   gating task on this welcome page) and navigates to 23-2-agreement.html.

### If the student is lost

- "What am I supposed to do here?" — Orient: this is a reading page; read the two Anna
  boxes and the example card. Nudge: the only required action is the button at the
  bottom. Stronger hint: press "Draft my Operating Agreement →" to move on; Anna's
  example can be reopened anytime from the button above.
- "What is an Operating Agreement and why is mine a draft?" — Orient: Anna calls it the
  rulebook for the LLC. Nudge: look at what she says about Schedule A at the end. Stronger
  hint: Schedule A lists what the member contributes, and you can't list what's contributed
  before the contributing is done — so yours starts as a draft and gets completed later.
- "Do I have to open City Cycle's agreement?" — Orient: it's optional. Nudge: it's there
  to show the shape; your own is coming next.

### TUTOR-ONLY answer key

TUTOR-ONLY — no graded answer on this page. The single forward action is "Draft my
Operating Agreement →" (navigates to 23-2). Anna's example (City Cycle, LLC; member
Marcus Webb; dated May 9, 2018) is illustrative only and is NOT a template to copy. Facts
the page plants for later: the agreement is the LLC's internal rulebook; the three "watch
this" sections are §7 Sole Member, §9 Capital Contributions, and §17 Liability of the
Sole Member; Schedule A is the list of contributed property; the student's own agreement
starts as a DRAFT — UNSIGNED because the contributing is not finished. Do not state the
name the right-hand side of the balance sheet will take; that is revealed on 23-3. There
is no three-strike reveal on this welcome page.

### Anchor

anchor: Draft my Operating Agreement

### Before and after

Before: the student just filed the Certificate of Organization (2.2), so the LLC now
exists as a legal body. After: 23-2, where the student types the member's name and
generates their own draft agreement.

---

## 23-2-agreement.html — Drafting the Agreement

### What this page is

Phase 2 of 6 in 2.3. The student confirms the member's name and generates their own
Operating Agreement as a draft — the whole nineteen-section document, with Schedule A
intentionally left blank. The page teaches that paper comes last: you cannot honestly
fill in Schedule A until the cash is deposited and the card is moved (both happen in
2.4), and you sign only after the schedule is complete. It sits between the welcome
(23-1) and the §9 drill on contribution (23-3).

### The page, step by step

1. A narrative card: almost everything the agreement needs is already known (your name,
   your LLC's name, the business you'll put in); what it lacks are final numbers.
2. A section card with a labeled text input "The member (you)" and placeholder "Type your
   name…". As the student types, a live preview below shows "Your LLC: [name]'s Bike
   Repairs, LLC".
3. Pressing Enter (or clicking "Draft my Operating Agreement →") generates the agreement.
   The name is saved to localStorage so later pages reuse it.
4. After generating: the full draft document appears, stamped "DRAFT — UNSIGNED". A note
   tells the student to read the ★-marked sections (§7, §9, §17) and notice what must be
   left blank. Sections are expandable (tap a heading).
5. Schedule A area shows blank lines and "Net contribution (members' capital) $ ____",
   plus a dashed note: you can't complete the schedule yet — the cash isn't deposited and
   the card is still in your name; both happen in 2.4; complete the schedule from the
   Company's books after that, and sign only after the schedule is complete.
6. The signature page is shown unsigned, with the closing line "Unsigned — you sign both
   lines at the end of Module 2, once you've completed Schedule A."
7. An outlined "View Anna's example →" button reopens City Cycle's agreement for
   comparison (optional).
8. An insight box "A draft, on purpose" reinforces why Schedule A is blank.
9. The Continue button "Now drill into §9 — what you put in →" navigates to 23-3. It is
   available once the agreement is generated.

### If the student is lost

- "Nothing happens when I type." — Orient: typing updates the LLC-name preview; the
  generator runs when you submit. Nudge: press Enter or click the "Draft my Operating
  Agreement →" button. Stronger hint: the button needs a name in the box; type your name
  and submit to generate the draft.
- "Why is Schedule A blank / why can't I sign?" — Orient: the page says the agreement is
  complete except the part you can't honestly fill in yet. Nudge: read the dashed note
  under Schedule A. Stronger hint: Schedule A attests to what the member contributes, and
  the contributing isn't done — the cash isn't deposited and the card is still in your
  name; you complete the schedule after the facts are in (2.4), then sign.
- "Which sections should I read?" — Orient: the marked ones. Nudge: look for the ★ "watch
  this" tags. Stronger hint: §7 Sole Member, §9 Capital Contributions, and §17 Liability
  of the Sole Member are the three to read carefully.

### TUTOR-ONLY answer key

TUTOR-ONLY — the only required input is the member's name (any non-empty name; it is
saved as 'm2Member' and reused across 2.3/2.4 as "[name]'s Bike Repairs, LLC"). Submitting
generates the draft. Expected reading: the three ★ sections — §7 (Sole Member is the
student), §9 (contributes the assets and liabilities of the business at existing book
amounts, per Schedule A; net book value left blank as "$ ____ (Schedule A to be
completed)"), §17 (Sole Member is not personally liable for the Company's debts).
Schedule A is intentionally blank; the draft is unsigned. The §9 net book value figure is
NOT filled here — it is completed on 24-5. Do not reveal the Schedule A total before
24-5 does. No three-strike reveal on this page; it is a generate-and-read task.

### Anchor

anchor: Almost everything the agreement needs, you already have:

### Before and after

Before: 23-1 introduced the Operating Agreement and the idea of a draft. After: 23-3
drills into §9 and walks the workbook tabs to see exactly what gets contributed.

---

## 23-3-contribution.html — What You Put In

### What this page is

Phase 3 of 6 in 2.3. This page drills into §9 (Capital Contributions) by walking the
student's May workbook, explicitly identified as the member's personal record, and then
opening the Company's books at zero on June 1. The noncash formation rows record the
things put in and claims assumed, producing a $1,160 difference, all Contributed. The
$1,300 cash seed is recorded later in 2.4 and completes total Contributed of $2,460. It
sits between drafting (23-2) and the §17 wall (23-4).

### The page, step by step

1. A narrative block points to §9. It identifies the displayed May workbook as the
   member's personal record and explains that contributing does not relabel that history
   as the Company's. Schedule A is still blank. A callout quotes §9.
2. The Company comes into existence with books opening at zero on June 1. Its formation
   rows record the things put in and claims assumed. The member's ten May work rows stay
   only in the personal workbook and are not copied into the Company's Reasons list.
3. Step 0 → Continue "Open the Balance Sheet tab →" switches to the Balance Sheet tab
   and advances to step 1.
4. Step 1: Anna reads the noncash formation rows — Assets $3,410 (Cash still $0) and
   claims assumed of $2,250. Their $1,160 difference is all Contributed. Generated is $0.
   Continue "Contribute the business to the LLC →" runs doContribute (step 2).
5. Step 2 reinforces the boundary: the member's $1,160 May difference remains
   personal-records history. The Company's books began at zero, and the noncash formation
   rows produce Contributed $1,160 at this stage. Schedule A remains empty until the
   $1,300 cash seed completes the June 1 formation total of $2,460 in 2.4. Continue "Now
   drill into §17 — the wall →" navigates to 23-4.

### If the student is lost

- "What am I looking at?" — Orient: the same workbook from Module 1, with a new Balance
  Sheet tab on the end. Nudge: flip the tabs Anna named — Assets, Liabilities, Reasons.
  Stronger hint: the Balance Sheet tab lays those same records out as one statement; open
  it with the Continue button.
- "What happens to the May piles?" — Orient: the displayed May workbook is the member's
  personal record. Nudge: formation starts a separate Company record at zero. Stronger
  hint: no May work row enters the Company's Reasons list; the $1,160 noncash formation
  difference is all Contributed.
- "Why is Cash $0?" — Orient: this is the pre-contribution snapshot. Nudge: the cash
  hasn't been deposited into the Company's account yet. Stronger hint: that deposit is the
  next formation row in 2.4; it increases Cash and Contributed by $1,300, completing
  Contributed of $2,460.
- "Schedule A is still empty?" — Orient: yes, on purpose. Nudge: you complete the schedule
  from the Company's books after the cash is in and the card is moved. Stronger hint: that
  happens in 2.4 (24-5).

### TUTOR-ONLY answer key

TUTOR-ONLY — the page is a walk-through, not a typed answer. The displayed May workbook
is the member's personal record; contributing does not relabel it as the Company's.
The Company's books open at zero on June 1. At this stage, formation rows record Assets
$3,410 and claims assumed of $2,250, producing a $1,160 difference, all Contributed;
Generated is $0. The $1,300 cash seed is deferred to 2.4, where it completes Contributed
of $2,460. Schedule A remains blank until 24-5. Mention the May $170 only as part of the
member's personal-records history.

### Anchor

anchor: Contribute the business to the LLC

### Before and after

Before: 23-2 produced the draft agreement with §9 pointing at Schedule A. After: 23-4
sends Smith's claim again, now that §17's wall of limited liability exists.

---

## 23-4-wall.html — The Wall

### What this page is

Phase 4 of 6 in 2.3. This page dramatizes §17 (Liability of the Sole Member): limited
liability is a legal fact that changes who can be pursued, not what the records show.
The student reveals what each side holds, then re-sends Smith's claim (from 2.1) and
watches it reach the Company and stop at the wall — the student's personal assets stay
safe. It comes after the contribution (23-3) and before the keystone question (23-5).

### The page, step by step

1. A narrative block recalls Smith's claim from 2.1 (the one that came after savings,
   car, earnings) and says to send it again now that the wall exists. A callout quotes
   §17.
2. A section card shows two columns — "The Company" (the LLC's name) and "You" —
   separated by a thin vertical bar (the wall). Initially each side has a reveal button:
   "What the Company holds ↓" and "Your personal assets ↓".
3. Clicking "What the Company holds ↓" lists: Repair equipment, Computer equipment,
   Supplies, Fixtures. Clicking "Your personal assets ↓" lists: Your car, Your earnings,
   Your savings.
4. The red button "Send Smith's claim again →" runs the claim: a thud sound; the Company
   side turns red (the claim reaches it), the wall turns the primary color, and the "You"
   side turns green with a check "beh the wall — safe". A caption appears: "the claim
   reaches the Company — and stops at the wall".
5. After the claim runs, an insight "The wall" explains: this is the wall Maria wanted;
   limited liability is a legal fact — it changes who can be pursued, not what the
   records show; the balance sheet didn't move, the exposure did.
6. Continue "One last thing →" navigates to 23-5.

### If the student is lost

- "What do I do first?" — Orient: there are two reveal buttons and one send-claim button.
  Nudge: reveal what each side holds before sending the claim. Stronger hint: click "What
  the Company holds ↓" and "Your personal assets ↓", then "Send Smith's claim again →".
- "Did the balance sheet change?" — Orient: look at what the insight says after the claim.
  Nudge: the wall changes exposure, not the records. Stronger hint: limited liability is a
  legal fact — it changes who can be pursued, not what the records show; the balance sheet
  didn't move, the exposure did.
- "Why is the Company side red and my side green?" — Orient: red means the claim reached
  the Company; green means your personal side is safe. Nudge: the claim reaches the
  Company and stops at the wall. Stronger hint: the Company's debts are the Company's, not
  yours — that is §17.

### TUTOR-ONLY answer key

TUTOR-ONLY — the page is a click-through, no typed answer. Reveal both sides, then click
"Send Smith's claim again →". Company holds: Repair equipment, Computer equipment,
Supplies, Fixtures. You hold: Your car, Your earnings, Your savings. After the claim: the
claim reaches the Company and stops at the wall; the Company side turns red, the "You"
side turns green ("✓ behind the wall — safe"). The page's reveal/insight: "Limited
liability is a legal fact — it changes who can be pursued, not what the records show. The
balance sheet didn't move; the exposure did." The tutor confirms this only after the
student has run the claim. No three-strike typed reveal on this page.

### Anchor

anchor: the claim reaches the Company — and stops at the wall

### Before and after

Before: 23-3 contributed the business into the LLC at book amounts. After: 23-5 asks the
keystone question — when did this entity actually become real?

---

## 23-5-keystone.html — When Did It Become Real?

### What this page is

Phase 5 of 6 in 2.3. This is the keystone multiple-choice moment of the activity. After
the legal body, the rules, the contribution, and the wall, the student is asked when the
entity actually became real, and must choose among three options. The correct answer —
back in 1.1, when the line was first drawn in the books — establishes that the accounting
entity predates the legal entity. It comes after the wall (23-4) and before the completion
screen (23-6).

### The page, step by step

1. A narrative block sets up the question: a legal body, rules, the business inside it, a
  wall — it feels like the repair work became real today. Then the question: "When did
  this entity actually become real?"
2. Three option buttons appear:
   - "When you filed the Certificate (2.2)"
   - "When the Operating Agreement gets signed"
   - "Back in 1.1 — when you first drew the line in your books"
3. Clicking a wrong option turns it red and shows feedback:
   - Certificate (2.2): "Not quite — that's the day it became a legal entity. But was
     that when it became real? Try again."
   - Operating Agreement signed: "No — the agreement is the Company's internal rulebook.
     It governs the entity; it doesn't create it. Legal existence came with the
     Certificate (2.2) — and the signing hasn't even happened yet. Try again."
4. Clicking the correct option ("Back in 1.1 …") turns it green, plays a success sound,
   and reveals a callout: the Certificate gave the operation a legal body and the
   agreement will govern it, but neither created the entity — the books, this boundary,
   have been kept since 1.1; the accounting line came first, by months (and in a real firm,
   by years).
5. An insight "The keystone" states the takeaway: Accounting-entity ≠ legal-entity. The
   accounting entity is a boundary drawn for information — it can exist with or without
   any legal body, and here it came first; the LLC is a legal wrapper placed around it.
   Getting an LLC didn't make the entity "finally real"; it was a real accounting entity
   all along.
6. Continue "Finish up →" navigates to 23-6 (appears only after the correct pick).

### If the student is lost

- "I picked the Certificate and it said try again." — Orient: the Certificate is when it
  became a legal entity; the question is about when it became real. Nudge: was there a
  boundary in your books before any legal body existed? Stronger hint: you drew the line
  in your books back in 1.1 — that came first.
- "I picked the Operating Agreement." — Orient: the feedback says the agreement governs
  the entity; it doesn't create it. Nudge: and the signing hasn't even happened yet.
  Stronger hint: legal existence came with the Certificate, but the books predate even
  that — try the 1.1 option.
- "Which one is right?" — Orient: think about which came first chronologically. Nudge: the
  books or the legal paperwork? Stronger hint: the accounting boundary in 1.1 came before
  the Certificate and before the agreement. (Confirm "Back in 1.1 — when you first drew
  the line in your books" only after a genuine attempt.)

### TUTOR-ONLY answer key

TUTOR-ONLY — the correct choice is "Back in 1.1 — when you first drew the line in your
books" (option id '1.1'). Wrong options and their feedback:
- Certificate (2.2): "Not quite — that's the day it became a legal entity. But was that
  when it became real? Try again."
- Operating Agreement signed: "No — the agreement is the Company's internal rulebook. It
  governs the entity; it doesn't create it. Legal existence came with the Certificate
  (2.2) — and the signing hasn't even happened yet. Try again."
The page lets the student retry until correct (no lockout); the third option is the
reveal. After the correct pick, the insight states the keystone: Accounting-entity ≠
legal-entity — the accounting entity (since 1.1) is not the legal entity (days old); a
legal body was wrapped around a boundary that already existed. Confirm only after the
student has attempted at least one wrong option or reasoned through it.

### Anchor

anchor: When did this entity actually become real?

### Before and after

Before: 23-4 showed limited liability as a legal wall. After: 23-6 recaps the whole
activity and previews 2.4.

---

## 23-6-complete.html — Complete

### What this page is

Phase 6 of 6 in 2.3 — the completion screen. It recaps what the student worked out across
Activity 2.3 (drafted the agreement; left it a draft on purpose; contributed at book
carryover; the limited-liability wall; and the keystone that the accounting entity is not
the legal entity) and previews 2.4 (the entity's own EIN, bank account, and card; ending
co-mingling; completing Schedule A and signing). It is a reading/summary page with no
graded task.

### The page, step by step

1. A trophy badge and title "Accounting-entity ≠ legal-entity".
2. A "What You Worked Out" card with five checked bullets recapping 2.3 (you wrote your
   own Operating Agreement — City Cycle's was only an example; it stays a draft until
   Schedule A is complete; the member's $1,160 May difference remains personal-records
   history, while the Company's books begin at zero and its completed June 1 formation
   rows produce Member's Capital of $2,460, all Contributed; limited liability put a wall
   between Company debts and personal life;
   the keystone that accounting entity ≠ legal entity).
3. An insight "The deeper point": the same machine runs all the way up — a giant company
   draws one accounting boundary around dozens of separate legal companies; the accounting
   line and the legal line are different lines drawn for different reasons and rarely
   coincide.
4. A "Coming Next — 2.4" card: the Company needs its own identity (EIN, bank account,
   card); the separation drawn by hand since 1.1 goes institutional; with cash in and card
   moved, the student will complete Schedule A from the Company's books and sign.
5. A "Reset this phase" button (restarts the page). No Continue button — the next page
   (24-1) is reached from the course's normal navigation.

### If the student is lost

- "Is there anything to do here?" — Orient: this is a summary page; read the recap and the
  Coming Next card. Nudge: there is no task — just review. Stronger hint: when you're
  ready, move on to 2.4 (24-1) via the course navigation.
- "Where do I go next?" — Orient: the Coming Next card says what's next. Nudge: 2.4 is
  about the entity's own number and accounts. Stronger hint: continue to 24-1-welcome.

### TUTOR-ONLY answer key

TUTOR-ONLY — no graded answer; this is a recap screen. The member's $1,160 May difference
remains personal-records history. The Company's books begin at zero; its completed June 1
formation rows produce Member's Capital of $2,460, all Contributed. The keystone statement
is "Accounting-entity ≠ legal-entity." Next
activity is 2.4 (the entity's own EIN, account, and card; complete Schedule A; sign). No
three-strike reveal here.

### Anchor

anchor: The same machine runs all the way up.

### Before and after

Before: 23-5 established the keystone (accounting entity ≠ legal entity). After: 24-1
opens Activity 2.4 — the entity needs its own identity (EIN) and its own accounts.

---

## 24-1-welcome.html — An Identity of Its Own

### What this page is

Phase 1 of 6 in Activity 2.4 (The Entity's Own Number). The LLC exists and its rulebook is
drafted, but to the outside world it still has no identity of its own. The bank won't open
an account in the student's name — it needs the LLC's EIN. The page frames the whole
activity: getting the entity an outside-world identity, ending the by-hand co-mingling
sorting done since 1.1, and the one move here that actually changes the balance sheet. It
opens 2.4 and leads to 24-2 (filing Form SS-4).

### The page, step by step

1. A narrative block: the LLC exists, the rulebook is drafted, the business is moved in —
   but to the outside world it still has no identity of its own. You go to open a business
   bank account and the bank stops you.
2. A "THE BANK" dialog box: "We can't open this in your name. We need the LLC's number —
   its EIN — not your Social Security number."
3. A warning callout: until now the repair work has run through personal accounts —
   personal checking (Elm City Bank, $4,074) and personal credit card (Harborline Visa) —
   both co-mingled (business deposits next to paycheck, parts charges next to groceries),
   sorted apart by hand every month since 1.1. The entity needs its own.
4. A "What You'll Work Out" card lists three bullets: how the entity gets an identity the
   outside world will deal with; what finally ends the by-hand sorting since day one; the
   one move here that actually changes the balance sheet.
5. The Continue button "Begin →" navigates to 24-2-ein.html (immediately available; no
   gating task).

### If the student is lost

- "What's an EIN?" — Orient: the glossary (book icon) defines it. Nudge: the bank says it
  needs the LLC's number, not your Social Security number. Stronger hint: an EIN is the
  entity's own tax ID with the IRS — like a Social Security number for a business; the
  bank needs it to open an account in the LLC's name.
- "What's co-mingling / why does it matter?" — Orient: the warning box describes it.
  Nudge: business and personal money have been in the same accounts, sorted by hand.
  Stronger hint: opening the LLC's own account ends the by-hand sorting — that's a main
  point of this activity.
- "What am I supposed to do?" — Orient: read, then Begin. Nudge: press "Begin →". Stronger
  hint: the next page files the IRS form that gets the EIN.

### TUTOR-ONLY answer key

TUTOR-ONLY — no graded answer; welcome page. The single forward action is "Begin →" →
24-2. Key facts the page plants: the bank needs the LLC's EIN (not the student's SSN);
personal checking at Elm City Bank holds $4,074 (co-mingled); personal card is Harborline
Visa (co-mingled); the student has sorted business from personal by hand since 1.1. Three
things to watch for in the activity: the entity getting its own identity, the end of
co-mingling, and the one move that changes the balance sheet (revealed later to be the
$1,300 cash contribution). No three-strike reveal here.

### Anchor

anchor: How the entity gets an identity the outside world will deal with.

### Before and after

Before: 23-6 finished 2.3 (the rules). After: 24-2 files Form SS-4 to get the EIN.

---

## 24-2-ein.html — Form SS-4

### What this page is

Phase 2 of 6 in 2.4. The student reviews a facsimile of IRS Form SS-4 (Application for
Employer Identification Number) pre-filled with the LLC's facts, then files it. The IRS
issues EIN 88-3729104. An aside notes the "disregarded entity" line (for income tax the
IRS looks through the LLC to the owner, even though it holds its own number for everything
else). A source-documents viewer becomes available (SS-4 and the statements seen later).
It sits between the welcome (24-1) and opening the account (24-3).

### The page, step by step

1. A line introduces Form SS-4: review it, then file.
2. A Form SS-4 facsimile card shows pre-filled lines: line 1 Legal name of entity ([name]'s
   Bike Repairs, LLC); 7a Responsible party ([name]); 8a Is this for an LLC? Yes · 1
   member; 9a Type of entity: Other → Disregarded entity (single-member LLC); 10 Reason:
   Started a new business → bicycle repair services; 12 Closing month of accounting year:
   December.
3. The Continue button "File Form SS-4 with the IRS →" files the form (stamp sound).
4. After filing: a green stamp "EIN 88-3729104" appears on the form. An insight "EIN
   issued": the IRS issues the LLC its own number (EIN 88-3729104), filed June 1, 2026;
   the entity now has an identity to the outside world, separate from the student's
   personal one.
5. A callout aside (not the lesson): line 9a reads "disregarded entity" — for income tax
   the IRS looks back through the LLC to the student, even though it now holds its own
   number for everything else. Different lines, drawn for different purposes.
6. An outlined "Source documents" button opens a viewer listing: Form SS-4 (EIN
   application), Bank statement #1 (LLC checking), Card statement #1 (LLC card), Personal
   checking (after the split), Personal card (after the split). The bank/card/personal
   statements are previews of what's coming; selecting any shows its facsimile.
7. The Continue button "Now open the account →" navigates to 24-3.

### If the student is lost

- "Do I have to fill out the form?" — Orient: the form is already filled with the LLC's
  facts; you just review and file. Nudge: read the lines, then press the file button.
  Stronger hint: click "File Form SS-4 with the IRS →" — the EIN is issued automatically.
- "What does 'disregarded entity' mean?" — Orient: it's an aside, not the main lesson.
  Nudge: read the callout after filing. Stronger hint: for income tax the IRS looks
  through the LLC to the owner, even though the LLC holds its own EIN for everything else
  — different lines drawn for different purposes.
- "What are the source documents for?" — Orient: they preview the statements you'll see
  next. Nudge: you can open the viewer to see the SS-4 and the upcoming bank/card
  statements. Stronger hint: they're optional reference; the account opening happens on
  the next page.

### TUTOR-ONLY answer key

TUTOR-ONLY — the only required action is "File Form SS-4 with the IRS →". The issued EIN
is 88-3729104 (filed June 1, 2026). Pre-filled SS-4 facts: legal name = [name]'s Bike
Repairs, LLC; responsible party = [name]; LLC with 1 member; type = disregarded entity
(single-member LLC); reason = started a new business, bicycle repair services; accounting
year closes December. The "disregarded entity" callout is an aside, not the lesson — the
lesson is that the entity now has its own outside-world identity. Source-documents viewer
lists five items (SS-4, LLC bank stmt, LLC card stmt, personal checking, personal card);
the statements are detailed on 24-4. No three-strike typed reveal on this page.

### Anchor

anchor: File Form SS-4 with the IRS

### Before and after

Before: 24-1 framed the need for the entity's own identity. After: 24-3 opens the LLC's
bank account and moves cash and the card.

---

## 24-3-account.html — Opening the Account

### What this page is

Phase 3 of 6 in 2.4. With the EIN, the student gives the business its own accounts and
pulls it out of personal ones, in three moves: open the LLC's bank account; move $1,300
cash in; move the business card to the LLC. The page's lesson: two of those moves change
nothing on the books (the EIN and the card sliding to the LLC's name — $2,030 stays
$2,030); the $1,300 cash seed increases Cash from $0 to $1,300 and increases Contributed
by $1,300 within the June 1 formation total of $2,460. It sits between filing the SS-4
(24-2) and the statements (24-4).

### The page, step by step

1. A narrative block: with the EIN in hand, give the business its own accounts and pull it
   out of personal ones — do it in three moves (then bring the paperwork up to date).
2. A two-column layout: "Your personal accounts" (Checking — Elm City Bank, $4,074,
   co-mingled; Personal card, co-mingled) and "The LLC's accounts" (none yet).
3. Move 1 — Continue "Open the LLC's bank account →": the LLC column gains "Bank account"
   at $0; personal checking still $4,074.
4. Move 2 — Continue "Move $1,300 in cash into the account →": LLC bank account shows
   $1,300; personal checking drops to $2,774 (personal only now). A caption appears:
   "↑ your $1,300 cash contribution — Cash 0 → 1,300, members' capital +1,300".
5. Move 3 — Continue "Move the business card to the LLC →": the LLC column gains
   "Business card" at $2,030; the personal card is now personal only.
6. After all three moves: an insight "Co-mingling ended" — the LLC has its own account and
   card; personal checking is personal again; the by-hand sorting since 1.1 is now
   institutional (banks, the IRS, customers all deal with the LLC). A callout: two moves
   changed nothing on the books (the EIN and the card to the LLC's name — $2,030 stays
   $2,030); the $1,300 cash seed increases Cash from $0 to $1,300 and increases
   Contributed by $1,300 within the June 1 formation total of $2,460. Next: check the
   paper trail, then complete Schedule A
   from these books and sign.
7. An outlined "Source documents" button (same viewer as 24-2). Continue "See the
   statements →" navigates to 24-4.

### If the student is lost

- "What order do I do these in?" — Orient: there are three Continue buttons, one per move.
  Nudge: take them top to bottom — open the account, move cash in, move the card.
  Stronger hint: the button labels tell you each move; press them in sequence: "Open the
  LLC's bank account →", "Move $1,300 in cash into the account →", "Move the business card
  to the LLC →".
- "Did the $2,030 card balance change?" — Orient: look at the card amount before and after.
  Nudge: the card slid to the LLC's name; the number didn't move. Stronger hint: moving
  the card changes whose name it's in, not the balance — $2,030 stays $2,030; only the
  $1,300 cash changed the books.
- "What did the $1,300 cash seed do?" — Orient: it is one June 1 formation row. Nudge:
  it raised the Company's Cash and Contributed by $1,300. Stronger hint: the $1,300 cash
  seed increases Cash from $0 to $1,300 and increases Contributed by $1,300 within the
  June 1 formation total of $2,460.

### TUTOR-ONLY answer key

TUTOR-ONLY — three sequential Continue presses (no typed input). Move 1: open LLC bank
account (LLC bank $0; personal checking still $4,074). Move 2: move $1,300 cash in (LLC
bank $1,300; personal checking $2,774); the $1,300 cash seed increases Cash from $0 to
$1,300 and increases Contributed by $1,300 within the June 1 formation total of $2,460.
Move 3: move business card to LLC (LLC card $2,030; the
$2,030 balance is unchanged — it was assumed at formation). Final insight: co-mingling
ended; two moves (EIN, card) changed nothing on the books; the $1,300 is the one real
change. Personal checking ends at $2,774; personal card ends at $230 (revealed on the
statements page). The tutor confirms the formation total of Contributed $2,460 only after the
student has made the three moves. No three-strike typed reveal.

### Anchor

anchor: Move $1,300 in cash into the account

### Before and after

Before: 24-2 issued the EIN. After: 24-4 shows the four month-end statements that document
the split.

---

## 24-4-statements.html — The Statements

### What this page is

Phase 4 of 6 in 2.4. This page shows the paper trail: four statements that close out June
— the LLC's own bank statement and card statement, and the personal checking and personal
card statements after the split. An insight confirms it all ties out (nothing was created
or lost; each co-mingled account split into a business half and a personal half; the only
thing new to the LLC is the $1,300 capital contribution). It sits between opening the
account (24-3) and completing Schedule A (24-5).

### The page, step by step

1. A narrative block: the split isn't just a story — here's the paper; four statements
   close out the month.
2. Under "The LLC's own accounts": Bank Statement #1 (Elm City Bank; [LLC] business
   checking •••• 2050; EIN 88-3729104; period June 1–30 2026; beginning $0.00, ending
   $1,300.00; rows: account opened $0.00; opening deposit — member capital contribution
   $1,300.00; ending balance $1,300.00; note: the $1,300 opening deposit is the capital
   contribution, Cash 0→1,300, members' capital +1,300). Card Statement #1 (Harborline
   Visa; business card •••• 4180; previous $0.00, new balance $2,030.00; row: balance
   transfer — business charges from personal card •••• 3902, $2,030.00; note: the $2,030
   transferred over, same balance assumed at formation, now in the Company's name; $230
   personal portion stayed on the personal card).
3. Under "Your personal accounts — after the split": Personal checking (Elm City Bank;
   •••• 8814; beginning $4,074.00, ending $2,774.00; row: transfer to [LLC] — business
   account, $1,300.00 out; note: the $1,300 moved out seeded the LLC's account; personal
   only from here). Personal card (Harborline Visa; •••• 3902; previous $2,260.00, new
   balance $230.00; row: balance transfer — business charges to [LLC] card, (2,030.00);
   note: $2,030 business charges moved to the LLC card; $230 left was always personal;
   co-mingling, ended).
4. An insight "It all ties out": checking LLC $1,300 + personal $2,774 = $4,074 (old
   balance); card LLC $2,030 + personal $230 = $2,260 (old balance); the only thing new
   to the LLC is the $1,300 capital contribution (Cash 0 → 1,300, members' capital
   +1,300).
5. An outlined "Source documents" button (same viewer). Continue "Now complete Schedule
   A →" navigates to 24-5.

### If the student is lost

- "How do these tie out?" — Orient: read the "It all ties out" insight. Nudge: add the LLC
  half and the personal half of each account. Stronger hint: checking $1,300 + $2,774 =
  $4,074 (your old balance); card $2,030 + $230 = $2,260 (your old balance) — nothing was
  created or lost.
- "Why is the personal card balance $230?" — Orient: the personal card note explains it.
  Nudge: $2,030 of business charges moved to the LLC card; what was left was always
  personal. Stronger hint: $230 is the personal portion that stayed; the $2,030 business
  portion moved to the LLC card.
- "What changed on the LLC's books?" — Orient: only the $1,300 deposit is new to the LLC.
  Nudge: the $2,030 card balance was already assumed at formation. Stronger hint: Cash
  0 → 1,300 and members' capital +1,300 is the only book change; the card just changed
  whose name it's in.

### TUTOR-ONLY answer key

TUTOR-ONLY — reading page, no typed answer. Statement figures: LLC checking ends $1,300.00
(opening deposit = capital contribution); LLC card balance $2,030.00 (transferred from
personal card •••• 3902); personal checking ends $2,774.00 ($1,300 moved out); personal
card ends $230.00 ($2,030 moved out; $230 personal portion stayed). Tie-out: checking
$1,300 + $2,774 = $4,074; card $2,030 + $230 = $2,260. The only new item on the LLC's
books is the $1,300 cash seed: it increases Cash from $0 to $1,300 and increases
Contributed by $1,300 within the June 1 formation total of $2,460. Co-mingling is ended.
The tutor confirms the tie-out only after the student
has attempted to add the halves. No three-strike typed reveal.

### Anchor

anchor: Nothing was created or lost

### Before and after

Before: 24-3 opened the accounts and made the three moves. After: 24-5 completes Schedule
A from the Company's books, line by line, and signs.

---

## 24-5-schedule-a.html — Complete Schedule A

### What this page is

Phase 5 of 6 in 2.4 — the capstone task of Module 2. The contributing is done (cash in
the Company's account, card in the Company's name), so the student completes the draft
Schedule A left blank in 2.3, line by line, by clicking each line on the Balance Sheet
tab to enter it on the schedule. The learner places the asset lines and claims-assumed
lines, then enters exactly one difference line: Contributed $2,460. Do not include a
Generated section on Schedule A. The opening balance sheet shows Member's Capital $2,460
— Contributed $2,460; Generated $0. §9's net book value becomes $2,460, and the student
signs both signature lines (for the Company and as an individual) to execute the
agreement. It sits between the statements (24-4) and the
Module 2 completion screen (24-6).

### The page, step by step

1. A narrative block: the formation rows are complete; place the asset lines and
   claims-assumed lines on Schedule A, then enter exactly one difference line:
   Contributed $2,460.
2. The workbook mounts (Bike-Repair.xlsx) with tabs Assets, Liabilities, Reasons, Balance
   Sheet; the Balance Sheet tab is shown. It is dated June 1, 2026, and each line is
   clickable. Lines: Assets — Cash 1,300; Right of Use 650; Supplies 200; Equipment 1,200;
   Computer equipment 610; Fixtures 750 (Total assets 4,710); Liabilities — Credit card (in
   the Company's name) 2,030; Customer deposit — Smith 220 (Total liabilities 2,250);
   Member's Capital (Assets − Liabilities) 2,460 — Contributed 2,460; Generated 0.
3. Clicking a balance-sheet line marks it "entered" and adds it to the Schedule A card
   below, in the correct section (assets or claims assumed). The learner then enters one
   difference line, Contributed $2,460. The schedule shows an "IN PROGRESS" badge until
   complete.
4. When the asset lines, claims-assumed lines, and difference line are entered: the
   schedule flips to "COMPLETE — June 1, 2026"; totals fill in (Total assets 4,710;
   Total liabilities assumed (2,250); Member's Capital
   (A − L) 2,460); §9's text updates to "Net book value contributed: $2,460"; a signature
   page appears with two "Sign here" buttons — "For the Company" and "As an individual".
5. A message prompts: Schedule A is complete from the June 1 formation rows, so now —
   and only now — execute the agreement; sign both lines.
6. Clicking each "Sign here" button signs that line (pen sound); signing both plays a
   success sound. An insight "Two signatures, one hand": the student's name signed twice
   — once for the Company (as its manager), once as themselves (the Sole Member); the two
   roles from 2.1 are now legal and literal. A second insight "The schedule equals the
   sheet": the asset lines, claims assumed, and one Contributed difference line agree
   with the opening balance sheet — drafted in 2.3, completed and
   executed today.
7. Continue "Finish Module 2 →" navigates to 24-6 (appears only after both signatures).

### If the student is lost

- "What do I click?" — Orient: the Balance Sheet tab has clickable asset and claim lines.
  Nudge: place those lines on Schedule A below, then enter the difference. Stronger hint:
  enter exactly one difference line: Contributed $2,460.
- "Where do I find Contributed and Generated?" — Orient: Schedule A uses one difference
  line. Nudge: do not add a Generated section. Stronger hint: Do not include a Generated
  section on Schedule A. Enter the difference on one line, Contributed $2,460. Mention
  the May $170 only as part of the member's personal-records history.
- "Nothing is happening after I entered all the lines." — Orient: check the schedule
  badge. Nudge: when it says COMPLETE, a signature page appears. Stronger hint: scroll
  down — two "Sign here" buttons appear; sign both to execute the agreement.
- "Why are there two signature lines?" — Orient: one is for the Company, one is for you as
  the Sole Member. Nudge: read the labels under each line. Stronger hint: you sign your
  own name twice — once as the Company's manager, once as yourself — the two roles from
  2.1 are now legal and literal.

### TUTOR-ONLY answer key

TUTOR-ONLY — place the asset lines and claims-assumed lines on Schedule A, enter one
difference line, and then sign both lines. Expected schedule entries:
Assets — Cash 1,300; Right of Use 650; Supplies 200; Equipment 1,200; Computer equipment
610; Fixtures 750 (Total assets 4,710). Liabilities assumed — Credit-card balance
(assumed) (2,030); Customer deposit — Smith (assumed) (220) (Total liabilities assumed
(2,250)). Enter the difference on one line, Contributed $2,460. Do not include a Generated
section on Schedule A. Mention the May $170 only as part of the member's personal-records
history. The opening balance sheet shows Member's Capital $2,460 — Contributed $2,460;
Generated $0. Once complete, §9 reads "Net book value contributed: $2,460." Both signature
lines: "For the Company" ([name], Managing Member) and "As an individual" ([name], as an
individual), both dated June 1, 2026 — sign both. The page has no wrong-answer strikes
(clicking is always accepted); the "reveal" is the schedule flipping to COMPLETE and the
two insights after signing. The tutor confirms the $2,460 total and the two-signature
point only after the student has entered the lines and attempted to sign.

### Anchor

anchor: Time to complete the draft you left blank in 2.3 — from the books, line by line.

### Before and after

Before: 24-4 documented the split with four statements. After: 24-6 wraps up Module 2 and
previews Module 3.

---

## 24-6-complete.html — Module 2 Complete

### What this page is

Phase 6 of 6 in 2.4 — the Module 2 completion screen. It recaps the whole module (2.1 the
gap, 2.2 the Certificate, 2.3 the rules and the keystone, 2.4 the EIN/accounts/Schedule
A/signing) and states the one idea to keep: the accounting boundary and the legal boundary
are different lines drawn for different reasons; the accounting entity predates its single
legal one. It previews Module 3 (the story between the snapshots — a real season, two
balance sheets, and the question of how the shop did). It is a summary page with no graded
task.

### The page, step by step

1. A trophy badge and title "Module 2 complete — the entity is formal".
2. A "What You Built Across Module 2" card with five checked bullets: felt the gap (books
   recognized the role but the bank/card company/Smith/the law saw one undivided you,
   2.1); formalized the role with a CT Certificate of Organization (2.2); drafted the
   Operating Agreement, kept the May workbook as the member's personal record, opened
   the Company's books at zero, named the keystone (accounting-entity ≠ legal-entity),
   and left Schedule A blank until the formation rows were complete (2.3); gave the entity
   its own EIN, account, and card — ending co-mingling; the
   entity is a counterparty in its own right (2.4); completed Schedule A from the books and
   signed — once for the Company, once as yourself. The Company's books opened at zero
   on June 1. At formation, the member put in recorded things and the $1,300 cash seed,
   and the Company assumed the recorded claims. The difference was Member's Capital
   $2,460, all Contributed. On Schedule A, you entered one difference line, Contributed
   $2,460.
3. An insight "The one idea to keep": the accounting boundary and the legal boundary are
   different lines drawn for different reasons; you recognized the role first (Module 1, in
   the books) then formalized it (this module, at the state); the same machine runs all the
   way up — a giant company draws one accounting boundary around dozens of separate legal
   companies; yours is one accounting entity that simply predates its single legal one.
4. A "Coming Next — Module 3: The Story Between the Snapshots" card: summer comes, the shop
   runs a real season (repairs in, parts and rent used up, a draw taken); one balance sheet
   becomes two, and the question that fills the gap — how did the shop do? — turns out to
   need statements of its own.
5. A "Reset this phase" button (restarts the page). No Continue button — Module 3 is
   reached via the course's normal navigation.

### If the student is lost

- "Is there anything to do here?" — Orient: this is a recap; read the bullets and the one
  idea. Nudge: no task — just review. Stronger hint: when ready, move on to Module 3 via
  the course navigation.
- "What did the $1,300 cash seed do?" — Orient: the recap bullet states it. Nudge: it was
  one formation row. Stronger hint: the $1,300 cash seed increases Cash from $0 to $1,300
  and increases Contributed by $1,300 within the June 1 formation total of $2,460.
- "What's next?" — Orient: the Coming Next card describes Module 3. Nudge: a real season
  and two balance sheets. Stronger hint: Module 3 asks how the shop did between two
  snapshots — and that turns out to need statements of its own.

### TUTOR-ONLY answer key

TUTOR-ONLY — no graded answer; recap screen. The Company's books opened at zero on June
1. At formation, the member put in recorded things and the $1,300 cash seed, and the
Company assumed the recorded claims. The difference was Member's Capital $2,460, all
Contributed. On Schedule A, you entered one difference line, Contributed $2,460. Do not
include a Generated section on Schedule A. Mention the May $170 only as part of the
member's personal-records history. The keystone is "Accounting-entity ≠
legal-entity." EIN is 88-3729104. Next is Module 3 (the story between the snapshots — do
not preview its content beyond the Coming Next card). No three-strike reveal here.

### Anchor

anchor: The only move that touched the books all module was your $1,300 contribution

### Before and after

Before: 24-5 completed Schedule A and executed the Operating Agreement. After: Module 3 —
a real season runs, producing two balance sheets and the question of how the shop did.
