"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <section className="relative bg-[#F5F7F9] py-5 overflow-hidden">
        {/* Background tech pattern */}
        <div className="hidden md:block  absolute right-0 bottom-0 pointer-events-none">
          <Image
            src="/pattern.webp"
            alt=""
            width={720}
            height={520}
            className="max-w-[420px]   sm:max-w-[520px] md:max-w-[620px] lg:max-w-none h-auto"
          />
        </div>

        <div className="max-w-[1320px] mx-auto gap-8 px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <span className="text-blue-500 font-semibold tracking-[2px] uppercase text-[14px]">
              About Us
            </span>

            <h1 className="text-[20px] sm:text-[32px] md:text-[38px] sm:leading-[45px] md:leading-[56px] font-extrabold text-blue-700 mt-[10px]">
              Bhagyalaxmi Industries – Trusted Bulk{" "}
              <span className="relative inline-block animate-pulse">
                Milk Cooler{"  "}
                <span className="absolute left-0 -bottom-[6px] w-full h-[6px] bg-green-500"></span>
              </span>
              {"  "} Manufacturer
            </h1>

            <p className="text-black text-[15px] sm:text-[16px] leading-[26px] sm:leading-[30px] mb-7 mt-[10px]">
              Bhagyalaxmi Industries is a <Link href={"/products"} >trusted{" "} </Link>
              <Link href={"/products"} className="font-bold">bulk milk cooler manufacturer</Link> offering a complete
              range of advanced <strong>dairy equipment</strong> designed to
              maintain milk quality, safety, and efficiency throughout the dairy
              process. Our product portfolio includes{" "}
              <strong>
                Bulk Milk Cooler, Stainless Steel BMC, Milk Cooling Tank, Milk
                Cooling Tank, and Cooling Tank,
              </strong>{" "}
              engineered for rapid chilling, energy efficiency, and hygienic
              operation. In addition to milk cooling solutions, we manufacture{" "}
              <strong>
                Milk Pasteurizer, Milk Storage Tank, Milk Chilling Equipment,
                Stainless Steel Liquid Mixing Tank, Steam Boiler, Semi Automatic
                Mini Dairy Plant, and Milk ATM systems.
              </strong>{" "}
              Each product is built using high-quality stainless steel and
              modern technology to ensure durability, easy maintenance, and
              consistent performance for small to large dairy operations.
            </p>

            <div>
              <Link
                href="/about-us"
                className="md:mt-3 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-[28px] sm:px-[36px] py-[14px] sm:py-[16px] rounded-full transition"
              >
                Discover more
              </Link>
            </div>
          </div>

          {/* ================= LEFT IMAGE STACK ================= */}
          <div className="relative mt-10 lg:mt-0 hidden md:block">
            {/* Top Image */}
            <div className="">
              <Image
                src="/bhagya.webp"
                alt="Pipeline"
                width={820}
                height={820}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Circular Badge */}
            <div className="absolute top-[20px] sm:top-[40px] right-[10px] sm:right-[-40px] w-[95px] h-[95px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-full bg-blue-500 animate-pulse flex items-center justify-center text-center">
              <span className="text-white text-[10px] sm:text-[13px] md:text-[15px] tracking-[2px] font-semibold uppercase leading-[16px] sm:leading-[20px] md:leading-[25px]">
                BHAGYALAXMI <br /> INDUSTRIES
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
