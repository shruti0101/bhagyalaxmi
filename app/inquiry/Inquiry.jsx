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

const Inquiry = () => {

    return (<>
        <Navbar />
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center px-6">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">
                        Bulk Milk Cooler Manufacturer &amp; Supplier
                    </h1>
                    <h1 className="text-2xl md:text-2xl font-bold mb-6">
                        Buy High-Quality Bulk Milk Cooler at Affordable Prices from Bhagyalaxmi Industries
                    </h1>
                    <p className="text-lg mb-3 text-indigo-100">
                        Bhagyalaxmi Industries is a trusted bulk milk cooler manufacturer and BMC machine supplier,
                        offering durable and efficient stainless steel bulk milk cooler solutions for your dairy needs.
                    </p>
                    <p className="text-lg mb-6 text-indigo-100 font-bold">
                        Trusted by 1000+ Dairy Farmers. Get 1 Year Warranty &amp; Factory Rates.
                    </p>
                    {/* <p className="text-lg">
                        As leading bulk milk cooler suppliers and BMC machine manufacturers, we provide top-notch
                        milk chiller plants and SS bulk milk cooler suppliers across India. Our products ensure rapid
                        cooling, long-lasting performance, and energy efficiency.
                    </p> */}
                </div>

                <div className="bg-white rounded-xl shadow-xl p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Get Started
                    </h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </section>

        <ProductCategorySlider />
        <ProductSectionPremium />

        {/* CTA */}
        <div className="bg-indigo-500 text-white px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="">
                    <h2 className="text-4xl md:text-4xl font-bold mb-2 text-nowrap">Bulk Milk Cooler Manufacturer</h2>
                    <p>For More Detail Contact Us Now!</p>
                </div>
                <div className="flex justify-center">
                    <button className="bg-white hover:bg-gray-200 px-3 py-2 text-black rounded-md font-medium">
                        Connect Now
                    </button>
                </div>
            </div>
        </div>

        {/* Why Choose US */}
        <div className="">
            
        </div>

        <Footer />
    </>);
};

export default Inquiry;
