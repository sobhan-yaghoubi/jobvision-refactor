/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fxzxxnuakwuzxqbkfecw.supabase.co",
        pathname: "**",
      },
    ],
  },
}

export default nextConfig
