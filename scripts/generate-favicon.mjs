import { readFileSync, writeFileSync } from "node:fs";

const master = new URL("../public/media/identity/perched-raven.svg", import.meta.url);
const output = new URL("../public/media/identity/favicon.svg", import.meta.url);
const source = readFileSync(master, "utf8");
// Only presentation is added. Artwork paths and orientation come from the master.
const darkMode = `<style>@media (prefers-color-scheme: dark) {
  #raven-body-and-perch, #separate-wing { fill: #f3f3ed; }
}</style>`;
writeFileSync(output, source.replace("</svg>", darkMode + "</svg>"));
