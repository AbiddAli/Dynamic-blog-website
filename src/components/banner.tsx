"use client";

import React, { useState } from "react";

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/image/banner.jpg",
      title: "A Fresh Start, A New Chapter!",
      description:
        "Step into the New Year with optimism, happiness, and limitless opportunities. Here's to making this year brighter and more fulfilling than ever. Cheers to new beginnings!",
    },
    {
      image: "/image/banner1.jpg",
      title: "Pioneering the Future with Innovation",
      description:
        "Explore the transformative power of technology as it redefines our world, propels progress, and opens doors to endless possibilities for a brighter tomorrow.",
    },
    {
      image: "/image/banner6.jpg",
      title: "Unleashing Potential with Agentic AI",
      description:
        "Dive into the revolutionary world of Agentic AI, where intelligent, autonomous systems transform decision-making by adapting and evolving through real-time data. Embrace the future of automation and innovation!",
    },
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="flex w-full h-full relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-50 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`bg-black bg-opacity-70 text-white p-4 absolute bottom-4 left-4 z-20 transition-all ${
                currentSlide === index ? "opacity-100" : "opacity-50"
              }`}
            >
              <h2 className="text-3xl font-extrabold">{slide.title}</h2>
              <p className="text-lg mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full z-30"
      >
        &#10094;
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full z-30"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Banner;

