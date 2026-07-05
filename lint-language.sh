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

check 'equit'                    '"equity/equities" is banned in student-facing pages. The A-L difference stays unnamed in Module 1; from Module 2 on its only name is "Members Capital".'
check 'residual'                 '"residual" is instructor-side vocabulary only; in student-facing text say "the difference" (code comments exempt).'
check 'what I (have|owe)'        'First-person workbook labels are banned: the records belong to the repair work, not the student.'
check "what(.{0,7})s left (after|when|once)" 'Leftover/possession framing for A-L is banned: it is a definitional difference, not a thing left over.'
check 'accounting equation'      'Say "accounting identity", never "accounting equation".'
check 'net assets'               '"Net Assets" was removed in the equity purge; do not reintroduce it in student-facing pages.'

if [ $fail -eq 0 ]; then
  echo "lint-language: clean"
fi
exit $fail
