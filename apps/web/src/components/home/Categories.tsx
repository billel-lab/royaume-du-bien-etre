'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import BlurFade from '@/components/ui/BlurFade'
import { categories as catData } from '@/lib/products'
import { Gift, Droplets, Sparkles, Scissors, FlaskConical, Eye, Hand, User } from 'lucide-react'

const iconMap: Record<string, typeof Gift> = {
  coffrets: Gift,
  cremes: Droplets,
  visage: Sparkles,
  capillaires: Scissors,
  huiles: FlaskConical,
  nettoyants: Droplets,
  yeux: Eye,
  corps: Hand,
  hommes: User,
}

const colorMap: Record<string, string> = {
  coffrets: 'bg-purple-50 text-purple-600',
  cremes: 'bg-pink-50 text-pink-600',
  visage: 'bg-rose-50 text-rose-600',
  capillaires: 'bg-amber-50 text-amber-600',
  huiles: 'bg-green-50 text-green-600',
  nettoyants: 'bg-blue-50 text-blue-600',
  yeux: 'bg-indigo-50 text-indigo-600',
  corps: 'bg-orange-50 text-orange-600',
  hommes: 'bg-slate-50 text-slate-600',
}

export default function Categories() {
  const t = useTranslations('categories')

  // Show top 6 categories
  const displayCats = catData.slice(0, 6)

  return (
    <section className="py-20 lg:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary mb-4">
              {t('title')}
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {displayCats.map((cat, i) => {
            const Icon = iconMap[cat.slug] || Sparkles
            const color = colorMap[cat.slug] || 'bg-gray-50 text-gray-600'

            return (
              <BlurFade key={cat.slug} delay={i * 0.08}>
                <Link href={`/boutique?cat=${cat.slug}`}>
                  <motion.div
                    className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer bg-accent-light"
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-2 shadow-sm`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-semibold text-white">{cat.name}</h3>
                      <p className="text-[10px] text-white/60">{cat.count} produits</p>
                    </div>
                  </motion.div>
                </Link>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
