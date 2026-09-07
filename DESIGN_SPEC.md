# Afsha Hossain — Author Website · Design Spec

Source: Figma `PY5BluX8N4di60mMRlCr9g` → page **Home** (node `9:1015`), 1280 px wide, ~5606 px tall.
Single long-scroll landing page. Full render: `design-reference/home-full-page.png`.
Per-section renders are in `design-reference/section-*.png`.

---

## 1. Design tokens (from Figma variables)

### Color
| Token | Hex | Use |
|---|---|---|
| Page bg | `#fff9f5` | site background (`--page-bg`) |
| Brand/50  | `#ffecdf` | light pill buttons, tag chips |
| Brand/100 | `#ffd9ca` | hairline dividers, soft borders |
| Brand/200 | `#f4c4b2` | photo-strip band background |
| Brand/300 | `#e7b09a` | gradient-blob mid |
| Brand/400 | `#cb8e76` | — |
| Brand/500 | `#b26c50` | **primary brand** — stars, small caps labels, links |
| Brand/600 | `#964b2c` | body copy on peach (Boska paragraphs) |
| Brand/700 | `#762e0c` | headings (maroon) |
| Brand/800 | `#551200` | — |
| Brand/900 | `#330000` | **footer background** |
| Accent/500 | `#6c6c6d` | secondary text |
| Accent/600 | `#545454` | subheadings |
| Accent/800 | `#262627` | dark pill buttons, near-black text |
| White | `#fafafa` / Accent White `#f9f9f9` | button text, cards |
| Yellow/50 | `#fff66b` | "FANTASY MYSTERY" tag chip background |
| Yellow/700 | `#771600` | tag chip text |

### Type ramp
Fonts referenced by the file (need to be sourced / substituted):
- **Helvetica Neue** — H1 (`48/1.5`, ls -2, weight 500), Subheading (`24/1.5`, ls -1), buttons (`14`, weight 500, ls -0.5). → substitute: system `-apple-system, "Helvetica Neue", Arial`.
- **Boska** (serif display) — Paragraph 1 `20/1.5` medium, Paragraph 2 `18/1.5` medium. Commercial font. → substitute: **Fraunces** or **Playfair Display** if Boska licence unavailable.
- **Playfair Display** — Subhead 1 `28` medium (available on Google Fonts).
- **Manrope** — Para 2 regular `18/1.5` (Google Fonts).
- **Poppins** — Body `14/1.5` (Google Fonts).
- Logo wordmark "AH" is hand-lettered → shipped as SVG (`logo-wordmark.svg`), not a font.

### Layout
- Max content width **1028 px**, centred; outer frame 1232 px; page gutter ≈ **102 px** desktop.
- Section label pattern: centred row of `— ✦ Label ✦ —` (brand-500 hairlines + `star.svg` + small-caps label).
- Buttons: pill, radius ~24px, height 46–48px.
  - **Primary**: bg `#262627`, text `#fafafa`.
  - **Secondary**: bg `#ffecdf`, text `#b26c50` (some show a ↗ arrow).
- Decorative background: soft peach **radial gradient blobs** (Brand 50→300) + faint diagonal stripe texture behind Hero, Meet, Beyond, CTA. Recreate in CSS (`radial-gradient` + low-opacity repeating-linear-gradient) — not exported.

---

## 2. Section-by-section

