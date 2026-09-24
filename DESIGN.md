---
name: Brian Norris
description: Typesetter's studio — Termina, serif reading, mono tools on cream laid paper.
colors:
  ink: "#12414f"
  paper: "#fef9ef"
  mute: "#47606a"
  line: "rgba(18, 65, 79, 0.16)"
  card: "#fffdf7"
  sea-glass: "#227c9d"
  vermilion: "#fe6d73"
  on-sea-glass: "#fef9ef"
  vermilion-ink: "#b8323c"
  vermilion-soft: "#ffe3e4"
  on-vermilion: "#3d0d12"
  paper-night: "#06232c"
  mute-night: "#8fb3bd"
  line-night: "rgba(254, 249, 239, 0.18)"
  card-night: "#0d3543"
  sea-glass-night: "#17c3b2"
  vermilion-ink-night: "#ff9b9f"
  vermilion-soft-night: "#3a1c1e"
typography:
  display:
    fontFamily: "termina, system-ui, sans-serif"
    fontSize: "clamp(34px, 7vw, 112px)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "termina, system-ui, sans-serif"
    fontSize: "clamp(26px, 3.4vw, 44px)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "normal"
  title:
    fontFamily: "termina, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "normal"
  body:
    fontFamily: "Roboto Serif, Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.58
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.16em"
rounded:
  sm: "3px"
  md: "4px"
  pill: "999px"
  full: "50%"
spacing:
  page-inline: "clamp(16px, 4vw, 56px)"
  section-y: "clamp(40px, 6vw, 88px)"
  sm: "8px"
  md: "16px"
  lg: "28px"
components:
  button-primary:
    backgroundColor: "{colors.sea-glass}"
    textColor: "{colors.on-sea-glass}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.sea-glass}"
    textColor: "{colors.on-sea-glass}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
  button-ghost-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  filter-on:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "18px"
  skill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "clamp(20px, 2.4vw, 30px)"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.mute}"
    rounded: "{rounded.sm}"
    padding: "3px 8px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0 11px"
    height: "44px"
---

# Design System: Brian Norris

## Overview

**Creative North Star: "The Typesetter's Studio"**

A personal site set like a composed spread. Termina builds the architecture of the page; Roboto Serif does the reading; JetBrains Mono is the tools left on the desk — kickers, meta, labels, the blinking caret. It is paper, not a product UI. The implements annotate the work rather than chrome it.

Density is editorial. One very large display size, hairline rules, auto-fit grids, and cream laid ground with a print-pattern grain. Personality lives in the pairing and the texture. Actions are soft pills; surfaces are quiet 4px rectangles. Hover lifts a card a few pixels and turns its border to ink. Nothing casts a shadow.

Visual rejections already in the code: no drop shadows, no glass, no gradient heroes, no tech-startup chrome. Empty image frames stay dashed until a real asset exists. Dark theme inverts the stock (deep teal paper, cream ink) and brightens Sea Glass; the print grain multiplies into the night paper.

**Key Characteristics:**

- Cream laid paper, Deep Teal Ink, Sea Glass actions, scarce Vermilion Spark
- Three type voices only (Termina, Roboto Serif, JetBrains Mono)
- Flat hairline surfaces; lift-on-hover is the only physical move
- Print-pattern grain as paper, not decoration layered on top
- Honest dashed slots where images are missing

## Colors

Warm stock with teal ink. Sea Glass is the working accent. Vermilion is a spark that may grow, but stays rare.

### Primary

- **Sea Glass** (`sea-glass` / `sea-glass-night`): Filled primary actions, in-headline italic accents, default links, work-grid meta, case kickers, resume section labels, and hover on next-case links. Light value is the coastal teal; night value is the brighter tide-pool teal so it still reads on deep paper. On-color is cream in light and night paper in dark (`on-sea-glass` / `paper-night`).

### Secondary

- **Vermilion Spark** (`vermilion`): Theme-toggle dot, footer caret, kicker dots, code highlights, philosophy numerals. Tiny marks are the default. Occasional larger fills are allowed if they stay scarce. Not the default primary-action fill.

- **Vermilion Ink** (`vermilion-ink` / `vermilion-ink-night`): Home card meta and other small labels that need warmth without a fill. Softer wash (`vermilion-soft`) exists for rare tinted grounds.

### Neutral

