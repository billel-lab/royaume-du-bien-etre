'use client'

import AuthGuard from '@/components/layout/AuthGuard'
import Sidebar from '@/components/layout/Sidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-bg">
        <Sidebar />
        <main className="flex-1 ml-60 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </AuthGuard>
  )
}
