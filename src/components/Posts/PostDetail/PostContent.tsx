import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github.css";
import "highlight.js/styles/atom-one-dark.css";

import { PostType } from "@/lib/types";
import PostHeader from "./PostHeader";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: PostType;
};

export default function PostContent({ post }: Props) {
  return (
    <article className="mx-auto my-[var(--size-8)] w-[95%] max-w-[60rem] rounded-md bg-grey-100 p-[var(--size-4)] text-lg leading-[var(--size-8)] md:p-[var(--size-8)]">
      <PostHeader image={post.image} title={post.title} />

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-blue-600">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-green-600">
              {children}
            </h2>
          ),
          p: ({ children }) => (
            <p className="leading-relaxed text-gray-800">{children}</p>
          ),
          a: ({ href, children }) => (
            <Link
              href={href as string}
              className="text-blue-500 hover:underline"
            >
              {children}
            </Link>
          ),
          ul: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
          li: ({ children }) => <li className="text-gray-700">{children}</li>,
          img: ({ node }) => {
            const src = node?.properties.src as string;
            const alt = node?.properties.alt as string;

            return (
              <Image
                src={src ?? ""}
                alt={alt ?? "Image"}
                width={600}
                height={400}
                className="mx-auto my-[var(--size-4)] h-[20rem] w-full max-w-[40rem] object-cover"
              />
            );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
