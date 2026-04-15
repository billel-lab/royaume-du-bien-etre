'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import BlurFade from '@/components/ui/BlurFade'

const faqData = [
  {
    category: 'Produits',
    items: [
      { q: 'Vos produits sont-ils 100% naturels ?', a: "Oui, tous nos produits sont formulés à partir d'ingrédients 100% naturels, sans parabènes, sans sulfates et sans produits chimiques. Ils sont fabriqués artisanalement au Maroc selon des recettes traditionnelles." },
      { q: "D'où proviennent vos ingrédients ?", a: "Nos ingrédients sont sourcés directement dans les terroirs marocains les plus purs : huile d'argan de Souss-Massa, huile de nigelle d'Éthiopie, rose de Damas de la vallée du Dadès, savon noir de Marrakech." },
      { q: 'Vos produits sont-ils testés sur les animaux ?', a: 'Non, nous sommes fermement contre les tests sur les animaux. Nos produits sont cruelty-free et nous ne travaillons avec aucun fournisseur qui pratique ces tests.' },
      { q: 'Quelle est la durée de conservation des produits ?', a: "Nos produits ont une durée de conservation de 12 à 24 mois après ouverture, selon le type de produit. La date d'expiration est indiquée sur chaque emballage." },
    ],
  },
  {
    category: 'Commandes & Livraison',
    items: [
      { q: 'Quels sont les délais de livraison ?', a: "Nous expédions sous 24-48h ouvrées. La livraison en Belgique prend 1-2 jours ouvrés, en France 2-4 jours ouvrés. Vous recevrez un email avec le numéro de suivi dès l'expédition." },
      { q: 'La livraison est-elle gratuite ?', a: "Oui, la livraison est gratuite pour toute commande supérieure à 79€. En dessous, les frais de port s'élèvent à 5,95€." },
      { q: 'Livrez-vous en dehors de la Belgique et de la France ?', a: 'Oui, nous livrons dans toute l\'Europe. Les frais de livraison varient selon le pays de destination. Contactez-nous pour plus d\'informations.' },
      { q: 'Comment suivre ma commande ?', a: "Dès que votre commande est expédiée, vous recevrez un email avec un lien de suivi. Vous pouvez également suivre votre commande depuis votre espace client sur notre site." },
    ],
  },
  {
    category: 'Retours & Remboursements',
    items: [
      { q: 'Puis-je retourner un produit ?', a: "Oui, vous disposez de 14 jours après réception pour retourner un produit non ouvert et dans son emballage d'origine. Les frais de retour sont à votre charge." },
      { q: 'Comment procéder à un retour ?', a: "Contactez-nous par email à contact@royaumedubienetre.fr ou via WhatsApp. Nous vous enverrons les instructions de retour et une étiquette d'envoi." },
      { q: 'Sous quel délai suis-je remboursé(e) ?', a: 'Le remboursement est effectué sous 5-10 jours ouvrés après réception et vérification du produit retourné, via le même moyen de paiement utilisé lors de la commande.' },
    ],
  },
  {
    category: 'Paiement',
    items: [
      { q: 'Quels moyens de paiement acceptez-vous ?', a: 'Nous acceptons Bancontact, Visa, Mastercard, PayPal et Google Pay via notre partenaire Mollie. Tous les paiements sont sécurisés et cryptés.' },
      { q: 'Le paiement est-il sécurisé ?', a: 'Oui, tous nos paiements sont traités par Mollie, un prestataire de paiement certifié PCI DSS. Vos données bancaires ne sont jamais stockées sur nos serveurs.' },
    ],
  },
]

export default function FAQPage() {
  const [search, setSearch] = useState('')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const filteredFaq = search
    ? faqData.map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.q.toLowerCase().includes(search.toLowerCase()) ||
            item.a.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter((cat) => cat.items.length > 0)
    : faqData

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        <div className="bg-gradient-to-br from-accent-light to-accent/30 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BlurFade>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-secondary mb-3">
                Questions Fréquentes
              </h1>
              <p className="text-text-muted max-w-xl mx-auto mb-8">Tout ce que vous devez savoir</p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher une question..."
                  className="w-full bg-white border border-accent-dark/20 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </BlurFade>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredFaq.map((category, ci) => (
            <BlurFade key={category.category} delay={ci * 0.1}>
              <div className="mb-10">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-secondary mb-4">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.items.map((item, i) => {
                    const key = `${ci}-${i}`
                    const isOpen = openItems.has(key)
                    return (
                      <div key={key} className="bg-white rounded-xl shadow-sm overflow-hidden border border-accent/50">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className="text-sm font-medium text-secondary pr-4">{item.q}</span>
                          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 text-sm text-text-body leading-relaxed border-t border-accent/50 pt-4">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
    </>
  )
}
