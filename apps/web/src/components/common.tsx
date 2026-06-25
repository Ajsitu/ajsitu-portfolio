import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'

/* ------------------------------------------------------------------ */
/* Reveal - fades/raises children into view on scroll                  */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
  variant = 'up',
  style,
}: {
  children: ReactNode
  delay?: number
  as?: keyof JSX.IntrinsicElements
  className?: string
  /** 'up' = glide up · 'right' = slide in from right · 'title' = clean wipe-up (for display headings) */
  variant?: 'up' | 'right' | 'title'
  style?: CSSProperties
}) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const Comp = Tag as any
  const base = variant === 'right' ? 'reveal-right' : variant === 'title' ? 'reveal-title' : 'reveal'
  return (
    <Comp ref={ref} className={`${base} ${className}`} style={{ transitionDelay: `${delay}s`, ...style }}>
      {children}
    </Comp>
  )
}

/* ------------------------------------------------------------------ */
/* SmartImg - tries a chain of sources, then a graceful placeholder     */
/* ------------------------------------------------------------------ */
export function SmartImg({
  src,
  fallback,
  fallbacks,
  alt,
  className = '',
}: {
  src: string
  /** single fallback (kept for convenience) */
  fallback?: string
  /** ordered fallback chain, tried after `src`/`fallback` */
  fallbacks?: string[]
  alt: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const idx = useRef(0)
  const chain = [...(fallback ? [fallback] : []), ...(fallbacks ?? [])]
  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#262626] to-[#151515] p-5 text-center font-pixel text-muted-foreground ${className}`}
      >
        {alt}
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={(e) => {
        const img = e.currentTarget
        if (idx.current < chain.length) {
          img.src = chain[idx.current]
          idx.current += 1
        } else {
          setFailed(true)
        }
      }}
    />
  )
}

/* ------------------------------------------------------------------ */
/* VideoPlayer - lazy, click-to-load embed (YouTube / Facebook)         */
/* ------------------------------------------------------------------ */
import { videoEmbedSrc, videoWatchUrl, type VideoEmbed } from '../lib/assets'

export function VideoPlayer({ video, label }: { video: VideoEmbed; label?: string }) {
  const [play, setPlay] = useState(false)
  const thumb =
    video.provider === 'youtube'
      ? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`
      : undefined
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-vanilla/10 bg-black ${
        video.portrait ? 'aspect-[9/16] mx-auto max-w-[360px]' : 'aspect-video'
      }`}
    >
      {play ? (
        <iframe
          src={`${videoEmbedSrc(video)}${video.provider === 'youtube' ? '&autoplay=1' : ''}`}
          title={label ?? 'Video'}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          onClick={() => setPlay(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label={`Play ${label ?? 'video'}`}
        >
          {thumb && (
            <img
              src={thumb}
              alt={label ?? 'Video thumbnail'}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition group-hover:opacity-90"
            />
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-char-deep/70 to-transparent" />
          <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-char transition group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 translate-x-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          {label && (
            <span className="absolute bottom-3 left-3 z-10 font-mono text-xs text-vanilla/80">{label}</span>
          )}
        </button>
      )}
    </div>
  )
}

export { videoWatchUrl }

/* ------------------------------------------------------------------ */
/* AsciiBackground - the faint regenerating "matrix" texture            */
/* ------------------------------------------------------------------ */
export function AsciiBackground() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const chars = '%&!|+.· /\\'
    const build = () => {
      // overfill on every axis so the grid bleeds off all edges (overflow is clipped)
      const cols = Math.ceil(window.innerWidth / 9) + 8
      const rows = Math.ceil(window.innerHeight / 16) + 6
      let out = ''
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          out += Math.random() < 0.42 ? chars[Math.floor(Math.random() * chars.length)] : ' '
        }
        out += '\n'
      }
      el.textContent = out
    }
    build()
    let t: number
    const onResize = () => {
      clearTimeout(t)
      t = window.setTimeout(build, 250)
    }
    window.addEventListener('resize', onResize)
    const iv = window.setInterval(build, 4200)
    return () => {
      window.removeEventListener('resize', onResize)
      clearInterval(iv)
      clearTimeout(t)
    }
  }, [])
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden whitespace-pre text-[15px] leading-[1.15] tracking-[2px] text-vanilla/[0.05]"
      style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' }}
    />
  )
}

/* ------------------------------------------------------------------ */
/* Marquee - scrolling skills strip                                     */
/* ------------------------------------------------------------------ */
export function Marquee({ items }: { items: string[] }) {
  const row = (
    <span className="flex items-center gap-12 pr-12 font-pixel text-[26px] uppercase max-[620px]:text-xl">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-12">
          {it} <i className="not-italic text-brand">✦</i>
        </span>
      ))}
    </span>
  )
  return (
    <div className="flex overflow-hidden whitespace-nowrap border-y border-vanilla/10 py-5" aria-hidden>
      <div className="flex shrink-0 animate-marquee">
        {row}
        {row}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* SectionHeading + Eyebrow                                             */
/* ------------------------------------------------------------------ */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 inline-flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.22em] text-vanilla before:h-px before:w-7 before:bg-brand before:content-['']">
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* FloatingNav - scroll-progress ring + back-to-top (echoes deck nav)   */
/* ------------------------------------------------------------------ */
export function FloatingNav() {
  const [offset, setOffset] = useState(100)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const p = h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0
      setOffset(100 - p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="group fixed bottom-7 right-7 z-40 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-vanilla/10 bg-char-deep/70 text-vanilla backdrop-blur transition hover:border-brand hover:bg-brand hover:text-char max-[620px]:bottom-[18px] max-[620px]:right-[18px] max-[620px]:h-[52px] max-[620px]:w-[52px]"
    >
      <svg className="absolute -inset-px" viewBox="0 0 60 60">
        <circle
          cx="30"
          cy="30"
          r="28"
          pathLength={100}
          strokeDasharray={100}
          strokeDashoffset={offset}
          className="fill-none stroke-brand"
          strokeWidth={2}
        />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}
