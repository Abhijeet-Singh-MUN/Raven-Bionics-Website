# Raven Bionics — Website V1: Master Implementation Specification

## 0. Your role and primary objective

Act as a senior creative technologist, frontend architect, motion designer, UI/UX specialist and technical product engineer.

Design and implement the first public website for **Raven Bionics**, a founder-led, research-oriented venture focused on spatial intelligence, autonomous robotic systems and physical AI.

The goal is to create an exceptionally polished, visually distinctive, credible and maintainable company website.

**Prioritize:**
1. Business legitimacy, professionalism and trust.
2. Exceptional visual design and artistic coherence.
3. Clear communication of the company's identity and research.
4. Beautiful, restrained cinematic scrolling and transitions.
5. Authentic presentation of demonstrated technical work.
6. Fast loading, responsive design and accessibility.
7. Modularity, maintainability and future extensibility.
8. Minimal complexity, implementation effort and ongoing operating costs.

The desired aesthetic combines the sophistication of a premium technology company, the intellectual credibility of a scientific research laboratory and the atmosphere of restrained cinematic storytelling.

The website must not look like a generic AI startup template, gaming website, defense contractor landing page, sci-fi dashboard or portfolio masquerading as a company.

It should feel like a serious research organization with an ambitious long-term vision and real engineering substance.

**Important:** Implement a functional V1, not merely a proposal, wireframe or design document. Make reasonable design decisions independently. Do not interrupt implementation for minor unanswered aesthetic questions.

---

## 1. Repository and project boundaries

Before making changes:

- Inspect the current repository and determine its structure, dependencies, development environment and existing assets.
- Identify whether the website already has a dedicated project.
- If the repository contains the existing Raven Bionics simulator, do not disrupt its working functionality or change its algorithms.
- Prefer an independent website directory or application, with separate dependencies and build scripts.
- Reuse existing project material only where appropriate.
- Avoid introducing unnecessary infrastructure, databases, authentication or backend services.
- Preserve useful existing files and documentation.
- Inspect before modifying, and avoid unnecessary repeated diagnostic commands.

If working in an existing repository, establish an isolated implementation area for the website. Do not rewrite unrelated systems.

Begin by briefly describing the implementation architecture and intended file structure, then proceed with development.

---

## 2. Company identity and positioning

### Company name

Raven Bionics

### Working positioning

**Spatial Intelligence for Autonomous Systems**

### Company description

Raven Bionics is a research-led robotics and artificial intelligence venture investigating how autonomous machines perceive, represent, understand and interact with the physical world.

Its research currently emphasizes:

- Adaptive three-dimensional spatial representations.
- Task-directed perception and attention.
- Semantic spatial memory and scene representations.
- Multi-agent coordination and shared environmental understanding.
- Computational efficiency and resource-aware autonomy.
- Simulation-based experimental research and evaluation.

Its longer-term interests include learned perception, predictive world models, physics-aware intelligence, hybrid symbolic/neural architectures and collaborative autonomous systems.

These longer-term interests must be distinguished from implemented capabilities.

### Strategic positioning

The company should not be portrayed exclusively as a drone manufacturer, defense company, simulation software vendor or generic AGI laboratory.

Its underlying technical thesis is broader:

**Developing computational foundations that enable autonomous systems to maintain useful, adaptive and resource-efficient understanding of the physical world.**

Potential applications include robotics development, industrial inspection, infrastructure monitoring, autonomous exploration, construction, difficult-environment operations and collaborative robotics.

These are potential applications, not established commercial deployments.

### Stage of development

Describe the current work as independent R&D, an experimental research platform and working simulation prototypes.

Do not invent customers, funding, revenue, institutional affiliations, employees, patents, product certifications, deployed systems or endorsements.

Do not imply that Raven Bionics has already achieved capabilities that remain research objectives.

### Target audiences

The website should work for:

1. Researchers, academic institutions and research collaborators.
2. Robotics, AI and software engineering professionals.
3. Engineering recruiters and prospective employers.
4. Potential technical partners and industrial collaborators.
5. Future customers, institutional stakeholders and investors.
6. General visitors interested in the technology.

It must communicate technical substance without requiring every visitor to understand the underlying algorithms.

---

## 3. Artistic direction and visual identity

Create a visual identity described as:

