import { getFeaturedPosts } from "@/lib/posts-util";
import PostsGrid from "../Posts/PostsGrid";

export const revalidate = 600;

export default function FeaturedPosts() {
  const featuredPosts = getFeaturedPosts();

  return (
    <section className="mx-auto my-[var(--size-8)] w-[90%] max-w-[80rem]">
      <h2 className="text-center text-2xl text-grey-800 md:text-4xl mb-12">
        Featured Posts
      </h2>

      <PostsGrid posts={featuredPosts} />
    </section>
  );
}
