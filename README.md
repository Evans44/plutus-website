# PLUTUS Integrated Services & Resources Ltd — Company Website

Built with **Next.js 15 + TypeScript + Tailwind CSS + Framer Motion**.

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
│   ├── layout.tsx        # Root layout + metadata/SEO
│   ├── page.tsx          # Main page (assembles sections)
│   └── globals.css       # Design tokens + base styles
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile menu
│   ├── Footer.tsx         # Footer with links
│   ├── ui/
│   │   └── SectionHeader.tsx   # Reusable animated heading
│   └── sections/
│       ├── Hero.tsx        # Landing hero with stats
│       ├── About.tsx       # Company story + values
│       ├── Services.tsx    # 6 service cards
│       ├── Products.tsx    # 5 AI product cards
│       ├── WhyUs.tsx       # Differentiators grid
│       └── Contact.tsx     # Contact info + form
└── lib/
    └── data.ts             # All site content (TypeScript typed)
```

## 🌐 Free Deployment Options

### Option 1 — Vercel (Recommended, 1 click)
1. Push to GitHub
2. Go to vercel.com → Import repo
3. Click Deploy — done. Free custom domain included.

### Option 2 — Netlify
1. `npm run build` → produces `out/` folder (add `output: 'export'` to next.config.ts first)
2. Drag & drop to netlify.com/drop

### Option 3 — GitHub Pages
Add to `next.config.ts`:
```ts
output: 'export',
basePath: '/your-repo-name',
```
Then push to `gh-pages` branch.

## ✏️ Updating Content
All text, services, and products live in **`lib/data.ts`** — edit there and everything updates automatically.
