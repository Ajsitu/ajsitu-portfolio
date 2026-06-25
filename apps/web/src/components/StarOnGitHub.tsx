import { useEffect, useState } from 'react'
import { IconGitHub, IconStar } from './icons'

const REPO = 'Ajsitu/ajsitu-portfolio'

/**
 * Animated "Star on GitHub" button (rainbow border, MagicUI-style) adapted to
 * the dark theme. Links to the repo and shows the live stargazer count fetched
 * from the public GitHub API.
 */
export function StarOnGitHub() {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    let alive = true
    fetch(`https://api.github.com/repos/${REPO}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (alive && d && typeof d.stargazers_count === 'number') setStars(d.stargazers_count)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])

  return (
    <a
      href={`https://github.com/${REPO}`}
      target="_blank"
      rel="noopener"
      aria-label="Star this portfolio on GitHub"
      className="group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl bg-[length:200%] px-5 text-sm font-medium text-vanilla transition-transform duration-200 [background-clip:padding-box,border-box,border-box] [background-image:linear-gradient(#101010,#101010),linear-gradient(#101010_50%,rgba(16,16,16,0.6)_80%,rgba(16,16,16,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] [background-origin:border-box] [border:2px_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[length:200%] before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(0.9rem)] hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 flex items-center gap-2">
        <IconGitHub className="h-4 w-4" />
        Star on GitHub
      </span>
      <span className="relative z-10 ml-3 flex items-center gap-1 border-l border-vanilla/20 pl-3">
        <IconStar className="h-4 w-4 text-vanilla/40 transition-colors duration-200 group-hover:text-yellow-300" />
        <span className="tabular-nums tracking-wide">{stars ?? '—'}</span>
      </span>
    </a>
  )
}
