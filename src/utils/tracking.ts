// Event tracking utilities - plug into Google Analytics / Meta Pixel / GTM as needed
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

type EventPayload = {
    service?: string;
    section?: string;
    provider?: string;
};

function trackEvent(event: string, payload?: EventPayload) {
    if (typeof window === "undefined") return;
    // Google Analytics 4
    if (window.gtag) {
        window.gtag("event", event, payload);
    }
    // Fallback console log in dev
    if (process.env.NODE_ENV === "development") {
        console.log(`[Track] ${event}`, payload);
    }
}

export const track = {
    whatsapp: (service: string) => trackEvent("whatsapp_click", { service }),
    nav: (section: string) => trackEvent("nav_click", { section }),
    form: (service: string) => trackEvent("form_submit", { service }),
    booking: (provider: string) => trackEvent("booking_click", { provider }),
    pdf: () => trackEvent("pdf_click"),
};
