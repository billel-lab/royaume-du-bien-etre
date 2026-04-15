'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import BlurFade from '@/components/ui/BlurFade'
import { categories as catData } from '@/lib/products'
import { ArrowRight } from 'lucide-react'

export default function Categories() {
  const t = useTranslations('categories')

  // Top 6 categories, 3 columns
  const displayCats = catData.slice(0, 6)

  return (
    <section className="py-24 lg:py-32 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-medium text-secondary mb-4">
              {t('title')}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto font-light">{t('subtitle')}</p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {displayCats.map((cat, i) => (
            <BlurFade key={cat.slug} delay={i * 0.08}>
              <Link href={`/boutique?cat=${cat.slug}`}>
                <motion.div
                  className="group relative bg-white rounded-2xl overflow-hidden border border-accent-dark/8 border-gold-hover cursor-pointer"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-accent-light/50">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-secondary group-hover:text-primary transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-text-muted font-light">{cat.count} produits</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
