import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing use of the Folde Studio website.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <p className="contact-kicker">Last updated 31 August 2026</p>
        <h1 className="legal-title">Terms of Use</h1>
        <p className="legal-lead">By using folde.work, you agree to these website terms.</p>

        <section>
          <h2>Website content</h2>
          <p>The site and its contents are provided for general information and to introduce Folde Studio’s work. We may update, replace, or remove content without notice.</p>
        </section>
        <section>
          <h2>Intellectual property</h2>
          <p>Unless stated otherwise, Folde Studio owns or is licensed to use the design, text, graphics, video, and other content on this site. Client names and marks remain the property of their respective owners. You may view and share links to the site, but you may not reproduce or commercially exploit its content without written permission.</p>
        </section>
        <section>
          <h2>Acceptable use</h2>
          <p>You must not misuse the site, attempt unauthorised access, interfere with its operation, submit malicious material, or use its forms for spam or unlawful activity.</p>
        </section>
        <section>
          <h2>Enquiries are not contracts</h2>
          <p>Submitting an enquiry does not create a client relationship or bind either party. Project work begins only after scope, fees, timing, and terms are agreed in writing.</p>
        </section>
        <section>
          <h2>Liability and links</h2>
          <p>We aim to keep the site accurate and available, but provide it without guarantees of uninterrupted access or completeness. To the extent permitted by law, Folde Studio is not liable for losses arising solely from use of this informational site. External websites are governed by their own terms and policies.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to <a href="mailto:legal@folde.work">legal@folde.work</a>.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
