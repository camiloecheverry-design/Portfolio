---
name: camilo-echeverry-design
description: Use this skill to generate well-branded interfaces and assets for the Camilo Echeverry portfolio brand ("Cobalt" system), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. A dark navy, single-electric-blue-accent system using Outfit + Inter.
user-invocable: true
---

Read the `README.md` file within this skill first, and explore the other available files.

This is the design system for **Camilo Echeverry's portfolio** — a dark, restrained,
single-accent interface system (the "Cobalt" system). Key facts:

- **Source of truth:** `DESIGN.md` (full token + guidance spec). `README.md` summarizes it
  with content + visual foundations, iconography, and a file index.
- **Tokens + type:** `colors_and_type.css` — import this for all CSS custom properties
  (colors, spacing, radii, motion, shadows) and semantic type classes.
- **Components in use:** `ui_kits/portfolio/` — a faithful React recreation of the portfolio
  (navbar, hero, project grid + case-study modal, carousel, about, contact, footer). Read
  its `components/*.jsx` for copy-ready patterns, and `styles.css` for component CSS.
- **Preview cards:** `preview/` — small specimens for colors, type, spacing, components.

**Non-negotiables when designing in this brand:**
- Dark navy canvas (`--canvas` #000E1F). One accent only — `--primary` #006EF5 — on primary
  CTAs, links, and active nav. Never as a decorative fill.
- Elevation is tonal: step surfaces up the navy ramp + 1px hairline/border. Only three
  shadows exist; never invent a fourth. No drop shadows on resting cards.
- Type split strictly: **Outfit** (600, tight tracking) for display/headings; **Inter** for
  all body, labels, inputs, captions. Emphasis via size + color, never weight (cap 600).
- Strict 8-point spacing grid. Radii start at `sm` 8px and scale up.
- **Lucide** icons only, 1.5px stroke, line (never filled). Brand-logo glyphs were
  deprecated by Lucide — use labeled links instead. No emoji.
- Honor `prefers-reduced-motion`. Animate `transform`/`opacity` explicitly, never
  `transition: all`.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, copy
assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build
or design, ask some clarifying questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
