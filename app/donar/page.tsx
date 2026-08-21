'use client';

import { useState } from 'react';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Check, Lock, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site';

const amounts = [25, 50, 100, 250];

export default function DonarPage() {
  const [type, setType] = useState<'once' | 'monthly'>('once');
  const [selected, setSelected] = useState<number | null>(100);
  const [custom, setCustom] = useState('');

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Donaciones"
        title="Tu donación puede cambiar una vida"
        description="Tu apoyo ayuda a proporcionar alimentación, vivienda, educación, atención médica y acompañamiento a los niños de Casa Aleluya."
        image="https://images.pexels.com/photos/9823013/pexels-photo-9823013.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Niños felices con paquetes de alimentos"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground text-balance">
                Tu regalo puede cambiar una vida para siempre
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Ya sea una donación única o un compromiso mensual, cualquier
                cantidad que des proporcionarás esperanza y sanidad a los niños
                de Guatemala.
              </p>
            </div>
          </Reveal>

          <Reveal variant="scale" className="mt-12">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg lg:p-10">
              {/* Toggle */}
              <div className="flex justify-center">
                <div className="inline-flex rounded-xl bg-muted p-1" role="tablist" aria-label="Tipo de donación">
                  <button
                    role="tab"
                    aria-selected={type === 'once'}
                    onClick={() => setType('once')}
                    className={cn(
                      'rounded-lg px-6 py-2.5 text-sm font-semibold transition-colors',
                      type === 'once' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
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
                      type === 'monthly' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
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
                    onClick={() => { setSelected(amt); setCustom(''); }}
                    className={cn(
                      'flex flex-col items-center justify-center rounded-xl border-2 py-6 font-heading text-2xl font-bold transition-all',
                      selected === amt && !custom
                        ? 'border-secondary bg-secondary/5 text-secondary'
                        : 'border-border bg-white text-foreground hover:border-secondary/50'
                    )}
                    aria-pressed={selected === amt && !custom}
                  >
                    <span>${amt}</span>
                    {type === 'monthly' && (
                      <span className="text-xs font-normal text-muted-foreground">/mes</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mt-4">
                <label htmlFor="custom-amount" className="block text-sm font-medium text-muted-foreground mb-2">
                  Otro monto
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-heading font-bold text-muted-foreground">$</span>
                  <input
                    id="custom-amount"
                    type="number"
                    min="1"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                    placeholder="Ingrese monto"
                    className="w-full rounded-xl border-2 border-border py-4 pl-10 pr-4 text-lg font-heading font-bold text-foreground focus:border-secondary focus:outline-none"
                  />
                  {type === 'monthly' && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">/mes</span>
                  )}
                </div>
              </div>

              {/* Donation summary */}
              <div className="mt-6 rounded-xl bg-muted p-4 text-center">
                <p className="text-sm text-muted-foreground">Total de tu {type === 'once' ? 'donación única' : 'donación mensual'}</p>
                <p className="font-heading text-3xl font-bold text-primary">
                  ${custom || selected || 0}
                  {type === 'monthly' && <span className="text-base font-normal text-muted-foreground">/mes</span>}
                </p>
              </div>

              {/* Submit */}
              <Button asChild size="lg" className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                <a href={`mailto:${siteConfig.email}?subject=Donación a Casa Aleluya&body=Quiero hacer una donación ${type === 'monthly' ? 'mensual' : 'única'} de $${custom || selected || 0}`}>
                  <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                  DONAR AHORA
                </a>
              </Button>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                Serás dirigido al sistema oficial de donaciones de Casa Aleluya.
              </p>

              {/* Trust indicators */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-5 w-5 text-secondary shrink-0" />
                  Pago seguro
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-5 w-5 text-secondary shrink-0" />
                  93.7% directo a los niños
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BadgeCheck className="h-5 w-5 text-secondary shrink-0" />
                  501(c)3 sin fines de lucro
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How your donation helps */}
      <section className="bg-warm py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <div className="text-center">
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
                ¿Cómo ayuda tu donación?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Tu regalo tiene un impacto real
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Casa Aleluya toca cada aspecto de la vida para asegurar que los
                niños estén listos para hacer una diferencia en el mundo.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Alimentación', desc: 'Tres comidas diarias para cada niño y miembro del personal.' },
              { title: 'Vivienda segura', desc: 'Hogares con padres de familia amorosos y un ambiente estable.' },
              { title: 'Educación', desc: 'Desde preescolar hasta la universidad, con becas garantizadas.' },
              { title: 'Atención médica', desc: 'Servicios médicos, dentales, de visión y psicológicos.' },
              { title: 'Cuidado espiritual', desc: 'Discipulado cristiano y formación espiritual diaria.' },
              { title: 'Comunidad', desc: 'Un entorno donde los niños encuentran familia y pertenencia.' },
            ].map((item, idx) => (
              <Reveal key={item.title} variant="up" delay={(idx % 3) * 100}>
                <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
                  <Check className="h-6 w-6 shrink-0 text-secondary" />
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground text-pretty">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="bg-primary-900 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <p className="flex items-center justify-center gap-2 text-sm text-white/70">
              <Lock className="h-4 w-4 text-secondary-300" />
              Tus datos personales son tratados con confidencialidad. Nunca compartimos tu información sin tu consentimiento.
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
