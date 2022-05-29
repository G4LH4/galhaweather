/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.weatherapi.com", "undefined"],
  },
};

module.exports = nextConfig;
