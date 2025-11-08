import React from 'react'

export default function Contact() {
  const email = 'Priyotriwinarko6@gmail.com'
  const wa = '085708709954'
  const waLink = `https://wa.me/62${wa.replace(/^0/, '')}`

  return (
    <div className="container">
      <h2>Contact</h2>

      <div className="contact-cta-card" role="region" aria-label="Contact Priyo">
        <div className="contact-cta-text">
          <h3>Let’s work together</h3>
          <p className="muted">Reach me quickly via Email or WhatsApp. I’ll respond as soon as possible.</p>
        </div>
        <div className="contact-cta-actions">
          <a className="btn btn-primary" href={`mailto:${email}`} aria-label="Send Email">
            Email: {email}
          </a>
          <a className="btn btn-ghost" href={waLink} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
            WhatsApp: {wa}
          </a>
        </div>
      </div>
    </div>
  )
}
