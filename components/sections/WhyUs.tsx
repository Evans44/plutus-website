"use client";
import { motion } from "framer-motion";
import { whyUs } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function WhyUs() {
  return (
    <section style={{ padding: "6rem 6%", background: "#141922" }}>
      <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 1rem" }}>
        <SectionHeader
          tag="Why PLUTUS"
          title="The Difference Is<br/>in the Details"
          center
        />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: "1.2rem",
        marginTop: "3rem",
      }}>
        {whyUs.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{ background: "rgba(255,255,255,0.04)" }}
            style={{
              padding: "1.8rem 1.4rem", borderRadius: 12, textAlign: "center",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
              transition: "background 0.2s",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
            <h4 style={{ fontSize: "0.95rem", color: "#fff", marginBottom: "0.5rem" }}>{item.title}</h4>
            <p style={{ fontSize: "0.82rem", color: "#7A8FA8", lineHeight: 1.6 }}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
