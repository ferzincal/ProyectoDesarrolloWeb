import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Shield, Users, Building2, Church, Plane, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Visita Guatemala',
  description: 'Tu iglesia, empresa u organización puede hacer una diferencia. Conoce cómo planificar tu visita a Casa Aleluya en Guatemala.',
};

const steps = [
  { num: '01', title: 'Conoce Casa Aleluya', desc: 'Aprende sobre nuestra misión, nuestro campus de 15 acres y la vida de los niños que cuidamos.' },
  { num: '02', title: 'Completa la información necesaria', desc: 'Llena el formulario de interés para equipos de misión o visitantes individuales.' },
  { num: '03', title: 'Realiza los requisitos de seguridad', desc: 'Todos los visitantes deben completar una verificación de antecedentes antes de su visita. Envía la prueba a teams@casaaleluya.org.' },
  { num: '04', title: 'Coordina tu visita', desc: 'Nuestro equipo te ayudará a planificar los detalles, fechas y actividades de tu visita.' },
  { num: '05', title: 'Participa', desc: 'Vive la experiencia de ser parte de la historia de Casa Aleluya y sirve con amor a los niños.' },
];

const whoCanVisit = [
  { icon: Church, title: 'Iglesias', desc: 'Envía un equipo de misión para servir, ministrar y compartir el amor de Cristo con los niños.' },
  { icon: Building2, title: 'Empresas', desc: 'Las empresas pueden organizar visitas corporativas, proyectos de servicio y patrocinios.' },
  { icon: Users, title: 'Organizaciones', desc: 'Grupos y organizaciones pueden coordinar visitas para servir en el campus.' },
  { icon: Plane, title: 'Visitantes individuales', desc: 'Los visitantes individuales pueden servir en diversas áreas del ministerio.' },
];

export default function VisitarPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Visitas"
        title="Ven a ser parte de la historia"
        description="Tu iglesia, empresa u organización puede hacer una diferencia en la vida de los niños guatemaltecos. Planifica tu visita hoy."
        image="https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Voluntario con camiseta de servicio comunitario"
      />

      {/* Who can visit */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Quién puede visitar
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Hay muchas formas de participar. Encuentra la que mejor se
                adapte a tu grupo o situación.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whoCanVisit.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} variant="up" delay={idx * 100}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground text-pretty">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-warm py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Tu visita paso a paso
              </h2>
            </div>
          </Reveal>

          <ol className="mt-14 space-y-6">
            {steps.map((step, idx) => (
              <Reveal key={step.num} variant="up" delay={idx * 80}>
                <li className="flex gap-6 rounded-2xl bg-white p-8 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-heading text-sm font-bold">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-pretty">
                      {step.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Safety note */}
      <section className="bg-primary-900 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm lg:p-10">
              <div className="flex items-start gap-4">
                <Shield className="h-10 w-10 shrink-0 text-secondary-300" />
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white">
                    La seguridad de los niños es nuestra prioridad
                  </h2>
                  <p className="mt-3 text-white/80 text-pretty">
                    Todos los visitantes a Casa Aleluya deben completar una
                    verificación de antecedentes antes de su visita. Por favor
                    envía la prueba de tu verificación a{' '}
                    <a href="mailto:teams@casaaleluya.org" className="font-medium text-secondary-300 underline">
                      teams@casaaleluya.org
                    </a>
                    . Los solicitantes de misiones y pasantías deben tener 20
                    años o más. Como representante de Jesucristo y huésped de
                    Casa Aleluya, te comprometerás a seguir las normas del
                    ministerio durante tu estadía.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <h2 className="text-center font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Qué esperar durante tu visita
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              'Actividades con los niños: VBS, noches temáticas, juegos y celebraciones.',
              'Proyectos de servicio: construcción, mantenimiento, pintura y mejoras al campus.',
              'Ministerio: oración, devocionales y compartir el amor de Cristo.',
              'Recorrido por las instalaciones: escuela, dormitorios, clínicas y áreas recreativas.',
              'Comidas en el campus con los niños y el personal.',
              'Oportunidades de construir relaciones duraderas con los niños.',
            ].map((item, idx) => (
              <Reveal key={idx} variant="up" delay={(idx % 2) * 100}>
                <div className="flex items-start gap-3 rounded-xl bg-warm p-6">
                  <Check className="h-5 w-5 shrink-0 text-secondary" />
                  <p className="text-sm text-foreground text-pretty">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade" className="mt-12 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contacto">
                Planificar mi visita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
