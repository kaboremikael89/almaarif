import Link from 'next/link'
import Reveal from './Reveal'
import { SectionLabel } from './Primitives'
import { href, type Locale } from '@/lib/i18n'

type Crumb = { label: string; href?: string }

type PageHeroProps = {
  lang: Locale
  eyebrow: string
  title: string
  lead?: string
  crumbs?: Crumb[]
  breadcrumbLabel?: string
  homeLabel?: string
}

export default function PageHero({
  lang,
  eyebrow,
  title,
  lead,
  crumbs = [],
  breadcrumbLabel = 'Breadcrumb',
  homeLabel = 'Accueil',
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-navy-900/10 bg-ivory-50 pt-[calc(var(--header-h)+var(--bar-h)+2.5rem)]">
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="container-page relative pb-16 lg:pb-20">
        <nav aria-label={breadcrumbLabel} className="mb-10">
          <ol className="label flex flex-wrap items-center gap-2 text-muted/70">
            <li>
              <Link href={href(lang, '/')} className="transition-colors hover:text-gold-700">
                {homeLabel}
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-gold-500">
                  /
                </span>
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-gold-700">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-navy-800">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Reveal>
          <SectionLabel>{eyebrow}</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal delay={100}>
            <h1 className="max-w-3xl text-[clamp(1.9rem,4.8vw,4rem)] text-navy-900">{title}</h1>
          </Reveal>
          {lead && (
            <Reveal delay={200}>
              <p className="max-w-md text-sm leading-relaxed text-muted lg:pb-2">{lead}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
