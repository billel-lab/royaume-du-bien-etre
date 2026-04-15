'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

interface StockIndicatorProps {
  stock: number
  showBar?: boolean
  maxStock?: number
}

export default function StockIndicator({ stock, showBar = true, maxStock = 50 }: StockIndicatorProps) {
  if (stock <= 0) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-error">
        <span className="w-1.5 h-1.5 bg-error rounded-full" />
        Rupture de stock
      </span>
    )
  }

  if (stock > 10) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
        <span className="w-1.5 h-1.5 bg-success rounded-full" />
        En stock
      </span>
    )
  }

  // Low stock (1-10)
  const percentage = (stock / maxStock) * 100

  return (
    <div>
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-warning">
        <AlertTriangle className="w-3 h-3" />
        Plus que {stock} en stock !
      </span>
      {showBar && (
        <div className="w-full bg-accent rounded-full h-1.5 mt-1.5">
          <motion.div
            className="bg-warning rounded-full h-1.5"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      )}
    </div>
  )
}