- **Deep Teal Ink** (`ink`): Body text, display type, wordmark, hairline source. Becomes cream in night theme (same token `--ink` swaps).
- **Cream Laid** (`paper`): Page ground. Night: `paper-night`.
- **Mute** (`mute` / `mute-night`): Secondary reading, labels at rest, skill list items, job blurbs.
- **Line** (`line` / `line-night`): 1px rules, card edges, ghost-button stroke. Always a transparent ink or cream, never a gray imported from another palette.
- **Card** (`card` / `card-night`): Recessed sheets slightly off the page ground (work cards, contact, code, portrait frame).

**The Rare Vermilion Rule.** Vermilion stays scarce. Tiny marks are the default; occasional larger fills are allowed. Sea Glass remains the primary action fill.

**The Two-Stock Rule.** Light is teal ink on cream laid. Dark is cream ink on deep teal paper. Do not introduce a third ground (pure white, cool gray, or black).

## Typography

**Display Font:** Termina (with system-ui, sans-serif)
**Body Font:** Roboto Serif (with Georgia, serif)
**Label/Mono Font:** JetBrains Mono (monospace)

**Character:** A typesetter's pairing. Geometric display that can go black (900) without looking like a logo font; a literary serif for sentences; a working mono for the desk tools. The italic serif, in Sea Glass, is the only flourish inside a Termina headline.

### Hierarchy

- **Display** (900, `clamp(34px, 7vw, 112px)`, line-height 1 / 0.88 on inner pages): Home hero, work/about/case/404 titles. One size family, not a cluster of competing heroes.
- **Headline** (900, section titles `clamp(26px, 3.4vw, 44px)`; case splits `clamp(22px, 2.4vw, 32px)`): Section architecture. Sticky on case-study left columns.
- **Title** (500–700, 17–23px, line-height ~1.12): Card titles, skill headings, job titles, contact values. Weight 500 at rest; 700 when the line has to hold — resume jobs, the home skill titles (on a full-bleed 1px ink rule), and the home invite values (on a 1px ink underline).
- **Body** (400, 15–17.5px, line-height 1.45–1.62, measure ~46–70ch): Lede, about prose, case copy, skill items, job blurbs. Serif only — never Termina for paragraphs.
- **Label** (400, 12px, letter-spacing 0.12–0.24em, uppercase): Kickers, nav-adjacent tools, card meta, footer, filter counts, resume section heads. Mono only.

### Named Rules

**The Three-Voice Rule.** Termina for structure and display. Roboto Serif for reading and the italic accent. JetBrains Mono for tools. Do not add a fourth family.

**The Italic Accent Rule.** One italic Roboto Serif word may sit inside a Termina headline, in Sea Glass, at 1.18em, with the variable-font settle (`wght` 460 / `GRAD` 40 / `wdth` 122 → 400 / 0 / 100 over 4s). Use it as a stress, not a style for whole sentences.

## Layout

The page is a spread with a 1280px max (`--max-width`). Horizontal padding is `clamp(16px, 4vw, 56px)`; home sections also center with `max(2rem, calc(100vw - 1280px) / 2)`. Vertical rhythm is `clamp(40px, 6–8vw, 88–96px)` between major blocks.

Grids are `auto-fit` with mins around 230px (skills), 290–300px (work cards), 150px (meta cells). No 12-column overlay. Hairline rules (`1px solid line`, or `2px solid ink` under the resume name) do the sectioning.

The mast is sticky. The wordmark returns home, so the nav is Work, About, and Resume. Below 640px the theme control shares the wordmark row; from 641px it sits in the nav after a 1px vertical rule. Case-study headings stick below the mast (`top: 78px`).

Resume is a narrower measure (max 980px). Case body maxes at 1100px. About is a two-column auto-fit (copy + portrait/contact).

## Elevation & Depth

The system is flat. Depth is tonal: paper, then card, then inverted ink bands (philosophy band, pull quote). The only physical move is hover: cards `translateY(-5px)` and buttons `translateY(-2px)`, with the card border shifting from line to ink. Contact rows slide `translateX(9px)` on hover. No drop shadows on surfaces. The theme-toggle dot uses an inset ring of paper so the vermilion reads as a hollow mark in light mode.

### Shadow Vocabulary

None for surfaces. Do not add any.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Hairlines only. Hover may lift and darken the border to ink. Shadows are not a response to state.

## Shapes

Quiet rectangles, soft actions. Almost every sheet — card, skill, shot, portrait, contact, code, stat, pull, philosophy band — is a 4px corner. Stack chips are 3px. Buttons and work filters are full pills (999px). Dots (theme, code bar) are circles.

