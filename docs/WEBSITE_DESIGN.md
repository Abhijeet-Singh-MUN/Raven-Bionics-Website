# Website design

The opening pairs a naturalistic portrait with a legible statement of the research question. A side-lit eye anchors the composition. Below it, light paper sections and dark figure plates recall a technical publication. Terrain artwork introduces perception before the site presents evidence from a different, explicitly identified simulator fixture.

## Typography and tokens

Change the custom properties at the top of `src/styles.css`. Near-black green, pale paper, ink and muted mint establish the palette. Instrument Serif sets titles and italic emphasis. DM Sans handles prose, controls and scientific captions. Only three Latin WOFF2 files are served. The hero title scales from 62 to 94 px on desktop with a 1.035 line height. The italic line has a narrower measure to leave space beside the beak. In portrait tablet layouts the text sits lower, beneath the head. Short 8 px rules identify section labels; the longer italic species caption retains its own rule. Body line lengths and margins scale with viewport width. Thin rules group related information; focus rings and underlined text links remain visible.

A charcoal and silver-blue trial gave the portrait a cooler cast. The mint accent connects the natural plumage to the sage terrain in the original Forest & Mint palette. Forest & Parchment — Woodland is now the selected default. The header, footer and favicon share a right-facing raven profile with a domed crown, deep arched bill and projecting throat hackles. Three silhouettes were compared at favicon, header and footer sizes. The selected mark uses two large feather breaks so its outline stays legible at 16 px.

## Page structure

`Layout.tsx` owns the masthead, home link, primary navigation, skip link, footer and public inquiry route. `Home.tsx` composes the identity, perception, focus, demonstration, evidence, outlook and organization sections. Change the composition in its Home function to reorder sections. `Research.tsx` owns the archive, publication header, figure, article body, results table and source links. Content lives in `src/content/`.

Desktop uses a split editorial composition. Mobile places the portrait above the text with a separate crop, stacks feature columns, and offers a disclosure menu with Escape support. Tablet portrait retains a side-by-side hero and a shorter static sequence. The menu and page links are available when JavaScript is disabled. Buttons inside the terrain figure provide an alternative to scroll-driven state changes.

## Page addresses

- `/` for the narrative and the technology, experiments, about and contact anchors.
- `/research/` for the archive.
- `/research/adaptive-3d-reconstruction/` for Experiment 05.
- `/research/incremental-computation/` for the optimization case study.

Each article has a stable directory URL, a unique title, its own summary and source material. All descriptive text is in the initial HTML.

## 26 November 2026 editorial update

Hero title is now title case in both lines and **not italicized**; the second line remains a distinct accent color. The `Corvus corax` caption remains. Added Home and route-aware Back navigation on research routes. The selected perched raven now accompanies the existing wordmark. Its canonical SVG remains byte-identical to the supplied source. Research archive has separate technical studies and founder writing sections.

## Initial eight-theme comparison (superseded by hybrid evaluation)

The selected symbol remains public/media/identity/perched-raven.svg, byte-identical to assets/branding/raven-bionics-perched-raven-clean.svg. Its original paths and orientation are unchanged. The favicon still derives from the canonical SVG. Scientific images, charts and video receive no palette filters.

The local preview branch is preview/eight-theme-comparison, based on main at c9d00fe. Its initial temporary default was Charcoal & Warm Ivory. The navigation Theme selector offers all eight requested palettes, including Forest & Mint. Reset clears the saved preference and restores the configured default.

Edit themeComparison.enabled and themeComparison.defaultTheme in src/content/themes.ts. Disabling the flag removes the selector and the early theme restoration script and uses the original Forest & Mint fallback tokens. Remove options from themeOptions to retain an approved shortlist, keeping the configured default in the list. Theme colors are centralized in src/styles.css through semantic custom properties and data-theme selectors. The earlier three-theme query preview module and stylesheet have been removed.

The document head validates and restores raven-bionics.theme from localStorage before the stylesheet is applied. The selector changes the current page immediately. Its saved preference carries across refreshes and navigation. Blocked storage still allows selection on the current page. The native select and Reset button support keyboard use. Mobile selection keeps the menu open, while navigation links close it.

Dark photographic overlays retain their existing values. Theme accent colors apply to dark-background headings, controls and symbols. Light reading surfaces use dark primary and muted text colors. Focus rings use distinct light-surface and dark-surface tokens. Header wrapping below 1200 pixels accommodates the temporary selector.

