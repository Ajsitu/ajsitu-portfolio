import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-4 pb-16 pt-10 font-mono text-xs text-vanilla/30">
      <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
      <span>Designed &amp; built by {profile.short} ✦ UI/UX &amp; Front-End</span>
    </footer>
  )
}
