import type { Metadata, Viewport } from 'next'
import { Marcellus, Archivo } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getDictionary } from '@/content/dictionary'
import { site } from '@/content/site'
import { isLocale, locales, localeHtmlLang, type Locale } from '@/lib/i18n'

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#082140',
  width: 'device-width',
  initialScale: 1,
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = getDictionary(lang)

  const title = `${site.name}, ${site.tagline[lang]}`
  const description = dict.home.hero.lead

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s · ${site.name}`,
    },
    description,
    applicationName: site.name,
    keywords:
      lang === 'fr'
        ? [
            'formation professionnelle Maroc',
            'séminaire Casablanca',
            'formation cadres africains',
            'finances publiques',
            'marchés publics',
            'audit interne',
            'conseil de gestion',
            'Al Maarif Expertise',
          ]
        : [
            'professional training Morocco',
            'Casablanca seminar',
            'African executives training',
            'public finance',
            'public procurement',
            'internal audit',
            'management consulting',
            'Al Maarif Expertise',
          ],
    authors: [{ name: site.legalName }],
    alternates: {
      canonical: `${site.url}/${lang}/`,
      languages: {
        fr: `${site.url}/fr/`,
        en: `${site.url}/en/`,
        'x-default': `${site.url}/fr/`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: `${site.url}/${lang}/`,
      locale: lang === 'fr' ? 'fr_MA' : 'en_US',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
    robots: { index: true, follow: true },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  const locale = lang as Locale
  const dict = getDictionary(locale)

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'EducationalOrganization'],
    name: site.legalName,
    alternateName: site.name,
    url: `${site.url}/${locale}/`,
    slogan: site.baseline[locale],
    description: dict.home.hero.lead,
    email: site.contact.email,
    telephone: site.contact.phone,
    identifier: { '@type': 'PropertyValue', name: 'ICE', value: site.legal.ice },
    founder: { '@type': 'Person', name: site.legal.manager },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    areaServed: ['MA', 'Africa'],
    knowsLanguage: ['fr', 'en'],
  }

  return (
    <html lang={localeHtmlLang[locale]} className={`${marcellus.variable} ${archivo.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:text-ivory-50"
        >
          {locale === 'fr' ? 'Aller au contenu' : 'Skip to content'}
        </a>
        <Header lang={locale} dict={dict} />
        <main id="main">{children}</main>
        <Footer lang={locale} dict={dict} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  )
}
