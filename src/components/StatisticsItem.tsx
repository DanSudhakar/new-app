"use client";

import * as React from "react";

interface StatisticsItemProps {
  value: string;
  label: string;
}

export const StatisticsItem: React.FC<StatisticsItemProps> = ({
  value,
  label,
}) => {
  return (
    <article className="flex flex-col gap-6 items-center max-sm:gap-4">
      <h2 className="text-6xl tracking-tight text-center text-blue-50 leading-[64px] max-md:text-5xl max-md:leading-10 max-sm:text-4xl max-sm:leading-9">
        {value}
      </h2>
      <p className="text-base tracking-tight leading-6 text-center text-white max-md:text-sm max-sm:text-xs">
        {label}
      </p>
    </article>
  );
};
