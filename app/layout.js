import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import ScrollToTop from "@/components/ScrollToTop";
import Social from "@/components/landingpage/Social";
import Stickybutton from "@/components/landingpage/Stickybutton";
import Whatsapp from "@/components/Whatsapp";
import { ToastContainer } from "react-toastify";

/* ✅ Font setup */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

/* ✅ GLOBAL META DATA */
export const metadata = {
  title: "Bulk Milk Cooler for Dairy Farms | Reliable Cooling Solutions",

  description:
    "Industrial Bulk Milk Coolers for hygienic milk storage. Trusted solution for dairy farmers, cooperatives, and processing units.",
  keywords: [
    "Bulk Milk Cooler Manufacturer",
    "Milk Processing Equipment",
    "Dairy Machinery Manufacturer",
    "Milk Vending Machine",
    "Curd Making Machine",
  ],
  authors: [{ name: "Bhagyalaxmi Industries" }],
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">

        {/* ✅ Google reCAPTCHA */}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />

        {/* Global Floating Components */}
        <Social />
        <Stickybutton />
        <ScrollToTop />
        <Whatsapp />

        <main>{children}</main>
        <ToastContainer/>
      </body>
    </html>
  );
}
