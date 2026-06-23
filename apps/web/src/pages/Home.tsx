import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { featured, behance } from '../data/projects'
import { Reveal, Eyebrow, Marquee } from '../components/common'
import { ProjectCard } from '../components/ProjectCard'

/* ---------------- Hero ---------------- */
function Hero() {
  const [text, setText] = useState('')
  useEffect(() => {
    const words = profile.typedWords
    let wi = 0
    let ci = 0
    let del = false
    let timer: number
    const tick = () => {
      const w = words[wi]
      setText(del ? w.slice(0, ci--) : w.slice(0, ci++))
      let pause = del ? 45 : 95
      if (!del && ci === w.length + 1) {
        del = true
        pause = 1400
      } else if (del && ci < 0) {
        del = false
        wi = (wi + 1) % words.length
        ci = 0
      }
      timer = window.setTimeout(tick, pause)
    }
    tick()
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="flex min-h-screen flex-col justify-center pt-32">
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-16">
        <h1 className="font-pixel font-bold uppercase leading-[0.82] tracking-wider text-brand text-[clamp(72px,19vw,300px)]">
          {profile.short}
        </h1>
        <div className="mt-7 flex flex-wrap items-center gap-3 font-pixel text-[clamp(22px,4.5vw,52px)]">
          Let’s talk about <span className="text-brand">{text}</span>
          <span className="inline-block h-[1em] w-[0.55ch] translate-y-[0.12em] animate-blink bg-brand" />
        </div>
        <div className="mt-12 flex flex-wrap gap-x-9 gap-y-3.5 font-mono text-[13px] tracking-[0.04em] text-vanilla/55">
          <span className="flex items-center gap-2.5">
            <i className="h-[7px] w-[7px] rounded-full bg-brand shadow-[0_0_12px_#fe5102]" />
            Available for freelance &amp; full-time
          </span>
          <span>{profile.role}</span>
          <span>{profile.location}</span>
        </div>
        <div className="mt-16 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-vanilla/30">
          Scroll
          <span className="relative h-px w-[46px] overflow-hidden bg-vanilla/30">
            <span className="absolute inset-0 animate-slidebar bg-brand" />
          </span>
          explore the work
        </div>
      </div>
    </section>
  )
}

/* ---------------- About / Born to Build ---------------- */
function About() {
  return (
    <section id="about" className="py-[clamp(80px,12vh,150px)]">
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-16">
        <Reveal>
          <Eyebrow>About — Persona</Eyebrow>
        </Reveal>
        <Reveal as="h2" className="font-grotesk text-[clamp(40px,8vw,104px)] font-bold leading-[0.95] tracking-tight">
          Born to <span className="text-brand">Build</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[640px] text-[clamp(17px,2vw,22px)] leading-relaxed text-vanilla/55">
            {profile.intro}
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-[18px] md:grid-cols-3 lg:grid-cols-5">
          {profile.services.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * (i + 1)}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-vanilla/10 bg-char-soft transition duration-300 hover:-translate-y-2 hover:border-brand">
                <div className="relative flex aspect-[1/1.15] items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#161616]">
                  <span className="font-pixel text-[46px] text-brand">{s.icon}</span>
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(254,81,2,0.18),transparent_60%)]" />
                </div>
                <div className="px-[18px] pb-6 pt-5">
                  <h3 className="mb-2.5 font-pixel text-xl">{s.title}</h3>
                  <p className="text-[13.5px] leading-snug text-vanilla/55">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Timeline / elevator pitch ---------------- */
function Timeline() {
  return (
    <section id="timeline" className="py-[clamp(80px,12vh,150px)]">
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-16">
        <Reveal>
          <Eyebrow>About — Timeline</Eyebrow>
        </Reveal>
        <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-[90px]">
          <div>
            <Reveal as="h2" className="font-grotesk text-[clamp(40px,8vw,104px)] font-bold leading-[0.95] tracking-tight">
              Work
              <br />
              Timeline
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-[520px] text-[clamp(17px,2vw,22px)] leading-relaxed text-vanilla/55">
                {profile.pitch}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10">
                <div className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-vanilla/55">Main Links</div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Website', href: profile.links.website },
                    { label: 'GitHub', href: profile.links.github },
                    { label: 'Behance', href: profile.links.behance },
                    { label: 'LinkedIn', href: profile.links.linkedin },
                    { label: 'Email', href: `mailto:${profile.email}` },
                  ].map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2.5 rounded-full bg-vanilla px-[18px] py-2.5 text-sm font-semibold text-char transition hover:-translate-y-0.5 hover:bg-brand"
                    >
                      {l.label} <span className="font-mono">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-9 space-y-1">
                {profile.differentiators.map((d, i) => (
                  <li
                    key={d}
                    className="font-pixel text-[clamp(24px,3vw,34px)] leading-snug text-brand transition hover:translate-x-2.5"
                  >
                    <span className="mr-3.5 text-[0.6em] text-vanilla/30">0{i + 1}</span>
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <div className="relative pl-7 before:absolute before:bottom-1.5 before:left-[5px] before:top-1.5 before:w-px before:bg-vanilla/10 before:content-['']">
              {profile.timeline.map((t) => (
                <div
                  key={t.role + t.when}
                  className="relative pb-9 last:pb-0 before:absolute before:-left-[27px] before:top-1.5 before:h-[11px] before:w-[11px] before:rounded-full before:border-2 before:border-brand before:bg-char before:content-['']"
                >
                  <div className="font-mono text-xs tracking-[0.05em] text-brand">{t.when}</div>
                  <h4 className="mb-0.5 mt-1.5 text-[19px] font-semibold">{t.role}</h4>
                  <div className="text-sm text-vanilla/55">{t.org}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Process / Double Diamond ---------------- */
function Process() {
  return (
    <section id="process" className="py-[clamp(80px,12vh,150px)]">
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-16">
        <Reveal>
          <Eyebrow>How I Work</Eyebrow>
        </Reveal>
        <Reveal as="h2" className="font-grotesk text-[clamp(40px,8vw,104px)] font-bold leading-[0.95] tracking-tight">
          The <span className="text-brand">Double Diamond</span>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profile.process.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * (i + 1)}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-vanilla/10 p-7 transition duration-300 hover:border-brand hover:bg-char-soft">
                <div className="font-mono text-[13px] tracking-[0.1em] text-brand">/ {s.n}</div>
                <h4 className="my-3 font-pixel text-[26px]">{s.title}</h4>
                <p className="text-sm leading-relaxed text-vanilla/55">{s.body}</p>
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-brand transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Featured live projects ---------------- */
function Featured() {
  return (
    <section id="work" className="pt-[clamp(80px,12vh,150px)]">
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-16">
        <Reveal>
          <Eyebrow>Selected Work</Eyebrow>
        </Reveal>
        <Reveal as="h2" className="font-grotesk text-[clamp(40px,8vw,104px)] font-bold leading-[0.95] tracking-tight">
          Featured <span className="text-brand">Projects</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[640px] text-[clamp(17px,2vw,22px)] leading-relaxed text-vanilla/55">
            Live products I’ve designed and built — from a career platform to an AI marketing engine.
            Some of my production work is under NDA;{' '}
            <a href="#contact" className="text-brand underline-offset-4 hover:underline">
              more examples available on request
            </a>
            .
          </p>
        </Reveal>
      </div>

      {featured.map((p, idx) => (
        <div key={p.slug} className="border-t border-vanilla/10 py-[clamp(50px,8vh,90px)] first:mt-12">
          <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-16">
            <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-[70px]">
              <div className={idx % 2 ? 'md:order-2' : ''}>
                <Reveal>
                  <div className="mb-4 font-mono text-[13px] tracking-[0.15em] text-brand">
                    / 0{idx + 1} — {p.kind}
                  </div>
                </Reveal>
                <Reveal>
                  <span className="mb-5 inline-block rounded bg-brand px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-char">
                    {p.badge}
                  </span>
                </Reveal>
                <Reveal as="h3" className="mb-2 font-pixel text-[clamp(40px,6vw,76px)] leading-[0.95]">
                  {p.name}
                </Reveal>
                <Reveal>
                  <a href={p.url} target="_blank" rel="noopener" className="mb-5 inline-block font-mono text-sm text-brand">
                    {p.domain} ↗
                  </a>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="max-w-[520px] text-base leading-relaxed text-vanilla/55">{p.blurb}</p>
                </Reveal>
                <Reveal delay={0.16}>
                  <div className="mt-7 flex flex-col gap-3.5">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-center gap-3.5 font-pixel text-[clamp(19px,2.4vw,26px)]">
                        <span className="font-bold text-brand">⊕</span> {f}
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.24}>
                  <Link
                    to={`/work/${p.slug}`}
                    className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-vanilla px-[22px] py-3 font-mono text-sm transition hover:gap-4 hover:border-brand hover:bg-brand hover:text-char"
                  >
                    View case study <span>→</span>
                  </Link>
                </Reveal>
              </div>
              <Reveal delay={0.08} className={idx % 2 ? 'md:order-1' : ''}>
                <BrowserMock
                  url={p.url}
                  live
                  domain={p.domain}
                  name={p.name}
                  blurb={p.features.join(' · ')}
                  gradient={p.gradient}
                  badge={p.kind}
                />
              </Reveal>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export function BrowserMock({
  domain,
  name,
  blurb,
  gradient,
  badge,
  url,
  live = false,
}: {
  domain: string
  name: string
  blurb: string
  gradient: string
  badge: string
  /** live site URL — enables the iframe preview when `live` is set */
  url?: string
  live?: boolean
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-vanilla/10 bg-char-deep shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] transition duration-500 hover:-translate-y-1.5">
      <div className="flex items-center gap-2 border-b border-vanilla/10 bg-[#0c0c0c] px-4 py-3">
        <i className="h-[11px] w-[11px] rounded-full bg-brand" />
        <i className="h-[11px] w-[11px] rounded-full bg-[#333]" />
        <i className="h-[11px] w-[11px] rounded-full bg-[#333]" />
        <span className="ml-3.5 flex-1 truncate rounded-full bg-[#1a1a1a] px-3.5 py-1.5 font-mono text-xs text-vanilla/55">
          {domain}
        </span>
      </div>
      {live && url ? (
        <LivePreview url={url} name={name} gradient={gradient} badge={badge} />
      ) : (
        <div
          className="relative flex aspect-[16/10.5] flex-col items-center justify-center p-8 text-center"
          style={{ background: gradient }}
        >
          <h5 className="relative z-10 font-pixel text-[clamp(28px,4vw,46px)] uppercase leading-none text-white">
            {name}
          </h5>
          <p className="relative z-10 mt-3.5 max-w-[300px] font-mono text-[13px] text-white/75">{blurb}</p>
          <span className="relative z-10 mt-5 rounded-full border border-white/40 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-white">
            {badge}
          </span>
        </div>
      )}
    </div>
  )
}

/**
 * LivePreview — renders the real site in a lazily-loaded, scaled iframe so it
 * looks like a live thumbnail inside the browser-mock. The branded gradient
 * sits behind it as a poster (and as a graceful fallback if a site refuses to
 * be framed). The whole surface links out to open the site in a new tab.
 */
const VW = 1280
const VH = Math.round((VW * 10.5) / 16)

function LivePreview({
  url,
  name,
  gradient,
  badge,
}: {
  url: string
  name: string
  gradient: string
  badge: string
}) {
  const wrap = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.3)
  const [show, setShow] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const ro = new ResizeObserver(() => setScale(el.clientWidth / VW))
    ro.observe(el)
    setScale(el.clientWidth / VW)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.1, rootMargin: '250px' }
    )
    io.observe(el)
    return () => {
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <div
      ref={wrap}
      className="relative aspect-[16/10.5] overflow-hidden"
      style={{ background: gradient }}
    >
      {/* poster (shown until the frame paints, and as a fallback) */}
      <div
        className={`absolute inset-0 z-0 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-700 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h5 className="font-pixel text-[clamp(28px,4vw,46px)] uppercase leading-none text-white">{name}</h5>
        <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.1em] text-white/70">
          loading live preview…
        </span>
      </div>

      {show && (
        <iframe
          src={url}
          title={`${name} — live preview`}
          loading="lazy"
          tabIndex={-1}
          scrolling="no"
          onLoad={() => setLoaded(true)}
          className="absolute left-0 top-0 z-[1] origin-top-left border-0 bg-white"
          style={{ width: VW, height: VH, transform: `scale(${scale})`, pointerEvents: 'none' }}
        />
      )}

      {/* click-through overlay + badges */}
      <a
        href={url}
        target="_blank"
        rel="noopener"
        className="group absolute inset-0 z-10 flex items-end justify-between p-3"
        aria-label={`Open ${name} in a new tab`}
      >
        <span className="flex items-center gap-1.5 rounded-full bg-char-deep/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-vanilla backdrop-blur">
          <i className="h-1.5 w-1.5 animate-blink rounded-full bg-brand" /> Live · {badge}
        </span>
        <span className="rounded-full bg-brand px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-char opacity-0 transition group-hover:opacity-100">
          Open ↗
        </span>
      </a>
    </div>
  )
}

/* ---------------- Behance grid (all work) ---------------- */
function MoreWork() {
  return (
    <section id="more" className="py-[clamp(80px,12vh,150px)]">
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-16">
        <Reveal>
          <Eyebrow>From Behance</Eyebrow>
        </Reveal>
        <Reveal as="h2" className="font-grotesk text-[clamp(40px,8vw,104px)] font-bold leading-[0.95] tracking-tight">
          More <span className="text-brand">Work</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[640px] text-[clamp(17px,2vw,22px)] leading-relaxed text-vanilla/55">
            Product, branding, event design, video and multimedia — every project from my Behance portfolio.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {behance.map((p, i) => (
            <Reveal key={p.id} delay={0.06 * ((i % 3) + 1)}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <a
            href={profile.links.behance}
            target="_blank"
            rel="noopener"
            className="mt-11 inline-flex items-center gap-2.5 font-mono text-sm text-brand hover:gap-4"
          >
            See the full portfolio on Behance ↗
          </a>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Contact / Thank You ---------------- */
function Contact() {
  const rows = [
    { k: 'Email', v: profile.email, href: `mailto:${profile.email}` },
    { k: 'Phone', v: profile.phones[0], href: `tel:${profile.phones[0].replace(/\s/g, '')}` },
    { k: 'GitHub', v: 'github.com/Ajsitu', href: profile.links.github },
    { k: 'Behance', v: 'behance.net/situmbesimataa', href: profile.links.behance },
    { k: 'LinkedIn', v: 'in/situmbeko-simataa', href: profile.links.linkedin },
  ]
  return (
    <section id="contact" className="pt-[clamp(90px,14vh,170px)]">
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-16">
        <Reveal as="h2" className="font-grotesk text-[clamp(64px,16vw,220px)] font-bold leading-[0.85] tracking-tight text-brand">
          Thank You
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-[18ch] font-pixel text-[clamp(22px,3.5vw,40px)] leading-tight">
            Let’s create something out of this world together.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-14 border-t border-vanilla/10">
            {rows.map((r) => (
              <a
                key={r.k}
                href={r.href}
                target={r.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener"
                className="group flex flex-wrap items-center justify-between gap-3.5 border-b border-vanilla/10 px-1 py-6 transition hover:bg-gradient-to-r hover:from-brand/[0.07] hover:to-transparent hover:pl-5"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-vanilla/55">{r.k}</span>
                <span className="font-pixel text-[clamp(20px,3vw,32px)] group-hover:text-brand">{r.v}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <>
      <Hero />
      <Marquee items={profile.skills} />
      <About />
      <Timeline />
      <Process />
      <Featured />
      <MoreWork />
      <Contact />
    </>
  )
}
