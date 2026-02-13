import CityPage from "./CityPage";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { city } = await params;

    const rawCity = city.split("in-").pop();

    const cityName = rawCity
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return {
        title: `Bulk Milk Cooler Manufacturer in ${cityName} | Dairy Cooling Tank`,
        description: `Leading Bulk Milk Cooler Manufacturer in ${cityName} offering energy-efficient, stainless steel milk cooling tanks for dairy farms, cooperatives & milk collection centers across ${cityName}.`,
    };
}

const Page = async ({ params }) => {
    const { city } = await params;

    // 🔥 Must contain "-in-"
    if (!city.includes("in-")) {
        notFound();
    }

    // 🔥 Extract city part after "in-"
    const cityName = city.split("in-")[1];

    // 🔥 If city is empty or invalid → redirect to Home
    if (!cityName || cityName.trim().length === 0) {
        notFound();
    }

    return <CityPage city={city} />;
};

export default Page;