'use client'

import { FormEvent, useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'loading') return

    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      })
      const result = (await response.json()) as { message?: string }

      if (!response.ok) throw new Error(result.message || 'Unable to send your enquiry.')
      form.reset()
      setStatus('success')
      setMessage('Thanks — your enquiry has been sent. We’ll be in touch soon.')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Unable to send your enquiry.')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <div className="contact-field">
          <label className="contact-label" htmlFor="first-name">First Name</label>
          <input className="contact-input" id="first-name" name="firstName" type="text" autoComplete="given-name" maxLength={80} placeholder="Adama" required />
        </div>
        <div className="contact-field">
          <label className="contact-label" htmlFor="last-name">Last Name</label>
          <input className="contact-input" id="last-name" name="lastName" type="text" autoComplete="family-name" maxLength={80} placeholder="Eze" required />
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-field">
          <label className="contact-label" htmlFor="email">Email Address</label>
          <input className="contact-input" id="email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="mail@yourmail.com" required />
        </div>
        <div className="contact-field">
          <label className="contact-label" htmlFor="phone">Phone Number <span className="contact-optional">(optional)</span></label>
          <input className="contact-input" id="phone" name="phone" type="tel" autoComplete="tel" maxLength={50} placeholder="+44" />
        </div>
      </div>

      <div className="contact-field">
        <label className="contact-label" htmlFor="project">Project Details</label>
        <textarea className="contact-textarea" id="project" name="project" minLength={20} maxLength={4000} placeholder="Tell us about your project..." rows={6} required />
      </div>

      <div className="form-trap" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="contact-submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
      </button>
      {message && (
        <p className={`contact-status contact-status--${status}`} role="status" aria-live="polite">
          {message}
        </p>
      )}
    </form>
  )
}
