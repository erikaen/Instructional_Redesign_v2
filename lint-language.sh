#!/bin/bash
# lint-language.sh — banned-language check for student-facing tutorial content.
# Run from the repo root:  bash lint-language.sh
# Exits non-zero if banned phrasing is found. See CLAUDE.md "Language rules" for why.
#
# Scope: student-facing surfaces only — the tutorial HTML plus the shared JS that
# renders into them. Code comments (lines starting with // or *) are exempt:
# "residual" is instructor-side vocabulary and may appear there.

FILES=$(ls *.html shared.js bike-repair-workbook.js 2>/dev/null | grep -v '^dev-index')
fail=0

check () {  # $1 = grep -E pattern, $2 = explanation
  local hits
  hits=$(grep -rniE "$1" $FILES 2>/dev/null | grep -vE ':[0-9]+:[[:space:]]*(//|\*)')
  if [ -n "$hits" ]; then
    echo "BANNED — $2"
    echo "$hits"
    echo
    fail=1
  fi
}

# Ruling 2026-07-18/19: Module 5 is the vocabulary turn — "Equities",
# "shareholders' equity" are formally INTRODUCED on the Module-5 welcome page
# (51-1) and used henceforth (52-*, the CVS 10-K walk 53-*). The equity ban is
# therefore carved out for all Module 5 pages (5[0-9]-*), same principle as the
# City Cycle plural carve-out (a corporation's statements keep their vocabulary).
# The ban still applies to every M1–M4 student-facing file, and every other
# check below still scans the 5x-x pages. view.html (the navigation shell) is
# also exempt from the equity check only: its page registry must mirror Module 5
# page titles verbatim (e.g. "The Equity Question"), which is a reference to a
# page, not tutorial prose.
# Ruling 2026-07-19 (M6 build, Rick's lock #7): Module 6 extends the same
# vocabulary turn to the nonprofit side — the for-profit→nonprofit bridge
# (equities/shareholders' equity as CVS's vocabulary, net assets as Yale's) is
# introduced on 61-1 and used across 62-*/63-* (the Yale FY2025 walk). The
# equity ban is therefore carved out for Module 6 pages (6[0-9]-*) on the same
# another-entity's-vocabulary principle. All other checks still scan 6x-x.
equity_files=$(echo "$FILES" | grep -vE '^[56][0-9]-|^view\.html$')
equity_hits=$(grep -rniE 'equit' $equity_files 2>/dev/null | grep -vE ':[0-9]+:[[:space:]]*(//|\*)')
if [ -n "$equity_hits" ]; then
  echo 'BANNED — "equity/equities" is banned in student-facing pages outside Module 5 (5x-x). The A-L difference stays unnamed in Module 1; from Module 2 on its only name is "Member'"'"'s Capital".'
  echo "$equity_hits"
  echo
  fail=1
fi
# Ruling 2026-07-19: "residual" stays banned as a student-facing name everywhere
# EXCEPT the Module-5 welcome page (51-1), where the expandable Equities note
# quotes the standard-setters' definition ("the residual interest in the assets
# ... after deducting its liabilities") with attribution. Carve out 51-* only.
residual_files=$(echo "$FILES" | grep -vE '^51-')
residual_hits=$(grep -rniE 'residual' $residual_files 2>/dev/null | grep -vE ':[0-9]+:[[:space:]]*(//|\*)')
if [ -n "$residual_hits" ]; then
  echo 'BANNED — "residual" is instructor-side vocabulary only; in student-facing text say "the difference" (code comments exempt; the 51-1 attributed quote is carved out).'
  echo "$residual_hits"
  echo
  fail=1
fi
check 'what I (have|owe)'        'First-person workbook labels are banned: the records belong to the repair work, not the student.'
check "what(.{0,7})s left (after|when|once)" 'Leftover/possession framing for A-L is banned: it is a definitional difference, not a thing left over.'
check 'accounting equation'      'Say "accounting identity", never "accounting equation".'
# Ruling 2026-07-19: "net assets" is part of the Module 5 vocabulary turn
# (introduced on 51-1: changes in net assets = Revenues − Expenses etc.), so it
# is carved out for all Module 5 pages (5[0-9]-*); still banned for M1–M4.
# Ruling 2026-07-19 (M6 build, Rick's lock #7): "Net Assets" is Yale's own
# statement vocabulary and the spine of Module 6 — carved out for 6[0-9]-* too.
# (61-* is NOT added to the residual carve-out above: the M6 welcome page does
# not carry the attributed standard-setters' quotation; its prose says "the
# definitional difference" instead.)
netassets_files=$(echo "$FILES" | grep -vE '^[56][0-9]-')
netassets_hits=$(grep -rniE 'net assets' $netassets_files 2>/dev/null | grep -vE ':[0-9]+:[[:space:]]*(//|\*)')
if [ -n "$netassets_hits" ]; then
  echo 'BANNED — "Net Assets" was removed in the equity purge; do not reintroduce it in M1–M4 student-facing pages (Module 5 pages are carved out).'
  echo "$netassets_hits"
  echo
  fail=1
