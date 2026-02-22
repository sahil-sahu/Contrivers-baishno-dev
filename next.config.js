/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com','images.unsplash.com','firebasestorage.googleapis.com','lh3.googleusercontent.com'],
    unoptimized: true
  },
}

module.exports = nextConfig
