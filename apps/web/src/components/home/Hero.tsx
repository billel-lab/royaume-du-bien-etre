'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'
import ZelligeBackground from '@/components/ui/ZelligeBackground'

const heroImages = [
  'https://royaumedubienetre.fr/wp-content/uploads/2026/02/Ambiance-de-spa-chic-et-apaisante.png',
  'https://royaumedubienetre.fr/wp-content/uploads/2026/02/ChatGPT-Image-9-fevr.-2026-13_28_50.png',
  'https://royaumedubienetre.fr/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-08.37.54.jpeg',
]

export default function Hero() {
  const t = useTranslations('hero')
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -90])

  return (
    <section ref={ref} className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-accent-light via-bg to-bg">
      <ZelligeBackground variant="light" opacity={0.025} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <BlurFade delay={0}>
              <motion.div
                className="inline-flex items-center gap-2 bg-accent border border-accent-dark/20 rounded-full px-4 py-1.5 mb-8"
                whileHover={{ scale: 1.03 }}
              >
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-xs font-medium text-text-body tracking-wide">
                  {t('badge')}
                </span>
              </motion.div>
            </BlurFade>

            <BlurFade delay={0.15}>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-secondary leading-[1.1] mb-6">
                {t('title').split(' ').slice(0, 2).join(' ')}{' '}
                <span className="italic text-primary">
                  {t('title').split(' ').slice(2).join(' ')}
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-base sm:text-lg text-text-body max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                {t('subtitle')}
              </p>
            </BlurFade>

            <BlurFade delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/boutique">
                  <motion.button
                    className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-medium text-sm transition-colors shadow-md shadow-primary/15"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('cta_primary')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="/boutique?cat=coffrets">
                  <motion.button
                    className="inline-flex items-center justify-center gap-2 border border-primary/25 text-primary hover:bg-primary/5 px-8 py-4 rounded-lg font-medium text-sm transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('cta_secondary')}
                  </motion.button>
                </Link>
              </div>
            </BlurFade>

            <BlurFade delay={0.55}>
              <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start text-xs text-text-muted font-light">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-gold text-gold" /> 4.9/5
                </span>
                <span className="w-px h-3 bg-accent-dark/20" />
                <span>Livraison gratuite dès 79€</span>
                <span className="w-px h-3 bg-accent-dark/20" />
                <span>100% Naturel</span>
              </div>
            </BlurFade>
          </div>

          {/* 3 images parallax */}
          <BlurFade delay={0.3}>
            <div className="relative h-[450px] sm:h-[500px] lg:h-[580px] max-w-lg mx-auto lg:max-w-none">
              {/* Image 1 — main, center */}
              <motion.div
                style={{ y: y1 }}
                className="absolute top-8 left-1/2 -translate-x-1/2 w-[65%] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-primary/10 z-20 border border-accent"
              >
                <Image
                  src={heroImages[0]}
                  alt="Cosmétiques naturels marocains"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 65vw, 30vw"
                />
              </motion.div>

              {/* Image 2 — left behind */}
              <motion.div
                style={{ y: y2 }}
                className="absolute top-16 left-0 w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shadow-primary/5 z-10 border border-accent"
              >
                <Image
                  src={heroImages[1]}
                  alt="Produits naturels du Maroc"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
                <div className="absolute inset-0 bg-accent-light/20" />
              </motion.div>

              {/* Image 3 — right behind */}
              <motion.div
                style={{ y: y3 }}
                className="absolute top-24 right-0 w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shadow-primary/5 z-10 border border-accent"
              >
                <Image
                  src={heroImages[2]}
                  alt="Soins beauté naturels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
                <div className="absolute inset-0 bg-accent-light/20" />
              </motion.div>

              {/* Floating badge — bottom */}
              <motion.div
                className="absolute bottom-0 left-4 bg-white rounded-xl px-4 py-3 shadow-lg border border-accent z-30"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-secondary">100% Naturel</p>
                    <p className="text-[10px] text-text-muted font-light">Fait au Maroc</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
