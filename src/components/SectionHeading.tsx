import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { SectionLabel } from './Primitives'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'left' | 'center'
  light?: boolean
  children?: ReactNode
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  light = false,
  children,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow &&
        (align === 'center' ? (
          <Reveal>
            <p className={`label ${light ? 'text-gold-400' : 'text-gold-600'}`}>/ {eyebrow} /</p>
          </Reveal>
        ) : (
          <Reveal>
            <SectionLabel light={light} rule={false}>
              {eyebrow}
            </SectionLabel>
          </Reveal>
        ))}

      <Reveal delay={80}>
        <h2
          className={`mt-6 text-[clamp(1.75rem,3.8vw,3rem)] ${
            light ? 'text-ivory-50' : 'text-navy-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {lead && (
        <Reveal delay={160}>
          <p
            className={`mt-6 text-sm leading-relaxed ${light ? 'text-ivory-100/70' : 'text-muted'}`}
          >
            {lead}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  )
}
