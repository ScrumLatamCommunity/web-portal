'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface BreadcrumbsProps {
  rootName: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ rootName }) => {
  const pathname = usePathname()

  const lastSegment = pathname.split('/').filter(Boolean).pop()

  // Mapeo de nombres de URL a nombres más legibles
  const breadcrumbNames: Record<string, string> = {
    'products&services': 'Productos y Servicios',
    'about-us': 'Sobre Nosotros',
    contact: 'Contacto'
  }

  // Usar el nombre traducido si existe, sino mostrar el original
  const displayName = lastSegment
    ? breadcrumbNames[lastSegment] || decodeURIComponent(lastSegment)
    : ''

  return (
    <section className='relative mx-auto hidden w-full flex-col md:mx-52 md:mt-12 md:flex md:max-w-screen-2xl md:pl-40'>
      <nav aria-label='breadcrumb' className='w-full text-left'>
        <ol className='flex space-x-2 text-xl'>
          {/* Elemento raíz definido por rootName */}
          <li>
            <Link href='/' className='font-bold text-[#082965] hover:underline'>
              {rootName}
            </Link>
          </li>
          {lastSegment && <li className='font-bold text-[#082965]'>/</li>}
          {lastSegment && (
            <li>
              <span className='font-semibold text-[#FE2E00]'>
                {displayName}
              </span>
            </li>
          )}
        </ol>
      </nav>
    </section>
  )
}

export default Breadcrumbs
