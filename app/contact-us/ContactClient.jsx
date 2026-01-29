"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingpage/Footer";
import { products } from "@/Data";
import axios from "axios";
import { toast } from "react-toastify";
export default function ContactPage() {


  const allproducts = products


  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      platform: "BhagyaLaxmi Industries About Us Form",
      platformEmail: "bhagyalaxmigroup12@gmail.com",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: formData.get("machine"),
      place: "N/A",
      message: formData.get("message"),
    };
    if (data.phone.toString().length < 10) return toast.error("Enter Valid Phone Number")
    try {
      const res = await axios.post("https://brandbnalo.com/api/form/add", data);
      toast.success("Message Send Successfully")
      setStatus("Thank you! Your message has been sent.")
      e.target.reset();
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <Navbar />

      <section
        style={{ backgroundImage: "url(/milkflow4.jpg)" }}
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Contact Us
          </h1>

          <p className="text-xl md:text-2xl ">
            Advanced technology ensuring purity, freshness & consistent cooling.
          </p>
        </div>
      </section>




      {/* ================= CONTACT SECTION ================= */}
      <section className="bg-[#E8F1FF] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

          {/* INFO COLUMN */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <Phone className="text-[#0B5ED7]" />
              <h4 className="font-bold mt-2 text-[#0A2540]">Phone</h4>
              <p>+919560156328</p>
              <p>+918860600234</p>

            </div>
            {/* <div className="bg-white p-6 rounded-xl shadow">
              <Phone className="text-[#0B5ED7]" />
              <h4 className="font-bold mt-2 text-[#0A2540]">Alt Phone</h4>
              <p>+918860600234</p>
            
            </div> */}

            <div className="bg-white p-6 rounded-xl shadow">
              <Mail className="text-[#0B5ED7]" />
              <h4 className="font-bold mt-2 text-[#0A2540]">Email</h4>
              <p>bhagyalaxmigroup12@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <MapPin className="text-[#0B5ED7]" />
              <h4 className="font-bold mt-2 text-[#0A2540]">Address</h4>
              <p className="text-sm">
                KH No 14/15, 14/2/1,Built, Up Area 485 SQ, YDS Appx Nangli, Sakrawati Indl.Area,Najafgarh
                New Delhi - 110043, Delhi, India

              </p>
            </div>
          </div>

          {/* FORM */}
          {/* FORM */}
          <div className="md:col-span-2 relative">
            {/* Decorative Glow */}

            <div className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-blue-100">
              <h2 className="text-3xl font-extrabold mb-2 text-[#0A2540]">
                Let’s Talk Business
              </h2>
              <p className="text-blue-700 mb-8">
                Share your requirement and our team will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder=" "
                      className="peer w-full border border-blue-200 px-4 pt-6 pb-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <label className="absolute left-4 top-2 text-sm text-blue-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                      Full Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder=" "
                      className="peer w-full border border-blue-200 px-4 pt-6 pb-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <label className="absolute left-4 top-2 text-sm text-blue-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                      Phone Number
                    </label>
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder=" "
                    className="peer w-full border border-blue-200 px-4 pt-6 pb-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <label className="absolute left-4 top-2 text-sm text-blue-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                    Email Address
                  </label>
                </div>

                {/* Requirement */}
                <div className="relative">
                  <select
                    name="machine"
                    className="w-full border border-blue-200 px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  >
                    <option value="">Select Requirement</option>
                    {
                      allproducts.map((p, idx) => (
                        <option key={idx} value={p.name}>
                          {p.name}
                        </option>
                      ))

                    }

                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirement..."
                    className="w-full border border-blue-200 px-4 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-semibold py-4 rounded-xl shadow-lg hover:scale-[1.02] transition-all"
                >
                  {loading ? "Sending..." : "Submit Enquiry →"}
                </button>

                {status && (
                  <p className="text-center mt-3 text-sm md:text-base">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="w-full h-[450px] p-4 bg-gray-100 rounded-md overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.212567785343!2d77.00427959999999!3d28.623390600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0534870bd5c3%3A0x95bb0d76bc16a6da!2sBhagyalaxmi%20Industries!5e0!3m2!1sen!2sin!4v1769152870200!5m2!1sen!2sin" className="w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <Footer />
    </>
  );
}
