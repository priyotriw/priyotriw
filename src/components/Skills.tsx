import React, { useEffect, useMemo, useRef, useState } from 'react'

const groups: { title: string, items: string[] }[] = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js'] },
  { title: 'Data Visualization', items: ['D3.js', 'Chart.js'] },
  { title: 'Tools', items: ['Git', 'Figma', 'Vite', 'Jest', 'Playwright'] },
]

export default function Skills() {
  const [active, setActive] = useState<string>('React')
  const rootRef = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true)
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const details = useMemo(() => ({
    HTML: 'Semantic markup, accessibility-first structure, SEO-friendly content.',
    CSS: 'Modern layout (Flexbox/Grid), custom properties, responsive design, dark/light themes.',
    JavaScript: 'ES2020+, functional patterns, performance profiling, Web APIs.',
    TypeScript: 'Typed components, generics, utility types, DX and reliability.',
    React: 'Hooks, context, suspense, performance optimization, accessibility.',
    'Next.js': 'App Router, ISR/SSR/SSG, image optimization, metadata API.',
    'Vue.js': 'Single-file components, transitions, state management basics.',
    'D3.js': 'SVG/Canvas, scales, layouts, transitions, data joins.',
    'Chart.js': 'Quick dashboards, theming, plugins, accessibility tweaks.',
    Git: 'Clean branching, PR workflows, conventional commits, CI integration.',
    Figma: 'Design tokens, component libraries, dev handoff, prototypes.',
    Vite: 'Lightning-fast dev, TS/React integration, code-splitting.',
    Jest: 'Unit tests, snapshots, mocking, coverage-driven quality.',
    Playwright: 'E2E tests, tracing, reliability across browsers.',
  } as Record<string,string>), [])

  const onActivate = (name: string) => setActive(name)
  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>, name: string) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onActivate(name) }
  }

  return (
    <div ref={rootRef} className={`container skills-enhanced ${show ? 'show' : ''}`}>
      <h2>Skills</h2>
      <div className="skills">
        {groups.map((g, gIdx) => (
          <div
            key={g.title}
            className="skill-group"
            style={{ transitionDelay: show ? `${Math.min(gIdx * 80, 320)}ms` : '0ms' }}
          >
            <h3>{g.title}</h3>
            <div className="badges skill-badges" role="list">
              {g.items.map((i, idx) => (
                <button
                  key={i}
                  role="listitem"
                  className={`badge skill-badge ${active === i ? 'active' : ''}`}
                  aria-pressed={active === i}
                  onClick={() => onActivate(i)}
                  onKeyDown={(e) => onKey(e, i)}
                  style={{ transitionDelay: show ? `${Math.min(idx * 40, 240)}ms` : '0ms' }}
                >{i}</button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`skill-detail ${active ? 'show' : ''}`} aria-live="polite">
        <div className="skill-detail-inner">
          <div className="skill-detail-title">
            <span className="badge">{active}</span>
          </div>
          <p className="muted">{details[active] || 'Click a skill to see more details.'}</p>
          <div className="skill-detail-actions">
            <a href="#projects" className="btn btn-primary small">See related projects</a>
          </div>
        </div>
      </div>
    </div>
  )
}
