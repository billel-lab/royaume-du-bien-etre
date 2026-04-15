'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BlurFade from '@/components/ui/BlurFade'

const posts = [
  {
    slug: 'bienfaits-huile-argan',
    title: "Les 7 Bienfaits Incroyables de l'Huile d'Argan pour la Peau",
    excerpt: "Découvrez pourquoi l'huile d'argan est surnommée \"l'or liquide\" du Maroc et comment elle peut transformer votre routine beauté.",
    image: 'https://images.unsplash.com/photo-1600428877878-1a0ff561972c?w=600&h=400&fit=crop&q=80',
    date: '2025-12-15',
    readTime: '5 min',
    category: 'Soins Visage',
  },
  {
    slug: 'rituel-hammam-maison',
    title: 'Rituel Hammam à la Maison : Guide Complet',
    excerpt: 'Apprenez à recréer chez vous un authentique rituel hammam marocain avec nos produits naturels. Un moment de pure détente.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6e?w=600&h=400&fit=crop&q=80',
    date: '2025-12-01',
    readTime: '7 min',
    category: 'Rituels',
  },
  {
    slug: 'huile-nigelle-secrets',
    title: "Huile de Nigelle : Le Secret Beauté le Mieux Gardé",
    excerpt: "Utilisée depuis l'Antiquité, l'huile de nigelle est un trésor pour la peau et les cheveux. Découvrez toutes ses vertus.",
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop&q=80',
    date: '2025-11-20',
    readTime: '4 min',
    category: 'Ingrédients',
  },
  {
    slug: 'routine-anti-chute-cheveux',
    title: 'Routine Anti-Chute : 5 Étapes pour des Cheveux Plus Forts',
    excerpt: 'Combattez la chute de cheveux naturellement avec notre routine en 5 étapes à base de produits marocains.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&h=400&fit=crop&q=80',
    date: '2025-11-10',
    readTime: '6 min',
    category: 'Soins Capillaires',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        <div className="bg-gradient-to-br from-accent-light to-accent/30 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary mb-3">
                Le Journal du Bien-Être
              </h1>
              <p className="text-text-muted max-w-xl mx-auto">
                Conseils beauté, rituels ancestraux et inspirations pour sublimer votre beauté naturelle
              </p>
            </BlurFade>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {posts.map((post, i) => (
              <BlurFade key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`}>
                  <motion.article
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-shadow"
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <span className="absolute top-4 left-4 bg-primary/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Lire la suite
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </>
  )
}
