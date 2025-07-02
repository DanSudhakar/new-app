"use client";

import * as React from "react";

interface StoryTitleProps {
  regularText: string;
  highlightedText: string;
  className?: string;
}

export const StoryTitle: React.FC<StoryTitleProps> = ({
  regularText,
  highlightedText,
  className = "",
}) => {
  return (
    <h2
      className={`text-6xl font-bold text-white max-md:text-4xl ${className}`}
    >
      {regularText}{" "}
      <span style={{ color: "rgba(215,255,117,1)" }}>{highlightedText}</span>
    </h2>
  );
};
