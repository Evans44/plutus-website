"use client";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Services() {
  return (
    <section id="services" style={{ padding: "6rem 6%", background: "#080B10" }}>
      <SectionHeader
        tag="What We Do"
        title="Comprehensive IT Services<br/>Built for Scale"
        subtitle="From cloud architecture to AI automation — everything your organization needs to modernize with confidence."
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem",
      }}>
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            whileHover={{ y: -4, borderColor: "rgba(192,57,43,0.3)" }}
            style={{
              background: "#141922",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 14, padding: "2rem",
              position: "relative", overflow: "hidden",
              cursor: "default",
              transition: "border-color 0.25s, box-shadow 0.25s",
            }}
          >
            {/* Bottom gradient line on hover handled by framer */}
            <div
              style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
                background: "linear-gradient(90deg, #C0392B, #2563EB)",
                transform: "scaleX(0)", transformOrigin: "left",
                transition: "transform 0.3s",
              }}
              className="service-line"
            />

            <div style={{
              width: 50, height: 50, borderRadius: 12, marginBottom: "1.4rem",
              background: "rgba(192,57,43,0.08)", border: "1px solid rgba(192,57,43,0.18)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem",
            }}>
              {service.icon}
            </div>

            <h3 style={{ fontSize: "1rem", color: "#fff", marginBottom: "0.8rem" }}>{service.title}</h3>
            <p style={{ fontSize: "0.84rem", color: "#7A8FA8", lineHeight: 1.65 }}>{service.description}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1.2rem" }}>
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.7rem", padding: "0.25rem 0.65rem", borderRadius: 4,
                    background: "rgba(255,255,255,0.04)", color: "#7A8FA8",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
