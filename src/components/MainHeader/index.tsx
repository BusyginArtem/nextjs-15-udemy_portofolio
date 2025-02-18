import Link from "next/link";
import Header from "./MainHeader";
import Logo from "../Logo";

export default function MainHeader() {
  return (
    <Header>
      <Link href="/">
        <Logo />
      </Link>

      <ul className="m-0 flex list-none items-baseline p-0 md:gap-2">
        <li className="mx-[var(--size-4)]">
          <Link
            href="/posts"
            className="text-base text-grey-100 hover:text-grey-200 active:text-grey-200 md:text-lg"
          >
            Posts
          </Link>
        </li>
        <li className="mx-[var(--size-4)]">
          <Link
            href="/contact"
            className="text-base text-grey-100 hover:text-grey-200 active:text-grey-200 md:text-lg"
          >
            Contact
          </Link>
        </li>
      </ul>
    </Header>
  );
}
