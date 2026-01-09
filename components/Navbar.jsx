"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full">
      {/* ================= TOP BAR ================= */}
      <div className="bg-white  border-b">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between py-2 px-4">

          <Link  href="/">
          
          <Image src="/logo.jpeg" alt="Milky Logo" width={160} height={80} />
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            <div className="text-sm text-blue-700 leading-tight">
              <p>info@maheshengworks.com</p>
              <p>sales@maheshengworks.com</p>
            </div>

            <a
              href="tel:7622020359"
              className="bg-lime-500 text-white font-semibold px-4 py-2 rounded-lg"
            >
              CALL US 7622020359
            </a>

            <a
              href="#"
              className="bg-lime-500 text-white font-semibold px-4 py-2 rounded-lg"
            >
              GET QUOTE
            </a>

            <div className="flex items-center gap-1 border-l pl-3">
              <Image src="/flag.avif" alt="IN" width={22} height={22} />
              <span className="text-sm font-medium">IN</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="bg-blue-700 relative">
        <div className="max-w-[1320px] mx-auto flex items-center h-[60px] px-4 gap-6">

          {/* ===== CATEGORY DROPDOWN (HOVER) ===== */}
          <div className="relative group hidden lg:block">
            <button className="flex items-center gap-3 bg-blue-800 text-white font-semibold px-5 py-3 rounded-md">
              <span className="text-xl">☰</span>
              PRODUCT CATEGORIES
            </button>

            {/* Dropdown */}
            <div className="absolute  top-full left-0 w-120 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <ul className="py-3 text-gray-700 text-sm">
                {[
                  "Face Tissue",
                  "Paper Napkin",
                  "Kitchen Towel",
                  "Toilet Roll",
                  "Butter Paper Roll",
                  "Cake Box",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="px-5 py-2 hover:bg-blue-50 hover:text-blue-700 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ===== DESKTOP MENU ===== */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-semibold ">
            <a href="#" className="hover:text-lime-300">HOME</a>
            <a href="#" className="hover:text-lime-300">ABOUT US</a>
            <a href="#" className="hover:text-lime-300">BLOG</a>
            <a href="#" className="hover:text-lime-300">DEALER ENQUIRY</a>
            <a href="#" className="hover:text-lime-300">CONTACT US</a>
          </nav>

          {/* Search */}
          <div className="ml-auto hidden lg:flex items-center bg-blue-800 px-4 py-2 rounded-md">
            <input
              type="text"
              placeholder="Search ..."
              className="bg-transparent outline-none text-white placeholder:text-white/70 text-sm w-40"
            />
            <Search className="text-white ml-2 w-5 h-5" />
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileOpen && (
          <div className="lg:hidden bg-blue-800 text-white px-4 py-4 space-y-4">
            <div className="font-semibold">PRODUCT CATEGORIES</div>
            <ul className="space-y-2 text-sm pl-3">
              <li>Face Tissue</li>
              <li>Paper Napkin</li>
              <li>Kitchen Towel</li>
              <li>Toilet Roll</li>
              <li>Butter Paper Roll</li>
              <li>Cake Box</li>
            </ul>

            <hr className="border-white/30" />

            <nav className="flex flex-col gap-3 font-semibold">
              <a href="#">HOME</a>
              <a href="#">ABOUT US</a>
              <a href="#">BLOG</a>
              <a href="#">DEALER ENQUIRY</a>
              <a href="#">CONTACT US</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
