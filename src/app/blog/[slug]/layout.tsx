import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getSitemapPosts } from "@/sanity/queries";

export async function generateStaticParams() {
  const posts = await getSitemapPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const title = post.seo?.metaTitle ?? `${post.title} | Aibishter Solar Blog`;
  const description = post.excerpt ?? `Read ${post.title} on the Aibishter Solar blog.`;

  return {
    title,
    description,
    keywords: post.seo?.keywords ?? [],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      url: `https://aibishter.com/blog/${slug}`,
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.image ? [post.image] : [],
    },
    alternates: { canonical: `https://aibishter.com/blog/${slug}` },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
