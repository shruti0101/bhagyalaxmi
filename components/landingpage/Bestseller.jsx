"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { CheckCheck } from "lucide-react";

const Image = lazy(() => import("next/image"));

const products = [
  {
    id: 1,
    badge: "Best Seller",
    name: "Bulk Milk Cooler (BMC) – Direct Expansion",
    image: "/prod/6.jpg",
    details: {
      "Capacity": "500 Litres",
      "Cooling System": "Direct Expansion (DX)",
      "Material": "SS 304 Food Grade",
      "Compressor": "Hermetic",
      "Application": "Village Dairy Collection",
    },
  },
  {
    id: 2,
    badge: "New",
    name: "Milk Storage Tank – Vertical",
    image: "/prod/3.jpg",
    details: {
      "Capacity": "1000 Litres",
      "Material": "Stainless Steel 304",
      "Insulation": "PUF Layer",
      "Finish": "Mirror Polish Inside",
      "Usage": "Bulk Milk Holding",
    },
  },
  {
    id: 3,
    badge: "Hot",
    name: "Milk Chilling Plant",
    image: "/prod/2.jpg",
    details: {
      "Model": "MCP-2000",
      "Capacity": "2000 Litres/Hour",
      "Cooling Type": "Rapid Cooling",
      "Refrigerant": "Eco-Friendly Gas",
      "Power Consumption": "Low Energy",
    },
  },
  {
    id: 4,
    badge: "Top Rated",
    name: "Milk Pasteurizer Machine",
    image: "/prod/1.jpg",
    details: {
      "Capacity": "300 Litres",
      "Heating Method": "Electric / Steam",
      "Temperature Range": "Up to 95°C",
      "Material": "SS 304/316",
      "Application": "Milk, Curd, Ghee",
    },
  },
 
];


export default function ProductSectionPremium() {
  const [active, setActive] = useState(0);

  /* 🔁 AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 5000); // change slide every 5 sec

    return () => clearInterval(interval);
  }, []);

  const product = products[active];

  return (
    <section className="w-full mx-auto px-10 mt-10">
      {/* Heading */}
      <div className="text-center mb-7">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight capilalize">
          Our <span className="text-blue-700">Bestsellers</span>
        </h2>
        <p className="mt-5 text-black max-w-2xl mx-auto text-lg">
          Engineered construction machinery delivering unmatched durability,
          productivity, and performance on-site.
        </p>
      </div>

      <div className="grid md:grid-cols-[340px_1fr] gap-12">
        {/* LEFT SELECTOR */}
        <div className="space-y-5 ">
          {products.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              className={`relative w-full text-left rounded-2xl p-5 transition-all duration-300 
                ${
                  active === index
                    ? "bg-gradient-to-r from-blue-500/20 to-transparent shadow-lg border border-blue-500"
                    : "bg-white border border-gray-200 hover:shadow-md"
                }`}
            >
              {active === index && (
                <span className="absolute left-0 top-4 h-[70%] w-[4px] bg-blue-500 rounded-full" />
              )}

              <p className="text-xs uppercase tracking-wide text-gray-500">
                {item.badge}
              </p>
              <h4 className="mt-1 font-semibold text-lg leading-snug">
                {item.name}
              </h4>
            </button>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="relative rounded-3xl  bg-white/80 backdrop-blur-xl shadow-2xl border border-blue-200 p-8 md:p-10 ">
          <div className="grid md:grid-cols-2 gap-10 items-center ">
            {/* IMAGE */}
            <div className="relative flex justify-center">
              <div className="absolute -bottom-6 w-[70%] h-6 bg-black/10 blur-xl rounded-full" />

              <Suspense
                fallback={
                  <div className="w-[320px] h-[320px] bg-gray-200 animate-pulse rounded-2xl" />
                }
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={420}
                  height={420}
                  className="object-contain relative z-10"
                />
              </Suspense>

              <span className="absolute top-4 left-4 bg-[#FAAC18] text-white text-xs px-4 py-1 rounded-full z-10">
                {product.badge}
              </span>
            </div>

            {/* DETAILS */}
            <div>
              <h3 className="text-3xl font-bold mb-6">
                {product.name}
              </h3>

              <div className="space-y-4 text-sm">
                {Object.entries(product.details).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-black flex items-center gap-2">
                      < CheckCheck className="text-blue-600" />
                      {key}
                    </span>
                    <span className="font-medium text-black">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/contact-us">
                <button className="mt-8 inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 cursor-pointer rounded-xl font-semibold hover:shadow-lg hover:bg-blue-600 transition">
                  Inquire Now
                  <span className="text-xl">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
