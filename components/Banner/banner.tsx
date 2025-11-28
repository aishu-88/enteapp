"use client";
import { useEffect, useState } from "react";

const BannerSection = () => {
  const images = [
    "../images/banner/banner1.jpg",
    "../images/banner/banner2.jpg",
    "../images/banner/banner01.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto">

        {/* Banner Wrapper */}
        <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-xl shadow-lg">

          {/* Slides */}
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out
              ${index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
              `}
            >
              <img
                src={img}
                alt={`banner-${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition
                ${i === current ? "bg-white" : "bg-white/50"}
                `}
              ></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BannerSection;