Borders are 1px hairlines in `line`, or a 1.5px dashed ink mix on empty frames. Overflow clips on media. The print pattern tiles at 1080×800 and blends with the paper (`normal` in light, `multiply` in night).

**The Soft-Action Rule.** Pills for things you press. 4px for things you read. 3px for tiny chips. Do not invent a new radius.

## Components

Refined and restrained: soft actions, square surfaces. Chrome stays quiet so type and work can be loud.

### Buttons

- **Shape:** Full pill (999px). Termina 500, 14px, padding 13px 22px, gap 10px.
- **Primary:** Sea Glass fill, on-sea-glass text. The light fill is `#1b6680` so the 14px label stays above 4.5:1, including the brightened hover. Night keeps `#17c3b2`. Hover brightens (`filter: brightness(1.1)`) and lifts 2px. Do not default this fill to Vermilion.
- **Ghost:** Transparent, 1px `line` stroke, ink text. Hover stroke goes to ink.
- **Hover / Focus:** Shared 0.3s `cubic-bezier(0.2, 0.8, 0.2, 1)` lift. Production has no custom `:focus-visible` yet; add a 2px Sea Glass or Ink ring (offset ~3px) before inventing any other focus language. No shadow on focus.

### Chips

- **Stack tags:** 3px radius, 1px `line`, mono 12px, padding 3px 8px, mute text. Not selectable.
- **Filters:** Pill, 1px `line`, Termina 500 13px, padding 9px 16px. On-state is ink fill with paper text (including the mono count). Hover only darkens the border.

### Cards / Containers

- **Corner Style:** 4px
- **Background:** `card` for work/contact/code; `paper` for skill panels (they sit on the same stock, outlined)
- **Shadow Strategy:** none; hover lift + border to ink
- **Border:** 1px `line`
- **Internal Padding:** 18px 18px 20px on home cards; slightly tighter (16px) in the work grid; skill panels `clamp(20px, 2.4vw, 30px)`
- **Media:** 4/3 on home, 16/10 when wide; 16/9 case hero; 3/4 shot grid; 4/5 portrait

### Inputs / Fields

None in the shipped UI. Contact is mailto/tel rows, not a form. Do not invent a field style until a form exists.

### Navigation

- Wordmark: Termina 900, `clamp(17px, 4.4vw, 19px)`, ink, no underline.
- Links: Termina 500, ~13.5px, min-height 44px, padding 0 11px. Rest color is mute; hover and current are ink. Do not fade the link with opacity. Current page draws a 2px Sea Glass underline that scales in from the left.
- Theme toggle: transparent, mono 12px uppercase tracking, min-height 44px, mute → ink on hover. Visible label is the current theme (`Light` or `Dark`); the accessible name is that word plus “theme”, and `aria-pressed` is true in dark. Vermilion 8px dot; inset paper ring in light so it reads hollow.

### Empty image frame (signature)

When `src` is missing, the frame is a dashed 1.5px ink mix, centered uppercase mono hint, mute. Do not replace with stock photography or a fake screenshot.

### Italic accent (signature)

Inline Roboto Serif italic in Sea Glass, 1.18em, tight line-height 0.9, one-shot variable-font settle after 1.4s. Reduced motion shows the settled variation immediately.

### Inverted band / pull (signature)

Ink ground, paper type, 4px radius. Philosophy band and case pull quotes. Vermilion numerals on the band. This is the only large inversion; do not invert random cards.

## Do's and Don'ts

### Do:

- **Do** keep the three voices in their jobs: Termina structure, serif reading, mono tools.
- **Do** set pages on Cream Laid with the print-pattern grain and the documented blend modes.
- **Do** use Sea Glass for primary fills, links, and the italic accent.
- **Do** leave empty frames dashed and labeled until a real asset exists.
- **Do** honor `prefers-reduced-motion`: drop spatial animation (entrances, lifts, the caret, scroll-linked rises) and keep color and border transitions that show state. Keep the 44px nav/filter targets.
- **Do** section with hairline `line` rules (and the 2px ink rule under the resume name only).

### Don't:

- **Don't** add drop shadows, glass, gradients, or a third paper color.
- **Don't** introduce a fourth type family.
- **Don't** make Vermilion the default primary-button fill; rarity is the point even when a larger mark is allowed.
- **Don't** set paragraphs in Termina or headlines in mono.
- **Don't** hide placeholder work or missing portraits behind invented images.
- **Don't** treat the hover lift as permission to build an elevation scale.
