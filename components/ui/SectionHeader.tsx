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
          display: "inline-block",
          color: "#E74C3C",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "0.6rem",
        }}
      >
        {tag}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.15,
          marginBottom: "0.9rem",
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
            fontSize: "1rem",
            color: "#7A8FA8",
            lineHeight: 1.7,
            maxWidth: center ? "560px" : "600px",
            margin: center ? "0 auto 3rem" : "0 0 3rem",
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
