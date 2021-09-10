/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.key-drop.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/skins/category/milspec',
        permanent: true,
      },
    ]
  },
}
