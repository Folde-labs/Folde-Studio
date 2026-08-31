import type { Metadata, Viewport } from 'next'
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
  metadataBase: new URL('https://folde.work'),
  title: {
    default: 'Folde Studio — Brand, Product & Digital Design',
    template: '%s | Folde Studio',
  },
  description:
    'Folde Studio is an independent design studio creating brand identities, digital products, websites, and experiences for ambitious organisations.',
  applicationName: 'Folde Studio',
  authors: [{ name: 'Folde Studio', url: 'https://folde.work' }],
  creator: 'Folde Studio',
  publisher: 'Folde Studio',
  keywords: [
    'design studio',
    'branding agency',
    'brand identity',
    'product design',
    'web design',
    'UI UX design',
    'Nigeria design studio',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Folde Studio',
    title: 'Folde Studio — Brand, Product & Digital Design',
    description:
      'Independent design studio creating brand identities, digital products, websites, and experiences for ambitious organisations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Folde Studio — Brand, Product & Digital Design',
    description:
      'Independent design studio creating brand identities, digital products, websites, and experiences.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'design',
  formatDetection: { email: false, address: false, telephone: false },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f1ec' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Folde Studio',
  url: 'https://folde.work',
  logo: 'https://folde.work/icon.svg',
  description:
    'Independent design studio creating brand identities, digital products, websites, and experiences.',
  email: 'hello@folde.work',
  areaServed: ['Nigeria', 'Canada', 'United Kingdom'],
  sameAs: [
    'https://x.com/foldestudio',
    'https://instagram.com/foldestudio',
    'https://dribbble.com/foldestudio',
    'https://linkedin.com/company/foldestudio',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interDisplay.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c') }}
        />
        <Loader />
        <Cursor />
        {children}
        <RevealObserver />
      </body>
    </html>
  )
}
