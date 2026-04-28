import { notFound } from "next/navigation";
import { getServiceAreaBySlug, getServiceBySlug, getFeaturedReviews } from "@/sanity/queries";
import AreaServiceContent from "./AreaServiceContent";

const SERVICE_LABELS: Record<string, string> = {
  "residential-solar": "Residential Solar",
  "commercial-solar": "Commercial Solar",
  "solar-storage": "Solar Storage",
  "electrical-design": "Electrical Design",
  "general-maintenance": "General Maintenance",
};

export default async function AreaServicePage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service } = await params;

  if (!SERVICE_LABELS[service]) notFound();

  const [area, serviceData, reviews] = await Promise.all([
    getServiceAreaBySlug(slug),
    getServiceBySlug(service),
    getFeaturedReviews(),
  ]);

  if (!area || !serviceData) notFound();

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((s: number, r: { rating: number }) => s + r.rating, 0) / reviews.length
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceData.title} in ${area.name}`,
    description: serviceData.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Aibishter Engineering Services",
      "@id": "https://aibishter.com",
      telephone: "+639171898089",
      address: {
        "@type": "PostalAddress",
        streetAddress: "PH 6, Citta Grande, Via Lucera Street Blk 4 Lot 18",
        addressLocality: "Lucena City",
        addressRegion: "Quezon",
        postalCode: "4301",
        addressCountry: "PH",
      },
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "AdministrativeArea", name: area.province },
    },
    ...(avgRating !== null && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: avgRating.toFixed(1),
        reviewCount: reviews.length,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://aibishter.com" },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://aibishter.com/service-areas" },
        { "@type": "ListItem", position: 3, name: area.name, item: `https://aibishter.com/service-areas/${slug}` },
        { "@type": "ListItem", position: 4, name: serviceData.title, item: `https://aibishter.com/service-areas/${slug}/${service}` },
      ],
    },
  };

  return <AreaServiceContent area={area} service={serviceData} reviews={reviews} jsonLd={jsonLd} />;
}
