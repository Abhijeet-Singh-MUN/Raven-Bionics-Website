# Content and claims

Raven Bionics is a founder-led independent R&D venture. The site describes experimental software and simulation-based work. Real-world validation, commercial deployments, customers, funding and learned perception require separate evidence.

## Editing

Edit company identity, contact and hero copy in `src/content/site.ts`. Founder, official company details and email can stay empty. The founder supplied ravenbionics@gmail.com as the public contact address on 26 November 2026; footer and navigation direct to this email. Confirm mailbox access and test receiving before production publication.

Add to `studies` in `src/content/research.ts` with a stable slug, category, display date, title, summary, optional figure, sections and internal provenance. Archive entries use one of the four research category IDs in `group`. Homepage selections use `featured: true` and should be curated to approximately three entries. Founder writing uses `publishedAt` for ordering, and `originalUrl` for a discreet original LinkedIn publication link. The public research pages deliberately do not show a general Sources section; verified experimental notes and CSV supporting numerical claims remain stored with media. The archive, permanent article and sitemap are generated automatically. Set the homepage demo's studySlug to select a featured entry. A record can include the existing workload comparison table via resultsTable. Add new measurement tables with their own definitions and scope. Dates describe the study or catalogue publication as documented in its source notes.

## Research program

The homepage labels each theme by evidence level. **Current research** covers implemented simulation methods documented in the case studies. **Under investigation** identifies a research question and the comparison needed to answer it. **Research horizon** covers longer-term directions such as learned world models for Physical AI. Potential applications describe settings where the questions arise. Add public methods and results before moving a theme into current research.

## Evidence

- Experiment 05 is the editorial catalogue label supplied in the specification. Its plate shows a controlled fixture run against the simulator's actual spatial memory implementation. The 2,048 seed returns and 1,728 surface or mixed leaves describe different stages. It does not show a field trial or a recording of a browser run numbered 5.
- Simulated agents use range raycasts, metadata-derived camera detections, known poses, sparse spatial evidence, object-centered adaptive volumes, a semantic graph, heuristic attention and telemetry.
- The optimization study compared seven historical implementations with 24 simulated agents on one host. Four observations per version use a common 180-second browser window. The CPU and heap measurements use a separate equal-input 35,938-cell fixture. See the source notes and frame-rate CSV in `public/media/research/` for methods, input sizes, versions and limitations.
- The browser's throughput, matched-fixture CPU time and retained JS heap describe different quantities. Higher throughput does not establish accuracy or field performance. Retain each metric's units, baseline, workload and memory trade-off when revising copy.

Terrain and raven imagery are illustrative. Future investigations and potential applications have their own sections. Record supporting evidence before promoting an objective to a demonstrated result. The source simulator repository is private; publish only reviewed extracts suitable for this public website.

## Editorial status (26 November 2026)

The archive now groups two measured technical studies and four shortened, founder-authored LinkedIn writings/development notes. Publication metadata and original URLs are preserved where available. Website titles/teasers are edited summaries, not verbatim reproductions or peer-reviewed paper claims. The generated architecture illustration is retained in the asset inventory but removed from the homepage and spatial-memory article. The featured research section uses the founder-supplied 15 November 2026 screenshot showing the scene and full-memory point-cloud view. Its visible ex-incremental-parts code v6 label identifies the loaded profile. Commit, seed and settings remain unverified. On-screen FPS is a momentary observation and does not establish an additional benchmark.

The private Raven strategy repository is not a public source; do not copy business scenarios, personal information or confidential future plans into this website. Keep current implementation claims distinct from potential Physical AI/world model/ML research directions.
