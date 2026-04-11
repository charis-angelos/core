import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/core",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
