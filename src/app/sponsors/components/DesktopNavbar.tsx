'use client'

import { images } from '@/data/images_url'
import React from 'react'
import Image from 'next/image'

export const DesktopNavbar = () => {
  return (
    <div className='flex h-[107px] justify-between border border-[#000000] pl-12 pr-9'>
      <div className='flex items-center gap-[22px]'>
        <span className='flex font-darker-grotesque text-[38px] font-bold text-[#082965]'>
          Dashboard
        </span>
      </div>
      <div className='flex'></div>
    </div>
  )
}
