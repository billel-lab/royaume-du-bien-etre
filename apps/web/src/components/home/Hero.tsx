'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'
import ZelligeBackground from '@/components/ui/ZelligeBackground'
import GoldShimmerButton from '@/components/ui/GoldShimmerButton'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-accent-light via-bg to-accent/30">
      <ZelligeBackground variant="light" opacity={0.035} />

      {/* Decorative gold orbs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gold/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            {/* Badge with gold border */}
            <BlurFade delay={0}>
              <motion.div
                className="inline-flex items-center gap-2 bg-gold/5 border border-gold/30 rounded-full px-4 py-1.5 mb-6 shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-xs font-medium text-gold tracking-wide">
                  {t('badge')}
                </span>
              </motion.div>
            </BlurFade>

            {/* Title with gold gradient on accent words */}
            <BlurFade delay={0.15}>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-6">
                {t('title').split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block mr-3 ${i >= 2 ? 'text-gradient-gold' : 'text-secondary'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </BlurFade>

            {/* Subtitle */}
            <BlurFade delay={0.3}>
              <p className="text-base sm:text-lg text-text-body/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light">
                {t('subtitle')}
              </p>
            </BlurFade>

            {/* CTAs — primary gold shimmer + secondary outline */}
            <BlurFade delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/boutique">
                  <GoldShimmerButton>
                    {t('cta_primary')}
                    <ArrowRight className="w-4 h-4" />
                  </GoldShimmerButton>
                </Link>
                <Link href="/boutique?cat=coffrets">
                  <motion.button
                    className="inline-flex items-center justify-center gap-2 border-2 border-gold/30 text-gold hover:bg-gold/5 px-8 py-4 rounded-xl font-semibold text-sm transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('cta_secondary')}
                  </motion.button>
                </Link>
              </div>
            </BlurFade>

            {/* Trust micro-copy with gold accents */}
            <BlurFade delay={0.55}>
              <div className="flex items-center gap-4 mt-6 justify-center lg:justify-start text-xs text-text-muted">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-gold text-gold" /> 4.9/5
                </span>
                <span className="w-px h-3 bg-accent-dark/30" />
                <span>Livraison gratuite dès 79€</span>
                <span className="w-px h-3 bg-accent-dark/30" />
                <span>100% Naturel</span>
              </div>
            </BlurFade>
          </div>

          {/* Hero image with gold frame */}
          <BlurFade delay={0.3}>
            <motion.div
              className="relative aspect-[4/5] lg:aspect-[3/4] max-w-md mx-auto lg:max-w-none"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {/* Gold decorative frames */}
              <div className="absolute -inset-4 border border-gold/20 rounded-3xl rotate-3" />
              <div className="absolute -inset-4 border border-gold/10 rounded-3xl -rotate-2" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-gold/15">
                <Image
                  src="https://royaumedubienetre.fr/wp-content/uploads/2026/02/Ambiance-de-spa-chic-et-apaisante.png"
                  alt="Ambiance spa — cosmétiques naturels marocains Royaume du Bien-Être"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-gold/5" />
              </div>

              {/* Floating badge — gold themed */}
              <motion.div
                className="absolute -bottom-3 -left-3 bg-white rounded-xl px-4 py-3 shadow-gold-glow border border-gold/20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary">100% Naturel</p>
                    <p className="text-[10px] text-text-muted">Fait au Maroc</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating rating badge — top right */}
              <motion.div
                className="absolute -top-2 -right-2 bg-white rounded-lg px-3 py-2 shadow-gold-glow border border-gold/20"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                  <span className="text-xs font-bold text-secondary">4.9</span>
                  <span className="text-[9px] text-text-muted">/5</span>
                </div>
              </motion.div>
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
