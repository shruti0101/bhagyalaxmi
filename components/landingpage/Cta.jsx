"use client";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CTASection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      platform: "BhagyaLaxmi Industries CTA Form",
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
      // setStatus("Thank you! Your message has been sent.")
      e.target.reset();
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <section
      style={{ backgroundImage: "url(/formbg.webp)" }}
      className="w-full relative bg-center bg-cover py-9 px-4 sm:px-6 md:px-10"
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center z-10">
        {/* Left Side Image */}
        <div className="w-full h-full flex justify-center">
          <img
            src="/ctaimg.webp"
            alt="Contact Us"
            className="w-full max-w-[520px] md:max-w-none h-[260px] sm:h-[320px] md:h-[480px] object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-4 sm:p-5 rounded-xl shadow-lg border border-blue-200 w-full">
          <p className="text-black mb-2 text-sm sm:text-base">
            Fill out the form and our team will contact you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block font-semibold text-black mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold text-black mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-black mb-1">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block font-semibold text-black mb-1">
                Message
              </label>
              <textarea
                name="message"
                className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                placeholder="Write your message..."
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1447E6] text-white cursor-pointer py-3 rounded-lg font-semibold text-base sm:text-lg transition"
            >
              Submit Details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