Actual screenshots of all eight palettes at desktop and mobile sizes are stored in ignored .qa/eight-theme-review/. Open review.html for the complete screenshot gallery. The priority comparison order is Charcoal & Warm Ivory, Deep Olive & Limestone, Obsidian & Champagne and Forest & Mint.

This branch is for local evaluation. A permanent palette selection and any production integration require user approval.

Validation for the eight-theme comparison passed npm run build and all five tests. Chrome checked all eight routes in each of the eight themes at desktop and mobile sizes, including automated WCAG A/AA scans. Header checks also covered 320, 820, 1024 and 1280 pixels. Numerical checks confirmed normal text contrast of at least 4.5:1 and focus-ring contrast of at least 3:1 for the sampled semantic pairs. Keyboard selection, persistence, refresh, reset, blocked-storage behavior, normal motion and reduced motion passed. Original artwork and motion source files have no changes on this branch. Physical-device and Safari/Firefox verification remain open.

## Different Temperatures for Different Experiences

Raven Bionics uses complementary visual environments to support identity, reading and technical inspection. The photographic opening establishes curiosity and exploration. Warm editorial surfaces support sustained attention to research. Dark technical exhibits give experimental media a focused setting. The result should convey quiet prestige through clear typography, accurate evidence and restrained color.

This principle is permanent design guidance and remains relevant after the temporary theme selector is removed.

### A. Homepage — Atmospheric, Dark, Immersive

The opening establishes identity, intelligence, mystery and exploration through the raven portrait, spatial depth and natural lighting. Keep the photographic composition, framing and eye-to-valley transition as the visual anchors.

Use deep forest, near-black charcoal, muted silver and selective sage or mint highlights. Preserve the original photographic atmosphere. Strong brown overlays, sepia filters, artificial warming and recoloring the valley would weaken the connection to natural imagery. Let the image and its lighting carry the opening, with restrained typography and controls.

### B. Research & Articles — Warm, Intimate, Intellectual

Research pages support comfortable long-form reading, scientific credibility and trust. Use parchment, linen, limestone or warm off-white surfaces with deep warm-charcoal typography. Muted forest or moss links provide a connection to the opening identity.

Keep generous spacing, subtle dividers and consistent editorial typography. Present methods, limitations and evidence in the style of a carefully designed scientific publication. Choose backgrounds with enough neutrality for prolonged reading. Avoid excessive yellow or brown saturation, decorative textures and ornamental treatments.

The light surfaces in research-oriented homepage sections follow the same rules. A homepage can combine immersive imagery with clear editorial sections.

### C. Technical Exhibits — Dark, Precise, Focused

Demonstrations, simulator captures and experimental image plates use deep forest-charcoal framing. Restrained warm-neutral captions and thin rules connect these exhibits to the editorial pages.

The exhibit provides context around technical media. Preserve original pixel colors in screenshots, scientific graphs and video, since color can encode observation types, experimental versions or other meaning. Aesthetic recoloring can obscure that meaning and undermine comparisons. Use the supplied image, figure and caption together with its measurement context.

The homepage simulator section, terrain plates and dark framing around article figures implement this environment. No new gradients, glows or image filters are part of the hybrid treatment.

### Coherence across the environments

Use the same logo artwork, typography, spacing, navigation conventions and interactions throughout. On dark forest surfaces, the hybrid themes use an ivory raven symbol beside the established wordmark. Light placements use the dark charcoal symbol. Artwork paths and proportions remain unchanged.

Transitional surfaces can connect dark imagery with warm reading sections. An illustrative tonal relationship is Deep Forest #101413 → Moss #36463F → Stone #E6E7DF → Parchment #F4EEE3. This describes related surface colors. The current implementation uses solid section backgrounds.

For future sections, identify the reader's purpose first. Choose the atmospheric environment for an opening or identity moment, the editorial environment for sustained reading, and the technical exhibit environment for close inspection of experimental media. Reuse semantic tokens for the chosen environment. Use dark moss links on light paper, and reserve the pale mint accent for dark surfaces. Warm accents support small rules and details, with ordinary text remaining in contrast-tested text colors.

### Hybrid palettes

