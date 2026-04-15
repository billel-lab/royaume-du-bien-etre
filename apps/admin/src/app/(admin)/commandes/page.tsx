'use client'

import { useState } from 'react'
import { Search, Filter, Eye, Download, ChevronDown } from 'lucide-react'
import { formatPrice, formatDateTime } from '@/lib/utils'

const orders = [
  { id: 'RBE-001', customer: 'Fatima B.', email: 'fatima@email.com', phone: '+32 470 123 456', total: 62.9, items: 2, status: 'new', date: '2025-12-20T14:30:00', city: 'Bruxelles' },
  { id: 'RBE-002', customer: 'Sarah M.', email: 'sarah@email.com', phone: '+32 471 234 567', total: 37.9, items: 1, status: 'confirmed', date: '2025-12-20T11:15:00', city: 'Anvers' },
  { id: 'RBE-003', customer: 'Amina K.', email: 'amina@email.com', phone: '+32 472 345 678', total: 24.9, items: 1, status: 'shipped', date: '2025-12-19T16:45:00', city: 'Liège' },
  { id: 'RBE-004', customer: 'Leila D.', email: 'leila@email.com', phone: '+32 473 456 789', total: 89.7, items: 3, status: 'delivered', date: '2025-12-19T09:20:00', city: 'Gand' },
  { id: 'RBE-005', customer: 'Yasmine R.', email: 'yasmine@email.com', phone: '+32 474 567 890', total: 14.9, items: 1, status: 'new', date: '2025-12-18T20:10:00', city: 'Charleroi' },
  { id: 'RBE-006', customer: 'Nadia T.', email: 'nadia@email.com', phone: '+32 475 678 901', total: 52.8, items: 2, status: 'confirmed', date: '2025-12-18T15:30:00', city: 'Namur' },
  { id: 'RBE-007', customer: 'Meryem A.', email: 'meryem@email.com', phone: '+32 476 789 012', total: 28.9, items: 1, status: 'delivered', date: '2025-12-17T12:00:00', city: 'Bruxelles' },
  { id: 'RBE-008', customer: 'Zineb F.', email: 'zineb@email.com', phone: '+32 477 890 123', total: 75.6, items: 3, status: 'cancelled', date: '2025-12-17T08:45:00', city: 'Liège' },
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

export default function OrdersPage() {
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  const filtered = orders.filter((o) => {
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase())
    const matchStatus = filterStatus === 'all' || o.status === filterStatus
    return matchSearch && matchStatus
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text">Commandes</h1>
          <p className="text-sm text-text-muted">{orders.length} commandes au total</p>
        </div>
        <button className="flex items-center gap-2 bg-bg-card border border-border hover:bg-bg-hover px-4 py-2 rounded-lg text-sm text-text transition-colors">
          <Download className="w-4 h-4" />
          Exporter CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par nom ou référence..."
            className="w-full bg-bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-text focus:outline-none focus:border-primary"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-bg-card border border-border rounded-lg pl-10 pr-8 py-2.5 text-sm text-text focus:outline-none focus:border-primary appearance-none"
          >
            <option value="all">Tous les statuts</option>
            <option value="new">Nouveau</option>
            <option value="confirmed">Confirmé</option>
            <option value="shipped">Expédié</option>
            <option value="delivered">Livré</option>
            <option value="cancelled">Annulé</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Réf.</th>
                <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Client</th>
                <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Ville</th>
                <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Articles</th>
                <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Total</th>
                <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Statut</th>
                <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Date</th>
                <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((order) => (
                <tr key={order.id} className="hover:bg-bg-hover transition-colors">
                  <td className="px-4 py-3 text-sm font-mono font-medium text-primary">{order.id}</td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-text">{order.customer}</p>
                    <p className="text-xs text-text-muted">{order.email}</p>
                  </td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{order.city}</td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{order.items}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-text">{formatPrice(order.total)}</td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${statusColors[order.status]}`}>
                      {statusLabels[order.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-text-muted">{formatDateTime(order.date)}</td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 hover:bg-bg-input rounded-lg transition-colors" title="Voir détail">
                      <Eye className="w-4 h-4 text-text-muted" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
