/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
      },
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
      {
        hostname: "zuhswuoryabxgyutinbo.supabase.co",
        protocol: "https",
      },
      {
        hostname: "cdn.discordapp.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
