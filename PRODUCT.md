# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers and design or engineering leads deciding whether to interview Brian Norris for a senior front-end role. They arrive with a URL, often on a short screen, and need to judge craft, judgment, and fit before they spend calendar time.

Secondary: prospective freelance or agency-style clients evaluating whether to hire Brian for a build. They use the same proof, not a separate product.

## Product Purpose

This is Brian Norris’s public professional site. It exists so a visitor can see that he closes the gap between design intent and technical execution, inspect real work and a resume, then contact him by email or phone.

Success is a conversation (interview or project inquiry), not a form submission. Job search is the primary conversion; freelance is welcome and secondary.

## Positioning

Brian is a graphic designer who became a senior front-end developer. A BFA, years of print and identity work, then the browser. The claim a neighboring portfolio cannot truthfully copy is that he thinks about a page as a composition first and a component tree second, and he ships that as resilient, accessible front-end rather than as a handoff.

Current homepage statement to keep: great designs do not automatically become great websites; that is the job.

## Operating Context

- Shared as a URL during hiring. The resume is a page (`/resume`), not a downloadable PDF.
- Static Astro site deployed on Netlify at https://briannorris.io.
- Content lives in JSON: `src/data/site.json` (bio, jobs, skills, contacts) and `src/data/work.json` (projects and case studies).
- Routes: `/`, `/work`, `/work/[id]`, `/about`, `/resume`, plus a 404.
- Light and dark themes persist in localStorage and follow `prefers-color-scheme` when unset.
- No CMS, no contact form, no authentication. Contact is mailto and tel links only.

## Capabilities and Constraints

- Home: positioning, skills groups, featured work, paths to work and resume.
- Work index: selected client, freelance, personal, and experiment entries.
- Work detail: short stack pages, or a full case study when `case` data exists.
- About: first-person bio, portrait slot, working principles, contact.
- Resume: experience, professional skills, education.
- Theme toggle in the masthead.
- Do not add social profiles unless asked. Email (`bdnorris@gmail.com`) and phone (`417.425.7739`) are the real contact paths.
- Do not invent testimonials, logos, press, metrics, or clients.
- Portrait and most project screenshots are still missing. Image slots must stay honest until real assets exist.
- Name, Springfield MO, Marlin Connections tenure, Missouri State teaching, and the BFA are factual and must stay accurate.
- Open: which additional projects belong in the grid beyond what `work.json` currently names; several entries are labeled placeholders.

## Brand Commitments

- Name and wordmark: Brian Norris.
- Voice: first person, direct, teaching-informed. Short sentences. No invented swagger.
- Footer line: “Built by man and machine.”
- Working principles already on the site: stylesheets are architecture; accessibility is the baseline; motion carries meaning.
- Location shown as Springfield, MO. Role shown as senior front-end developer.

## Evidence on Hand

- Biography, employment, education, skills, and contacts: `src/data/site.json`.
- Named work entries: The Alchemedia Project Website (2023, Sanity / Nuxt / GraphQL), T. Marzetti Product Filters (2024, Vue 3 / Pinia / REST), All Spreads / Daymaker (2025, Vue 3 / CSS transforms / WCAG 2.2). Only All Spreads currently has a full case study.
- All Spreads case copy in `work.json` includes authored outcome stats and an unlabeled quote. Treat as Brian’s own case writing, not third-party testimonials or independently verified press.
- Placeholder work slots exist for freelance, personal, and tools/experiments. They must not be presented as shipped work.
- Portrait is not supplied. `public/favicon.svg` and `public/images/printpattern.png` exist.
- HTML comps live under `CompV1/` as prior visual exports, not as product claims.
- Absences future work must not fabricate: client testimonials, press, extra logos, downloadable resume PDF, social proof counts, unnamed additional employers or degrees.

## Product Principles

1. Prove the design-to-code gap can be closed; do not decorate around it.
2. Hiring evaluation comes first; every page should help a lead decide whether to talk.
3. Evidence stays honest: missing images, placeholders, and unpublished work remain visibly incomplete.
4. Accessibility is a baseline for this site, not only a skill listed on the resume.
5. Contact is direct. Do not insert a funnel between the work and an email or phone call.

## Accessibility & Inclusion

This site itself should meet WCAG 2.2 AA. Reduced-motion support, keyboard access, and screen-reader-sensible structure are required, matching the professional claim that accessibility is where a build starts.
