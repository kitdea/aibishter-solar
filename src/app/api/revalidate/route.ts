import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

// Sanity sends this payload on document publish/unpublish:
// { _type: string, slug?: { current: string }, _id: string }
interface SanityWebhookBody {
  _type?: string;
  _id?: string;
  slug?: { current?: string };
}

// Maps each Sanity document type to the cache tags and static listing paths to bust.
const TYPE_MAP: Record<string, { tags: string[]; paths: string[] }> = {
  post:        { tags: ["post"],        paths: ["/blog"] },
  service:     { tags: ["service"],     paths: ["/services", "/"] },
  serviceArea: { tags: ["serviceArea"], paths: ["/service-areas"] },
  project:     { tags: ["project"],     paths: ["/projects", "/"] },
  review:      { tags: ["review"],      paths: ["/"] },
};

export async function POST(request: NextRequest) {
  // 1. Authenticate — reject anything without the shared secret.
  const secret = request.nextUrl.searchParams.get("secret");
  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  // 2. Parse body — treat a malformed payload as a full-site flush rather than an error.
  let body: SanityWebhookBody = {};
  try {
    body = await request.json();
  } catch {
    // Malformed JSON — fall through to full flush below.
  }

  const docType = body._type;
  const slug = body.slug?.current;

  // 3. Full-site flush when the document type is unknown or missing.
  if (!docType || !TYPE_MAP[docType]) {
    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true, scope: "full-site" });
  }

  const { tags, paths } = TYPE_MAP[docType];

  // 4. Bust the data cache by tag — invalidates all unstable_cache entries
  //    that carry this tag across every page that uses them.
  for (const tag of tags) {
    revalidateTag(tag, "default");
  }

  // 5. If Sanity included the slug, also bust the slug-specific tag and path
  //    so the individual detail page is immediately regenerated.
  if (slug) {
    revalidateTag(`${docType}-${slug}`, "default");

    const slugPath = slugToPath(docType, slug);
    if (slugPath) paths.push(slugPath);
  }

  // 6. Revalidate listing paths so the index pages reflect the change.
  for (const path of paths) {
    revalidatePath(path);
  }

  return NextResponse.json({ revalidated: true, docType, slug: slug ?? null, tags, paths });
}

function slugToPath(type: string, slug: string): string | null {
  switch (type) {
    case "post":        return `/blog/${slug}`;
    case "service":     return `/services/${slug}`;
    case "serviceArea": return `/service-areas/${slug}`;
    default:            return null;
  }
}
