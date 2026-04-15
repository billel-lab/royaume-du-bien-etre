'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Check } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import type { Product } from '@/lib/products'

interface QuickAddButtonProps {
  product: Product
  className?: string
  size?: 'sm' | 'md'
}

export default function QuickAddButton({ product, className = '', size = 'sm' }: QuickAddButtonProps) {
  const [added, setAdded] = useState(false)
  const addItem = useCartStore((s) => s.addItem)

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
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

  const sizeClasses = size === 'sm' ? 'w-10 h-10' : 'w-12 h-12'

  return (
    <motion.button
      onClick={handleAdd}
      className={`${sizeClasses} rounded-full flex items-center justify-center shadow-md transition-colors ${
        added
          ? 'bg-success text-white'
          : 'bg-white/90 backdrop-blur-sm text-primary hover:bg-primary hover:text-white'
      } ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={added ? 'Ajouté !' : 'Ajouter au panier'}
    >
      {added ? (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <Check className="w-4 h-4" />
        </motion.div>
      ) : (
        <ShoppingBag className="w-4 h-4" />
      )}
    </motion.button>
  )
}
