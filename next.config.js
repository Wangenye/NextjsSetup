/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', 'cdn.pixabay.com'],
  },
};

module.exports = nextConfig;