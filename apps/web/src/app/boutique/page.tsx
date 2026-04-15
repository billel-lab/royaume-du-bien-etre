'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Gift } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BlurFade from '@/components/ui/BlurFade'
import QuickAddButton from '@/components/shop/QuickAddButton'
import StockIndicator from '@/components/shop/StockIndicator'
import { products, categories as catData } from '@/lib/products'
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

export default function BoutiquePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'newest'>('popular')

  const filtered = products
    .filter((p) => activeCategory === 'all' || p.categorySlug === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      return (b.reviews || 0) - (a.reviews || 0)
    })

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        {/* Page header */}
        <div className="bg-gradient-to-br from-accent-light to-accent/30 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary mb-3">
                Notre Boutique
              </h1>
              <p className="text-text-muted max-w-xl mx-auto mb-4">
                {products.length} produits naturels artisanaux du Maroc
              </p>
              <Link href="/boutique/pack-builder">
                <motion.button
                  className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold hover:bg-gold hover:text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
                  whileHover={{ scale: 1.03 }}
                >
                  <Gift className="w-4 h-4" />
                  Composer un pack · Jusqu&apos;à -15%
                </motion.button>
              </Link>
            </BlurFade>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters */}
          <BlurFade>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === 'all' ? 'bg-primary text-white' : 'bg-accent/50 text-text-body hover:bg-accent'
                  }`}
                >
                  Tout ({products.length})
                </button>
                {catData.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === cat.slug ? 'bg-primary text-white' : 'bg-accent/50 text-text-body hover:bg-accent'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-white border border-accent-dark/20 rounded-lg px-4 py-2 text-sm text-text-body focus:outline-none focus:border-primary"
              >
                <option value="popular">Les plus populaires</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="newest">Nouveautés</option>
              </select>
            </div>
          </BlurFade>

          <p className="text-sm text-text-muted mb-6">{filtered.length} produit{filtered.length > 1 ? 's' : ''}</p>

          {/* Products grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((product, i) => (
              <BlurFade key={product.id} delay={i * 0.04}>
                <Link href={`/boutique/${product.slug}`}>
                  <motion.article
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-shadow"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative aspect-square overflow-hidden bg-accent-light">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      {product.badge && (
                        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${badgeColors[product.badge] || 'bg-primary text-white'}`}>
                          {badgeLabels[product.badge] || product.badge}
                        </span>
                      )}
                      {product.stock <= 0 && (
                        <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                          <span className="bg-error text-white text-xs font-bold px-3 py-1.5 rounded-full">Rupture</span>
                        </div>
                      )}
                      {product.stock > 0 && (
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <QuickAddButton product={product} />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      {product.rating && (
                        <div className="flex items-center gap-1 mb-1.5">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className={`w-3 h-3 ${j < Math.floor(product.rating!) ? 'fill-gold text-gold' : 'text-accent-dark/30'}`} />
                          ))}
                          {product.reviews && (
                            <span className="text-[10px] text-text-muted ml-1">({product.reviews})</span>
                          )}
                        </div>
                      )}
                      <h3 className="text-sm font-semibold text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-primary">{formatPrice(product.price)}</span>
                        {product.compare_price && (
                          <span className="text-xs text-text-muted line-through">{formatPrice(product.compare_price)}</span>
                        )}
                      </div>
                      {product.stock > 0 && product.stock <= 10 && (
                        <div className="mt-2">
                          <StockIndicator stock={product.stock} showBar={true} />
                        </div>
                      )}
                    </div>
                  </motion.article>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </>
  )
}
