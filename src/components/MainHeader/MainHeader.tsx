"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function MainHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 flex h-24 w-full items-center justify-between bg-gray-700 px-[10%] transition-all duration-500 ease-in-out",
        {
          "-translate-y-10 pt-8": scrolled,
          "translate-y-0": !scrolled,
        },
      )}
    >
      {children}
    </header>
  );
}
