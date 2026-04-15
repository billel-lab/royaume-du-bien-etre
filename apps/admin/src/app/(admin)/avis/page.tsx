'use client'

import { Star, ThumbsUp, Reply, Trash2 } from 'lucide-react'
import UpsellBanner from '@/components/ui/UpsellBanner'
import UpsellActionLock from '@/components/ui/UpsellActionLock'

const reviews = [
  { id: '1', customer: 'Fatima B.', product: 'Coffret Beauté Précieuse', rating: 5, text: "L'huile d'argan est incroyable ! Ma peau n'a jamais été aussi douce.", date: '20 déc. 2025', approved: true },
  { id: '2', customer: 'Sarah M.', product: 'Coffret Douceur de Rose', rating: 5, text: 'Les produits sentent divinement bon et les résultats sont visibles.', date: '18 déc. 2025', approved: true },
  { id: '3', customer: 'Amina K.', product: 'Shampoing Anti-Chute', rating: 4, text: 'Bon produit, mes cheveux sont plus forts après 2 mois.', date: '15 déc. 2025', approved: false },
  { id: '4', customer: 'Leila D.', product: 'Huile d\'Argan Pure Bio', rating: 5, text: "Qualité exceptionnelle. Je recommande à 100%.", date: '12 déc. 2025', approved: true },
  { id: '5', customer: 'Nadia T.', product: 'Gommage Corps au Savon Noir', rating: 5, text: 'Mon gommage préféré ! Peau douce et lumineuse.', date: '10 déc. 2025', approved: true },
]

export default function AvisPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <div>
      <UpsellBanner featureLabel="Gestion des Avis" />

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text">Avis Clients</h1>
          <p className="text-sm text-text-muted">{reviews.length} avis · Moyenne {avgRating}/5</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-bg-card border border-border rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-warning mb-1">{avgRating}</p>
          <div className="flex justify-center gap-0.5 mb-1">
            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className={`w-4 h-4 ${s <= Math.round(Number(avgRating)) ? 'fill-warning text-warning' : 'text-border'}`} />)}
          </div>
          <p className="text-xs text-text-muted">Note moyenne</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-success mb-1">{reviews.filter(r => r.approved).length}</p>
          <p className="text-xs text-text-muted">Avis approuvés</p>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5 text-center">
          <p className="text-3xl font-bold text-warning mb-1">{reviews.filter(r => !r.approved).length}</p>
          <p className="text-xs text-text-muted">En attente</p>
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm font-semibold text-text">{review.customer}</p>
                <p className="text-xs text-text-muted">{review.product} · {review.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${review.approved ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                  {review.approved ? 'Approuvé' : 'En attente'}
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className={`w-3.5 h-3.5 ${s <= review.rating ? 'fill-warning text-warning' : 'text-border'}`} />)}
                </div>
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-4">{review.text}</p>
            <div className="flex gap-2">
              <UpsellActionLock featureName="Gestion des Avis">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-hover rounded-lg text-xs text-text-secondary hover:text-success transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" /> Approuver
                </button>
              </UpsellActionLock>
              <UpsellActionLock featureName="Gestion des Avis">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-hover rounded-lg text-xs text-text-secondary hover:text-primary transition-colors">
                  <Reply className="w-3.5 h-3.5" /> Répondre
                </button>
              </UpsellActionLock>
              <UpsellActionLock featureName="Gestion des Avis">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-hover rounded-lg text-xs text-text-secondary hover:text-error transition-colors">
                  <Trash2 className="w-3.5 h-3.5" /> Supprimer
                </button>
              </UpsellActionLock>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
