"use client";
import Image from "next/image";

const footerLinks = {
  Services: [
    "Cloud Infrastructure",
    "Cost Optimization",
    "Process Automation",
    "DevOps Management",
    "IT Procurement",
    "Consultancy",
  ],
  Products: [
    "Order Routing Agent",
    "CRM Lead Router",
    "AI Real Estate Bot",
    "Terraform Modules",
    "Monitoring System",
    "Outreach Engine",
  ],
};

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      background: "var(--ink)",
      borderTop: "3px solid var(--red)",
      padding: "3.5rem 6% 2rem",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "3rem",
        paddingBottom: "2.5rem",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        marginBottom: "2rem",
      }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: "1.3rem" }}>
            <span style={{
              display: "inline-flex", background: "#fff",
              borderRadius: 12, padding: "0.7rem 1rem",
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            }}>
              <Image
                src="/plutus-logo.png"
                alt="PLUTUS Integrated Services & Resources Ltd"
                width={150}
                height={60}
                style={{ height: 50, width: "auto", display: "block" }}
              />
            </span>
          </div>
          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 300 }}>
            A cloud solutions and IT modernization consultancy — rooted in Nigeria, serving the world.
            AWS-powered. Outcome-focused.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 style={{
              fontSize: "0.76rem", textTransform: "uppercase",
              letterSpacing: "0.08em", color: "#fff", marginBottom: "1.2rem", fontWeight: 700,
            }}>
              {heading}
            </h4>
            <ul style={{ listStyle: "none" }}>
              {links.map((link) => (
                <li key={link} style={{ marginBottom: "0.7rem" }}>
                  <button
                    onClick={() => scrollTo(`#${heading.toLowerCase()}`)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: "0.84rem", color: "rgba(255,255,255,0.6)", padding: 0,
                      transition: "color 0.2s", textAlign: "left",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--red-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>
          © {new Date().getFullYear()} PLUTUS Integrated Services & Resources Ltd. All rights reserved.
        </p>
        <span style={{
          fontSize: "0.73rem", color: "rgba(255,255,255,0.7)",
          background: "rgba(255,255,255,0.08)", padding: "0.3rem 0.8rem", borderRadius: 5,
        }}>
          RC: 6865982
        </span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
