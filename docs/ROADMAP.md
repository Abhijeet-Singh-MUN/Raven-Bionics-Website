# V1 status and next work

## Delivered

- Four static pages covering company identity, the research problem, technology, research evidence, possible applications, the organization and contact.
- A responsive original raven portrait, a pupil-anchored reveal, and three registered terrain layers with scroll and manual controls.
- A simulation-based fixture figure and two source-backed research entries. The optimization article includes a measured figure, five comparison rows, a public CSV, methodology and limitations.
- Searchable HTML, canonical and social metadata, organizational structured data, sitemap, robots, local fonts and font licenses.
- A static build, repeatable link and evidence tests, and an editable content and asset system.

## Validation on 18 November 2026

A fresh lockfile installation on Windows with Node 22.12.0 passed the TypeScript check and Vite production build. The static validation suite checked internal page, asset and fragment links under a directory prefix, sitemap and canonical agreement, and CSV-derived frame-rate medians. The four-page build occupies about 1.33 MB on disk, including public evidence and font licenses. The browser enhancement script is 1.65 KB gzipped.

Chrome rendered the production build at 1440 × 900, 820 × 1180, 390 × 844 and 320 × 640. The pass covered horizontal overflow, hero eye reveal, all terrain states, mobile navigation, keyboard focus and Escape, direct article links, reduced motion, navigation without JavaScript, and console and network errors. A separate development-server check opened a nested article directly. The desktop WCAG 2 A/AA and 2.1 AA rule scan reported zero axe violations across all four pages. Mobile article and archive scans also passed. These are automated and visual checks; physical-device, screen-reader and field-performance validation remain open.

## Before public launch, in order

1. Confirm a permanent publishing URL and professional contact route. Set SITE_URL, rebuild and upload dist to the chosen host. Until an email is approved, the footer directs visitors to public GitHub Issues.
2. Supply a short, verified capture from a named simulator run. Record the profile, settings, date and relevant limitations. The existing fixture plate supports inspection while footage is pending.
3. Review the provisional raven art and wordmark. If commissioning final photography, retain the measured eye location and paired responsive crops. Validate the transition after replacement.
4. Check Safari and Firefox on physical devices, and measure Core Web Vitals at the production URL. Target LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1. Field performance depends on hosting, caching, devices and networks.

Future research directions belong in the outlook until supported by evaluated implementations. V1 does not require a backend or a live simulator.


## Strategy-to-launch update — 26 November 2026

**V1 design is user-accepted.** Research-led positioning/copy updated in `src/content/site.ts`, without changing the visual identity or eye/terrain animations. Provisional outward identity: **Spatial Intelligence for Autonomous Systems**; underlying research-led mandate is wider. The company's current simulation-based evidence must remain explicitly distinct from future model/control research; do not import the private strategic reports into this public repo.

**New automated validation:** `.github/workflows/validate.yml` runs npm ci, npm run build and npm test on main and PRs. Confirm the actual GitHub Actions run result before claiming passing CI.

**Still required to call this published:** choose an authorized hosting provider, set real `SITE_URL`, deploy and verify its HTTPS URL. Professional contact remains an unapproved public GitHub Issues fallback; select a genuine contact address (do not invent one). The logo remains provisional and is NOT a release blocker; genuine simulator footage is optional for initial launch because the research plate is labeled.

**Practical deployment option:** Cloudflare Pages Git integration (https://developers.cloudflare.com/pages/get-started/git-integration/), build command `npm run build`, output `dist`, Node 22. Vercel Hobby is restricted to noncommercial use; confirm plan suitability before deploying a company site. A source push is not a deployment confirmation.

**Release verification:** homepage, `/research/`, the two study articles, anchors, mobile/desktop and reduced-motion, correct canonical/sitemap/OG from SITE_URL, usable contact, HTTPS, no broken assets. Once verified, record release URL, commit and test outcomes here.

**Not a reason to postpone job applications:** research work, additional assets, logo revision, and future website improvements.
