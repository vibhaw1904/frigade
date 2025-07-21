import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  content: [
    './node_modules/onborda/dist/**/*.{js,ts,jsx,tsx}' // Add this
  ]
};

export default nextConfig;
