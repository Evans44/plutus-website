"use client";
import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Target, Handshake, type LucideIcon } from "lucide-react";
import { coreValues } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, LucideIcon> = { Rocket, ShieldCheck, Target, Handshake };

const badges = ["AWS Certified", "NDPR Compliant", "ISO 27001-Aligned", "FinOps", "DevOps"];

export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 6%", background: "var(--paper-2)" }}>
      {/* Centered intro */}
      <div style={{ maxWidth: 760, margin: "0 auto 3.5rem", textAlign: "center" }}>
        <SectionHeader
          tag="Who We Are"
          title="Cloud-Native Expertise.<br/>Global Reach, Nigerian Roots."
          subtitle="We are a cloud solutions and IT modernization consultancy rooted in Nigeria and serving clients worldwide — blending internationally recognized AWS certifications with deep regional regulatory insight."
          center
        />
      </div>

      {/* Vision + Mission — two equal cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "1.25rem",
        maxWidth: 1100,
        margin: "0 auto 1.25rem",
      }}>
        {[
          {
            title: "Our Vision",
            body: "To be a leading catalyst for digital transformation — enabling institutions in Nigeria, across Africa, and internationally to thrive in a cloud-first, AI-powered future.",
            showBadges: true,
          },
          {
            title: "Our Mission",
            body: "To empower organizations — in Nigeria and around the world — with intelligent cloud solutions and automation technologies that drive operational efficiency, reduce costs, and enhance service delivery through certified expertise and local insight.",
            showBadges: false,
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            style={{
              background: "var(--paper)",
              border: "1px solid var(--line)",
              borderRadius: 18,
              padding: "2.6rem",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 16px 40px rgba(17,19,21,0.05)",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--red)" }} />
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.9rem" }}>
              {card.title}
            </h3>
            <p style={{ fontSize: "0.94rem", color: "var(--body)", lineHeight: 1.75 }}>{card.body}</p>
            {card.showBadges && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "1.6rem" }}>
                {badges.map((b) => (
                  <span
                    key={b}
                    style={{
                      background: "var(--red-soft)",
                      border: "1px solid var(--red-line)",
                      color: "var(--red)",
                      padding: "0.3rem 0.85rem",
                      borderRadius: 50,
                      fontSize: "0.72rem",
                      fontWeight: 600,
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Core values — single even row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: "1.25rem",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {coreValues.map((v, i) => {
          const Icon = iconMap[v.icon] ?? Rocket;
          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(17,19,21,0.07)" }}
              style={{
                padding: "2rem 1.6rem",
                borderRadius: 14,
                textAlign: "center",
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
              <h4 style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.5rem" }}>{v.title}</h4>
              <p style={{ fontSize: "0.84rem", color: "var(--body)", lineHeight: 1.6 }}>{v.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
