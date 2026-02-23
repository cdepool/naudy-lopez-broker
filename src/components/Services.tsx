"use client";

import { MessageCircle, FileText, Truck, Calendar, Shield, Plane, Briefcase } from "lucide-react";
import { WA_LINKS } from "@/utils/whatsapp";
import { track } from "@/utils/tracking";

const services = [
    {
        icon: Briefcase,
        title: "Consultoría, Asesoría Jurídica, Contable e Inmobiliaria",
        keyword: "CONSULTORÍA",
        waKey: "consultoria",
        forWho: "Empresas que necesitan permisos, gestión legal, contable o activos inmobiliarios.",
        benefits: [
            "Consultoría y permisología: trámites, licencias y alianzas estratégicas",
            "Asesoría jurídica y contable: blindaje legal, fiscal y administrativo",
            "Agencia inmobiliaria corporativa: galpones, locales y sedes para empresas",
        ],
        color: "#003366",
    },
    {
        icon: FileText,
        title: "Exportación y Aduana",
        keyword: "EXPORTAR",
        waKey: "exportar",
        forWho: "Empresas que quieren llevar sus productos a mercados internacionales.",
        benefits: [
            "Gestión documental y aduanera de principio a fin",
            "Reducción de riesgos con permisología al día",
            "Coordinación de logística internacional y cumplimiento normativo",
        ],
        color: "#003366",
    },
    {
        icon: Truck,
        title: "Transporte Ejecutivo",
        keyword: "TRANSPORTE",
        waKey: "transporte",
        forWho: "Ejecutivos, delegaciones y empresas que requieren traslados seguros.",
        benefits: [
            "Flota ejecutiva para traslados corporativos y delegaciones",
            "Cobertura en Venezuela con conductores profesionales",
            "Coordinación completa: ruta, horarios y seguimiento",
        ],
        color: "#003366",
    },
    {
        icon: Calendar,
        title: "Organización de Expos y Ruedas de Negocio",
        keyword: "EXPO",
        waKey: "expo",
        forWho: "Empresas y marcas que buscan visibilidad y conexiones comerciales.",
        benefits: [
            "Planeación integral de ferias, expos y ruedas de negocio",
            "Base de datos de empresas participantes y gestión de expositores",
            "Experiencia avalada por Expo Feria Páez (250+ empresas, 8 países)",
        ],
        color: "#003366",
    },
    {
        icon: Shield,
        title: "Seguros Empresariales (Alianza Vórtice)",
        keyword: "SEGURO",
        waKey: "seguro",
        forWho: "Empresas que necesitan proteger carga, flota, personal o activos.",
        benefits: [
            "Seguros de carga, flota, empresariales, salud y delivery",
            "Asesoría personalizada en alianza con Vórtice",
            "Gestión de siniestros y renovaciones incluidas",
        ],
        color: "#003366",
    },
    {
        icon: Plane,
        title: "Turismo Corporativo (Coromotana Travel Tour)",
        keyword: "TURISMO",
        waKey: "turismo",
        forWho: "Empresas que organizan viajes de incentivo, convenciones o retiros.",
        benefits: [
            "Paquetes de turismo corporativo y viajes de incentivo",
            "Coordinación de grupos, logística y alojamiento",
            "Operado a través de Coromotana Travel Tour",
        ],
        color: "#003366",
    },
];

export function Services() {
    return (
        <section id="servicios" className="py-24 lg:py-32 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-20">
                    <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6 border border-[#D4AF37]/20">
                        Ecosistema de Servicios
                    </span>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        SOLUCIONES <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FBF2C5]">360°</span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg font-medium">
                        Gestión corporativa de alto nivel diseñada para eliminar fricciones y maximizar resultados estratégicos.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.waKey}
                                className="group bg-black rounded-[2rem] border border-white/5 p-10 hover:border-[#D4AF37]/40 transition-all duration-500 flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl group-hover:bg-[#D4AF37]/10 transition-colors" />
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-all duration-500">
                                    <Icon size={30} className="text-[#D4AF37] group-hover:text-black transition-colors duration-500" />
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-xl font-bold text-[#003366] mb-3"
                                    style={{ fontFamily: "var(--font-heading)" }}
                                >
                                    {s.title}
                                </h3>

                                {/* For who */}
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-4 border-l-2 border-[#FFD700] pl-3">
                                    {s.forWho}
                                </p>

                                {/* Benefits */}
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {s.benefits.map((b) => (
                                        <li key={b} className="flex items-start gap-3.5 text-sm text-white/50 group-hover:text-white/80 transition-colors">
                                            <span className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 shrink-0 shadow-[0_0_5px_#D4AF37]" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href={WA_LINKS[s.waKey]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => track.whatsapp(s.waKey)}
                                    className="flex items-center justify-center gap-3 w-full bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 hover:border-[#D4AF37] font-black text-xs uppercase tracking-widest py-4.5 rounded-2xl transition-all duration-300 group-hover:translate-y-[-2px]"
                                >
                                    <MessageCircle size={16} />
                                    Consultar por {s.keyword}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
