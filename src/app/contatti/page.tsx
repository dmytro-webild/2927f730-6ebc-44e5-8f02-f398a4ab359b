"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function ContattiPage() {
  const navItems = [
    {
      "name": "Contatti",      "id": "/contatti"
    }
  ];

  const footerLeftLink = undefined;

  const footerRightLink = {
    "text": "Contatti e Orari",    "href": "/contatti"
  };

  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="mediumLarge"
      background="noiseDiagonalGradient"
      cardStyle="gradient-mesh"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Trattoria Bar Vittorio Gigagin"
          navItems={navItems.map(item => ({...item, href: item.id}))}
        />
      </div>

      <div id="contatti-info" data-section="contatti-info">
        <ContactCenter
          tag="Contatti"
          title="Dove Trovarci e Quando"
          description="Siamo a Lumarzo, Via Recroso 229. Venite a trovarci per un'esperienza ligure autentica. Ampio parcheggio gratuito disponibile. Vi aspettiamo!"
          background={{
            "variant": "plain"
          }}
          useInvertedBackground={false}
          inputPlaceholder="Il tuo messaggio"
          buttonText="Invia Messaggio"
          termsText="Telefono: 0185 94047 • Email: info@gigagin.it • Orari: Lun–Dom, aggiornare orari stagionali"
          tagIcon={MapPin}
        />
      </div>

      <div id="contatti-servizi" data-section="contatti-servizi">
        <FaqDouble
          title="Informazioni Utili e Servizi"
          description="Tutti i dettagli sui nostri orari, i servizi offerti e le opzioni di pagamento per rendere la vostra visita e la vostra esperienza al Trattoria Bar Vittorio Gigagin perfetta e senza pensieri."
          textboxLayout="default"
          faqsAnimation="blur-reveal"
          faqs={[
            {
              "id": "fqs1",              "title": "Quali sono gli orari di apertura?",              "content": "I nostri orari possono variare stagionalmente. Vi invitiamo a consultare il nostro sito o a chiamarci direttamente per gli orari più aggiornati di pranzo e cena."
            },
            {
              "id": "fqs2",              "title": "Quali servizi extra offrite?",              "content": "Offriamo tavoli all’aperto, consumazione sul posto, un bar ben fornito con caffè eccellente e la possibilità di consumare pasti fino a tardi. La consegna a domicilio è disponibile se attiva."
            },
            {
              "id": "fqs3",              "title": "Quali metodi di pagamento accettate?",              "content": "Accettiamo tutte le principali carte di credito e debito (Visa, Mastercard, American Express), oltre ai pagamenti tramite NFC per la vostra comodità."
            }
          ]}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Trattoria Bar Vittorio Gigagin"
          leftLink={footerLeftLink}
          rightLink={footerRightLink}
        />
      </div>
    </ThemeProvider>
  );
}
