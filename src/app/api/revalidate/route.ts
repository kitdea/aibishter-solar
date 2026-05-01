import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const type = body?._type as string | undefined;

  const pathMap: Record<string, string[]> = {
    post: ["/blog"],
    service: ["/services", "/"],
    serviceArea: ["/service-areas"],
    project: ["/projects"],
    review: ["/"],
  };

  const paths = type && pathMap[type] ? pathMap[type] : ["/"];

  for (const path of paths) {
    revalidatePath(path);
  }

  return NextResponse.json({ revalidated: true, paths });
}
