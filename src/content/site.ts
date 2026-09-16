import type { I18nText } from '@/lib/i18n'

/**
 * Informations légales et de contact d'Al Maarif Expertise.
 * Sources : extrait du registre analytique n° 746831 délivré par le tribunal de
 * commerce de Casablanca le 16/09/2026, bulletin de notification de
 * l'identifiant fiscal du 14/09/2026, et contrat de domiciliation
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
    ar: 'تكوين · استشارة · أداء',
  } satisfies I18nText,
  baseline: {
    fr: "L'expertise au service des dirigeants et des institutions",
    en: 'Expertise at the service of leaders and institutions',
    ar: 'الخبرة في خدمة المسؤولين والمؤسسات',
  } satisfies I18nText,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://almaarifexpertise.com',
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || '',

  address: {
    street: {
      fr: '12, rue Saria Ben Zounaim, étage 3, appt 3, Palmier',
      en: '12 rue Saria Ben Zounaim, 3rd floor, apt 3, Palmier',
      ar: '12، زنقة ساريا بن زنيم، الطابق الثالث، الشقة 3، النخيل',
    } satisfies I18nText,
    city: { fr: 'Casablanca', en: 'Casablanca', ar: 'الدار البيضاء' } satisfies I18nText,
    postalCode: '20340',
    country: { fr: 'Maroc', en: 'Morocco', ar: 'المغرب' } satisfies I18nText,
    countryCode: 'MA',
  },

  contact: {
    // TODO : remplacer par la ligne définitive de la société
    phone: '+212 667 46 19 10',
    phoneHref: '+212667461910',
    whatsapp: '212667461910',
    email: 'contact@almaarifexpertise.com',
    trainingEmail: 'formations@almaarifexpertise.com',
  },

  legal: {
    rc: '746831', // registre de commerce, tribunal de commerce de Casablanca
    taxId: '73367480', // identifiant fiscal
    professionalTaxId: '34773778', // identifiant de la taxe professionnelle
    // Identifiant commun de l'entreprise : connu, mais non affiché sur le site
    // à la demande du client, qui a retenu le registre de commerce et
    // l'identifiant fiscal comme références publiques.
    ice: '004026098000053',
    capital: '100 000',
    currency: 'MAD',
    activity: {
      fr: 'Conseil de gestion et formation professionnelle continue',
      en: 'Management consulting and professional training',
      ar: 'الاستشارة في التدبير والتكوين المهني المستمر',
    } satisfies I18nText,
    court: {
      fr: 'Tribunal de commerce de Casablanca',
      en: 'Casablanca Commercial Court',
      ar: 'المحكمة التجارية بالدار البيضاء',
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
