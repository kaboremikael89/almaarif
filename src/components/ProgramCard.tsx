import Link from 'next/link'
import { ArrowUpRight, Clock } from './Icons'
import { getDomain } from '@/content/domains'
import type { Program } from '@/content/programs'
import { href, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

type Props = { program: Program; lang: Locale; dict: Dictionary }

export default function ProgramCard({ program, lang, dict }: Props) {
  const domain = getDomain(program.domain)

  return (
    <Link
      href={href(lang, `/formations/${program.slug}`)}
      className="card group flex h-full flex-col p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="index">
          {program.reference} / {domain.short[lang]}
        </span>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-gold-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <h3 className="mt-6 text-lg text-navy-900 transition-colors duration-300 group-hover:text-gold-700">
        {program.title[lang]}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{program.summary[lang]}</p>

      <div className="mt-7 flex items-center justify-between border-t border-navy-900/10 pt-5">
        <span className="label flex items-center gap-2 text-navy-700">
          <Clock className="h-3.5 w-3.5 text-gold-600" />
          {dict.common.durationValue}
        </span>
        <span className="label text-gold-700">{dict.common.levels[program.level]}</span>
      </div>
    </Link>
  )
}
