"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
import { WA_LINKS } from "@/utils/whatsapp";
import { track } from "@/utils/tracking";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNav = (section: string) => {
        setIsOpen(false);
        track.nav(section);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black border-b border-white/5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4">
                        <div className="relative w-12 h-12 lg:w-14 lg:h-14">
                            <img
                                src="/assets/logo-gold.webp"
                                alt="Naudy López Logo"
                                className="w-full h-full object-contain rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col border-l border-white/20 pl-4">
                            <p className="text-white font-black text-sm lg:text-base leading-tight tracking-tight uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                                NAUDY LÓPEZ
                            </p>
                            <p className="text-[#D4AF37] text-[10px] lg:text-xs font-black tracking-[0.3em] uppercase">
                                BROKER 360°
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {[
                            { label: "Servicios", href: "#servicios" },
                            { label: "Casos de Éxito", href: "#casos" },
                            { label: "Contacto", href: "#contacto" },
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => handleNav(item.label)}
                                className="text-white/70 hover:text-[#D4AF37] text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* WhatsApp CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <a
                            href={WA_LINKS.general}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => track.whatsapp("header")}
                            className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B8860B] text-black font-extrabold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
                        >
                            <MessageCircle size={16} />
                            <span className="hidden sm:inline">WhatsApp</span>
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white p-2"
                            aria-label="Menú"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black border-t border-white/10">
                    <nav className="px-4 py-4 flex flex-col gap-1">
                        {[
                            { label: "Servicios", href: "#servicios" },
                            { label: "Casos de Éxito", href: "#casos" },
                            { label: "Proceso", href: "#proceso" },
                            { label: "Agenda", href: "#agenda" },
                            { label: "Contacto", href: "#contacto" },
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => handleNav(item.label)}
                                className="text-white/80 hover:text-[#FFD700] text-base py-3 px-4 rounded-lg hover:bg-white/5 transition-all"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href={WA_LINKS.general}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => track.whatsapp("mobile-menu")}
                            className="mt-2 flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-extrabold py-4 px-4 rounded-xl"
                        >
                            <MessageCircle size={18} />
                            Consultar Ahora
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
