import type { Metadata } from 'next'

import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import ProgramCatalogue from '@/components/ProgramCatalogue'
import { getDictionary } from '@/content/dictionary'
import { programs } from '@/content/programs'
import { site } from '@/content/site'
import { isLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)
  return {
    title: dict.programs.hero.title,
    description: dict.programs.hero.lead,
    alternates: { canonical: `/${lang}/formations/` },
  }
}

export default async function ProgramsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang = (isLocale(raw) ? raw : 'fr') as Locale
  const dict = getDictionary(lang)

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: dict.programs.hero.title,
    itemListElement: programs.map((program, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: program.title[lang],
      url: `${site.url}/${lang}/formations/${program.slug}/`,
    })),
  }

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={dict.programs.hero.eyebrow}
        title={dict.programs.hero.title}
        lead={dict.programs.hero.lead}
        crumbs={[{ label: dict.nav.programs }]}
        breadcrumbLabel={dict.common.breadcrumb}
        homeLabel={dict.nav.home}
      />

      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="container-page">
          <ProgramCatalogue programs={programs} lang={lang} dict={dict} />

          <Reveal>
            <p className="mt-16 max-w-3xl border-s-2 border-gold-500 ps-6 text-sm leading-relaxed text-muted">
              {dict.programs.note}
            </p>
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </>
  )
}
