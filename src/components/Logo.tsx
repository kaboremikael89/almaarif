import Link from 'next/link'
import { Rosette } from './Ornament'
import { site } from '@/content/site'
import { href, type Locale } from '@/lib/i18n'

type LogoProps = {
  lang: Locale
  /** Variante claire pour les fonds bleu nuit */
  light?: boolean
  className?: string
}

export default function Logo({ lang, light = false, className = '' }: LogoProps) {
  return (
    <Link
      href={href(lang, '/')}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label={`${site.name}, ${site.baseline[lang]}`}
    >
      <Rosette
        className={`h-9 w-9 shrink-0 transition-transform duration-700 group-hover:rotate-45 ${
          light ? 'text-gold-400' : 'text-gold-500'
        }`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap font-display text-[1.05rem] uppercase tracking-[0.16em] ${
            light ? 'text-ivory-50' : 'text-navy-900'
          }`}
        >
          Al Maârif
        </span>
        <span
          className={`mt-1 whitespace-nowrap text-[0.5625rem] font-semibold uppercase tracking-[0.34em] ${
            light ? 'text-gold-400' : 'text-gold-600'
          }`}
        >
          Expertise
        </span>
      </span>
    </Link>
  )
}
