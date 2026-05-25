import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking — disallow embedding in iframes from other origins
  { key: "X-Frame-Options", value: "DENY" },
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Limit referrer info sent to third parties
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restrict access to browser features not used by this site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Force HTTPS for 1 year (only effective once served over HTTPS)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    try {
      const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
      const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
      const token = process.env.SANITY_API_READ_TOKEN;

      if (!projectId || !token) {
        console.warn("Sanity credentials missing, skipping redirects");
        return [];
      }

      const response = await fetch(
        `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=*[_type=="post"]{slug,previousSlugs}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await response.json();
      const redirects = [];

      data.result?.forEach((post: any) => {
        post.previousSlugs?.forEach((oldSlug: string) => {
          redirects.push({
            source: `/blog/${oldSlug}`,
            destination: `/blog/${post.slug.current}`,
            permanent: true,
          });
        });
      });

      return redirects;
    } catch (error) {
      console.warn("Failed to fetch redirects from Sanity:", error);
      return [];
    }
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
