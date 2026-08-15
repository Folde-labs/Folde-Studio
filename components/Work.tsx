'use client'

import { useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Project = {
  id: string
  num: string
  client: string
  type: string
  stat: string
  statLabel: string
  desc: string
  tags: string[]
  bg: string
  logoSvg: React.ReactNode
  cardSvg: React.ReactNode
}

const projects: Project[] = [
  {
    id: 'ovrae',
    num: '01',
    client: 'OVRAE',
    type: 'Brand Identity & Packaging',
    stat: '100%',
    statLabel: 'ORGANIC MATERIALS',
    desc: `Built a quiet luxury brand and carry system for an organic feminine care label — positioning Ovrae as the first in the African market to combine full-stack organic transparency with dignified, skincare-grade design.`,
    tags: ['Brand Identity', 'Packaging Design', 'Wellness'],
    bg: 'wk1',
    logoSvg: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="11" stroke="currentColor" strokeWidth="2" />
        <circle cx="13" cy="13" r="5" fill="currentColor" />
      </svg>
    ),
    cardSvg: (
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
        <circle cx="48" cy="48" r="44" stroke="rgba(255,255,255,0.85)" strokeWidth="3" />
        <circle cx="48" cy="48" r="28" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
        <circle cx="48" cy="48" r="12" fill="rgba(255,255,255,0.9)" />
        <circle cx="48" cy="48" r="6" fill="rgba(255,255,255,0.5)" />
      </svg>
    ),
  },
  {
    id: 'tirra',
    num: '02',
    client: 'TIRRA',
    type: 'Fintech Rebrand & Product Design',
    stat: '600+',
    statLabel: 'PERSON WAITLIST',
    desc: `Rebuilt a crypto banking product from viral infamy to earned trust — new name, new identity, new design system across iOS, Android, and web. Flow cut from 9 steps to 3. Zero funding raised.`,
    tags: ['Fintech', 'Product Design', 'Rebrand'],
    bg: 'wk2',
    logoSvg: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <polygon points="13,2 24,22 2,22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
      </svg>
    ),
    cardSvg: (
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
        <polygon points="48,6 90,78 6,78" stroke="rgba(255,255,255,0.85)" strokeWidth="3" fill="none" strokeLinejoin="round" />
        <polygon points="48,24 76,72 20,72" fill="rgba(255,255,255,0.18)" strokeLinejoin="round" />
        <circle cx="48" cy="52" r="8" fill="rgba(255,255,255,0.85)" />
      </svg>
    ),
  },
  {
    id: 'canann',
    num: '03',
    client: 'CANANN',
    type: 'Nonprofit Digital Identity & Web Design',
    stat: '48+',
    statLabel: 'ACTIVE VOLUNTEERS',
    desc: 'Built a proof-first digital platform for a grassroots Nigerian foundation — turning real impact numbers into a credible, movement-grade identity that positions Canann closer to a social enterprise than a traditional NGO.',
    tags: ['Nonprofit', 'Web Design', 'Social Impact'],
    bg: 'wk3',
    logoSvg: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="6" width="18" height="3" rx="1.5" fill="currentColor" />
        <rect x="4" y="12" width="12" height="3" rx="1.5" fill="currentColor" />
        <rect x="4" y="18" width="15" height="3" rx="1.5" fill="currentColor" />
      </svg>
    ),
    cardSvg: (
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
        <rect x="8" y="14" width="80" height="18" rx="9" fill="rgba(255,255,255,0.9)" />
        <rect x="8" y="40" width="54" height="18" rx="9" fill="rgba(255,255,255,0.7)" />
        <rect x="8" y="66" width="66" height="18" rx="9" fill="rgba(255,255,255,0.5)" />
      </svg>
    ),
  },
  {
    id: 'gtwa',
    num: '04',
    client: 'GTWA',
    type: 'Website Design',
    stat: '0 → 1',
    statLabel: 'DIGITAL PRESENCE',
    desc: 'Built the first digital home for a community initiative running seminars, youth clubs, and mentorship sessions entirely offline — making it discoverable, explainable, and shareable.',
    tags: ['Website Design', 'Community', 'Social Impact'],
    bg: 'wk4',
    logoSvg: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="6" cy="13" r="3.5" fill="currentColor" />
        <circle cx="20" cy="6" r="3.5" fill="currentColor" />
        <circle cx="20" cy="20" r="3.5" fill="currentColor" />
        <path d="M9.5 13L16.5 8M9.5 13L16.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    cardSvg: (
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
        <circle cx="20" cy="48" r="12" fill="rgba(255,255,255,0.9)" />
        <circle cx="76" cy="22" r="12" fill="rgba(255,255,255,0.9)" />
        <circle cx="76" cy="74" r="12" fill="rgba(255,255,255,0.9)" />
        <path d="M32 48L64 28M32 48L64 68" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

function parseStat(stat: string) {
  const match = stat.match(/^([^0-9]*)(\d+)([^0-9]*)$/)
  if (!match) return { prefix: '', num: 0, suffix: '' }
  return { prefix: match[1], num: parseInt(match[2]), suffix: match[3] }
}

function WorkItem({ p }: { p: Project }) {
  const router = useRouter()
  const { prefix, num, suffix } = parseStat(p.stat)
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [count, setCount] = useState(num)
  const ref = useRef<HTMLDivElement>(null)
  const animRef = useRef<number | null>(null)

  const handleMouseEnter = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    const startTime = performance.now()
    const duration = 900
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * num))
      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate)
      }
    }
    animRef.current = requestAnimationFrame(animate)
  }

  const handleMouseLeave = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    setCount(num)
    setCursor({ x: -100, y: -100 })
  }

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <div
      ref={ref}
      className="work-item"
      onClick={() => router.push(`/work/${p.id}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className={`work-card-bg ${p.bg}`}>
        <img
          src={`/work${p.bg.replace('wk', '')}.${p.bg === 'wk1' || p.bg === 'wk4' ? 'png' : 'avif'}`}
          alt={p.client}
          className="work-card-img"
        />
      </div>

      <div className="work-info-overlay">
        <div className="work-item-logo">
          <span className="work-item-logo-icon">{p.logoSvg}</span>
          <span className="work-item-logo-name">{p.client}</span>
        </div>
        <div className="work-item-bottom">
          <div className="work-item-stat">
            <span className="work-item-stat-num">{prefix}{count}{suffix}</span>
            <span className="work-item-stat-label">{p.statLabel}</span>
          </div>
          <p className="work-item-desc">{p.desc}</p>
          <div className="work-item-tags">
            {p.tags.map((tag) => (
              <span key={tag} className="work-item-tag">{tag}</span>
            ))}
          </div>
          <Link
            href={`/work/${p.id}`}
            className="work-item-cta"
            onClick={(e) => e.stopPropagation()}
          >
            View Case Study
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      <div
        className="work-cursor"
        style={{ left: cursor.x, top: cursor.y }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="44" height="44">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  )
}

export function WorkGrid() {
  return (
    <div className="work-grid">
      {projects.map((p) => (
        <WorkItem key={p.client} p={p} />
      ))}
    </div>
  )
}

export default function Work() {
  return (
    <section id="work">
      <div className="work-header">
        <div>
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">The work<br />comes first.</h2>
        </div>
        <a href="/work" className="work-all-link">
          View All Projects
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <WorkGrid />
    </section>
  )
}
