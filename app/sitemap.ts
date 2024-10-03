import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.URL_PRODUCTION || 'https://www.adamstd.my.id'; // Default fallback URL

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString(), // Ensures proper date format
   
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
     
    },
    {
      url: `${baseUrl}/skill`,
      lastModified: new Date().toISOString(),
   
    },
    {
      url: `${baseUrl}/project`,
      lastModified: new Date().toISOString(),

    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
     
    },
  ];
}