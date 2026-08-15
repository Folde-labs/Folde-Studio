import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'
import RevealObserver from '@/components/RevealObserver'
import Loader from '@/components/Loader'

const interDisplay = Inter({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-head',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Folde Studio — Full Service Design Studio',
  description:
    'Folde Studio lives at the intersection of clarity and consumer-delight — turning cultural values into lasting company value through design.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interDisplay.variable} ${inter.variable}`}>
      <body>
        <Loader />
        <Cursor />
        {children}
        <RevealObserver />
      </body>
    </html>
  )
}
