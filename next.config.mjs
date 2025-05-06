/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
