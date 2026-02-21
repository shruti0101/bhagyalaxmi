import React from 'react'
import CategoryCityPage from './CategoryCityPage'
import { notFound } from "next/navigation";
import { categoryCityContent } from './data';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const [categorySlug, citySlug] = slug.split("-in-");

    const format = (text) =>
        text
            .split("-")
            .map(w => w[0].toUpperCase() + w.slice(1))
            .join(" ");

    const cityName = format(citySlug);

    if (categorySlug === "milk-chilling-plant") {
        return {
            title: `Milk Chilling Plant in ${cityName} | Automatic Bulk Milk Cooling System Manufacturer`,
            description: `Leading Milk Chilling Plant manufacturer in ${cityName} offering energy-efficient bulk milk cooling systems for dairy farms, milk processing units, and dairy industries with fast cooling and hygienic storage solutions.`,
        };
    }

    if (categorySlug === "milk-pasteurizer") {
        return {
            title: `Milk Pasteurization Plant in ${cityName} | Automatic Milk Processing Plant Manufacturer`,
            description: `Leading Milk Pasteurization Plant manufacturer in ${cityName} offering advanced and energy-efficient milk processing systems for dairy farms and processing units. Hygienic design, high capacity, and reliable performance.`,
        };
    }

    if (categorySlug === "milk-processing-plant") {
        return {
            title: `Milk Processing Plant in ${cityName} | Dairy Processing Plant Manufacturer & Supplier`,
            description: `Top Milk Processing Plant manufacturer in ${cityName} offering complete dairy processing solutions including pasteurization, homogenization, chilling, and packaging systems for small and large-scale dairy industries.`,
        };
    }

    if (categorySlug === "milk-storage-tank") {
        return {
            title: `Milk Storage Tank in ${cityName} | Stainless Steel Dairy Milk Storage Tank Manufacturer`,
            description: `Leading Milk Storage Tank manufacturer in ${cityName} offering high-quality stainless steel dairy storage tanks with hygienic design, durable construction, and temperature control options for dairy farms and processing units.`,
        };
    }

    if (categorySlug === "mini-dairy-plant") {
        return {
            title: `Mini Dairy Plant in ${cityName} | Small Scale Dairy Processing Plant Manufacturer`,
            description: `Trusted Mini Dairy Plant manufacturer in ${cityName} offering complete small-scale dairy processing solutions including pasteurization, chilling, storage, and packaging systems for startups and dairy businesses.`,
        };
    }
}

const Page = async ({ params }) => {
    const { slug } = await params;
    if (!slug.includes("-")) {
        notFound();
    }

    const parts = slug.split("-in-")
    const citySlug = parts.pop();
    const categorySlug = parts.join("-");

    const format = (text) => text.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");

    const categoryName = format(categorySlug);
    const cityName = format(citySlug);
    const content = categoryCityContent[categorySlug];

    return (
        <CategoryCityPage categoryName={categoryName} cityName={cityName} content={content} />
    )
}

export default Page;