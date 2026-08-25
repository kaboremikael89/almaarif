import Reveal from './Reveal'

type SplitImageProps = {
  /** Chemin de la photo dans /public, par exemple /images/salle-de-formation.jpg */
  src: string
  alt: string
  /** Légende facultative affichée sous le triptyque */
  caption?: string
  className?: string
}

/**
 * Triptyque : une seule photo découpée en trois rectangles séparés par un filet.
 * Les trois panneaux recomposent l'image d'origine, chacun affichant un tiers.
 * Sur petit écran, la photo reste entière : trois bandes seraient illisibles.
 */
export default function SplitImage({ src, alt, caption, className = '' }: SplitImageProps) {
  return (
    <figure data-ltr="" className={className}>
      <div className="relative aspect-4/3 overflow-hidden sm:hidden">
        <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      </div>

      <div className="hidden gap-2 sm:grid sm:grid-cols-3 lg:gap-3">
        {[0, 1, 2].map((panel) => (
          <Reveal
            key={panel}
            delay={panel * 160}
            className="relative aspect-3/4 overflow-hidden lg:aspect-4/5"
          >
            <img
              src={src}
              alt={panel === 0 ? alt : ''}
              aria-hidden={panel !== 0}
              loading="lazy"
              decoding="async"
              className="absolute top-0 h-full w-[300%] max-w-none object-cover"
              style={{ left: `${panel * -100}%` }}
            />
          </Reveal>
        ))}
      </div>

      {caption && (
        <figcaption className="mt-5 text-center text-xs uppercase tracking-[0.18em] text-muted/80">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
