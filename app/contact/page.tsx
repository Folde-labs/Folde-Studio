import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Folde Studio. Get in touch for brand identity, web design, product design, and more.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="contact-page">
        <div className="contact-layout">

          {/* LEFT — headline */}
          <div className="contact-left">
            <span className="contact-kicker">GET A QUOTE</span>
            <h1 className="contact-headline">
              We&apos;re looking<br />
              forward to<br />
              hearing from you.
            </h1>
            <p className="contact-desc">
              We provide crystal-clear insights, innovative concepts,
              and a collaborative approach to bring your vision to life.
            </p>
          </div>

          <ContactForm />

        </div>
      </main>
      <Footer />
    </>
  )
}