**Cinematic Minimalism × Scientific Precision × Premium Technology**

The site should communicate intelligence, elegance, curiosity, scientific inquiry, technical sophistication, seriousness and long-term ambition.

### Preferred design characteristics

- Dark, sophisticated opening sequence.
- Exceptional typography and visual hierarchy.
- Carefully composed whitespace.
- Subtle, precise motion.
- Premium photographic imagery.
- Restrained lighting and atmospheric depth.
- Refined transitions between content sections.
- Strong readability and balanced contrast.
- Technical visual elements used purposefully.
- Cohesive composition across desktop, tablet and mobile.

Use a dark charcoal/midnight palette as the starting point, with muted cool tones and restrained metallic or luminous accents.

However, the color scheme must be configurable. Do not hard-code the entire identity around one palette.

### Reference artwork

The user has supplied AI-generated raven artwork as optional visual references.

The images communicate desirable qualities such as healthy plumage, intricate feathers, strong form, premium composition and subtle geometric elegance.

They are **not final approved logos, visual assets, company colors or mandatory artistic requirements**.

The raven does not need white plumage, blue eyes, sacred geometry or gold ornamentation.

Do not use the phrase "Superintelligence Labs" from the reference artwork as the company's official subtitle.

Do not reproduce elaborate decorative geometry simply because it appears in the reference images.

If using geometric ornamentation, keep it subtle and conceptually connected to sensing, spatial structures, mathematics and perception.

### Typography

Choose a polished typography pairing:

- A clean, highly legible modern typeface for body text and interface elements.
- A distinctive but restrained display treatment for major headlines.
- Optional monospace typography for experiment IDs, technical metrics and scientific annotations.

Avoid excessive font variation, enormous headlines without supporting substance, or decorative typefaces that compromise readability.

### Avoid

- Excessive neon, glowing circuitry and sci-fi motifs.
- Generic floating AI brains or robot illustrations.
- Military/tactical branding.
- Constant animation everywhere.
- Heavy parallax on every section.
- Gratuitous loading screens.
- Large blocks of meaningless marketing language.
- Fake counters, fabricated logos or unsupported performance claims.
- Generic SaaS landing-page components with no visual identity.

---

## 4. V1 scope and technical constraints

**Do not implement complex 3D assets or the full simulator in V1.**

Specifically, do not spend initial development effort on:

- Rigged raven models or skeletal animation.
- GLB/glTF environment loading.
- Full real-time 3D forests, cities or infrastructure.
- Physics engines.
- Live drone simulation.
- A working robotics control interface.
- Backend services.
- User accounts.
- Elaborate particle systems or volumetric effects.

Instead, use:

- High-quality static imagery.
- Optimized cinematic video where available.
- Lightweight CSS transforms and transitions.
- SVG-based composition and masks.
- Carefully constrained JavaScript animation.
- Optional lightweight Canvas rendering only when justified.
- Authentic simulator footage as a replaceable content asset.

The site should be complete and aesthetically coherent even when some final images or videos are not yet available.

All media must be replaceable without rewriting components.

Do not use arbitrary copyrighted imagery from online searches as production assets. Prefer user-provided assets, properly licensed local files or clearly labeled temporary placeholders.

---

## 5. Cinematic narrative and homepage flow

Create one coherent experience with the following progression:

**Identity → Perception → Spatial Representation → Research Evidence → Company**

The transitions should be smooth and meaningful.

The site must remain easy to navigate conventionally.

### ACT I — The Raven

The opening hero establishes the identity of Raven Bionics.

Visual direction:

A beautiful, healthy, photorealistic raven against a dark, carefully lit environment.

The composition should feel confident, powerful, elegant and mysterious without becoming theatrical or fantastical.

Use a licensed image, an approved local render or a well-designed temporary image placeholder.

Suggested heading:

**Spatial Intelligence for Autonomous Systems**

Suggested introductory copy:

"Advancing the foundations of autonomous intelligence through research in spatial perception, adaptive world representations and coordinated robotic systems."

Primary action: Explore Our Research.

Secondary action: View Experiments.

#### Signature transition 1: Through the eye

As the visitor scrolls:

1. The camera appears to approach the raven.
2. The framing gradually tightens toward its eye.
3. The eye becomes the focal point.
4. The pupil/eye region expands and becomes the transition portal.
5. The screen smoothly reveals the next environment.

