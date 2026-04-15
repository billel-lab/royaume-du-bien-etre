'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Gift, Lock, Check, ArrowRight } from 'lucide-react'

const STORAGE_KEY = 'rbe-newsletter-dismissed'

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (localStorage.getItem(STORAGE_KEY)) return

    // Timer trigger: 15 seconds
    const timer = setTimeout(() => setVisible(true), 15000)

    // Exit-intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem(STORAGE_KEY)) {
        setVisible(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const dismiss = () => {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, 'true')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || loading) return
    setLoading(true)

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    } catch {}

    setSubmitted(true)
    setLoading(false)
    localStorage.setItem(STORAGE_KEY, 'true')

    setTimeout(() => setVisible(false), 3000)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) dismiss() }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative bg-bg rounded-3xl p-8 max-w-md w-full shadow-2xl border border-accent"
          >
            {/* Close button */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 p-1.5 hover:bg-accent/50 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-text-muted" />
            </button>

            {submitted ? (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.1 }}
                  className="text-5xl mb-4"
                >
                  🎉
                </motion.div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  Bienvenue dans le Cercle !
                </h3>
                <p className="text-sm text-text-muted">
                  Vérifiez votre email pour votre code promo BIENVENUE10.
                </p>
              </motion.div>
            ) : (
              /* Form state */
              <>
                {/* Animated icon */}
                <div className="text-center mb-4">
                  <motion.div
                    animate={{ rotate: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl inline-block"
                  >
                    ✨
                  </motion.div>
                </div>

                {/* Badge */}
                <div className="flex justify-center mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Gift className="w-3.5 h-3.5" />
                    Offre exclusive abonné
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-secondary text-center mb-2">
                  Recevez -10% sur votre commande
                </h3>
                <p className="text-sm text-text-muted text-center mb-6">
                  Inscrivez-vous et recevez votre code promo immédiatement
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      className="w-full border border-accent-dark/20 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? 'Inscription...' : 'Obtenir mon code -10%'}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-4 mt-4 text-[10px] text-text-muted">
                  <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Sécurisé</span>
                  <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Pas de spam</span>
                  <span className="flex items-center gap-1"><Gift className="w-3 h-3" /> -10% garanti</span>
                </div>

                {/* No thanks */}
                <button
                  onClick={dismiss}
                  className="w-full text-center text-xs text-text-muted hover:text-text mt-3 transition-colors"
                >
                  Non merci, je préfère payer le prix fort.
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
