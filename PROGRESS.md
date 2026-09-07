# Afsha Hossain Website — Progress Log

Author landing site built from the Figma file `PY5BluX8N4di60mMRlCr9g` (page **Home**, node `9:1015`).
Stack: **Vue 3 + Vite**, plain CSS with design tokens. Dev server: `npm run dev` → http://localhost:5173.

See also: `DESIGN_SPEC.md` (tokens, section-by-section, asset manifest), `README.md` (run/structure).

---

## Session — 2026-09-07

### 1. Design read + project scaffold
- Pulled the Figma "Home" frame via the Figma MCP (`get_design_context`, `get_metadata`, `download_assets`).
- Extracted design tokens → `src/assets/styles/tokens.css` (Brand 50–900 peach→maroon ramp, accents, yellow tag colours).
- Downloaded + web-optimised all imagery into `public/images/` (photos → JPEG, wreath PNGs trimmed to 1500 px, piano exported as transparent SVG). `public/images/` ≈ 4 MB.
- Scaffolded Vue 3 + Vite: `index.html`, `vite.config.js` (`@` alias), `src/main.js` (+ `v-reveal` scroll-in directive), `src/App.vue`.
- Central copy file: `src/data/content.js` (single source of truth for all text).

### 2. Sections built (all 10)
`components/layout/` — `SiteNavbar.vue`, `SiteFooter.vue`
`components/sections/` — Hero, FeaturedWork, MeetAfsha, PhotoStrip, WritersCentre, ParentsJourney, BeyondWriting, FlowTurnerCta
`components/base/` — `BaseButton`, `SectionLabel`, `StarIcon`, `DecorField`
- Reveal-on-scroll animations (`v-reveal`), reduced-motion safe.
- Reference renders saved to `design-reference/`.

