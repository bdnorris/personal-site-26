---
target: /impeccable critique
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-09-24T00-39-49Z
slug: src-pages-index-astro
---
Method: dual-agent (A: 773bd73a-e15a-4ff2-be2f-168b0843ab0c · B: ccd53f7e-b3af-406a-a517-cc1160c89882)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Home is marked and the theme control shows the current mode. The control names the state (“Light theme”) rather than the action. |
| 2 | Match System / Real World | 3 | The hero speaks in his voice. The skills grid speaks like a job-req dump. |
| 3 | User Control and Freedom | 3 | Cards and theme can be left. The conversation the page exists for has no email or phone on this surface. |
| 4 | Consistency and Standards | 3 | Type, rules, and cards agree. Resume is offered twice before any project. |
| 5 | Error Prevention | 3 | Little to mistype. Broken images fall back to a labeled frame. |
| 6 | Recognition Rather Than Recall | 2 | Contact, role, and client are remembered from elsewhere. The homepage does not show them. |
| 7 | Flexibility and Efficiency | n/a | One-visit portfolio, not a tool used repeatedly. |
| 8 | Aesthetic and Minimalist Design | 2 | The first screen is spare. The next screen is twenty-two skill lines in five equal boxes. |
| 9 | Error Recovery | 3 | Image failure has a labeled fallback. There is little else to recover from. |
| 10 | Help and Documentation | n/a | Nothing here is a task that needs instructions. |
| **Total** | | **22/32** | **Acceptable** |

22/32 is 69%. Acceptable is 50% and up; Good starts at 70%.

## Design Specificity Verdict

**The materials are his. The page under the hero is interchangeable.**

The hero is authored: cream paper, print speckle, Termina for the claim, Roboto Serif and teal for “the gap,” a first-person sentence about design intent versus execution. Dark mode is the same studio with the lights off. That combination would look wrong on a generic SaaS template.

Under it, the page becomes a senior-developer template. A three-word kicker, two pills, a five-box skills inventory, three identical project cards, and a colophon. The biography that makes the positioning true — graphic design, the classroom, a decade leading front-end — is not on this surface. The work screenshots are specific (the Smucker clock, Think Upon’s collage, the student style tiles) and then put in the same card mold. The strongest story, that he took a finished clock drawing and built it as variable SVG, waits until the case.

**Deterministic scan.** `detect.mjs --json` on `src/pages/index.astro`, `src/components`, and `src/layouts` exited 0 with `[]`. No CLI findings, so no file:line issues and no CLI false positives.

**Visual overlays.** Injection succeeded on a new tab of `http://localhost:4321/` (view `cfa6b2`). `detect.js` from the live helper on port 8400 painted 13 overlays. The helper was then stopped, so those marks stay until that tab reloads. Console lines did not contain the word “impeccable”; they were captured by wrapping `console.*`. Counts: `undersized-ui-text` 7, `all-caps-body` 4, `hero-eyebrow-chip` 1, `oversized-h1` 1, `cream-palette` 1. Overlay chrome also labeled low contrast on the kicker and lede, and a hero eyebrow / pill chip, without contrast numbers.

**False positives against the written system.** Label type is specified at 9.5–11px, so the 9.5px “Light” / card meta and 10.5px “All projects” hits sit inside DESIGN.md even though the detector’s floor is 11px. The 78px headline is inside `clamp(34px, 7vw, 112px)`. `rgb(254, 249, 239)` is the paper token `#fef9ef`. Uppercase on the kicker is the Label role. The unlabeled low-contrast overlay is unverified: body ink on paper measured about 10.6:1, and the real tight spot is Sea Glass `#227c9d` on cream at about 4.51:1 on the 14px button label.

The detector did not catch the missing contact, the orphaned period, or the skills-before-proof order. Those are design-review findings only.

## Overall Impression

The first screen is a typesetter’s argument. The rest of the page is a coverage sheet, and it ends on a signature instead of a way to write or call. The single biggest opportunity is to let the clock be the proof, and to end on the conversation.

## What's Working

- The hero is a real typesetting decision: Termina for the claim, Roboto Serif and teal for the two words that carry the argument, on speckled paper, with no drop shadow. Dark mode makes sea glass (`#17c3b2` on `#06232c`, about 7.4:1) do the job the light-mode steel blue only half does.
- The lede is in his voice and readable: Roboto Serif at 17px, ink on paper at about 10.6:1. “Great designs don’t automatically become great websites” is something a person would say.
- The Daymaker screenshot, and the case behind it, actually demonstrate the positioning. Nav links and hero buttons are 44–48px. Focus-visible is a 2px accent outline, and reduced motion turns off the entrance, hover-lift, and caret blink.

