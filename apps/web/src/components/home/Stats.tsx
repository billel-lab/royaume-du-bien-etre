'use client'

import BlurFade from '@/components/ui/BlurFade'
import NumberTicker from '@/components/ui/NumberTicker'
import ZelligeBackground from '@/components/ui/ZelligeBackground'
import { Users, Package, Star, Award } from 'lucide-react'

const stats = [
  { icon: Users, value: 2500, suffix: '+', label: 'Clientes satisfaites' },
  { icon: Package, value: 32, suffix: '', label: 'Produits naturels' },
  { icon: Star, value: 4, suffix: '.9/5', label: 'Note moyenne' },
  { icon: Award, value: 3, suffix: ' ans', label: "D'expertise beauté" },
]

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-secondary relative overflow-hidden">
      <ZelligeBackground variant="gold" opacity={0.06} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gold line top */}
        <div className="gold-line-thick mb-12" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={i * 0.1}>
              <div className="text-center relative">
                {/* Gold icon circle */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-gold-light" />
                </div>
                <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-gradient-gold mb-1">
                  <NumberTicker value={stat.value} suffix={stat.suffix} delay={0.3 + i * 0.15} />
                </div>
                <p className="text-xs sm:text-sm text-accent-dark/50 font-light">{stat.label}</p>

                {/* Gold vertical separator (desktop) */}
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute top-4 -right-6 w-px h-16 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
                )}
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Gold line bottom */}
        <div className="gold-line-thick mt-12" />
      </div>
    </section>
  )
}
