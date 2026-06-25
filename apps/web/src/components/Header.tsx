import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'
import { IconGitHub, IconBehance, IconLinkedIn, IconMail } from './icons'

const NAV = [
  { n: '01.', label: 'About', to: '/#about' },
  { n: '02.', label: 'Process', to: '/#process' },
  { n: '03.', label: 'Projects', to: '/#work' },
  { n: '04.', label: 'More Work', to: '/#more' },
  { n: '05.', label: 'Contact', to: '/#contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const go = (to: string) => {
    setOpen(false)
    const [path, hash] = to.split('#')
    if (location.pathname !== (path || '/')) {
      navigate(to)
    } else if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b px-5 transition-all duration-300 sm:px-8 lg:px-16 ${
          scrolled
            ? 'border-vanilla/10 bg-char-deep/80 py-3.5 backdrop-blur-md'
            : 'border-transparent py-5'
        }`}
      >
        <Link
          to="/"
          className="font-pixel font-bold text-xl tracking-wide"
          onClick={() => setOpen(false)}
        >
          {profile.short}
          <span className="text-brand">.</span>
        </Link>
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(o => !o)}
          className="flex h-[46px] w-[46px] flex-col items-center justify-center gap-[5px] rounded-full border border-vanilla/10 transition hover:border-brand"
        >
          <span
            className={`h-0.5 w-[18px] bg-vanilla transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-[18px] bg-vanilla transition-opacity ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-[18px] bg-vanilla transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </header>

      {/* Overlay menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center bg-char-deep px-5 transition-[clip-path] duration-[600ms] [transition-timing-function:cubic-bezier(.76,0,.24,1)] sm:px-12 lg:px-28"
        style={{
          clipPath: open
            ? 'circle(150% at calc(100% - 44px) 44px)'
            : 'circle(0% at calc(100% - 44px) 44px)',
        }}
      >
        <nav className="flex flex-col gap-1.5">
          {NAV.map(item => (
            <button
              key={item.label}
              onClick={() => go(item.to)}
              className="group flex w-fit items-baseline gap-4 font-grotesk text-[clamp(34px,7vw,72px)] font-bold leading-[1.05] transition hover:translate-x-3.5 hover:text-brand"
            >
              <span className="font-mono text-sm font-medium text-brand">{item.n}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[13px] text-vanilla/55">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 hover:text-brand"
          >
            <IconMail className="h-4 w-4" /> {profile.email}
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 hover:text-brand"
          >
            <IconGitHub className="h-4 w-4" /> GitHub
          </a>
          <a
            href={profile.links.behance}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 hover:text-brand"
          >
            <IconBehance className="h-4 w-4" /> Behance
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 hover:text-brand"
          >
            <IconLinkedIn className="h-4 w-4" /> LinkedIn
          </a>
          <span>{profile.location}</span>
        </div>
      </div>
    </>
  )
}
