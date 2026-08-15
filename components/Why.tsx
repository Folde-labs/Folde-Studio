export default function Why() {
  return (
    <section id="why">
      <div className="why-header reveal">
        <div className="why-header-left">
          <div className="why-eyebrow">
            <span className="why-star">✦</span>
            <span>Why Choose Us</span>
          </div>
          <h2 className="why-headline">
            Proven results,<br />
            <strong>TRUSTED BY CLIENTS</strong>
          </h2>
        </div>
        <p className="why-subtitle reveal reveal-delay-1">
          By combining strategic creativity with focused execution, we deliver measurable
          results that drive brand growth, success, and lasting trust.
        </p>
      </div>

      <div className="why-cards">
        <div className="why-card-video reveal">
          <img src="/folde loader img.gif" alt="" className="why-video-bg" />
          <button className="why-play-btn" aria-label="Play reel">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        <div className="why-card-quote reveal reveal-delay-1">
          <div className="why-stars">★★★★★</div>
          <p className="why-quote">
            &ldquo;Collaborating with Folde Studio was a seamless experience. Their creative
            vision, meticulous attention to detail, and expertise elevated our brand
            identity&rdquo;.
          </p>
          <div className="why-person">
            <div className="why-avatar" />
            <div>
              <div className="why-person-name">Michael Evans</div>
              <div className="why-person-role">Marketing Director at Brix</div>
            </div>
          </div>
        </div>
        
        <div className="why-card-quote reveal reveal-delay-1 addColor">
          <div className="why-stars">★★★★★</div>
          <p className="why-quote">
            &ldquo;Collaborating with Folde Studio was a seamless experience. Their creative
            vision, meticulous attention to detail, and expertise elevated our brand
            identity&rdquo;.
          </p>
          <div className="why-person">
            <div className="why-avatar" />
            <div>
              <div className="why-person-name">Michael Evans</div>
              <div className="why-person-role">Marketing Director at Brix</div>
            </div>
          </div>
        </div>
        {/* <div className="why-card-stat reveal reveal-delay-2">
          <div className="why-orbit why-orbit-l" />
          <div className="why-orbit why-orbit-r" />
          <div className="why-av-sm why-av-1" />
          <div className="why-av-sm why-av-2" />
          <div className="why-av-sm why-av-3" />
          <div className="why-av-sm why-av-4" />
          <div className="why-brand-mark">FOLDE STUDIO™</div>
        </div> */}
      </div>
    </section>
  )
}
