// WhatsApp deep link generator
const BASE_WA = "https://wa.me/584167576488?text=";

export const WA_LINKS: Record<string, string> = {
    consultoria: BASE_WA + encodeURIComponent("Hola Naudy, quiero CONSULTORÍA. Mi empresa es ___ y estoy en ___."),
    exportar: BASE_WA + encodeURIComponent("Hola Naudy, quiero EXPORTAR. Producto: ___ / Destino: ___ / Ciudad: ___."),
    transporte: BASE_WA + encodeURIComponent("Hola Naudy, quiero TRANSPORTE. Fecha: ___ / Ruta: ___ / Pasajeros: ___."),
    expo: BASE_WA + encodeURIComponent("Hola Naudy, quiero EXPO. Empresa: ___ / Rubro: ___ / Evento: ___."),
    seguro: BASE_WA + encodeURIComponent("Hola Naudy, quiero SEGURO. Tipo: carga/flota/empresa/salud/delivery. Detalles: ___."),
    turismo: BASE_WA + encodeURIComponent("Hola Naudy, quiero TURISMO. Personas: ___ / Destino: ___ / Fecha: ___."),
    agenda: BASE_WA + encodeURIComponent("Hola Naudy, quiero AGENDAR una llamada. Mi empresa es ___ y el tema es ___."),
    general: BASE_WA + encodeURIComponent("Hola Naudy, me interesa conocer más sobre tus servicios."),
};

export function getWaLink(service: keyof typeof WA_LINKS | string): string {
    return WA_LINKS[service] ?? WA_LINKS.general;
}
