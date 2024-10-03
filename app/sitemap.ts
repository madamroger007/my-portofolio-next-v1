import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.URL_PRODUCTION}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.URL_PRODUCTION}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${process.env.URL_PRODUCTION}/skill`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.URL_PRODUCTION}/project`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },{
        url: `${process.env.URL_PRODUCTION}/contact`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
  ]
}