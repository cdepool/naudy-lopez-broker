import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Process } from "@/components/Process";
import { LeadForm } from "@/components/LeadForm";
import { Booking } from "@/components/Booking";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

// Schema.org LocalBusiness JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Naudy López Broker 360°",
  description:
    "Naudy López convierte burocracia, logística y oportunidades en crecimiento empresarial: permisos, aduana, transporte, expos, seguros y turismo en un solo contacto. Venezuela.",
  url: "https://naudylopezbroker.lat",
  telephone: "+584167576488",
  email: "naudylopezempresarial@gmail.com",
  areaServed: {
    "@type": "Country",
    name: "Venezuela",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "VE",
    addressRegion: "Portuguesa",
  },
  knowsAbout: [
    "Consultoría empresarial",
    "Permisología Venezuela",
    "Exportación y aduana",
    "Transporte ejecutivo",
    "Organización de ferias y exposiciones",
    "Seguros empresariales",
    "Turismo corporativo",
  ],
  // sameAs: ["TODO:SOCIAL_LINKS"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <CaseStudies />
        <Process />
        <LeadForm />
        <Booking />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
