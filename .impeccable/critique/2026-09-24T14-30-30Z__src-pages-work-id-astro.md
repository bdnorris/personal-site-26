---
target: All Spreads case study
total_score: 18
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-09-24T14-30-30Z
slug: src-pages-work-id-astro
---
Method: dual-agent (A: e7d92ac7-ec2d-4f58-974b-e3b5011ad309 · B: 313c6d65-9c0d-4dfc-b3ff-eda25a7bed0c)

Inspected instance: All Spreads Daymaker at `/work/allspreads`, rendered by `src/pages/work/[id].astro`.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | On a short laptop the first screen ends at the meta row and clips “Live site.” The clock is below the fold. On a phone the sticky “Process” heading parks under the mast. |
| 2 | Match System / Real World | 2 | The lede opens in brochure voice (“To facilitate recipe discovery…”). “Daypart” is never glossed. “Type / Work” repeats the filing label already in the kicker. |
| 3 | User Control and Freedom | 3 | “← All work,” “Live site,” and “Product & Recipe Filters →” each go where they say. |
| 4 | Consistency and Standards | 2 | The stack chips say Vue 3, SVG, REST API. Step 04 names GreenSock. Step numerals are spark vermilion, and `clock.vue` computes as generic monospace. |
| 5 | Error Prevention | 2 | The hero alt contains the literal “Snacks &amp; Sweets.” Both desktop shots share one alt. |
| 6 | Recognition Rather Than Recall | 2 | Four screenshots and the code sample have no captions. The reader has to remember which decision each picture proves. |
| 7 | Flexibility and Efficiency | n/a | Experience page. No task to accelerate. |
| 8 | Aesthetic and Minimalist Design | 2 | The kicker already says “WORK · 2023,” then Type and Year repeat it. Steps 02 and 03 make the same trig point twice. |
| 9 | Error Recovery | 3 | The paths that were used did not dead-end. The linked page still shows the clock. |
| 10 | Help and Documentation | n/a | The case is the document. |
| **Total** | | **18/32** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** The frame is this studio. Cream paper, Termina at weight 900, Roboto Serif for the lede, JetBrains Mono kickers, a Sea Glass pill, 4px meta sheets, print grain. That chrome is not a generic case-study template.

The instance is. All Spreads uses the shared skeleton: kicker, title, lede, five meta cells, hero, Context, Role, Process, Visuals, Outcome, next link. The clock, the slice math, and the fork-and-knife pointer do not change the layout. The case is copy poured into the studio frame. The peak, the real wheel, arrives after a form.

**Deterministic scan:** The file scan of `src/pages/work/[id].astro` exited 0 with no findings. The browser pass, after injecting the detector, logged 7 findings: `hero-eyebrow-chip` once on “WORK · 2023,” `all-caps-body` five times on empty-frame hints, and `cream-palette` once. A later visual pass added two `low-contrast` hits on the h1 and the lede, sampled through the print grain.

**False positives:** Cream is the pinned paper. Uppercase mono on `.frame-empty` is the pinned empty-frame hint, and those frames are `display: none`. The low-contrast marks sampled the grain (`1.9:1`). Computed ink on cream is 10.56:1 for both the 73px title and the 17px lede. The `hero-eyebrow-chip` hit is the pinned kicker; its Sea Glass on cream is 4.51:1 at 12px, so it is not a contrast failure. The detector missed the failure that is real: the process numerals.

**Visual overlays:** Injection succeeded. Outlines are on the All Spreads tab that was opened for this review: a banner for the cream palette, a “hero eyebrow” label on the kicker, and low-contrast marks on the title and the lede. Those three are false positives against the brief. The five empty-frame outlines are hidden with their targets.

## Overall Impression

The clock is real, and the page hides it. A hiring lead on a short screen meets a metadata form, then a brochure sentence, then the work. The single biggest opportunity is to let the generated wheel lead, and to make the numerals and the code sample readable.

## What's Working

- The studio holds. Termina 900, Roboto Serif at 17.5px, mono kickers, cream ground, and the filled pill at `#1b6680` (6.14:1) read as one desk.
- The proof is not a mock. The hero and the four shots are real files, and the linked page still shows the fork-and-knife clock.
- `clock.vue` shows the actual slice math, including `centerX + 100`, instead of a cleaned diagram. The role line is honest about what the designer supplied and what Brian built.

## Priority Issues

### [P1] The short screen never shows the work first

