'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { iconMap } from '@/utils/iconsMap'
import { ChevronRight } from 'react-feather'

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

export const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ routes }) => {
  const pathname = usePathname()

  return (
    <div className='hidden w-[20%] flex-col items-center gap-4 border-r border-[#082965] py-6 md:flex'>
      {routes.map((route) => {
        const Icon = iconMap[route.type]
        const isActive = pathname === route.link
        return (
          <Link
            className='flex w-full justify-center px-4'
            href={route.link}
            key={route.id}
          >
            <div
              className={`flex w-full items-center justify-between rounded-2xl border border-[#000000] px-3 py-2 transition-colors duration-200 hover:bg-gray-50 hover:text-[#FD3600] ${
                pathname === route.link ? 'bg-[#345081] text-white' : ''
              }`}
            >
              <div className='flex items-center gap-3'>
                <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center'>
                  {Icon && <Icon className='h-5 w-5' strokeWidth={2.5} />}
                </div>
                <span className='font-darker-grotesque text-base font-semibold'>
                  {route.name}
                </span>
              </div>
              <ChevronRight className='h-5 w-5 flex-shrink-0' />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
