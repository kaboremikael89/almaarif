import type { MetadataRoute } from 'next'
import { site } from '@/content/site'
import { programs } from '@/content/programs'
import { locales } from '@/lib/i18n'

const staticPaths = [
  '',
  '/expertise',
  '/formations',
  '/approche',
  '/a-propos',
  '/contact',
  '/mentions-legales',
  '/confidentialite',
]

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-08-19')

  const entries: MetadataRoute.Sitemap = []

  for (const lang of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${site.url}/${lang}${path}/`,
        lastModified,
        changeFrequency: path === '' ? 'monthly' : 'yearly',
        priority: path === '' ? 1 : path === '/formations' ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}/`])),
        },
      })
    }

    for (const program of programs) {
      entries.push({
        url: `${site.url}/${lang}/formations/${program.slug}/`,
        lastModified,
        changeFrequency: 'yearly',
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${site.url}/${l}/formations/${program.slug}/`]),
          ),
        },
      })
    }
  }

  return entries
}
