import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Folde Studio',
    short_name: 'Folde',
    description: 'Independent brand, product, and digital design studio.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f1ec',
    theme_color: '#111111',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
