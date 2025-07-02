"use client";

import Image from "next/image";
import * as React from "react";

interface BackgroundImageProps {
  src: string;
  children: React.ReactNode;
  className?: string;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  children,
  className = "",
}) => {
  return (
    <section className={`relative ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        className="object-cover absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </section>
  );
};
