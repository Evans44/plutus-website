import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

// GA4 Measurement ID. Public by nature (visible in page source), so it falls back
// to the live property ID — meaning analytics works on deploy without extra config.
// Override per-environment with NEXT_PUBLIC_GA_ID (e.g. unset it on preview deploys).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-N8WZSJYEEK";

export const metadata: Metadata = {
  title: "PLUTUS Integrated Services & Resources Ltd | Cloud & AI Partner",
  description:
    "Your Cloud & AI partner — rooted in Nigeria, serving the world. AWS infrastructure, intelligent automation, cloud cost optimization, and DevOps for institutions and enterprises.",
  keywords: ["AWS", "cloud solutions", "AI automation", "Nigeria", "IT consultancy", "DevOps", "FinOps", "Abuja"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <CookieConsent />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-bootstrap" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var c='denied';try{if(localStorage.getItem('plutus-cookie-consent')==='granted')c='granted';}catch(e){}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:c,wait_for_update:500});
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
