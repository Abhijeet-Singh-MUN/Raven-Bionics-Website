# Raven Bionics Website

A static publication for Raven Bionics, an independent robotics and spatial intelligence research venture. The homepage pairs a raven portrait and an illustrative terrain sequence with a measured simulator fixture. The research archive and its articles are complete HTML pages.

## Run locally

Use Node 22 LTS and npm. On Windows use `npm.cmd` if PowerShell blocks `npm.ps1`.

```sh
npm ci
npm run dev
npm run build
npm test
npm run preview
```

Vite prints the local address. The development server tracks component and content imports through its configuration. The production preview serves the last build. Pulling new source commits requires another build before they appear in a running production preview. Run the build before the static tests. For a headless or CI job use `npm ci && npm run build && npm test`.

For the review URL used in this checkout, run the development server with `npm run dev -- --port 4193 --strictPort`, or rebuild and use `npm run preview -- --port 4193 --strictPort`. Stop the existing server using that port before switching modes. Confirm the terminal working directory is this checkout and check `git status --short --branch` before integrating remote work. With a clean worktree, `git fetch origin` followed by `git merge --ff-only origin/main` brings in remote commits without rewriting history. Preserve pending edits before integrating.

## Structure

- `src/content/site.ts` holds company details, navigation, homepage copy, media paths and the eye focal point.
- `src/content/research.ts` holds studies, methods, source links, measurements and figures.
- `src/components/` renders shared navigation, the homepage, archive and publication pages.
- `src/render.tsx` renders complete documents using React on the build machine. `vite.config.ts` writes route inputs under ignored `.pages/` and produces `dist/`.
- `src/client.ts` and `src/motion.ts` enhance the mobile menu and the two visual sequences. The browser downloads no React runtime.
- `src/styles.css` defines design tokens, responsive layouts and local font faces. Font licenses ship with the output.
- `public/media/` holds editable illustrations, evidence, source notes and identity assets. `scripts/generate-world.mjs` regenerates the three terrain views.

## Static hosting

Deploy the **contents of dist/**, preserving subdirectories and index files. The build command is `npm run build`; use `dist` as the output directory. Files and ordinary links use relative paths, so the site can be hosted under a project prefix. Configure directory indexes. A single-page fallback rewrite is unnecessary.

Set `SITE_URL` to the intended public site root **before building**, including its directory prefix. Canonicals, Open Graph, robots, organization data and sitemap all use it. The fallback publishing address is the repository's prospective GitHub Pages URL, `https://abhijeet-singh-mun.github.io/Raven-Bionics-Website/`. This configuration does not activate Pages or establish a company domain. On compatible hosts, Cloudflare Pages and Vercel deployment variables can supply the origin. Example for PowerShell:

```powershell
$env:SITE_URL = 'https://your-host.example/research-lab/'
npm.cmd run build
npm.cmd test
```

## Local palette comparison

On the local `preview/eight-theme-comparison` branch, run `npm run dev -- --port 4193 --strictPort` and open http://127.0.0.1:4193/. Use Theme in the navigation. The temporary default is Forest & Parchment. Previously saved selections are retained. Reset clears the saved choice.

The comparison feature flag and option list live in `src/content/themes.ts`. Palette tokens live in `src/styles.css`. The branch's static build also includes the comparison while the flag is enabled, so production integration requires an explicit palette/selector decision.

## Maintenance

Read [design](docs/WEBSITE_DESIGN.md), [content and claims](docs/CONTENT_AND_CLAIMS.md), [motion and media](docs/MOTION_AND_MEDIA.md), [asset manifest](docs/ASSET_MANIFEST.md), and [roadmap](docs/ROADMAP.md). The original [implementation specification](docs/website_spec.md) records V1 scope.

On Windows, stop any running Vite preview or dev server before a clean npm ci, since esbuild.exe can be locked by that process. If a research deep link fails only on the host, check that its directory and index.html were uploaded. If a social preview points at the wrong host, correct SITE_URL and rebuild. If Git reports a one-off sandbox ownership mismatch, verify the working directory and ownership before trusting the specific checkout. Keep generated output and dependencies out of version control.
