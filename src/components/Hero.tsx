import React, { useEffect, useRef, useState } from 'react'

function useParticles() {
  const ref = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let animationId = 0
    let particles: {x:number,y:number,vx:number,vy:number}[] = []
    const density = 150

    const resize = () => {
      canvas.width = canvas.clientWidth * devicePixelRatio
      canvas.height = canvas.clientHeight * devicePixelRatio
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
      const count = Math.floor((canvas.clientWidth * canvas.clientHeight) / (density * 40))
      particles = Array.from({length: count}, () => ({
        x: Math.random()*canvas.clientWidth,
        y: Math.random()*canvas.clientHeight,
        vx: (Math.random()-0.5)*0.4,
        vy: (Math.random()-0.5)*0.4,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
      const themeDark = document.documentElement.classList.contains('dark')
      ctx.fillStyle = themeDark ? 'rgba(0,229,255,0.75)' : 'rgba(19,26,42,0.5)'
      ctx.strokeStyle = themeDark ? 'rgba(0,229,255,0.14)' : 'rgba(19,26,42,0.14)'
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.clientWidth) p.vx *= -1
        if (p.y < 0 || p.y > canvas.clientHeight) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.3, 0, Math.PI*2); ctx.fill()
      })
      for (let i=0;i<particles.length;i++) {
        for (let j=i+1;j<particles.length;j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x-b.x, dy = a.y-b.y
          const d2 = dx*dx+dy*dy
          if (d2 < 110*110) { ctx.globalAlpha = 1 - d2/(110*110); ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); ctx.globalAlpha = 1 }
        }
      }
      animationId = requestAnimationFrame(draw)
    }

    const onResize = () => { resize() }
    resize(); draw()
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', onResize) }
  }, [])
  return ref
}

export default function Hero() {
  const messages = [
    "Hello, I'm Priyo Tri —\n an Indonesian Front‑End Developer",
  ]
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const cardMessage = "I create beautiful, interactive data visualizations for modern web apps.\nLet me craft performant, accessible interfaces and storytelling visuals that move your metrics."
  const [cardTyping, setCardTyping] = useState(false)
  const [cardText, setCardText] = useState('')

  useEffect(() => {
    const full = messages[index]
    const speed = deleting ? 40 : 55
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1)
        setText(next)
        if (next === full) {
          setShowCard(true)
          if (!cardTyping) setCardTyping(true)
          setTimeout(() => setDeleting(true), 6000)
        }
      } else {
        const next = full.slice(0, text.length - 1)
        setText(next)
        if (next.length === 0) {
          setDeleting(false)
          setIndex((i) => (i + 1) % messages.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, index, showCard, cardTyping, cardText])

  useEffect(() => {
    if (!cardTyping) return
    if (cardText === cardMessage) return
    const t = setTimeout(() => {
      setCardText(cardMessage.slice(0, cardText.length + 1))
    }, 24)
    return () => clearTimeout(t)
  }, [cardTyping, cardText])

  const canvasRef = useParticles()
  return (
    <div className="hero hero-simple">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-identity">
          <img
            className="hero-avatar hero-avatar-lg"
            src={`${import.meta.env.BASE_URL}profile.jpeg`}
            alt="Foto Priyo Tri Winarko"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement
              if ((img as any)._triedJpg !== true) {
                (img as any)._triedJpg = true
                img.src = `${import.meta.env.BASE_URL}profile.jpg`
              } else {
                img.src = 'https://i.pravatar.cc/300?img=67'
              }
            }}
          />
        </div>
        <h1 className="typewriter heading-highlight" aria-live="polite" aria-atomic="true">{text}</h1>
        <div className={`interactive-card ${showCard ? 'show' : ''}`} role="note" aria-label="About my work">
          <div className="card-typewriter" aria-live="polite" aria-atomic="true">
            {cardText.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
