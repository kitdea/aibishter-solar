import type { MetadataRoute } from "next";
import { getSitemapServices, getSitemapServiceAreas, getSitemapPosts } from "@/sanity/queries";

const BASE_URL = "https://aibishter.com";
const BUILD_DATE = new Date();

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: BASE_URL,                              lastModified: BUILD_DATE, changeFrequency: "weekly",  priority: 1.0 },
  { url: `${BASE_URL}/services`,                lastModified: BUILD_DATE, changeFrequency: "weekly",  priority: 0.9 },
  { url: `${BASE_URL}/service-areas`,           lastModified: BUILD_DATE, changeFrequency: "weekly",  priority: 0.9 },
  { url: `${BASE_URL}/projects`,                lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/blog`,                    lastModified: BUILD_DATE, changeFrequency: "weekly",  priority: 0.8 },
  { url: `${BASE_URL}/about`,                   lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE_URL}/contact`,                 lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/solar-calculator`,        lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, serviceAreas, posts] = await Promise.all([
    getSitemapServices(),
    getSitemapServiceAreas(),
    getSitemapPosts(),
  ]);

  const serviceRoutes: MetadataRoute.Sitemap = services.map(({ slug, lastModified }) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const areaRoutes: MetadataRoute.Sitemap = serviceAreas.map(({ slug, lastModified }) => ({
    url: `${BASE_URL}/service-areas/${slug}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Cross-product: every city × every service slug
  const serviceSlugs = services.map((s) => s.slug);
  const areaServiceRoutes: MetadataRoute.Sitemap = serviceAreas.flatMap(({ slug: areaSlug, lastModified }) =>
    serviceSlugs.map((svcSlug) => ({
      url: `${BASE_URL}/service-areas/${areaSlug}/${svcSlug}`,
      lastModified: new Date(lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  const blogRoutes: MetadataRoute.Sitemap = posts.map(({ slug, lastModified }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...STATIC_ROUTES,
    ...serviceRoutes,
    ...areaRoutes,
    ...areaServiceRoutes,
    ...blogRoutes,
  ];
}
