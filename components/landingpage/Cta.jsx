const CTASection = () => {
  return (
    <section style={{backgroundImage:"url(/formbg.webp)"}} className="w-full relative bg-center bg-cover py-9 px-4 md:px-10 ">

      <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">

        {/* Left Side Image */}
        <div className="w-full h-full">
          <img
            src="/ctaimg.png"
            alt="Contact Us"
            className="w-full h-[350px] md:h-[480px] object-cover  "
          />
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-5 rounded-xl shadow-lg border border-blue-200">
       
          <p className="text-black  mb-2">
            Fill out the form and our team will contact you soon.
          </p>

          <form className="space-y-3">

            <div>
              <label className="block font-semibold text-black mb-1">Name</label>
              <input
                type="text"
                className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-semibold text-black mb-1">Phone</label>
              <input
                type="text"
                className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block font-semibold text-black mb-1">Message</label>
              <textarea
                className="w-full p-3 border-2 border-black rounded-lg focus:ring focus:ring-orange-300"
                placeholder="Write your message..."
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1447E6] text-white cursor-pointer py-3 rounded-lg font-semibold text-lg  transition"
            >
              Submit Details
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
