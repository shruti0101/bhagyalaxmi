"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* Images */
const desktopImages = ["/hero2.png", "/hero1.png"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[190px] sm:h-[370px] md:h-[80vh] xl:h-[100vh] bg-[#F5F7F9]
      "
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* ✅ Next Image Responsive */}
      <Image
  src={desktopImages[index % desktopImages.length]}
  alt="Hero banner"
  width={3000}
  height={3000}
  className="w-full h-auto object-cover"
/>

        </motion.div>
      </AnimatePresence>
    </section>
  );
}
