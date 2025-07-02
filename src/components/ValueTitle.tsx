"use client";
import * as React from "react";

export const ValueTitle: React.FC = () => {
  return (
    <header className="z-10 px-16 pt-32 pb-24 w-full text-6xl font-semibold text-white bg-black rounded-full max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full max-md:text-4xl">
      Delivering <span style={{ color: "rgba(215,255,117,1)" }}>Value</span>
    </header>
  );
};
