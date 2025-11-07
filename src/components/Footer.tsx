import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <a href="/resume.txt" download className="btn btn-ghost small">Download Resume</a>
          <p className="muted">© {new Date().getFullYear()} Priyo Tri. All rights reserved.</p>
        </div>
        <div className="socials">
          <a href="#" aria-label="GitHub" className="icon-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.48-1.34-5.48-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.57.12-3.27 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.7.24 2.96.12 3.27.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0012 .5z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="icon-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55V14.9c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.43-2.12 2.92v5.65H9.39V9.75h3.41v1.46h.05c.48-.9 1.65-1.84 3.4-1.84 3.64 0 4.31 2.4 4.31 5.52v5.56zM5.34 8.29a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.58V9.75h3.53v10.7z"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="icon-link">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 5.92a8.14 8.14 0 01-2.35.64 4.1 4.1 0 001.8-2.27 8.2 8.2 0 01-2.6 1A4.08 4.08 0 0015.3 4c-2.27 0-4.1 1.83-4.1 4.1 0 .32.04.64.11.94A11.6 11.6 0 013 5.15a4.1 4.1 0 001.27 5.47 4.05 4.05 0 01-1.86-.51v.05c0 2.02 1.44 3.7 3.35 4.08a4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.84 2.85A8.22 8.22 0 012 19.56a11.6 11.6 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.34 8.34 0 0022 5.92z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
