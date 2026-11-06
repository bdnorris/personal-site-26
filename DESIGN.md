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
  halloween-ink: "#2f1a10"
  halloween-paper: "#fbefd9"
  halloween-mute: "#6e4a34"
  halloween-card: "#fff8ea"
  halloween-orange: "#b34200"
  halloween-orange-fill: "#9a3800"
  halloween-gold: "#c96f00"
  halloween-gold-ink: "#7a4a00"
  halloween-ink-night: "#ece6d8"
  halloween-paper-night: "#0d1220"
  halloween-mute-night: "#a9b0c4"
  halloween-card-night: "#161d30"
  halloween-orange-night: "#ff9238"
  halloween-gold-night: "#f5d06b"
  autumn-ink: "#2b2118"
  autumn-paper: "#f6eedd"
  autumn-mute: "#5f4f3f"
  autumn-card: "#fbf6ea"
  autumn-maple: "#a3361a"
  autumn-maple-fill: "#8c2d15"
  autumn-moss: "#6f7d2c"
  autumn-moss-ink: "#4f5a1c"
  autumn-straw: "#e0b04a"
  autumn-ink-night: "#efe6d4"
  autumn-paper-night: "#16140f"
  autumn-mute-night: "#b2a58f"
  autumn-card-night: "#221e17"
  autumn-maple-night: "#e57a43"
  autumn-moss-night: "#bcc56c"
  autumn-moss-ink-night: "#cfd68e"
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
    fontFamily: "Roboto Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
rounded:
  sm: "3px"
  md: "4px"
  pill: "999px"
  full: "50%"
spacing:
  page-inline: "max(1.5rem, calc((100vw - 1280px) / 2))"
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

A personal site set like a composed spread. Termina builds the architecture of the page; Roboto Serif does the reading; Roboto Mono is the tools left on the desk: meta, labels, code names, the blinking caret. It is paper, not a product UI. The implements annotate the work rather than chrome it.

Density is editorial. One very large display size, hairline rules, auto-fit grids, and cream laid ground with a print-pattern grain. Personality lives in the pairing and the texture. Actions are soft pills; surfaces are quiet 4px rectangles. Hover lifts a card a few pixels and turns its border to ink. Nothing casts a shadow.

Visual rejections already in the code: no drop shadows, no glass, no gradient heroes, no tech-startup chrome. Empty image frames stay dashed until a real asset exists. Dark theme inverts the stock (deep teal paper, cream ink) and brightens Sea Glass; the print grain multiplies into the night paper.

**Key Characteristics:**

- Cream laid paper, Deep Teal Ink, Sea Glass actions, scarce Vermilion Spark
- Three type voices only (Termina, Roboto Serif, Roboto Mono)
- Flat hairline surfaces; lift-on-hover is the only physical move
- Print-pattern grain as paper, not decoration layered on top
- Honest dashed slots where images are missing

## Colors

Warm stock with teal ink. Sea Glass is the working accent. Vermilion is a spark that may grow, but stays rare.

### Primary

- **Sea Glass** (`sea-glass` / `sea-glass-night`): Filled primary actions, the home hero's serif accent, default links, work-grid meta, case back links, resume section labels, and hover on next-case links. Light value is the coastal teal; night value is the brighter tide-pool teal so it still reads on deep paper. On-color is cream in light and night paper in dark (`on-sea-glass` / `paper-night`).

### Secondary

- **Vermilion Spark** (`vermilion`): Theme-toggle dot, footer caret, code highlights, philosophy numerals. Its ink value (`vermilion-ink`) draws the season-toggle icon. Tiny marks are the default. Occasional larger fills are allowed if they stay scarce. Not the default primary-action fill.

- **Vermilion Ink** (`vermilion-ink` / `vermilion-ink-night`): Home card meta and other small labels that need warmth without a fill. Softer wash (`vermilion-soft`) exists for rare tinted grounds.

### Neutral

- **Deep Teal Ink** (`ink`): Body text, display type, wordmark, hairline source. Becomes cream in night theme (same token `--ink` swaps).
- **Cream Laid** (`paper`): Page ground. Night: `paper-night`.
- **Mute** (`mute` / `mute-night`): Secondary reading, labels at rest, skill list items, job blurbs.
- **Line** (`line` / `line-night`): 1px rules, card edges, ghost-button stroke. Always a transparent ink or cream, never a gray imported from another palette.
- **Card** (`card` / `card-night`): Recessed sheets slightly off the page ground (work cards, contact, code, portrait frame).

**The Rare Vermilion Rule.** Vermilion stays scarce. Tiny marks are the default; occasional larger fills are allowed. Sea Glass remains the primary action fill.

