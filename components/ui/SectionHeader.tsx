"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ tag, title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--red)",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        <span style={{ width: 24, height: 1.5, background: "var(--red)", display: center ? "none" : "inline-block" }} />
        {tag}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)",
          fontWeight: 700,
          color: "var(--ink)",
          lineHeight: 1.12,
          marginBottom: "1.1rem",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: "1.02rem",
            color: "var(--body)",
            lineHeight: 1.7,
            fontWeight: 400,
            maxWidth: center ? "580px" : "620px",
            margin: center ? "0 auto 3rem" : "0 0 3rem",
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
