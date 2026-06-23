import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AsciiBackground, FloatingNav } from './components/common'
import { Home } from './pages/Home'
import { CaseStudy } from './pages/CaseStudy'

/** Scroll to top on route change, or to the hash target if present. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // wait a tick for the target section to mount
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])
  return null
}

export function App() {
  return (
    <>
      <AsciiBackground />
      <Header />
      <ScrollManager />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-16">
          <Footer />
        </div>
      </main>
      <FloatingNav />
    </>
  )
}
