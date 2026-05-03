import { defineField, defineType } from "sanity";

export const reviewSchema = defineType({
  name: "review",
  title: "Customer Review",
  type: "document",
  fields: [
    defineField({
      name: "authorName",
      title: "Customer Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "authorLocation",
      title: "Location (City)",
      type: "string",
      description: "e.g. Lucena City, Quezon",
    }),
    defineField({
      name: "rating",
      title: "Star Rating",
      type: "number",
      options: { list: [1, 2, 3, 4, 5] },
      validation: (r) => r.required().min(1).max(5),
    }),
    defineField({
      name: "reviewBody",
      title: "Review Text",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "serviceType",
      title: "Service Reviewed",
      type: "string",
      options: {
        list: [
          { title: "Residential", value: "residential-solar" },
          { title: "Commercial", value: "commercial-solar" },
          { title: "Solar Battery", value: "solar-storage" },
          { title: "General Maintenance", value: "general-maintenance" },
          { title: "Electrical Design", value: "electrical-design" },
        ],
      },
    }),
    defineField({
      name: "datePublished",
      title: "Date Published",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured (show on homepage/area pages)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "photo",
      title: "Customer Photo (optional)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    { title: "Newest First", name: "dateDesc", by: [{ field: "datePublished", direction: "desc" }] },
    { title: "Highest Rating", name: "ratingDesc", by: [{ field: "rating", direction: "desc" }] },
  ],
  preview: {
    select: { title: "authorName", subtitle: "authorLocation", description: "reviewBody" },
  },
});
