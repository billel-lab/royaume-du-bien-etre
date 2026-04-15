'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Star, ArrowRight } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'
import QuickAddButton from '@/components/shop/QuickAddButton'
import StockIndicator from '@/components/shop/StockIndicator'
import { featuredProducts } from '@/lib/products'
import { formatPrice } from '@/lib/utils'

const badgeLabels: Record<string, string> = {
  'best-seller': 'Best-seller',
  'nouveau': 'Nouveau',
  'promo': 'Promo',
  'exclusif': 'Exclusif',
}

const badgeColors: Record<string, string> = {
  'best-seller': 'bg-gold text-white',
  'nouveau': 'bg-primary text-white',
  'promo': 'bg-error text-white',
  'exclusif': 'bg-secondary text-white',
}

export default function FeaturedProducts() {
  const t = useTranslations('featured')

  return (
    <section className="py-20 lg:py-28 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary mb-4">
              {t('title')}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featuredProducts.slice(0, 6).map((product, i) => (
            <BlurFade key={product.id} delay={i * 0.08}>
              <Link href={`/boutique/${product.slug}`}>
                <motion.article
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-shadow"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-accent-light">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    {product.badge && (
                      <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${badgeColors[product.badge] || 'bg-primary text-white'}`}>
                        {badgeLabels[product.badge] || product.badge}
                      </span>
                    )}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <QuickAddButton product={product} />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 sm:p-5">
                    {product.rating && (
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className={`w-3 h-3 ${j < Math.floor(product.rating!) ? 'fill-gold text-gold' : 'text-accent-dark/30'}`}
                          />
                        ))}
                        {product.reviews && (
                          <span className="text-[10px] text-text-muted ml-1">({product.reviews})</span>
                        )}
                      </div>
                    )}
                    <h3 className="text-sm sm:text-base font-semibold text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">
                          {formatPrice(product.price)}
                        </span>
                        {product.compare_price && (
                          <span className="text-sm text-text-muted line-through">
                            {formatPrice(product.compare_price)}
                          </span>
                        )}
                      </div>
                    </div>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/boutique">
              <motion.button
                className="group inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('view_all')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/boutique/pack-builder">
              <motion.button
                className="group inline-flex items-center gap-2 bg-gold/10 border-2 border-gold/30 text-gold hover:bg-gold hover:text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🎁 Composer un pack
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