fi
check 'what the repair work ha(s|d)|repair work ha(s|d) (a|an|its|the) |repair work (owns|owes|owed|holds|agreed|promised|decided)' '"the repair work" is an activity, not an actor — it cannot have, own, owe, agree, or promise. Say "tied up in / still owed because of the repair work", or make the records the subject.'
check 'have minus owe|has minus owes|have and owe|has and owes' 'The have/owe idiom for the A-L difference is banned; say "Assets minus Liabilities" or "the difference".'
check '(agreement|document|schedule a|certificate|paperwork|the paper) (waits?|waited|is waiting|wants?|wanted|writes?|wrote|catches up|caught up|decides?|decided|has to wait|needs? to wait)' 'Documents are not actors — an agreement/schedule/certificate cannot wait, want, write, or decide. Give the action to a person: "you complete the schedule after the facts are in", "you sign last".'
check '(season|month|summer|period|year) (plainly )?(used|uses|consumed?|consumes|wore|wears|needs?|needed|took|takes|delivered?|delivers|adds?|added|earns?|earned|spends?|spent|makes?|made)' 'Time periods are not actors — a season/month cannot use, consume, need, deliver, add, or make. Recast: "was used up during the season", "the season'"'"'s share", or name the person or the records as subject.'
check 'repair work (pays|paid|buys|bought|signs|signed|hires|hired|bears|sells|sold|earns|earned)|bike[- ]repair (role )?(pays|paid|buys|bought|signs|signed|owns|owes)' 'Activities (the repair work, the bike-repair role) are not actors — they cannot pay, buy, sign, own, or owe. Pre-LLC the only actor is the student; post-LLC the Company acts.'
check 'repair work (is|was|must be|would be|will be) (better|worse) off|repair work (is|was|must be) doing (fine|well|badly)' 'Activities have no welfare — the repair work cannot be better/worse off or doing fine. Recast: "a good month / a bad month for the repair work", or name what the records show.'
check 'books of (its|their) own'  'Books are ABOUT a subject, not its property; say "a set of books about it".'
check 'belongs? to the repair work' 'Ownership framing — the repair work cannot own. For sorting say "belongs with"; for lists say "tied up in", "still owed because of", or "recorded for" the repair work.'

# Ruling 2026-07-14, reconfirmed 2026-07-18: City Cycle's embedded old-job
# agreement is the only plural carve-out; plural-matching normalizers stay exempt.
plural_capital_hits=$(grep -nE "Members(&rsquo;|&#8217;|['’]) [Cc]apital" *.html 2>/dev/null | grep -vE '^(23-1-welcome|23-2-agreement)\.html:' | grep -vF 'replace(/Members')
if [ -n "$plural_capital_hits" ]; then
  echo 'BANNED — plural Members-Capital is reserved for Anna'"'"'s City Cycle agreement; use "Member'"'"'s Capital" for the single-member LLC.'
  echo "$plural_capital_hits"
  echo
  fail=1
fi

# "the net / your net / net-mover" as a name for A-L, with standard-vocab exemptions.
# 2026-07-19 (M6 build): "net asset(s)" added to the exemptions — "the net
# assets" is legitimate NFP statement vocabulary (e.g. the 63-4 page title "The
# Net Assets Question"), and M1–M4 remain protected because "net assets" itself
# is banned there by the dedicated netassets check above. Flagged in the M6
# build morning report (one line beyond lock #7's exact wording).
net_hits=$(grep -rniE '(your|our|the) net\b|net[ -]movers?' $FILES 2>/dev/null | grep -vE ':[0-9]+:[[:space:]]*(//|\*)' | grep -viE 'net cash flow|net income|net 15|net-worth|net assets?')
if [ -n "$net_hits" ]; then
  echo 'BANNED — "the net / your net / net-mover" as a name for the A-L difference is banned; say "the difference" ("net cash flow", "net income", "net 15", "net-worth" are exempt).'
  echo "$net_hits"
  echo
  fail=1
fi

if [ $fail -eq 0 ]; then
  echo "lint-language: clean"
fi
exit $fail
