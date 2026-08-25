import Link from 'next/link'
import { site } from '@/content/site'
import { href, type Locale } from '@/lib/i18n'

type LogoProps = {
  lang: Locale
  /** Variante posée sur un fond bleu nuit */
  light?: boolean
  /** Encadré à filet, comme dans l'en-tête */
  boxed?: boolean
  /**
   * emblem : emblème seul suivi du nom composé en typographie
   * lockup : logo complet fourni par le client, emblème et mot EXPERTISE
   */
  variant?: 'emblem' | 'lockup'
  className?: string
}

export default function Logo({
  lang,
  light = false,
  boxed = false,
  variant = 'emblem',
  className = '',
}: LogoProps) {
  const label = `${site.name}, ${site.baseline[lang]}`

  if (variant === 'lockup') {
    return (
      <Link href={href(lang, '/')} className={`inline-block ${className}`} aria-label={label}>
        <img
          src={light ? '/images/logo-clair.png' : '/images/logo.png'}
          alt={site.name}
          width={1000}
          height={911}
          className="h-auto w-40"
        />
      </Link>
    )
  }

  return (
    <Link
      href={href(lang, '/')}
      className={`group inline-flex items-center gap-3 ${
        boxed ? `border py-2 ps-2.5 pe-4 ${light ? 'border-ivory-100/20' : 'border-navy-900/15'}` : ''
      } ${className}`}
      aria-label={label}
    >
      <img
        src={light ? '/images/logo-embleme-clair.png' : '/images/logo-embleme.png'}
        alt=""
        aria-hidden="true"
        width={400}
        height={352}
        className="h-10 w-auto shrink-0 transition-transform duration-500 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap ${
            lang === 'ar'
              ? 'font-arabic text-[1.05rem]'
              : 'font-logo text-[0.95rem] uppercase tracking-[0.2em]'
          } ${light ? 'text-ivory-50' : 'text-navy-900'}`}
        >
          {lang === 'ar' ? 'المعارف' : 'Al Maârif'}
        </span>
        <span
          className={`mt-1 whitespace-nowrap font-semibold ${
            lang === 'ar'
              ? 'font-arabic text-[0.6875rem]'
              : 'text-[0.5rem] uppercase tracking-[0.36em]'
          } ${light ? 'text-gold-400' : 'text-gold-600'}`}
        >
          {lang === 'ar' ? 'للخبرة' : 'Expertise'}
        </span>
      </span>
    </Link>
  )
}
