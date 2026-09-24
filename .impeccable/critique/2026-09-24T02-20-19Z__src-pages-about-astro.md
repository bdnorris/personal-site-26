---
target: about page
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-09-24T02-20-19Z
slug: src-pages-about-astro
---
Method: dual-agent (A: 4ce57ae7-6a27-4356-ad22-750878b1be8d · B: 094e731b-e139-49e2-b8f9-6042ca99bde0)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | About is marked in the nav. The theme control names the next theme. |
| 2 | Match System / Real World | 3 | The bio is first person and specific. The phone row breaks out of the contact group at desktop width. |
| 3 | User Control and Freedom | 3 | Wordmark, nav, skip link, and theme are available. The body never points at the work. |
| 4 | Consistency and Standards | 2 | The contact bar wraps, the portrait is a circle, and the prose measure ignores the 70ch ceiling. |
| 5 | Error Prevention | 3 | Email and phone are real mailto and tel links. |
| 6 | Recognition Rather Than Recall | 2 | Role, city, and working principles are not on the page. |
| 7 | Flexibility and Efficiency | n/a | An about page has no expert path to accelerate. |
| 8 | Aesthetic and Minimalist Design | 3 | One greeting, two paragraphs, a quiet contact sheet. The wrapped phone row is the noise. |
| 9 | Error Recovery | 3 | The phone number is the on-page alternate to email. A missing portrait falls back to its hint. |
| 10 | Help and Documentation | n/a | This page should be readable without instructions. |
| **Total** | | **22/32** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** The materials and the voice are his. Cream laid paper, Termina for “Hello, I’m”, Roboto Serif for the bio, JetBrains Mono on the contact labels, Sea Glass on “Brian”, a real portrait, and facts no template could invent: Geocities, a Missouri State BFA, a decade leading front-end at Marlin Connections, eight semesters teaching. The composition is a familiar about page: oversized greeting, circular photo floated in the first paragraph, two blocks of prose, a contact card. The documented about layout is a two-column spread of copy plus portrait and contact. The live page is a single column. The “How I work” band, which PRODUCT.md names as part of About, is commented out with the note “still working on this copy.”

**Deterministic scan:** `detect.mjs --json src/pages/about.astro` exited 0 with no findings. That scan does not see the rendered CSS. The browser pass, after injecting `detect.js`, reported three console rules: `line-length` twice (~103 characters on a paragraph; aim under 80), `blinking-cursor` on the footer caret, and `cream-palette` on `rgb(254, 249, 239)`. The overlay also painted a “low contrast text” label on the heading and on both paragraphs. That label was not in the console buffer.

**False positives:** Cream is the pinned paper. The footer caret is the pinned vermilion mark; it sits in the first viewport only because the page is about 805px tall. Body ink on cream is about 10.5:1, so the paragraph “low contrast” mark is wrong. “Brian” is Sea Glass at display size, about 4.5:1, which clears the large-text 3:1 bar. The line-length hit is real: `.about .prose` is `max-width: 98ch`, and the brief’s body measure tops out around 70ch.

**Visual overlays:** Injection succeeded. Outlines are visible in the browser tab that was opened on `/about`: a cream-palette banner, line-length and low-contrast marks on the heading and paragraphs, and a blinking-cursor mark near the footer.

## Overall Impression

The greeting is confident and the biography is true. The page then stops. A hiring lead gets a life story and a contact sheet that breaks its own row, and does not get the role, the city, or the three working principles the rest of the site already claims. The biggest opportunity is to make `/about` decide the interview, not merely introduce the name.

## What's Working

- The biography is evidence. Geocities, the BFA, Marlin Connections, and the teaching years are specific, and the portrait is a real photograph rather than a dashed empty frame.
- The three voices hold. Display Termina, reading serif, mono labels. Ink on cream is comfortable to read. There is no shadow, glass, or gradient.
- Contact is direct. The rows are mailto and tel, at least 44px tall, and on a phone they stack in one column without overflow.

## Priority Issues

### [P1] The contact bar breaks at desktop width

- **Why it matters:** At about 1043px the group is a wrapping flex row. “Get in touch” and the email share the first line. The phone link drops to a full-width second line, so the method and the number no longer line up with the email. This is the conversion object, and it looks unfinished.
- **Fix:** Keep the kicker, the method, and the value on one alignment. Use the stacked column that already exists under 640px before the email and phone are allowed to split.
- **Suggested command:** `/impeccable layout`

