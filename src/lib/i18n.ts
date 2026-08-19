export const locales = ['fr', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'fr'

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
}

export const localeHtmlLang: Record<Locale, string> = {
  fr: 'fr-MA',
  en: 'en',
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Construit une URL interne préfixée par la langue : href('fr', '/contact') -> '/fr/contact' */
export function href(lang: Locale, path = '/'): string {
  const clean = path === '/' ? '' : path.replace(/\/+$/, '')
  return `/${lang}${clean}`
}

/** Champ bilingue : { fr: '...', en: '...' } */
export type I18nText = Record<Locale, string>
export type I18nList = Record<Locale, string[]>

export const t = (field: I18nText, lang: Locale) => field[lang]
