/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['firebasestorage.googleapis.com', 's3-alpha-sig.figma.com'] // Agrega aquí el dominio donde está alojada la imagen
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'firebasestorage.googleapis.com',
      pathname: '/v0/b/**' // Permitir todas las rutas bajo este patrón
    },
    {
      protocol: 'https',
      hostname: 's3-alpha-sig.figma.com',
      pathname: '/**' // Permitir todas las rutas
    }
  ]
}
export default nextConfig
