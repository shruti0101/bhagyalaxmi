"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaIndustry,
  FaRegCommentDots,
} from "react-icons/fa";

import { products } from "@/Data";
import axios from "axios";
import { toast } from "react-toastify";

const allproduct = products;

const Enquiry = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      platform: "BhagyaLaxmi Industries Enquiry Form",
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
      setStatus("Thank you! Your message has been sent.")
      e.target.reset();
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[3000] px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-xl relative overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-[#0B4FA8] h-13 w-full flex items-center justify-between px-6 py-4">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            📩 Enquiry Form
          </h2>
          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-red-400 transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4 bg-gradient-to-br from-blue-50 to-white">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="New Enquiry from Website"
            />
          

            {/* Name */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="text-blue-600 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                className="w-full focus:outline-none text-gray-700"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <FaEnvelope className="text-blue-600 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Your Business Email *"
                required
                className="w-full focus:outline-none text-gray-700"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <FaPhone className="text-blue-600 mr-3" />
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Your Phone"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>

            {/* Product Dropdown */}
            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <FaIndustry className="text-blue-600 mr-3" />
              <select
                name="machine"
                required
                className="w-full bg-transparent focus:outline-none text-gray-700"
              >
                <option value="">Select Product *</option>
                {allproduct.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex items-start border rounded-lg px-4 py-3 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <FaRegCommentDots className="text-blue-600 mt-1 mr-3" />
              <textarea
                name="message"
                placeholder="Your Message *"
                rows="4"
                required
                className="w-full focus:outline-none text-gray-700"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900 hover:scale-[1.02] transition"
            >
              🚀 Submit Enquiry
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p className="text-center mt-3 text-sm md:text-base">
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
