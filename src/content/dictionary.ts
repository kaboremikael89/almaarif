import type { Locale } from '@/lib/i18n'
import { fr, type Dictionary } from './dictionary.fr'
import { en } from './dictionary.en'

export const dictionaries: Record<Locale, Dictionary> = { fr, en }

export const getDictionary = (lang: Locale): Dictionary => dictionaries[lang]
export type { Dictionary }
