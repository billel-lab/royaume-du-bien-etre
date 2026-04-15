'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard, ShoppingCart, Users, Package, Star,
  Tag, DollarSign, BarChart3, FileText, Mail, Settings,
  LogOut, ChevronLeft, ChevronRight,
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/', upsell: false },
  { icon: ShoppingCart, label: 'Commandes', href: '/commandes', upsell: false },
  { icon: Users, label: 'Clients', href: '/clients', upsell: false },
  { icon: Package, label: 'Produits', href: '/produits', upsell: true },
  { icon: Star, label: 'Avis', href: '/avis', upsell: true },
  { icon: Tag, label: 'Codes Promo', href: '/promos', upsell: true },
  { icon: DollarSign, label: 'Finances', href: '/finances', upsell: true },
  { icon: BarChart3, label: 'Rapports', href: '/rapports', upsell: true },
  { icon: FileText, label: 'Blog', href: '/blog', upsell: true },
  { icon: Mail, label: 'Emails', href: '/emails', upsell: true },
  { icon: Settings, label: 'Paramètres', href: '/parametres', upsell: true },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <aside className={cn(
      'fixed left-0 top-0 h-screen bg-bg-card border-r border-border flex flex-col transition-all duration-300 z-50',
      collapsed ? 'w-16' : 'w-60'
    )}>
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!collapsed && (
          <div>
            <h1 className="text-sm font-bold text-text">Royaume du Bien-Être</h1>
            <p className="text-[10px] text-text-muted">Administration</p>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-bg-hover rounded-lg text-text-muted transition-colors"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors relative',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-text-secondary hover:bg-bg-hover hover:text-text'
              )}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-4.5 h-4.5 flex-shrink-0" />
              {!collapsed && (
                <>
                  <span>{item.label}</span>
                  {item.upsell && (
                    <span className="ml-auto text-[9px] bg-warning/10 text-warning px-1.5 py-0.5 rounded-full font-bold">
                      PRO
                    </span>
                  )}
                </>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-2 border-t border-border">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm text-text-muted hover:bg-bg-hover hover:text-error transition-colors"
        >
          <LogOut className="w-4.5 h-4.5 flex-shrink-0" />
          {!collapsed && <span>Déconnexion</span>}
        </button>
      </div>
    </aside>
  )
}
