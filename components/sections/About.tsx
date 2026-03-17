"use client";
import { motion } from "framer-motion";
import { coreValues } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "6rem 6%", background: "#0E1218" }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "5rem",
        alignItems: "center",
      }}>
        {/* Left */}
        <div>
          <SectionHeader
            tag="Who We Are"
            title="Cloud-Native Expertise.<br/>Nigerian Insight."
            subtitle="We are a Nigerian-based cloud solutions and IT modernization consultancy, blending internationally recognized AWS certifications with a deep understanding of Nigeria's regulatory landscape."
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                style={{
                  display: "flex", alignItems: "flex-start", gap: "1rem",
                  padding: "1rem", borderRadius: 10,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  transition: "background 0.2s",
                }}
                whileHover={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                  background: "rgba(192,57,43,0.1)", border: "1px solid rgba(192,57,43,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem",
                }}>
                  {v.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: "0.92rem", color: "#fff", marginBottom: "0.2rem" }}>{v.title}</h4>
                  <p style={{ fontSize: "0.82rem", color: "#7A8FA8", lineHeight: 1.55 }}>{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              background: "#141922", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: "2.5rem", position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: "linear-gradient(90deg, #C0392B, #2563EB)",
            }} />
            <h3 style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "0.9rem" }}>Our Vision</h3>
            <p style={{ fontSize: "0.9rem", color: "#7A8FA8", lineHeight: 1.7 }}>
              To be Nigeria&apos;s leading catalyst for digital transformation, enabling public and
              private sector institutions to thrive in a cloud-first, AI-powered future.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "1.5rem" }}>
              {["AWS Certified", "NDPR Compliant", "ISO 27001", "FinOps", "DevOps"].map((b, i) => (
                <span
                  key={b}
                  style={{
                    background: i < 2 ? "rgba(37,99,235,0.1)" : "rgba(192,57,43,0.1)",
                    border: `1px solid ${i < 2 ? "rgba(37,99,235,0.25)" : "rgba(192,57,43,0.3)"}`,
                    color: i < 2 ? "#93C5FD" : "#FCA5A5",
                    padding: "0.28rem 0.85rem", borderRadius: 50,
                    fontSize: "0.72rem", fontWeight: 500,
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{
              padding: "1.6rem", borderRadius: 12,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p style={{ fontSize: "0.88rem", color: "#7A8FA8", lineHeight: 1.75 }}>
              <strong style={{ color: "#E8EEF6" }}>Mission: </strong>
              To empower Nigerian organizations with intelligent cloud solutions and automation
              technologies that drive operational efficiency, reduce costs, and enhance service
              delivery through certified expertise and local insight.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
