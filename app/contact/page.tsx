import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Folde Studio',
  description: 'Start a project with Folde Studio. Get in touch for brand identity, web design, product design, and more.',
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

          {/* RIGHT — form */}
          <form
            className="contact-form"
            action="mailto:foldestudio@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <div className="contact-form-row">
              <div className="contact-field">
                <label className="contact-label" htmlFor="first-name">First Name</label>
                <input className="contact-input" id="first-name" name="First Name" type="text" placeholder="Adama" />
              </div>
              <div className="contact-field">
                <label className="contact-label" htmlFor="last-name">Last Name</label>
                <input className="contact-input" id="last-name" name="Last Name" type="text" placeholder="Eze" />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label className="contact-label" htmlFor="email">Email Address</label>
                <input className="contact-input" id="email" name="Email" type="email" placeholder="mail@yourmail.com" />
              </div>
              <div className="contact-field">
                <label className="contact-label" htmlFor="phone">Phone Number</label>
                <input className="contact-input" id="phone" name="Phone" type="tel" placeholder="+44" />
              </div>
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="project">Project Details</label>
              <textarea className="contact-textarea" id="project" name="Project Details" placeholder="Tell us about your project..." rows={6} />
            </div>

            <button type="submit" className="contact-submit">Send Enquiry</button>
          </form>

        </div>
      </main>
      <Footer />
    </>
  )
}