- **Why it matters:** At 1043×658 the first screen ends by clipping “Live site.” The clock is below the fold. At 390×844 the first screen ends at the stack chips. A lead decides from that view, and that view is a form: Type, Client, Role, Year, Stack. The kicker already says “WORK · 2023.”
- **Fix:** Put the clock in the first view. Drop Type and Year from the meta row.
- **Suggested command:** `/impeccable distill`

### [P1] The process numerals fail contrast

- **Why it matters:** Steps 01–05 are `#fe6d73` on `#fef9ef`, measured 2.62:1, at 12px. The same vermilion colors `10`, `360`, and `100` inside `clock.vue`. The page’s claim is that accessibility is the baseline. The detector did not flag these; it sampled the grain on the headline instead.
- **Fix:** Set the step numerals and the code constants in vermilion ink `#b8323c`. Keep `#fe6d73` for the small code-file dot.
- **Suggested command:** `/impeccable colorize`

### [P1] The math sample falls apart on a phone

- **Why it matters:** At 390px, `clock.vue` wraps to the box width in generic `monospace`. A line such as the slice-angle assignment breaks into scraps. The font rule lands on `pre`; the `code` element does not inherit JetBrains Mono.
- **Fix:** Set JetBrains Mono on `code`, and let the block scroll sideways instead of wrapping mid-expression.
- **Suggested command:** `/impeccable typeset`

### [P2] The hard part is told twice, then the ending shrugs

- **Why it matters:** Step 02 (“The trig problem”) and step 03 (“Trigonometry for variable item placement”) are one decision. Step 03 credits AI with the trig. The outcome is “successfully… distinctive… gracefully,” with no Reflections block and no contact. The four shots and the code have no captions, so the reader has to remember which decision each picture proves. The pill says “Live site”; the href is a release-candidate host.
- **Fix:** One trig step, in the first person, pointed at the code. Caption each shot. End on a concrete limit. Name the link for the host a lead will actually open.
- **Suggested command:** `/impeccable clarify`

### [P2] On a phone, the section heading slides under the mast

- **Why it matters:** The sticky “Process” heading uses `top: 78px`. The mast on a 390px screen is about 107px tall, so the section name sits under the nav while the list is on screen.
- **Fix:** Stick case headings below the measured mast height, the same way the work index already tracks `--mast-h`.
- **Suggested command:** `/impeccable adapt`

## Persona Red Flags

**Jordan (first-time hiring reader):** The first sentence is “To facilitate recipe discovery…” He does not meet Brian until the Role paragraph. The first screen is a form. The page ends on a soft outcome and “Product & Recipe Filters →.” The footer has no email and no phone.

**Sam (keyboard and screen reader):** The hero alt includes the characters “Snacks &amp; Sweets.” Both desktop images announce “selected recipe on the desktop.” “Live site” does not say a new tab will open. “← All work” is a 91×16px mute link with no underline. “Next case study” is a sibling span; the link’s name is only “Product & Recipe Filters →.” The step numbers, the only index of the five decisions, sit at 2.62:1.

**Casey (phone, one thumb):** The mast takes about 106px before the case. “← All work” stays 91×16px. “Lead front-end” breaks as “Lead front-” / “end.” The hero becomes a small 11:6 crop of the marketing page, so the clock is not readable. `clock.vue` wraps into a ragged column. The stuck “Process” heading disappears under the nav.

**Morgan (hiring lead):** The role line says a designer supplied both views, which is the right claim, and then the page muddies it. The stack chips omit GSAP. Step 03 says AI worked out the trig. The code is real and slightly dirty, which helps, and it is set in fallback monospace with failing-contrast numbers. The pictures are the client’s marketing page. Morgan can believe the build happened. The generated SVG is not the thing in front of her.

## Minor Observations

- The Sea Glass kicker on cream is 4.51:1 at 12px. It clears AA by a hair.
- Case copy on desktop is about 75 characters wide, past the 70ch ceiling.
- “← All work” returns to the top of the index. All Spreads is not in that first view.
- The hero mat uses mute `#47606a` as a large slab. Mute is a text color everywhere else.
- At 390px, `.case-split` computes as two tracks with a zero second column. It still stacks. It is one content change from a broken row.
- No stats row. That matches the rule against invented metrics. The outcome paragraph still reads as if a number is about to appear.

## Questions to Consider

- A designer handed over the clock. Which single decision on this page is Brian’s, and why is it written twice and then credited to AI?
- If the job is the gap between the drawing and the SVG, why is the hero the sales card instead of the generated wheel with the slice math in view?
- A hiring lead has finished the only full case and the footer says “Built by man and machine.” What are they supposed to do besides open the next project?
