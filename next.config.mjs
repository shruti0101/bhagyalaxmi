/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ik.imagekit.io", "res.cloudinary.com"],
    unoptimized: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
