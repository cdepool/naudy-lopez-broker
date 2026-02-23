"use client";

import { MessageCircle } from "lucide-react";
import { WA_LINKS } from "@/utils/whatsapp";
import { track } from "@/utils/tracking";

export function FloatingWhatsApp() {
    return (
        <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track.whatsapp("floating_button")}
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#D4AF37] hover:bg-black text-black hover:text-[#D4AF37] font-black text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-[0_15px_40px_rgba(212,175,55,0.3)] border border-transparent hover:border-[#D4AF37]/50 transition-all duration-500 group hover:-translate-y-2"
        >
            <MessageCircle size={22} className="shrink-0 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Escribir</span>
        </a>
    );
}
