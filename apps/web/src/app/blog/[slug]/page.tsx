import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

// Mock blog post — to be replaced by Supabase fetch
const post = {
  title: "Les 7 Bienfaits Incroyables de l'Huile d'Argan pour la Peau",
  date: '2025-12-15',
  readTime: '5 min',
  category: 'Soins Visage',
  image: 'https://images.unsplash.com/photo-1600428877878-1a0ff561972c?w=1200&h=600&fit=crop&q=80',
  content: `
L'huile d'argan, surnommée "l'or liquide" du Maroc, est un trésor de beauté utilisé depuis des siècles par les femmes berbères. Extraite des noix de l'arganier, un arbre endémique du sud-ouest du Maroc, cette huile précieuse est riche en acides gras essentiels, en vitamine E et en antioxydants.

## 1. Hydratation Profonde

L'huile d'argan pénètre rapidement dans la peau sans laisser de film gras. Elle nourrit en profondeur et restaure le film hydrolipidique naturel de la peau.

## 2. Anti-Âge Naturel

Grâce à sa teneur élevée en vitamine E et en polyphénols, l'huile d'argan combat les radicaux libres responsables du vieillissement cutané. Elle aide à réduire l'apparence des rides et des ridules.

## 3. Réparation Cutanée

L'huile d'argan favorise la régénération cellulaire et aide à atténuer les cicatrices, les vergetures et les imperfections de la peau.

## 4. Protection contre les Agressions

Elle forme une barrière protectrice naturelle contre les agressions extérieures : pollution, froid, soleil, vent.

## 5. Éclat du Teint

L'application régulière d'huile d'argan donne un teint lumineux et unifié. Elle aide à réduire les taches brunes et l'hyperpigmentation.

## 6. Apaisante

Ses propriétés anti-inflammatoires en font un allié précieux pour les peaux sensibles, atopiques ou sujettes à l'eczéma.

## 7. Polyvalente

L'huile d'argan s'utilise aussi bien sur le visage que sur le corps et les cheveux. Elle est également excellente en soin des ongles et des cuticules.

## Comment l'Utiliser ?

- **Visage** : Appliquer 2-3 gouttes matin et soir sur une peau propre, en massant délicatement.
- **Corps** : Utiliser après la douche sur peau humide pour une absorption optimale.
- **Cheveux** : En masque avant-shampoing ou en sérum sur les pointes sèches.

Découvrez notre [Huile d'Argan Pure Bio](/boutique/huile-argan-pure-bio) pour profiter de tous ces bienfaits.
  `,
}

export default function BlogPostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <article>
            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
              {post.category}
            </span>

            <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-secondary mt-4 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-text-muted mb-8">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div className="prose prose-lg max-w-none text-text-body leading-relaxed [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-secondary [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:mb-4 [&_ul]:mb-4 [&_li]:mb-1 [&_strong]:text-secondary [&_a]:text-primary [&_a]:underline">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i}>{line.replace('## ', '')}</h2>
                }
                if (line.startsWith('- ')) {
                  return <li key={i} dangerouslySetInnerHTML={{ __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>') }} />
                }
                if (line.trim()) {
                  return <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>') }} />
                }
                return null
              })}
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </>
  )
}
