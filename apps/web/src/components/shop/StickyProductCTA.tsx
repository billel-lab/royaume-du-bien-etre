'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Check } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { formatPrice } from '@/lib/utils'
import type { Product } from '@/lib/products'

interface StickyProductCTAProps {
  product: Product
}

export default function StickyProductCTA({ product }: StickyProductCTAProps) {
  const [added, setAdded] = useState(false)
  const addItem = useCartStore((s) => s.addItem)

  const handleAdd = () => {
    if (product.stock <= 0 || added) return
    addItem({
      product_id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (product.stock <= 0) return null

  return (
    <div className="fixed bottom-16 left-0 right-0 z-40 bg-bg/95 backdrop-blur-xl border-t border-accent p-3 lg:hidden">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        <div>
          <p className="text-xs text-text-muted line-clamp-1">{product.name}</p>
          <p className="text-lg font-bold text-primary">{formatPrice(product.price)}</p>
        </div>
        <motion.button
          onClick={handleAdd}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors shadow-lg ${
            added
              ? 'bg-success text-white shadow-success/20'
              : 'bg-primary hover:bg-primary-dark text-white shadow-primary/20'
          }`}
          whileTap={{ scale: 0.95 }}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Ajouté !
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              Ajouter
            </>
          )}
        </motion.button>
      </div>
    </div>
  )
}
