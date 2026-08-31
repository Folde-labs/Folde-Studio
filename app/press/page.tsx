import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PressKit from '@/components/PressKit'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press Kit',
  description:
    'Media assets for Folde Studio — logos, brand colours, typography, approved imagery, studio boilerplate, and press contact.',
  alternates: { canonical: '/press' },
}

export default function PressPage() {
  return (
    <>
      <Nav />
      <PressKit />
      <Footer />
    </>
  )
}
