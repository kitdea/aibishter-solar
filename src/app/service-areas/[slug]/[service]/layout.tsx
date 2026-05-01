import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceAreaBySlug } from "@/sanity/queries";
import { SERVICE_MAP, SERVICE_SLUGS } from "@/lib/services";
import { client } from "@/sanity/client";

export const revalidate = 3600;

export async function generateStaticParams() {
  const areas: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "serviceArea"]{ "slug": slug }`
  );
  return areas.flatMap((a) =>
    SERVICE_SLUGS.map((s) => ({ slug: a.slug.current, service: s }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service } = await params;

  const serviceMeta = SERVICE_MAP[service];
  if (!serviceMeta) notFound();

  const area = await getServiceAreaBySlug(slug);
  if (!area) notFound();

  const title = `${serviceMeta.title} in ${area.name}, ${area.province} | Aibishter Solar`;
  const description = `Looking for ${serviceMeta.title.toLowerCase()} in ${area.name}? Aibishter Engineering Services provides expert solar installation and maintenance across ${area.province}. Get a free estimate today.`;
  const canonicalUrl = `https://aibishter.com/service-areas/${slug}/${service}`;

  return {
    title,
    description,
    keywords: [
      `${serviceMeta.title.toLowerCase()} ${area.name}`,
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
