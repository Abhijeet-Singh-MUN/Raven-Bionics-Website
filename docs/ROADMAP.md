# V1 status and next work

## Delivered

- Eight static pages covering the homepage, research archive, two technical studies and four founder-authored articles or development notes.
- A responsive original raven portrait, a pupil-anchored reveal, and three registered terrain layers with scroll and manual controls.
- A simulation-based fixture figure and two source-backed research entries. The optimization article includes a measured figure, five comparison rows, a public CSV, methodology and limitations.
- Searchable HTML, canonical and social metadata, organizational structured data, sitemap, robots, local fonts and font licenses.
- A static build, repeatable link and evidence tests, and an editable content and asset system.

## Validation on 18 November 2026

A fresh lockfile installation on Windows with Node 22.12.0 passed the TypeScript check and Vite production build. The static validation suite checked internal page, asset and fragment links under a directory prefix, sitemap and canonical agreement, and CSV-derived frame-rate medians. The four-page build occupies about 1.33 MB on disk, including public evidence and font licenses. The browser enhancement script is 1.65 KB gzipped.

Chrome rendered the production build at 1440 × 900, 820 × 1180, 390 × 844 and 320 × 640. The pass covered horizontal overflow, hero eye reveal, all terrain states, mobile navigation, keyboard focus and Escape, direct article links, reduced motion, navigation without JavaScript, and console and network errors. A separate development-server check opened a nested article directly. The desktop WCAG 2 A/AA and 2.1 AA rule scan reported zero axe violations across all four pages. Mobile article and archive scans also passed. These are automated and visual checks; physical-device, screen-reader and field-performance validation remain open.

## Before public launch, in order

1. Confirm a permanent publishing URL, set SITE_URL and verify the deployed build. The approved public contact is ravenbionics@gmail.com. Check receiving and replying before launch.
2. Supply a short, verified capture from a named simulator run. Record the profile, settings, date and relevant limitations. The architecture illustration explains the system while footage is pending.
3. Review the provisional raven art and wordmark. If commissioning final photography, retain the measured eye location and paired responsive crops. Validate the transition after replacement.
4. Check Safari and Firefox on physical devices, and measure Core Web Vitals at the production URL. Target LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1. Field performance depends on hosting, caching, devices and networks.

Future research directions belong in the outlook until supported by evaluated implementations. V1 does not require a backend or a live simulator.


## Strategy-to-launch update — 26 November 2026

**V1 design is user-accepted.** Research-led positioning/copy updated in `src/content/site.ts`, without changing the visual identity or eye/terrain animations. Provisional outward identity: **Spatial Intelligence for Autonomous Systems**; underlying research-led mandate is wider. The company's current simulation-based evidence must remain explicitly distinct from future model/control research; do not import the private strategic reports into this public repo.

**New automated validation:** `.github/workflows/validate.yml` runs npm ci, npm run build and npm test on main and PRs. Confirm the actual GitHub Actions run result before claiming passing CI.

**Still required to call this published:** choose an authorized hosting provider, set real `SITE_URL`, deploy and verify its HTTPS URL. The approved contact is ravenbionics@gmail.com. Mailbox delivery and replies require verification. The logo remains provisional and is NOT a release blocker; genuine simulator footage is optional for initial launch because the research plate is labeled.

**Practical deployment option:** Cloudflare Pages Git integration (https://developers.cloudflare.com/pages/get-started/git-integration/), build command `npm run build`, output `dist`, Node 22. Vercel Hobby is restricted to noncommercial use; confirm plan suitability before deploying a company site. A source push is not a deployment confirmation.

**Release verification:** homepage, `/research/`, the two study articles, anchors, mobile/desktop and reduced-motion, correct canonical/sitemap/OG from SITE_URL, usable contact, HTTPS, no broken assets. Once verified, record release URL, commit and test outcomes here.


## Pre-launch revision — 26 November 2026

- User requested and received capitalized non-italic hero title, Home link and contextual Back navigation on research routes, and public email `ravenbionics@gmail.com` in place of GitHub Issues.
- Research archive now contains measured technical studies plus shortened founder-authored pieces linked to their original LinkedIn publications. The visible Sources sections were removed; internal measurement provenance, notes and CSV retained.
- Featured fixture image was replaced by `media/research/system-architecture.svg`, a plainly labeled architecture illustration. **Real simulator recording and screenshots still require an actual source capture** and must never be invented.
- The remotely added logo candidate is deferred. Local reconciliation retains the previous provisional mark while replacement concepts await separate review.
- Existing performance numbers and methodological caveats preserved. No changes to hero assets/eye-motion physics.
- **Before publication** verify the email inbox, supply or defer authentic demo footage, choose domain and host, set SITE_URL, verify production HTTPS routes and social metadata. Review replacement logo concepts separately.

## Local reconciliation and preview verification

Local main fast-forwarded from b5de489 to 080f9287e80b8b8d2fd33ae91b2c59e68e05d88e, integrating 19 remote commits. The starting worktree was clean. The local review changes retain the earlier provisional mark, align the archive description with its metadata and update the preview instructions.

The existing Vite production preview at http://127.0.0.1:4193 serves dist from this checkout. Node 22 production build and all three static tests passed. HTTP checks confirmed all eight routes exactly match the current build, image references resolve, contextual Back/Home targets are correct, original LinkedIn links are present, mailto uses the approved address and generic Sources headings are absent.

Desktop/mobile visual inspection remains pending. Computer Use stopped because it could not verify the current Chrome URL. Email composer behavior and mailbox delivery remain unverified. Actual simulator screenshots and footage require a named run, profile/version, settings, capture date and accurate caption. Architecture artwork is explanatory. Publication requires the selected hosting URL, SITE_URL and production verification.

## Research structure and media review

The local checkout remains based on main at 080f928 with pending review edits preserved. Fetch found no additional remote commits. A backup of the incoming local diff is stored in ignored .qa/reconciliation/pending-before-research.patch.

The archive now provides four category sections with responsive anchor navigation. Six real entries are organized as two technical studies, one research article, two engineering/development notes and one perspective. The homepage explicitly selects three entries and links to the full archive. Existing article slugs, publication dates, original LinkedIn links, performance measurements and internal provenance remain available.

The generated architecture illustration is absent from the homepage and spatial-memory article. A genuine simulator capture remains outstanding. See ASSET_MANIFEST.md for placement and provenance requirements. No replacement logo has been drawn or installed during this review.

The production build and all three static tests pass. Chrome at 1440 × 900, 820 × 1180, 390 × 844 and 320 × 740 passed checks across all eight routes for overflow, image loads, category links, article dates and email targets. Desktop and mobile WCAG A/AA scans reported zero violations. Actual localhost screenshots are in ignored .qa/research-review/. Physical-device and mailbox delivery checks remain open.

## Supplied research media

The founder supplied three simulator screenshots and six existing research infographics. Exact copies and SHA-256 inventory are saved under assets/research-originals. The 15 November 2026 split scene/point-cloud screenshot is the single featured homepage visual, with a full-resolution image link. Dates follow supplied filenames. Visible profile ex-incremental-parts code v6 is recorded, while commit, seed and complete settings remain unspecified.

Build and all three static tests passed after integration. Actual localhost rendering, original image dimensions, full-resolution navigation, overflow and WCAG A/AA scans passed at desktop and mobile widths. Review screenshots are in .qa/research-review/desktop-authentic-media.png and mobile-authentic-media.png. The screenshot satisfies the immediate static research-visual requirement. A verified recording remains an optional improvement.
