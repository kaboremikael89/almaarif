type OrnamentProps = {
  className?: string
  /** Épaisseur du trait */
  strokeWidth?: number
}

/**
 * Rosette à huit branches inspirée du motif du logo Al Maarif.
 * Utilisée comme marque, séparateur et filigrane décoratif.
 */
export function Rosette({ className = '', strokeWidth = 1.4 }: OrnamentProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" role="presentation">
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round">
        <rect x="18" y="18" width="64" height="64" />
        <rect x="18" y="18" width="64" height="64" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="19" />
        <path d="M50 12 L58 30 L50 50 L42 30 Z" />
        <path d="M50 88 L58 70 L50 50 L42 70 Z" />
        <path d="M12 50 L30 42 L50 50 L30 58 Z" />
        <path d="M88 50 L70 42 L50 50 L70 58 Z" />
      </g>
    </svg>
  )
}

/** Séparateur : filet or – rosette – filet or */
export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 text-gold-500 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-current opacity-30" />
      <Rosette className="h-4 w-4 opacity-70" strokeWidth={2.4} />
      <span className="h-px flex-1 bg-current opacity-30" />
    </div>
  )
}
