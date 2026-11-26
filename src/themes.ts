import { themeComparison, themeOptions, themeStorageKey } from "./content/themes";

export function installThemeSelector() {
  if (!themeComparison.enabled) return;
  const control = document.querySelector<HTMLElement>(".theme-control");
  const trigger = document.querySelector<HTMLButtonElement>("#theme-trigger");
  const menu = document.querySelector<HTMLElement>("#theme-menu");
  if (!control || !trigger || !menu) return;
  const choices = [...menu.querySelectorAll<HTMLButtonElement>("[data-theme-choice]")];
  const header = control.closest("header");
  const mobileToggle = header?.querySelector<HTMLButtonElement>(".menu-toggle");
  let search = "";
  let lastKeyTime = 0;

  function close(restoreFocus = false) {
    if (!menu!.hidden) menu!.hidden = true;
    if (trigger!.getAttribute("aria-expanded") !== "false") {
      trigger!.setAttribute("aria-expanded", "false");
    }
    search = "";
    if (restoreFocus && !header?.inert) trigger!.focus({ preventScroll: true });
  }

  function focusChoice(index: number) {
    const choice = choices[index];
    if (!choice) return;
    choice.focus({ preventScroll: true });
    if (choice.offsetTop < menu!.scrollTop) menu!.scrollTop = choice.offsetTop;
    const bottom = choice.offsetTop + choice.offsetHeight;
    if (bottom > menu!.scrollTop + menu!.clientHeight) {
      menu!.scrollTop = bottom - menu!.clientHeight;
    }
  }

  function open(index?: number) {
    menu!.hidden = false;
    trigger!.setAttribute("aria-expanded", "true");
    const room = Math.max(80, innerHeight - menu!.getBoundingClientRect().top - 12);
    menu!.style.setProperty("--theme-menu-room", room + "px");
    const current = choices.findIndex((choice) => choice.getAttribute("aria-checked") === "true");
    focusChoice(index ?? Math.max(0, current));
  }

  function applyTheme(theme: string) {
    document.documentElement.dataset.theme = theme;
    choices.forEach((choice) =>
      choice.setAttribute("aria-checked", String(choice.dataset.themeChoice === theme)),
    );
    window.dispatchEvent(new Event("raven-theme-change"));
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      getComputedStyle(document.documentElement).getPropertyValue("--header-bg").trim(),
    );
  }

  applyTheme(document.documentElement.dataset.theme || themeComparison.defaultTheme);
  control.hidden = false;
  trigger.addEventListener("click", () => menu.hidden ? open() : close(true));
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      open(event.key === "ArrowDown" ? 0 : choices.length - 1);
    }
  });

  choices.forEach((choice) => choice.addEventListener("click", () => {
    const theme = choice.dataset.themeChoice;
    if (!themeOptions.some((option) => option.id === theme)) return;
    applyTheme(theme!);
    try {
      localStorage.setItem(themeStorageKey, theme!);
    } catch {
      // Selection remains available on this page when storage is blocked.
    }
    close(true);
  }));

  menu.addEventListener("keydown", (event) => {
    const index = choices.indexOf(document.activeElement as HTMLButtonElement);
    let next = -1;
    if (event.key === "ArrowDown") next = (index + 1) % choices.length;
    if (event.key === "ArrowUp") next = (index - 1 + choices.length) % choices.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = choices.length - 1;
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      close(true);
      return;
    }
    if (event.key === "Tab") {
      event.preventDefault();
      close();
      if (event.shiftKey) trigger.focus({ preventScroll: true });
      else {
        const focusable = [...document.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex="0"]',
        )].filter((node) => {
          if (!node.getClientRects().length || node.closest("[inert]")) return false;
          for (let parent: HTMLElement | null = node; parent; parent = parent.parentElement) {
            const style = getComputedStyle(parent);
            if (style.visibility === "hidden" || style.opacity === "0") return false;
          }
          return true;
        });
        const after = focusable[focusable.indexOf(trigger) + 1] ?? focusable[0];
        after?.focus();
      }
      return;
    }
    if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey && event.key !== " ") {
      const now = performance.now();
      search = now - lastKeyTime < 600 ? search + event.key.toLowerCase() : event.key.toLowerCase();
      lastKeyTime = now;
      const repeated = [...search].every((letter) => letter === search[0]);
      const prefix = repeated ? search[0] : search;
      for (let step = 1; step <= choices.length; step++) {
        const candidate = (index + step) % choices.length;
        const label = themeOptions[candidate]?.label.toLowerCase();
        if (label?.startsWith(prefix)) { next = candidate; break; }
      }
    }
    if (next >= 0) {
      event.preventDefault();
      focusChoice(next);
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (event.target instanceof Node && !control.contains(event.target)) close();
  });
  document.addEventListener("focusin", (event) => {
    if (!menu.hidden && event.target instanceof Node && !control.contains(event.target)) close();
  });
  window.addEventListener("resize", () => close(), { passive: true });
  if (header) {
    new MutationObserver((records) => {
      if (header.inert || records.some((record) =>
        record.target === mobileToggle && mobileToggle?.getAttribute("aria-expanded") === "false",
      )) close();
    }).observe(header, { attributes: true, subtree: true, attributeFilter: ["inert", "aria-expanded"] });
  }
}
