# Camilo Echeverry Portfolio — Design System (V.Alpha)

A focused, dark-canvas portfolio system where a single electric blue carries every
primary moment against deep navy surfaces. Display type runs in **Outfit** at semibold
weights with tight tracking so headlines read as confident and intentional; body copy
runs in **Inter** for legibility. Depth comes from stepped navy surface tiers and 1px
hairline borders rather than heavy drop shadows. Spacing follows a strict 8-point grid.
The system favors restraint: lots of negative space, one accent, and a clear typographic
hierarchy that lets the work do the talking.

---

## Product Context

This is a **single-product** design system: the personal portfolio website of **Camilo
Echeverry**, a UX/UI designer. The portfolio is a quiet, high-confidence product surface
whose job is to showcase case studies and project work. There is no app, no marketing
site, no docs — just one beautifully restrained website with:

- A hero / intro section
- A projects gallery (cards → modal case studies, and a full-bleed carousel)
- An about block with headshot + skills
- A contact form
- Footer with social links (Behance is the canonical "live project" destination)

**Mode:** Dark-only by design. A light variant is deliberately deferred (see *Known Gaps*
in the source spec) — guessing it would invalidate the dark-tuned contrast pairings.

## Sources

The entire system was derived from a single source file provided by the user:

- **`Design System/DESIGN.md`** — a 647-line, fully-specified design spec (front-matter
  tokens + long-form guidance for colors, type, spacing, elevation, motion, iconography,
  and ~25 components). This file is the source of truth; everything here is faithful to it.

No codebase, Figma, screens, decks, or image/logo assets were provided. The UI kit in
`ui_kits/portfolio/` is therefore a **faithful recreation built directly from the spec's
tokens and component definitions** — not a reverse-engineering of shipped code. Where the
spec left a genuine gap (e.g. no logo file, dark-only), this README flags it.

---

## Content Fundamentals

The spec is a design document, so canonical product copy is limited — but the voice it
implies (and that a single-author design portfolio demands) is clear and consistent:

- **Person, not company.** First-person singular. "I design…", "My work…", "Contact me",
  "Download CV". The site speaks as Camilo, directly to a prospective client or recruiter
  ("you"). Warm but professional.
- **Confident and quiet.** Short, declarative statements. No hype, no exclamation marks,
  no buzzword stacking. The design philosophy ("empty space reads as confidence") extends
  to copy: say less, mean more.
- **Casing.** Sentence case everywhere — headings, buttons, nav. No Title Case, no
  ALL-CAPS except micro-labels (`label-sm` tracking is `+0.4px`, which suits an optional
  small-caps treatment on eyebrow labels). Buttons read "View work", "Contact me",
  "View on Behance" — verb-first, sentence case.
- **No emoji.** The system is line-icon and hairline based; emoji would break the calm,
  architectural tone. Do not introduce them.
- **CTA verbs.** Action labels lead with a verb: *View*, *Contact*, *Download*, *Read*,
  *Explore*. Destination is explicit ("View on Behance", not "Click here").
- **Metadata voice.** Project meta is terse and factual — role, tools, year — set in
  `caption`/`label-sm` and `{muted}` color. e.g. "UX/UI · Figma, Webflow · 2025".
- **Categories & tags.** Short noun phrases: "Case study", "UX/UI", "Branding",
  "Product design". Used as `badge` (filled) for status/category and `tag` (outline) for
  skill/tech chips.

**Vibe in one line:** *Let the work talk. Quiet confidence, one accent, no noise.*

---

## Visual Foundations

