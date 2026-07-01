import type { MetadataRoute } from "next";

const SITE = "https://plutusintegrated.com";

// Served at /sitemap.xml. Lists every indexable route so search engines don't
// have to discover pages by crawling alone. Add new public routes here.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
