"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay  } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    title: "Bulk Milk Coolers",
    desc: "Efficient cooling systems to preserve milk quality at collection centers.",
    image: "/prod/7.jpg",
    icon: "/icons/milk.svg",
  },
  {
    title: "Milk Storage Tanks",
    desc: "Food-grade stainless steel tanks for hygienic milk storage.",
    image: "/prod/1.jpg",
    icon: "/icons/tank.svg",
  },
   {
    title: "Milk Chilling Plant",
    desc: "Efficient cooling systems to preserve milk quality at collection centers.",
    image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768459877/milk-chilling-plant_vezdki.jpg",
    icon: "/icons/milk.svg",
  },
  {
    title: "Milk Pasteurizer",
    desc: "Advanced pasteurization equipment ensuring food safety standards.",
    image: "/prod/2.jpg",
    icon: "/icons/heat.svg",
  },
  {
    title: "Milk ATM",
    desc: "Compact dairy processing solutions for all scales of operation.",
    image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389098/Milk_ATM_Machine_uvb64m.webp",
    icon: "/icons/factory.svg",
  },
   

    {
    title: "Steam Boilers",
    desc: "Efficient cooling systems to preserve milk quality at collection centers.",
    image: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389100/Steam_Boiler_300_Kg_tgwmka.webp",
    icon: "/icons/milk.svg",
  },

     {
    title: "Dairy Equipment",
    desc: "Efficient cooling systems to preserve milk quality at collection centers.",
    image: "/prod/4.jpg",
    icon: "/icons/milk.svg",
  },
];

export default function ProductCategorySlider() {
  return (
    <section style={{backgroundImage:"url(/bgwave.svg)"}} className="relative py-20 overflow-hidden bg-cover bg-center">

      {/* SECTION TITLE */}
      <h2 className="text-center text-3xl md:text-[44px] font-semibold text-white my-8">
      Our Category Range
      </h2>

      <div className="max-w-[1320px] mx-auto px-[15px]">
        <Swiper
          modules={[Navigation,Autoplay]}
          navigation
            autoplay={{
    delay: 2500,         // 2.5 seconds per slide
    disableOnInteraction: false, // continues after user swipes
  }}
  loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {categories.map((item, i) => (
            <SwiperSlide key={i}>
              {/* CARD */}
              <div
                className="relative bg-[#f4f6f1] rounded-[28px] overflow-visible shadow-xl
                transition-all duration-300 ease-out
                hover:-translate-y-[10px]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                group"
              >
                {/* IMAGE */}
                <div className="relative h-[300px] overflow-hidden rounded-t-[28px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                
                </div>

                {/* CONTENT */}
                <div className="relative pt-5 px-[28px] pb-[56px] rounded-l-[28px] text-center bg-[#f4f6f1] rounded-b-[28px]">
                  <h3 className="text-[20px] font-semibold text-[#1c103b] mb-[10px]">
                    {item.title}
                  </h3>

                  <p className="text-[14px] leading-[24px] text-black">
                    {item.desc}
                  </p>

                  {/* CURVED EXTENSION */}
                  <div className="absolute left-0 right-0 bottom-[-30px]
                    h-[64px] bg-[#f4f6f1] rounded-b-[28px]" />

                  {/* GRADIENT SHADOW */}
                  <div className="absolute left-[20px] right-[20px] bottom-[-42px]
                    h-[42px] bg-gradient-to-b from-black/30 to-transparent
                    blur-[18px] opacity-60 pointer-events-none" />
                </div>

                {/* ARROW BUTTON */}
                <div
                  className="absolute right-[26px] bottom-[18px]
                  w-[46px] h-[46px] rounded-full bg-blue-500
                  flex items-center justify-center shadow-lg z-20
                  transition-all duration-300 ease-out
                  group-hover:rotate-45 group-hover:scale-110"
                >
                  <ArrowUpRight size={18} className="text-[#1c103b]" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

<div className="flex justify-center items-center">
<Link href="/products">
              <button className="mt-[20px] bg-white hover:bg-blue-500 text-black font-semibold px-[36px] py-[16px]  rounded-full transition">
            Explore more
          </button>

          </Link>
</div>
      </div>
    </section>
  );
}
