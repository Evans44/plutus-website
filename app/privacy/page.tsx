import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Cookies",
  description:
    "How Plutus Integrated Services & Resources Ltd collects, uses, and protects your data, including analytics cookies and contact details.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "23 June 2026";

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "5rem 1.5rem 4rem", color: "var(--ink)", lineHeight: 1.7 }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.4rem" }}>Privacy &amp; Cookies</h1>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "2rem" }}>Last updated: {UPDATED}</p>

      <Section title="Who we are">
        Plutus Integrated Services &amp; Resources Ltd (&ldquo;Plutus&rdquo;, &ldquo;we&rdquo;) is a Cloud &amp; AI
        consultancy based at House 11, 69 Road, Opposite The Hub Stores, Gwarinpa, FCT &ndash; Abuja, Nigeria. You can
        reach us at <a href="mailto:info@plutusintegrated.com" style={linkStyle}>info@plutusintegrated.com</a>.
      </Section>

      <Section title="Analytics cookies">
        We use Google Analytics 4 to understand how visitors find and use this site (for example, pages viewed and
        traffic sources). By default these analytics cookies are <strong>off</strong> until you choose
        &ldquo;Accept&rdquo; on our cookie banner; if you decline, we collect only limited, cookieless aggregate signals.
        You can change your mind any time by clearing this site&rsquo;s data in your browser, which brings the banner back.
      </Section>

      <Section title="Information you give us">
        If you chat with PIA (our assistant) or email us, we collect the details you provide — such as your name, email,
        company, and what you&rsquo;re looking for — solely to respond and connect you with the right specialist. We do
        not sell your data.
      </Section>

      <Section title="Marketing emails">
        If you receive outreach from us, it is because we believe our services may be relevant to your business. We hold
        only your business contact details, never share them, and you can opt out at any time by replying
        &ldquo;UNSUBSCRIBE&rdquo; to any email.
      </Section>

      <Section title="Your rights">
        In line with the Nigeria Data Protection Regulation (NDPR) and comparable laws, you may request access to,
        correction of, or deletion of the personal data we hold about you. Email{" "}
        <a href="mailto:info@plutusintegrated.com" style={linkStyle}>info@plutusintegrated.com</a> and we&rsquo;ll respond.
      </Section>

      <p style={{ marginTop: "2.5rem" }}>
        <Link href="/" style={linkStyle}>&larr; Back to home</Link>
      </p>
    </main>
  );
}

const linkStyle = { color: "var(--red)", textDecoration: "underline" } as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "1.8rem" }}>
      <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem" }}>{title}</h2>
      <p style={{ margin: 0 }}>{children}</p>
    </section>
  );
}
