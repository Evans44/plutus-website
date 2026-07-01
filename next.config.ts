import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // GA4 showed visitors landing on "/privacy." (trailing dot) — a sentence-ending
      // period swept into a linkified URL. The path 404s; recover those visitors.
      { source: "/privacy.", destination: "/privacy", permanent: true },
    ];
  },
};

export default nextConfig;