'use client'

import { useState } from 'react'
import Image from 'next/image'

const BOILERPLATE_SHORT =
  'Folde Studio is a full-service design studio working at the intersection of clarity and consumer-delight — turning cultural values into lasting company value through brand identity, product design, and web design.'

const BOILERPLATE_LONG = `Folde Studio is a full-service design studio building brands, products, and digital experiences for founders and organisations across Africa and beyond.

The studio's work spans brand identity and packaging, fintech product design, and digital platforms for social-impact organisations — including a quiet-luxury organic feminine care label, a crypto banking product rebuilt from viral infamy to earned trust, and a proof-first platform for a grassroots Nigerian foundation.

Folde works in tight, senior-only teams: strategy, identity, and interface handled by the same people from first conversation to launch.`

const colors = [
  { name: 'Ink', hex: '#000000', note: 'Primary type & wordmark' },
  { name: 'Paper', hex: '#FFFFFF', note: 'Primary surface' },
  { name: 'Warm Paper', hex: '#F0EDE8', note: 'Secondary surface' },
  { name: 'Signal Orange', hex: '#E85D04', note: 'Accent — highlights' },
  { name: 'Ember', hex: '#DC2F02', note: 'Accent — gradient end' },
  { name: 'Grey', hex: '#7A7A7A', note: 'Secondary type' },
]

const logos = [
  { file: 'folde-wordmark-black', label: 'Wordmark — Black', use: 'Light backgrounds', dark: false, mono: false },
  { file: 'folde-wordmark-white', label: 'Wordmark — White', use: 'Dark backgrounds', dark: true, mono: false },
  { file: 'folde-monogram-black', label: 'Monogram — Black', use: 'Avatars, favicons', dark: false, mono: true },
  { file: 'folde-monogram-white', label: 'Monogram — White', use: 'Dark surfaces', dark: true, mono: true },
]

const facts = [
  { k: 'Founded', v: '2024' },
  { k: 'Based in', v: 'Lagos, Nigeria' },
  { k: 'Discipline', v: 'Brand, Product & Web Design' },
  { k: 'Projects shipped', v: '04 selected, 20+ total' },
  { k: 'Team', v: 'Senior-only, no hand-offs' },
  { k: 'Enquiries', v: 'hello@folde.work' },
]

const imagery = [
  { src: '/work1.png', label: 'Ovrae — Brand Identity & Packaging' },
  { src: '/work2.avif', label: 'Tirra — Fintech Rebrand' },
  { src: '/work3.avif', label: 'Canann — Nonprofit Platform' },
  { src: '/work4.png', label: 'GTWA — Website Design' },
]

function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      return
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button className="press-copy" onClick={copy} type="button">
      {copied ? (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path d="M3 8.5l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10.5 3.5H3.5a1 1 0 0 0-1 1v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )}
      {copied ? 'Copied' : label}
    </button>
  )
}

