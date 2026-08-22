export const siteConfig = {
  name: 'Casa Aleluya',
  tagline: 'Dale esperanza. Cambia una vida.',
  description:
    'Casa Aleluya brinda un hogar, educación, atención médica y una comunidad de amor a niños y jóvenes en Guatemala.',
  email: 'hello@casaaleluya.org',
  teamsEmail: 'teams@casaaleluya.org',
  usPhone: '(337) 855-1286',
  usOffice: {
    country: 'Estados Unidos',
    address: 'Lake Charles, Louisiana',
  },
  guatemalaOffice: {
    country: 'Guatemala',
    address: 'Ciudad de Guatemala, Guatemala',
  },
  social: {
    facebook: 'https://www.facebook.com/Casa-Aleluya-504551086582997',
    instagram: 'https://www.instagram.com/casa_aleluya2.0',
    youtube: 'https://www.youtube.com/@casaaleluya',
  },
  donateUrl: '/donar',
  sponsorshipUrl: '/patrocinio',
  visitUrl: '/visitar',
};

export const mainNav = [
  { title: 'Inicio', href: '/' },
  { title: 'Nuestra Historia', href: '/historia' },
  { title: 'Nuestro Ministerio', href: '/ministerio' },
  { title: 'Cómo Ayudar', href: '/como-ayudar' },
  { title: 'Patrocinio', href: '/patrocinio' },
  { title: 'Historias', href: '/historias' },
  { title: 'Visita', href: '/visitar' },
  { title: 'Contacto', href: '/contacto' },
];

export const footerNav = {
  casa: [
    { title: 'Nuestra Historia', href: '/historia' },
    { title: 'Nuestra Misión', href: '/ministerio' },
    { title: 'Liderazgo', href: '/ministerio#liderazgo' },
    { title: 'Instalaciones', href: '/instalaciones' },
  ],
  participa: [
    { title: 'Donar', href: '/donar' },
    { title: 'Patrocinio', href: '/patrocinio' },
    { title: 'Visitas', href: '/visitar' },
    { title: 'Voluntariado', href: '/como-ayudar#voluntariado' },
  ],
  recursos: [
    { title: 'Blog', href: '/blog' },
    { title: 'Historias de Esperanza', href: '/historias' },
    { title: 'Preguntas Frecuentes', href: '/contacto#faq' },
    { title: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { title: 'Privacidad', href: '/privacidad' },
    { title: 'Cookies', href: '/privacidad#cookies' },
    { title: 'Términos', href: '/privacidad#terminos' },
  ],
};
