"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Shivam Dairy Farms",
    role: "Owner",
    company: "Shivam Dairy Farms",
    quote:
      "Bhagyalaxmi Industries’ bulk milk cooler has improved milk quality and efficiency at our dairy farm. Excellent support and durable equipment!",
  },
  {
    name: "Greenfield Cooperatives",
    role: "Operations Team",
    company: "Greenfield Cooperatives",
    quote:
      "The Milk Chilling Equipment and Milk Storage Tanks provided by Bhagyalaxmi Industries are reliable and easy to maintain. Our operations have never been smoother.",
  },
  {
    name: "Annapurna Dairy Solutions",
    role: "Director",
    company: "Annapurna Dairy Solutions",
    quote:
      "We installed a Semi-Automatic Mini Dairy Plant from Bhagyalaxmi Industries, and it has significantly increased our productivity. Highly recommended for small and medium dairy units.",
  },
  {
    name: "Krishna Dairy Pvt. Ltd.",
    role: "Management Team",
    company: "Krishna Dairy Pvt. Ltd.",
    quote:
      "The Stainless-Steel BMC and Milk Cooling Tanks we purchased are extremely durable and energy-efficient. The team’s support was excellent throughout the process.",
  },
  {
    name: "Shree Milk Producers Cooperative",
    role: "Chairman",
    company: "Shree Milk Producers Cooperative",
    quote:
      "Bhagyalaxmi Industries provides top-notch dairy equipment, from Milk Pasteurizers to Cooling Tanks. Their guidance and after-sales service are unmatched.",
  },
];

const VISIBLE_COUNT = 3;

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = Array.from({ length: VISIBLE_COUNT }).map(
    (_, i) => testimonials[(startIndex + i) % testimonials.length]
  );

  return (
    <section
      style={{ backgroundImage: "url(/bg.webp)" }}
      className="relative overflow-hidden bg-center bg-cover py-28"
    >
      <div className="relative mx-auto w-full px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-blue-500" />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((item, index) => (
              <motion.div
                key={`${item.name}-${startIndex}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white/70 backdrop-blur-xl p-5 shadow-xl"
              >
                <Quote className="mb-5 h-8 w-8 text-blue-700 opacity-80" />
                <p className="text-base leading-relaxed text-black">
                  “{item.quote}”
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-black">
                    {item.name}
                  </h4>
                  <p className="text-xs text-blue-500">
                    {item.role} ·{" "}
                    <span className="text-blue-500">{item.company}</span>
                  </p>
                </div>

                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-blue-600" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
