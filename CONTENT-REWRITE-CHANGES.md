# Portfolio content rewrite, change log

**Branch:** `2026-06-25-content-rewrite` (backup of main: `2026-06-25-main-backup`)
**Source brief:** Superhive C-C-C audit (Clarity, Credibility, Conversion)
**Status:** all 6 prioritized fixes done, verified in local preview, not yet committed.

Tick each box as you review.

---

## Clarity

- [ ] **C1, hero stat order.** Reordered so a real result leads. New order: `−20% error rate` (accent) -> `40+ reusable components` -> `4 years shipping` -> `5+ products 0 to launch`. Dropped the weakest credential ("4 countries of client work").
  - File: `index.html`, hero stats row.

## Credibility

- [ ] **CR1, second real metric.** Added a countable design-to-dev metric: `40+ reusable components in one design system`. Appears in the hero pill and as the lead chip on the Design system modal (replaced the "Brand -> UI" scope chip).
  - File: `index.html`, hero + design-system `data-project` metrics.
  - **Action needed from you:** confirm the real component count, `40+` is a working figure.

- [ ] **CR2, Laika goal vs achieved.** First chip changed from `17% -> >40% / Wet-food cross-sell goal` to `Goal: >40% / Wet-food cross-sell target (concept)`. No longer readable as an achieved lift.
  - File: `index.html`, Laika `data-project` metrics.

- [ ] **CR3, trade-offs on the top 3 cases.** Added one explicit "I chose X over Y" decision to each:
  - **Balto:** guided step-by-step merge over a single bulk-confirm screen, extra steps traded for zero ambiguity about which data survives.
  - **Design system:** tightly scoped, documented token set over a sprawling component catalog, so engineering could adopt it immediately.
  - **Adecco:** chatbot constrained to a focused set of well-handled intents over open-ended input, conversational range traded for far fewer dead ends.
  - File: `index.html`, `approach` field of each blob.
  - **Action needed from you:** confirm each sentence is defensible in an interview.

## Conversion

- [ ] **CV1, two best cases fully on-site.** Enriched the Balto and Adecco modal `approach` text into a full problem -> decision -> trade-off -> outcome narrative, so a reviewer can evaluate them without leaving the site.
  - File: `index.html`, Balto + Adecco `data-project` blobs.

- [ ] **CV1, Behance demoted.** Work-section CTA changed from primary "View full portfolio on Behance" to secondary "More work on Behance". Note reworded to "Visual process and extra projects live on Behance. The full cases are right here."
  - File: `index.html`, work section CTA.
  - Note: dedicated standalone case pages were deferred to a later round per our decision (modals deepened now).

- [ ] **CV2, availability "Available now", sitewide.** Replaced every "from Q3 2026" with "Available now":
  - `index.html` contact clock point: "Available now for new projects"
  - `resume.html`: "Available now for new projects and roles. Remote, worldwide."
  - `contact.html` card: "Available now."
  - `contact.html` FAQ: "Yes. I'm available now and open to new projects and roles..."

## Consistency

- [ ] **Whole-site sweep.** Confirmed no leftover "Q3 2026" anywhere. All availability copy now reads "Available now" / "Available for new projects". `about.html` needed no availability edit.

---

## Verification run (local preview)

- [ ] Hero stat order renders `−20%, 40+, 4, 5+`.
- [ ] All 4 project modals open with no console errors.
- [ ] All 4 inline `data-project` JSON blobs parse cleanly.
- [ ] Design-system modal shows the `40+ components` chip; Laika shows `Goal: >40%`.
- [ ] Trade-off sentence present in Balto, Design system, Adecco approaches.

## Global copy rules honored

- [ ] No em or en dashes in new prose (commas / colons / sentence breaks). The `−` in `−20%` is a minus sign in a number, not prose.
- [ ] First person, active voice; outcome first.
- [ ] Achieved result, goal, and scope kept in separate slots.

## Files touched

- `index.html` (hero stats, 4 project blobs, work CTA, availability)
- `resume.html` (availability)
- `contact.html` (availability x2)

## Open follow-ups (not blocking)

- Real component count to replace the `40+` working figure.
- Optional: dedicated standalone case-study pages for Balto and Adecco (deferred).