**Color.** Dark, blue-biased, single-accent. The base is `--canvas` (#000E1F), a
near-black navy. Exactly one accent — `--primary` (#006EF5), electric blue — carries every
primary moment (CTAs, links, active nav, the wordmark) and is **never** used as a large
decorative fill. Tints (`accent-100/200/300`) and a `primary-subtle` (#002552) cover
chips, focus rings, and low-emphasis blue surfaces. A temperature-neutral gray ramp exists
for explicitly non-branded UI (code blocks, screenshot framing) and is used sparingly.

**Type.** A strict two-family split. **Outfit** (geometric sans, weights 500–600, tight
negative tracking) owns every display and heading role. **Inter** (high x-height, screen-
legible) owns everything readable: paragraphs, button labels, inputs, captions. Emphasis
comes from **size and color, never weight** — display weight is capped at 600. Display
sizes carry progressively tighter tracking as they grow (64px → −1.6px) so big titles stay
architectural; body line-heights sit at 1.5–1.6 for comfortable reading on dark surfaces.

**Spacing.** Strict 8-point grid. Every value is a multiple of 8 (`xs` 8 → `section` 128).
`base` (24px) anchors most internal padding; `section` (128px) sets vertical rhythm between
major sections. The only sub-8 token is `micro` (4px) for icon-to-label gaps and border
widths. Generous, intentional negative space is a core principle — empty space reads as
confidence.

**Backgrounds.** Flat navy surfaces — **no gradients as decoration**, no textures, no
repeating patterns, no hand-drawn illustration. The only permitted gradient is a functional
one: an optional bottom-up `transparent → rgba(0,14,31,0.6)` protection scrim over busy
project thumbnails so an overlaid title stays readable. Project galleries may break to
full-bleed (edge-to-edge) for carousels and hero imagery; everything else caps at 1200px.

**Elevation — borders & tone over shadows.** Depth is *tonal*: surfaces step up the navy
ramp `--canvas → --surface-card (#001229) → --surface-raised (#002552)`, each separated by
a 1px `--hairline` (#0A2547) or `--border` (#1A3A66). Drop shadows are deliberately avoided
on cards because they read as muddy halos on dark surfaces. Only **three** shadows exist and
no fourth may be invented: `card-hover` (subtle project-card lift, optional), `overlay`
(modals / dropdowns / active carousel slide), and the double-ring `focus-ring`. If something
needs separation, prefer a surface-tier step or a border first.

**Corner radii.** `sm` 4px (tooltips), `md` 8px (buttons, inputs, icon-buttons),
`lg` 16px (cards, project tiles, standalone images), `xl` 24px (modal), `full` (pills:
badges, tags, carousel dots, avatar). Imagery inside a project-card rounds only its top two
corners (bottom meets the text block).

**Cards.** `--surface-card` background, 1px `--hairline` border, 16px (`lg`) radius, 32px
padding. **No shadow at rest.** Hover steps the background to `--surface-raised`, may add the
optional `card-hover` shadow, and lifts `translateY(-4px)` over 250ms. A featured/raised card
sits one tier up on `--surface-raised` + `--border`.

**Motion.** Functional, never decorative — nothing bounces, spins, or loops. Durations run
100ms (color-only) → 600ms (scroll reveals). Animate `transform`/`opacity` (and
`background-color`/`box-shadow`) **explicitly** — never `transition: all`, never animate
`height`/`margin`/`top`. Scroll reveals fade up (`opacity 0→1`, `translateY 16px→0`) once
and stay; card rows stagger 60ms, capped at the first 4. `prefers-reduced-motion` drops all
movement and reveals (required, not optional).

**Hover / press states.**
- *Primary button*: hover → `--primary-hover` (#005CCC), press → `--primary-active`
  (#0049A3). Color shift only; no scale.
- *Secondary button*: hover fills with `--surface-card`.
- *Ghost button / nav link*: hover lifts text from `--body` to `--ink` (white).
- *Inline link*: `--primary` → `--primary-hover`, underline appears on hover only.
- *Icon-button*: hover fills with `--surface-raised`.
- *Project-card*: background steps up + optional shadow + `translateY(-4px)`.

**Focus.** Every interactive element gets the double-ring `--shadow-focus-ring` (2px canvas
gap + 2px `--focus-ring` #99C7FF). Never strip focus outlines for cleanliness.

**Transparency & blur.** Used sparingly and only where functional: the modal scrim is
`rgba(0,14,31,0.72)` + 8px backdrop blur; the optional thumbnail protection gradient. No
glassmorphism elsewhere.

**Imagery treatment.** Thumbnails 16:10 in the grid, 16:9 in carousel/modal — pick one per
surface and hold it. Always `object-fit: cover`, centered, never letterboxed. While loading,
a flat `--surface-raised` block stands in (no spinners) then the image fades in at 250ms.
Imagery on dark navy reads best cool/neutral; the system carries no warm/sepia/grain
treatment. (No real images were supplied — the UI kit uses flat `--surface-raised`
placeholders in their place.)

---

## Iconography

- **Set:** **Lucide** (lucide.dev) — the single icon library. Open-source (ISC), consistent
  **1.5px stroke** on a 24px base grid that matches the system's hairline aesthetic. Do not
  mix in other icon sets; stroke-weight and corner-radius consistency matters more than the
  "perfect" glyph.
- **Format used here:** Lucide is loaded from **CDN** (`unpkg.com/lucide@latest`) in the UI
  kit — no codebase icon font/sprite existed to copy in. This is a faithful match to the
  spec's stated set, not a substitution. If you self-host, `npm i lucide` / `lucide-react`.
- **Sizing:** `sm` 16px (inside tags/badges, beside `body-sm`), `md` 20px (default —
  buttons, nav), `lg` 24px (section headers, standalone icon-buttons), `xl` 32px
  (empty-state / feature icons). Stroke stays **1.5px at every size**.
- **Color:** default `--body`; active/hover `--primary`; decorative/secondary `--muted`.
- **Rules:** never use Lucide's filled variants — the system has no filled iconography.
  Icon-to-label gap is `--space-xs` (8px). Every icon-only control carries an `aria-label`.
- **No emoji, no unicode-glyph icons.** Iconography is line-only.

⚠️ **Brand/logo icons substituted:** Lucide deprecated its brand-logo glyphs
(`github`, `linkedin`, `dribbble`, `behance`, …) and the system forbids mixing icon
sets. Social links in the UI-kit footer are therefore rendered as **labeled text links**
with a line `arrow-up-right` glyph — which also matches the spec's own principle that
icons support labels rather than replace them. If you want real brand marks, supply SVGs
in `assets/` and reference them directly.

**Logo / wordmark:** The brand logo **is the wordmark**, set as type: **"Camilo
Echeverry."** in **Outfit 600** with a **trailing point accented in `--primary`** (the one
sanctioned decorative use of the accent). Primary lockup is an `--ink` wordmark + blue
point; invert the point color on a blue wordmark; "CE." monogram for compact spots. The UI
kit renders it this way in the navbar and footer. No separate SVG is required.

---

## Files & Index

Root manifest of this design system:

| Path | What it is |
|---|---|
| `README.md` | This file — context, content & visual foundations, iconography, index |
| `DESIGN.md` | The original full source spec (tokens + long-form guidance). Source of truth. |
| `colors_and_type.css` | CSS custom properties for all tokens + semantic type classes. Import this. |
| `SKILL.md` | Agent-Skill manifest so this system works as a downloadable Claude skill |
| `assets/` | Brand assets (wordmark notes, favicon). Icons load from Lucide CDN. |
| `fonts/` | Self-hosted Outfit + Inter — variable `.ttf` masters (installable/export) + static `.woff2` (web). Loaded via @font-face in `colors_and_type.css` |
| `preview/` | Small HTML cards rendered in the Design System tab (colors, type, spacing, components) |
| `ui_kits/portfolio/` | The portfolio website UI kit — `index.html` + JSX components |

**UI kits**
- `ui_kits/portfolio/` — the full portfolio website: navbar, hero, project gallery + modal
  case study, full-bleed carousel, about block, contact form, footer. See its own README.

**Fonts** — Outfit + Inter are **self-hosted** in `fonts/`, in two tiers loaded via
`@font-face` at the top of `colors_and_type.css`:
- **Variable `.ttf` masters** (official files: `Outfit-VariableFont_wght.ttf`,
  `Inter-VariableFont_opsz_wght.ttf`, plus `Inter-Italic-VariableFont_opsz_wght.ttf` for
  italics — full 100–900 weight axis) — the installable / export-ready source for PPTX,
  Canva, PDF, and system install.
- **Static latin-subset `.woff2`** per weight (Inter 400/500/600, Outfit 400/500/600/700) —
  small and fast for on-screen web rendering; the browser prefers these for matching weights.

No network request is needed; the design system renders fully offline. (Both faces are also
free on Google Fonts if you need other subsets or italics.)

---

## Quick Start

```html
<link rel="stylesheet" href="colors_and_type.css">
```

Then build on `--canvas`, reach for `--primary` only on primary actions/links/active-nav,
step surfaces up the navy ramp for elevation, keep all spacing on the 8pt grid, and split
type strictly: Outfit for titles, Inter for everything readable. When in doubt, read
`DESIGN.md` — its *Do / Don't* table and *Agent Checklist* are the final word.
