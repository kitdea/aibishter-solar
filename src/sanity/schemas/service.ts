import { defineField, defineType } from "sanity";

export const serviceSchema = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "order", title: "Display Order", type: "number", description: "Lower numbers appear first (1 = Residential, 2 = Commercial, 3 = Solar Battery, 4 = General Maintenance, 5 = Electrical Design)" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Short Description", type: "text", rows: 3 }),
    defineField({ name: "longDescription", title: "Long Description", type: "text", rows: 6 }),
    defineField({
      name: "iconName",
      title: "Icon",
      type: "string",
      options: { list: ["Zap", "Battery", "Wrench", "Cpu", "ShieldCheck"] },
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "detail", type: "text", title: "Detail", rows: 2 }),
          ],
        },
      ],
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "description", type: "text", title: "Description", rows: 2 }),
          ],
        },
      ],
    }),
    defineField({ name: "image", title: "Card Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
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
        defineField({ name: "canonical", type: "url", title: "Canonical URL" }),
        defineField({ name: "ogImage", type: "image", title: "OG Image" }),
      ],
    }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Title", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
});
