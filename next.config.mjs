/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**', // Cambiado para permitir cualquier ruta
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        pathname: '/**',
      },
    ],
  },
}
export default nextConfig