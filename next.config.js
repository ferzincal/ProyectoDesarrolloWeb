/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/casa-aleluya',

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;