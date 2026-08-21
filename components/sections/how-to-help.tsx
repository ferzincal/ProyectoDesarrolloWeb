import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Heart, HeartHandshake, Plane, Share2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const options = [
  {
    icon: Heart,
    title: 'Donar',
    desc: 'Apoya las necesidades diarias de Casa Aleluya. Tu donación proporciona alimentación, vivienda, educación y atención médica.',
    cta: 'Donar ahora',
    href: '/donar',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
  },
  {
    icon: HeartHandshake,
    title: 'Patrocinar',
    desc: 'Conoce las opciones de patrocinio disponibles y construye una relación significativa con un niño de Casa Aleluya.',
    cta: 'Conocer patrocinio',
    href: '/patrocinio',
    accent: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
  },
  {
    icon: Plane,
    title: 'Visitar',
    desc: 'Conoce cómo una iglesia, empresa u organización puede participar y hacer una diferencia en la vida de los niños.',
    cta: 'Planificar una visita',
    href: '/visitar',
    accent: 'bg-primary text-primary-foreground hover:bg-primary/90',
  },
  {
    icon: Share2,
    title: 'Compartir',
    desc: 'Ayuda a difundir la misión de Casa Aleluya compartiendo nuestra historia con tu comunidad y redes sociales.',
    cta: 'Compartir',
    href: '/como-ayudar#compartir',
    accent: 'bg-primary-700 text-white hover:bg-primary-700/90',
  },
];

export function HowToHelpSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Cómo puedes ayudar
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
              Hay muchas maneras de hacer la diferencia
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option, idx) => {
            const Icon = option.icon;
            return (
              <Reveal key={option.title} variant="up" delay={idx * 100}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                    {option.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base text-muted-foreground text-pretty">
                    {option.desc}
                  </p>
                  <Button asChild size="lg" className={`mt-6 ${option.accent}`}>
                    <Link href={option.href}>
                      {option.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
