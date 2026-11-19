# Motion and media

Native scroll position drives two short sequences. The content remains ordinary HTML with direct links and normal browser history. `src/motion.ts` installs page-local behavior only when it finds the homepage stages. An IntersectionObserver limits the passive scroll listener to nearby scenes. A requestAnimationFrame coalesces input. There is no autonomous render loop.

## Raven eye

On animated desktop layouts the sticky stage fills the viewport. While the masthead scrolls away, its remaining visible height reserves space for the portrait, copy and caption. Once the stage reaches the top, the eye sequence gets 88svh of scroll travel (bounded to 560–1040 px). The camera approaches the pupil first. The iris opens at 40% progress and covers the farthest corner by 96%, leaving a short full-valley view before the next section enters. A small aperture initially shows the center of the terrain; the plate returns to its centered framing as the mask expands. The eye coordinates are percentages of the uncropped source. The portrait uses a top-aligned cover crop to keep the crown in view. At widths of 1500 px and above with an aspect ratio of at least 17:10, its width is capped relative to viewport height and a lower-edge mask blends its shoulder into the stage. On resize, the controller reads the rendered image’s percentage object-position and projects the source pupil into both portrait and stage coordinates. Keep CSS object positions in percentages. The valley plate uses contain with a small inset and a 3.5% settling zoom to preserve the ridge at wide aspect ratios. Mobile and portrait tablets use dedicated static framing. Reduced motion removes the zoom, mask and sticky progression.

Replace both WebP sizes in `public/media/raven/`, preserve their aspect ratio, edit the manifest entry `media.raven` in site.ts and measure the new eye as percentages from top left. If the master proportions change, update the intrinsic dimensions in Hero and the responsive source descriptors. For an optional higher-detail still, set media.raven.eyeDetail to a local file with exactly the same composition, aspect ratio and pupil position. The portrait crossfades to it during approach. Mobile and reduced motion keep the original portrait.

## Terrain

All three plates use the same 1200 × 650 camera, bounds and projection. A sticky figure blends between the environment, structural lines and sampled observations. Visitors can select a state with native buttons. The sticky figure has 45svh of additional travel, divided into three equal scroll bands. A manual selection persists until the scroll band changes and the visitor has moved at least 32 CSS pixels from the selection point. On compact or reduced-motion displays only manual selection changes state. With scripts off, the environment is the default and direct image links expose all representations.

Replace the three SVGs together or update the ordered media.world entries. Keep framing and labels matched. Regenerate the originals with `node scripts/generate-world.mjs`. The intermediate images explain representation choices; they are not simulator reconstructions.

## Research media

The default demonstration is a real measured fixture visualization. Replace the figure reference in the study record to update it. To show verified footage on the homepage, add a local video and set `media.demo.video`, poster, alt and caption. Use a poster showing the same run, native controls, and no autoplay. Add captions or a transcript if speech or meaningful audio is introduced. Publish the experiment ID, date and capture conditions with the asset.

Check desktop, portrait tablet, narrow phone and reduced motion after replacing media. Inspect the pupil alignment, camera continuity, touch targets, readable type and intrinsic frame size before publication.
