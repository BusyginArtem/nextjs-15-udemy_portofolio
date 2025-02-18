import { notFound } from "next/navigation";

import PostContent from "@/components/Posts/PostDetail/PostContent";
import { getPostData, getPostsFiles } from "@/lib/posts-util";

export const dynamicParams = true;
// export const dynamic = "force-static";
export const revalidate = 600;

export async function generateStaticParams() {
  const slugs = getPostsFiles();

  return slugs.map((slug: string) => ({ slug: slug.replace(/\.md$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = getPostData(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = getPostData(slug);

  if (!post) {
    notFound();
  }

  return <PostContent post={post} />;
}
