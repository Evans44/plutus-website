# PLUTUS Integrated Services & Resources Ltd — Company Website

Built with **Next.js 16 + TypeScript + Tailwind CSS + Framer Motion**.
Light, Shiro-inspired design in the Plutus palette (**brick red · white · black**), with the
**PIA** chat assistant embedded.

## 🚀 Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
npm run start      # serve production build
```

## 📂 Project Structure

```
plutus-website/
├── app/
│   ├── layout.tsx        # Root layout + metadata/SEO + Inter font
│   ├── page.tsx          # Main page (assembles sections + <AskPIA/>)
│   └── globals.css       # Design tokens (light theme) + base styles
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile menu
│   ├── Footer.tsx         # Black footer with links
│   ├── AskPIA.tsx         # ★ Bespoke PIA chat widget (launcher + panel)
│   ├── ui/
│   │   └── SectionHeader.tsx   # Reusable animated heading
│   └── sections/
│       ├── Hero.tsx        # Landing hero with stats
│       ├── About.tsx       # Company story + values + Vision/Mission
│       ├── Services.tsx    # 6 service cards (lucide icons)
│       ├── Products.tsx    # 6 AI product cards (incl. Outreach Engine)
│       ├── WhyUs.tsx       # Differentiators grid
│       └── Contact.tsx     # Contact info + "Chat with PIA" CTA (no form)
└── lib/
    └── data.ts             # All site content (TypeScript typed)
```

## 🤖 PIA chat widget

`components/AskPIA.tsx` is a custom launcher + chat panel that POSTs to the live PIA agent
(an n8n Chat Trigger webhook) on the Plutus VPS. Any CTA on the page can open it by
dispatching a `pia:open` window event (used by the Products cards and the Contact section).

- **Endpoint:** set `NEXT_PUBLIC_PIA_CHAT_URL` (see `.env.example`); falls back to the VPS URL.
- **CORS:** PIA's `allowedOrigins` permits only `https://plutusintegrated.com`. The chat
  round-trip therefore works **in production on that domain**. On a `*.vercel.app` preview the
  call is blocked until that preview origin is temporarily whitelisted on the VPS.

## ✏️ Updating Content
All text, services, and products live in **`lib/data.ts`** — edit there and everything updates.
Service / value / why-us icons are **lucide-react** icon names (e.g. `"Cloud"`, `"Bot"`).

## 🌐 Deployment — Vercel
1. Push this folder to GitHub.
2. vercel.com → Import repo → Deploy.
3. Point the custom domain **plutusintegrated.com** (apex) at the deployment so the PIA chat's
   CORS origin matches.