This must feel deliberate, cinematic and seamless.

Do not implement an expensive 3D raven simply to achieve this effect.

Preferred initial implementation:

- High-resolution imagery or a short pre-rendered sequence.
- Scroll-linked transforms.
- Controlled scale/position animation.
- Mask or opacity-based compositing.
- Optional intermediate eye-detail image if necessary.

The animation should be spatially coherent and avoid visibly stretching low-resolution images.

Provide a graceful fallback if suitable source media is unavailable.

### ACT II — The World

Introduce an attractive environmental scene.

The intended eventual visual is a small realistic environment combining natural terrain, trees, rocks and limited constructed infrastructure.

For V1, represent it using a high-quality static image, illustration or pre-rendered sequence.

The sequence should suggest a transition from an elevated or top-down perspective into a beautiful oblique/isometric view.

Suggested statement:

**Intelligence begins with perception.**

Supporting explanation:

"Autonomous systems operate in complex, changing environments. To act effectively, they must build useful representations of the world from incomplete observations, while balancing computational resources and task priorities."

The section should communicate the core problem Raven Bionics investigates.

#### Signature transition 2: World → Reconstruction

The environment progressively reveals alternative representations:

1. The complete visual environment.
2. Simplified structural geometry.
3. Sparse observation points or point-cloud imagery.
4. Voxel or spatial memory visualization.
5. Semantic objects and relationships.
6. Transition into actual experimental simulator footage.

This is a visual storytelling effect, not a claim that the website itself is performing real-time reconstruction.

For V1, implement it through layered imagery, overlays, masks, opacity changes or pre-rendered media.

Ensure the transitions preserve approximately consistent scene composition and camera alignment.

If suitable matching visual layers are unavailable, create a clean fallback with two or three carefully composed representation states rather than generating inaccurate or misleading visualizations.

Avoid unnecessary geometry explosions, excessive camera spins or elaborate cinematic destruction effects.

### ACT III — The Research System

Introduce Raven Bionics' actual implemented experimental work.

This is the most important credibility section.

Use genuine screenshots, videos or verified visualizations from the existing research simulator.

Do not create a fake working simulator UI.

The section may show:

- Simulated multi-agent autonomous behavior.
- LiDAR-style range observations.
- Sparse spatial mapping.
- Adaptive object-centered voxel structures.
- Semantic scene relationships.
- Task-directed sensing and attention.
- The relationship between spatial evidence and system behavior.

Present it within a beautiful, minimalist media frame.

Allow the site to provide short explanations or selectable demonstration views, but keep the interaction simple.

The visitor should understand that this is actual implemented experimental research.

Include a subtle, readable indication that the current demonstration is simulation-based.

Do not claim image-derived semantic perception, deployed SLAM, learned navigation or operational physical autonomy unless supported by actual project evidence.

### ACT IV — The Research and Evidence

Transition from the cinematic simulation demonstration into a clean, technical, publication-like content section.

The transition can use subtle fading of points, geometric lines or a gradual change in background and layout.

The objective is to shift from emotional engagement to intellectual credibility.

Present:

- Research areas.
- An overview of the implemented system.
- Selected experimental results.
- Technical case studies.
- Research methods.
- Current limitations.
- Future investigation areas.

Use actual measurements only when their experimental context is accurately preserved.

Avoid decorative charts using invented datasets.

### Final section — The Organization

Conclude with a concise, credible introduction to Raven Bionics as an organization.

Explain the venture's research-led nature, mission, technical focus and opportunities for research or engineering collaboration.

Provide a professional contact route.

The closing may feature a restrained raven image or simple company mark, but does not require another complicated cinematic sequence.

---

## 6. Website content architecture

Build these sections as independent, reusable components:

1. Hero / Identity.
2. The Problem.
3. Research Focus.
4. Research in Motion.
5. Experimental Evidence.
6. Applications and Future Research.
7. About Raven Bionics.
8. Contact / Footer.

The final page should not feel like eight disconnected landing-page sections.

Group content through thoughtful transitions and layout continuity.

### Navigation

Recommended primary navigation:

- Research
- Technology
- About
- Contact

Include a clear path to experiments.

On V1, Technology may be a homepage anchor rather than a dedicated page.

