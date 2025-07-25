'use client'

import { ChevronDown, ChevronRight } from 'react-feather'
import { darkerGrotesque, roboto } from '@/fonts'
import { usePathname } from 'next/navigation'
import { useTypeScreen } from '@/hooks'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import HistoryIcon from '@/assets/navbarHistoryIcon'
import SquadIcon from '@/assets/navbarSquadIcon'
import InfoIcon from '@/assets/navbarInfoIcon'

export const Navlist: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('')
  const screen = useTypeScreen()
  const pathname = usePathname()
  const router = useRouter()

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
    <div className='flex flex-col items-start px-6 md:gap-12 lg:flex-row lg:items-center'>
      <div
        className={`${darkerGrotesque.variable} w-full font-darker-grotesque lg:w-auto`}
      >
        <Link
          href='/'
          className={`${darkerGrotesque.variable} md:item-start flex items-center gap-2 border-b-2 border-gray-200 py-2 pr-4 text-[16px] font-darker-grotesque-600 md:text-[26px] ${
            pathname === '/' ? 'text-orange-500' : 'text-blue-7'
          } hover:text-orange-500 lg:justify-center lg:border-b-0`}
        >
          Inicio
        </Link>
      </div>
      <div
        className={`menu-container ${darkerGrotesque.variable} flex w-full items-center border-b-2 border-gray-200 font-darker-grotesque lg:w-auto lg:border-b-0`}
        onClick={() => router.push('/activities')}
      >
        <a
          className={`flex cursor-pointer items-center gap-2 py-2 pr-4 text-[16px] font-darker-grotesque-600 text-blue-7 md:text-[26px] ${
            pathname === '/activities' ? 'text-red-400' : 'text-blue-7'
          } hover:text-red-400`}
        >
          Actividades
        </a>
      </div>
      <div
        className={`menu-container ${darkerGrotesque.variable} py-full h-full w-full flex-grow border-b-2 border-gray-200 font-darker-grotesque lg:w-auto lg:border-b-0`}
        onClick={() => toggleMenu('comunidad')}
      >
        <div
          className={`flex cursor-pointer items-center gap-2 py-2 pr-4 text-[16px] font-darker-grotesque-600 md:text-[26px] ${
            pathname === '/history' ||
            pathname === '/community/squads' ||
            pathname === '/onboarding'
              ? 'text-red-400'
              : 'text-blue-7'
          } ${
            screen === 'sm' || screen === 'md'
              ? 'justify-between'
              : 'justify-center'
          } ${activeMenu === 'comunidad' ? 'text-red-400' : ''} hover:text-orange-500`}
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
          <div
            className={`${roboto.variable} right-[40%] z-10 rounded-b-xl rounded-tl-xl border-2 border-[#08296580] md:bg-black-3 lg:absolute lg:mt-0 lg:w-[300px] lg:bg-black-2 lg:p-6 lg:shadow-lg`}
          >
            <ul className='space-y-4'>
              <li className='space-y-4 py-2'>
                <Link href='/history'>
                  <div className='flex items-center'>
                    <HistoryIcon
                      className={`h-6 w-6 text-[#082965] ${pathname === '/history' ? 'text-[#FE2E00]' : ''}`}
                    />
                    <div className='ml-3'>
                      <p
                        className={`font-roboto md:text-[16px] ${pathname === '/history' ? 'text-[#FE2E00]' : 'text-[#082965]'}`}
                      >
                        Nuestros inicios
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <Link href='/community/squads'>
                <li className='space-y-4 py-2'>
                  <div className='flex items-center'>
                    <SquadIcon
                      className={`h-6 w-6 text-[#082965] ${pathname === '/community/squads' ? 'text-[#FE2E00]' : ''}`}
                    />
                    <div className='ml-3'>
                      <p
                        className={`font-roboto md:text-[16px] ${pathname === '/community/squads' ? 'text-[#FE2E00]' : 'text-[#082965]'}`}
                      >
                        Los Squads
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
              <Link href='/community/products&services'>
                <li className='space-y-4 py-2'>
                  <div className='flex items-start'>
                    <InfoIcon
                      className={`mt-1 h-7 w-7 text-[#082965] ${pathname === '/community/products&services' ? 'text-[#FE2E00]' : ''}`}
                    />
                    <div className='md:ml-3'>
                      <p
                        className={`font-roboto md:text-[16px] ${pathname === '/community/products&services' ? 'text-[#FE2E00]' : 'text-[#082965]'}`}
                      >
                        Productos y Servicios de Sponsors
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
