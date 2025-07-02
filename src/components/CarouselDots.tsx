import React from "react";

interface CarouselDotsProps {
  totalDots: number;
  activeDot: number;
  onDotClick: (index: number) => void;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  totalDots,
  activeDot,
  onDotClick,
}) => {
  return (
    <nav className="flex absolute left-2/4 z-10 gap-8 -translate-x-2/4 bottom-[142px] max-md:bottom-20 max-sm:bottom-10 max-sm:gap-5">
      {[...Array(totalDots)].map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={activeDot === index ? "true" : "false"}
          className={`w-4 h-4 rounded-full cursor-pointer max-sm:w-3 max-sm:h-3 ${
            activeDot === index ? "bg-lime-300" : "bg-white"
          }`}
        />
      ))}
    </nav>
  );
};