export default function PressKit() {
  return (
    <main className="press-page">
      {/* ── HERO ── */}
      <header className="press-hero">
        <span className="section-label">Media Assets</span>
        <h1 className="press-headline">
          <span className="press-line-light">Press kit &amp;</span>
          <span className="press-line-bold">BRAND ASSETS</span>
        </h1>
        <p className="press-desc">
          Everything you need to write about, feature, or partner with Folde Studio —
          logos, colours, typography, approved imagery, and studio boilerplate.
          All assets are free to use in editorial context without prior approval.
        </p>
        <div className="press-hero-actions">
          <a className="press-btn" href="/press/folde-media-assets.zip" download>
            Download full kit
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v9m0 0l-3.5-3.5M8 11l3.5-3.5M2.5 13.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a className="press-btn press-btn--ghost" href="mailto:hello@folde.work?subject=Press%20enquiry">
            Press enquiries
          </a>
        </div>
        <div className="press-meta-row">
          <span>Last updated — August 2026</span>
          <span>SVG · ZIP</span>
        </div>
      </header>

      {/* ── BOILERPLATE ── */}
      <section className="press-section">
        <div className="press-section-head">
          <span className="press-num">01</span>
          <h2 className="press-section-title">Boilerplate</h2>
          <p className="press-section-note">Copy verbatim. Please don&apos;t paraphrase the studio description.</p>
        </div>
        <div className="press-boiler-grid">
          <article className="press-boiler">
            <div className="press-boiler-top">
              <span className="press-tag">Short — 1 sentence</span>
              <CopyButton text={BOILERPLATE_SHORT} />
            </div>
            <p className="press-boiler-body">{BOILERPLATE_SHORT}</p>
          </article>
          <article className="press-boiler">
            <div className="press-boiler-top">
              <span className="press-tag">Long — 3 paragraphs</span>
              <CopyButton text={BOILERPLATE_LONG} />
            </div>
            {BOILERPLATE_LONG.split('\n\n').map((para, i) => (
              <p key={i} className="press-boiler-body">{para}</p>
            ))}
          </article>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <section className="press-section">
        <div className="press-section-head">
          <span className="press-num">02</span>
          <h2 className="press-section-title">Logos</h2>
          <p className="press-section-note">Vector SVG. Don&apos;t stretch, recolour, rotate, or add effects.</p>
        </div>
        <div className="press-logo-grid">
          {logos.map((l) => (
            <div key={l.file} className="press-logo-card">
              <div className={`press-logo-stage${l.dark ? ' press-logo-stage--dark' : ''}`}>
                <Image
                  src={`/press/${l.file}.svg`}
                  alt={l.label}
                  className={l.mono ? 'press-logo-mono' : 'press-logo-mark'}
                  width={640}
                  height={320}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="press-logo-foot">
                <div>
                  <div className="press-logo-label">{l.label}</div>
                  <div className="press-logo-use">{l.use}</div>
                </div>
                <a className="press-dl" href={`/press/${l.file}.svg`} download>
                  SVG
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v9m0 0l-3.5-3.5M8 11l3.5-3.5M2.5 13.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <ul className="press-rules">
          <li>Keep clear space of at least the cap-height of the &ldquo;F&rdquo; on all sides.</li>
          <li>Minimum wordmark width: 96px digital, 24mm print.</li>
          <li>Use the white lockup on backgrounds darker than #4A4A4A.</li>
        </ul>
      </section>

      {/* ── COLOUR ── */}
      <section className="press-section">
        <div className="press-section-head">
          <span className="press-num">03</span>
          <h2 className="press-section-title">Colour</h2>
          <p className="press-section-note">Click any swatch to copy its hex value.</p>
        </div>
        <div className="press-color-grid">
          {colors.map((c) => (
            <div key={c.hex} className="press-color">
              <div
                className="press-color-chip"
                style={{ background: c.hex, borderColor: c.hex === '#FFFFFF' ? 'rgba(0,0,0,0.12)' : 'transparent' }}
              />
              <div className="press-color-name">{c.name}</div>
              <div className="press-color-note">{c.note}</div>
              <CopyButton text={c.hex} label={c.hex} />
            </div>
          ))}
        </div>
      </section>

      {/* ── TYPE ── */}
      <section className="press-section">
        <div className="press-section-head">
          <span className="press-num">04</span>
          <h2 className="press-section-title">Typography</h2>
          <p className="press-section-note">One family, two roles. Free from Google Fonts.</p>
        </div>
        <div className="press-type-grid">
          <div className="press-type-card">
            <div className="press-type-spec">Inter Display · 800 · −3% tracking</div>
            <div className="press-type-sample press-type-sample--display">Aa Folde</div>
            <div className="press-type-role">Display — headlines, wordmark, statistics</div>
          </div>
          <div className="press-type-card">
            <div className="press-type-spec">Inter · 300–600</div>
            <div className="press-type-sample press-type-sample--body">Aa Folde</div>
            <div className="press-type-role">Body — running text, labels, interface</div>
          </div>
        </div>
        <a
          className="press-inline-link"
          href="https://fonts.google.com/specimen/Inter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Inter on Google Fonts
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* ── IMAGERY ── */}
      <section className="press-section">
        <div className="press-section-head">
          <span className="press-num">05</span>
          <h2 className="press-section-title">Approved imagery</h2>
          <p className="press-section-note">Credit as &ldquo;Courtesy of Folde Studio&rdquo;. Do not crop past the logo.</p>
        </div>
        <div className="press-img-grid">
          {imagery.map((img) => (
            <figure key={img.src} className="press-img">
              <div className="press-img-frame">
                <Image src={img.src} alt={img.label} width={1200} height={800} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <figcaption className="press-img-cap">
                <span>{img.label}</span>
                <a className="press-dl" href={img.src} download>
                  Download
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v9m0 0l-3.5-3.5M8 11l3.5-3.5M2.5 13.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── FACTS ── */}
      <section className="press-section">
        <div className="press-section-head">
          <span className="press-num">06</span>
          <h2 className="press-section-title">Studio facts</h2>
          <p className="press-section-note">Quick reference for fact-checking.</p>
        </div>
        <dl className="press-facts">
          {facts.map((f) => (
            <div key={f.k} className="press-fact">
              <dt className="press-fact-k">{f.k}</dt>
              <dd className="press-fact-v">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── CONTACT ── */}
      <section className="press-contact">
        <h2 className="press-contact-title">Need something<br />that isn&apos;t here?</h2>
        <p className="press-contact-desc">
          Founder interviews, high-resolution project imagery, or bespoke crops —
          we usually turn press requests around within 48 hours.
        </p>
        <a className="press-btn press-btn--light" href="mailto:hello@folde.work?subject=Press%20enquiry">
          hello@folde.work
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>
    </main>
  )
}