| Token | Forest & Parchment | Forest & Linen |
| --- | --- | --- |
| Hero/header background | #101413 | #101413 |
| Dark section background | #192523 | #192523 |
| Primary reading background | #F4EEE3 | #F3F1E9 |
| Alternate reading background | #E9E5DB | #E8E8DF |
| Main light-surface text | #2C2924 | #292C29 |
| Secondary text | #655D53 | #5F655D |
| Editorial links | #596B51 | #526B58 |
| Hero accent | #B6D8C4 | #B6D8C4 |
| Selective warm accent | #A48165 | #A79780 |
| Light dividers | #D8CCBC | #D5D6CC |

Forest & Parchment combines the cool opening and technical exhibits with warm parchment, moss links and selective walnut-colored rules. Forest & Linen offers the same structure with less yellow in its reading surfaces and slightly cooler charcoal text.

The hybrid theme IDs are forest-parchment and forest-linen. The earlier eight IDs and palette declarations remain intact. Forest & Parchment was the temporary hybrid-evaluation default; the selected default is now Forest & Parchment — Woodland. An explicitly saved valid selection continues to take precedence. The current Theme menu applies the chosen entry immediately; it has no Reset control.

### Temporary selector and later simplification

The current local selector offers eleven themes, with Forest & Parchment — Woodland first and the other ten in their existing relative order. The feature flag and option list remain in src/content/themes.ts, with palette definitions in src/styles.css. To reduce the list, retain the approved entries and keep the configured default among them.

Disabling the evaluation flag currently restores the original Forest & Mint fallback and removes the comparison controls. Once a permanent palette is approved, retain its data-theme value on the document root and its semantic palette, then remove the selector, storage handlers and restoration script. Keep the three-environment guidance in this document.

The hybrid implementation modifies src/content/themes.ts, src/components/Layout.tsx, src/styles.css, README.md and this document. Layout.tsx marks the configured preferred default independently of the selected theme. Existing theme persistence, navigation, content and motion code are reused.

### Hybrid evaluation results

The production build and all five existing tests passed. Chrome checked all eight routes for the four requested comparison themes at 1440 × 900 and 390 × 844, including automated WCAG A/AA scans, image loads, overflow, persistence and reset. Additional header checks covered 320, 820, 1024 and 1280 pixels.

Numerical checks confirmed readable text, moss links and focus indicators for both hybrid palettes. Existing saved choices remain active after refresh. The current Theme menu preserves the configured default and saved-theme distinction. Runtime checks confirmed all original eight palettes retain their dark, surface, reading and accent tokens. Normal eye-to-valley motion and reduced-motion behavior passed.

Screenshots cover the hero, transition to light content, archive, performance article, technical demonstration, header and footer for all four themes at desktop and mobile sizes. The complete local gallery is .qa/hybrid-theme-review/review.html. Parchment produces the warmer editorial surface. Linen is less yellow and closer to a neutral paper. Both hybrids preserve the forest opening and technical exhibit backgrounds. Physical-device and Safari/Firefox review remain open.

This evaluation remains on the existing local preview branch with its earlier pending work preserved. Production main and the approved artwork, hero assets, scientific media, research content and motion source have no changes from this hybrid task.

## Forest & Parchment — Woodland

Woodland is the selected preferred profile with ID forest-parchment-woodland and is listed first. New visitors receive it immediately from the server-rendered data-theme attribute on every page. The existing inline bootstrap restores any valid manually saved preference before the stylesheet loads; it does not replace that preference with the new default. The Theme menu stays closed until opened, and its active checkmark is synchronized before it becomes available. There is no separate Reset button or select box. All other themes remain available with their IDs, palette values and relative order unchanged. Without the motion enhancement, the Woodland header has a solid forest fallback so the new default also remains readable without scripting.

### What the original establishes

Forest & Parchment pairs warm paper and warm ink with a forest atmosphere. Its About Raven Bionics typography, spacing and composition create a strong editorial ending, followed by the deep-green Research Inquiries footer. These relationships, the perched-raven artwork and the existing photographic opening are the reference for this refinement.

### Woodland's color progression

Woodland introduces neutral oak, stone and taupe warmth through the reading environment. The homepage begins at the original parchment and becomes richer toward About. The intended warmth comes from aged oak and earth, with restrained saturation and minimal red or orange undertones.

