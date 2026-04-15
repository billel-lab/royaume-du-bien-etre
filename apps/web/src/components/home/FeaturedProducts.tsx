'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Star, ArrowRight, Gift } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'
import QuickAddButton from '@/components/shop/QuickAddButton'
import StockIndicator from '@/components/shop/StockIndicator'
import { featuredProducts } from '@/lib/products'
import { formatPrice } from '@/lib/utils'

const badgeLabels: Record<string, string> = {
  'best-seller': 'Best-seller',
  'nouveau': 'Nouveau',
  'promo': 'Promo',
}

export default function FeaturedProducts() {
  const t = useTranslations('featured')

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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {featuredProducts.slice(0, 6).map((product, i) => (
            <BlurFade key={product.id} delay={i * 0.08}>
              <Link href={`/boutique/${product.slug}`}>
                <motion.article
                  className="group bg-white rounded-2xl overflow-hidden border border-accent-dark/8 border-gold-hover transition-all"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Image — larger, cleaner */}
                  <div className="relative aspect-square overflow-hidden bg-accent-light/40">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wide bg-primary/10 text-primary border border-primary/15">
                        {badgeLabels[product.badge] || product.badge}
                      </span>
                    )}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <QuickAddButton product={product} />
                    </div>
                  </div>

                  {/* Info — elegant spacing */}
                  <div className="p-5">
                    {product.rating && (
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className={`w-3 h-3 ${j < Math.floor(product.rating!) ? 'fill-primary/70 text-primary/70' : 'text-accent-dark/15'}`}
                          />
                        ))}
                        {product.reviews && (
                          <span className="text-[10px] text-text-muted ml-1 font-light">({product.reviews})</span>
                        )}
                      </div>
                    )}
                    <h3 className="text-sm font-medium text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-lg font-medium text-primary">
                      {formatPrice(product.price)}
                    </span>
                    {product.stock <= 10 && product.stock > 0 && (
                      <div className="mt-2">
                        <StockIndicator stock={product.stock} showBar={false} />
                      </div>
                    )}
                  </div>
                </motion.article>
              </Link>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            <Link href="/boutique">
              <motion.button
                className="group inline-flex items-center gap-2 border border-primary/25 text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-lg font-medium text-sm transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('view_all')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/boutique/pack-builder">
              <motion.button
                className="group inline-flex items-center gap-2 border border-gold/20 text-gold hover:bg-gold/5 px-8 py-3.5 rounded-lg font-medium text-sm transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Gift className="w-4 h-4" />
                Composer un pack
              </motion.button>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
