import Header from '../components/header'
import HeroSection from '../components/hero-section'
import PriceTicker from '../components/price-ticker'
import FeaturesShowcase from '../components/features-showcase'
import CryptoPriceDisplay from '../components/crypto-price-display'
import TestimonialsSection from '../components/testimonials-section'
import AboutSection from '../components/about-section'
import ContactSection from '../components/contact-section'
import Footer from '../components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PriceTicker />
        <FeaturesShowcase />
        <CryptoPriceDisplay />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}