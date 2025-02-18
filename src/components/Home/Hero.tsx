import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-[var(--size-8)] text-center">
      <div className="mx-auto h-[300px] w-[300px] overflow-hidden rounded-full bg-grey-700 shadow-md">
        <Image
          priority
          height={300}
          width={300}
          src="/assets/images/profile.avif"
          alt="Hero Image"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <h1 className="my-[var(--size-4)] text-4xl text-grey-300">
        Hi, I&apos;m Artem
      </h1>
      <p className="mx-auto w-[90%] max-w-[40rem] text-xl text-grey-200">
        I blog about web development - especially frontend framework like
        Next.js and React.
      </p>
    </section>
  );
}
