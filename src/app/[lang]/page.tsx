import Link from 'next/link'
import type { Metadata } from 'next'

import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import ProgramCard from '@/components/ProgramCard'
import SplitImage from '@/components/SplitImage'
import { Rosette, Divider } from '@/components/Ornament'
import { ArrowRight } from '@/components/Icons'
import { getDictionary } from '@/content/dictionary'
import { domains } from '@/content/domains'
import { featuredPrograms } from '@/content/programs'
import { site } from '@/content/site'
import { href, isLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)
  return {
    title: `${site.name}${lang === 'fr' ? ' : ' : ': '}${site.baseline[lang]}`,
    description: dict.home.hero.lead,
  }
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang = (isLocale(raw) ? raw : 'fr') as Locale
  const dict = getDictionary(lang)
  const home = dict.home

  return (
    <>
      {/* ---------------------------------------------------------- HERO */}
      <section className="relative isolate overflow-hidden bg-navy-950 pt-[calc(var(--header-h)+4rem)] pb-0 text-ivory-50">
        <div className="zellige-bg pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,rgba(193,154,69,0.20),transparent_55%)]"
          aria-hidden="true"
        />
        <Rosette
          className="pointer-events-none absolute -right-40 top-10 h-[38rem] w-[38rem] text-gold-500 opacity-[0.10]"
          strokeWidth={0.5}
        />

        <div className="container-page relative pb-24 pt-16 lg:pb-32">
          <div className="max-w-4xl">
            <Reveal>
              <p className="eyebrow eyebrow-line text-gold-400">{home.hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-8 text-[clamp(2.5rem,6.2vw,5.25rem)] leading-[1.04] text-ivory-50">
                {home.hero.title}
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory-100/75 lg:text-xl">
                {home.hero.lead}
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link href={href(lang, '/formations')} className="btn btn-gold">
                  {home.hero.ctaPrimary}
                  <ArrowRight />
                </Link>
                <Link href={href(lang, '/contact')} className="btn btn-outline-light">
                  {home.hero.ctaSecondary}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bandeau de chiffres */}
        <div className="relative border-t border-ivory-100/10 bg-navy-950/60 backdrop-blur-sm">
          <div className="container-page grid grid-cols-2 divide-x divide-ivory-100/10 lg:grid-cols-4">
            {home.stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 90}
                className={`px-2 py-8 lg:px-8 ${i >= 2 ? 'border-t border-ivory-100/10 lg:border-t-0' : ''}`}
              >
                <p className="font-display text-4xl text-gold-400 lg:text-5xl">{stat.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-ivory-100/55">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- INTRO */}
      <section className="relative bg-ivory-50 py-24 lg:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={home.intro.eyebrow} title={home.intro.title} />
            <div className="mt-8 space-y-6">
              {home.intro.body.map((paragraph, i) => (
                <Reveal key={i} delay={120 + i * 90}>
                  <p className="max-w-2xl text-lg leading-relaxed text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={320}>
              <Link
                href={href(lang, '/a-propos')}
                className="mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy-900 transition-colors hover:text-gold-600"
              >
                {home.intro.cta}
                <ArrowRight />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <figure className="relative border border-navy-900/10 bg-white p-10 lg:mt-4">
              <Rosette className="absolute -right-6 -top-6 h-16 w-16 bg-ivory-50 p-2 text-gold-500" strokeWidth={1.8} />
              <blockquote className="font-display text-[1.75rem] leading-snug text-navy-900">
                « {site.baseline[lang]} »
              </blockquote>
              <Divider className="my-8" />
              <figcaption className="space-y-2 text-sm text-muted">
                <p className="eyebrow text-navy-600">{site.tagline[lang]}</p>
                <p>
                  {site.address.city}, {site.address.country[lang]}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------- BANDE PHOTO */}
      <section className="bg-navy-950 pb-0 pt-0">
        <div className="container-page py-2 lg:py-3">
          <SplitImage
            src="/images/salle-de-formation.jpg"
            alt={home.hero.title}
          />
        </div>
      </section>

      {/* ------------------------------------------------------ DOMAINES */}
      <section className="border-y border-navy-900/10 bg-ivory-100 py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={home.domains.eyebrow} title={home.domains.title} lead={home.domains.lead} />

          <div className="mt-16 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain, i) => (
              <Reveal key={domain.slug} delay={(i % 3) * 90}>
                <Link
                  href={`${href(lang, '/expertise')}#${domain.slug}`}
                  className="group flex h-full flex-col bg-ivory-50 p-9 transition-colors duration-500 hover:bg-white"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-3xl text-gold-500/70">{domain.number}</span>
                    <ArrowRight className="h-4 w-4 -translate-x-2 text-gold-600 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-8 text-2xl text-navy-900">{domain.title[lang]}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{domain.description[lang]}</p>
                  <span className="mt-8 h-px w-12 bg-gold-500 transition-all duration-500 group-hover:w-24" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- PROGRAMMES PHARES */}
      <section className="bg-ivory-50 py-24 lg:py-32">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow={home.featured.eyebrow}
              title={home.featured.title}
              lead={home.featured.lead}
            />
            <Reveal delay={200}>
              <Link href={href(lang, '/formations')} className="btn btn-outline whitespace-nowrap">
                {dict.common.allPrograms}
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredPrograms.slice(0, 4).map((program, i) => (
              <Reveal key={program.slug} delay={(i % 4) * 90} className="h-full">
                <ProgramCard program={program} lang={lang} dict={dict} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- POURQUOI LE MAROC */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-ivory-50 lg:py-32">
        <div className="zellige-bg pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
        <div className="container-page relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={home.morocco.eyebrow}
            title={home.morocco.title}
            lead={home.morocco.lead}
            light
          />

          <div className="grid gap-px bg-ivory-100/10 sm:grid-cols-2">
            {home.morocco.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="bg-navy-900 p-8">
                <span className="font-display text-2xl text-gold-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 text-xl text-ivory-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-100/65">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- MODALITÉS */}
      <section className="bg-ivory-100 py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={home.formats.eyebrow} title={home.formats.title} align="center" />

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {home.formats.items.map((item, i) => (
              <Reveal key={item.tag} delay={(i % 4) * 90} className="h-full">
                <article className="relative flex h-full flex-col border border-navy-900/10 bg-ivory-50 p-8">
                  <span className="eyebrow text-gold-600">{item.tag}</span>
                  <h3 className="mt-6 text-xl text-navy-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- PROCESSUS */}
      <section className="bg-ivory-50 py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={home.process.eyebrow} title={home.process.title} />

          <ol className="mt-16 grid gap-px border-y border-navy-900/10 bg-navy-900/10 lg:grid-cols-5">
            {home.process.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} as="li" className="bg-ivory-50 p-8">
                <span className="font-display text-4xl text-gold-500/60">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 text-lg text-navy-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* -------------------------------------------------------------- CTA */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-ivory-50 lg:py-28">
        <Rosette
          className="pointer-events-none absolute -bottom-28 -left-24 h-96 w-96 text-gold-500 opacity-[0.08]"
          strokeWidth={0.7}
        />
        <div className="container-page relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-[clamp(1.9rem,3.4vw,3rem)] text-ivory-50">{home.cta.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-lg leading-relaxed text-ivory-100/70">{home.cta.body}</p>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <div className="flex flex-wrap gap-4">
              <Link href={href(lang, '/contact')} className="btn btn-gold">
                {home.cta.button}
                <ArrowRight />
              </Link>
              <Link href={href(lang, '/formations')} className="btn btn-outline-light">
                {home.cta.secondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
