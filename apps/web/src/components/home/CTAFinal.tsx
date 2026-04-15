'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'

export default function CTAFinal() {
  const t = useTranslations('cta_final')

  return (
    <section className="py-24 lg:py-32 bg-accent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-center lg:text-left">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-medium text-secondary mb-4 leading-tight">
                {t('title')}
              </h2>
              <p className="text-text-body max-w-lg mx-auto lg:mx-0 mb-8 font-light leading-relaxed">
                {t('subtitle')}
              </p>
              <Link href="/boutique?cat=coffrets">
                <motion.button
                  className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-lg font-medium text-sm transition-colors shadow-md shadow-primary/15"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('cta')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <p className="text-xs text-text-muted mt-4 font-light">{t('reassurance')}</p>
            </div>

            {/* Image coffret */}
            <motion.div
              className="relative aspect-square max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-accent-dark/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Image
                src="https://royaumedubienetre.fr/wp-content/uploads/2025/05/ab37215f-42a9-4a6a-b85b-8aa67a1aaf7f-300x300.png"
                alt="Coffret Beauté Précieuse — Royaume du Bien-Être"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
