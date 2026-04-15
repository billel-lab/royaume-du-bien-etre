'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Flower2, FlaskConical, ShieldCheck, Truck } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'

const steps = [
  { key: 'step1', icon: Flower2, color: 'bg-green-50 text-green-600 border-green-100' },
  { key: 'step2', icon: FlaskConical, color: 'bg-amber-50 text-amber-600 border-amber-100' },
  { key: 'step3', icon: ShieldCheck, color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { key: 'step4', icon: Truck, color: 'bg-purple-50 text-purple-600 border-purple-100' },
]

export default function Process() {
  const t = useTranslations('process')

  return (
    <section className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary mb-4">
              {t('title')}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <BlurFade key={step.key} delay={i * 0.1}>
              <motion.div
                className="relative text-center p-6 lg:p-8"
                whileHover={{ y: -4 }}
              >
                {/* Step number */}
                <div className="absolute top-0 right-6 font-[family-name:var(--font-heading)] text-6xl font-bold text-accent/50">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-2xl ${step.color} border flex items-center justify-center mx-auto mb-5`}
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <step.icon className="w-7 h-7" />
                </motion.div>

                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-secondary mb-3">
                  {t(`${step.key}_title`)}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {t(`${step.key}_desc`)}
                </p>

                {/* Connector line (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 border-t-2 border-dashed border-accent-dark/20" />
                )}
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
