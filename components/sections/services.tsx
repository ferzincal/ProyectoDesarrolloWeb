import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { Heart, GraduationCap, Home, BookOpen, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Atención Médica',
    desc: 'Cada niño recibe atención física y emocional por parte de doctores y enfermeras en el campus, incluyendo servicios médicos, dentales, de visión, psiquiatría y psicología.',
    image: 'https://images.pexels.com/photos/6502541/pexels-photo-6502541.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Niño recibiendo atención dental',
  },
  {
    icon: GraduationCap,
    title: 'Educación',
    desc: 'Oportunidades educativas desde preescolar hasta niveles universitarios y profesionales. Se garantizan becas para cada niño que desea una educación universitaria o técnica.',
    image: 'https://images.pexels.com/photos/13806035/pexels-photo-13806035.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Niños en un salón de clases',
  },
  {
    icon: Home,
    title: 'Familia',
    desc: 'Un ambiente seguro, estable y lleno de comunidad. Casas centradas en Cristo con padres de familia amorosos que cuidan a los niños en un hogar donde encuentran seguridad y sanidad.',
    image: 'https://images.pexels.com/photos/35811617/pexels-photo-35811617.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Niños jugando al aire libre',
  },
  {
    icon: BookOpen,
    title: 'Discipulado',
    desc: 'Formación espiritual basada en la fe cristiana. Jesús es el centro de la vida diaria del hogar, con devocionales, oración, enseñanza y guía bíblica cada día.',
    image: 'https://images.pexels.com/photos/2351723/pexels-photo-2351723.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Persona en oración',
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Cada niño recibe
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
              Cuatro áreas de impacto
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Casa Aleluya toca cada aspecto de la vida para asegurar que los
              niños estén listos para hacer una diferencia en el mundo.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} variant="up" delay={idx * 100}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="font-heading text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-base text-muted-foreground text-pretty">
                      {service.desc}
                    </p>
                    <Link
                      href="/ministerio"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-secondary-600"
                    >
                      Conocer más
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
