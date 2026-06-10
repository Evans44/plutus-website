"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
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
          background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          aria-label="PLUTUS Integrated Services & Resources Ltd — home"
        >
          <Image
            src="/plutus-logo.png"
            alt="PLUTUS Integrated Services & Resources Ltd"
            width={150}
            height={60}
            priority
            style={{ height: 56, width: "auto", display: "block" }}
          />
        </a>

        {/* Desktop Links */}
        <ul style={{ gap: "2.2rem", listStyle: "none", margin: 0, padding: 0 }}
          className="hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "var(--body)", fontSize: "0.9rem",
                  fontWeight: 500, letterSpacing: "0.01em", transition: "color 0.2s",
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--red)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--body)")}
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
            background: "var(--red)", color: "white",
            padding: "0.6rem 1.4rem", borderRadius: 8, border: "none",
            fontSize: "0.86rem", fontWeight: 600,
            letterSpacing: "0.01em", cursor: "pointer",
            transition: "background 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--red-light)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--red)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Get in Touch →
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "var(--ink)", cursor: "pointer", padding: 4 }}
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
              position: "fixed", top: 90, left: 0, right: 0, zIndex: 99,
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--line)",
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
                  color: "var(--ink)", fontSize: "1rem",
                  fontWeight: 500, textAlign: "left", padding: "0.3rem 0",
                  borderBottom: "1px solid var(--line-soft)",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              style={{
                background: "var(--red)", color: "white",
                padding: "0.75rem", borderRadius: 8, border: "none",
                fontWeight: 600, cursor: "pointer",
                fontSize: "0.92rem", marginTop: "0.3rem",
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
