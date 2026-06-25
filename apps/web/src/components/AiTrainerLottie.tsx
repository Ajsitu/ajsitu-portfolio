import { useEffect, useRef } from 'react'

/**
 * "AI Trainer" Lottie recolored to the portfolio palette at runtime. lottie-web
 * is loaded from a CDN so we don't add a build dependency; the animation JSON
 * lives in /public/lottie (saved as ai-trainer.json.json from the browser, so we
 * try a few names).
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
  { from: [1, 1, 1], to: PAL.vanilla }, // white
  { from: [0.956863, 0.956863, 0.956863], to: PAL.vanilla }, // off-white
  { from: [0.67451, 0.898039, 0.964706], to: PAL.paragraph }, // light cyan -> muted
  { from: [0.137255, 0.698039, 0.854902], to: PAL.brand }, // teal/cyan -> brand
  { from: [0.035294, 0.458824, 0.717647], to: PAL.brand }, // medium blue -> brand
  { from: [0.952941, 0.203922, 0.337255], to: PAL.brand }, // pink/red -> brand
  { from: [0.776471, 0.070588, 0.207843], to: PAL.brandDim }, // crimson -> brand dim
  { from: [0.211765, 0.270588, 0.368627], to: PAL.charSoft }, // slate -> char soft
  { from: [0.105882, 0.14902, 0.235294], to: PAL.charDeep }, // dark navy -> char deep
]

const near = (a: number, b: number) => Math.abs(a - b) < 0.045

// For gradient stops: snap each stop to the nearest palette colour.
const PAL_LIST = [PAL.charDeep, PAL.charSoft, PAL.vanilla, PAL.paragraph, PAL.brand, PAL.brandDim]
function nearestPal(r: number, g: number, b: number): number[] {
  let best = PAL_LIST[0]
  let bd = Infinity
  for (const c of PAL_LIST) {
    const d = (c[0] - r) ** 2 + (c[1] - g) ** 2 + (c[2] - b) ** 2
    if (d < bd) {
      bd = d
      best = c
    }
  }
  return best
}

// Apply the palette MAP to a single [r,g,b,...] array in place.
function remap(arr: number[]): void {
  for (const m of MAP) {
    if (near(arr[0], m.from[0]) && near(arr[1], m.from[1]) && near(arr[2], m.from[2])) {
      arr[0] = m.to[0]
      arr[1] = m.to[1]
      arr[2] = m.to[2]
      return
    }
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function recolor(node: any): void {
  if (Array.isArray(node)) {
    node.forEach(recolor)
    return
  }
  if (node && typeof node === 'object') {
    // solid fill / stroke - static OR animated colours
    if ((node.ty === 'fl' || node.ty === 'st') && node.c && Array.isArray(node.c.k)) {
      if (typeof node.c.k[0] === 'number') {
        remap(node.c.k as number[])
      } else {
        node.c.k.forEach((kf: any) => {
          if (kf && Array.isArray(kf.s)) remap(kf.s)
          if (kf && Array.isArray(kf.e)) remap(kf.e)
        })
      }
      if (node.c.x) delete node.c.x
    }
    // gradient fill / stroke - snap every colour stop to the palette
    if (
      (node.ty === 'gf' || node.ty === 'gs') &&
      node.g &&
      node.g.k &&
      Array.isArray(node.g.k.k) &&
      typeof node.g.k.k[0] === 'number'
    ) {
      const arr = node.g.k.k as number[]
      const stops = node.g.p || Math.floor(arr.length / 4)
      for (let i = 0; i < stops; i++) {
        const o = i * 4
        const t = nearestPal(arr[o + 1], arr[o + 2], arr[o + 3])
        arr[o + 1] = t[0]
        arr[o + 2] = t[1]
        arr[o + 3] = t[2]
      }
      if (node.g.k.x) delete node.g.k.x
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

export function AiTrainerLottie() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let alive = true
    let anim: any
    const fetchData = async () => {
      for (const url of ['/lottie/ai-trainer.json', '/lottie/ai-trainer.json.json']) {
        try {
          const r = await fetch(url)
          if (!r.ok) continue
          if (!(r.headers.get('content-type') || '').includes('json')) continue
          return await r.json()
        } catch {
          /* try next */
        }
      }
      throw new Error('ai-trainer lottie not found')
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
          svg.querySelectorAll('path').forEach((p) => {
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
