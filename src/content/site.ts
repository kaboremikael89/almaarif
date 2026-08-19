import type { I18nText } from '@/lib/i18n'

/**
 * Informations légales et de contact d'Al Maarif Expertise.
 * Source : certificat négatif OMPIC n° 3281360 et contrat de domiciliation
 * (Centre d'Affaires Meryama SARL, Casablanca).
 *
 * ⚠️ Les champs marqués TODO doivent être complétés dès leur obtention
 * (numéro de registre de commerce, téléphones et e-mails définitifs, réseaux sociaux).
 */
export const site = {
  name: 'Al Maarif Expertise',
  legalName: 'AL MAARIF EXPERTISE',
  tagline: {
    fr: 'Formation · Conseil · Performance',
    en: 'Training · Advisory · Performance',
  } satisfies I18nText,
  baseline: {
    fr: "L'expertise au service des dirigeants et des institutions",
    en: 'Expertise at the service of leaders and institutions',
  } satisfies I18nText,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.almaarif-expertise.com',
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || '',

  address: {
    street: '12, rue Saria Ben Zounaim, étage 3, appt 3 — Palmier',
    city: 'Casablanca',
    postalCode: '20340',
    country: { fr: 'Maroc', en: 'Morocco' } satisfies I18nText,
    countryCode: 'MA',
  },

  contact: {
    // TODO : remplacer par la ligne définitive de la société
    phone: '+212 667 46 19 10',
    phoneHref: '+212667461910',
    whatsapp: '212667461910',
    email: 'contact@almaarif-expertise.com',
    trainingEmail: 'formations@almaarif-expertise.com',
  },

  legal: {
    ice: '004026098000053',
    rc: '', // TODO : n° de registre de commerce (tribunal de commerce de Casablanca)
    ompicCertificate: '3281360',
    activity: {
      fr: 'Conseil de gestion — formation professionnelle continue',
      en: 'Management consulting — professional training',
    } satisfies I18nText,
    manager: 'Ousseni Soulama',
    managerRole: { fr: 'Gérant', en: 'Managing Director' } satisfies I18nText,
    court: {
      fr: 'Tribunal de commerce de Casablanca',
      en: 'Casablanca Commercial Court',
    } satisfies I18nText,
  },

  social: {
    linkedin: '', // TODO
    facebook: '', // TODO
  },

  /** Villes d'accueil des sessions */
  cities: ['Casablanca', 'Rabat', 'Marrakech', 'Tanger', 'Agadir'],
} as const

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`
