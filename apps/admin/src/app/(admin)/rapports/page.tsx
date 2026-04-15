'use client'

import { BarChart3, TrendingUp, Users, Package, Download } from 'lucide-react'
import UpsellBanner from '@/components/ui/UpsellBanner'
import UpsellActionLock from '@/components/ui/UpsellActionLock'

const reports = [
  { title: 'Ventes par catégorie', desc: 'Répartition du CA par catégorie de produits', icon: BarChart3, data: [{ cat: 'Coffrets', pct: 45 }, { cat: 'Soins Visage', pct: 25 }, { cat: 'Soins Corps', pct: 15 }, { cat: 'Soins Capillaires', pct: 10 }, { cat: 'Autres', pct: 5 }] },
  { title: 'Acquisition clients', desc: 'Nouveaux clients par mois', icon: Users, data: [{ cat: 'Jan', pct: 12 }, { cat: 'Fév', pct: 15 }, { cat: 'Mar', pct: 18 }, { cat: 'Avr', pct: 22 }, { cat: 'Mai', pct: 28 }] },
  { title: 'Produits les plus vendus', desc: 'Top 5 produits du mois', icon: Package, data: [{ cat: 'Coffret Beauté', pct: 30 }, { cat: 'Huile Argan', pct: 22 }, { cat: 'Coffret Rose', pct: 18 }, { cat: 'Shampoing', pct: 16 }, { cat: 'Gommage', pct: 14 }] },
  { title: 'Tendances', desc: 'Évolution du CA sur 6 mois', icon: TrendingUp, data: [{ cat: 'Juil', pct: 35 }, { cat: 'Août', pct: 42 }, { cat: 'Sep', pct: 55 }, { cat: 'Oct', pct: 63 }, { cat: 'Nov', pct: 72 }, { cat: 'Déc', pct: 85 }] },
]

export default function RapportsPage() {
  return (
    <div>
      <UpsellBanner featureLabel="Rapports & Analytiques" />

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text">Rapports</h1>
          <p className="text-sm text-text-muted">Analyses et statistiques détaillées</p>
        </div>
        <UpsellActionLock featureName="Rapports & Analytiques">
          <button className="flex items-center gap-2 bg-bg-card border border-border px-4 py-2 rounded-lg text-sm text-text">
            <Download className="w-4 h-4" /> Exporter PDF
          </button>
        </UpsellActionLock>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reports.map((report) => (
          <div key={report.title} className="bg-bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <report.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text">{report.title}</h3>
                <p className="text-xs text-text-muted">{report.desc}</p>
              </div>
            </div>
            <div className="space-y-3">
              {report.data.map((item) => (
                <div key={item.cat} className="flex items-center gap-3">
                  <span className="text-xs text-text-muted w-24 truncate">{item.cat}</span>
                  <div className="flex-1 bg-border rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: `${item.pct}%` }} />
                  </div>
                  <span className="text-xs font-medium text-text w-10 text-right">{item.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
