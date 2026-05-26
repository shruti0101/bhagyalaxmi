"use client";

import React, { useState } from "react";
import Image from "next/image";
import Cta from "@/components/landingpage/Cta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Link from "next/link";
import Bestseller from "@/components/landingpage/Bestseller";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ProductCategorySlider from "@/components/landingpage/Productcategory";
import ProductSectionPremium from "@/components/landingpage/Bestseller";
import { products } from "@/Data";
import axios from "axios";
import { toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";
import PopupForm from "@/components/Popup";
import Enquiry from "@/components/Enquiry";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { auth } from "@/utils/firebase";

/* Images */
const Cooler = "/check3.webp";
const BgHero = "/aboutbanner.webp";

const Inquiry = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);
  const reasons = [
    "30+ Years of Experience as a trusted bulk milk cooler manufacturer",
    "Nationwide reach as bulk milk cooler suppliers",
    "100% Genuine Spare Parts",
    "1-Year Warranty on all stainless steel bulk milk cooler models",
    "Shortest cooling time guaranteed",
    "Made in India, 100% in-house manufacturing",
    "Robust, high-quality BMC Milk Machine Supplier",
    "Energy-efficient and low electricity consumption",
    "After-sales service and support",
    // "Laser-welded evaporation plates for long-lasting performance",
  ];

  const faqs = [
    {
      question: "Are you a bulk milk cooler manufacturer or supplier?",
      answer:
        "Yes, Bhagyalaxmi Industries is a leading bulk milk cooler manufacturer as well as a reliable bulk milk cooler supplier. We design and manufacture high-quality BMC machines in our in-house facility.",
    },
    {
      question: "What types of bulk milk coolers do you manufacture?",
      answer:
        "We manufacture a wide range of stainless steel bulk milk coolers, including open type and closed type bulk milk cooling tanks, suitable for dairy farms, milk collection centers, and processing plants.",
    },
    {
      question: "Do you supply BMC machines across India?",
      answer:
        "Yes, we are trusted BMC machine suppliers serving customers across India. We also support clients searching for bulk milk cooler dealers near me with timely delivery and service support.",
    },
    {
      question: "Why choose stainless steel bulk milk coolers?",
      answer:
        "Our SS bulk milk coolers ensure hygienic milk storage, faster cooling, corrosion resistance, and long service life, making them ideal for dairy operations.",
    },
    {
      question: "Do you provide after-sales service and spare parts?",
      answer:
        "Yes, as a dependable BMC milk machine supplier and dairy milk chiller machine manufacturer, we provide after-sales support along with genuine spare parts to ensure smooth long-term operation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        },
      );
    }

    return window.recaptchaVerifier;
  };

  const sendOTP = async (phone) => {
    try {
      const appVerifier = setupRecaptcha();

      const result = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        appVerifier,
      );

      setConfirmation(result);
      setOtpSent(true);

      toast.success("OTP Sent Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to Send OTP");
    }
  };

  const verifyOTP = async () => {
    try {
      setLoading(true);

      await confirmation.confirm(otp);

      setOtpVerified(true);

      toast.success("OTP Verified Successfully");

      return true;
    } catch (err) {
      toast.error("Invalid OTP");

      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

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

    if (!data.phone || data.phone.length < 10) {
      return toast.error("Enter Valid Phone Number");
    }

    try {
      // STEP 1 SEND OTP
      if (!otpSent) {
        await sendOTP(data.phone);
        return;
      }

      // STEP 2 VERIFY OTP
      if (!otpVerified) {
        const verified = await verifyOTP();

        if (!verified) return;
      }

      // STEP 3 SUBMIT
      setLoading(true);

      await axios.post("https://brandbnalo.com/api/form/add", data);

      toast.success("Message Send Successfully");

      e.target.reset();

      setOtp("");
      setOtpSent(false);
      setOtpVerified(false);
      setConfirmation(null);
      setTimeout(() => {
        

        // redirect whatsapp
        window.open("https://wa.me/919560156328", "_blank");
      }, 1000);
    } catch (err) {
      toast.error("Submission Failed");
    } finally {
      setLoading(false);
    }
  };

  const clientSlider = [
    { title: "Amul Dairy", image: "/amulLogo.webp" },
    { title: "Mother Dairy", image: "/motherDairy.webp" },
    { title: "Britannia", image: "/britanniaLogo.webp" },
    { title: "Verka", image: "/verka.webp" },
    { title: "Vita", image: "/vita.webp" },
    { title: "Saras", image: "/saras.webp" },
    { title: "Sudha", image: "/sudha.webp" },
    { title: "Telangana", image: "/telangana.webp" },
    { title: "Amul Dairy", image: "/amulLogo.webp" },
    { title: "Mother Dairy", image: "/motherDairy.webp" },
    { title: "Britannia", image: "/britanniaLogo.webp" },
    { title: "Verka", image: "/verka.webp" },
    { title: "Vita", image: "/vita.webp" },
    { title: "Saras", image: "/saras.webp" },
    { title: "Sudha", image: "/sudha.webp" },
    { title: "Telangana", image: "/telangana.webp" },
  ];

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] lg:min-h-screen overflow-hidden flex items-center px-6 bg-cover bg-center"
        style={{ backgroundImage: `url("/bannerNew.webp")` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white text-center lg:text-start">
            <h1 className="text-2xl lg:text-5xl font-bold mb-3 mt-5 md:m-0">
              Bulk Milk Cooler Manufacturer &amp; Supplier
            </h1>
            <h1 className="text-xl font-bold md:mb-6 mb-2 lg:block hidden">
              Buy High-Quality Bulk Milk Cooler at Affordable Prices from
              Bhagyalaxmi Industries
            </h1>
            <p className="text-md lg:text-lg mb-3 text-white">
              Bhagyalaxmi Industries is a trusted bulk milk cooler manufacturer
              and BMC machine supplier, offering durable and efficient stainless
              steel bulk milk cooler solutions for your dairy needs.
            </p>

            <div className="flex mt-10 lg:justify-start justify-center">
              <a
                href="https://wa.me/919560156328"
                className="bg-lime-500 hover:bg-lime-600 text-white px-5 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                <FaWhatsapp size={18} />
                Get Instant Quote
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-xl p-8 lg:block hidden">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Request a Quotation for Your Dairy BMC Requirement
            </h2>

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
                    required
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
                    required
                    className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold text-black mb-1">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  required
                  className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
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

              {/* OTP */}
              {otpSent && (
                <div>
                  <label className="block font-semibold text-black mb-1">
                    OTP
                  </label>

                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                    placeholder="Enter OTP"
                  />
                </div>
              )}
              

              <button
                disabled={loading || otpVerified}
                type="submit"
                className="w-full bg-[#1447E6] text-white cursor-pointer py-3 rounded-lg font-semibold text-base sm:text-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading
                  ? "Submitting..."
                  : !otpSent
                    ? "Submit Details"
                    : !otpVerified
                      ? "Verify OTP"
                      : "Submitted"}
              </button>

              
            </form>
          </div>
        </div>
      </section>

      {/* Client Slider */}
      <section className="pt-8 bg-gray-50">
        <div className="mx-auto px-8">
          {/* Heading */}
          <h2 className="text-center text-xl md:text-3xl font-semibold text-indigo-600 mb-6">
            Trusted by leading brands in the dairy industry.
          </h2>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={500}
            spaceBetween={24}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 7 },
            }}
            className="pb-6"
          >
            {clientSlider.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  title={item.title}
                  className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                >
                  <div className="relative md:h-48 h-30 w-full">
                    <Image
                      src={item?.image}
                      alt={item?.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Product slider */}
      <section className="pt-8 bg-gray-50">
        <div className="mx-auto px-8">
          {/* Heading */}
          <h2 className="text-center text-xl md:text-3xl font-semibold text-indigo-600 mb-6">
            Our Products
          </h2>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={1000}
            spaceBetween={10}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-6"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  title={item.name}
                  className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                >
                  <div className="relative h-96 w-full px-4">
                    <Image
                      src={item?.image?.src}
                      alt={item?.image?.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => setOpenPopup(true)}
                      className="cursor-pointer absolute bottom-3 left-1/2 -translate-x-1/2 text-white bg-blue-600 bg-opacity-70 px-4 py-2 rounded-md text-sm"
                    >
                      {item.name}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <ProductCategorySlider />
      <ProductSectionPremium />

      {/* CTA */}
      <div className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <div className="text-left">
              <h2 className="text-xl md:text-3xl font-bold">
                Bulk Milk Cooler Manufacturer
              </h2>

              {/* Phone Numbers */}
              <div className="mt-3 lg:flex hidden flex-col sm:flex-row md:flex-nowrap justify-center md:justify-start gap-2 text-2xl md:text-3xl font-bold">
                <span>+91 95601 56328</span>
                <span className="hidden md:inline">,</span>
                <span>+91 88606 00234</span>
              </div>

              <p className="text-indigo-100 mt-2 md:text-lg text-md">
                Looking for reliable dairy milk chilling solutions? Get expert
                guidance today.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-end">
              <a
                href="tel:+919560156328"
                className="group bg-white text-indigo-600 hover:bg-indigo-50 px-7 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Connect Now
                <span className="transform group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose US */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center md:mb-8 mb-2">
            <h2 className="text-xl md:text-4xl font-bold text-gray-800">
              Why Choose{" "}
              <span className="text-blue-600">Bhagyalaxmi Industries</span>?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2.5">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white md:p-6 p-3 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 md:flex hidden items-center justify-center font-bold">
                  ✓
                </div>
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="w-full">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm text-indigo-100 mt-1">
                  Years of Experience
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-sm text-indigo-100 mt-1">
                  Installations Worldwide
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-indigo-100 mt-1">
                  Genuine Spare Parts
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">4500+</p>
                <p className="text-sm text-indigo-100 mt-1">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:py-8 pt-8">
          <p className="text-lg leading-relaxed text-gray-700 md:block hidden">
            <span className="font-semibold text-gray-900">
              About Bhagyalaxmi Industries
            </span>{" "}
            is a trusted bulk milk cooler manufacturer and BMC machine supplier,
            delivering reliable and energy-efficient dairy cooling solutions. We
            specialize in manufacturing high-quality stainless steel bulk milk
            coolers, milk chiller plants, and bulk milk cooling tanks for dairy
            farms and milk collection centers.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 md:hidden block">
            <span className="font-semibold text-gray-900">
              About Bhagyalaxmi Industries
            </span>{" "}
            is a trusted bulk milk cooler manufacturer and BMC machine supplier,
            offering energy-efficient and durable dairy cooling solutions. We
            manufacture high-quality stainless steel bulk milk coolers and milk
            chiller plants for dairy farms and milk collection centers.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mt-6 md:block hidden">
            As experienced bulk milk cooler suppliers and BMC machine
            manufacturers, we follow strict quality standards with complete
            in-house manufacturing to ensure faster cooling performance,
            long-lasting durability, and low power consumption. Our products are
            widely preferred by customers looking for dependable bulk milk
            cooler dealers and dairy milk chiller machine manufacturers.
          </p>
        </div>
      </section>

      {/* form */}
      <section className="flex items-center justify-center bg-gray-50 md:px-4 md:py-4">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <img
              src={Cooler} // just change image path
              alt="Bulk Milk Cooler"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Get Expert Help to Choose the Right BMC
            </h2>

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
                    required
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
                    required
                    className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold text-black mb-1">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  required
                  className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
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

              {/* OTP */}
              {otpSent && (
                <div>
                  <label className="block font-semibold text-black mb-1">
                    OTP
                  </label>

                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                    placeholder="Enter OTP"
                  />
                </div>
              )}

              <button
                disabled={loading || otpVerified}
                type="submit"
                className="w-full bg-[#1447E6] text-white cursor-pointer py-3 rounded-lg font-semibold text-base sm:text-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading
                  ? "Submitting..."
                  : !otpSent
                    ? "Submit Details"
                    : !otpVerified
                      ? "Verify OTP"
                      : "Submitted"}
              </button>

              <div id="recaptcha-container"></div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Frequently Asked Questions (FAQs)
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-indigo-600 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
         <div id="recaptcha-container"></div> 
      </section>

      <Footer />
      <Enquiry isOpen={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
};

export default Inquiry;