### 3. Fonts (exact, client-supplied)
- `Boska` (woff2) + `Helvetica Neue` (OTF) wired via `@font-face` from `src/assets/fonts/`.
- `Playfair Display` / `Manrope` / `Poppins` from Google Fonts (`index.html`).
- Recorded `overused-font=helvetica` as an intentional exception in `.impeccable/config.json` (it's the licensed typeface from the design).
- Dropped the unused Helvetica Neue **Bold** face; original client font package left at `src/assets/Fonts/` (unused by the build).

### 4. Image holders → ellipses
Matched Figma: hero portrait, "Meet Afsha" portrait, photo-strip photos and the footer portrait are all `border-radius: 50%` on non-square boxes (true ellipses), with a thin `brand-500` outline on the two large ones. Hero portrait gained a **4-piece floral wreath** wrapping all four sides. Book covers / rhyme-book image stay rounded rectangles.

### 5. Gradient backgrounds — rebuilt from exact Figma values
`DecorField.vue` reconstructed from the Figma decoration group (`Frame 427319468`):
- `#F5E793` @ 16 % wash,
- two chevron "wave" ribbon SVGs shipped as-is (`public/assets/svg/bg-waves-{cool,warm}.svg`, ~800 B each), blurred into a soft drift,
- four pastel corner blobs (peach TL, mint TR, green BL, pink BR) rebuilt as blurred CSS radial-gradients.

### 6. "Block design" for the gradient sections
- **Hero, Meet Afsha, Beyond Writing** each render as **one rounded `.gradient-block`** carrying its own `DecorField` gradient, so the page background shows around it and it reads as a segregated block.
  (First attempt was a two-panel "bento" split — reverted per feedback; the correct pattern is one contained block.)
- **CTA (Flow Turner)** confirmed against Figma to be **not** a gradient block → plain page background.
- Blocks then made **near full-bleed**: `margin-inline: 24px` (14 px < 420 px), no max-width cap; inner content stays capped at `--content-max` and centred.

### 7. "Afsha's Journey" → card carousel
Built from the new Figma strip node `62:85` (`get_design_context`).
- **8 cards** (one per chapter): text ／ illustration, each with its **exact per-card pastel background + text colour** from Figma.
- 7 unique illustrations → `public/images/journey/` (card 8 reuses card 6, as in Figma). Cards 3 & 5 were vertical diptychs — cropped to the single scene Figma shows.
- Scroll-snap viewport (native swipe) + **two chevron nav buttons** (`ChevronIcon.vue`) with a `n / 8` counter; arrow-key support.
- Card blocks made **near full-bleed** to match the gradient sections (`margin-inline: 24px`; content capped + centred).
- **Infinite loop**: renders 3 back-to-back copies, stays in the middle copy, silently re-centres after each move/swipe — no dead ends, no visible jump. Nav buttons no longer disable at the ends.

### 8. Footer content
- Contact email → `nahidsain73@gmail.com` (also the `mailto:` link).
- Credit → "All Rights Reserved | Developed by **Bitflex Australia**".

### 9. Global background colour
- `--page-bg` → **`#FFF9F5`** (from the Figma frame background).

### 10. About ↔ ticker overlap
- Photo-strip band is now full-bleed salmon (`brand-300`), `position: relative; z-index: 2`, pulled up with a negative margin so it **overlaps the bottom of the About gradient block** — the block's rounded bottom corners peek above the band (per Figma).

### 11. Beyond Writing CTAs
- Two buttons: **Watch on Youtube** → `https://www.youtube.com/channel/UCLm7umXnn4ftzrLIsDDm6TQ` (primary),
  **Listen on iCloud** → `https://www.icloud.com/notes/0capDW4YKif-6C-KBcXwcYpHg#MY_NAME_IS_AFSHA` (secondary). Both open in a new tab.
- Removed the **"Enter Flow's World"** CTA from the Flow Turner section (only "Read an Excerpt" remains).

### 12. Back-to-top button
- `BackToTop.vue` (mounted in `App.vue`): fixed dark circle, up-chevron, bottom-right. Fades in past ~1.4 viewports, smooth-scrolls to top. Sits below the modal's top layer.

### 13. "Read an Excerpt" → Foreword modal
- `BaseModal.vue` — native `<dialog>`; ESC / X / backdrop close, dimmed blurred backdrop, body scroll-lock, centred, internal scroll if tall.
- Content follows the **Featured Work** layout: **left** = eyebrow, "Foreword" heading, the full foreword paragraph (Boska), signature block (**Afsha Hossain** / Queensland, Australia / `afshahossain13@gmail.com`); **right** = book cover. Cover moves to the top on mobile.

### 14. Navbar — overlap + scroll behaviour
- `position: fixed`, transparent at the top so it **overlaps the hero** gradient block (no bar background, no divider). Hero block top padding increased so content clears it.
- Three states: `nav--top` (transparent, in view, scrolls away with the page) · `nav--hidden` (slides out on scroll-**down**) · `nav--shown` (slides back in, solid + hairline on scroll-**up**). rAF-throttled listener; `prefers-reduced-motion` safe. Opening the mobile menu forces `shown`.
- Hero title **"Stories that Stay with you."** forced to one line (`white-space: nowrap`, removed the `12ch` cap; font `clamp(1.3rem → 3.5rem)` so it fits 390 → 1280 with no overflow).

### 15. Navbar top gap (hero view only)
- **`nav--top`** floats **24 px** below the window top (`translateY(24px)`).
- **`nav--shown`** (scrolled) attaches to `top: 0`.
- **`nav--hidden`** slides fully off the top.
- The `transform` transition animates the 24 px → 0 shift smoothly.

---

## Still open / needs client input
- Action buttons "Buy Now", "Read an Excerpt" internal link, legal links point to `#`.
- Helvetica Neue ships as OTF (~890 KB for two weights) — convert Roman + Medium to woff2 before launch.
- Journey card 5 & 7 text has minor grammar quirks — kept **verbatim** from Figma; confirm before editing.
- `src/assets/Fonts/` (capital F) is the raw client font package, unused by the build — safe to delete once confirmed.

## How to run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview
```
