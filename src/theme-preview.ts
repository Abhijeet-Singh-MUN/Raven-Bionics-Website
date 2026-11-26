import "./theme-preview.css";

// This module is imported exclusively in Vite development mode.
export function installThemePreview() {
  const theme = new URLSearchParams(location.search).get("previewTheme");
  if (!theme || !["forest", "graphite", "ivory"].includes(theme)) return;
  if (theme !== "forest") document.documentElement.dataset.previewTheme = theme;

  // Retain the comparison while browsing local pages, without storing a preference.
  for (const link of document.querySelectorAll<HTMLAnchorElement>("a[href]")) {
    const url = new URL(link.href);
    if (url.origin === location.origin && url.pathname.endsWith("/")) {
      url.searchParams.set("previewTheme", theme);
      link.href = url.href;
    }
  }
}
