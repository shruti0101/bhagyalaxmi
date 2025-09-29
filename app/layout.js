import { Roboto } from "next/font/google";
import Script from "next/script"; 
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Social from "@/components/landingpage/Social";
import Stickybutton from "@/components/landingpage/Stickybutton";
import Whatsapp from "@/components/Whatsapp";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {

  title: "Bar Bending Machine Supplier | Bar Bending Machine Price",
  description: "Shree Shakti Infratech Bar Bending Machine Supplier a specialized tools that take those tough steel bars and bend them precisely to the angles needed for construction.",
  icons: {
    icon: "/logo.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google reCAPTCHA script */}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${roboto.variable} font-sans antialiased`}>

   <Social />
        <Stickybutton />
      
        <ScrollToTop />
        <Whatsapp></Whatsapp>


        <main>{children}</main>
      </body>
    </html>
  );
}
