'use client';

import { useState, useMemo } from 'react';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['Todos', 'Historias', 'Educación', 'Comunidad', 'Ministerio', 'Noticias'];

const posts = [
  { category: 'Historias', title: 'Historias que inspiran', date: '2025', excerpt: 'Conoce las historias de esperanza y transformación de los niños y jóvenes que han sido parte de Casa Aleluya.', image: 'https://images.pexels.com/photos/15826423/pexels-photo-15826423.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Niñas sonriendo' },
  { category: 'Educación', title: 'El poder de la educación', date: '2024', excerpt: 'Cómo la educación desde preescolar hasta la universidad está transformando el futuro de los niños de Guatemala.', image: 'https://images.pexels.com/photos/38458520/pexels-photo-38458520.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Niños en clase' },
  { category: 'Comunidad', title: 'Equipos que sirven con amor', date: '2025', excerpt: 'Iglesias, empresas y organizaciones que han visitado Casa Aleluya y han dejado una huella imborrable.', image: 'https://images.pexels.com/photos/8042458/pexels-photo-8042458.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Voluntaria con niños' },
  { category: 'Ministerio', title: 'El amor de Cristo en acción', date: '2025', excerpt: 'Cómo el discipulado diario y la fe cristiana transforman la vida de los niños en Casa Aleluya.', image: 'https://images.pexels.com/photos/2351723/pexels-photo-2351723.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Persona en oración' },
  { category: 'Educación', title: 'Becas que cambian vidas', date: '2024', excerpt: 'Las becas universitarias garantizadas para cada niño que desea continuar su educación.', image: 'https://images.pexels.com/photos/29275615/pexels-photo-29275615.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Estudiantes graduados' },
  { category: 'Comunidad', title: 'Deportes y recreación', date: '2025', excerpt: 'El fútbol, las artes y las actividades recreativas son parte esencial de la vida en Casa Aleluya.', image: 'https://images.pexels.com/photos/28614927/pexels-photo-28614927.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Niños jugando fútbol' },
  { category: 'Noticias', title: 'Nuevas instalaciones', date: '2025', excerpt: 'Conoce las mejoras continuas a nuestro campus de 15 acres para servir mejor a los niños.', image: 'https://images.pexels.com/photos/4221409/pexels-photo-4221409.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Dormitorio infantil' },
  { category: 'Ministerio', title: 'Una familia de familias', date: '2025', excerpt: 'Cómo los padres de casa en cada dormitorio crean un ambiente de amor y seguridad.', image: 'https://images.pexels.com/photos/35811617/pexels-photo-35811617.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Niños jugando' },
  { category: 'Noticias', title: 'Atención médica integral', date: '2024', excerpt: 'Los servicios médicos, dentales y psicológicos que se ofrecen en el campus.', image: 'https://images.pexels.com/photos/6502541/pexels-photo-6502541.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Atención dental infantil' },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [search, setSearch] = useState('');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
      const matchesSearch = !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Desde Casa Aleluya"
        description="Artículos recientes, noticias, historias y actualizaciones del ministerio de Casa Aleluya en Guatemala."
        image="https://images.pexels.com/photos/8499572/pexels-photo-8499572.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Niños leyendo libros en una biblioteca"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <Reveal variant="fade">
            <div className="mx-auto max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar artículos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-12"
                  aria-label="Buscar artículos"
                />
              </div>
            </div>
          </Reveal>

          {/* Filters */}
          <Reveal variant="fade" className="mt-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  )}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Posts */}
          {filteredPosts.length > 0 ? (
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <Reveal key={post.title} variant="up" delay={(idx % 3) * 100}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <BookOpen className="h-3.5 w-3.5" />
                        {post.date}
                      </div>
                      <h2 className="mt-3 font-heading text-xl font-bold text-foreground text-balance">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground text-pretty">
                        {post.excerpt}
                      </p>
                      <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-secondary-600">
                        Leer más
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-14 text-center">
              <p className="text-lg text-muted-foreground">
                No se encontraron artículos que coincidan con tu búsqueda.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => { setSearch(''); setActiveCategory('Todos'); }}
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
