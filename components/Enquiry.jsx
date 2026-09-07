"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaIndustry,
  FaRegCommentDots,
} from "react-icons/fa";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { auth } from "@/utils/firebase";

import { products } from "@/Data";
import axios from "axios";
import { toast } from "react-toastify";

const allproduct = products;

const Enquiry = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState(null);

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        },
      );
    }

    return window.recaptchaVerifier;
  };

  const sendOTP = async (phone) => {
    try {
      const verifier = setupRecaptcha();

      const result = await signInWithPhoneNumber(auth, `+91${phone}`, verifier);

      setConfirmation(result);

      setOtpSent(true);

      toast.success("OTP Sent Successfully");
    } catch (err) {
      console.log(err);

      toast.error("Failed to Send OTP");
    }
  };

  const verifyOTP = async () => {
    try {
      setLoading(true);

      await confirmation.confirm(otp);

      setOtpVerified(true);

      toast.success("OTP Verified");

      return true;
    } catch (err) {
      toast.error("Invalid OTP");

      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const formData = new FormData(e.target);

    const data = {
        supplierToken: "6a2ce60e0dd27bd1398df008",
      platform: "BhagyaLaxmi Industries Enquiry Form",
      platformEmail: "bhagyalaxmigroup12@gmail.com",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      product: formData.get("machine"),
      place: "N/A",
      message: formData.get("message"),
    };

    if (!data.phone || data.phone.length < 10) {
      return toast.error("Enter Valid Phone Number");
    }

    try {
      // Send OTP
      if (!otpSent) {
        await sendOTP(data.phone);
        return;
      }

      // Verify OTP
      if (!otpVerified) {
        const verified = await verifyOTP();

        if (!verified) return;
      }

      // Submit
      setLoading(true);

      await axios.post("https://brandbnalo.com/api/form/add", data);

      toast.success("Message Send Successfully");

      setStatus("Thank you! Your message has been sent.");

      e.target.reset();

      setOtp("");
      setOtpSent(false);
      setOtpVerified(false);
      setConfirmation(null);

      // close modal automatically
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err) {
      console.log(err);

      toast.error("Submission Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[3000] px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-xl relative overflow-hidden border border-gray-200">
        <div className="bg-[#0B4FA8] h-13 w-full flex items-center justify-between px-6 py-4">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            📩 Enquiry Form
          </h2>

          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-red-400 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-4 bg-gradient-to-br from-blue-50 to-white">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />

            <input type="hidden" name="_template" value="table" />

            <input
              type="hidden"
              name="_subject"
              value="New Enquiry from Website"
            />

            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm">
              <FaUser className="text-blue-600 mr-3" />

              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                className="w-full focus:outline-none"
              />
            </div>

            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm">
              <FaEnvelope className="text-blue-600 mr-3" />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Business Email *"
                className="w-full focus:outline-none"
              />
            </div>

            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm">
              <FaPhone className="text-blue-600 mr-3" />

              <input
                type="tel"
                name="phone"
                maxLength={10}
                placeholder="Your Phone"
                className="w-full focus:outline-none"
              />
            </div>

            <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm">
              <FaIndustry className="text-blue-600 mr-3" />

              <select
                name="machine"
                required
                className="w-full bg-transparent focus:outline-none"
              >
                <option value="">Select Product *</option>

                {allproduct.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-start border rounded-lg px-4 py-3 bg-white shadow-sm">
              <FaRegCommentDots className="text-blue-600 mt-1 mr-3" />

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message *"
                className="w-full focus:outline-none"
              />
            </div>

            {/* OTP FIELD */}

            {otpSent && (
              <div className="flex items-center border rounded-lg px-4 py-3 bg-white shadow-sm">
                <FaPhone className="text-green-600 mr-3" />

                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full focus:outline-none"
                />
              </div>
            )}

            <button
              disabled={loading || otpVerified}
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:scale-[1.02] transition disabled:opacity-60"
            >
              {loading
                ? "Submitting..."
                : !otpSent
                  ? "🚀 Submit Enquiry"
                  : !otpVerified
                    ? "Verify OTP"
                    : "Submitted"}
            </button>

            <div id="recaptcha-container"></div>
          </form>

          {status && (
            <p className="text-center mt-3 text-sm md:text-base">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
