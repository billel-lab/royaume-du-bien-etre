'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Trash2 } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import BlurFade from '@/components/ui/BlurFade'
import { useWishlistStore } from '@/store/wishlist'
import { useCartStore } from '@/store/cart'
import { products } from '@/lib/products'
import { formatPrice } from '@/lib/utils'

export default function FavorisPage() {
  const wishlistIds = useWishlistStore((s) => s.items)
  const toggle = useWishlistStore((s) => s.toggle)
  const addItem = useCartStore((s) => s.addItem)

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <BlurFade>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-secondary mb-2">
              Mes Favoris
            </h1>
            <p className="text-text-muted font-light mb-8">
              {wishlistProducts.length} produit{wishlistProducts.length !== 1 ? 's' : ''} sauvegardé{wishlistProducts.length !== 1 ? 's' : ''}
            </p>
          </BlurFade>

          {wishlistProducts.length === 0 ? (
            <BlurFade>
              <div className="text-center py-20">
                <Heart className="w-16 h-16 text-accent-dark/20 mx-auto mb-4" />
                <h2 className="text-lg font-medium text-secondary mb-2">Aucun favori</h2>
                <p className="text-text-muted text-sm font-light mb-6">
                  Ajoutez des produits à vos favoris pour les retrouver ici
                </p>
                <Link href="/boutique">
                  <motion.button
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-primary-dark transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    Découvrir la boutique
                  </motion.button>
                </Link>
              </div>
            </BlurFade>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {wishlistProducts.map((product, i) => (
                <BlurFade key={product.id} delay={i * 0.05}>
                  <div className="bg-white rounded-xl border border-accent-dark/10 overflow-hidden">
                    <Link href={`/boutique/${product.slug}`}>
                      <div className="relative aspect-square bg-accent-light">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-4"
                          sizes="25vw"
                        />
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link href={`/boutique/${product.slug}`}>
                        <h3 className="text-sm font-medium text-secondary line-clamp-2 mb-1 hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-base font-medium text-primary mb-3">{formatPrice(product.price)}</p>
                      <div className="flex gap-2">
                        <motion.button
                          onClick={() => {
                            addItem({
                              product_id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.image,
                              slug: product.slug,
                            })
                          }}
                          className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-white py-2 rounded-lg text-xs font-medium hover:bg-primary-dark transition-colors"
                          whileTap={{ scale: 0.95 }}
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Ajouter
                        </motion.button>
                        <button
                          onClick={() => toggle(product.id)}
                          className="w-9 h-9 flex items-center justify-center border border-accent-dark/15 rounded-lg text-text-muted hover:text-error hover:border-error/20 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
