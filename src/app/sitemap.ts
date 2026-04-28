import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { SERVICE_SLUGS } from "@/lib/services";

const BASE_URL = "https://aibishter.com";

const STATIC_ROUTES: MetadataRoute.Sitemap = [
  { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
  { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/service-areas`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/solar-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [serviceAreas, posts]: [
    { slug: string }[],
    { slug: string }[],
  ] = await Promise.all([
    client.fetch(`*[_type == "serviceArea"]{ "slug": slug.current }`),
    client.fetch(`*[_type == "post"]{ "slug": slug.current }`),
  ]);

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const areaRoutes: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${BASE_URL}/service-areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaServiceRoutes: MetadataRoute.Sitemap = serviceAreas.flatMap((area) =>
    SERVICE_SLUGS.map((service) => ({
      url: `${BASE_URL}/service-areas/${area.slug}/${service}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    }))
  );

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
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
