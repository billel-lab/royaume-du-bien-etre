'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ShoppingBag, Star, Minus, Plus, ArrowLeft, Truck, RotateCcw, Shield, Check, Gift } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BlurFade from '@/components/ui/BlurFade'
import StockIndicator from '@/components/shop/StockIndicator'
import StickyProductCTA from '@/components/shop/StickyProductCTA'
import { getProductBySlug, products } from '@/lib/products'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cart'

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = getProductBySlug(slug) || products[0]

  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'usage'>('description')
  const addItem = useCartStore((s) => s.addItem)

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id && p.stock > 0)
    .slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        product_id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        slug: product.slug,
      })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-32 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <BlurFade>
            <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
              <Link href="/boutique" className="hover:text-primary transition-colors flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                Boutique
              </Link>
              <span>/</span>
              <span className="text-text">{product.category}</span>
              <span>/</span>
              <span className="text-text line-clamp-1">{product.name}</span>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image */}
            <BlurFade>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-accent-light">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase">
                    {product.badge === 'best-seller' ? 'Best-seller' : product.badge === 'nouveau' ? 'Nouveau' : product.badge}
                  </span>
                )}
              </div>
            </BlurFade>

            {/* Product info */}
            <BlurFade delay={0.15}>
              <div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>

                <h1 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-semibold text-secondary mt-4 mb-3">
                  {product.name}
                </h1>

                {product.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-4 h-4 ${j < Math.floor(product.rating!) ? 'fill-gold text-gold' : 'text-accent-dark/30'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-text-muted">{product.rating}/5 ({product.reviews} avis)</span>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
                  {product.compare_price && (
                    <span className="text-lg text-text-muted line-through">{formatPrice(product.compare_price)}</span>
                  )}
                </div>

                {/* Stock */}
                <div className="mb-6">
                  <StockIndicator stock={product.stock} showBar={product.stock <= 10} />
                </div>

                {/* Quantity + Add to cart */}
                {product.stock > 0 && (
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="flex items-center border border-accent-dark/20 rounded-xl overflow-hidden">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-accent/50 transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-6 py-3 font-semibold text-center min-w-[60px]">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-accent/50 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <motion.button
                      onClick={handleAddToCart}
                      disabled={added}
                      className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-lg ${
                        added
                          ? 'bg-success text-white shadow-success/20'
                          : 'bg-primary hover:bg-primary-dark text-white shadow-primary/20'
                      }`}
                      whileHover={{ scale: added ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {added ? (
                        <><Check className="w-4 h-4" /> Ajouté au panier !</>
                      ) : (
                        <><ShoppingBag className="w-4 h-4" /> Ajouter — {formatPrice(product.price * quantity)}</>
                      )}
                    </motion.button>
                  </div>
                )}

                {/* Pack upsell banner */}
                <Link href="/boutique/pack-builder" className="block mb-6">
                  <div className="bg-gold/5 border border-gold/20 rounded-xl p-4 flex items-center gap-3 hover:bg-gold/10 transition-colors">
                    <Gift className="w-5 h-5 text-gold flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-secondary">Idéal pour un pack !</p>
                      <p className="text-xs text-text-muted">Composez votre coffret et économisez jusqu&apos;à 15%</p>
                    </div>
                  </div>
                </Link>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-accent-light/50 rounded-xl mb-6">
                  <div className="text-center">
                    <Truck className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-[10px] text-text-muted">Livraison 48h</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-[10px] text-text-muted">Retour 14 jours</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-[10px] text-text-muted">Paiement sécurisé</p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-accent-dark/10 mb-4">
                  <div className="flex gap-6">
                    {(['description', 'ingredients', 'usage'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                          activeTab === tab ? 'text-primary border-primary' : 'text-text-muted border-transparent hover:text-text'
                        }`}
                      >
                        {tab === 'description' ? 'Description' : tab === 'ingredients' ? 'Ingrédients' : 'Utilisation'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-text-body leading-relaxed">
                  {activeTab === 'description' && (product.description || 'Description à venir.')}
                  {activeTab === 'ingredients' && (product.ingredients || 'Ingrédients 100% naturels. Liste complète disponible sur l\'emballage.')}
                  {activeTab === 'usage' && (product.usage || 'Appliquer sur peau propre. Masser délicatement. Utiliser matin et soir pour de meilleurs résultats.')}
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <BlurFade>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-secondary mb-6">
                  Vous aimerez aussi
                </h2>
              </BlurFade>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {relatedProducts.map((rp, i) => (
                  <BlurFade key={rp.id} delay={i * 0.08}>
                    <Link href={`/boutique/${rp.slug}`}>
                      <motion.div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow" whileHover={{ y: -4 }}>
                        <div className="relative aspect-square bg-accent-light">
                          <Image src={rp.image} alt={rp.name} fill className="object-contain p-3 group-hover:scale-105 transition-transform duration-300" sizes="25vw" />
                        </div>
                        <div className="p-3">
                          <h3 className="text-xs font-semibold text-secondary line-clamp-2 mb-1 group-hover:text-primary transition-colors">{rp.name}</h3>
                          <p className="text-sm font-bold text-primary">{formatPrice(rp.price)}</p>
                        </div>
                      </motion.div>
                    </Link>
                  </BlurFade>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
      <StickyProductCTA product={product} />
    </>
  )
}
