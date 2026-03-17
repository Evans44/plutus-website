import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLUTUS Integrated Services & Resources Ltd | Cloud & AI Solutions Nigeria",
  description: "Nigeria's leading cloud solutions and IT modernization consultancy. AWS infrastructure, intelligent automation, cloud cost optimization, and DevOps.",
  keywords: ["AWS", "cloud solutions", "Nigeria", "IT consultancy", "automation", "DevOps", "Abuja"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
