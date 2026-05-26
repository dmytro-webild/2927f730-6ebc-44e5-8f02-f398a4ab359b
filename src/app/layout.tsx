import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Trattoria Bar Vittorio Gigagin – Cucina ligure, camino e dolci d’autore a Lumarzo (GE)',
  description: 'Pasta fresca al momento, fritto alla genovese asciutto, dessert d’autore e carta dei vini curata. Prenota pranzo o cena. Parcheggio gratuito e accessibilità completa.',
  openGraph: {
    "title": "Trattoria Bar Vittorio Gigagin – Cucina ligure, camino e dolci d’autore a Lumarzo (GE)",
    "description": "Pasta fresca al momento, fritto alla genovese asciutto, dessert d’autore e carta dei vini curata. Prenota pranzo o cena. Parcheggio gratuito e accessibilità completa.",
    "url": "/",
    "siteName": "Trattoria Bar Vittorio Gigagin",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/top-view-plate-with-walnuts-salad_23-2148381344.jpg",
        "alt": "Table with traditional Ligurian food"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Trattoria Bar Vittorio Gigagin – Cucina ligure, camino e dolci d’autore a Lumarzo (GE)",
    "description": "Pasta fresca al momento, fritto alla genovese asciutto, dessert d’autore e carta dei vini curata. Prenota pranzo o cena. Parcheggio gratuito e accessibilità completa.",
    "images": [
      "http://img.b2bpic.net/free-photo/top-view-plate-with-walnuts-salad_23-2148381344.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
