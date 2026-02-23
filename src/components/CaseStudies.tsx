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
        <section id="casos" className="py-24 lg:py-32 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6 border border-[#D4AF37]/20">
                        Casos de Éxito
                    </span>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        TRAYECTORIA <span className="text-[#D4AF37]">PROBADA</span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg font-medium">
                        Resultados verificables con los líderes empresariales más importantes de Venezuela.
                    </p>
                </div>

                {/* Client logos placeholder */}
                <div className="flex flex-wrap items-center justify-center gap-8 mb-20 opacity-40 hover:opacity-100 transition-opacity">
                    {["Tiendas Damasco", "Taca", "Expo Feria Páez", "Vórtice Seguros"].map((name) => (
                        <div
                            key={name}
                            className="h-12 px-6 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[10px] text-white font-bold uppercase tracking-widest"
                        >
                            {name}
                        </div>
                    ))}
                </div>

                {/* Case cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {cases.map((c) => (
                        <div
                            key={c.client}
                            className="rounded-3xl border border-white/5 bg-white/[0.03] p-10 hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-2 group"
                        >
                            <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-[#D4AF37]/10">
                                {c.tag}
                            </span>
                            <h3
                                className="text-2xl font-black text-white mb-2 uppercase tracking-tight"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                {c.client}
                            </h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-4xl font-black text-[#D4AF37] tracking-tighter shadow-[#D4AF37]/20 drop-shadow-sm">{c.stat}</span>
                            </div>
                            <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-4 border-l border-[#D4AF37]/30 pl-3">{c.statLabel}</p>
                            <p className="text-white/60 text-sm leading-relaxed font-medium group-hover:text-white/80 transition-colors">{c.description}</p>
                        </div>
                    ))}
                </div>

                {/* Visual Quote */}
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0A0A0A] to-black rounded-[2.5rem] p-12 lg:p-16 text-center relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />
                    <div className="relative z-10">
                        <div className="text-[#D4AF37] text-7xl font-serif leading-none mb-8 opacity-50">&ldquo;</div>
                        <blockquote
                            className="text-white/90 text-2xl lg:text-3xl leading-relaxed italic mb-10 font-medium"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            &ldquo;Cada alianza estratégica abrió una nueva puerta. <br className="hidden lg:block" /> Ofrecemos soluciones reales para el <span className="text-[#D4AF37] not-italic">liderazgo empresarial</span> en Venezuela.&rdquo;
                        </blockquote>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FBF2C5] flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                NL
                            </div>
                            <div className="text-center">
                                <p className="text-white font-black text-base uppercase tracking-widest">Naudy López</p>
                                <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mt-1">Fundador · Broker 360°</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
