import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'

export default function CGVPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-secondary mb-8">
            Conditions Générales de Vente
          </h1>
          <div className="prose prose-sm text-text-body space-y-6 [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-secondary [&_h2]:mt-8 [&_h2]:mb-3">
            <p><strong>Dernière mise à jour :</strong> 15 avril 2025</p>

            <h2>1. Objet</h2>
            <p>Les présentes Conditions Générales de Vente (CGV) régissent l&apos;ensemble des ventes réalisées sur le site royaumedubienetre.fr, exploité par Royaume du Bien-Être.</p>

            <h2>2. Produits</h2>
            <p>Les produits proposés sont des cosmétiques naturels fabriqués artisanalement au Maroc. Les photographies illustrant les produits n&apos;entrent pas dans le champ contractuel.</p>

            <h2>3. Prix</h2>
            <p>Les prix sont indiqués en euros TTC. La livraison est gratuite pour toute commande supérieure à 79€. En dessous, des frais de port de 5,95€ s&apos;appliquent.</p>

            <h2>4. Commande</h2>
            <p>Le client passe commande en ligne et effectue le paiement via notre partenaire sécurisé Mollie. La commande est confirmée par email.</p>

            <h2>5. Livraison</h2>
            <p>Les commandes sont expédiées sous 24-48h ouvrées. Délai de livraison : 1-2 jours ouvrés en Belgique, 2-4 jours en France.</p>

            <h2>6. Droit de rétractation</h2>
            <p>Conformément à la législation, vous disposez d&apos;un délai de 14 jours à compter de la réception pour retourner un produit non ouvert et dans son emballage d&apos;origine.</p>

            <h2>7. Contact</h2>
            <p>Pour toute question : contact@royaumedubienetre.fr ou WhatsApp +32 478 11 59 81.</p>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
