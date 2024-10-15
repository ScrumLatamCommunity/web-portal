'use client'

import 'tailwindcss/tailwind.css'
import { ChevronDown, Menu, X } from 'react-feather'
import { useState } from 'react'

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string>('')

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? '' : menuName)
  }

  return (
    <nav className='bg-black-3 p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-xl font-bold text-white'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FScrum%20logo%20principal.svg?alt=media&token=d8cce1e3-c821-4e52-9596-289f17c63203'
            alt='logo'
            className='h-10'
          />
        </div>

        {/* Icono hamburguesa para dispositivos móviles */}
        <div className='lg:hidden'>
          <button onClick={() => toggleMenu('mobile')} className='text-red-500'>
            {activeMenu === 'mobile' ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </button>
        </div>

        <div
          className={`flex-grow space-x-4 lg:static lg:flex lg:items-center lg:bg-transparent lg:shadow-none ${
            activeMenu === 'mobile' ? 'block' : 'hidden'
          }`}
        >
          <a
            href='#Home'
            className='flex flex-grow items-center justify-center gap-2 py-2 pr-4 font-medium text-blue-7 hover:text-red-500 hover:underline'
          >
            Inicio
          </a>

          {/* Menú Comunidad con opciones desplegables */}
          <div className='relative flex-grow'>
            <a
              href='#'
              onClick={() => toggleMenu('comunidad')}
              className='flex cursor-pointer items-center justify-center gap-2 py-2 pr-4 font-medium text-blue-7 hover:text-red-500 hover:underline'
            >
              Comunidad
              <ChevronDown
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform lg:block ${
                  activeMenu === 'comunidad' ? 'rotate-180' : ''
                }`}
              />
            </a>

            {activeMenu === 'comunidad' && (
              <div className='absolute mt-4 w-64 bg-black-2 p-2 shadow-lg'>
                <ul className='space-y-4'>
                  <li className='space-y-4'>
                    <h3 className='font-bold'>Historia</h3>
                    <div className='flex items-start'>
                      <img
                        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_pencil_orange.svg?alt=media&token=f1261db1-c7d1-407e-8c41-153761031e0f'
                        alt='Opción 1'
                        className='h-10 w-10'
                      />
                      <div className='ml-3'>
                        <p className='font-bold'>Nuestros inicios</p>
                        <p className='text-sm text-gray-500'>
                          Descubre como se fundo nuestra comunidad y como empezo
                          el camino de Scrum Latam
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className='space-y-4'>
                    <h3 className='font-bold'>¿Quienes somos?</h3>
                    <div className='flex items-start'>
                      <img
                        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_user_blue.svg?alt=media&token=d3a4b3b8-49e0-40f0-a71d-a00f5224f46e'
                        alt='Opción 1'
                        className='h-10 w-10'
                      />
                      <div className='ml-3'>
                        <p className='font-bold'>Los Squads</p>
                        <p className='text-sm text-gray-500'>
                          Conoce a todos nuestros squads, los roles de cada uno
                          y que rol cumplen dentro de la comunidad
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className='relative flex-grow'>
            <a
              href='#'
              onClick={() => toggleMenu('entrenamiento')}
              className='flex cursor-pointer items-center justify-center gap-2 py-2 pr-4 font-medium text-blue-7 hover:text-red-500 hover:underline'
            >
              Entrenamiento
              <ChevronDown
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform lg:block ${
                  activeMenu === 'entrenamiento' ? 'rotate-180' : ''
                }`}
              />
            </a>

            {activeMenu === 'entrenamiento' && (
              <div className='absolute mt-4 w-64 bg-black-2 p-2 shadow-lg'>
                <ul className='space-y-4'>
                  <li className='space-y-4'>
                    <h3 className='font-bold'>Eventos</h3>
                    <div className='flex items-start'>
                      <img
                        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FIcono%20cara.svg?alt=media&token=07a8e8e3-7c4c-416f-9462-9d116a5d2e99'
                        alt='Opción 1'
                        className='h-10 w-10'
                      />
                      <div className='ml-3'>
                        <p className='font-bold'>Lorem ipsum dolor</p>
                        <p className='text-sm text-gray-500'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec vel egestas dolor, nec dignissim metus.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className='space-y-4'>
                    <h3 className='font-bold'>Webinars</h3>
                    <div className='flex items-start'>
                      <img
                        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FGroup%20633047.svg?alt=media&token=ce02d28a-dfdd-4f4c-8e89-8944651d3a12'
                        alt='Opción 1'
                        className='h-10 w-10'
                      />
                      <div className='ml-3'>
                        <p className='font-bold'>Lorem ipsum dolor</p>
                        <p className='text-sm text-gray-500'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec vel egestas dolor, nec dignissim metus.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className='space-y-4'>
                    <h3 className='font-bold'>Talleres</h3>
                    <div className='flex items-start'>
                      <img
                        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FIcono%20libro.svg?alt=media&token=e668d076-74d4-4440-b444-938ab4ca08c4'
                        alt='Opción 1'
                        className='h-10 w-10'
                      />
                      <div className='ml-3'>
                        <p className='font-bold'>Lorem ipsum dolor</p>
                        <p className='text-sm text-gray-500'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec vel egestas dolor, nec dignissim metus.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a
            href='#'
            className='flex flex-grow items-center justify-center gap-2 py-2 pr-4 font-medium text-blue-7 hover:text-red-500 hover:underline'
          >
            Documentación
          </a>

          <a
            href='#'
            className='flex flex-grow items-center justify-center gap-2 py-2 pr-4 font-medium text-blue-7 hover:text-red-500 hover:underline'
          >
            Novedades
          </a>
        </div>

        <div className='hidden items-center space-x-4 lg:flex'>
          <a href='#' className='text-blue-7 hover:text-red-400'>
            Iniciar sesión
          </a>
          <a
            href='#'
            className='rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
          >
            Registrarse
          </a>
        </div>
      </div>
    </nav>
  )
}
