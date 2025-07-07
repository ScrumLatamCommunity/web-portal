'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, User } from 'react-feather'
import { Navlist } from './Navlist'
import useIsLargeScreen, { useTypeScreen } from '@/hooks'
import { AuthWrapper } from '@/components/auth/AuthWrapper'
import { darkerGrotesque } from '@/fonts'
import { useAuth } from '@/app/context/AuthContext'
import { usePathname, useRouter } from 'next/navigation'
import { LogoScrumlatam } from '@/components/Logo'
import { MobileLogo } from '@/components/MobileLogo'

export const Navbar: React.FC = () => {
  const pathname = usePathname()
  const hiddenLayoutRoutes = [
    '/sponsors',
    '/super-admin-dashboard',
    '/users',
    '/users/activities',
    '/register',
    '/login',
    '/onboarding/travel'
  ]
  const hideLayout = hiddenLayoutRoutes.some((route) =>
    pathname.startsWith(route)
  )
  const { logout, user } = useAuth()
  const router = useRouter()
  const [openNav, setOpenNav] = useState<boolean>(false)
  const screen = useTypeScreen()
  const isLargeScreen = useIsLargeScreen(1140)

  const mapRoutes: Record<string, string> = {
    ADMIN: '/super-admin-dashboard',
    SPONSOR: '/sponsors',
    USER: '/users'
  }

  const toggleNav = (): void => {
    setOpenNav(!openNav)
  }

  if (hideLayout) {
    return null
  }

  const AuthButtons = ({ isMobile = false }) => (
    <div
      className={`flex ${darkerGrotesque.variable} ${isMobile ? 'flex-col space-y-4' : 'items-center'}`}
    >
      <AuthWrapper showWhenAuth={false}>
        <div
          className={`font-darker-grotesque ${isMobile ? 'flex flex-col space-y-4' : 'flex items-center'}`}
        >
          <Link
            className='flex items-center whitespace-nowrap p-2 text-red-400 hover:text-red-200'
            href='/login'
          >
            <User className='mr-2 h-4' />
            <h2 className='block text-[20px] font-darker-grotesque-600'>
              Iniciar sesión
            </h2>
          </Link>
          <Link
            className='rounded-full bg-red-500 px-4 py-1 pb-2 text-center text-[18px] font-darker-grotesque-600 text-white hover:bg-red-300'
            href='/register'
          >
            Registrarse
          </Link>
        </div>
      </AuthWrapper>

      <AuthWrapper showWhenAuth={true}>
        <button
          onClick={logout}
          className='flex cursor-pointer items-center font-darker-grotesque-600 text-red-400 hover:text-red-200'
        >
          <User className='mr-2 h-4' />
          <span className='font-darker-grotesque-600'>Cerrar sesión</span>
        </button>
        <button
          onClick={() => router.push(user?.role ? mapRoutes[user?.role] : '/')}
          className='darker-grotesque-600 ml-2 flex cursor-pointer items-center rounded-full bg-red-400 px-4 py-1 pb-2 text-white hover:bg-red-300'
        >
          <span className='font-darker-grotesque-600'>Dashboard</span>
        </button>
      </AuthWrapper>
    </div>
  )

  return (
    <header className='font-DM sticky top-0 z-50 w-full border-b-2 border-gray-200 bg-black-3'>
      <div className='container mx-auto justify-between px-4 py-2 lg:flex lg:items-center'>
        <div className='flex justify-between lg:justify-start'>
          {/* Logo para mobile (sm y md) */}
          <div className='block lg:hidden'>
            <MobileLogo />
          </div>
          {/* Logo para desktop (lg en adelante) */}
          <div className='hidden lg:block'>
            <LogoScrumlatam />
          </div>

          <button
            onClick={toggleNav}
            className='block rounded p-1 text-red-500 focus:bg-black-3 focus:outline-none lg:hidden'
          >
            <Menu
              className={`h-[38px] w-[60px] ${openNav ? 'hidden' : 'block'}`}
            />
            <X className={`h-6 w-6 ${openNav ? 'block' : 'hidden'}`} />
          </button>
        </div>

        {/* Enlace de navegación visible en pantallas medianas y grandes */}
        <nav
          className={`py-full z-10 hidden h-full space-x-4 pl-4 ${isLargeScreen ? 'lg:flex' : ''} lg:w-auto`}
        >
          <Navlist />
        </nav>

        {/* Menú de navegación para móviles */}
        <div
          className={`${
            openNav ? 'opacity-100' : 'pointer-events-none opacity-0'
          } absolute left-0 right-0 top-full bg-black-3 text-7 shadow-lg transition-opacity duration-200 lg:hidden`}
        >
          <Navlist />
          <AuthButtons isMobile={true} />
        </div>

        {/* Contenedor de botones en pantallas medianas y grandes */}
        {(screen === 'lg' || screen === 'xl') && (
          <div className='mt-2 hidden flex-row items-center lg:flex'>
            <AuthButtons />
          </div>
        )}
      </div>
    </header>
  )
}
