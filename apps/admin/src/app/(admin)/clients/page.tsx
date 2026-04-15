'use client'

import { useState } from 'react'
import { Search, Download, Users, UserPlus, Star, Eye } from 'lucide-react'
import { formatPrice, formatDate } from '@/lib/utils'

const clients = [
  { id: '1', name: 'Fatima B.', email: 'fatima@email.com', phone: '+32 470 123 456', city: 'Bruxelles', total_orders: 5, total_spent: 234.5, segment: 'fidele', created_at: '2025-06-15' },
  { id: '2', name: 'Sarah M.', email: 'sarah@email.com', phone: '+32 471 234 567', city: 'Anvers', total_orders: 8, total_spent: 487.2, segment: 'vip', created_at: '2025-03-20' },
  { id: '3', name: 'Amina K.', email: 'amina@email.com', phone: '+32 472 345 678', city: 'Liège', total_orders: 2, total_spent: 62.8, segment: 'nouveau', created_at: '2025-11-10' },
  { id: '4', name: 'Leila D.', email: 'leila@email.com', phone: '+32 473 456 789', city: 'Gand', total_orders: 12, total_spent: 723.6, segment: 'vip', created_at: '2025-01-08' },
  { id: '5', name: 'Yasmine R.', email: 'yasmine@email.com', phone: '+32 474 567 890', city: 'Charleroi', total_orders: 1, total_spent: 14.9, segment: 'nouveau', created_at: '2025-12-18' },
  { id: '6', name: 'Nadia T.', email: 'nadia@email.com', phone: '+32 475 678 901', city: 'Namur', total_orders: 4, total_spent: 189.3, segment: 'fidele', created_at: '2025-07-22' },
  { id: '7', name: 'Meryem A.', email: 'meryem@email.com', phone: '+32 476 789 012', city: 'Bruxelles', total_orders: 6, total_spent: 312.5, segment: 'fidele', created_at: '2025-04-15' },
  { id: '8', name: 'Zineb F.', email: 'zineb@email.com', phone: '+32 477 890 123', city: 'Liège', total_orders: 3, total_spent: 145.7, segment: 'fidele', created_at: '2025-08-30' },
]

const segmentColors: Record<string, string> = {
  nouveau: 'bg-info/10 text-info',
  fidele: 'bg-primary/10 text-primary',
  vip: 'bg-warning/10 text-warning',
}

const segmentLabels: Record<string, string> = {
  nouveau: 'Nouveau',
  fidele: 'Fidèle',
  vip: 'VIP',
}

export default function ClientsPage() {
  const [search, setSearch] = useState('')
  const [filterSegment, setFilterSegment] = useState('all')

  const filtered = clients.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
    const matchSegment = filterSegment === 'all' || c.segment === filterSegment
    return matchSearch && matchSegment
  })

  const totalClients = clients.length
  const newThisMonth = clients.filter((c) => c.created_at >= '2025-12-01').length
  const vipCount = clients.filter((c) => c.segment === 'vip').length

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text">Clients</h1>
          <p className="text-sm text-text-muted">{totalClients} clients au total</p>
        </div>
        <button className="flex items-center gap-2 bg-bg-card border border-border hover:bg-bg-hover px-4 py-2 rounded-lg text-sm text-text transition-colors">
          <Download className="w-4 h-4" />
          Exporter CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-bg-card border border-border rounded-xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 bg-info/10 rounded-xl flex items-center justify-center">
            <Users className="w-5 h-5 text-info" />
          </div>
          <div>
            <p className="text-2xl font-bold text-text">{totalClients}</p>
            <p className="text-xs text-text-muted">Total clients</p>
          </div>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center">
            <UserPlus className="w-5 h-5 text-success" />
          </div>
          <div>
            <p className="text-2xl font-bold text-text">{newThisMonth}</p>
            <p className="text-xs text-text-muted">Nouveaux ce mois</p>
          </div>
        </div>
        <div className="bg-bg-card border border-border rounded-xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
            <Star className="w-5 h-5 text-warning" />
          </div>
          <div>
            <p className="text-2xl font-bold text-text">{vipCount}</p>
            <p className="text-xs text-text-muted">Clients VIP</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un client..."
            className="w-full bg-bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-text focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'nouveau', 'fidele', 'vip'].map((seg) => (
            <button
              key={seg}
              onClick={() => setFilterSegment(seg)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                filterSegment === seg
                  ? 'bg-primary text-white'
                  : 'bg-bg-card border border-border text-text-secondary hover:bg-bg-hover'
              }`}
            >
              {seg === 'all' ? 'Tous' : segmentLabels[seg]}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Client</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Ville</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Commandes</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">CA Total</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Segment</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Depuis</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((client) => (
              <tr key={client.id} className="hover:bg-bg-hover transition-colors">
                <td className="px-4 py-3">
                  <p className="text-sm font-medium text-text">{client.name}</p>
                  <p className="text-xs text-text-muted">{client.email}</p>
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">{client.city}</td>
                <td className="px-4 py-3 text-sm text-text-secondary">{client.total_orders}</td>
                <td className="px-4 py-3 text-sm font-semibold text-text">{formatPrice(client.total_spent)}</td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${segmentColors[client.segment]}`}>
                    {segmentLabels[client.segment]}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-text-muted">{formatDate(client.created_at)}</td>
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
  )
}
