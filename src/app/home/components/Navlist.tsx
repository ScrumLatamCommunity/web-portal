'use client'

import { darkerGrotesque } from '@/fonts'
import { useTypeScreen } from '@/hooks'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'

export const Navlist: React.FC = () => {
  const { user } = useAuth()
  const [activeMenu, setActiveMenu] = useState<string>('')
  const screen = useTypeScreen()
  const pathname = usePathname()

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? '' : menu)
  }

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest('.menu-container')) {
      setActiveMenu('')
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <>
      <div className={`${darkerGrotesque.variable} font-darker-grotesque`}>
        <Link
          href='/'
          className={`${darkerGrotesque.variable} md:item-start flex flex-grow items-center gap-2 border-b-2 border-gray-200 py-2 pr-4 text-[20px] font-darker-grotesque-600 ${
            pathname === '/' ? 'text-orange-500 underline' : 'text-blue-7'
          } hover:text-orange-500 hover:underline lg:justify-center lg:border-b-0`}
        >
          Inicio
        </Link>
      </div>
      <div
        className={`menu-container ${darkerGrotesque.variable} py-full h-full flex-grow border-b-2 border-gray-200 font-darker-grotesque lg:border-b-0`}
        onClick={() => toggleMenu('comunidad')}
      >
        <div
          className={`flex cursor-pointer items-center gap-2 py-2 pr-4 text-[20px] font-darker-grotesque-600 ${
            pathname === '/history' ||
            pathname === '/community/squads' ||
            pathname === '/onboarding'
              ? 'text-red-400 underline'
              : 'text-blue-7'
          } ${
            screen === 'sm' || screen === 'md'
              ? 'justify-between'
              : 'justify-center'
          } ${activeMenu === 'comunidad' ? 'text-red-400 underline' : ''} hover:text-orange-500 hover:underline`}
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
          <div className='z-10 w-full md:bg-black-3 lg:absolute lg:mt-0 lg:w-80 lg:bg-black-2 lg:p-6 lg:shadow-lg'>
            <ul className='space-y-4'>
              <li className='space-y-4'>
                <Link href='/history'>
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
                        Descubre como se fundo nuestra comunidad y como empezo
                        el camino de Scrum Latam
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <Link href='/community/squads'>
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
              </Link>
              <Link href='/community/products&services'>
                <li className='space-y-4'>
                  <div className='flex items-start'>
                    <img
                      alt='Opción 1'
                      className='h-10 w-10'
                      src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/Comunidad%2FGroup%20633690.png?alt=media&token=fc85a476-18f9-4e7a-9be9-ca4ba397725d'
                    />
                    <div className='ml-3'>
                      <p className='lg:font-bold'>
                        Productos y Servicios de Nuestros Sponsors
                      </p>
                      <p className='text-sm text-gray-500'>
                        Conocé todo lo que nuestros sponsors tienen para
                        ofrecerte
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
              {!user && (
                <Link href='/onboarding'>
                  <li className='space-y-4'>
                    <div className='flex items-start'>
                      <img
                        alt='Opción 2'
                        className='h-10 w-10'
                        src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_user_blue.svg?alt=media&token=d3a4b3b8-49e0-40f0-a71d-a00f5224f46e'
                      />
                      <div className='ml-3'>
                        <p className='lg:font-bold'>Onboarding</p>
                        <p className='text-sm text-gray-500'>
                          Conoce más sobre nuestra comunidad y sus objetivos.
                        </p>
                      </div>
                    </div>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        )}
      </div>
      <div
        className={`menu-container ${darkerGrotesque.variable} py-full h-full flex-grow border-b-2 border-gray-200 font-darker-grotesque lg:border-b-0`}
        onClick={() => toggleMenu('actividades')}
      >
        <a
          className={`flex cursor-pointer items-center gap-2 py-2 pr-4 text-[20px] font-darker-grotesque-600 text-blue-7 ${screen === 'sm' || screen === 'md' ? 'justify-between' : 'justify-center'} ${
            pathname === '/activities'
              ? 'text-red-400 underline'
              : 'text-blue-7'
          } ${activeMenu === 'actividades' ? 'text-red-400 underline' : ''} hover:text-red-400 hover:underline`}
        >
          Actividades
          {screen === 'lg' || screen === 'xl' ? (
            <ChevronDown
              className={`h-4 w-4 transition-transform lg:block ${
                activeMenu === 'actividades' ? 'rotate-180' : ''
              }`}
              strokeWidth={2.5}
            />
          ) : activeMenu === 'actividades' ? (
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

        {activeMenu === 'actividades' && (
          <div className='z-10 w-full md:bg-black-3 lg:absolute lg:mt-0 lg:w-80 lg:bg-black-2 lg:p-6 lg:shadow-lg'>
            <ul className='space-y-4'>
              <li className='space-y-4'>
                <Link href='/activities'>
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
                </Link>
              </li>
              <li className='space-y-4'>
                <Link href='/eventos'>
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
                </Link>
              </li>
              <li className='space-y-4'>
                <Link href='/talleres'>
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
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className={`menu-container ${darkerGrotesque.variable} relative flex-grow border-b-2 border-gray-200 font-darker-grotesque lg:border-b-0`}
        onClick={() => toggleMenu('Novedades')}
      >
        <a
          className={`flex cursor-pointer items-center gap-2 py-2 pr-4 text-[20px] font-darker-grotesque-600 text-blue-7 ${screen === 'sm' || screen === 'md' ? 'justify-between' : 'justify-center'} ${
            pathname === '/news-section/news' ||
            pathname === '/news-section/blogs' ||
            pathname === '/news-section/articles'
              ? 'text-red-400 underline'
              : 'text-blue-7'
          } ${activeMenu === 'Novedades' ? 'text-red-400 underline' : ''} hover:text-red-400 hover:underline`}
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
          <div className='z-10 w-full md:bg-black-3 lg:absolute lg:mt-0 lg:w-80 lg:bg-black-2 lg:p-6 lg:shadow-lg'>
            <ul className='space-y-4'>
              <li className='space-y-4'>
                <Link href='/news-section/news'>
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
                </Link>
              </li>
              <li className='space-y-4'>
                <Link href='/news-section/blogs'>
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
                </Link>
              </li>
              <li className='space-y-4'>
                <Link href='/news-section/articles'>
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
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className={`menu-container ${darkerGrotesque.variable} relative flex-grow border-b-2 border-gray-200 font-darker-grotesque lg:border-b-0`}
        onClick={() => toggleMenu('documentacion')}
      >
        <a
          className={`font flex cursor-pointer items-center gap-2 py-2 pr-4 text-[20px] font-darker-grotesque-600 ${
            pathname.startsWith('/documentation')
              ? 'text-red-400 underline'
              : 'text-blue-7'
          } ${
            screen === 'sm' || screen === 'md'
              ? 'justify-between'
              : 'justify-center'
          } ${activeMenu === 'documentacion' ? 'text-red-400 underline' : ''} hover:text-red-400 hover:underline`}
        >
          Documentación
          {screen === 'lg' || screen === 'xl' ? (
            <ChevronDown
              className={`h-4 w-4 transition-transform lg:block ${
                activeMenu === 'documentacion' ? 'rotate-180' : ''
              }`}
              strokeWidth={2.5}
            />
          ) : activeMenu === 'documentacion' ? (
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

        {activeMenu === 'documentacion' && (
          <div className='z-10 w-full md:bg-black-3 lg:absolute lg:mt-0 lg:w-80 lg:bg-black-2 lg:p-6 lg:shadow-lg'>
            <ul className='space-y-4'>
              <li className='space-y-4'>
                <Link href='/documentation?section=manuals'>
                  <h3>Manuales</h3>
                  <div className='flex items-start'>
                    <img
                      alt='Manuales'
                      className='h-10 w-10'
                      src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FIcono%20libro.svg?alt=media&token=e668d076-74d4-4440-b444-938ab4ca08c4'
                    />
                    <div className='ml-3'>
                      <p className='lg:font-bold'>Guías y recursos</p>
                      <p className='text-sm text-gray-500'>
                        Accede a manuales detallados para aprender más.
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <li className='space-y-4'>
                <Link href='/documentation?section=tutorials'>
                  <h3>Tutoriales</h3>
                  <div className='flex items-start'>
                    <img
                      alt='Tutoriales'
                      className='h-10 w-10'
                      src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FIcono%20cara.svg?alt=media&token=07a8e8e3-7c4c-416f-9462-9d116a5d2e99'
                    />
                    <div className='ml-3'>
                      <p className='lg:font-bold'>Paso a paso</p>
                      <p className='text-sm text-gray-500'>
                        Encuentra tutoriales prácticos para dominar
                        herramientas.
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <li className='space-y-4'>
                <Link href='/documentation?section=database'>
                  <h3>Base de Datos</h3>
                  <div className='flex items-start'>
                    <img
                      alt='Base de Datos'
                      className='h-10 w-10'
                      src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FGroup%20633047.svg?alt=media&token=ce02d28a-dfdd-4f4c-8e89-8944651d3a12'
                    />
                    <div className='ml-3'>
                      <p className='lg:font-bold'>Consulta avanzada</p>
                      <p className='text-sm text-gray-500'>
                        Explora información organizada y bases de datos útiles.
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}
