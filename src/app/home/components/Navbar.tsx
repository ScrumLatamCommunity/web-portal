'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, User, ChevronDown } from 'react-feather'
import { Navlist } from './Navlist'
import useIsLargeScreen, { useTypeScreen } from '@/hooks'
import { AuthWrapper } from '@/components/auth/AuthWrapper'
import { darkerGrotesque } from '@/fonts'
import { useAuth } from '@/app/context/AuthContext'
import { usePathname, useRouter } from 'next/navigation'
import { LogoScrumlatam } from '@/components/Logo'
import { MobileLogo } from '@/components/MobileLogo'
import Image from 'next/image'
import HistoryIcon from '@/assets/navbarHistoryIcon'
import SquadIcon from '@/assets/navbarSquadIcon'
import InfoIcon from '@/assets/navbarInfoIcon'

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
  const [userData, setUserData] = useState<any>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [comunidadOpen, setComunidadOpen] = useState(false)

  // Cierra el menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (
        !target.closest('.user-menu-container') &&
        !target.closest('.mobile-menu-container')
      ) {
        setUserMenuOpen(false)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [])

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.sub) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}users/${user.sub}`
          )
          if (res.ok) {
            const data = await res.json()
            setUserData(data)
          }
        } catch (e) {
          setUserData(null)
        }
      }
    }
    fetchUserData()
  }, [user])

  const mapRoutes: Record<string, string> = {
    ADMIN: '/super-admin-dashboard',
    SPONSOR: '/sponsors',
    USER: '/users',
    EDITOR: '/editor'
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
        {userData && (
          <div className='user-menu-container relative flex items-center gap-4'>
            <span className='font-darker-grotesque text-[24px] font-bold text-[#082965]'>
              Hola {userData.firstName || userData.username || 'Usuario'}!
            </span>
            {userData.profilePictureUrl && (
              <Image
                src={userData.profilePictureUrl}
                alt={userData.firstName || userData.username || 'Usuario'}
                width={48}
                height={48}
                className='h-12 w-12 rounded-full border-2 border-white object-cover shadow-md'
              />
            )}
            <button
              onClick={() => setUserMenuOpen((open) => !open)}
              className='ml-1 flex items-center rounded-full p-1 hover:bg-gray-100 focus:outline-none'
              type='button'
            >
              <ChevronDown
                className={`h-7 w-7 text-[#082965] transition-transform ${userMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {userMenuOpen && (
              <div className='absolute right-0 top-[110%] z-20 min-w-[180px] rounded-b-xl rounded-tl-xl border-2 border-[#08296580] bg-white p-4 shadow-lg'>
                <ul className='space-y-2'>
                  <li>
                    <Link
                      href='/users'
                      className='block rounded px-2 py-2 font-roboto text-[#082965] hover:bg-[#F7F9FB] hover:text-[#FE2E00] md:text-[16px]'
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Mi Perfil
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/users/activities'
                      className='block rounded px-2 py-2 font-roboto text-[#082965] hover:bg-[#F7F9FB] hover:text-[#FE2E00] md:text-[16px]'
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Mis Actividades
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false)
                        logout()
                      }}
                      className='block w-full rounded px-2 py-2 text-left font-roboto text-[#FE2E00] hover:bg-[#F7F9FB] md:text-[16px]'
                    >
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
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

          {/* MOBILE: Saludo + ChevronDown */}
          {(screen === 'sm' || screen === 'md') && userData && (
            <div className='mobile-menu-container relative ml-2 flex items-center'>
              <span className='font-darker-grotesque text-[16px] font-bold text-[#082965] md:text-[24px]'>
                Hola {userData.firstName || userData.username || 'Usuario'}!
              </span>
              <button
                onClick={() => setMobileMenuOpen((open) => !open)}
                className='ml-1 flex items-center rounded-full p-1 hover:bg-gray-100 focus:outline-none'
                type='button'
              >
                <ChevronDown
                  className={`h-7 w-7 text-[#082965] transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileMenuOpen && (
                <div className='absolute right-0 top-[110%] z-30 w-[260px] rounded-xl border-2 border-[#08296580] bg-white p-4 shadow-lg'>
                  <ul className='space-y-1'>
                    <li>
                      <Link
                        href='/'
                        className='flex items-center gap-2 rounded px-2 py-2 font-roboto text-[#082965] hover:bg-[#F7F9FB] hover:text-[#FE2E00]'
                      >
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/activities'
                        className='flex items-center gap-2 rounded px-2 py-2 font-roboto text-[#082965] hover:bg-[#F7F9FB] hover:text-[#FE2E00]'
                      >
                        Actividades
                      </Link>
                    </li>
                    <li>
                      <button
                        type='button'
                        onClick={() => setComunidadOpen((open) => !open)}
                        className='flex w-full items-center gap-2 rounded px-2 py-2 font-roboto text-[#082965] hover:bg-[#F7F9FB] hover:text-[#FE2E00] focus:outline-none'
                      >
                        Comunidad
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${comunidadOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <ul
                        className={`ml-3 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${comunidadOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                        style={{
                          pointerEvents: comunidadOpen ? 'auto' : 'none'
                        }}
                      >
                        <li>
                          <Link
                            href='/history'
                            className='flex items-center gap-2 rounded px-2 py-2 font-roboto text-[#082965] hover:bg-[#F7F9FB] hover:text-[#FE2E00]'
                          >
                            <HistoryIcon className='h-5 w-5' /> Nuestros inicios
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/community/squads'
                            className='flex items-center gap-2 rounded px-2 py-2 font-roboto text-[#082965] hover:bg-[#F7F9FB] hover:text-[#FE2E00]'
                          >
                            <SquadIcon className='h-5 w-5' /> Los Squads
                          </Link>
                        </li>
                        <li>
                          <Link
                            href='/community/products&services'
                            className='flex items-center gap-2 rounded px-2 py-2 font-roboto text-[#082965] hover:bg-[#F7F9FB] hover:text-[#FE2E00]'
                          >
                            <InfoIcon className='h-7 w-7' /> Productos y
                            Servicios de Sponsors
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        href='/users'
                        className='flex items-center gap-2 rounded px-2 py-2 font-roboto text-[#082965] hover:bg-[#F7F9FB] hover:text-[#FE2E00]'
                      >
                        Mi perfil
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/users/activities'
                        className='flex items-center gap-2 rounded px-2 py-2 font-roboto text-[#082965] hover:bg-[#F7F9FB] hover:text-[#FE2E00]'
                      >
                        Mis actividades
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false)
                          logout()
                        }}
                        className='flex w-full items-center gap-2 rounded px-2 py-2 text-left font-roboto text-[#FE2E00] hover:bg-[#F7F9FB]'
                      >
                        Cerrar sesión
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* DESKTOP: Menú hamburguesa y Navlist */}
          {(screen === 'lg' || screen === 'xl') && (
            <button
              onClick={toggleNav}
              className='block rounded p-1 text-red-500 focus:bg-black-3 focus:outline-none lg:hidden'
            >
              <Menu
                className={`h-[38px] w-[60px] ${openNav ? 'hidden' : 'block'}`}
              />
              <X className={`h-6 w-6 ${openNav ? 'block' : 'hidden'}`} />
            </button>
          )}
        </div>

        {/* Enlace de navegación visible en pantallas medianas y grandes */}
        <nav
          className={`py-full z-10 hidden h-full space-x-4 pl-4 ${isLargeScreen ? 'lg:flex' : ''} lg:w-auto`}
        >
          <Navlist />
        </nav>

        {/* Contenedor de botones en pantallas medianas y grandes */}
        {(screen === 'lg' || screen === 'xl') && (
          <div className='mt-2 hidden flex-row items-center lg:flex'>
            <AuthButtons isMobile={false} />
          </div>
        )}
      </div>
    </header>
  )
}
