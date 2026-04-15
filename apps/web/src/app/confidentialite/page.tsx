import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-secondary mb-8">
            Politique de Confidentialité
          </h1>
          <div className="prose prose-sm text-text-body space-y-6 [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-secondary [&_h2]:mt-8 [&_h2]:mb-3">
            <p><strong>Dernière mise à jour :</strong> 15 avril 2025</p>

            <h2>1. Données collectées</h2>
            <p>Nous collectons les données nécessaires au traitement de vos commandes : nom, prénom, adresse email, téléphone, adresse de livraison.</p>

            <h2>2. Utilisation des données</h2>
            <p>Vos données sont utilisées pour traiter vos commandes, vous livrer, et vous envoyer des communications marketing si vous y avez consenti.</p>

            <h2>3. Protection des données</h2>
            <p>Vos données sont stockées de manière sécurisée. Les paiements sont traités par Mollie, certifié PCI DSS. Nous ne stockons jamais vos données bancaires.</p>

            <h2>4. Vos droits</h2>
            <p>Conformément au RGPD, vous pouvez exercer vos droits d&apos;accès, de rectification, de suppression et de portabilité à tout moment en nous contactant.</p>

            <h2>5. Cookies</h2>
            <p>Nous utilisons des cookies strictement nécessaires au fonctionnement du site et des cookies analytiques pour améliorer votre expérience.</p>

            <h2>6. Contact</h2>
            <p>Pour toute question concernant vos données : contact@royaumedubienetre.fr</p>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
