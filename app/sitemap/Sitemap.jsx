import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";
import Link from 'next/link';
import { categories, cites, products } from '@/Data';

export default function Sitemap() {
    const sitemapItems = [
        { name: "Home", link: "/" },
        { name: "Product", link: "/products" },
        { name: "About Us", link: "/about-us" },
        { name: "Blogs", link: "/blogs" },
        // { name: "Dealer Inquiry", link: "/dealer-inquiry" },
        { name: "Contact", link: "/contact-us" },
    ]

    return (<>
        <Navbar />
        {/* Hero Section */}
        <section
            className="relative flex items-center bg-cover bg-center px-6 py-16 md:py-30"
            style={{ backgroundImage: `url("/bannerNew.webp")` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative max-w-4xl mx-auto text-center">
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
                    Sitemap
                </h1>
            </div>
        </section>

        {/* main */}
        <section className='py-10 px-4'>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {sitemapItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        className="p-6 bg-white rounded-xl border border-gray-300 
                         hover:border-blue-500 hover:shadow-lg transition-all text-center"
                    >
                        {item.name}
                    </Link>
                ))}
                {categories.map((item) => (
                    <Link
                        key={item.name}
                        href={`products`}
                        className="p-6 bg-white rounded-xl border border-gray-300 content-center
                         hover:border-blue-500 hover:shadow-lg transition-all text-center"
                    >
                        {item.name}
                    </Link>
                ))}
                {products.map((item) => (
                    <Link
                        key={item.name}
                        href={`/products/${item.slug}`}
                        className="p-6 bg-white rounded-xl border border-gray-300 content-center
                         hover:border-blue-500 hover:shadow-lg transition-all text-center"
                    >
                        {item.name}
                    </Link>
                ))}
                {cites.map((item) => (
                    <Link
                        key={item.label}
                        href={`${item.href}`}
                        className="p-6 bg-white rounded-xl border border-gray-300 content-center
                         hover:border-blue-500 hover:shadow-lg transition-all text-center"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </section>

        <Footer />
    </>)
}
