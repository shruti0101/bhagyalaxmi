import CityPage from "./CityPage";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
  const { city } = params;

  const rawCity = city.split("in-").pop();

  const cityName = rawCity
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `Bulk Milk Cooler Manufacturer in ${cityName} | Dairy Cooling Tank`,
    description: `Leading Bulk Milk Cooler Manufacturer in ${cityName} offering energy-efficient stainless steel milk cooling tanks for dairy farms and cooperatives.`,
  };
}

const Page = ({ params }) => {
  const { city } = params;

  // ✅ Check if slug exists in cities list
  const validCity = cites.find(
    (c) => c.href.replace("/", "") === city
  );

  if (!validCity) {
    notFound();
  }

  return <CityPage city={city} />;
};

export default Page;