import { useEffect, useRef } from 'react'

/**
 * "Programming" Lottie (person coding at a desk) recolored to the portfolio
 * palette at runtime. lottie-web is loaded from a CDN so we don't add a build
 * dependency; the animation JSON lives in /public/lottie/programming.json.
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
  { from: [0.192, 0.129, 0.075], to: PAL.charDeep }, // dark ink / outlines
  { from: [0, 0, 0], to: PAL.charDeep }, // black (code lines, arm)
  { from: [0.153, 0.142, 0.142], to: PAL.charDeep }, // near-black stroke
  { from: [0.565, 0.282, 0.137], to: PAL.charDeep }, // brown (hair / pants)
  { from: [1, 1, 1], to: PAL.vanilla }, // white (shirt, screen)
  { from: [0.929, 0.89, 0.867], to: PAL.vanilla }, // cream
  { from: [0.859, 0.792, 0.761], to: PAL.paragraph }, // tan (shoes / shadows)
  { from: [0.902, 0.631, 0.608], to: PAL.paragraph }, // skin
  { from: [0.412, 0.529, 0.816], to: PAL.brand }, // blue accent
  { from: [0.949, 0.804, 0.365], to: PAL.brand }, // yellow accent
  { from: [0.737, 0.706, 0.412], to: PAL.brand }, // light olive (leaves)
  { from: [0.549, 0.518, 0.239], to: PAL.brandDim }, // olive (leaves)
  { from: [1, 0.514, 0.463], to: PAL.charSoft }, // coral background blob
]

const near = (a: number, b: number) => Math.abs(a - b) < 0.06

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
      // neutralise the Controller expressions so they don't override our colors
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

export function ProgrammingLottie() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let alive = true
    let anim: any
    // Try the canonical name first, then the common double-extension save artifact.
    const fetchData = async () => {
      for (const url of ['/lottie/programming.json', '/lottie/programming.json.json']) {
        try {
          const r = await fetch(url)
          if (!r.ok) continue
          if (!(r.headers.get('content-type') || '').includes('json')) continue
          return await r.json()
        } catch {
          /* try next */
        }
      }
      throw new Error('programming lottie not found')
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
