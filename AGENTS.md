## Project

Restaurant website for **The Belle Epoque Cafe**, located in downtown St. Joseph. The site should evoke classical French elegance — think Belle Epoque era, Palace of Versailles, Art Nouveau detailing.

## Design System

### Aesthetic
Classical French elegance. Warm, aged tones. Ornamental details (diamond rules, fine borders). Nothing stark, flat, or modern. Typography-forward.

### Colors

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#F5F0E8` | Parchment — page background |
| `--color-surface` | `#EDE5D0` | Cream — cards, sections |
| `--color-text` | `#1C1209` | Espresso — primary text |
| `--color-text-muted` | `#6B4F3A` | Umber — secondary/subtle text |
| `--color-gold` | `#B8963E` | Antique Gold — used sparingly |
| `--color-gold-light` | `#D4AF6A` | Champagne — hover states, fine details |
| `--color-purple` | `#4A1F6B` | Royal Purple — primary accent |
| `--color-purple-dark` | `#2E1245` | Violet Shadow — depth, overlays |
| `--color-border` | `#C9B99A` | Bisque — ornamental dividers, rules |

Gold is used sparingly — borders, hover underlines, ornamental diamonds. Purple is the primary accent color for interactive elements and headings.

### Typography

| Token | Font | Role |
|---|---|---|
| `--font-display` | Cormorant Garamond | Headings, display text |
| `--font-body` | EB Garamond | Body copy, paragraphs |
| `--font-label` | Cinzel | Nav, labels, captions — always uppercase with wide tracking |

All three are loaded from Google Fonts in `Layout.astro`. Scale is defined as CSS custom properties (`--text-display`, `--text-h1`, `--text-h2`, `--text-h3`, `--text-body`, `--text-caption`, `--text-label`) in `src/styles/global.css`.

### Ornamental Details
- Horizontal rules use a centered gold diamond flanked by `--color-border` lines. See `.header-rule` / `.footer-rule` in `Header.astro` and `Footer.astro`.
- Nav links use a gold underline that animates in via `scaleX` on hover.
- Avoid heavy drop shadows or rounded corners — prefer fine lines and flat ornament.

## Structure

```
src/
  components/
    Header.astro       — Three-column grid: left nav | logo | right nav
    Footer.astro       — Centered: logo, Facebook button, copyright
    FacebookButton.astro — Links to https://www.facebook.com/thecafebelleepoque
  layouts/
    Layout.astro       — Base layout: imports global CSS, renders Header + Footer
  pages/
    index.astro
  styles/
    global.css         — CSS custom properties, reset, base element styles
public/
  belle-epoque-logo-transparent.webp  — Primary logo (Art Nouveau lettering)
```

## Conventions

- **Package manager:** pnpm
- **No CSS frameworks** — hand-crafted CSS with custom properties only. No Tailwind.
- All colors and type sizes come from CSS custom properties defined in `global.css`. Never use hard-coded hex values or font names in component styles.
- The logo image is used in both the Header and Footer. In the header it scales via `clamp(200px, 22vw, 320px)`; in the footer it is smaller and at reduced opacity.
- Pages are planned: Home, Menu, About / Our Story, Reservations, Visit Us.

## Development

When starting the dev server, use background mode:

```
pnpm astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
