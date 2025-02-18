"use client";

import { cn } from "@/lib/utils";
import Image, { ImageLoader } from "next/image";

const imageLoader: ImageLoader = (config) => {
  const { src, quality } = config;
  const srcPaths = src.split("upload/");
  const urlStart = srcPaths[0];
  const urlEnd = srcPaths[1];
  const transformations = `h_200,q_${quality}`;

  return `${urlStart}upload/${transformations}/${urlEnd}`;
};

type Props = {
  imageUrl: string;
  title: string;
  styles?: string;
  width?: number;
  height?: number;
};

export default function PostImage({
  imageUrl,
  title,
  width = 300,
  height = 200,
  styles,
}: Props) {
  return (
    <div className="overflow-hidden">
      <Image
        loader={imageLoader}
        src={imageUrl}
        alt={title}
        className={cn(
          "h-[15rem] w-full object-cover sm:h-[18rem] xl:h-[20rem]",
          styles,
        )}
        width={width}
        height={height}
        quality={75}
      />
    </div>
  );
}
