'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import { href, locales, type Locale } from '@/lib/i18n'
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

  const other = locales.find((l) => l !== lang) as Locale
  // Conserve la page courante lors du changement de langue
  const otherHref = pathname.replace(new RegExp(`^/${lang}`), `/${other}`) || `/${other}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (target: string) => pathname === target || pathname.startsWith(`${target}/`)

  // En haut de page, l'en-tête se superpose à une bannière bleu nuit :
  // le logo et la navigation passent en version claire.
  const onDark = !scrolled && !open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-ivory-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(8,33,64,0.10)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-6">
        <Logo lang={lang} light={onDark} />

        <nav aria-label={dict.nav.menu} className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline whitespace-nowrap text-[0.8125rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                isActive(link.href)
                  ? onDark
                    ? 'text-gold-400'
                    : 'text-gold-600'
                  : onDark
                    ? 'text-ivory-100/85 hover:text-gold-400'
                    : 'text-navy-800 hover:text-gold-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={otherHref}
            hrefLang={other}
            className={`hidden text-[0.6875rem] font-semibold uppercase tracking-[0.2em] transition-colors sm:block ${
              onDark ? 'text-ivory-100/80 hover:text-gold-400' : 'text-navy-700 hover:text-gold-600'
            }`}
          >
            {dict.meta.switchLabel}
          </Link>
          <span
            className={`hidden h-4 w-px sm:block ${onDark ? 'bg-ivory-100/25' : 'bg-navy-900/15'}`}
          />
          <Link
            href={href(lang, '/contact')}
            className={`btn hidden xl:inline-flex ${onDark ? 'btn-gold' : 'btn-primary'}`}
          >
            {dict.common.requestQuote}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.nav.close : dict.nav.menu}
            className={`flex h-11 w-11 items-center justify-center border transition-colors hover:border-gold-500 hover:text-gold-500 lg:hidden ${
              onDark ? 'border-ivory-100/25 text-ivory-50' : 'border-navy-900/15 text-navy-900'
            }`}
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

      {/* Navigation mobile */}
      <div
        id="mobile-nav"
        className={`overflow-hidden bg-ivory-50 lg:hidden ${
          open ? 'max-h-[80vh] border-t border-navy-900/10' : 'max-h-0'
        } transition-[max-height] duration-500 ease-out`}
      >
        <nav className="container-page flex flex-col gap-1 py-6" aria-label={dict.nav.menu}>
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-navy-900/10 py-4 font-display text-2xl text-navy-900"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-5">
            <Link href={href(lang, '/contact')} className="btn btn-primary w-full">
              {dict.common.requestQuote}
            </Link>
            <Link
              href={otherHref}
              hrefLang={other}
              className="self-start text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy-700"
            >
              {dict.meta.switchLabel}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
