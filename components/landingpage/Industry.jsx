"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ApplicationsSlider() {
  const applications = [

       {
      title: "Mini Dairy Plants",
      image: "/indus5.webp",
      desc: "Semi-Automatic Mini Dairy Plants, Mixing Tanks, and Steam Boilers enable efficient milk processing for small to medium-scale dairy operations.",
    },

       {
      title: "Milk Processing Units",
      image: "/indus3.webp",
      desc: "Milk Pasteurizers and Milk Storage Tanks support hygienic milk processing, storage, and preparation for further dairy products.",
    },
    {
      title: "Dairy Farms",
      image: "/indus1.webp",
      desc: "Our Bulk Milk Coolers and Milk Cooling Tanks ensure rapid and uniform milk chilling, helping dairy farms maintain milk quality from collection to storage.",
    },
    {
      title: "Milk Collection Centers",
      image: "/indus2.webp",
      desc: "Advanced Milk Chilling Equipment enables quick cooling of milk from multiple producers, preventing bacterial growth and preserving freshness.",
    },
    {
      title: "Dairy Cooperatives",
      image: "/indus4.webp",
      desc: "Cooling Tanks and Stainless Steel BMCs are designed to handle high milk volumes efficiently while maintaining strict hygiene standards.",
    },
 
 
  ];

  return (
    <section className="py-7 md:py-20 bg-gradient-to-br from-[#f7faff] via-white to-[#eef5ff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className=" mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Applications /{" "}
            <span className="text-blue-700">Industries Served</span>
          </h2>
          <p className="mt-4 text-xs md:text-base text-black ">
        Bhagyalaxmi Industries provides a comprehensive range of <strong>dairy equipment</strong>  and <strong>bulk milk coolers</strong>  designed to meet the needs of diverse dairy operations. Our products are built for <strong>efficiency, hygiene, and durability,</strong>  ensuring optimal milk preservation, storage, and processing at every stage
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {applications.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                
                {/* Image */}
                <div className="relative h-60 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-black leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
