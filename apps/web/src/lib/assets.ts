/**
 * Asset URL resolver for Behance imagery.
 *
 * Behance serves the same file at multiple resolutions by swapping a path
 * segment, so we request high-res variants:
 *   covers   -> /projects/<size>/<file>          (original | 808 | 404)
 *   modules  -> /project_modules/<size>/<file>   (source | hd | disp)
 *
 * By default images load from Behance's CDN. After running `pnpm assets`
 * the high-res files are saved to apps/web/public/behance/<id>/, and setting
 * VITE_USE_LOCAL_ASSETS=true serves those local copies instead.
 */
const CDN = 'https://mir-s3-cdn-cf.behance.net'
const USE_LOCAL = import.meta.env.VITE_USE_LOCAL_ASSETS === 'true'

export type CoverSize = 'original' | '808' | '404'
export type ModuleSize = 'source' | 'hd' | 'disp'

export function coverUrl(projectId: number, file: string, size: CoverSize = '808'): string {
  return USE_LOCAL ? `/behance/${projectId}/${file}` : `${CDN}/projects/${size}/${file}`
}
export function coverRemote(file: string, size: CoverSize = '808'): string {
  return `${CDN}/projects/${size}/${file}`
}

export function moduleUrl(projectId: number, file: string, size: ModuleSize = 'source'): string {
  return USE_LOCAL ? `/behance/${projectId}/${file}` : `${CDN}/project_modules/${size}/${file}`
}
export function moduleRemote(file: string, size: ModuleSize = 'hd'): string {
  return `${CDN}/project_modules/${size}/${file}`
}

/* ---------------- Video embeds ---------------- */
export interface VideoEmbed {
  provider: 'youtube' | 'facebook'
  id: string
  /** Original page URL - required for Facebook embeds, optional link-out for YouTube. */
  href?: string
  /** Vertical aspect (reels) render in portrait. */
  portrait?: boolean
}

export function videoEmbedSrc(v: VideoEmbed): string {
  if (v.provider === 'youtube') {
    return `https://www.youtube-nocookie.com/embed/${v.id}?rel=0`
  }
  // facebook
  const href = v.href ?? `https://www.facebook.com/watch/?v=${v.id}`
  return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    href
  )}&show_text=false&width=560&height=314`
}

export function videoWatchUrl(v: VideoEmbed): string {
  if (v.provider === 'youtube') return `https://www.youtube.com/watch?v=${v.id}`
  return v.href ?? `https://www.facebook.com/watch/?v=${v.id}`
}
