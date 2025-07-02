"use client";
import * as React from "react";

interface ImageColumnProps {
  backgroundImage: string;
  overlayImage: string;
  position: "start" | "center";
}

export const ImageColumn: React.FC<ImageColumnProps> = ({
  backgroundImage,
  overlayImage,
  position,
}) => {
  const itemsPosition = position === "center" ? "items-center" : "items-start";

  return (
    <div
      className={`flex relative flex-col grow justify-center ${itemsPosition} px-20 py-80 aspect-[0.586] max-md:px-5 max-md:py-24 max-md:mt-10`}
    >
      <img
        src={backgroundImage}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <img
        src={overlayImage}
        alt=""
        className="object-contain w-9 aspect-[0.86]"
      />
    </div>
  );
};
