"use client";

import Image from "next/image";
import { inter } from "@/app/layout"; // adjust path if needed

export default function AboutSection() {
  return (

    <>
    
    <section className={`${inter.className} relative bg-[#F5F7F9] py-13  overflow-hidden`}>
      
      {/* Background tech pattern */}
      <div className="absolute right-0 bottom-0  pointer-events-none">
        <Image
          src="/pattern.png"
          alt=""
          width={620}
          height={520}
        />
      </div>

      <div className="max-w-[1320px] mx-auto gap-8 px-10  grid grid-cols-1 lg:grid-cols-2  items-center">











  {/* ================= RIGHT CONTENT ================= */}
        <div>
          <span className="text-blue-500 font-semibold tracking-[2px] uppercase text-[14px]">
            About Us
          </span>

          <h2 className="text-[38px] leading-[56px] font-extrabold text-blue-700 mt-[10px]">
         Bhagyalaxmi Industries – Trusted Bulk  {" "}
            <span className="relative inline-block animate-pulse">
            Milk Cooler {"  "}
              <span className="absolute left-0 -bottom-[6px] w-full h-[6px] bg-green-500"></span>
           
            </span>

Manufacturer
          </h2>

          <p className="text-black text-[16px] leading-[30px]  mt-[10px]">
          Bhagyalaxmi Industries is a trusted <strong>bulk milk cooler manufacturer</strong>  offering a complete range of advanced <strong>dairy equipment</strong>  designed to maintain milk quality, safety, and efficiency throughout the dairy process. Our product portfolio includes <strong>Bulk Milk Cooler, Stainless Steel BMC, Milk Cooling Tank, Milk Cooling Tank, and Cooling Tank,</strong>  engineered for rapid chilling, energy efficiency, and hygienic operation.
In addition to milk cooling solutions, we manufacture <strong>Milk Pasteurizer, Milk Storage Tank, Milk Chilling Equipment, Stainless Steel Liquid Mixing Tank, Steam Boiler, Semi Automatic Mini Dairy Plant, and Milk ATM systems.</strong>  Each product is built using high-quality stainless steel and modern technology to ensure durability, easy maintenance, and consistent performance for small to large dairy operations.

          </p>

          <button className="mt-[20px] bg-blue-500 hover:bg-blue-700 text-white font-semibold px-[36px] py-[16px] rounded-full transition">
            Discover more
          </button>
        </div>





        {/* ================= LEFT IMAGE STACK ================= */}
        <div className="relative">
          
          {/* Top Image */}
          <div className="">
            <Image
              src="/aboutimg.png"
              alt="Pipeline"
              width={720}
              height={720}
              className="object-cover"
            />
          </div>

          {/* Bottom Image */}
          {/* <div className="rounded-[20px] overflow-hidden w-[360px] mt-[40px] ml-[140px]">
            <Image
              src="/aboutimg.png"
              alt="Engineer"
              width={360}
              height={420}
              className="object-cover"
            />
          </div> */}

          {/* Circular Badge */}
          <div className="absolute top-[40px] right-[-40px] w-[140px] h-[140px] rounded-full bg-blue-500 animate-pulse flex items-center justify-center text-center">
            <span className="text-white text-[15px] tracking-[2px] font-semibold uppercase leading-[25px]">
              BHAGYALAXMI <br /> INDUSTRIES
            </span>
          </div>
        </div>

      

      </div>
    </section>




    </>
  );
}
