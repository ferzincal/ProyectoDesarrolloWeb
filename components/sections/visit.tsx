import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

const steps = [
  { num: '01', title: 'Conoce Casa Aleluya', desc: 'Aprende sobre nuestra misión, nuestro campus y la vida de los niños que cuidamos.' },
  { num: '02', title: 'Completa la información', desc: 'Llena el formulario de interés para equipos o visitantes.' },
  { num: '03', title: 'Requisitos de seguridad', desc: 'Todos los visitantes deben completar una verificación de antecedentes antes de su visita.' },
  { num: '04', title: 'Coordina tu visita', desc: 'Nuestro equipo te ayudará a planificar los detalles de tu visita a Guatemala.' },
  { num: '05', title: 'Participa', desc: 'Vive la experiencia de ser parte de la historia de Casa Aleluya.' },
];

export function VisitSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: image + CTA */}
          <Reveal variant="left">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Voluntarios participando en actividades comunitarias"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="flex items-center gap-2 text-sm text-white/80">
                  <MapPin className="h-4 w-4" />
                  Guatemala, Centroamérica
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-white">
                  Tu iglesia, empresa u organización puede hacer la diferencia
                </h3>
                <Button asChild size="lg" className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/visitar">
                    Planificar mi visita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Right: process */}
          <Reveal variant="right">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
                Visitas y voluntariado
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
                Ven a ser parte de la historia
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Ya sea con tu iglesia, empresa, organización o como individuo,
                hay muchas formas de participar y servir a los niños de Casa
                Aleluya.
              </p>

              <ol className="mt-8 space-y-6">
                {steps.map((step) => (
                  <li key={step.num} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading text-sm font-bold">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground text-pretty">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
