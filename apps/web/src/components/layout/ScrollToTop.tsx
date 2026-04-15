'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-24 lg:bottom-8 left-1/2 -translate-x-1/2 z-40 w-10 h-10 bg-white border border-accent-dark/15 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:border-primary/30 transition-all"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Retour en haut"
        >
          <ChevronUp className="w-4 h-4 text-primary" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
