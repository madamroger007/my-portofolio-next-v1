import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.URL_PRODUCTION || 'https://www.adamstd.my.id'; // Default fallback URL

  return [
    {
      url: `${baseUrl}`,
      // lastModified: lastModified, // Uncomment if you implement content change logic
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      // lastModified: lastModified, // Uncomment if you implement content change logic
      priority: 1.0,
    },
    {
      url: `${baseUrl}/skill`,
      // lastModified: lastModified, // Uncomment if you implement content change logic
      priority: 1.0,
    },
    {
      url: `${baseUrl}/project`,
      // lastModified: lastModified, // Uncomment if you implement content change logic
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      // lastModified: lastModified, // Uncomment if you implement content change logic
      priority: 1.0,
    },
  ];

}