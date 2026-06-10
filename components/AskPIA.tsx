"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

/**
 * PIA — Plutus Intelligent Assistant chat widget.
 * Bespoke launcher + panel that POSTs to the n8n Chat Trigger webhook.
 *
 * The endpoint is the LIVE PIA agent on the Plutus VPS. CORS is gated by the
 * agent's `allowedOrigins` (currently https://plutusintegrated.com), so the
 * round-trip only succeeds when the site is served from that origin (i.e. in
 * production). Override at build time with NEXT_PUBLIC_PIA_CHAT_URL if needed.
 */
const CHAT_URL =
  process.env.NEXT_PUBLIC_PIA_CHAT_URL ??
  "https://automations.plutusintegrated.com/webhook/9a61995b-6eaf-46de-8071-ad5a5d60dc45/chat";

interface ChatMessage {
  role: "user" | "bot";
  text: string;
}

const GREETING =
  "Hi, I'm PIA — the Plutus Intelligent Assistant. Ask me about our cloud & AI services and products, or tell me about your project and I'll capture your details and connect you with the right specialist.";

export default function AskPIA() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const sessionId = useRef<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lazily mint a session id (client only).
  if (!sessionId.current && typeof window !== "undefined") {
    sessionId.current =
      window.crypto?.randomUUID?.() ?? `pia-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  // Open via any CTA across the page ("pia:open").
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("pia:open", handler);
    return () => window.removeEventListener("pia:open", handler);
  }, []);

  // Auto-scroll to the latest message.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId: sessionId.current,
          chatInput: text,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json().catch(() => ({}));
      const reply =
        data.output ?? data.text ?? data.message ?? data.response ??
        "Sorry — I didn't catch that. Could you rephrase?";
      setMessages((m) => [...m, { role: "bot", text: String(reply) }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text:
            "I'm having trouble connecting right now. Please email us at info@plutusintegrated.com or call +234 802 681 0696 and we'll get right back to you.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with PIA"}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 1000,
          width: 60, height: 60, borderRadius: "50%", border: "none", cursor: "pointer",
          background: "var(--red)", color: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 10px 30px rgba(192,57,43,0.4)",
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={26} />
            </motion.span>
          ) : (
            <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={26} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "fixed", bottom: 100, right: 24, zIndex: 1000,
              width: "min(384px, calc(100vw - 32px))",
              height: "min(560px, calc(100vh - 140px))",
              background: "var(--paper)",
              borderRadius: 18, overflow: "hidden",
              border: "1px solid var(--line)",
              boxShadow: "0 30px 70px rgba(17,19,21,0.22)",
              display: "flex", flexDirection: "column",
            }}
          >
            {/* Header */}
            <div style={{
              background: "var(--ink)", padding: "1.1rem 1.3rem",
              display: "flex", alignItems: "center", gap: "0.8rem",
              position: "relative", overflow: "hidden", flexShrink: 0,
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(ellipse 70% 100% at 90% 0%, rgba(231,76,60,0.28) 0%, transparent 70%)",
              }} />
              <div style={{
                position: "relative", width: 40, height: 40, borderRadius: 11, flexShrink: 0,
                background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", color: "white",
              }}>
                <Sparkles size={20} strokeWidth={1.8} />
              </div>
              <div style={{ position: "relative" }}>
                <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>PIA</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>Plutus Intelligent Assistant</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  position: "relative", marginLeft: "auto", background: "rgba(255,255,255,0.1)",
                  border: "none", borderRadius: 8, width: 30, height: 30, cursor: "pointer",
                  color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} style={{
              flex: 1, overflowY: "auto", padding: "1.2rem",
              display: "flex", flexDirection: "column", gap: "0.8rem",
              background: "var(--paper-2)",
            }}>
              {messages.map((m, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                    maxWidth: "85%",
                    background: m.role === "user" ? "var(--red)" : "var(--paper)",
                    color: m.role === "user" ? "#fff" : "var(--ink)",
                    border: m.role === "user" ? "none" : "1px solid var(--line)",
                    borderRadius: 14,
                    borderBottomRightRadius: m.role === "user" ? 4 : 14,
                    borderBottomLeftRadius: m.role === "bot" ? 4 : 14,
                    padding: "0.7rem 0.95rem",
                    fontSize: "0.88rem", lineHeight: 1.55,
                    whiteSpace: "pre-wrap", wordBreak: "break-word",
                  }}
                >
                  {m.text}
                </div>
              ))}
              {loading && (
                <div style={{
                  alignSelf: "flex-start", display: "flex", gap: 4, padding: "0.8rem 0.95rem",
                  background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 14, borderBottomLeftRadius: 4,
                }}>
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                      transition={{ duration: 1, repeat: Infinity, delay: d * 0.18 }}
                      style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--muted)", display: "inline-block" }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div style={{
              padding: "0.8rem", borderTop: "1px solid var(--line)", background: "var(--paper)",
              display: "flex", gap: "0.6rem", alignItems: "flex-end", flexShrink: 0,
            }}>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type your message…"
                rows={1}
                style={{
                  flex: 1, resize: "none", maxHeight: 120,
                  background: "var(--paper-2)", border: "1px solid var(--line)", borderRadius: 12,
                  padding: "0.7rem 0.9rem", fontSize: "0.88rem", color: "var(--ink)",
                  outline: "none", fontFamily: "inherit", lineHeight: 1.4,
                }}
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="Send"
                style={{
                  width: 42, height: 42, borderRadius: 11, border: "none", flexShrink: 0,
                  background: input.trim() && !loading ? "var(--red)" : "var(--line)",
                  color: input.trim() && !loading ? "#fff" : "var(--muted)",
                  cursor: input.trim() && !loading ? "pointer" : "default",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.2s",
                }}
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
