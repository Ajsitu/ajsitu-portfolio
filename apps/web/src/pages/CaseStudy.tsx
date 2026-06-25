import { Link, useParams } from 'react-router-dom'
import { featured, behance } from '../data/projects'
import { profile } from '../data/profile'
import { Reveal, Eyebrow, SmartImg, VideoPlayer } from '../components/common'
import { IconCirclePlus } from '../components/icons'
import { BrowserMock } from './Home'
import { coverUrl, coverRemote, moduleUrl, moduleRemote } from '../lib/assets'

const STEPS = ['Discover', 'Define', 'Develop', 'Deliver']

function StepRow() {
  return (
    <div className="mt-8 flex max-w-xl flex-wrap gap-x-10 gap-y-4">
      {STEPS.map((s, i) => (
        <div key={s} className="flex min-w-[88px] flex-1 flex-col gap-2.5">
          <span
            className={`flex items-center gap-2 text-sm tracking-tight ${
              i === 0 ? 'text-vanilla' : 'text-vanilla'
            }`}
          >
            {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
            {s}
          </span>
          <span className={`h-px w-full ${i === 0 ? 'bg-brand' : 'bg-vanilla/15'}`} />
        </div>
      ))}
    </div>
  )
}

export function CaseStudy() {
  const { slug } = useParams()
  const live = featured.find(p => p.slug === slug)
  const proj = behance.find(p => p.slug === slug)

  if (!live && !proj) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="font-pixel text-5xl text-brand">404</h1>
        <p className="text-vanilla">That project could not be found.</p>
        <Link to="/#work" className="font-mono text-sm text-brand">
          ← Back to work
        </Link>
      </section>
    )
  }

  /* ---------- Live product case study ---------- */
  if (live) {
    return (
      <article className="pt-32">
        <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-16">
          <Reveal>
            <Link
              to="/#work"
              className="mb-10 inline-block font-mono text-sm text-vanilla hover:text-brand"
            >
              ← All work
            </Link>
          </Reveal>
          <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-[70px]">
            <div>
              <Reveal>
                <Eyebrow>{live.kind}</Eyebrow>
              </Reveal>
              <Reveal
                as="h1"
                variant="title"
                className="font-pixel text-[clamp(48px,8vw,96px)] leading-[0.9]"
              >
                {live.name}
              </Reveal>
              <Reveal>
                <a
                  href={live.url}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 inline-block font-mono text-sm text-brand"
                >
                  {live.domain} ↗
                </a>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-vanilla">
                  {live.blurb}
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-7 flex flex-col gap-3.5">
                  {live.features.map(f => (
                    <div
                      key={f}
                      className="flex items-center gap-3.5 font-pixel text-[clamp(19px,2.4vw,26px)]"
                    >
                      <IconCirclePlus className="h-6 w-6 shrink-0 text-brand" /> {f}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.08} variant="right">
              <BrowserMock
                url={live.url}
                live
                domain={live.domain}
                name={live.name}
                blurb={live.features.join(' · ')}
                gradient={live.gradient}
                badge={live.kind}
              />
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-20 border-t border-vanilla/10 pt-12">
              <Eyebrow>Process</Eyebrow>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {profile.process.map(s => (
                  <div key={s.title} className="rounded-xl border border-vanilla/10 p-6">
                    <div className="font-mono text-[13px] text-brand">/ {s.n}</div>
                    <h4 className="my-2.5 font-pixel text-2xl">{s.title}</h4>
                    <p className="text-sm leading-relaxed text-vanilla">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <a
              href={live.url}
              target="_blank"
              rel="noopener"
              className="mt-12 inline-flex items-center gap-2.5 rounded-full border border-vanilla px-6 py-3.5 font-mono text-sm transition hover:gap-4 hover:border-brand hover:bg-brand hover:text-char"
            >
              Open live site <span>↗</span>
            </a>
          </Reveal>
        </div>
      </article>
    )
  }

  /* ---------- Behance project case study ---------- */
  const p = proj!
  const idx = behance.findIndex(b => b.slug === slug)
  const next = behance[(idx + 1) % behance.length]

  return (
    <article className="pt-32">
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-16">
        <Reveal>
          <Link
            to="/#more"
            className="mb-10 inline-block font-mono text-sm text-vanilla hover:text-brand"
          >
            ← All work
          </Link>
        </Reveal>

        <Reveal>
          <Eyebrow>
            {p.category} · {p.year}
          </Eyebrow>
        </Reveal>
        <Reveal
          as="h1"
          variant="title"
          className="max-w-[15ch] font-pixel text-[clamp(40px,7vw,90px)] leading-[0.92]"
        >
          {p.name}
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-vanilla">{p.blurb}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <div className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-vanilla/40">
                Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tools.map(t => (
                  <span
                    key={t}
                    className="rounded-full border border-vanilla/15 px-3 py-1 font-mono text-xs text-vanilla/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-vanilla/40">
                Tags
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span
                    key={t}
                    className="rounded-full border border-vanilla/15 px-3 py-1 font-mono text-xs text-vanilla/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <StepRow />
        </Reveal>

        {/* Hero cover (full-res) */}
        <Reveal delay={0.1} variant="right">
          <div className="mt-12 overflow-hidden rounded-2xl border border-vanilla/10">
            <SmartImg
              src={coverUrl(p.id, p.cover, 'original')}
              fallbacks={[coverRemote(p.cover, 'original'), coverRemote(p.cover, '808')]}
              alt={p.name}
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Videos - play inline */}
        {p.videos && p.videos.length > 0 && (
          <div className="mt-8">
            <Eyebrow>Watch the reel</Eyebrow>
            <div className="grid gap-6 sm:grid-cols-2">
              {p.videos.map((v, i) => (
                <Reveal
                  key={v.id}
                  delay={0.04 * (i % 4)}
                  className={v.portrait ? 'sm:col-span-2' : ''}
                >
                  <VideoPlayer video={v} label={`Clip ${i + 1}`} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Gallery (full-res) */}
        {p.images.length > 0 && (
          <div className="mt-6 grid gap-6">
            {p.images.map((file, i) => (
              <Reveal key={file} delay={0.04 * (i % 4)}>
                <div className="overflow-hidden rounded-xl border border-vanilla/10 bg-char-soft">
                  <SmartImg
                    src={moduleUrl(p.id, file, 'source')}
                    fallbacks={[
                      moduleRemote(file, 'source'),
                      moduleRemote(file, 'hd'),
                      moduleRemote(file, 'disp'),
                    ]}
                    alt={`${p.name} ${i + 1}`}
                    className="w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-vanilla/10 pt-8">
          <a
            href={p.url}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 rounded-full border border-vanilla px-6 py-3.5 font-mono text-sm transition hover:gap-4 hover:border-brand hover:bg-brand hover:text-char"
          >
            View on Behance <span>↗</span>
          </a>
          <Link
            to={`/work/${next.slug}`}
            className="font-mono text-sm text-vanilla hover:text-brand"
          >
            Next project: {next.name} →
          </Link>
        </div>
      </div>
    </article>
  )
}
