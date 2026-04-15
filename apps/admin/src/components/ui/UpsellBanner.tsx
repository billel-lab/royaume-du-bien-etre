'use client'

import { Lock, MessageCircle } from 'lucide-react'

interface UpsellBannerProps {
  featureLabel: string
}

export default function UpsellBanner({ featureLabel }: UpsellBannerProps) {
  return (
    <div className="bg-gradient-to-r from-warning/10 via-warning/5 to-transparent border border-warning/20 rounded-xl p-4 mb-6 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center">
          <Lock className="w-4 h-4 text-warning" />
        </div>
        <div>
          <p className="text-sm font-semibold text-text">
            {featureLabel} — Mode aperçu
          </p>
          <p className="text-xs text-text-muted">
            Visualisez les données. Activez les actions pour gérer votre business.
          </p>
        </div>
      </div>
      <a
        href="https://wa.me/32478115981?text=Bonjour%20!%20Je%20souhaite%20activer%20la%20fonctionnalité%20%22{featureLabel}%22%20de%20mon%20admin%20Royaume%20du%20Bien-Être."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        Activer
      </a>
    </div>
  )
}
