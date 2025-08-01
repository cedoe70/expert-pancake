import Header from "@/components/header";
import PriceTicker from "@/components/price-ticker";
import HeroSection from "@/components/hero-section";
import CryptoPriceDisplay from "@/components/crypto-price-display";
import FeaturesShowcase from "@/components/features-showcase";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <PriceTicker />
      <main>
        <HeroSection />
        <CryptoPriceDisplay />
        <FeaturesShowcase />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        
        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-[hsl(221,83%,53%)] to-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Cryptocurrency Investment Journey Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of successful investors who trust CryptoVest for their cryptocurrency investments. 
              Get started with as little as $1,000 and access professional-grade tools and expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="bg-white text-[hsl(221,83%,53%)] hover:bg-slate-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Create Free Account
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[hsl(221,83%,53%)] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
                Schedule a Call
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
              <div className="flex items-center">
                <i className="fas fa-check-circle mr-2"></i>
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle mr-2"></i>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle mr-2"></i>
                <span>Instant Account Approval</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
