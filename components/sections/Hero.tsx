"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { stats } from "@/lib/data";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "9rem 6% 5rem",
        position: "relative",
        overflow: "hidden",
        background: "var(--paper)",
      }}
    >
      {/* Soft brand wash */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 70% 55% at 78% 35%, rgba(192,57,43,0.06) 0%, transparent 70%)",
      }} />
      {/* Faint grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(17,19,21,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(17,19,21,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 75% 75% at 40% 45%, black, transparent)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 40% 45%, black, transparent)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.55rem",
            background: "var(--red-soft)", border: "1px solid var(--red-line)",
            color: "var(--red)", padding: "0.4rem 1rem", borderRadius: 50,
            fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em",
            textTransform: "uppercase", marginBottom: "2rem",
          }}
        >
          <span style={{ fontSize: "0.45rem" }}>●</span>
          Cloud &amp; AI Partner · RC: 6865982
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          style={{
            fontSize: "clamp(2.7rem, 6vw, 4.8rem)",
            fontWeight: 800,
            lineHeight: 1.04,
            color: "var(--ink)",
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          Your Cloud &amp; AI Partner —<br />
          <span style={{ color: "var(--red)" }}>rooted in Nigeria,</span>
          <br />serving the world.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          style={{
            fontSize: "1.1rem", lineHeight: 1.75, color: "var(--body)",
            maxWidth: 580, marginBottom: "2.6rem", fontWeight: 400,
          }}
        >
          PLUTUS helps public-sector institutions and enterprises — across Nigeria, Africa,
          and beyond — modernize through AWS infrastructure, intelligent automation, and
          cloud cost optimization. Globally certified, locally grounded.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <button
            onClick={() => scrollTo("#services")}
            style={{
              background: "var(--red)", color: "white",
              padding: "0.9rem 2rem", borderRadius: 8, border: "none",
              fontWeight: 600, fontSize: "0.95rem",
              cursor: "pointer", transition: "all 0.2s",
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--red-light)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 30px rgba(192,57,43,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--red)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Explore Services <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("#products")}
            style={{
              border: "1px solid var(--line)", color: "var(--ink)",
              padding: "0.9rem 2rem", borderRadius: 8, background: "transparent",
              fontWeight: 600, fontSize: "0.95rem",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--paper-2)";
              e.currentTarget.style.borderColor = "rgba(17,19,21,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--line)";
            }}
          >
            View Products
          </button>
        </motion.div>
      </div>

      {/* Stats — right side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{
          position: "absolute", right: "6%", bottom: "12%", zIndex: 1,
          flexDirection: "column", gap: "1rem",
        }}
        className="hidden lg:flex"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            style={{
              background: "var(--paper)",
              border: "1px solid var(--line)",
              boxShadow: "0 10px 30px rgba(17,19,21,0.05)",
              borderRadius: 14, padding: "1.3rem 1.9rem", textAlign: "right",
            }}
          >
            <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--ink)", lineHeight: 1, letterSpacing: "-0.02em" }}>
              {stat.value}
              <span style={{ fontSize: "1.1rem", color: "var(--red)" }}>{stat.unit}</span>
            </div>
            <div style={{ fontSize: "0.74rem", color: "var(--muted)", marginTop: "0.4rem", letterSpacing: "0.02em" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
