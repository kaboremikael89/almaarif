import type { Metadata, Viewport } from 'next'
import { Marcellus, Archivo, Tajawal } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getDictionary } from '@/content/dictionary'
import { site } from '@/content/site'
import { isLocale, locales, localeHtmlLang, localeDir, type Locale } from '@/lib/i18n'

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
})

// Police arabe : Tajawal, dessinée pour l'arabe moderne, avec des graisses fines
const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#12294a',
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
        : lang === 'ar'
          ? [
              'التكوين المستمر المغرب',
              'ندوة الدار البيضاء',
              'تكوين الأطر',
              'المالية العمومية',
              'الصفقات العمومية',
              'التدقيق الداخلي',
              'الاستشارة في التدبير',
              'المعارف للخبرة',
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
        ar: `${site.url}/ar/`,
        'x-default': `${site.url}/fr/`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: `${site.url}/${lang}/`,
      locale: lang === 'fr' ? 'fr_MA' : lang === 'ar' ? 'ar_MA' : 'en_US',
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
        { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
    founder: { '@type': 'Person', name: site.legal.manager },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street.fr,
      addressLocality: site.address.city.fr,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    areaServed: ['MA', 'Africa'],
    knowsLanguage: ['fr', 'en', 'ar'],
  }

  return (
    <html
      lang={localeHtmlLang[locale]}
      dir={localeDir[locale]}
      className={`${marcellus.variable} ${archivo.variable} ${tajawal.variable}`}
    >
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:text-ivory-50"
        >
          {locale === 'fr' ? 'Aller au contenu' : locale === 'ar' ? 'الانتقال إلى المحتوى' : 'Skip to content'}
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
