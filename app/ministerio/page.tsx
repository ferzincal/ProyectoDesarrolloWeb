import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target, Eye, Heart, ArrowRight, Church, Users, BookOpen, HandHeart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nuestro Ministerio',
  description: 'Conoce la misión, visión, valores y declaración de fe de Casa Aleluya. Un ministerio cristiano que cuida a niños abandonados en Guatemala.',
};

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
];

const values = [
  { icon: Church, title: 'Fe Cristiana', desc: 'Jesucristo es el centro de todo lo que hacemos. Creemos que Él es el camino de salvación y el fundamento de cada hogar.' },
  { icon: Heart, title: 'Amor Incondicional', desc: 'Cada niño recibe amor sin condiciones, sin importar su historia o circunstancias.' },
  { icon: BookOpen, title: 'Educación', desc: 'Oportunidades educativas desde preescolar hasta la universidad para cada niño.' },
  { icon: Users, title: 'Comunidad', desc: 'Una familia de familias donde los niños encuentran seguridad, estabilidad y pertenencia.' },
  { icon: HandHeart, title: 'Mayordomía', desc: 'Transparencia y uso fiel de cada recurso para el mayor impacto en la vida de los niños.' },
];

const faithPoints = [
  'Creemos que hay tres Personas en un solo Dios: Padre, Hijo y Espíritu Santo.',
  'Jesucristo es el Hijo de Dios quien murió en la cruz por nuestros pecados. Él solo es el camino de salvación.',
  'Creemos en amar a los hermanos y ministrar salvación a los perdidos.',
  'Creemos que Cristo regresará algún día por Su Iglesia y le encontraremos en el aire para pasar una eternidad en adoración y alabanza a Él.',
];

export default function MinisterioPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nuestro Ministerio"
        title="Creemos que todos los niños merecen una segunda oportunidad"
        description="Un ministerio centrado en Cristo que cuida cada aspecto de la vida de los niños para prepararlos a hacer una diferencia en el mundo."
        image="https://images.pexels.com/photos/2351723/pexels-photo-2351723.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Persona en oración en un servicio religioso"
      />

      {/* Mission & Vision */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} variant={idx === 0 ? 'left' : 'right'}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2 className="mt-6 font-heading text-2xl font-bold text-foreground">
                      {p.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-pretty">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-warm py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
                Nuestros valores
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Los principios que nos guían
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} variant="up" delay={(idx % 3) * 100}>
                  <div className="flex h-full items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {v.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section id="fe" className="bg-primary-900 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <div className="text-center">
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary-300">
                Declaración de Fe
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-white text-balance sm:text-4xl">
                Lo que creemos
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 space-y-4">
            {faithPoints.map((point, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 80}>
                <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground font-heading text-sm font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-base text-white/90 text-pretty">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="/historia">
                Conoce nuestra historia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Leadership preview */}
      <section id="liderazgo" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <div className="text-center">
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
                Liderazgo
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Conoce a nuestro equipo
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Conoce el equipo de liderazgo, el personal en sitio y la junta
                directiva de Casa Aleluya.
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" className="mt-10">
            <div className="rounded-2xl bg-warm p-10 text-center">
              <Users className="mx-auto h-12 w-12 text-secondary" />
              <p className="mt-4 text-muted-foreground text-pretty">
                Casa Aleluya cuenta con un equipo dedicado de directores, padres
                de casa, maestros, doctores, enfermeras y personal de apoyo que
                sirven diariamente a los niños en el campus de Guatemala.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Para más información sobre nuestro equipo de liderazgo, contáctanos.
              </p>
              <Button asChild className="mt-6">
                <Link href="/contacto">
                  Contáctanos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