| Implemented candidate token | Color | Use |
| --- | --- | --- |
| Deep forest | #101413 | Solid page headers and the scrolled homepage navbar |
| Forest charcoal | #192523 | Technical exhibits and Research Inquiries footer |
| Original parchment | #F4EEE3 | Beginning of editorial content and ivory logo treatment |
| Warm linen | #EEE6DA | Early-to-middle reading surfaces |
| Natural stone | #E7DDCE | Middle reading progression and end of research-page backgrounds |
| Weathered oak | #DFD3C1 | Later homepage editorial content |
| Warm aged wood | #D7C8B2 | End of the homepage near About |
| Warm ink | #2C2924 | Main reading text |
| Muted reading text | #595349 | Secondary text with sufficient contrast at the deepest wood stop |
| Deepened editorial moss | #495A42 | Links and light-surface focus rings |
| Soft mint | #B6D8C4 | Selected dark-section highlights and dark-surface focus rings |
| Muted oak-taupe | #8B785F | Selective decorative rules |
| Stone divider | #CDBFAE | Light-section rules |

The muted text and moss link colors are deeper than the original profile's #655D53 and #596B51, so ordinary text remains readable on #D7C8B2. Warm accent colors support small rules instead of ordinary text. Logo paths, colors inside research images and article content are unchanged.

### A content-length-adaptive editorial background

A neutral editorial-flow wrapper contains the homepage sections after the hero. Only Woodland paints a single parent gradient behind that wrapper. Stops use percentages of the wrapper's actual height, progressing through parchment at 0%, linen at 30%, stone at 60%, oak at 82% and aged wood at 100%.

Woodland's light child sections are transparent, revealing that continuous parent background. Research Outlook uses the solid Dusk Slate Blue treatment documented below. The same parent gradient continues beneath it and resumes in About. The technical demonstration and image plates remain opaque forest-charcoal exhibits. The progression continues behind those exhibits and resumes afterward. It never restarts at individual reading-section boundaries.

Research pages use their main content container for a quieter parchment-to-linen-to-stone progression. Each page's gradient scales with its actual article or archive length. No fixed document height, background scroll calculation or per-section gradient script is involved.

The About section retains its original font treatments, spacing and composition. It receives the deepest wood tone from the parent background. The sibling Research Inquiries footer stays solid #192523, preserving a crisp warm-to-forest contrast.

### Atmospheric and normal headers

The original header occupies a separate row above the hero. Woodland keeps that row in normal flow, preserving the existing hero offset, image framing and headline positions. On the homepage it becomes sticky and initially transparent over the same near-black foundation used by the hero. This removes the distinct header strip without shifting or recropping the photograph.

Woodland's cinematic navbar visibility is driven by the existing hero update in src/motion.ts, using the same passive scroll subscription and animation frame as the eye and valley. The former independent header scroll updater in themes.ts is removed. Theme changes notify the motion controller, and its ResizeObserver tracks the closed header height for section anchors and the centered perception figure.

The entire masthead remains visible at the opening, fades out over 24–40% of hero progress, and is fully hidden before the aperture opens at 40%. Its background, wordmark, symbol, text and controls fade together. The header is inert and hidden from accessibility APIs throughout the fade and hidden interval; any focus inside is removed before this happens. At zero opacity, visibility is hidden as well. No link or menu remains clickable or tabbable.

When the Perception section first enters the viewport, the masthead fades back over the next 20% of viewport height, capped at 180px. Its forest background is already solid during restoration. At full visibility its interaction is restored. It then remains fully visible and solid for the rest of the homepage. Both scroll directions use the same reversible mapping, with no opacity transition queue or layout-height changes.

Phones and portrait tablets use the responsive cinematic strategy documented below, including the same complete-navbar fade and solid restoration. Reduced motion retains a static hero and keeps the navbar visible and solid throughout. Research pages retain their original solid forest header. Switching away from Woodland clears temporary opacity, visibility, inert and accessibility state.

### Different Temperatures for Different Experiences

The permanent three-environment principle continues to apply. The photographic opening provides the atmospheric, dark and immersive identity. The editorial environment supports warm, intimate and intellectual reading. Technical exhibits provide dark, precise and focused inspection of accurate scientific media.

Keep natural image colors and the shared logo, typography and spacing. Future sections should join the appropriate environment. The woodland progression belongs to editorial content containers, while technical media and the footer retain their distinct dark surfaces.

