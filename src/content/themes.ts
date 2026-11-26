// Temporary evaluation settings. Disable to restore Forest & Mint without controls.
// Remove entries below to offer only an approved shortlist.
export const themeComparison = {
  enabled: true,
  defaultTheme: "forest-parchment-woodland",
} as const;

export const themeOptions = [
  { id: "forest-parchment-woodland", label: "Forest & Parchment — Woodland" },
  { id: "charcoal-ivory", label: "Charcoal & Warm Ivory" },
  { id: "obsidian-champagne", label: "Obsidian & Champagne" },
  { id: "olive-limestone", label: "Deep Olive & Limestone" },
  { id: "graphite-alabaster", label: "Graphite & Alabaster" },
  { id: "espresso-parchment", label: "Espresso & Parchment" },
  { id: "teal-porcelain", label: "Deep Teal & Porcelain" },
  { id: "aubergine-bone", label: "Aubergine & Bone" },
  { id: "forest-mint", label: "Forest & Mint" },
  { id: "forest-parchment", label: "Forest & Parchment" },
  { id: "forest-linen", label: "Forest & Linen" },
] as const;

export const themeStorageKey = "raven-bionics.theme";
