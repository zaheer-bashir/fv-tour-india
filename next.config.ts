import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["artoftravel.co.in", "images.unsplash.com"],
  },
};

export default nextConfig;
