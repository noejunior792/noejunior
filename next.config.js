/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['sa-east-1.graphassets.com'],
  },
}

module.exports = nextConfig
