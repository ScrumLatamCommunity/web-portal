/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'firebasestorage.googleapis.com',
      's3-alpha-sig.figma.com',
      'flagcdn.com',
    ],
  },
}

export default nextConfig
