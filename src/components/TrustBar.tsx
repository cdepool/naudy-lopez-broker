import { Store, Warehouse, Users, Globe } from "lucide-react";

const stats = [
    {
        icon: Store,
        number: "46",
        label: "Tiendas activas",
        sub: "Damasco",
    },
    {
        icon: Warehouse,
        number: "10",
        label: "Galpones gestionados",
        sub: "Taca",
    },
    {
        icon: Users,
        number: "250+",
        label: "Empresas en expo",
        sub: "Expo Feria Páez",
    },
    {
        icon: Globe,
        number: "8",
        label: "Países visitantes",
        sub: "Expo Feria Páez",
    },
];

export function TrustBar() {
    return (
        <section className="bg-black border-y border-white/5 py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs text-[#D4AF37]/50 uppercase tracking-[0.2em] font-bold mb-12">
                    — Trayectoria Corporativa Consolidada —
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-[#D4AF37]/30 group transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08]"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37] transition-all duration-300">
                                    <Icon
                                        size={26}
                                        className="text-[#D4AF37] group-hover:text-black transition-colors duration-300"
                                    />
                                </div>
                                <span className="text-5xl font-black text-white group-hover:text-[#D4AF37] transition-colors duration-300 tracking-tighter">
                                    {stat.number}
                                </span>
                                <span className="text-sm font-bold text-white/90 uppercase tracking-widest mt-2 transition-colors duration-300">
                                    {stat.label}
                                </span>
                                <span className="text-xs text-[#D4AF37]/60 font-medium uppercase tracking-wider mt-1 transition-colors duration-300">
                                    {stat.sub}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
