"use client";
import { useEffect, useState } from "react";
import { getStoredConsent, setConsent } from "@/lib/analytics";

/**
 * Minimal, on-brand cookie-consent banner. GA4 loads in a Consent Mode "denied"
 * state by default (see app/layout.tsx); this banner lets the visitor grant
 * analytics cookies (Accept) or keep them off (Decline). The choice is stored,
 * so the banner shows only once.
 */
export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Client-only mount check: localStorage isn't available during SSR, so the
    // one-time setState here is intentional (banner shows once if no choice stored).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (getStoredConsent() === null) setShow(true);
  }, []);

  if (!show) return null;

  const choose = (granted: boolean) => {
    setConsent(granted);
    setShow(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        left: 16,
        bottom: 16,
        zIndex: 1000,
        width: "min(360px, calc(100vw - 32px))",
        background: "var(--paper)",
        border: "1px solid var(--line)",
        borderRadius: 14,
        padding: "1rem 1.1rem",
        boxShadow: "0 20px 50px rgba(17,19,21,0.18)",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.84rem", lineHeight: 1.55, color: "var(--ink)" }}>
        We use cookies for analytics to understand how visitors use our site and improve it.{" "}
        <a href="/privacy" style={{ color: "var(--red)", textDecoration: "underline" }}>
          Learn more
        </a>
        .
      </p>
      <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.85rem" }}>
        <button
          onClick={() => choose(true)}
          style={{
            flex: 1,
            background: "var(--red)",
            color: "#fff",
            border: "none",
            borderRadius: 9,
            padding: "0.55rem 0.9rem",
            fontSize: "0.84rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Accept
        </button>
        <button
          onClick={() => choose(false)}
          style={{
            flex: 1,
            background: "transparent",
            color: "var(--ink)",
            border: "1px solid var(--line)",
            borderRadius: 9,
            padding: "0.55rem 0.9rem",
            fontSize: "0.84rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
