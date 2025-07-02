import React from "react";
import Image from "next/image";
interface CarouselSlideProps {
  image: string;
  active?: boolean;
}
const CarouselSlide: React.FC<CarouselSlideProps> = ({ image, active = false }) => {
  return (
    <article
      className={`shrink-0 ml-0 h-[672px] w-[672px] max-md:h-[500px] max-md:w-[500px] max-sm:mb-5 max-sm:h-[280px] max-sm:w-[280px] flex items-center justify-center bg-white rounded-lg shadow ${
        active ? "ring-4 ring-blue-500" : ""
      }`}
    >
      <Image
        src={image}
        alt="UN Sustainable Development Goals"
        className="object-contain h-full w-full rounded"
        fill
        sizes="(max-width: 672px) 100vw, 672px"
        style={{ objectFit: "contain", borderRadius: "inherit" }}
        priority={active}
      />
    </article>
  );
};

export default CarouselSlide;