**The Two-Stock Rule.** Light is teal ink on cream laid. Dark is cream ink on deep teal paper. Do not introduce a third permanent ground (pure white, cool gray, or black). A documented, temporary seasonal palette may replace both stocks while its explicit toggle is active.

### Seasonal Variants

Seasons are visitor-controlled overprints with two stocks each. One season is live at a time, chosen manually by `ACTIVE_SEASON_ID` in `src/lib/seasons.ts`; the toggle is off by default. A season changes semantic color tokens only; typography, spacing, shape, and motion remain the Typesetter's Studio. The light/dark control switches between the active season's two stocks, and disabling the season returns to the matching standard palette. Only the live season's ID is honored from storage, so an old seasonal choice cannot silently enable a different theme.

Every season sets the same tokens for both stocks: `color-scheme`, `--ink`, `--paper`, `--mute`, `--line`, `--card`, `--acc`, `--acc-fill`, `--acc2`, `--onacc`, `--acc2ink`, `--acc2soft`, `--onacc2`, `--band-acc`, `--texblend`. `--band-acc` sets the numerals on the inverted philosophy band, which needs its own value because the band inverts and `--acc2` cannot pass on both grounds. In light stocks the print grain blends with `luminosity` so it takes the paper's hue instead of staying teal. Text selection uses the primary fill while any season is active.

**Autumn (live).** Light is **Harvest**: Bark Ink (`autumn-ink`) on Oat Paper (`autumn-paper`), with Maple (`autumn-maple`, filled as `autumn-maple-fill`) and Moss (`autumn-moss`, labels in `autumn-moss-ink`); band numerals in Straw (`autumn-straw`). Dark is **Woodsmoke**: Linen (`autumn-ink-night`) on Bark (`autumn-paper-night`), with Ember Maple (`autumn-maple-night`, also the fill) and Lichen (`autumn-moss-night`, labels in `autumn-moss-ink-night`); band numerals in Maple Fill. Maple and moss deliberately avoid Halloween's pumpkin/gold/navy so the two seasons read as distinct.

**Halloween (archived).** Light is **Jack-o'-Lantern**: Umber Ink (`halloween-ink`) on Lantern Paper (`halloween-paper`), with Carved Pumpkin (`halloween-orange`, filled as `halloween-orange-fill`) and Candle Flame (`halloween-gold`, labels in `halloween-gold-ink`); band numerals in gold. Dark is **Midnight**: Moonlight (`halloween-ink-night`) on Night Sky navy (`halloween-paper-night`), with bright Pumpkin (`halloween-orange-night`, also the fill) and Harvest Moon gold (`halloween-gold-night`); band numerals in deep pumpkin `#9a3800`. Orange stays the primary in both stocks so the light/dark switch reads as one theme.

**Adding or switching a season:**
1. Create `src/styles/seasons/<id>.css`. Declare the palette as primitives in a `:root` block (`--<id>-<role>` for the light stock, `--<id>-<role>-night` for the dark), then add `:root[data-season="<id>"][data-theme="light"|"dark"]` blocks that set every token above from those primitives with `var()`, never a literal colour. `@import` it after the stamp at the top of `src/styles/global.css`.
2. Add `<id>: { label, icon: { shape, detail } }` to `SEASONS` in `src/lib/seasons.ts`: `shape` is a closed 16×16 SVG path (outlined at rest, filled when on) and `detail` an optional open stroke path. No emoji.
3. Set `ACTIVE_SEASON_ID` to the season to go live (or `null` to hide the toggle).
4. Document the palette in this section and add its tokens to the front matter. Preserve WCAG 2.2 AA contrast.

## Typography

**Display Font:** Termina (with system-ui, sans-serif)
**Body Font:** Roboto Serif (with Georgia, serif)
**Label/Mono Font:** Roboto Mono (monospace)

**Character:** A typesetter's pairing. Geometric display that can go black (900) without looking like a logo font; a literary serif for sentences; a working mono for the desk tools. The Roboto Serif accent, in Sea Glass, is the only flourish inside a Termina headline, and it appears once on the whole site: the home hero.

### Hierarchy

- **Display** (900, `clamp(34px, 7vw, 112px)`, line-height 1 / 0.88 on inner pages): Home hero, work, case, and 404 titles. Display heads carry `overflow-wrap: break-word; min-width: 0`. About uses the same floor and a lower ceiling, `clamp(34px, 5.4vw, 76px)`, so the contact sheet can share a laptop screen.
- **Headline** (900, section titles `clamp(26px, 3.4vw, 44px)`; case splits `clamp(22px, 2.4vw, 32px)`): Section architecture. Sticky on case-study left columns.
- **Title** (500–700, 17–23px, line-height ~1.12): Card titles, skill headings, job titles, contact values. Weight 500 at rest; 700 when the line has to hold — resume jobs, the home skill titles (on a full-bleed 1px ink rule), and the home invite values (on a 1px ink underline).
- **Body** (400, 15–17.5px, line-height 1.45–1.62, measure ~46–70ch): Lede, about prose, case copy, skill items, job blurbs. Serif only — never Termina for paragraphs.
- **Label** (400, 12px, untracked, sentence case as written in the source): nav-adjacent tools, card meta, footer, filter counts, captions, resume section heads. Mono only, declared as `--font-outlier`. Never uppercase, never small caps, never letter-spaced; the face carries the tool voice on its own.

