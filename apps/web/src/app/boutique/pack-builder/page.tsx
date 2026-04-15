'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Star, X, ShoppingBag, Check, ArrowLeft, Sparkles } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BlurFade from '@/components/ui/BlurFade'
import { products, categories, type Product } from '@/lib/products'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cart'
import Link from 'next/link'

const packs = [
  { key: 'trio', emoji: '🎁', label: 'Trio', count: 3, discount: 5, color: 'border-blue-400 bg-blue-50' },
  { key: 'decouverte', emoji: '🌍', label: 'Découverte', count: 6, discount: 10, color: 'border-primary bg-primary/5' },
  { key: 'famille', emoji: '🏆', label: 'Famille', count: 9, discount: 15, color: 'border-gold bg-gold/5' },
]

export default function PackBuilderPage() {
  const router = useRouter()
  const addItem = useCartStore((s) => s.addItem)
  const [selectedPack, setSelectedPack] = useState<number | null>(null)
  const [selection, setSelection] = useState<Product[]>([])
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [added, setAdded] = useState(false)

  const pack = selectedPack !== null ? packs[selectedPack] : null
  const maxItems = pack?.count || 0
  const discountPct = pack?.discount || 0

  const availableProducts = products
    .filter((p) => p.stock > 0)
    .filter((p) => categoryFilter === 'all' || p.categorySlug === categoryFilter)

  const subtotal = selection.reduce((s, p) => s + p.price, 0)
  const discountAmount = subtotal * (discountPct / 100)
  const total = subtotal - discountAmount

  const toggleProduct = (product: Product) => {
    if (selection.find((p) => p.id === product.id)) {
      setSelection(selection.filter((p) => p.id !== product.id))
    } else if (selection.length < maxItems) {
      setSelection([...selection, product])
    }
  }

  const handleSelectPack = (index: number) => {
    setSelectedPack(index)
    const newMax = packs[index].count
    if (selection.length > newMax) {
      setSelection(selection.slice(0, newMax))
    }
  }

  const handleAddToCart = () => {
    selection.forEach((product) => {
      addItem({
        product_id: product.id,
        name: product.name,
        price: product.price * (1 - discountPct / 100),
        image: product.image,
        slug: product.slug,
      })
    })
    setAdded(true)
    setTimeout(() => router.push('/panier'), 1500)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        {/* Hero */}
        <div className="bg-gradient-to-br from-accent-light via-bg to-accent/30 py-12 lg:py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <BlurFade>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
                <Gift className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">Économisez jusqu&apos;à 15%</span>
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary mb-3">
                Composez Votre Pack
              </h1>
              <p className="text-text-muted max-w-xl mx-auto">
                Créez votre propre coffret personnalisé et profitez de réductions exclusives
              </p>
            </BlurFade>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Step 1: Pack size */}
          {selectedPack === null ? (
            <BlurFade>
              <h2 className="text-lg font-semibold text-secondary mb-6 text-center">
                Choisissez la taille de votre pack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {packs.map((p, i) => (
                  <motion.button
                    key={p.key}
                    onClick={() => handleSelectPack(i)}
                    className={`border-2 ${p.color} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-4xl block mb-3">{p.emoji}</span>
                    <h3 className="text-xl font-bold text-secondary mb-1">{p.label}</h3>
                    <p className="text-sm text-text-muted mb-2">{p.count} produits</p>
                    <span className="inline-block bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                      -{p.discount}%
                    </span>
                  </motion.button>
                ))}
              </div>
            </BlurFade>
          ) : (
            /* Step 2: Product selection */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Products */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => { setSelectedPack(null); setSelection([]) }}
                    className="flex items-center gap-1.5 text-sm text-text-muted hover:text-primary"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Changer de pack
                  </button>
                  <span className="text-sm text-text-muted">
                    {selection.length}/{maxItems} sélectionné{selection.length > 1 ? 's' : ''}
                  </span>
                </div>

                {/* Category filter */}
                <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
                  <button
                    onClick={() => setCategoryFilter('all')}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      categoryFilter === 'all' ? 'bg-primary text-white' : 'bg-accent/50 text-text-body hover:bg-accent'
                    }`}
                  >
                    Tous
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setCategoryFilter(cat.slug)}
                      className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        categoryFilter === cat.slug ? 'bg-primary text-white' : 'bg-accent/50 text-text-body hover:bg-accent'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableProducts.map((product) => {
                    const isSelected = selection.some((p) => p.id === product.id)
                    const isFull = selection.length >= maxItems && !isSelected
                    return (
                      <motion.button
                        key={product.id}
                        onClick={() => toggleProduct(product)}
                        disabled={isFull}
                        className={`relative rounded-xl p-3 border-2 text-left transition-colors ${
                          isSelected
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                            : isFull
                            ? 'border-accent opacity-40 cursor-not-allowed'
                            : 'border-accent hover:border-primary/30 bg-white'
                        }`}
                        whileHover={!isFull ? { scale: 1.02 } : undefined}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10"
                          >
                            <Check className="w-3.5 h-3.5 text-white" />
                          </motion.div>
                        )}
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-accent-light mb-2">
                          <Image src={product.image} alt={product.name} fill className="object-contain p-1" sizes="150px" />
                        </div>
                        <h4 className="text-xs font-semibold text-secondary line-clamp-2 mb-1">{product.name}</h4>
                        <p className="text-sm font-bold text-primary">{formatPrice(product.price)}</p>
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* Summary sidebar */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-accent/50">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{pack!.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-secondary">Pack {pack!.label}</h3>
                      <p className="text-xs text-primary font-medium">-{discountPct}% de réduction</p>
                    </div>
                  </div>

                  {/* Selected items */}
                  <div className="space-y-2 mb-4">
                    {selection.map((product) => (
                      <div key={product.id} className="flex items-center gap-2 bg-accent-light/30 rounded-lg p-2">
                        <div className="w-8 h-8 rounded-md overflow-hidden bg-white relative flex-shrink-0">
                          <Image src={product.image} alt="" fill className="object-contain" sizes="32px" />
                        </div>
                        <span className="text-xs text-text-body flex-1 line-clamp-1">{product.name}</span>
                        <span className="text-xs font-medium text-text-muted">{formatPrice(product.price)}</span>
                        <button onClick={() => toggleProduct(product)} className="p-0.5 hover:text-error">
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                    {/* Empty slots */}
                    {Array.from({ length: maxItems - selection.length }).map((_, i) => (
                      <div key={`empty-${i}`} className="flex items-center gap-2 border border-dashed border-accent-dark/20 rounded-lg p-2">
                        <div className="w-8 h-8 rounded-md bg-accent/30 flex items-center justify-center">
                          <span className="text-xs text-text-muted">+1</span>
                        </div>
                        <span className="text-xs text-text-muted">Emplacement vide</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="border-t border-accent pt-4 space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Sous-total</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-success">Réduction -{discountPct}%</span>
                        <span className="text-success font-medium">-{formatPrice(discountAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t border-accent">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(total)}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    onClick={handleAddToCart}
                    disabled={selection.length < maxItems || added}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                      added
                        ? 'bg-success text-white'
                        : selection.length < maxItems
                        ? 'bg-accent text-text-muted cursor-not-allowed'
                        : 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20'
                    }`}
                    whileTap={selection.length >= maxItems ? { scale: 0.98 } : undefined}
                  >
                    {added ? (
                      <><Check className="w-4 h-4" /> Ajouté au panier !</>
                    ) : selection.length < maxItems ? (
                      `Choisir ${maxItems - selection.length} de plus`
                    ) : (
                      <><ShoppingBag className="w-4 h-4" /> Ajouter le pack au panier</>
                    )}
                  </motion.button>

                  {discountAmount > 0 && (
                    <p className="text-xs text-success text-center mt-2 font-medium">
                      Vous économisez {formatPrice(discountAmount)} !
                    </p>
                  )}

                  <Link href="/boutique" className="block text-center text-xs text-text-muted hover:text-primary mt-3">
                    Voir tous les produits
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </>
  )
}
