/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sink',
        permanent: false
      }
    ]
  }
}

export default nextConfig