Support direct anchor navigation and standard browser behavior.

### Research page

Create a research listing that can grow as new experiments and studies are published.

Each research entry should support:

- Title.
- Experiment ID or category.
- Date.
- Brief description.
- Associated images/videos.
- Technical details.
- Results.
- Limitations.
- Related material.

Initially support an entry for:

**Experiment 05 — Adaptive 3D Reconstruction & Spatial Attention**

Also prepare the structure for the completed algorithmic optimization case study.

### Technical case-study page

Build a clean publication-style layout for research articles, with room for:

- Abstract or overview.
- Research problem.
- System architecture.
- Experimental methodology.
- Results and figures.
- Resource trade-offs.
- Limitations.
- References.
- Optional downloadable supporting evidence.

Research pages should be readable, linkable, indexable and independent of the homepage's animation systems.

### About page or section

Keep it concise and accurate.

Present Raven Bionics as a founder-led research and development venture.

Do not fabricate a team, advisory board, funding history, corporate registration or institutional partnership.

Provide editable fields for founder information, official company details and contact methods.

### Contact

Provide a clear professional contact method, preferably a configurable email link.

Do not introduce a backend contact form unless needed.

Do not invent an email address.

---

## 7. Research content accuracy

The website must distinguish actual achievements from proposed future research.

### Existing research

The working simulator includes:

- Simulated multi-agent behavior.
- Raycast range sensing.
- Metadata-based simulated camera detections.
- Sparse world-grid spatial evidence.
- Adaptive object-centered volumetric structures.
- Semantic scene-graph representations.
- Task-directed sensing and heuristic attention.
- Telemetry, instrumentation and experimental analysis.

The implementation uses simulated poses and metadata. It should not be described as an independently validated real-world perception system.

### Performance study

A completed historical optimization study evaluated seven implementations with 24 simulated agents.

Relevant recorded results include:

- Median application FPS: 0.59 → 11.51.
- LiDAR ray throughput: 897 → 5,080 rays/second.
- Semantic observation throughput: 659 → 3,812 observations/second.
- Matched 35,938-cell CPU fixture: 550.4 → 6.7 milliseconds for 96 observations plus graph summary.
- Approximately 43% higher retained JS heap in that matched fixture.

These figures are workload-specific, from a controlled study on one host.

Do not represent them as universal reconstruction speedups, validated accuracy improvements or results on physical robots.

Keep this data in a centralized research-content file with explicit experiment metadata and source notes.

If the supporting documents are not accessible in the repository, do not create fabricated citations or a complete technical article. Create an appropriately labeled summary and mark the detailed case study as awaiting verified source material.

### Future research

Possible directions:

- Bayesian optimization and parameter tuning.
- Learned perception integration.
- Predictive and temporal spatial models.
- Resource-aware neural-assisted controllers.
- Physics-aware modeling.
- Collaborative multi-agent systems.
- More generalized robotic embodiments.

These must appear as planned research, not completed features.

---

## 8. Content system and future editing

All major website content should be centralized.

Create maintainable content structures for:

- Company identity.
- Hero copy.
- Navigation.
- Homepage sections.
- Research entries.
- Research metrics.
- About information.
- Contact information.
- Media references.
- Future research themes.

Use TypeScript objects, JSON, Markdown or another straightforward static content system.

Avoid hardcoding extensive content throughout components.

The site should support changing a headline, replacing a video, switching a raven image, modifying a section description or adding research entries with minimal effort.

Make section order configurable if feasible without compromising simplicity.

Use meaningful real draft copy, not generic lorem ipsum.

Mark incomplete content explicitly rather than silently inventing information.

Do not publish unfinished placeholder research findings as established results.

---

## 9. Motion design system

Use a consistent animation philosophy.

### Principles

- Animation serves narrative or spatial understanding.
- Transitions should feel smooth and physically coherent.
- Scroll behavior should remain predictable.
- Motion should be restrained outside the two signature transitions.
- Text should remain readable.
- Animation must not delay access to essential content.
- Avoid performance-heavy effects with little communicative benefit.

### Implementation

GSAP and ScrollTrigger are acceptable where appropriate.

Prefer CSS transitions for simple effects.

Use isolated, reusable animation controllers rather than scattering scroll logic throughout components.

