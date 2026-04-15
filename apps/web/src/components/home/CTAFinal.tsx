'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'
import ZelligeBackground from '@/components/ui/ZelligeBackground'
import GoldShimmerButton from '@/components/ui/GoldShimmerButton'
import ArabesqueDivider from '@/components/ui/ArabesqueDivider'

export default function CTAFinal() {
  const t = useTranslations('cta_final')

  return (
    <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      <ZelligeBackground variant="gold" opacity={0.05} />

      {/* Large decorative gold orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 bg-gold/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <BlurFade>
          {/* Gold arabesque ornament */}
          <ArabesqueDivider variant="arch" color="#E8C87A" className="mb-8" />

          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
            <span className="text-gradient-gold">{t('title')}</span>
          </h2>

          <p className="text-accent/70 max-w-2xl mx-auto mb-10 text-base sm:text-lg font-light leading-relaxed">
            {t('subtitle')}
          </p>

          <Link href="/boutique?cat=coffrets">
            <GoldShimmerButton>
              {t('cta')}
              <ArrowRight className="w-4 h-4" />
            </GoldShimmerButton>
          </Link>

          <p className="text-xs text-accent/40 mt-6 font-light tracking-wide">{t('reassurance')}</p>

          {/* Gold arabesque bottom */}
          <ArabesqueDivider variant="ornate" color="#E8C87A" className="mt-10" />
        </BlurFade>
      </div>
    </section>
  )
}
