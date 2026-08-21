'use client';

import { useState } from 'react';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { HeartHandshake, Check, Quote } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export default function PatrocinioPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Patrocinio"
        title="Patrocina a un niño hoy"
        description="Tu patrocinio es más que una donación. Es una relación que puede durar toda la vida y transformar el futuro de un niño en Guatemala."
        image="https://images.pexels.com/photos/38458520/pexels-photo-38458520.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Niños en un salón de clases con uniformes"
      />

      {/* What is sponsorship */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Programa de patrocinio infantil
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Crea una relación que durará toda la vida
            </h2>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                Casa Aleluya invierte profundamente en las necesidades físicas,
                emocionales y espirituales de cada niño asignado a nuestro cuidado.
                Esto significa que TODAS las necesidades del niño son atendidas:
                seguridad, atención médica, alimentación, vestido, hogar,
                educación, guía, fundamentos espirituales y mucho, mucho más.
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={150}>
            <div className="mt-8 rounded-2xl bg-warm p-8">
              <Quote className="h-8 w-8 text-secondary" />
              <p className="mt-4 font-heading text-xl text-foreground italic text-pretty">
                "De cierto os digo, que en cuanto lo hicisteis a uno de estos
                mis hermanos más pequeños, a mí lo hicisteis."
              </p>
              <p className="mt-2 text-sm text-muted-foreground">Mateo 25:40</p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <p className="mt-8 text-lg text-muted-foreground text-pretty">
              Cuando patrocinas a un niño a través del programa de Casa, se forma
              una conexión entre tú, el niño y nosotros. Este vínculo aumenta la
              posibilidad de restaurar a un niño abusado y abandonado para que
              pueda tener un futuro más brillante y satisfactorio. Tu patrocinio
              es más que una donación. Te invitamos a construir una relación
              significativa: interactuar y orar por los niños que patrocinas.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-warm py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Cómo funciona el patrocinio
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { step: '01', title: 'Completa el formulario', desc: 'Llena el breve formulario de interés en esta página.' },
              { step: '02', title: 'Conecta con un especialista', desc: 'Nuestro especialista en patrocinio trabaja contigo para presentarte a niños que necesitan patrocinio y responder tus preguntas.' },
              { step: '03', title: 'Construye una relación', desc: 'Comienza tu viaje de patrocinio y desarrolla una conexión significativa con el niño que apoyas.' },
            ].map((item, idx) => (
              <Reveal key={item.step} variant="up" delay={idx * 100}>
                <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
                  <span className="font-heading text-4xl font-bold text-secondary/30">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <div className="text-center">
              <HeartHandshake className="mx-auto h-12 w-12 text-secondary" />
              <h2 className="mt-4 font-heading text-3xl font-bold text-foreground text-balance">
                Comienza ahora y patrocina a un niño
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                Completa el formulario y nuestro especialista se pondrá en
                contacto contigo.
              </p>
            </div>
          </Reveal>

          {submitted ? (
            <Reveal variant="scale" className="mt-12">
              <div className="rounded-2xl bg-warm p-10 text-center">
                <Check className="mx-auto h-12 w-12 text-secondary" />
                <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">
                  ¡Gracias por tu interés!
                </h3>
                <p className="mt-3 text-muted-foreground text-pretty">
                  Hemos recibido tu solicitud. Nuestro especialista en patrocinio
                  se pondrá en contacto contigo pronto para presentarte a niños
                  que necesitan patrocinio.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal variant="up" className="mt-12">
              <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">Nombre *</Label>
                    <Input id="firstName" name="firstName" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido *</Label>
                    <Input id="lastName" name="lastName" required className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input id="email" name="email" type="email" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" name="phone" type="tel" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Mensaje o preguntas</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <HeartHandshake className="mr-2 h-5 w-5" />
                  Enviar solicitud
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  También puedes escribirnos directamente a {siteConfig.email}
                </p>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
