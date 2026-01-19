"use client";
import React, { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { CheckCheck } from "lucide-react";

const Image = lazy(() => import("next/image"));

const products = [
  {
    id: 1,
    badge: "Best Seller",
    name: "Bulk Milk Cooler (BMC)",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389097/Bulk_Milk_Cooler_1500_Liter_kpoi2o.webp",
    details: {
      Capacity: "500 Litres",
      "Tank Orientation": "Horizontal",
      "Cooling Temperature": "0–4°C",
      "Chilling Time": "4 Hours",
      "Steel Grade": "SS304 Food Grade",
      Application: "Dairy farms & Milk collection centres",
    },
  },

  {
    id: 2,
    badge: "New",
    name: "Milk ATM Vending Machine",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389098/Milk_ATM_Machine_uvb64m.webp",
    details: {
      "Storage Capacity": "100 Litres",
      Material: "Stainless Steel (SS)",
      "Automation Grade": "Fully Automatic",
      "Power Source": "Electric",
      "Type of Beverage": "Milk",
      Usage: "Milk vending for shops & dairy centres",
    },
  },

  {
    id: 3,
    badge: "Hot",
    name: "Milk Pasteurizer Machine",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389100/Stainless_Steel_Milk_Pasteurizer_Plate_txqdd4.webp",
    details: {
      Capacity: "1000 Litres / Hour",
      Material: "MS (Mild Steel)",
      "Automation Grade": "Semi-Automatic",
      Power: "20 HP",
      "Equipment Type": "Milk Pasteurizer",
      Application: "Industrial dairy processing",
    },
  },

  {
    id: 4,
    badge: "Top Rated",
    name: "Milk Processing Plant",
    image:
      "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1768389099/Milk_Processing_Plant_rptgnh.webp",
    details: {
      "Tank Orientation": "Horizontal",
      Material: "Stainless Steel (SS)",
      Voltage: "220V",
      Frequency: "50Hz",
      "Storage Material": "Milk / Dairy",
      Application: "Large-scale milk processing plants",
    },
  },
];

export default function ProductSectionPremium() {
  const [active, setActive] = useState(0);

  /* 🔁 AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const product = products[active];

  return (
    <section className="w-full mx-auto px-4 sm:px-6 md:px-10 mt-10">
      {/* Heading */}
      <div className="text-center mb-7">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight capilalize">
          Our <span className="text-blue-700">Bestsellers</span>
        </h2>
        <p className="mt-4 sm:mt-5 text-black max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
          Engineered construction machinery delivering unmatched durability,
          productivity, and performance on-site.
        </p>
      </div>

      <div className="grid md:grid-cols-[340px_1fr] gap-8 md:gap-12">
        {/* LEFT SELECTOR */}
        <div className="space-y-4 sm:space-y-5">
          {products.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              className={`relative w-full text-left rounded-2xl p-4 sm:p-5 transition-all duration-300 
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
              <h4 className="mt-1 font-semibold text-base sm:text-lg leading-snug">
                {item.name}
              </h4>
            </button>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-blue-200 p-5 sm:p-7 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
            {/* IMAGE */}
            <div className="relative flex justify-center">
              <div className="absolute -bottom-6 w-[70%] h-6 bg-black/10 blur-xl rounded-full" />

              <Suspense
                fallback={
                  <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] bg-gray-200 animate-pulse rounded-2xl" />
                }
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={420}
                  height={420}
                  className="object-contain relative z-10 w-[260px] h-auto sm:w-[320px] md:w-[420px]"
                />
              </Suspense>

              <span className="absolute top-4 right-0 bg-[#FAAC18] text-white text-xs px-4 py-1 rounded-full z-10">
                {product.badge}
              </span>
            </div>

            {/* DETAILS */}
            <div className="w-full">
              <h3 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6">
                {product.name}
              </h3>

              <div className="space-y-3 sm:space-y-4 text-sm">
                {Object.entries(product.details).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex items-start sm:items-center justify-between gap-4"
                  >
                    <span className="text-black flex items-center gap-2 whitespace-nowrap">
                      <CheckCheck className="text-blue-600 shrink-0" />
                      {key}
                    </span>
                    <span className="font-medium text-black text-right break-words">
                      {val}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/contact-us">
                <button className="mt-7 sm:mt-8 inline-flex items-center gap-2 bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 cursor-pointer rounded-xl font-semibold hover:shadow-lg hover:bg-blue-600 transition w-full sm:w-auto justify-center">
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
