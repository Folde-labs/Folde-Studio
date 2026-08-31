export default function Cta() {
  return (
    <section id="cta">
      <div className="cta-card reveal">
        <div className="cta-card-row1">
          <div className="cta-card-eyebrow">
            <span className="cta-card-star">✦</span>
            <span>Contact</span>
          </div>
          <p className="cta-card-desc">
            Big or small inquiries, we collaborate to solve even the most complex challenges
            together.
          </p>
        </div>
        <h2 className="cta-card-headline reveal reveal-delay-1">
          LET&apos;S START<br />CREATING TOGETHER.
        </h2>
        <div className="cta-card-contacts">
          <a href="/contact" className="cta-contact-item cta-contact-btn">
            Let&apos;s Talk
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="mailto:hello@folde.work" className="cta-contact-item">
            hello@folde.work
          </a>
        </div>
      </div>
    </section>
  )
}
