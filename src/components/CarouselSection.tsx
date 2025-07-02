"use client";
import * as React from "react";
import { CarouselHeader } from "./CarouselHeader";
import { CarouselControls } from "./CarouselControls";
import { CarouselDots } from "./CarouselDots";
import Image from "next/image";

const CarouselSection = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slides = [
    {
      image:
        "data:image/jpeg;base64,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",
    },
    {
      image:
        "data:image/jpeg;base64,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",
    },
    {
      image:
        "data:image/jpeg;base64,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",
    },
    {
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    },
  ];
  const totalSlides = slides.length;

  

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  // Use a ref to store the touch start X position
  const touchStartXRef = React.useRef<number | null>(null);

  return (
    <main className="flex overflow-hidden relative justify-center items-center mx-auto w-full max-w-none h-screen bg-black max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
      />
      <div className="flex relative flex-col justify-center items-center max-w-[1728px] size-full">
        <CarouselHeader />
        <section className="flex relative justify-center items-center w-full h-[672px] max-md:mt-36 max-md:h-[500px] max-sm:mt-24 max-sm:h-[300px]">
          <CarouselControls
            onPrevClick={handlePrevSlide}
            onNextClick={handleNextSlide}
          />
          <div
            className="flex relative h-[672px] w-[1832px] max-md:justify-center max-md:w-full max-sm:flex-col max-sm:items-center max-sm:h-auto"
            onTouchStart={(e) => {
              touchStartXRef.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              const startX = touchStartXRef.current;
              const endX = e.changedTouches[0].clientX;
              if (typeof startX === 'number' && Math.abs(endX - startX) > 50) {
                if (endX < startX) {
                  handleNextSlide();
                } else {
                  handlePrevSlide();
                }
              }
              touchStartXRef.current = null;
            }}
          >
            {slides.map((slide, index) => {
              // Calculate the relative position of the slide to the activeSlide
              // Show 3 slides: previous, active, next
              const prevIndex = (activeSlide - 1 + totalSlides) % totalSlides;
              const nextIndex = (activeSlide + 1) % totalSlides;
              let position = "";
              if (index === activeSlide) position = "center";
              else if (index === prevIndex) position = "left";
              else if (index === nextIndex) position = "right";
              else position = "hidden";

              // Only render previous, active, and next slides
              if (position === "hidden") return null;

              // Positioning for the 3 slides
              let translateClass = "";
              if (position === "center") translateClass = "translate-x-0 scale-100 z-20 opacity-100";
              else if (position === "left") translateClass = "-translate-x-[60%] scale-90 z-10 opacity-60";
              else if (position === "right") translateClass = "translate-x-[60%] scale-90 z-10 opacity-60";

              return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out w-[60%] h-[80%] flex justify-center items-center ${translateClass}`}
                style={{
                  left: "20%",
                  top: "10%",
                }}
                aria-hidden={index !== activeSlide}
              >
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full rounded-2xl shadow-lg"
                  draggable={false}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    userSelect: "none",
                  }}
                  fill
                  sizes="(max-width: 991px) 100vw, 60vw"
                  priority={index === activeSlide}
                />
              </div>
              );
            })}
          </div>
        </section>
        {/* Move CarouselDots below the section so it appears above the slides */}
        <CarouselDots
          totalDots={totalSlides}
          activeDot={activeSlide}
          onDotClick={handleDotClick}
        />
      </div>
    </main>
  );
};

export default CarouselSection;
