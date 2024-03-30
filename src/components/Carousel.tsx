"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface CarouselProps {
  images: Array<{
    img: string;
    alt: string;
    title: string;
    link: string;
  }>;
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      if (touchStartX.current - touchEndX.current > 50) {
        handleNextSlide();
      } else if (touchEndX.current - touchStartX.current > 50) {
        handlePrevSlide();
      }
    }
  };

  const handleNextSlide = useCallback(() => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  },[])

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full relative">
      <button
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>

      <div
        className="w-full h-[32vh] md:h-[50vh] flex overflow-hidden relative m-auto"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => {
          if (index === currentSlide) {
            return (
              <a
                key={index}
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={image.img}
                  alt={image.alt}
                  title={image.title}
                  layout="fill"
                  className="h-auto max-w-full"
                />
              </a>
            );
          }
          return <></>
        })}
      </div>

      <button
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>

      <div className="w-full justify-center absolute bottom-2 flex z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full mx-2 mb-2 cursor-pointer ${
              index === currentSlide ? "bg-gray-700" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
