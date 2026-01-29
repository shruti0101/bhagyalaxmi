"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "@/Data";
import axios from "axios";
import { toast } from "react-toastify";

export default function PopupForm({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      platform: "BhagyaLaxmi Industries Popup Form",
      platformEmail: "bhagyalaxmigroup12@gmail.com",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: formData.get("machine"),
      place: "N/A",
      message: formData.get("message"),
    };
    if (data.phone.toString().length < 10) return toast.error("Enter Valid Phone Number")
    try {
      const res = await axios.post("https://brandbnalo.com/api/form/add", data);
      toast.success("Message Send Successfully")
      e.target.reset();
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/60 px-3 sm:px-4">
      {/* CARD */}
      <div className="relative w-full max-w-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] animate-[popup_0.25s_ease-out]">

        {/* CLOSE */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-50 h-9 w-9 rounded-full bg-white shadow grid place-items-center text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* LEFT IMAGE (HIDDEN ON MOBILE) */}
          <div className="relative hidden md:block">
            <Image
              src="/home/abouthome1.avif"
              alt="Enquiry"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl lg:text-2xl font-bold">
                Get a Free Quote in Minutes
              </h3>
              <p className="text-white/90 text-sm mt-2">
                Share your requirement and get best pricing & details.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Fast Response", "Best Price", "Genuine Products"].map(
                  (item) => (
                    <span
                      key={item}
                      className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-4 sm:p-6 md:p-8 overflow-y-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
              Get Your <span className="text-blue-700">Free Quote</span>
            </h2>

            <p className="text-center text-gray-600 text-xs sm:text-sm mt-2 mb-5">
              Fill your details & select product. Our team will contact you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              {/* Hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for reaching out! We will contact you shortly."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name*"
                  className="input"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Mobile Number*"
                  className="input"
                />
              </div>

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address*"
                className="input"
              />

              <select name="machine" required className="input">
                <option value="">Select Product*</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                rows={3}
                placeholder="Message"
                className="input resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
              >
                Send My Enquiry →
              </button>

              <p className="text-[11px] text-gray-500 text-center">
                We respect your privacy. No spam calls.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          outline: none;
        }
        .input:focus {
          border-color: #2563eb;
          background: #fff;
        }
      `}</style>
    </div>
  );
}
