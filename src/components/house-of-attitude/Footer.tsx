'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-black border-t-2 border-primary">
      {/* Newsletter Section */}
      <div className="border-b border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gradient">
              JOIN THE MOVEMENT
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Get the attitude in your inbox. Exclusive drops, empowerment content, and community access.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                className="flex-1 px-4 py-3 bg-card border border-primary/50 rounded text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                {subscribed ? 'SUBSCRIBED!' : 'GET ACCESS'}
              </button>
            </form>

            {subscribed && (
              <p className="mt-4 text-primary font-medium animate-fadeIn">
                ✓ Welcome to the House of Attitude family!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h4 className="text-2xl font-bold mb-4 text-white">POWER WEAR</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              More than clothing—a movement for empowerment and self-expression.
              Wear your power proudly.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h5 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">Shop</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Fierce Basics
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Power Statements
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h5 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">About</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/story" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/story" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Mission & Values
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Community Impact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h5 className="text-lg font-bold mb-4 text-white uppercase tracking-wide">Support</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 House of Attitude. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Empowerment Message */}
        <div className="mt-8 text-center">
          <p className="text-sm text-primary font-medium tracking-wide">
            WEAR YOUR POWER. OWN YOUR STORY. #HOUSEOFATTITUDE
          </p>
        </div>
      </div>
    </footer>
  );
}
