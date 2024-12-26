/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com', 's3-alpha-sig.figma.com'], // Agrega aquí el dominio donde está alojada la imagen
  },
}

export default nextConfig
