"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Products() {
  const openPIA = () => window.dispatchEvent(new Event("pia:open"));

  return (
    <section id="products" style={{ padding: "7rem 6%", background: "var(--paper-2)" }}>
      <SectionHeader
        tag="AI-Powered Products"
        title="Ready-to-Deploy<br/>Intelligent Solutions"
        subtitle="Pre-built, battle-tested products that deliver measurable results from day one. Each solution is deployable, customizable, and backed by our expert team."
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "1.25rem",
      }}>
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            style={{
              background: "var(--paper)",
              border: "1px solid var(--line)",
              borderRadius: 16, padding: "2.2rem",
              display: "flex", flexDirection: "column",
              position: "relative", overflow: "hidden",
              transition: "border-color 0.25s, box-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--red-line)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(17,19,21,0.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--line)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Big number watermark */}
            <div style={{
              position: "absolute", top: "1.2rem", right: "1.5rem",
              fontSize: "3.4rem", fontWeight: 800, letterSpacing: "-0.04em",
              color: "rgba(17,19,21,0.05)", lineHeight: 1, userSelect: "none",
            }}>
              {String(product.id).padStart(2, "0")}
            </div>

            <div style={{
              fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "var(--red)",
              marginBottom: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem",
            }}>
              <span style={{ width: 18, height: 1.5, background: "var(--red)", display: "inline-block" }} />
              {product.category}
            </div>

            <h3 style={{ fontSize: "1.12rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.9rem", lineHeight: 1.35 }}>
              {product.title}
            </h3>

            <p style={{ fontSize: "0.9rem", color: "var(--body)", lineHeight: 1.7, flex: 1 }}>
              {product.description}
            </p>

            <div style={{
              marginTop: "1.5rem", padding: "0.95rem 1.15rem",
              background: "var(--red-soft)", border: "1px solid var(--red-line)",
              borderRadius: 10, display: "flex", alignItems: "center", gap: "0.85rem",
            }}>
              <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--red)", flexShrink: 0, letterSpacing: "-0.01em" }}>
                {product.metric.value}
              </div>
              <div style={{ fontSize: "0.79rem", color: "var(--body)" }}>
                {product.metric.label}
              </div>
            </div>

            <button
              onClick={openPIA}
              style={{
                marginTop: "1.2rem", display: "inline-flex", alignItems: "center", gap: "0.45rem",
                color: "var(--red)", fontSize: "0.84rem", fontWeight: 600,
                background: "none", border: "none", cursor: "pointer", padding: 0,
                transition: "gap 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.gap = "0.75rem"; }}
              onMouseLeave={(e) => { e.currentTarget.style.gap = "0.45rem"; }}
            >
              Enquire with PIA <ArrowRight size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
