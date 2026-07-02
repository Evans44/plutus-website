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

const SITE_URL = "https://plutusintegrated.com";
const SITE_NAME = "PLUTUS Integrated Services & Resources Ltd";
const TITLE = `${SITE_NAME} | Cloud & AI Partner`;
const DESCRIPTION =
  "Your Cloud & AI partner — rooted in Nigeria, serving the world. AWS infrastructure, intelligent automation, cloud cost optimization, and DevOps for institutions and enterprises.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | PLUTUS Integrated Services" },
  description: DESCRIPTION,
  keywords: ["AWS", "cloud solutions", "AI automation", "Nigeria", "IT consultancy", "DevOps", "FinOps", "Abuja"],
  alternates: { canonical: "/" },
  // og:image / twitter:image are auto-wired from app/opengraph-image.tsx and
  // app/twitter-image.tsx (generated 1200×630 card) — don't list images here too.
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// sameAs binds this website to the SAME entity's other official profiles. It is the
// single strongest signal for disambiguating us from unrelated "Plutus" entities in
// Google's Knowledge Graph. Keep these pointing ONLY at profiles we actually own.
const SAME_AS: string[] = [
  "https://www.linkedin.com/company/plutus-integrated-services-ltd/",
  "https://share.google/2FLHqkzuAbB3DJDGF", // Google Business Profile (KG entity /g/11zglwcrd9)
];

// Organization structured data — makes the brand eligible for rich results /
// a knowledge panel and feeds entity recognition. Rendered server-side so
// crawlers see it in the initial HTML.
const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "Plutus Integrated Services",
  url: SITE_URL,
  logo: `${SITE_URL}/plutus-logo.png`,
  description: DESCRIPTION,
  email: "info@plutusintegrated.com",
  telephone: "+2348026810696",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House 11, 69 Road, Opposite The Hub Stores, Gwarinpa",
    addressLocality: "Abuja",
    addressRegion: "FCT",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2348026810696",
    email: "info@plutusintegrated.com",
    contactType: "customer service",
    areaServed: "NG",
    availableLanguage: ["en"],
  },
  ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
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
// Internal/test-traffic self-exclusion (CGNAT/mobile-proof, no IP needed):
// open any page with ?plutus_internal=1 to flag this browser (persists), =0 to clear.
// Flagged hits carry traffic_type=internal so GA4's Internal Traffic filter drops them.
var ti='0';try{var qs=new URLSearchParams(location.search);if(qs.has('plutus_internal')){ti=qs.get('plutus_internal')==='0'?'0':'1';localStorage.setItem('plutus-internal',ti);}else if(localStorage.getItem('plutus-internal')==='1'){ti='1';}}catch(e){}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:c,wait_for_update:500});
if(ti==='1'){gtag('set',{traffic_type:'internal'});}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
