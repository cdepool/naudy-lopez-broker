import { MessageCircle, Mail, Globe } from "lucide-react";
import { WA_LINKS } from "@/utils/whatsapp";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer id="footer" className="bg-[#001a33] text-white">
            {/* Top footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center font-bold text-[#003366] text-lg">
                                NL
                            </div>
                            <div>
                                <p className="font-bold text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                                    Naudy López
                                </p>
                                <p className="text-[#FFD700] text-xs font-semibold uppercase tracking-widest">
                                    Broker 360°
                                </p>
                            </div>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Convertimos burocracia, logística y oportunidades en crecimiento empresarial con un solo contacto. Venezuela.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white/80 uppercase tracking-widest text-xs mb-5">Servicios</h4>
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
                        <h4 className="font-bold text-white/80 uppercase tracking-widest text-xs mb-5">Contacto directo</h4>
                        <div className="space-y-4">
                            <a
                                href={WA_LINKS.general}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FFD700] transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#FFD700]/10 flex items-center justify-center transition-colors">
                                    <MessageCircle size={15} />
                                </div>
                                +58 416-7576488 (WhatsApp)
                            </a>
                            <a
                                href="mailto:naudylopezempresarial@gmail.com"
                                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FFD700] transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#FFD700]/10 flex items-center justify-center transition-colors">
                                    <Mail size={15} />
                                </div>
                                naudylopezempresarial@gmail.com
                            </a>
                            <a
                                href="https://naudylopezbroker.lat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#FFD700] transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#FFD700]/10 flex items-center justify-center transition-colors">
                                    <Globe size={15} />
                                </div>
                                naudylopezbroker.lat
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom footer */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
                    <p>© {year} Naudy López Broker 360°. Todos los derechos reservados.</p>
                    <p className="text-white/20 text-center">
                        Información general sujeta a evaluación. Los resultados mencionados corresponden a casos reales sin garantía de replicabilidad.
                    </p>
                </div>
            </div>
        </footer>
    );
}
