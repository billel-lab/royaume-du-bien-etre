'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Leaf, MapPin, Truck, RotateCcw } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'
import ArabesqueDivider from '@/components/ui/ArabesqueDivider'

const guarantees = [
  { key: 'natural', icon: Leaf },
  { key: 'morocco', icon: MapPin },
  { key: 'shipping', icon: Truck },
  { key: 'satisfaction', icon: RotateCcw },
]

export default function Guarantees() {
  const t = useTranslations('guarantees')

  return (
    <section className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-14">
            <ArabesqueDivider variant="simple" className="mb-6" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary mb-4">
              {t('title')}
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, i) => (
            <BlurFade key={item.key} delay={i * 0.1}>
              <motion.div
                className="relative bg-white rounded-2xl p-6 lg:p-8 text-center border border-gold/10 hover:border-gold/30 transition-colors shadow-sm hover:shadow-gold-glow"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Gold icon circle */}
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-6 h-6 text-gold" />
                </motion.div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-secondary mb-2">
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
