---
target: work page
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-09-24T02-41-53Z
slug: src-pages-work-index-astro
---
Method: dual-agent (A: 5d6c9383-1f1a-4437-8bad-8a7d5b7b6ea5 · B: c3345cc3-04d7-4f80-93a3-f068cd45a84b)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | The pressed pill and `?cat=` update. Nothing announces the new count, and the intro does not change with the filter. |
| 2 | Match System / Real World | 2 | The intro promises client builds, freelance, and experiments. The pills say All, Work, Education / Research, and Tools / Experiments. |
| 3 | User Control and Freedom | 3 | All restores the grid in one click. Back does not step through filters, because the script uses `replaceState`. |
| 4 | Consistency and Standards | 3 | The three voices stay in their jobs. Card media uses a larger radius than the 4px sheet. |
| 5 | Error Prevention | 3 | Only known categories can be pressed. An unknown `?cat=` is ignored with no message. |
| 6 | Recognition Rather Than Recall | 3 | Image, title, year, and blurb are on the card. Nothing marks the one full case study. |
| 7 | Flexibility and Efficiency | n/a | A portfolio index has no repeated expert task to accelerate. |
| 8 | Aesthetic and Minimalist Design | 2 | The headline is quiet. Think Upon’s eight chips stretch that row and leave empty bodies on the neighbors. |
| 9 | Error Recovery | 3 | Empty copy exists (“No projects in this category.” plus Show all work). None of the live counts is zero. |
| 10 | Help and Documentation | n/a | An index does not need instructions. The intro is orientation. |
| **Total** | | **22/32** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** The skin is this studio. Cream laid paper, Termina for “Selected,” the Sea Glass serif accent on “work,” JetBrains Mono kickers, ink-filled filter pills, hairline rules, real screenshots. The grid is a category catalog: thirteen equal cards, each a mat, a kicker, a title, a blurb, and a wrap of stack chips. `featured` is set on Think Upon, All Spreads Daymaker, and Web Design for Design Majors, and the index does not use it. All Spreads Daymaker, the only full case study, is the seventh card. The first row is CampuSGF, Think Upon WordPress Development, and Web Tools.

**Deterministic scan:** File scans of `src/pages/work/index.astro` and `src/components/WorkGrid.astro` both exited 0 with no findings. The browser pass, after injecting the detector, logged 14 findings on 13 elements: `all-caps-body` eleven times on empty-frame hints, `wide-tracking` once on a stack chip (“Nuxt (static generation)”), `skipped-heading` once (`h1` “Selected work” then `h3` “CampuSGF”), and `cream-palette` once. The overlay also painted “low contrast text” on the heading and the intro. Those two labels were not in the console buffer.

**False positives:** Cream is the pinned paper. Uppercase mono on `.frame-empty` is the pinned empty-frame hint, and those frames were not on screen. The chip tracking hit calls a 12px mono tag body text. The low-contrast marks sampled the print grain through a canvas (`1.9:1` on the heading, `3.1:1` on the intro). Computed ink and mute on the cream ground clear their bars; the grain sampler does not. The skipped heading is real.

**Visual overlays:** Injection succeeded. Outlines are on the Work tab that was opened for this review: a banner for the skipped heading and the cream palette, plus low-contrast marks on the title and the intro.

## Overall Impression

A hiring lead can open any project. They cannot tell which one carries the claim. The page opens on three equal cards, and the SVG clock that is the only full case study sits in the third row. The biggest opportunity is to make the first screen argue for one project, then let the rest of the catalog follow.

## What's Working

- The opening spread is calm and specific. Termina “Selected,” the Sea Glass accent on “work,” a serif intro, cream grain, and an ink hairline under the filters. Vermilion stays on the theme dot and the footer caret.
- Filters behave. Ink fill, paper text, 44px targets, mono counts. Work left 8 cards, Education / Research left 3, Tools / Experiments left 2, and All restored 13.
- The screenshots and blurbs are real. CampuSGF, the Daymaker clock, Jif That Dish, and Smucker’s Fun are identifiable. The index does not invent quotes or metrics.

## Priority Issues

### [P1] The case study is the seventh card

