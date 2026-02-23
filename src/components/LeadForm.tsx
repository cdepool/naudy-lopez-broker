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
        <section id="contacto" className="py-20 lg:py-28 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-[#003366]/10 text-[#003366] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Contacto
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Solicita tu diagnóstico{" "}
                        <span className="text-[#FFD700]">gratuito</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Completa el formulario y nos ponemos en contacto. Sin compromisos.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Form Card */}
                    {!submitted ? (
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 lg:p-10 mb-10">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Nombre y Apellido <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            name="nombre"
                                            value={form.nombre}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ej. María González"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] text-gray-700 placeholder-gray-300 transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Empresa <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            name="empresa"
                                            value={form.empresa}
                                            onChange={handleChange}
                                            required
                                            placeholder="Ej. Distribuidora ABC"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] text-gray-700 placeholder-gray-300 transition"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Servicio de interés <span className="text-red-400">*</span>
                                    </label>
                                    <select
                                        name="servicio"
                                        value={form.servicio}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] text-gray-700 transition bg-white"
                                    >
                                        <option value="">Seleccionar un servicio...</option>
                                        {serviceOptions.map((o) => (
                                            <option key={o.value} value={o.value}>{o.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Teléfono / WhatsApp{" "}
                                        <span className="text-gray-400 font-normal">(opcional)</span>
                                    </label>
                                    <input
                                        name="telefono"
                                        value={form.telefono}
                                        onChange={handleChange}
                                        placeholder="+58 412-0000000"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] text-gray-700 placeholder-gray-300 transition"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 bg-[#003366] hover:bg-[#002244] text-white font-bold text-base py-4 rounded-xl transition-all duration-200 hover:shadow-lg"
                                >
                                    <Send size={18} />
                                    Solicitar diagnóstico
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
                                    className="flex items-center gap-2 bg-white hover:bg-[#003366] text-[#003366] hover:text-[#FFD700] border border-[#003366]/20 hover:border-[#003366] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm"
                                >
                                    <MessageCircle size={14} />
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
