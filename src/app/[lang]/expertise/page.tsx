import Link from 'next/link'
import type { Metadata } from 'next'

import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import ProgramCard from '@/components/ProgramCard'
import { ArrowRight } from '@/components/Icons'
import { getDictionary } from '@/content/dictionary'
import { domains } from '@/content/domains'
import { programsByDomain } from '@/content/programs'
import { href, isLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)
  return {
    title: dict.expertise.hero.title,
    description: dict.expertise.hero.lead,
    alternates: { canonical: `/${lang}/expertise/` },
  }
}

export default async function ExpertisePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang = (isLocale(raw) ? raw : 'fr') as Locale
  const dict = getDictionary(lang)

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={dict.expertise.hero.eyebrow}
        title={dict.expertise.hero.title}
        lead={dict.expertise.hero.lead}
        crumbs={[{ label: dict.nav.expertise }]}
        breadcrumbLabel={dict.common.breadcrumb}
        homeLabel={dict.nav.home}
      />

      {domains.map((domain, index) => {
        const related = programsByDomain(domain.slug)
        const dark = index % 2 === 1

        return (
          <section
            key={domain.slug}
            id={domain.slug}
            className={`scroll-mt-28 border-b border-navy-900/10 py-20 lg:py-28 ${
              dark ? 'bg-ivory-100' : 'bg-ivory-50'
            }`}
          >
            <div className="container-page grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <Reveal>
                  <span className="text-5xl font-extralight text-gold-500/60">{domain.number}</span>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-6 text-[clamp(1.85rem,3.4vw,2.75rem)] text-navy-900">
                    {domain.title[lang]}
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                    {domain.description[lang]}
                  </p>
                </Reveal>
              </div>

              <div>
                <Reveal>
                  <h3 className="label text-navy-600">{dict.expertise.topicsLabel}</h3>
                </Reveal>
                <ul className="mt-6 grid gap-px border border-navy-900/10 bg-navy-900/10">
                  {domain.topics[lang].map((topic, i) => (
                    <Reveal key={topic} delay={i * 60} as="li">
                      <div className="flex items-start gap-4 bg-white px-6 py-4">
                        <span className="mt-2.5 h-px w-5 shrink-0 bg-gold-500" aria-hidden="true" />
                        <span className="text-sm text-navy-800">{topic}</span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>

            {related.length > 0 && (
              <div className="container-page mt-14">
                <Reveal>
                  <h3 className="label text-gold-600">{dict.expertise.programsLabel}</h3>
                </Reveal>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {related.map((program, i) => (
                    <Reveal key={program.slug} delay={i * 90} className="h-full">
                      <ProgramCard program={program} lang={lang} dict={dict} />
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </section>
        )
      })}

      <section className="bg-navy-950 py-20 text-ivory-50 lg:py-24">
        <div className="container-page flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)]">{dict.expertise.cta.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-lg leading-relaxed text-ivory-100/70">{dict.expertise.cta.body}</p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link href={href(lang, '/contact')} className="btn btn-gold">
              {dict.expertise.cta.button}
              <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
