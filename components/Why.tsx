import Image from 'next/image'

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
          <Image src="/folde loader img.gif" alt="" className="why-video-bg" width={1200} height={800} sizes="(max-width: 768px) 100vw, 50vw" unoptimized />
          <button className="why-play-btn" aria-label="Play reel">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        <div className="why-card-quote reveal reveal-delay-1">
          <div className="why-stars">★★★★★</div>
          <p className="why-quote">
            &ldquo;Before the rebrand, users couldn&apos;t explain what the product was for. After,
            they were funding wallets and moving money through it. That shift didn&apos;t come
            from new features — it came from clarity.&rdquo;
          </p>
          <div className="why-person">
            <Image src="/emmanuel-onyo.jpg" alt="Emmanuel Onyo" className="why-avatar" width={80} height={80} sizes="40px" />
            <div>
              <div className="why-person-name">Emmanuel Onyo</div>
              <div className="why-person-role">Founder, Tirra</div>
            </div>
          </div>
        </div>

        <div className="why-card-quote reveal reveal-delay-1 addColor">
          <div className="why-stars">★★★★★</div>
          <p className="why-quote">
            &ldquo;For the first time, when a donor lands on our site, they can see exactly
            where their money goes. That&apos;s what we needed — not just a website, but
            proof.&rdquo;
          </p>
          <div className="why-person">
            <Image src="/annastacia-abang.jpg" alt="Annastacia Abang" className="why-avatar" width={80} height={80} sizes="40px" />
            <div>
              <div className="why-person-name">Annastacia Abang</div>
              <div className="why-person-role">Founder, Canann Impact Foundation</div>
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
