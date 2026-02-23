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

                <div className="max-w-2xl mx-auto">
                    {/* Form Card */}
                    {!submitted ? (
                        <div className="bg-black rounded-[2.5rem] border border-white/5 p-10 lg:p-14 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-widest mb-3">
                                            Nombre y Apellido <span className="text-red-500 opacity-50">*</span>
                                        </label>
                                        <input
                                            name="nombre"
                                            value={form.nombre}
                                            onChange={handleChange}
                                            required
                                            placeholder="Nombre completo"
                                            className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37]/50 text-white placeholder-white/20 transition-all font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-widest mb-3">
                                            Organización / Empresa <span className="text-red-500 opacity-50">*</span>
                                        </label>
                                        <input
                                            name="empresa"
                                            value={form.empresa}
                                            onChange={handleChange}
                                            required
                                            placeholder="Nombre de la empresa"
                                            className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37]/50 text-white placeholder-white/20 transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-widest mb-3">
                                        Ecosistema de interés <span className="text-red-500 opacity-50">*</span>
                                    </label>
                                    <select
                                        name="servicio"
                                        value={form.servicio}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37]/50 text-white transition-all font-medium appearance-none"
                                    >
                                        <option value="" className="bg-black">Seleccionar servicio...</option>
                                        {serviceOptions.map((o) => (
                                            <option key={o.value} value={o.value} className="bg-black">{o.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black text-[#D4AF37] uppercase tracking-widest mb-3">
                                        Teléfono de Contacto <span className="text-white/20 font-normal">(verificado)</span>
                                    </label>
                                    <input
                                        name="telefono"
                                        value={form.telefono}
                                        onChange={handleChange}
                                        placeholder="+58 4XX XXX XXXX"
                                        className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37]/50 text-white placeholder-white/20 transition-all font-medium"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#B8860B] text-black font-black text-sm uppercase tracking-[0.2em] py-5 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)] hover:-translate-y-1"
                                >
                                    <Send size={18} />
                                    Iniciar Diagnóstico
                                </button>

                                <p className="text-xs text-center text-gray-400">
                                    Al enviar serás redirigido a WhatsApp para confirmar tu solicitud.
                                </p>
                            </form>
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 mb-10 text-center">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">✅</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#003366] mb-2">¡Datos recibidos!</h3>
                            <p className="text-gray-500">Te redirigimos a WhatsApp para confirmar tu solicitud.</p>
                        </div>
                    )}

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
