"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Check = () => {
  const clientSlider = [
    { title: "Amul Dairy", image: "/amulLogo.webp", },
    { title: "Mother Dairy", image: "/motherDairy.webp" },
    { title: "Britannia", image: "/britanniaLogo.webp" },
    { title: "Verka", image: "/verka.webp" },
    { title: "Vita", image: "/vita.webp" },
    { title: "Saras", image: "/saras.webp" },
    { title: "Sudha", image: "/sudha.webp" },
    { title: "Telangana", image: "/telangana.webp" },
    { title: "Amul Dairy", image: "/amulLogo.webp", },
    { title: "Mother Dairy", image: "/motherDairy.webp" },
    { title: "Britannia", image: "/britanniaLogo.webp" },
    { title: "Verka", image: "/verka.webp" },
    { title: "Vita", image: "/vita.webp" },
    { title: "Saras", image: "/saras.webp" },
    { title: "Sudha", image: "/sudha.webp" },
    { title: "Telangana", image: "/telangana.webp" },
  ]
  return (<>
    <section className="hidden md:flex relative w-full h-[95vh]  items-center justify-center overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/ctabg.webp')" }}
      ></div>

      <div className="absolute inset-0 bg-black/10 "></div>
      {/* Overlay Shape (angled yellow) */}

      {/* Content */}
      <div className="relative  z-20 w-full mx-auto  grid grid-cols-1 md:grid-cols-3 items-center">
        {/* Left Machine */}
        <div className="flex mt-10">
          <Image
            width={800}
            height={800}
            src="/bulkcooler.webp"
            alt="Machine Left"
            className="w-full h-full object-cover drop-shadow-2xl relative z-20"
          />
        </div>

        {/* Center Text */}
        <div className="text-center md:text-left col-span-1 md:col-span-1 space-y-4 relative z-20 mt-10">
          <h2 className="text-3xl  font-bold text-white leading-snug">
            Bulk Milk Cooler Machines You Can Rely On
          </h2>

          <p className="text-base  font-medium text-white">
            Looking for a trusted <strong>bulk milk cooler manufacturer</strong>{" "}
            and reliable <strong>dairy equipment?</strong> Bhagyalaxmi
            Industries is here to provide expert guidance and customized
            solutions for your dairy operations. Whether you need{" "}
            <strong>
              Bulk Milk Coolers, Milk Pasteurizers, Milk Storage Tanks, Milk
              Cooling Tank, Milk ATM or complete Mini Dairy Plants,
            </strong>{" "}
            High Pressure Milk Homogenizer we have the right solution for you.
          </p>

          <Link href="/products">
            <button className="px-6 py-4 mt-6 cursor-pointer bg-white text-black font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition">
              View Milk Cooler Machines
            </button>
          </Link>
        </div>

        {/* Right Machine */}
        <div className="flex justify-center    mt-30 ">
          <Image
            width={1000}
            height={1000}
            src="/prod/major2.webp"
            alt="Machine Right"
            className="w-full h-full object-cover  drop-shadow-2xl  z-20"
          />
        </div>
      </div>

      {/* Custom Clip Path */}
      <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(0 70%, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
    {/* Client Slider */}
    <section className="pt-8 bg-gray-50">
      <div className="mx-auto px-8">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-indigo-600 mb-6">
          Trusted by leading brands in the dairy industry.
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={500}
          spaceBetween={24}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
          className="pb-6"
        >
          {clientSlider.map((item, index) => (
            <SwiperSlide key={index}>
              <div title={item.title} className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">

                <div className="relative h-48 w-full">
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  </>);
};

export default Check;
