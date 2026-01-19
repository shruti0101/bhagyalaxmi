"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { products } from "@/Data";

export default function Dealer({ isOpen, onClose }) {
  const productList = products;

  // ✅ Form states
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [machine, setMachine] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setStatus("");
      setLoading(false);

      setName("");
      setEmail("");
      setPhone("");
      setPlace("");
      setCity("");
      setCustomerType("");
      setMachine("");
      setMessage("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose?.();
  };

  const cities = [
    "Select City",
    "Delhi",
    "Noida",
    "Gurgaon",
    "Faridabad",
    "Ghaziabad",
    "Other",
  ];

  const customerOptions = [
    "Please choose an option",
    "I'm a dealer",
    "I'm a contractor",
    "I'm a distributor",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const payload = {
        platform: "Shree Shakti Infratech Website",
        platformEmail: "shrutiguptabhu@gmail.com",
        name,
        phone,
        email,
        place: `${place}, ${city} (${customerType})`,
        product: machine,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (data?.success) {
        setStatus("✅ Enquiry submitted successfully!");

        // reset form after success
        setName("");
        setEmail("");
        setPhone("");
        setPlace("");
        setCity("");
        setCustomerType("");
        setMachine("");
        setMessage("");
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
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
              src="/formbg.webp"
              alt="Dealer Enquiry Form"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold">
                Dealer Enquiry Form
              </h3>
              <p className="text-white text-md mt-2 leading-relaxed">
                Share your details and our team will contact you shortly.
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
              Get Your <span className="text-blue-700">Free Quote</span> Today
            </h2>

            <p className="text-center text-gray-600 text-sm mt-2 mb-6">
              Fill in your details and choose the product you need.
            </p>

<form onSubmit={handleSubmit} className="space-y-4">

  {/* ✅ 2 Column Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {/* Name */}
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text"
      placeholder="Name*"
      required
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition"
    />

    {/* Email */}
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Email ID*"
      required
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition"
    />

    {/* Phone */}
    <input
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      type="tel"
      placeholder="Phone*"
      maxLength={10}
      pattern="[0-9]{10}"
      required
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition"
    />

    {/* Place */}
    <input
      value={place}
      onChange={(e) => setPlace(e.target.value)}
      type="text"
      placeholder="Place*"
      required
      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition"
    />

    {/* Select City */}
    <select
      value={city}
      onChange={(e) => setCity(e.target.value)}
      required
      className="w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition"
    >
      {cities.map((c, i) => (
        <option key={i} value={i === 0 ? "" : c} disabled={i === 0}>
          {c}*
        </option>
      ))}
    </select>

    {/* Choose Option */}
    <select
      value={customerType}
      onChange={(e) => setCustomerType(e.target.value)}
      required
      className="w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition"
    >
      {customerOptions.map((opt, i) => (
        <option key={i} value={i === 0 ? "" : opt} disabled={i === 0}>
          {opt}*
        </option>
      ))}
    </select>

    {/* Product Select ✅ Full width */}
    <div className="sm:col-span-2">
      <select
        value={machine}
        onChange={(e) => setMachine(e.target.value)}
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
    </div>

    {/* Message ✅ Full width */}
    <div className="sm:col-span-2">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        rows={3}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-blue-600 focus:bg-white transition resize-none"
      />
    </div>
  </div>

  {/* Submit ✅ Full width */}
  <button
    type="submit"
    disabled={loading}
    className="w-full cursor-pointer rounded-xl bg-blue-700 py-3 text-white font-semibold hover:bg-blue-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
  >
    {loading ? "Sending..." : "Send My Enquiry →"}
  </button>

  {/* Status */}
  {status && (
    <p className="text-center text-sm font-medium">
      {status}
    </p>
  )}

  <p className="text-xs text-gray-500 text-center">
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
