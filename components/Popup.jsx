"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "@/Data";

export default function PopupForm({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const productList = products;

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/60 px-4">
      {/* Popup Card */}
      <div className="relative w-full max-w-[900px] overflow-hidden rounded-2xl bg-white shadow-2xl animate-[popup_0.25s_ease-out]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-50 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-gray-700 shadow hover:bg-gray-100 hover:text-black transition"
          aria-label="Close popup"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT IMAGE SECTION */}
          <div className="relative hidden md:block">
            <Image
              src="/home/abouthome1.avif"
              alt="Enquiry Form"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay content */}
            <div className="absolute inset-0   p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold">
                Get a Free Quote in Minutes
              </h3>
              <p className="text-white text-md mt-2 leading-relaxed">
                Share your requirement and our team will contact you with best
                pricing and complete details.
              </p>

              <div className="mt-5 flex gap-2 flex-wrap">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white">
                  Fast Response
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white">
                  Best Price
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white">
                  Genuine Products
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="p-6 sm:p-8 md:p-10">
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
              Get Your{" "}
              <span className="text-blue-700">Free Quote</span> Today
            </h2>

            <p className="text-center text-gray-600 text-sm mt-2 mb-6">
              Fill in your details and choose the product you need. We’ll call
              you shortly with pricing & availability.
            </p>

            {/* Form */}
            <form
              action="https://formsubmit.co/shreeshaktiinfratech@gmail.com"
              method="POST"
              className="space-y-3"
            >
              {/* Hidden Inputs */}
              <input type="hidden" name="_sponsor" value="false" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Enquiry from Website"
              />
              <input type="hidden" name="_nosponsor" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for reaching out! We will get back to you shortly."
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_cc" value="shrutiguptabhu@gmail.com" />

              {/* Inputs grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition"
                />

                {/* Mobile */}
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number*"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition"
              />

              {/* Product Select */}
              <select
                name="machine"
                required
                className="w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition"
              >
                <option value="">Select Product*</option>
                {productList.map((product) => (
                  <option key={product.id} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message "
                rows="3"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition resize-none"
              ></textarea>

              {/* Submit */}
              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl bg-blue-700 py-3 text-white font-semibold hover:bg-blue-800 transition"
              >
                Send My Enquiry →
              </button>

              {/* Small note */}
              <p className="text-xs text-gray-500 text-center mt-2">
                We respect your privacy. No spam calls.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* animation */}
      <style jsx>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
