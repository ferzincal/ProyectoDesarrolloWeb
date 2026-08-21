'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* Using img instead of next/image for external URL without optimization config */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/28614927/pexels-photo-28614927.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Niños jugando fútbol en una zona rural de Guatemala"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            Guatemala &middot; Desde 1989
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Dale esperanza.
            <br />
            <span className="text-secondary-300">Cambia una vida.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 text-pretty sm:text-xl">
            Casa Aleluya brinda un hogar, educación, atención médica y una
            comunidad de amor a niños y jóvenes en Guatemala.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="/historia">
                Conoce nuestra historia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl">
              <Link href="/donar">
                <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                Haz una donación
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-white/70">
            Cada acción puede marcar una diferencia.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
