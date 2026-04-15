'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Droplets, Wind, Sparkles } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'

const steps = [
  { key: 'step1', icon: Droplets, num: '01' },
  { key: 'step2', icon: Wind, num: '02' },
  { key: 'step3', icon: Sparkles, num: '03' },
]

export default function WellBeingMoment() {
  const t = useTranslations('moment')

  return (
    <section className="py-20 lg:py-28 bg-secondary text-white relative overflow-hidden">
      {/* Subtle zellige pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="zellige-dark" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M30 15L45 30L30 45L15 30Z" fill="none" stroke="white" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zellige-dark)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-center mb-14">
            {t('title')}
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <BlurFade key={step.key} delay={i * 0.15}>
              <motion.div
                className="text-center"
                whileHover={{ y: -4 }}
              >
                <div className="relative inline-flex items-center justify-center mb-5">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <step.icon className="w-7 h-7 text-primary-light" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-bold bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <p className="text-sm text-accent-light/80 leading-relaxed max-w-xs mx-auto">
                  {t(step.key)}
                </p>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
