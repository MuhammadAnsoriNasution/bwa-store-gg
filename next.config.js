/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "store-gg-backend.herokuapp.com"],
  },
};

module.exports = nextConfig;
