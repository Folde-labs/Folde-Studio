import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero">
      <h1 className="hero-headline">Folde Studio.</h1>

      <div className="hero-bottom">
        <div className="hero-bottom-left">
          <div className="hero-who-label">
            <span className="hero-who-dot">○</span>
            <span className="hero-who-text">Who we are</span>
            <div className="hero-who-line" />
          </div>
          <p className="hero-desc">
            We are a creative product and digital studio building thoughtful brands and digital experiences for ambitious companies. </p>
          <div className="hero-ctas">
            <a href="#work" className="hero-btn-primary">See Our Work</a>
            <a href="/contact" className="hero-btn-secondary">Start a Project</a>
          </div>
        </div>

        <div className="hero-bottom-right">
          <Image
            src="/hero image.gif"
            alt="Folde Studio"
            width={200}
            height={220}
            unoptimized
            className="hero-image"
          />
        </div>
      </div>

      <div className="hero-scroll-vertical">
        <span className="hero-scroll-text">Scroll to explore</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
