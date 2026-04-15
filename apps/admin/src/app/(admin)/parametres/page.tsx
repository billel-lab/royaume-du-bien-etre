'use client'

import { Settings, Store, Truck, CreditCard, Bell, Shield, Save } from 'lucide-react'
import UpsellBanner from '@/components/ui/UpsellBanner'
import UpsellActionLock from '@/components/ui/UpsellActionLock'

export default function ParametresPage() {
  return (
    <div>
      <UpsellBanner featureLabel="Paramètres" />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text">Paramètres</h1>
        <p className="text-sm text-text-muted">Configuration de votre boutique</p>
      </div>

      <div className="space-y-6">
        {/* Boutique */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Store className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-text">Informations boutique</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5">Nom de la boutique</label>
              <input type="text" defaultValue="Royaume du Bien-Être" className="w-full bg-bg-input border border-border rounded-lg px-4 py-2.5 text-sm text-text" disabled />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5">Email de contact</label>
              <input type="email" defaultValue="contact@royaumedubienetre.fr" className="w-full bg-bg-input border border-border rounded-lg px-4 py-2.5 text-sm text-text" disabled />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5">Téléphone</label>
              <input type="tel" defaultValue="+32 478 11 59 81" className="w-full bg-bg-input border border-border rounded-lg px-4 py-2.5 text-sm text-text" disabled />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5">Instagram</label>
              <input type="text" defaultValue="@boutiqueroyaumedubienetre" className="w-full bg-bg-input border border-border rounded-lg px-4 py-2.5 text-sm text-text" disabled />
            </div>
          </div>
          <div className="mt-4">
            <UpsellActionLock featureName="Paramètres">
              <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
                <Save className="w-4 h-4" /> Sauvegarder
              </button>
            </UpsellActionLock>
          </div>
        </div>

        {/* Livraison */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Truck className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-text">Livraison</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5">Frais de port (€)</label>
              <input type="number" defaultValue="5.95" className="w-full bg-bg-input border border-border rounded-lg px-4 py-2.5 text-sm text-text" disabled />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-secondary mb-1.5">Franco de port (€)</label>
              <input type="number" defaultValue="79" className="w-full bg-bg-input border border-border rounded-lg px-4 py-2.5 text-sm text-text" disabled />
            </div>
          </div>
        </div>

        {/* Paiement */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-text">Paiement</h2>
          </div>
          <div className="flex items-center justify-between p-4 bg-bg-hover rounded-xl">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-text">Mollie</span>
              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-success/10 text-success">Connecté</span>
            </div>
            <p className="text-xs text-text-muted">Bancontact, Visa, Mastercard, PayPal</p>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-text">Notifications</h2>
          </div>
          <div className="space-y-3">
            {['Nouvelle commande', 'Nouveau client', 'Stock faible', 'Nouvel avis'].map((notif) => (
              <div key={notif} className="flex items-center justify-between p-3 bg-bg-hover rounded-xl">
                <span className="text-sm text-text">{notif}</span>
                <div className="w-10 h-6 bg-success rounded-full relative cursor-not-allowed opacity-60">
                  <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
