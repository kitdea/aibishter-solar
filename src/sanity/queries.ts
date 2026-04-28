import { cache } from "react";
import { client } from "./client";

// ── Service Areas ─────────────────────────────────────────────────────────────

export async function getAllServiceAreas() {
  return client.fetch(
    `*[_type == "serviceArea"] | order(region asc, province asc, name asc) {
      "slug": slug.current, name, province, region,
      featuredServices
    }`
  );
}

export const getServiceAreaBySlug = cache(async function getServiceAreaBySlug(slug: string) {
  return client.fetch(
    `*[_type == "serviceArea" && slug.current == $slug][0] {
      "slug": slug.current, name, province, region,
      heroHeadline, heroSubheadline, localContext,
      "heroImage": heroImage.asset->url,
      featuredServices,
      coordinates,
      seo { metaTitle, metaDescription, keywords, ogTitle, ogDescription, "ogImage": ogImage.asset->url }
    }`,
    { slug }
  );
});

// ── Reviews ───────────────────────────────────────────────────────────────────

export async function getFeaturedReviews() {
  return client.fetch(
    `*[_type == "review" && featured == true] | order(datePublished desc) [0...6] {
      authorName, authorLocation, rating, reviewBody, serviceType, datePublished,
      "photo": photo.asset->url
    }`
  );
}

export async function getAllReviews() {
  return client.fetch(
    `*[_type == "review"] | order(datePublished desc) {
      authorName, authorLocation, rating, reviewBody, serviceType, datePublished,
      "photo": photo.asset->url
    }`
  );
}

// ── Services ──────────────────────────────────────────────────────────────────

export async function getAllServices() {
  return client.fetch(
    `*[_type == "service"] | order(title asc) {
      slug, title, tagline, description, iconName,
      "image": image.asset->url,
      features[]{ label }
    }`
  );
}

export const getServiceBySlug = cache(async function getServiceBySlug(slug: string) {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0] {
      slug, title, tagline, description, longDescription, iconName,
      features[]{ label, detail },
      benefits[]{ title, description },
      "image": image.asset->url,
      "heroImage": heroImage.asset->url,
      seo { metaTitle, metaDescription, keywords, ogTitle, ogDescription, canonical, "ogImage": ogImage.asset->url }
    }`,
    { slug }
  );
});

// ── Projects ──────────────────────────────────────────────────────────────────

export async function getAllProjects() {
  return client.fetch(
    `*[_type == "project"] | order(_createdAt desc) {
      title, type, systemSize, year,
      "image": image.asset->url
    }`
  );
}

// ── Blog Posts ────────────────────────────────────────────────────────────────

export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(date desc) {
      title, "slug": slug.current, excerpt, date, category,
      "image": image.asset->url
    }`
  );
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title, "slug": slug.current, excerpt, date, category,
      "image": image.asset->url,
      body
    }`,
    { slug }
  );
}
