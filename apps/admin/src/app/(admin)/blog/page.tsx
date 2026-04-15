'use client'

import { FileText, Plus, Edit, Trash2, Eye, ExternalLink } from 'lucide-react'
import UpsellBanner from '@/components/ui/UpsellBanner'
import UpsellActionLock from '@/components/ui/UpsellActionLock'

const posts = [
  { id: '1', title: "Les 7 Bienfaits de l'Huile d'Argan", status: 'published', views: 342, date: '15 déc. 2025', category: 'Soins Visage' },
  { id: '2', title: 'Rituel Hammam à la Maison', status: 'published', views: 256, date: '1 déc. 2025', category: 'Rituels' },
  { id: '3', title: "Huile de Nigelle : Le Secret Beauté", status: 'published', views: 189, date: '20 nov. 2025', category: 'Ingrédients' },
  { id: '4', title: 'Routine Anti-Chute en 5 Étapes', status: 'draft', views: 0, date: '10 nov. 2025', category: 'Soins Capillaires' },
]

export default function BlogAdminPage() {
  return (
    <div>
      <UpsellBanner featureLabel="Gestion du Blog" />

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text">Blog</h1>
          <p className="text-sm text-text-muted">{posts.length} articles</p>
        </div>
        <UpsellActionLock featureName="Gestion du Blog">
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
            <Plus className="w-4 h-4" /> Nouvel article
          </button>
        </UpsellActionLock>
      </div>

      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Article</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Catégorie</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Vues</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Statut</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Date</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-bg-hover">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-text">{post.title}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">{post.category}</td>
                <td className="px-4 py-3 text-sm text-text-secondary">{post.views}</td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${post.status === 'published' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                    {post.status === 'published' ? 'Publié' : 'Brouillon'}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-text-muted">{post.date}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button className="p-1.5 hover:bg-bg-input rounded-lg"><Eye className="w-4 h-4 text-text-muted" /></button>
                    <UpsellActionLock featureName="Gestion du Blog">
                      <button className="p-1.5 hover:bg-bg-input rounded-lg"><Edit className="w-4 h-4 text-text-muted" /></button>
                    </UpsellActionLock>
                    <UpsellActionLock featureName="Gestion du Blog">
                      <button className="p-1.5 hover:bg-bg-input rounded-lg"><Trash2 className="w-4 h-4 text-text-muted" /></button>
                    </UpsellActionLock>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