### Implementation and validation

This task modifies src/content/themes.ts, src/themes.ts, src/components/Home.tsx, src/render.tsx, src/styles.css and docs/WEBSITE_DESIGN.md. The new option is appended to the existing dropdown. Home.tsx adds the neutral content wrapper, render.tsx identifies home/research page context, styles.css scopes all Woodland styling to its theme ID, themes.ts manages palette selection, and motion.ts synchronizes its homepage header with the existing hero update.

Build and all five existing tests passed. Chrome checked both original Forest & Parchment and Woodland across all eight routes at desktop and mobile sizes, including automated WCAG A/AA scans, overflow, image loading, persistence and reset. Header responsiveness also covered 320, 820, 1024 and 1280 pixels.

Before/after layout measurements matched exactly for the original theme. Woodland also retained the measured hero geometry, About typography and section spacing. A content-growth test added 600 pixels to the editorial flow and confirmed that the parent gradient stretched with it. Text and link contrast passed 4.5:1 at all five background anchors, with focus contrast above 3:1. Sticky navigation kept the About anchor visible. Normal eye-to-valley and reduced-motion checks passed.

The local screenshot gallery is .qa/woodland-review/review.html. It includes initial load, scrolled navigation, continuous full-page comparisons, the hero-to-light transition, middle editorial sections, About, footer, and a representative article at desktop and mobile sizes. Woodland develops a noticeably richer oak tone toward About while retaining the original deep-green footer. Physical-device and Safari/Firefox validation remain open.

### Research Outlook — Dusk Slate Blue

Woodland's selected four-part rhythm is **warm woodland editorial → Dusk Slate Blue Research Outlook → richer aged-wood About Raven Bionics → Deep Forest Research Inquiries**.

The warm editorial environment grounds the current research in readable, material warmth. Research Outlook introduces a reflective mineral-blue interval for scientific possibilities beyond the current experiments: intellectual depth, horizons, possibility and reflection. The warm ivory heading and restrained parchment accent connect this cooler interval to the surrounding woodland palette. About returns to the richer aged-wood progression and its human, grounded warmth; the deep forest footer provides the final strong contrast and a focused place for research inquiries.

| Selected Outlook role | Hex color |
| --- | --- |
| Solid Dusk Slate Blue background | #354650 |
| Main heading and subheadings, warm ivory | #F3EEE5 |
| Body text | #D9E0DE |
| Eyebrow and selective accents | #D7C5A8 |
| Original subtle rule | #62727A |

The background is a single opaque fill. There is no Outlook gradient, moss veil, card, frame or extra section border. The original two-column desktop layout, stacked mobile layout, type sizes, font families, paragraph spacing and full section padding apply unchanged. The added outer borders and internal separator from the distinction experiments are removed. Only the original tiny eyebrow rule remains, colored #62727A.

All styling is scoped to forest-parchment-woodland and its Outlook section. The parent woodland gradient, About styling, footer and other themes retain their values. The reading progression continues beneath the solid Outlook surface and resumes in the aged-wood About section.

Desktop/mobile review screenshots and numerical checks are saved under .qa/woodland-dusk/. Contrast against #354650 is 8.48:1 for headings, 7.31:1 for body text and 5.80:1 for accents; all pass WCAG AA for ordinary text. Chrome checks at 1440px and 390px confirmed the exact palette, original geometry and typography, removal of the experimental dividers, and no horizontal overflow. Before/after style snapshots matched for About, the footer, the parent gradient and all ten other themes. Automated WCAG A/AA scans found no violations. The production build and all five tests passed. Physical-device and Safari/Firefox checks remain outstanding.

### Perception asset refinement

The terrain exhibit still begins only when its figure reaches the viewport center. The revised sequence uses a 360svh reference distance, with 324svh centered and the final 36svh releasing into normal document flow.

| Phase | Dominant interval | Scroll distance |
| --- | --- | --- |
| Initial representation | 0–22% | 79.2svh |
| Structure | 22–56% | 122.4svh |
| Observations | 56–90% | 122.4svh |
| Final release | 90–100% | 36svh |

