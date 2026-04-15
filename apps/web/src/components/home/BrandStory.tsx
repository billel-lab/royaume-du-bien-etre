'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'
import { LOGO_URL } from '@/lib/products'

export default function BrandStory() {
  const t = useTranslations('story')

  return (
    <section className="py-24 lg:py-32 bg-accent/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <BlurFade>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-accent-dark/10">
              <Image
                src="https://royaumedubienetre.fr/wp-content/uploads/2026/02/ChatGPT-Image-9-fevr.-2026-13_28_50.png"
                alt="Produits naturels Royaume du Bien-Être"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />

              {/* Floating logo */}
              <motion.div
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md border border-accent-dark/10"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image src={LOGO_URL} alt="Logo" width={100} height={35} className="object-contain" />
              </motion.div>
            </div>
          </BlurFade>

          {/* Text */}
          <BlurFade delay={0.2}>
            <div>
              <span className="text-xs font-medium text-primary bg-primary/8 px-3 py-1 rounded-full uppercase tracking-widest">
                {t('subtitle')}
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-medium text-secondary mt-5 mb-6">
                {t('title')}
              </h2>
              <p className="text-text-body leading-relaxed mb-6 font-light">
                {t('text')}
              </p>

              {/* Quote — elegant serif italic */}
              <div className="gold-line mb-6" />
              <blockquote className="mb-8">
                <p className="font-[family-name:var(--font-heading)] text-xl text-secondary italic font-light leading-relaxed">
                  &ldquo;La beauté commence au moment où vous décidez d&apos;être vous-même.&rdquo;
                </p>
              </blockquote>
              <div className="gold-line mb-8" />

              <Link href="/a-propos">
                <motion.button
                  className="group inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-primary-dark transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {t('cta')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
