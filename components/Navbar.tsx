"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.1rem 6%",
          background: scrolled ? "rgba(8,11,16,0.98)" : "rgba(8,11,16,0.8)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "background 0.3s",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          style={{ display: "flex", alignItems: "center", gap: "0.7rem", textDecoration: "none" }}
        >
          <div style={{
            width: 38, height: 38, borderRadius: 8,
            background: "#C0392B",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "1rem", color: "white",
          }}>P</div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>
              PLUTUS
            </div>
            <div style={{ fontSize: "0.6rem", color: "#7A8FA8", letterSpacing: "0.07em", textTransform: "uppercase" }}>
              Integrated Services & Resources
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul style={{ display: "flex", gap: "2.2rem", listStyle: "none", margin: 0, padding: 0 }}
          className="hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "#7A8FA8", fontSize: "0.88rem", fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400, letterSpacing: "0.02em", transition: "color 0.2s",
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8FA8")}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNav("#contact")}
          className="hidden md:block"
          style={{
            background: "#C0392B", color: "white",
            padding: "0.55rem 1.4rem", borderRadius: 6, border: "none",
            fontFamily: "'Syne', sans-serif", fontSize: "0.85rem", fontWeight: 600,
            letterSpacing: "0.03em", cursor: "pointer",
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#E74C3C"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#C0392B"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Get in Touch →
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "#E8EEF6", cursor: "pointer", padding: 4 }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", top: 65, left: 0, right: 0, zIndex: 99,
              background: "rgba(8,11,16,0.98)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "1.5rem 6%",
              display: "flex", flexDirection: "column", gap: "1.2rem",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "#E8EEF6", fontSize: "1rem", fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400, textAlign: "left", padding: "0.3rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              style={{
                background: "#C0392B", color: "white",
                padding: "0.7rem", borderRadius: 6, border: "none",
                fontFamily: "'Syne', sans-serif", fontWeight: 600, cursor: "pointer",
                fontSize: "0.9rem", marginTop: "0.3rem",
              }}
            >
              Get in Touch →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
