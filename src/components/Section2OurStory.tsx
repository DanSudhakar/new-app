"use client";

import * as React from "react";
import { BackgroundImage } from "./BackgroundImage";
import { StoryTitle } from "./StoryTitle";

const Section2OurStory: React.FC = () => {
  return (
    <BackgroundImage
      src="https://cdn.builder.io/api/v1/image/assets/6df45d0619b3487985a68f52af585ce0/a8c0da9ce0902ce7927c8fbc0ff697c2eb2ebe72?placeholderIfAbsent=true"
      className="flex flex-col justify-center items-center px-20 py-32 w-full min-h-[1016px] max-md:px-5 max-md:py-24 max-md:max-w-full"
    >
      <div className="flex relative flex-col mb-0 w-full max-w-[1412px] max-md:mb-2.5 max-md:max-w-full">
        <StoryTitle
          regularText="Our"
          highlightedText="Story"
          className="self-start"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6df45d0619b3487985a68f52af585ce0/07a7c6f841059f9cf35c0a683035c617fe3acbc0?placeholderIfAbsent=true"
          alt=""
          className="object-contain mt-20 w-full aspect-[2.35] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </BackgroundImage>
  );
};

export default Section2OurStory;
