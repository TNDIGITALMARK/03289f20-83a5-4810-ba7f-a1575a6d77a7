'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/house-of-attitude/Navigation';
import Footer from '@/components/house-of-attitude/Footer';
import { founderStory, testimonials } from '@/lib/data/products';
import { Heart, Users, Sparkles, ArrowRight } from 'lucide-react';

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            {founderStory.title}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {founderStory.subtitle}
          </p>
        </div>
      </section>

      {/* Founder Story - Image & Text */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src={founderStory.image}
                alt="Founder Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Story Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">THE JOURNEY</h2>
              <div className="prose prose-invert max-w-none">
                {founderStory.story.trim().split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base text-muted-foreground leading-relaxed mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">
              {founderStory.mission.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founderStory.mission.values.map((value, index) => (
              <div
                key={index}
                className="card text-center group hover:bg-muted transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {index === 0 && (
                    <Heart className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                  )}
                  {index === 1 && (
                    <Sparkles className="w-12 h-12 text-secondary group-hover:scale-110 transition-transform" />
                  )}
                  {index === 2 && (
                    <Users className="w-12 h-12 text-accent group-hover:scale-110 transition-transform" />
                  )}
                </div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-secondary to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gradient">
              {founderStory.impact.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              Together, we're making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founderStory.impact.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-card/50 rounded border border-primary/30 hover:border-primary transition-all duration-300 group"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              VOICES OF POWER
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Real stories from real people in the House of Attitude family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card group hover:bg-muted transition-all duration-300"
              >
                <div className="mb-4">
                  <svg
                    className="w-10 h-10 text-primary opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-primary/30 pt-4">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Loves the {testimonial.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
            READY TO
            <br />
            <span className="text-gradient">WEAR YOUR POWER?</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of empowered individuals who refuse to blend in.
            Start your journey with House of Attitude today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-primary group">
              SHOP COLLECTIONS
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/#newsletter" className="btn-secondary">
              JOIN OUR COMMUNITY
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
