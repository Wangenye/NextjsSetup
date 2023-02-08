/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc', 'cdn.pixabay.com'],
  },
};

module.exports = nextConfig;