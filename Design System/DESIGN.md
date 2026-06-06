---
version: alpha
name: Camilo Echeverry Portfolio
description: >
  A focused, dark-canvas portfolio where a single electric blue carries every
  primary moment against deep navy surfaces. Display type runs in Outfit at
  semibold weights with tight tracking so headlines read as confident and
  intentional; body copy runs in Inter for legibility. Depth comes from stepped
  navy surface tiers and 1px hairline borders rather than heavy drop shadows.
  Spacing follows a strict 8-point grid. The system favors restraint: lots of
  negative space, one accent, and a clear typographic hierarchy that lets the
  work do the talking.

colors:
  # Brand & Accent
  primary: "#006EF5"
  primary-hover: "#005CCC"
  primary-active: "#0049A3"
  primary-subtle: "#002552"
  on-primary: "#FFFFFF"

  # Accent tints (for chips, focus rings, subtle highlights)
  accent-100: "#EBF4FF"
  accent-200: "#C2DDFF"
  accent-300: "#99C7FF"

  # Surfaces (dark, stepped)
  canvas: "#000E1F"
  surface-card: "#001229"
  surface-raised: "#002552"

  # Text
  ink: "#FFFFFF"
  body: "#C2DDFF"
  muted: "#7E96B5"
  disabled: "#4A5C75"
  on-accent-subtle: "#EBF4FF"

  # Borders & Hairlines
  hairline: "#0A2547"
  border: "#1A3A66"
  border-strong: "#0049A3"
  focus-ring: "#99C7FF"

  # Neutral scale (grays, white, black)
  white: "#FFFFFF"
  gray-100: "#E6ECF3"
  gray-300: "#A7B4C4"
  gray-500: "#6B7A8D"
  gray-700: "#33414F"
  black: "#000000"

  # Semantic
  success: "#1FB57A"
  on-success: "#FFFFFF"
  warning: "#F5A623"
  on-warning: "#001229"
  error: "#F25555"
  on-error: "#FFFFFF"
  info: "#006EF5"
  on-info: "#FFFFFF"

typography:
  display-lg:
    fontFamily: "'Outfit', sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -1.6px
  display-md:
    fontFamily: "'Outfit', sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.2px
  display-sm:
    fontFamily: "'Outfit', sans-serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "'Outfit', sans-serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.4px
  heading-sm:
    fontFamily: "'Outfit', sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.2px
  body-lg:
    fontFamily: "'Inter', sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "'Inter', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  label-lg:
    fontFamily: "'Inter', sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.1px
  label-sm:
    fontFamily: "'Inter', sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.4px
  caption:
    fontFamily: "'Inter', sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.2px

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px

spacing:
  micro: 4px
  xs: 8px
  sm: 16px
  base: 24px
  lg: 32px
  xl: 48px
  2xl: 64px
  3xl: 96px
  section: 128px

motion:
  duration-instant: 100ms
  duration-fast: 150ms
  duration-base: 250ms
  duration-slow: 400ms
  duration-reveal: 600ms
  ease-standard: "cubic-bezier(0.4, 0, 0.2, 1)"
  ease-out: "cubic-bezier(0, 0, 0.2, 1)"
  ease-in: "cubic-bezier(0.4, 0, 1, 1)"
  ease-emphasized: "cubic-bezier(0.2, 0, 0, 1)"

shadow:
  none: "none"
  card-hover: "0px 8px 24px rgba(0, 14, 31, 0.4)"
  overlay: "0px 16px 48px rgba(0, 14, 31, 0.6)"
  focus-ring: "0 0 0 2px {colors.canvas}, 0 0 0 4px {colors.focus-ring}"

