import type { Metadata } from 'next'

import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { getDictionary } from '@/content/dictionary'
import { isLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)
  return {
    title: dict.legal.privacy.title,
    alternates: { canonical: `/${lang}/confidentialite/` },
    robots: { index: false, follow: true },
  }
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang = (isLocale(raw) ? raw : 'fr') as Locale
  const dict = getDictionary(lang)

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={dict.footer.legalTitle}
        title={dict.legal.privacy.title}
        crumbs={[{ label: dict.legal.privacy.title }]}
        breadcrumbLabel={dict.common.breadcrumb}
        homeLabel={dict.nav.home}
      />

      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="container-page max-w-3xl">
          {dict.legal.privacy.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 60}>
              <article className="border-b border-navy-900/10 py-9 first:pt-0">
                <h2 className="text-2xl font-light text-navy-900">{section.title}</h2>
                <p className="mt-4 leading-relaxed text-muted">{section.body}</p>
              </article>
            </Reveal>
          ))}
          <p className="mt-10 text-xs uppercase tracking-[0.16em] text-muted/70">
            {dict.legal.privacy.updated} : 2026
          </p>
        </div>
      </section>
    </>
  )
}
