import type { Locale } from '@/lib/i18n'
import { fr, type Dictionary } from './dictionary.fr'
import { en } from './dictionary.en'
import { ar } from './dictionary.ar'

export const dictionaries: Record<Locale, Dictionary> = { fr, en, ar }

export const getDictionary = (lang: Locale): Dictionary => dictionaries[lang]
export type { Dictionary }
