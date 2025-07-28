'use client'

import { useState, useRef, useEffect } from 'react'
import { LogOut } from 'react-feather'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter, usePathname } from 'next/navigation'
import { darkerGrotesque } from '@/fonts'
import Link from 'next/link'

interface UserDropdownProps {
  isMobile?: boolean
}

export const UserDropdown: React.FC<UserDropdownProps> = ({
  isMobile = false
}) => {
  const [isOpen, setIsOpen] = useState(false)
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
    if (user?.name) {
      return user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
    return 'U'
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

  console.log('\n\n [USER]', user, '\n\n')

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
            ¡Hola {user?.name?.split(' ')[0] || 'Usuario'}!
          </span>
          <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white'>
            {getUserInitials()}
          </div>
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

                    <Link
                      href='/community'
                      onClick={() => setIsOpen(false)}
                      className={getNavLinkStyles('/community')}
                    >
                      <span>Comunidad</span>
                    </Link>
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
          ¡Hola {user?.name?.split(' ')[0] || 'Usuario'}!
        </span>
        <div className='flex h-[40px] w-[40px] items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white'>
          {getUserInitials()}
        </div>
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
