'use client'

import BlurFade from '@/components/ui/BlurFade'
import NumberTicker from '@/components/ui/NumberTicker'
import { Users, Package, Star, Award } from 'lucide-react'

const stats = [
  { icon: Users, value: 2500, suffix: '+', label: 'Clientes satisfaites' },
  { icon: Package, value: 32, suffix: '', label: 'Produits naturels' },
  { icon: Star, value: 4, suffix: '.9/5', label: 'Note moyenne' },
  { icon: Award, value: 3, suffix: ' ans', label: "D'expertise beauté" },
]

export default function Stats() {
  return (
    <section className="py-20 lg:py-24 bg-accent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={i * 0.1}>
              <div className="text-center relative">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-medium text-secondary mb-1">
                  <NumberTicker value={stat.value} suffix={stat.suffix} delay={0.3 + i * 0.15} />
                </div>
                <p className="text-xs sm:text-sm text-text-muted font-light">{stat.label}</p>

                {/* Subtle separator */}
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute top-3 -right-6 w-px h-14 bg-primary/10" />
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
