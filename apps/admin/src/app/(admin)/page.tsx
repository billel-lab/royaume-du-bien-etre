'use client'

import { ShoppingCart, Users, DollarSign, Package, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

// Mock data — replaced by Supabase realtime
const stats = [
  { label: 'CA du mois', value: 3847.5, prefix: '', icon: DollarSign, change: +12.5, color: 'text-success' },
  { label: 'Commandes', value: 67, prefix: '', icon: ShoppingCart, change: +8.2, color: 'text-info' },
  { label: 'Nouveaux clients', value: 23, prefix: '', icon: Users, change: +15.3, color: 'text-primary' },
  { label: 'Produits actifs', value: 32, prefix: '', icon: Package, change: 0, color: 'text-warning' },
]

const recentOrders = [
  { id: 'RBE-001', customer: 'Fatima B.', total: 62.9, status: 'new', date: '2025-12-20 14:30' },
  { id: 'RBE-002', customer: 'Sarah M.', total: 37.9, status: 'confirmed', date: '2025-12-20 11:15' },
  { id: 'RBE-003', customer: 'Amina K.', total: 24.9, status: 'shipped', date: '2025-12-19 16:45' },
  { id: 'RBE-004', customer: 'Leila D.', total: 89.7, status: 'delivered', date: '2025-12-19 09:20' },
  { id: 'RBE-005', customer: 'Yasmine R.', total: 14.9, status: 'new', date: '2025-12-18 20:10' },
]

const topProducts = [
  { name: 'Coffret Beauté Précieuse', sold: 23, revenue: 1446.7 },
  { name: "Huile d'argan 100% naturelle", sold: 18, revenue: 322.2 },
  { name: 'Coffret Trésors de Nigelle', sold: 15, revenue: 568.5 },
  { name: 'Shampoing anti-chute aux huiles essentielles', sold: 12, revenue: 178.8 },
]

const statusColors: Record<string, string> = {
  new: 'bg-info/10 text-info',
  confirmed: 'bg-warning/10 text-warning',
  shipped: 'bg-primary/10 text-primary',
  delivered: 'bg-success/10 text-success',
  cancelled: 'bg-error/10 text-error',
}

const statusLabels: Record<string, string> = {
  new: 'Nouveau',
  confirmed: 'Confirmé',
  shipped: 'Expédié',
  delivered: 'Livré',
  cancelled: 'Annulé',
}

export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text">Dashboard</h1>
          <p className="text-sm text-text-muted">Vue d&apos;ensemble de votre activité</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          En temps réel
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl ${stat.color} bg-current/10 flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              {stat.change !== 0 && (
                <span className={`flex items-center gap-0.5 text-xs font-medium ${stat.change > 0 ? 'text-success' : 'text-error'}`}>
                  {stat.change > 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {Math.abs(stat.change)}%
                </span>
              )}
            </div>
            <p className="text-2xl font-bold text-text">
              {stat.label.includes('CA') ? formatPrice(stat.value) : stat.value}
            </p>
            <p className="text-xs text-text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent orders */}
        <div className="lg:col-span-2 bg-bg-card border border-border rounded-xl">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h2 className="font-semibold text-text">Dernières commandes</h2>
            <a href="/commandes" className="text-xs text-primary hover:text-primary-light">Voir tout</a>
          </div>
          <div className="divide-y divide-border">
            {recentOrders.map((order) => (
              <div key={order.id} className="p-4 flex items-center justify-between hover:bg-bg-hover transition-colors">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-medium text-text">{order.id}</p>
                    <p className="text-xs text-text-muted">{order.customer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${statusColors[order.status]}`}>
                    {statusLabels[order.status]}
                  </span>
                  <span className="text-sm font-semibold text-text w-20 text-right">
                    {formatPrice(order.total)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top products */}
        <div className="bg-bg-card border border-border rounded-xl">
          <div className="p-5 border-b border-border">
            <h2 className="font-semibold text-text flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              Produits populaires
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {topProducts.map((product, i) => (
              <div key={product.name} className="flex items-center gap-3">
                <span className="text-xs font-bold text-text-muted w-5">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text truncate">{product.name}</p>
                  <p className="text-xs text-text-muted">{product.sold} vendus</p>
                </div>
                <span className="text-sm font-semibold text-text">{formatPrice(product.revenue)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
