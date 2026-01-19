"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f6fbfc] py-8 md:py-20 relative overflow-hidden">
      {/* faint tech background */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/patterns/circuit.svg')] bg-repeat" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 lg:px-0 gap-10 lg:gap-0">
        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h2 className="text-[30px] sm:text-[36px] md:text-[42px] leading-[38px] sm:leading-[46px] md:leading-[52px] font-semibold text-blue-700">
            Why choose our services?
          </h2>

          {/* orange divider */}
          <div className="w-[48px] h-[3px] bg-green-600 mt-[16px] mb-[28px]" />

          {/* Intro Content */}
          <p className="text-black text-[15px] leading-[28px] max-w-[520px] mt-[28px]">
            Bhagyalaxmi Industries is a trusted{" "}
            <strong>bulk milk cooler manufacturer</strong> and provider of premium{" "}
            <strong>dairy equipment</strong> Our products are designed for efficiency,
            hygiene, and long-lasting performance.
          </p>

          <ul className="mt-[15px] space-y-[11px] text-black text-[15px] leading-[26px] max-w-[520px]">
            <li>
              <strong>Extensive Industry Experience –</strong> Years of expertise as a{" "}
              <strong>bulk milk cooler manufacturer</strong> ensure deep understanding
              of dairy-sector needs.
            </li>
            <li>
              <strong>High-Quality Construction –</strong> Products like{" "}
              <strong>
                Milk Pasteurizer, Milk Storage Tank, Milk Chilling Equipment,
                Stainless Steel Liquid Mixing Tank, Steam Boiler,
              </strong>{" "}
              and more are made using food-grade stainless steel.
            </li>
            <li>
              <strong>Energy-Efficient Solutions –</strong> Designed to save energy
              while delivering consistent, reliable performance.
            </li>
            <li>
              <strong>Customizable Capacities –</strong> Suitable for small, medium,
              and large dairy operations.
            </li>
            <li>
              <strong>Comprehensive Product Range –</strong> From{" "}
              <strong> bulk milk coolers </strong>to{" "}
              <strong>semi-automatic mini dairy plants</strong> and{" "}
              <strong>Milk ATM solutions.</strong>
            </li>
            <li>
              <strong>Reliable Support & Service –</strong> Expert guidance, timely
              installation, and dependable after-sales support.
            </li>
          </ul>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="space-y-[40px]">
          <Image
            width={1000}
            height={1000}
            alt="prod1"
            src="/prod1.png"
            className="w-full h-auto"
          />

          {/* CHECK LIST */}
          <ul className="space-y-[18px]">
            {[
              "Highly skilled engineering and manufacturing team with deep expertise in dairy equipment and bulk milk cooling systems.",
              "One of the most experienced dairy equipment manufacturers, trusted by cooperatives, private dairies, and milk collection centers.",
              "Successfully supplied and installed thousands of dairy projects including bulk milk coolers, milk storage tanks, pasteurizers, and chilling systems.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-[14px]">
                <span className="border border-green-600 w-[22px] h-[22px] flex items-center justify-center mt-[2px] shrink-0">
                  <Check size={14} className="text-green-600" />
                </span>
                <span className="text-[15px] text-[#0b1c2d]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
