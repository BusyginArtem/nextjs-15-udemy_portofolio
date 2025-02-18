import "./globals.css";

import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Toaster } from "react-hot-toast";

import MainHeader from "@/components/MainHeader";

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My portfolio project",
  description:
    "This is my portfolio project that was created for educational reasons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} antialiased`}>
        <div className="relative grid min-h-screen grid-rows-[6rem_1fr_20px] items-center justify-items-center bg-gradient-to-b from-grey-900 to-grey-800">
          <MainHeader />

          <main className="w-full px-4 pb-6 md:px-6">{children}</main>

          <Toaster
            position="bottom-right"
            toastOptions={{ duration: 2500, removeDelay: 1000 }}
            reverseOrder={false}
            gutter={8}
          />
        </div>
      </body>
    </html>
  );
}
