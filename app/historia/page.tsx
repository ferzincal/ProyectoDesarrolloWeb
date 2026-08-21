import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nuestra Historia',
  description: 'Casa Aleluya fue fundada en 1989 por Mike y Dottie Clark. Conoce la historia de más de tres décadas transformando la vida de niños en Guatemala.',
};

const milestones = [
  { year: '1989', title: 'El comienzo', desc: 'Mike y Dottie Clark fundan Casa Aleluya con el propósito de compartir las buenas nuevas de Jesucristo con los niños sufrientes de Guatemala. Comienzan con muy poca propiedad y un puñado de edificios.' },
  { year: '1990s', title: 'Crecimiento', desc: 'A través de equipos de trabajo y patrocinadores, el campus comienza a crecer con nuevos dormitorios, una escuela y clínicas para atender a más niños cada año.' },
  { year: '2000s', title: 'Expansión', desc: 'El campus se expande a dos propiedades adyacentes con once dormitorios, una escuela completa, clínicas médica y dental, biblioteca, laboratorio de computación y más.' },
  { year: '2010s', title: 'Miles transformados', desc: 'Casa Aleluya llega a ser hogar de más de 6,000 niños a lo largo de su historia, con cientos de ejemplos de cómo estos niños se convierten en futuros líderes de Guatemala.' },
  { year: 'Hoy', title: 'Un legado de esperanza', desc: 'Con un campus de 15 acres que cuida a más de 400 niños y jóvenes al mismo tiempo, Casa Aleluya continúa su misión de brindar un hogar, educación y amor cristiano a los niños de Guatemala.' },
];

export default function HistoriaPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nuestra Historia"
        title="Tres décadas de amor y esperanza"
        description="Desde 1989, Casa Aleluya ha sido un hogar para niños abandonados, huérfanos y maltratados en Guatemala, transformando vidas a través del amor de Cristo."
        image="https://images.pexels.com/photos/317271/pexels-photo-317271.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Calle colonial de Antigua Guatemala con vista a un volcán"
      />

      {/* Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Cómo comenzó
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Una respuesta de fe al sufrimiento infantil
            </h2>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                Casa Aleluya fue iniciada en 1989 por Mike y Dottie Clark con el
                único propósito de difundir las buenas nuevas de Jesucristo a los
                niños sufrientes de Guatemala. En cualquier momento dado, el
                hogar cuida y cría hasta 400 niños y jóvenes huérfanos, abusados
                y maltratados.
              </p>
              <p>
                A lo largo de su historia, Casa ha sido hogar de más de 6,000
                niños. A través del alojamiento, la alimentación y la educación
                de estos niños, ellos aprenden sobre el amor incondicional que
                muchos no experimentaron en sus propios hogares.
              </p>
              <p>
                Siempre ha sido nuestra creencia que estos niños se convertirán
                en los futuros líderes de Guatemala y harán mejoras significativas
                a su país aplicando los principios cristianos que aprenden en
                nuestro hogar. Ahora, después de más de 30 años, hay literalmente
                cientos de ejemplos de cómo esta promesa se está cumpliendo en
                todo Guatemala.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-warm py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <h2 className="text-center font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Nuestra trayectoria
            </h2>
          </Reveal>

          <div className="mt-14 space-y-8">
            {milestones.map((m, idx) => (
              <Reveal key={m.year} variant={idx % 2 === 0 ? 'left' : 'right'} delay={50}>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                  <div className="shrink-0">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-secondary" />
                      <span className="font-heading text-2xl font-bold text-primary">
                        {m.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-pretty">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <h2 className="font-heading text-3xl font-bold text-white text-balance">
              Sé parte de la próxima historia de esperanza
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/donar">
                  <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                  DONAR
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/ministerio">
                  Conoce nuestro ministerio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
