import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import ScrollToTop from "@/components/ScrollToTop";
import Social from "@/components/landingpage/Social";
import Stickybutton from "@/components/landingpage/Stickybutton";
import Whatsapp from "@/components/Whatsapp";

/* ✅ Font setup (renamed properly) */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

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
      </body>
    </html>
  );
}
