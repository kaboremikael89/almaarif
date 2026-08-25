'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import { ArrowUpRight } from './Icons'
import { href, locales, localeShort, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

type HeaderProps = { lang: Locale; dict: Dictionary }

export default function Header({ lang, dict }: HeaderProps) {
  const pathname = usePathname() || `/${lang}`
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { href: href(lang, '/expertise'), label: dict.nav.expertise },
    { href: href(lang, '/formations'), label: dict.nav.programs },
    { href: href(lang, '/approche'), label: dict.nav.approach },
    { href: href(lang, '/a-propos'), label: dict.nav.about },
    { href: href(lang, '/contact'), label: dict.nav.contact },
  ]

  const localeHref = (target: Locale) =>
    pathname.replace(new RegExp(`^/(${locales.join('|')})`), `/${target}`) || `/${target}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (target: string) => pathname === target || pathname.startsWith(`${target}/`)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Barre utilitaire, masquée dès que la page défile */}
      <div
        className={`hidden overflow-hidden border-b border-navy-900/10 bg-ivory-100 transition-[max-height,opacity] duration-500 lg:block ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container-page flex h-[var(--bar-h)] items-center justify-between">
          <div className="label label-square flex items-center gap-8 text-navy-700">
            <span>{dict.topbar.locations}</span>
            <span className="hidden text-navy-700/60 xl:inline">{dict.topbar.services}</span>
          </div>
          <div className="label flex items-center gap-6 text-navy-700">
            <span className="hidden text-navy-700/60 xl:inline">{dict.topbar.note}</span>
            <Link
              href={href(lang, '/contact')}
              className="link-underline text-gold-700"
            >
              {dict.topbar.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Barre principale */}
      <div
        className={`border-b border-navy-900/10 bg-ivory-50/95 backdrop-blur-md transition-shadow duration-500 ${
          scrolled ? 'shadow-[0_1px_0_0_rgba(10,33,54,0.08)]' : ''
        }`}
      >
        <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-6">
          <Logo lang={lang} boxed />

          <nav aria-label={dict.nav.menu} className="hidden items-center gap-2 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className="pill"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div
              aria-label={dict.nav.language}
              className="flex items-center border border-navy-900/15 p-1"
            >
              {locales.map((locale) =>
                locale === lang ? (
                  <span
                    key={locale}
                    aria-current="true"
                    className="bg-navy-900 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-ivory-50"
                  >
                    {localeShort[locale]}
                  </span>
                ) : (
                  <Link
                    key={locale}
                    href={localeHref(locale)}
                    hrefLang={locale}
                    className="px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-navy-700 transition-colors hover:text-gold-700"
                  >
                    {localeShort[locale]}
                  </Link>
                ),
              )}
            </div>

            <Link href={href(lang, '/contact')} className="btn btn-gold hidden xl:inline-flex">
              {dict.common.requestQuote}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? dict.nav.close : dict.nav.menu}
              className="flex h-10 w-10 items-center justify-center border border-navy-900/15 text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-700 lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-300 ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation mobile */}
      <div
        id="mobile-nav"
        className={`overflow-hidden bg-ivory-50 lg:hidden ${
          open ? 'max-h-[85vh] border-b border-navy-900/10' : 'max-h-0'
        } transition-[max-height] duration-500 ease-out`}
      >
        <nav className="container-page flex flex-col py-4" aria-label={dict.nav.menu}>
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between border-b border-navy-900/10 py-4 text-lg font-light uppercase tracking-[0.08em] text-navy-900"
            >
              {link.label}
              <span className="index">{String(i + 1).padStart(2, '0')}</span>
            </Link>
          ))}
          <Link href={href(lang, '/contact')} className="btn btn-gold mt-6 w-full">
            {dict.common.requestQuote}
          </Link>
        </nav>
      </div>
    </header>
  )
}
