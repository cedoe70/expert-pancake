"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-chart-line text-2xl text-[hsl(221,83%,53%)] mr-2"></i>
              <span className="text-xl font-bold text-slate-900">CryptoVest</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-600 hover:text-[hsl(221,83%,53%)] transition-colors duration-200 font-medium">Home</a>
              <a href="#features" className="text-slate-600 hover:text-[hsl(221,83%,53%)] transition-colors duration-200 font-medium">Features</a>
              <a href="#about" className="text-slate-600 hover:text-[hsl(221,83%,53%)] transition-colors duration-200 font-medium">About</a>
              <a href="#contact" className="text-slate-600 hover:text-[hsl(221,83%,53%)] transition-colors duration-200 font-medium">Contact</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-600 hover:text-[hsl(221,83%,53%)] font-medium transition-colors duration-200">Sign In</button>
            <button className="bg-[hsl(221,83%,53%)] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">Get Started</button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-[hsl(221,83%,53%)]"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-slate-600 hover:text-[hsl(221,83%,53%)] font-medium">Home</a>
              <a href="#features" className="block px-3 py-2 text-slate-600 hover:text-[hsl(221,83%,53%)] font-medium">Features</a>
              <a href="#about" className="block px-3 py-2 text-slate-600 hover:text-[hsl(221,83%,53%)] font-medium">About</a>
              <a href="#contact" className="block px-3 py-2 text-slate-600 hover:text-[hsl(221,83%,53%)] font-medium">Contact</a>
              <div className="px-3 py-2 space-y-2">
                <button className="block w-full text-left text-slate-600 hover:text-[hsl(221,83%,53%)] font-medium">Sign In</button>
                <button className="block w-full bg-[hsl(221,83%,53%)] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
