const clamp = (value: number) => Math.min(1, Math.max(0, value));

function easeBetween(progress: number, start: number, end: number) {
  const t = clamp((progress - start) / (end - start));
  return t * t * (3 - 2 * t);
}

export function installMotion() {
  const journey = document.querySelector<HTMLElement>("[data-hero]");
  const stage = document.querySelector<HTMLElement>(".hero-stage");
  const portrait = document.querySelector<HTMLElement>(".portrait");
  const image = document.querySelector<HTMLImageElement>("#portrait");
  const worldRoot = document.querySelector<HTMLElement>("[data-world]");
  if (!journey || !stage || !portrait || !image || !worldRoot) return;
  const world = worldRoot;
  const scene = world.querySelector<HTMLElement>(".scene")!;
  const layers = [...world.querySelectorAll<HTMLElement>("[data-layer]")];
  const buttons = [
    ...world.querySelectorAll<HTMLButtonElement>("[data-state]"),
  ];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const compact = matchMedia("(max-width: 700px)");
  const tabletPortrait = matchMedia(
    "(max-width: 1000px) and (orientation: portrait)",
  );
  let frame = 0;
  let autoIndex = -1;
  let currentIndex = 0;
  let manualScrollY: number | null = null;
  let eye = [0, 0];
  let mastInView = -1;

  function show(
    index: number,
    weights = layers.map((_, i) => Number(i === index)),
  ) {
    currentIndex = index;
    world.dataset.stage = String(index);
    world.style.setProperty("--structure-alpha", String(weights[1]));
    world.style.setProperty("--observations-alpha", String(weights[2]));
    layers.forEach((layer, i) => {
      layer.style.opacity = String(weights[i]);
      layer.classList.toggle("current", index === i);
      layer.setAttribute("aria-hidden", String(index !== i));
    });
    buttons.forEach((button, i) =>
      button.setAttribute("aria-pressed", String(index === i)),
    );
  }
  buttons.forEach((button, i) =>
    button.addEventListener("click", () => {
      manualScrollY = window.scrollY;
      delete world.dataset.scrubbing;
      show(i);
    }),
  );

  const update = () => {
    frame = 0;
    const heroBox = journey.getBoundingClientRect();
    const distance = heroBox.height - stage.offsetHeight;
    if (
      distance > 0 &&
      !reduced.matches &&
      !compact.matches &&
      !tabletPortrait.matches &&
      heroBox.bottom >= 0
    ) {
      // Fill the area vacated by the scrolling masthead before starting the iris.
      const mast = Math.max(0, heroBox.top);
      if (mast !== mastInView) {
        mastInView = mast;
        stage.style.setProperty("--mast-in-view", mast + "px");
        measureEye();
      }
      const p = clamp(-heroBox.top / distance);
      const reveal = easeBetween(p, 0.4, 0.96);
      stage.style.setProperty(
        "--zoom",
        String(1 + 1.45 * easeBetween(p, 0.03, 0.87)),
      );
      stage.style.setProperty(
        "--detail-alpha",
        String(clamp((p - 0.15) / 0.32)),
      );
      stage.style.setProperty(
        "--copy-alpha",
        String(1 - easeBetween(p, 0.12, 0.49)),
      );
      stage.style.setProperty(
        "--portal",
        Math.round(
          Math.hypot(
            Math.max(eye[0], stage.clientWidth - eye[0]),
            Math.max(eye[1], stage.clientHeight - eye[1]),
          ) *
            reveal +
            (reveal === 1 ? 1 : 0),
        ) + "px",
      );
      // The first aperture looks onto terrain at the plate's center.
      // Its scene settles back to the full composition as the iris opens.
      const offset = (1 - reveal) ** 2;
      stage.style.setProperty(
        "--valley-x",
        (eye[0] - stage.clientWidth / 2) * offset + "px",
      );
      stage.style.setProperty(
        "--valley-y",
        (eye[1] - stage.clientHeight / 2) * offset + "px",
      );
      stage.style.setProperty("--approach", String(1 + 0.035 * offset));
      stage.style.setProperty("--eye-x", eye[0] + "px");
      stage.style.setProperty("--eye-y", eye[1] + "px");
    } else if (compact.matches || tabletPortrait.matches || reduced.matches) {
      mastInView = -1;
      stage.style.removeProperty("--mast-in-view");
      stage.style.removeProperty("--zoom");
      stage.style.removeProperty("--detail-alpha");
      stage.style.removeProperty("--copy-alpha");
      stage.style.removeProperty("--portal");
    }
    const box = world.getBoundingClientRect();
    const distanceWorld = box.height - scene.offsetHeight;
    if (distanceWorld > 2 && !reduced.matches) {
      // Progress begins when the figure reaches its centered sticky position.
      const pinTop = parseFloat(getComputedStyle(scene).top);
      // The spacer's content height is playback; its padding is the final hold.
      const playbackDistance = parseFloat(getComputedStyle(world, "::after").height);
      const progress = clamp((pinTop - box.top) / playbackDistance);
      // Equal thirds of playback, with identical blends centered on each boundary.
      // The independent final hold starts only after all three thirds complete.
      const stageShare = 1 / layers.length;
      const halfBlend = stageShare * 0.15;
      const structure = easeBetween(
        progress,
        stageShare - halfBlend,
        stageShare + halfBlend,
      );
      const observations = easeBetween(
        progress,
        2 * stageShare - halfBlend,
        2 * stageShare + halfBlend,
      );
      const weights = [
        1 - structure,
        structure * (1 - observations),
        observations,
      ];
      const index = weights.indexOf(Math.max(...weights));
      // Manual choices persist until a different stage and intentional scroll.
      if (
        manualScrollY === null ||
        (index !== autoIndex && Math.abs(window.scrollY - manualScrollY) >= 32)
      ) {
        world.dataset.scrubbing = "";
        show(index, weights);
        autoIndex = index;
        manualScrollY = null;
      }
    }
  };
  function schedule() {
    if (!frame) frame = requestAnimationFrame(update);
  }
  // The stylesheet uses percentage object positions, relative to the excess cover size.
  const measureEye = () => {
    // Attribute dimensions describe the master's aspect even when the small source is selected.
    const w = Number(image.getAttribute("width")),
      h = Number(image.getAttribute("height"));
    const scale = Math.max(portrait.clientWidth / w, portrait.clientHeight / h);
    const [x, y] = (image.dataset.eye || "").split(",").map(Number);
    const [alignX, alignY] = getComputedStyle(image)
      .objectPosition.split(" ")
      .map(parseFloat);
    const pupilX =
      ((portrait.clientWidth - w * scale) * alignX + w * scale * x) / 100;
    const pupilY =
      ((portrait.clientHeight - h * scale) * alignY + h * scale * y) / 100;
    portrait.style.transformOrigin = pupilX + "px " + pupilY + "px";
    eye = [portrait.offsetLeft + pupilX, portrait.offsetTop + pupilY];
  };
  const measure = () => {
    measureEye();
    world.style.setProperty("--scene-height", scene.offsetHeight + "px");
    schedule();
  };
  if ("IntersectionObserver" in window) {
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          entry.isIntersecting
            ? visible.add(entry.target)
            : visible.delete(entry.target);
        window.removeEventListener("scroll", schedule);
        if (visible.size && !reduced.matches)
          window.addEventListener("scroll", schedule, { passive: true });
        schedule();
      },
      { rootMargin: "10% 0px" },
    );
    const reset = () => {
      window.removeEventListener("scroll", schedule);
      observer.disconnect();
      visible.clear();
      observer.observe(journey);
      observer.observe(world);
      autoIndex = -1;
      manualScrollY = null;
      if (reduced.matches) {
        delete world.dataset.scrubbing;
        show(currentIndex);
      }
      measure();
    };
    compact.addEventListener("change", reset);
    reduced.addEventListener("change", reset);
    reset();
  }
  new ResizeObserver(measure).observe(scene);
  window.addEventListener("resize", measure, { passive: true });
  measure();
}
