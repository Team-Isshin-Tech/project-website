/**
 * Load environment variables (optional, useful for Docker builds)
 */
await import("./src/env.js");

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js",
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/project-website',
  assetPrefix: '/project-website/',
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});

module.exports = nextConfig;
