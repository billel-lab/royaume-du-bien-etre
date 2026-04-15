'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Truck } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BlurFade from '@/components/ui/BlurFade'
import { formatPrice } from '@/lib/utils'
import { FREE_SHIPPING_THRESHOLD } from '@/lib/products'
import { useCartStore } from '@/store/cart'
import FreeShippingBar from '@/components/shop/FreeShippingBar'

export default function CartPage() {
  const items = useCartStore((s) => s.items)
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const removeItem = useCartStore((s) => s.removeItem)
  const total = useCartStore((s) => s.total())
  const shippingCost = total >= FREE_SHIPPING_THRESHOLD ? 0 : 5.95
  const remaining = FREE_SHIPPING_THRESHOLD - total

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BlurFade>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-secondary mb-8">
              Votre Panier
            </h1>
          </BlurFade>

          {items.length === 0 ? (
            <BlurFade>
              <div className="text-center py-20">
                <ShoppingBag className="w-16 h-16 text-accent-dark/20 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-secondary mb-2">Votre panier est vide</h2>
                <p className="text-text-muted mb-6">Découvrez nos produits naturels marocains</p>
                <Link href="/boutique">
                  <motion.button
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Continuer mes achats
                  </motion.button>
                </Link>
              </div>
            </BlurFade>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-4">
                {/* Free shipping progress */}
                <BlurFade>
                  <FreeShippingBar />
                </BlurFade>

                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.product_id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="bg-white rounded-2xl p-4 shadow-sm flex gap-4"
                    >
                      <Link href={`/boutique/${item.slug}`} className="flex-shrink-0">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-accent-light">
                          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
                        </div>
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link href={`/boutique/${item.slug}`}>
                          <h3 className="text-sm font-semibold text-secondary hover:text-primary transition-colors line-clamp-1">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-base font-bold text-primary mt-1">{formatPrice(item.price)}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-accent-dark/20 rounded-lg overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                              className="px-3 py-1.5 hover:bg-accent/50 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 py-1.5 text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                              className="px-3 py-1.5 hover:bg-accent/50 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-secondary">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                            <button
                              onClick={() => removeItem(item.product_id)}
                              className="p-1.5 text-text-muted hover:text-error transition-colors"
                              aria-label="Supprimer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <Link href="/boutique" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark font-medium mt-4">
                  <ArrowLeft className="w-4 h-4" />
                  Continuer mes achats
                </Link>
              </div>

              {/* Order summary */}
              <BlurFade delay={0.2}>
                <div className="bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-24">
                  <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-secondary mb-6">
                    Récapitulatif
                  </h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Sous-total</span>
                      <span className="font-medium">{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Livraison</span>
                      <span className={`font-medium ${shippingCost === 0 ? 'text-success' : ''}`}>
                        {shippingCost === 0 ? 'Gratuite' : formatPrice(shippingCost)}
                      </span>
                    </div>
                    <div className="border-t border-accent pt-3 flex justify-between">
                      <span className="font-semibold text-secondary">Total</span>
                      <span className="text-xl font-bold text-primary">{formatPrice(total + shippingCost)}</span>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <motion.button
                      className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-primary/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Passer commande
                    </motion.button>
                  </Link>
                  <p className="text-[10px] text-text-muted text-center mt-3">
                    Paiement sécurisé · Satisfait ou remboursé
                  </p>
                </div>
              </BlurFade>
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
