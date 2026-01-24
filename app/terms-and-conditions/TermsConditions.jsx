"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";

const TermsConditions = () => {


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
                    Terms & Conditions
                </h1>
            </div>
        </section>

        <section className="bg-gray-50 py-10 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
                        Terms & Conditions – BhagyaLaxmi Industries
                    </h2>
                    <p className="text-gray-700 mb-6">
                        These Terms & Conditions govern all orders and transactions made with BhagyaLaxmi Industries for bar bending services, steel reinforcement work, fabrication, and other related construction support services. By placing an order, the client agrees to abide by these Terms & Conditions.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    1. General
                                </h3>
                                <p className="text-sm text-gray-700">
                                    These Terms & Conditions apply to all services provided by BhagyaLaxmi Industries. All confirmed orders constitute acceptance of these terms by the buyer.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    2. Service Quality & Standards
                                </h3>
                                <p className="text-sm text-gray-700">
                                    These Terms & Conditions apply to all services provided by BhagyaLaxmi Industries. All confirmed orders constitute acceptance of these terms by the buyer.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    3. Pricing & Payment
                                </h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                                    <li>Prices are subject to change based on steel market rates and project complexity.</li>
                                    <li>Full payment must be made as per agreed terms before service execution unless otherwise approved in writing.</li>
                                    <li>Accepted payment methods include bank transfer, cheque, UPI, or other mutually agreed modes.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    4. Materials & Measurement
                                </h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                                    <li>All steel bars and materials are handled using industry-standard equipment.</li>
                                    <li>Minor variations in weight or length due to cutting, bending, and handling are acceptable.</li>
                                    <li>Custom cutting or bending requests may incur additional charges.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    5. Service Execution & Delivery
                                </h3>
                                <p className="text-sm text-gray-700">
                                    Execution timelines are communicated at the time of order confirmation. BhagyaLaxmi Industries is not responsible for delays caused by weather conditions, site inaccessibility, machinery failure, labor strikes, or circumstances beyond control. Responsibility transfers to the client once work is completed or materials are handed over at site.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    6. Inspection & Claims
                                </h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                                    <li>Clients must inspect work immediately upon completion.</li>
                                    <li>Any claims related to measurement, workmanship, or damage must be reported within 48 hours.</li>
                                    <li>Claims must be supported with clear photographic or written evidence.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    7. Rework & Adjustments
                                </h3>
                                <p className="text-sm text-gray-700">
                                    Due to the nature of construction services, rework is not generally accepted unless genuine execution errors are verified. Adjustments may be considered based on project feasibility and mutual agreement.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    8. Compliance & Safety
                                </h3>
                                <p className="text-sm text-gray-700">
                                    All services comply with applicable construction safety standards and regulations. Clients are responsible for ensuring local site safety and statutory compliance at the project location.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    9. Limitation of Liability
                                </h3>
                                <p className="text-sm text-gray-700">
                                    BhagyaLaxmi Industries shall not be liable for indirect, incidental, or consequential damages arising from service usage. Liability, if any, shall be limited to the invoiced service value.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-indigo-600 mb-1">
                                    10. Governing Law & Jurisdiction
                                </h3>
                                <p className="text-sm text-gray-700">
                                    All disputes shall be subject to the jurisdiction of the courts in Delhi, India. These Terms & Conditions shall be governed by the laws of India.
                                </p>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-4">
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

export default TermsConditions;
