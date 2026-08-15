import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import { WorkGrid } from '@/components/Work'
import Cta from '@/components/Cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work — Folde Studio',
  description: 'Selected work from Folde Studio — brand identity, campaign production, product design, and eCommerce growth.',
}

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="work-page-head">
          <span className="work-page-kicker">Our Work</span>
          <h1 className="work-page-title">Every project,<br />built to last.</h1>
          <p className="work-page-sub">
            Four clients. Four briefs. One standard. Click any project to read the full case study.
          </p>
        </section>
        <WorkGrid />
        <Cta />
      </main>
      <Footer />
      <RevealObserver />
    </>
  )
}
