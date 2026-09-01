import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/#about',
        permanent: false,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: false,
      },
      {
        source: '/services',
        destination: '/portfolio',
        permanent: false,
      },
      {
        source: '/cv',
        destination: '/api/download-cv',
        permanent: false,
      },
      {
        source: '/writing',
        destination: '/portfolio?category=Content%20%26%20Writing',
        permanent: false,
      },
      {
        source: '/photography',
        destination: '/portfolio?category=Photography%20%26%20Visual',
        permanent: false,
      },
      {
        source: '/videography',
        destination: '/portfolio?category=Videography%20%26%20Media',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
