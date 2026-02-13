import Bestseller from "@/components/landingpage/Bestseller";
import AccordionHero from "@/components/landingpage/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/landingpage/About";
import Cta from "@/components/landingpage/Cta";
import Whychoose from "@/components/landingpage/Whychoose";
// import Quality from "@/components/landingpage/Quality";
import Barbending from "@/components/landingpage/Barbending";
import Industry from "@/components/landingpage/Industry";
import Faq from "@/components/landingpage/Faq";

import Testimonials from "@/components/landingpage/Testimonials";
import Youtube from "@/components/landingpage/Youtube";

import Productcategory from "@/components/landingpage/Productcategory";
import Check from "@/components/landingpage/Check";
import Popup from "@/components/Popup";
import Footer from "@/components/landingpage/Footer";
import CitySection from "@/components/CitySection";

// import Gallery from "@/components/landingpage/Gallery";

export default function Home() {
  return (
    <>

      <Navbar />
      <Popup></Popup>
      <AccordionHero></AccordionHero>

      <About></About>
      <Bestseller></Bestseller>
      <Productcategory></Productcategory>
      <Whychoose></Whychoose>


      <Check></Check>

      {/* <Gallery></Gallery> */}
      <Barbending></Barbending>
      <Cta />
      {/* <Quality></Quality> */}
      <Industry></Industry>

      <Youtube></Youtube>
      <Testimonials></Testimonials>
      <Faq></Faq>
      <CitySection />
      <Footer />
    </>
  );
}