### Named Rules

**The Three-Voice Rule.** Termina for structure and display. Roboto Serif for reading and the one serif accent. Roboto Mono for tools. Do not add a fourth family.

**The One Accent Rule.** One roman Roboto Serif phrase may sit inside a Termina headline, in Sea Glass, at 1.18em, with the variable-font settle (`wght` 460 / `GRAD` 40 / `wdth` 122 → 400 / 0 / 100 over 4s). It appears once on the site, "the gap" in the home hero. Every other headline is set one way: one face, one weight, one colour.

**The Plain Label Rule.** Labels are mono at 12px, untracked, in the case the source writes them. No uppercase transforms, no letter-spacing, no eyebrow line above a heading that only announces it.

**The Plain Link Rule.** Links and buttons say where they go in words. No arrows glued to the label (`→`, `←`), no middle dots joining meta strings (`Work · 2026`): set separate facts as separate spans with a gap, or join a byline with a comma.

## Layout

The page is a spread with a 1280px max (`--max-width`). Horizontal padding is `--page-inline`: `max(1.5rem, calc((100vw - 1280px) / 2))`, so the viewport never gets closer than 1.5rem and wider screens center the column. Resume and case body keep a narrower measure and use `clamp(1.5rem, 4vw, 56px)`. Vertical rhythm is `clamp(40px, 6–8vw, 88–96px)` between major blocks.

Grids are `auto-fit` with mins around 230px (skills), 290–300px (work cards), 150px (meta cells). No 12-column overlay. Hairline rules (`1px solid line`, or `2px solid ink` under the resume name) do the sectioning.

The mast is sticky. The wordmark returns home, so the nav is Work, About, and Resume. Below 640px the color controls sit above the mast and scroll away; the wordmark and nav stay fixed. `html` and `body` both carry `overflow-x: clip` (never `hidden`, which breaks the sticky mast). From 641px the controls sit in the nav after a 1px vertical rule. Case-study headings stick below the mast.

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
- **Hover / Focus:** Shared 0.3s `cubic-bezier(0.2, 0.8, 0.2, 1)` lift. Focus is the global `:focus-visible` ring: 2px Sea Glass outline, 3px offset, shown instantly. Do not invent any other focus language. No shadow on focus.

### Chips

- **Stack tags:** 3px radius, 1px `line`, mono 12px, padding 3px 8px, mute text. Not selectable. The work index shows the first three. The project page lists the full stack.
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
- Theme controls: paired transparent, mono 12px sentence-case controls (11px below 370px) with 44px minimum targets, `white-space: nowrap` and mute → ink hover. Light/dark retains its Vermilion 8px dot, which shows state (hollow in light, filled in dark). The season control sits directly beside it, exposes `aria-pressed`, and draws the active season's 12px SVG mark from the registry in Vermilion Ink: an outline at rest, filled when pressed. Never an emoji. It renders nothing when no season is live.

### Empty image frame (signature)

When `src` is missing, the frame is a dashed 1.5px ink mix, centered sentence-case mono hint, mute. Do not replace with stock photography or a fake screenshot.

### Serif accent (signature)

Inline roman Roboto Serif in Sea Glass, 1.18em, tight line-height 0.9, one-shot variable-font settle after 1.4s. Used once, on "the gap" in the home hero h1. Reduced motion shows the settled variation immediately.

### Inverted band / pull (signature)

Ink ground, paper type, 4px radius. Philosophy band and case pull quotes. Vermilion numerals on the band. This is the only large inversion; do not invert random cards.

## Do's and Don'ts

### Do:

- **Do** keep the three voices in their jobs: Termina structure, serif reading, mono tools.
- **Do** set pages on Cream Laid with the print-pattern grain and the documented blend modes.
- **Do** use Sea Glass for primary fills, links, and the one serif accent.
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
- **Don't** set labels in uppercase, small caps or letter-spaced type, or put an eyebrow line above a heading.
- **Don't** glue arrows to link text or join meta with middle dots.
- **Don't** use an emoji as an icon; draw a small SVG mark or use type.
- **Don't** repeat the serif accent on inner-page titles.
- **Don't** use em dashes in prose; use commas, colons or parentheses. En dashes stay in date ranges.