Create clear interfaces for:

- Animation timing.
- Scroll progress.
- Media transitions.
- Reduced-motion behavior.
- Responsive variants.

Avoid unnecessary scroll hijacking.

Support direct navigation to any section.

If an animation needs to preload media, ensure this does not block the entire website.

### Reduced motion

Respect `prefers-reduced-motion`.

Provide a complete alternative flow without zoom-heavy or continuous movement.

Ensure that skipping animation does not hide content.

### Mobile

Do not simply shrink the desktop cinematic composition.

Design mobile-specific crops, transitions and pacing.

Disable or simplify expensive sequences where appropriate.

Prioritize legibility and touch navigation.

---

## 10. Technical architecture

Use a modern, static-hostable frontend stack.

**Preferred default:** React + TypeScript + Vite, with clean component architecture.

Use an appropriate styling approach that supports centralized design tokens. Tailwind CSS is acceptable, but avoid excessive dependencies or design-system overhead.

Use GSAP only where it materially improves the cinematic transitions.

No backend is required.

The final application must produce a static build suitable for Cloudflare Pages, Vercel or another static host.

Do not assume a paid hosting plan.

If implementing in an existing project, avoid interfering with the research simulator's dependency tree and development scripts.

### Suggested component organization

- Layout and navigation.
- Hero / Raven sequence.
- Eye transition.
- World representation section.
- Reconstruction transition.
- Research demonstration.
- Research evidence.
- Applications.
- About and contact.
- Footer.
- Shared motion utilities.
- Shared media components.
- Content configuration.
- Design tokens.

The specific directory structure can be refined for simplicity.

### Component requirements

Every major section should be independently editable and replaceable.

Avoid tightly coupling content, animation and media assets.

Use reusable mechanisms for media loading and scene transitions.

Maintain stable asset interfaces so a static image can later be replaced with video or interactive 3D without restructuring the whole site.

Do not add complex abstraction layers merely for hypothetical features.

---

## 11. Asset management

Create a structured asset directory for:

- Company identity.
- Raven imagery.
- Eye-transition imagery/video.
- Environment imagery/video.
- Spatial reconstruction representations.
- Real simulator screenshots and video.
- Research figures.
- Fonts and icons.

Use descriptive filenames and consistent naming.

Create a centralized asset manifest recording:

- Asset identifier.
- File path.
- Description.
- Source/creator.
- License.
- Attribution requirements.
- Whether it is temporary or production-approved.
- Approximate dimensions/size where relevant.

Do not hotlink third-party images as permanent production assets.

Do not download premium, copyrighted or unlicensed media through unauthorized means.

Use local licensed assets where available.

If a production asset is unavailable, create an elegant placeholder that preserves layout, aspect ratio and animation behavior.

Do not make asset acquisition a blocker for the initial site implementation.

### Future asset replacement

Document how to replace:

1. Raven hero image.
2. Eye zoom imagery or video.
3. Environment image.
4. Representation layers.
5. Simulator demonstration.
6. Research figures.

No complicated 3D asset pipeline is needed for V1.

---

## 12. Performance, accessibility and SEO

Performance is a first-class design constraint.

### Performance

Aim for strong Core Web Vitals:

- LCP ≤ 2.5 seconds.
- INP ≤ 200 milliseconds.
- CLS ≤ 0.1.

These are performance targets, not guarantees.

Optimize:

- Initial media load.
- Responsive image variants.
- Modern image formats.
- Video poster frames.
- Font loading.
- Lazy loading below-the-fold media.
- Animation frame work.
- JavaScript bundle size.
- Layout stability.
- Mobile network behavior.

Use scroll-linked animations carefully.

Avoid continuous rendering loops unless necessary.

### Accessibility

- Semantic HTML.
- Proper heading hierarchy.
- Keyboard-friendly navigation.
- Visible focus states.
- Sufficient contrast.
- Accessible links and buttons.
- Alternative descriptions for informative visuals.
- Reduced-motion support.
- Accessible mobile menu.
- No essential content available only through animation.

### SEO

Provide:

- Meaningful page titles.
- Meta descriptions.
- Social preview metadata.
- Open Graph images.
- Canonical URLs where appropriate.
- Sitemap.
- Robots configuration.
- Appropriate organizational structured data using only verified company information.

