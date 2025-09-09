"use client";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  { src: "/products/asg/Anti-Fog-Cannon-Machine/1.webp", link: "/products/anti-fog-cannon-machine" },
  { src: "/products/ror/RIDE ON ROLLER/1.webp", link: "products/ride-on-roller" },
  { src: "/products/bpm/Automatic Bar Bender/1.webp", link: "/products/bar-bending-machine" },
  { src: "/products/cm/CONCRETE MIXER/1.webp", link: "products/concrete-mixer" },
  { src: "/products/lte/HOT AIR OVEN/1.webp", link: "/products/hot-air-oven" },
  { src: "/products/ml/MONKEY HOIST ( 200300 KG )/1.webp", link: "/products/monkey-hoist-200-300kg" },
];

const GallerySection = () => {
  return (
    <section className="relative py-12 px-6 md:px-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/home/gallerybg.webp')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white drop-shadow-lg relative inline-block">
            Our Gallery
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-yellow-500 rounded-full"></span>
          </h2>
          <p className="mt-4 text-white text-lg">
            Explore our products & real-world installations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="relative overflow-hidden rounded-2xl group shadow-xl aspect-[4/3] block"
            >
              <Image
                src={item.src}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold tracking-wide">
                  View Product
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
