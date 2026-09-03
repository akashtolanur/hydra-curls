import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Hair Care Blog', href: '#blog' },
    { label: 'Curly Girl Method', href: '#method' },
  ];

  return (
    <header style={{backgroundColor:"#0d0517"}} className="sticky top-0 z-50 w-full bg-[#0d0517]/90 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-16 text-white">
        
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center space-x-3">
          <div className="border border-white/30 rounded px-1.5 py-0.5 text-[10px] tracking-widest text-center leading-tight">
            <span className="block text-[8px] opacity-70">PARACHUTE</span>
            ADVANCED
          </div>
          <span className="text-xl font-bold tracking-wider font-serif uppercase text-white">
            Hydra <span className="text-cyan-400">Curls</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-200 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 hover:text-white p-1 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0517] border-b border-white/10 px-6 py-5 flex flex-col space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-200 text-sm font-medium hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};