## Priority Issues

### [P1] The page never asks for the conversation
- **Why it matters:** Header, hero, and footer have no `mailto` or `tel`. The last thing on the page is “Built by man and machine.” A short visit ends without the action that defines success.
- **Fix:** End the homepage with the two lines already in the site data — `hi@briannorris.dev` and `417.425.7739` — as text links under the featured work, in the footer’s mono label style. One sentence of invitation. No form.
- **Suggested command:** `/impeccable clarify`

### [P1] On a 390px screen the headline breaks
- **Why it matters:** At the 36px floor, the hero renders as “I close the gap” and then a period alone on the next line. `.acc` is `inline-block`, and the period sits outside that box. The kicker also wraps so a middot starts the second line. For a typesetter, this is the execution gap, in the sentence about closing it.
- **Fix:** Keep “the gap.” in one inline box, including the period. Break before that phrase if the line must break. Keep each kicker phrase and its separator together.
- **Suggested command:** `/impeccable typeset`

### [P1] Skills sit in front of the proof
- **Why it matters:** Five equal cards and twenty-two bullets, including a duplicate AI thread, come before any project. On desktop the fifth card, AI Development, sits alone under a row of four. A hiring manager wanted evidence and got a skills matrix.
- **Fix:** Cut this section to the three ideas that are the job — design, front-end, accessibility — three lines each, or replace it with one sentence and move the inventory to the resume. Put featured work directly under the hero.
- **Suggested command:** `/impeccable distill`

### [P2] The featured cards hide the reason to interview him
- **Why it matters:** Think Upon’s blurb names the client and the animation, not his role. Daymaker says “food-service brand” and “SVG clock”; only the case says Smucker, lead front-end, Vue. The course image crops to a strip of illegible tiles. The best card is not first.
- **Fix:** Lead with Daymaker. Put the role on the card. Rename Think Upon to the project, not the service. Give the course image a crop that shows one style tile, or drop it from the homepage trio.
- **Suggested command:** `/impeccable clarify`

### [P2] The theme control is labeled as a state, and on the phone it costs a whole row
- **Why it matters:** It reads “LIGHT” or “DARK.” The accessible name matches (“Light theme”), so it announces where you are, not what the button does. On 390px it sits alone above the name, and the sticky mast is about 135px before the kicker.
- **Fix:** Label it “Switch to dark” / “Switch to light.” On small screens put it on the same row as the wordmark.
- **Suggested command:** `/impeccable adapt`

## Persona Red Flags

**Jordan (first-time hiring visitor).** The kicker “user experience · accessibility · performance” could be any portfolio. The hero never says graphic designer, senior, or Springfield. “What I bring” asks him to read twenty-two claims before Think Upon. The page ends with no email. “See the work” and nav “Work” are the same destination; “Resume” appears twice.

**Sam (keyboard / screen reader).** Each project card’s name bundles category, title, and blurb, and the image inside the link still has a long alt. The h1’s accessible name splits the period from “the gap.” The theme button’s name mirrors the current theme. There is no skip link. Two controls are both named “Resume.”

**Casey (phone, one thumb).** At 390px the period falls onto its own line. The sticky header is three rows and stays put while she scrolls. Touch sizes on the nav and the two buttons are fine. She then scrolls five full skill cards before a project. “See the work” is on the first screen, and it still does not offer a call or an email she can tap.

## Minor Observations

- The lede repeats the headline: “I close the gap between design intent and technical execution.”
- Light-mode buttons and “the gap” use `#227c9d` on cream, about 4.51:1. Large type clears AA; the 14px button label barely clears 4.5:1.
- Card eyebrows are 9.5px mono, inside the written label range. Vermilion is on every card, so it is a label color, not a scarce moment.
- “All projects →” is 10.5px, muted, and far from the heading on desktop.
- Pill buttons (`border-radius: 999px`) are the most generic shape in an otherwise ruled system.
- “Home” stays in the nav on the homepage.

## Questions to Consider

- If the work is closing the gap between a design and a build, why is the first proof a skills grid instead of the clock he had to construct from someone else’s drawing?
- Would “Where design meets code, I close the gap” still be his sentence if the wordmark were removed, or could any senior front-end developer wear it?
- The page’s last words are “Built by man and machine.” If the only success is a reply, what should the last words be?
