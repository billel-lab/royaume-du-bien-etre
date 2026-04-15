'use client'

import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export default function StickyCTAMobile() {
  return (
    <div className="fixed bottom-16 left-0 right-0 z-40 p-3 bg-gradient-to-t from-bg via-bg/95 to-transparent lg:hidden pointer-events-none">
      <Link
        href="/boutique"
        className="pointer-events-auto flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-primary/25 transition-colors active:scale-[0.98]"
      >
        <ShoppingBag className="w-4 h-4" />
        Découvrir la Boutique
      </Link>
      <p className="pointer-events-auto text-center text-[10px] text-text-muted mt-1">
        Livraison gratuite dès 79€ · Retour sous 14 jours
      </p>
    </div>
  )
}
