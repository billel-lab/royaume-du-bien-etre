'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import ZelligeBackground from '@/components/ui/ZelligeBackground'
import { LOGO_URL } from '@/lib/products'

const shopLinks = [
  { label: 'Coffrets', href: '/boutique?cat=coffrets' },
  { label: 'Soins Visage', href: '/boutique?cat=visage' },
  { label: 'Soins Capillaires', href: '/boutique?cat=capillaires' },
  { label: 'Huiles Cosmétiques', href: '/boutique?cat=huiles' },
  { label: 'Soins Nettoyants', href: '/boutique?cat=nettoyants' },
  { label: 'Composer un Pack', href: '/boutique/pack-builder' },
]

const companyLinks = [
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'CGV', href: '/cgv' },
  { label: 'Confidentialité', href: '/confidentialite' },
  { label: 'Mentions Légales', href: '/mentions-legales' },
]

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-secondary text-accent-light relative overflow-hidden">
      <ZelligeBackground variant="gold" opacity={0.025} />

      {/* Gold line top */}
      <div className="gold-line-thick" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={LOGO_URL}
              alt="Royaume du Bien-Être"
              width={150}
              height={50}
              className="h-12 w-auto object-contain mb-4 brightness-110"
            />
            <p className="text-sm text-accent/50 leading-relaxed mb-6 font-light">
              {t('tagline')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/boutiqueroyaumedubienetre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 hover:bg-gold/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gold-light" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 hover:bg-gold/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gold-light" />
              </a>
              <a
                href="mailto:contact@royaumedubienetre.fr"
                className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 hover:bg-gold/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gold-light" />
              </a>
            </div>
          </div>

          {/* Boutique */}
          <div>
            <h4 className="text-xs font-semibold text-gold uppercase tracking-[0.15em] mb-4">
              {t('shop')}
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-accent/45 hover:text-gold-light transition-colors font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise + Légal */}
          <div>
            <h4 className="text-xs font-semibold text-gold uppercase tracking-[0.15em] mb-4">
              {t('company')}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-accent/45 hover:text-gold-light transition-colors font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs font-semibold text-gold uppercase tracking-[0.15em] mb-4 mt-6">
              Légal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-accent/45 hover:text-gold-light transition-colors font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gold uppercase tracking-[0.15em] mb-4">
              Contact
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm text-accent/45">
                <Phone className="w-4 h-4 text-gold/60" />
                <span>+32 478 11 59 81</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-accent/45">
                <Mail className="w-4 h-4 text-gold/60" />
                <span>contact@royaumedubienetre.fr</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-accent/45">
                <MapPin className="w-4 h-4 text-gold/60 mt-0.5" />
                <span>Belgique & France</span>
              </li>
            </ul>

            <h4 className="text-xs font-semibold text-gold uppercase tracking-[0.15em] mb-3">
              {t('newsletter')}
            </h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-white/5 border border-gold/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-accent/30 focus:outline-none focus:border-gold/40 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold/20 border border-gold/30 hover:bg-gold/30 text-gold-light px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar with gold line */}
        <div className="mt-12 pt-8 text-center">
          <div className="gold-line mb-8" />
          <p className="text-xs text-accent/30 font-light tracking-wide">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
