"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Sparkles, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  const openPIA = () => window.dispatchEvent(new Event("pia:open"));

  return (
    <section id="contact" style={{ padding: "7rem 6%", background: "var(--paper-2)" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "5rem",
        alignItems: "center",
      }}>
        {/* Info */}
        <div>
          <SectionHeader
            tag="Get in Touch"
            title="Let&apos;s Build Something<br/>Remarkable Together"
            subtitle="Ready to modernize your infrastructure, automate your workflows, or explore our AI products? The fastest way to start is a quick chat with PIA, our intelligent assistant — she'll understand your needs and route you straight to the right specialist."
          />

          {[
            {
              Icon: MapPin,
              title: "Address",
              content: "House 11, 69 Road, Opposite The Hub Stores,\nGwarinpa, FCT – Abuja, Nigeria",
            },
            { Icon: Phone, title: "Phone", content: "+234 802 681 0696" },
            { Icon: Mail, title: "Email", content: "info@plutusintegrated.com" },
          ].map(({ Icon, title, content }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.4rem" }}
            >
              <div style={{
                width: 42, height: 42, background: "var(--red-soft)",
                border: "1px solid var(--red-line)", borderRadius: 11,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--red)",
              }}>
                <Icon size={17} strokeWidth={1.8} />
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem", fontWeight: 600 }}>
                  {title}
                </div>
                <div style={{ fontSize: "0.94rem", color: "var(--ink)", lineHeight: 1.5, whiteSpace: "pre-line" }}>
                  {content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ask PIA CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: "var(--ink)",
            borderRadius: 20, padding: "3rem 2.6rem",
            position: "relative", overflow: "hidden",
            boxShadow: "0 24px 60px rgba(17,19,21,0.18)",
          }}
        >
          {/* brand wash */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 0,
            background: "radial-gradient(ellipse 80% 70% at 80% 10%, rgba(231,76,60,0.22) 0%, transparent 65%)",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 15, marginBottom: "1.6rem",
              background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", boxShadow: "0 8px 24px rgba(192,57,43,0.4)",
            }}>
              <Sparkles size={26} strokeWidth={1.8} />
            </div>

            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "0.9rem", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
              Chat with PIA
            </h3>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2rem" }}>
              PIA — the Plutus Intelligent Assistant — answers questions about our services and
              products, and captures your enquiry in seconds. Tell her what you need and share your
              details right in the chat; the right specialist will follow up.
            </p>

            <button
              onClick={openPIA}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                background: "var(--red)", color: "white",
                padding: "0.95rem 2rem", borderRadius: 10, border: "none",
                fontWeight: 600, fontSize: "0.98rem", cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--red-light)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--red)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Start a conversation <ArrowRight size={17} />
            </button>

            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginTop: "1.4rem" }}>
              Prefer email? Reach us at info@plutusintegrated.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
