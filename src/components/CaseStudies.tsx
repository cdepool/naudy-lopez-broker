import { ArrowRight } from "lucide-react";

const cases = [
    {
        client: "Tiendas Damasco",
        stat: "46 tiendas",
        statLabel: "Red activa de retail",
        description:
            "Acompañamiento en expansión comercial, permisos operativos y logística para una de las cadenas de distribución más importantes del estado Portuguesa.",
        tag: "Consultoría & Alianzas",
    },
    {
        client: "Taca",
        stat: "1 → 10 galpones",
        statLabel: "Crecimiento de infraestructura",
        description:
            "Gestión integral de permisos, trámites y logística que permitió a Taca pasar de un solo galpón operativo a una red de diez unidades productivas.",
        tag: "Permisología & Logística",
    },
    {
        client: "Expo Feria Páez",
        stat: "250+ empresas · 8 países",
        statLabel: "Alcance internacional",
        description:
            "Organización y coordinación completa de la Expo Feria Páez, atrayendo más de 250 empresas expositoras y delegaciones de 8 países visitantes.",
        tag: "Organización de Expos",
    },
];

export function CaseStudies() {
    return (
        <section id="casos" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-[#FFD700]/20 text-[#003366] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Casos de Éxito
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Empresas que ya crecen con nosotros
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Resultados verificables con clientes reales en Venezuela.
                    </p>
                </div>

                {/* Client logos placeholder */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
                    {["Tiendas Damasco", "Taca", "Expo Feria Páez", "Vórtice Seguros"].map((name) => (
                        <div
                            key={name}
                            className="h-16 px-8 rounded-xl bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center text-sm text-gray-400 font-medium"
                        >
                            {name} {/* TODO:CLIENT_LOGOS */}
                        </div>
                    ))}
                </div>

                {/* Case cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {cases.map((c) => (
                        <div
                            key={c.client}
                            className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-8 hover:border-[#003366]/20 hover:shadow-lg transition-all duration-300"
                        >
                            <span className="inline-block bg-[#003366]/8 text-[#003366] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                                {c.tag}
                            </span>
                            <h3
                                className="text-2xl font-bold text-[#003366] mb-1"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {c.client}
                            </h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-3xl font-bold text-[#FFD700]">{c.stat}</span>
                            </div>
                            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">{c.statLabel}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
                        </div>
                    ))}
                </div>

                {/* Visual Quote */}
                <div className="max-w-3xl mx-auto bg-[#003366] rounded-3xl p-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFD700]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                    <div className="relative">
                        <div className="text-[#FFD700] text-6xl font-serif leading-none mb-4">&ldquo;</div>
                        <blockquote
                            className="text-white text-xl sm:text-2xl leading-relaxed italic mb-6"
                            style={{ fontFamily: "Georgia, serif" }}
                        >
                            Cada empresa me llevó a otra. Ofrecemos soluciones reales para hacer crecer tu negocio en Venezuela.
                        </blockquote>
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center font-bold text-[#003366]">
                                NL
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-sm">Naudy López</p>
                                <p className="text-white/50 text-xs">Broker 360° · Venezuela</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
