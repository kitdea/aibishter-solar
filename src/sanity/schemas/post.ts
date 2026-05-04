import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Excerpt / Meta Description", type: "text", rows: 3, description: "Used as the page meta description and blog card summary. Keep under 160 characters.", validation: (r) => r.required().max(160) }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Guides", "Technology", "Finance", "News"] },
    }),
    defineField({ name: "image", title: "Cover Image", type: "image", options: { hotspot: true }, description: "Used as Open Graph image (1200×630 recommended)." }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({
      name: "seo",
      title: "SEO (optional overrides)",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string", description: "Leave blank to auto-generate from post title. Max 60 characters.", validation: (r) => r.max(60) }),
        defineField({ name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }], description: "Optional: comma-separated focus keywords." }),
      ],
    }),
  ],
  orderings: [{ title: "Date (newest)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
});
