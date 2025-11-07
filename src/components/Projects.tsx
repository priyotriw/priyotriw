import React, { useMemo, useState } from 'react'
import type { Project } from '../types'

const ALL_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Market Insights Dashboard',
    description: 'Real-time trading metrics with interactive charts and micro-interactions.',
    problem: 'Stakeholders needed a single view for volatile KPIs updated in near real-time.',
    solution: 'Built a React + D3 architecture with websocket-driven updates and memoized layers.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Vite'],
    image: 'https://picsum.photos/seed/market/800/500',
    demoUrl: '#',
    repoUrl: '#',
    tags: ['React', 'Data Viz']
  },
  {
    id: 'p2',
    title: 'Customer Journey Visualizer',
    description: 'Sankey-like flows to explore funnel conversions across segments.',
    problem: 'PMs lacked clarity on drop-offs across channels and devices.',
    solution: 'Created custom SVG paths with transitions and accessible navigation.',
    technologies: ['React', 'D3.js', 'SVG'],
    image: 'https://picsum.photos/seed/journey/800/500',
    demoUrl: '#',
    repoUrl: '#',
    tags: ['React', 'Data Viz']
  },
  {
    id: 'p3',
    title: 'IoT Fleet Monitor',
    description: 'Map overlays and charts for telemetry across thousands of devices.',
    problem: 'Ops needed fast filtering and anomaly detection at scale.',
    solution: 'Virtualized lists, canvas charts, and web workers for heavy computation.',
    technologies: ['React', 'TypeScript', 'Canvas'],
    image: 'https://picsum.photos/seed/fleet/800/500',
    demoUrl: '#',
    repoUrl: '#',
    tags: ['React']
  },
  {
    id: 'p4',
    title: 'Analytics Storytelling Blog',
    description: 'Scrollytelling templates showcasing narrative visualizations.',
    problem: 'Content team needed reusable blocks to ship stories faster.',
    solution: 'Composable components with intersection observers and spring animations.',
    technologies: ['Next.js', 'React', 'MDX'],
    image: 'https://picsum.photos/seed/story/800/500',
    demoUrl: '#',
    repoUrl: '#',
    tags: ['React']
  },
  {
    id: 'p5',
    title: 'Sales Performance Board (Vue)',
    description: 'Team leaderboard with animated comparisons and trend lines.',
    problem: 'Managers needed transparent, motivating performance visuals.',
    solution: 'Implemented Vue components with transitions and accessible tooltips.',
    technologies: ['Vue.js', 'Chart.js'],
    image: 'https://picsum.photos/seed/sales/800/500',
    demoUrl: '#',
    repoUrl: '#',
    tags: ['Vue']
  },
  {
    id: 'p6',
    title: 'Open-source Chart Utils',
    description: 'A small utility set for data transforms and axis formatting.',
    problem: 'Repeating data prep logic across projects increased bugs.',
    solution: 'Published typed helpers with tests and docs to reuse across apps.',
    technologies: ['TypeScript', 'D3.js'],
    image: 'https://picsum.photos/seed/utils/800/500',
    demoUrl: '#',
    repoUrl: '#',
    tags: ['Data Viz']
  },
]

const FILTERS = ['All', 'React', 'Data Viz', 'Vue'] as const

export default function Projects() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('All')

  const filtered = useMemo(() => {
    if (active === 'All') return ALL_PROJECTS
    return ALL_PROJECTS.filter(p => p.tags.includes(active))
  }, [active])

  return (
    <div className="container">
      <div className="section-header">
        <h2>Projects</h2>
        <div className="filters" role="tablist" aria-label="Project filters">
          {FILTERS.map(f => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`filter ${active === f ? 'active' : ''}`}
              onClick={() => setActive(f)}
            >{f}</button>
          ))}
        </div>
      </div>

      <div className="grid projects-grid">
        {filtered.map(p => (
          <article key={p.id} className="card project-card">
            <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
            <div className="card-body">
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <div className="tags" aria-label="Frameworks used">
                {p.technologies.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="card-actions">
                <a href={p.demoUrl} className="btn btn-primary small" target="_blank" rel="noreferrer">Preview Demo</a>
                <a href={p.repoUrl} className="btn btn-ghost small" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
