"use client";

import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import SectionTitle from "../Common/SectionTitle";

const services = [
  {
    id: 1,
    title: "The Golden Dine",
    description: "Fine dining with local flavours",
    phone: "+123 4567890",
    address: "1234 Avenue Street, California",
    rating: "4.8",
    img: "https://i.pinimg.com/736x/11/d5/b4/11d5b4ec505494a9cc68488258fe1f05.jpg",
  },
  {
    id: 2,
    title: "Urban Retreat Spa",
    description: "Relaxation, therapy & rejuvenation",
    phone: "+987 6543210",
    address: "56 Market Road, New York",
    rating: "4.7",
    img: "https://i.pinimg.com/736x/95/ba/0f/95ba0f3e338a1ad09ea8116c12cb5ad2.jpg",
  },
  {
    id: 3,
    title: "City Fitness Club",
    description: "Premium gym and fitness services",
    phone: "+321 7650987",
    address: "89 Fitness Lane, Chicago",
    rating: "4.6",
    img: "https://i.pinimg.com/1200x/85/4a/b7/854ab73ff86d18a027dbe1862dd67a4a.jpg",
  },
  {
    id: 4,
    title: "Royal Beauty Salon",
    description: "Professional beauty and grooming",
    phone: "+555 1234567",
    address: "22 Downtown Street, Miami",
    rating: "4.9",
    img: "https://i.pinimg.com/736x/b9/df/1c/b9df1cf7d419d417224fd1d0b6287121.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        
        <SectionTitle
          title="Our Services"
          paragraph="Discover essential local services—Connecting you with trusted local shops and service providers in your area.."
          center
          mb="50px"
        />

        {/* Services Grid */}
        <div className="-mx-4 flex flex-wrap">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full px-4 md:w-1/2 lg:w-1/2 mb-8 wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                {/* Image */}
                <div className="relative w-full h-[200px]">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      {service.title}
                    </h3>
                    <span className="text-yellow-500 font-semibold">
                      ⭐ {service.rating}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {service.description}
                  </p>

                  <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    📞 {service.phone}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    📍 {service.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ORIGINAL BACKGROUND — KEPT EXACTLY SAME */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default ServicesSection;
