import { Link } from 'react-router-dom'
import type { BehanceProject } from '../data/projects'
import { coverUrl, coverRemote } from '../lib/assets'
import { SmartImg } from './common'

export function ProjectCard({ p }: { p: BehanceProject }) {
  return (
    <Link
      to={`/work/${p.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-vanilla/10 bg-char-soft"
    >
      <SmartImg
        src={coverUrl(p.id, p.cover, '808')}
        fallbacks={[coverRemote(p.cover, '808'), coverRemote(p.cover, '404')]}
        alt={p.name}
        className="h-full w-full object-cover grayscale-[0.25] transition-all duration-700 group-hover:scale-[1.07] group-hover:grayscale-0"
      />
      <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-char-deep/95 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="font-mono text-[11px] uppercase tracking-wide text-brand">
          {p.category} · {p.year}
        </span>
        <h4 className="text-[15px] font-semibold">{p.name}</h4>
      </div>
    </Link>
  )
}
