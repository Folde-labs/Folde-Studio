'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks: { label: string; href: string; badge?: string; external?: boolean }[] = [
  { label: 'Projects', href: '/work', badge: '04' },
  { label: 'Services', href: '/#services' },
  { label: 'Folde Labs', href: 'https://labs.folde.work', external: true },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

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

        <ul className={`nav-center${scrolled ? ' nav-center--docked' : ''}`}>
          {navLinks.map((l) => (
            <li key={l.label}>
              {l.external ? (
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.badge && <span className="nav-badge">{l.badge}</span>}
                  {l.label}
                </a>
              ) : (
                <Link href={l.href}>
                  {l.badge && <span className="nav-badge">{l.badge}</span>}
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button className="nav-menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M0 1h14M0 5h14M0 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Menu
        </button>
      </nav>

      {/* Docked link bar — slides in from the bottom once scrolled */}
      <div
        className={`nav-dock${scrolled ? ' nav-dock--visible' : ''}`}
        aria-hidden={!scrolled}
      >
        <nav className="nav-dock-pill" aria-label="Primary">
          <Link href="/" className="nav-dock-home" aria-label="Home" tabIndex={scrolled ? 0 : -1}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 10.5 12 4l8 6.5V20a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 4 20v-9.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <ul className="nav-dock-links">
            {navLinks.map((l) => (
              <li key={l.label}>
                {l.external ? (
                  <a
                    href={l.href}
                    className="nav-dock-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={scrolled ? 0 : -1}
                  >
                    {l.badge && <span className="nav-badge">{l.badge}</span>}
                    {l.label}
                  </a>
                ) : (
                  <Link
                    href={l.href}
                    className={pathname === l.href ? 'nav-dock-link nav-dock-link--active' : 'nav-dock-link'}
                    tabIndex={scrolled ? 0 : -1}
                  >
                    {l.badge && <span className="nav-badge">{l.badge}</span>}
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

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
          <li><a href="https://labs.folde.work" target="_blank" rel="noopener noreferrer" onClick={close}>Folde Labs</a></li>
          <li><Link href="/contact" onClick={close}>Contact</Link></li>
        </ul>

        <div className="nav-overlay-footer">
          <a href="mailto:hello@folde.work">hello@folde.work</a>
          <a href="https://instagram.com/foldestudio" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com/company/foldestudio" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* Backdrop */}
      <div className={`nav-backdrop${menuOpen ? ' open' : ''}`} onClick={close} />
    </>
  )
}
