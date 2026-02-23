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
        <section id="proceso" className="py-20 lg:py-28 bg-[#003366] relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD700]/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FFD700]/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-[#FFD700]/15 text-[#FFD700] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Metodología
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Cómo trabajamos contigo
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto">
                        Un proceso claro, coordinado y de{" "}
                        <span className="text-[#FFD700] font-semibold">un solo contacto</span> desde el diagnóstico hasta el cierre.
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
                                    <div className="hidden lg:block absolute top-10 left-[calc(100%_-_16px)] w-full h-px bg-[#FFD700]/20 z-0" />
                                )}
                                <div className="relative z-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFD700]/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-xl bg-[#FFD700]/15 flex items-center justify-center">
                                            <Icon size={22} className="text-[#FFD700]" />
                                        </div>
                                        <span className="text-5xl font-bold text-white/10">{step.number}</span>
                                    </div>
                                    <h3
                                        className="text-lg font-bold text-white mb-3"
                                        style={{ fontFamily: "var(--font-heading)" }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
