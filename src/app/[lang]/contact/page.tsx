import type { Metadata } from 'next'

import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { Rosette } from '@/components/Ornament'
import { Mail, Phone, Pin, Clock, Whatsapp } from '@/components/Icons'
import { getDictionary } from '@/content/dictionary'
import { site, whatsappLink } from '@/content/site'
import { isLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dict = getDictionary(lang)
  return {
    title: dict.contact.hero.title,
    description: dict.contact.hero.lead,
    alternates: { canonical: `/${lang}/contact/` },
  }
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang = (isLocale(raw) ? raw : 'fr') as Locale
  const dict = getDictionary(lang)

  const details = [
    {
      icon: Pin,
      label: dict.contact.addressLabel,
      value: `${site.address.street}, ${site.address.city}, ${site.address.country[lang]}`,
      href: 'https://www.google.com/maps/search/?api=1&query=12+Rue+Saria+Ben+Zounaim+Palmier+Casablanca',
    },
    { icon: Phone, label: dict.contact.phoneLabel, value: site.contact.phone, href: `tel:${site.contact.phoneHref}` },
    { icon: Mail, label: dict.contact.emailLabel, value: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: Clock, label: dict.contact.hoursLabel, value: dict.contact.hoursValue },
  ]

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={dict.contact.hero.eyebrow}
        title={dict.contact.hero.title}
        lead={dict.contact.hero.lead}
        crumbs={[{ label: dict.nav.contact }]}
        breadcrumbLabel={dict.common.breadcrumb}
        homeLabel={dict.nav.home}
      />

      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Coordonnées */}
          <Reveal>
            <div className="relative overflow-hidden bg-navy-950 p-10 text-ivory-50 lg:sticky lg:top-28">
              <div className="zellige-bg pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
              <Rosette
                className="pointer-events-none absolute -bottom-14 -right-14 h-48 w-48 text-gold-500 opacity-[0.12]"
                strokeWidth={0.9}
              />
              <div className="relative">
                <h2 className="font-display text-2xl">{dict.contact.infoTitle}</h2>
                <div className="rule-gold mt-6 mb-8" />

                <dl className="space-y-7">
                  {details.map(({ icon: Icon, label, value, href: link }) => (
                    <div key={label} className="flex gap-4">
                      <Icon className="mt-1 h-4 w-4 shrink-0 text-gold-400" />
                      <div>
                        <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-ivory-100/45">
                          {label}
                        </dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-ivory-100/90">
                          {link ? (
                            <a
                              href={link}
                              className="link-underline"
                              {...(link.startsWith('http')
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : {})}
                            >
                              {value}
                            </a>
                          ) : (
                            value
                          )}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <a
                  href={whatsappLink(dict.contact.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light mt-10 w-full"
                >
                  <Whatsapp />
                  {dict.contact.whatsapp}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={140}>
            <ContactForm lang={lang} dict={dict} />
          </Reveal>
        </div>
      </section>

      <section aria-label={dict.contact.addressLabel} className="border-t border-navy-900/10">
        <iframe
          title={`${site.name}, ${site.address.city}`}
          src="https://www.openstreetmap.org/export/embed.html?bbox=-7.6425%2C33.5735%2C-7.6125%2C33.5935&layer=mapnik&marker=33.5835%2C-7.6275"
          className="h-[26rem] w-full border-0 grayscale-[0.35]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
