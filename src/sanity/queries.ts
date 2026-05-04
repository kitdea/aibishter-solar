import { unstable_cache } from "next/cache";
import { authedClient, client } from "./client";

// Cache TTL for time-based revalidation fallback (1 hour).
// On-demand revalidation via /api/revalidate is the primary mechanism.
const TTL = 3600;

// ── Service Areas ─────────────────────────────────────────────────────────────

export const getAllServiceAreas = unstable_cache(
  async () =>
    client.fetch(
      `*[_type == "serviceArea"] | order(region asc, province asc, name asc) {
        "slug": slug.current, name, province, region,
        featuredServices
      }`
    ),
  ["all-service-areas"],
  { tags: ["serviceArea"], revalidate: TTL }
);

export const getServiceAreaBySlug = (slug: string) =>
  unstable_cache(
    async () =>
      client.fetch(
        `*[_type == "serviceArea" && slug.current == $slug][0] {
          "slug": slug.current, name, province, region,
          heroHeadline, heroSubheadline, localContext,
          "heroImage": heroImage.asset->url,
          featuredServices,
          coordinates,
          seo { metaTitle, metaDescription, keywords, ogTitle, ogDescription, "ogImage": ogImage.asset->url }
        }`,
        { slug }
      ),
    [`service-area-${slug}`],
    { tags: ["serviceArea", `serviceArea-${slug}`], revalidate: TTL }
  )();

// ── Reviews ───────────────────────────────────────────────────────────────────

export const getFeaturedReviews = unstable_cache(
  async () =>
    client.fetch(
      `*[_type == "review" && featured == true] | order(datePublished desc) [0...6] {
        authorName, authorLocation, rating, reviewBody, serviceType, datePublished,
        "photo": photo.asset->url
      }`
    ),
  ["featured-reviews"],
  { tags: ["review"], revalidate: TTL }
);

export const getAllReviews = unstable_cache(
  async () =>
    client.fetch(
      `*[_type == "review"] | order(datePublished desc) {
        authorName, authorLocation, rating, reviewBody, serviceType, datePublished,
        "photo": photo.asset->url
      }`
    ),
  ["all-reviews"],
  { tags: ["review"], revalidate: TTL }
);

// ── Services ──────────────────────────────────────────────────────────────────

export const getNavServices = unstable_cache(
  async (): Promise<{ slug: string; title: string }[]> =>
    client.fetch(
      `*[_type == "service"] | order(order asc, title asc) { "slug": slug.current, title }`
    ),
  ["nav-services"],
  { tags: ["service"], revalidate: TTL }
);

export const getAllServices = unstable_cache(
  async () =>
    client.fetch(
      `*[_type == "service"] | order(order asc, title asc) {
        slug, title, tagline, description, iconName,
        "image": image.asset->url,
        features[]{ label }
      }`
    ),
  ["all-services"],
  { tags: ["service"], revalidate: TTL }
);

export const getServiceBySlug = (slug: string) =>
  unstable_cache(
    async () =>
      client.fetch(
        `*[_type == "service" && slug.current == $slug][0] {
          slug, title, tagline, description, longDescription, iconName,
          features[]{ label, detail },
          benefits[]{ title, description },
          "image": image.asset->url,
          "heroImage": heroImage.asset->url,
          seo { metaTitle, metaDescription, keywords, ogTitle, ogDescription, canonical, "ogImage": ogImage.asset->url }
        }`,
        { slug }
      ),
    [`service-${slug}`],
    { tags: ["service", `service-${slug}`], revalidate: TTL }
  )();

// ── Projects ──────────────────────────────────────────────────────────────────

export const getAllProjects = unstable_cache(
  async () =>
    client.fetch(
      `*[_type == "project"] | order(_createdAt desc) {
        title, type, systemSize, year,
        "image": image.asset->url
      }`
    ),
  ["all-projects"],
  { tags: ["project"], revalidate: TTL }
);

export const getRecentProjectsWithImages = unstable_cache(
  async (): Promise<{ title: string; image: string }[]> =>
    client.fetch(
      `*[_type == "project" && defined(image.asset)] | order(_createdAt desc) [0...4] {
        title,
        "image": image.asset->url
      }`
    ),
  ["recent-projects-gallery"],
  { tags: ["project"], revalidate: TTL }
);

// ── Blog Posts ────────────────────────────────────────────────────────────────

export const getAllPosts = unstable_cache(
  async () =>
    client.fetch(
      `*[_type == "post"] | order(date desc) {
        title, "slug": slug.current, excerpt, date, category,
        "image": image.asset->url
      }`
    ),
  ["all-posts"],
  { tags: ["post"], revalidate: TTL }
);

export const getPostBySlug = (slug: string) =>
  unstable_cache(
    async () =>
      client.fetch(
        `*[_type == "post" && slug.current == $slug][0] {
          title, "slug": slug.current, excerpt, date, category,
          "image": image.asset->url,
          body,
          seo { metaTitle, keywords }
        }`,
        { slug }
      ),
    [`post-${slug}`],
    { tags: ["post", `post-${slug}`], revalidate: TTL }
  )();

// ── Team Members ──────────────────────────────────────────────────────────────

export const getTeamMembers = unstable_cache(
  async () =>
    authedClient.fetch(
      `*[_type == "teamMember"] | order(order asc, name asc) {
        name, title, bio, role,
        "image": photo.asset->url
      }`
    ),
  ["team-members"],
  { tags: ["teamMember"], revalidate: TTL }
);

// ── Sitemap helpers (no cache — always fresh at build/request time) ───────────

export async function getSitemapServices(): Promise<{ slug: string; lastModified: string }[]> {
  return client.fetch(`*[_type == "service"]{ "slug": slug.current, "lastModified": _updatedAt }`);
}

export async function getSitemapServiceAreas(): Promise<{ slug: string; lastModified: string }[]> {
  return client.fetch(`*[_type == "serviceArea"]{ "slug": slug.current, "lastModified": _updatedAt }`);
}

export async function getSitemapPosts(): Promise<{ slug: string; lastModified: string }[]> {
  return client.fetch(`*[_type == "post"]{ "slug": slug.current, "lastModified": _updatedAt }`);
}
