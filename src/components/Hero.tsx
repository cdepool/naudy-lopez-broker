import Link from "next/link";
import { MessageCircle, ChevronDown } from "lucide-react";
import { WA_LINKS } from "@/utils/whatsapp";

export function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 25% 25%, #D4AF37 0%, transparent 40%), radial-gradient(circle at 75% 75%, #D4AF37 0%, transparent 40%)",
                    }}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

            {/* Decorative rings */}
            <div className="absolute right-[-10%] top-[20%] w-96 h-96 rounded-full border border-[#D4AF37]/5 pointer-events-none" />
            <div className="absolute right-[-5%] top-[15%] w-64 h-64 rounded-full border border-[#D4AF37]/10 pointer-events-none" />
            <div className="absolute left-[-5%] bottom-[15%] w-80 h-80 rounded-full border border-white/5 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                        <span className="text-white/90 text-sm font-bold tracking-[0.1em] uppercase">
                            Broker 360° de Confianza · Venezuela
                        </span>
                    </div>

                    {/* H1 SEO */}
                    <h1
                        className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        NAUDY LÓPEZ BROKER: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FBF2C5] to-[#D4AF37]">CONFIANZA PROBADA</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl sm:text-2xl text-white/70 mb-12 max-w-3xl leading-relaxed font-medium">
                        Convertimos burocracia, logística y oportunidades en <span className="text-white border-b border-[#D4AF37]/30">crecimiento empresarial</span>.
                        Gestión 360° con un <span className="text-[#D4AF37] font-bold">único punto de contacto</span> corporativo.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a
                            href={WA_LINKS.general}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-track="whatsapp_hero"
                            className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#B8860B] text-black font-black text-lg px-10 py-5 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                            Agendar Consultoría
                        </a>
                        <a
                            href="#casos"
                            className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-bold text-lg px-10 py-5 rounded-full border border-white/20 hover:border-[#D4AF37]/50 transition-all duration-300"
                        >
                            Ver Trayectoria
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
