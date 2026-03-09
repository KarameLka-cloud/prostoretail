import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/admin",
  //       destination: "/admin/home",
  //       permanent: true,
  //     },
  //   ];
  // },
  sassOptions: {
    additionalData: `
    @import "@/styles/_variables.scss";
    @import "@/styles/_placeholders.scss";
    @import "@/styles/_mixins.scss";
    `,
  },
};

export default nextConfig;
