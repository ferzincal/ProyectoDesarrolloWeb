import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="contenido-principal">{children}</main>
      <Footer />
    </>
  );
}
