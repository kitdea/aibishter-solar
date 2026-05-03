import { defineField, defineType } from "sanity";

export const serviceAreaSchema = defineType({
  name: "serviceArea",
  title: "Service Area",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "name",
      title: "City / Municipality Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "province",
      title: "Province",
      type: "string",
      options: {
        list: [
          { title: "Metro Manila (NCR)", value: "Metro Manila" },
          { title: "Quezon Province", value: "Quezon" },
          { title: "Cavite", value: "Cavite" },
          { title: "Laguna", value: "Laguna" },
          { title: "Batangas", value: "Batangas" },
          { title: "Rizal", value: "Rizal" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: [
          { title: "NCR (National Capital Region)", value: "NCR" },
          { title: "CALABARZON (Region IV-A)", value: "CALABARZON" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      description: "e.g. Solar Panel Installation in Lucena City",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Sub-headline",
      type: "text",
      rows: 2,
      description: "Short intro paragraph for this service area page.",
    }),
    defineField({
      name: "localContext",
      title: "Local Context Paragraph",
      type: "text",
      rows: 4,
      description: "Why solar makes sense in this specific city/area. Mention local electric rates, geography, climate, etc.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featuredServices",
      title: "Featured Services",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Residential", value: "residential-solar" },
          { title: "Commercial", value: "commercial-solar" },
          { title: "Solar Battery", value: "solar-storage" },
          { title: "General Maintenance", value: "general-maintenance" },
          { title: "Electrical Design", value: "electrical-design" },
        ],
      },
      description: "Which services are most relevant for this area.",
    }),
    defineField({
      name: "coordinates",
      title: "Coordinates (for GeoCoordinates schema)",
      type: "object",
      fields: [
        defineField({ name: "lat", title: "Latitude", type: "number" }),
        defineField({ name: "lng", title: "Longitude", type: "number" }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", type: "string", title: "Meta Title" }),
        defineField({ name: "metaDescription", type: "text", title: "Meta Description", rows: 2 }),
        defineField({ name: "keywords", type: "array", title: "Keywords", of: [{ type: "string" }] }),
        defineField({ name: "ogTitle", type: "string", title: "OG Title" }),
        defineField({ name: "ogDescription", type: "text", title: "OG Description", rows: 2 }),
        defineField({ name: "ogImage", type: "image", title: "OG Image" }),
      ],
    }),
  ],
  orderings: [
    { title: "Region then Province", name: "regionProvince", by: [{ field: "region", direction: "asc" }, { field: "province", direction: "asc" }, { field: "name", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "province" },
  },
});
