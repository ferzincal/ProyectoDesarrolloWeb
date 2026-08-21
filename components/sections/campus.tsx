import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, School, BedDouble, Stethoscope, Library, Computer, Utensils, Trees, Trophy, Building2 } from 'lucide-react';

const facilities = [
  { icon: School, title: 'Escuela', desc: 'Escuela primaria y secundaria con maestros profesionales, desde preescolar hasta bachillerato.' },
  { icon: BedDouble, title: 'Dormitorios', desc: 'Once dormitorios con padres de familia amorosos, con capacidad para más de 400 niños y jóvenes.' },
  { icon: Stethoscope, title: 'Clínica Médica', desc: 'Servicios médicos, dentales, de visión, psiquiatría y psicología para todos los niños.' },
  { icon: Building2, title: 'Clínica Dental', desc: 'Atención dental profesional en el campus para el cuidado integral de cada niño.' },
  { icon: Library, title: 'Biblioteca', desc: 'Un espacio dedicado a la lectura y el aprendizaje para fomentar el hábito de estudio.' },
  { icon: Computer, title: 'Laboratorio de Computación', desc: 'Oportunidades de carrera en Ciencias de Computación y Contabilidad Experta.' },
  { icon: Utensils, title: 'Cocina', desc: 'Cocina industrial que prepara tres comidas diarias para todos los estudiantes y personal.' },
  { icon: Trees, title: 'Áreas Recreativas', desc: 'Parque infantil, deportes, arte, manualidades y espacios para el esparcimiento.' },
  { icon: Trophy, title: 'Instalaciones para Jóvenes', desc: 'Programas para jóvenes adultos de 18 años o más en su camino hacia la independencia.' },
];

export function CampusSection() {
  return (
    <section className="bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Conoce Casa Aleluya
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
              Un campus de 15 acres lleno de esperanza
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Casa Aleluya cubre 15 acres e incluye escuela, dormitorios, clínicas,
              biblioteca, laboratorio de computación, cocina industrial y áreas
              recreativas para cientos de niños y jóvenes.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <Reveal key={facility.title} variant="up" delay={(idx % 3) * 100}>
                <div className="group flex h-full items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-lg">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {facility.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                      {facility.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade" className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/instalaciones">
              Explorar nuestras instalaciones
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
