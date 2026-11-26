import { themeComparison, themeOptions, themeStorageKey } from "./content/themes";

export function installThemeSelector() {
  if (!themeComparison.enabled) return;
  const controls = document.querySelector<HTMLElement>(".theme-controls");
  const select = document.querySelector<HTMLSelectElement>("#theme-select");
  const reset = document.querySelector<HTMLButtonElement>("[data-theme-reset]");
  if (!controls || !select || !reset) return;

  const header = document.querySelector<HTMLElement>(".masthead");
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  let headerFrame = 0;

  function paintHeader() {
    headerFrame = 0;
    if (!header || !hero) return;
    const menuOpen = header.querySelector(".menu-toggle")?.getAttribute("aria-expanded") === "true";
    if (!menuOpen) {
      document.documentElement.style.setProperty("--woodland-header-height", header.offsetHeight + "px");
    }
    const travel = Math.max(1, hero.offsetHeight - header.offsetHeight);
    const opacity = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / travel));
    header.style.setProperty("--woodland-nav-alpha", opacity.toFixed(4));
  }

  function scheduleHeader() {
    if (!headerFrame) headerFrame = requestAnimationFrame(paintHeader);
  }

  const headerSizeObserver = hero && header ? new ResizeObserver(scheduleHeader) : null;

  function syncHeader(theme: string) {
    window.removeEventListener("scroll", scheduleHeader);
    window.removeEventListener("resize", scheduleHeader);
    headerSizeObserver?.disconnect();
    if (headerFrame) cancelAnimationFrame(headerFrame);
    headerFrame = 0;
    if (theme === "forest-parchment-woodland" && hero && header) {
      window.addEventListener("scroll", scheduleHeader, { passive: true });
      window.addEventListener("resize", scheduleHeader);
      headerSizeObserver?.observe(header);
      paintHeader();
    } else {
      header?.style.removeProperty("--woodland-nav-alpha");
      document.documentElement.style.removeProperty("--woodland-header-height");
    }
  }

  function applyTheme(theme: string) {
    document.documentElement.dataset.theme = theme;
    select!.value = theme;
    syncHeader(theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      getComputedStyle(document.documentElement).getPropertyValue("--header-bg").trim(),
    );
  }

  applyTheme(document.documentElement.dataset.theme || themeComparison.defaultTheme);
  controls.hidden = false;
  select.addEventListener("change", () => {
    if (!themeOptions.some((theme) => theme.id === select.value)) return;
    applyTheme(select.value);
    try {
      localStorage.setItem(themeStorageKey, select.value);
    } catch {
      // Selection still works on this page when storage is unavailable.
    }
  });
  reset.addEventListener("click", () => {
    applyTheme(themeComparison.defaultTheme);
    try {
      localStorage.removeItem(themeStorageKey);
    } catch {
      // The default remains usable without browser storage.
    }
  });
}
