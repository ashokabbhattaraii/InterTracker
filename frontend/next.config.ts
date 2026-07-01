import type { NextConfig } from "next";

// Proxy /api/* to the NestJS backend. Set BACKEND_URL in the Vercel project
// (e.g. https://your-backend.vercel.app); falls back to local dev otherwise.
const API_URL = process.env.BACKEND_URL ?? "http://localhost:6001";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