| # | Section (node) | Content | Assets |
|---|---|---|---|
| 0 | **Navbar** (`9:1019`) | hamburger · centred "AH" logo + "Afsha Hossain" · `Explore Books` primary pill. **Overlaps the hero** (transparent at page top); scrolls away with the page; hides on scroll-down, slides back in solid on scroll-up (`nav--top` / `nav--hidden` / `nav--shown`). | `logo-wordmark.svg` |
| 1 | **Hero** (`16:2671`) | eyebrow `AUTHOR • WRITER • STORYTELLER` · H1 "Stories that Stay with you." · circular portrait framed by line-art floral wreath · intro line · buttons `Explore My Books`, `About the Author` | `afsha-hero-portrait.png`, `floral-wreath-light.jpg` (frame; `-dark.png` = alt), `star.svg` |
| 2 | **Featured Work** (`9:1034`) | book cover · `FANTASY MYSTERY` chip · H1 "The Life of Flow Turner" · subtitle · Boska description · price/publisher block w/ small logo · buttons `Buy Now`, `Discover the Book` | `book-cover-flow-turner.png`, `creative-dhaka-logo.svg`, `book-back-matter.png` (ISBN/colophon source) |
| 3 | **Meet Afsha Hossain** (`44:3281`) | "Hi, my name is, / Afsha Hossain" · bio · `Discover the Book` · tall portrait (right) | `afsha-portrait-tablet.png` |
| 4 | **Photo strip** (`44:3191`) | full-bleed salmon (`brand-300`) band, marquee of circular reading photos + stars; pulled up (negative margin) to **overlap the bottom of the About block**, per Figma | `gallery/reading-01…11`, `star.svg` (large) |
| 5 | **Queensland Writers Centre** (`9:1092`) | circular QWC logo · 3 paragraphs · link `queenslandwriters.org.au/youthwriting` · `Read Afsha's Story` | `qwc-logo.svg` |
| 6 | **Parents' Journey** (`49:144` → strip `62:85`) | centred Boska intro (in `.container`) + a near-full-bleed **8-card carousel** (`margin-inline:24px`, like the gradient blocks): each card's pastel bg spans wide, content capped at `--content-max`; text ／ illustration, per-card bg + text colour from Figma; prev/next chevron buttons + `n / 8` counter below. Scroll-snap viewport (native swipe) synced to the buttons. | `journey/journey-01…07-*.jpg` (7 unique; card 8 reuses `journey-06`) |
| 7 | **Beyond Writing** (`46:4528`) | "When I'm not writing, I'm playing." · YouTube/piano copy · caption · line-art grand piano illustration · `Watch on YouTube` ↗ | `piano-illustration.svg` |
| 8 | **CTA — Flow Turner** (`9:1139`) | H1 "A life. A mystery. A world waiting to unfold." · small book cover · 2 lines + paragraph · `Read an Excerpt` → opens the **Foreword modal** (`BaseModal.vue`; Featured-Work layout — foreword text left, cover right; ESC / X / backdrop close, scroll-lock) | `book-cover-flow-turner.png` (reuse) |
| — | **Back-to-top** (`BackToTop.vue`, in `App.vue`) | fixed dark circle, up chevron, bottom-right; fades in past ~1.4 viewports, smooth-scrolls to top | — |
| 9 | **Footer** (`9:1159`) | bg `#330000` · portrait + "AH" wordmark + "Afsha Hossain" · `Contact` + email `aab.mail@actionaid.org` · diamond-capped divider · `All Rights Reserved | Developed by BitFlex` | `logo-wordmark.svg`, `divider-line.svg`, `afsha-hero-portrait.png` |

### Copy notes / corrections seen in the file
- Hero intro: "explores Fantasy **Mistry**" — typo for "Mystery".
- Featured: `Price: AU$7.95` · author site `www.ahereader.com.au` · Publisher `Creative Dhaka Publications` / `www.creativedhaka.com` · `Copyright © 2026` · `Privacy Policy` `Terms of Use`.
- Book ISBN (from back-matter image): `978-984-8071-89-2`.
- Book banner: "Stonewick Academy of the Unseen".

---

## 3. Asset manifest

