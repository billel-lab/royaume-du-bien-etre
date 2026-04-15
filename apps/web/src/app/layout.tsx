import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import './globals.css'

const heading = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const body = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Royaume du Bien-Être — Cosmétiques Naturels Marocains',
  description:
    'Découvrez nos soins naturels artisanaux du Maroc. Huiles, crèmes, coffrets et soins capillaires 100% naturels. Livraison rapide en Belgique et en France.',
  metadataBase: new URL('https://royaumedubienetre.fr'),
  openGraph: {
    title: 'Royaume du Bien-Être — Cosmétiques Naturels Marocains',
    description:
      'Des trésors de beauté ancestraux, fabriqués artisanalement au Maroc avec des ingrédients purs et naturels.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Royaume du Bien-Être',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${heading.variable} ${body.variable}`}>
      <body className="font-[family-name:var(--font-body)] bg-bg text-text antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
