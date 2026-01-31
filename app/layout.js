import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import ScrollToTop from "@/components/ScrollToTop";
import Social from "@/components/landingpage/Social";
import Stickybutton from "@/components/landingpage/Stickybutton";
import Whatsapp from "@/components/Whatsapp";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

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
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "v9xch87zg2");
  `}
        </Script>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMZXRJWL');
          `}
        </Script>
      </head>

      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMZXRJWL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ✅ Google reCAPTCHA */}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
        <Social />
        <Stickybutton />
        <ScrollToTop />
        <Whatsapp />

        <main>{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}
