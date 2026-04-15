'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Star, Quote } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'
import ZelligeBackground from '@/components/ui/ZelligeBackground'
import ArabesqueDivider from '@/components/ui/ArabesqueDivider'
import { testimonials } from '@/lib/testimonials'

export default function Testimonials() {
  const t = useTranslations('testimonials')

  return (
    <section className="py-20 lg:py-28 bg-bg-dark relative overflow-hidden">
      <ZelligeBackground variant="gold" opacity={0.04} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-14">
            <ArabesqueDivider variant="simple" color="#E8C87A" className="mb-6" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4">
              <span className="text-gradient-gold">{t('title')}</span>
            </h2>
            <p className="text-accent/50 max-w-2xl mx-auto font-light">{t('subtitle')}</p>
          </div>
        </BlurFade>

        {/* Marquee row 1 */}
        <div className="relative mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-dark to-transparent z-10" />
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <TestimonialCard key={i} {...item} />
            ))}
          </motion.div>
        </div>

        {/* Marquee row 2 (reverse) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-dark to-transparent z-10" />
          <motion.div
            className="flex gap-6"
            animate={{ x: [-1200, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          >
            {[...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials].map((item, i) => (
              <TestimonialCard key={i} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  name,
  location,
  rating,
  text,
  product,
}: (typeof testimonials)[0]) {
  return (
    <div className="flex-shrink-0 w-80 bg-bg-dark-card rounded-2xl p-6 border border-gold/10 hover:border-gold/25 transition-colors">
      <Quote className="w-6 h-6 text-gold/30 mb-3" />
      <p className="text-sm text-accent/70 leading-relaxed mb-4 line-clamp-4 font-light">{text}</p>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${i < rating ? 'fill-gold text-gold' : 'text-gold/20'}`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-accent/40">{location}</p>
        </div>
        <span className="text-[10px] text-gold bg-gold/10 px-2 py-1 rounded-full font-medium border border-gold/15">
          {product}
        </span>
      </div>
    </div>
  )
}
