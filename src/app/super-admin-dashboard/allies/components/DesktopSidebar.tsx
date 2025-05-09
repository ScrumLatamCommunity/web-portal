'use client'

import React from 'react'
import { ChevronRight } from 'react-feather'
import { SuperAdminDashboard } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Route {
  id: number
  name: string
  image: string
  link: string
}

interface DesktopSidebarProps {
  routes: Route[]
}

export const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ routes }) => {
  const pathname = usePathname()

  return (
    <div className='flex w-[20%] flex-col items-center gap-4 border-r border-[#082965] py-6'>
      {routes.map((item: SuperAdminDashboard) => (
        <Link
          className='flex w-full justify-center px-4'
          href={item.link}
          key={item.id}
        >
          <div
            className={`flex w-full items-center justify-between rounded-2xl border border-[#000000] px-3 py-2 transition-colors duration-200 hover:bg-gray-50 hover:text-[#FD3600] ${
              pathname === item.link ? 'bg-[#FD3600] text-white' : ''
            }`}
          >
            <div className='flex items-center gap-3'>
              <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center'>
                <Image
                  alt='icono'
                  className='h-6 w-6'
                  height={24}
                  src={item.image}
                  width={24}
                />
              </div>
              <span className='font-darker-grotesque text-base font-semibold'>
                {item.name}
              </span>
            </div>
            <ChevronRight className='h-5 w-5 flex-shrink-0' />
          </div>
        </Link>
      ))}
    </div>
  )
}
