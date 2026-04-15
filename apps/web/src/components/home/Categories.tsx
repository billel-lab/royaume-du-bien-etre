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
  const displayCats = catData.slice(0, 6)

  return (
    <section className="py-24 lg:py-32 bg-accent">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
        <BlurFade>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-light text-secondary mb-4">
              {t('title')}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto font-light text-sm">{t('subtitle')}</p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {displayCats.map((cat, i) => (
            <BlurFade key={cat.slug} delay={i * 0.08}>
              <Link href={`/boutique?cat=${cat.slug}`}>
                <motion.div
                  className="group bg-bg border border-border border-hover-gold cursor-pointer"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-accent-light/30">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5 border-t border-border flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-secondary group-hover:text-primary transition-colors uppercase tracking-[0.08em]">
                        {cat.name}
                      </h3>
                      <p className="text-[11px] text-text-muted font-light mt-0.5">{cat.count} produits</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
