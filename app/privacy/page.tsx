import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Folde Studio collects, uses, and protects personal information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="legal-page">
        <p className="contact-kicker">Last updated 31 August 2026</p>
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-lead">This policy explains how Folde Studio handles information submitted through folde.work.</p>

        <section>
          <h2>Information we collect</h2>
          <p>When you send a project enquiry, we collect the name, email address, optional phone number, and project details you provide. When you join our mailing list, we collect your email address. We may also receive limited technical logs used to keep the website reliable and secure.</p>
        </section>
        <section>
          <h2>How we use it</h2>
          <p>We use enquiry details to respond to you, assess potential work, and keep necessary business records. We use newsletter details to send the updates you requested. We do not sell personal information.</p>
        </section>
        <section>
          <h2>Service providers and retention</h2>
          <p>Our website is hosted by Vercel and email is processed by Resend. These providers process information on our behalf to deliver the service. We retain information only for as long as needed for the purpose it was collected, legal obligations, and legitimate business records.</p>
        </section>
        <section>
          <h2>Your choices</h2>
          <p>You may ask to access, correct, or delete your personal information, or unsubscribe from studio emails, by contacting <a href="mailto:legal@folde.work">legal@folde.work</a>. Every marketing email will also provide an unsubscribe option before newsletter broadcasts begin.</p>
        </section>
        <section>
          <h2>Cookies</h2>
          <p>The current site does not use advertising cookies. If analytics or other non-essential cookies are introduced, this policy and the site’s consent controls will be updated first.</p>
        </section>
        <p><Link href="/contact">Contact Folde Studio</Link> if you have a privacy question.</p>
      </main>
      <Footer />
    </>
  )
}
