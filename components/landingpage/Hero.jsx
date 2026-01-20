"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ================= IMAGES ================= */
const desktopImages = ["/hero1.png", "/hero2.png"];
const tabletImages = ["/mobile1.png", "/mobile2.png"];
const mobileImages = ["/mobile1.png", "/mobile2.png"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  /* ============== AUTO SLIDE ============== */
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ============== SLIDE ANIMATION ============== */
  const slideProps = {
    custom: direction,
    initial: { x: direction > 0 ? "100%" : "-100%" },
    animate: { x: 0 },
    exit: { x: direction > 0 ? "-100%" : "100%" },
    transition: { duration: 1, ease: "easeInOut" },
    className: "absolute inset-0 w-full h-full",
  };

  return (
    <>
      {/* ================= DESKTOP (LG+) ================= */}
      <section className="relative hidden lg:flex w-full mt-25 h-screen overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div key={`desktop-${currentIndex}`} {...slideProps}>
            <Image
              src={desktopImages[currentIndex]}
              alt="Desktop Hero"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ================= TABLET (MD ONLY) ================= */}
      <section className="relative hidden mt-23 md:flex lg:hidden w-full h-[80vh] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div key={`tablet-${currentIndex}`} {...slideProps}>
            <Image
              src={tabletImages[currentIndex]}
              alt="Tablet Hero"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ================= MOBILE (SM) ================= */}
      <section className="relative mt-18 block md:hidden w-full h-[55vh] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div key={`mobile-${currentIndex}`} {...slideProps}>
            <Image
              src={mobileImages[currentIndex]}
              alt="Mobile Hero"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Hero;
