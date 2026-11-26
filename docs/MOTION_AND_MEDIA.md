# Motion and media

Native scroll position drives two short sequences. The content remains ordinary HTML with direct links and normal browser history. `src/motion.ts` installs page-local behavior only when it finds the homepage stages. An IntersectionObserver limits the passive scroll listener to nearby scenes. A requestAnimationFrame coalesces input. There is no autonomous render loop.

## Raven eye

On animated desktop layouts the sticky stage fills the viewport. While the masthead scrolls away, its remaining visible height reserves space for the portrait, copy and caption. Once the stage reaches the top, the eye sequence gets 88svh of scroll travel (bounded to 560–1040 px). The camera approaches the pupil first. The iris opens at 40% progress and covers the farthest corner by 96%, leaving a short full-valley view before the next section enters. A small aperture initially shows the center of the terrain; the plate returns to its centered framing as the mask expands. The eye coordinates are percentages of the uncropped source. The portrait uses a top-aligned cover crop to keep the crown in view. At widths of 1500 px and above with an aspect ratio of at least 17:10, its width is capped relative to viewport height and a lower-edge mask blends its shoulder into the stage. On resize, the controller reads the rendered image’s percentage object-position and projects the source pupil into both portrait and stage coordinates. Keep CSS object positions in percentages. The valley plate uses contain with a small inset and a 3.5% settling zoom to preserve the ridge at wide aspect ratios. Mobile and portrait tablets use the responsive cinematic strategy below. Reduced motion removes the zoom, mask and sticky progression.

Replace both WebP sizes in `public/media/raven/`, preserve their aspect ratio, edit the manifest entry `media.raven` in site.ts and measure the new eye as percentages from top left. If the master proportions change, update the intrinsic dimensions in Hero and the responsive source descriptors. For an optional higher-detail still, set media.raven.eyeDetail to a local file with exactly the same composition, aspect ratio and pupil position. The portrait crossfades to it during approach. Mobile and reduced motion keep the original portrait.

### Responsive eye projection

Phones, portrait tablets up to 1000px, and short phone landscape use a dedicated viewport-height composition. Object-fit, object-position, source aspect ratio and the actual image box determine the visible pupil before zoom. The responsive camera translates that pupil gently toward a portrait or landscape target while zooming to 2.1x. The circular portal uses the resulting visible coordinates each frame. Portrait valley framing uses cover without distortion; landscape retains contain. The desktop projection and 2.45x camera are unchanged.

Responsive travel is 110svh, bounded to 560–1080px. Reduced motion and no-script behavior remain static. See docs/WEBSITE_DESIGN.md for breakpoints, compact Theme menu behavior and verification evidence.

## Terrain

All three plates use the same 1200 × 650 camera, bounds and projection. On desktop and mobile, the figure reaches the viewport center before scroll progress begins. A ResizeObserver measures the figure, including its controls, so the sticky inset adapts to wrapping and viewport changes. In short viewports the inset stays below the sticky navigation rather than obscuring the figure.

The revised reference sequence spans 360svh. The spacer pins the figure for 324svh (90%); the next 36svh releases it through normal document flow. The controller reads the computed pinned distance and divides by 0.9, keeping viewport sizing and progress aligned.

Dominant phase allocations are Initial 0–22% (79.2svh), Structure 22–56% (122.4svh), Observations 56–90% (122.4svh), and final release 90–100% (36svh). Structure and Observations therefore receive equal, longer viewing intervals. Identical smoothstep crossfades span 14.5–29.5% and 48.5–63.5%, 54svh each (50% longer than the previous blends). Structure is fully visible over 29.5–48.5%, a 68.4svh viewing interval; Observations is fully visible over 63.5–90%, a 95.4svh hold before natural release. The total reference distance increased 20%, so neither viewing interval is reduced. The final plate remains opaque while leaving its centered position.

Opacity follows scroll position directly without an autonomous render loop or queued CSS transitions. Reverse scrolling reverses the sequence; fast jumps paint the correct current state immediately.

Three SVG overlay callouts identify a terrain ridge, field station and trees. The ridge box starts at viewBox y=14 and the trees box at y=400, lifted to include the ridge crest and tree crowns rather than excess ground. Their leaders and labels follow the revised boxes. Thin boxes, short outward leaders and staggered fades keep the Structure stage restrained. Labels scale up relative to the illustration on phones. They share the plates' viewBox and contain alignment, so they remain registered across aspect ratios.

Observation colors encode world X/Y/Z coordinates in red/green/blue channels, with a visible position-color key. Object points are brighter and denser: tree crowns use 24 samples per tier (previously 3), building faces 70 per triangle (previously 7), and the bridge deck 80 (previously 8). Terrain uses 6 samples per triangle (up from 2), water 4 and exposed rock edges 3. Terrain stays smaller and dimmer than discrete objects, which retains the visual hierarchy while making the landscape legible. These are illustrative sampling choices, not detector output, reconstruction quality or measured performance. The same painter order preserves occlusion.

Native state buttons remain keyboard accessible. A manual selection persists until the automatic dominant stage changes and the visitor moves at least 32 CSS pixels. Reduced motion removes sticky travel, automatic blending and callout transitions; buttons expose every stage immediately. A live preference change snaps to the selected stage. With scripts off, the environment is the default and direct image links expose all representations.

Replace the three SVGs together or update the ordered media.world entries. Keep framing and labels matched. Regenerate the originals with `node scripts/generate-world.mjs`. The intermediate images explain representation choices; they are not simulator reconstructions.

### Cinematic navbar and pacing validation

Woodland's navbar now uses the same motion update as the hero. It fades as a complete element over 24–40% hero progress, is fully hidden before the valley aperture opens, and restores with a solid forest background as Perception enters the viewport. Restoration spans 20% of viewport height, capped at 180px. Inert plus accessibility/visibility state prevents hidden links from receiving input. Responsive mobile variants use the same fade; reduced motion retains a visible navbar. Theme changes clear temporary header state.

Chrome checks at 1440×900, 1280×800, 390×844 and 820×1180 sampled 100 evenly spaced sequence positions: 22 Initial, 34 Structure, 34 Observations and 10 release. Forward/reverse and rapid jumps, blend continuity, final hold, keyboard controls, reduced motion, stable solid navigation and research pages were checked. Build and all five existing tests passed. Screenshots and numerical evidence are in .qa/cinematic-nav-pacing/.

## Research media

The homepage demonstration uses the supplied authentic simulator capture; measured fixture figures remain in their relevant research articles. Replace the figure reference in the study record to update it. To show verified footage on the homepage, add a local video and set `media.demo.video`, poster, alt and caption. Use a poster showing the same run, native controls, and no autoplay. Add captions or a transcript if speech or meaningful audio is introduced. Publish the experiment ID, date and capture conditions with the asset.

Check desktop, portrait tablet, narrow phone and reduced motion after replacing media. Inspect the pupil alignment, camera continuity, touch targets, readable type and intrinsic frame size before publication.
