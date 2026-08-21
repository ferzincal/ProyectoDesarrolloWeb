import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Historias de Esperanza',
  description: 'Historias de transformación y esperanza de los niños y jóvenes que han sido parte de Casa Aleluya en Guatemala.',
};

const stories = [
  {
    title: 'El poder de una segunda oportunidad',
    year: '2025',
    excerpt: 'Cada niño que llega a Casa Aleluya trae consigo una historia de dolor, pero también de resiliencia. A través del amor, la educación y la fe, descubren que su pasado no define su futuro.',
    image: 'https://images.pexels.com/photos/15826423/pexels-photo-15826423.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Niñas sonriendo juntas al aire libre',
  },
  {
    title: 'Educación que transforma',
    year: '2024',
    excerpt: 'Desde preescolar hasta la universidad, la educación en Casa Aleluya está cambiando la trayectoria de vida de cientos de jóvenes que sueñan con ser los futuros líderes de Guatemala.',
    image: 'https://images.pexels.com/photos/38458520/pexels-photo-38458520.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Niños en un salón de clases',
  },
  {
    title: 'Una familia de familias',
    year: '2025',
    excerpt: 'En Casa Aleluya, los niños encuentran más que un refugio: encuentran un hogar con padres que los aman, hermanos con quienes crecer y una comunidad que los apoya.',
    image: 'https://images.pexels.com/photos/35811617/pexels-photo-35811617.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Niños jugando juntos al aire libre',
  },
  {
    title: 'Sanando cuerpo y alma',
    year: '2024',
    excerpt: 'La clínica médica y dental de Casa Aleluya no solo trata heridas físicas, sino que también ofrece cuidado emocional y psicológico para que cada niño pueda sanar completamente.',
    image: 'https://images.pexels.com/photos/6502541/pexels-photo-6502541.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Niño recibiendo atención dental',
  },
  {
    title: 'Creando arte, creando sueños',
    year: '2025',
    excerpt: 'Las actividades artísticas y creativas permiten que los niños de Casa Aleluya expresen sus emociones, desarrollen sus talentos y descubran pasiones que los acompañarán toda la vida.',
    image: 'https://images.pexels.com/photos/7025567/pexels-photo-7025567.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Niños pintando en una clase de arte',
  },
  {
    title: 'Equipos que dejan huella',
    year: '2025',
    excerpt: 'Iglesias, empresas y organizaciones que visitan Casa Aleluya no solo sirven a los niños, sino que se llevan una experiencia transformadora que cambia sus propias vidas.',
    image: 'https://images.pexels.com/photos/8042458/pexels-photo-8042458.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Voluntaria dándole un high-five a un niño',
  },
];

export default function HistoriasPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Historias de Esperanza"
        title="Historias que inspiran"
        description="Conoce las historias de transformación, esperanza y amor de los niños y jóvenes que han sido parte de Casa Aleluya."
        image="https://images.pexels.com/photos/29851269/pexels-photo-29851269.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Niños felices jugando juntos"
      />

      {/* Note */}
      <section className="bg-warm py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <p className="rounded-xl bg-white p-4 text-center text-sm text-muted-foreground text-pretty">
              Estas historias reflejan el impacto general del ministerio de Casa
              Aleluya. Para proteger la privacidad y seguridad de los niños,
              no se publican nombres, ubicaciones identificables ni información
              sensible sin autorización explícita.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stories grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, idx) => (
              <Reveal key={story.title} variant="up" delay={(idx % 3) * 100}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={story.image}
                      alt={story.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                      {story.year}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-heading text-xl font-bold text-foreground text-balance">
                      {story.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground text-pretty">
                      {story.excerpt}
                    </p>
                    <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-secondary-600">
                      Leer historia
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <h2 className="font-heading text-3xl font-bold text-white text-balance">
              Tu apoyo escribe la próxima historia
            </h2>
            <p className="mt-4 text-white/80 text-pretty">
              Cada historia de transformación comienza con alguien que decidió
              hacer la diferencia. Sé parte de la próxima historia de esperanza.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/donar">
                  <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                  DONAR
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/patrocinio">
                  Patrocinar un niño
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
