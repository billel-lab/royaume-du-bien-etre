'use client'

import { DollarSign, TrendingUp, TrendingDown, CreditCard, Download, ArrowUpRight } from 'lucide-react'
import UpsellBanner from '@/components/ui/UpsellBanner'
import UpsellActionLock from '@/components/ui/UpsellActionLock'
import { formatPrice } from '@/lib/utils'

const stats = [
  { label: 'CA Mensuel', value: 3847.5, change: +12.5, icon: DollarSign },
  { label: 'CA Hebdo', value: 987.3, change: +8.2, icon: TrendingUp },
  { label: 'Panier Moyen', value: 57.4, change: -2.1, icon: CreditCard },
  { label: 'Remboursements', value: 75.6, change: 0, icon: TrendingDown },
]

const transactions = [
  { id: 'TXN-001', order: 'RBE-001', customer: 'Fatima B.', amount: 62.9, method: 'Bancontact', status: 'completed', date: '20 déc. 2025' },
  { id: 'TXN-002', order: 'RBE-002', customer: 'Sarah M.', amount: 37.9, method: 'Visa', status: 'completed', date: '20 déc. 2025' },
  { id: 'TXN-003', order: 'RBE-003', customer: 'Amina K.', amount: 24.9, method: 'PayPal', status: 'completed', date: '19 déc. 2025' },
  { id: 'TXN-004', order: 'RBE-004', customer: 'Leila D.', amount: 89.7, method: 'Mastercard', status: 'completed', date: '19 déc. 2025' },
  { id: 'TXN-005', order: 'RBE-008', customer: 'Zineb F.', amount: -75.6, method: 'Remboursement', status: 'refunded', date: '17 déc. 2025' },
]

export default function FinancesPage() {
  return (
    <div>
      <UpsellBanner featureLabel="Tableau de Bord Finances" />

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text">Finances</h1>
          <p className="text-sm text-text-muted">Décembre 2025</p>
        </div>
        <UpsellActionLock featureName="Tableau de Bord Finances">
          <button className="flex items-center gap-2 bg-bg-card border border-border px-4 py-2 rounded-lg text-sm text-text">
            <Download className="w-4 h-4" /> Export comptable
          </button>
        </UpsellActionLock>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-bg-card border border-border rounded-xl p-5">
            <stat.icon className="w-5 h-5 text-primary mb-3" />
            <p className="text-2xl font-bold text-text">{formatPrice(stat.value)}</p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-xs text-text-muted">{stat.label}</p>
              {stat.change !== 0 && (
                <span className={`flex items-center text-[10px] font-medium ${stat.change > 0 ? 'text-success' : 'text-error'}`}>
                  <ArrowUpRight className={`w-3 h-3 ${stat.change < 0 ? 'rotate-90' : ''}`} />
                  {Math.abs(stat.change)}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-bg-card border border-border rounded-xl">
        <div className="p-5 border-b border-border">
          <h2 className="font-semibold text-text">Dernières transactions</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Transaction</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Client</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Méthode</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Montant</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {transactions.map((txn) => (
              <tr key={txn.id} className="hover:bg-bg-hover">
                <td className="px-4 py-3">
                  <p className="text-sm font-mono text-text">{txn.id}</p>
                  <p className="text-xs text-text-muted">{txn.order}</p>
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">{txn.customer}</td>
                <td className="px-4 py-3 text-sm text-text-secondary">{txn.method}</td>
                <td className="px-4 py-3">
                  <span className={`text-sm font-semibold ${txn.amount < 0 ? 'text-error' : 'text-success'}`}>
                    {txn.amount > 0 ? '+' : ''}{formatPrice(txn.amount)}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-text-muted">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
