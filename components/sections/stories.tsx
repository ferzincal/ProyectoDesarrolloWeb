import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';

const articles = [
  {
    category: 'Historias',
    title: 'Historias que inspiran',
    date: '2025',
    excerpt: 'Conoce las historias de esperanza y transformación de los niños y jóvenes que han sido parte de Casa Aleluya.',
    image: 'https://images.pexels.com/photos/15826423/pexels-photo-15826423.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Niñas sonriendo juntas',
    href: '/historias',
  },
  {
    category: 'Educación',
    title: 'El poder de la educación',
    date: '2024',
    excerpt: 'Cómo la educación desde preescolar hasta la universidad está transformando el futuro de los niños de Guatemala.',
    image: 'https://images.pexels.com/photos/38458520/pexels-photo-38458520.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Niños en un salón de clases',
    href: '/blog',
  },
  {
    category: 'Comunidad',
    title: 'Equipos que sirven con amor',
    date: '2025',
    excerpt: 'Iglesias, empresas y organizaciones que han visitado Casa Aleluya y han dejado una huella imborrable.',
    image: 'https://images.pexels.com/photos/8042458/pexels-photo-8042458.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Voluntaria interactuando con niños',
    href: '/blog',
  },
];

export function StoriesSection() {
  return (
    <section className="bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="max-w-2xl">
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
                Desde Casa Aleluya
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
                Historias que inspiran
              </h2>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                Ver todas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {articles.map((article, idx) => (
            <Reveal key={article.title} variant="up" delay={idx * 100}>
              <Link href={article.href} className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" />
                    {article.date}
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-bold text-foreground text-balance">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors group-hover:text-secondary-600">
                    Leer más
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
