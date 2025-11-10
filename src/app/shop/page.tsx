'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/house-of-attitude/Navigation';
import Footer from '@/components/house-of-attitude/Footer';
import { allProducts, categories } from '@/lib/data/products';
import { ShoppingCart, Filter } from 'lucide-react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Filter products by category
  const filteredProducts =
    selectedCategory === 'all'
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Shop Header */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-gradient">
            SHOP EMPOWERMENT
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every piece is designed for those who refuse to blend in. Find your power.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-card/95 backdrop-blur-md border-y border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden w-full flex items-center justify-between p-3 bg-muted rounded text-white font-medium mb-3"
          >
            <span className="flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              FILTER BY CATEGORY
            </span>
            <span>{showFilters ? '−' : '+'}</span>
          </button>

          {/* Desktop Filter - Always Visible */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 font-medium uppercase text-sm transition-all duration-300 rounded ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-muted-foreground hover:text-primary border border-primary/30 hover:border-primary'
              }`}
            >
              All Collections
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 font-medium uppercase text-sm transition-all duration-300 rounded ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-transparent text-muted-foreground hover:text-primary border border-primary/30 hover:border-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Mobile Filter - Collapsible */}
          {showFilters && (
            <div className="md:hidden space-y-2 animate-slideIn">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setShowFilters(false);
                }}
                className={`w-full px-4 py-3 font-medium uppercase text-sm transition-all duration-300 rounded ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:text-primary'
                }`}
              >
                All Collections
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowFilters(false);
                  }}
                  className={`w-full px-4 py-3 font-medium uppercase text-sm transition-all duration-300 rounded ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:text-primary'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Description */}
          {selectedCategory !== 'all' && (
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 uppercase">
                {categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-muted-foreground">
                {categories.find((c) => c.id === selectedCategory)?.description}
              </p>
            </div>
          )}

          {/* Product Count */}
          <div className="mb-6 text-center">
            <p className="text-sm text-muted-foreground">
              Showing <span className="text-primary font-bold">{filteredProducts.length}</span> products
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover product-image"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 bg-primary/90 text-white text-xs font-bold uppercase rounded">
                      {categories.find((c) => c.id === product.category)?.name}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ShoppingCart className="inline-block mr-2 w-5 h-5" />
                      ADD TO CART
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-primary">${product.price}</p>
                    <Link
                      href={`/shop/${product.slug}`}
                      className="text-xs text-secondary hover:text-primary font-medium transition-colors uppercase"
                    >
                      Details →
                    </Link>
                  </div>
                  {/* Empowerment Message */}
                  <p className="mt-3 text-xs text-accent italic border-t border-accent/30 pt-2">
                    "{product.empowermentMessage}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try selecting a different category or browse all collections
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn-primary"
              >
                VIEW ALL PRODUCTS
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-black mb-4">
            CAN'T FIND YOUR POWER?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join our community and be the first to know about new drops, exclusive collections, and empowerment content.
          </p>
          <Link href="/#newsletter" className="btn-accent">
            JOIN THE MOVEMENT
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
