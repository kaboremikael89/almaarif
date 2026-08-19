import Link from 'next/link'
import { Rosette } from '@/components/Ornament'
import { ArrowRight } from '@/components/Icons'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-950 text-ivory-50">
      <div className="zellige-bg pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <Rosette
        className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] text-gold-500 opacity-[0.08]"
        strokeWidth={0.6}
      />
      <div className="container-page relative py-32">
        <p className="eyebrow eyebrow-line text-gold-400">Erreur 404</p>
        <h1 className="mt-7 text-[clamp(2.25rem,5vw,4rem)]">Page introuvable / Page not found</h1>
        <p className="mt-6 max-w-xl text-lg text-ivory-100/70">
          La page demandée n’existe pas ou a été déplacée.
          <br />
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/fr/" className="btn btn-gold">
            Accueil
            <ArrowRight />
          </Link>
          <Link href="/en/" className="btn btn-outline-light">
            Home
          </Link>
        </div>
      </div>
    </section>
  )
}
