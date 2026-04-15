'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Star, Quote } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'
import { testimonials } from '@/lib/testimonials'

export default function Testimonials() {
  const t = useTranslations('testimonials')

  return (
    <section className="py-24 lg:py-32 bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-medium text-secondary mb-4">
              {t('title')}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto font-light">{t('subtitle')}</p>
          </div>
        </BlurFade>

        {/* Marquee row 1 */}
        <div className="relative mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-alt to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-alt to-transparent z-10" />
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
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-alt to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-alt to-transparent z-10" />
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
    <div className="flex-shrink-0 w-80 bg-white p-6 border border-border border-hover-gold">
      <Quote className="w-5 h-5 text-primary/20 mb-3" />
      <p className="text-sm text-text-body leading-relaxed mb-4 line-clamp-4 font-light italic">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${i < rating ? 'fill-primary text-primary' : 'text-accent-dark/20'}`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-secondary">{name}</p>
          <p className="text-xs text-text-muted font-light">{location}</p>
        </div>
        <span className="text-[10px] text-primary bg-accent px-2.5 py-1 font-medium uppercase tracking-wide">
          {product}
        </span>
      </div>
    </div>
  )
}
