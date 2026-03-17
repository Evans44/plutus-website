"use client";
import { motion } from "framer-motion";
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
        padding: "8rem 6% 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradients */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 65% 40%, rgba(37,99,235,0.1) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 20% 70%, rgba(192,57,43,0.09) 0%, transparent 60%)
        `,
      }} />
      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(192,57,43,0.1)", border: "1px solid rgba(192,57,43,0.28)",
            color: "#F87171", padding: "0.35rem 1rem", borderRadius: 50,
            fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.07em",
            textTransform: "uppercase", marginBottom: "1.8rem",
          }}
        >
          <span style={{ fontSize: "0.45rem" }}>●</span>
          Nigeria's Cloud & AI Partner · RC: 6865982
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            color: "#fff",
            marginBottom: "1.4rem",
          }}
        >
          Powering Nigeria&apos;s<br />
          <span style={{ color: "#E74C3C" }}>Digital Future</span>
          <br />with Cloud & AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          style={{
            fontSize: "1.05rem", lineHeight: 1.75, color: "#7A8FA8",
            maxWidth: 560, marginBottom: "2.4rem",
          }}
        >
          PLUTUS helps public sector institutions and enterprise clients modernize
          through AWS infrastructure, intelligent automation, and cloud cost optimization —
          globally certified, locally grounded.
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
              background: "#C0392B", color: "white",
              padding: "0.85rem 2rem", borderRadius: 8, border: "none",
              fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "0.95rem",
              cursor: "pointer", transition: "all 0.2s",
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#E74C3C";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(192,57,43,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#C0392B";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Explore Services →
          </button>
          <button
            onClick={() => scrollTo("#products")}
            style={{
              border: "1px solid rgba(255,255,255,0.14)", color: "#E8EEF6",
              padding: "0.85rem 2rem", borderRadius: 8, background: "transparent",
              fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "0.95rem",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
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
          display: "flex", flexDirection: "column", gap: "1.2rem",
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
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
              borderRadius: 12, padding: "1.2rem 1.8rem", textAlign: "right",
            }}
          >
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800, color: "#fff", lineHeight: 1 }}>
              {stat.value}
              <span style={{ fontSize: "1.1rem", color: "#E74C3C" }}>{stat.unit}</span>
            </div>
            <div style={{ fontSize: "0.73rem", color: "#7A8FA8", marginTop: "0.3rem", letterSpacing: "0.04em" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
