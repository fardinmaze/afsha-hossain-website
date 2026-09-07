# Afsha Hossain — Author Website

Single-page author site built from the Figma design (`Afsha-Hossain`, page **Home**).
Stack: **Vue 3 + Vite**, no UI framework — plain CSS with design tokens.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
```

## Structure

```
public/
  images/            raster photos, book covers, illustrations (+ gallery/ strip)
  assets/svg/        SVGs referenced by <img> (qwc, publisher logo)
src/
  assets/
    fonts/           licensed webfonts actually used (Boska, Helvetica Neue)
    Fonts/           ← original client-supplied font package (unused by the build; keep or delete)
    styles/          fonts.css · tokens.css · base.css
    svg/             logo-wordmark.svg (inlined via ?raw), star, divider (reference)
  components/
    base/            BaseButton · SectionLabel · StarIcon · DecorField
    layout/          SiteNavbar · SiteFooter
    sections/        Hero · FeaturedWork · MeetAfsha · PhotoStrip ·
                     WritersCentre · ParentsJourney · BeyondWriting · FlowTurnerCta
  data/content.js    ALL page copy (single source of truth)
  directives/reveal.js  v-reveal scroll-in animation
design-reference/    full-page + per-section renders from Figma
DESIGN_SPEC.md        tokens, section breakdown, asset manifest
```

## Fonts

| Family | Source | Used for |
|---|---|---|
| Helvetica Neue LT | local (`src/assets/fonts/helvetica-neue`, OTF) | headings, buttons, UI |
| Boska | local (`src/assets/fonts/boska`, woff2/woff) | serif paragraphs, pull quotes |
| Playfair Display · Manrope · Poppins | Google Fonts (`index.html`) | footer heading · body sans · captions/labels |

> Helvetica Neue ships as OTF (~890 KB for the two weights). Converting Roman + Medium to
> woff2 would cut that to ~120 KB — worth doing before launch.

## Still open

- **Footer** contact details, developer credit and social links are placeholders in
  `src/data/content.js` (`footer` export) — awaiting final values.
- "Buy Now", "Read an Excerpt", "Watch on YouTube", legal links point to `#`.
- `src/assets/Fonts/` (capital F) is the raw client package; the build only uses the
  trimmed copies in `src/assets/fonts/`. Safe to delete once confirmed.
