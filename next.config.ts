/** @type {import('next').NextConfig} */

const nextConfig = {
  // Vos options ici
  output: 'standalone',
  // output: 'out',
  typescript: {
    ignoreBuildErrors: true, // Ignore les erreurs TypeScript au build
  },
};

module.exports = nextConfig;