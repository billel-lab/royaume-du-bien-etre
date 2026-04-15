'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowRight, ChevronDown } from 'lucide-react'

const heroImages = [
  'https://royaumedubienetre.fr/wp-content/uploads/2026/02/Ambiance-de-spa-chic-et-apaisante.png',
  'https://royaumedubienetre.fr/wp-content/uploads/2026/02/ChatGPT-Image-9-fevr.-2026-13_28_50.png',
  'https://royaumedubienetre.fr/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-08.37.54.jpeg',
]

export default function Hero() {
  const t = useTranslations('hero')
  const [current, setCurrent] = useState(0)

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroImages[current]}
            alt="Cosmétiques naturels marocains"
            fill
            className="object-cover"
            priority={current === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-8"
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary-light font-medium">
              {t('badge')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] mb-6"
          >
            {t('title').split(' ').slice(0, 2).join(' ')}{' '}
            <span className="font-semibold italic text-primary-light">
              {t('title').split(' ').slice(2).join(' ')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base sm:text-lg text-white/70 max-w-lg mb-10 leading-relaxed font-light"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs — sharp, uppercase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/boutique">
              <button className="group inline-flex items-center justify-center gap-3 bg-white text-secondary px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-primary hover:text-white transition-colors duration-300">
                {t('cta_primary')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/boutique?cat=coffrets">
              <button className="inline-flex items-center justify-center gap-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-white/10 transition-colors duration-300">
                {t('cta_secondary')}
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-6 sm:left-8 lg:left-16 z-20 flex gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] transition-all duration-500 ${
              i === current ? 'w-10 bg-primary-light' : 'w-5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Défiler</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
