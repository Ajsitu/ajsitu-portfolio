# Situmbeko Simataa — Portfolio (web)

A React + Vite + Tailwind portfolio for a UI/UX & Front-End Developer, built inside
this pnpm/Turborepo monorepo. The design mirrors the “Built to Land Offers”
presentation deck: charcoal + ASCII-texture background, orange `#fe5102` accent,
a pixel display typeface (Pixelify Sans), heavy grotesk headings, a Discover →
Define → Develop → Deliver process, and animated scroll reveals.

## Run it

From the repo root:

```bash
pnpm install
pnpm --filter web dev        # start the dev server
pnpm --filter web build      # type-check + production build
pnpm --filter web test       # vitest
```

## Behance images

Project imagery loads from the Behance CDN by default, so the site works online
with no extra setup. To save local copies into `public/behance/` (and remove the
CDN dependency):

```bash
pnpm --filter web assets     # downloads covers + gallery images
```

Then add to `apps/web/.env`:

```
VITE_USE_LOCAL_ASSETS=true
```

See `public/behance/README.md` for details.

## Structure

```
src/
  data/
    profile.ts      # bio, skills, timeline, process
    projects.ts     # 3 featured live products + 14 Behance projects
  lib/assets.ts     # CDN ↔ local image URL resolver
  components/       # Header, ProjectCard, Reveal, AsciiBackground, Marquee, …
  pages/
    Home.tsx        # hero, about, timeline, process, featured, grid, contact
    CaseStudy.tsx   # /work/:slug — live products + Behance galleries
scripts/
  fetch-behance-assets.mjs   # downloader
  behance-manifest.json      # image manifest
```

## Editing content

- **Your details:** `src/data/profile.ts`
- **Projects & case studies:** `src/data/projects.ts`
- **Featured product previews:** swap the gradient browser-mock in
  `Home.tsx` (`BrowserMock`) for a real screenshot when you have one.
- **Colours / fonts / animation:** `tailwind.config.js` + `src/style.css`
