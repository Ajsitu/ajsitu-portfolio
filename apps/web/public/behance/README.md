# Behance assets

This folder holds the downloaded Behance imagery, organised by project id:

```
public/behance/<projectId>/<cover>.jpg
public/behance/<projectId>/<module-image>.jpg
```

It is populated by running the downloader (your machine needs internet — the
Behance CDN is blocked in some sandboxed environments):

```bash
pnpm --filter web assets      # from the repo root
# or, from apps/web:
node scripts/fetch-behance-assets.mjs
```

Until you run it, the site loads the same images straight from the Behance CDN,
so everything still renders online. After downloading, add this to
`apps/web/.env` to serve the local copies:

```
VITE_USE_LOCAL_ASSETS=true
```
