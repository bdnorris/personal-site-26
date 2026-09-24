---
target: resume page
total_score: 22
max_score: 36
na_heuristics: 9
p0_count: 0
p1_count: 3
timestamp: 2026-09-24T15-08-24Z
slug: src-pages-resume-astro
---
Method: dual-agent (A: 29699199-e49e-4be5-829d-0eeab920f46d · B: 226a8df6-c835-4eb6-b405-7f5f90008506)

Inspected instance: the resume at `/resume`, source `src/pages/resume.astro`.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | “Resume” is the current nav item. Download PDF does not say the file size or confirm the click. |
| 2 | Match System / Real World | 2 | Dates are three dialects: “2019–present,” “1.2016–9.2026,” and “Fall '10, '16 & '17, Spring '11, '12, '17 & '19.” The first org is “Self.” |
| 3 | User Control and Freedom | 3 | The wordmark goes home, the mast stays put, and Skip to content is a real exit. |
| 4 | Consistency and Standards | 2 | The job pattern and the three type voices repeat. A date range is not written the same way twice. |
| 5 | Error Prevention | 3 | The mailto, the tel link, and the PDF (200, application/pdf) are real. Nothing stops a misread of overlapping tenure. |
| 6 | Recognition Rather Than Recall | 3 | The outline is h1, then section h2s, then role h3s. Jobs do not link to the work that proves them. |
| 7 | Flexibility and Efficiency | 2 | The page is 2362px tall on a laptop and 3438px on a phone, with no jump to Work experience, Professional skills, or Education. |
| 8 | Aesthetic and Minimalist Design | 2 | The paper is quiet. Nineteen skill glosses and a repeated display name add length without a new decision. |
| 9 | Error Recovery | n/a | A static résumé. No form or in-page error to recover from. |
| 10 | Help and Documentation | 2 | Concurrent roles and “Per-Course Instructor” have no one-line orientation. |
| **Total** | | **22/36** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** The frame is this studio. Cream paper, print grain, Termina 900 for the name, a 2px ink rule, JetBrains Mono for the kicker and the section labels, Roboto Serif for the job prose, and a pill only on Download PDF. Vermilion appears once, as the footer mark. Swap the three families and this is no longer the studio.

The information design is the interchangeable part. An auto-fit date column and a three-column skill dictionary could sit on any portfolio. The letterhead is the peak. The career is not.

**Deterministic scan:** The file scan of `src/pages/resume.astro` exited 0 with no findings. The browser pass logged 3 console groups that expand to seven rules: `all-caps-body` on the role line, `wide-tracking` on the date column, `numbered-section-labels` on four date strings, and `cream-palette` on the body. A later visual pass added 11 `low-contrast` fails, all sampled through the print grain.

**False positives:** Cream is the pinned paper. The uppercase role line is the pinned mono kicker, not body copy. The “numbered labels” are dates (`1.2016–9.2026`, `1.2012–12.2015`, `1.2006–12.2012`, `8.1998–8.2002`), not section indexes. The low-contrast marks sampled the grain (about 1.7:1 to 4.4:1). Computed ink on cream is 10.56:1, mute is 6.35:1, and Sea Glass is 4.51:1. The one detector hit that stands is `wide-tracking`: job dates carry 0.06em (0.72px) at 12px, and they are not uppercase labels.

**Visual overlays:** Injection succeeded. Outlines are on the Resume tab opened for this review: a cream banner, low-contrast marks, an all-caps mark on the role line, and wide-tracking marks on the dates. The cream, contrast, and all-caps marks are false positives against the brief. The date tracking is the real one.

## Overall Impression

A hiring lead can trust the facts. They cannot scan the career. The letterhead is the studio at its best, and then the first role is “Self,” the dates speak three dialects, and the only filled control is a PDF. The single biggest opportunity is to make the tenure rail and the contact path readable in one pass.

## What's Working

- The type jobs are distinct and on-system. Section labels are 12px JetBrains Mono in Sea Glass. Dates are 12px mono mute. Roles are Termina 700. Job prose is Roboto Serif at 16px, mute on cream at 6.35:1. Ink body text is 10.56:1.
- The heading outline is clean: h1 “Brian Norris,” then Work experience, Professional skills, and Education, with an h3 for each role, skill group, and the degree. “Resume” is current in the nav.
- On a 1043px desktop, date text and role titles share one rail. Education uses that same grid beside the BFA.

## Priority Issues

### [P1] The action a lead needs is the quietest thing on the page

