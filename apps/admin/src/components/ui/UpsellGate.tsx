'use client'

import { useState, useEffect } from 'react'
import { Lock, Sparkles, Check, MessageCircle, Users } from 'lucide-react'

interface UpsellGateProps {
  featureName: string
  emoji: string
  features: string[]
  children?: React.ReactNode
}

export default function UpsellGate({ featureName, emoji, features }: UpsellGateProps) {
  const [liveCount, setLiveCount] = useState(247)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.max(200, Math.min(300, prev + change))
      })
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="max-w-lg w-full bg-bg-card border border-border rounded-2xl p-8 text-center">
        {/* Emoji */}
        <div className="text-5xl mb-4">{emoji}</div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          PREMIUM
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-text mb-2">{featureName}</h2>

        {/* Live counter (FOMO) */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-xs text-text-secondary">
            <Users className="w-3 h-3 inline mr-1" />
            {liveCount} utilisateurs actifs
          </span>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-2 p-3 bg-bg-hover rounded-xl">
              <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
              <span className="text-sm text-text-secondary">{feature}</span>
            </div>
          ))}
        </div>

        {/* Mock stats (blurred) */}
        <div className="relative mb-8">
          <div className="grid grid-cols-3 gap-4 blur-sm select-none">
            <div className="bg-bg-hover rounded-xl p-4">
              <p className="text-2xl font-bold text-text">3</p>
              <p className="text-[10px] text-text-muted">Actifs</p>
            </div>
            <div className="bg-bg-hover rounded-xl p-4">
              <p className="text-2xl font-bold text-text">74</p>
              <p className="text-[10px] text-text-muted">Utilisations</p>
            </div>
            <div className="bg-bg-hover rounded-xl p-4">
              <p className="text-2xl font-bold text-text">1 240€</p>
              <p className="text-[10px] text-text-muted">Revenus</p>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-bg-card/90 backdrop-blur-sm border border-border rounded-xl px-4 py-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-text-muted" />
              <span className="text-xs font-medium text-text-secondary">Données verrouillées</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/32478115981?text=${encodeURIComponent(`Bonjour ! Je souhaite activer "${featureName}" sur mon admin Royaume du Bien-Être.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-semibold text-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Activer {featureName}
        </a>

        <p className="text-[10px] text-text-muted mt-3">
          Installation garantie en 24h
        </p>
      </div>
    </div>
  )
}
