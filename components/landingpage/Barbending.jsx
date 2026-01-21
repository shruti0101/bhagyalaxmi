"use client";
import React from "react";
import { CheckCircle, Factory } from "lucide-react";
import Image from "next/image";

export default function BulkMilkCoolerBlueSection() {
  return (
    <section className="relative py-8 md:py-20 overflow-hidden bg-gradient-to-br from-[#f4f9ff] via-white to-[#eef6ff]">
      {/* Soft accents */}
      <div className="absolute -top-24 -left-24 w-[260px] h-[260px] bg-blue-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-cyan-300/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-3">
              <Factory size={16} />
              Trusted Dairy Equipment Manufacturer
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Leading{" "}
              <span className="text-blue-700 animate-pulse">
                Bulk Milk Cooler
              </span>{" "}
              Manufacturer
            </h1>

            {/* Description */}
            <p className="mt-4 text-black text-base sm:text-lg leading-relaxed max-w-2xl">
              <strong className="text-black">Bhagyalaxmi Industries</strong>{" "}
              is a trusted <strong>bulk milk cooler manufacturer,</strong>{" "}
              delivering{" "}
              <strong>
                efficient, hygienic, and durable milk cooling solutions for modern
                dairy operations.
              </strong>{" "}
              Our <strong>bulk milk coolers</strong> are designed to rapidly reduce
              milk temperature, preserving freshness and preventing bacterial
              growth. Built using food-grade stainless steel and advanced
              refrigeration technology, our systems ensure consistent performance,
              easy maintenance, and long service life across{" "}
              <strong>
                dairy farms, milk collection centers, and processing plants.
              </strong>
            </p>

            {/* WHY CHOOSE US */}
            <div className="mt-2 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1 shrink-0" />
                <p className="text-black">
                  Rapid and uniform cooling to maintain milk quality
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1 shrink-0" />
                <p className="text-black">
                  Hygienic, corrosion-resistant & easy-to-clean design
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1 shrink-0" />
                <p className="text-black">
                  Energy-efficient operation for long-term cost savings
                </p>
              </div>
            </div>

            {/* PRODUCT RANGE */}
            <p className="mt-5 text-black text-sm sm:text-base max-w-2xl">
              In addition to <strong>Bulk Milk Coolers,</strong> we also manufacture
              and supply{" "}
              <strong>
                Milk Pasteurizers, Milk Storage Tanks, Stainless Steel Liquid Mixing
                Tanks, Steam Boilers, Semi-Automatic Mini Dairy Plants, Milk ATMs,
                Milk Chilling Equipment, Milk Cooling Tanks,
              </strong>{" "}
              and other dairy processing solutions.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative w-full h-[300px] sm:h-[380px] md:h-[520px] rounded-xl overflow-hidden shadow-xl"
            style={{
              backgroundImage: "url(/home/abouthome1.avif)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <Image
            className="hidden lg:block absolute object-contain right-97 bottom-10 rounded-xl"
            width={250}
            height={200}
            alt="lead"
            src="/leadbottom.jpg"
          />
        </div>
      </div>
    </section>
  );
}
