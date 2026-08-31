import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="legal-page">
      <p className="contact-kicker">404</p>
      <h1 className="legal-title">This page has folded.</h1>
      <p className="legal-lead">The page you were looking for does not exist or has moved.</p>
      <Link className="contact-submit legal-link" href="/">Return home</Link>
    </main>
  )
}
