"use client";

import { MessageCircle, FileText, Truck, Calendar, Shield, Plane, Briefcase } from "lucide-react";
import { WA_LINKS } from "@/utils/whatsapp";
import { track } from "@/utils/tracking";

const services = [
    {
        icon: Briefcase,
        title: "Consultoría, Permisología y Alianzas",
        keyword: "CONSULTORÍA",
        waKey: "consultoria",
        forWho: "Empresas que necesitan permisos, licencias o alianzas estratégicas.",
        benefits: [
            "Gestión completa de permisos y trámites ante entes reguladores",
            "Acompañamiento en alianzas estratégicas y expansión comercial",
            "Solución englobada: un solo punto de contacto para todo el proceso",
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
        <section id="servicios" className="py-20 lg:py-28 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-[#003366]/10 text-[#003366] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Servicios
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Todo lo que necesita tu empresa,{" "}
                        <span className="text-[#FFD700]">en un solo lugar</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Cada servicio está diseñado para eliminar fricciones y maximizar resultados con acompañamiento integral.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.waKey}
                                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-[#003366]/20 hover:shadow-xl transition-all duration-300 flex flex-col"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-[#003366]/8 flex items-center justify-center mb-6 group-hover:bg-[#003366] transition-colors duration-300">
                                    <Icon size={26} className="text-[#003366] group-hover:text-[#FFD700] transition-colors duration-300" />
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
                                <ul className="space-y-2 mb-6 flex-grow">
                                    {s.benefits.map((b) => (
                                        <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mt-1.5 shrink-0" />
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
                                    className="flex items-center justify-center gap-2.5 w-full bg-[#003366] hover:bg-[#FFD700] text-white hover:text-[#003366] font-bold text-sm py-3.5 rounded-xl transition-all duration-200"
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
