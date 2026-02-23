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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#003366] shadow-lg" : "bg-[#003366]"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center font-bold text-[#003366] text-lg leading-none">
                            NL
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-base leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                                Naudy López
                            </span>
                            <span className="text-[#FFD700] text-xs font-semibold tracking-widest uppercase">
                                Broker 360°
                            </span>
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
                                className="text-white/80 hover:text-[#FFD700] text-sm font-medium transition-colors duration-200"
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
                            className="flex items-center gap-2 bg-[#FFD700] hover:bg-[#e6c300] text-[#003366] font-bold text-sm px-4 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
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
                <div className="md:hidden bg-[#002855] border-t border-white/10">
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
                            className="mt-2 flex items-center justify-center gap-2 bg-[#FFD700] text-[#003366] font-bold py-3 px-4 rounded-full"
                        >
                            <MessageCircle size={18} />
                            Escribir por WhatsApp
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
