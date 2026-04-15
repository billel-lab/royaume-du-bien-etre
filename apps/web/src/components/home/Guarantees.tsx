'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Leaf, MapPin, Truck, RotateCcw } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'

const guarantees = [
  { key: 'natural', icon: Leaf },
  { key: 'morocco', icon: MapPin },
  { key: 'shipping', icon: Truck },
  { key: 'satisfaction', icon: RotateCcw },
]

export default function Guarantees() {
  const t = useTranslations('guarantees')

  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-medium text-secondary">
              {t('title')}
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {guarantees.map((item, i) => (
            <BlurFade key={item.key} delay={i * 0.1}>
              <motion.div
                className="text-center px-4 py-8"
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 bg-accent border border-accent-dark/12 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-secondary mb-2">
                  {t(item.key)}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed font-light">
                  {t(`${item.key}_desc`)}
                </p>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
