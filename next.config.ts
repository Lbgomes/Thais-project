import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "source.unsplash.com",
    ],
    formats: [
      'image/avif', 'image/webp'
    ]
  },
  /* config options here */
};

export default nextConfig;
