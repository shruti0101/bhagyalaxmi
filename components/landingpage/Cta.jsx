"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { auth } from "@/utils/firebase";

const CTASection = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);

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
      const appVerifier = setupRecaptcha();

      const result = await signInWithPhoneNumber(
        auth,
        `+91${phone}`,
        appVerifier,
      );

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

      toast.success("OTP Verified Successfully");

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
      platform: "BhagyaLaxmi Industries CTA Form",
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
      // STEP 1 SEND OTP
      if (!otpSent) {
        await sendOTP(data.phone);
        return;
      }

      // STEP 2 VERIFY OTP
      if (!otpVerified) {
        const verified = await verifyOTP();

        if (!verified) return;
      }

      // STEP 3 SUBMIT
      setLoading(true);

      await axios.post("https://brandbnalo.com/api/form/add", data);

      toast.success("Message Send Successfully");

      e.target.reset();

      setOtp("");
      setOtpSent(false);
      setOtpVerified(false);
      setConfirmation(null);
    } catch (err) {
      toast.error("Submission Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{ backgroundImage: "url(/formbg.webp)" }}
      className="w-full relative bg-center bg-cover py-9 px-4 sm:px-6 md:px-10"
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center z-10">
        {/* Left Side Image */}
        <div className="w-full h-full flex justify-center">
          <img
            src="/ctaimg.webp"
            alt="Contact Us"
            className="w-full max-w-[520px] md:max-w-none h-[260px] sm:h-[320px] md:h-[480px] object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-4 sm:p-5 rounded-xl shadow-lg border border-blue-200 w-full">
          <p className="text-black mb-2 text-sm sm:text-base">
            Fill out the form and our team will contact you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block font-semibold text-black mb-1">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold text-black mb-1">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold text-black mb-1">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                required
                className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold text-black mb-1">
                Message
              </label>

              <textarea
                name="message"
                className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                placeholder="Write your message..."
                rows={4}
              ></textarea>
            </div>

            {/* OTP */}
            {otpSent && (
              <div>
                <label className="block font-semibold text-black mb-1">
                  OTP
                </label>

                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                  placeholder="Enter OTP"
                />
              </div>
            )}

            <button
              disabled={loading || otpVerified}
              type="submit"
              className="w-full bg-[#1447E6] text-white cursor-pointer py-3 rounded-lg font-semibold text-base sm:text-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading
                ? "Submitting..."
                : !otpSent
                  ? "Submit Details"
                  : !otpVerified
                    ? "Verify OTP"
                    : "Submitted"}
            </button>

            <div id="recaptcha-container"></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
