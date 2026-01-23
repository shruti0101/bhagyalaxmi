"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Menu,
  Linkedin,
} from "lucide-react";
import { FaPhone } from "react-icons/fa";



export const categories = [
  {
    id: "bulk-milk-cooler",
    name: "Bulk Milk Cooler",
  },

  { id: "milk-vending-machine", name: "Milk Vending Machine" },


  { id: "curd-making-machine", name: "Curd and Paneer Making Machine" },

  {
    id: "steam-boiler",
    name: "Steam Boiler",
  },

  { id: "milk-homogenizer-mixer", name: "Milk Homogenizer Mixer" },

  { id: "milk-chiling-plant", name: "Milk Chiling Plant" },

  { id: "milk-processing-plant", name: "Milk Processing Plant" },

  { id: "milk-pasteurizer", name: "Milk Pasteurizer" },
];




const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer
      style={{ backgroundImage: "url('/test1.jpeg')" }}
      className="relative bg-cover bg-center text-gray-300 pt-12 pb-6"
    >

      <div className="absolute inset-0 bg-black/60 "></div>
      <div className="max-w-7xl relative z-20 mx-auto px-6 md:px-13">
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Column 1: Logo + About + Address + Social */}
            <div>
              <div className="relative inline-block mb-4">
                <Image
                  src="/logonew.png"
                  alt="Logo"
                  width={200}
                  height={50}
                  className="bg-white p-3"
                />
                {/* <span className="absolute -top-0 -right-0 text-xs font-bold text-black">
                  ®
                </span> */}
              </div>

              <p className="text-xs leading-relaxed text-white">
                Our Bulk Milk Coolers ensure rapid cooling, hygienic storage, and long-lasting
                stainless steel durability. Designed for efficiency and reliability, they maintain
                milk freshness at farm and dairy levels with industry-approved safety standards.
              </p>


              <div className="flex items-start gap-4 mt-2 flex-1">
                <a
                  href="tel:+919560156328"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-blue-500 hover:scale-110 transition-transform duration-200" />
                  <h5 className="text-[16px] font-semibold underline">+919560156328</h5>
                </a>

              </div>
              <div className="flex items-start gap-4 mt-2 flex-1">
                <a
                  href="tel:+918860600234"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-blue-500 hover:scale-110 transition-transform duration-200" />
                  <h5 className="text-[16px] font-semibold underline">+918860600234</h5>
                </a>

              </div>


              {/* Address */}
              <div className="flex items-start gap-2 mt-4 text-sm">
                <MapPin className="w-10 h-10 text-blue-500" />
                <p className="txt-white">
                  KH No 14/15, 14/2/1,Built, Up Area 485 SQ, YDS Appx Nangli, Sakrawati Indl.Area,Najafgarh
                  New Delhi - 110043, Delhi, India

                </p>
              </div>

              {/* Contact + Social */}
              <div className="flex gap-4 mt-4">
                <a href="mailto:bhagyalaxmigroup12@gmail.com">
                  <Mail className="w-5 h-5 text-blue-500 hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="tel:+91+919560156328">
                  <Phone className="w-5 h-5 text-blue-500 hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://www.facebook.com/Bhagyalaxmi.industries/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://www.instagram.com/bhagyalaxmiindustriesindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 hover:text-blue-500 cursor-pointer hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="www.youtube.com/@BhagyalaxmiIndustriesin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-5 h-5 hover:text-blue-500 cursor-pointer hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="linkedin.com/cws/share?url=https://www.bhagyalaxmiindustries.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 hover:text-blue-500 cursor-pointer hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Column 2: About (Desktop) */}
            <div className="hidden  md:block md:ml-10">
              <h3 className="text-white font-semibold text-lg mb-4">About</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <Link href="/" className="hover:text-blue-500">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-blue-500">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-blue-500">
                    BLOGS
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-blue-500">
                    PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-blue-500">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Products (Desktop) */}
            <div className="hidden  md:block">
              <h3 className="text-white font-semibold text-lg mb-4">
                Products
              </h3>
              <ul className="space-y-2 text-sm text-white uppercase">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link href={`/products`} className="hover:text-blue-500">
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden space-y-4 ">
              {/* About */}
              <div>
                <button
                  onClick={() => toggleSection("about")}
                  className="flex justify-between items-center w-full text-white font-semibold py-2"
                >
                  About <Menu className="w-5 h-5" />
                </button>
                {openSection === "about" && (
                  <ul className="space-y-2 text-sm mt-2 pl-2">
                    <li>
                      <Link href="/" className="hover:text-[#FAAC18]">
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us" className="hover:text-[#FAAC18]">
                        ABOUT US
                      </Link>
                    </li>
                    <li>
                      <Link href="/blogs" className="hover:text-[#FAAC18]">
                        BLOGS
                      </Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-[#FAAC18]">
                        PRODUCTS
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="hover:text-[#FAAC18]">
                        CONTACT US
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Products */}
              <div>
                <button
                  onClick={() => toggleSection("products")}
                  className="flex justify-between items-center w-full text-white font-semibold py-2"
                >
                  Products <Menu className="w-5 h-5" />
                </button>
                {openSection === "products" && (
                  <ul className="space-y-2 text-sm mt-2 pl-2 uppercase">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={`/products`}
                          className="hover:text-[#FAAC18]"
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Privacy / Policy */}
              <div>
                <button
                  onClick={() => toggleSection("privacy")}
                  className="flex justify-between items-center w-full text-white font-semibold py-2"
                >
                  Privacy Policy <Menu className="w-5 h-5" />
                </button>
                {openSection === "privacy" && (
                  <ul className="space-y-2 text-sm mt-2 pl-2">
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="hover:text-[#FAAC18]"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="hover:text-[#FAAC18]">
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            {/* Column 4: Trust Certificate */}
            <div>
              <h3 className="text-blue-600 font-semibold text-lg mb-4">
                Trust Elite Certificate
              </h3>

              {/* Thumbnail Image */}
              <div
                className="cursor-pointer inline-block"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  src="/home/trustseal.png"
                  alt="Trust Elite"
                  width={100}
                  height={100}
                  className="mb-4 rounded-lg hover:scale-105 transition-transform"
                />
              </div>

              <p className="text-sm leading-relaxed text-white">
                We are proud to present the Trust Elite Certificate of
                Excellence to BhagyaLaxmi Industries, recognizing their
                commitment to exceptional customer service, outstanding business
                practices, and a dedication to building trust with their
                customers.
              </p>

              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 bg-opacity-30 flex items-center justify-center z-6000">
                  <div className="relative">
                    {/* Close Button */}
                    <button
                      className="absolute top-2 right-2 text-white text-2xl font-bold"
                      onClick={() => setIsModalOpen(false)}
                    >
                      ✕
                    </button>

                    {/* Full Certificate */}
                    <Image
                      src="/cert.webp" // full-size certificate
                      alt="Trust Elite Full"
                      width={800} // adjust as needed
                      height={500} // adjust as needed
                      className="max-w-[90vw] max-h-[80vh]  rounded-lg shadow-lg  "
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="relative z-20 border-t border-gray-700 mt-10 pt-4 px-4 text-center text-sm text-white">
        <div className="flex flex-col md:flex-row justify-between gap-1">
          <span>© 2025 BhagyaLaxmi Industries, All Rights Reserved.</span>

          <span>
            Website Designed By Promozione Branding Pvt. Ltd.
            <a
              href="https://promozionebranding.com/"
              className="text-blue-500 font-bold hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website Designing Company.
            </a>
          </span>
        </div>
      </div>



    </footer>
  );
};

export default Footer;
