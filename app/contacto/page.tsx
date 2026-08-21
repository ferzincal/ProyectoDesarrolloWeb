'use client';

import { useState } from 'react';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/lib/site';

const contactReasons = [
  'Donaciones',
  'Patrocinio',
  'Visitas',
  'Voluntariado',
  'Información general',
];

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [reason, setReason] = useState('Información general');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contacto"
        title="Estamos aquí para ayudarte"
        description="¿Tienes preguntas sobre donaciones, patrocinio, visitas o voluntariado? Escríbenos y te responderemos lo antes posible."
        image="https://images.pexels.com/photos/335887/pexels-photo-335887.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Vista panorámica de Antigua Guatemala"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Reveal variant="scale">
                  <div className="rounded-2xl bg-warm p-10 text-center">
                    <Check className="mx-auto h-12 w-12 text-secondary" />
                    <h2 className="mt-4 font-heading text-2xl font-bold text-foreground">
                      ¡Mensaje enviado!
                    </h2>
                    <p className="mt-3 text-muted-foreground text-pretty">
                      Gracias por contactarnos. Nuestro equipo te responderá lo
                      antes posible.
                    </p>
                    <Button
                      className="mt-6"
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Enviar otro mensaje
                    </Button>
                  </div>
                </Reveal>
              ) : (
                <Reveal variant="up">
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
                      <Label htmlFor="organization">Organización</Label>
                      <Input id="organization" name="organization" className="mt-2" />
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="email">Correo electrónico *</Label>
                        <Input id="email" name="email" type="email" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" name="phone" type="tel" className="mt-2" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="reason">Motivo de contacto *</Label>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {contactReasons.map((r) => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => setReason(r)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                              reason === r
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                            }`}
                            aria-pressed={reason === r}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="reason" value={reason} />
                    </div>
                    <div>
                      <Label htmlFor="message">Mensaje *</Label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Enviar mensaje
                    </Button>
                  </form>
                </Reveal>
              )}
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <Reveal variant="right">
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Oficina de Estados Unidos
                  </h2>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                      {siteConfig.usOffice.address}, {siteConfig.usOffice.country}
                    </li>
                    <li>
                      <a href={`tel:${siteConfig.usPhone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                        <Phone className="h-5 w-5 shrink-0 text-secondary" />
                        {siteConfig.usPhone}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                        <Mail className="h-5 w-5 shrink-0 text-secondary" />
                        {siteConfig.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal variant="right" delay={100}>
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Oficina de Guatemala
                  </h2>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                      {siteConfig.guatemalaOffice.address}
                    </li>
                    <li>
                      <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                        <Mail className="h-5 w-5 shrink-0 text-secondary" />
                        {siteConfig.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal variant="right" delay={200}>
                <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                  <iframe
                    title="Mapa de Guatemala"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938609.234567!2d-91.5!3d15.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63798c1a2b3c4d%3A0x1234567890abcdef!2sGuatemala!5e0!3m2!1ses!2s!4v1700000000000"
                    className="h-64 w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Mapa de ubicación de Guatemala"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-warm py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <h2 className="text-center font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Preguntas frecuentes
            </h2>
          </Reveal>

          <div className="mt-12 space-y-4">
            {[
              { q: '¿Casa Aleluya es una organización sin fines de lucro?', a: 'Sí, Casa Aleluya es una organización 501(c)3 sin fines de lucro registrada en Estados Unidos que proporciona cuidado médico, educativo y espiritual a niños en Guatemala.' },
              { q: '¿Qué porcentaje de mi donación llega a los niños?', a: 'El 93.7% de cada donación se destina directamente al cuidado de los niños en Casa Aleluya.' },
              { q: '¿Cómo puedo patrocinar a un niño?', a: 'Completa el formulario de interés en nuestra página de patrocinio. Nuestro especialista se pondrá en contacto contigo para presentarte a niños que necesitan patrocinio.' },
              { q: '¿Puedo visitar Casa Aleluya?', a: 'Sí, tu iglesia, empresa u organización puede visitar Casa Aleluya. Todos los visitantes deben completar una verificación de antecedentes antes de su visita.' },
              { q: '¿Qué requisitos hay para ser voluntario?', a: 'Los solicitantes de misiones y pasantías deben tener 20 años o más. Todos los visitantes deben completar una verificación de antecedentes antes de su visita.' },
              { q: '¿Cómo contacto a Casa Aleluya?', a: 'Puedes escribirnos a hello@casaaleluya.org o llamarnos al (337) 855-1286. También puedes usar el formulario de contacto en esta página.' },
            ].map((faq, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 60}>
                <details className="group rounded-xl bg-white p-6 shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between font-heading text-base font-semibold text-foreground">
                    {faq.q}
                    <span className="ml-4 text-secondary transition-transform group-open:rotate-45 text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-muted-foreground text-pretty">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
