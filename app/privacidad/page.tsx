import type { Metadata } from 'next';
import { SiteLayout } from '@/components/site-layout';
import { PageHero } from '@/components/page-hero';
import { Reveal } from '@/components/reveal';
import { Shield, Lock, FileText, Cookie } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacidad',
  description: 'Política de privacidad, cookies y términos de uso de Casa Aleluya.',
};

export default function PrivacidadPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacidad y Términos"
        description="Tu confianza es importante para nosotros. Conoce cómo protegemos tus datos y los términos de uso de nuestro sitio."
        image="https://images.pexels.com/photos/335887/pexels-photo-335887.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Vista de Antigua Guatemala"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Privacy */}
          <Reveal variant="up">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-secondary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Política de Privacidad</h2>
            </div>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Casa Aleluya respeta tu privacidad y se compromete a proteger tus
                datos personales. Esta política describe cómo recopilamos, usamos
                y protegemos la información que nos proporcionas.
              </p>
              <p>
                Recopilamos información personal como nombre, correo electrónico,
                teléfono y organización cuando completas formularios de contacto,
                patrocinio o donación. Utilizamos esta información únicamente para
                responder a tus solicitudes y procesar tu participación con Casa
                Aleluya.
              </p>
              <p>
                Nunca compartimos, vendemos ni alquilamos tus datos personales a
                terceros sin tu consentimiento explícito. Debido a que la
                organización trabaja con niños, no se publica información
                personal, fotografías, ubicación, historias sensibles o datos
                identificables de menores sin autorización explícita.
              </p>
              <p>
                Puedes solicitar acceso, corrección o eliminación de tus datos
                personales en cualquier momento escribiendo a
                hello@casaaleluya.org.
              </p>
            </div>
          </Reveal>

          {/* Cookies */}
          <Reveal variant="up" className="mt-16">
            <div id="cookies" className="flex items-center gap-3">
              <Cookie className="h-8 w-8 text-secondary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Política de Cookies</h2>
            </div>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Utilizamos cookies en nuestro sitio para personalizar tu
                experiencia y mejorar nuestros esfuerzos. Las cookies son pequeños
                archivos de texto que se almacenan en tu dispositivo cuando visitas
                nuestro sitio.
              </p>
              <p>
                Puedes configurar tu navegador para que rechace cookies o te avise
                cuando se envían cookies. Algunas partes del sitio pueden no
                funcionar correctamente si desactivas las cookies.
              </p>
            </div>
          </Reveal>

          {/* Terms */}
          <Reveal variant="up" className="mt-16">
            <div id="terminos" className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-secondary" />
              <h2 className="font-heading text-2xl font-bold text-foreground">Términos de Uso</h2>
            </div>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Al acceder y usar este sitio, aceptas los siguientes términos. El
                contenido de este sitio es propiedad de Casa Aleluya y se
                proporciona con fines informativos y educativos.
              </p>
              <p>
                No está permitido reproducir, distribuir o utilizar el contenido
                de este sitio sin autorización expresa de Casa Aleluya. Las
                fotografías de los niños están protegidas y no pueden ser
                descargadas, copiadas o distribuidas sin autorización.
              </p>
              <p>
                Casa Aleluya no se hace responsable de los contenidos de sitios
                externos que puedan ser enlazados desde nuestro sitio. La
                información institucional publicada en este sitio se basa en datos
                oficiales de la organización.
              </p>
            </div>
          </Reveal>

          {/* Security note */}
          <Reveal variant="up" className="mt-16">
            <div className="rounded-2xl bg-warm p-8">
              <div className="flex items-center gap-3">
                <Lock className="h-8 w-8 text-secondary" />
                <h2 className="font-heading text-xl font-bold text-foreground">Seguridad</h2>
              </div>
              <p className="mt-4 text-sm text-muted-foreground text-pretty">
                Implementamos medidas de seguridad técnicas, administrativas y
                físicas para proteger tu información personal contra acceso no
                autorizado, alteración, divulgación o destrucción. Nuestro sitio
                utiliza HTTPS para garantizar una conexión segura. Las
                donaciones se procesan a través de proveedores de pago seguros y
                certificados.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
