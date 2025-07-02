import React from "react";

interface CarouselControlsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  onPrevClick,
  onNextClick,
}) => {
  return (
    <>
      <button
        type="button"
        onClick={onPrevClick}
        aria-label="Previous slide"
        tabIndex={0}
        className="absolute top-2/4 z-50 min-w-[40px] min-h-[40px] border-none bg-transparent -translate-y-2/4 cursor-pointer left-[121px] max-md:left-5 max-sm:hidden flex items-center justify-center focus:outline-none"
      >
        <span className="block w-0 h-0 border-solid border-l-[36px] border-l-lime-300 border-y-[20.785px] border-y-transparent rotate-180" />
      </button>
      <button
        type="button"
        onClick={onNextClick}
        aria-label="Next slide"
        tabIndex={0}
        className="absolute right-48 top-2/4 z-50 min-w-[40px] min-h-[40px] border-none bg-transparent -translate-y-2/4 cursor-pointer max-md:right-5 max-sm:hidden flex items-center justify-center focus:outline-none"
      >
        <span className="block w-0 h-0 border-solid border-l-[36px] border-l-lime-300 border-y-[20.785px] border-y-transparent" />
      </button>
    </>
  );
};
