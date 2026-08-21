'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const amounts = [25, 50, 100, 250];

export function DonationSection() {
  const [type, setType] = useState<'once' | 'monthly'>('once');
  const [selected, setSelected] = useState<number | null>(100);

  return (
    <section className="relative overflow-hidden bg-primary-900 py-20 lg:py-28">
      {/* Decorative accent */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/10" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary-300">
              Donaciones
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
              Tu donación puede cambiar una vida
            </h2>
            <p className="mt-4 text-lg text-white/80 text-pretty">
              Tu apoyo ayuda a proporcionar alimentación, vivienda, educación,
              atención médica y acompañamiento a los niños de Casa Aleluya.
            </p>
          </div>
        </Reveal>

        <Reveal variant="scale" className="mt-12">
          <div className="rounded-2xl bg-white p-8 shadow-2xl lg:p-10">
            {/* Toggle */}
            <div className="flex justify-center">
              <div
                className="inline-flex rounded-xl bg-muted p-1"
                role="tablist"
                aria-label="Tipo de donación"
              >
                <button
                  role="tab"
                  aria-selected={type === 'once'}
                  onClick={() => setType('once')}
                  className={cn(
                    'rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors',
                    type === 'once'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  Donación única
                </button>
                <button
                  role="tab"
                  aria-selected={type === 'monthly'}
                  onClick={() => setType('monthly')}
                  className={cn(
                    'rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors',
                    type === 'monthly'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  Donación mensual
                </button>
              </div>
            </div>

            {/* Amounts */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelected(amt)}
                  className={cn(
                    'flex flex-col items-center justify-center rounded-xl border-2 py-6 font-heading text-2xl font-bold transition-all',
                    selected === amt
                      ? 'border-secondary bg-secondary/5 text-secondary'
                      : 'border-border bg-white text-foreground hover:border-secondary/50'
                  )}
                  aria-pressed={selected === amt}
                >
                  <span>${amt}</span>
                  {type === 'monthly' && (
                    <span className="text-xs font-normal text-muted-foreground">
                      /mes
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <button
              onClick={() => setSelected(null)}
              className={cn(
                'mt-4 w-full rounded-xl border-2 py-4 text-sm font-semibold transition-all',
                selected === null
                  ? 'border-secondary bg-secondary/5 text-secondary'
                  : 'border-dashed border-border text-muted-foreground hover:border-secondary/50'
              )}
              aria-pressed={selected === null}
            >
              Otro monto
            </button>

            {/* Donate button */}
            <Button asChild size="lg" className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
              <Link href="/donar">
                <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                DONAR AHORA
              </Link>
            </Button>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-secondary" />
                Pago seguro
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-secondary" />
                93.7% va directo a los niños
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-secondary" />
                501(c)3 sin fines de lucro
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
