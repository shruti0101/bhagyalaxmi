import { Roboto } from "next/font/google";
import Script from "next/script"; 
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Social from "@/components/landingpage/Social";
import Stickybutton from "@/components/landingpage/Stickybutton";
import Whatsapp from "@/components/Whatsapp";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});


// export const metadata = {

//   title: "bhagya laxmi Machine Supplier in India",
//   description: "bhagya laxmi Machine Supplier",
//   icons: {
//     icon: "/logo.jpeg", 
//   },
// };

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
      <body className={`${inter.variable} font-sans antialiased`}>

   <Social />
        <Stickybutton />
      
        <ScrollToTop />
        <Whatsapp></Whatsapp>


        <main>{children}</main>
      </body>
    </html>
  );
}
