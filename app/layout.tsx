import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VitaGarden | Záhradnícke služby | Slovensko",
  description:
    "Profesionálna starostlivosť o záhrady — kosenie trávnikov, strihanie plotov, výsadba rastlín a komplexná údržba záhrad na Slovensku. Zavolajte nám!",
  keywords: [
    "záhradnícke služby",
    "kosenie trávnikov",
    "strihanie plotov",
    "údržba záhrady",
    "záhradník",
    "Slovensko",
  ],
  openGraph: {
    title: "VitaGarden | Záhradnícke služby",
    description: "Profesionálna starostlivosť o vašu záhradu. Zavolajte nám.",
    locale: "sk_SK",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
