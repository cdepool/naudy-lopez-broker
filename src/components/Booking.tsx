"use client";

import { Calendar, MessageCircle, ExternalLink } from "lucide-react";
import { WA_LINKS } from "@/utils/whatsapp";
import { track } from "@/utils/tracking";

const BOOKING_URL = "TODO:BOOKING_URL"; // Replace with actual Calendly or Google Calendar link

export function Booking() {
    const hasBookingUrl = BOOKING_URL !== "TODO:BOOKING_URL";

    return (
        <section id="agenda" className="py-24 lg:py-32 bg-[#050505]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6 border border-[#D4AF37]/20">
                        Agenda
                    </span>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        AGENDA TU <span className="text-[#D4AF37]">LLAMADA</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto font-medium">
                        Sin costo, sin compromiso. En 30 minutos analizamos tu situación y proyectamos tu ruta de crecimiento.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Calendar option */}
                    <div className="relative bg-black rounded-[2rem] p-10 flex flex-col items-center text-center overflow-hidden border border-white/5 group hover:border-[#D4AF37]/30 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#D4AF37] transition-all duration-500 group-hover:-rotate-6">
                                <Calendar size={32} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                                Agendar en Calendario
                            </h3>
                            <p className="text-white/40 text-sm mb-10 leading-relaxed font-medium">
                                Elige el horario corporativo que mejor se adapte a tu agenda y recibe confirmación instantánea.
                            </p>

                            {hasBookingUrl ? (
                                <a
                                    href={BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => track.booking("calendly")}
                                    className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#B8860B] text-black font-black text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)]"
                                >
                                    <ExternalLink size={16} />
                                    Ver Disponibilidad
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
                                        className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#B8860B] text-black font-black text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)]"
                                    >
                                        <Calendar size={16} />
                                        Agendar Consultoría
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* WhatsApp option */}
                    <div className="bg-white/[0.03] rounded-[2rem] p-10 flex flex-col items-center text-center border border-white/5 hover:border-[#25D366]/30 transition-all duration-500 group">
                        <div className="w-20 h-20 bg-[#25D366]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#25D366] transition-all duration-500 group-hover:rotate-6">
                            <MessageCircle size={32} className="text-[#25D366] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                            Acceso Directo
                        </h3>
                        <p className="text-white/40 text-sm mb-10 leading-relaxed font-medium">
                            Escríbenos directamente y coordinamos el horario de la llamada de forma inmediata.
                        </p>
                        <a
                            href={WA_LINKS.agenda}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => track.booking("whatsapp")}
                            className="inline-flex items-center gap-3 bg-white/5 hover:bg-[#25D366] text-white hover:text-white font-black text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-xl border border-white/10 hover:border-[#25D366] transition-all duration-300"
                        >
                            <MessageCircle size={16} />
                            Coordinar por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
