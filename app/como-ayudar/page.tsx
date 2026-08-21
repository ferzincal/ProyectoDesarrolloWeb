import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, HeartHandshake, Plane, Share2, ArrowRight, Mail, Facebook, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cómo Ayudar',
  description: 'Hay muchas maneras de hacer la diferencia en Casa Aleluya: donar, patrocinar, visitar o compartir nuestra misión con tu comunidad.',
};

const options = [
  {
    icon: Heart,
    title: 'Donar',
    desc: 'Apoya las necesidades diarias de Casa Aleluya. Tu donación proporciona alimentación, vivienda, educación y atención médica a los niños.',
    cta: 'Donar ahora',
    href: '/donar',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
  },
  {
    icon: HeartHandshake,
    title: 'Patrocinar',
    desc: 'Conoce las opciones de patrocinio disponibles y construye una relación significativa con un niño de Casa Aleluya por $40 al mes.',
    cta: 'Conocer patrocinio',
    href: '/patrocinio',
    accent: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
  },
  {
    icon: Plane,
    title: 'Visitar',
    desc: 'Conoce cómo una iglesia, empresa u organización puede participar y hacer una diferencia en la vida de los niños en Guatemala.',
    cta: 'Planificar una visita',
    href: '/visitar',
    accent: 'bg-primary text-primary-foreground hover:bg-primary/90',
  },
  {
    icon: Share2,
    title: 'Compartir',
    desc: 'Ayuda a difundir la misión de Casa Aleluya compartiendo nuestra historia con tu comunidad, amigos y redes sociales.',
    cta: 'Compartir',
    href: '#compartir',
    accent: 'bg-primary-700 text-white hover:bg-primary-700/90',
  },
];

export default function ComoAyudarPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Cómo Ayudar"
        title="Hay muchas maneras de hacer la diferencia"
        description="Tu apoyo, en cualquiera de sus formas, transforma la vida de los niños de Casa Aleluya. Encuentra la manera que mejor se adapte a ti."
        image="https://images.pexels.com/photos/8042458/pexels-photo-8042458.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Voluntaria interactuando con niños en la comunidad"
      />

      {/* Options */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {options.map((option, idx) => {
              const Icon = option.icon;
              return (
                <Reveal key={option.title} variant="up" delay={idx * 100}>
                  <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-xl">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2 className="mt-6 font-heading text-xl font-bold text-foreground">
                      {option.title}
                    </h2>
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

      {/* Voluntariado section */}
      <section id="voluntariado" className="bg-warm py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Voluntariado
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Sirve con nosotros en Guatemala
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Los solicitantes de misiones y pasantías deben tener 20 años o más.
              Los visitantes deben completar una verificación de antecedentes antes
              de su visita. Como representante de Jesucristo y huésped de Casa
              Aleluya, te comprometerás a seguir las normas del ministerio durante
              tu estadía.
            </p>
          </Reveal>

          <Reveal variant="up" className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Equipos de misión
                </h3>
                <p className="mt-3 text-sm text-muted-foreground text-pretty">
                  Las iglesias y organizaciones pueden enviar equipos para servir
                  en el campus. Los equipos participan en actividades con los
                  niños, proyectos de construcción y ministerio.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Voluntarios individuales
                </h3>
                <p className="mt-3 text-sm text-muted-foreground text-pretty">
                  Los voluntarios individuales pueden servir en áreas como
                  educación, atención médica, mantenimiento, artes y más.
                  Contáctanos para conocer las oportunidades disponibles.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade" className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/visitar">
                Comenzar mi solicitud
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Share section */}
      <section id="compartir" className="bg-primary-900 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="fade">
            <h2 className="font-heading text-3xl font-bold text-white text-balance sm:text-4xl">
              Comparte la misión de Casa Aleluya
            </h2>
            <p className="mt-4 text-lg text-white/80 text-pretty">
              Cada compartida puede alcanzar a alguien que quiera ayudar. Difunde
              nuestra historia y sé parte de la cadena de esperanza.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <a
                  href="https://www.facebook.com/casaaleluya.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Compartir en Facebook
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <a
                  href="https://www.instagram.com/casa_aleluya2.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Compartir en Instagram
                </a>
              </Button>
            </div>
            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
              <Mail className="h-4 w-4" />
              ¿Tienes preguntas? Escríbenos a hello@casaaleluya.org
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
