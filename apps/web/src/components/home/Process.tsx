'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Flower2, FlaskConical, ShieldCheck, Truck } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'

const steps = [
  { key: 'step1', icon: Flower2 },
  { key: 'step2', icon: FlaskConical },
  { key: 'step3', icon: ShieldCheck },
  { key: 'step4', icon: Truck },
]

export default function Process() {
  const t = useTranslations('process')

  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-medium text-secondary mb-4">
              {t('title')}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto font-light">{t('subtitle')}</p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step, i) => (
            <BlurFade key={step.key} delay={i * 0.1}>
              <motion.div
                className="relative text-center px-4 py-8"
                whileHover={{ y: -4 }}
              >
                {/* Step number — subtle */}
                <div className="absolute top-2 right-4 font-[family-name:var(--font-heading)] text-5xl font-light text-accent-dark/30">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon — unified terracotta */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-accent border border-accent-dark/20 flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: [0, -3, 3, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <step.icon className="w-7 h-7 text-primary" />
                </motion.div>

                <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-secondary mb-3">
                  {t(`${step.key}_title`)}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-light">
                  {t(`${step.key}_desc`)}
                </p>

                {/* Gold connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 -right-5 w-10 gold-line" />
                )}
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
