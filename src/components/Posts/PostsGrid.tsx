import PostItem from "./PostItem";
import type { PostType } from "@/lib/types";

export default function PostsGrid({ posts }: { posts: PostType[] }) {
  return (
    <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] content-center gap-6 p-0">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
