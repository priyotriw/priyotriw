import React from 'react'
import type { Theme } from '../theme'

export default function ThemeToggle({ theme, onToggle }: { theme: Theme, onToggle: () => void }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle dark or light theme">
      {theme === 'dark' ? (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v2h3v-2h-3zM17.24 4.84l1.8-1.79 1.79 1.79-1.79 1.79-1.8-1.79zM11 1h2v3h-2V1zM4.84 17.24l-1.79 1.8 1.79 1.79 1.79-1.79-1.79-1.8zM18.36 17.24l1.79 1.8-1.79 1.79-1.79-1.79 1.79-1.8z"/></svg>
      )}
    </button>
  )
}
