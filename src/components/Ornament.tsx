type OrnamentProps = {
  className?: string
  /** Épaisseur du trait */
  strokeWidth?: number
}

const STAR_OUTER =
  'M90.7,66.8 L73.8,73.8 L66.8,90.7 L50,83.7 L33.2,90.7 L26.2,73.8 L9.3,66.8 L16.3,50 L9.3,33.2 L26.2,26.2 L33.2,9.3 L50,16.3 L66.8,9.3 L73.8,26.2 L90.7,33.2 L83.7,50 Z'
const STAR_INNER =
  'M84.1,64.1 L70,70 L64.1,84.1 L50,78.3 L35.9,84.1 L30,70 L15.9,64.1 L21.7,50 L15.9,35.9 L30,30 L35.9,15.9 L50,21.7 L64.1,15.9 L70,30 L84.1,35.9 L78.3,50 Z'

/**
 * Étoile à huit branches à double filet, reprise de la couronne du logo
 * Al Maarif Expertise.
 */
export function StarFrame({ className = '', strokeWidth = 2 }: OrnamentProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" role="presentation">
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="miter">
        <path d={STAR_OUTER} />
        <path d={STAR_INNER} strokeWidth={strokeWidth * 0.72} />
      </g>
    </svg>
  )
}

/**
 * Rosette à huit pétales avec étoile centrale, reprise du médaillon du logo.
 * Sert de marque secondaire, de favicon et de motif de fond.
 */
export function Rosette({ className = '', strokeWidth = 2.4 }: OrnamentProps) {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45)

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" role="presentation">
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round">
        {petals.map((angle) => (
          <path
            key={angle}
            d="M50,50 C61,39 61,23 50,9 C39,23 39,39 50,50 Z"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="9.5" />
      </g>
      <path
        d="M50,36 L53.5,46.5 L64,50 L53.5,53.5 L50,64 L46.5,53.5 L36,50 L46.5,46.5 Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Séparateur : filet or, rosette, filet or */
export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 text-gold-500 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-current opacity-30" />
      <Rosette className="h-4 w-4 opacity-70" strokeWidth={3.2} />
      <span className="h-px flex-1 bg-current opacity-30" />
    </div>
  )
}
