import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, FileText, Lock, BadgeCheck } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Organización 501(c)3',
    desc: 'Casa Aleluya es una organización sin fines de lucro registrada 501(c)3 que proporciona cuidado médico, educativo y espiritual a niños en Guatemala.',
  },
  {
    icon: FileText,
    title: '93.7% directo a los niños',
    desc: 'El 93.7% de cada donación se destina directamente al cuidado de los niños, garantizando que tu apoyo tenga el mayor impacto posible.',
  },
  {
    icon: Lock,
    title: 'Privacidad protegida',
    desc: 'Tus datos personales son tratados con confidencialidad. Nunca compartimos tu información sin tu consentimiento explícito.',
  },
  {
    icon: BadgeCheck,
    title: 'Información verificable',
    desc: 'Mantenemos transparencia sobre cómo se utilizan las donaciones y proporcionamos información institucional accesible a todos.',
  },
];

export function TransparencySection() {
  return (
    <section className="bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary">
              Transparencia
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl lg:text-5xl">
              Tu confianza importa
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Creemos en la responsabilidad y la transparencia. Estos son los
              principios que guían nuestra mayordomía de cada donación.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} variant="up" delay={idx * 100}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
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

        <Reveal variant="fade" className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/contacto">
              Más información institucional
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
