import type { MetadataRoute } from "next";

const baseUrl = process.env.URL_PRODUCTION || 'https://www.adamstd.my.id'; // Fallback URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/dashboard",  // Disallow only specific paths like dashboard
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
