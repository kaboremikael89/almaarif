'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { ArrowRight } from './Icons'
import { site } from '@/content/site'
import { programs } from '@/content/programs'
import type { Dictionary } from '@/content/dictionary'
import type { Locale } from '@/lib/i18n'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const f = dict.contact.form
  const [status, setStatus] = useState<Status>('idle')
  const [program, setProgram] = useState('')

  // Pré-remplissage depuis /formations/[slug] → /contact?p=slug
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('p')
    if (!slug) return
    const found = programs.find((p) => p.slug === slug)
    if (found) setProgram(`${found.reference} — ${found.title[lang]}`)
  }, [lang])

  const buildMailto = (data: Record<string, string>) => {
    const subject = `[${data.subject}] ${data.organization || data.name}`
    const body = [
      `${f.name}: ${data.name}`,
      `${f.organization}: ${data.organization}`,
      `${f.country}: ${data.country}`,
      `${f.email}: ${data.email}`,
      `${f.phone}: ${data.phone}`,
      `${f.subject}: ${data.subject}`,
      `${f.program}: ${data.program}`,
      `${f.participants}: ${data.participants}`,
      `${f.period}: ${data.period}`,
      '',
      `${f.message}:`,
      data.message,
    ].join('\n')

    return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>

    // Piège à robots : un champ invisible rempli signale un envoi automatisé.
    if (raw.website) return

    const data: Record<string, string> = { ...raw, locale: lang }
    delete data.website

    if (!site.formEndpoint) {
      window.location.href = buildMailto(data)
      setStatus('success')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      form.reset()
      setProgram('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-gold-500/50 bg-white p-10">
        <p className="font-display text-2xl text-navy-900">{f.success}</p>
        {!site.formEndpoint && <p className="mt-4 text-sm text-muted">{f.mailtoNotice}</p>}
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold-700 underline underline-offset-4"
        >
          {dict.contact.form.title}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="border border-navy-900/10 bg-white p-8 lg:p-10" noValidate={false}>
      <h2 className="font-display text-2xl text-navy-900">{f.title}</h2>
      <div className="rule-gold mt-6 mb-8" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            {f.name} *
          </label>
          <input className="field" id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div>
          <label className="field-label" htmlFor="organization">
            {f.organization} *
          </label>
          <input
            className="field"
            id="organization"
            name="organization"
            type="text"
            required
            autoComplete="organization"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="country">
            {f.country} *
          </label>
          <input className="field" id="country" name="country" type="text" required autoComplete="country-name" />
        </div>
        <div>
          <label className="field-label" htmlFor="email">
            {f.email} *
          </label>
          <input className="field" id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div>
          <label className="field-label" htmlFor="phone">
            {f.phone}
          </label>
          <input className="field" id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div>
          <label className="field-label" htmlFor="subject">
            {f.subject} *
          </label>
          <select className="field" id="subject" name="subject" required defaultValue={f.subjects[0]}>
            {f.subjects.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="program">
            {f.program}
          </label>
          <input
            className="field"
            id="program"
            name="program"
            type="text"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="participants">
            {f.participants}
          </label>
          <input className="field" id="participants" name="participants" type="number" min="1" />
        </div>
        <div>
          <label className="field-label" htmlFor="period">
            {f.period}
          </label>
          <input className="field" id="period" name="period" type="text" />
        </div>
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="message">
            {f.message} *
          </label>
          <textarea
            className="field min-h-40 resize-y"
            id="message"
            name="message"
            required
            placeholder={f.messagePlaceholder}
          />
        </div>
      </div>

      {/* Champ piège (invisible pour les humains) */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="mt-8 flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-[#c19a45]" />
        <span>{f.consent} *</span>
      </label>

      {status === 'error' && (
        <p role="alert" className="mt-6 border-l-2 border-red-500 bg-red-50 px-4 py-3 text-sm text-red-800">
          {f.error}
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn btn-primary mt-8 w-full disabled:opacity-60">
        {status === 'sending' ? f.sending : f.submit}
        <ArrowRight />
      </button>
    </form>
  )
}
