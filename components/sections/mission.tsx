import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Misión',
    desc: 'Casa Aleluya es un ministerio centrado en Cristo que incluye tanto un hogar físico como una cobertura espiritual para niños abandonados, huérfanos y maltratados en Guatemala. El ministerio consiste en cuidar a los niños proporcionando alimentación, vestido, refugio, seguridad, educación, familia y discipulado espiritual.',
  },
  {
    icon: Eye,
    title: 'Visión',
    desc: 'Impartir el amor perfecto de Cristo a los niños abandonados y desatendidos de Guatemala para que puedan convertirse en seguidores equipados de Jesús. Creemos que estos niños serán los futuros líderes de Guatemala y harán mejoras significativas a su país aplicando los principios cristianos que aprenden en nuestro hogar.',
  },
  {
    icon: Heart,
    title: 'Valores',
    desc: 'Fe en Jesucristo como camino de salvación. Amor incondicional por cada niño. Compromiso con la educación y el crecimiento. Comunidad como familia de familias. Transparencia y mayordomía fiel de los recursos. Dignidad y respeto por cada persona.',
  },
];

export function MissionSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/335887/pexels-photo-335887.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Vista panorámica de Antigua Guatemala con el Volcán de Agua"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary-900/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary-300">
              Nuestra misión
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
              Creemos que todos los niños merecen una segunda oportunidad.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} variant="up" delay={idx * 120}>
                <div className="h-full rounded-2xl bg-white/10 p-8 backdrop-blur-md transition-colors hover:bg-white/15">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base text-white/80 text-pretty">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade" className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <Link href="/ministerio#fe">
              Conoce nuestra fe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
