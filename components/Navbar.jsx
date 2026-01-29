"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Search,
  Menu,
  X,
  PhoneCall,


} from "lucide-react";


import Link from "next/link";
import { useRouter } from "next/navigation";
import Dealer from "./landingpage/Dealer";
import { products } from "@/Data";
import { FaWhatsapp } from "react-icons/fa";

export default function Header({ onClose }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dealerOpen, setDealerOpen] = useState(false);

  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const router = useRouter();

  // ✅ Detect scroll and make top bar sticky only after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts =
    query.trim().length > 0
      ? products.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/products?search=${encodeURIComponent(query)}`);
    setShowDropdown(false);
    setMenuOpen(false);
    setMobileProductsOpen(false);
  };

  const handleProductClick = (slug) => {
    router.push(`/products/${slug}`);
    setQuery("");
    setShowDropdown(false);
    setMenuOpen(false);
    setMobileProductsOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md">
        {/* ================= TOP BAR (Sticky only after scroll) ================= */}
        <div
          className={`border-b w-full bg-white z-50 transition-all duration-300 ${isSticky ? "fixed top-0 left-0 shadow-md" : "relative"
            }`}
        >
          <div className="max-w-[1320px] mx-auto flex items-center justify-between px-4 py-3">
            <Link href="/">
              <Image src="/logonew.webp" alt="Logo" width={150} height={60} />
            </Link>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919560156328"
                className="bg-lime-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
              >
                <PhoneCall size={18} />
                CALL US
              </a>

              <a
                href="https://wa.me/919560156328"
                className="bg-lime-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
              >
                <FaWhatsapp size={18} />
                WHATSAPP
              </a>
            </div>

            {/* Hamburger (Mobile + Tablet) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-blue-700"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* ✅ Spacer only when sticky */}
        {isSticky && <div className="h-[72px]" />}

        {/* ================= DESKTOP NAV (NOT STICKY) ================= */}
        <div className="hidden lg:block bg-blue-700">
          <div className="max-w-[1320px] mx-auto flex items-center gap-8 px-4 h-[52px]">
            <Link
              href="/products"
              className="bg-blue-800 text-white px-5 py-2 rounded-md font-semibold uppercase"
            >
              ☰ Milk Cooling Solutions
            </Link>

            <nav className="flex items-center gap-8 text-white font-semibold">
              <Link href="/" className="hover:text-lime-300">
                Home
              </Link>
              <Link href="/about-us" className="hover:text-lime-300">
                About Us
              </Link>
              <Link href="/blogs" className="hover:text-lime-300">
                Blogs
              </Link>
              <button
                onClick={() => setDealerOpen(true)}
                className="hover:text-lime-300"
              >
                Dealer Inquiry
              </button>
              <Link href="/contact-us" className="hover:text-lime-300">
                Contact
              </Link>
            </nav>

            {/* Desktop Search */}
            <div className="ml-auto relative">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-blue-800 px-4 py-2 rounded-md"
              >
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  placeholder="Search products..."
                  className="bg-transparent text-white placeholder-white/70 outline-none text-sm w-52"
                />
                <Search className="text-white ml-2 w-5 h-5" />
              </form>

              {showDropdown && query && (
                <div className="absolute top-[46px] left-0 w-full bg-white rounded-md shadow-lg z-50">
                  {filteredProducts.length ? (
                    filteredProducts.slice(0, 6).map((item) => (
                      <button
                        key={item.slug}
                        onClick={() => handleProductClick(item.slug)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
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
        </div>

        {/* ================= MOBILE + TABLET MENU ================= */}
        {menuOpen && (
          <div className="lg:hidden bg-blue-700 text-white px-5 py-6 space-y-6">
            {/* Search */}
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-blue-800 px-4 py-2 rounded-md"
            >
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowDropdown(true);
                }}
                placeholder="Search products..."
                className="bg-transparent text-white placeholder-white/70 outline-none w-full text-sm"
              />
              <Search className="text-white w-5 h-5" />
            </form>

            {showDropdown && query && (
              <div className="bg-white rounded-md text-black">
                {filteredProducts.slice(0, 5).map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => handleProductClick(item.slug)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}

            {/* Normal Links */}
            <nav className="flex flex-col gap-4 font-semibold uppercase">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <Link href="/about-us" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>


              <Link href="/products" onClick={() => setMenuOpen(false)}>
                All Products
              </Link>

              <Link href="/blogs" onClick={() => setMenuOpen(false)}>
                Blogs
              </Link>

              <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </nav>



            {/* Mobile Actions with Icons */}
            <div className="flex gap-3">
              <a
                href="tel:+919560156328"
                className="flex-1 text-center bg-lime-500 py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} />
                Call
              </a>

              <a
                href="https://wa.me/919560156328"
                className="flex-1 text-center bg-lime-500 py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        )}

        <Dealer isOpen={dealerOpen} onClose={() => setDealerOpen(false)} />

        <div className="fixed bottom-6 left-2 z-50">
          <a
            href="tel:+919560156328"
            className="bg-red-500 text-white px-4 py-2 rounded-2xl font-semibold flex items-center gap-2 md:hidden"
          >
            <PhoneCall size={25} />
          </a>
        </div>

      </header>
    </>
  );
}
