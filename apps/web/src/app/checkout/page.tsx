'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Lock, CreditCard, Truck } from 'lucide-react'
import Header from '@/components/layout/Header'
import BlurFade from '@/components/ui/BlurFade'
import { formatPrice, FREE_SHIPPING_THRESHOLD } from '@/lib/utils'
import { useCartStore } from '@/store/cart'

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items)
  const total = useCartStore((s) => s.total())
  const shippingCost = total >= FREE_SHIPPING_THRESHOLD ? 0 : 5.95
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postal: '',
    country: 'BE',
    notes: '',
  })

  const updateField = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/mollie/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({
            product_id: i.product_id,
            name: i.name,
            quantity: i.quantity,
            price: i.price,
          })),
          customer: form,
          total: total + shippingCost,
          shipping_cost: shippingCost,
        }),
      })

      const data = await response.json()
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      }
    } catch {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-bg flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-secondary mb-4">Votre panier est vide</h1>
            <Link href="/boutique" className="text-primary hover:text-primary-dark font-medium">
              Retour à la boutique
            </Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BlurFade>
            <Link href="/panier" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary mb-6">
              <ArrowLeft className="w-4 h-4" />
              Retour au panier
            </Link>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-secondary mb-8">
              Finaliser la commande
            </h1>
          </BlurFade>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2 space-y-6">
                <BlurFade>
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="font-semibold text-secondary mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Informations de contact
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1.5">Prénom *</label>
                        <input type="text" required value={form.firstName} onChange={(e) => updateField('firstName', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1.5">Nom *</label>
                        <input type="text" required value={form.lastName} onChange={(e) => updateField('lastName', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1.5">Email *</label>
                        <input type="email" required value={form.email} onChange={(e) => updateField('email', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1.5">Téléphone *</label>
                        <input type="tel" required value={form.phone} onChange={(e) => updateField('phone', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
                      </div>
                    </div>
                  </div>
                </BlurFade>

                <BlurFade delay={0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="font-semibold text-secondary mb-4 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-primary" />
                      Adresse de livraison
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1.5">Adresse *</label>
                        <input type="text" required value={form.address} onChange={(e) => updateField('address', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-text-muted mb-1.5">Code postal *</label>
                          <input type="text" required value={form.postal} onChange={(e) => updateField('postal', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-text-muted mb-1.5">Ville *</label>
                          <input type="text" required value={form.city} onChange={(e) => updateField('city', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-text-muted mb-1.5">Pays *</label>
                          <select value={form.country} onChange={(e) => updateField('country', e.target.value)} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary">
                            <option value="BE">Belgique</option>
                            <option value="FR">France</option>
                            <option value="NL">Pays-Bas</option>
                            <option value="LU">Luxembourg</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-text-muted mb-1.5">Notes (optionnel)</label>
                        <textarea value={form.notes} onChange={(e) => updateField('notes', e.target.value)} rows={3} className="w-full border border-accent-dark/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 resize-none" placeholder="Instructions spéciales pour la livraison..." />
                      </div>
                    </div>
                  </div>
                </BlurFade>
              </div>

              {/* Summary */}
              <BlurFade delay={0.2}>
                <div className="bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-24">
                  <h2 className="font-semibold text-secondary mb-4">Votre commande</h2>
                  <div className="space-y-3 mb-4">
                    {items.map((item) => (
                      <div key={item.product_id} className="flex gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-accent-light flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="48px" />
                          <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-secondary line-clamp-1">{item.name}</p>
                          <p className="text-xs text-text-muted">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-accent pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Sous-total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Livraison</span>
                      <span className={shippingCost === 0 ? 'text-success' : ''}>
                        {shippingCost === 0 ? 'Gratuite' : formatPrice(shippingCost)}
                      </span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t border-accent">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(total + shippingCost)}</span>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 text-white py-4 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-primary/20 mt-6"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Lock className="w-4 h-4" />
                    {loading ? 'Redirection...' : 'Payer maintenant'}
                  </motion.button>
                  <p className="text-[10px] text-text-muted text-center mt-3 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    Paiement sécurisé par Mollie
                  </p>
                </div>
              </BlurFade>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
