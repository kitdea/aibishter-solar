import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

interface SanityWebhookBody {
  _type?: string;
  _id?: string;
  slug?: { current?: string };
}

// Maps each Sanity document type to the cache tags and listing paths to bust.
const TYPE_MAP: Record<string, { tags: string[]; paths: string[] }> = {
  post:        { tags: ["post"],        paths: ["/blog"] },
  service:     { tags: ["service"],     paths: ["/services", "/"] },
  serviceArea: { tags: ["serviceArea"], paths: ["/service-areas"] },
  project:     { tags: ["project"],     paths: ["/projects", "/"] },
  review:      { tags: ["review"],      paths: ["/"] },
  teamMember:  { tags: ["teamMember"],  paths: ["/about"] },
};

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let body: SanityWebhookBody = {};
  try {
    body = await request.json();
  } catch {
    // Malformed JSON — fall through to full flush.
  }

  const docType = body._type;
  const slug = body.slug?.current;

  if (!docType || !TYPE_MAP[docType]) {
    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true, scope: "full-site" });
  }

  const { tags, paths } = TYPE_MAP[docType];

  for (const tag of tags) revalidateTag(tag, "default");

  if (slug) {
    revalidateTag(`${docType}-${slug}`, "default");
    const slugPath = slugToPath(docType, slug);
    if (slugPath) paths.push(slugPath);
  }

  for (const path of paths) revalidatePath(path);

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
