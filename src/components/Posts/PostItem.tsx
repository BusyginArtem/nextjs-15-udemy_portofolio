import Link from "next/link";

import type { PostType } from "@/lib/types";
import PostImage from "./PostImage";

export default function PostItem({ post }: { post: PostType }) {
  const { title, date, excerpt, image, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className="flex flex-col bg-grey-800 text-center text-grey-100 shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
      <Link href={`/posts/${slug}`}>
        <PostImage imageUrl={image} title={title} />
      </Link>

      <div className="grid h-full grid-rows-[1fr_2rem_1fr] items-stretch gap-2 p-[var(--size-4)]">
        <h3 className="my-[var(--size-2)] text-xl">{title}</h3>
        <time className="italic text-grey-300">{formattedDate}</time>
        <p className="leading-6">{excerpt}</p>
      </div>
    </li>
  );
}
