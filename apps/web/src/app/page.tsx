import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import ScrollProgress from '@/components/layout/ScrollProgress'
import ScrollToTop from '@/components/layout/ScrollToTop'
import StickyCTAMobile from '@/components/layout/StickyCTAMobile'
import NewsletterPopup from '@/components/layout/NewsletterPopup'
import Hero from '@/components/home/Hero'
import Categories from '@/components/home/Categories'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import BrandStory from '@/components/home/BrandStory'
import Process from '@/components/home/Process'
import ProductFinder from '@/components/home/ProductFinder'
import Stats from '@/components/home/Stats'
import Testimonials from '@/components/home/Testimonials'
import Guarantees from '@/components/home/Guarantees'
import Newsletter from '@/components/home/Newsletter'
import CTAFinal from '@/components/home/CTAFinal'
import ArabesqueDivider from '@/components/ui/ArabesqueDivider'

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <BrandStory />
        <ArabesqueDivider variant="simple" className="bg-bg" />
        <Process />
        <ProductFinder />
        <Stats />
        <Testimonials />
        <Guarantees />
        <Newsletter />
        <CTAFinal />
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppButton />
      <ScrollToTop />
      <StickyCTAMobile />
      <NewsletterPopup />
    </>
  )
}
