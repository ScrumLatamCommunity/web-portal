'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X, User, ChevronRight } from 'react-feather'

export const Navbar: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<string>('')
  const [screen, setScreen] = useState<string>('')

  const handleResize = () => {
    const width = window.innerWidth

    if (width < 768) {
      setScreen('sm')
    } else if (width >= 768 && width < 1024) {
      setScreen('md')
    } else if (width >= 1024 && width < 1280) {
      setScreen('lg')
    } else {
      setScreen('xl')
    }
  }

  useEffect(() => {
    // Escuchar el evento de cambio de tamaño de la pantalla
    window.addEventListener('resize', handleResize)

    // Ejecutar una vez para establecer el tamaño inicial
    handleResize()

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? '' : menuName)
  }

  const toggleNav = (): void => {
    setOpenNav(!openNav)
  }

  const navList = () => {
    return (
      <>
        <a
          className='flex flex-grow items-center lg:justify-center md:item-start gap-2 py-2 pr-4 font-medium text-blue-7 hover:text-red-500 hover:underline'
          href='#'
        >
          Inicio
        </a>
        <a
          className='flex-grow '
          href='#'
          onClick={() => toggleMenu('comunidad')}
        >
          <div className='flex cursor-pointer items-center gap-2 py-2 pr-4 font-medium text-blue-7 md:justify-between sm:justify-between hover:text-red-500 hover:underline'>
            Comunidad
            {screen === 'lg' || screen === 'xl' ? (
              <ChevronDown
                className={`h-3 w-3 transition-transform lg:block ${
                  activeMenu === 'comunidad' ? 'rotate-180' : ''
                }`}
                strokeWidth={2.5}
              />
            ) : activeMenu === 'comunidad' ? (
              <ChevronDown
                className='h-3 w-3 transition-transform lg:block'
                strokeWidth={2.5}
              />
            ) : (
              <ChevronRight
                className='h-3 w-3 transition-transform lg:block'
                strokeWidth={2.5}
              />
            )}
          </div>
          {activeMenu === 'comunidad' && (
            <div className='lg:absolute lg:mt-4 lg:w-64 lg:bg-black-2 md:bg-black-3 lg:p-2 lg:shadow-lg z-10'>
              <ul className='space-y-4'>
                <li className='space-y-4'>
                  <h3 className='font-bold'>Historia</h3>
                  <div className='flex items-start'>
                    <img
                      alt='Opción 1'
                      className='h-10 w-10'
                      src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_pencil_orange.svg?alt=media&token=f1261db1-c7d1-407e-8c41-153761031e0f'
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
                      alt='Opción 1'
                      className='h-10 w-10'
                      src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2Femoji_user_blue.svg?alt=media&token=d3a4b3b8-49e0-40f0-a71d-a00f5224f46e'
                    />
                    <div className='ml-3'>
                      <p className='font-bold'>Los Squads</p>
                      <p className='text-sm text-gray-500'>
                        Conoce a todos nuestros squads, los roles de cada uno y
                        que rol cumplen dentro de la comunidad
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </a>
        <div className='relative flex-grow'>
          <a
            className='flex cursor-pointer items-center lg:justify-center md:item-start gap-2 py-2 pr-4 font-medium text-blue-7 md:justify-between sm:justify-between  hover:text-red-500 hover:underline'
            href='#'
            onClick={() => toggleMenu('entrenamiento')}
          >
            Entrenamiento
            {screen === 'lg' || screen === 'xl' ? (
              <ChevronDown
                className={`h-3 w-3 transition-transform lg:block ${
                  activeMenu === 'entrenamiento' ? 'rotate-180' : ''
                }`}
                strokeWidth={2.5}
              />
            ) : activeMenu === 'entrenamiento' ? (
              <ChevronDown
                className='h-3 w-3 transition-transform lg:block'
                strokeWidth={2.5}
              />
            ) : (
              <ChevronRight
                className='h-3 w-3 transition-transform lg:block'
                strokeWidth={2.5}
              />
            )}
          </a>

          {activeMenu === 'entrenamiento' && (
            <div className='lg:absolute lg:mt-4 lg:w-64 lg:bg-black-2 md:bg-black-3 lg:p-2 lg:shadow-lg z-10'>
              <ul className='space-y-4'>
                <li className='space-y-4'>
                  <h3 className='font-bold'>Eventos</h3>
                  <div className='flex items-start'>
                    <img
                      alt='Opción 1'
                      className='h-10 w-10'
                      src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FIcono%20cara.svg?alt=media&token=07a8e8e3-7c4c-416f-9462-9d116a5d2e99'
                    />
                    <div className='ml-3'>
                      <p className='font-bold'>Lorem ipsum dolor</p>
                      <p className='text-sm text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vel egestas dolor, nec dignissim metus.
                      </p>
                    </div>
                  </div>
                </li>
                <li className='space-y-4'>
                  <h3 className='font-bold'>Webinars</h3>
                  <div className='flex items-start'>
                    <img
                      alt='Opción 1'
                      className='h-10 w-10 overflow-visible'
                      src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FGroup%20633047.svg?alt=media&token=ce02d28a-dfdd-4f4c-8e89-8944651d3a12'
                    />
                    <div className='ml-3'>
                      <p className='font-bold'>Lorem ipsum dolor</p>
                      <p className='text-sm text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vel egestas dolor, nec dignissim metus.
                      </p>
                    </div>
                  </div>
                </li>
                <li className='space-y-4'>
                  <h3 className='font-bold'>Talleres</h3>
                  <div className='flex items-start'>
                    <img
                      alt='Opción 1'
                      className='h-10 w-10'
                      src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FIcono%20libro.svg?alt=media&token=e668d076-74d4-4440-b444-938ab4ca08c4'
                    />
                    <div className='ml-3'>
                      <p className='font-bold'>Lorem ipsum dolor</p>
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
          className='flex flex-grow items-center lg:justify-center md:item-start gap-2 py-2 pr-4 font-medium text-blue-7 hover:text-red-500 hover:underline'
          href='#'
        >
          Documentación
        </a>

        <a
          className='flex flex-grow items-center lg:justify-center md:item-start gap-2 py-2 pr-4 font-medium text-blue-7 hover:text-red-500 hover:underline'
          href='#'
        >
          Novedades
        </a>
      </>
    )
  }

  return (
    <header className='bg-black-3 border-b-2 border-gray-200 font-DM'>
      <div className='container mx-auto py-4 px-4 lg:flex lg:items-center lg:justify-between'>
        <div className='scroll flex items-center justify-between lg:justify-start'>
          <a href='#' className='overflow-visible'>
            <img
              alt='logo'
              className='h-7 px-1'
              src='https://firebasestorage.googleapis.com/v0/b/scrum-latam-imgs.appspot.com/o/navbar%2FScrum%20logo%20principal.svg?alt=media&token=d8cce1e3-c821-4e52-9596-289f17c63203'
            />
          </a>

          {/* Enlace de navegación visible en pantallas pequeñas */}
          {(screen === 'sm' || screen === 'md') && (
            <div className='flex flex-row items-center mt-4'>
              <div className='space-x-6 flex items-center'>
                <a
                  className='block text-blue-7 hover:text-red-400 p-2 flex items-center'
                  href='#'
                >
                  <User className='h-4 mr-2' />
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
          <button
            onClick={toggleNav}
            className='block lg:hidden p-1 rounded text-red-500 focus:outline-none focus:bg-black-3'
          >
            <Menu className={`w-6 h-6 ${openNav ? 'hidden' : 'block'}`} />
            <X className={`w-6 h-6 ${openNav ? 'block' : 'hidden'}`} />
          </button>
        </div>

        {/* Enlace de navegación visible en pantallas medianas y grandes */}
        <nav className='hidden lg:flex overflow-auto space-x-7 z-10'>
          {navList()}
        </nav>

        {/* Menú de navegación para móviles */}
        <div
          className={`${
            openNav ? '' : 'hidden'
          } mt-4 bg-black-3 flex flex-col gap-4 p-6 rounded lg:hidden`}
        >
          {navList()}
        </div>
        {/* Contenedor de botones en pantallas medianas y grandes */}
        {(screen === 'lg' || screen === 'xl') && (
          <div className='hidden lg:flex flex-row items-center mt-2'>
            <div className='space-x-6 flex items-center'>
              <a
                className='text-blue-7 hover:text-red-400 p-2 flex items-center'
                href='#'
              >
                <User className='h-4 mr-2' />
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
