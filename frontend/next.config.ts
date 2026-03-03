import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/dashboard",
        permanent: true,
      },
    ];
  },
  sassOptions: {
    additionalData: `@import "@/styles/variables.scss";`,
  },
};

export default nextConfig;
