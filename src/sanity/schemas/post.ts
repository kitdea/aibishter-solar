import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Guides", "Technology", "Finance", "News"] },
    }),
    defineField({ name: "image", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] }),
  ],
  orderings: [{ title: "Date (newest)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
});
