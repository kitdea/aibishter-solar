import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";

export const revalidate = 3600;

export async function generateStaticParams() {
  const areas: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "serviceArea"]{ "slug": slug }`
  );
  return areas.map((a) => ({ slug: a.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = await client.fetch(
    `*[_type == "serviceArea" && slug.current == $slug][0]{
      name, province, region,
      seo { metaTitle, metaDescription, keywords, ogTitle, ogDescription, "ogImage": ogImage.asset->url }
    }`,
    { slug }
  );

  if (!area) notFound();

  const { seo, name, province } = area;
  const title = seo?.metaTitle ?? `Solar Panel Installation in ${name}, ${province} | Aibishter Solar`;
  const description =
    seo?.metaDescription ??
    `Aibishter Engineering Services provides residential and commercial solar installation in ${name}, ${province}. Get a free estimate today.`;
  const canonicalUrl = `https://aibishter.com/service-areas/${slug}`;

  return {
    title,
    description,
    keywords: seo?.keywords ?? [
      `solar panels ${name}`,
      `solar installation ${name}`,
      `solar energy ${province}`,
      `residential solar ${name}`,
      `commercial solar ${name}`,
    ],
    openGraph: {
      title: seo?.ogTitle ?? title,
      description: seo?.ogDescription ?? description,
      url: canonicalUrl,
      images: seo?.ogImage ? [{ url: seo.ogImage, width: 1200, height: 630, alt: title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.ogTitle ?? title,
      description: seo?.ogDescription ?? description,
      images: seo?.ogImage ? [seo.ogImage] : [],
    },
    alternates: { canonical: canonicalUrl },
  };
}

export default function AreaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