Use descriptive headings and indexable research content.

Do not allow cinematic effects to prevent search engines from reading the text.

---

## 13. Documentation and engineering discipline

Maintain concise, useful documentation alongside implementation.

Create or update:

### README.md

Project purpose, architecture, installation, development commands, production build, deployment process and troubleshooting.

### docs/WEBSITE_DESIGN.md

Design philosophy, visual system, page structure, typography, colors, spacing, component responsibilities and responsive behavior.

### docs/CONTENT_AND_CLAIMS.md

Business positioning, editable content locations, verified technical claims, known limitations, source requirements and distinctions between present capabilities and future research.

### docs/MOTION_AND_MEDIA.md

Animation sequences, scroll behavior, transition implementation, media interfaces, fallbacks and reduced-motion behavior.

### docs/ASSET_MANIFEST.md

Asset inventory, licensing, attribution and replacement instructions.

### docs/ROADMAP.md

Completed V1 scope, deferred functionality and opportunities for subsequent versions.

Avoid producing numerous redundant documents.

Update existing relevant documentation instead of creating duplicates.

Clearly identify incomplete or temporary features.

Record important design and architecture decisions so another developer or future Codex session can understand and continue the project efficiently.

---

## 14. Quality assurance and acceptance criteria

The website is ready for V1 review when:

- It builds successfully.
- It runs as a standalone static site.
- It has a visually coherent premium identity.
- Navigation works on desktop and mobile.
- The hero communicates Raven Bionics' technical focus clearly.
- The raven-eye transition has a working implementation or a polished media-independent fallback.
- The world-to-reconstruction transition works using replaceable layers/media.
- Research and evidence sections are populated with accurate available material.
- The site does not misrepresent research maturity.
- No unrelated simulator functionality is affected.
- No unlicensed third-party assets are used.
- Mobile layouts are intentional.
- Reduced-motion support is implemented.
- Basic accessibility is verified.
- Console errors and broken links are addressed.
- Documentation is current.
- No unnecessary backend, database or heavy 3D dependency has been added.

Where browser testing is available, inspect the rendered website at representative desktop, tablet and mobile widths.

Check visual composition, scroll continuity, overflow, focus behavior, media loading and transition smoothness.

Do not merely assert that the site looks correct based on compilation.

Where browser testing is unavailable, state the limitation and perform the available static/build tests.

---

## 15. Implementation workflow

Proceed incrementally, but work toward completing V1 within this task.

### Phase A — Repository inspection and architecture

Inspect the project and select the simplest appropriate implementation structure.

Identify any existing media and research materials that are safe to use.

Establish basic architecture and documentation.

### Phase B — Design system and complete static layout

Implement the visual identity, typography, navigation, homepage sections, research listing and contact structure.

The website should already be elegant and functional without animations.

### Phase C — Signature cinematic transitions

Implement the raven-eye transition and world-to-reconstruction transition.

Use media-independent components and lightweight animation techniques.

Focus on quality rather than quantity.

### Phase D — Research credibility

Integrate verified research copy, accurate experiment summaries, selected results and links to research pages.

Keep research content separate from visual animation components.

### Phase E — Responsive refinement and testing

Improve mobile experience, loading, accessibility and consistency.

Complete documentation and build verification.

Do not stop at a partial mockup if further implementation is feasible.

---

## 16. Final deliverables and handoff

Deliver:

1. Working V1 website implementation.
2. All source code and necessary configuration.
3. Responsive desktop/mobile design.
4. Raven hero and eye-zoom experience.
5. World-to-reconstruction transition.
6. Research and company content sections.
7. Expandable research article infrastructure.
8. Editable asset and content configuration.
9. Static production build.
10. Updated engineering/design documentation.

In your final response, provide:

- Summary of implementation.
- Major files/components created or modified.
- Commands to run locally.
- Build and test results.
- Assets that are still placeholders.
- Unresolved issues or limitations.
- Specific steps for replacing temporary media with final assets.
- Recommended next improvements, prioritized by impact.

**Final guiding principle:**

Build Raven Bionics as an ambitious but credible research organization. Make the experience beautiful enough to be memorable, technically substantive enough to inspire confidence, and modular enough to evolve as the company's research and business direction develop.

Restraint, precision, authenticity and visual excellence should define every implementation decision.