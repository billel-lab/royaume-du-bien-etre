'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Package, ArrowRight } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const orderRef = searchParams.get('order') || 'RBE-XXX'

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg flex items-center justify-center pb-24 lg:pb-0">
        <div className="max-w-md mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-success" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-secondary mb-3">
              Merci pour votre commande !
            </h1>
            <p className="text-text-muted mb-6">
              Votre commande <span className="font-mono font-bold text-primary">{orderRef}</span> a été enregistrée avec succès.
            </p>

            <div className="bg-accent-light rounded-2xl p-6 mb-8 text-left">
              <div className="flex items-center gap-3 mb-3">
                <Package className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-secondary">Prochaines étapes</h3>
              </div>
              <ul className="space-y-2 text-sm text-text-body">
                <li>1. Vous recevrez un email de confirmation sous quelques minutes</li>
                <li>2. Votre commande sera préparée et expédiée sous 24-48h</li>
                <li>3. Un email avec le numéro de suivi vous sera envoyé à l&apos;expédition</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/boutique">
                <motion.button
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  Continuer mes achats
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
