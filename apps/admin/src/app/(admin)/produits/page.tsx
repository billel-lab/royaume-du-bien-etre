'use client'

import Image from 'next/image'
import { Search, Plus, Edit, Trash2, Eye } from 'lucide-react'
import UpsellBanner from '@/components/ui/UpsellBanner'
import UpsellActionLock from '@/components/ui/UpsellActionLock'
import { formatPrice } from '@/lib/utils'

const products = [
  { id: '1', name: 'Coffret Beauté Précieuse', price: 62.9, stock: 15, category: 'Coffrets', status: 'active', image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=80&h=80&fit=crop&q=80' },
  { id: '2', name: 'Huile d\'Argan Pure Bio', price: 24.9, stock: 42, category: 'Soins Visage', status: 'active', image: 'https://images.unsplash.com/photo-1600428877878-1a0ff561972c?w=80&h=80&fit=crop&q=80' },
  { id: '3', name: 'Coffret Trésors de Nigelle', price: 37.9, stock: 8, category: 'Coffrets', status: 'active', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=80&h=80&fit=crop&q=80' },
  { id: '4', name: 'Shampoing Anti-Chute', price: 14.9, stock: 56, category: 'Soins Capillaires', status: 'active', image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=80&h=80&fit=crop&q=80' },
  { id: '5', name: 'Coffret Douceur de Rose', price: 37.9, stock: 0, category: 'Coffrets', status: 'rupture', image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=80&h=80&fit=crop&q=80' },
  { id: '6', name: 'Huile de Massage Vanille', price: 14.9, stock: 33, category: 'Soins Corps', status: 'active', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=80&h=80&fit=crop&q=80' },
  { id: '7', name: 'Crème Hydratante Argan', price: 19.9, stock: 27, category: 'Soins Visage', status: 'active', image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=80&h=80&fit=crop&q=80' },
  { id: '8', name: 'Gommage Corps au Savon Noir', price: 18.9, stock: 19, category: 'Soins Corps', status: 'active', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6e?w=80&h=80&fit=crop&q=80' },
]

export default function ProduitsPage() {
  return (
    <div>
      <UpsellBanner featureLabel="Gestion Produits" />

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text">Produits</h1>
          <p className="text-sm text-text-muted">{products.length} produits au catalogue</p>
        </div>
        <UpsellActionLock featureName="Gestion Produits">
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
            <Plus className="w-4 h-4" />
            Ajouter un produit
          </button>
        </UpsellActionLock>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <input type="text" placeholder="Rechercher un produit..." className="w-full bg-bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-text focus:outline-none focus:border-primary" />
      </div>

      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Produit</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Catégorie</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Prix</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Stock</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Statut</th>
              <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-bg-hover transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-bg-input relative">
                      <Image src={product.image} alt={product.name} fill className="object-cover" sizes="40px" />
                    </div>
                    <span className="text-sm font-medium text-text">{product.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">{product.category}</td>
                <td className="px-4 py-3 text-sm font-semibold text-text">{formatPrice(product.price)}</td>
                <td className="px-4 py-3">
                  <span className={`text-sm font-medium ${product.stock === 0 ? 'text-error' : product.stock < 10 ? 'text-warning' : 'text-text-secondary'}`}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${product.status === 'active' ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
                    {product.status === 'active' ? 'Actif' : 'Rupture'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 hover:bg-bg-input rounded-lg transition-colors"><Eye className="w-4 h-4 text-text-muted" /></button>
                    <UpsellActionLock featureName="Gestion Produits">
                      <button className="p-1.5 hover:bg-bg-input rounded-lg transition-colors"><Edit className="w-4 h-4 text-text-muted" /></button>
                    </UpsellActionLock>
                    <UpsellActionLock featureName="Gestion Produits">
                      <button className="p-1.5 hover:bg-bg-input rounded-lg transition-colors"><Trash2 className="w-4 h-4 text-text-muted" /></button>
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
