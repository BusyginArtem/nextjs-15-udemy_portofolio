import { Metadata } from "next";

import PostsGrid from "@/components/Posts/PostsGrid";
import { getAllPosts } from "@/lib/posts-util";

export const metadata: Metadata = {
  title: "My posts",
  description: "Acknowledge with my posts.",
};

export default function Posts() {
  const allPosts = getAllPosts();

  return (
    <section className="mx-auto my-[var(--size-8)] w-[90%] max-w-[60rem]">
      <h2 className="text-center text-2xl text-grey-800 md:text-4xl mb-12">Posts</h2>

      <PostsGrid posts={allPosts} />
    </section>
  );
}
