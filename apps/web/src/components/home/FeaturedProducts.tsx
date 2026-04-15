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
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
        <BlurFade>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-light text-secondary mb-4">
              {t('title')}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto font-light text-sm">{t('subtitle')}</p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {featuredProducts.slice(0, 6).map((product, i) => (
            <BlurFade key={product.id} delay={i * 0.08}>
              <Link href={`/boutique/${product.slug}`} className="block h-full">
                <motion.article
                  className="group bg-bg h-full flex flex-col border-hover-gold transition-all"
                  whileHover={{ backgroundColor: '#F5F1EA' }}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-accent-light/30">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    {product.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] bg-primary text-white">
                        {badgeLabels[product.badge] || product.badge}
                      </span>
                    )}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <QuickAddButton product={product} />
                    </div>
                  </div>

                  {/* Info — flex-col to align all cards */}
                  <div className="p-5 flex flex-col flex-1">
                    {product.rating && (
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className={`w-3 h-3 ${j < Math.floor(product.rating!) ? 'fill-primary/60 text-primary/60' : 'text-border'}`}
                          />
                        ))}
                        {product.reviews && (
                          <span className="text-[10px] text-text-muted ml-1">({product.reviews})</span>
                        )}
                      </div>
                    )}
                    <h3 className="text-sm font-medium text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors flex-1">
                      {product.name}
                    </h3>
                    <div className="mt-auto pt-2">
                      <span className="text-lg font-medium text-primary">
                        {formatPrice(product.price)}
                      </span>
                      {product.stock <= 10 && product.stock > 0 && (
                        <div className="mt-1">
                          <StockIndicator stock={product.stock} showBar={false} />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              </Link>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            <Link href="/boutique">
              <button className="group inline-flex items-center gap-3 border border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300">
                {t('view_all')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/boutique/pack-builder">
              <button className="group inline-flex items-center gap-3 border border-primary/30 text-primary hover:bg-primary hover:text-white px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300">
                <Gift className="w-4 h-4" />
                Composer un pack
              </button>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
