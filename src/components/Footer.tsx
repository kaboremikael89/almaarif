import Link from 'next/link'
import Logo from './Logo'
import { Rosette } from './Ornament'
import { site } from '@/content/site'
import { domains } from '@/content/domains'
import { href, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const year = 2026

  const nav = [
    { href: href(lang, '/expertise'), label: dict.nav.expertise },
    { href: href(lang, '/formations'), label: dict.nav.programs },
    { href: href(lang, '/approche'), label: dict.nav.approach },
    { href: href(lang, '/a-propos'), label: dict.nav.about },
    { href: href(lang, '/contact'), label: dict.nav.contact },
  ]

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-ivory-100">
      <div className="zellige-bg pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <Rosette
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 text-gold-500 opacity-[0.07]"
        strokeWidth={0.8}
      />

      <div className="container-page relative py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo lang={lang} light variant="lockup" />
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-ivory-100/60">{dict.footer.tagline}</p>
            <p className="label mt-8 text-gold-400">{site.tagline[lang]}</p>
          </div>

          <nav aria-label={dict.footer.navTitle}>
            <h2 className="label text-gold-500">{dict.footer.navTitle}</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-ivory-100/75 hover:text-ivory-50">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.programsTitle}>
            <h2 className="label text-gold-500">{dict.footer.programsTitle}</h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {domains.map((domain) => (
                <li key={domain.slug}>
                  <Link
                    href={`${href(lang, '/expertise')}#${domain.slug}`}
                    className="link-underline text-ivory-100/75 hover:text-ivory-50"
                  >
                    {domain.short[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label text-gold-500">{dict.footer.contactTitle}</h2>
            <address className="mt-6 space-y-3 text-sm not-italic text-ivory-100/75">
              <p>
                {site.address.street[lang]}
                <br />
                {site.address.city[lang]}
                {lang === 'ar' ? '، ' : ', '}
                {site.address.country[lang]}
              </p>
              <p>
                <a href={`tel:${site.contact.phoneHref}`} className="link-underline hover:text-ivory-50">
                  {site.contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.contact.email}`} className="link-underline hover:text-ivory-50">
                  {site.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory-100/10 pt-8 text-xs text-ivory-100/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. {dict.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href={href(lang, '/mentions-legales')} className="link-underline hover:text-ivory-100">
              {dict.footer.legalNotice}
            </Link>
            <Link href={href(lang, '/confidentialite')} className="link-underline hover:text-ivory-100">
              {dict.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
