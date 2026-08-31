'use client'

import { useState } from 'react'

export default function Process() {
  const [open, setOpen] = useState(false)

  return (
    <section id="process">
      <div className="reel-top reveal">
        <span className="reel-label">Showreel — 2026</span>
        <h2 className="reel-headline">
          <span className="reel-line-light">Let&apos;s</span>
          <span className="reel-line-bold">GET REEL</span>
        </h2>
      </div>

      <div className="reel-stage">
        <video
          className="reel-stage-video"
          src="/folde-reel-preview.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="reel-stage-scrim" aria-hidden="true" />

        <button className="reel-play-center" onClick={() => setOpen(true)} aria-label="Play showreel">
          <div className="reel-play-circle">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="reel-play-inner-text">Play Reel</span>
          </div>
        </button>
      </div>

      {open && (
        <div className="reel-lightbox" onClick={() => setOpen(false)}>
          <button className="reel-lightbox-close" onClick={() => setOpen(false)} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Close
          </button>
          <video
            className="reel-lightbox-video"
            src="/folde-reel-web.mp4"
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
