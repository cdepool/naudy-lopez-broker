import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Naudy López Broker 360° | Solución englobada para empresas en Venezuela",
  description: "Naudy López convierte burocracia, logística y oportunidades en crecimiento empresarial: permisos, aduana, transporte, expos, seguros y turismo en un solo contacto.",
  openGraph: {
    title: "Naudy López Broker 360°",
    description: "Broker 360° de Confianza en Venezuela. Soluciones reales para empresas.",
    images: ["TODO:OG_IMAGE"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${openSans.variable} font-sans antialiased bg-[var(--color-brand-background)]`}
      >
        {children}
      </body>
    </html>
  );
}
