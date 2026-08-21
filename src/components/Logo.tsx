import Link from 'next/link'
import { Rosette } from './Ornament'
import { site } from '@/content/site'
import { href, type Locale } from '@/lib/i18n'

type LogoProps = {
  lang: Locale
  /** Variante claire pour les fonds bleu nuit */
  light?: boolean
  /** Encadré à filet, comme dans l'en-tête */
  boxed?: boolean
  className?: string
}

export default function Logo({ lang, light = false, boxed = false, className = '' }: LogoProps) {
  return (
    <Link
      href={href(lang, '/')}
      className={`group inline-flex items-center gap-3 ${
        boxed ? 'border border-navy-900/15 py-2 pl-2 pr-4' : ''
      } ${className}`}
      aria-label={`${site.name}, ${site.baseline[lang]}`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center ${
          light ? 'bg-gold-500' : 'bg-navy-900'
        }`}
      >
        <Rosette
          className={`h-5 w-5 transition-transform duration-700 group-hover:rotate-45 ${
            light ? 'text-navy-950' : 'text-gold-400'
          }`}
          strokeWidth={2.6}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap font-logo text-[0.95rem] uppercase tracking-[0.2em] ${
            light ? 'text-ivory-50' : 'text-navy-900'
          }`}
        >
          Al Maârif
        </span>
        <span
          className={`mt-1 whitespace-nowrap text-[0.5rem] font-semibold uppercase tracking-[0.36em] ${
            light ? 'text-gold-400' : 'text-gold-600'
          }`}
        >
          Expertise
        </span>
      </span>
    </Link>
  )
}
