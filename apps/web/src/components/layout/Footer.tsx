'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
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
    <footer className="bg-secondary text-white/60">
      {/* Top border */}
      <div className="h-px bg-primary/30" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={LOGO_URL}
              alt="Royaume du Bien-Être"
              width={130}
              height={45}
              className="h-11 w-auto object-contain mb-5 brightness-125"
            />
            <p className="text-sm leading-relaxed mb-6 font-light">
              {t('tagline')}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: 'https://instagram.com/boutiqueroyaumedubienetre', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Mail, href: 'mailto:contact@royaumedubienetre.fr', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 border border-white/15 hover:border-primary hover:text-primary flex items-center justify-center transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Boutique */}
          <div>
            <h4 className="text-[11px] font-medium text-primary uppercase tracking-[0.2em] mb-5">
              {t('shop')}
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors duration-300 font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise + Légal */}
          <div>
            <h4 className="text-[11px] font-medium text-primary uppercase tracking-[0.2em] mb-5">
              {t('company')}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors duration-300 font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-[11px] font-medium text-primary uppercase tracking-[0.2em] mb-5 mt-8">
              Légal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors duration-300 font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-medium text-primary uppercase tracking-[0.2em] mb-5">
              Contact
            </h4>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary/50" />
                <span>+32 478 11 59 81</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary/50" />
                <span>contact@royaumedubienetre.fr</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary/50 mt-0.5" />
                <span>Belgique & France</span>
              </li>
            </ul>

            <h4 className="text-[11px] font-medium text-primary uppercase tracking-[0.2em] mb-3">
              {t('newsletter')}
            </h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-white/5 border border-white/15 px-3 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 text-xs uppercase tracking-[0.1em] font-medium transition-colors duration-300"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center">
          <p className="text-[11px] text-white/30 font-light tracking-wide">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
