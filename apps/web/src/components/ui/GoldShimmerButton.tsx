'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GoldShimmerButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit'
}

export default function GoldShimmerButton({
  children,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}: GoldShimmerButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 overflow-hidden',
        'bg-gradient-to-r from-gold-dark via-gold to-gold-light',
        'text-white font-semibold text-sm',
        'px-10 py-4 rounded-xl',
        'shadow-lg shadow-gold/25',
        'transition-all duration-300',
        'hover:shadow-gold-glow-lg hover:scale-[1.02]',
        'active:scale-[0.98]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  )
}
