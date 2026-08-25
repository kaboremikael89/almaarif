import Link from 'next/link'
import Reveal from './Reveal'
import { ArrowUpRight } from './Icons'

type PortraitCardProps = {
  src: string
  /**
   * Tranche de l'image à afficher, de 0 à 2. Renseignée sur les trois cartes,
   * une seule photo large se répartit entre elles et recompose la scène.
   */
  slice?: 0 | 1 | 2
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
  slice,
  index,
  title,
  body,
  offset = 'none',
  cta,
  delay = 0,
}: PortraitCardProps) {
  // Hauteurs égales quand une seule photo est répartie entre les cartes,
  // sinon la scène ne se recompose plus. Le décalage vertical reste.
  const sliced = slice !== undefined
  const height = sliced
    ? 'h-[18rem] sm:h-[25rem] lg:h-[32rem]'
    : offset === 'up'
      ? 'h-[19rem] sm:h-[26rem] lg:h-[34rem]'
      : 'h-[17rem] sm:h-[23rem] lg:h-[30rem]'
  const shift =
    offset === 'up'
      ? `sm:-translate-y-8 ${height}`
      : offset === 'down'
        ? `sm:translate-y-8 ${height}`
        : height

  return (
    <Reveal delay={delay} className={`relative overflow-hidden ${shift}`}>
      {sliced ? (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute top-0 h-full w-[300%] max-w-none object-cover"
          style={{ left: `${(slice as number) * -100}%` }}
        />
      ) : (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div
        className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/45 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5">
        <p className="index break-words text-[0.5rem] leading-relaxed text-gold-400 sm:text-[0.625rem]">
          {index}
        </p>
        <h3 className="mt-1.5 break-words text-[0.8125rem] leading-snug text-ivory-50 sm:mt-2 sm:text-base">
          {title}
        </h3>
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
