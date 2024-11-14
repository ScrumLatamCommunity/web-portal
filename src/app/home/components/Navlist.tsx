'use client'

import { useTypeScreen } from '@/hooks'
import Link from 'next/link'
import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'

export const Navlist: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('')
  const screen = useTypeScreen()

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? '' : menu)
  }

  return (
    <>
      <Link
        href='/'
        className='md:item-start flex flex-grow items-center gap-2 border-b-2 border-gray-200 py-2 pr-4 font-medium text-blue-7 hover:text-red-500 hover:underline lg:justify-center lg:border-b-0'
      >
        Inicio
      </Link>
      <a
        className={`py-full h-full flex-grow border-b-2 border-gray-200 lg:border-b-0`}
        onMouseEnter={() => toggleMenu('comunidad')}
        onMouseLeave={() => toggleMenu('')}
        onClick={() => toggleMenu('entrenamiento')}
      >
        <div
          className={`flex cursor-pointer items-center gap-2 py-2 pr-4 font-medium text-blue-7 ${screen === 'sm' || screen === 'md' ? 'justify-between' : 'justify-center'} hover:text-red-500 hover:underline`}
        >
          Comunidad
          {screen === 'lg' || screen === 'xl' ? (
            <ChevronDown
              className={`h-4 w-4 transition-transform lg:block ${
                activeMenu === 'comunidad' ? 'rotate-180' : ''
              }`}
              strokeWidth={2.5}
            />
          ) : activeMenu === 'comunidad' ? (
            <ChevronDown
              className='h-6 w-6 transition-transform lg:block'
              strokeWidth={2.5}
            />
          ) : (
            <ChevronRight
              className='h-6 w-6 transition-transform lg:block'
              strokeWidth={2.5}
            />
          )}
        </div>
        {activeMenu === 'comunidad' && (
          <div className='z-10 w-full md:bg-black-3 lg:absolute lg:mt-4 lg:w-80 lg:bg-black-2 lg:p-6 lg:shadow-lg'>
            <ul className='space-y-4'>
              <li className='space-y-4'>
                <h3>Historia</h3>
                <div className='flex items-start'>
                  <img
                    alt='Opción 1'
                    className='h-10 w-10'
                    src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_pencil_orange.svg?alt=media&token=f1261db1-c7d1-407e-8c41-153761031e0f'
                  />
                  <div className='ml-3'>
                    <p className='lg:font-bold'>Nuestros inicios</p>
                    <p className='text-sm text-gray-500'>
                      Descubre como se fundo nuestra comunidad y como empezo el
                      camino de Scrum Latam
                    </p>
                  </div>
                </div>
              </li>
              <li className='space-y-4'>
                <h3>¿Quienes somos?</h3>
                <div className='flex items-start'>
                  <img
                    alt='Opción 1'
                    className='h-10 w-10'
                    src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_user_blue.svg?alt=media&token=d3a4b3b8-49e0-40f0-a71d-a00f5224f46e'
                  />
                  <div className='ml-3'>
                    <p className='lg:font-bold'>Los Squads</p>
                    <p className='text-sm text-gray-500'>
                      Conoce a todos nuestros squads, los roles de cada uno y
                      que rol cumplen dentro de la comunidad
                    </p>
                  </div>
                </div>
              </li>
              <div>
                <a href='/onboarding'>Onboarding</a>
              </div>
            </ul>
          </div>
        )}
      </a>
      <div
        className='relative flex-grow border-b-2 border-gray-200 lg:border-b-0'
        onMouseEnter={() => toggleMenu('entrenamiento')}
        onMouseLeave={() => toggleMenu('')}
        onClick={() => toggleMenu('entrenamiento')}
      >
        <a
          className={`flex cursor-pointer items-center gap-2 py-2 pr-4 font-medium text-blue-7 ${screen === 'sm' || screen === 'md' ? 'justify-between' : 'justify-center'} hover:text-red-500 hover:underline`}
        >
          Entrenamiento
          {screen === 'lg' || screen === 'xl' ? (
            <ChevronDown
              className={`h-4 w-4 transition-transform lg:block ${
                activeMenu === 'entrenamiento' ? 'rotate-180' : ''
              }`}
              strokeWidth={2.5}
            />
          ) : activeMenu === 'entrenamiento' ? (
            <ChevronDown
              className='h-6 w-6 transition-transform lg:block'
              strokeWidth={2.5}
            />
          ) : (
            <ChevronRight
              className='h-6 w-6 transition-transform lg:block'
              strokeWidth={2.5}
            />
          )}
        </a>

        {activeMenu === 'entrenamiento' && (
          <div className='z-10 w-full md:bg-black-3 lg:absolute lg:mt-4 lg:w-80 lg:bg-black-2 lg:p-6 lg:shadow-lg'>
            <ul className='space-y-4'>
              <li className='space-y-4'>
                <h3>Eventos</h3>
                <div className='flex items-start'>
                  <img
                    alt='Opción 1'
                    className='h-10 w-10'
                    src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FIcono%20cara.svg?alt=media&token=07a8e8e3-7c4c-416f-9462-9d116a5d2e99'
                  />
                  <div className='ml-3'>
                    <p className='lg:font-bold'>Lorem ipsum dolor</p>
                    <p className='text-sm text-gray-500'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec vel egestas dolor, nec dignissim metus.
                    </p>
                  </div>
                </div>
              </li>
              <li className='space-y-4'>
                <h3>Webinars</h3>
                <div className='flex items-start'>
                  <img
                    alt='Opción 1'
                    className='h-10 w-10 overflow-visible'
                    src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FGroup%20633047.svg?alt=media&token=ce02d28a-dfdd-4f4c-8e89-8944651d3a12'
                  />
                  <div className='ml-3'>
                    <p className='lg:font-bold'>Lorem ipsum dolor</p>
                    <p className='text-sm text-gray-500'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec vel egestas dolor, nec dignissim metus.
                    </p>
                  </div>
                </div>
              </li>
              <li className='space-y-4'>
                <h3>Talleres</h3>
                <div className='flex items-start'>
                  <img
                    alt='Opción 1'
                    className='h-10 w-10'
                    src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FIcono%20libro.svg?alt=media&token=e668d076-74d4-4440-b444-938ab4ca08c4'
                  />
                  <div className='ml-3'>
                    <p className='lg:font-bold'>Lorem ipsum dolor</p>
                    <p className='text-sm text-gray-500'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec vel egestas dolor, nec dignissim metus.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className='relative flex-grow border-b-2 border-gray-200 lg:border-b-0'
        onMouseEnter={() => toggleMenu('Novedades')}
        onMouseLeave={() => toggleMenu('')}
        onClick={() => toggleMenu('entrenamiento')}
      >
        <a
          className={`flex cursor-pointer items-center gap-2 py-2 pr-4 font-medium text-blue-7 ${screen === 'sm' || screen === 'md' ? 'justify-between' : 'justify-center'} hover:text-red-500 hover:underline`}
        >
          Novedades
          {screen === 'lg' || screen === 'xl' ? (
            <ChevronDown
              className={`h-4 w-4 transition-transform lg:block ${
                activeMenu === 'Novedades' ? 'rotate-180' : ''
              }`}
              strokeWidth={2.5}
            />
          ) : activeMenu === 'Novedades' ? (
            <ChevronDown
              className='h-6 w-6 transition-transform lg:block'
              strokeWidth={2.5}
            />
          ) : (
            <ChevronRight
              className='h-6 w-6 transition-transform lg:block'
              strokeWidth={2.5}
            />
          )}
        </a>

        {activeMenu === 'Novedades' && (
          <div className='z-10 w-full md:bg-black-3 lg:absolute lg:mt-4 lg:w-80 lg:bg-black-2 lg:p-6 lg:shadow-lg'>
            <ul className='space-y-4'>
              <li className='space-y-4'>
                <h3>Noticias</h3>
                <div className='flex items-start'>
                  <img
                    alt='Opción 1'
                    className='h-10 w-10'
                    src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FIcono%20cara.svg?alt=media&token=07a8e8e3-7c4c-416f-9462-9d116a5d2e99'
                  />
                  <div className='ml-3'>
                    <p className='lg:font-bold'>Lorem ipsum dolor</p>
                    <p className='text-sm text-gray-500'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec vel egestas dolor, nec dignissim metus.
                    </p>
                  </div>
                </div>
              </li>
              <li className='space-y-4'>
                <h3>Blog</h3>
                <div className='flex items-start'>
                  <img
                    alt='Opción 1'
                    className='h-10 w-10 overflow-visible'
                    src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FGroup%20633047.svg?alt=media&token=ce02d28a-dfdd-4f4c-8e89-8944651d3a12'
                  />
                  <div className='ml-3'>
                    <p className='lg:font-bold'>Lorem ipsum dolor</p>
                    <p className='text-sm text-gray-500'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec vel egestas dolor, nec dignissim metus.
                    </p>
                  </div>
                </div>
              </li>
              <li className='space-y-4'>
                <h3>Artículos</h3>
                <div className='flex items-start'>
                  <img
                    alt='Opción 1'
                    className='h-10 w-10'
                    src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FIcono%20libro.svg?alt=media&token=e668d076-74d4-4440-b444-938ab4ca08c4'
                  />
                  <div className='ml-3'>
                    <p className='lg:font-bold'>Lorem ipsum dolor</p>
                    <p className='text-sm text-gray-500'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec vel egestas dolor, nec dignissim metus.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      <a
        className='md:item-start flex flex-grow items-center gap-2 border-b-2 border-gray-200 py-2 pr-4 font-medium text-blue-7 hover:text-red-500 hover:underline lg:justify-center lg:border-b-0'
        href='#'
      >
        Documentación
      </a>
    </>
  )
}
