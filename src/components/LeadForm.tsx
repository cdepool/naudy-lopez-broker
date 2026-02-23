"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { WA_LINKS } from "@/utils/whatsapp";
import { track } from "@/utils/tracking";

const serviceOptions = [
    { value: "consultoria", label: "Consultoría (Jurídico, Contable e Inmobiliario)" },
    { value: "exportar", label: "Exportación / Aduana" },
    { value: "transporte", label: "Transporte Ejecutivo" },
    { value: "expo", label: "Organización de Expos / Ruedas de Negocio" },
    { value: "seguro", label: "Seguros Empresariales (Vórtice)" },
    { value: "turismo", label: "Turismo Corporativo (Coromotana Travel Tour)" },
];

const quickChips = [
    { label: "CONSULTORÍA", key: "consultoria" },
    { label: "EXPORTAR", key: "exportar" },
    { label: "TRANSPORTE", key: "transporte" },
    { label: "EXPO", key: "expo" },
    { label: "SEGURO", key: "seguro" },
    { label: "TURISMO", key: "turismo" },
];

export function LeadForm() {
    const [form, setForm] = useState({ nombre: "", empresa: "", servicio: "", telefono: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.nombre || !form.empresa || !form.servicio) return;
        track.form(form.servicio);

        // Build custom WhatsApp message from form data
        const msg = encodeURIComponent(
            `Hola Naudy, soy ${form.nombre} de la empresa ${form.empresa}. Me interesa ${serviceOptions.find(s => s.value === form.servicio)?.label ?? form.servicio}. Mi contacto es: ${form.telefono || "pendiente"}.`
        );
        window.open(`https://wa.me/584167576488?text=${msg}`, "_blank");
        setSubmitted(true);
    };

    return (
        <section id="contacto" className="py-24 lg:py-32 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6 border border-[#D4AF37]/20">
                        Punto de Contacto
                    </span>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        SOLICITA TU <span className="text-[#D4AF37]">DIAGNÓSTICO</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto font-medium">
                        Inicia una ruta estratégica clara para tu negocio. Sin compromisos adicionales.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* CRM Form Container */}
                    <div className="bg-black rounded-[2.5rem] border border-[#D4AF37]/30 p-4 lg:p-8 mb-16 shadow-[0_20px_50px_rgba(212,175,55,0.1)] overflow-hidden min-h-[550px]">
                        <iframe
                            src="https://vip.lanextpodcast.live/widget/form/R0pON5VSVrdHyXxI9ssX"
                            style={{ width: "100%", height: "550px", border: "none", borderRadius: "3px" }}
                            id="inline-R0pON5VSVrdHyXxI9ssX"
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="Diagnóstico - NaudyLopezBroker"
                            data-height="495"
                            data-layout-iframe-id="inline-R0pON5VSVrdHyXxI9ssX"
                            data-form-id="R0pON5VSVrdHyXxI9ssX"
                            title="Diagnóstico - NaudyLopezBroker"
                        ></iframe>
                    </div>

                    {/* Quick WhatsApp chips */}
                    <div>
                        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">
                            O escribe directamente por servicio
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {quickChips.map((chip) => (
                                <a
                                    key={chip.key}
                                    href={WA_LINKS[chip.key]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => track.whatsapp(chip.key)}
                                    className="flex items-center gap-2 bg-white/5 hover:bg-[#D4AF37] text-white/70 hover:text-black border border-white/10 hover:border-[#D4AF37] font-bold text-[10px] uppercase tracking-widest px-6 py-3 rounded-xl transition-all duration-300 group"
                                >
                                    <MessageCircle size={14} className="opacity-50 group-hover:opacity-100" />
                                    {chip.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
