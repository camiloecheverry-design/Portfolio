# Camilo Echeverry — Portfolio

Personal portfolio website for **Juan Camilo Echeverry Marmolejo**, a UX/UI &
product designer based in Cali, Colombia. A quiet, high-confidence single-author
site: case studies, résumé, writing, and a working contact form on a dark,
single-accent design system.

🔗 **Live (intended):** https://www.camiloecheverry.com/

---

## Tech

Plain **HTML + CSS + vanilla JavaScript**. No framework, no build step, no
dependencies to install — every page is a static file you can open directly in a
browser. The only runtime dependencies load from CDN (Lucide icons, and React +
Babel for the home-page Tweaks panel only).

## Run locally

Just open `index.html` in a browser. Or, for clean relative paths, serve the
folder with any static server:

```bash
# Python
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy

It's a static site, so it hosts anywhere — **GitHub Pages**, Netlify, Vercel,
Cloudflare Pages, etc. For GitHub Pages: push to `main`, then **Settings → Pages
→ deploy from `main` / root**. The custom `404.html` and the contact form work
as-is with no extra configuration.

---

## Structure

```
index.html      Home — hero, about teaser, experience, projects, services, contact
about.html      About — bio, academic background, differentiators, achievements, tools
resume.html     Full résumé — experience, education, certifications, skills
blog.html       Blog index — featured post + filterable card grid
article.html    A full blog article
contact.html    Contact — methods, FAQ, contact form
404.html        Branded not-found page
robots.txt / sitemap.xml

assets/
  css/colors_and_type.css   Design-system tokens + type + @font-face
  css/site.css              All site & component styling
  css/fonts/                Self-hosted Outfit + Inter (woff2)
  js/site.js                Shared interactions (nav, reveals, carousel, modal, form)
  js/image-slot.js          <image-slot> drag-and-drop photo component
  js/tweaks-panel.jsx       Home-page design preview panel
  img/                      Favicon + per-page Open Graph images
  files/                    CV PDF
```

## Design system

Dark-only, navy canvas (`--canvas` #000E1F) with a single electric-blue accent
(`--primary` #006EF5). Display type in **Outfit**, body in **Inter**. Depth comes
from stepped navy surfaces and 1px hairline borders rather than heavy shadows,
on a strict 8-point spacing grid. All values live as CSS custom properties in
`assets/css/colors_and_type.css` — reuse `var(--token)` rather than hardcoding
colors. Icons are [Lucide](https://lucide.dev) (1.5px stroke, line only).

## Notable details

- **Contact form** — validates client-side and submits via
  [Web3Forms](https://web3forms.com) straight to the owner's inbox, with a spam
  honeypot and a `mailto:` fallback. The access key sits near the top of the
  contact-form section in `assets/js/site.js`; it's safe to expose client-side.
- **No font flash** — fonts are preloaded and the page is held for a beat until
  `document.fonts.ready`, so text never jumps from a fallback face.
- **Editable photos** — portraits use a small `<image-slot>` web component;
  dropped-in images persist in `.image-slots.state.json`.

## Credits

- Fonts: [Outfit](https://fonts.google.com/specimen/Outfit) &
  [Inter](https://fonts.google.com/specimen/Inter) (OFL, self-hosted)
- Icons: [Lucide](https://lucide.dev) (ISC)

## Contact

Juan Camilo Echeverry Marmolejo · camiloem.1105@gmail.com · Cali, Colombia
[LinkedIn](https://www.linkedin.com/in/juancamiloecheverry) ·
[Behance](https://www.behance.net/Camilo-Echeverry)

---

© 2026 Juan Camilo Echeverry Marmolejo. All rights reserved.
