import Link from 'next/link';
import { Heart, Mail, Phone, Facebook, Instagram, Youtube, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { footerNav, siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      {/* CTA banner */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Tu apoyo puede cambiar una vida hoy.
            </h2>
            <p className="mt-2 text-white/80">
              Cada donación proporciona alimentación, educación y amor a los niños de Casa Aleluya.
            </p>
          </div>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
            <Link href={siteConfig.donateUrl}>
              <Heart className="mr-2 h-5 w-5" fill="currentColor" />
              DONAR AHORA
            </Link>
          </Button>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label="Casa Aleluya - Inicio">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <Heart className="h-5 w-5" fill="currentColor" />
              </span>
              <span className="font-heading text-lg font-bold">Casa Aleluya</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Organización sin fines de lucro 501(c)3 que proporciona cuidado médico, educativo y espiritual a niños en Guatemala.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-secondary"
                aria-label="Facebook de Casa Aleluya"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-secondary"
                aria-label="Instagram de Casa Aleluya"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-secondary"
                aria-label="YouTube de Casa Aleluya"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Casa Aleluya */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Casa Aleluya
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.casa.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participa */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Participa
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.participa.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Recursos
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNav.recursos.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/90">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.usPhone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.usPhone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.usOffice.address}, {siteConfig.usOffice.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Casa Aleluya. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