Structure and Observations receive equal dominant duration, both longer than the initial representation. Smoothstep crossfades run over 14.5–29.5% and 48.5–63.5%, each spanning 54svh, 50% longer than the preceding 36svh blends. Total reference travel increased by 20%, preserving the 22/34/34/10 proportions and every fully visible viewing interval. Both outgoing and incoming layers interpolate continuously. Structure has a 68.4svh fully visible interval; Observations remains fully visible for 95.4svh before release. Initial representation remains fully visible for 52.2svh. These are all at least as long as before. That preserves a comfortable final viewing period while lengthening the blends. During release, the still-complete Observations plate moves naturally with the document instead of disappearing. Reverse and quick scrolling derive the correct state directly from current position.

The hero photograph, its framing, eye-to-valley reveal mapping, palette, semantic artwork and point-cloud data remain unchanged.

Structure adds exactly three thin bounding-box callouts with outward leaders: Terrain ridge, Field station and Trees. Observations encodes world X/Y/Z in the RGB channels, with an on-figure key. Denser, brighter objects contrast with sparse terrain. These remain explicitly conceptual illustrations; authentic simulator media and measured research charts retain their original colors and contents.

Reduced motion uses immediate native-button selection without automatic travel or semantic-cue animation. Browser checks covered 1440px desktop, 820px tablet, and 390px/320px phones, including centered onset, forward/reverse scrolling, quick scroll steps, manual keyboard selection, live motion-preference changes, image loading and overflow. Automated WCAG A/AA scans reported no violations in the tested homepage states. Build and all five tests passed.

Local review screenshots and numerical browser checks are in .qa/perception-refinement/. Physical-device and Safari/Firefox checks remain outstanding.


### Perception polish validation

The prior asset polish lifted the terrain-ridge and trees boxes and their leaders and increased terrain sampling from 2 to 6 points per triangle, retaining brighter, denser objects. Those assets remain intact under the revised pacing described above.

Chrome checks at 320, 390, 820 and 1440 pixels verified centered onset, full final-state opacity through the hold, subsequent release, fast/reverse scrolling, keyboard selection, reduced motion, image loading and no horizontal overflow. Automated WCAG A/AA scans found no violations in the tested homepage states. Build and all five tests passed. The logo and hero valley SVG remain byte-identical.

Review gallery: .qa/perception-polish/review.html. Numerical checks: .qa/perception-polish/validation.json. Physical-device and Safari/Firefox checks remain outstanding.


### Cinematic navbar and revised pacing validation

Chrome checks at 1440×900, 1280×800, 390×844 and 820×1180 covered forward/reverse scrolling, rapid jumps, centered onset, complementary crossfades, the final fully visible hold and natural release. A 100-position sequence sweep returned 22 Initial, 34 Structure, 34 Observations and 10 release samples. Cinematic checks confirmed zero navbar opacity, hidden visibility and inert controls throughout the valley reveal, followed by a solid forest restoration. Reduced-motion variants keep the navbar available; responsive cinematic mobile variants now use the same fade as desktop.

Research header checks, native focus behavior, contrast/overflow and automated WCAG A/AA checks passed in the tested states. Build and all five existing tests passed. Hero, logo, semantic artwork and observation assets matched their before-change hashes. Review screenshots and numerical checks are under .qa/cinematic-nav-pacing/. Physical-device and Safari/Firefox checks remain outstanding.


### Preferred default and gradual crossfades

The approved default is Forest & Parchment — Woodland, first in the dropdown on desktop and mobile. Existing valid manual preferences are retained on initial load, refresh and navigation. No new preference is written just because the default was loaded. The initial HTML and pre-stylesheet restoration script establish the correct palette before first paint.

The two 54svh crossfades use complementary outgoing/incoming opacity weights and the same continuous scroll interpolation. Both layers remain partially visible throughout each blend; no discrete opacity switch is introduced. The stage proportions, viewport-centered onset, cinematic navbar rules, reduced-motion controls, semantic artwork and point-cloud data are preserved. Local validation evidence is saved under .qa/woodland-default-crossfades/.


Validation of the preferred default covered 28 fresh/saved/invalid/blocked-storage desktop and mobile cases on the actual production build. First-paint palette selection, all eleven option values and their order, saved preferences, refresh/navigation and Reset passed. All eight static pages carry the preferred default and the restoration script precedes CSS. Those checks covered the former select/reset interaction; the current navigation menu replaces both controls. Checks from 320 to 1440px found no horizontal overflow and no change to tested header heights. Without scripting, Woodland retains a solid forest header fallback. Crossfade checks at 1440, 1280, 820 and 390px retained the 22/34/34/10 distribution, centered onset, partial-layer overlap, final hold, release, reduced motion and cinematic navbar behavior. Build and all five existing tests passed. Physical-device and Safari/Firefox checks remain outstanding.


