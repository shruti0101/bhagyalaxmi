"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { products } from "@/Data";
import { toast } from "react-toastify";

export default function Dealer({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [machine, setMachine] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStatus("");
      setLoading(false);
      setName("");
      setEmail("");
      setPhone("");
      setPlace("");
      setCity("");
      setCustomerType("");
      setMachine("");
      setMessage("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const cities = [
    "Select City",
    "Delhi",
    "Noida",
    "Gurgaon",
    "Faridabad",
    "Ghaziabad",
    "Other",
  ];

  const customerOptions = [
    "Please choose an option",
    "I'm a dealer",
    "I'm a contractor",
    "I'm a distributor",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      platform: "BhagyaLaxmi Industries Dealer Inquiry Form",
      platformEmail: "bhagyalaxmigroup12@gmail.com",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: formData.get("machine"),
      place: formData.get("place"),
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
    <div className="fixed inset-0 z-[3000] bg-black/60 flex items-center justify-center px-3 sm:px-4">
      <div className="relative w-full max-w-[900px] bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden animate-[popup_0.25s_ease-out]">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 h-9 w-9 rounded-full bg-white shadow grid place-items-center text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* IMAGE */}
          <div className="hidden md:block relative">
            <Image
              src="/formbg.webp"
              alt="Dealer Enquiry"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl font-bold">
                Dealer Enquiry Form
              </h3>
              <p className="text-white/90 text-sm mt-2">
                Share your details and our team will contact you shortly.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="p-4 sm:p-6 md:p-8 overflow-y-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
              Become Our <span className="text-blue-700">Dealer</span>
            </h2>

            <p className="text-center text-gray-600 text-xs sm:text-sm mt-2 mb-4">
              Fill the form below to get started.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input className="input" placeholder="Name*" name="name" />
                <input className="input" placeholder="Email*" type="email" name="email" />
                <input className="input" placeholder="Phone*" type="tel" name="phone" />
                {/* <input className="input" placeholder="Place*" /> */}

                <select className="input" name="place">
                  {cities.map((c, i) => (
                    <option key={i} value={i === 0 ? "" : c} disabled={i === 0}>
                      {c}
                    </option>
                  ))}
                </select>

                {/* <select className="input" name="place">
                  {customerOptions.map((c, i) => (
                    <option key={i} value={i === 0 ? "" : c} disabled={i === 0}>
                      {c}
                    </option>
                  ))}
                </select> */}

                <div className="sm:col-span-2">
                  <select className="input" name="machine">
                    <option value="">Select Product*</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <textarea className="input resize-none" rows={3} placeholder="Message" name="message" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Enquiry →"}
              </button>

              {status && (
                <p className="text-center text-sm font-medium">{status}</p>
              )}


            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          outline: none;
        }
        .input:focus {
          border-color: #2563eb;
          background: white;
        }
      `}</style>
    </div>
  );
}
