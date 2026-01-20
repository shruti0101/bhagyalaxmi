"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/Data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  const tabs = [{ id: "all", name: "All Products" }, ...categories];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (id) => {
    setLoading(true);
    setTimeout(() => {
      setActiveCategory(id);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const getCategoryName = () => {
    if (activeCategory === "all") return "all products ";
    const cat = categories.find((c) => c.id === activeCategory);
    return cat ? cat.name : "Products";
  };

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[420px] md:h-[100vh] flex items-center justify-center">
        <Image
          src="/aboutbanner.webp"
          alt="all products "
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/40" />

        <div className="relative z-10 text-center px-6">
          <h1 className="uppercase text-3xl md:text-6xl font-extrabold tracking-widest text-white">
            {getCategoryName()}
          </h1>
          <p className="mt-4 text-white text-sm md:text-lg max-w-3xl mx-auto">
            Precision-engineered machines built for durability, performance,
            and industrial excellence.
          </p>
        </div>
      </section>

      {/* ================= CATEGORY BAR ================= */}
      <div className="sticky top-0 z-40 bg-[#eef0f1] backdrop-blur border-b shadow-sm">
        <div className="w-full mx-auto px-10">
          <div className="flex gap-10 overflow-x-auto scrollbar-hide justify-start md:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id)}
                className={`relative py-5 text-sm md:text-base font-semibold uppercase tracking-wider transition
                  ${
                    activeCategory === tab.id
                      ? "text-emerald-700"
                      : "text-gray-700 hover:text-emerald-700"
                  }`}
              >
                {tab.name}
                {activeCategory === tab.id && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-emerald-700" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PRODUCT GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-[430px] rounded-3xl bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-3xl overflow-hidden border  border-emerald-700 transition shadow-md hover:shadow-2xl flex flex-col"
              >
                {/* IMAGE — BIG, DOMINANT */}
                <div className="relative h-[300px] md:h-[260px] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
                  <Image
                    src={product.image.src}
                    alt={product.name}
                    fill
                    className="object-contain border-1 group-hover:scale-110 transition duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="px-6 py-2 border border-white text-white text-sm tracking-widest uppercase">
                      View Product
                    </span>
                  </div>
                </div>

                {/* INFO */}
                <div className="px-6 py-3 text-center">
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition">
                    {product.name}
                  </h2>
                </div>

         
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
