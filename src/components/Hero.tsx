import Link from "next/link";
import { MessageCircle, ChevronDown } from "lucide-react";
import { WA_LINKS } from "@/utils/whatsapp";

export function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#003366]"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 25% 25%, #FFD700 0%, transparent 50%), radial-gradient(circle at 75% 75%, #FFD700 0%, transparent 50%)",
                    }}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#004080] to-[#001a33]" />

            {/* Decorative rings */}
            <div className="absolute right-[-10%] top-[20%] w-96 h-96 rounded-full border border-[#FFD700]/10 pointer-events-none" />
            <div className="absolute right-[-5%] top-[15%] w-64 h-64 rounded-full border border-[#FFD700]/20 pointer-events-none" />
            <div className="absolute left-[-5%] bottom-[15%] w-80 h-80 rounded-full border border-white/5 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#FFD700]/15 border border-[#FFD700]/30 rounded-full px-4 py-1.5 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
                        <span className="text-[#FFD700] text-sm font-semibold tracking-wide uppercase">
                            Broker 360° de Confianza · Venezuela
                        </span>
                    </div>

                    {/* H1 SEO */}
                    <h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Naudy López Broker:{" "}
                        <span className="text-[#FFD700]">Confianza Probada</span> con
                        Damasco, Taca y Líderes Agro de Portuguesa
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl sm:text-2xl text-white/80 mb-10 max-w-3xl leading-relaxed">
                        Convertimos burocracia, logística y oportunidades en{" "}
                        <strong className="text-white">crecimiento empresarial</strong>.
                        Permisos, aduana, transporte, expos, seguros y turismo en{" "}
                        <span className="text-[#FFD700] font-semibold">un solo contacto</span>.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a
                            href={WA_LINKS.general}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-track="whatsapp_hero"
                            className="inline-flex items-center justify-center gap-3 bg-[#FFD700] hover:bg-[#e6c300] text-[#003366] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                        >
                            <MessageCircle size={22} />
                            Contactar por WhatsApp
                        </a>
                        <a
                            href="#casos"
                            className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-200"
                        >
                            Ver Casos de Éxito
                        </a>
                    </div>

                    {/* Micro social proof */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                            Damasco <span className="font-semibold text-white/80">(46 tiendas)</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                            Taca <span className="font-semibold text-white/80">(10 galpones)</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                            Expo Feria Páez{" "}
                            <span className="font-semibold text-white/80">(250+ empresas, 8 países)</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
                <ChevronDown size={28} />
            </div>
        </section>
    );
}
