'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Sparkles, ArrowRight, RotateCcw, ShoppingBag, Check } from 'lucide-react'
import BlurFade from '@/components/ui/BlurFade'
import { products, type Product } from '@/lib/products'
import { formatPrice } from '@/lib/utils'
import { useCartStore } from '@/store/cart'

type Concern = 'hydration' | 'hair' | 'cleansing' | null
type Budget = 'low' | 'mid' | 'high' | null

function getRecommendations(concern: Concern, budget: Budget): Product[] {
  if (!concern || !budget) return []

  const categoryMap: Record<string, string[]> = {
    hydration: ['cremes', 'visage', 'huiles'],
    hair: ['capillaires'],
    cleansing: ['nettoyants', 'visage'],
  }

  const budgetFilter = (p: Product) => {
    if (budget === 'low') return p.price < 15
    if (budget === 'mid') return p.price >= 15 && p.price <= 30
    return p.price > 30
  }

  const cats = categoryMap[concern] || []
  const filtered = products
    .filter((p) => cats.includes(p.categorySlug) && p.stock > 0)
    .filter(budgetFilter)

  if (filtered.length >= 3) return filtered.slice(0, 3)

  // Fallback: relax budget filter
  const relaxed = products
    .filter((p) => cats.includes(p.categorySlug) && p.stock > 0)
    .slice(0, 3)

  return relaxed.length > 0 ? relaxed : products.filter((p) => p.is_featured && p.stock > 0).slice(0, 3)
}

export default function ProductFinder() {
  const t = useTranslations('finder')
  const [step, setStep] = useState<0 | 1 | 2>(0)
  const [concern, setConcern] = useState<Concern>(null)
  const [budget, setBudget] = useState<Budget>(null)
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set())
  const addItem = useCartStore((s) => s.addItem)

  const recommendations = getRecommendations(concern, budget)

  const handleConcern = (c: Concern) => {
    setConcern(c)
    setStep(1)
  }

  const handleBudget = (b: Budget) => {
    setBudget(b)
    setStep(2)
  }

  const restart = () => {
    setStep(0)
    setConcern(null)
    setBudget(null)
    setAddedIds(new Set())
  }

  const handleAdd = (product: Product) => {
    addItem({
      product_id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    })
    setAddedIds((prev) => new Set(prev).add(product.id))
  }

  const concerns = [
    { key: 'hydration' as const, label: t('q1_a1'), emoji: '💧' },
    { key: 'hair' as const, label: t('q1_a2'), emoji: '💇' },
    { key: 'cleansing' as const, label: t('q1_a3'), emoji: '🧼' },
  ]

  const budgets = [
    { key: 'low' as const, label: t('q2_a1'), emoji: '💰' },
    { key: 'mid' as const, label: t('q2_a2'), emoji: '💎' },
    { key: 'high' as const, label: t('q2_a3'), emoji: '🎁' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Quiz beauté</span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-secondary mb-3">
              {t('title')}
            </h2>
            <p className="text-text-muted">{t('subtitle')}</p>
          </div>
        </BlurFade>

        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-accent/50">
          {/* Progress */}
          <div className="flex gap-2 mb-8">
            {[0, 1, 2].map((s) => (
              <div
                key={s}
                className={`flex-1 h-1.5 rounded-full transition-colors ${
                  step >= s ? 'bg-primary' : 'bg-accent'
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="q1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-lg font-semibold text-secondary mb-4">{t('q1')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {concerns.map((c) => (
                    <motion.button
                      key={c.key}
                      onClick={() => handleConcern(c.key)}
                      className="flex items-center gap-3 p-4 rounded-xl border-2 border-accent hover:border-primary bg-accent-light/30 hover:bg-primary/5 transition-colors text-left"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-2xl">{c.emoji}</span>
                      <span className="text-sm font-medium text-secondary">{c.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div key="q2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-lg font-semibold text-secondary mb-4">{t('q2')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {budgets.map((b) => (
                    <motion.button
                      key={b.key}
                      onClick={() => handleBudget(b.key)}
                      className="flex items-center gap-3 p-4 rounded-xl border-2 border-accent hover:border-primary bg-accent-light/30 hover:bg-primary/5 transition-colors text-left"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-2xl">{b.emoji}</span>
                      <span className="text-sm font-medium text-secondary">{b.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-secondary">{t('results')}</h3>
                  <button
                    onClick={restart}
                    className="flex items-center gap-1.5 text-xs text-primary hover:text-primary-dark font-medium"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    {t('restart')}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {recommendations.map((product) => {
                    const isAdded = addedIds.has(product.id)
                    return (
                      <motion.div
                        key={product.id}
                        className="bg-accent-light/30 rounded-xl p-4 border border-accent/50"
                        whileHover={{ y: -2 }}
                      >
                        <Link href={`/boutique/${product.slug}`}>
                          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white mb-3">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain p-2"
                              sizes="200px"
                            />
                          </div>
                          <h4 className="text-sm font-semibold text-secondary mb-1 line-clamp-2 hover:text-primary transition-colors">
                            {product.name}
                          </h4>
                        </Link>
                        <p className="text-lg font-bold text-primary mb-3">{formatPrice(product.price)}</p>
                        <motion.button
                          onClick={() => handleAdd(product)}
                          disabled={isAdded}
                          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                            isAdded
                              ? 'bg-success text-white'
                              : 'bg-primary hover:bg-primary-dark text-white'
                          }`}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isAdded ? (
                            <><Check className="w-3.5 h-3.5" /> Ajouté !</>
                          ) : (
                            <><ShoppingBag className="w-3.5 h-3.5" /> {t('add')}</>
                          )}
                        </motion.button>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
