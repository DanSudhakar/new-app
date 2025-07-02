import React from "react";

export const CarouselHeader = () => {
  return (
    <header className="flex absolute z-10 items-baseline left-[121px] top-[130px] max-md:top-20 max-md:left-2/4 max-md:text-center max-md:-translate-x-2/4">
      <h1>
        <span className="text-6xl font-semibold tracking-normal text-[white] max-md:text-5xl max-sm:text-3xl">
          Delivering{" "}
        </span>
        <span className="text-6xl font-semibold tracking-normal text-lime-300 max-md:text-5xl max-sm:text-3xl">
          Value
        </span>
      </h1>
    </header>
  );
};
