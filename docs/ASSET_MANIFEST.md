# Asset manifest

Paths below are relative to `public/` unless indicated. Media is served locally. Retain font notices in the deployed build. The first-party artwork is supplied for this site; company approval of a permanent logo, photography and footage is a separate editorial decision.

| Asset | File and footprint | Source and use | Rights, attribution and status |
| --- | --- | --- | --- |
| Company mark | media/identity/perched-raven.svg, viewBox 263 × 263, 53.5 KB | Exact copy of the user-selected raven-bionics-perched-raven-clean.svg. Original orientation, body/perch and wing paths retained. Header/footer use a CSS mask. | Canonical artwork matches the earlier supplied file. The replacement changes description metadata. The earlier file referenced VectorStock and commercial licensing. Usage rights remain unverified. |
| Hero portrait | media/raven/hero.webp, 1536 × 1024, 161 KB | Original OpenAI ImageGen portrait made for this implementation | Generated illustration, no third-party photo or attribution. V1 editorial artwork, awaiting permanent art direction. |
| Responsive portrait | media/raven/hero-small.webp, 768 × 512, 33 KB | Same composition, smaller encoding | Same provenance. Pupil at 73.31% across and 25.39% down in both versions. |
| Eye detail | Optional media.raven.eyeDetail, empty by default | Current transition zooms the hero master | No separate asset is required. Supply a locally licensed, registered image for an upgrade. |
| Social preview | media/identity/social.jpg, 1200 × 630, 103 KB | JPEG crop of the generated portrait | Same rights as the hero. Replace with a matching 1.91:1 image when changing identity. |
| Terrain | media/world/world.svg, 1200 × 650, 262 KB | Original deterministic illustration of a river valley and field station | First-party conceptual artwork, no third-party attribution. V1 illustration. |
| Terrain structure | media/world/structure.svg, same viewport, 193 KB | Original line representation of the same generated scene | Same rights and status as terrain. |
| Terrain observations | media/world/samples.svg, same viewport, 340 KB | Original sample representation of the same generated scene | Same rights and status as terrain. The three SVGs total about 136 KiB when gzip-compressed. |
| Simulator screenshot | media/research/simulator-spatial-memory-2026-11-15.png, 1891 × 861, 1.47 MB | Founder-supplied scene and full-memory point-cloud capture with ex-incremental-parts code v6 visible | Exact original PNG copy. Filename supplies the capture date. Commit, seed and complete settings are unverified. Visible performance readings describe one instant and are independent of the published benchmark. |\n| Research architecture | media/research/system-architecture.svg, 1200 × 650 | Custom explanatory architecture diagram of simulated observations, spatial memory, semantic relationships and attention/telemetry | Original illustration based on documented existing implementation. Clearly labeled conceptual, NOT actual screenshot or experimental evidence. Unfeatured reference asset. Removed from rendered research presentation pending authentic simulator captures. |
| Simulator fixture (archive) | media/research/spatial-memory.webp, 1440 × 760, 89 KB | Historical controlled fixture input and voxel output; not featured | Retained as internal public asset with notes; genuine simulator screenshots/recordings are preferred for future research media. |
| Performance figure | media/research/application-throughput.svg, 920 × 460, 4 KB | Original chart of measurements from 28 instrumented browser runs | First-party research figure. Preserve units, labels, sample count and source note. |
| Supporting evidence | media/research/frame-rates.csv, spatial-memory-notes.txt, optimization-notes.txt, under 3 KB each in media/research/ | Reviewed first-party extracts and reproduction notes | Cite the local notes alongside figures. Original simulator source is access-controlled. |
| DM Sans | @fontsource-variable/dm-sans, Latin variable WOFF2, 37 KB | DM Sans project via Fontsource | SIL Open Font License 1.1. Build includes copyright and license at licenses/dm-sans.txt. |
| Instrument Serif | @fontsource/instrument-serif, Latin regular and italic WOFF2, 21/22 KB | Instrument Serif project via Fontsource | SIL Open Font License 1.1. Build includes copyright and license at licenses/instrument-serif.txt. |
| Simulator video | Optional media.demo.video, empty by default | Founder-supplied screenshot currently featured | A recording remains optional. Add run ID, profile version, settings, date and a text description when supplied. |

## Replacement

Use `src/content/site.ts` for illustrative media, eye position and the optional video. Use `src/content/research.ts` for evidence figures and contextual captions. Keep research assets accompanied by provenance and distinguish simulated output from illustrations. Update this inventory, regenerate the social image when replacing the portrait, then build and inspect a wide screen, a phone and reduced-motion mode. See [motion and media](MOTION_AND_MEDIA.md) for the alignment and fallback contracts.

## Authentic simulator capture brief

The initial search found no usable captures in the local simulator checkouts. The founder subsequently supplied three authentic screenshots and six research infographics. Exact originals are saved in assets/research-originals with SHA-256 hashes in inventory.json. This local source archive is git-ignored and excluded from deployment.

- Homepage, Inside the research system. Supply a real 1920 × 1080 or larger landscape screenshot showing agents, simulated range observations and spatial memory in one legible view. Set media.demo.poster, alt and caption in src/content/site.ts. The founder-supplied 15 November screenshot is now featured with its original framing.
- Optional homepage recording. Supply a 45–90 second MP4 or WebM of the same named run, with a representative poster and concise text description. Set media.demo.video. Playback uses controls, with no autoplay.
- Spatial-memory article. Supply a real capture showing the relevant spatial memory and attention view. Add it to the article's optional figure with a precise caption. The generated architecture illustration has been removed from this page.
- Every capture needs its simulator commit, experiment ID, loaded profile and capability versions, seed/settings, capture date, view mode and any relevant limitations. Check the visible UI for private information before adding the file to public/media/research/.
- The measured application-throughput chart, CSV and methodology notes remain usable in the performance study.

## Earlier logo concept review (superseded by selected perched raven)

The current provisional 48 × 44 mark is retained. Its circular eye, broad bill opening and long pointed throat shapes make its anatomy and expression less natural at small sizes. Replacement concepts will use manually drawn vector paths.

1. Quiet profile. A continuous rounded crown and closed, gently curved raven bill, a small neutral eye and two restrained throat contours.
2. Layered hackles. A slightly fuller neck with three overlapping curved feather shapes, a level eye and a substantial bill. Preserve the silhouette at favicon size.
3. Alert observer. A subtly raised head and compact neck crop, a clear forehead-to-bill junction and a short natural beard. Use posture to suggest curiosity.

All three directions face right and use a single solid color. The selected direction requires user approval before drawing or replacing the production mark.
