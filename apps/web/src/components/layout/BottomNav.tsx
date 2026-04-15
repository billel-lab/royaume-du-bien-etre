'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ShoppingBag, Search, Heart, User } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const navItems = [
  { icon: Home, label: 'Accueil', href: '/' },
  { icon: Search, label: 'Boutique', href: '/boutique' },
  { icon: ShoppingBag, label: 'Panier', href: '/panier', showBadge: true },
  { icon: Heart, label: 'Favoris', href: '/favoris' },
  { icon: User, label: 'Compte', href: '/compte' },
]

export default function BottomNav() {
  const pathname = usePathname()
  const itemCount = useCartStore((s) => s.itemCount())

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-xl border-t border-accent lg:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 w-16 h-full relative',
                'transition-colors active:scale-95',
                isActive ? 'text-primary' : 'text-text-muted'
              )}
            >
              <div className="relative">
                <item.icon className="w-5 h-5" />
                {item.showBadge && itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -right-2 bg-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="bottomnav-indicator"
                  className="absolute top-0 w-8 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
