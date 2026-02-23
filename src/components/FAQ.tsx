"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "¿Atiendes solo Portuguesa o todo Venezuela?",
        a: "Atendemos empresas en todo el territorio venezolano. Aunque nuestra base principal está en el estado Portuguesa y el eje central, ofrecemos coordinación logística y gestión de trámites a nivel nacional e internacional.",
    },
    {
        q: "¿Qué información necesitas para iniciar?",
        a: "Para el diagnóstico inicial solo necsitamos datos básicos de tu empresa: nombre, sector, estado o ciudad donde operas y el servicio de interés. Con eso podemos agendar una llamada sin costo y preparar una propuesta.",
    },
    {
        q: "¿Cómo funciona el servicio de permisología?",
        a: "Gestionamos los permisos ante los organismos competentes (Seniat, alcaldías, ministerios, etc.) con permisología al día para reducir riesgos de paros o sanciones. El proceso incluye análisis de tu situación, preparación documental y seguimiento ante las instituciones.",
    },
    {
        q: "¿Cómo funciona la exportación y aduana?",
        a: "Te acompañamos desde la clasificación arancelaria hasta el despacho. Coordinamos agentes de aduana, documentación de exportación, permisos SENCAMER o IVA de exportación según aplique, y las guías de transporte internacional.",
    },
    {
        q: "¿Cómo cotizo transporte ejecutivo o una expo?",
        a: "Compártenos la fecha, ruta o tipo de evento (expo, rueda de negocios, convención), número de personas o expositores y el estado donde se realizará. En menos de 24 horas te enviamos una propuesta personalizada.",
    },
    {
        q: "¿Cuánto tarda el diagnóstico inicial?",
        a: "El diagnóstico se realiza en una llamada de 30 minutos, sin costo. En esa sesión analizamos tus necesidades y te entregamos una propuesta de servicios con tiempos y alcance estimados.",
    },
    {
        q: "¿Los seguros cubren transporte de carga y flota?",
        a: "Sí. En alianza con Vórtice ofrecemos pólizas de carga, flota empresarial, seguros de salud, seguro de empresa y cobertura para delivery. El asesor evalúa contigo cuál es la cobertura más adecuada según tu actividad.",
    },
    {
        q: "¿Puedo contratar solo uno de los servicios?",
        a: "Por supuesto. Puedes contratar el servicio que necesitas de forma independiente. Sin embargo, muchos clientes optan por la gestión integral porque les permite operar con un solo contacto y mayor coordinación.",
    },
];

export function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 lg:py-28 bg-[#F8FAFC]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-[#003366]/10 text-[#003366] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Preguntas frecuentes
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-[#003366]"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Resolvemos tus dudas
                    </h2>
                </div>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#003366]/20 transition-colors duration-200"
                        >
                            <button
                                onClick={() => setOpen(open === index ? null : index)}
                                className="w-full text-left flex items-center justify-between px-6 py-5 gap-4"
                                aria-expanded={open === index}
                            >
                                <span className="font-semibold text-[#003366] text-base leading-snug">
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`shrink-0 text-[#FFD700] transition-transform duration-300 ${open === index ? "rotate-180" : ""}`}
                                />
                            </button>
                            {open === index && (
                                <div className="px-6 pb-5">
                                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                                        {faq.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
