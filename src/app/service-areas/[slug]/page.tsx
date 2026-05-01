import { notFound } from "next/navigation";
import { getServiceAreaBySlug, getFeaturedReviews } from "@/sanity/queries";
import AreaContent from "./AreaContent";

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [area, reviews] = await Promise.all([
    getServiceAreaBySlug(slug),
    getFeaturedReviews(),
  ]);

  if (!area) notFound();

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((s: number, r: { rating: number }) => s + r.rating, 0) / reviews.length
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://aibishter.com/service-areas/${area.slug}`,
    name: "Aibishter Engineering Services",
    url: `https://aibishter.com/service-areas/${area.slug}`,
    telephone: "+639171898089",
    address: {
      "@type": "PostalAddress",
      streetAddress: "PH 6, Citta Grande, Via Lucera Street Blk 4 Lot 18",
      addressLocality: "Lucena City",
      addressRegion: "Quezon",
      postalCode: "4301",
      addressCountry: "PH",
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "AdministrativeArea", name: area.province },
    },
    ...(area.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.coordinates.lat,
        longitude: area.coordinates.lng,
      },
    }),
    ...(avgRating !== null && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: avgRating.toFixed(1),
        reviewCount: reviews.length,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    ...(reviews.length > 0 && {
      review: reviews.map((r: { authorName: string; datePublished: string; reviewBody: string; rating: number }) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.authorName },
        datePublished: r.datePublished,
        reviewBody: r.reviewBody,
        reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
      })),
    }),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://aibishter.com" },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://aibishter.com/service-areas" },
        { "@type": "ListItem", position: 3, name: area.name, item: `https://aibishter.com/service-areas/${area.slug}` },
      ],
    },
  };

  return <AreaContent area={area} reviews={reviews} jsonLd={jsonLd} />;
}
