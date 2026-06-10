"use client";
import { motion } from "framer-motion";
import { Award, Landmark, TrendingUp, Shield, type LucideIcon } from "lucide-react";
import { whyUs } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, LucideIcon> = { Award, Landmark, TrendingUp, Shield };

export default function WhyUs() {
  return (
    <section style={{ padding: "7rem 6%", background: "var(--paper)" }}>
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
        {whyUs.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Award;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(17,19,21,0.07)" }}
              style={{
                padding: "2rem 1.6rem", borderRadius: 14, textAlign: "center",
                background: "var(--paper)",
                border: "1px solid var(--line)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 13, margin: "0 auto 1.1rem",
                background: "var(--red-soft)", border: "1px solid var(--red-line)",
                display: "flex", alignItems: "center", justifyContent: "center", color: "var(--red)",
              }}>
                <Icon size={24} strokeWidth={1.6} />
              </div>
              <h4 style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.5rem" }}>{item.title}</h4>
              <p style={{ fontSize: "0.84rem", color: "var(--body)", lineHeight: 1.6 }}>{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
