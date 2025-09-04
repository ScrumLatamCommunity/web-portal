/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/**'
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'appwiseinnovations.dev',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.instagram.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**'
      }
    ]
  }
}
export default nextConfig
