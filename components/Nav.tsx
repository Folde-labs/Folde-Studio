'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo">
          Folde™
        </Link>

        <ul className="nav-center">
          <li>
            <Link href="/work"><span className="nav-badge">04</span>Projects</Link>
          </li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <button className="nav-menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M0 1h14M0 5h14M0 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Menu
        </button>
      </nav>

      {/* Drawer overlay */}
      <div className={`nav-overlay${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className="nav-overlay-header">
          <button className="nav-overlay-close" onClick={close} aria-label="Close menu">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Close
          </button>
        </div>

        <ul className="nav-overlay-links">
          <li><Link href="/" onClick={close}>Home</Link></li>
          <li><Link href="/work" onClick={close}>Projects</Link></li>
          <li><Link href="/#services" onClick={close}>Services</Link></li>
          <li><Link href="/contact" onClick={close}>Contact</Link></li>
        </ul>

        <div className="nav-overlay-footer">
          <a href="mailto:foldestudio@gmail.com">foldestudio@gmail.com</a>
          <a href="https://instagram.com/foldestudio" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com/company/foldestudio" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* Backdrop */}
      <div className={`nav-backdrop${menuOpen ? ' open' : ''}`} onClick={close} />
    </>
  )
}
