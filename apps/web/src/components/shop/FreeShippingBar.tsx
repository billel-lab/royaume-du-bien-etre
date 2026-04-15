'use client'

import { motion } from 'framer-motion'
import { Truck, Check } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import { FREE_SHIPPING_THRESHOLD } from '@/lib/products'

export default function FreeShippingBar() {
  const total = useCartStore((s) => s.total())
  const remaining = FREE_SHIPPING_THRESHOLD - total
  const progress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100)
  const isFree = remaining <= 0

  if (total === 0) return null

  return (
    <div className={`rounded-xl p-4 ${isFree ? 'bg-success/10' : 'bg-accent-light'}`}>
      <div className="flex items-center gap-2 mb-2">
        {isFree ? (
          <Check className="w-4 h-4 text-success" />
        ) : (
          <Truck className="w-4 h-4 text-primary" />
        )}
        <p className="text-sm text-text-body">
          {isFree ? (
            <span className="font-semibold text-success">Livraison gratuite débloquée !</span>
          ) : (
            <>
              Plus que <span className="font-bold text-primary">{formatPrice(remaining)}</span> pour la livraison gratuite !
            </>
          )}
        </p>
      </div>
      <div className="w-full bg-accent rounded-full h-2">
        <motion.div
          className={`rounded-full h-2 ${isFree ? 'bg-success' : 'bg-primary'}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}
