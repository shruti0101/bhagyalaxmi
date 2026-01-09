"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// import Heroform from "@/components/Landingpage/Heroform";

// ✅ Separate images
const desktopImages = ["/hero1.png",  ];
const mobileImages = ["/mobile3.webp","/mobile2.webp","/mobile1.webp","/mobile4.webp"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + desktopImages.length) % desktopImages.length);
  };

  return (
    <>
      {/* ✅ Desktop Hero */}
      <section className="relative hidden md:flex justify-end w-full h-[90vh] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`desktop-${currentIndex}`}
            className="absolute inset-0 w-full h-full"
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={desktopImages[currentIndex]}
              alt={`Desktop banner ${currentIndex + 1}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

       
      </section>

      {/* ✅ Mobile Hero */}
      <section className="relative block md:hidden w-full mt-24 h-[50vh]  overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`mobile-${currentIndex}`}
            className="absolute inset-0 w-full h-full"
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={mobileImages[currentIndex]}
              alt={`Mobile banner ${currentIndex + 1}`}
              width={600}
              height={1200}
              priority
              // sizes="100vw"
              className="object-cover "
            />
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Hero;
