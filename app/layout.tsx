import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.casaaleluya.org'),
  title: {
    default: 'Casa Aleluya | Hogar, Educación y Esperanza para Niños en Guatemala',
    template: '%s | Casa Aleluya',
  },
  description:
    'Casa Aleluya brinda un hogar, educación, atención médica y una comunidad de amor a niños y jóvenes en Guatemala. Funda tu esperanza en cada acción. Dona, patrocina o visita.',
  keywords: [
    'Casa Aleluya',
    'Casa Aleluya Guatemala',
    'organización cristiana en Guatemala',
    'ayuda a niños en Guatemala',
    'donaciones para niños en Guatemala',
    'patrocinio de niños en Guatemala',
    'voluntariado en Guatemala',
    'orfanato Guatemala',
    'hogar de niños Guatemala',
  ],
  authors: [{ name: 'Casa Aleluya' }],
  creator: 'Casa Aleluya',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://www.casaaleluya.org',
    siteName: 'Casa Aleluya',
    title: 'Casa Aleluya | Dale esperanza. Cambia una vida.',
    description:
      'Casa Aleluya brinda un hogar, educación, atención médica y una comunidad de amor a niños y jóvenes en Guatemala.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Aleluya | Dale esperanza. Cambia una vida.',
    description:
      'Casa Aleluya brinda un hogar, educación, atención médica y una comunidad de amor a niños y jóvenes en Guatemala.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: 'Casa Aleluya',
              url: 'https://www.casaaleluya.org',
              logo: 'https://www.casaaleluya.org/wp-content/uploads/2021/03/casa-aleluya-logo-stacked-tagline-inverted.svg',
              description:
                'Casa Aleluya brinda un hogar, educación, atención médica y una comunidad de amor a niños y jóvenes en Guatemala.',
              foundingDate: '1989',
              foundingLocation: 'Guatemala',
              email: 'hello@casaaleluya.org',
              telephone: '+13378551286',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
                addressRegion: 'Louisiana',
              },
              sameAs: [
                'https://www.facebook.com/casaaleluya.org',
                'https://www.instagram.com/casa_aleluya2.0',
              ],
            }),
          }}
        />
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
