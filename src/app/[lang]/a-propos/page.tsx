import Link from 'next/link'
import type { Metadata } from 'next'

import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { Rosette, Divider } from '@/components/Ornament'
import { ArrowRight } from '@/components/Icons'
import { getDictionary } from '@/content/dictionary'
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
    title: dict.about.hero.title,
    description: dict.about.mission.body[0],
    alternates: { canonical: `/${lang}/a-propos/` },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang = (isLocale(raw) ? raw : 'fr') as Locale
  const dict = getDictionary(lang)
  const about = dict.about

  const identity = [
    { label: about.identity.rows.legalName, value: site.legalName },
    { label: about.identity.rows.activity, value: site.legal.activity[lang] },
    { label: about.identity.rows.ice, value: site.legal.ice },
    { label: about.identity.rows.rc, value: site.legal.rc || about.identity.pending },
    { label: about.identity.rows.manager, value: site.legal.manager },
    {
      label: about.identity.rows.headquarters,
      value: `${site.address.street}, ${site.address.city}, ${site.address.country[lang]}`,
    },
    { label: about.identity.rows.court, value: site.legal.court[lang] },
  ]

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        lead={about.hero.lead}
        crumbs={[{ label: dict.nav.about }]}
        breadcrumbLabel={dict.common.breadcrumb}
        homeLabel={dict.nav.home}
      />

      {/* Mission */}
      <section className="bg-ivory-50 py-24 lg:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={about.mission.eyebrow} title={about.mission.title} />
            <div className="mt-8 space-y-6">
              {about.mission.body.map((paragraph, i) => (
                <Reveal key={i} delay={120 + i * 80}>
                  <p className="max-w-2xl text-lg leading-relaxed text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={180}>
            <div className="relative overflow-hidden border border-navy-900/10 bg-navy-950 p-10 text-ivory-50">
              <div className="zellige-bg pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true" />
              <div className="relative">
                <p className="eyebrow text-gold-400">{site.tagline[lang]}</p>
                <p className="mt-6 font-display text-[1.6rem] leading-snug">« {site.baseline[lang]} »</p>
                <Divider className="my-8" />
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between gap-6">
                    <dt className="text-ivory-100/50">{about.identity.rows.ice}</dt>
                    <dd className="text-ivory-100">{site.legal.ice}</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="text-ivory-100/50">{about.identity.rows.headquarters}</dt>
                    <dd className="text-right text-ivory-100">
                      {site.address.city}, {site.address.country[lang]}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="border-y border-navy-900/10 bg-ivory-100 py-24 lg:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={about.values.eyebrow} title={about.values.title} />
          <div className="mt-16 grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-2 xl:grid-cols-4">
            {about.values.items.map((value, i) => (
              <Reveal key={value.title} delay={i * 90} className="bg-ivory-50 p-9">
                <Rosette className="h-8 w-8 text-gold-500" strokeWidth={2} />
                <h3 className="mt-7 text-2xl text-navy-900">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Direction */}
      <section className="bg-ivory-50 py-24 lg:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div className="relative flex aspect-4/5 items-center justify-center overflow-hidden bg-navy-950">
              <div className="zellige-bg pointer-events-none absolute inset-0 opacity-[0.10]" aria-hidden="true" />
              <Rosette className="h-40 w-40 text-gold-500/70" strokeWidth={0.9} />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-950 to-transparent p-8 pt-20">
                <p className="font-display text-2xl text-ivory-50">{about.direction.name}</p>
                <p className="eyebrow mt-2 text-gold-400">{about.direction.role}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow={about.direction.eyebrow} title={about.direction.title} />
            <Reveal delay={140}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{about.direction.body}</p>
            </Reveal>

            <div className="mt-12">
              <Reveal>
                <h3 className="eyebrow eyebrow-line text-gold-600">{about.network.eyebrow}</h3>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-6 max-w-2xl leading-relaxed text-muted">{about.network.lead}</p>
              </Reveal>
              <ul className="mt-8 space-y-3">
                {about.network.items.map((item, i) => (
                  <Reveal key={item} delay={i * 70} as="li">
                    <div className="flex items-start gap-4 border-b border-navy-900/10 pb-3">
                      <span className="mt-2.5 h-px w-5 shrink-0 bg-gold-500" aria-hidden="true" />
                      <span className="text-sm text-navy-800">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Identité légale */}
      <section className="border-t border-navy-900/10 bg-ivory-100 py-24">
        <div className="container-page">
          <SectionHeading eyebrow={about.identity.eyebrow} title={about.identity.title} />
          <dl className="mt-12 grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-2">
            {identity.map((row) => (
              <div key={row.label} className="bg-ivory-50 px-8 py-6">
                <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-muted/80">
                  {row.label}
                </dt>
                <dd className="mt-2 text-navy-900">{row.value}</dd>
              </div>
            ))}
          </dl>

          <Reveal delay={160}>
            <div className="mt-14">
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
