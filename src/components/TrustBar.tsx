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
        <section className="bg-white border-b border-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-gray-400 uppercase tracking-widest font-semibold mb-8">
                    Resultados reales con empresas reales
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-[#003366] group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#003366]/10 group-hover:bg-[#FFD700]/20 flex items-center justify-center mb-3 transition-colors duration-300">
                                    <Icon
                                        size={22}
                                        className="text-[#003366] group-hover:text-[#FFD700] transition-colors duration-300"
                                    />
                                </div>
                                <span className="text-4xl font-bold text-[#003366] group-hover:text-[#FFD700] transition-colors duration-300">
                                    {stat.number}
                                </span>
                                <span className="text-sm text-gray-600 group-hover:text-white/80 mt-1 transition-colors duration-300">
                                    {stat.label}
                                </span>
                                <span className="text-xs text-gray-400 group-hover:text-white/50 mt-0.5 transition-colors duration-300">
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
