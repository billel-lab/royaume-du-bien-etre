'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'
import { useCartStore } from '@/store/cart'
import { cn } from '@/lib/utils'
import { LOGO_URL } from '@/lib/products'

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'shop', href: '/boutique' },
  { key: 'about', href: '/a-propos' },
  { key: 'blog', href: '/blog' },
  { key: 'faq', href: '/faq' },
  { key: 'contact', href: '/contact' },
]

export default function Header() {
  const t = useTranslations('nav')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const itemCount = useCartStore((s) => s.itemCount())

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Free shipping banner */}
      <div className="bg-primary text-white text-center text-xs sm:text-sm py-2 font-medium tracking-wide">
        ✨ Livraison gratuite dès 79€ d&apos;achat ✨
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg/95 backdrop-blur-xl shadow-sm shadow-primary/5'
            : 'bg-bg/80 backdrop-blur-md'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src={LOGO_URL}
                alt="Royaume du Bien-Être"
                width={160}
                height={50}
                className="h-10 lg:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="text-sm font-medium text-text-body hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                className="p-2 hover:bg-accent/50 rounded-full transition-colors"
                aria-label="Rechercher"
              >
                <Search className="w-5 h-5 text-text-body" />
              </button>

              <Link
                href="/panier"
                className="relative p-2 hover:bg-accent/50 rounded-full transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-text-body" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 hover:bg-accent/50 rounded-full transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-bg border-t border-accent overflow-hidden"
            >
              <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 px-4 text-sm font-medium text-text-body hover:text-primary hover:bg-accent/30 rounded-lg transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
