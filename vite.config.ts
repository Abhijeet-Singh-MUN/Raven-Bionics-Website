import { defineConfig, loadEnv } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { renderPage, routes } from "./src/render";

const project = dirname(fileURLToPath(import.meta.url));
const pages = resolve(project, ".pages");
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, project, "");
  const origin =
    env.SITE_URL ||
    env.CF_PAGES_URL ||
    (env.VERCEL_PROJECT_PRODUCTION_URL
      ? "https://" + env.VERCEL_PROJECT_PRODUCTION_URL
      : "https://abhijeet-singh-mun.github.io/Raven-Bionics-Website/");
  const siteUrl = new URL(origin.endsWith("/") ? origin : origin + "/").href;
  const input = routes.map((route) => {
    const file = resolve(pages, route, "index.html");
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, renderPage(route, siteUrl));
    return file;
  });
  const robots =
    "User-agent: *\nAllow: /\n" +
    "Sitemap: " +
    new URL("sitemap.xml", siteUrl).href +
    "\n";
  return {
    root: pages,
    base: "./",
    publicDir: resolve(project, "public"),
    resolve: { alias: { "/@site": resolve(project, "src") } },
    server: { fs: { allow: [project] } },
    build: {
      outDir: resolve(project, "dist"),
      emptyOutDir: true,
      rollupOptions: { input },
    },
    plugins: [
      {
        name: "publication-files",
        generateBundle() {
          this.emitFile({
            type: "asset",
            fileName: "robots.txt",
            source: robots,
          });
          this.emitFile({
            type: "asset",
            fileName: "sitemap.xml",
            source:
              '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
              routes
                .map(
                  (r) =>
                    "<url><loc>" +
                    new URL(r, siteUrl).href.replaceAll("&", "&amp;") +
                    "</loc></url>",
                )
                .join("") +
              "</urlset>",
          });
          for (const [name, pkg] of [
            ["dm-sans", "@fontsource-variable/dm-sans"],
            ["instrument-serif", "@fontsource/instrument-serif"],
          ]) {
            this.emitFile({
              type: "asset",
              fileName: "licenses/" + name + ".txt",
              source: readFileSync(
                resolve(project, "node_modules", pkg, "LICENSE"),
                "utf8",
              ),
            });
          }
        },
      },
    ],
  };
});
