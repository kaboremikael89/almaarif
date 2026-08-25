import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { Diamond } from './Icons'

/** Libellé de section : carré plein, texte en capitales espacées, filet horizontal */
export function SectionLabel({
  children,
  light = false,
  rule = true,
  className = '',
}: {
  children: ReactNode
  light?: boolean
  rule?: boolean
  className?: string
}) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <span className={`label label-square ${light ? 'text-gold-400' : 'text-gold-600'}`}>
        {children}
      </span>
      {rule && (
        <span
          className={`h-px flex-1 ${light ? 'bg-ivory-100/20' : 'bg-navy-900/15'}`}
          aria-hidden="true"
        />
      )}
    </div>
  )
}

/** Titre de section sur deux lignes, la seconde en doré */
export function SplitTitle({
  top,
  accent,
  align = 'center',
  light = false,
  className = '',
}: {
  top: string
  accent: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}) {
  return (
    <h2
      className={`text-[clamp(1.75rem,4.4vw,3.5rem)] ${
        align === 'center' ? 'text-center' : ''
      } ${light ? 'text-ivory-50' : 'text-navy-900'} ${className}`}
    >
      {top}
      <br />
      <span className="text-gold-600">{accent}</span>
    </h2>
  )
}

/** Ligne de chiffres séparés par des filets verticaux */
export function StatRow({
  stats,
  light = false,
  className = '',
}: {
  stats: readonly { value: string; label: string }[]
  light?: boolean
  className?: string
}) {
  // Classes écrites en toutes lettres : Tailwind ne génère pas les noms construits
  const columns: Record<number, string> = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
  }

  return (
    <dl
      className={`grid grid-cols-2 border-t ${columns[stats.length] ?? 'sm:grid-cols-3'} ${
        light ? 'border-ivory-100/15' : 'border-navy-900/12'
      } ${className}`}
    >
      {stats.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={i * 90}
          className={`px-5 py-7 first:ps-0 ${
            light ? 'border-ivory-100/15' : 'border-navy-900/12'
          } ${i > 0 ? 'border-s' : ''}`}
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span
              className={`block text-[2rem] font-extralight leading-none ${
                light ? 'text-ivory-50' : 'text-navy-900'
              }`}
            >
              {stat.value}
            </span>
            <span
              className={`label mt-3 block ${light ? 'text-ivory-100/50' : 'text-muted/80'}`}
            >
              {stat.label}
            </span>
          </dd>
        </Reveal>
      ))}
    </dl>
  )
}

/** Bandeau de mots-clés séparés par des losanges */
export function KeywordRibbon({ items }: { items: string[] }) {
  return (
    <div className="border-y border-navy-900/10 bg-ivory-100">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-8">
            {i > 0 && <Diamond className="h-1.5 w-1.5 text-gold-500" />}
            <span className="label text-navy-700">{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
