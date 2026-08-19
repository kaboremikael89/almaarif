import type { ReactNode } from 'react'
import Reveal from './Reveal'

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
    <div
      className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow ${align === 'center' ? '' : 'eyebrow-line'} ${light ? 'text-gold-400' : ''}`}>
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`mt-5 text-[clamp(2rem,4vw,3.25rem)] ${
            light ? 'text-ivory-50' : 'text-navy-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p className={`mt-6 text-lg leading-relaxed ${light ? 'text-ivory-100/70' : 'text-muted'}`}>
            {lead}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  )
}
