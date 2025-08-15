'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { darkerGrotesque } from '@/fonts'
import Link from 'next/link'
import HistoryIcon from '@/assets/navbarHistoryIcon'
import SquadIcon from '@/assets/navbarSquadIcon'
import InfoIcon from '@/assets/navbarInfoIcon'

export const NavlistMobile: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('')
  const router = useRouter()
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? '' : menu)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActiveMenu('')
    }
  }

  useEffect(() => {
    if (activeMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeMenu])

  const getNavLinkStyles = (href: string) => {
    const isActive =
      pathname === href || (href !== '/' && pathname.startsWith(href))
    return `flex w-full items-center space-x-3 px-4 py-1 text-left font-roboto text-base font-normal leading-[24.485px] transition-colors duration-150 hover:bg-gray-50 ${
      isActive ? 'text-[#FE7354]' : 'text-[#072356]'
    }`
  }

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Navegación principal - EXACTAMENTE como UserDropdown */}
      <div className='border-gray-200 pb-2'>
        {/* Inicio */}
        <Link href='/' className={getNavLinkStyles('/')}>
          <span>Inicio</span>
        </Link>

        {/* Actividades */}
        <Link href='/activities' className={getNavLinkStyles('/activities')}>
          <span>Actividades</span>
        </Link>

        <div className='border-gray-200 pb-2'>
          <div
            onClick={() => toggleMenu('comunidad')}
            className={`flex w-full cursor-pointer items-center justify-between px-4 py-1 text-left font-roboto text-base font-normal leading-[24.485px] transition-colors duration-150 hover:bg-gray-50 ${
              pathname === '/history' ||
              pathname === '/community/squads' ||
              pathname === '/community/products&services'
                ? 'text-[#FE7354]'
                : 'text-[#072356]'
            }`}
          >
            <span>Comunidad</span>
            <svg
              className={`h-4 w-4 transition-transform ${
                activeMenu === 'comunidad' ? 'rotate-180' : ''
              }`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>

          {activeMenu === 'comunidad' && (
            <div className='ml-4 border-l-2 border-gray-200'>
              <Link
                href='/history'
                className={`block px-4 py-1 text-left font-roboto text-sm font-normal leading-[24.485px] transition-colors duration-150 hover:bg-gray-50 ${
                  pathname === '/history' ? 'text-[#FE7354]' : 'text-[#072356]'
                }`}
              >
                <div className='flex items-center'>
                  <HistoryIcon
                    className={`h-4 w-4 text-[#082965] ${pathname === '/history' ? 'text-[#FE2E00]' : ''}`}
                  />
                  <span className='ml-2'>Nuestros inicios</span>
                </div>
              </Link>
              <Link
                href='/community/squads'
                className={`block px-4 py-1 text-left font-roboto text-sm font-normal leading-[24.485px] transition-colors duration-150 hover:bg-gray-50 ${
                  pathname === '/community/squads'
                    ? 'text-[#FE7354]'
                    : 'text-[#072356]'
                }`}
              >
                <div className='flex items-center'>
                  <SquadIcon
                    className={`h-4 w-4 text-[#082965] ${pathname === '/community/squads' ? 'text-[#FE2E00]' : ''}`}
                  />
                  <span className='ml-2'>Los Squads</span>
                </div>
              </Link>
              <Link
                href='/community/products&services'
                className={`block px-4 py-1 text-left font-roboto text-sm font-normal leading-[24.485px] transition-colors duration-150 hover:bg-gray-50 ${
                  pathname === '/community/products&services'
                    ? 'text-[#FE7354]'
                    : 'text-[#072356]'
                }`}
              >
                <div className='flex items-start'>
                  <InfoIcon
                    className={`mt-0.5 h-4 w-4 text-[#082965] ${pathname === '/community/products&services' ? 'text-[#FE2E00]' : ''}`}
                  />
                  <span className='ml-2'>
                    Productos y Servicios de Sponsors
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
