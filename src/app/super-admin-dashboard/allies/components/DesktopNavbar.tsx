'use client'

import { images } from '@/data/images_url'
import React from 'react'
import Image from 'next/image'

export const DesktopNavbar = () => {
  return (
    <div className='flex h-[107px] justify-between border border-[#000000] pl-12 pr-9'>
      <div className='flex items-center gap-[22px]'>
        <Image
          alt='logo'
          className='flex'
          height={67}
          src={images.superadmin[0]}
          width={60}
        />
        <span className='flex font-darker-grotesque text-[38px] font-bold text-[#082965]'>
          Dashboard
        </span>
      </div>
      <div className='flex'>
        <Image
          alt='settings'
          className='flex'
          height={41}
          src={images.superadmin[1]}
          width={41}
        />
      </div>
    </div>
  )
}
