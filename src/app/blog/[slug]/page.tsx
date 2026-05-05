import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/sanity/queries";
import { ArrowRight, Sun } from "@/lib/icons";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

const portableTextComponents: PortableTextComponents = {
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2 text-slate-700 dark:text-slate-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2 text-slate-700 dark:text-slate-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  block: {
    normal: ({ children }) => (
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed my-4">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="font-poppins text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mt-12 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-poppins text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-poppins text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug mt-6 mb-2">
        {children}
      </h4>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href: string = value?.href ?? "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-accent-blue underline underline-offset-4 decoration-accent-blue/40 hover:decoration-accent-blue font-semibold transition-colors hover:text-accent-blue/80"
        >
          {children}
        </a>
      );
    },
  },
};

function formatDate(raw: string) {
  if (!raw) return "";
  const [y, m, d] = raw.split("-");
  return `${d}.${m}.${y}`;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.image ?? undefined,
    author: {
      "@type": "Organization",
      name: "Aibishter Engineering Services",
      url: "https://aibishter.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Aibishter Engineering Services",
      url: "https://aibishter.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aibishter.com/blog/${slug}`,
    },
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Sun size={16} className="text-accent-yellow" />
          <span className="uppercase tracking-widest text-xs font-bold text-slate-400 dark:text-slate-500">
            <Link href="/blog" className="hover:text-accent-blue transition-colors">Blog</Link>
            {" / "}
            <span className="text-slate-600 dark:text-slate-300">{post.category}</span>
          </span>
        </div>

        <header className="mb-10">
          <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-accent-blue text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-slate-500 dark:text-slate-400 font-sans leading-relaxed mb-4">
              {post.excerpt}
            </p>
          )}
          <time dateTime={post.date} className="text-sm text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest">
            {formatDate(post.date)}
          </time>
        </header>

        {post.image && (
          <div className="relative w-full aspect-video rounded-4xl overflow-hidden mb-12 shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        {post.body && (
          <div className="prose prose-slate dark:prose-invert prose-lg max-w-none font-sans">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent-blue hover:text-accent-yellow transition-colors"
          >
            <ArrowRight size={16} className="rotate-180" /> Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
