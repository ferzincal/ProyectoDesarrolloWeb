import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { School, BedDouble, Stethoscope, Building2, Library, Computer, Utensils, Trees, Trophy, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instalaciones',
  description: 'Explora el campus de 15 acres de Casa Aleluya: escuela, dormitorios, clínicas, biblioteca, laboratorio de computación, cocina y áreas recreativas en Guatemala.',
};

const facilities = [
  {
    icon: School,
    title: 'Escuelas',
    desc: 'La educación es la clave para devolver a la comunidad. Casa Aleluya cuenta con una hermosa escuela y maestros profesionales que sirven a niños desde preescolar hasta bachillerato. Usando principios comprobados, Casa ofrece a los niños parte de la mejor educación en Guatemala, preparándolos para un futuro brillante.',
    image: 'https://images.pexels.com/photos/13806035/pexels-photo-13806035.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Niños en un salón de clases',
  },
  {
    icon: BedDouble,
    title: 'Dormitorios',
    desc: 'Considerados la mejor vivienda en Guatemala, los dormitorios han sido hábilmente construidos por equipos de trabajo y patrocinadores. El campus cuenta con once dormitorios, cada uno supervisado por padres de casa amorosos. Actualmente, la capacidad de vivienda ayuda a más de 400 niños y jóvenes.',
    image: 'https://images.pexels.com/photos/4221409/pexels-photo-4221409.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Dormitorio infantil con camas',
  },
  {
    icon: Stethoscope,
    title: 'Clínica Médica',
    desc: 'Cuando los niños llegan a Casa Aleluya, a menudo necesitan atención médica. Los servicios médicos en el campus están diseñados para satisfacer todas las necesidades de los niños abusados, desatendidos y abandonados para que puedan sanar física y emocionalmente. Se ofrece atención médica, dental, de visión, psiquiatría y psicología.',
    image: 'https://images.pexels.com/photos/10711075/pexels-photo-10711075.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Profesionales médicos en una clínica',
  },
  {
    icon: Building2,
    title: 'Clínica Dental',
    desc: 'La clínica dental en el campus proporciona atención dental profesional para el cuidado integral de cada niño, asegurando su salud bucal como parte de su bienestar general.',
    image: 'https://images.pexels.com/photos/8224633/pexels-photo-8224633.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Dentista atendiendo a un niño',
  },
  {
    icon: Library,
    title: 'Biblioteca',
    desc: 'Un espacio dedicado a la lectura y el aprendizaje que fomenta el hábito de estudio y el amor por el conocimiento entre los niños y jóvenes de Casa Aleluya.',
    image: 'https://images.pexels.com/photos/8499572/pexels-photo-8499572.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Niños leyendo libros en una biblioteca',
  },
  {
    icon: Computer,
    title: 'Laboratorio de Computación',
    desc: 'Casa Aleluya ofrece estudios de carrera en Ciencias de Computación y Contabilidad Experta, preparando a los estudiantes para ingresar a la universidad con mayor conocimiento en diversas materias.',
    image: 'https://images.pexels.com/photos/38575482/pexels-photo-38575482.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Estudiantes usando computadoras en un laboratorio',
  },
  {
    icon: Utensils,
    title: 'Cocina',
    desc: 'Con personal de cocina de tiempo completo y la ayuda de los niños mayores, la cocina industrial proporciona tres comidas cada día para los estudiantes y el personal. Todos los niños desayunan al mismo tiempo, mientras que el almuerzo y la cena se dividen en turnos.',
    image: 'https://images.pexels.com/photos/17318176/pexels-photo-17318176.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cocina profesional en funcionamiento',
  },
  {
    icon: Trees,
    title: 'Áreas Recreativas',
    desc: 'Ya sea en el parque infantil, arte y manualidades, un partido de fútbol o simplemente pasar tiempo juntos, siempre se puede encontrar una forma de divertirse en Casa Aleluya.',
    image: 'https://images.pexels.com/photos/28614927/pexels-photo-28614927.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Niños jugando al aire libre',
  },
];

const dormitories = [
  { name: 'Angelitos', age: '0-7 años', served: 'Niños' },
  { name: 'Esperanza Up', age: '8-12 años', served: 'Niñas' },
  { name: 'Doncellas', age: '13-17 años', served: 'Jóvenes mujeres' },
  { name: 'Vencedores', age: '8-12 años', served: 'Niños' },
  { name: 'Buen Pastor', age: '13-17 años', served: 'Jóvenes hombres' },
  { name: 'Casa Anthony', age: 'Pacientes renales', served: 'Niños y niñas' },
  { name: 'Jóvenes Adultos', age: '18 años o más', served: 'Mujeres' },
  { name: 'Jóvenes Adultos', age: '18 años o más', served: 'Hombres' },
];

export default function InstalacionesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Instalaciones"
        title="Conoce Casa Aleluya"
        description="Un campus de 15 acres con instalaciones para cientos de niños y jóvenes, incluyendo escuela, clínicas, biblioteca, laboratorio de computación y mucho más."
        image="https://images.pexels.com/photos/335887/pexels-photo-335887.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Vista panorámica de Antigua Guatemala"
      />

      {/* Intro */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Bienvenido a Casa Aleluya
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Un campus diseñado para cuidar
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Casa Aleluya comenzó con muy poca propiedad y solo un puñado de
              edificios. A lo largo de los años, Dios ha bendecido nuestro trabajo
              más allá de nuestros sueños y ha provisto todo lo que necesitamos
              para continuar cuidando a los niños que cruzan nuestras puertas.
              Casa Aleluya cubre actualmente 15 acres, con vivienda para más de
              400 niños y jóvenes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Facilities detail */}
      <section className="bg-warm py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {facilities.map((facility, idx) => {
              const Icon = facility.icon;
              const isEven = idx % 2 === 0;
              return (
                <Reveal key={facility.title} variant={isEven ? 'left' : 'right'}>
                  <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12`}>
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className="overflow-hidden rounded-2xl shadow-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={facility.image}
                          alt={facility.alt}
                          className="aspect-[4/3] w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className={isEven ? '' : 'lg:order-1'}>
                      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg">
                        <Icon className="h-7 w-7" />
                      </span>
                      <h3 className="mt-6 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                        {facility.title}
                      </h3>
                      <p className="mt-4 text-lg text-muted-foreground text-pretty">
                        {facility.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dormitories table */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <div className="text-center">
              <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
                Nuestros dormitorios
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Una familia de familias
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Cada dormitorio es supervisado por padres de casa que cuidan a
                los niños con amor, compasión y comprensión.
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 font-heading text-sm font-semibold">Dormitorio</th>
                    <th className="px-6 py-4 font-heading text-sm font-semibold">Rango de edad</th>
                    <th className="px-6 py-4 font-heading text-sm font-semibold">Población</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {dormitories.map((dorm, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-muted/40'}>
                      <td className="px-6 py-4 font-medium text-foreground">{dorm.name}</td>
                      <td className="px-6 py-4 text-muted-foreground">{dorm.age}</td>
                      <td className="px-6 py-4 text-muted-foreground">{dorm.served}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal variant="fade" className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/visitar">
                Planificar una visita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
