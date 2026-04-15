'use client'

import Image from 'next/image'
import { Leaf, Heart, Globe, Award } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BlurFade from '@/components/ui/BlurFade'
import NumberTicker from '@/components/ui/NumberTicker'

const values = [
  { icon: Leaf, title: 'Naturalité', desc: 'Uniquement des ingrédients naturels, sans aucun produit chimique ni additif synthétique.' },
  { icon: Heart, title: 'Authenticité', desc: "Nos recettes sont héritées de la tradition marocaine, transmises de génération en génération." },
  { icon: Globe, title: 'Durabilité', desc: 'Emballages recyclables, sourcing éthique et respect des communautés locales marocaines.' },
  { icon: Award, title: 'Excellence', desc: 'Chaque produit passe par un contrôle qualité rigoureux pour garantir pureté et efficacité.' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        {/* Hero */}
        <div className="relative py-20 lg:py-28 bg-gradient-to-br from-accent-light to-accent/30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <BlurFade>
                <div>
                  <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary mb-4">
                    Notre Histoire
                  </h1>
                  <p className="text-text-body leading-relaxed mb-4">
                    <strong>Royaume du Bien-Être</strong> est né d&apos;une passion profonde pour les trésors de beauté du Maroc. Depuis 2025, nous sélectionnons les meilleurs ingrédients naturels des terroirs marocains pour créer des soins authentiques et efficaces.
                  </p>
                  <p className="text-text-body leading-relaxed mb-4">
                    Chaque produit raconte une histoire : celle des femmes berbères qui, depuis des siècles, utilisent l&apos;huile d&apos;argan pour sublimer leur peau, celle des jardins de roses de la vallée du Dadès, celle du savon noir artisanal de Marrakech.
                  </p>
                  <p className="text-text-body leading-relaxed">
                    Notre mission est simple : vous offrir le meilleur de la cosmétique naturelle marocaine, avec respect pour la tradition et exigence pour la qualité.
                  </p>
                </div>
              </BlurFade>
              <BlurFade delay={0.2}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop&q=80"
                    alt="Cosmétiques naturels marocains"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </BlurFade>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: 2500, suffix: '+', label: 'Clientes satisfaites' },
                { value: 150, suffix: '+', label: 'Produits naturels' },
                { value: 100, suffix: '%', label: 'Naturel' },
                { value: 3, suffix: ' ans', label: "D'expertise" },
              ].map((stat, i) => (
                <BlurFade key={stat.label} delay={i * 0.1}>
                  <div>
                    <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white mb-1">
                      <NumberTicker value={stat.value} suffix={stat.suffix} delay={0.3 + i * 0.1} />
                    </div>
                    <p className="text-xs text-accent-dark/60">{stat.label}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade>
              <div className="text-center mb-14">
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-secondary mb-4">
                  Nos Valeurs
                </h2>
                <p className="text-text-muted max-w-2xl mx-auto">
                  Les principes qui guident chacun de nos choix
                </p>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <BlurFade key={v.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <v.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-secondary mb-2">{v.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{v.desc}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </>
  )
}
