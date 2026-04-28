import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "service"]{ "slug": slug }`
  );
  return slugs.map((s) => ({ slug: s.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await client.fetch(
    `*[_type == "service" && slug.current == $slug][0]{
      seo { metaTitle, metaDescription, keywords, ogTitle, ogDescription, canonical, "ogImage": ogImage.asset->url }
    }`,
    { slug }
  );

  if (!service) notFound();

  const { seo } = service;
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: seo.canonical,
      images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [seo.ogImage],
    },
    alternates: { canonical: seo.canonical },
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
