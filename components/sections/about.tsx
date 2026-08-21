import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/reveal';
import { ArrowRight } from 'lucide-react';

const timeline = [
  { year: '1989', label: 'Fundación', desc: 'Mike y Dottie Clark fundan Casa Aleluya con el propósito de compartir el amor de Cristo con los niños de Guatemala.' },
  { year: '1990s', label: 'Crecimiento del ministerio', desc: 'El campus crece con nuevos dormitorios, escuela y clínicas para atender a más niños.' },
  { year: '2000s', label: 'Miles de niños atendidos', desc: 'Más de 6,000 niños reciben alimentación, educación y cuidado a lo largo de los años.' },
  { year: 'Hoy', label: 'Casa Aleluya actualmente', desc: 'Un campus de 15 acres que cuida a más de 400 niños y jóvenes al mismo tiempo.' },
];

export function AboutSection() {
  return (
    <section className="bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal variant="left">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.pexels.com/photos/29851269/pexels-photo-29851269.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Niños felices jugando juntos en Casa Aleluya"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-secondary/20 -z-0 hidden lg:block" />
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-accent/10 -z-0 hidden lg:block" />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal variant="right">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
                ¿Qué es Casa Aleluya?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
                Un hogar donde comienza un nuevo futuro
              </h2>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                Casa Aleluya es un ministerio cristiano fundado en 1989 por Mike
                y Dottie Clark con el propósito de compartir el evangelio de
                Jesucristo con los niños sufrientes de Guatemala. A lo largo de
                su historia, ha sido hogar de más de 6,000 niños, brindándoles
                alimentación, educación, atención médica y una comunidad de amor.
              </p>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                En cualquier momento, Casa Aleluya cuida a más de 400 niños y
                jóvenes huérfanos, abandonados y maltratados, guiándolos hacia un
                futuro de esperanza y propósito.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/historia">
                    Conoce nuestra historia
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal variant="up" className="mt-20">
          <div className="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
            <h3 className="text-center font-heading text-2xl font-bold text-foreground">
              Nuestra trayectoria
            </h3>
            <div className="mt-10 grid gap-8 md:grid-cols-4">
              {timeline.map((item, idx) => (
                <div key={item.year} className="relative">
                  {idx < timeline.length - 1 && (
                    <div className="absolute left-1/2 top-12 hidden h-[2px] w-full bg-gradient-to-r from-secondary to-secondary/20 md:block" />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading text-xs font-bold">
                      {item.year}
                    </div>
                    <h4 className="mt-4 font-heading text-base font-semibold text-foreground">
                      {item.label}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground text-pretty">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
