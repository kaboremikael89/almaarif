import Link from 'next/link'
import { ArrowRight, Clock } from './Icons'
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
      className="group relative flex h-full flex-col border border-navy-900/10 bg-white p-8 transition-all duration-500 hover:border-gold-500/60 hover:shadow-[0_24px_60px_-40px_rgba(8,33,64,0.55)]"
    >
      <span
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden="true"
      />

      <div className="flex items-center justify-between gap-4">
        <span className="eyebrow text-navy-600">{domain.short[lang]}</span>
        <span className="font-sans text-[0.6875rem] tracking-[0.16em] text-muted/70">
          {dict.common.reference} {program.reference}
        </span>
      </div>

      <h3 className="mt-5 text-2xl text-navy-900 transition-colors duration-300 group-hover:text-gold-700">
        {program.title[lang]}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{program.summary[lang]}</p>

      <div className="mt-8 flex items-center justify-between border-t border-navy-900/10 pt-5">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-navy-700">
          <Clock className="h-3.5 w-3.5 text-gold-600" />
          {program.durationDays} {program.durationDays > 1 ? dict.common.days : dict.common.day}
        </span>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
          {dict.common.readMore}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
