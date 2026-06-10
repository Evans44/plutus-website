"use client";
import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Target, Handshake, type LucideIcon } from "lucide-react";
import { coreValues } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, LucideIcon> = { Rocket, ShieldCheck, Target, Handshake };

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "7rem 6%", background: "var(--paper-2)" }}
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
            title="Cloud-Native Expertise.<br/>Global Reach, Nigerian Roots."
            subtitle="We are a cloud solutions and IT modernization consultancy rooted in Nigeria and serving clients worldwide — blending internationally recognized AWS certifications with deep regional regulatory insight."
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {coreValues.map((v, i) => {
              const Icon = iconMap[v.icon] ?? Rocket;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: "1rem",
                    padding: "1.1rem", borderRadius: 12,
                    background: "var(--paper)",
                    border: "1px solid var(--line)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  whileHover={{ boxShadow: "0 12px 30px rgba(17,19,21,0.06)" }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: "var(--red-soft)", border: "1px solid var(--red-line)",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "var(--red)",
                  }}>
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.25rem" }}>{v.title}</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--body)", lineHeight: 1.6 }}>{v.description}</p>
                  </div>
                </motion.div>
              );
            })}
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
              background: "var(--paper)", border: "1px solid var(--line)",
              borderRadius: 18, padding: "2.6rem", position: "relative", overflow: "hidden",
              boxShadow: "0 16px 40px rgba(17,19,21,0.05)",
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: "var(--red)",
            }} />
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.9rem" }}>Our Vision</h3>
            <p style={{ fontSize: "0.92rem", color: "var(--body)", lineHeight: 1.75 }}>
              To be a leading catalyst for digital transformation — enabling institutions in Nigeria,
              across Africa, and internationally to thrive in a cloud-first, AI-powered future.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "1.6rem" }}>
              {["AWS Certified", "NDPR Compliant", "ISO 27001-Aligned", "FinOps", "DevOps"].map((b) => (
                <span
                  key={b}
                  style={{
                    background: "var(--red-soft)",
                    border: "1px solid var(--red-line)",
                    color: "var(--red)",
                    padding: "0.3rem 0.85rem", borderRadius: 50,
                    fontSize: "0.72rem", fontWeight: 600,
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
              padding: "1.7rem", borderRadius: 14,
              background: "var(--paper)",
              border: "1px solid var(--line)",
            }}
          >
            <p style={{ fontSize: "0.9rem", color: "var(--body)", lineHeight: 1.75 }}>
              <strong style={{ color: "var(--ink)", fontWeight: 700 }}>Mission: </strong>
              To empower organizations — in Nigeria and around the world — with intelligent cloud
              solutions and automation technologies that drive operational efficiency, reduce costs,
              and enhance service delivery through certified expertise and local insight.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
