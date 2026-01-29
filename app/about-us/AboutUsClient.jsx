"use client";

import React, { useState } from "react";
import Image from "next/image";
import Cta from "@/components/landingpage/Cta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Link from "next/link";
import Bestseller from "@/components/landingpage/Bestseller";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Page = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const images = [
    "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389096/3000_L_Bulk_Milk_Cooler_pc0fzx.webp",
    "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389098/D_Shape_Bulk_Milk_Cooler_m74kix.webp",
    "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389099/Milk_Processing_Plant_rptgnh.webp",
    "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389100/Stainless_Steel_Milk_Pasteurizer_if9o69.webp",

    "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389098/D_Shape_Bulk_Milk_Cooler_m74kix.webp",
    "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389098/Milk_ATM_Machine_uvb64m.webp",
  ];

  const tabs = [
    {
      id: "vision",
      icon: <Eye className="w-14 h-14 sm:w-16 sm:h-16" />,
      title: "VISION",
      content: (
        <div className="space-y-4 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600">
            Driving Excellence in Dairy Equipment Manufacturing
          </h2>
          <p className="text-sm sm:text-base">
            Our vision is to become a benchmark bulk milk cooler manufacturer and trusted dairy equipment
            provider by consistently delivering solutions that combine performance, reliability, and hygiene.
            We strive to support modern dairy operations with innovative systems that enhance productivity
            while maintaining the highest quality standards.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
            <li>
              Delivering technologically advanced dairy equipment such as Milk Pasteurizers, Milk Storage
              Tanks, and Milk Chilling Equipment
            </li>

            <li>
              Maintaining uncompromised quality and hygiene across Stainless Steel BMC and cooling tank
              solutions
            </li>

            <li>Supporting sustainable and energy-efficient dairy practices</li>

            <li>Building long-term partnerships through trust, consistency, and performance</li>
          </ul>
        </div>
      ),
    },
    {
      id: "mission",
      icon: <Target className="w-14 h-14 sm:w-16 sm:h-16" />,
      title: "MISSION",
      content: (
        <div className="space-y-4 text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600">
            Engineering Quality. Delivering Reliability.
          </h2>
          <p className="text-sm sm:text-base">
            Our mission is to manufacture and supply high-performance bulk milk coolers and complete dairy
            equipment solutions that meet industry requirements and exceed customer expectations. Through
            precision manufacturing and continuous improvement, we aim to deliver dependable systems for
            every stage of milk handling.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
            <li>
              Designing energy-efficient and durable solutions, including Cooling Tanks, Milk Storage Tanks ,
              and Milk Pasteurizers
            </li>

            <li>
              Ensuring hygienic construction using food-grade stainless steel for Liquid Mixing Tanks and Milk
              Chilling Equipment
            </li>

            <li>
              Providing customized systems such as Semi Automatic Mini Dairy Plants, Milk ATM units , and Steam
              Boilers
            </li>

            <li>Offering reliable service, technical support, and long-term operational value</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        style={{ backgroundImage: "url(/milkflow4.webp)" }}
        className="relative h-[55vh] sm:h-[80vh] md:h-[100vh] bg-cover bg-center flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/20 "></div>

        <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            High-Performance Milk Cooling Solutions
          </h1>

          <p className="text-base sm:text-lg md:text-2xl opacity-90">
            Advanced technology ensuring purity, freshness & consistent cooling.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-3 mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* IMAGE SLIDER */}
          <motion.div
          
            className="relative h-[300px] sm:h-[380px] md:h-[420px] lg:h-[580px] overflow-hidden"
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="h-full w-full"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={img}
                    alt="Slider Image"
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* TEXT */}
          <motion.div
           
            className="px-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-tight">
              Engineering Excellence for{" "}
              <span className="text-blue-500">Modern Dairy Operations</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-black mb-4">
              At Bhagyalaxmi Industries, we are dedicated to designing and manufacturing high-performance dairy
              equipment that supports safe, efficient, and hygienic milk handling. With a strong focus on
              quality engineering and practical innovation, we deliver reliable solutions such as{" "}
              <strong>
                Milk Pasteurizers, Milk Storage Tanks, Stainless Steel Liquid Mixing Tanks, Steam Boilers,
                Stainless Steel BMC, and advanced Milk Chilling Equipment
              </strong>{" "}
              to meet the needs of modern dairy operations.
            </p>

            <p className="mt-3 text-sm sm:text-base md:text-lg">
              Our expertise lies in providing durable and efficient systems, including{" "}
              <strong>Cooling Tanks, Semi Automatic Mini Dairy Plants, and Milk ATM solutions</strong> that help
              preserve milk quality from collection to processing. Every product we manufacture is built using
              food-grade materials and precision manufacturing practices to ensure long-term durability,
              operational efficiency, and consistent performance across all stages of dairy processing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMAGE + TABS SECTION */}
      <section className="py-7 bg-white">
        <div className="w-full px-4 sm:px-6 md:px-10  grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
          {/* LEFT IMAGE */}
          <div className="w-full h-full md:mt-17 flex justify-center ">
            <Image
              width={1000}
              height={1000}
              src="/milkimg.webp"
              alt="Aanya Enterprise"
              className="object-contain rounded-md w-full max-w-[650px]"
            />
          </div>

          {/* RIGHT TABS */}
          <div className="flex flex-col justify-center mx-auto items-start px-2 sm:px-6 md:px-8 py-6 sm:py-10 w-full">
            {/* TAB BUTTONS */}
            <div className="flex flex-wrap justify-center gap-10 sm:gap-16 md:gap-20 mb-10 mx-auto">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    activeTab === tab.id ? "text-blue-500 scale-110" : "text-gray-700"
                  }`}
                >
                  <div className="mb-2">{tab.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold">{tab.title}</h3>
                  {activeTab === tab.id && (
                    <div className="h-[3px] w-12 bg-blue-600 mt-2 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>

            {/* TAB CONTENT */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 p-5 sm:p-8 rounded-xl shadow-md border border-gray-200 w-full"
            >
              {tabs.find((t) => t.id === activeTab)?.content}
            </motion.div>
          </div>
        </div>
      </section>

      <Cta />

      <Bestseller></Bestseller>

      <section
        style={{ backgroundImage: "url(/aboutlast.webp)" }}
        className="relative w-full bg-center bg-cover py-12 sm:py-16 mt-10 sm:mt-14 overflow-hidden md:bg-fixed"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[520px]">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-[3px] border-blue-700 opacity-80" />

              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/milkimg.avif"
                  alt="Bhagyalaxmi Industries - Dairy Solutions"
                  title="Bhagyalaxmi Industries"
                  width={600}
                  height={600}
                  className="w-full h-[280px] sm:h-[320px] md:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Small Badge */}
              <div className="absolute -bottom-5 left-4 sm:left-6 bg-white shadow-lg px-4 sm:px-5 py-3 rounded-xl border border-gray-100">
                <p className="text-xs sm:text-sm font-semibold text-blue-800">
                  Trusted Dairy Equipment Manufacturer
                </p>
                <p className="text-[11px] sm:text-xs text-gray-500">
                  Reliable • Hygienic • Efficient
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002B5B] leading-tight">
                Why Choose{" "}
                <span className="text-blue-500">Bhagya Laxmi Industries</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed mt-3">
                Bhagyalaxmi Industries is a trusted <b>Bulk Milk Cooler Manufacturer</b> and{" "}
                <b>Dairy Equipment Provider</b>, delivering hygienic, energy-efficient, and
                high-performance solutions for modern dairy operations.
              </p>
            </div>

            {/* Highlights (Bullet Cards) */}
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  title: "Hygienic & Food-Safe Design",
                  desc: "Built using food-grade stainless steel to ensure hygiene and compliance with food safety standards.",
                },
                {
                  title: "Energy-Efficient & Robust Construction",
                  desc: "Designed for durability, maximum efficiency, and long-term performance in daily operations.",
                },
                {
                  title: "Customizable Dairy Solutions",
                  desc: "Flexible configurations available for Mini Dairy Plants, Mixing Tanks, Milk ATM systems & cooling equipment.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-2xl bg-white/80 border border-white shadow-sm hover:shadow-md transition p-4 sm:p-5"
                >
                  <div className="mt-1 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-black">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accent Strip */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#F7A400] to-[#002B5B]" />
      </section>

      <Footer />
    </>
  );
};

export default Page;
