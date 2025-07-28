'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { iconMap } from '@/utils/iconsMap'

interface Route {
  id: number
  name: string
  image: string
  link: string
  type: string
}

interface DesktopSidebarProps {
  routes: Route[]
}

export const MobileTabBar: React.FC<DesktopSidebarProps> = ({ routes }) => {
  const pathname = usePathname()

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 flex h-[79px] justify-around border-t bg-white md:hidden'>
      {routes.map((route) => {
        const Icon = iconMap[route.type]
        const isActive = pathname === route.link

        return (
          <Link
            key={route.id}
            href={route.link}
            className={`flex flex-col items-center justify-center px-2 py-2 ${
              isActive
                ? 'text-[#FE2E00]'
                : 'text-[#072356] hover:text-[#FE2E00]'
            }`}
          >
            {Icon && <Icon className='h-5 w-5' strokeWidth={2.5} />}
            <span
              className={`mt-1 text-center font-roboto text-base font-medium leading-[24.485px] tracking-[0.122px] ${
                isActive ? 'text-[#FE2E00]' : ''
              }`}
            >
              {route.name}
            </span>

            {/* Línea activa abajo */}
            <div
              className={`absolute bottom-0 h-[4px] w-24 rounded-full bg-[#FE2E00] ${
                isActive ? 'bg-[#FE2E00]' : 'bg-transparent'
              }`}
            />
          </Link>
        )
      })}
    </div>
  )
}
