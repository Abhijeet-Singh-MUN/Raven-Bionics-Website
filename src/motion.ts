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
  const header = document.querySelector<HTMLElement>(".masthead");
  const perception = document.getElementById("perception");
  const scene = world.querySelector<HTMLElement>(".scene")!;
  const layers = [...world.querySelectorAll<HTMLElement>("[data-layer]")];
  const buttons = [
    ...world.querySelectorAll<HTMLButtonElement>("[data-state]"),
  ];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const responsiveHero = matchMedia(
    "(max-width: 700px), (max-width: 1000px) and (orientation: portrait), (max-width: 1000px) and (max-height: 600px)",
  );
  let frame = 0;
  let autoIndex = -1;
  let currentIndex = 0;
  let manualScrollY: number | null = null;
  let eye = [0, 0];
  let baseEye = [0, 0];
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

  function paintHeader(
    heroBox: DOMRect,
    heroProgress: number,
    cinematic: boolean,
  ) {
    if (!header) return;
    const woodland = document.documentElement.dataset.theme === "forest-parchment-woodland";
    if (!woodland) {
      header.style.removeProperty("--woodland-nav-alpha");
      header.style.removeProperty("--woodland-nav-visibility");
      document.documentElement.style.removeProperty("--woodland-header-height");
      header.inert = false;
      header.removeAttribute("aria-hidden");
      header.removeAttribute("data-cinematic-hidden");
      return;
    }

    const menu = header.querySelector<HTMLButtonElement>(".menu-toggle");
    if (menu?.getAttribute("aria-expanded") !== "true") {
      document.documentElement.style.setProperty(
        "--woodland-header-height",
        header.offsetHeight + "px",
      );
    }
    // Complete the fade before the aperture starts opening at 40% hero progress.
    const fadeOut = cinematic ? easeBetween(heroProgress, 0.24, 0.4) : 0;
    const sectionTop = perception?.getBoundingClientRect().top ?? heroBox.bottom;
    const restore = easeBetween(
      window.innerHeight - sectionTop,
      0,
      Math.min(180, window.innerHeight * 0.2),
    );
    const visibility = cinematic ? Math.max(1 - fadeOut, restore) : 1;
    const background = reduced.matches || restore > 0
      ? 1
      : cinematic
        ? easeBetween(heroProgress, 0, 0.24)
        : clamp(-heroBox.top / Math.max(1, heroBox.height - header.offsetHeight));

    header.style.setProperty("--woodland-nav-alpha", String(background));
    header.style.setProperty("--woodland-nav-visibility", String(visibility));
    const inactive = visibility < 1;
    if (inactive && !header.inert) {
      // Remove focus before hiding the subtree from keyboard/accessibility APIs.
      if (header.contains(document.activeElement) && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      menu?.setAttribute("aria-expanded", "false");
    }
    header.inert = inactive;
    if (inactive) header.setAttribute("aria-hidden", "true");
    else header.removeAttribute("aria-hidden");
    header.toggleAttribute("data-cinematic-hidden", visibility === 0);
  }

  const update = () => {
    frame = 0;
    const heroBox = journey.getBoundingClientRect();
    const distance = heroBox.height - stage.offsetHeight;
    const cinematic = distance > 0 && !reduced.matches;
    const heroProgress = distance > 0 ? clamp(-heroBox.top / distance) : 0;
    paintHeader(heroBox, heroProgress, cinematic);
    if (cinematic && heroBox.bottom >= 0) {
      // Fill the area vacated by the scrolling masthead before starting the iris.
      const mast = Math.max(0, heroBox.top);
      if (mast !== mastInView) {
        mastInView = mast;
        stage.style.setProperty("--mast-in-view", mast + "px");
        measureEye();
      }
      const p = heroProgress;
      const reveal = easeBetween(p, 0.4, 0.96);
      if (responsiveHero.matches) {
        const camera = easeBetween(p, 0.03, 0.7);
        const landscape = stage.clientWidth > stage.clientHeight;
        const target = [
          stage.clientWidth * (landscape ? 0.62 : 0.5),
          stage.clientHeight * (landscape ? 0.4 : 0.34),
        ];
        const shift = target.map((value, axis) => (value - baseEye[axis]) * camera);
        portrait.style.setProperty("--camera-x", shift[0] + "px");
        portrait.style.setProperty("--camera-y", shift[1] + "px");
        eye = baseEye.map((value, axis) => value + shift[axis]);
      } else {
        portrait.style.removeProperty("--camera-x");
        portrait.style.removeProperty("--camera-y");
        eye = [...baseEye];
      }
      stage.style.setProperty(
        "--zoom",
        String(1 + (responsiveHero.matches ? 1.1 : 1.45) * easeBetween(p, 0.03, 0.87)),
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
    } else if (reduced.matches) {
      mastInView = -1;
      stage.style.removeProperty("--mast-in-view");
      stage.style.removeProperty("--zoom");
      stage.style.removeProperty("--detail-alpha");
      stage.style.removeProperty("--copy-alpha");
      stage.style.removeProperty("--portal");
      portrait.style.removeProperty("--camera-x");
      portrait.style.removeProperty("--camera-y");
    }
    const box = world.getBoundingClientRect();
    const distanceWorld = box.height - scene.offsetHeight;
    if (distanceWorld > 2 && !reduced.matches) {
      // Progress begins when the figure reaches its centered sticky position.
      const pinTop = parseFloat(getComputedStyle(scene).top);
      // 324svh is pinned (90%); the next 36svh is the natural document release.
      const pinnedDistance = parseFloat(getComputedStyle(world, "::after").height);
      const sequenceDistance = pinnedDistance / 0.9;
      const progress = clamp((pinTop - box.top) / sequenceDistance);
      // Dominant intervals: Environment 22%, Structure 34%, Observations 34%.
      // Identical 54svh crossfades straddle the 22% and 56% boundaries.
      const structure = easeBetween(progress, 0.145, 0.295);
      const observations = easeBetween(progress, 0.485, 0.635);
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
  const measureEye = () => {
    const [x, y] = (image.dataset.eye || "").split(",").map(Number);
    let pupilX: number, pupilY: number;
    if (responsiveHero.matches) {
      // Resolve object-fit and object-position in the image's untransformed box.
      // Its parent zooms about this pupil; camera translation is applied afterward.
      const w = image.naturalWidth || Number(image.getAttribute("width"));
      const h = image.naturalHeight || Number(image.getAttribute("height"));
      const css = getComputedStyle(image);
      let sx = image.clientWidth / w, sy = image.clientHeight / h;
      if (css.objectFit !== "fill") {
        const scale = css.objectFit === "cover" ? Math.max(sx, sy)
          : css.objectFit === "none" ? 1
          : css.objectFit === "scale-down" ? Math.min(1, sx, sy)
          : Math.min(sx, sy);
        sx = sy = scale;
      }
      const [px, py] = css.objectPosition.split(" ");
      const align = (value: string, space: number) =>
        value.endsWith("%") ? space * parseFloat(value) / 100 : parseFloat(value) || 0;
      pupilX = image.offsetLeft + align(px, image.clientWidth - w * sx) + w * sx * x / 100;
      pupilY = image.offsetTop + align(py, image.clientHeight - h * sy) + h * sy * y / 100;
    } else {
      // Preserve the approved desktop projection and camera arithmetic exactly.
      const w = Number(image.getAttribute("width")), h = Number(image.getAttribute("height"));
      const scale = Math.max(portrait.clientWidth / w, portrait.clientHeight / h);
      const [alignX, alignY] = getComputedStyle(image).objectPosition.split(" ").map(parseFloat);
      pupilX = ((portrait.clientWidth - w * scale) * alignX + w * scale * x) / 100;
      pupilY = ((portrait.clientHeight - h * scale) * alignY + h * scale * y) / 100;
    }
    portrait.style.transformOrigin = pupilX + "px " + pupilY + "px";
    baseEye = [portrait.offsetLeft + pupilX, portrait.offsetTop + pupilY];
    eye = [...baseEye];
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
    responsiveHero.addEventListener("change", reset);
    reduced.addEventListener("change", reset);
    reset();
  }
  const sizeObserver = new ResizeObserver(measure);
  sizeObserver.observe(scene);
  if (header) sizeObserver.observe(header);
  window.addEventListener("raven-theme-change", measure);
  image.addEventListener("load", measure);
  window.addEventListener("resize", measure, { passive: true });
  measure();
}
