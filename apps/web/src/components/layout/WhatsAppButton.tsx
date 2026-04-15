'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Clock } from 'lucide-react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const phone = '32478115981'
  const message = encodeURIComponent(
    'Bonjour ! Je suis intéressé(e) par vos produits naturels. Pouvez-vous me conseiller ?'
  )

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 right-0 bg-white rounded-xl shadow-xl border border-accent p-4 w-64"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 p-1 hover:bg-accent/50 rounded-full"
            >
              <X className="w-3.5 h-3.5 text-text-muted" />
            </button>
            <p className="text-sm font-semibold text-secondary mb-1">Besoin d&apos;un conseil ?</p>
            <div className="flex items-center gap-1.5 text-xs text-text-muted mb-3">
              <Clock className="w-3 h-3 text-[#25D366]" />
              <span>Réponse en &lt; 30 min</span>
            </div>
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Discuter sur WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.button>
    </div>
  )
}
