import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site is served by Cloudflare Pages, which has no Node runtime.
  output: "export",
  allowedDevOrigins: ["air.anselbrandt.net"],
};

export default nextConfig;
