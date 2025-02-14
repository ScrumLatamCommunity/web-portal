'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, User } from 'react-feather'
import { Navlist } from './Navlist'
import { useTypeScreen } from '@/hooks'
import { AuthWrapper } from '@/components/auth/AuthWrapper'
import { darkerGrotesque } from '@/fonts'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'

export const Navbar: React.FC = () => {
  const { logout, user } = useAuth()
  const router = useRouter()
  const [openNav, setOpenNav] = useState<boolean>(false)
  const screen = useTypeScreen()

  const mapRoutes: Record<string, string> = {
    ADMIN: '/super-admin-dashboard',
    SPONSOR: '/sponsors',
    USER: '/'
  }

  const toggleNav = (): void => {
    setOpenNav(!openNav)
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
    <header className='font-DM sticky top-0 z-50 min-w-[370px] border-b-2 border-gray-200 bg-black-3'>
      <div className='mx-auto min-w-[360px] max-w-screen-2xl justify-between px-4 py-2 lg:flex lg:items-center'>
        <div className='scroll flex justify-between lg:justify-start'>
          <Link href='/' className='flex flex-row justify-start'>
            <img
              alt='logo'
              width={90}
              height={48}
              className='h-12 w-auto min-w-[90px]'
              src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FScrum%20logo%20principal.svg?alt=media&token=d8cce1e3-c821-4e52-9596-289f17c63203'
            />
          </Link>

          <button
            onClick={toggleNav}
            className='block rounded p-1 text-red-500 focus:bg-black-3 focus:outline-none lg:hidden'
          >
            <Menu className={`h-6 w-6 ${openNav ? 'hidden' : 'block'}`} />
            <X className={`h-6 w-6 ${openNav ? 'block' : 'hidden'}`} />
          </button>
        </div>

        {/* Enlace de navegación visible en pantallas medianas y grandes */}
        <nav className='py-full z-10 hidden h-full space-x-10 lg:flex lg:w-auto'>
          <Navlist />
        </nav>

        {/* Menú de navegación para móviles */}
        <div
          className={`${
            openNav ? 'opacity-100' : 'pointer-events-none opacity-0'
          } absolute left-0 right-0 top-full bg-black-3 p-6 text-7 shadow-lg transition-opacity duration-200 lg:hidden`}
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
