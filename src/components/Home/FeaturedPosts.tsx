import PostsGrid from "../Posts/PostsGrid";

export default function FeaturedPosts() {
  return (
    <section className="mx-auto my-[var(--size-8)] w-[90%] max-w-[80rem]">
      <h2 className="text-center text-2xl text-grey-800 md:text-4xl">
        Featured Posts
      </h2>

      <PostsGrid posts={[]} />
    </section>
  );
}
