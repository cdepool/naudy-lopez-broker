"use client";

import { Calendar, MessageCircle, ExternalLink } from "lucide-react";
import { WA_LINKS } from "@/utils/whatsapp";
import { track } from "@/utils/tracking";

const BOOKING_URL = "TODO:BOOKING_URL"; // Replace with actual Calendly or Google Calendar link

export function Booking() {
    const hasBookingUrl = BOOKING_URL !== "TODO:BOOKING_URL";

    return (
        <section id="agenda" className="py-20 lg:py-28 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-[#FFD700]/20 text-[#003366] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Agenda
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-[#003366] mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Agenda una llamada de diagnóstico
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Sin costo, sin compromiso. En 30 minutos analizamos tu situación y te decimos cómo podemos ayudarte.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Calendar option */}
                    <div className="relative bg-[#003366] rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD700]/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-[#FFD700]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Calendar size={30} className="text-[#FFD700]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                                Agendar en calendario
                            </h3>
                            <p className="text-white/60 text-sm mb-8 leading-relaxed">
                                Elige el horario que mejor se adapte a ti y recibe confirmación automática.
                            </p>

                            {hasBookingUrl ? (
                                <a
                                    href={BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => track.booking("calendly")}
                                    className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#e6c300] text-[#003366] font-bold px-8 py-3.5 rounded-full transition-all duration-200"
                                >
                                    <ExternalLink size={16} />
                                    Ver disponibilidad
                                </a>
                            ) : (
                                <div className="text-center">
                                    <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 mb-4 text-xs text-white/40 font-mono">
                                        {/* TODO:BOOKING_URL — Reemplazar con link de Calendly o Google Calendar */}
                                        TODO:BOOKING_URL
                                    </div>
                                    <a
                                        href={WA_LINKS.agenda}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => track.booking("whatsapp_fallback")}
                                        className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#e6c300] text-[#003366] font-bold px-8 py-3.5 rounded-full transition-all duration-200"
                                    >
                                        <Calendar size={16} />
                                        Agendar por WhatsApp
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* WhatsApp option */}
                    <div className="bg-[#F8FAFC] rounded-3xl p-8 flex flex-col items-center text-center border border-gray-100">
                        <div className="w-16 h-16 bg-[#25D366]/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <MessageCircle size={30} className="text-[#25D366]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#003366] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                            Prefiero WhatsApp
                        </h3>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            Escríbenos directamente y coordinamos el horario de la llamada de forma inmediata.
                        </p>
                        <a
                            href={WA_LINKS.agenda}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => track.booking("whatsapp")}
                            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1dba58] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md"
                        >
                            <MessageCircle size={16} />
                            Quiero agendar una llamada
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
