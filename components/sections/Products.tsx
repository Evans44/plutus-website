"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Products() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" style={{ padding: "6rem 6%", background: "#0E1218" }}>
      <SectionHeader
        tag="AI-Powered Products"
        title="Ready-to-Deploy<br/>Intelligent Solutions"
        subtitle="Pre-built, battle-tested products that deliver measurable results from day one. Each solution is deployable, customizable, and backed by our expert team."
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "1.5rem",
      }}>
        {products.map((product, i) => {
          const isLast = i === products.length - 1;
          const isOdd = products.length % 2 !== 0;
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: "rgba(37,99,235,0.35)" }}
              style={{
                background: "#080B10",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16, padding: "2rem",
                display: "flex", flexDirection: "column",
                position: "relative", overflow: "hidden",
                transition: "border-color 0.25s, box-shadow 0.25s",
                ...(isLast && isOdd ? { gridColumn: "1 / -1", maxWidth: 660, margin: "0 auto", width: "100%" } : {}),
              }}
            >
              {/* Big number watermark */}
              <div style={{
                position: "absolute", top: "1.2rem", right: "1.4rem",
                fontFamily: "'Syne', sans-serif", fontSize: "3.5rem", fontWeight: 800,
                color: "rgba(255,255,255,0.035)", lineHeight: 1, userSelect: "none",
              }}>
                {String(product.id).padStart(2, "0")}
              </div>

              <div style={{
                fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#2563EB",
                marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.4rem",
              }}>
                <span style={{ width: 18, height: 1, background: "#2563EB", display: "inline-block" }} />
                {product.category}
              </div>

              <h3 style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "0.9rem", lineHeight: 1.35 }}>
                {product.title}
              </h3>

              <p style={{ fontSize: "0.85rem", color: "#7A8FA8", lineHeight: 1.65, flex: 1 }}>
                {product.description}
              </p>

              <div style={{
                marginTop: "1.5rem", padding: "0.9rem 1.1rem",
                background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.14)",
                borderRadius: 8, display: "flex", alignItems: "center", gap: "0.8rem",
              }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontSize: "1.1rem",
                  fontWeight: 700, color: "#60A5FA", flexShrink: 0,
                }}>
                  {product.metric.value}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#7A8FA8" }}>
                  {product.metric.label}
                </div>
              </div>

              <button
                onClick={scrollToContact}
                style={{
                  marginTop: "1.1rem", display: "inline-flex", alignItems: "center", gap: "0.45rem",
                  color: "#E74C3C", fontSize: "0.82rem", fontWeight: 500,
                  background: "none", border: "none", cursor: "pointer", padding: 0,
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.gap = "0.75rem"; }}
                onMouseLeave={(e) => { e.currentTarget.style.gap = "0.45rem"; }}
              >
                Enquire Now <ArrowRight size={14} />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
