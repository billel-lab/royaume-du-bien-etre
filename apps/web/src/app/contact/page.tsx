'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Check, MessageCircle } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BlurFade from '@/components/ui/BlurFade'

const steps = [
  { id: 1, label: 'Vos coordonnées' },
  { id: 2, label: 'Votre message' },
  { id: 3, label: 'Confirmation' },
]

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const updateField = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async () => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {}
    setSubmitted(true)
    setCurrentStep(3)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        <div className="bg-gradient-to-br from-accent-light to-accent/30 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary mb-3">
                Contactez-nous
              </h1>
              <p className="text-text-muted max-w-xl mx-auto">
                Une question sur nos produits ? N&apos;hésitez pas à nous écrire.
              </p>
            </BlurFade>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <BlurFade>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <Phone className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-secondary mb-1">Téléphone</h3>
                  <p className="text-sm text-text-muted">+32 478 11 59 81</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <Mail className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-secondary mb-1">Email</h3>
                  <p className="text-sm text-text-muted">contact@royaumedubienetre.fr</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <MapPin className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-secondary mb-1">Localisation</h3>
                  <p className="text-sm text-text-muted">Belgique & France</p>
                </div>
                <a
                  href="https://wa.me/32478115981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] rounded-2xl p-6 hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-sm opacity-80">Réponse rapide</p>
                  </div>
                </a>
              </div>
            </BlurFade>

            {/* Form */}
            <BlurFade delay={0.15}>
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-8">
                  {steps.map((step, i) => (
                    <div key={step.id} className="flex items-center gap-2 flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                        currentStep >= step.id ? 'bg-primary text-white' : 'bg-accent text-text-muted'
                      }`}>
                        {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                      </div>
                      <span className="text-xs text-text-muted hidden sm:block">{step.label}</span>
                      {i < steps.length - 1 && (
                        <div className={`flex-1 h-0.5 transition-colors ${
                          currentStep > step.id ? 'bg-primary' : 'bg-accent'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1.5">Nom complet *</label>
                        <input type="text" required value={form.name} onChange={(e) => updateField('name', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1.5">Email *</label>
                        <input type="email" required value={form.email} onChange={(e) => updateField('email', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="votre@email.com" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1.5">Téléphone (optionnel)</label>
                        <input type="tel" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="+32 ..." />
                      </div>
                      <motion.button
                        onClick={() => { if (form.name && form.email) setCurrentStep(2) }}
                        className="w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-semibold text-sm transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Continuer
                      </motion.button>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1.5">Sujet *</label>
                        <select value={form.subject} onChange={(e) => updateField('subject', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary">
                          <option value="">Choisir un sujet</option>
                          <option value="produits">Question sur un produit</option>
                          <option value="commande">Suivi de commande</option>
                          <option value="retour">Retour / Échange</option>
                          <option value="partenariat">Partenariat</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1.5">Message *</label>
                        <textarea value={form.message} onChange={(e) => updateField('message', e.target.value)} rows={5} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none" placeholder="Décrivez votre demande..." />
                      </div>
                      <div className="flex gap-3">
                        <button onClick={() => setCurrentStep(1)} className="px-6 py-3.5 border border-accent-dark/20 rounded-xl text-sm font-medium hover:bg-accent/30 transition-colors">
                          Retour
                        </button>
                        <motion.button
                          onClick={handleSubmit}
                          className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-semibold text-sm transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Send className="w-4 h-4" />
                          Envoyer
                        </motion.button>
                      </div>
                      <p className="text-[10px] text-text-muted text-center">Réponse garantie sous 24h</p>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                      <motion.div
                        className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                      >
                        <Check className="w-8 h-8 text-success" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-secondary mb-2">Message envoyé !</h3>
                      <p className="text-text-muted text-sm">Nous vous répondrons dans les 24 heures.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </BlurFade>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </>
  )
}
