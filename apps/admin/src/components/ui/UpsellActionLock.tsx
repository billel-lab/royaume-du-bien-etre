'use client'

import { useState } from 'react'
import { Lock, MessageCircle, X } from 'lucide-react'

interface UpsellActionLockProps {
  featureName: string
  children: React.ReactNode
}

export default function UpsellActionLock({ featureName, children }: UpsellActionLockProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div onClick={() => setShowModal(true)} className="cursor-pointer">
        {children}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-bg-card border border-border rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-bg-hover rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-text-muted" />
              </button>
            </div>

            <h3 className="text-lg font-bold text-text mb-2">
              Fonctionnalité Premium
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              <strong>{featureName}</strong> est une fonctionnalité premium. Contactez-nous pour l&apos;activer et profiter de toutes les fonctionnalités de votre admin.
            </p>

            <div className="space-y-3">
              <a
                href={`https://wa.me/32478115981?text=${encodeURIComponent(`Bonjour ! Je souhaite activer "${featureName}" sur mon admin Royaume du Bien-Être.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Contacter via WhatsApp
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="w-full text-text-muted hover:text-text py-2 text-sm transition-colors"
              >
                Plus tard
              </button>
            </div>

            <p className="text-[10px] text-text-muted text-center mt-4">
              Installation garantie en 24h
            </p>
          </div>
        </div>
      )}
    </>
  )
}
