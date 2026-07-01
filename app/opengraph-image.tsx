import { ImageResponse } from "next/og";

// Branded 1200×630 social-share card. Next serves it at /opengraph-image and
// auto-wires the og:image meta tag (twitter-image.tsx re-exports this for X).
// Edit copy/colours here; rebuild to regenerate.
export const alt = "PLUTUS Integrated Services & Resources Ltd — Your Cloud & AI Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette (mirrors app/globals.css)
const RED = "#C0392B";
const INK = "#111315";
const BODY = "#4A4F57";
const MUTED = "#8A9099";
const PAPER = "#FFFFFF";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          background: PAPER,
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand accent bar */}
        <div style={{ display: "flex", width: 20, height: "100%", background: RED }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "70px 80px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
              color: RED,
              textTransform: "uppercase",
            }}
          >
            PLUTUS Integrated Services &amp; Resources
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 88,
              fontWeight: 800,
              color: INK,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Your Cloud &amp; AI Partner
          </div>

          {/* Red underline */}
          <div style={{ display: "flex", marginTop: 28, width: 180, height: 8, background: RED, borderRadius: 4 }} />

          {/* Tagline */}
          <div style={{ display: "flex", marginTop: 28, fontSize: 38, fontWeight: 500, color: BODY }}>
            Rooted in Nigeria, serving the world.
          </div>

          {/* Footer row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 56,
              fontSize: 28,
              color: MUTED,
            }}
          >
            <div style={{ display: "flex", color: INK, fontWeight: 700 }}>plutusintegrated.com</div>
            <div style={{ display: "flex", margin: "0 16px" }}>•</div>
            <div style={{ display: "flex" }}>AWS · Automation · FinOps · DevOps</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
