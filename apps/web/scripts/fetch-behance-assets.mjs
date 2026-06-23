#!/usr/bin/env node
/**
 * Downloads the Behance portfolio imagery into apps/web/public/behance/<id>/
 * so the site can serve local copies (no CDN dependency).
 *
 * Usage:
 *   pnpm --filter web assets        # from repo root
 *   node scripts/fetch-behance-assets.mjs   # from apps/web
 *
 * After it finishes, set VITE_USE_LOCAL_ASSETS=true (e.g. in apps/web/.env)
 * to make the app load the local files instead of the Behance CDN.
 *
 * Requires Node 18+ (global fetch). Run on a machine with internet access —
 * Behance's CDN is reachable from normal networks.
 */
import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT = join(ROOT, 'public', 'behance')
const CDN = 'https://mir-s3-cdn-cf.behance.net'

const manifest = JSON.parse(await readFile(join(__dirname, 'behance-manifest.json'), 'utf8'))

// High-res Behance segments. Falls back to a lower tier if a variant 404s,
// so we always end up with the best image that exists. Existing files are
// overwritten so re-running replaces any older low-res copies.
const COVER_SIZES = ['original', '808', '404']
const MODULE_SIZES = ['source', 'hd', 'disp']

async function downloadBest(base, file, sizes) {
  const dest = join(base.dir, file)
  for (const size of sizes) {
    const url = `${CDN}/${base.path}/${size}/${file}`
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
      if (!res.ok) continue
      const buf = Buffer.from(await res.arrayBuffer())
      await writeFile(dest, buf)
      return `${size} ${(buf.length / 1024).toFixed(0)}KB`
    } catch {
      /* try next size */
    }
  }
  throw new Error('no variant available')
}

let ok = 0
let failed = 0

for (const p of manifest.projects) {
  const dir = join(OUT, String(p.id))
  await mkdir(dir, { recursive: true })

  const jobs = [
    { file: p.cover, base: { dir, path: 'projects' }, sizes: COVER_SIZES },
    ...p.images.map((f) => ({ file: f, base: { dir, path: 'project_modules' }, sizes: MODULE_SIZES })),
  ]

  for (const j of jobs) {
    try {
      const r = await downloadBest(j.base, j.file, j.sizes)
      ok++
      console.log(`  ✓ ${r.padStart(12)}  ${p.id}/${j.file}`)
    } catch (e) {
      failed++
      console.warn(`  ✗ FAIL  ${p.id}/${j.file} — ${e.message}`)
    }
  }
}

console.log(`\nDone. ${ok} downloaded (best available res), ${failed} failed.`)
console.log(`Saved to: ${OUT}`)
if (failed === 0) {
  console.log('Tip: add VITE_USE_LOCAL_ASSETS=true to apps/web/.env to serve local images.')
}
