"use client";

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
  ],
};

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      background: "#080B10",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "3rem 6% 2rem",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "3rem",
        paddingBottom: "2.5rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        marginBottom: "2rem",
      }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1rem" }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8, background: "#C0392B",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "white", fontSize: "0.95rem",
            }}>P</div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>PLUTUS</div>
              <div style={{ fontSize: "0.58rem", color: "#7A8FA8", letterSpacing: "0.07em", textTransform: "uppercase" }}>
                Integrated Services & Resources
              </div>
            </div>
          </div>
          <p style={{ fontSize: "0.84rem", color: "#7A8FA8", lineHeight: 1.7, maxWidth: 280 }}>
            Nigeria&apos;s leading cloud solutions and IT modernization consultancy.
            AWS-powered. Locally grounded. Outcome-focused.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 style={{
              fontSize: "0.78rem", textTransform: "uppercase",
              letterSpacing: "0.08em", color: "#fff", marginBottom: "1.2rem",
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
                      fontSize: "0.84rem", color: "#7A8FA8", padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E8EEF6")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8FA8")}
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
        <p style={{ fontSize: "0.78rem", color: "#7A8FA8" }}>
          © {new Date().getFullYear()} PLUTUS Integrated Services & Resources Ltd. All rights reserved.
        </p>
        <span style={{
          fontSize: "0.73rem", color: "#7A8FA8",
          background: "rgba(255,255,255,0.04)", padding: "0.28rem 0.75rem", borderRadius: 4,
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
