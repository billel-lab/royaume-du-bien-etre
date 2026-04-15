'use client'

import { motion } from 'framer-motion'
import { User, Package, Heart, MapPin, LogOut, ChevronRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import BlurFade from '@/components/ui/BlurFade'
import Link from 'next/link'

const menuItems = [
  { icon: Package, label: 'Mes commandes', desc: 'Suivre et gérer vos commandes', href: '/compte' },
  { icon: Heart, label: 'Mes favoris', desc: 'Vos produits sauvegardés', href: '/favoris' },
  { icon: MapPin, label: 'Mes adresses', desc: 'Gérer vos adresses de livraison', href: '/compte' },
  { icon: User, label: 'Mes informations', desc: 'Modifier votre profil', href: '/compte' },
]

export default function ComptePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        <div className="bg-accent/30 py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade>
              <div className="w-20 h-20 bg-accent border border-accent-dark/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl font-medium text-secondary mb-2">
                Mon Compte
              </h1>
              <p className="text-text-muted font-light">Gérez vos commandes, favoris et informations</p>
            </BlurFade>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="space-y-3">
            {menuItems.map((item, i) => (
              <BlurFade key={item.label} delay={i * 0.08}>
                <Link href={item.href}>
                  <motion.div
                    className="flex items-center gap-4 bg-white border border-accent-dark/10 rounded-xl p-5 hover:border-primary/20 transition-colors cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-secondary">{item.label}</p>
                      <p className="text-xs text-text-muted font-light">{item.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-text-muted" />
                  </motion.div>
                </Link>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.4}>
            <button className="flex items-center gap-2 text-sm text-text-muted hover:text-error mt-8 mx-auto transition-colors">
              <LogOut className="w-4 h-4" />
              Se déconnecter
            </button>
          </BlurFade>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
