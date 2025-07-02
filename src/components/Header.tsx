"use client";
import * as React from "react";
import { Navigation } from "./Navigation";
import { HeroContent } from "./HeroContent";
import { BackgroundIllustration } from "./BackgroundIllustration";

export default function Header() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <header className="overflow-hidden relative w-full h-screen bg-neutral-800">
        <div className="absolute top-0 left-0 bg-neutral-800 size-full" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/51f8943e646b00dced15173940db81e582ee6abc?placeholderIfAbsent=true"
          alt="Company Logo"
          className="absolute z-10 h-[54px] left-[137px] top-[307px] w-[220px] max-md:top-10 max-md:left-10 max-md:h-11 max-md:w-[180px] max-sm:top-5 max-sm:left-5 max-sm:h-[37px] max-sm:w-[150px]"
        />
        <Navigation />
        <HeroContent />
        <BackgroundIllustration />
      </header>
    </>
  );
}
