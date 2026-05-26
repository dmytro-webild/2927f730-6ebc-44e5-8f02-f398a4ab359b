"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function CantinaPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Menù", id: "/menu" },
    { name: "Cantina", id: "/cantina" },
    { name: "Dolci", id: "/dolci" },
    { name: "La Trattoria", id: "/trattoria" },
    { name: "Prenota", id: "/prenota" },
    { name: "Contatti", id: "/contatti" }
  ];

  const themeProps = {
    defaultButtonVariant: "hover-magnetic",    defaultTextAnimation: "entrance-slide",    borderRadius: "rounded",    contentWidth: "mediumLarge",    sizing: "mediumLarge",    background: "noiseDiagonalGradient",    cardStyle: "gradient-mesh",    primaryButtonStyle: "shadow",    secondaryButtonStyle: "radial-glow",    headingFontWeight: "light"};

  return (
    <ThemeProvider {...themeProps}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Trattoria Bar Vittorio Gigagin"
          navItems={navItems}
        />
      </div>

      <div id="cantina-vini" data-section="cantina-vini">
        <FeatureCardTwentyFour
          title="La Nostra Selezione di Vini"
          description="Una carta dei vini curata, con un focus sui tesori liguri e etichette nazionali selezionate per esaltare i sapori della nostra cucina."
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: "cv1",              title: "Bianchi Liguri DOC",              author: "Frescari e Aromatici",              description: "Vermentino e Pigato, le perle della nostra costa, perfetti per accompagnare il pesce e i primi leggeri.",              tags: ["Vino"],
              imageSrc: "http://img.b2bpic.net/free-photo/restaurant-blur-background_1385-176.jpg",              imageAlt: "Vini Bianchi Liguri"
            },
            {
              id: "cv2",              title: "Rossi Eleganti",              author: "Corpo e Profumo",              description: "Selezione di rossi leggeri e profumati, ideali per funghi, selvaggina e i nostri ragù tradizionali.",              tags: ["Vino"],
              imageSrc: "http://img.b2bpic.net/free-photo/delicious-high-quality-wine-still-life_23-2149710801.jpg",              imageAlt: "Vini Rossi Eleganti"
            },
            {
              id: "cv3",              title: "Bollicine",              author: "Per i Brindisi",              description: "Prosecco, Spumanti e Champagne per celebrare o per un abbinamento inaspettato con i nostri fritti.",              tags: ["Vino"],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-four-champagne-glasses_23-2147729188.jpg",              imageAlt: "Bollicine"
            },
            {
              id: "cv4",              title: "Vini da Dessert",              author: "Finale Dolce",              description: "Accompagnamenti perfetti per i nostri dolci d'autore, dai passiti ai moscati, per un finale indimenticabile.",              tags: ["Vino"],
              imageSrc: "http://img.b2bpic.net/free-photo/crop-hostess-putting-wine-table_23-2147830614.jpg",              imageAlt: "Vini da Dessert"
            }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="cantina-abbinamenti" data-section="cantina-abbinamenti">
        <MetricCardSeven
          title="Abbinamenti Consigliati"
          description="Esplora i perfetti matrimoni di gusto tra i nostri piatti e la nostra cantina, pensati per elevare ogni portata a un'esperienza unica."
          textboxLayout="default"
          animationType="blur-reveal"
          metrics={[
            {
              id: "mca1",              value: "Fritto Misto",              title: "Vini Bianchi Freschi",              items: [
                "Vermentino della Costa",                "Pigato del Ponente",                "Cinque Terre DOC"
              ]
            },
            {
              id: "mca2",              value: "Funghi Porcini",              title: "Rossi Leggeri e Profumati",              items: [
                "Rossese di Dolceacqua",                "Ormeasco di Pornassio",                "Sciacchetrà Secco"
              ]
            },
            {
              id: "mca3",              value: "Dolci Artigianali",              title: "Vini Dolci e Aromatici",              items: [
                "Sciacchetrà Passito",                "Moscato d'Asti",                "Vermentino Passito"
              ]
            }
          ]}
          useInvertedBackground={true}
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