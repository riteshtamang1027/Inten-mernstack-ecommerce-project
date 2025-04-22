"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function PagesNav() {
  const pathname = usePathname();

  // Don't show this component on the home page
  if (pathname === "/") return null;

  return (
    <div className="lg:-mt-12">
      <Image
        className="w-full object-cover lg:h-88"
        src="/heroImage/img4.png"
        alt="Page Banner"
        width={1000}
        height={1000}
      />
    </div>
  );
}
