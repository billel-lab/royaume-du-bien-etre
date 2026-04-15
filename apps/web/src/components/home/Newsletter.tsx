'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Mail, Check } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'

export default function Newsletter() {
  const t = useTranslations('newsletter')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    } catch {}
    setSubmitted(true)
  }

  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <BlurFade>
          <div className="gold-line mb-10" />

          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-medium text-secondary mb-3">
            {t('title')}
          </h2>
          <p className="text-text-muted max-w-md mx-auto mb-8 font-light">
            {t('subtitle')}
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-none"
            >
              <Check className="w-5 h-5" />
              <span className="font-medium text-sm">{t('success')}</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('placeholder')}
                  className="w-full bg-white border border-border pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="bg-secondary hover:bg-primary text-white px-8 py-3.5 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('cta')}
              </motion.button>
            </form>
          )}

          <p className="text-[11px] text-text-muted mt-4 font-light">{t('no_spam')}</p>

          <div className="gold-line mt-10" />
        </BlurFade>
      </div>
    </section>
  )
}
