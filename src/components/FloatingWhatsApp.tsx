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
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1dba58] text-white font-semibold px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
        >
            <MessageCircle size={22} className="shrink-0" />
            <span className="text-sm hidden sm:inline">Escríbenos</span>
        </a>
    );
}
