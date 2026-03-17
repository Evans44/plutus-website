"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const serviceOptions = [
  { group: "Services", options: [
    "Cloud Infrastructure (AWS)",
    "Cloud Cost Optimization",
    "Intelligent Process Automation",
    "DevOps & Infrastructure Management",
    "IT Hardware & Software Procurement",
    "Consultancy & Project Management",
  ]},
  { group: "Products", options: [
    "Order Routing & 3PL Automation Agent",
    "CRM Lead Routing System",
    "AI Real Estate Bot",
    "Production Terraform Modules",
    "Proactive Monitoring System",
  ]},
];

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8,
  color: "#E8EEF6",
  padding: "0.75rem 1rem",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle = {
  display: "block",
  fontSize: "0.75rem",
  color: "#7A8FA8",
  letterSpacing: "0.05em",
  textTransform: "uppercase" as const,
  marginBottom: "0.5rem",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const getFocusStyle = (name: string) => ({
    ...inputStyle,
    borderColor: focused === name ? "rgba(192,57,43,0.5)" : "rgba(255,255,255,0.1)",
  });

  return (
    <section id="contact" style={{ padding: "6rem 6%", background: "#0E1218" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "5rem",
        alignItems: "start",
      }}>
        {/* Info */}
        <div>
          <SectionHeader
            tag="Get in Touch"
            title="Let&apos;s Build Something<br/>Remarkable Together"
            subtitle="Ready to modernize your infrastructure, automate your workflows, or explore our AI products? Our team is standing by to help you take the next step."
          />

          {[
            {
              Icon: MapPin,
              title: "Address",
              content: "House 11, 69 Road, Opposite The Hub Stores,\nGwarinpa, FCT – Abuja, Nigeria",
            },
            { Icon: Phone, title: "Phone", content: "+234 802 681 0696" },
            { Icon: Mail, title: "Email", content: "plutusintegratedservices@gmail.com" },
          ].map(({ Icon, title, content }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.4rem" }}
            >
              <div style={{
                width: 40, height: 40, background: "rgba(192,57,43,0.1)",
                border: "1px solid rgba(192,57,43,0.2)", borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon size={16} color="#E74C3C" />
              </div>
              <div>
                <div style={{ fontSize: "0.75rem", color: "#7A8FA8", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.25rem" }}>
                  {title}
                </div>
                <div style={{ fontSize: "0.92rem", color: "#E8EEF6", lineHeight: 1.5, whiteSpace: "pre-line" }}>
                  {content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: "#080B10",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 16, padding: "2.5rem",
          }}
        >
          <h3 style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "1.5rem" }}>Send us a message</h3>

          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {["firstName", "lastName"].map((name, i) => (
                <div key={name} style={{ marginBottom: "0" }}>
                  <label style={labelStyle}>{i === 0 ? "First Name" : "Last Name"}</label>
                  <input
                    type="text"
                    placeholder={i === 0 ? "John" : "Doe"}
                    style={getFocusStyle(name)}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.1rem" }}>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                placeholder="you@company.com"
                style={getFocusStyle("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                required
              />
            </div>

            <div style={{ marginTop: "1.1rem" }}>
              <label style={labelStyle}>Interested In</label>
              <select
                style={{ ...getFocusStyle("service"), appearance: "none" as const }}
                onFocus={() => setFocused("service")}
                onBlur={() => setFocused(null)}
              >
                <option value="">Select a service or product...</option>
                {serviceOptions.map((group) => (
                  <optgroup key={group.group} label={group.group}>
                    {group.options.map((opt) => (
                      <option key={opt} value={opt} style={{ background: "#0E1218" }}>{opt}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div style={{ marginTop: "1.1rem" }}>
              <label style={labelStyle}>Message</label>
              <textarea
                placeholder="Tell us about your project or requirements..."
                style={{ ...getFocusStyle("message"), resize: "vertical", minHeight: 100 }}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%", marginTop: "1.2rem",
                padding: "0.9rem",
                background: submitted ? "#16a34a" : "#C0392B",
                color: "white", border: "none", borderRadius: 8,
                fontFamily: "'Syne', sans-serif", fontSize: "0.95rem", fontWeight: 600,
                cursor: "pointer", transition: "background 0.25s, transform 0.15s",
              }}
              onMouseEnter={(e) => { if (!submitted) { e.currentTarget.style.background = "#E74C3C"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
              onMouseLeave={(e) => { if (!submitted) { e.currentTarget.style.background = "#C0392B"; e.currentTarget.style.transform = "translateY(0)"; } }}
            >
              {submitted ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
