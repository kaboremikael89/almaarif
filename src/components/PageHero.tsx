import Link from 'next/link'
import Reveal from './Reveal'
import { Rosette } from './Ornament'
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
    <section className="relative isolate overflow-hidden bg-navy-950 pt-[calc(var(--header-h)+3.5rem)] text-ivory-50">
      <div className="zellige-bg pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_80%_0%,rgba(193,154,69,0.18),transparent_60%)]"
        aria-hidden="true"
      />
      <Rosette
        className="pointer-events-none absolute -left-28 -bottom-32 h-[26rem] w-[26rem] text-gold-500 opacity-[0.08]"
        strokeWidth={0.6}
      />

      <div className="container-page relative pb-20 pt-10 lg:pb-28">
        <nav aria-label={breadcrumbLabel} className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-[0.6875rem] uppercase tracking-[0.18em] text-ivory-100/45">
            <li>
              <Link href={href(lang, '/')} className="transition-colors hover:text-gold-400">
                {homeLabel}
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-gold-500/60">
                  /
                </span>
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-gold-400">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-ivory-100/70">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Reveal>
          <p className="eyebrow eyebrow-line text-gold-400">{eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-7 max-w-4xl text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.06] text-ivory-50">
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ivory-100/70">{lead}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
