import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/bachelor-of-science-in-nursing',
        destination: '/b-sc-nursing',
        permanent: true, // 301 redirect
      },
// Add ALL old WordPress URLs here
    ]
  },
};

export default nextConfig;
