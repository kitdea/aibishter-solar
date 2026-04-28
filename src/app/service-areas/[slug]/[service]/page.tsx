import { notFound } from "next/navigation";
import { getServiceAreaBySlug, getServiceBySlug, getFeaturedReviews } from "@/sanity/queries";
import { SERVICE_MAP } from "@/lib/services";
import AreaServiceContent from "./AreaServiceContent";

export default async function AreaServicePage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service } = await params;

  const fallback = SERVICE_MAP[service];
  if (!fallback) notFound();

  const [area, serviceData, reviews] = await Promise.all([
    getServiceAreaBySlug(slug),
    getServiceBySlug(service),
    getFeaturedReviews(),
  ]);

  if (!area) notFound();

  const resolvedService = serviceData ?? {
    ...fallback,
    features: [],
    benefits: [],
    heroImage: undefined,
    seo: null,
  };

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((s: number, r: { rating: number }) => s + r.rating, 0) / reviews.length
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${resolvedService.title} in ${area.name}`,
    description: resolvedService.description,
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
        { "@type": "ListItem", position: 4, name: resolvedService.title, item: `https://aibishter.com/service-areas/${slug}/${service}` },
      ],
    },
  };

  return <AreaServiceContent area={area} service={resolvedService} reviews={reviews} jsonLd={jsonLd} />;
}
