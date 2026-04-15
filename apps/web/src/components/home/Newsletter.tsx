'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Mail, Check, Sparkles } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'
import ZelligeBackground from '@/components/ui/ZelligeBackground'

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
    <section className="py-20 lg:py-28 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden border border-gold/10">
            <ZelligeBackground variant="gold" opacity={0.05} />

            {/* Gold orbs */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

            <div className="relative">
              <motion.div
                className="w-14 h-14 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-gold-light" />
              </motion.div>

              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold mb-3">
                <span className="text-gradient-gold">{t('title')}</span>
              </h2>
              <p className="text-accent/60 max-w-md mx-auto mb-8 font-light">
                {t('subtitle')}
              </p>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-xl border border-success/20"
                >
                  <Check className="w-5 h-5" />
                  <span className="font-medium">{t('success')}</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('placeholder')}
                      className="w-full bg-white/10 border border-gold/20 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-accent/40 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all backdrop-blur-sm"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-gold/20 hover:shadow-gold-glow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('cta')}
                  </motion.button>
                </form>
              )}

              <p className="text-[10px] text-accent/30 mt-4">{t('no_spam')}</p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
