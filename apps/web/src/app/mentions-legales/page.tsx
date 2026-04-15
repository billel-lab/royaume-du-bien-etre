import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pb-24 lg:pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-secondary mb-8">
            Mentions Légales
          </h1>
          <div className="prose prose-sm text-text-body space-y-6 [&_h2]:font-[family-name:var(--font-heading)] [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-secondary [&_h2]:mt-8 [&_h2]:mb-3">
            <h2>Éditeur du site</h2>
            <p>Royaume du Bien-Être<br />Site web : royaumedubienetre.fr<br />Email : contact@royaumedubienetre.fr</p>

            <h2>Hébergement</h2>
            <p>Vercel Inc.<br />340 S Lemon Ave #4133<br />Walnut, CA 91789, États-Unis</p>

            <h2>Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus (textes, images, logos, vidéos) est protégé par le droit d&apos;auteur. Toute reproduction est interdite sans autorisation préalable.</p>

            <h2>Responsabilité</h2>
            <p>Royaume du Bien-Être s&apos;efforce de fournir des informations précises mais ne peut garantir leur exhaustivité.</p>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </>
  )
}
