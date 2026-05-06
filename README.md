# TUTTO LEGNO — Design System

## Brand Overview

**TUTTO LEGNO** is a premium solid-wood carpentry company based in Abidjan, Côte d'Ivoire. The brand targets high-end real estate developers and private villa builders, positioning itself at the intersection of Italian luxury furniture aesthetics (Roche Bobois, Natuzzi, BoConcept) and African craftsmanship.

**Slogan:** "Nous faisons de vos rêves une réalité"

**Positioning:** Haut de gamme, bois massif, artisanat premium. Every visual decision must elevate wood as the hero material.

---

## Files & Structure

```
README.md               ← This file
SKILL.md                ← Agent skill manifest
colors_and_type.css     ← All CSS variables (colors + typography tokens)
assets/                 ← Logos, brand visuals, texture placeholders
preview/                ← Design system card HTML files (shown in DS tab)
ui_kits/website/        ← High-fidelity website UI kit
```

---

## Content Fundamentals

- **Language:** French (primary), English acceptable for UI labels
- **Tone:** Elegant, measured, confident. Never brash or promotional.
- **Copy style:** Short sentences. Luxurious understatement. "Nous faisons de vos rêves une réalité" — not "Découvrez nos incroyables produits!"
- **Casing:** Title case for headings, sentence case for body. ALL CAPS used sparingly for labels and badges only.
- **Emoji:** Never used. Zero tolerance.
- **Numbers:** Written in full when decorative ("Vingt ans d'expertise"), numerals when functional ("42 m²").
- **Voice:** First-person plural ("Nous créons", "Nos réalisations") — the house speaks as a collective of artisans.

---

## Visual Foundations

### Colors
- **Primary:** Rich warm brown — chocolat chaud / bois massif. 5-step scale from pale linen to deep espresso.
- **Neutral:** Anthracite grey scale — 5 steps from pearl to deep charcoal.
- **Backgrounds:** Off-white / linen — never pure white (too clinical).
- **Text:** Near-black — deep espresso, not #000000.
- **Accent:** Warm gold — very subtle, used only for decorative separators and hover states.
- No vivid colors whatsoever.

### Typography
- **Font:** Montserrat (Google Fonts) — Bold (700) for headings, Regular (400) for body, Light (300) for accroches/sub-headings.
- **Scale:** Large and generous. Headings command space.
- **Letter-spacing:** Generous tracking on uppercase labels (+0.15em). Tight or normal on body.
- **Line-height:** 1.6 for body, 1.1–1.2 for display headings.

### Spacing & Layout
- **Grid:** 12-column, 80px gutters on desktop. Generous whitespace is a luxury signal.
- **Sections:** Full-bleed, alternating between off-white and very light warm grey.
- **Cards:** No border-radius on product cards (sharp edges = precision craft). Subtle box-shadow (0 2px 24px rgba warm brown 8%).
- **Corner radius:** 0px for cards and images (editorial, sharp). 2px max for buttons.

### Imagery
- **Color vibe:** Warm, golden-hour. Grain and texture are welcome.
- **Always full-bleed or large format.** Wood grain should be visible.
- **Placeholders:** Warm striped SVG with monospace labels.
- **Never:** Cold, desaturated, or clinical photography.

### Animations
- **Transitions:** Slow, deliberate. 400–600ms ease-out.
- **Hover (images):** Very subtle scale (1.03) with opacity 0.92.
- **Hover (buttons):** Background darkens slightly, no movement.
- **No bounces, no springy effects.** Luxury = restraint.

### Iconography
- **System:** Minimal. Prefer text labels over icons wherever possible.
- **When used:** Thin-stroke SVG line icons only (e.g. Feather / Lucide — loaded from CDN).
- **Never:** Emoji, filled icons, colorful icons, icon fonts with glyph hacks.
- **Size:** 20–24px, stroke 1.5px, color = current text color.

---

## UI Kits

- `ui_kits/website/index.html` — Full website prototype (homepage, nav, product grid, contact section)

---

## File Index

| Fichier | Description |
|---|---|
| `README.md` | Ce fichier — contexte marque + guide complet |
| `SKILL.md` | Manifest skill agent |
| `colors_and_type.css` | Toutes les CSS vars couleurs + typographie |
| `preview/colors-brown.html` | Gamme marron 6 nuances |
| `preview/colors-grey.html` | Gamme gris 6 nuances |
| `preview/colors-semantic.html` | Couleurs sémantiques + accent or |
| `preview/type-scale.html` | Échelle typographique complète |
| `preview/type-pairs.html` | Paires titre + accroche |
| `preview/spacing-tokens.html` | Radius, shadows, transitions |
| `preview/comp-buttons.html` | Tous les états de boutons |
| `preview/comp-badges.html` | Badges & tags |
| `preview/comp-cards.html` | Cartes produit (vertical, horizontal, dark) |
| `preview/comp-navbar.html` | Barre de navigation (3 variantes) |
| `preview/social-instagram.html` | Post Instagram 1080×1080 (2 variantes) |
| `preview/social-story.html` | Story 1080×1920 (2 variantes) |
| `preview/social-linkedin.html` | Bannière LinkedIn + photos de profil |
| `preview/brand-rules.html` | Règles d'utilisation dos & don'ts |
| `ui_kits/website/index.html` | **UI Kit website — prototype interactif complet** |

---

## Sources

No external codebase or Figma link was provided. This design system was created from the brand brief supplied by the client. For future iterations, provide:
- Logo files (SVG preferred)
- Photography library
- Reference Figma links
