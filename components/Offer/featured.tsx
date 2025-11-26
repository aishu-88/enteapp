"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Featured = () => {
  const images = [
    "/images/banner/banner1.jpg",
    "/images/banner/of01.jpg",
    "/images/banner/banner2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (images.length - 2));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
            Featured Offers
        </h2>
        {/* 3 Cards Carousel - Only Images */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
                style={{ width: "33.333%" }}
              >
                <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-[4/5] md:aspect-[3/4] relative">
                    <Image
                      src={src}
                      alt={`Banner ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: images.length - 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 ${
                i === currentIndex
                  ? "bg-black w-10 h-2 rounded-full"
                  : "bg-gray-400 w-2 h-2 rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;