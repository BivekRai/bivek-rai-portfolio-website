import type { MetadataRoute } from 'next';
import { projects } from './data/projects';
import { siteUrl } from './data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/work', '/about', '/contact'].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: path === '' ? 1 : 0.8 }));
  const projectRoutes = projects.map((project) => ({ url: `${siteUrl}/work/${project.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 }));
  return [...staticRoutes, ...projectRoutes];
}
