import PostItem from "./PostItem";

export default function PostsGrid({ posts }: { posts: any[] }) {
  return (
    <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] content-center gap-6 p-0">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
