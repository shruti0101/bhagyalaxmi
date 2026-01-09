'use client'

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What capacities of bulk milk coolers do you manufacture?",
    a: "We offer a wide range of capacities suitable for small, medium, and large dairy operations. Our Milk Chilling Equipment and Milk Cooling Tanks come in multiple sizes to ensure optimal milk storage.",
  },
  {
    q: "Are your bulk milk coolers energy-efficient?",
    a: "Yes. Our bulk milk coolers and Cooling Tanks are engineered to consume minimal energy while ensuring rapid and uniform milk cooling, making them highly cost-effective for dairy farms.",
  },
  {
    q: "Do you provide customized bulk milk cooler solutions?",
    a: "Absolutely. We deliver fully customized Stainless Steel BMCs, Milk Storage Tanks, Milk Pasteurizers, and other dairy equipment based on your operational needs.",
  },
  {
    q: "What types of dairy equipment do you supply?",
    a: "We offer a complete range including Milk Chilling Equipment, Milk Storage Tanks, Semi Automatic Mini Dairy Plants, Steam Boilers, Milk ATMs, and more.",
  },
  {
    q: "How do your bulk milk coolers maintain milk quality?",
    a: "Our systems rapidly reduce milk temperature to prevent bacterial growth. Combined with Milk Cooling Tanks and Chilling Equipment, they ensure freshness, hygiene, and safety.",
  },
  {
    q: "Are your milk cooling systems easy to maintain?",
    a: "Yes. Our equipment is built with hygienic stainless steel, smooth surfaces, and easy-clean designs to support long-lasting performance.",
  },
  {
    q: "Do you offer installation and after-sales support?",
    a: "Yes. We provide expert installation, operation training, and ongoing after-sales support for all dairy machinery, including Storage Tanks and Cooling Tanks.",
  },
  {
    q: "Can your equipment be used in mini dairy plants?",
    a: "Yes. Our Semi Automatic Mini Dairy Plants combined with bulk milk coolers, Pasteurizers, and Chilling Equipment are designed for small and mid-scale operations.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 grid grid-cols-2 gap-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-gray-200 rounded-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {item.q}
                </span>

                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 p-5 pt-0" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
