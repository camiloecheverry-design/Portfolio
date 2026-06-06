# Handoff — Camilo Echeverry Portfolio

A personal portfolio website for **Juan Camilo Echeverry Marmolejo**, UX/UI &
product designer. Static site — plain HTML, CSS, and vanilla JS. **No build step,
no framework, no package.json.** Open any `.html` file in a browser and it runs.

---

## First task: push to GitHub

This is the reason for the handoff. Please:

1. Initialise git in this folder (if not already a repo).
2. Create a GitHub repo for it (use `gh repo create` if the GitHub CLI is
   available; otherwise ask me for the remote URL of an empty repo I've made).
   Ask whether it should be **public or private** before creating.
3. Commit everything and push to `main`.

Suggested commit message: `Initial commit — Camilo Echeverry portfolio`.

### Optional follow-up: deploy
It's a static site, so **GitHub Pages** hosts it for free with zero config
(Settings → Pages → deploy from `main`, root). `404.html` and the contact form
both work on Pages as-is. Offer this once the push succeeds.

---

## ⚠️ Before you commit — the one secret

`assets/js/site.js` contains a **Web3Forms access key** (the contact-form
endpoint), near the top of the contact-form section:

```js
var WEB3FORMS_ACCESS_KEY = "75500890-d3ec-43cd-8e17-fbd2e39445fa";
```

This key is **safe to expose in client-side code** — that's how Web3Forms is
designed to work (it only routes form submissions to a fixed inbox; it can't be
abused to read anything). So committing it is fine. Just flagging it so it's a
conscious choice, not an accident. If the owner prefers, it can be swapped for a
new key later without any code changes beyond this line.

No other secrets, tokens, or `.env` files exist in this project.

---

## File map

```
index.html        Home — hero, about teaser, experience, projects (modal case
                  studies + carousel), services, contact form. Has a Tweaks panel.
about.html        About — bio, education, "what sets me apart", achievements
                  bento grid (CSS/SVG art), tools.
resume.html       Full résumé — experience, education, certifications, skills,
                  sidebar (contact, tools, languages, availability).
blog.html         Blog index — featured post + 6-card grid with category filters.
article.html      A single full article (the one real post). Blog cards currently
                  all link here — see "Known gaps".
contact.html      Contact page — methods, FAQ, and the main contact form.
404.html          Branded not-found page (noindex). Self-contained styles in a
                  <style> block.
robots.txt        Allows all; points to sitemap.
sitemap.xml       Lists the 6 main pages.

assets/css/colors_and_type.css   Design-system tokens (CSS custom properties) +
                                 type classes + @font-face. Do not edit lightly.
assets/css/site.css              All site/component styling.
assets/css/fonts/                Self-hosted Outfit + Inter.
assets/js/site.js                Shared interactions: icons, mobile menu, scroll
                                 reveals, projects carousel, modal case studies,
                                 contact-form validation + submission, active-nav.
assets/js/image-slot.js          <image-slot> web component (drag-drop photos).
assets/js/tweaks-panel.jsx       Tweaks panel (React, loaded via Babel on home only).
assets/img/                      favicon + per-page Open Graph images.
assets/files/                    CV PDF (linked from the résumé page).
.image-slots.state.json          Persisted images the owner dropped into slots
                                 (hero portrait + home about portrait). Keep it —
                                 deleting it loses those photos.
```

## How it's wired (so you don't break conventions)

- **Design system.** Dark-only, single electric-blue accent (`--primary`
  #006EF5) on deep navy. Display type = **Outfit**, body = **Inter**. Depth via
  surface tiers + 1px hairline borders, not heavy shadows. 8-point spacing grid.
  All values come from CSS custom properties in `colors_and_type.css` — use
  `var(--token)`, never hardcode new colors.
- **Icons.** Lucide via CDN (`<i data-lucide="name">`), re-rendered by
  `initIcons()` in `site.js` after any dynamic DOM change.
- **Navbar / footer** are duplicated inline in each HTML file (no includes).
  If you change one, change all of them.
- **Contact form** lives on both `index.html` and `contact.html`; the logic is
  shared in `site.js`. It POSTs to Web3Forms with a live access key and has been
  tested end-to-end (delivers to the owner's inbox). If the key is ever blanked
  it falls back to a prefilled `mailto:`. A hidden honeypot field guards spam.
- **Anti-FOUT (font flash).** Each page's `<head>` preloads Outfit 600 + Inter
  400 and runs a tiny inline script that adds `.fonts-loading` to `<html>`, then
  removes it on `document.fonts.ready` (1.5s safety timeout). CSS hides the body
  until fonts are ready so text never jumps from a fallback face. No-JS = visible
  normally. If you add a new HTML page, copy that head block or it'll flash.
- **Tweaks panel** (home only) is a designer preview tool — it toggles the
  projects layout, hero stats, and reveal motion. Harmless to keep; not part of
  the shipped UX.

## Known gaps (context, not tasks — only act if asked)

- **Blog is one real article.** All 6 blog cards + the featured post link to the
  same `article.html`. The other posts are titles/excerpts only.
- **Project case studies** are modal blurbs that point to Behance; no dedicated
  case-study pages, and thumbnails are numbered placeholders (no real images).
- **About-page images** — two `<image-slot>`s (`about-page-portrait`,
  `about-diff-image`) are still empty.
- **GitHub link** in nav/footer is a disabled "coming soon" placeholder on every
  page — give it a real URL or remove it.

---

## Owner / contact
Juan Camilo Echeverry Marmolejo · camiloem.1105@gmail.com · Cali, Colombia
Live domain (intended): https://www.camiloecheverry.com/
