# Motion and media

Native scroll position drives two short sequences. The content remains ordinary HTML with direct links and normal browser history. `src/motion.ts` installs page-local behavior only when it finds the homepage stages. An IntersectionObserver limits the passive scroll listener to nearby scenes. A requestAnimationFrame coalesces input. There is no autonomous render loop.

## Raven eye

On wide screens, the hero sticks briefly. The original portrait scales toward its measured pupil, the copy fades, and a circular mask opens from that same point onto the terrain. The mask grows to cover the viewport. The environment settles into its normal framing. The eye coordinates are percentages of the uncropped source. Resize recalculates object-fit cover geometry. Mobile and portrait tablets use dedicated static framing. Reduced motion removes the zoom, mask and sticky progression.

Replace both WebP sizes in `public/media/raven/`, preserve their aspect ratio, edit the manifest entry `media.raven` in site.ts and measure the new eye as percentages from top left. If the master proportions change, update the intrinsic dimensions in Hero and the responsive source descriptors. For an optional higher-detail still, set media.raven.eyeDetail to a local file with exactly the same composition, aspect ratio and pupil position. The portrait crossfades to it during approach. Mobile and reduced motion keep the original portrait.

## Terrain

All three plates use the same 1200 × 650 camera, bounds and projection. A sticky figure blends between the environment, structural lines and sampled observations. Visitors can select a state with native buttons. Manual selection persists until scrolling enters another stage. On compact or reduced-motion displays only manual selection changes state. With scripts off, the environment is the default and direct image links expose all representations.

Replace the three SVGs together or update the ordered media.world entries. Keep framing and labels matched. Regenerate the originals with `node scripts/generate-world.mjs`. The intermediate images explain representation choices; they are not simulator reconstructions.

## Research media

The default demonstration is a real measured fixture visualization. Replace the figure reference in the study record to update it. To show verified footage on the homepage, add a local video and set `media.demo.video`, poster, alt and caption. Use a poster showing the same run, native controls, and no autoplay. Add captions or a transcript if speech or meaningful audio is introduced. Publish the experiment ID, date and capture conditions with the asset.

Check desktop, portrait tablet, narrow phone and reduced motion after replacing media. Inspect the pupil alignment, camera continuity, touch targets, readable type and intrinsic frame size before publication.
