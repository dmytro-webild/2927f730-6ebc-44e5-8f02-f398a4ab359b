"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function DolciPage() {
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

      <div id="dolci-page" data-section="dolci-page">
        <ProductCardThree
          title="I Nostri Dolci d'Autore"
          description="Dove finisce la cena, comincia il ricordo. I nostri dessert sono piccole opere d'arte, fatte per deliziare il palato e lasciare un'emozione indimenticabile, dalla Crema di Mascarpone alla Millefoglie croccante."
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "dp1",              name: "Crema di mascarpone e frutti di bosco",              price: "€8",              imageSrc: "http://img.b2bpic.net/free-photo/dessert-ice-cream-with-strawberries-cherries_141793-4560.jpg",              imageAlt: "Crema di mascarpone con frutti di bosco"
            },
            {
              id: "dp2",              name: "Millefoglie di mandorle e fragole",              price: "€9",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-french-brie-cheese-with-red-tomatoes_181624-54498.jpg",              imageAlt: "Millefoglie di mandorle e fragole"
            },
            {
              id: "dp3",              name: "Panna cotta alla salsa calda di miele",              price: "€7",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-sliced-pie-with-red-berries-dark-table-cake-sweet-pies_140725-73353.jpg",              imageAlt: "Panna cotta con salsa calda di miele"
            },
            {
              id: "dp4",              name: "Tiramisù",              price: "€8",              imageSrc: "http://img.b2bpic.net/free-photo/cup-delicious-drink-with-coffee-beans-marble_114579-60401.jpg",              imageAlt: "Tiramisù in coppa elegante"
            },
            {
              id: "dp5",              name: "Parfait",              price: "€9",              imageSrc: "http://img.b2bpic.net/free-photo/icecream-dessert-with-bitter-chocolate-sauce-white-saucer_114579-10379.jpg",              imageAlt: "Parfait di stagione"
            },
            {
              id: "dp6",              name: "Crostatina calda ai frutti di bosco",              price: "€8",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-blueberry-pie-view_23-2149629032.jpg",              imageAlt: "Crostatina calda ai frutti di bosco"
            }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="dolci-recensioni" data-section="dolci-recensioni">
        <TestimonialCardFifteen
          title="Dicono dei Nostri Dolci"
          testimonial="I dolci sono delle leccornie… direi opere d’arte. La crema di mascarpone è divina, la millefoglie sublime. Non si può finire una cena qui senza assaggiarli!"
          rating={5}
          author="Cliente Goloso"
          avatars={[
            {
              src: "http://img.b2bpic.net/free-photo/female-chef-kitchen-sieving-flour-bowl_23-2149720730.jpg",              alt: "Maria Rossi"
            },
            {
              src: "http://img.b2bpic.net/free-photo/blond-man-surprised_1194-2887.jpg",              alt: "Giovanni Verdi"
            },
            {
              src: "http://img.b2bpic.net/free-photo/pretty-woman-picking-vegetables-from-pallet_23-2147700638.jpg",              alt: "Silvia Neri"
            },
            {
              src: "http://img.b2bpic.net/free-photo/smiley-father-posing-with-arms-crossed_23-2148414862.jpg",              alt: "Luca Gialli"
            },
            {
              src: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-holding-glass_23-2148965394.jpg",              alt: "Elena Bianchi"
            }
          ]}
          ratingAnimation="blur-reveal"
          avatarsAnimation="blur-reveal"
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