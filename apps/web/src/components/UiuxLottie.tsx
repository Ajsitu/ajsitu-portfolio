import { useEffect, useRef } from 'react'

/**
 * "UI/UX" Lottie recolored to the portfolio palette at runtime. lottie-web is
 * loaded from a CDN so we don't add a build dependency; the animation JSON lives
 * in /public/lottie (saved as UIUX.json.json from the browser, so we try a few
 * names).
 */

// App palette as Lottie RGB (0..1)
const PAL = {
  charDeep: [0.062745, 0.062745, 0.062745], // #101010
  charSoft: [0.121569, 0.121569, 0.121569], // #1f1f1f
  vanilla: [1, 0.980392, 0.933333], // #fffaee
  paragraph: [0.596078, 0.584314, 0.560784], // #98958f
  brand: [0.996078, 0.317647, 0.007843], // #fe5102
  brandDim: [0.784314, 0.25098, 0.039216], // #c8400a
}

// Map the original illustration colors to the app palette
const MAP: { from: number[]; to: number[] }[] = [
  { from: [0.482353, 0.662745, 0.980392], to: PAL.brand }, // primary light blue -> brand
  { from: [0.921569, 0.67451, 0.231373], to: PAL.brand }, // gold accent -> brand
  { from: [0.972549, 0.205952, 0.205952], to: PAL.brand }, // red dot -> brand
  { from: [0.262745, 0.380392, 0.717647], to: PAL.brandDim }, // indigo -> brand dim
  { from: [1, 1, 1], to: PAL.vanilla }, // white panels -> vanilla
  { from: [0.996078, 0.996078, 0.996078], to: PAL.vanilla }, // near-white -> vanilla
  { from: [0.870588, 0.913725, 0.996078], to: PAL.paragraph }, // pale blue -> muted
  { from: [0.870588, 0.921569, 1], to: PAL.paragraph }, // pale blue 2 -> muted
  { from: [0.705882, 0.811765, 0.996078], to: PAL.paragraph }, // periwinkle -> muted
  { from: [0.235294, 0.301961, 0.466667], to: PAL.charSoft }, // dark blue -> char soft
  { from: [0.219608, 0.235294, 0.337255], to: PAL.charDeep }, // navy outline -> char deep
]

const near = (a: number, b: number) => Math.abs(a - b) < 0.05

/* eslint-disable @typescript-eslint/no-explicit-any */
function recolor(node: any): void {
  if (Array.isArray(node)) {
    node.forEach(recolor)
    return
  }
  if (node && typeof node === 'object') {
    if (
      (node.ty === 'fl' || node.ty === 'st') &&
      node.c &&
      Array.isArray(node.c.k) &&
      typeof node.c.k[0] === 'number'
    ) {
      const k = node.c.k as number[]
      for (const m of MAP) {
        if (near(k[0], m.from[0]) && near(k[1], m.from[1]) && near(k[2], m.from[2])) {
          k[0] = m.to[0]
          k[1] = m.to[1]
          k[2] = m.to[2]
          break
        }
      }
      if (node.c.x) delete node.c.x
    }
    for (const key in node) recolor(node[key])
  }
}

const LOTTIE_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js'

function loadLottie(): Promise<any> {
  const w = window as any
  if (w.lottie) return Promise.resolve(w.lottie)
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-lottie]`) as HTMLScriptElement | null
    if (existing) {
      existing.addEventListener('load', () => resolve((window as any).lottie))
      existing.addEventListener('error', reject)
      if ((window as any).lottie) resolve((window as any).lottie)
      return
    }
    const s = document.createElement('script')
    s.src = LOTTIE_SRC
    s.async = true
    s.dataset.lottie = 'true'
    s.onload = () => resolve((window as any).lottie)
    s.onerror = reject
    document.head.appendChild(s)
  })
}

export function UiuxLottie() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let alive = true
    let anim: any
    const fetchData = async () => {
      for (const url of [
        '/lottie/uiux.json',
        '/lottie/UIUX.json',
        '/lottie/UIUX.json.json',
        '/lottie/uiux.json.json',
      ]) {
        try {
          const r = await fetch(url)
          if (!r.ok) continue
          if (!(r.headers.get('content-type') || '').includes('json')) continue
          return await r.json()
        } catch {
          /* try next */
        }
      }
      throw new Error('uiux lottie not found')
    }
    Promise.all([loadLottie(), fetchData()])
      .then(([lottie, data]) => {
        if (!alive || !ref.current || !lottie) return
        recolor(data)
        anim = lottie.loadAnimation({
          container: ref.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: data,
        })
        // Drop the full-canvas background plate so the scene floats on the card.
        const stripBg = () => {
          const svg = ref.current?.querySelector('svg')
          if (!svg) return
          const vb = (svg.getAttribute('viewBox') || '0 0 0 0').split(/\s+/).map(Number)
          const area = vb[2] * vb[3]
          if (!area) return
          svg.querySelectorAll('path').forEach(p => {
            let b: DOMRect
            try {
              b = (p as SVGGraphicsElement).getBBox()
            } catch {
              return
            }
            if (b.width * b.height >= 0.9 * area) (p as SVGElement).style.display = 'none'
          })
        }
        anim.addEventListener('DOMLoaded', stripBg)
      })
      .catch(() => {})
    return () => {
      alive = false
      if (anim) anim.destroy()
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative z-10 h-full w-full [&_svg]:!h-full [&_svg]:!w-full"
    />
  )
}
