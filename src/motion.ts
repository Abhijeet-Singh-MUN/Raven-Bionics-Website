const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function installMotion() {
  const journey = document.querySelector<HTMLElement>("[data-hero]");
  const stage = document.querySelector<HTMLElement>(".hero-stage");
  const portrait = document.querySelector<HTMLElement>(".portrait");
  const image = document.querySelector<HTMLImageElement>("#portrait");
  const world = document.querySelector<HTMLElement>("[data-world]");
  if (!journey || !stage || !portrait || !image || !world) return;
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
  let eye = [0, 0];

  function show(index: number) {
    layers.forEach((layer, i) => {
      layer.classList.toggle("current", index === i);
      layer.setAttribute("aria-hidden", String(index !== i));
    });
    buttons.forEach((button, i) =>
      button.setAttribute("aria-pressed", String(index === i)),
    );
  }
  buttons.forEach((button, i) =>
    button.addEventListener("click", () => show(i)),
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
      const p = clamp(-heroBox.top / distance);
      stage.style.setProperty("--zoom", String(1 + p * p * 1.45));
      stage.style.setProperty(
        "--detail-alpha",
        String(clamp((p - 0.15) / 0.32)),
      );
      stage.style.setProperty("--copy-alpha", String(1 - clamp(p / 0.48)));
      stage.style.setProperty(
        "--portal",
        Math.round(
          Math.hypot(stage.offsetWidth, stage.offsetHeight) *
            clamp((p - 0.28) / 0.72) ** 1.65,
        ) + "px",
      );
      stage.style.setProperty("--approach", String(1.12 - 0.12 * p));
      stage.style.setProperty("--eye-x", eye[0] + "px");
      stage.style.setProperty("--eye-y", eye[1] + "px");
    } else if (compact.matches || tabletPortrait.matches || reduced.matches) {
      stage.style.removeProperty("--zoom");
      stage.style.removeProperty("--detail-alpha");
      stage.style.removeProperty("--copy-alpha");
      stage.style.removeProperty("--portal");
    }
    const box = world.getBoundingClientRect();
    const distanceWorld =
      box.height - (world.firstElementChild as HTMLElement).offsetHeight;
    if (distanceWorld > 2 && !compact.matches && !reduced.matches) {
      const index = Math.round(
        clamp((24 - box.top) / distanceWorld) * (layers.length - 1),
      );
      if (index !== autoIndex) {
        show(index);
        autoIndex = index;
      }
    }
  };
  function schedule() {
    if (!frame) frame = requestAnimationFrame(update);
  }
  // object-fit: cover with a centered crop. The portal stays on the pupil at each viewport.
  const measure = () => {
    // Attribute dimensions describe the master's aspect even when the small source is selected.
    const w = Number(image.getAttribute("width")),
      h = Number(image.getAttribute("height"));
    const scale = Math.max(portrait.clientWidth / w, portrait.clientHeight / h);
    const [x, y] = (image.dataset.eye || "").split(",").map(Number);
    eye = [
      portrait.offsetLeft +
        (portrait.clientWidth - w * scale) / 2 +
        (w * scale * x) / 100,
      (portrait.clientHeight - h * scale) / 2 + (h * scale * y) / 100,
    ];
    portrait.style.transformOrigin =
      eye[0] - portrait.offsetLeft + "px " + eye[1] + "px";
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
        if (visible.size && !compact.matches && !reduced.matches)
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
      measure();
    };
    compact.addEventListener("change", reset);
    reduced.addEventListener("change", reset);
    reset();
  }
  window.addEventListener("resize", measure, { passive: true });
  measure();
}
