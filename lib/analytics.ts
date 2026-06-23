/**
 * GA4 helpers. Event calls are safe no-ops until gtag is present, and Google
 * Consent Mode (default denied) controls whether cookies are set — so calling
 * trackEvent() before consent is harmless (it sends in cookieless/modeled mode).
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const CONSENT_KEY = "plutus-cookie-consent";

/** Fire a GA4 event. No-op on the server or before gtag loads. */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/** Read the stored consent choice, if any. */
export function getStoredConsent(): "granted" | "denied" | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/** Persist the consent choice and update GA Consent Mode immediately. */
export function setConsent(granted: boolean): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
  } catch {
    /* storage unavailable — consent simply won't persist */
  }
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
  }
}

export {};
