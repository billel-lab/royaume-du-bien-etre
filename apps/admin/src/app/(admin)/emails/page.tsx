'use client'

import { Mail, Plus, Send, Clock, CheckCircle } from 'lucide-react'
import UpsellBanner from '@/components/ui/UpsellBanner'
import UpsellActionLock from '@/components/ui/UpsellActionLock'

const emails = [
  { id: '1', subject: 'Bienvenue chez Royaume du Bien-Être !', type: 'Bienvenue', sent: 234, opened: 189, rate: '80.8%', status: 'active' },
  { id: '2', subject: 'Votre commande est confirmée', type: 'Confirmation', sent: 156, opened: 142, rate: '91.0%', status: 'active' },
  { id: '3', subject: 'Votre colis a été expédié', type: 'Expédition', sent: 134, opened: 128, rate: '95.5%', status: 'active' },
  { id: '4', subject: 'Offre spéciale : -20% sur les coffrets', type: 'Marketing', sent: 450, opened: 167, rate: '37.1%', status: 'sent' },
  { id: '5', subject: 'Votre avis compte ! Laissez un avis', type: 'Post-achat', sent: 98, opened: 34, rate: '34.7%', status: 'active' },
]

export default function EmailsPage() {
  return (
    <div>
      <UpsellBanner featureLabel="Emails Automatiques" />

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text">Emails</h1>
          <p className="text-sm text-text-muted">Emails transactionnels et marketing</p>
        </div>
        <UpsellActionLock featureName="Emails Automatiques">
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
            <Plus className="w-4 h-4" /> Nouvelle campagne
          </button>
        </UpsellActionLock>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-bg-card border border-border rounded-xl p-5 flex items-center gap-4">
          <Send className="w-5 h-5 text-primary" />
          <div>
            <p className="text-2xl font-bold text-text">1 072</p>
            <p className="text-xs text-text-muted">Emails envoyés</p>
          </div>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5 flex items-center gap-4">
          <CheckCircle className="w-5 h-5 text-success" />
          <div>
            <p className="text-2xl font-bold text-text">67.8%</p>
            <p className="text-xs text-text-muted">Taux d&apos;ouverture moyen</p>
          </div>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5 flex items-center gap-4">
          <Clock className="w-5 h-5 text-warning" />
          <div>
            <p className="text-2xl font-bold text-text">5</p>
            <p className="text-xs text-text-muted">Automatisations actives</p>
          </div>
        </div>
      </div>

      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Email</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Type</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Envoyés</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Ouverts</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Taux</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {emails.map((email) => (
              <tr key={email.id} className="hover:bg-bg-hover">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-text">{email.subject}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">{email.type}</td>
                <td className="px-4 py-3 text-sm text-text-secondary">{email.sent}</td>
                <td className="px-4 py-3 text-sm text-text-secondary">{email.opened}</td>
                <td className="px-4 py-3 text-sm font-medium text-success">{email.rate}</td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${email.status === 'active' ? 'bg-success/10 text-success' : 'bg-info/10 text-info'}`}>
                    {email.status === 'active' ? 'Actif' : 'Envoyé'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
