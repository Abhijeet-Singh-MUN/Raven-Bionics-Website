# Asset manifest

Paths below are relative to `public/` unless indicated. Media is served locally. Retain font notices in the deployed build. The first-party artwork is supplied for this site; company approval of a permanent logo, photography and footage is a separate editorial decision.

| Asset | File and footprint | Source and use | Rights, attribution and status |
| --- | --- | --- | --- |
| Company mark | media/identity/mark.svg, viewBox 48 × 44, <1 KB | Original right-facing raven profile with a domed crown, split bill, cutout eye and projecting throat hackles; shared by header, footer and favicon | First-party design, no external attribution. V1 provisional identity. |
| Hero portrait | media/raven/hero.webp, 1536 × 1024, 161 KB | Original OpenAI ImageGen portrait made for this implementation | Generated illustration, no third-party photo or attribution. V1 editorial artwork, awaiting permanent art direction. |
| Responsive portrait | media/raven/hero-small.webp, 768 × 512, 33 KB | Same composition, smaller encoding | Same provenance. Pupil at 73.31% across and 25.39% down in both versions. |
| Eye detail | Optional media.raven.eyeDetail, empty by default | Current transition zooms the hero master | No separate asset is required. Supply a locally licensed, registered image for an upgrade. |
| Social preview | media/identity/social.jpg, 1200 × 630, 103 KB | JPEG crop of the generated portrait | Same rights as the hero. Replace with a matching 1.91:1 image when changing identity. |
| Terrain | media/world/world.svg, 1200 × 650, 262 KB | Original deterministic illustration of a river valley and field station | First-party conceptual artwork, no third-party attribution. V1 illustration. |
| Terrain structure | media/world/structure.svg, same viewport, 193 KB | Original line representation of the same generated scene | Same rights and status as terrain. |
| Terrain observations | media/world/samples.svg, same viewport, 340 KB | Original sample representation of the same generated scene | Same rights and status as terrain. The three SVGs total about 136 KiB when gzip-compressed. |
| Simulator fixture | media/research/spatial-memory.webp, 1440 × 760, 89 KB | First-party visualization of actual simulator fixture input and voxel output | Original research plate with a source note and caption. Suitable for its stated fixture context. |
| Performance figure | media/research/application-throughput.svg, 920 × 460, 4 KB | Original chart of measurements from 28 instrumented browser runs | First-party research figure. Preserve units, labels, sample count and source note. |
| Supporting evidence | media/research/frame-rates.csv, spatial-memory-notes.txt, optimization-notes.txt, under 3 KB each in media/research/ | Reviewed first-party extracts and reproduction notes | Cite the local notes alongside figures. Original simulator source is access-controlled. |
| DM Sans | @fontsource-variable/dm-sans, Latin variable WOFF2, 37 KB | DM Sans project via Fontsource | SIL Open Font License 1.1. Build includes copyright and license at licenses/dm-sans.txt. |
| Instrument Serif | @fontsource/instrument-serif, Latin regular and italic WOFF2, 21/22 KB | Instrument Serif project via Fontsource | SIL Open Font License 1.1. Build includes copyright and license at licenses/instrument-serif.txt. |
| Simulator video | Optional media.demo.video, empty by default | Static verified fixture plate provided | Add an approved real capture and log its run ID, date, creator, rights and transcript as applicable. |

## Replacement

Use `src/content/site.ts` for illustrative media, eye position and the optional video. Use `src/content/research.ts` for evidence figures and contextual captions. Keep research assets accompanied by provenance and distinguish simulated output from illustrations. Update this inventory, regenerate the social image when replacing the portrait, then build and inspect a wide screen, a phone and reduced-motion mode. See [motion and media](MOTION_AND_MEDIA.md) for the alignment and fallback contracts.
