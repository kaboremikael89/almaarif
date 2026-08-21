'use client'

import { useMemo, useState } from 'react'
import ProgramCard from './ProgramCard'
import { domains, type DomainSlug } from '@/content/domains'
import type { Program } from '@/content/programs'
import type { Dictionary } from '@/content/dictionary'
import type { Locale } from '@/lib/i18n'

type Props = { programs: Program[]; lang: Locale; dict: Dictionary }

export default function ProgramCatalogue({ programs, lang, dict }: Props) {
  const [active, setActive] = useState<DomainSlug | 'all'>('all')

  const filtered = useMemo(
    () => (active === 'all' ? programs : programs.filter((p) => p.domain === active)),
    [active, programs],
  )

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-navy-900/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label={dict.programs.filterLabel}>
          <button
            type="button"
            onClick={() => setActive('all')}
            aria-pressed={active === 'all'}
            className={`border px-4 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
              active === 'all'
                ? 'border-navy-900 bg-navy-900 text-ivory-50'
                : 'border-navy-900/15 text-navy-700 hover:border-gold-500 hover:text-gold-700'
            }`}
          >
            {dict.programs.filterAll}
          </button>
          {domains.map((domain) => (
            <button
              key={domain.slug}
              type="button"
              onClick={() => setActive(domain.slug)}
              aria-pressed={active === domain.slug}
              className={`border px-4 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                active === domain.slug
                  ? 'border-navy-900 bg-navy-900 text-ivory-50'
                  : 'border-navy-900/15 text-navy-700 hover:border-gold-500 hover:text-gold-700'
              }`}
            >
              {domain.short[lang]}
            </button>
          ))}
        </div>

        <p aria-live="polite" className="text-sm text-muted">
          <span className="text-2xl font-light text-navy-900">{filtered.length}</span>{' '}
          {filtered.length > 1 ? dict.programs.resultsMany : dict.programs.resultsOne}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-muted">{dict.programs.empty}</p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((program) => (
            <ProgramCard key={program.slug} program={program} lang={lang} dict={dict} />
          ))}
        </div>
      )}
    </div>
  )
}
