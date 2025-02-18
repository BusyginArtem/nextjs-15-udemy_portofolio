import PostImage from "../PostImage";

type Props = {
  title: string;
  image: string;
};

export default function PostHeader({ title, image }: Props) {
  return (
    <header className="my-[var(--size-4)] flex flex-col-reverse items-center justify-between gap-6 border-b-[8px] border-[var(--color-primary-100)] pb-[var(--size-8)] md:my-[var(--size-8)] md:flex-row md:items-end">
      <h1 className="text-center text-2xl leading-none text-grey-500 md:text-left md:text-4xl">
        {title}
      </h1>

      <PostImage
        imageUrl={image}
        title={title}
        width={200}
        height={120}
        styles="h-[7.5rem] sm:h-[7.5rem] xl:h-[7.5rem]"
      />
    </header>
  );
}
