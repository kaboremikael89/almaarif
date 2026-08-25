export const locales = ['fr', 'en', 'ar'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'fr'

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  ar: 'العربية',
}

/** Étiquette courte du sélecteur de langue */
export const localeShort: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  ar: 'ع',
}

export const localeHtmlLang: Record<Locale, string> = {
  fr: 'fr-MA',
  en: 'en',
  ar: 'ar-MA',
}

export const localeDir: Record<Locale, 'ltr' | 'rtl'> = {
  fr: 'ltr',
  en: 'ltr',
  ar: 'rtl',
}

export const isRtl = (lang: Locale) => localeDir[lang] === 'rtl'

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Construit une URL interne préfixée par la langue : href('fr', '/contact') -> '/fr/contact' */
export function href(lang: Locale, path = '/'): string {
  const clean = path === '/' ? '' : path.replace(/\/+$/, '')
  return `/${lang}${clean}`
}

/** Champ multilingue : { fr: '...', en: '...', ar: '...' } */
export type I18nText = Record<Locale, string>
export type I18nList = Record<Locale, string[]>

export const t = (field: I18nText, lang: Locale) => field[lang]
