"use client";
import { motion } from "framer-motion";
import { Cloud, TrendingDown, Bot, Infinity as InfinityIcon, Cpu, Compass, type LucideIcon } from "lucide-react";
import { services } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  Cloud, TrendingDown, Bot, Infinity: InfinityIcon, Cpu, Compass,
};

export default function Services() {
  return (
    <section id="services" style={{ padding: "7rem 6%", background: "var(--paper)" }}>
      <SectionHeader
        tag="What We Do"
        title="Comprehensive IT Services<br/>Built for Scale"
        subtitle="From cloud architecture to AI automation — everything your organization needs to modernize with confidence."
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.25rem",
      }}>
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Cloud;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderRadius: 16, padding: "2.2rem",
                position: "relative", overflow: "hidden",
                cursor: "default",
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
              <div style={{
                width: 52, height: 52, borderRadius: 13, marginBottom: "1.5rem",
                background: "var(--red-soft)", border: "1px solid var(--red-line)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--red)",
              }}>
                <Icon size={24} strokeWidth={1.6} />
              </div>

              <h3 style={{ fontSize: "1.08rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.7rem" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--body)", lineHeight: 1.7 }}>{service.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "1.3rem" }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.72rem", padding: "0.28rem 0.7rem", borderRadius: 6,
                      background: "var(--paper-2)", border: "1px solid var(--line-soft)",
                      color: "var(--muted)", fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
