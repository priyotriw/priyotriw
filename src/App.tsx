import React, { useEffect, useMemo, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import { Theme, applyTheme, getInitialTheme } from './theme'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    try { return getInitialTheme() } catch { return 'dark' }
  })
  useEffect(() => { try { applyTheme(theme) } catch {} }, [theme])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
        }
      })
    }, { threshold: 0.15 })
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  const nav = useMemo(() => ([
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ]), [])

  return (
    <div>
      <header className="site-header">
        <a href="#home" className="logo" aria-label="Go to home">PT</a>
        <nav className="nav">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="nav-link">{n.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
          <a href="#projects" className="btn btn-primary small">View My Work</a>
        </div>
      </header>

      <main>
        <section id="home" aria-label="Hero">
          <Hero />
        </section>
        <section id="about" aria-label="About Me" className="section reveal" data-reveal="up">
          <About />
        </section>
        <section id="skills" aria-label="Skills" className="section reveal" data-reveal="up">
          <Skills />
        </section>
        <section id="projects" aria-label="Projects" className="section reveal" data-reveal="up">
          <Projects />
        </section>
        <section id="certificates" aria-label="Certificates" className="section reveal" data-reveal="left">
          <Certificates />
        </section>
        <section id="contact" aria-label="Contact" className="section reveal" data-reveal="scale">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}