### `public/images/`
| File | Px | Notes |
|---|---|---|
| `afsha-hero-portrait.png` | 936×1589 | hero + footer portrait |
| `afsha-portrait-tablet.png` | 1200×1600 | "Meet Afsha" section |
| `book-cover-flow-turner.png` | 760×1024 | full illustrated cover |
| `book-back-matter.png` | 1242×1020 | source only — AH monogram + Creative Dhaka logo + ISBN barcode + price text; crop as needed |
| `the-little-rhyme-book.png` | 1024×768 | parents section illustration |
| `floral-wreath-light.jpg` | 4096² | ink floral wreath, white bg — hero photo frame |
| `floral-wreath-dark.png` | 4096² | same wreath, dark/transparent — alt for light bg |
| `gallery/reading-01…11` | ~1200×1600 / 4:3 | candid photos of Afsha reading; strip loops them |

### `src/assets/svg/`
| File | Px | Notes |
|---|---|---|
| `logo-wordmark.svg` | 108×56 | "AH" hand-lettered monogram (navbar + footer). Fill is baked dark — duplicate + recolor for footer (cream) if needed |
| `star.svg` | 33×33 | 8-point sparkle, `fill #B26C50`. Section labels (16px) + photo strip (42px) |
| `qwc-logo.svg` | 134×120 | Queensland Writers Centre circular logo (traced) |
| `piano-illustration.svg` | 506×506 | grand-piano line art (single combined SVG, ~208 KB) |
| `creative-dhaka-logo.svg` | 56×56 | publisher logo (traced) — featured price block |
| `divider-line.svg` | 1082×6 | thin line with diamond end-caps, `fill #FFD9CA` — footer |

### Section backdrop (`DecorField.vue`) — from Figma "Frame 427319468"
Not gradients — flat shapes at low opacity, blurred:
- **Wash:** `#F5E793` @ 16% flat overlay.
- **Corner blobs (`Group 3`):** 4 pastel quarter-wedges @ ~56% — peach `#F9CCB9` TL, mint `#B9F9F1` TR, green `#B9F9BD` BL, pink `#F9B9F2` BR. Rebuilt as blurred CSS radial-gradients.
- **Wave ribbons (`Group 1` cool pinks `#F5C0FF→#FFC0CB` @ 42% · `Group 2` warm ambers `#FBE2A7→#FAB09E` @ 32%):** shipped as the original SVGs (`public/assets/svg/bg-waves-{cool,warm}.svg`), heavily blurred so they read as soft colour drift.
- `variant="warm"` = full stack (Hero, CTA); `variant="soft"` = wash + blobs only (Meet, Beyond).

### Image masks
All portrait/photo holders are **ellipses** (`border-radius:50%` on a non-square box), per Figma:
Hero portrait 168:286 (+ 4-piece floral wreath), Meet portrait 486:648, photo-strip 3:4, footer 46:78. Thin `brand-500` outline on the two large ones. Book covers & the rhyme-book image stay rounded rectangles.

### Gradient blocks (Hero, Meet Afsha, Beyond Writing)
Per Figma, each of these sections is **one rounded block** (`.gradient-block`) — near full-bleed
(`margin-inline: 24px`, 14px under 420px), `clamp(20–36px)` radius, `clamp(44–84px)` padding —
carrying its own `DecorField` gradient. Content inside is capped at `--content-max` and centred. The page background shows around the block,
so it reads as a segregated block section. Content inside keeps the normal layout (Hero centred;
Meet & Beyond = text ／ image two-column). All other sections sit on the plain page background.
The CTA section is **not** a gradient block (confirmed against Figma).

### Also build with CSS
Section-label hairlines, pill buttons, tag chips.

### Still needed / decisions
- **Boska** & **Helvetica Neue** are licensed fonts — confirm licence or approve substitutes (Fraunces / Playfair for Boska; system stack for Helvetica Neue).
- `floral-wreath-*` are 4096² (~3–8 MB each) — downscale to ~1200px for web before shipping.
- `piano-illustration.svg` is heavy (208 KB, ~1000 paths) — consider exporting as PNG instead, or simplify.
- Footer email `aab.mail@actionaid.org` and "Developed by BitFlex" look like placeholders — confirm real values.
- Reading-photo strip: 11 slots in Figma but several repeat; confirm final set.
