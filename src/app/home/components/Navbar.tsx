'use client'

import Link from 'next/link'
import { User, Menu, X } from 'react-feather'
import { Navlist } from './Navlist'
import { NavlistMobile } from './NavlistMobile'
import { UserDropdown } from './UserDropdown'
import { AuthWrapper } from '@/components/auth/AuthWrapper'
import { darkerGrotesque } from '@/fonts'
import { usePathname } from 'next/navigation'
import { LogoScrumlatam } from '@/components/Logo'
import { MobileLogo } from '@/components/MobileLogo'
import { useAuth } from '@/app/context/AuthContext'
import { useDisplayName } from '@/hooks/useDisplayName'
import Image from 'next/image'
import { useState } from 'react'

export const Navbar: React.FC = () => {
  const pathname = usePathname()
  const { user } = useAuth()
  const { getDisplayName } = useDisplayName()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const hiddenLayoutRoutes = [
    '/super-admin-dashboard',
    '/register',
    '/login',
    '/onboarding/travel'
  ]
  const hideLayout = hiddenLayoutRoutes.some((route) =>
    pathname.startsWith(route)
  )

  if (hideLayout) {
    return null
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const AuthButtons = ({ isMobile = false }) => (
    <div
      className={`flex ${darkerGrotesque.variable} ${isMobile ? 'flex-col space-y-4' : 'items-center'}`}
    >
      <AuthWrapper showWhenAuth={false}>
        <div
          className={`font-darker-grotesque ${isMobile ? 'flex items-center' : 'flex items-center'}`}
        >
          <Link
            className='flex items-center whitespace-nowrap p-2 text-red-400 hover:text-red-200'
            href='/login'
            onClick={closeMobileMenu}
          >
            <User className='mr-2 h-4' />
            <h2 className='block text-[20px] font-darker-grotesque-600'>
              Iniciar sesión
            </h2>
          </Link>
          <Link
            className='rounded-full bg-red-500 px-4 py-1 pb-2 text-center text-[18px] font-darker-grotesque-600 text-white hover:bg-red-300'
            href='/register'
            onClick={closeMobileMenu}
          >
            Registrarse
          </Link>
        </div>
      </AuthWrapper>

      <AuthWrapper showWhenAuth={true}>
        <UserDropdown isMobile={isMobile} />
      </AuthWrapper>
    </div>
  )

  // COMPONENTE MÓVIL
  const MobileNavbar = () => (
    <header className='font-DM sticky top-0 z-50 w-full border-b-2 border-gray-200 bg-black-3 lg:hidden'>
      <div className='container mx-auto px-4 py-2'>
        <div className='flex w-full justify-between'>
          {/* Logo móvil */}
          <div>
            <MobileLogo />
          </div>

          {/* Usuario logueado o menú hamburguesa */}
          <div className='flex items-center space-x-4'>
            <AuthWrapper showWhenAuth={true}>
              <AuthButtons isMobile={true} />
            </AuthWrapper>

            <AuthWrapper showWhenAuth={false}>
              <button
                onClick={toggleMobileMenu}
                className='flex items-center justify-center p-2 text-[#072356] transition-colors duration-200 hover:text-red-400'
                aria-label='Abrir menú'
              >
                {isMobileMenuOpen ? (
                  <X className='h-6 w-6' />
                ) : (
                  <Menu className='h-6 w-6' />
                )}
              </button>
            </AuthWrapper>
          </div>
        </div>

        {/* Menú desplegable móvil para usuarios no logueados */}
        <AuthWrapper showWhenAuth={false}>
          {isMobileMenuOpen && (
            <div className='absolute left-0 right-0 top-full z-40 border-b-2 border-gray-200 bg-black-3 shadow-lg'>
              <div className='container mx-auto px-4 py-6'>
                {/* NavlistMobile - Navegación para usuarios no logueados */}
                <div className='mb-6'>
                  <NavlistMobile />
                </div>

                {/* AuthButtons */}
                <div className='flex items-center justify-center border-t border-gray-200 pt-6'>
                  <AuthButtons isMobile={true} />
                </div>
              </div>
            </div>
          )}
        </AuthWrapper>
      </div>
    </header>
  )

  // COMPONENTE DESKTOP
  const DesktopNavbar = () => (
    <header className='font-DM sticky top-0 z-50 hidden w-full border-b-2 border-gray-200 bg-black-3 lg:block'>
      <div className='container mx-auto justify-between px-4 py-2 lg:flex lg:items-center'>
        <div>
          <LogoScrumlatam />
        </div>

        <nav className='flex items-center space-x-4'>
          <Navlist />
        </nav>

        <div className='flex items-center'>
          <AuthButtons />
        </div>
      </div>
    </header>
  )

  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  )
}
