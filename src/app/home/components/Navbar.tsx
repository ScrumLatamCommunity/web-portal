'use client'

import { useState } from 'react'
import { Menu, X, User } from 'react-feather'
import { Navlist } from './Navlist'
import { useTypeScreen } from '@/hooks'

export const Navbar: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false)
  const screen = useTypeScreen()

  const toggleNav = (): void => {
    setOpenNav(!openNav)
  }

  return (
    <header className='font-DM sticky top-0 z-50 border-b-2 border-gray-200 bg-black-3'>
      <div className='mx-auto w-full max-w-screen-2xl justify-between px-4 py-2 lg:flex lg:items-center'>
        <div className='scroll flex justify-between lg:justify-start'>
          <a href='#' className='flex flex-row justify-start'>
            <img
              alt='logo'
              className='h-12 w-auto min-w-[90px]'
              src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FScrum%20logo%20principal.svg?alt=media&token=d8cce1e3-c821-4e52-9596-289f17c63203'
            />
          </a>

          {/* Enlace de navegación visible en pantallas pequeñas */}
          {(screen === 'sm' || screen === 'md') && (
            <div className='flex flex-row items-center'>
              <div className='ml-3 flex items-center whitespace-nowrap'>
                <a
                  className='flex items-center p-2 text-red-400 hover:text-red-200'
                  href='#'
                >
                  <User className='h-4 sm:mr-1 md:mr-2' />
                  <h2 className='block text-[14px]'>Iniciar sesión</h2>
                </a>
                <a
                  className='mb rounded-full bg-red-500 px-3 py-2 text-[14px] font-bold text-white hover:bg-red-300 sm:max-w-[98px]'
                  href='#'
                >
                  Registrarse
                </a>
              </div>
            </div>
          )}
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
            openNav ? '' : 'hidden'
          } mt-4 flex h-max w-screen flex-col gap-4 rounded bg-black-3 p-6 text-7 lg:hidden`}
        >
          <Navlist />
        </div>
        {/* Contenedor de botones en pantallas medianas y grandes */}
        {(screen === 'lg' || screen === 'xl') && (
          <div className='mt-2 hidden flex-row items-center lg:flex'>
            <div className='flex items-center'>
              <a
                className='mr-5 flex items-center whitespace-nowrap p-2 text-red-400 hover:text-red-200'
                href='#'
              >
                <User className='h-4' />
                <h2 className='block'>Iniciar sesión</h2>
              </a>
              <a
                className='rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-300'
                href='#'
              >
                Registrarse
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
