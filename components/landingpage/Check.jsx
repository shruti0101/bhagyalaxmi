"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Check = () => {
  return (
    <section className="hidden md:flex relative w-full h-[95vh]  items-center justify-center overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/ctabg.png')" }}
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
            src="/prod/major1.png"
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
            src="/prod/major2.png"
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
  );
};

export default Check;
