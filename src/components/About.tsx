import React, { useEffect, useRef, useState } from 'react'

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true)
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`container about enhanced ${show ? 'show' : ''}`}>
      <div className="about-media">
        <img
          className="avatar large"
          alt="Profile photo"
          src={`${import.meta.env.BASE_URL}profile2.jpeg`}
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://i.pravatar.cc/240?img=67' }}
        />
      </div>
      <div className="about-body">
        <h2>About Me</h2>
        <p>
          Front-end engineer focused on React, TypeScript, and data visualization. I turn complex datasets into clear, interactive stories while keeping performance, accessibility, and maintainability front-and-center.
        </p>
        <div className="about-badges">
          <span className="badge">Based in Kediri, East Java</span>
          <span className="badge">React • TypeScript • D3</span>
          <span className="badge">Open-source contributor</span>
        </div>
        <div className="about-actions">
          <a className="btn btn-primary" href="#projects">See Projects</a>
          <a className="btn btn-ghost" href="/resume.txt" download>Download Resume</a>
        </div>
      </div>
    </div>
  )
}
