import { MessageCircle, Mail, Globe } from "lucide-react";
import { WA_LINKS } from "@/utils/whatsapp";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer id="footer" className="bg-black text-white border-t border-white/5">
            {/* Top footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative w-12 h-12">
                                <img
                                    src="/assets/logo-naudy.webp"
                                    alt="Naudy López Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="border-l border-white/10 pl-4 py-1">
                                <p className="font-black text-white text-base leading-tight tracking-tight uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                                    NAUDY LÓPEZ
                                </p>
                                <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] mt-0.5">
                                    BROKER 360°
                                </p>
                            </div>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Convertimos burocracia, logística y oportunidades en crecimiento empresarial con un solo contacto. Venezuela.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-black text-[#D4AF37] uppercase tracking-[0.2em] text-[10px] mb-8">Ecosistema</h4>
                        <ul className="space-y-2.5 text-sm text-white/40">
                            {[
                                "Consultoría (Jurídico / Contable / Inmobiliaria)",
                                "Exportación / Aduana",
                                "Transporte Ejecutivo",
                                "Organización de Expos",
                                "Seguros Empresariales",
                                "Turismo Corporativo",
                            ].map((s) => (
                                <li key={s}>
                                    <a href="#servicios" className="hover:text-[#FFD700] transition-colors">
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-black text-[#D4AF37] uppercase tracking-[0.2em] text-[10px] mb-8">Acceso Directo</h4>
                        <div className="space-y-4">
                            <a
                                href={WA_LINKS.general}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-sm text-white/50 hover:text-[#D4AF37] transition-all group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/10 flex items-center justify-center transition-colors border border-white/5">
                                    <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="font-medium">+58 416-7576488</span>
                            </a>
                            <a
                                href="mailto:naudylopezempresarial@gmail.com"
                                className="flex items-center gap-4 text-sm text-white/50 hover:text-[#D4AF37] transition-all group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/10 flex items-center justify-center transition-colors border border-white/5">
                                    <Mail size={16} className="group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="font-medium">naudylopezempresarial@gmail.com</span>
                            </a>
                            <a
                                href="https://naudylopezbroker.lat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-sm text-white/50 hover:text-[#D4AF37] transition-all group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#D4AF37]/10 flex items-center justify-center transition-colors border border-white/5">
                                    <Globe size={16} className="group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="font-medium">naudylopezbroker.lat</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom footer */}
            <div className="border-t border-white/5 bg-black/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] text-white/20 font-bold uppercase tracking-[0.1em]">
                    <p>© {year} Naudy López Broker 360°. — Alianzas Provinciales.</p>
                    <div className="flex items-center gap-6">
                        <span className="hover:text-white/40 transition-colors pointer-events-none">Portuguesa, Venezuela</span>
                        <span className="w-1 h-1 rounded-full bg-white/10" />
                        <span className="hover:text-white/40 transition-colors pointer-events-none">Sede Corporativa</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
