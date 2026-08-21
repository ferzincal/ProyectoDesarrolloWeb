import { Reveal } from '@/components/reveal';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
}

export function PageHero({ eyebrow, title, description, image, alt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/60 to-primary-900/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <Reveal variant="up">
          {eyebrow && (
            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-secondary-300">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-4xl font-bold text-white text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-white/85 text-pretty">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
