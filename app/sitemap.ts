import type { MetadataRoute } from 'next'
 
const baseUrl = process.env.URL_PRODUCTION || 'https://www.adamstd.my.id'; // Default fallback URL
const lastModified = new Date().toISOString(); // Use a static date to avoid redundant calls

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', changefreq: 'daily', priority: 1 },
    { path: 'about', changefreq: 'monthly', priority: 1 },
    { path: 'skill', changefreq: 'monthly', priority: 1 },
    { path: 'project', changefreq: 'weekly', priority: 1 },
    { path: 'contact', changefreq: 'yearly', priority: 1 },
  ];

  return routes.map(({ path, changefreq, priority }) => ({
    url: `${baseUrl}${path ? `/${path}` : ''}`,
    lastModified,
    changefreq,  // Specifies how often the content is updated
    priority,    // Importance relative to other URLs
  }));

}