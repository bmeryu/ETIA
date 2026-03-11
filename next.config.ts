import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ETIA",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
