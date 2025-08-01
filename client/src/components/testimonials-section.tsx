export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      text: "CryptoVest has transformed my investment strategy. The automated trading features and expert guidance have helped me achieve consistent returns I never thought possible.",
      name: "Michael Rodriguez",
      title: "Portfolio Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "The security features give me complete peace of mind. I know my investments are protected with bank-level security while still having full control over my portfolio.",
      name: "Sarah Chen",
      title: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
      rating: 5,
      text: "As a beginner in cryptocurrency, the educational resources and expert advisory services have been invaluable. I feel confident making informed investment decisions now.",
      name: "David Park",
      title: "Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Investors Say</h2>
          <p className="text-xl text-slate-600">Join thousands of satisfied investors who trust CryptoVest</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <span className="text-slate-600 text-sm">5.0</span>
              </div>
              <p className="text-slate-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
