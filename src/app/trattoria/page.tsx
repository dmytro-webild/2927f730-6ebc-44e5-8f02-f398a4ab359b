"use client";

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import AboutMetric from '@/components/sections/about/AboutMetric';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, UtensilsCrossed, Handshake } from 'lucide-react';

export default function TrattoriaPage() {
  return (
    <ThemeProvider
      defaultButtonVariant={"hover-magnetic"}
      defaultTextAnimation={"entrance-slide"}
      borderRadius={"rounded"}
      contentWidth={"mediumLarge"}
      sizing={"mediumLarge"}
      background={"noiseDiagonalGradient"}
      cardStyle={"gradient-mesh"}
      primaryButtonStyle={"shadow"}
      secondaryButtonStyle={"radial-glow"}
      headingFontWeight={"light"}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Trattoria Bar Vittorio Gigagin"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Menù", id: "/menu" },
            { name: "Cantina", id: "/cantina" },
            { name: "Dolci", id: "/dolci" },
            { name: "La Trattoria", id: "/trattoria" },
            { name: "Prenota", id: "/prenota" },
            { name: "Contatti", id: "/contatti" }
          ]}
        />
      </div>
      <div id="trattoria-storia" data-section="trattoria-storia">
        <FeatureCardTwentyFour
          title="La Nostra Storia e Filosofia"
          description="Dal cuore della Liguria, la nostra trattoria è un luogo dove la tradizione incontra l'accoglienza, e ogni piatto racconta una storia di passione e ingredienti scelti con cura."
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            { id: "ts1", title: "Autenticità Ligure", author: "Radici Profonde", description: "Un legame indissolubile con il territorio, offrendo sapori autentici e ricette tramandate di generazione in generazione.", tags: ["Tradizione"], imageSrc: "http://img.b2bpic.net/free-photo/beautiful-restaurant-is-decorated-with-greens_8353-9675.jpg", imageAlt: "Facciata della trattoria tradizionale" },
            { id: "ts2", title: "Materie Prime", author: "Qualità Insuperabile", description: "Utilizziamo solo ingredienti freschi e di stagione, scelti tra i migliori produttori locali per garantire eccellenza in ogni piatto.", tags: ["Qualità"], imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-cooking-together_23-2150405875.jpg", imageAlt: "Ingredienti freschi in cucina" },
            { id: "ts3", title: "Accoglienza e Servizio", author: "Un Sorriso Sincero", description: "Il nostro team vi accoglierà con calore e professionalità, assicurando un'esperienza gastronomica indimenticabile e rilassante.", tags: ["Ospitalità"], imageSrc: "http://img.b2bpic.net/free-photo/diverse-teenagers-practicing-health-wellness-activities-themselves-their-community_23-2151416177.jpg", imageAlt: "Personale accogliente" },
            { id: "ts4", title: "Il Camino: Cuore della Trattoria", author: "Calore e Atmosfera", description: "Il nostro camino è il simbolo della nostra ospitalità, creando un'atmosfera calda e invitante, perfetta per ogni stagione.", tags: ["Ambiente"], imageSrc: "http://img.b2bpic.net/free-photo/beautiful-thanksgiving-meal-concept_23-2148629583.jpg", imageAlt: "Camino in sala" }
          ]}
          useInvertedBackground={false}
        />
      </div>
      <div id="trattoria-valori" data-section="trattoria-valori">
        <AboutMetric
          title="I Nostri Valori e Impegno"
          metricsAnimation="blur-reveal"
          metrics={[
            { icon: Sparkles, label: "Tradizione", value: "Dal 19XX" },
            { icon: UtensilsCrossed, label: "Qualità", value: "Ingredienti Freschi" },
            { icon: Handshake, label: "Ospitalità", value: "Servizio Impeccabile" }
          ]}
          useInvertedBackground={true}
        />
      </div>
      <div id="trattoria-recensioni" data-section="trattoria-recensioni">
        <TestimonialCardFifteen
          title="Le Voci sulla Nostra Accoglienza"
          testimonial="L'atmosfera è davvero come sentirsi a casa, il camino d'inverno è un tocco magico e il personale è sempre attento e cordiale. Un'esperienza che va oltre il semplice pasto."
          rating={5}
          author="Ospite Fidato"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/expressive-young-lady-posing_176474-62470.jpg", alt: "Satisfied customer" },
            { src: "http://img.b2bpic.net/free-photo/merry-young-adult-enjoying-christmas-conversation-video-call-room-decorated-festivity-celebration-talking-woman-preparing-drink-wine-kitchen-with-joyful-ornaments_482257-28400.jpg", alt: "Happy customer" }
          ]}
          ratingAnimation="blur-reveal"
          avatarsAnimation="blur-reveal"
          useInvertedBackground={false}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Trattoria Bar Vittorio Gigagin"
          leftLink={{
            text: "Prenota un tavolo",            href: "/prenota"
          }}
          rightLink={{
            text: "Contatti e Orari",            href: "/contatti"
          }}
        />
      </div>
    </ThemeProvider>
  );
}