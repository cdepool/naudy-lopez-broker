import { Search, FileCheck, Cog, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: Search,
        number: "01",
        title: "Diagnóstico",
        description:
            "Analizamos tu empresa, sector y necesidades específicas para entender el punto de partida y qué soluciones se adaptan mejor a tu realidad.",
    },
    {
        icon: FileCheck,
        number: "02",
        title: "Propuesta",
        description:
            "Diseñamos una estrategia personalizada con los servicios exactos que necesitas, tiempos estimados y un plan de acción claro.",
    },
    {
        icon: Cog,
        number: "03",
        title: "Gestión y Ejecución",
        description:
            "Nos encargamos de todos los trámites, coordinaciones y procesos. Tú te concentras en tu negocio; nosotros resolvemos.",
    },
    {
        icon: CheckCircle,
        number: "04",
        title: "Seguimiento",
        description:
            "Monitoreo continuo del proceso, resolución de imprevistos y reportes de avance. Una relación a largo plazo, no una transacción puntual.",
    },
];

export function Process() {
    return (
        <section id="proceso" className="py-24 lg:py-32 bg-black relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#D4AF37]/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6 border border-[#D4AF37]/20">
                        Metodología
                    </span>
                    <h2
                        className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        CÓMO <span className="text-[#D4AF37]">OPERAMOS</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto font-medium">
                        Un proceso claro, coordinado y de <span className="text-[#D4AF37] font-bold border-b border-[#D4AF37]/20">único punto de contacto</span> corporativo desde el primer día.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.number} className="relative">
                                {/* Connector line (desktop only) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-[calc(100%_-_24px)] w-full h-px bg-[#D4AF37]/10 z-0" />
                                )}
                                <div className="relative z-10 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#D4AF37]/30 rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 group">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-500">
                                            <Icon size={26} className="text-[#D4AF37] group-hover:text-black transition-colors" />
                                        </div>
                                        <span className="text-6xl font-black text-white/5 group-hover:text-[#D4AF37]/10 transition-colors tracking-tighter">{step.number}</span>
                                    </div>
                                    <h3
                                        className="text-xl font-black text-white mb-4 uppercase tracking-tight"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed font-medium group-hover:text-white/70 transition-colors">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
