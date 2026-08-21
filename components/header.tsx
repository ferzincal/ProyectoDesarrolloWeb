'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { mainNav, siteConfig } from '@/lib/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            'flex items-center gap-2 font-heading text-xl font-bold transition-colors',
            scrolled ? 'text-primary' : 'text-white'
          )}
          aria-label="Casa Aleluya - Inicio"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
            <Heart className="h-5 w-5" fill="currentColor" />
          </span>
          <span className="hidden sm:inline">Casa Aleluya</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navegación principal"
        >
          {mainNav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  scrolled
                    ? active
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-primary'
                    : active
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
            <Link href={siteConfig.donateUrl}>
              <Heart className="mr-2 h-4 w-4" fill="currentColor" />
              DONAR
            </Link>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href={siteConfig.donateUrl}>
              <Heart className="mr-1 h-4 w-4" fill="currentColor" />
              DONAR
            </Link>
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors',
              scrolled
                ? 'text-primary hover:bg-muted'
                : 'text-white hover:bg-white/10'
            )}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
        >
          <div
            className="fixed inset-0 top-16 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="fixed inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white shadow-2xl">
            <ul className="flex flex-col py-4">
              {mainNav.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center justify-between px-6 py-3.5 text-base font-medium transition-colors',
                        active
                          ? 'bg-primary/5 text-primary'
                          : 'text-foreground/80 hover:bg-muted hover:text-primary'
                      )}
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-border px-6 py-4">
              <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={siteConfig.donateUrl}>
                  <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                  DONAR AHORA
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
