import Link from 'next/link'
import Reveal from './Reveal'
import { ArrowUpRight } from './Icons'

type PortraitCardProps = {
  src: string
  index: string
  title: string
  body?: string
  /** Décalage vertical, pour l'effet d'escalier de la maquette */
  offset?: 'up' | 'down' | 'none'
  cta?: { href: string; label: string }
  delay?: number
}

/** Carte photo verticale, texte posé sur un dégradé sombre */
export function PortraitCard({
  src,
  index,
  title,
  body,
  offset = 'none',
  cta,
  delay = 0,
}: PortraitCardProps) {
  // La carte centrale monte et s'allonge, les deux autres descendent
  const shift =
    offset === 'up'
      ? 'sm:-translate-y-8 h-[19rem] sm:h-[26rem] lg:h-[34rem]'
      : offset === 'down'
        ? 'sm:translate-y-8 h-[17rem] sm:h-[23rem] lg:h-[30rem]'
        : 'h-[17rem] sm:h-[23rem] lg:h-[30rem]'

  return (
    <Reveal delay={delay} className={`relative overflow-hidden ${shift}`}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/45 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="index text-gold-400">{index}</p>
        <h3 className="mt-2 text-base leading-snug text-ivory-50">{title}</h3>
        {body && <p className="mt-2 text-xs leading-relaxed text-ivory-100/70">{body}</p>}
        {cta && (
          <Link href={cta.href} className="btn btn-outline-light mt-5 w-full !py-2.5 !text-[0.625rem]">
            {cta.label}
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        )}
      </div>
    </Reveal>
  )
}

type WideCardProps = {
  src: string
  index: string
  title: string
  body: string
  delay?: number
}

/** Carte photo horizontale, utilisée en rangée de trois */
export function WideCard({ src, index, title, body, delay = 0 }: WideCardProps) {
  return (
    <Reveal delay={delay} className="group relative aspect-4/3 overflow-hidden">
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/40 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <p className="index text-gold-400">{index}</p>
        <h3 className="mt-2 text-xl text-ivory-50">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ivory-100/75">{body}</p>
      </div>
    </Reveal>
  )
}
