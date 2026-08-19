import Link from 'next/link'
import type { Metadata } from 'next'

import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { Rosette } from '@/components/Ornament'
import { ArrowRight } from '@/components/Icons'
import { getDictionary } from '@/content/dictionary'
import { href, isLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)
  return {
    title: dict.approach.hero.title,
    description: dict.approach.hero.lead,
    alternates: { canonical: `/${lang}/approche/` },
  }
}

export default async function ApproachPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang = (isLocale(raw) ? raw : 'fr') as Locale
  const dict = getDictionary(lang)
  const a = dict.approach

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        lead={a.hero.lead}
        crumbs={[{ label: dict.nav.approach }]}
        breadcrumbLabel={dict.common.breadcrumb}
        homeLabel={dict.nav.home}
      />

      {/* Principes pédagogiques */}
      <section className="bg-ivory-50 py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={a.principles.eyebrow} title={a.principles.title} />

          <div className="mt-16 grid gap-px border border-navy-900/10 bg-navy-900/10 lg:grid-cols-2">
            {a.principles.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 90}
                className={`bg-ivory-50 p-10 ${i === 4 ? 'lg:col-span-2' : ''}`}
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-3xl text-gold-500/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl text-navy-900">{item.title}</h3>
                </div>
                <p className="mt-5 max-w-2xl leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ingénierie de formation */}
      <section className="relative overflow-hidden bg-navy-900 py-24 text-ivory-50 lg:py-32">
        <div className="zellige-bg pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
        <div className="container-page relative">
          <SectionHeading eyebrow={a.engineering.eyebrow} title={a.engineering.title} light />

          <ol className="mt-16 grid gap-px bg-ivory-100/10 md:grid-cols-2 xl:grid-cols-4">
            {a.engineering.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} as="li" className="bg-navy-900 p-8">
                <span className="font-display text-4xl text-gold-400/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 text-xl text-ivory-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-100/65">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Séjour & logistique */}
      <section className="bg-ivory-100 py-24 lg:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading eyebrow={a.logistics.eyebrow} title={a.logistics.title} lead={a.logistics.lead} />

          <Reveal delay={140}>
            <ul className="relative border border-navy-900/10 bg-ivory-50 p-10">
              <Rosette
                className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 bg-ivory-100 p-2 text-gold-500"
                strokeWidth={1.6}
              />
              {a.logistics.items.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-start gap-5 py-4 ${
                    i === 0 ? '' : 'border-t border-navy-900/10'
                  }`}
                >
                  <span className="mt-2.5 h-px w-6 shrink-0 bg-gold-500" aria-hidden="true" />
                  <span className="text-navy-800">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Évaluation */}
      <section className="bg-ivory-50 py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={a.evaluation.eyebrow} title={a.evaluation.title} align="center" />

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {a.evaluation.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="h-full">
                <article className="flex h-full flex-col border-t-2 border-gold-500 bg-white p-8">
                  <h3 className="font-display text-2xl text-navy-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-16 flex justify-center">
              <Link href={href(lang, '/contact')} className="btn btn-primary">
                {dict.nav.cta}
                <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