## Responsive eye transition and Theme navigation

### Actual mobile cause and composition

The former phone path explicitly disabled hero motion in JavaScript. Portrait tablets also hid the portal in CSS, and short landscape layouts inherited a desktop stage at least 620px tall. Enabling a desktop zoom alone would therefore leave the crop, stage height and eye path unsuitable for a narrow or short viewport.

The responsive cinematic path applies at widths up to 700px, portrait layouts up to 1000px, and short layouts up to 1000px wide and 600px high. It uses a viewport-height sticky stage and 110svh of approach/reveal travel, bounded to 560–1080px. Portrait composition places the existing raven in the upper 61% of the stage and retains a feathered lower fade. Short portrait and landscape layouts adapt only the hero's text sizing and spacing so the copy and actions fit. Short phone landscape uses the same compact navigation as portrait phones, without changing any other section's grid.

The eye is projected from the asset's existing normalized pupil location through the rendered image box: intrinsic aspect ratio, object-fit scale, object-position offsets and image offsets are resolved before applying its parent's transform. Object positions remain percentage or pixel values. The pupil becomes the transform origin. A gentle responsive zoom reaches 2.1x; a smooth camera translation settles the visible pupil toward 50% width / 34% height in portrait, or 62% / 40% in landscape. The portal origin follows that translated eye in the same animation frame. Its radius covers the farthest stage corner.

The same valley SVG is cropped with cover in portrait so the revealed scene fills the narrow viewport without stretching. Landscape retains contain framing. The existing desktop crop, projection arithmetic, 2.45x zoom and reveal thresholds remain unchanged. Reduced motion and no-script viewing retain static framing. The perception exhibit and all subsequent animations retain their existing content and timing.

### A normal Theme navigation item

Theme is a plain navigation button matching the other items. Opening it reveals an anchored, scrollable menu with restrained solid surfaces and a thin border. There is no visible select box or Reset button. Choosing an entry applies the palette immediately, saves the existing localStorage key, closes the Theme popup and returns focus to its trigger. The trigger always reads Theme.

Forest & Parchment — Woodland remains first and the new-visitor default. Its entry permanently uses muted oak-gold #D6C3A0 with dark #2C2924 text, independent of the selected palette. A small checkmark and aria-checked identify the current choice. The closed Theme button receives no gold background.

The menu uses menuitemradio semantics. Enter/Space or click opens it; Arrow Up/Down, Home/End and typeahead move focus; Enter/Space selects. Escape closes the popup and returns focus. Tab leaves the popup, outside pointer/focus closes it, and resizing or cinematic header hiding closes it. On compact navigation the Theme popup closes before the outer mobile navigation: a second Escape closes the outer menu. Selecting a theme leaves the outer navigation available for the next navigation action. The popup aligns to the navbar gutter and scrolls internally on short screens, with focused entries kept visible.

Saved valid preferences still restore before styling, so the default does not overwrite an explicit choice. The existing solid research-page navbar and the hero's full-navbar fade/inert behavior remain in place. The approved perched-raven artwork and all media files are unchanged.

### Verification

Chromium checked 320, 375, 390 and 430px portrait phones, a short 320×568 viewport, 667×375, 844×390 and 932×430 landscape, and an 820×1180 tablet. Twenty-one samples per responsive sequence kept the visible pupil inside the viewport and the portal within one CSS pixel of its rendered position. Reverse scrolling, full portal coverage, reduced motion, rotation and a DPR-3 touch-emulated phone passed.

A browser comparison against the saved pre-change motion module matched all sampled desktop camera variables and portrait transforms exactly at 1280, 1440 and 1920px. Theme checks covered keyboard selection, focus, scrolling, persistence across refresh/navigation, the permanent recommendation highlight, current checkmark and compact-menu integration. Automated WCAG A/AA scans found no violations in tested menu states. Build and all five existing tests passed. Screenshots and numerical evidence are in .qa/mobile-eye-theme-menu/. Physical-device and Safari/Firefox verification remain outstanding.
