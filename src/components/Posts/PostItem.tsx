import Image from "next/image";
import Link from "next/link";

export default function PostItem({ post }: { post: any }) {
  return (
    <li className="bg-grey-800 text-center shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
      <Link href="/somewhere" className="text-grey-100">
        <div className="max-h-[20rem] w-full overflow-hidden">
          <Image src="/" alt="Post image" className="object-cover" />
        </div>
        <div className="p-[var(--size-4)]">
          <h3 className="my-[var(--size-2)] text-xl"></h3>
          <time className="italic text-grey-300">June 21st 1987</time>
          <p className="leading-6">Text</p>
        </div>
      </Link>
    </li>
  );
}
