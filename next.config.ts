import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname:
      //     "artembusyhin-nextjs-udemy-users-image.s3.eu-west-1.amazonaws.com",
      //   port: "",
      //   pathname: "/**",
      // },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "", // Leave empty for default ports (80 for http, 443 for https)
        pathname: "/dtrl8p5mc/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
