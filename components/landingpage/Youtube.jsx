"use client";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

export default function YoutubeSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  // ✅ Clean video list
  const videos = [
    { id: "1", title: "Bulk Milk Cooler Machine", link: "https://youtu.be/1Ur4WSoTiyA?si=mzQsJet6PIr414Cq" },
    { id: "2", title: "Cow Buffalo Milk ATM Machine", link: "https://youtu.be/QIBMTLDq6AM?si=llBxjt2AZ-H_8mcC" },
    { id: "3", title: "Milk Vending Machine with Cooler", link: "https://youtu.be/ZHHwbzyYKZQ?si=omSmAAKT8Y97FusX" },
    { id: "4", title: "500 Litre Bulk Milk Chiller Machine", link: "https://youtu.be/5P4r7HOAI0M?si=_vzLkckwb2vZI6YX" },
  ];

  // ✅ Strong YouTube ID extractor (supports multiple URL formats)
  const getYoutubeId = (url) => {
    try {
      const u = new URL(url);

      if (u.hostname.includes("youtu.be")) {
        return u.pathname.split("/")[1];
      }

      if (u.pathname.startsWith("/shorts/")) {
        return u.pathname.split("/")[2];
      }

      return u.searchParams.get("v");
    } catch {
      return null;
    }
  };

  const openModal = (url) => {
    const id = getYoutubeId(url);
    if (id) {
      setActiveVideo(`https://www.youtube.com/embed/${id}?autoplay=1`);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setActiveVideo(null);
    setIsOpen(false);
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <FaYoutube className="text-red-600 text-4xl" /> Our YouTube Videos
      </h2>

      {/* Video Cards */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {videos.map((video) => {
          const id = getYoutubeId(video.link);
          return (
            <div
              key={video.id}
              onClick={() => openModal(video.link)}
              className="cursor-pointer group rounded-lg overflow-hidden shadow-lg hover:scale-105 transition relative bg-white"
            >
              {/* ✅ Thumbnail with HD fallback */}
              {id && (
<img
  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
  alt={video.title}
  className="w-full h-56 object-cover"
/>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <FaYoutube className="text-white text-6xl drop-shadow-lg" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold line-clamp-2">{video.title}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg w-[95%] max-w-4xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative pb-[56.25%]">
              <iframe
                src={activeVideo}
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full shadow hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}