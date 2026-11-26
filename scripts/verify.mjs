import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { runInNewContext } from "node:vm";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
function descendants(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? descendants(path) : [path];
  });
}
const files = descendants(dist);
const pages = files.filter((file) => file.endsWith(".html"));
const mount = new URL("https://example.test/preview/raven/");
function checkReference(reference, pageUrl) {
  const url = new URL(reference.replaceAll("&amp;", "&"), pageUrl);
  if (url.origin !== mount.origin) return;
  assert.ok(
    url.pathname.startsWith(mount.pathname),
    "Reference escapes the hosting subdirectory: " + url.href,
  );
  let dest = join(
    dist,
    decodeURIComponent(url.pathname.slice(mount.pathname.length)),
  );
  if (url.pathname.endsWith("/")) dest = join(dest, "index.html");
  assert.ok(existsSync(dest), "Missing target: " + url.href);
  if (url.hash && dest.endsWith(".html")) {
    const id = decodeURIComponent(url.hash.slice(1));
    assert.ok(
      readFileSync(dest, "utf8").includes('id="' + id + '"'),
      "Missing fragment: " + url.href,
    );
  }
}
test("every static page works from a hosting subdirectory", () => {
  assert.ok(pages.length >= 4);
  const titles = new Set();
  for (const page of pages) {
    const html = readFileSync(page, "utf8");
    const url = new URL(
      relative(dist, page)
        .split(sep)
        .join("/")
        .replace(/index\.html$/, ""),
      mount,
    );
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title && !titles.has(title), "Unique title on " + url);
    titles.add(title);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
    assert.ok(html.includes('<main id="main"'));
    assert.ok(html.includes('rel="canonical"'));
    for (const match of html.matchAll(/\s(?:href|src|poster)="([^"]+)"/g))
      checkReference(match[1], url);
    for (const match of html.matchAll(/\s(?:imagesrcset|srcset)="([^"]+)"/gi)) {
      for (const candidate of match[1].split(","))
        checkReference(candidate.trim().split(/\s+/)[0], url);
    }
  }
});
test("sitemap, canonical addresses and published social image agree", () => {
  const xml = readFileSync(join(dist, "sitemap.xml"), "utf8");
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  assert.equal(new Set(locations).size, pages.length);
  for (const page of pages) {
    const html = readFileSync(page, "utf8");
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)[1];
    assert.ok(locations.includes(canonical));
    const image = html.match(/property="og:image" content="([^"]+)"/)[1];
    assert.equal(new URL(image).origin, new URL(canonical).origin);
  }
  assert.ok(existsSync(join(dist, "media/identity/social.jpg")));
  const root = locations.find((url) => !url.includes("/research/"));
  assert.ok(
    root &&
      readFileSync(join(dist, "robots.txt"), "utf8").includes(
        new URL("sitemap.xml", root).href,
      ),
  );
});
test("case-study endpoints match medians of the four published records per version", () => {
  const csv = readFileSync(join(dist, "media/research/frame-rates.csv"), "utf8")
    .trim()
    .split(/\r?\n/);
  assert.equal(csv.length, 29);
  const header = csv.shift().split(",");
  const valueIndex = header.findIndex((col) => col.includes("fps"));
  assert.ok(valueIndex >= 0);
  const groups = new Map();
  for (const row of csv) {
    const fields = row.split(",").map((field) => field.replace(/^"|"$/g, ""));
    const values = groups.get(fields[0]) || [];
    values.push(Number(fields[valueIndex]));
    groups.set(fields[0], values);
  }
  assert.equal(groups.size, 7);
  const medians = new Map(
    [...groups.entries()].map(([version, values]) => {
      assert.equal(values.length, 4);
      values.sort((a, b) => a - b);
      return [version, ((values[1] + values[2]) / 2).toFixed(2)];
    }),
  );
  const page = readFileSync(
    join(dist, "research/incremental-computation/index.html"),
    "utf8",
  );
  for (const endpoint of [medians.get("baseline-original"), medians.get("v6")])
    assert.ok(page.includes("<td>" + endpoint + "</td>"));
});

test("obsolete query previews are removed and favicon preserves approved paths", () => {
  for (const file of files.filter((file) => /\.(js|css)$/.test(file))) {
    assert.ok(
      !/previewTheme|data-preview-theme/.test(readFileSync(file, "utf8")),
      "Development theme code leaked into " + file,
    );
  }
  const identity = join(dist, "media/identity");
  const master = readFileSync(join(identity, "perched-raven.svg"), "utf8");
  const favicon = readFileSync(join(identity, "favicon.svg"), "utf8");
  const paths = (svg) => [...svg.matchAll(/ d="([^"]+)"/g)].map((match) => match[1]);
  assert.ok(paths(master).length > 0);
  assert.deepEqual(paths(favicon), paths(master));
});

test("theme restoration validates stored choices before page styling", () => {
  const html = readFileSync(join(dist, "index.html"), "utf8");
  const script = html.match(/<script id="theme-bootstrap">([\s\S]*?)<\/script>/)?.[1];
  // Disabling the comparison flag removes the control and bootstrap entirely.
  if (!script) {
    assert.ok(!html.includes('id="theme-select"'));
    assert.ok(!html.includes('data-theme='));
    return;
  }
  assert.ok(html.indexOf('id="theme-bootstrap"') < html.indexOf('rel="stylesheet"'));
  const options = [...html.matchAll(/<option value="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(options).size, options.length);
  assert.ok(options.length > 0);
  const defaultTheme = html.match(/<html[^>]*data-theme="([^"]+)"/)?.[1];
  assert.ok(options.includes(defaultTheme));
  for (const saved of [...options, null, "obsolete-theme", "<script>"]) {
    const root = { dataset: { theme: defaultTheme } };
    runInNewContext(script, {
      document: { documentElement: root },
      localStorage: { getItem: () => saved },
    });
    assert.equal(root.dataset.theme, options.includes(saved) ? saved : defaultTheme);
  }
  const root = { dataset: { theme: defaultTheme } };
  runInNewContext(script, {
    document: { documentElement: root },
    localStorage: { getItem: () => { throw new Error("Storage blocked"); } },
  });
  assert.equal(root.dataset.theme, defaultTheme);
});
