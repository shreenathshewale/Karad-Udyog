import { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { articles } from '@/data/insights'
import { locations } from '@/data/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://karadudyog.com'

  const staticPages = [
    '',
    '/about',
    '/services',
    '/insights',
    '/faq',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const articlePages = articles.map((a) => ({
    url: `${baseUrl}/insights/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const locationPages = locations.map((l) => ({
    url: `${baseUrl}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...servicePages, ...articlePages, ...locationPages]
}
