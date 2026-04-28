import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";

export const revalidate = 3600;

const SERVICE_LABELS: Record<string, string> = {
  "residential-solar": "Residential Solar",
  "commercial-solar": "Commercial Solar",
  "solar-storage": "Solar Storage",
  "electrical-design": "Electrical Design",
  "general-maintenance": "General Maintenance",
};

export async function generateStaticParams() {
  const areas: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "serviceArea"]{ "slug": slug }`
  );
  const services = Object.keys(SERVICE_LABELS);
  return areas.flatMap((a) =>
    services.map((s) => ({ slug: a.slug.current, service: s }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service } = await params;

  const area = await client.fetch(
    `*[_type == "serviceArea" && slug.current == $slug][0]{ name, province }`,
    { slug }
  );
  if (!area) notFound();

  const serviceLabel = SERVICE_LABELS[service];
  if (!serviceLabel) notFound();

  const title = `${serviceLabel} in ${area.name}, ${area.province} | Aibishter Solar`;
  const description = `Looking for ${serviceLabel.toLowerCase()} in ${area.name}? Aibishter Engineering Services provides expert solar installation and maintenance across ${area.province}. Get a free estimate today.`;
  const canonicalUrl = `https://aibishter.com/service-areas/${slug}/${service}`;

  return {
    title,
    description,
    keywords: [
      `${serviceLabel.toLowerCase()} ${area.name}`,
      `solar panels ${area.name}`,
      `solar installation ${area.province}`,
      `${service} ${area.province}`,
      "Aibishter solar",
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: canonicalUrl },
  };
}

export default function AreaServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
