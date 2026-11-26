import { renderToStaticMarkup } from "react-dom/server";
import { Layout, urlFrom } from "./components/Layout";
import { Home } from "./components/Home";
import { ResearchIndex, Article } from "./components/Research";
import { company, home } from "./content/site";
import { studies, researchArchive } from "./content/research";
import { themeComparison, themeOptions, themeStorageKey } from "./content/themes";

export const routes = [
  "",
  "research/",
  ...studies.map((study) => "research/" + study.slug + "/"),
];
const escape = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
export function renderPage(route: string, siteUrl?: string) {
  const to = urlFrom(route);
  const study = studies.find(
    (entry) => route === "research/" + entry.slug + "/",
  );
  const heading =
    study?.title ??
    (route
      ? "Research archive"
      : "Spatial Intelligence for Autonomous Systems");
  const title = escape(heading + " | " + company.name);
  const description = escape(
    study?.summary ??
      (route
        ? researchArchive.description
        : home.hero.intro),
  );
  const fullUrl = siteUrl && new URL(route, siteUrl).href;
  const imagePath = "media/identity/social.jpg";
  const image = siteUrl ? new URL(imagePath, siteUrl).href : to(imagePath);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.description,
    ...(siteUrl && { url: siteUrl }),
  };
  const body = renderToStaticMarkup(
    <Layout route={route}>
      {study ? (
        <Article study={study} to={to} />
      ) : route ? (
        <ResearchIndex to={to} />
      ) : (
        <Home to={to} />
      )}
    </Layout>,
  );
  const themeAttribute = themeComparison.enabled
    ? ' data-theme="' + themeComparison.defaultTheme + '"'
    : "";
  const themeBootstrap = themeComparison.enabled
    ? `<script id="theme-bootstrap">try{const selectedTheme=localStorage.getItem(${JSON.stringify(themeStorageKey)});if(${JSON.stringify(themeOptions.map((theme) => theme.id))}.includes(selectedTheme)){document.documentElement.dataset.theme=selectedTheme}}catch{}</script>`
    : "";
  return `<!doctype html>
<html lang="en"${themeAttribute}><head><meta charset="utf-8">${themeBootstrap}<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#101413">
<title>${title}</title><meta name="description" content="${description}">
<meta property="og:site_name" content="Raven Bionics"><meta property="og:type" content="${study ? "article" : "website"}"><meta property="og:title" content="${title}">
<meta property="og:description" content="${description}"><meta property="og:image" content="${escape(image)}"><meta name="twitter:card" content="summary_large_image">
${fullUrl ? '<link rel="canonical" href="' + escape(fullUrl) + '"><meta property="og:url" content="' + escape(fullUrl) + '">' : ""}
<link rel="icon" href="${to("media/identity/favicon.svg")}" type="image/svg+xml">
<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>
<script type="module" src="/@site/client.ts"></script></head><body data-page="${route ? "research" : "home"}">${body}</body></html>`;
}
