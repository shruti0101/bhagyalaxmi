"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";

const PrivacyPolicy = () => {

    return (<>
        <Navbar />
        {/* Hero Section */}
        <section
            className="relative min-h-screen flex items-center bg-cover bg-center px-6"
            style={{ backgroundImage: `url("/bannerNew.webp")` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative max-w-4xl mx-auto text-center">
                <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                    Privacy Policy
                </h1>

                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    We respect your privacy and are committed to protecting your personal
                    information. Please review our policies to understand how we manage and
                    safeguard your data.
                </p>
            </div>
        </section>

        <section className="bg-gray-50 py-10 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
                        Privacy Policy – BhagyaLaxmi Industries
                    </h2>
                    <p className="text-gray-700 mb-6">
                        BhagyaLaxmi Industries ("we," "our," or "us")respects the privacy of our clients, partners, and website visitors. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with us for our bar bending services through our website, online platforms, or offline communications.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    1. Information We Collect
                                </h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                                    <li><span className="font-medium">Personal Information: </span>Name, phone number, email, address, and billing details.</li>
                                    <li><span className="font-medium">Business Information: </span>Company name, project details, GST and site location.</li>
                                    <li><span className="font-medium">Technical Information: </span>IP address, browser type, and device data.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    2. How We Use Your Information
                                </h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                                    <li>Processing bar bending and steel reinforcement service orders.</li>
                                    <li>Sending quotations, invoices, and project updates.</li>
                                    <li>Improving service quality and customer experience.</li>
                                    <li>Marketing communication with your consent.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    3. Data Protection & Security
                                </h3>
                                <p className="text-sm text-gray-700">
                                    We apply strict technical and organizational measures to safeguard your data and ensure secure handling of all financial and personal information.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    4. Sharing of Information
                                </h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                                    <li>Delivery and logistics partners.s</li>
                                    <li>Payment and invoicing service providers.</li>
                                    <li>Legal or government authorities if required.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    5. Cookies & Tracking
                                </h3>
                                <p className="text-sm text-gray-700">
                                    We may use cookies to improve site performance and enhance user experience. Disabling cookies may affect certain features.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    6. Your Rights
                                </h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                                    <li>Access or update your personal data.</li>
                                    <li>Request data deletion where applicable.</li>
                                    <li>Opt-out of promotional communication.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    7. Third-Party Links
                                </h3>
                                <p className="text-sm text-gray-700">
                                    We are not responsible for privacy practices of external websites linked on our platform.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    8. Policy Updates
                                </h3>
                                <p className="text-sm text-gray-700">
                                    This policy may be updated periodically. Changes will be reflected with an updated date on this page.
                                </p>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-4 mt-10">
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    Contact Us
                                </h3>

                                <p className="text-sm text-gray-700">
                                    BhagyaLaxmi Industries
                                </p>

                                <p className="text-sm text-gray-700">
                                    Email:{" "}
                                    <a href="mailto:bhagyalaxmigroup12@gmail.com" className="text-indigo-600 hover:underline">
                                        bhagyalaxmigroup12@gmail.com
                                    </a>
                                </p>

                                <p className="text-sm text-gray-700">
                                    Phone:{" "}
                                    <a href="tel:+919560156328" className="text-indigo-600 hover:underline">
                                        +91 9560156328
                                    </a>{" "}
                                    |{" "}
                                    <a href="tel:+918860600234" className="text-indigo-600 hover:underline">
                                        +91 8860600234
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <Footer />
    </>);
};

export default PrivacyPolicy;
