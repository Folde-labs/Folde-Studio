import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'

const baseUrl = 'https://folde.work'

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date('2026-08-31')
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: updated, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/work`, lastModified: updated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: updated, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/press`, lastModified: updated, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: updated, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: updated, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const caseStudies: MetadataRoute.Sitemap = Object.keys(projects).map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: updated,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...caseStudies]
}
