import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  basePath: "", // No need to change this for root deployment
  images: {
    unoptimized: true, // GitHub Pages does not support image optimization
  },
};

export default config;
