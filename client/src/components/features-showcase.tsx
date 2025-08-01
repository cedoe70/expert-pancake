export default function FeaturesShowcase() {
  const features = [
    {
      icon: "fas fa-chart-area",
      iconColor: "text-[hsl(221,83%,53%)]",
      bgColor: "bg-blue-100",
      title: "Advanced Analytics",
      description: "Real-time market analysis, technical indicators, and portfolio performance tracking with institutional-grade tools.",
      items: [
        "Technical analysis tools",
        "Market sentiment indicators", 
        "Risk assessment metrics"
      ]
    },
    {
      icon: "fas fa-robot",
      iconColor: "text-[hsl(158,64%,52%)]",
      bgColor: "bg-green-100",
      title: "Automated Trading",
      description: "AI-powered trading strategies and automated portfolio rebalancing to optimize your investment returns.",
      items: [
        "Smart contract execution",
        "Dollar-cost averaging",
        "Stop-loss protection"
      ]
    },
    {
      icon: "fas fa-shield-alt",
      iconColor: "text-[hsl(253,55%,60%)]",
      bgColor: "bg-purple-100",
      title: "Bank-Level Security",
      description: "Military-grade encryption, cold storage, and multi-signature wallets to keep your assets completely secure.",
      items: [
        "256-bit encryption",
        "Cold storage solutions",
        "Insurance protection"
      ]
    },
    {
      icon: "fas fa-users",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100",
      title: "Expert Advisory",
      description: "Access to professional investment advisors and market experts to guide your cryptocurrency investment strategy.",
      items: [
        "1-on-1 consultations",
        "Market insights reports",
        "Investment strategy planning"
      ]
    },
    {
      icon: "fas fa-mobile-alt",
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-100",
      title: "Mobile Trading",
      description: "Trade on-the-go with our award-winning mobile app featuring real-time notifications and instant execution.",
      items: [
        "iOS & Android apps",
        "Push notifications",
        "Biometric authentication"
      ]
    },
    {
      icon: "fas fa-graduation-cap",
      iconColor: "text-pink-600",
      bgColor: "bg-pink-100",
      title: "Educational Resources",
      description: "Comprehensive learning center with courses, webinars, and market analysis to enhance your investment knowledge.",
      items: [
        "Video tutorials",
        "Live webinars",
        "Market research"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Advanced Investment Features</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional-grade tools and features designed for serious cryptocurrency investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} ${feature.iconColor} text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 mb-6">{feature.description}</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[hsl(221,83%,53%)] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}
