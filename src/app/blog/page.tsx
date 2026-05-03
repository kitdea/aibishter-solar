import { getAllPosts } from "@/sanity/queries";
import BlogContent from "./BlogContent";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogContent posts={posts} />;
}
