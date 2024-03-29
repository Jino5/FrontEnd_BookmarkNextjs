/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/bookmarks',
          permanent: true
        }
      ]
    },
    serverRuntimeConfig: {
      API_BASE_URL: process.env.NEXT_PUBLIC_SERVER_API_BASE_URL
    },
    publicRuntimeConfig: {
      API_BASE_URL: process.env.NEXT_PUBLIC_CLIENT_API_BASE_URL
    },
  };

export default nextConfig;
