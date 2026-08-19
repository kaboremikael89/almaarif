'use client'

import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Retard d'apparition en millisecondes (effet d'escalier) */
  delay?: number
  as?: ElementType
  className?: string
}

/** Révèle son contenu au défilement, sans dépendance externe. */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  )
}
