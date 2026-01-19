"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Menu, X, LucideBluetoothSearching } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Dealer from "./landingpage/Dealer";

// ✅ import products data
import { products } from "@/Data"; // change path based on your project

export default function Header({onClose}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };


  // ✅ search states
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  // ✅ filter products from data.js
  const filteredProducts =
    query.trim().length > 0
      ? products.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  // ✅ when enter pressed
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/products?search=${encodeURIComponent(query)}`);
    setShowDropdown(false);
  };

  // ✅ when user clicks product from dropdown
  const handleProductClick = (slug) => {
    router.push(`/products/${slug}`); // ✅ change route if your detail page is different
    setQuery("");
    setShowDropdown(false);
  };

  return (
    <header className="w-full">
      {/* ================= TOP BAR ================= */}
      <div className="bg-white border-b">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between py-2 px-4">
          <Link href="/">
            <Image src="/logonew.png" alt="Milky Logo" width={160} height={80} />
          </Link>

          <div className="hidden lg:flex items-center gap-4">
          
            <a
              href="tel:+919560156328"
              className="bg-lime-500 text-white font-semibold px-4 py-2 rounded-lg"
            >
              CALL US +919560156328
            </a>

             <a
              href="https://wa.me/+919560156328"
              className="bg-lime-500 text-white font-semibold px-4 py-2 rounded-lg"
            >
             WHATSAPP US
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
          {/* CATEGORY BUTTON */}
          <div className="relative group hidden lg:block">
            <Link
              href="/products"
              className="flex uppercase cursor-pointer hover:scale-105 transition items-center gap-3 bg-blue-800 text-white font-semibold px-5 py-3 rounded-md"
            >
              <span className="text-xl">☰</span>
              Milk Cooling Solutions
            </Link>
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-semibold">
            <Link href="/" className="hover:text-lime-300">
              HOME
            </Link>
            <Link href="/about-us" className="hover:text-lime-300 uppercase">
              About Us
            </Link>
            <Link href="/blogs" className="hover:text-lime-300 uppercase">
              Blogs
            </Link>
            <button onClick={() => setIsOpen(true)} className="hover:text-lime-300 uppercase">
              DEALER INQUIRY
            </button>
            <Link href="/contact-us" className="hover:text-lime-300 uppercase">
              CONTACT Us
            </Link>
          </nav>

          {/* ✅ SEARCH BAR WITH DROPDOWN */}
          <div className="ml-auto hidden lg:block relative">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-blue-800 px-4 py-2 rounded-md"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                className="bg-transparent outline-none text-white placeholder:text-white/70 text-sm w-52"
              />
              <button type="submit">
                <Search className="text-white ml-2 w-5 h-5" />
              </button>
            </form>

            {/* ✅ Dropdown Results */}
            {showDropdown && query.trim() !== "" && (
              <div className="absolute left-0 top-[50px] w-full bg-white text-black rounded-md shadow-lg z-50">
                {filteredProducts.length > 0 ? (
                  filteredProducts.slice(0, 6).map((item) => (
                    <button
                      key={item.slug}
                      onClick={() => handleProductClick(item.slug)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {item.name}
                    </button>
                  ))
                ) : (
                  <p className="px-4 py-2 text-sm text-gray-500">
                    No products found
                  </p>
                )}
              </div>
            )}
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

      <Dealer isOpen={isOpen} onClose={handleClose}></Dealer>
    </header>
  );
}
