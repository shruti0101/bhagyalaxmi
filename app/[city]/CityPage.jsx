"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Building2, Laptop2, Users, Briefcase, Landmark, MapPin, Users2, Factory, Home } from "lucide-react";
import CitySection from "@/components/CitySection";
import Footer from "@/components/landingpage/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import ProductSectionPremium from "@/components/landingpage/Bestseller";
import ProductCategorySlider from "@/components/landingpage/Productcategory";

export default function CityPage() {
    const params = useParams();

    const cityName = params?.city?.includes("-in-")
        ? params.city.split("-in-")[1]
        : "India";

    return (<>
        <Navbar />

        {/* Hero */}
        <section
            style={{
                backgroundImage: "url('/NEW.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="py-20 relative z-10"
        >
            <div className="absolute inset-0 bg-gray-900/60" />

            <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-14 capitalize md:text-6xl">
                Bulk Milk Coolers in {cityName}
            </h1>
        </section>

        {/* main */}
        <section className="mx-auto lg:px-15 px-5 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">
                        Bulk Milk Cooler Manufacturer in {cityName}
                    </h1>

                    <p className="text-black mb-4">
                        Bhagyalaxmi Industries is a <strong>trusted Bulk Milk Cooler Manufacturer in {cityName}</strong>, offering high-quality milk cooling solutions for dairy farms, milk collection centers, cooperatives, and commercial dairy operations across {cityName}.
                    </p>

                    <p className="text-black mb-4">
                        We specialize in <strong> energy-efficient, hygienic, and durable Bulk Milk Coolers </strong> designed to rapidly chill raw milk, preserve freshness, and prevent bacterial growth under high-usage conditions.
                    </p>

                    <p className="text-black">
                        From small dairy farms to large-scale milk collection and processing units, our Bulk Milk Coolers combine <strong> robust stainless steel construction, advanced refrigeration technology, and long-term operational reliability,</strong> making them an ideal choice for {cityName} growing dairy industry.
                    </p>
                </div>

                <div className="w-full h-full">
                    <img
                        src="/milkimg.webp"
                        alt="Office Workstation"
                        className="w-full h-[30rem] object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>

        {/* why us */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Why Choose Bhagyalaxmi Industries Bulk Milk Coolers in {cityName}?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-3">One-Stop Milk Cooling Solution</h3>
                    <p className="text-black text-sm">
                        We offer a complete range of Bulk Milk Coolers, including direct expansion BMCs, ice bank type milk coolers, and customized milk chilling tanks—suitable for village milk collection centers, dairy farms, cooperatives, and processing plants.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-3">Customizable Milk Coolers</h3>
                    <p className="text-black text-sm">
                        Choose from different capacities (from small to large volume), cooling technologies, agitator options, insulation thickness, and automation features. Custom-built Bulk Milk Coolers are available for bulk orders and project-based dairy installations.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-3">Manufacturer-Direct Pricing</h3>
                    <p className="text-black text-sm">
                        As a direct manufacturer, Bhagyalaxmi Industries supplies Bulk Milk Coolers in {cityName} at factory prices, ensuring cost-effective solutions for dairy owners, cooperatives, NGOs, and government dairy projects.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-3">Technical & Installation Support</h3>
                    <p className="text-black text-sm">
                        Our experienced technical team assists with capacity selection, site assessment, power compatibility, installation guidance, and after-sales support, ensuring efficient milk chilling and long equipment life.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-3">Trusted by Dairy Professionals</h3>
                    <p className="text-black text-sm">
                        Our Bulk Milk Coolers are widely used by dairy farmers, milk unions, private dairies, and institutional buyers across {cityName}, earning trust through performance and reliability.
                    </p>
                </div>
            </div>
        </section>

        <ProductSectionPremium />
        <ProductCategorySlider />

        {/* office */}
        <section className="mx-auto lg:px-15 px-5 py-10 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Bulk Milk Cooler Supplier in {cityName}, India
                    </h2>

                    <p className="text-black mb-4 leading-relaxed">
                        Bhagyalaxmi Industries is among the <strong>leading Bulk Milk Cooler manufacturers and suppliers in {cityName}</strong>, delivering high-performance milk chilling equipment that meets modern dairy hygiene and quality standards.
                    </p>

                    <p className="text-black mb-4 leading-relaxed">
                        With years of manufacturing expertise, we supply <strong>easy-to-maintain, corrosion-resistant, and energy-efficient Bulk Milk Coolers</strong> built using food-grade stainless steel. Every unit undergoes strict quality checks to ensure optimal cooling performance and long service life.
                    </p>

                    <p className="text-black mb-4 leading-relaxed">
                        Each Bulk Milk Cooler is tested for <strong>cooling efficiency, temperature retention, agitation performance, and power consumption,</strong> ensuring dependable operation in {cityName} demanding dairy environments.
                    </p>
                </div>

                <div>
                    <div className="w-full h-full">
                        <img
                            src="/prod1.webp"
                            alt="Office Workstation"
                            className="w-full h-96 object-cover rounded-t-lg shadow-lg"
                        />
                    </div>
                    <div className="bg-white rounded-b-2xl shadow-xl p-6">
                        <h3 className="text-xl font-semibold mb-4">
                            Our Bulk Milk Coolers are ideal for:
                        </h3>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">

                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-blue-600" />
                                <span>Village milk collection centers</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Home className="w-5 h-5 text-blue-600" />
                                <span>Dairy farms & private dairies</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Users2 className="w-5 h-5 text-blue-600" />
                                <span>Milk cooperatives & federations</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Factory className="w-5 h-5 text-blue-600" />
                                <span>Milk processing & chilling plants</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Workstation  */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-white">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-3">
                Bulk Milk Cooler Types We Offer
            </h2>
            <p className="text-center text-black mb-4 text-lg">
                Bulk Milk Cooler Product Range
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-2">
                        Direct Expansion Bulk Milk Coolers
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Rapid cooling systems designed for quick milk chilling and efficient temperature control.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-2">
                        Ice Bank Type Bulk Milk Coolers
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Ideal for areas with power fluctuations, ensuring continuous milk cooling.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-2">
                        Vertical & Horizontal Milk Coolers
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Available in multiple designs based on space and capacity requirements.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-2">
                        Automatic Milk Cooling Tanks
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Advanced systems with temperature control, digital monitoring, and automation.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-lg mb-2">
                        Heavy-Duty Commercial Milk Coolers
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Built for high-volume dairy operations and milk processing units.
                    </p>
                </div>
            </div>
        </section>

        {/* Key features  */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="w-full">
                    <img
                        src="/ctaimg.webp"
                        alt="Key Features"
                        className="w-full h-[30rem] object-cover object-center rounded-2xl shadow-xl"
                    />
                </div>

                <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Key Features of Bhagyalaxmi Industries Bulk Milk Coolers
                    </h3>

                    <ul className="space-y-4 text-gray-700">

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Food-grade stainless steel construction</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Rapid milk chilling to prevent bacterial growth</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Energy-efficient refrigeration systems</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Energy-efficient refrigeration systems</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Low maintenance and long operational life</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span>Designed for Indian climatic and power conditions</span>
                        </li>

                    </ul>
                </div>
            </div>
        </section>

        {/* Industries */}
        <section className="mx-auto lg:px-15 px-5 py-8">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Industries & Applications We Serve
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
                    <div className="flex justify-center mb-4">
                        <Home className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Dairy Farms</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Small, medium, and large-scale dairy operations.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
                    <div className="flex justify-center mb-4">
                        <MapPin className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Milk Collection Centers</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Village-level and cooperative milk collection units
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
                    <div className="flex justify-center mb-4">
                        <Users2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Dairy Cooperatives</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Government and private milk unions and federations.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
                    <div className="flex justify-center mb-4">
                        <Factory className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Milk Processing Plants</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Pre-processing milk chilling and storage applications.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">
                    <div className="flex justify-center mb-4">
                        <Landmark className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Institutional & Government Projects</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Dairy development programs, NGOs, and infrastructure projects.
                    </p>
                </div>

            </div>

        </section>

        {/* Case Study Card */}
        <section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Case Study: Bulk Milk Cooler Supply for {cityName} Dairy Project
                </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-3">
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Client</span>
                            <p className="text-lg font-semibold">{cityName} Milk Producers Cooperative</p>
                        </div>
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Location</span>
                            <p className="text-lg font-semibold">{cityName}</p>
                        </div>
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Project</span>
                            <p className="text-lg font-semibold">Village Milk Collection & Chilling Facility</p>
                        </div>

                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Scope</span>
                            <ul className="list-disc list-inside text-black space-y-1">
                                <li>Supply of ice bank type Bulk Milk Coolers</li>
                                <li>Standardized chilling systems across multiple centers</li>
                                <li>Installation and commissioning support</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <span className="text-sm uppercase tracking-wide text-gray-500">Results</span>
                            <ul className="list-disc list-inside text-black space-y-1">
                                <li>Consistent milk temperature maintenance</li>
                                <li>Reduced milk spoilage</li>
                                <li>Improved milk quality and shelf life</li>
                                <li>Long-term operational savings</li>
                            </ul>
                        </div>

                        <div className="pt-4">
                            <p className="text-black leading-relaxed">
                                This project highlights Bhagyalaxmi Industries’ reliability as a Bulk Milk Cooler supplier in {cityName}.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-blue-600 text-white py-5">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="md:text-left text-center">
                    <Link href={"/"} className="text-lg font-semibold">
                        Bulk Milk Coolers in {cityName}
                    </Link>
                    <p className="md:text-6xl text-4xl font-semibold">
                        +91-9560156328
                    </p>
                    <p className="text-base text-white">
                        For More Details Contact Us Now!
                    </p>
                </div>

                <div>
                    <a href="tel:+919560156328" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Connect Now
                    </a>
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section section className="mx-auto lg:px-15 px-5 py-8 bg-gray-100" >
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-5">
                Bulk Milk Coolers in {cityName} – FAQs
            </h2>

            <div className="space-y-4">
                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        What is a Bulk Milk Cooler?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        A Bulk Milk Cooler is a dairy equipment used to rapidly cool and store raw milk to maintain freshness and quality.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        Are Bhagyalaxmi Industries Bulk Milk Coolers suitable for Indian conditions?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Yes. Our Bulk Milk Coolers are designed for Indian climate, voltage conditions, and dairy practices.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        Do you supply Bulk Milk Coolers in bulk in {cityName}?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Yes. We specialize in bulk and project-based supply for cooperatives and large dairy projects.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        Do your Bulk Milk Coolers save energy?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        Yes. Our energy-efficient refrigeration systems help reduce electricity consumption.
                    </p>
                </details>

                <details className="group bg-gray-50 rounded-xl p-5 cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-lg">
                        What warranty do you offer?
                        <span className="transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                        We offer warranty on Bulk Milk Coolers (terms & conditions apply).
                    </p>
                </details>
            </div>
        </section>

        {/* about */}
        <section section className="mx-auto lg:px-15 px-5 py-8" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="w-full">
                    <img
                        src="/indus2.webp"
                        alt="Best"
                        className="w-full h-[28rem] object-cover object-top rounded-2xl shadow-xl"
                    />
                </div>


                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-5">
                        Looking for the Best Bulk Milk Cooler Manufacturer in {cityName}?
                    </h2>

                    <p className="text-black mb-4 leading-relaxed">
                        Contact <strong>Bhagyalaxmi Industries</strong> today for pricing, brochures, or project-specific recommendations. We help you select the right <strong>Bulk Milk Cooler</strong> based on your milk volume, site conditions, and operational needs—perfectly suited for <strong>{cityName} dairy projects</strong>.
                    </p>
                </div>
            </div>
        </section>

        <CitySection></CitySection>
        <Footer />
    </>)
}
