/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  output: 'standalone',
  experimental: {
    // this includes files from the monorepo base two directories up
    outputFileTracingRoot: path.join(__dirname, '../../')
  },
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  }
};

module.exports = nextConfig;
