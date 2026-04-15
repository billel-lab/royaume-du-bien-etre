import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Royaume du Bien-Être — Admin',
  description: 'Panel d\'administration Royaume du Bien-Être',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-[family-name:var(--font-inter)] bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  )
}
