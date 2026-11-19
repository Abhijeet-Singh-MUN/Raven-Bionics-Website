# Website design

The opening pairs a naturalistic portrait with a legible statement of the research question. A side-lit eye anchors the composition. Below it, light paper sections and dark figure plates recall a technical publication. Terrain artwork introduces perception before the site presents evidence from a different, explicitly identified simulator fixture.

## Typography and tokens

Change the custom properties at the top of `src/styles.css`. Near-black green, pale paper, ink and muted mint establish the palette. Instrument Serif sets titles and italic emphasis. DM Sans handles prose, controls and scientific captions. Only three Latin WOFF2 files are served. The hero title scales from 62 to 94 px on desktop with a 1.035 line height. The italic line has a narrower measure to leave space beside the beak. In portrait tablet layouts the text sits lower, beneath the head. Short 8 px rules identify section labels; the longer italic species caption retains its own rule. Body line lengths and margins scale with viewport width. Thin rules group related information; focus rings and underlined text links remain visible.

A charcoal and silver-blue trial gave the portrait a cooler cast. The mint accent connects the natural plumage to the sage terrain and remains the default. The header, footer and favicon share a right-facing raven profile with a domed crown, deep arched bill and projecting throat hackles. Three silhouettes were compared at favicon, header and footer sizes. The selected mark uses two large feather breaks so its outline stays legible at 16 px.

## Page structure

`Layout.tsx` owns the masthead, home link, primary navigation, skip link, footer and public inquiry route. `Home.tsx` composes the identity, perception, focus, demonstration, evidence, outlook and organization sections. Change the composition in its Home function to reorder sections. `Research.tsx` owns the archive, publication header, figure, article body, results table and source links. Content lives in `src/content/`.

Desktop uses a split editorial composition. Mobile places the portrait above the text with a separate crop, stacks feature columns, and offers a disclosure menu with Escape support. Tablet portrait retains a side-by-side hero and a shorter static sequence. The menu and page links are available when JavaScript is disabled. Buttons inside the terrain figure provide an alternative to scroll-driven state changes.

## Page addresses

- `/` for the narrative and the technology, experiments, about and contact anchors.
- `/research/` for the archive.
- `/research/adaptive-3d-reconstruction/` for Experiment 05.
- `/research/incremental-computation/` for the optimization case study.

Each article has a stable directory URL, a unique title, its own summary and source material. All descriptive text is in the initial HTML.
