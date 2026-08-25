import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import ProgramCard from '@/components/ProgramCard'
import { Divider } from '@/components/Ornament'
import { ArrowRight, Clock, Pin } from '@/components/Icons'
import { getDictionary } from '@/content/dictionary'
import { getDomain } from '@/content/domains'
import { getProgram, programs, programsByDomain } from '@/content/programs'
import { site } from '@/content/site'
import { href, isLocale, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const program = getProgram(slug)
  if (!program) return {}

  return {
    title: program.title[lang],
    description: program.summary[lang],
    alternates: {
      canonical: `/${lang}/formations/${slug}/`,
      languages: {
        fr: `/fr/formations/${slug}/`,
        en: `/en/formations/${slug}/`,
      },
    },
    openGraph: {
      title: program.title[lang],
      description: program.summary[lang],
      type: 'article',
    },
  }
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang: raw, slug } = await params
  const lang = (isLocale(raw) ? raw : 'fr') as Locale
  const dict = getDictionary(lang)
  const program = getProgram(slug)

  if (!program) notFound()

  const domain = getDomain(program.domain)
  const related = programsByDomain(program.domain).filter((p) => p.slug !== program.slug)

  const facts = [
    { label: dict.common.reference, value: program.reference },
    { label: dict.common.domain, value: domain.title[lang] },
    {
      label: dict.common.duration,
      value: `${program.durationWeeks} ${program.durationWeeks > 1 ? dict.common.weeks : dict.common.week}`,
    },
    { label: dict.common.level, value: dict.common.levels[program.level] },
    { label: dict.common.languages, value: dict.common.languagesValue },
    { label: dict.common.location, value: dict.common.locationValue },
    { label: dict.common.sessionsLabel, value: program.sessions?.join(' · ') || dict.common.sessionsValue },
    { label: dict.common.price, value: dict.common.priceValue },
  ]

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.title[lang],
    description: program.summary[lang],
    courseCode: program.reference,
    inLanguage: [lang],
    url: `${site.url}/${lang}/formations/${program.slug}/`,
    provider: {
      '@type': 'Organization',
      name: site.legalName,
      url: site.url,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'blended'],
      courseWorkload: `P${program.durationWeeks}W`,
      location: {
        '@type': 'Place',
        name: site.address.city.fr,
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.address.city.fr,
          addressCountry: site.address.countryCode,
        },
      },
    },
  }

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={domain.title[lang]}
        title={program.title[lang]}
        lead={program.summary[lang]}
        crumbs={[
          { label: dict.nav.programs, href: href(lang, '/formations') },
          { label: program.reference },
        ]}
        breadcrumbLabel={dict.common.breadcrumb}
        homeLabel={dict.nav.home}
      />

      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="container-page grid gap-16 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          {/* ------------------------------------------------ Contenu */}
          <div className="space-y-16">
            <div>
              <Reveal>
                <h2 className="label label-square text-gold-600">{dict.common.objectives}</h2>
              </Reveal>
              <ul className="mt-8 space-y-5">
                {program.objectives[lang].map((objective, i) => (
                  <Reveal key={objective} delay={i * 70} as="li">
                    <div className="flex gap-5">
                      <span className="mt-1 text-lg font-light text-gold-500">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-lg leading-relaxed text-navy-800">{objective}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Divider />

            <div>
              <Reveal>
                <h2 className="label label-square text-gold-600">{dict.common.modules}</h2>
              </Reveal>
              <ol className="mt-8 grid gap-px border border-navy-900/10 bg-navy-900/10">
                {program.modules[lang].map((module, i) => (
                  <Reveal key={module} delay={i * 70} as="li">
                    <div className="flex items-start gap-6 bg-white px-7 py-6">
                      <span className="text-2xl font-light text-gold-500/70">{i + 1}</span>
                      <span className="pt-1 text-navy-900">{module}</span>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

            <Divider />

            <div>
              <Reveal>
                <h2 className="label label-square text-gold-600">{dict.common.audience}</h2>
              </Reveal>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {program.audience[lang].map((item, i) => (
                  <Reveal key={item} delay={i * 70} as="li">
                    <div className="flex h-full items-start gap-4 border border-navy-900/10 bg-white p-6">
                      <span className="mt-2.5 h-px w-5 shrink-0 bg-gold-500" aria-hidden="true" />
                      <span className="text-sm text-navy-800">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {/* ------------------------------------------------ Fiche */}
          <Reveal delay={120}>
            <aside className="border border-navy-900/10 bg-white lg:sticky lg:top-28">
              <div className="border-b border-navy-900/10 bg-navy-950 px-8 py-7 text-ivory-50">
                <p className="label text-gold-400">{program.reference}</p>
                <p className="mt-4 flex items-center gap-3 text-sm text-ivory-100/80">
                  <Clock className="h-4 w-4 text-gold-400" />
                  {program.durationWeeks}{' '}
                  {program.durationWeeks > 1 ? dict.common.weeks : dict.common.week}
                </p>
                <p className="mt-2 flex items-center gap-3 text-sm text-ivory-100/80">
                  <Pin className="h-4 w-4 text-gold-400" />
                  {site.address.city[lang]}, {site.address.country[lang]}
                </p>
              </div>

              <dl className="divide-y divide-navy-900/10">
                {facts.map((fact) => (
                  <div key={fact.label} className="px-8 py-4">
                    <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted/80">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 text-sm text-navy-900">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="space-y-3 border-t border-navy-900/10 p-8">
                <Link
                  href={`${href(lang, '/contact')}?p=${program.slug}`}
                  className="btn btn-primary w-full"
                >
                  {dict.common.requestQuote}
                </Link>
                <Link
                  href={`${href(lang, '/contact')}?p=${program.slug}`}
                  className="btn btn-outline w-full"
                >
                  {dict.common.downloadProgram}
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-navy-900/10 bg-ivory-100 py-20">
          <div className="container-page">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <h2 className="text-3xl font-extralight text-navy-900">{dict.common.relatedPrograms}</h2>
              <Link
                href={href(lang, '/formations')}
                className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-navy-900 transition-colors hover:text-gold-600"
              >
                {dict.common.backToPrograms}
                <ArrowRight />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 90} className="h-full">
                  <ProgramCard program={item} lang={lang} dict={dict} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
    </>
  )
}
