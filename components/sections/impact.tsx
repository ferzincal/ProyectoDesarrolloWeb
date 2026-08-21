import { Counter } from '@/components/counter';
import { Reveal } from '@/components/reveal';

const stats = [
  {
    value: 500,
    suffix: '+',
    label: 'Niños y jóvenes que pueden recibir atención al mismo tiempo',
  },
  {
    value: 6000,
    suffix: '+',
    label: 'Niños que han recibido atención a lo largo de la historia de Casa Aleluya',
  },
  {
    value: 93.7,
    suffix: '%',
    label: 'De las donaciones destinadas directamente al cuidado de los niños',
    decimals: 1,
  },
];

export function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-primary-800 py-20 lg:py-28">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white" />
        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-secondary-300">
              Nuestro impacto
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
              Tres décadas transformando vidas
            </h2>
            <p className="mt-4 text-lg text-white/80 text-pretty">
              Cada número representa una historia de esperanza, un niño que
              recibió una segunda oportunidad y un futuro transformado por el amor
              de Cristo.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <Reveal key={stat.label} variant="scale" delay={idx * 150}>
              <div className="rounded-2xl bg-white/5 p-8 text-center backdrop-blur-sm transition-colors hover:bg-white/10 lg:p-10">
                <div className="font-heading text-5xl font-bold text-secondary-300 lg:text-6xl">
                  <Counter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </div>
                <p className="mt-4 text-base text-white/80 text-pretty">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" className="mt-12 text-center">
          <p className="text-sm text-white/60">
            Fuente: Información oficial de Casa Aleluya
          </p>
        </Reveal>
      </div>
    </section>
  );
}
