import Link from 'next/link'
import type { Metadata } from 'next'

import Reveal from '@/components/Reveal'
import ProgramCard from '@/components/ProgramCard'
import SplitImage from '@/components/SplitImage'
import { PortraitCard, WideCard } from '@/components/PhotoCard'
import { SectionLabel, SplitTitle, StatRow, KeywordRibbon } from '@/components/Primitives'
import { StarFrame } from '@/components/Ornament'
import { Rosette } from '@/components/Ornament'
import { ArrowRight, ArrowUpRight } from '@/components/Icons'
import { getDictionary } from '@/content/dictionary'
import { domains } from '@/content/domains'
import { featuredPrograms } from '@/content/programs'
import { site } from '@/content/site'
import { href, isLocale, type Locale } from '@/lib/i18n'

// Une seule photo large, répartie en trois tranches sur les cartes de la zone haute
const formatsImage = '/images/formats.jpg'
const moroccoImages = ['/images/maroc-1.jpg', '/images/maroc-2.jpg', '/images/maroc-3.jpg']

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

  // Les numéros d'immatriculation ne s'affichent qu'une fois renseignés
  const legalItems = [
    { label: home.legalStrip.formLabel, value: home.legalStrip.formValue },
    { label: home.legalStrip.rccmLabel, value: site.legal.rccm },
    { label: home.legalStrip.ifuLabel, value: site.legal.ifu },
    { label: home.legalStrip.courtLabel, value: home.legalStrip.courtValue },
  ].filter((item) => item.value)

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <section className="relative overflow-hidden border-b border-navy-900/10 bg-ivory-50 pt-[calc(var(--header-h)+var(--bar-h)+3rem)]">
        <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

        <div className="container-page relative pb-16 lg:pb-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <Reveal className="lg:max-w-2xl lg:flex-1">
              <SectionLabel>{home.hero.eyebrow}</SectionLabel>
            </Reveal>
            <Reveal delay={120} className="hidden lg:block">
              <p className="max-w-xs text-sm leading-relaxed text-muted lg:text-end">
                {home.hero.aside}
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_0.92fr] lg:gap-12">
            {/* Colonne texte */}
            <div>
              <Reveal delay={80}>
                <h1 className="max-w-3xl text-[clamp(2.1rem,5.6vw,4.6rem)] text-navy-900">
                  {home.hero.title}
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-10 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center bg-gold-500">
                    <Rosette className="h-6 w-6 text-navy-950" strokeWidth={2.4} />
                  </span>
                  <span className="label text-gold-700">{site.tagline[lang]}</span>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <p className="mt-10 max-w-xl text-base leading-relaxed text-muted">
                  {home.hero.lead}
                </p>
              </Reveal>

              <Reveal delay={360}>
                <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
                  <Link href={href(lang, '/formations')} className="btn btn-dark">
                    {home.hero.ctaPrimary}
                    <ArrowRight />
                  </Link>
                  <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
                    {home.formats.items.slice(0, 3).map((item) => (
                      <li key={item.tag} className="label label-square text-navy-700">
                        {item.tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <StatRow stats={home.stats} className="mt-14" />
            </div>

            {/* Colonne photos */}
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {home.formats.items.slice(0, 3).map((item, i) => (
                <PortraitCard
                  key={item.tag}
                  src={formatsImage}
                  slice={i as 0 | 1 | 2}
                  index={`0${i + 1} / ${item.tag}`}
                  title={item.title}
                  offset={i === 1 ? 'up' : 'down'}
                  delay={i * 140}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- ÉTAPES NUMÉROTÉES */}
      <section className="bg-ivory-50 py-16 lg:py-20">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {home.process.steps.slice(0, 3).map((step, i) => (
              <Reveal key={step.title} delay={i * 110}>
                <article className="relative flex h-full flex-col bg-ivory-100 p-8 pe-14">
                  <p className="index">
                    {String(i + 1).padStart(2, '0')} / {step.tag}
                  </p>
                  <h3 className="mt-5 text-xl text-navy-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
                  <span className="absolute end-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-gold-500 text-navy-950">
                    <ArrowRight className="h-4 w-4 arrow-flip" />
                  </span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={260}>
            <Link
              href={href(lang, '/approche')}
              className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-navy-900 transition-colors hover:text-gold-700"
            >
              {dict.nav.approach}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------ BANDEAU */}
      <KeywordRibbon items={domains.map((domain) => domain.short[lang])} />

      {/* ------------------------------------------------------------ DOMAINES */}
      <section className="bg-ivory-50 py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <p className="label text-center text-gold-600">/ {home.domains.eyebrow} /</p>
          </Reveal>
          <Reveal delay={100}>
            <SplitTitle top={home.domains.titleTop} accent={home.domains.titleAccent} className="mt-6" />
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-7 max-w-2xl text-center text-sm leading-relaxed text-muted">
              {home.domains.lead}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain, i) => (
              <Reveal key={domain.slug} delay={(i % 3) * 90}>
                <Link
                  href={`${href(lang, '/expertise')}#${domain.slug}`}
                  className="group flex h-full flex-col bg-ivory-50 p-9 transition-colors duration-500 hover:bg-white"
                >
                  <div className="flex items-start justify-between">
                    <span className="index">{domain.number} / {domain.short[lang]}</span>
                    <ArrowUpRight className="h-4 w-4 text-gold-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-7 text-xl text-navy-900">{domain.title[lang]}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {domain.description[lang]}
                  </p>
                  <span className="mt-8 h-px w-10 bg-gold-500 transition-all duration-500 group-hover:w-20" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ PUBLICS */}
      <section className="border-y border-navy-900/10 bg-ivory-100 py-24 lg:py-32">
        <div className="container-page">
          <Reveal>
            <p className="label text-center text-gold-600">/ {home.audiences.eyebrow} /</p>
          </Reveal>
          <Reveal delay={100}>
            <SplitTitle
              top={home.audiences.titleTop}
              accent={home.audiences.titleAccent}
              className="mt-6"
            />
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {home.audiences.items.map((item, i) => {
              const dark = i === 1
              return (
                <Reveal key={item.index} delay={i * 140}>
                  <article
                    className={`relative h-full overflow-hidden p-10 lg:p-12 ${
                      dark ? 'bg-navy-950 text-ivory-50' : 'grid-texture border border-navy-900/12 bg-ivory-50'
                    }`}
                  >
                    <div className="relative flex items-center justify-between">
                      <span className={`index ${dark ? 'text-gold-400' : ''}`}>{item.index}</span>
                      <span className={`label ${dark ? 'text-ivory-100/50' : 'text-muted/70'}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h3
                      className={`relative mt-10 text-2xl lg:text-3xl ${
                        dark ? 'text-ivory-50' : 'text-navy-900'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`relative mt-6 max-w-xl text-sm leading-relaxed ${
                        dark ? 'text-ivory-100/70' : 'text-muted'
                      }`}
                    >
                      {item.body}
                    </p>

                    <ul className="relative mt-10 grid gap-4 sm:grid-cols-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className={`flex items-start gap-3 text-sm ${
                            dark ? 'text-ivory-100/85' : 'text-navy-800'
                          }`}
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-500"
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- BANDE PHOTO */}
      <section className="bg-ivory-50 pt-16 lg:pt-20">
        <div className="container-page">
          <SplitImage src="/images/salle-de-formation.jpg" alt={home.photos.roomAlt} />
        </div>
      </section>

      {/* ------------------------------------------------------ POURQUOI LE MAROC */}
      <section className="bg-ivory-50 py-24 lg:py-32">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Reveal>
                <SectionLabel>{home.morocco.eyebrow}</SectionLabel>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-7 text-[clamp(1.75rem,3.8vw,3rem)] text-navy-900">
                  {home.morocco.title}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <p className="max-w-xl text-sm leading-relaxed text-muted">{home.morocco.lead}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {home.morocco.items.slice(0, 3).map((item, i) => (
              <WideCard
                key={item.title}
                src={moroccoImages[i]}
                index={`0${i + 1}`}
                title={item.title}
                body={item.body}
                delay={i * 120}
              />
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 border-t border-navy-900/10 pt-8">
              <p className="max-w-3xl text-sm leading-relaxed text-muted">
                {home.morocco.items[3].title}. {home.morocco.items[3].body}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------- PROGRAMMES */}
      <section className="border-t border-navy-900/10 bg-ivory-100 py-24 lg:py-32">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <Reveal>
                <SectionLabel>{home.featured.eyebrow}</SectionLabel>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-7 max-w-2xl text-[clamp(1.75rem,3.8vw,3rem)] text-navy-900">
                  {home.featured.title}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <Link href={href(lang, '/formations')} className="btn btn-outline">
                {dict.common.allPrograms}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredPrograms.slice(0, 4).map((program, i) => (
              <Reveal key={program.slug} delay={(i % 4) * 90} className="h-full">
                <ProgramCard program={program} lang={lang} dict={dict} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- CADRE LÉGAL */}
      <section className="border-t border-navy-900/10 bg-ivory-50 py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Reveal>
              <SectionLabel rule={false}>{home.legalStrip.eyebrow}</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <StarFrame className="mt-8 h-12 w-12 text-gold-500" strokeWidth={2.2} />
            </Reveal>
          </div>

          <div>
            <Reveal delay={80}>
              <p className="max-w-3xl text-sm leading-relaxed text-muted">{home.legalStrip.body}</p>
            </Reveal>

            <dl className="mt-10 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
              {legalItems.map((item, i) => (
                <Reveal key={item.label} delay={i * 80} className="bg-ivory-50 px-6 py-5">
                  <dt className="label text-muted/75">{item.label}</dt>
                  <dd className="mt-2 text-sm text-navy-900">{item.value}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- CTA */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-ivory-50 lg:py-24">
        <div className="zellige-bg pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
        <div className="container-page relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-[clamp(1.6rem,3.2vw,2.75rem)] text-ivory-50">{home.cta.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-sm leading-relaxed text-ivory-100/70">{home.cta.body}</p>
            </Reveal>
          </div>
          <Reveal delay={200}>
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
