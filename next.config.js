/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporarily ignore build errors during migration
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily ignore lint errors during migration
    ignoreDuringBuilds: true,
  },
  // Enable standalone output for Vercel
  output: 'standalone',
}

module.exports = nextConfig