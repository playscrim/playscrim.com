/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/kBRxkG3B2F',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
