import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PLUTUS Integrated Services & Resources Ltd | Cloud & AI Partner",
  description:
    "Your Cloud & AI partner — rooted in Nigeria, serving the world. AWS infrastructure, intelligent automation, cloud cost optimization, and DevOps for institutions and enterprises.",
  keywords: ["AWS", "cloud solutions", "AI automation", "Nigeria", "IT consultancy", "DevOps", "FinOps", "Abuja"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
