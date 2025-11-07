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

      <div className="contact-socials" aria-label="Social links">
        <a href="#" aria-label="GitHub" className="icon-link xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.48-1.34-5.48-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.7.24 2.96.12 3.27.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0012 .5z"/></svg>
        </a>
        <a href="#" aria-label="LinkedIn" className="icon-link xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55V14.9c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.92v5.65H9.39V9.75h3.41v1.46h.05c.48-.9 1.65-1.84 3.4-1.84 3.64 0 4.31 2.4 4.31 5.52v5.56zM5.34 8.29a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.58V9.75h3.53v10.7z"/></svg>
        </a>
        <a href="#" aria-label="Telegram" className="icon-link xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.04 15.08l-.38 5.33c.54 0 .78-.23 1.06-.5l2.55-2.45 5.29 3.88c.97.54 1.66.26 1.92-.9l3.48-16.3h.01c.31-1.44-.52-2-1.47-1.64L1.78 9.7c-1.4.54-1.38 1.31-.24 1.66l5.25 1.64L19.4 6.49c.61-.37 1.16-.17.71.2"/></svg>
        </a>
        <a href="#" aria-label="Discord" className="icon-link xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.369A19.791 19.791 0 0016.671 3c-.197.363-.42.85-.577 1.23a18.27 18.27 0 00-8.188 0A12.5 12.5 0 007.33 3 19.736 19.736 0 003.69 4.37C1.74 7.388 1.06 10.29 1.22 13.16c2.02 1.5 3.98 2.42 5.89 3.02.473-.66.897-1.37 1.26-2.12-.698-.26-1.37-.58-2.01-.96.17-.13.337-.265.5-.402 3.86 1.8 8.04 1.8 11.86 0 .166.14.333.275.502.404-.64.38-1.31.7-2.01.96.36.75.79 1.46 1.26 2.12 1.91-.6 3.87-1.52 5.89-3.02.23-4.02-.69-6.89-2.1-8.79zM9.59 12.75c-.77 0-1.4-.72-1.4-1.61 0-.89.62-1.62 1.4-1.62.78 0 1.41.73 1.41 1.62 0 .89-.63 1.61-1.41 1.61zm4.83 0c-.77 0-1.4-.72-1.4-1.61 0-.89.63-1.62 1.4-1.62.78 0 1.41.73 1.41 1.62 0 .89-.63 1.61-1.41 1.61z"/></svg>
        </a>
        <a href={waLink} aria-label="WhatsApp" className="icon-link xl" target="_blank" rel="noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6L0 24l6.19-1.62A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22a9.94 9.94 0 01-5.08-1.39l-.36-.21-3.67.96.98-3.58-.23-.37A9.96 9.96 0 1122 12 9.98 9.98 0 0112 22zm5.47-7.6c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.8-1.48-1.8-1.65-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53-.18-.01-.39-.01-.6-.01-.2 0-.52.07-.78.37-.26.3-1 1-1 2.42 0 1.41 1.02 2.77 1.16 2.96.15.2 2 3.05 4.85 4.28.68.29 1.2.47 1.61.6.68.22 1.3.19 1.79.12.55-.08 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.08-.12-.27-.2-.57-.35z"/></svg>
        </a>
      </div>
    </div>
  )
}
