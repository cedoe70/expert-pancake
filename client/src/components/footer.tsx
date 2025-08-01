export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <i className="fas fa-chart-line text-2xl text-[hsl(221,83%,53%)] mr-2"></i>
              <span className="text-xl font-bold">CryptoVest</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Professional cryptocurrency investment platform providing institutional-grade security, 
              advanced analytics, and expert guidance for successful crypto investing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-[hsl(221,83%,53%)] rounded-lg flex items-center justify-center transition-colors duration-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-[hsl(221,83%,53%)] rounded-lg flex items-center justify-center transition-colors duration-200">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-[hsl(221,83%,53%)] rounded-lg flex items-center justify-center transition-colors duration-200">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-[hsl(221,83%,53%)] rounded-lg flex items-center justify-center transition-colors duration-200">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Platform</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Trading</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Mobile App</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">API</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 CryptoVest. All rights reserved. Licensed and regulated financial services provider.
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Risk Disclosure</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
