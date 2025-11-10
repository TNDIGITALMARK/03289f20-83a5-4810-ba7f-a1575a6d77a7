'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'NEW ARRIVALS', href: '/shop' },
    { name: 'COLLECTIONS', href: '/shop' },
    { name: 'ACCESSORIES', href: '/shop' },
    { name: 'ABOUT', href: '/story' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <h1 className="text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-primary transition-colors duration-300">
                POWER WEAR
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-primary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 text-white hover:text-primary transition-colors duration-300">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors duration-300"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-primary/30 animate-slideIn">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-white hover:text-primary transition-colors duration-300 py-2"
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full flex items-center justify-between py-3 px-4 bg-card hover:bg-muted rounded text-white transition-all duration-300">
              <span className="font-medium">CART</span>
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
