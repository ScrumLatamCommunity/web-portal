'use client'

import React from 'react'
import { ChevronRight } from 'react-feather'
import { superAdminDashboard, SuperAdminDashboard } from '@/data/data'
import Image from 'next/image'

export const DesktopSidebar = () => {
  return (
    <div className='flex w-[17%] flex-col items-center gap-2 border-r border-[#082965] pt-[52px]'>
      {superAdminDashboard.map((item: SuperAdminDashboard) => (
        <div
          key={item.id}
          className='flex w-[86%] items-center justify-between gap-4 rounded-2xl border border-[#000000] py-[18px] pl-[23px] pr-[16px]'
        >
          <div className='flex'>
            <Image
              alt='icono'
              className='h-8 w-8'
              height={33}
              src={item.image}
              width={33}
            />
          </div>
          <span className='flex flex-1 justify-start font-darker-grotesque text-[16px] font-bold'>
            {item.name}
          </span>
          <ChevronRight height={20} width={20} />
        </div>
      ))}
    </div>
  )
}
