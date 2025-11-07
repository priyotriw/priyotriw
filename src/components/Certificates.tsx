import React, { useEffect, useRef, useState } from 'react'

const CERTS = [
  { id: 'c1', title: 'Meta Frontend Developer Professional Certificate', img: 'https://picsum.photos/seed/meta/600/400' },
  { id: 'c2', title: 'Google UX Design Professional Certificate', img: 'https://picsum.photos/seed/google/600/400' },
  { id: 'c3', title: 'Data Visualization with D3.js', img: 'https://picsum.photos/seed/d3/600/400' },
  { id: 'c4', title: 'Advanced React Patterns', img: 'https://picsum.photos/seed/react/600/400' },
  { id: 'c5', title: 'TypeScript Mastery', img: 'https://picsum.photos/seed/ts/600/400' },
]

export default function Certificates() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [paused, setPaused] = useState(false)
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const scrollBy = (delta: number) => {
    ref.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!ref.current || prefersReduced) return
    let raf = 0
    let last = performance.now()
    const speed = 90 // px per second

    const tick = (t: number) => {
      const el = ref.current!
      const dt = Math.min(32, t - last) / 1000 // cap delta
      last = t
      if (!paused) {
        el.scrollLeft += speed * dt // move right => content goes left
        const half = el.scrollWidth / 2
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half // seamless loop at halfway (since items duplicated)
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [paused, prefersReduced])
  return (
    <div className="container">
      <div className="section-header">
        <h2>Certificates</h2>
        <div className="carousel-controls">
          <button className="btn btn-ghost small" onClick={() => scrollBy(-360)} aria-label="Scroll left">◀</button>
          <button className="btn btn-ghost small" onClick={() => scrollBy(360)} aria-label="Scroll right">▶</button>
        </div>
      </div>
      <div
        className={`carousel autoplay`}
        ref={ref}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-label="Certificates carousel auto-playing right to left"
      >
        {[...CERTS, ...CERTS].map(c => (
          <figure key={c.id} className="certificate">
            <img src={c.img} alt="Certificate" loading="lazy" />
            <figcaption>{c.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
