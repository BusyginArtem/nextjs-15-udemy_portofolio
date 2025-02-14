import Image from "next/image";

export default function Hero() {
  return (
    <section className='text-center w-full py-[var(--size-8)]'>
      <div className='w-[300px] h-[300px] shadow-md rounded-full overflow-hidden bg-grey-700 mx-auto'>
        <Image
          priority
          height={300}
          width={300}
          src='/assets/images/profile.avif'
          alt='Hero Image'
          className='object-cover object-top w-full h-full'
        />
      </div>
      <h1 className='text-4xl my-[var(--size-4)] text-grey-300'>Hi, I'm Artem</h1>
      <p className='text-xl w-[90%] max-w-[40rem] mx-auto text-grey-200'>
        I blog about web development - especially frontend framework like Next.js and React.
      </p>
    </section>
  );
}
