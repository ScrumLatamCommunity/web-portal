/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/**', // Permitir todas las rutas bajo este patrón
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        pathname: '/**', // Permitir todas las rutas
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**',
      }
    ],
  },
}
export default nextConfig