icon:
  size-sm: 16px
  size-md: 20px
  size-lg: 24px
  size-xl: 32px
  stroke: 1.5px
  color-default: "{colors.body}"
  color-active: "{colors.primary}"
  color-muted: "{colors.muted}"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
  button-secondary:
    backgroundColor: "transparent"
    borderColor: "{colors.border}"
    textColor: "{colors.ink}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.body}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.lg}"
    padding: "32px"
  card-raised:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.body}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: "32px"
  input:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    placeholderColor: "{colors.muted}"
    borderColor: "{colors.border}"
    focusBorderColor: "{colors.focus-ring}"
    rounded: "{rounded.md}"
    padding: "16px"
    typography: "{typography.body-md}"
  badge:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.accent-300}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
  tag:
    backgroundColor: "transparent"
    borderColor: "{colors.border}"
    textColor: "{colors.body}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    activeTextColor: "{colors.ink}"
    typography: "{typography.label-lg}"
    padding: "8px 16px"
  navbar:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.hairline}"
    padding: "16px 32px"
    height: "72px"
  project-card:
    backgroundColor: "{colors.surface-card}"
    borderColor: "{colors.hairline}"
    hoverBackgroundColor: "{colors.surface-raised}"
    hoverShadow: "{shadow.card-hover}"
    textColor: "{colors.body}"
    titleColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0px"
    transition: "{motion.duration-base} {motion.ease-standard}"
  project-modal:
    backgroundColor: "{colors.surface-raised}"
    borderColor: "{colors.border}"
    textColor: "{colors.body}"
    rounded: "{rounded.xl}"
    padding: "48px"
    shadow: "{shadow.overlay}"
    maxWidth: "960px"
  modal-overlay:
    backgroundColor: "rgba(0, 14, 31, 0.72)"
    backdropBlur: "8px"
  carousel-slide:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.lg}"
    activeShadow: "{shadow.overlay}"
    transition: "{motion.duration-slow} {motion.ease-emphasized}"
  carousel-dot:
    backgroundColor: "{colors.border}"
    activeBackgroundColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: "8px"
    activeSize: "24px"
    transition: "{motion.duration-base} {motion.ease-standard}"
  link-inline:
    textColor: "{colors.primary}"
    hoverTextColor: "{colors.primary-hover}"
    typography: "{typography.body-md}"
  icon-button:
    backgroundColor: "transparent"
    hoverBackgroundColor: "{colors.surface-raised}"
    iconColor: "{colors.body}"
    rounded: "{rounded.md}"
    padding: "8px"
    size: "40px"
  divider:
    backgroundColor: "{colors.hairline}"
    height: "1px"
  avatar:
    rounded: "{rounded.full}"
    borderColor: "{colors.border}"
    size: "64px"
  tooltip:
    backgroundColor: "{colors.surface-raised}"
    borderColor: "{colors.border}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
---

## Overview

