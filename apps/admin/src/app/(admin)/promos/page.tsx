'use client'

import { Tag, Plus, Copy, Edit, Trash2 } from 'lucide-react'
import UpsellBanner from '@/components/ui/UpsellBanner'
import UpsellActionLock from '@/components/ui/UpsellActionLock'

const promos = [
  { id: '1', code: 'BIENVENUE10', type: 'percentage', value: 10, min_order: 30, uses: 47, max_uses: 100, status: 'active', expires: '31 déc. 2025' },
  { id: '2', code: 'NOEL25', type: 'percentage', value: 25, min_order: 60, uses: 23, max_uses: 50, status: 'active', expires: '25 déc. 2025' },
  { id: '3', code: 'LIVRAISON', type: 'fixed', value: 5.95, min_order: 50, uses: 89, max_uses: null, status: 'active', expires: null },
  { id: '4', code: 'FLASH15', type: 'percentage', value: 15, min_order: 40, uses: 50, max_uses: 50, status: 'expired', expires: '1 déc. 2025' },
]

export default function PromosPage() {
  return (
    <div>
      <UpsellBanner featureLabel="Codes Promotionnels" />

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text">Codes Promo</h1>
          <p className="text-sm text-text-muted">{promos.length} codes créés</p>
        </div>
        <UpsellActionLock featureName="Codes Promotionnels">
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
            <Plus className="w-4 h-4" /> Nouveau code
          </button>
        </UpsellActionLock>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {promos.map((promo) => (
          <div key={promo.id} className="bg-bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Tag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-mono font-bold text-text">{promo.code}</p>
                  <p className="text-xs text-text-muted">
                    {promo.type === 'percentage' ? `-${promo.value}%` : `-${promo.value}€`} · Min. {promo.min_order}€
                  </p>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${promo.status === 'active' ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
                {promo.status === 'active' ? 'Actif' : 'Expiré'}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-text-muted mb-4">
              <span>{promo.uses}{promo.max_uses ? `/${promo.max_uses}` : ''} utilisations</span>
              <span>{promo.expires ? `Expire le ${promo.expires}` : 'Sans expiration'}</span>
            </div>
            {promo.max_uses && (
              <div className="w-full bg-border rounded-full h-1.5 mb-4">
                <div className="bg-primary rounded-full h-1.5" style={{ width: `${(promo.uses / promo.max_uses) * 100}%` }} />
              </div>
            )}
            <div className="flex gap-2">
              <UpsellActionLock featureName="Codes Promotionnels">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-hover rounded-lg text-xs text-text-secondary">
                  <Copy className="w-3.5 h-3.5" /> Copier
                </button>
              </UpsellActionLock>
              <UpsellActionLock featureName="Codes Promotionnels">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-hover rounded-lg text-xs text-text-secondary">
                  <Edit className="w-3.5 h-3.5" /> Modifier
                </button>
              </UpsellActionLock>
              <UpsellActionLock featureName="Codes Promotionnels">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-hover rounded-lg text-xs text-text-secondary">
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
