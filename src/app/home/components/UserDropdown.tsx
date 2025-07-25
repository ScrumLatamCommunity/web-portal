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
  const { logout, user } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const mapRoutes: Record<string, string> = {
    ADMIN: '/super-admin-dashboard',
    SPONSOR: '/sponsors',
    USER: '/users'
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

  const handleDashboard = () => {
    router.push(user?.role ? mapRoutes[user?.role] : '/')
    setIsOpen(false)
  }

  const handleLogout = () => {
    logout()
    setIsOpen(false)
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
    return `${darkerGrotesque.variable} flex w-full items-center space-x-3 px-4 py-1 text-left font-darker-grotesque-600 transition-colors duration-150 hover:bg-gray-50 ${
      isActive ? 'text-[#FE7354] font-semibold' : 'text-gray-700'
    }`
  }

  const getProfileLinkStyles = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(href)
    return `${darkerGrotesque.variable} w-full border-gray-200 px-4 py-1 text-left font-darker-grotesque-600 transition-colors duration-150 hover:bg-gray-50 ${
      isActive
        ? 'text-[#FE7354] font-semibold'
        : href === '/users/activities'
          ? 'text-red-400'
          : 'text-gray-700'
    }`
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
            className={`${darkerGrotesque.variable} text-lg font-darker-grotesque-600 text-[#082965]`}
          >
            ¡Hola {user?.name?.split(' ')[0] || 'Usuario'}!
          </span>
          <div className='flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white'>
            {getUserInitials()}
          </div>
        </button>
        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className='absolute right-0 z-50 mt-2 w-56 rounded-bl-xl rounded-br-xl rounded-tl-xl border-2 border-[#082965] bg-white shadow-lg'>
            <div className='flex flex-col py-2'>
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
                className={`${darkerGrotesque.variable} flex w-full items-center space-x-3 px-4 py-1 text-left font-darker-grotesque-600 text-gray-700 transition-colors duration-150 hover:bg-gray-50`}
              >
                <span>Cerrar sesión</span>
                <LogOut size={18} />
              </button>
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
          className={`${darkerGrotesque.variable} hidden text-lg font-darker-grotesque-600 text-[#082965] md:block`}
        >
          ¡Hola {user?.name?.split(' ')[0] || 'Usuario'}!
        </span>
        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm font-semibold text-white'>
          {getUserInitials()}
        </div>
      </button>

      {/* Desktop Dropdown Menu */}
      {isOpen && (
        <div className='absolute right-0 z-50 mt-2 w-48 rounded-bl-xl rounded-br-xl rounded-tl-xl border-2 border-[#082965] bg-white shadow-lg'>
          <div className='flex flex-col py-2'>
            <Link
              className={`${darkerGrotesque.variable} w-full px-4 py-1 text-left transition-colors duration-150 hover:bg-gray-50 ${
                pathname === '/users' || pathname.startsWith('/users')
                  ? 'font-semibold text-[#FE7354]'
                  : 'text-[#082965]'
              }`}
              href='/users'
            >
              Mi perfil
            </Link>

            <Link
              className={`${darkerGrotesque.variable} w-full px-4 py-1 text-left transition-colors duration-150 hover:bg-gray-50 ${
                pathname === '/users/activities' ||
                pathname.startsWith('/users/activities')
                  ? 'font-semibold text-[#FE7354]'
                  : 'text-[#082965]'
              }`}
              href='/users/activities'
            >
              Mis actividades
            </Link>

            <button
              onClick={handleLogout}
              className={`${darkerGrotesque.variable} flex w-full items-center space-x-3 px-4 py-1 text-left text-[#082965] transition-colors duration-150 hover:bg-gray-50`}
            >
              <span>Cerrar sesión</span>
              <LogOut size={18} fontWeight={600} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