This portfolio reads like a quiet, high-confidence product surface. The base canvas is `canvas` (#000E1F), a near-black navy that pushes the work forward and lets imagery and project thumbnails sit on a calm, non-competing background. A single electric blue, `primary` (#006EF5), carries every primary moment: CTAs, active navigation, links, and the focus identity of the brand. Nothing else competes for that role.

Depth is tonal. Surfaces step up from `canvas` to `surface-card` to `surface-raised`, each lighter navy than the last, and cards are separated by 1px `hairline` borders rather than heavy drop shadows. This keeps the dark UI clean and avoids the muddy, glowing look that drop shadows produce on dark backgrounds.

Type does the hierarchy work. Outfit at semibold (600) with tight negative tracking handles all display and heading sizes so titles feel deliberate and compact. Inter handles everything readable: paragraphs, button labels, card body, inputs. The split is strict, brand voice in Outfit, information in Inter.

**Key Characteristics:**
- One accent only: `primary` (#006EF5) for actions and active states, never decoration
- Dark, stepped navy surfaces (`canvas` → `surface-card` → `surface-raised`) for elevation
- Borders over shadows: 1px `hairline` and `border` define separation
- Outfit semibold with tight tracking for all display/heading type; Inter for all body and component text
- Strict 8-point spacing grid, generous negative space, content capped for readability

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}`, #006EF5): The single brand action color. Primary CTAs, text links, active nav items, brand wordmark. Decisive and unambiguous against the dark canvas. Never used as a large decorative fill.
- **Primary Hover** (`{colors.primary-hover}`, #005CCC): One step down in luminance for hover states on primary surfaces.
- **Primary Active** (`{colors.primary-active}`, #0049A3): Pressed/active state, deepest functional blue.
- **Primary Subtle** (`{colors.primary-subtle}`, #002552): Tinted fill for badges, selected chips, and low-emphasis blue surfaces where full `primary` would shout.
- **On Primary** (`{colors.on-primary}`, #FFFFFF): Text and icons sitting on any `primary` fill. White clears AA on #006EF5 and deeper.

### Accent Tints
- **Accent 100** (`{colors.accent-100}`, #EBF4FF): Lightest blue wash. Use for text on `primary-subtle` fills, or rare near-white highlights.
- **Accent 200** (`{colors.accent-200}`, #C2DDFF): Doubles as `body` text color. Soft blue-white, easy on dark backgrounds.
- **Accent 300** (`{colors.accent-300}`, #99C7FF): Mid tint for badge text, focus rings, and decorative micro-accents.

### Surface
- **Canvas** (`{colors.canvas}`, #000E1F): The page floor. Everything sits on this near-black navy.
- **Surface Card** (`{colors.surface-card}`, #001229): First elevation step. Cards, inputs, panels. One shade above canvas so edges read without a border alone.
- **Surface Raised** (`{colors.surface-raised}`, #002552): Second elevation step. Hovered cards, popovers, raised tiles, modal interiors.

### Text
- **Ink** (`{colors.ink}`, #FFFFFF): Headings and high-emphasis text. Pure white for maximum contrast on dark surfaces.
- **Body** (`{colors.body}`, #C2DDFF): Default paragraph color. Soft blue-white, lower glare than pure white for long reading.
- **Muted** (`{colors.muted}`, #7E96B5): Secondary text, captions, metadata, timestamps. Clears AA on `canvas` at 14px+. Do not use for primary body copy.
- **Disabled** (`{colors.disabled}`, #4A5C75): Disabled labels and inactive controls only. Intentionally below AA, never for real content.

### Borders & Hairlines
- **Hairline** (`{colors.hairline}`, #0A2547): Default 1px separator between cards and canvas. Quiet, near-invisible until it does its job.
- **Border** (`{colors.border}`, #1A3A66): Stronger 1px border for inputs, secondary buttons, and dividers that need to be seen.
- **Border Strong** (`{colors.border-strong}`, #0049A3): Emphasis border, selected card outlines, active input rest state.
- **Focus Ring** (`{colors.focus-ring}`, #99C7FF): 2px focus outline on all interactive elements. High-visibility, accessibility-critical.

### Neutrals
- **White** (`{colors.white}`, #FFFFFF) / **Black** (`{colors.black}`, #000000): True extremes. White for `ink` and `on-primary`; black reserved for pure overlays or imagery edges.
- **Gray 100–700** (#E6ECF3 → #33414F): Temperature-neutral grays for any UI that should read as non-branded (code blocks, neutral chips, screenshots framing). Use sparingly; the system is blue-biased by default.

### Semantic
- **Success** (`{colors.success}`, #1FB57A): Form success, sent confirmations.
- **Warning** (`{colors.warning}`, #F5A623): Non-blocking cautions. Pairs with `on-warning` (#001229) text.
- **Error** (`{colors.error}`, #F25555): Validation failures, destructive confirmation.
- **Info** (`{colors.info}`, #006EF5): Informational notices; intentionally the same as `primary`.

## Typography

**Brand face**: Outfit. A geometric sans with even, confident proportions. Carries all display and heading roles at weights 500 to 600 with tight negative tracking so titles compress into deliberate, designed statements rather than loose editorial headlines.

**Body face**: Inter. The workhorse for everything readable: paragraphs, button labels, input text, card body, captions. Chosen for its high x-height and screen legibility at small sizes on dark backgrounds.

### Font Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

```css
/* CSS @import alternative */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
```

### Type Scale

| Token | Family | Size | Weight | Line Height | Tracking | Use |
|---|---|---|---|---|---|---|
| `display-lg` | Outfit | 64px | 600 | 1.05 | -1.6px | Hero headline |
| `display-md` | Outfit | 48px | 600 | 1.1 | -1.2px | Section openers |
| `display-sm` | Outfit | 32px | 600 | 1.15 | -0.8px | Sub-section titles |
| `heading-lg` | Outfit | 24px | 600 | 1.25 | -0.4px | Card and project titles |
| `heading-sm` | Outfit | 20px | 500 | 1.3 | -0.2px | Minor headings, labels-as-titles |
| `body-lg` | Inter | 18px | 400 | 1.6 | 0 | Lead paragraphs, intros |
| `body-md` | Inter | 16px | 400 | 1.55 | 0 | Default body copy |
| `body-sm` | Inter | 14px | 400 | 1.5 | 0 | Secondary copy, card body |
| `label-lg` | Inter | 14px | 500 | 1.2 | +0.1px | Buttons, nav links |
| `label-sm` | Inter | 12px | 500 | 1.3 | +0.4px | Badges, tags |
| `caption` | Inter | 12px | 400 | 1.4 | +0.2px | Timestamps, metadata |

### Principles

The scale follows Material's t-shirt logic (Display → Heading → Body → Label) but compresses it for a single-author portfolio: one display family, one body family, no redundant steps. Display sizes carry progressively tighter negative tracking as they grow, so a 64px hero stays tight and architectural rather than spreading out. Weight never exceeds 600; emphasis comes from size and color, not from going heavier. Body line-heights sit at 1.5 to 1.6 for comfortable reading on dark surfaces; display line-heights tighten to 1.05 to 1.15 so multi-line titles hold together as a block.

### Font Substitutes

Both faces are free on Google Fonts, so no fallback files are needed. If the import fails, the stack degrades to system `sans-serif`. For Outfit specifically, `Poppins` or `Manrope` are the closest geometric substitutes if you ever self-host.

## Layout

### Spacing Scale

Strict 8-point grid. Every spacing and sizing value is a multiple of 8: `xs` (8), `sm` (16), `base` (24), `lg` (32), `xl` (48), `2xl` (64), `3xl` (96), `section` (128). `base` (24px) anchors most internal component padding and gaps between related elements. `section` (128px) sets the vertical rhythm between major page sections. The only sub-8 value is `micro` (4px), reserved for micro-spacing: icon-to-label gaps, border widths, and tight chip padding. A 0px or 2px value is permitted only as a one-off aesthetic correction (optical alignment, hairline insets), never as a layout primitive.

### Grid & Containers
- Max content width: 1200px, centered
- Gutters: `{spacing.lg}` (32px) at desktop, `{spacing.sm}` (16px) at mobile
- Column count: 12 (desktop) / 8 (tablet) / 4 (mobile)
- Project galleries can break to full-bleed (edge-to-edge) for carousels and hero imagery

### Whitespace Philosophy

Generous and intentional. The dark canvas plus wide section spacing (`{spacing.section}`) gives each project room to breathe and signals craft. Resist the urge to fill negative space; on a portfolio, empty space reads as confidence. Internal density (within a card) stays comfortable at `{spacing.base}` to `{spacing.lg}`; macro density (between sections) stays loose at `{spacing.2xl}` to `{spacing.section}`.

## Elevation

### Surface Tiers

| Tier | Token | Appearance |
|---|---|---|
| Page floor | `{colors.canvas}` | Base navy, no border |
| Card | `{colors.surface-card}` | One step lighter + 1px `{colors.hairline}` border |
| Raised / hover | `{colors.surface-raised}` | Two steps lighter + 1px `{colors.border}` |
| Modal / Overlay | `{colors.surface-raised}` | 1px `{colors.border}` + the one permitted shadow (below) |

### Shadow Definitions

This system is border-and-tone first. Elevation is communicated by stepping the surface color up the navy scale and by hairline borders, not by drop shadows on cards. Drop shadows are avoided on dark surfaces because they read as muddy halos rather than lift.

Three shadows are defined, and only these three. Each uses the canvas navy at low alpha so the shadow tints rather than greys:

| Token | Value | Use |
|---|---|---|
| `shadow.card-hover` | `0px 8px 24px rgba(0, 14, 31, 0.4)` | Subtle lift on a `project-card` hover only. Optional. |
| `shadow.overlay` | `0px 16px 48px rgba(0, 14, 31, 0.6)` | Floating layers: modals, dropdowns, the active carousel slide. |
| `shadow.focus-ring` | `0 0 0 2px {colors.canvas}, 0 0 0 4px {colors.focus-ring}` | The double-ring focus state on all interactive elements. The inner canvas ring creates a gap so the focus ring reads cleanly against any surface. |

Never invent a fourth shadow. If an element needs separation, prefer a surface-tier step or a border first.

## Motion

Motion is functional, not decorative. It confirms actions, smooths state changes, and guides the eye through the work. Nothing bounces, spins, or draws attention to itself. The portfolio should feel fast and composed.

### Duration Scale

| Token | Value | Use |
|---|---|---|
| `motion.duration-instant` | 100ms | Color-only changes: link hover, icon color shift |
| `motion.duration-fast` | 150ms | Button hover/press, small state changes |
| `motion.duration-base` | 250ms | Card hover lift, dropdown open, tab switch |
| `motion.duration-slow` | 400ms | Modal enter/exit, carousel slide transition |
| `motion.duration-reveal` | 600ms | Scroll-triggered section reveals (once per element) |

### Easing

| Token | Curve | Use |
|---|---|---|
| `motion.ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default for most transitions; symmetric in and out |
| `motion.ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering the screen; fast start, soft landing |
| `motion.ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving the screen |
| `motion.ease-emphasized` | `cubic-bezier(0.2, 0, 0, 1)` | Hero and carousel transitions that deserve weight |

### Principles

- **Transition properties, not `all`.** Animate `transform`, `opacity`, `background-color`, and `box-shadow` explicitly. Never `transition: all`; it causes jank and animates layout-shifting properties.
- **Transform and opacity only for movement.** Reveals and hovers use `translateY` and `opacity`, never `top`/`margin`/`height`, to stay on the GPU compositor.
- **Scroll reveals fire once.** A section fades up (`opacity 0 → 1`, `translateY(16px → 0)`) at `duration-reveal` with `ease-out`, then stays. No re-triggering on scroll-up.
- **Stagger sparingly.** When a row of project cards reveals, stagger by 60ms per item, capped at the first 4. Beyond that, reveal as a group.

### Reduced Motion

Respect `prefers-reduced-motion`. When set, drop all `translate`/`scale` movement and reveals; keep only instant opacity and color changes. This is an accessibility requirement, not an option:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Iconography

Icons are line-style, single-weight, and quiet. They support labels rather than replacing them. The set should feel like an extension of the 1px hairline language.

### Set

Use **Lucide** (lucide.dev) as the single icon library. It is open-source (ISC license), tree-shakeable, and ships a consistent 1.5px stroke at a 24px base grid that matches this system's hairline aesthetic. Do not mix in icons from other sets; visual consistency of stroke weight and corner radius matters more than finding the "perfect" glyph.

```bash
npm install lucide-react   # React
# or use the CDN / SVG sprites for plain HTML
```

### Sizing & Color

| Token | Value | Use |
|---|---|---|
| `icon.size-sm` | 16px | Inline with `body-sm`, inside tags and badges |
| `icon.size-md` | 20px | Default. Inline with `body-md`, buttons, nav |
| `icon.size-lg` | 24px | Section headers, standalone icon buttons |
| `icon.size-xl` | 32px | Feature/empty-state illustration icons |
| `icon.stroke` | 1.5px | Fixed stroke for every icon, every size |
| `icon.color-default` | `{colors.body}` | Resting state |
| `icon.color-active` | `{colors.primary}` | Active nav, hovered interactive icon |
| `icon.color-muted` | `{colors.muted}` | Decorative or secondary icons |

### Principles

- Icon-plus-label gets `{spacing.xs}` (8px) between glyph and text. Icon-only buttons must carry an `aria-label`.
- Optical sizing: a 20px icon sits beside 16px body text without overpowering it. Don't scale icons to match cap-height exactly; the slight overhang is correct.
- Keep stroke at 1.5px even when scaling up; do not use Lucide's filled variants. The system has no filled iconography.

## Components

**`button-primary`**. Solid `{colors.primary}` fill, `{colors.on-primary}` (white) label in `{typography.label-lg}`, `{rounded.md}` corners, `16px 24px` padding. The single highest-emphasis action on any view (View work, Contact me, View on Behance).

**`button-primary-hover`**. Identical geometry, background shifts to `{colors.primary-hover}`. Apply on hover; transition over 150ms.

**`button-primary-active`**. Background shifts to `{colors.primary-active}` on press.

**`button-secondary`**. Transparent fill, 1px `{colors.border}` outline, `{colors.ink}` label. For secondary actions that sit beside a primary button (Download CV next to Contact). On hover, fill with `{colors.surface-card}`.

**`button-ghost`**. Transparent, no border, `{colors.body}` label. Lowest-emphasis action: text-only links inside dense areas, "back" controls. Hover lifts text to `{colors.ink}`.

**`card`** `{colors.surface-card}` background, `{colors.body}` text, 1px `{colors.hairline}` border, `{rounded.lg}` (16px) corners, `{spacing.lg}` (32px) padding. The default container for project tiles, about blocks, and content panels.

**`card-raised`** `{colors.surface-raised}` background, 1px `{colors.border}`. The hover state of `card`, or for cards that need to read as one tier higher (featured project).

**`input`** `{colors.surface-card}` background, `{colors.ink}` text, `{colors.muted}` placeholder, 1px `{colors.border}` rest border, `{rounded.md}` corners, `16px` padding, `{typography.body-md}` text. Focus state swaps the border to a 2px `{colors.focus-ring}` outline.

**`badge`** `{colors.primary-subtle}` fill, `{colors.accent-300}` text in `{typography.label-sm}`, `{rounded.full}` pill, `4px 16px` padding. For status and category labels ("Case study", "UX/UI").

**`tag`**. Transparent fill, 1px `{colors.border}`, `{colors.body}` text, `{rounded.full}` pill. For skill chips and tech stack lists where many sit together and a fill would be noisy.

**`nav-link`**. Transparent, `{colors.body}` text in `{typography.label-lg}`, `8px 16px` padding. Active route lifts text to `{colors.ink}`; the active indicator is a `{colors.primary}` underline or dot.

**`navbar`** `{colors.canvas}` background with a 1px `{colors.hairline}` bottom border, `16px 32px` padding, 72px tall. Sticky to top. On scroll past the hero, it can gain `shadow.overlay` at reduced alpha or simply keep the hairline; pick one and stay consistent. Holds the wordmark left, `nav-link` items center or right, and one `button-primary` (Contact) far right.

**`project-card`**. The core portfolio unit. `{colors.surface-card}` background, 1px `{colors.hairline}` border, `{rounded.lg}` corners, `0` padding so the thumbnail bleeds to the card edge (text content inside gets its own `{spacing.base}` inset). Title in `{colors.ink}` via `heading-lg`, supporting text in `{colors.body}`. On hover: background steps to `{colors.surface-raised}`, optional `shadow.card-hover`, and a `translateY(-4px)` lift over `motion.duration-base` with `ease-standard`. Click opens `project-modal`.

**`project-modal`**. Full case-study view. `{colors.surface-raised}` background, 1px `{colors.border}`, `{rounded.xl}` corners, `48px` padding, `shadow.overlay`, max-width 960px, centered. Enters at `motion.duration-slow` with `ease-emphasized` (fade + `translateY(24px → 0)` or `scale(0.98 → 1)`). Contains the project title (`display-sm`), role/tools metadata (`badge` + `tag` row), body copy (`body-md`), embedded imagery, and a `button-primary` linking to the live Behance project. A `icon-button` (X) sits top-right.

**`modal-overlay`**. The scrim behind any modal. `rgba(0, 14, 31, 0.72)` with an 8px backdrop blur. Fades in at `motion.duration-base`. Click-to-dismiss; `Esc` also closes.

**`carousel-slide`**. A single slide in the full-viewport project carousel. `{colors.surface-card}` base, `{rounded.lg}`. The active slide carries `shadow.overlay`; inactive slides sit flat and slightly dimmed (`opacity 0.5`). Slide transitions run at `motion.duration-slow` with `ease-emphasized`.

**`carousel-dot`**. Pagination indicator. 8px `{colors.border}` circle; the active dot is `{colors.primary}` and widens to a 24px pill (`rounded.full`) over `motion.duration-base`. Each dot is a button with an `aria-label` ("Go to project N").

**`link-inline`**. Inline text links inside body copy. `{colors.primary}` text, `{colors.primary-hover}` on hover, `body-md`. Underline on hover only, not at rest, to keep paragraphs clean. The only place `{colors.primary}` appears as text rather than a fill.

**`icon-button`**. Square 40px transparent button wrapping a 20–24px Lucide icon in `{colors.body}`. Hover fills with `{colors.surface-raised}`, `{rounded.md}`. For modal close, carousel arrows, social links, theme toggle. Always carries an `aria-label`.

**`divider`** 1px `{colors.hairline}` horizontal rule for separating content blocks within a section. Use sparingly; whitespace is the preferred separator.

**`avatar`** 64px circular image, 1px `{colors.border}`, `{rounded.full}`. For the About section headshot. Scales to 40px in the navbar if used there.

**`tooltip`** `{colors.surface-raised}` background, 1px `{colors.border}`, `{colors.ink}` text in `{typography.caption}`, `{rounded.sm}`, `4px 8px` padding. Appears on `icon-button` hover after a 400ms delay. Fades in at `motion.duration-instant`.

### Imagery Treatment

- **Aspect ratios**: Project thumbnails use 16:10 in the grid and 16:9 in the carousel and modal. Pick one per surface and hold it; mismatched ratios break the grid rhythm.
- **Object-fit**: Always `cover`, centered. Never letterbox a thumbnail.
- **Corner radius**: Imagery inside a `project-card` inherits the card's `{rounded.lg}` on its top corners only (bottom meets the text block). Standalone images in the modal get `{rounded.lg}` on all corners.
- **Overlay**: On `project-card` hover, an optional bottom-up gradient (`transparent → rgba(0,14,31,0.6)`) can surface the title over the image. Keep text readable; if the image is busy, prefer placing the title in a solid block below the image instead.
- **Loading**: Use a `{colors.surface-raised}` solid block as the placeholder while images load. No spinners; a quiet fade-in (`opacity` at `motion.duration-base`) when the image decodes.

## Responsive Behavior

| Breakpoint | Width | Key Changes |
|---|---|---|
| Mobile | < 720px | Single column, nav collapses to a menu, `display-lg` drops to 40px, gutters at 16px |
| Tablet | 720–1024px | 8-column grid, project gallery at 2 across, `display-lg` at 52px |
| Desktop | 1024–1440px | 12-column grid, full layout, content capped at 1200px |
| Wide | > 1440px | Content stays capped at 1200px, centered; extra space becomes margin |

### Touch Targets
- Primary CTAs ≥ 44 × 44px (WCAG AA)
- Form inputs at 56px height (16px padding + body line-height)
- Nav links get ≥ 44px tap area on mobile even if visually smaller

### Collapsing Strategy
- Navigation collapses to a hamburger/sheet below 720px
- Project grid drops 12 → 8 → 4 columns; tiles go full-width on mobile
- Section spacing tightens from `{spacing.section}` (128px) to `{spacing.2xl}` (64px) on mobile
- Display type steps down one size at each breakpoint to avoid horizontal overflow

## Known Gaps

The earlier gaps (motion, iconography, imagery, and the core portfolio components) are now specified above. What genuinely remains for your input:

- **Light mode**: This system is dark-only by design. A light variant would require re-deriving the surface and text tokens (invert the navy ramp, drop `ink` to a near-black, lift `canvas` to a near-white). Deliberately deferred; guessing it would invalidate the dark-tuned contrast pairings. Flag to the developer if a light mode is requested.
- **Wordmark / logo asset**: The brand wordmark is referenced (navbar, footer) but no logo file or lockup is defined. Supply an SVG, or confirm the wordmark is set type in Outfit.
- **404 / empty states**: Not designed. When needed, build from `display-sm` + `body-md` + `button-primary`, centered, on `canvas`.
- **Form validation copy**: Error/success colors exist (`error`, `success`), but the inline validation pattern (message placement, timing) is not specified. Derive from `input` + `caption` in the semantic color when you build the contact form.

## Do / Don't

| Do | Don't |
|---|---|
| Use `{colors.primary}` only on primary CTAs, links, and active nav | Use `{colors.primary}` as a large decorative background fill |
| Communicate elevation by stepping surface color (`canvas` → `surface-card` → `surface-raised`) | Add drop shadows to cards; shadows muddy dark surfaces |
| Separate cards from canvas with a 1px `{colors.hairline}` border | Rely on shadow alone to separate a card from the canvas |
| Set all spacing as multiples of 8 via `{spacing.*}` tokens | Use arbitrary px values; reserve 4px for micro-spacing only |
| Use Outfit for every heading and display size | Use Outfit for body copy, buttons, or input text |
| Use Inter for all body, labels, buttons, and inputs | Use Inter for hero or section headlines |
| Keep `{colors.body}` (#C2DDFF) for paragraphs | Use `{colors.muted}` for body copy; it only clears AA as secondary text |
| Cap display weight at 600 and signal emphasis with size and color | Push display weight to 700+ to force importance |
| Give every interactive element a 2px `{colors.focus-ring}` focus state | Remove focus outlines for visual cleanliness |
| Animate `transform` and `opacity` explicitly with a `motion.*` token | Use `transition: all` or animate `height`/`margin`/`top` |
| Honor `prefers-reduced-motion` by dropping movement and reveals | Ship scroll reveals or carousel motion with no reduced-motion fallback |
| Use Lucide icons at a fixed 1.5px stroke, colored with `icon.*` tokens | Mix icon sets or use filled icon variants |
| Stick to the three defined shadows (`card-hover`, `overlay`, `focus-ring`) | Invent new shadows; prefer a surface step or border for separation |

## Agent Checklist

1. Read this entire DESIGN.md before writing any component or layout.
2. Every color must reference a named token from `colors:`, with no inline hex.
3. `{colors.primary}` (#006EF5) is reserved for primary CTAs, links, active nav, and the wordmark. Never decorative.
4. Elevation is tonal: step surfaces up the navy ramp and use 1px hairline/border. Use only the three defined shadows (`card-hover`, `overlay`, `focus-ring`); never invent a fourth.
5. All spacing and sizing must be multiples of 8 from `{spacing.*}`. The only sub-8 value is `micro` (4px) for icon gaps and border widths; 0px/2px allowed only as one-off optical fixes.
6. Typography is split strictly: Outfit (`display-*`, `heading-*`) for titles; Inter (`body-*`, `label-*`, `caption`) for everything readable, including button and input text.
7. Match type role to context: `display-lg` for the hero, `display-md` for section openers, `heading-lg` for project titles, `body-md` for prose, `caption` for metadata.
8. Default buttons to `button-primary`; use `button-secondary` for adjacent secondary actions and `button-ghost` for low-emphasis text actions.
9. Every interactive element gets a visible focus state via `shadow.focus-ring`. Never strip focus outlines.
10. Body copy uses `{colors.body}`, not `{colors.muted}`. `{colors.muted}` is for secondary text only and `{colors.disabled}` for inactive controls only.
11. Motion uses `motion.*` tokens only. Animate `transform`/`opacity`, never `transition: all`. Always provide a `prefers-reduced-motion` fallback that drops movement.
12. Icons come from Lucide at 1.5px stroke, sized and colored via `icon.*` tokens. Icon-only controls require an `aria-label`.
13. When a gap exists, check `## Known Gaps` first. If listed (light mode, wordmark, 404, form validation), surface it to the developer rather than guessing. If not listed, apply the nearest analogous token.
14. Before shipping any screen, verify every component used maps 1:1 to an entry in `## Components`, and no new color, font, radius, shadow, duration, or icon set was introduced outside this file.
