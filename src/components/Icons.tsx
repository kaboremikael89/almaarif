type IconProps = { className?: string }

export function ArrowRight({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

export function ArrowUpRight({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 17 17 7m0 0H8m9 0v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

export function Diamond({ className = 'h-2 w-2' }: IconProps) {
  return (
    <svg viewBox="0 0 10 10" className={className} aria-hidden="true">
      <rect x="1.5" y="1.5" width="7" height="7" transform="rotate(45 5 5)" fill="currentColor" />
    </svg>
  )
}

export function Clock({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 7v5.2l3.2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function Pin({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function Phone({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.2 3.5h3l1.5 4-2 1.4a12.5 12.5 0 0 0 6.4 6.4l1.4-2 4 1.5v3c0 1-.8 1.8-1.8 1.7C11 19 5 13 4.5 5.3A1.7 1.7 0 0 1 6.2 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Mail({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" stroke="currentColor" strokeWidth="1.4" />
      <path d="m3 6.5 9 6 9-6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function Whatsapp({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 11.7a8 8 0 0 1-11.9 7L4 20l1.4-4A8 8 0 1 1 20 11.7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.4c.3-.1.6 0 .8.3l.7 1.2c.1.3.1.6-.1.8l-.4.4c.5.9 1.2 1.6 2.1 2.1l.4-.4c.2-.2.5-.2.8-.1l1.2.7c.3.2.4.5.3.8-.2.7-.9 1.2-1.7 1.1-2.4-.3-4.4-2.3-4.7-4.7-.1-.8.4-1.5 1.1-1.7Z"
        fill="currentColor"
      />
    </svg>
  )
}
