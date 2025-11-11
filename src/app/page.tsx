'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/house-of-attitude/Navigation';
import Footer from '@/components/house-of-attitude/Footer';
import { featuredProducts, heroSlogans } from '@/lib/data/products';
import { ShoppingCart, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Rotate hero slogans every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlogan((prev) => (prev + 1) % heroSlogans.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section - Full Screen with Overlay */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-main.png"
            alt="House of Attitude Hero"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
          {/* Pink accent lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div
            className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="hero-title text-gradient">
              {heroSlogans[currentSlogan]}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              More than clothing—it's a movement for empowerment and self-expression
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/shop" className="btn-primary group">
                EXPLORE NOW
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/story" className="btn-secondary">
                OUR STORY
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              FEATURED COLLECTIONS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Bold pieces for those who refuse to blend in. Shop our hero collection.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover product-image"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ShoppingCart className="inline-block mr-2 w-5 h-5" />
                      QUICK ADD
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-primary">${product.price}</p>
                    <Link
                      href={`/shop/${product.slug}`}
                      className="text-sm text-secondary hover:text-primary font-medium transition-colors"
                    >
                      VIEW DETAILS →
                    </Link>
                  </div>
                  {/* Empowerment Message */}
                  <p className="mt-3 text-xs text-accent italic border-t border-accent/30 pt-3">
                    "{product.empowermentMessage}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link href="/shop" className="btn-accent inline-flex items-center group">
              VIEW ALL COLLECTIONS
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Empowerment Statement Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-primary to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-secondary to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 leading-tight">
            YOUR STYLE.
            <br />
            <span className="text-primary">YOUR POWER.</span>
            <br />
            YOUR STORY.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
            House of Attitude isn't just about what you wear—it's about who you become when you put it on.
            It's for those who've been told they're too much, too loud, too different.
            For those who refuse to apologize for taking up space.
          </p>
          <Link href="/story" className="btn-secondary group">
            READ OUR STORY
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Community Hashtag Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            JOIN THE MOVEMENT
          </h3>
          <p className="text-base text-muted-foreground mb-6">
            Share your power. Tag us with <span className="text-primary font-bold">#HOUSEOFATTITUDE</span>
          </p>
          <div className="flex justify-center space-x-4 text-primary">
            <span className="text-sm sm:text-base font-medium">#WearYourPower</span>
            <span className="text-sm sm:text-base font-medium">#OwnYourStory</span>
            <span className="text-sm sm:text-base font-medium">#FearlessByDesign</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
