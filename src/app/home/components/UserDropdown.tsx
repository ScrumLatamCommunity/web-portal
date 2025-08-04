'use client'

import { useState, useRef, useEffect } from 'react'
import { LogOut } from 'react-feather'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter, usePathname } from 'next/navigation'
import { darkerGrotesque } from '@/fonts'
import Link from 'next/link'
import Image from 'next/image'
import HistoryIcon from '@/assets/navbarHistoryIcon'
import SquadIcon from '@/assets/navbarSquadIcon'
import InfoIcon from '@/assets/navbarInfoIcon'

interface UserDropdownProps {
  isMobile?: boolean
}

export const UserDropdown: React.FC<UserDropdownProps> = ({
  isMobile = false
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string>('')
  const { logout, user, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const mapRoutes: Record<string, string> = {
    ADMIN: '/super-admin-dashboard',
    SPONSOR: '/sponsors',
    USER: '/users',
    EDITOR: '/editor'
  }

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? '' : menu)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLogout = () => {
    logout()
    setIsOpen(false)
    window.location.reload()
    router.push('/')
  }

  const getUserInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
    }
    if (user?.firstName) {
      return user.firstName[0].toUpperCase()
    }
    // Fallback to email initials
    if (user?.email) {
      return user.email[0].toUpperCase()
    }
    return 'U'
  }

  const getDisplayName = () => {
    // Para usuarios SPONSOR, mostrar el nombre de la empresa
    if (user?.role === 'SPONSOR' && (user as any)?.sponsorData?.companyName) {
      return (user as any).sponsorData.companyName
    }

    // Para usuarios USER, ADMIN, EDITOR, mostrar el nombre personal
    if (user?.firstName) {
      return user.firstName
    }

    // Fallback to email username
    if (user?.email) {
      const emailUsername = user.email.split('@')[0]
      return emailUsername.charAt(0).toUpperCase() + emailUsername.slice(1)
    }
    return 'Usuario'
  }

  const renderUserAvatar = () => {
    // Para usuarios SPONSOR, mostrar el logo de la empresa
    if (user?.role === 'SPONSOR' && (user as any)?.sponsorData?.logo) {
      return (
        <div className='flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full'>
          <Image
            src={(user as any).sponsorData.logo}
            alt={`Logo de ${(user as any).sponsorData.companyName}`}
            width={40}
            height={40}
            className='object-cover'
          />
        </div>
      )
    }

    // Para usuarios USER, mostrar la foto de perfil
    if (user?.role === 'USER' && user?.profilePictureUrl) {
      return (
        <div className='flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full'>
          <Image
            src={user.profilePictureUrl}
            alt={`Foto de perfil de ${user.firstName}`}
            width={40}
            height={40}
            className='object-cover'
          />
        </div>
      )
    }

    // Fallback: mostrar iniciales en un círculo rojo
    return (
      <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white'>
        {getUserInitials()}
      </div>
    )
  }

  const getNavLinkStyles = (href: string) => {
    const isActive =
      pathname === href || (href !== '/' && pathname.startsWith(href))
    return `flex w-full items-center space-x-3 px-4 py-1 text-left font-roboto text-base font-normal leading-[24.485px] transition-colors duration-150 hover:bg-gray-50 ${
      isActive ? 'text-[#FE7354]' : 'text-[#072356]'
    }`
  }

  const getProfileLinkStyles = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(href)
    return `w-full border-gray-200 px-4 py-1 text-left font-roboto text-base font-normal leading-[24.485px] transition-colors duration-150 hover:bg-gray-50 ${
      isActive ? 'text-[#FE7354]' : 'text-[#072356]'
    }`
  }

  // Mostrar loading mientras se carga la información del usuario
  if (isLoading) {
    return (
      <div className='flex items-center space-x-2'>
        <div className='h-8 w-8 animate-pulse rounded-full bg-gray-300'></div>
        <div className='h-4 w-20 animate-pulse rounded bg-gray-300'></div>
      </div>
    )
  }

  // Si no hay usuario, no mostrar el dropdown
  if (!user) {
    return null
  }

  // En móvil, renderizar con dropdown pero diferente estilo
  if (isMobile) {
    return (
      <div className='relative' ref={dropdownRef}>
        {/* Mobile Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center space-x-2 text-[#082965] transition-colors duration-200 hover:text-red-500'
        >
          <span
            className={`${darkerGrotesque.variable} hidden font-darker-grotesque text-[32px] font-[700] text-[#082965] md:block`}
          >
            ¡Hola {getDisplayName()}!
          </span>
          {renderUserAvatar()}
        </button>
        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className='absolute right-0 z-50 mt-2 w-[232px] shrink-0 border border-[rgba(8,41,101,0.5)] bg-white shadow-lg [border-radius:10px_0_10px_10px]'>
            <div className='flex flex-col py-2'>
              {user?.role === 'EDITOR' ||
              user?.role === 'ADMIN' ||
              user?.role === 'SPONSOR' ? (
                // Menú específico para EDITOR, ADMIN y SPONSOR
                <>
                  <Link
                    href={
                      user?.role === 'EDITOR'
                        ? '/editor'
                        : user?.role === 'ADMIN'
                          ? '/super-admin-dashboard'
                          : '/sponsors'
                    }
                    onClick={() => setIsOpen(false)}
                    className={getNavLinkStyles(
                      user?.role === 'EDITOR'
                        ? '/editor'
                        : user?.role === 'ADMIN'
                          ? '/super-admin-dashboard'
                          : '/sponsors'
                    )}
                  >
                    <span>Dashboard</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`flex w-full items-center space-x-3 px-4 py-1 text-left font-roboto text-base font-normal leading-[24.485px] text-[#072356] transition-colors duration-150 hover:bg-gray-50`}
                  >
                    <span>Cerrar sesión</span>
                    <LogOut size={18} />
                  </button>
                </>
              ) : (
                // Menú normal para otros roles
                <>
                  {/* Rutas de navegación */}
                  <div className='border-gray-200 pb-2'>
                    <Link
                      href='/'
                      onClick={() => setIsOpen(false)}
                      className={getNavLinkStyles('/')}
                    >
                      <span>Inicio</span>
                    </Link>

                    <Link
                      href='/activities'
                      onClick={() => setIsOpen(false)}
                      className={getNavLinkStyles('/activities')}
                    >
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
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-1 text-left font-roboto text-sm font-normal leading-[24.485px] transition-colors duration-150 hover:bg-gray-50 ${
                              pathname === '/history'
                                ? 'text-[#FE7354]'
                                : 'text-[#072356]'
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
                            onClick={() => setIsOpen(false)}
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
                            onClick={() => setIsOpen(false)}
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

                  {/* Opciones de perfil */}
                  <Link
                    href='/users'
                    className={getProfileLinkStyles('/users/profile')}
                  >
                    Mi perfil
                  </Link>

                  <Link
                    href='/users/activities'
                    className={getProfileLinkStyles('/users/activities')}
                  >
                    Mis actividades
                  </Link>

                  <button
                    onClick={handleLogout}
                    className={`flex w-full items-center space-x-3 px-4 py-1 text-left font-roboto text-base font-normal leading-[24.485px] text-[#072356] transition-colors duration-150 hover:bg-gray-50`}
                  >
                    <span>Cerrar sesión</span>
                    <LogOut size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className='relative' ref={dropdownRef}>
      {/* Desktop Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center space-x-2 text-blue-700 transition-colors duration-200 hover:text-red-500'
      >
        <span
          className={`${darkerGrotesque.variable} hidden font-darker-grotesque text-[32px] font-bold text-[#082965] md:block`}
        >
          ¡Hola {getDisplayName()}!
        </span>
        {renderUserAvatar()}
      </button>

      {/* Desktop Dropdown Menu */}
      {isOpen && (
        <div className='absolute right-0 z-50 mt-2 w-[232px] shrink-0 border border-[rgba(8,41,101,0.5)] bg-white shadow-lg [border-radius:10px_0_10px_10px]'>
          <div className='flex flex-col py-2'>
            {user?.role === 'EDITOR' ||
            user?.role === 'ADMIN' ||
            user?.role === 'SPONSOR' ? (
              // Menú específico para EDITOR, ADMIN y SPONSOR
              <>
                <Link
                  className={`w-full px-4 py-1 text-left font-roboto text-base font-normal leading-[24.485px] transition-colors duration-150 hover:bg-gray-50 ${
                    (user?.role === 'EDITOR' &&
                      (pathname === '/editor' ||
                        pathname.startsWith('/editor'))) ||
                    (user?.role === 'ADMIN' &&
                      (pathname === '/super-admin-dashboard' ||
                        pathname.startsWith('/super-admin-dashboard'))) ||
                    (user?.role === 'SPONSOR' &&
                      (pathname === '/sponsors' ||
                        pathname.startsWith('/sponsors')))
                      ? 'text-[#FE7354]'
                      : 'text-[#072356]'
                  }`}
                  href={
                    user?.role === 'EDITOR'
                      ? '/editor'
                      : user?.role === 'ADMIN'
                        ? '/super-admin-dashboard'
                        : '/sponsors'
                  }
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className={`flex w-full items-center space-x-3 px-4 py-1 text-left font-roboto text-base font-normal leading-[24.485px] text-[#072356] transition-colors duration-150 hover:bg-gray-50`}
                >
                  <span>Cerrar sesión</span>
                  <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.5 12.5H12.5C12.8315 12.5 13.1495 12.3683 13.3839 12.1339C13.6183 11.8995 13.75 11.5815 13.75 11.25V3.75C13.75 3.41848 13.6183 3.10054 13.3839 2.86612C13.1495 2.6317 12.8315 2.5 12.5 2.5H7.5'
                      stroke='#082965'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M3.75 5L1.25 7.5L3.75 10'
                      stroke='#082965'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M1.25 7.5H9.375'
                      stroke='#082965'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </>
            ) : (
              // Menú normal para otros roles
              <>
                <Link
                  className={`w-full px-4 py-1 text-left font-roboto text-base font-normal leading-[24.485px] transition-colors duration-150 hover:bg-gray-50 ${
                    pathname === '/users' || pathname.startsWith('/users')
                      ? 'text-[#FE7354]'
                      : 'text-[#072356]'
                  }`}
                  href='/users'
                >
                  Mi perfil
                </Link>

                <Link
                  className={`w-full px-4 py-1 text-left font-roboto text-base font-normal leading-[24.485px] transition-colors duration-150 hover:bg-gray-50 ${
                    pathname === '/users/activities' ||
                    pathname.startsWith('/users/activities')
                      ? 'text-[#FE7354]'
                      : 'text-[#072356]'
                  }`}
                  href='/users/activities'
                >
                  Mis actividades
                </Link>

                <button
                  onClick={handleLogout}
                  className={`flex w-full items-center space-x-3 px-4 py-1 text-left font-roboto text-base font-normal leading-[24.485px] text-[#072356] transition-colors duration-150 hover:bg-gray-50`}
                >
                  <span>Cerrar sesión</span>
                  <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.5 12.5H12.5C12.8315 12.5 13.1495 12.3683 13.3839 12.1339C13.6183 11.8995 13.75 11.5815 13.75 11.25V3.75C13.75 3.41848 13.6183 3.10054 13.3839 2.86612C13.1495 2.6317 12.8315 2.5 12.5 2.5H7.5'
                      stroke='#082965'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M3.75 5L1.25 7.5L3.75 10'
                      stroke='#082965'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M1.25 7.5H9.375'
                      stroke='#082965'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