- **Why it matters:** File order is CampuSGF, Think Upon, Web Tools, then three more, then All Spreads Daymaker. On a short screen the first row is a city guide, a WordPress build, and a tools experiment. The product notes name All Spreads as the only full case study. A lead who reads one screen never reaches it. The `featured` flag would not fix this by itself: the first featured item in the file is Think Upon, not All Spreads.
- **Fix:** Open the index with All Spreads, using the case that already exists, then the rest of the grid. Do not invent a new role line to do it.
- **Suggested command:** `/impeccable layout`

### [P1] The intro and the filters use different nouns

- **Why it matters:** The intro says “Client builds, freelance projects, and the experiments that keep the craft sharp.” The pills say All, Work, Education / Research, and Tools / Experiments. “Work” repeats the nav and the heading. Freelance is not a filter. Teaching is a third of the grid and is absent from the sentence. A lead has to translate before they can filter.
- **Fix:** Make the sentence and the four pills share nouns. Keep the category values that already exist on the cards unless the labels are only the visible names.
- **Suggested command:** `/impeccable clarify`

### [P2] Stack chips stretch the rows and bury the blurb

- **Why it matters:** Every card is rendered `wide`, so the full stack is always visible. Think Upon lists WordPress, ACF Flexible Content, Gutenberg, TypeScript, SCSS, Gravity Forms, Lottie, and GreenSock. That row grows to hold the chips, and the neighbors keep the empty height. The blurb is the decision. The chip list is the appendix.
- **Fix:** Cap the index at a few chips. Leave the full stack on the project page.
- **Suggested command:** `/impeccable distill`

### [P2] On a phone, the first choice is clipped, and a filter can sit under the mast

- **Why it matters:** At 390px the sticky mast is about 107px and the filters wrap to three rows. The first card’s title lands near the bottom edge of an 844px screen, so the blurb is below the fold. After scrolling, a filter pill was reported under the mast, and a tap there hit About instead of the filter.
- **Fix:** Give the first card a full presence on the phone screen, and keep filter targets clear of the sticky mast.
- **Suggested command:** `/impeccable adapt`

### [P2] Card titles skip a heading level

- **Why it matters:** The page heading is an `h1`. Each card title is an `h3`. The detector and the outline both jump from “Selected work” to “CampuSGF.” A screen-reader user loses the group in between.
- **Fix:** Make the card titles `h2`, and keep the visual style they already have.
- **Suggested command:** `/impeccable layout`

## Persona Red Flags

**Jordan (first-timer hiring reader):** Nothing says start here. All Spreads is below the first screen. The Work pill, the Work nav, and the heading are the same word. “WordPress Theme Development” and “Think Upon WordPress Development” read as services. Blurbs describe the artifact and do not state the role.

**Sam (keyboard and screen reader):** Each card’s accessible name includes the chips. Think Upon’s name runs through eight tools. Filter changes do not announce a result count. The empty `role="status"` stays hidden. Headings skip from h1 to h3. Focus is the shared 2px Sea Glass outline. CampuSGF’s image alt is a long visual caption inside the same link.

**Casey (phone, one thumb):** The card is the tap target and the pills are 44px tall. The choosable title sits on the bottom edge of the first screen. After a scroll, a filter tap was intercepted by the About link in the sticky mast. `?cat=` survives a reload. Back does not undo a filter.

**Morgan (hiring lead):** Arrives to judge whether the design-to-code claim is real. The index offers thirteen peers and withholds the only full case study until the third row. The first row does not answer “what should I open.”

## Minor Observations

- Chip spelling drifts: Scss, Typescript, and Greensock sit next to SCSS, TypeScript, and GreenSock (GSAP).
- “Document,” “Notion,” and “VuePress” chips do not describe a build.
- The media mat uses a radius near 13px. The brief’s sheets are 4px.
- Filter text content is “All13”; the gap supplies the visual space. The accessible name was “All 13.”
- Filtering to Tools / Experiments collapses the grid toward two wider columns. Thirteen items leave the course card alone in column one.
- The empty state was not reached. The four counts are 13, 8, 3, and 2.

## Questions to Consider

- If a lead has one screen, which project should already be the one they remember, and why is that card seventh?
- What would the four pills be called if they had to use the nouns already in the intro?
- If the stack chips were gone, would a hiring manager lose the ability to choose, or would the blurb finally be the decision?