- **Why it matters:** The decision is whether to write or call. Download PDF is the only filled pill (`#1b6680`, 6.14:1, 46px tall). `hi@briannorris.dev` and `417.425.7739` are 14px Termina with a hairline underline, 21px tall. They read as metadata. On a phone they sit at the top of a 3438px page and never return.
- **Fix:** Make the mailto the filled pill, demote Download PDF to a ghost pill, and repeat both contacts under Education.
- **Suggested command:** `/impeccable layout`

### [P1] Tenure cannot be scanned

- **Why it matters:** Freelance is “2019–present” and sits first. Marlin is “1.2016–9.2026.” Teaching is “Fall '10, '16 & '17, Spring '11, '12, '17 & '19,” and at 1043px the last line of that rail is “& '19.” Today those ranges overlap, and nothing says so. The detector misread the month-year strings as numbered section labels, which is the tell: they look like indexes, not dates.
- **Fix:** One pattern for every range. Keep the semester list in the paragraph so the rail can carry a single span. Mark the overlap in the prose. Do not change the facts.
- **Suggested command:** `/impeccable clarify`

### [P1] Professional skills is a second résumé

- **Why it matters:** After the jobs have already said front-end lead, instructor, and designer, the page opens 9 + 5 + 5 glosses. “Experience and passion for writing sane and resilient stylesheets” does not help a yes or no. Rows do not share a baseline across columns.
- **Fix:** Four lines per group. Tools, not glosses.
- **Suggested command:** `/impeccable distill`

### [P2] The date column is an accident of auto-fit

- **Why it matters:** At 1043px the job grid computes five tracks and a trailing zero-width track. Short dates sit in a 205px gutter. At 390px the date stays in a half-width cell and the role drops underneath, so “Fall '10…” still wraps to “& '19” while the role has the whole screen. The 0.06em tracking on those dates makes the short strings look looser than the labels above them.
- **Fix:** A fixed date track on desktop. On small screens, let the date span the full row above the role, and drop the extra tracking.
- **Suggested command:** `/impeccable typeset`

### [P2] On a phone, the location breaks off the role and the contacts miss the hit size

- **Why it matters:** At 390×844 the kicker wraps after the middot, so “SPRINGFIELD, MO” is its own line. Email is 160×21 and phone is 115×21, under the 24px minimum, on a page that lists WCAG work. The wordmark is 133×17.
- **Fix:** Keep the role and the city as one phrase when they wrap. Give email, phone, and the wordmark at least 44px of hit area.
- **Suggested command:** `/impeccable adapt`

## Persona Red Flags

**Jordan (first-time hiring reader):** The first screen offers Download PDF as the obvious act and “Self” as the first employer. “2019–present” above “1.2016–9.2026” does not say which job to interview for. The teaching string does not say eight semesters unless you already know the notation. Nothing after the GPA says what to do next.

**Sam (keyboard and screen reader):** DOM order is sound: date, then the role, then the org, then the paragraph. The links announce `hi@briannorris.dev` and `417.425.7739` with no “Email” or “Phone.” The focus ring is on `:focus-visible` only. Sea Glass on the 12px section labels is 4.51:1, a pass with no margin once the grain sits on the strokes.

**Casey (phone, one thumb):** Download PDF is a 172×46 pill at the top, out of the thumb’s rest. Email and phone stay 21px tall. The page is 3438px. By the BFA, the phone number is a scroll away. The teaching date still wraps inside a 165px half-column.

**Morgan (hiring lead):** The materials pass. The craft fails in the rail: a date that orphans “& '19,” an org in the action color that reads “Self,” and “Fluid and responsive typographic manipulation” in the same voice as a CMS list. Marlin’s paragraph is the proof, and it is visually equal to a one-sentence freelance blurb. Nothing on the résumé points at the work.

## Minor Observations

- The filled button is `#1b6680`, darker than the Sea Glass swatch, and the contrast is the better for it.
- Job prose is résumé past tense (“Led,” “Taught,” “Designed”). It reads as a résumé. It does not read as the first person used on the rest of the site.
- “3.74 GPA on a 4.0 scale” is the last line, set like a job blurb.
- Hover on the pill brightens and lifts 2px. It is the one effect that is not flat ink.

## Questions to Consider

- If Marlin Connections is the decade that earns the interview, why is the first role “Self” and the only filled control a PDF?
- What happens to this page if every date is one notation a lead can read down the rail without translating?
- The skills repeat the jobs in softer language. What is left, and is it stronger, if that whole block becomes four lines?
