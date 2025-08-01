export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Built for the Future of Finance
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              CryptoVest was founded by a team of financial experts and technology innovators who believe 
              that cryptocurrency represents the future of global finance. Our platform combines institutional-grade 
              security with user-friendly design to make professional cryptocurrency investment accessible to everyone.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              With over $2 billion in assets under management and a track record of consistent returns, 
              we've helped thousands of investors successfully navigate the cryptocurrency markets.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(221,83%,53%)] mb-2">100K+</div>
                <div className="text-slate-600">Active Investors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(158,64%,52%)] mb-2">$2B+</div>
                <div className="text-slate-600">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(253,55%,60%)] mb-2">5+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-slate-600">Countries Served</div>
              </div>
            </div>

            <button className="bg-[hsl(221,83%,53%)] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Learn More About Us
            </button>
          </div>
          
          <div className="relative">
            {/* Professional team discussing cryptocurrency investments */}
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional investment team" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse-slow"></div>
                <span className="text-sm font-medium text-slate-900">Live Trading</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">+$12,450</div>
              <div className="text-sm text-slate-600">Portfolio Growth Today</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