### [P1] Role, city, and working principles are absent

- **Why it matters:** PRODUCT.md says About carries the bio, the portrait, the working principles, and contact, and that the role and Springfield, MO are shown. The visible page is “Hello, I’m Brian” plus two paragraphs. “Senior front-end developer” and Springfield live in the site data and in the meta description, not in the section. The principles band is in the template inside an HTML comment marked unfinished. A lead who never opens Work or Resume cannot tell what he would be hired to do now.
- **Fix:** Put the existing role and city on the page. Treat the principles band as unfinished copy: do not uncomment it until the sentences are ready.
- **Suggested command:** `/impeccable clarify`

### [P2] The biography is set almost twice as wide as the reading measure

- **Why it matters:** `.about .prose` allows 98ch. The detector measured about 103 characters on a line. The brief keeps body text around 46–70ch. Past that, a hiring lead skims instead of reading the only proof on the page.
- **Fix:** Cap the prose at the brief’s measure. Let the portrait sit inside that column, or beside it, without stretching the line.
- **Suggested command:** `/impeccable typeset`

### [P2] The portrait opts out of the sheet system

- **Why it matters:** The brief sets portrait as a 4/5 sheet with a 4px corner, and describes About as a two-column spread. The live portrait is a 1:1 circle (`border-radius: 100vw`) floated in the first paragraph. The circle plus the float is the generic about-page move, and it is why the page can be someone else’s.
- **Fix:** Return the portrait to the 4px sheet and the 4/5 frame, and compose it with the copy as the documented spread.
- **Suggested command:** `/impeccable layout`

### [P2] The greeting spends the first screen

- **Why it matters:** The about title uses the home display size, `clamp(34px, 7vw, 112px)`. On a short laptop the phone row is clipped. On a 390px phone the contact sheet starts below the first viewport, under both paragraphs.
- **Fix:** Set the about title smaller than the home hero so the portrait, the opening lines, and the contact sheet can share a laptop screen.
- **Suggested command:** `/impeccable typeset`

## Persona Red Flags

**Jordan (first-timer hiring reader):** The heading never says senior front-end developer or Springfield, MO. The two paragraphs name school and Marlin, not the job he wants now. Nothing in the body links to Work or Resume. “How I work” is not on the page.

**Sam (keyboard and screen reader):** The links expose “Email hi@briannorris.dev” and “Phone 417.425.7739”. “Get in touch” is a div, not a heading, so the contact group has no heading in the outline. The portrait alt is a long visual caption (“A man with a bald head, glasses, and a beard…”) rather than his name. Focus uses the shared 2px Sea Glass outline.

**Casey (phone, one thumb):** At 390px the portrait unfloats and the contact rows are 44px or taller, with no horizontal overflow. The contact sheet starts around y=938 in an 844px viewport, so leaving before a scroll loses the number. The wordmark stays sticky, but the wordmark hit area is about 17px tall.

**Morgan (hiring lead, from PRODUCT.md):** Arrives with a URL and a short screen to judge craft and fit. The page proves a career path and then withholds the three principles the brand already states: stylesheets are architecture, accessibility is the baseline, motion carries meaning. The broken contact row is the last thing on a laptop, which is the moment the decision should feel easy.

## Minor Observations

- The Sea Glass accent on “Brian” is roman. `font-style: italic` is commented out on `.acc` for the whole site, and the italic cut is not in the loaded font. The brief still calls that accent italic.
- Both paragraphs compute at 17px. The first-paragraph bump `clamp(17px, 1.5vw, 20px)` does not rise at 1043px.
- Contact hover changes the row background to paper. It does not use the contact slide described in the elevation notes.
- PRODUCT.md still lists `bdnorris@gmail.com`. The live row is `hi@briannorris.dev`.
- The page is short enough that the footer caret blinks inside the first desktop viewport.

## Questions to Consider

- If the principles copy is still unfinished, what can a hiring lead decide here that the homepage does not already decide?
- Why is the name set at display size while the phone number is the line that wraps and falls under the fold?
- If the portrait were a 4/5 sheet in a two-column spread, would this page still look like a category about template?
