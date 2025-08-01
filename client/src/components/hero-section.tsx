export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Professional cryptocurrency trading floor background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            The Future of 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {" "}Cryptocurrency Investment
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Professional-grade cryptocurrency investment platform with institutional security, 
            real-time analytics, and expert portfolio management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button className="bg-[hsl(221,83%,53%)] hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Investing Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              <i className="fas fa-play mr-2"></i>
              Watch Demo
            </button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="text-slate-300 mb-8">Trusted by over 100,000+ investors worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-2xl text-green-400 mr-2"></i>
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-certificate text-2xl text-blue-400 mr-2"></i>
              <span>SEC Compliant</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-users text-2xl text-purple-400 mr-2"></i>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
