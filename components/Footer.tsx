const companyLinks: { label: string; href: string }[] = [
  { label: 'Our Work',  href: '/work' },
  { label: 'About Us',  href: '#why' },
  { label: 'Process',   href: '#process' },
  { label: 'Careers',   href: 'mailto:careers@folde.work' },
  { label: 'Media Assets', href: '/press' },
]

const serviceLinks: { label: string }[] = [
  { label: 'Brand Identity' },
  { label: 'Web Design' },
  { label: 'UI/UX Design' },
  { label: 'Motion Design' },
  { label: 'Digital Strategy' },
  { label: 'eCommerce' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="footer-logo">Folde Studio</a>
          <p className="footer-tagline">
            A full-service design studio crafting brands, digital products, and experiences that
            move culture forward.
          </p>
          <div className="footer-locations">
            <span className="footer-location-item">Abuja, Nigeria</span>
            <span className="footer-location-item">Newfoundland, Canada</span>
            <span className="footer-location-item">Newcastle, UK</span>
          </div>
          <div className="footer-social">
            <a href="https://x.com/foldestudio" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter/X">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://instagram.com/foldestudio" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://dribbble.com/foldestudio" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Dribbble">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/foldestudio" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            {companyLinks.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            {serviceLinks.map((l) => (
              <li key={l.label}><a href="#services">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Get in touch</div>
          <p className="footer-contact-desc">
            Have a project in mind? Tell us what you&apos;re building and we&apos;ll come back to
            you with next steps.
          </p>
          <a className="footer-contact-email" href="mailto:hello@folde.work">
            hello@folde.work
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <dl className="footer-contact-meta">
            <div>
              <dt>Response time</dt>
              <dd>Within 48 hours</dd>
            </div>
            <div>
              <dt>New business</dt>
              <dd>Open for Q4 2026</dd>
            </div>
          </dl>
          <a className="footer-contact-cta" href="/contact">
            Start a project
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© 2026 Folde Studio. All rights reserved.</div>
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>

      <div className="footer-wordmark" aria-hidden="true">
        <span className="footer-wordmark-text">FOLDE STUDIO<sup>&trade;</sup></span>
      </div>
    </footer>
  )
}
