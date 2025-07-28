'use client'

import Link from 'next/link'
import { User } from 'react-feather'
import { Navlist } from './Navlist'
import { UserDropdown } from './UserDropdown'
import { AuthWrapper } from '@/components/auth/AuthWrapper'
import { darkerGrotesque } from '@/fonts'
import { usePathname } from 'next/navigation'
import { LogoScrumlatam } from '@/components/Logo'
import { MobileLogo } from '@/components/MobileLogo'

export const Navbar: React.FC = () => {
  const pathname = usePathname()
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

          {/* Usuario logueado + menú */}
          <div className='flex items-center space-x-4'>
            <AuthButtons isMobile={true} />
          </div>
        </div>
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
