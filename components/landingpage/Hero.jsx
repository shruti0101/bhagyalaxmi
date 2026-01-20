"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [<HeroSlide1 key="s1" />, <HeroSlide2 key="s2" />];

  const [active, setActive] = useState(0);

  // ✅ Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 sec
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setActive((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden">
      {/* ✅ Slides */}
      <div className="relative w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
              index === active
                ? "opacity-100 translate-x-0 relative"
                : "opacity-0 translate-x-5 pointer-events-none"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

  

  

      {/* ✅ Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 w-2 rounded-full ${
              active === i ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= SLIDE 1 (YOUR FIRST HERO DESIGN) ================= */
function HeroSlide1() {
  return (
    <section className="relative w-full h-[60vh] md:h-[100vh] overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/check1.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-white/10" />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto flex w-full  max-w-7xl items-center px-4 py-8 md:min-h-[80vh] md:px-8 lg:min-h-[90vh] lg:px-12">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-12">
          {/* LEFT FEATURES */}
          <div className="order-2 flex flex-col justify-center gap-5 lg:order-1 lg:col-span-4">
            {/* Lion */}
            <div className="hidden lg:flex items-center justify-center sm:justify-start">
              <div className="flex items-center gap-2">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]">
                  <Image
                    src="/lion.png"
                    alt="Make In India"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <FeatureCard title="ENERGY" subtitle="EFFICIENT" icon="⚡" />
            <FeatureCard title="FDA" subtitle="APPROVED" icon="✓" />
            <FeatureCard title="24/7" subtitle="MONITORING" icon="⏱" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-7">
            <div className=" text-center sm:text-left lg:text-right">
              <p className="text-sm font-extrabold uppercase tracking-wide text-[#1e73ff] sm:text-base md:text-2xl drop-shadow-[0_3px_10px_rgba(30,115,255,0.18)]">
                RAPID AND UNIFORM MILK COOLING
              </p>

              <h1 className="mt-2 text-3xl font-extrabold uppercase text-[#0a1f44] text-5xl lg:text-6xl drop-shadow-[0_4px_14px_rgba(10,31,68,0.20)]">
                BULK MILK COOLER
              </h1>
            </div>

            <div className="md:mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-3 lg:mt-10 lg:justify-end">
              <ProductImg src="/check3.png" alt="Milk Tank 3" />
              <ProductImg src="/check2.png" alt="Milk Tank 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= SLIDE 2 (YOUR SECOND HERO DESIGN) ================= */
function HeroSlide2() {
  return (
    <section
      style={{ backgroundImage: "url(/secondcheck1.png)" }}
      className="relative w-full h-[60vh] md:h-[100vh] bg-cover bg-center bg-[#f4f5f7] overflow-hidden"
    >
      <div className="relative z-10 mx-auto  grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 lg:grid-cols-2 lg:px-10">
        {/* LEFT */}
        <div className="relative order-2 lg:order-1">
          <div className="absolute top-0 left-0 z-20 w-[160px]">
            <Image
              src="/lion.png"
              alt="Make in India"
              width={160}
              height={80}
              className="hidden md:block object-contain"
            />
          </div>

          <div className="hidden md:block relative w-full max-w-[520px]">
            <Image
              src="/secondcheck4.png"
              alt="Milk Processing Plant"
              width={520}
              height={600}
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative order-1 text-center lg:order-2 lg:text-left">
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Engineered for Reliable
            </span>
            <br />
            <span className="text-[#0a1f44]">Milk Processing</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base text-black md:text-lg lg:mx-0">
            Robust and efficient milk processing plant solutions built for long-term
            performance.
          </p>

          <div className="mt-5 flex justify-center gap-6 lg:justify-start">
            <CircleImg src="/secondcheck3.png" />
            <CircleImg src="/secondcheck2.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Feature Card -------------------- */
function FeatureCard({ title, subtitle, icon }) {
  return (
    <div className="hidden lg:flex group items-center gap-4 rounded-2xl border border-blue-200/70 bg-white/80 px-4 sm:px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]">
      <div className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full bg-gradient-to-br from-[#eaf2ff] to-white text-xl text-[#1e73ff] shadow-inner">
        {icon}
      </div>

      <div className="leading-tight">
        <p className="text-base sm:text-lg font-extrabold tracking-wide text-[#0a1f44] md:text-xl">
          {title}
        </p>
        <p className="text-xs sm:text-sm font-bold tracking-wide text-gray-600 md:text-base">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/* -------------------- Product Image -------------------- */
function ProductImg({ src, alt }) {
  return (
    <div className="relative h-[150px] w-[170px] sm:h-[105px] sm:w-[160px] md:h-[120px] md:w-[190px] lg:h-[250px] lg:w-[290px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]">
      <Image src={src} alt={alt} fill priority className="object-cover" />
    </div>
  );
}

/* -------------------- Circle Image -------------------- */
function CircleImg({ src }) {
  return (
    <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-black">
      <Image src={src} alt="" fill className="object-cover" />
    </div>
  );
}
